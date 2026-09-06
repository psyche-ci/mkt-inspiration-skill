#!/usr/bin/env node
import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = await (async () => {
  const candidates = [path.join(root, "public"), path.join(root, "app", "public")];
  for (const candidate of candidates) {
    try {
      await readFile(path.join(candidate, "mkt-inspiration-grid-preview.html"));
      return candidate;
    } catch { /* try the next layout */ }
  }
  return candidates[0];
})();
const port = Number(process.env.MKT_PORT || 8788);
const providerBases = {
  deepseek: "https://api.deepseek.com/v1",
};
const FETCH_TIMEOUT_MS = 15_000;
const AI_TIMEOUT_MS = 25_000;

const fetchWithTimeout = async (url, options = {}, timeoutMs = FETCH_TIMEOUT_MS) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (error?.name === "AbortError") throw new Error(`请求超时（${Math.round(timeoutMs / 1000)} 秒）：${url}`);
    throw error;
  } finally {
    clearTimeout(timer);
  }
};

const json = (res, body, status = 200) => {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "access-control-allow-origin": "*",
  });
  res.end(payload);
};

const readBody = async (req) => {
  let raw = "";
  for await (const chunk of req) raw += chunk;
  if (raw.length > 2_000_000) throw new Error("request too large");
  return raw ? JSON.parse(raw) : {};
};

const attr = (tag, name) => tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']+)`, "i"))?.[1];
const imageCandidates = (html, pageUrl) => {
  const result = [];
  const add = (value) => {
    if (!value) return;
    const cleaned = String(value).replace(/&amp;/g, "&").trim();
    if (!cleaned || /^data:image\//i.test(cleaned) || /(?:placeholder|spacer|blank|loadimg)\.(?:gif|png|jpe?g)(?:[?#]|$)/i.test(cleaned)) return;
    try {
      const absolute = new URL(cleaned, pageUrl).href;
      if (!result.includes(absolute)) result.push(absolute);
    } catch { /* ignore malformed URLs */ }
  };
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = match[0];
    const property = attr(tag, "property") || attr(tag, "name");
    if (/^(?:og:image|twitter:image|twitter:image:src)$/i.test(property || "")) add(attr(tag, "content"));
  }
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    add(attr(tag, "data-original") || attr(tag, "data-src") || attr(tag, "data-lazy-src") || attr(tag, "src"));
    const srcset = attr(tag, "srcset");
    if (srcset) add(srcset.split(",")[0]?.trim().split(/\s+/)[0]);
  }
  for (const match of html.matchAll(/(?:https?:)?\/\/[^"'\s<>]+?\.(?:jpe?g|png|webp|gif)(?:\?[^"'\s<>]*)?/gi)) add(match[0]);
  return result.slice(0, 16);
};

const fetchPage = async (url) => {
  if (!/^https?:\/\//i.test(url)) throw new Error("valid http(s) URL required");
  const profiles = [
    { "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128.0 Safari/537.36", accept: "text/html,application/xhtml+xml", "accept-language": "zh-CN,zh;q=0.9,en;q=0.8" },
    { "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Version/17.5 Mobile/15E148 Safari/604.1", accept: "text/html,application/xhtml+xml", "accept-language": "zh-CN,zh;q=0.9,en;q=0.8" },
    { "user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)", accept: "text/html,application/xhtml+xml" },
  ];
  let lastError = null;
  for (const headers of profiles) {
    try {
      const response = await fetchWithTimeout(url, { headers });
      if (response.ok) return response.text();
      lastError = new Error(`source page HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("source page unavailable");
};

const fetchImageData = async (url, referer = "") => {
  if (!/^https?:\/\//i.test(url)) throw new Error("valid image URL required");
  const profiles = [
    { "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128.0 Safari/537.36", accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8" },
    { "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Version/17.5 Mobile/15E148 Safari/604.1", accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8" },
  ];
  let lastError = null;
  for (const headers of profiles) {
    if (referer) headers.referer = referer;
    try {
      const response = await fetchWithTimeout(url, { headers }, 20_000);
      if (!response.ok) {
        lastError = new Error(`image HTTP ${response.status}`);
        continue;
      }
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length > 12_000_000) throw new Error("image too large");
      const contentType = response.headers.get("content-type") || "image/jpeg";
      if (!/^image\//i.test(contentType)) throw new Error("source did not return an image");
      return `data:${contentType};base64,${bytes.toString("base64")}`;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("image unavailable");
};

const cleanText = (html) => html
  .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&")
  .replace(/\s+/g, " ").trim();

const normalizeAiResult = (value) => {
  let candidate = value;
  if (Array.isArray(candidate)) {
    candidate = candidate.map((part) => part && typeof part === "object" ? (part.text || part.content || "") : part).filter(Boolean).join("\n");
  }
  if (typeof candidate === "string") {
    const stripped = candidate.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    try { candidate = JSON.parse(stripped); } catch {
      const start = stripped.indexOf("{");
      const end = stripped.lastIndexOf("}");
      try { candidate = start >= 0 && end > start ? JSON.parse(stripped.slice(start, end + 1)) : {}; } catch { candidate = {}; }
    }
  }
  for (let depth = 0; depth < 3 && candidate && typeof candidate === "object"; depth += 1) {
    if (candidate.result && typeof candidate.result === "object") candidate = candidate.result;
    else if (candidate.data && typeof candidate.data === "object") candidate = candidate.data;
    else if (candidate.output && typeof candidate.output === "object") candidate = candidate.output;
    else if (candidate.message && typeof candidate.message === "object") candidate = candidate.message;
    else break;
  }
  const asText = (item) => Array.isArray(item)
    ? item.map((entry) => typeof entry === "object" ? (entry.name || entry.label || entry.text || entry.value || "") : entry).filter(Boolean).join("、")
    : item && typeof item === "object" ? String(item.name || item.label || item.text || item.value || "").trim()
    : typeof item === "string" ? item.trim() : "";
  const pick = (...keys) => keys.map((key) => asText(candidate?.[key])).find((item) => item) || "";
  const analysis = pick("analysis", "解读", "新闻解读", "趋势解读");
  return {
    insight: pick("insight", "创意洞察", "洞察") || analysis,
    content: pick("content", "创意内容", "内容") || analysis,
    form: pick("form", "formats", "creativeForm", "creative_form", "format", "创意形式", "形式", "创意类型"),
  };
};

async function api(pathname, input) {
  if (pathname === "/api/fetch-page") {
    const url = String(input.url || "").trim();
    const html = await fetchPage(url);
    return { ok: true, url, html };
  }
  if (pathname === "/api/find-cover") {
    const url = String(input.url || "").trim();
    const html = await fetchPage(url);
    const candidates = imageCandidates(html, url);
    if (!candidates.length) throw new Error("no verifiable image found on source page");
    return { ok: true, url, candidates };
  }
  if (pathname === "/api/fetch-cover") {
    const url = String(input.url || input.sourceUrl || "").trim();
    const html = await fetchPage(url);
    const candidates = imageCandidates(html, url);
    if (!candidates.length) throw new Error("no verifiable image found on source page");
    let lastError = null;
    for (const candidate of candidates) {
      try {
        const dataUrl = await fetchImageData(candidate, url);
        return { ok: true, url, sourceUrl: candidate, dataUrl };
      } catch (error) {
        lastError = error;
      }
    }
    throw new Error(`source page images could not be downloaded${lastError ? `: ${lastError.message}` : ""}`);
  }
  if (pathname === "/api/fetch-image") {
    const url = String(input.url || "").trim();
    return { ok: true, dataUrl: await fetchImageData(url, String(input.referer || "").trim()) };
  }
  if (pathname !== "/api/ai-read") throw new Error("Not found");
  const apiKey = String(input.apiKey || "").trim();
  const provider = "deepseek";
  // Never let browser input choose the upstream URL: forwarding the user's key
  // to an arbitrary baseUrl would turn this local helper into an open proxy.
  const baseUrl = providerBases.deepseek;
  const model = String(input.model || "deepseek-v4-flash");
  const sourceUrl = String(input.sourceUrl || "").trim();
  const supplied = String(input.content || "").trim();
  const isTest = input.test === true;
  if (!apiKey) throw new Error("apiKey is required");
  if (!/^[\x00-\x7F]+$/.test(apiKey)) throw new Error("apiKey must contain only ASCII token characters");
  if (!isTest && !supplied) throw new Error("content is required");
  let sourceText = "";
  let sourceFetchError = "";
  if (!isTest && /^https?:\/\//i.test(sourceUrl)) {
    if (supplied.length >= 120) {
      // The upload page has already fetched and stripped this URL's HTML.
      // Re-fetching it here doubled latency and could hang on anti-bot pages.
      sourceText = `原文正文（页面已核验）：${supplied.slice(0, 30000)}`;
    } else {
      try {
        const html = await fetchPage(sourceUrl);
        const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
        const body = cleanText(html);
        if (body.length >= 120) sourceText = `原文标题：${cleanText(title)}\n原文正文：${body.slice(0, 30000)}`;
        else sourceFetchError = "原文正文不足";
      } catch (error) {
        sourceFetchError = error instanceof Error ? error.message : String(error);
      }
    }
  }
  if (!isTest && /^https?:\/\//i.test(sourceUrl) && !sourceText && supplied.length < 120) throw new Error(`原文页面无法读取或正文不足，且卡片核验信息不足：${sourceFetchError || "请补充正文"}`);
  if (!isTest && /^https?:\/\//i.test(sourceUrl) && !sourceText) sourceText = `原文页面暂不可读；以下为已核验卡片信息，请仅据此解读，不要补写未提供事实。`;
  const prompt = `${sourceText ? sourceText + "\n\n" : ""}卡片已核验信息：\n${supplied}\n\n请只依据以上原文和已核验信息输出 JSON，字段必须是 insight、content、form。insight 和 content 各写 2-3 句具体、连贯的完整句子，必须完整输出，不要用省略号或按页面行数截断，讲清用户问题、核心策略、实际执行和品牌如何进入，不要堆砌背景。form 只返回 2-5 个与原文对应的具体执行关键词，用“、”分隔，例如“事件营销、户外广告”或“TVC、平面海报”，不要写解释长句，也禁止使用“品牌内容”“营销活动”等泛化词。禁止随机生成、把导航词或标签当正文；原文不足时明确写“原文未说明”。只返回 JSON，不要 Markdown。`;
  const callModel = async (userPrompt, temperature) => {
    const upstream = await fetchWithTimeout(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model, temperature, max_tokens: 8192, thinking: { type: "disabled" }, messages: [{ role: "system", content: isTest ? "只回复 OK。" : "你是营销创意分析师，严格遵守 JSON 和事实边界。不要输出任何推理过程或解释，只返回最终 JSON。" }, { role: "user", content: userPrompt }] }),
    }, AI_TIMEOUT_MS);
    const payload = await upstream.json();
    if (!upstream.ok) throw new Error(payload?.error?.message || `upstream HTTP ${upstream.status}`);
    return payload;
  };
  const payload = await callModel(prompt, 0.3);
  if (isTest) return { ok: true, model };
  let result = normalizeAiResult(payload?.choices?.[0]?.message?.content || "{}");
  if (!result.insight || !result.content || !result.form) {
    const retryPrompt = `${prompt}\n\n上一次输出无法解析或缺少字段。请重新输出，必须是单个合法 JSON 对象，且 insight、content、form 三个字段都必须存在并且是非空字符串；form 用“、”分隔 2-5 个具体执行形式。不要 Markdown、不要解释。`;
    const retryPayload = await callModel(retryPrompt, 0);
    result = normalizeAiResult(retryPayload?.choices?.[0]?.message?.content || "{}");
  }
  const hasAnyResult = Boolean(result.insight || result.content || result.form);
  if (!hasAnyResult) throw new Error("模型没有返回可解析的解读结果，请重试");
  result = {
    insight: result.insight || "原文未说明",
    content: result.content || "原文未说明",
    form: result.form || "原文未说明",
  };
  return { ok: true, result, model };
}

const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf" };

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "127.0.0.1"}`);
    if (req.method === "OPTIONS") { res.writeHead(204, { "access-control-allow-origin": "*", "access-control-allow-methods": "GET,POST,OPTIONS", "access-control-allow-headers": "content-type" }); res.end(); return; }
    if (req.method === "POST" && url.pathname.startsWith("/api/")) { json(res, await api(url.pathname, await readBody(req))); return; }
    if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405); res.end(); return; }
    const relative = decodeURIComponent(url.pathname === "/" ? "/mkt-inspiration-grid-preview.html" : url.pathname);
    const file = path.resolve(publicDir, `.${relative}`);
    if (!file.startsWith(publicDir + path.sep)) { res.writeHead(403); res.end(); return; }
    const body = await readFile(file);
    res.writeHead(200, { "content-type": mime[path.extname(file).toLowerCase()] || "application/octet-stream", "cache-control": "no-store" });
    if (req.method === "HEAD") res.end(); else res.end(body);
  } catch (error) { json(res, { ok: false, error: error instanceof Error ? error.message : String(error) }, 400); }
});

// 端口被旧进程占用时自动顺延，避免 Skill 已生成页面却无法打开。
const listenOnAvailablePort = (candidate, attempts = 0) => {
  const chosen = candidate + attempts;
  const onError = (error) => {
    server.off("error", onError);
    if ((error?.code === "EADDRINUSE" || error?.code === "EPERM") && attempts < 20) {
      listenOnAvailablePort(candidate, attempts + 1);
      return;
    }
    throw error;
  };
  server.once("error", onError);
  server.listen(chosen, "127.0.0.1", () => {
    server.off("error", onError);
    console.log(`MKT Inspiration running at http://127.0.0.1:${chosen}/mkt-inspiration-grid-preview.html`);
  });
};

listenOnAvailablePort(port);

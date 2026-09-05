#!/usr/bin/env node
import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
// The skill package keeps the web app under app/public, while the standalone
// workspace keeps it under public. Resolve both layouts so the launcher works
// after installation as well as during local development.
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
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 MKT-Inspiration/1.0", accept: "text/html,application/xhtml+xml" } });
  if (!response.ok) throw new Error(`source page HTTP ${response.status}`);
  return response.text();
};

const cleanText = (html) => html
  .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&")
  .replace(/\s+/g, " ").trim();

async function api(pathname, input) {
  if (pathname === "/api/find-cover") {
    const url = String(input.url || "").trim();
    const html = await fetchPage(url);
    const candidates = imageCandidates(html, url);
    if (!candidates.length) throw new Error("no verifiable image found on source page");
    return { ok: true, url, candidates };
  }
  if (pathname === "/api/fetch-image") {
    const url = String(input.url || "").trim();
    if (!/^https?:\/\//i.test(url)) throw new Error("valid image URL required");
    const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 MKT-Inspiration/1.0", accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8" } });
    if (!response.ok) throw new Error(`image HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length > 12_000_000) throw new Error("image too large");
    return { ok: true, dataUrl: `data:${response.headers.get("content-type") || "image/jpeg"};base64,${bytes.toString("base64")}` };
  }
  if (pathname !== "/api/ai-read") throw new Error("Not found");
  const apiKey = String(input.apiKey || "").trim();
  const provider = "deepseek";
  const baseUrl = String(input.baseUrl || providerBases.deepseek).replace(/\/$/, "");
  const model = String(input.model || "deepseek-v4-flash");
  const sourceUrl = String(input.sourceUrl || "").trim();
  const supplied = String(input.content || "").trim();
  const isTest = input.test === true;
  if (!apiKey) throw new Error("apiKey is required");
  if (!isTest && !supplied) throw new Error("content is required");
  let sourceText = "";
  if (!isTest && /^https?:\/\//i.test(sourceUrl)) {
    const html = await fetchPage(sourceUrl);
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
    const body = cleanText(html);
    if (body.length < 120) throw new Error("source page正文不足，无法进行可靠解读");
    sourceText = `原文标题：${cleanText(title)}\n原文正文：${body.slice(0, 30000)}`;
  }
  if (!isTest && /^https?:\/\//i.test(sourceUrl) && !sourceText) throw new Error("原文页面无法读取或正文不足，未生成猜测内容");
  const prompt = `${sourceText ? sourceText + "\n\n" : ""}卡片已核验信息：\n${supplied}\n\n请只依据以上原文和已核验信息输出 JSON，字段必须是 insight、content、form。insight 和 content 各写 2-3 句具体、连贯的话，控制在卡片显示不超过三行，讲清用户问题、核心策略、实际执行和品牌如何进入，不要堆砌背景。form 只返回 2-5 个与原文对应的具体执行关键词，用“、”分隔，例如“事件营销、户外广告”或“TVC、平面海报”，不要写解释长句，也禁止使用“品牌内容”“营销活动”等泛化词。禁止随机生成、把导航词或标签当正文；原文不足时明确写“原文未说明”。只返回 JSON，不要 Markdown。`;
  const upstream = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model, temperature: 0.3, max_tokens: 2200, messages: [{ role: "system", content: isTest ? "只回复 OK。" : "你是营销创意分析师，严格遵守 JSON 和事实边界。" }, { role: "user", content: prompt }] }),
  });
  const payload = await upstream.json();
  if (!upstream.ok) throw new Error(payload?.error?.message || `upstream HTTP ${upstream.status}`);
  if (isTest) return { ok: true, model };
  const text = payload?.choices?.[0]?.message?.content || "{}";
  const clean = String(text).replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  return { ok: true, result: JSON.parse(clean), model };
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
server.listen(port, "127.0.0.1", () => console.log(`MKT Inspiration running at http://127.0.0.1:${port}/mkt-inspiration-grid-preview.html`));

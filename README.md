# 营销灵感包（Marketing Inspiration Pack）

这是可直接安装的 Codex Skill，包含完整的 Skill 规则、来源与排序规范、HTML 输出规范、AI 读创意规范、网页模板和 agent 配置。

## 这个 Skill 是做什么的

“营销灵感包”是一个面向广告、品牌和内容团队的营销案例研究助手。它可以按固定来源抓取热点趋势、AI 新闻和营销案例，核验原文与封面，并整理成可筛选、可收藏的 MKT INSPIRATION 页面；输入自己的 API Key 后，还能让 AI 根据真实原文解读创意洞察、创意内容和具体创意形式，帮助团队快速发现、理解和复用优秀营销方法。

## 已包含网页应用

本 Skill 随附 MKT Inspiration 网页应用，位于 [`app/`](./app/)：包含页面 HTML、前端数据脚本、交互脚本和本地 AI 代理启动脚本。安装 Skill 后使用这套应用，可沿用相同的页面版式、卡片结构和 AI 读创意流程；抓取新内容时仍按同一模板渲染。API Key 由每位使用者在自己的浏览器中单独设置，仓库不包含真实 Key。

## 目录

- `SKILL.md`：Skill 主规则与触发行为
- `references/sources-and-ranking.md`：固定来源、日期核验与排序规则
- `references/html-spec.md`：页面结构与视觉实现规范
- `references/creative-reading.md`：AI 读创意输出规则
- `app/public/mkt-inspiration-grid-preview.html`：完成版 MKT INSPIRATION 九宫格页面（唯一视觉基准）
- `agents/openai.yaml`：Skill agent 配置

首次使用时由使用者在本机输入自己的 API Key。API Key 只保存在使用者当前浏览器的本地安全存储中；本仓库、Skill 文件和模板不包含任何真实 Key，也不会上传或展示完整 Key。不同使用者需要分别配置自己的 Key。

安装后请在 Codex 中安装本仓库 Skill；网页应用和本地代理按 `SKILL.md` 中的工作流运行。
# 营销灵感包（Marketing Inspiration Pack）

这是可直接安装的 Codex Skill，包含完整的 Skill 规则、来源与排序规范、HTML 输出规范、AI 读创意规范、网页模板和 agent 配置。

## 目录

- `SKILL.md`：Skill 主规则与触发行为
- `references/sources-and-ranking.md`：固定来源、日期核验与排序规则
- `references/html-spec.md`：页面结构与视觉实现规范
- `references/creative-reading.md`：AI 读创意输出规则
- `assets/report-template.html`：HTML 报告模板
- `agents/openai.yaml`：Skill agent 配置

首次使用时由使用者在本机输入自己的 API Key。API Key 只保存在使用者当前浏览器的本地安全存储中；本仓库、Skill 文件和模板不包含任何真实 Key，也不会上传或展示完整 Key。不同使用者需要分别配置自己的 Key。

安装后请在 Codex 中安装本仓库 Skill；网页应用和本地代理按 `SKILL.md` 中的工作流运行。
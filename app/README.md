# MKT Inspiration 网页应用

这里是随 Skill 一起提供的页面应用快照：

- `public/mkt-inspiration-grid-preview.html`：与你当前版本一致的九宫格页面与交互版式
- `public/*.js`：页面数据、AI 读创意交互和当前案例数据
- `start-mkt-inspiration.mjs`：本地启动脚本，提供页面服务、原文封面探测和 AI 代理接口

启动脚本默认在本机开启 `http://127.0.0.1:8788/mkt-inspiration-grid-preview.html`。API Key 由每位使用者在自己的浏览器中设置和保存，不在仓库或应用文件中。

页面的版式、卡片结构、筛选和 AI 读创意流程会与当前版本保持一致；后续抓取的新内容会继续沿用同一 HTML 模板。
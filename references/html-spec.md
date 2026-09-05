# HTML 视觉规范

采用“黑白杂志目录 / 创意情报索引”风格。页面应像一本广告创意杂志的目录页：黑色浏览器背景承托白色编辑画布，超大无衬线标题建立视觉锚点，新闻内容以一行一条的横向目录列表呈现。

## 视觉语言

- 外层背景使用纯黑 `#000000`；主内容容器使用白色 `#FFFFFF`，居中显示。
- UI 主色只使用黑、白、灰。彩色只能来自原文封面图或少量状态强调，不要再使用大面积彩色卡片。
- 主标题使用超粗无衬线字体，英文可用 `AD INSPIRATION`，字号极大，接近画布宽度。
- 分割线使用 1px 浅灰线，承担层次划分。不要使用厚重描边、拟物阴影、手绘边框或胶囊式大按钮作为主视觉。
- 整体气质应接近：杂志目录、编辑部档案、作品索引、极简情报流。

## 首页布局

- 内容最大宽度约 760px；白色画布左右内边距约 28px，整体保持参考图的窄版杂志页比例，不要铺满浏览器宽度。
- 顶部 Hero 包含：
  - 顶部细导航线：左侧 `AD INSPIRATION PACK`，右侧 `DAILY / LIBRARY / AI READING`；
  - 单行超大主标题，例如 `INSPIRATION`，不要拆成两行；
  - 不展示大段说明文案。
- Hero 下方的分类和搜索必须接在同一张白色画布内，不能单独形成一块白色模块，也不能被黑色背景割裂。分类筛选使用小字导航形态，选中态用细下划线，不使用大面积彩色按钮。
- 今日抓取列表必须是单列目录流。每条内容独占一行，禁止两条并排。
- 每条新闻使用五列结构：

  `编号 / 原文封面图 / 标题与来源 / 极短摘要或元信息 / 操作区`

- 每条列表项之间用 1px 横线分隔，不使用传统卡片边框。
- 首页不要在列表上方展示解释性文案，例如“每日抓取内容如何展示”“点击后如何展开”等说明。交互通过按钮和动效表达。

## 原文封面图规则

- 每条新闻必须尝试从原文链接中抓取可核验封面图，优先级：
  1. 原文 `og:image` / `twitter:image`；
  2. 原文正文首张与案例直接相关的图片；
  3. 视频平台可见封面图；
  4. 品牌官网或原始发布页内同一案例的主视觉图。
- 图片来源必须来自该条新闻的原文、原始发布方或同一案例可核验页面。不得使用 AI 生成图、图库图、相似风格图、随意搜索到的品牌图或无关配图。
- 若没有可核验封面图，显示中性占位：`原文未提供可核验封面`。不要伪造封面。
- 图片标签建议：

```html
<img class="cover" src="..." alt="案例原文封面：标题" loading="lazy">
```

- 无图占位建议：

```html
<div class="cover cover-missing">原文未提供<br>可核验封面</div>
```

## 新闻行组件

每条新闻建议使用以下结构：

```html
<article class="digest-row" data-category="Video">
  <div class="issue-no">01</div>
  <!-- 可核验图片；没有则使用 cover-missing -->
  <img class="cover" src="..." alt="案例原文封面：..." loading="lazy">
  <div>
    <div class="meta"><span class="badge">Video</span><span class="badge rank">今日必看 #1</span><span>来源 · 日期</span></div>
    <h2>标题</h2>
    <div class="tags"><span class="tag">标签</span></div>
    <div class="save-box"><span>选择收藏夹：</span><button>节点向</button><button>内容向</button><button>形式向</button><button>视觉向</button></div>
  </div>
  <p class="summary">50–100 字摘要。</p>
  <div class="actions">
    <a class="link" href="..." target="_blank" rel="noopener noreferrer">查看原文</a>
    <button class="read-toggle" type="button">AI 读创意</button>
    <button class="save-toggle" type="button">收藏</button>
  </div>
  <aside class="ai-reading">
    <!-- 点击 AI 读创意后展开 -->
  </aside>
</article>
```

## AI 读创意交互

- AI 读创意内容默认不展示。
- 点击 `AI 读创意` 后，在当前新闻行下方展开 `ai-reading` 面板。
- 展开动效使用高度、透明度和位移过渡：
  - 收起：`max-height: 0; opacity: 0; transform: translateY(-8px);`
  - 展开：`max-height: 430px; opacity: 1; transform: translateY(0);`
- 面板内容建议拆成三列：创意洞察、创意内容、创意形式；如果内容较多，可继续包含可复用方法、适用节点、内容方向、形式方向、视觉方向。
- 必须支持 `prefers-reduced-motion: reduce`，关闭过渡动画。

## 可用性

- 正文最小 14px，摘要行高不低于 1.55。
- 原文链接使用 `target="_blank"` 和 `rel="noopener noreferrer"`。
- 分类按钮与搜索使用原生 JavaScript 完成组合筛选；无结果时展示提示。
- 移动端将五列结构折叠为三列：编号 / 封面 / 内容，摘要、操作和 AI 面板落到内容列下方。
- 不使用外部 JavaScript、字体或 CSS 依赖；所有样式和筛选脚本内嵌，确保本地直接打开可用。

## 数据表达

- 英文文章标题可保留原文副标题，但主标题应提供准确中文翻译。
- 日期统一显示为北京时间友好的格式；海外原文如有明确时区，可在 `title` 属性中保留原始时间。
- 热度依据要可追溯。只有编辑判断时显示“编辑精选”，不要显示伪精确的阅读量或评分。
- 页脚列出来源覆盖状态，并说明“时间、热度和封面图以生成时可见页面为准”。

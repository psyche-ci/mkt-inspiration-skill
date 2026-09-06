(()=>{
  const data=window.MKT_INSPIRATION_DATA||{items:[]};
  const base='./today-covers/2026-09-06/';
  const items=[
    {id:'ph-dif-20260906',title:'dif.sh：把功能开关与实验放回代码仓库',category:'AI 开发工具',summary:'用仓库内 Markdown 管理功能开关、A/B 测试和实验结论，让 coding agent 在开始任务时直接读取当前实验与历史学习。',url:'https://www.producthunt.com/products/dif-sh',cover:'01-dif.jpg',heat:'Product Hunt 当日榜 #1，343 points。',tags:['AI Coding','Feature Flags','A/B Test'],score:343},
    {id:'ph-reflexio-20260906',title:'Reflexio：让 AI Agent 从真实交互中持续改进行为',category:'AI Agent',summary:'把用户纠正、失败路径与成功结果提炼成可审计、可撤销的行为规则，在下一次交互中复用，而不只停留在对话记忆。',url:'https://www.producthunt.com/products/reflexio-2',cover:'02-reflexio.jpg',heat:'Product Hunt 当日榜 #2，265 points。',tags:['Behavioral Learning','Agent Ops','AI'],score:265},
    {id:'ph-ponytail-20260906',title:'Ponytail：把“少写代码”变成 Coding Agent 的默认策略',category:'AI Coding',summary:'在动手前依次检查是否需要、能否复用、标准库或现有依赖是否已解决问题，只有最后才生成最小新增代码。',url:'https://www.producthunt.com/products/ponytail',cover:'03-ponytail.jpg',heat:'Product Hunt 当日榜 #3，209 points。',tags:['YAGNI','Coding Agent','Developer Tools'],score:209},
    {id:'ph-hyperprobe-20260906',title:'Hyperprobe：让 AI Agent 直接调试线上运行状态',category:'可观测性',summary:'Agent 可向运行中的服务放入只读探针，捕获日志与链路未记录的变量状态，从而减少加日志、重新部署、等待复现的循环。',url:'https://www.producthunt.com/products/hyperprobe',cover:'04-hyperprobe.jpg',heat:'Product Hunt 当日榜 #4，180 points；详情页稍后显示 183 points。',tags:['Observability','Production Debugging','AI Agent'],score:180},
    {id:'ph-at8pm-20260906',title:'at8pm：到点锁定、无法重写的诚实日记',category:'个人效率',summary:'日记在用户设定的时间自动锁定，之后不能编辑；文字、方形视频与音频均通过个人 iCloud 同步，不上传第三方服务器。',url:'https://www.producthunt.com/products/at8pm',cover:'05-at8pm.jpg',heat:'Product Hunt 当日榜 #5，127 points；详情页稍后显示 128 points。',tags:['Journal','Privacy','iOS'],score:127},
    {id:'ph-experiential-20260906',title:'Experiential Labs：用真实流量训练更适配的模型',category:'AI 基础设施',summary:'开源 AI 网关支持 BYOK、自托管和千余模型，并从真实请求中学习以降低成本、推荐模型，进一步训练团队自有的专用模型。',url:'https://www.producthunt.com/products/experiential-labs',cover:'06-experiential.jpg',heat:'Product Hunt 当日榜 #6，122 points。',tags:['AI Gateway','Open Source','BYOK'],score:122},
    {id:'ph-postbox-20260906',title:'PostBox：把 MacBook 刘海变成设计发布入口',category:'社交媒体工具',summary:'把导出的设计拖到 MacBook 刘海，统一写一次文案，即可分发到 X、Bluesky、Threads、LinkedIn、Instagram、Pinterest 等平台。',url:'https://www.producthunt.com/products/postbox',cover:'07-postbox.jpg',heat:'Product Hunt 当日榜 #7，112 points。',tags:['Design Tools','Social Media','macOS'],score:112},
    {id:'ph-commutebar-20260906',title:'CommuteBar：在菜单栏直接查看实时通勤时间',category:'Mac 工具',summary:'把多个目的地的实时路况、路线比较和“即将出发”提醒放进菜单栏，并可按周期通勤自动切换目的地。',url:'https://www.producthunt.com/products/commutebar',cover:'08-commutebar.jpg',heat:'Product Hunt 当日榜 #8，105 points；详情页稍后显示 106 points。',tags:['Menu Bar','Travel','Productivity'],score:105},
    {id:'ph-queuebrick-20260906',title:'Queuebrick：更轻量的电影追踪与待看排序',category:'影视社交',summary:'搜索电影、评分、加入待看并决定下一部要看什么，以快速简洁的流程提供 Letterboxd 的替代体验。',url:'https://www.producthunt.com/products/queuebrick',cover:'09-queuebrick.jpg',heat:'Product Hunt 当日榜 #9，99 points。',tags:['Movies','Social','Watchlist'],score:99},
    {id:'ph-retold-20260906',title:'Retold：把家人的真实声音变成手绘故事片',category:'家庭内容',summary:'录下回忆或导入旧语音，保留讲述者原声，再根据人物、地点与细节生成手绘影片和可阅读的故事书。',url:'https://www.producthunt.com/products/retold',cover:'10-retold.jpg',heat:'Product Hunt 当日榜 #10，95 points；详情页稍后显示 97 points。',tags:['Family','Audio','Story Film'],score:95},
    {id:'ph-gitwarren-20260906',title:'GitWarren：提交前与 Coding Agent 做本地代码审查',category:'代码审查',summary:'直接审查工作树中的已提交、暂存、未暂存和未跟踪改动，通过 MCP 连接 AI，把行内评论保存在对应变更线程中。',url:'https://www.producthunt.com/products/gitwarren',cover:'11-gitwarren.jpg',heat:'Product Hunt 当日榜 #11，90 points。',tags:['Code Review','MCP','Open Source'],score:90},
    {id:'ph-brickforger-20260906',title:'BrickForgerAI：把一句提示变成真正能搭建的积木模型',category:'AI 设计',summary:'先生成形状，再用真实兼容零件进行体素化、拼接与结构分析，最终输出零件清单、LDraw 文件和分步 PDF。',url:'https://www.producthunt.com/products/brickforgerai',cover:'12-brickforger.jpg',heat:'Product Hunt 当日榜 #12，88 points。',tags:['3D Modeling','Toys','Generative AI'],score:88}
  ].map((item,index)=>({
    ...item,
    contentType:'热点趋势',source:'Product Hunt',publishedAt:'2026-09-06',observedAt:'2026-09-06T13:35:00+08:00',
    originalUrl:item.url,localCoverPath:base+item.cover,coverUrl:base+item.cover,
    evidenceLabel:'当日榜单依据',evidenceText:item.heat,accessNote:'榜位与分数为刷新时快照，之后可能继续变化。',
    views:['today'],verificationStatus:'verified_list_and_detail',viralIndex:{timeliness:20,innovation:20,virality:item.score,total:item.score},
    reading:{analysis:'点击“AI帮你读”后，页面会读取原文并使用你在浏览器本地设置的 DeepSeek API Key 生成趋势解读。'}
  }));
  data.generatedAt='2026-09-06T13:35:00+08:00';
  data.reportDates=['2026-09-06'];
  data.items=[...(data.items||[]).filter(item=>!(item.contentType==='热点趋势'&&item.views?.includes('today'))),...items];
  data.coverage={
    category:'热点趋势',date:'2026-09-06',
    sources:[
      {name:'TikTok Creative Center',status:'页面异常待补核验',detail:'真实趋势页可访问，但未返回可读取的当日条目、日期与指标。'},
      {name:'Pinterest Trends',status:'页面异常待补核验',detail:'真实趋势页已检查，未返回可核验的当日条目与日期。'},
      {name:'Product Hunt',status:'已收录 12 条',detail:'Top Products Launching Today 前 12 条均完成列表核验；详情页按当日候选补读。'},
      {name:'Meta Newsroom · Instagram',status:'已检查但无当日更新',detail:'Recent News 最新可见 Instagram 相关内容早于 2026-09-06。'},
      {name:'Later · Instagram Reels Trends',status:'已检查但无当日更新',detail:'页面最近一次更新为 2026-09-04。'}
    ]
  };
  window.MKT_INSPIRATION_DATA=data;
})();

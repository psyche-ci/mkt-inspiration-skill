/* 2026-08-13 更新范围：三个板块的“今日要闻”；不新增、不改写“近期热门”。 */
(()=>{
  const data=window.MKT_INSPIRATION_DATA;
  if(!data||!Array.isArray(data.items))return;
  data.generatedAt='2026-08-13T20:05:00+08:00';
  data.updateScope='today-all-categories';
  data.reportDates=['2026-08-13','2026-08-12'];
  const ids=new Set([
    'hotspot-ph-scrimba-explain-20260813','hotspot-ph-google-pixel-11-20260813',
    'ai-20260813-claude-watermark','ai-20260813-thrive-holdings','ai-20260813-open-ai-safety',
    'ai-20260813-aibase-sl2t','ai-20260813-aibase-alipay-abao',
    'adweek-marc-jacobs-the-swap-20260813'
  ]);
  data.items=data.items.filter(item=>!ids.has(item.id));
  const add=item=>data.items.push(Object.assign({region:'overseas',verificationStatus:'verified'},item));

  add({id:'hotspot-ph-scrimba-explain-20260813',contentType:'热点趋势',source:'Product Hunt',category:'AI视频工具',publishedAt:'2026-08-13',observedAt:'2026-08-13T19:20:00+08:00',originalUrl:'https://www.producthunt.com/products/scrimba',localCoverPath:'./today-covers/2026-08-13-scrimba-explain.jpeg',title:'Scrimba Explain：把问题、代码和链接直接变成带旁白的视频教程',summary:'Scrimba Explain 今日上线 Product Hunt，可从问题、文件、链接或代码生成带语音、字幕、光标和视觉辅助的视频解释；核验时为日榜第4、123 points。',tags:['Product Hunt','AI视频','教育工具'],evidenceLabel:'Product Hunt 今日榜',evidenceText:'产品页明确显示 Launching today、Day rank #4、123 points；封面来自产品页 gallery 首图。',accessNote:'页面公开可读；当日榜位会随投票变化，卡片保留观察时间。',views:['today'],viralIndex:{timeliness:20,innovation:29,virality:30,total:79},reading:{analysis:'它解决的不是“再生成一段文字”，而是把解释过程直接做成可播放的教学内容。用户给出问题、代码或链接后，系统同时生成旁白、字幕、光标和视觉辅助，适合产品答疑、代码讲解与内部培训。值得观察的核心是生成速度之外，事实准确度、代码演示是否可复现，以及用户能否快速修改错误片段。'}});

  add({id:'hotspot-ph-google-pixel-11-20260813',contentType:'热点趋势',source:'Product Hunt',category:'消费电子',publishedAt:'2026-08-13',observedAt:'2026-08-13T19:20:00+08:00',originalUrl:'https://www.producthunt.com/products/google',localCoverPath:'./today-covers/2026-08-13-google-pixel-11.jpeg',title:'Google Pixel 11 发布：把 Tensor G6 与 Gemini 能力放进手机主体验',summary:'Pixel 11 今日上线 Product Hunt，主打更新相机、Tensor G6、LED HiLight 和更快的 Gemini AI；核验时为日榜第11、89 points。',tags:['Google','Pixel 11','端侧AI'],evidenceLabel:'Product Hunt 今日榜',evidenceText:'产品页显示 Launching today；Product Hunt 今日列表核验时为#11、89 points，封面来自产品页 gallery 首图。',accessNote:'页面公开可读；分数和榜位为观察时快照。',views:['today'],viralIndex:{timeliness:20,innovation:24,virality:24,total:68},reading:{analysis:'Pixel 11的产品叙事不再把AI单独放在功能列表里，而是与芯片、相机和日常交互一起呈现。真正需要跟踪的不是“是否搭载Gemini”，而是端侧响应速度、拍摄和搜索任务是否因此更顺手，以及这些能力能否形成可持续使用，而非发布会演示。'}});

  add({
    id:'adweek-marc-jacobs-the-swap-20260813',
    contentType:'全球广告创意案例',
    source:'Adweek Creativity',
    category:'Video',
    publishedAt:'2026-08-13',
    observedAt:'2026-08-13T20:02:00+08:00',
    originalUrl:'https://www.adweek.com/creativity/marc-jacobs-turns-a-handbag-mix-up-into-a-new-york-microdrama-mystery/',
    originCoverUrl:'https://static-www.adweek.com/wp-content/uploads/2026/08/Untitled-design-10.png?w=1200',
    localCoverPath:'./today-covers/adweek-marc-jacobs-the-swap-2026-08-13.png',
    title:'Marc Jacobs把手袋拿错拍成一场纽约微短剧悬案',
    summary:'Marc Jacobs在《Question Marc》第二章中让Rowan Blanchard与Jemima Kirke意外拿错Scene Bag，以两天纽约追逐和侦探反转，把秋季系列新品变成可连载的社交短剧。',
    tags:['Marc Jacobs','微短剧','时尚营销','社交内容'],
    evidenceLabel:'Adweek Creativity 当日最新',
    evidenceText:'Adweek Creativity栏目核验时标记为1 hour ago；原文确认项目为Question Marc第二章，由Rowan Blanchard、Jemima Kirke出演，Jeremy O. Harris旁白，并将继续发布后续章节。',
    accessNote:'公开页面可查看标题、正文与原文主视觉；封面已从原文静态资源下载并本地化。',
    views:['today'],
    viralIndex:{timeliness:20,innovation:29,virality:24,total:73},
    reading:{
      insight:'时尚新品常被静态大片压缩成造型展示，观众看见产品却缺少继续追看的理由。Marc Jacobs把“拿错同款手袋”变成身份误认和城市追逐，让Scene Bag既是剧情证物，也是推动两位角色相遇的核心道具。',
      content:'Rowan Blanchard与Jemima Kirke在一场秀后意外交换Scene Bag，随后在纽约展开持续两天的寻找。故事从Bookmarc书店出发，以侦探叙事和结尾反转推进，并由Jeremy O. Harris旁白；后续章节将随秋季系列继续发布。',
      form:'社交微短剧系列'
    }
  });

  const ai=item=>add(Object.assign({contentType:'AI新闻日报',views:['today']},item));
  ai({id:'ai-20260813-aibase-sl2t',source:'AIBase',category:'端侧AI',publishedAt:'2026-08-13',originalUrl:'https://news.aibase.com/zh/news/30314',localCoverPath:'./today-covers/2026-08-13-aibase-sl2t.png',title:'Google DeepMind发布SL2T：手语转文本进入Pixel 11',summary:'Google将多语言手语转文本模型SL2T接入Pixel 11的Gboard与Live Transcribe，用户可通过前置摄像头输入手语并转成文字。',tags:['Google DeepMind','手语AI','Pixel 11'],evidenceLabel:'AIBase原文核验',evidenceText:'AIBase 8月13日14:29发布；正文称模型覆盖50多种手语、约10万小时素材，并用MediaPipe提取130个关键点。',accessNote:'中文全文公开；正文图已本地保存。',reading:{analysis:'这次发布的重要性不只在识别准确度，而是把手语输入放进普通手机的输入法与实时转写流程。它让无障碍能力从独立应用变成系统级入口，也会带来新的评估问题：不同手语体系与个体动作能否被公平识别、视频是否在端侧处理、错误文本如何被用户快速纠正。'}});
  ai({id:'ai-20260813-aibase-alipay-abao',source:'AIBase',category:'AI助手',publishedAt:'2026-08-13',originalUrl:'https://news.aibase.com/zh/news/30313',evidenceCover:{label:'AIBASE · 08.13',metric:'阿宝',detail:'HARMONYOS PUBLIC BETA'},title:'鸿蒙版支付宝升级，AI助手“阿宝”完成三大平台覆盖',summary:'支付宝AI助手“阿宝”面向HarmonyOS用户开启公测，至此覆盖iOS、Android与鸿蒙，用户可从首页入口用自然语言调用服务。',tags:['支付宝','HarmonyOS','AI助手'],evidenceLabel:'AIBase原文核验',evidenceText:'AIBase 8月13日14:12发布；页面明确写明鸿蒙公测入口及iOS、Android、HarmonyOS三端覆盖。',accessNote:'中文全文公开；卡片不把报道中的设备规模等同产品使用量。',reading:{analysis:'跨三大移动平台意味着“阿宝”开始从一次功能发布进入分发与使用习惯竞争。关键不只是能回答问题，而是能否把自然语言可靠地映射到支付、出行和生活服务，减少用户在多个页面间寻找入口的成本；同时，高权限操作必须有清晰确认与可撤销机制。'}});
  ai({id:'ai-20260813-claude-watermark',source:'TechCrunch AI',category:'AI治理',publishedAt:'2026-08-12',sourcePublishedAt:'2026-08-12 15:26 PDT',originalUrl:'https://techcrunch.com/2026/08/12/some-claude-users-are-mad-that-anthropics-new-watermarks-will-catch-them-cheating-at-their-jobs-classes/',localCoverPath:'./today-covers/2026-08-13-claude-watermark.jpg',title:'Claude加入不可见来源标记，引发工作与课堂使用争议',summary:'Anthropic开始为Claude输出加入机器可读来源标记，以满足欧盟AI法案透明要求；部分用户担心工作和课堂中的AI使用更容易被识别。',tags:['Claude','水印','AI治理'],evidenceLabel:'TechCrunch原文核验',evidenceText:'TechCrunch于8月12日15:26 PDT发布，折算北京时间属于8月13日本期24小时窗口。',accessNote:'全文公开；标题中的争议来自公开用户反应，不把水印描述成绝对检测工具。',reading:{analysis:'机器可读标记把“是否使用AI”从自愿说明推进到可由系统识别的来源信息，但它并不能保证完整追踪：复制、改写和跨格式处理仍可能造成断点。真正的产品问题是如何在透明度、隐私和误判之间取得平衡，并让学校与企业明确哪些AI辅助是允许的。'}});
  ai({id:'ai-20260813-thrive-holdings',source:'TechCrunch AI',category:'企业AI',publishedAt:'2026-08-12',sourcePublishedAt:'2026-08-12 10:41 PDT',originalUrl:'https://techcrunch.com/2026/08/12/openai-backed-thrive-holdings-raises-2b-to-bring-ai-to-the-enterprise/',localCoverPath:'./today-covers/2026-08-13-thrive-holdings.jpg',title:'OpenAI支持的Thrive Holdings融资20亿美元，把AI带入传统服务企业',summary:'Thrive Holdings以约120亿美元估值融资20亿美元，通过收购和改造会计、IT等服务公司，将AI能力直接嵌入企业日常流程。',tags:['企业AI','融资','OpenAI'],evidenceLabel:'TechCrunch原文核验',evidenceText:'TechCrunch 8月12日10:41 PDT发布；融资额、估值和业务覆盖由正文明确披露，运营效果数字为公司自述。',accessNote:'全文公开；公司披露的准确率与效率提升未写成第三方审计结果。',reading:{analysis:'这笔融资代表一种不同于卖软件席位的AI落地路径：先拥有或深度运营服务公司，再把AI嵌入真实流程。优势是能直接接触数据、员工与客户反馈，难点则是每个行业的合规和流程差异都会限制复制速度。应继续观察被收购企业的利润改善、客户留存和人工岗位如何变化。'}});
  ai({id:'ai-20260813-open-ai-safety',source:'TechCrunch AI',category:'开放模型',publishedAt:'2026-08-12',sourcePublishedAt:'2026-08-12 10:51 PDT',originalUrl:'https://techcrunch.com/2026/08/12/as-ai-safety-concerns-mount-three-pioneers-make-the-case-for-staying-open/',localCoverPath:'./today-covers/2026-08-13-ai-open-safety.jpg',title:'Hinton、李飞飞与吴恩达讨论：AI安全压力上升时，开放仍有必要',summary:'三位AI先驱分别从科研透明、竞争与治理角度为保持开放辩护，同时区分真正开源与仅开放权重，并承认高能力模型需要更精细的风险控制。',tags:['开放模型','AI安全','治理'],evidenceLabel:'TechCrunch原文核验',evidenceText:'TechCrunch 8月12日10:51 PDT发布；正文分别呈现三位研究者观点，没有把观点写成统一行业结论。',accessNote:'全文公开；卡片保留观点差异。',reading:{analysis:'争论的核心不是简单的“开放或封闭”，而是开放到哪一层：论文、训练数据、代码、权重和部署权限会带来不同收益与风险。开放能够支持独立验证与竞争，但高能力模型也可能降低滥用门槛。更可行的方向是按能力和用途分级开放，并建立可复现评测与责任边界。'}});
})();

/* 2026-08-11 热点趋势：只保留本轮从指定公开页面核验的条目。 */
(()=>{
  const data=window.MKT_INSPIRATION_DATA;
  if(!data||!Array.isArray(data.items))return;
  const C='热点趋势';
  data.generatedAt='2026-08-11T19:30:00+08:00';
  data.items=data.items.filter(item=>item.contentType==='全球广告创意案例');
  const add=item=>data.items.push(Object.assign({contentType:C,region:'overseas',verificationStatus:'verified'},item));
  const yt=(id,title,rank,date,views,likes,comments,category,score,reading)=>add({
    id:'youtube-trends24-'+id,source:'YouTube Trends24 × YouTube',category,publishedAt:date,
    observedAt:'2026-08-11T19:15:00+08:00',originalUrl:'https://www.youtube.com/watch?v='+id,
    localCoverPath:'./today-covers/youtube-'+id+'.jpg',summary:`该视频进入YouTube Trends24全球榜第${rank}位；回到原YouTube视频核验后，已获得${views}次观看、${likes}个赞和${comments}条评论。`,
    tags:['YouTube','Trends24',category],evidenceLabel:'第三方趋势榜＋原视频数据',
    evidenceText:`YouTube Trends24全球榜#${rank}；原YouTube视频：${views}次观看、${likes}赞、${comments}评论。Trends24为第三方趋势监测，不写成YouTube官方排名。`,
    accessNote:'榜位来自YouTube Trends24；标题、日期、互动和封面回到原YouTube视频核验。',views:['today','hot'],
    viralIndex:{timeliness:date==='2026-08-11'?20:16,innovation:score-56,virality:40,total:score},reading
  });
  yt('DiIquLrEqC4','《守望先锋》釜山英雄预告：角色发布借电竞城市制造全球讨论',2,'2026-08-10','459,849','23,709','2,800','游戏内容',89,{insight:'游戏更新的难点不是展示更多技能，而是让新角色迅速拥有可辨认的文化坐标。预告把“釜山”写进标题和角色世界观，借城市、战队感与新赛季共同建立身份，使玩家在看技能之前先形成阵营与地域记忆。',content:'官方预告围绕Season 4的“Heroes of Busan”展开，以连续角色亮相、战斗动作和城市意象建立新赛季规模。视频发布后进入Trends24全球第2，原YouTube页面累计45.9万余次观看、2.37万赞和2800条评论，说明角色信息与赛季期待同时推动讨论。',form:'形式采用高密度游戏预告片：开场快速交代世界观，中段用招式和角色特写建立差异，结尾落到赛季名称与上线信息。可复用为“地点钩子—角色身份—能力演示—赛季承接”的新品发布结构。'});
  yt('ldCb77jXIsM','《Paper Tiger》预告：用单一强概念推动影视内容进入全球趋势',5,'2026-08-10','391,401','6,656','316','影视预告',84,{insight:'影视预告需要在极短时间内让观众理解冲突，同时保留足够悬念。该片围绕“Paper Tiger”这一带有脆弱与威胁双重含义的概念组织情绪，使标题本身成为记忆钩子，再由人物关系和危险升级推动观看。',content:'预告以人物状态、冲突片段和逐步升级的危险构成主线，没有在短片中解释完整剧情，而是让观众从碎片判断角色处境。它进入Trends24全球第5，原YouTube视频获得39.1万余次观看、6656赞和316条评论。',form:'采用短镜头拼接、情绪音乐与标题悬念的标准预告结构；关键信息按“人物—异常—冲突升级—片名”释放。适合内容发布复用的重点，是让标题概念与预告里的核心矛盾保持同一方向。'});
  yt('eMBXOgXC48M','《原神》Odette角色内容：高互动粉丝盘推动当日全球上榜',8,'2026-08-11','198,844','33,889','1,900','角色营销',87,{insight:'角色型游戏内容的传播力来自玩家对人物设定、声音、动作和剧情位置的共同解读。Odette内容在不到一天内获得远高于观看基数的点赞比例，说明受众不是被动观看，而是在用评论和二创预期参与角色发布。',content:'视频集中展示Odette的角色形象、动作与世界观线索，把一次版本信息转化为人物首次登场。核验时它位列Trends24全球第8，原视频已有19.8万余次观看、3.38万赞和1900条评论，是本批视频中互动密度最高的条目。',form:'形式以角色PV为核心，通过人物特写、标志动作、台词和音乐构成完整身份包装。后续可拆成语音片段、技能短剪、设定图和玩家反应，形成“官方首发—社区解读—二创扩散”的内容链。'});
  yt('mmqrZylNQc4','《Grounded 2》内容更新：生存游戏用新场景维持社区热度',17,'2026-08-10','87,385','5,657','411','游戏更新',82,{insight:'持续运营游戏需要不断提供“值得重新回来”的新理由。Grounded 2把微观生存世界中的新地点、敌人与协作体验作为内容钩子，让更新不只是补丁说明，而是玩家下一轮探索的预告。',content:'视频用游戏实机与场景切换展示新的生存威胁和探索空间，强调多人协作与环境尺度。它进入Trends24全球第17，原YouTube页面获得8.7万余次观看、5657赞和411条评论，显示核心社区对更新内容保持积极反馈。',form:'以实机镜头替代抽象功能清单，按“新环境—新危险—玩家应对—行动号召”推进。可复用方法是把版本更新拆成可见的新体验，并用具体遭遇而非参数变化完成传播。'});
  yt('Kk1KdTMhFs8','《Ted Lasso》新内容：成熟IP以人物关系重新激活观众',20,'2026-08-10','161,016','3,980','173','影视IP',80,{insight:'成熟IP再次发布内容时，观众首先寻找的不是世界观说明，而是熟悉人物之间出现了什么新变化。Ted Lasso依靠既有情感资产降低理解成本，再通过角色重逢和新的关系悬念唤回老观众。',content:'视频围绕观众熟悉的角色和情绪基调展开，以有限的新画面提示后续故事。核验时位列Trends24全球第20，原YouTube视频获得16.1万余次观看、3980赞和173条评论，热度主要来自IP记忆与角色关系。',form:'形式保持IP原有温暖、幽默的调性，用人物出现顺序和反应镜头制造“回归感”。适合长期内容品牌复用为“熟悉符号先出现—关系发生变化—留下下一步问题”的召回结构。'});

  add({id:'youtube-ypp-2027-update',source:'YouTube Official Blog',category:'平台规则',publishedAt:'2026-08-10',originalUrl:'https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn/',localCoverPath:'./today-covers/youtube-ypp-2027.jpg',summary:'YouTube正式公布2027年YPP调整，提高新申请广告分成门槛，同时扩展Premium Lite、Shopping、品牌合作和趋势激励等收入路径。',tags:['YouTube','创作者经济','YPP'],evidenceLabel:'官方首页最新新闻',evidenceText:'YouTube Official Blog首页Hero首位，官方发布日期Aug. 10, 2026；仅作为最新新闻，不把平台总观看量写成本文热度。',views:['today'],viralIndex:{timeliness:16,innovation:28,virality:24,total:68},reading:{insight:'平台一边提高广告分成门槛，一边扩展订阅、购物与品牌合作，说明创作者商业模式正在从单一播放广告转向多收入组合。新创作者冷启动更难，已经进入YPP的频道则获得更多变现路径。',content:'官方文章列出Premium Lite分成、Shorts与长视频门槛、生效日期及受影响人群，并说明Shopping、粉丝赞助和品牌合作机会。信息重点不是单纯涨门槛，而是同时重构进入条件与收入结构。',form:'首页Hero首发后，正文用编号、信息图和官方视频解释复杂规则。可复用的规则沟通结构是“生效日期—受影响对象—新旧门槛—豁免人群—替代收益路径”。'}});

  add({id:'google-jackie-eagle',source:'Google Trends',category:'搜索趋势',publishedAt:null,observedAt:'2026-08-11T18:34:00+08:00',originalUrl:'https://trends.google.com/trending?geo=US&hl=en-US',evidenceCover:{label:'GOOGLE TRENDS · US · 24H',metric:'50K+ SEARCHES',detail:'+1,000% · ACTIVE'},summary:'“jackie the eagle”在美国过去24小时达到50K+搜索、增长1000%且仍处于Active状态，相关查询继续补充物种和地点背景。',tags:['Google Trends','搜索增长','实时观察'],evidenceLabel:'Google官方趋势数据',evidenceText:'美国Past 24 hours：50K+ searches、+1,000%、约13小时前启动、Active；趋势观察项不伪造内容发布日期。',views:['today','hot'],viralIndex:{timeliness:20,innovation:16,virality:47,total:83},reading:{insight:'搜索从一个动物名字扩展到物种和地点，说明大量用户先接触到被人格化的个体，再主动补足背景。品牌可把这种相关查询看作用户真实的信息路径，而不是只看一个总搜索量。',content:'Google Trends美国过去24小时榜记录该词50K+搜索、较常态增长1000%，约13小时前启动且仍Active，并出现多条相关查询。页面只核验搜索行为，因此不补写未由该页确认的事件原因。',form:'官方趋势表把关键词、搜索量、涨幅、启动时间、状态和相关查询压缩在同一行。内容团队可按“是谁—在哪里—为什么被搜”组织解释型内容，并保留地区与观察时间。'}});
  add({id:'google-today-show',source:'Google Trends',category:'媒体趋势',publishedAt:null,observedAt:'2026-08-11T18:34:00+08:00',originalUrl:'https://trends.google.com/trending?geo=US&hl=en-US',evidenceCover:{label:'GOOGLE TRENDS · US · 24H',metric:'20K+ SEARCHES',detail:'+1,000% · ACTIVE'},summary:'“today with jenna & sheinelle”在美国过去24小时达到20K+搜索、增长1000%且仍Active，节目品牌注意力出现集中上升。',tags:['Google Trends','媒体品牌','搜索增长'],evidenceLabel:'Google官方趋势数据',evidenceText:'美国Past 24 hours：20K+ searches、+1,000%、约14小时前启动、Active；页面未给触发片段，故不推断具体原因。',views:['today'],viralIndex:{timeliness:20,innovation:8,virality:32,total:60},reading:{insight:'完整节目品牌词突然上涨，说明用户能准确记住栏目名称并主动寻找，而不是只搜索主持人。对媒体品牌而言，这种直接搜索是内容片段是否成功沉淀品牌记忆的早期信号。',content:'Google Trends在8月11日记录该节目词20K+搜索、1000%增长，约14小时前开始高于常态且仍Active。页面未展示具体节目片段或社交互动，因此卡片只陈述搜索规模与状态。',form:'形式是实时趋势单行数据。可复用流程是先用品牌词上涨发出预警，再回到节目官方频道核验同一时间段片段，把“已确认的搜索增长”和“待核验的触发内容”分栏呈现。'}});

  // Pinterest 首页趋势卡右侧图片会随选中条目动态变化；旧截图裁到的是排名文字，不能冒充封面。
  // 在没有逐条核验到对应 Pin 图片前，不显示错误裁图。
  const pin=(n,id,title,growth,cat,summary,score,reading)=>add({id:'pinterest-'+id,source:'Pinterest Trends',category:cat,publishedAt:null,observedAt:'2026-08-11T19:15:00+08:00',originalUrl:'https://trends.pinterest.com/',summary,tags:['Pinterest','美国趋势',cat.split(' / ')[0]],evidenceLabel:`Pinterest美国公开首页#${n}`,evidenceText:`公开首页排名#${n}，较上月增长${growth}；未提供发布日期、点赞或分享量。`,views:['hot'],viralIndex:{timeliness:20,innovation:score-57,virality:37,total:score},reading});
  pin(1,'back-to-school-nails','返校美甲设计热度环比增长200%','200%','美妆 / 节点营销','美国用户集中搜索返校主题美甲，首页排名第一、较上月增长200%，开学季表达正从服装文具延伸到可晒、可模仿的指尖造型。',92,{insight:'返校需求不只在买齐用品，也在用低成本造型完成新学期身份更新。美甲比整套穿搭更轻、更容易复制和分享，200%环比显示节点表达正在向美容细节迁移。',content:'Back to School Nail Designs位列美国公开首页第一，归入Beauty与Event planning。它代表用户持续寻找颜色、图案、字母和校队元素等灵感，不等同于某款产品销量。',form:'用轮播展示简约、校色、字母和手绘四类方案，再接短教程、材料清单和用户复刻。Pinterest承接搜索收藏，短视频展示过程，商品页承接色号或贴片组合。'});
  pin(2,'senior-spirit-jeans','毕业班精神牛仔裤搜索环比增长90%','90%','时尚 / 节点营销','美国高中毕业班关注可定制Spirit Jeans与Pants，首页排名第二、环比增长90%，校名、年份和集体身份转化为可穿着的校园仪式。',87,{insight:'毕业班学生既想表达集体归属，又不愿穿完全统一的纪念品。Spirit Jeans让校名、届数、球队色与个人装饰并存，兼顾团体识别和个体差异。',content:'该趋势位列美国公开首页第二，归入Fashion与Event planning，指向围绕牛仔裤和长裤进行校园精神定制的集中需求；排名和增长不代表单款销量。',form:'先发布统一底版，再开放姓名、数字、图案和裤型模块。Pinterest情绪板负责共创，短视频记录DIY，校园活动集中出场，合照与细节图推动二次传播。'});
  pin(3,'senior-picture-ideas','毕业班写真灵感搜索环比增长30%','30%','艺术 / 节点营销','毕业班写真灵感位列美国首页第三、环比增长30%，用户提前规划场景、姿势、服装和道具，让标准毕业照转向个人叙事。',83,{insight:'年轻用户不只想留下记录，更希望照片说明自己是谁、准备去哪里。搜索从姿势扩展到服装、地点、道具和光线，说明用户需要可直接照做的叙事模板。',content:'Senior Picture Ideas排名第三，归入Art与Event planning，代表用户寻找毕业写真场景、姿势和造型参考，而非某个摄影项目的传播量。',form:'用“情绪板选风格—清单定道具—短视频示范姿势—成片对照”承接需求。摄影师再提供可替换人物、地点和兴趣物件的套餐模板。'});
  pin(4,'pottery-painting','陶器彩绘灵感搜索环比增长20%','20%','DIY / 家居','陶器彩绘进入美国首页第四、环比增长20%，同时连接手作过程、社交活动和家居成果，适合材料品牌与体验门店承接。',81,{insight:'用户既需要离屏、可放松的手作过程，也希望最后得到能带回家的实物。陶器彩绘把创作、朋友聚会和家居装饰合并在一次体验中。',content:'Pottery Painting Ideas排名第四，横跨DIY & Crafts、Art和Home decor，反映用户寻找器型、配色、图案布局和上色方法，而非单一陶艺品牌热度。',form:'按“空白器物—草图—分层上色—烧制—家居陈列”展示全过程。Pinterest承接收藏，门店预约转化，顾客成品墙推动复刻和分享。'});
  pin(5,'starbucks-orders','星巴克饮品点单组合搜索环比增长10%','10%','餐饮 / 用户攻略','Starbucks Drink Orders进入美国首页第五、环比增长10%，复杂定制菜单正被用户转译成可以保存、照读和复刻的点单模板。',80,{insight:'菜单选项越多，用户越担心点错。Drink Orders把复杂配方翻译成可保存、可照读的组合卡，降低尝试门槛，也让用户获得发现隐藏搭配并推荐给朋友的参与感。',content:'该趋势排名第五，指向用户搜索杯型、基底、糖浆、奶类、冷泡沫和加料组合。它是用户搜索趋势，不等同于星巴克官方新品或实际销量。',form:'每款饮品做成“成品图＋完整点单句＋甜度提示＋替换项”卡片，Pinterest承接收藏，短视频呈现门店点单和成品对照，再邀请用户提交自己的组合。'});

  const et=(id,title,metric,growth,status,score,summary,reading)=>add({id:'exploding-'+id,source:'Exploding Topics',category:'新兴趋势',publishedAt:null,observedAt:'2026-08-11T18:36:00+08:00',originalUrl:'https://explodingtopics.com/topic/'+id,evidenceCover:{label:'EXPLODING TOPICS · TRENDING',metric,detail:`${growth} · ${status.toUpperCase()}`},summary,tags:['Exploding Topics','搜索趋势','新品雷达'],evidenceLabel:'站内Trending详情数据',evidenceText:`详情页公开搜索量${metric}、增长${growth}、状态${status}；观察时间不是发布日期。`,views:['hot'],viralIndex:{timeliness:14,innovation:score-63,virality:49,total:score},reading});
  et('soursop-bitters','Soursop bitters搜索需求持续爆发','135K','+446%','exploding',91,'天然草本苦味补充剂进入Exploding Topics趋势池，详情页显示135K搜索量和446%增长，但健康功效仍需合规证据。',{insight:'用户对天然、日常健康方案兴趣上升，Soursop bitters以易理解的品类名连接草本和消化支持诉求。不过搜索热度只代表需求，不等于医学有效性。',content:'详情页公开135K搜索量、+446%增长和exploding状态，并把它描述为由刺果番荔枝等天然原料制成的苦味补充剂。相关功效属于平台趋势描述，不作医学结论。',form:'采用“高增长关键词—一屏数据—需求解释—合规提醒”的新品雷达结构，让趋势证据与功效证据分开呈现。'});
  et('remineralizing-gum','Remineralizing gum：口腔护理转向牙釉质修复叙事','18.1K','+520%','regular',84,'功能口香糖把日常咀嚼与牙釉质矿物质补充叙事结合，详情页显示18.1K搜索量和520%增长。',{insight:'口香糖长期服务清新口气，用户却希望口腔护理更轻便、随时发生。该新品类把钙、磷等成分与强化牙釉质叙事绑定，在牙膏和专业治疗之间争夺高频场景。',content:'详情页显示18.1K搜索量、+520%增长和regular状态，并把产品定义为帮助恢复和强化牙釉质的功能口香糖；实际功效仍需具体产品证据。',form:'用趋势曲线和品类释义完成教育，再连接关键成分、使用时刻、FAQ和检测依据。核心是把熟悉日用品重新命名为功能新品类。'});
  et('glp-1-supplement','GLP-1 supplement：药物热词向补充剂市场外溢','40.5K','+189%','exploding',88,'GLP-1相关搜索向营养补充剂迁移，详情页显示40.5K搜索量和189%增长，但不能暗示补充剂等同处方药。',{insight:'代谢管理需求很强，但处方药存在可及性、监管和副作用顾虑。补充剂借用GLP-1高认知概念降低教育成本，也形成“名称像药、证据未必像药”的核心风险。',content:'详情页公开40.5K搜索量、+189%增长并标记exploding，说明市场兴趣上升；平台未提供具体品牌临床结果，因此卡片只描述需求迁移。',form:'内容先用趋势词和曲线建立关注，再分层解释市场兴趣、配方证据、临床证据与法规边界，最后才进入产品建议。'});

  const ph=(id,title,date,views,total,metric,cover,summary,reading)=>add({id:'producthunt-'+id,source:'Product Hunt',category:'产品发布',publishedAt:date,observedAt:'2026-08-11T18:44:00+08:00',originalUrl:'https://www.producthunt.com/products/'+id,localCoverPath:'./today-covers/'+cover,summary,tags:['Product Hunt','新品','产品增长'],evidenceLabel:views.includes('hot')?'Product Hunt榜单依据':'Product Hunt当日发布',evidenceText:metric,views,viralIndex:{timeliness:date==='2026-08-11'?20:date==='2026-08-10'?16:8,innovation:total-(views.includes('hot')?43:41),virality:views.includes('hot')?35:21,total},reading});
  ph('vizard-agent-the-first-video-agi','Vizard Agent接管从素材到成片的完整视频任务','2026-08-11',['today'],73,'Launching today；57 followers；当天早段票数隐藏。','producthunt-vizard.jpg','一个Agent接收素材、URL、脚本、图片或想法，并完成剪辑、生成、本地化和返修，瞄准视频生产多工具交接问题。',{insight:'团队的瓶颈不是缺单点AI工具，而是脚本、剪辑、生成、本地化和返修分散。Vizard把价值从“提供功能”改成“交付成片”。',content:'用户提供任一种素材并描述目标，Agent自行规划剪辑、生成、改编、本地化与修改；页面明确当日发布，票数尚未公开，因此只作今日新品。',form:'流程是“给原料—说目标—自动执行—查看结果—继续修订”，发布页用具体任务示例而非抽象功能表解释能力。'});
  ph('gotcha-5','Gotcha把Android AI推到屏幕与Termux执行层','2026-08-11',['today'],75,'Launching today；38 followers；100+原生工具；票数隐藏。','producthunt-gotcha.jpg','开源Android AI副驾通过屏幕操作、Termux和本地模型直接执行任务，并以安全模式回应高权限自动化风险。',{insight:'手机AI回答越来越强，但真正执行仍靠用户切换应用。Gotcha以开源、端侧和安全模式同时解决“直接行动”和“保持控制”。',content:'产品支持Android界面点击、输入、滚动和Termux脚本，兼容本地或云模型并连接多种应用；页面显示当日发布但票数隐藏。',form:'用一句真实口令展示屏幕自动操作，再展示安全确认和完成结果；开源代码与本地模型选择承担信任证明。'});
  ph('equitybee','Equitybee用9,000份股权样本降低员工信息差','2026-08-11',['today'],76,'Launching today；9,000+已验证授予样本、2,500+初创公司；票数隐藏。','producthunt-equitybee.jpg','免费股权对标工具按部门、资历和公司阶段比较入职授予，让员工在谈判前获得过去主要由公司掌握的市场参照。',{insight:'公司用成熟基准决定股权，候选人却常只能凭感觉判断。把企业端数据视角开放给员工，直接缓解谈判信息不对称。',content:'用户按部门、资历和融资阶段查看股权授予分位，数据覆盖9000余份样本和2500余家初创公司；页面明确当日发布。',form:'以“我的grant公平吗”开场，用样本量建立信任，免费工具降低门槛，再承接Equitybee的股权融资主业务。'});
  ph('oqoqo','oqoqo用真实产品任务评测AI Agent','2026-08-10',['today','hot'],84,'Yesterday’s Top Products #1；349 points、32 comments、730 followers。','producthunt-oqoqo.jpg','oqoqo让不同Agent在真实产品环境执行私有任务，比较完成效果并定位界面摩擦与token浪费，获得Product Hunt昨日榜第一。',{insight:'整理过的模型benchmark无法回答Agent能否在真实界面完成用户任务。oqoqo把评测对象从“回答对不对”转成“能否发现并使用产品”。',content:'团队定义私有任务集，让不同模型在真实环境批量运行，比较完成质量并定位界面与token效率问题；产品获得昨日榜第一、349 points。',form:'流程是“定义任务—真实运行—横向比较—定位失败—继续迭代”，展示任务、轨迹、成功率和失败位置，而不是只有总分。'});
  ph('hey-noah','Hey Noah主动维护创始人的关系与时间','2026-08-04',['hot'],88,'Last Week #1、Day #1；601 points、99 comments、1.3K followers。','producthunt-hey-noah.jpg','主动型AI助理通过短信管理日历、关系和后续行动，并跨邮件、短信与WhatsApp推进会议。',{insight:'创始人缺的不是被动聊天框，而是会主动推进会议和关系的执行者。短信入口降低新工具摩擦，跨渠道执行解决事项遗漏。',content:'Noah通过短信接收需求，跨email、text与WhatsApp协调会议并持续跟进；Product Hunt显示日榜和周榜双第一、601 points。',form:'用“旧助手只回答—Noah主动执行”的对照建立定位，再以一次真实会议安排展示跨渠道动作和最终日历结果。'});
  ph('adant-ai','AdAnt AI把广告研究、创作和迭代交给Agent小队','2026-08-05',['hot'],86,'Last Week #2、Day #1；609 points、1.3K followers。','producthunt-adant.jpg','多Agent工作流研究TikTok、Instagram和YouTube增长格式，再生成并迭代社交广告。',{insight:'广告团队不是只缺素材生成，而是缺从趋势研究、策略到迭代的连续闭环。AdAnt把灵感判断变成可重复工作流。',content:'产品按Strategy、Creation和Iteration组织Agent，并公开团队历史方法数据；榜单显示日榜第一、周榜第二和609 points。',form:'发布结构是“熟悉类比—完整流程—平台场景—团队数据归因—榜单背书”，同时明确团队自述不等于第三方效果验证。'});
  ph('wisprflow','Wispr Flow Notetaker把个人词库带进会议','2026-08-05',['hot'],85,'Day #1、Week #2；580 points；母产品8.6K followers。','producthunt-wispr.jpg','Notetaker在会前读取邀请和术语，会中识别真实姓名，会后生成决定与行动项并连接其他AI工具。',{insight:'会议工具的差异不再是有没有转写，而是姓名、术语和行动项是否准确。可信上下文比更多文字更有价值。',content:'产品按会前、会中、会后校准人名术语、生成摘要并通过MCP连接Claude或ChatGPT；获得日榜第一、周榜第二。',form:'按时间顺序展示“会前准备—会中识别—会后摘要—下游执行”，让每一步错误成本和结果都可观察。'});
  ph('coldtea','Coldtea把编码、视觉QA和生产监控放进同一IDE','2026-08-06',['hot'],82,'Day #1、Week #4；519 points、849 followers。','producthunt-coldtea.jpg','Agentic IDE把构建、视觉回归检查和线上监控连成闭环，解决AI开发加速后的稳定性风险。',{insight:'AI提高开发速度后，回归缺陷和线上异常也更快累积。测试与监控必须共享上下文，才能让速度不转化为稳定性风险。',content:'coding agent构建功能，visual QA检查回归，monitoring agent守住生产；榜单显示日榜第一、周榜第四和519 points。',form:'用“生成—视觉验证—修复—上线—监控”闭环展示能力，先放大新技术带来的新风险，再给出端到端守护链。'});
  ph('soloop','Soloop用可审批的AI虚拟团队服务独立创始人','2026-08-06',['hot'],80,'Day #2、Week #5；498 points、1K followers。','producthunt-soloop.jpg','AI CEO、CTO和CMO分工推进从想法到收入，用户在关键阶段审批，保留判断和所有权。',{insight:'独立创始人缺多种执行角色，但把所有工作交给通用AI又会失去控制。角色化Agent和审批节点把多Agent转化为组织设计。',content:'CEO负责规划，CTO负责构建，CMO负责获客与销售，关键动作回到用户审批；榜单显示日榜第二、周榜第五。',form:'发布以角色阵容建立记忆，按CEO—CTO—CMO展示任务接力，再用approval-first强调边界和控制权。'});

  /* Instagram 补充来源：官方新闻进“今日要闻”，Later 每周编辑精选进“近期热门”。 */
  data.sourceLinks=[...(data.sourceLinks||[]),
    {name:'Meta Newsroom · Instagram',url:'https://about.fb.com/news/category/technologies/instagram/',feed:'latest_official_news',destination:'today'},
    {name:'Later · Instagram Reels Trends',url:'https://later.com/blog/instagram-reels-trends/',feed:'weekly_editorial_trends',destination:'hot',note:'编辑筛选，不是Instagram官方榜单'}
  ];
  const laterTrend=(id,title,metric,summary,analysis)=>add({
    id:'later-instagram-'+id,source:'Later · Instagram Reels Trends',category:'Instagram Reels趋势',publishedAt:'2026-08-07',observedAt:'2026-08-13T19:00:00+08:00',originalUrl:'https://later.com/blog/instagram-reels-trends/',
    evidenceCover:{label:'LATER · REELS TRENDS · AUG 7',metric,detail:'EDITORIAL WEEKLY TREND'},summary,tags:['Instagram','Reels','每周趋势'],
    evidenceLabel:'Later每周编辑精选',evidenceText:'Later公开周更页面收录并解释该Reels玩法；属于第三方编辑筛选，不是Instagram官方排名或互动榜。',views:['hot'],
    viralIndex:{timeliness:8,innovation:24,virality:28,total:60},reading:{analysis}
  });
  laterTrend('meal-swap','Meal Swap：用互换点单制造关系反差','MEAL SWAP','两个人交换彼此常点的食物或饮品，通过口味差异、试吃反应和关系默契形成轻量Reels内容。','这个玩法的传播点不是食物本身，而是“我替你做选择”带来的关系测试。品牌可提供双人套餐、互换菜单或盲选机制，但应保留真实反应，避免拍成只有产品陈列的硬广。');
  laterTrend('couch-acting','Couch Acting Challenge：把沙发变成即兴表演舞台','COUCH ACTING','创作者借沙发、柜台等日常家具配合《Beat It》完成多人即兴表演，用低门槛场景制造角色冲突。','普通家具被重新定义为舞台，使团队、朋友或门店员工都能快速参与。适合强调群体性格与表演反差；复刻时关键是明确角色、动作接力和节拍，而不是复制同一套台词。');
  laterTrend('on-off','On / Off：一次开合完成前后状态切换','ON / OFF','利用门、盒盖或镜头遮挡完成睡衣到盛装、空置到满载等切换，把变化压缩成一个清晰动作。','用户一眼就能理解“关闭前／打开后”的变化，适合新品揭晓、空间改造、穿搭和包装展示。好内容需要让开合动作与结果有因果关系，并保持前后机位一致。');

  /* 原始封面URL：下载通道受站点限制时仍优先展示可追溯原图，不使用无关配图。 */
  const remoteCovers={
    'youtube-trends24-DiIquLrEqC4':'https://i.ytimg.com/vi/DiIquLrEqC4/maxresdefault.jpg',
    'youtube-trends24-ldCb77jXIsM':'https://i.ytimg.com/vi/ldCb77jXIsM/maxresdefault.jpg',
    'youtube-trends24-eMBXOgXC48M':'https://i.ytimg.com/vi/eMBXOgXC48M/maxresdefault.jpg',
    'youtube-trends24-mmqrZylNQc4':'https://i.ytimg.com/vi/mmqrZylNQc4/maxresdefault.jpg',
    'youtube-trends24-Kk1KdTMhFs8':'https://i.ytimg.com/vi/Kk1KdTMhFs8/maxresdefault.jpg',
    'youtube-ypp-2027-update':'https://i.ytimg.com/vi_webp/JG1DpkBPldg/maxresdefault.webp',
    'producthunt-vizard-agent-the-first-video-agi':'https://ph-files.imgix.net/ed88221a-7a82-4f3f-b15a-eab47beb5989.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782',
    'producthunt-gotcha-5':'https://ph-files.imgix.net/2cc6c84d-b9fa-4daf-937d-9886278e41c6.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782',
    'producthunt-equitybee':'https://ph-files.imgix.net/70682237-2bb2-4e6d-aa60-dc818e8e4273.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782',
    'producthunt-oqoqo':'https://ph-files.imgix.net/4803aacd-f18f-46bc-b10c-5a2e31ffb701.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782',
    'producthunt-hey-noah':'https://ph-files.imgix.net/b037af11-d436-4f20-86da-2435d655284f.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782',
    'producthunt-adant-ai':'https://ph-files.imgix.net/faf0a42e-c93f-49cd-83ff-0fbcfb449f86.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782',
    'producthunt-wisprflow':'https://ph-files.imgix.net/f992927e-2c7d-4f83-b016-e4ad25b6e435.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782',
    'producthunt-coldtea':'https://ph-files.imgix.net/f0a9de42-1ae5-467d-9855-576d2a35bd73.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782',
    'producthunt-soloop':'https://ph-files.imgix.net/d3ec18ad-6970-49aa-b687-9a8c20089b2b.jpeg?auto=compress%2Cformat&fit=crop&h=440&w=782'
  };
  data.items.forEach(item=>{if(remoteCovers[item.id]){delete item.localCoverPath;item.coverUrl=remoteCovers[item.id]}});
  /* 旧版曾指向三个不存在的本地文件；移除错误优先级，让页面回退到原文封面。 */
  ['shots-jif-everything','shots-apple-kairo','shots-weight-watchers-every-point'].forEach(id=>{
    const item=data.items.find(entry=>entry.id===id);
    if(item)delete item.localCoverPath;
  });
})();

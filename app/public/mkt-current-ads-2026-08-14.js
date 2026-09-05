/* 2026-08-14 全球广告创意案例：五个固定来源已核验。 */
(()=>{
  const data=window.MKT_INSPIRATION_DATA;
  if(!data||!Array.isArray(data.items)){
    if(typeof VERIFIED_ITEMS==='undefined')return;
    const legacyAdds=[
      {id:'digitaling-375171',date:'2026-08-14',category:'品牌内容',title:'百雀羚×李思潼：祝她的七夕特别好',summary:'百雀羚携手李思潼，把七夕从爱情叙事转回传统乞巧节，以女性自我成长与对美好生活的向往为核心。',url:'https://www.digitaling.com/projects/375171.html',cover:'./today-covers/pechoin-qixi-2026-08-14.jpg',heat:'数英网 8月14日最新收录；评分 7、评论 1。',reading:['品牌把七夕还给乞巧节，弱化爱情滤镜，转而祝福女性向内求索。','李思潼串联多位女孩的生活片段，以潮汕方言和书写祝福完成情绪表达。','品牌短片、节日内容、女性议题、方言叙事。']},
      {id:'digitaling-375136',date:'2026-08-14',category:'借势营销',title:'肯德基投机取巧，请邮递员吃炸鸡',summary:'澳大利亚肯德基借社会讨论推出明信片，让邮递员送件到店即可兑换餐食，把信息差与社会情绪转化为品牌话题。',url:'https://www.digitaling.com/projects/375136.html',cover:'./today-covers/kfc-postman-2026-08-14.jpg',heat:'数英网 8月14日最新收录；评分 1、收藏 2。',reading:['品牌顺着公众情绪切入，把争议转成可参与的福利机制。','明信片成为邮递员进店兑换免费餐食的凭证，线上声明与线下门店联动。','借势公关、社会议题、线下兑换、品牌态度。']},
      {id:'socialbeta-28214',date:'2026-08-14',category:'创意文案',title:'小象超市迎来了自己的文曲星',summary:'小象超市用活人感商品文案和地域化表达，把网络梗、食物画面与品牌日常传播结合起来。',url:'https://socialbeta.com/campaign/28214',cover:'./today-covers/xiaoxiang-copywriting-2026-08-14.jpg',heat:'SocialBeta 8月14日快讯；指标未公开。',reading:['用画面感和文化梗赋予商品温度和记忆点。','商品文案延伸到粤语等地域版本，拉近与本地消费者的距离。','创意文案、品牌传播、社交媒体内容、地域化营销。']},
      {id:'socialbeta-28211',date:'2026-08-14',category:'Video',title:'上淘宝能看「鸟界恋综」？',summary:'淘宝七夕邀林依轮担任爱情鸟观察员，以鸟类恋爱方式重新解读年轻人情感话题，并推出恋爱人格测试。',url:'https://socialbeta.com/campaign/28211',cover:'./today-covers/taobao-bird-love-2026-08-14.png',heat:'SocialBeta 8月14日快讯；指标未公开。',reading:['淘宝借观鸟趋势重新解读七夕情感话题。','16种鸟类对应16种恋爱人格，搭配短视频与互动测试。','品牌微电影、互动H5、代言人营销、七夕营销。']},
      {id:'socialbeta-28223',date:'2026-08-14',category:'事件营销',title:'宜得利推出「摸黑」购物服务？',summary:'宜得利门店遭遇断水断电后坚持营业，以手电筒陪同购物和员工值守把经营危机转成品牌态度事件。',url:'https://socialbeta.com/campaign/28223',cover:'./today-covers/nitori-dark-shopping-2026-08-14.jpg',heat:'SocialBeta 8月14日快讯；指标未公开。',reading:['品牌选择不闭店，用硬核服务回应突发危机。','手电筒陪购和彻夜值守让负面事件转成消费者支持。','危机公关、事件营销、线下体验、社交传播。']},
      {id:'socialbeta-28210',date:'2026-08-14',category:'Video',title:'VICUTU 威可多拒绝成为「标签角色」',summary:'VICUTU 以“标签局”构建架空世界，借刘昊然微电影讨论自我认同与社会标签，落脚松弛泛正装理念。',url:'https://socialbeta.com/campaign/28210',cover:'./today-covers/vicutu-liuhaoran-label-2026-08-14.png',heat:'SocialBeta 8月14日快讯；指标未公开。',reading:['品牌把社会标签转化成可见的叙事空间。','微电影用真实彩蛋和撕标签行动传递品牌态度。','品牌微电影、明星代言、情感营销、视觉叙事。']}
    ];
    legacyAdds.forEach(item=>{if(!VERIFIED_ITEMS.some(existing=>existing.id===item.id))VERIFIED_ITEMS.push(Object.assign({contentType:'营销案例',source:item.id.startsWith('digitaling')?'数英网':'SocialBeta',region:'domestic',isRecentHot:false},item));});
    return;
  }
  const observedAt='2026-08-14T13:20:00+08:00';
  data.generatedAt=observedAt;
  data.updateScope='today-global-ad-cases-only';
  data.reportDates=['2026-08-17'];
  data.todaySourceCoverage=[
    {source:'数英网',status:'checked_campaign_feed_included',included:2,entryUrl:'https://www.digitaling.com/projects'},
    {source:'SocialBeta',status:'checked_campaign_feed_included',included:4,entryUrl:'https://socialbeta.com/campaign'},
    {source:'Adweek Creativity',status:'checked_no_verified_aug14_item',included:0,entryUrl:'https://www.adweek.com/creativity/'},
    {source:'The Drum Marketing',status:'checked_no_verified_aug14_item',included:0,entryUrl:'https://www.thedrum.com/marketing'},
    {source:'Event Marketer Latest',status:'checked_no_verified_aug14_item',included:0,entryUrl:'https://www.eventmarketer.com/latest/'}
  ];
  data.globalAdDailyLimit=15;
  data.globalAdSortRule='公开阅读量→点击量→观看数；指标相同再按点赞/评论/收藏/榜单与发布日期；未公开指标标注编辑精选。';

  // 清除旧的今日要闻标记
  data.items=data.items.flatMap(item=>{
    if(item.contentType!=='营销案例'||!Array.isArray(item.views)||!item.views.includes('today'))return [item];
    const views=item.views.filter(view=>view!=='today');
    return views.length?[Object.assign({},item,{views})]:[];
  });

  const add=it=>data.items.push(Object.assign({
    contentType:'营销案例',
    region:'domestic',
    views:['today'],
    publishedAt:'2026-08-14',
    observedAt,
    verificationStatus:'verified_list_and_detail'
  },it));

  // SocialBeta 2026-08-14 案例
  const sb=[
    {
      id:'socialbeta-28214',
      title:'小象超市迎来了自己的文曲星',
      category:'创意文案',
      originalUrl:'https://socialbeta.com/campaign/28214',
      localCoverPath:'./today-covers/xiaoxiang-copywriting-2026-08-14.jpg',
      summary:'小象超市商品文案充满活人感走红，从《康熙来了》梗到北大鹅腿阿姨梗信手拈来，用画面感文案表达食物美味（眼睛看到葡萄嘴巴路过花店），还推出粤语等地域版本，成熟文案技巧走出独特辨识度。',
      tags:['小象超市','创意文案','品牌传播'],
      source:'SocialBeta',
      evidenceLabel:'SocialBeta 8月14日快讯',
      evidenceText:'指标未公开',
      reading:{
        insight:'小象超市商品文案频频出圈，从《康熙来了》"眼睛看到葡萄嘴巴路过花店"到北大鹅腿阿姨梗，用画面感和文化梗赋予商品温度和记忆点。',
        content:'文案不仅玩梗，还推出粤语等地域化版本，"呢个荔枝甜到癫"等方言表达拉近与本地消费者距离，让商品介绍变成情感沟通。',
        form:'创意文案、品牌传播、社交媒体内容、地域化营销。'
      }
    },
    {
      id:'socialbeta-28211',
      title:'上淘宝能看「鸟界恋综」？',
      category:'Video',
      originalUrl:'https://socialbeta.com/campaign/28211',
      localCoverPath:'./today-covers/taobao-bird-love-2026-08-14.png',
      summary:'淘宝七夕邀林依轮担任爱情鸟观察员，以观察鸟类恋爱方式重新解读年轻人情感话题，从唱爱情鸟到观察鸟堪称最早鸟系代言人，推出16种鸟对应16种恋爱人格测试，抓住观鸟趋势以鸟喻人展现爱情多元可能。',
      tags:['淘宝','七夕营销','代言人营销'],
      source:'SocialBeta',
      evidenceLabel:'SocialBeta 8月14日快讯',
      evidenceText:'指标未公开',
      reading:{
        insight:'淘宝抓住年轻人观鸟热潮，七夕不讲人类爱情讲鸟类恋爱，邀林依轮从"唱爱情鸟"升级为"观察爱情鸟"，用动物行为学视角重新解读情感话题。',
        content:'推出16种鸟类对应16种恋爱人格测试，从天鹅的忠诚到孔雀的炫耀，用鸟喻人展现爱情多元性，搭配短视频和互动H5引导用户参与测试并分享。',
        form:'品牌微电影、互动H5、代言人营销、趋势借力、七夕营销。'
      }
    },
    {
      id:'socialbeta-28223',
      title:'宜得利推出「摸黑」购物服务？',
      category:'事件营销',
      originalUrl:'https://socialbeta.com/campaign/28223',
      localCoverPath:'./today-covers/nitori-dark-shopping-2026-08-14.jpg',
      summary:'宜得利无锡门店因租赁纠纷被商场断水断电，品牌坚持营业发手电筒一对一陪同选购，员工彻夜值守承诺服务照常，硬核应对意外引发本地消费者排队支持打卡，负面危机演变成自带话题的限时体验。',
      tags:['宜得利','危机公关','事件营销'],
      source:'SocialBeta',
      evidenceLabel:'SocialBeta 8月14日快讯',
      evidenceText:'指标未公开',
      reading:{
        insight:'宜得利无锡门店遭遇商场断水断电，品牌选择不闭店而是给顾客发手电筒继续营业，员工24小时值守一对一陪同购物，硬核态度获得消费者认可。',
        content:'原本的经营危机因品牌坚持服务反而成为话题事件，本地消费者主动排队支持打卡，"摸黑购物"意外变成限时特殊体验，展现品牌价值观。',
        form:'危机公关、事件营销、品牌态度、线下体验、社交传播。'
      }
    },
    {
      id:'socialbeta-28210',
      title:'VICUTU威可多拒绝成为「标签角色」',
      category:'Video',
      originalUrl:'https://socialbeta.com/campaign/28210',
      localCoverPath:'./today-covers/vicutu-liuhaoran-label-2026-08-14.png',
      summary:'VICUTU威可多推出刘昊然主演年度微电影，构建标签局架空世界探讨自我认同，优等生职场透明人急性子旅者三重标签化自我，植入真实彩蛋剧内外呼应撕标签，落脚松弛泛正装理念用情感叙事传递品牌态度。',
      tags:['VICUTU','刘昊然','品牌微电影'],
      source:'SocialBeta',
      evidenceLabel:'SocialBeta 8月14日快讯',
      evidenceText:'指标未公开',
      reading:{
        insight:'VICUTU威可多以"标签局"为概念构建架空世界，刘昊然饰演被贴上优等生、职场透明人、急性子旅者等标签的角色，探讨社会对个体的定义与自我认同冲突。',
        content:'微电影植入真实彩蛋（刘昊然本人经历）实现剧内外呼应，撕标签行动不仅是剧情更是品牌态度，最终落脚"松弛泛正装"理念，用情感叙事传递服装选择即自我选择。',
        form:'品牌微电影、明星代言、情感营销、品牌态度、视觉叙事。'
      }
    }
  ];

  const digitaling=[
    {
      id:'digitaling-375171',
      title:'百雀羚×李思潼：祝她的七夕特别好',
      category:'品牌内容',
      originalUrl:'https://www.digitaling.com/projects/375171.html',
      localCoverPath:'./today-covers/pechoin-qixi-2026-08-14.jpg',
      summary:'百雀羚携手李思潼，把七夕从爱情叙事转回传统乞巧节，以女性自我成长与对美好生活的向往为核心，借方言、真实片段和书写祝福的影像表达品牌态度。',
      tags:['百雀羚','七夕营销','女性议题'],
      source:'数英网',
      evidenceLabel:'数英网 2026-08-14 最新收录',
      evidenceText:'评分 7；评论 1',
      reading:{insight:'品牌把七夕还给乞巧节，弱化爱情滤镜，转而祝福女性向内求索。',content:'李思潼串联多位女孩的生活片段，以潮汕方言和纸上祝福完成情绪表达。',form:'品牌短片、节日内容、女性议题、方言叙事。'}
    },
    {
      id:'digitaling-375136',
      title:'肯德基投机取巧，请邮递员吃炸鸡',
      category:'借势营销',
      originalUrl:'https://www.digitaling.com/projects/375136.html',
      localCoverPath:'./today-covers/kfc-postman-2026-08-14.jpg',
      summary:'澳大利亚肯德基借邮递员工作时间去门店吃炸鸡引发的社会讨论，推出“Go Full Chicken On Us”明信片，让邮递员送件到店即可兑换餐食，把信息差与社会情绪转化为品牌话题。',
      tags:['肯德基','借势营销','社会情绪'],
      source:'数英网',
      evidenceLabel:'数英网 2026-08-14 最新收录',
      evidenceText:'评分 1；收藏 2',
      reading:{insight:'品牌顺着公众对事件的情绪反应切入，把争议转成可参与的福利机制。',content:'明信片成为邮递员进店兑换免费餐食的凭证，线上声明与线下门店联动。',form:'借势公关、社会议题、线下兑换、品牌态度。'}
    }
  ];

  digitaling.forEach(item=>add(item));
  sb.forEach(item=>add(item));
})();

// 2026-08-17 营销案例直接注入：保证旧页面入口也能显示最新日期。
(()=>{
  const data=window.MKT_INSPIRATION_DATA;
  if(!data||!Array.isArray(data.items))return;
  const add=(id,title,source,url,cover,category,summary,reading,heat)=>{
    if(data.items.some(x=>x.id===id))return;
    data.items.push({id,contentType:'营销案例',date:'2026-08-17',publishedAt:'2026-08-17',source,originalUrl:url,url,cover,coverUrl:cover,localCoverPath:cover,category,region:'domestic',summary,heat,evidenceText:heat,evidenceLabel:`${source} 2026-08-17 案例`,reading:{insight:reading[0],content:reading[1],form:reading[2]},views:['today'],verificationStatus:'verified_list_and_detail'});
  };
  add('digitaling-375276','淘宝国际左撇子日：感谢这世界有宝贝向左','数英网','https://www.digitaling.com/projects/375276.html','./today-covers/2026-08-17-taobao-lefty.jpg','户外广告','淘宝以国际左撇子日为入口，联合向佐与商家展示左利手专用品，并把“左右皆可”的倡议带到杭州地铁与湖滨in77。',['把被忽略的左手需求转成可被看见、可被购买的产品选择。','向佐、左利手产品、地铁海报和包容性倡议共同完成传播。','明星代言、系列海报、地铁户外广告与社会倡议。'],'数英评分 9.8；收藏 11；评论 3。');
  add('digitaling-374443','淘宝买药：夏天的橙色「贴」心提醒','数英网','https://www.digitaling.com/projects/374443.html','./today-covers/2026-08-17-taobao-medicine.jpg','场景营销','淘宝买药把夏日健康提醒做成四城运动场馆里的巨大便利贴，并设置便民医药箱。',['把提醒放进人们正在运动、最容易出现不适的真实场景。','40句文案对应冰饮、暴晒、关节和皮肤等夏日小状况。','场景化户外广告、便利贴装置、医药箱与视频内容。'],'数英评分 8.5；收藏 8；评论 3。');
  add('digitaling-374772','利郎西服：没事穿什么西服？万一呢','数英网','https://www.digitaling.com/projects/374772.html','./today-covers/2026-08-17-lilanz.gif','TVC与平面海报','利郎把“没事穿什么西服”改写成“万一呢”，用影片和海报覆盖临时上台、球场聚光、见家长等日常转折。',['从真实的拒绝出发，用“好事不会提前通知”建立提前准备的理由。','五个“万一”情境把普通日子变成可能发生的高光时刻。','系列TVC与平面海报组合。'],'数英评分 5；收藏 6；评论 1。');
  add('socialbeta-28252','闻献官宣朱一龙为全球品牌代言人','SocialBeta','https://socialbeta.com/campaign/28252','https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/198246-1786952910.png','品牌代言广告片','闻献以“有龙则灵”为传播钩子官宣朱一龙，借东方香气与限量礼盒把代言人气质转译成全球表达。',['东方香氛文化需要一个当代、可国际理解的表达入口。','名字双关、广告片和限量礼盒强化仪式感。','全球代言官宣、品牌广告片与限量礼盒。'],'SocialBeta 2026-08-17 案例。');
  add('socialbeta-28253','天猫用星轨重写七夕的浪漫叙事','SocialBeta','https://socialbeta.com/campaign/28253','https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/204546-1786951781.png','线上直播与线下活动','天猫把七夕红线转成星轨，用七种心动轨迹串联明星内容、沉浸式直播和线下体验，再落到电商礼赠。',['把“缘分”拆成七种可识别的心动轨迹。','星轨视觉贯穿短片、直播间和线下场景，情绪后承接购买。','七夕广告片、明星营销、沉浸式直播与线下体验。'],'SocialBeta 2026-08-17 案例。');
  add('socialbeta-28254','淘宝：世界向右，宝贝向左','SocialBeta','https://socialbeta.com/campaign/28254','https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/24325-1786699856.jpg','社会议题营销','淘宝延续左撇子日沟通，用向佐与“向左”产品回应默认右手设计，把小众需求转成平台与商家共同参与的包容表达。',['左撇子的“不顺手”是被忽略的系统性需求。','明星、左利手商品与平台倡议让议题落到可购买选择。','社会议题传播、明星代言、户外海报与平台倡议。'],'SocialBeta 2026-08-17 案例。');
  add('socialbeta-28233','字节把一只「消失的袜子」拍成了好莱坞大片？','SocialBeta','https://socialbeta.com/campaign/28233','https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/224935-1786689138.png','AI广告片','Seedance 2.5 用“防吞袜洗衣机”的戏中戏拍成黑色电影式短片，以多角色、布料物理和机械异世界展示模型升级。',['把模型参数放进完整悬疑故事，让升级变成观看体验。','戏中戏同时呈现角色一致性、布料重力和金属质感。','AI生成广告片、戏中戏叙事与产品能力演示。'],'SocialBeta 2026-08-17 案例。');
  add('socialbeta-28255','盒马邀你来为生活「提提鲜」','SocialBeta','https://socialbeta.com/campaign/28255','https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/224935-1786940403.jpg','TVC与线下装置','盒马周年庆用品牌短片讲四组生活关系，再把“提鲜”延伸到上海地铁生鲜造型拉环，把新鲜感变成可参与的动作。',['把“新鲜”从产品形容词转成提起袋子、提起生活的动作。','人物关系与地铁拉环让品牌理念发生在日常。','品牌TVC、地铁装置、户外媒体与周年营销。'],'SocialBeta 2026-08-17 案例。');
  add('socialbeta-28226','沃尔玛用 30 年接力每一份好生活','SocialBeta','https://socialbeta.com/campaign/28226','https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/224736-1786691407.png','品牌周年广告片','沃尔玛三十周年品牌片从一位女性消费者的人生时间线展开，用 AI 唤醒旧照片，把“天天有平价”落到家庭陪伴。',['用消费者人生而不是企业大事记讲三十年关系。','旧照片与AI影像唤醒共同记忆，品牌承诺落到长期陪伴。','品牌周年广告片、消费者视角叙事与AI影像。'],'SocialBeta 2026-08-17 案例。');
  data.generatedAt='2026-08-18T09:00:00+08:00';
})();

// Replace fallbacks with the verified hero images read from each Digitaling detail page.
(()=>{
  const data=window.MKT_INSPIRATION_DATA;
  if(!data||!Array.isArray(data.items))return;
  const covers={
    'digitaling-375276':'./today-covers/2026-08-17-taobao-lefty.jpg',
    'digitaling-374443':'./today-covers/2026-08-17-taobao-medicine.jpg',
    'digitaling-374772':'./today-covers/2026-08-17-lilanz.gif'
  };
  data.items.forEach(item=>{if(covers[item.id]){item.cover=covers[item.id];item.coverUrl=covers[item.id];item.localCoverPath=covers[item.id];}});
})();

// 2026-08-14 营销案例近期热门：数英网 + SocialBeta 两个固定榜单。
(()=>{
  const data=window.MKT_INSPIRATION_DATA;
  const hotAdds=[
    {id:'digitaling-hot-371818',date:'2026-07-16',category:'Video',title:'利郎：把洗了n次的polo衫，寄给博主开箱',summary:'利郎把“反复洗穿”的真实生活感变成产品信任，用寄给博主开箱的方式证明 Polo 衫的耐穿与长期价值。',source:'数英网',url:'https://www.digitaling.com/projects/371818.html',cover:'https://file.digitaling.com/eImg/cover/20260716/20260716114006_59664.jpg',heat:'近期热门项目；评分 9.3，收藏 72，评论 16；超出14天窗口，不展示。',evidenceLabel:'数英近期热门榜单',reading:['把耐穿从抽象卖点变成可被验证的生活实验，用户更容易相信真实使用而不是参数。','寄出洗了多次的 Polo 衫，让博主直接开箱、试穿并展示状态，内容天然带有证据感。','产品体验、达人开箱、耐穿测试、真实生活方式内容。'],isRecentHot:false,contentType:'营销案例',region:'domestic'},
    {id:'digitaling-hot-373197',date:'2026-07-20',category:'事件营销',title:'淘宝开了家串串香，欢迎大家来串门儿',summary:'淘宝把“串门儿”从社交动作变成线下串串香体验，以食物和到店互动把平台关系感做成可参与的场景。',source:'数英网',url:'https://www.digitaling.com/projects/373197.html',cover:'https://file.digitaling.com/eImg/cover/20260719/20260719191345_16391.gif',heat:'近期热门项目；评分 9.1，收藏 73，评论 15；超出14天窗口，不展示。',evidenceLabel:'数英近期热门榜单',reading:['平台营销不只讲优惠，也可以把人与人之间的熟悉感变成可到场体验。','以串串香门店承接“来串门儿”的语言双关，在线下完成品牌与用户的见面。','线下事件、场景营销、社交话题、平台体验。'],isRecentHot:false,contentType:'营销案例',region:'domestic'},
    {id:'digitaling-hot-373813',date:'2026-07-29',category:'户外广告',title:'iPhone新户外广告，看得人分分钟心跳加速',summary:'iPhone 用高张力的户外视觉制造身体反应，让产品影像能力在城市空间里变成一眼可感的刺激。',source:'数英网',url:'https://www.digitaling.com/projects/373813.html',cover:'https://file.digitaling.com/eImg/cover/20260728/20260728190805_30239.jpg',heat:'近期热门项目；评分 9.3，收藏 54，评论 16；超出14天窗口，不展示。',evidenceLabel:'数英近期热门榜单',reading:['户外广告的核心是让路人瞬间停顿，身体感受比复杂说明更快建立记忆。','把心跳加速的瞬间放大为主视觉，让 iPhone 的影像表现成为现场体验。','户外广告、沉浸式视觉、城市媒体、产品能力展示。'],isRecentHot:false,contentType:'营销案例',region:'domestic'},
    {id:'digitaling-hot-374233',date:'2026-08-04',category:'事件营销',title:'美的夏日清凉计划：热到融化的广告牌',summary:'美的让高温中的广告牌“融化”，用城市环境真实温度演示清凉产品的功能价值。',source:'数英网',url:'https://www.digitaling.com/projects/374233.html',cover:'./today-covers/hot-digitaling-midea-melting.jpg',heat:'近期热门项目；评分 9.0，收藏 70，评论 17。',evidenceLabel:'数英近期热门榜单',reading:['把天气从传播背景变成创意执行媒介，产品利益点因此更可信。','广告牌随着热度变化呈现融化效果，路人看到的是正在发生的清凉证明。','户外装置、环境营销、功能演示、夏日节点。'],isRecentHot:true,contentType:'营销案例',region:'domestic'},
    {id:'digitaling-hot-372574',date:'2026-07-21',category:'品牌内容',title:'淘宝手搓三张桌上足球，为孩子们的热爱筹建球场',summary:'淘宝把孩子们对足球的热爱做成可使用的桌上足球，并以手作和公益行动连接平台与真实社区。',source:'数英网',url:'https://www.digitaling.com/projects/372574.html',cover:'https://file.digitaling.com/eImg/cover/20260714/20260714112209_95285.gif',heat:'近期热门项目；评分 8.4，收藏 36，评论 41；超出14天窗口，不展示。',evidenceLabel:'数英近期热门榜单',reading:['品牌参与公益时，真正可使用的物件比口号更能留下长期记忆。','手搓桌上足球把孩子的热爱转化成可玩、可分享、可持续的场景。','公益行动、手作内容、品牌事件、社区共建。'],isRecentHot:false,contentType:'营销案例',region:'domestic'},
    {id:'socialbeta-hot-28137',date:'近期热门',category:'品牌内容',title:'电影《奥德赛》：仲树采访诺兰',summary:'仲树从自身研究出发向诺兰提出具有思辨深度的问题，被网友称为“教科书级采访”，中国本土宣发也反向出圈至海外。',source:'SocialBeta',url:'https://socialbeta.com/campaign/28137',cover:'https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/24742-1786092044.jpg?x-oss-process=image/resize,m_fill,w_210,h_140,limit_0/auto-orient,1/format,jpg',heat:'SocialBeta 案例热榜一周第 1 名；公开互动量未列出。',evidenceLabel:'SocialBeta 近期热门榜单',reading:['精准的内容匹配本身就能创造超越流量的影响力，专业研究成为采访的传播钩子。','以研究和思辨问题切入诺兰采访，再由中国本土宣发带动海外讨论。','深度采访、电影宣发、文化内容、跨区域传播。'],isRecentHot:true,contentType:'营销案例',region:'domestic'},
    {id:'socialbeta-hot-28147',date:'近期热门',category:'借势营销',title:'豪士面包：合作罗正',summary:'罗正因综艺自曝“穷”而走红，豪士快速反应展开朴素的商务合作，以选人和反应速度积攒大众好感。',source:'SocialBeta',url:'https://socialbeta.com/campaign/28147',cover:'https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/24742-1786091884.jpg?x-oss-process=image/resize,m_fill,w_210,h_140,limit_0/auto-orient,1/format,jpg',heat:'SocialBeta 案例热榜一周第 2 名；公开互动量未列出。',evidenceLabel:'SocialBeta 近期热门榜单',reading:['热点合作的价值不在于追逐所有话题，而在于品牌与人物语境是否自然匹配。','品牌快速回应罗正的公众印象，用朴素合作而不是过度包装延续话题。','热点借势、达人合作、快速反应、品牌好感。'],isRecentHot:true,contentType:'营销案例',region:'domestic'},
    {id:'socialbeta-hot-28080',date:'近期热门',category:'品牌内容',title:'lululemon：《感受，一起的好感受》主题短片',summary:'短片关注一群人如何一起变得更好，把运动品牌的“好状态”转化为社群共同成长的生活方式。',source:'SocialBeta',url:'https://socialbeta.com/campaign/28080',cover:'https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/24742-1786091822.jpg?x-oss-process=image/resize,m_fill,w_210,h_140,limit_0/auto-orient,1/format,jpg',heat:'SocialBeta 案例热榜一周第 3 名；公开互动量未列出。',evidenceLabel:'SocialBeta 近期热门榜单',reading:['从个人成功转向群体共同成长，让运动叙事建立更强情感连接。','用群体训练、陪伴与互相鼓励呈现“好状态”，把品牌理念落到关系体验。','品牌短片、社群叙事、运动生活方式、情感营销。'],isRecentHot:true,contentType:'营销案例',region:'domestic'},
    {id:'socialbeta-hot-28109',date:'近期热门',category:'Video',title:'RIMOWA：「交汇，非凡旅程」广告片',summary:'RIMOWA 捕捉周杰伦与樊振东片场后台的松弛瞬间，用即兴乒乓切磋表达真实感，而不是刻意编排情节。',source:'SocialBeta',url:'https://socialbeta.com/campaign/28109',cover:'https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/24742-1786091687.jpg?x-oss-process=image/resize,m_fill,w_210,h_140,limit_0/auto-orient,1/format,jpg',heat:'SocialBeta 案例热榜一周第 4 名；公开互动量未列出。',evidenceLabel:'SocialBeta 近期热门榜单',reading:['品牌从“活人感”进一步走向真实感，未被编排的片刻更能建立信任。','通过片场后台的即兴乒乓和自然互动，让两位人物关系成为内容中心。','品牌广告片、明星合作、幕后叙事、真实感表达。'],isRecentHot:true,contentType:'营销案例',region:'domestic'},
    {id:'socialbeta-hot-28105',date:'近期热门',category:'品牌内容',title:'野兽派：文淇成为品牌青春代言人',summary:'文淇的演绎让野兽派把七夕从情侣热恋转向内敛的个体浪漫，贴合年轻用户的悦己消费趋势。',source:'SocialBeta',url:'https://socialbeta.com/campaign/28105',cover:'https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/24742-1786091606.jpg?x-oss-process=image/resize,m_fill,w_210,h_140,limit_0/auto-orient,1/format,jpg',heat:'SocialBeta 案例热榜一周第 5 名；公开互动量未列出。',evidenceLabel:'SocialBeta 近期热门榜单',reading:['把七夕从情侣叙事转向个体浪漫，回应年轻人的悦己和自我表达。','以文淇的青春气质承接内敛、含蓄而不依附关系的节日表达。','明星代言、节日内容、女性议题、悦己营销。'],isRecentHot:true,contentType:'营销案例',region:'domestic'},
    {id:'socialbeta-hot-28121',date:'近期热门',category:'品牌内容',title:'悦木之源：李思潼成为品牌挚友',summary:'《给阿嬷的情书》走红后，悦木之源牵手李思潼，以自然、清新、松弛的氛围呼应品牌天然为本的理念。',source:'SocialBeta',url:'https://socialbeta.com/campaign/28121',cover:'https://socialbeta.oss-cn-hangzhou.aliyuncs.com/upload/24742-1786091487.jpg?x-oss-process=image/resize,m_fill,w_210,h_140,limit_0/auto-orient,1/format,jpg',heat:'SocialBeta 案例热榜一周第 6 名；公开互动量未列出。',evidenceLabel:'SocialBeta 近期热门榜单',reading:['品牌借演员在内容中的自然质感建立合作，不是简单追逐热度。','从影片角色的清新气质延伸到品牌挚友关系，强化天然、松弛的品牌印象。','品牌挚友、内容联动、人物合作、自然美学。'],isRecentHot:true,contentType:'营销案例',region:'domestic'}
  ];
  hotAdds.forEach((item,index)=>{
    if(item.source==='数英网'){
      item.favorites={ 'digitaling-hot-374233':70 }[item.id] ?? null;
      item.comments={ 'digitaling-hot-374233':17 }[item.id] ?? null;
      item.likes=null;
    }else{ item.likes=null; item.favorites=null; item.comments=null; item.rank=index-4; }
    if(typeof VERIFIED_ITEMS!=='undefined'&&!VERIFIED_ITEMS.some(existing=>existing.id===item.id))VERIFIED_ITEMS.push(item);
    if(data&&Array.isArray(data.items)&&!data.items.some(existing=>existing.id===item.id))data.items.push(Object.assign({},item,{publishedAt:item.date==='近期热门'?null:item.date,sourcePublishedAt:item.date==='近期热门'?'2026-08-14':item.date,observedAt:'2026-08-14T15:30:00+08:00',originalUrl:item.url,localCoverPath:item.cover,coverUrl:item.cover,hotListDate:item.date==='近期热门'?'2026-08-14':item.date,hotRank:item.rank||null,views:['hot'],evidenceText:item.heat,reading:{insight:item.reading[0],content:item.reading[1],form:item.reading[2]}}));
  });
})();

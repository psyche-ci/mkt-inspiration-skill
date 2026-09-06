(()=>{
  const DATA=window.MKT_INSPIRATION_DATA||{items:[]};
  const REPORT_DATES=DATA.reportDates||['2026-09-06'];
  const pageSize=9;
  let page=1,category='热点趋势',mode='today';
  const gridEl=document.getElementById('grid');
  const statusEl=document.getElementById('pageStatus');
  const prevEl=document.getElementById('prevPage');
  const nextEl=document.getElementById('nextPage');
  const timeFiltersEl=document.querySelector('.time-filters');
  const paginationEl=document.querySelector('.pagination');
  const escHtml=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const knownTitles={
    'digitaling-375276':'淘宝国际左撇子日：感谢这世界有宝贝向左',
    'digitaling-374443':'淘宝买药：夏天的橙色「贴」心提醒',
    'digitaling-374772':'利郎西服：没事穿什么西服？万一呢'
  };
  const titleOf=item=>String(item.title||item.name||knownTitles[item.id]||'').trim()||'未命名营销案例';
  const itemDate=item=>item.publishedAt||item.observedAt?.slice(0,10)||'';
  const recentHotReference=REPORT_DATES[0]||new Date().toISOString().slice(0,10);
  const recentHotCutoff=(()=>{const d=new Date(`${recentHotReference}T00:00:00Z`);d.setUTCDate(d.getUTCDate()-13);return d.toISOString().slice(0,10)})();
  const isWithinRecentHotWindow=item=>{
    const date=item.publishedAt||item.sourcePublishedAt||item.observedAt?.slice(0,10)||'';
    return date>=recentHotCutoff&&date<=recentHotReference;
  };
  // “近期热门”以来源网站自己的本周榜单为准，不再用 ViralIndex 二次删除。
  const isHot=item=>item.views?.includes('hot')&&isWithinRecentHotWindow(item);
  const isToday=item=>item.views?.includes('today')&&REPORT_DATES.includes(itemDate(item));
const interleaveHotSources=items=>{
  let lastSource='';
  const scores=[...new Set(items.map(item=>item.viralIndex?.total||0))].sort((a,b)=>b-a);
  return scores.flatMap(score=>{
    const sameScore=items.filter(item=>(item.viralIndex?.total||0)===score);
    const queues=new Map();
    sameScore.forEach(item=>{if(!queues.has(item.source))queues.set(item.source,[]);queues.get(item.source).push(item)});
    const entries=[...queues.entries()];
    if(entries.length>1&&entries[0][0]===lastSource)entries.push(entries.shift());
    const result=[];
    while(entries.some(([,queue])=>queue.length)){
      entries.forEach(([source,queue])=>{
        if(queue.length){result.push(queue.shift());lastSource=source}
      });
    }
    return result;
  });
};
  const listItems=()=>{
    if(!category)return[];
    let items=DATA.items.filter(item=>item.contentType===category);
    items=mode==='hot'?items.filter(isHot):items.filter(isToday);
    items.sort((a,b)=>mode==='hot'
      ?String(b.hotListDate||itemDate(b)).localeCompare(String(a.hotListDate||itemDate(a)))
        ||(a.hotRank??999)-(b.hotRank??999)
        ||itemDate(b).localeCompare(itemDate(a))
      :itemDate(b).localeCompare(itemDate(a))||(b.viralIndex?.total||0)-(a.viralIndex?.total||0));
    return items;
  };
  const dateLabel=item=>item.publishedAt?item.publishedAt.replaceAll('-','.'):`观察于 ${item.observedAt?.slice(0,10).replaceAll('-','.')||'未标日期'}`;
  // evidenceCover 是旧版文字证据图，不能作为最终封面。真实封面优先，
  // 远程图失败后由页面的 recoverCover 流程继续从详情页补图。
  const coverMarkup=item=>(item.localCoverPath||item.coverUrl||item.cover)
      ?`<img src="${escHtml(item.localCoverPath||item.coverUrl||item.cover)}" alt="案例原文封面：${escHtml(item.title)}" loading="lazy">`
      :`<div class="placeholder" style="height:100%">原文详情页未找到可核验封面</div>`;
  async function recoverCover(img,item){
    if(!img||img.dataset.recovering)return;
    const sourceUrl=item.originalUrl||item.url||'';
    if(!/^https?:\/\//i.test(sourceUrl))return;
    img.dataset.recovering='1';
    const box=img.closest('.cover');
    if(!box)return;
    box.classList.add('placeholder');
    box.textContent='正在核验原文封面…';
    img.style.display='none';
    try{
      const response=await fetch('/api/find-cover',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:sourceUrl})});
      const payload=await response.json();
      const candidates=payload.ok&&Array.isArray(payload.candidates)?payload.candidates:[];
      for(const candidate of candidates){
        try{
          const imageResponse=await fetch('/api/fetch-image',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:candidate})});
          const imagePayload=await imageResponse.json();
          if(imagePayload.ok&&imagePayload.dataUrl){
            box.textContent='';box.classList.remove('placeholder');box.appendChild(img);img.style.display='block';img.src=imagePayload.dataUrl;img.dataset.recovered='1';return;
          }
        }catch(_){/* try the next verified candidate */}
      }
    }catch(_){/* show an explicit verified failure below */}
    img.remove();box.textContent='原文详情页未找到可核验封面';
  }
  const generalAnalysis=item=>item.reading?.analysis||[item.reading?.insight,item.reading?.content,item.reading?.form].filter(Boolean).join(' ');
  const LIBRARY_KEY='mkt-inspiration-library-v2';
  const DEFAULT_TAGS={
    occasion:[{id:'christmas',name:'圣诞节',color:'#868d9d'},{id:'april-fools',name:'愚人节',color:'#c7b8a1'},{id:'national-day',name:'国庆节',color:'#a3b7a0'}],
    content:[{id:'emotion',name:'情绪叙事',color:'#efd3e6'},{id:'culture',name:'文化洞察',color:'#d7e7f5'},{id:'painpoint',name:'用户痛点',color:'#eadfbd'}],
    format:[{id:'film',name:'品牌短片',color:'#d7d2f0'},{id:'event',name:'线下事件',color:'#efd9bd'},{id:'product',name:'产品创新',color:'#cde8dc'}],
    visual:[{id:'minimal',name:'极简数字',color:'#e5e5df'},{id:'surreal',name:'超现实',color:'#e6cfed'},{id:'handmade',name:'手工质感',color:'#f0d4bf'}]
  };
  const mergeTags=existing=>{
    const merged=JSON.parse(JSON.stringify(DEFAULT_TAGS));
    Object.keys(merged).forEach(folder=>{
      const incoming=Array.isArray(existing?.[folder])?existing[folder]:[];
      incoming.forEach(tag=>{
        if(!tag||!tag.id)return;
        const index=merged[folder].findIndex(item=>item.id===tag.id);
        if(index===-1)merged[folder].push(tag);else merged[folder][index]=Object.assign({},merged[folder][index],tag);
      });
    });
    return merged;
  };
  const isSavedToLibrary=itemId=>{try{const saved=JSON.parse(localStorage.getItem(LIBRARY_KEY)||'null')||{};return Array.isArray(saved.customNotes)&&saved.customNotes.some(note=>note.id==='saved-'+itemId)}catch(_){return false}};
  const FOLDER_TARGETS={
    '内容向':['content','emotion'],
    '形式向':['format','film'],
    '节点向':['occasion','christmas'],
    '视觉向':['visual','minimal']
  };
  const saveToLibrary=(item,folder)=>{
    try{
      const saved=JSON.parse(localStorage.getItem(LIBRARY_KEY)||'null')||{};
      saved.tags=mergeTags(saved.tags);
      saved.personalNotes=saved.personalNotes||{};
      saved.links=saved.links||{};
      saved.customNotes=Array.isArray(saved.customNotes)?saved.customNotes:[];
      const target=FOLDER_TARGETS[folder]||FOLDER_TARGETS['内容向'];
      const reading=item.reading||{};
      const note={
        id:'saved-'+item.id,
        title:titleOf(item),
        source:item.source||'营销灵感包',
        sourceMark:item.source||'营销灵感包',
        image:item.localCoverPath||item.coverUrl||item.cover||'',
        url:item.originalUrl||item.url||'#',
        insight:reading.insight||item.summary||'原文未说明',
        content:reading.content||item.summary||'原文未说明',
        form:reading.form||item.category||'原文未说明',
        folders:{occasion:[],content:[],format:[],visual:[]},
        savedFolder:folder,
        savedAt:new Date().toISOString()
      };
      note.folders[target[0]]=[target[1]];
      saved.customNotes=saved.customNotes.filter(existing=>existing.id!==note.id);
      saved.customNotes.push(note);
      localStorage.setItem(LIBRARY_KEY,JSON.stringify(saved));
    }catch(error){console.warn('library save failed',error)}
  };
  const readingMarkup=item=>item.contentType==='营销案例'
    ?`<div class="reading-grid" aria-live="polite"><div class="reading-item"><strong>创意洞察</strong><p data-ai-field="insight">点击后将读取原文并调用你设置的 AI 模型。</p></div><div class="reading-item"><strong>创意内容</strong><p data-ai-field="content">尚未生成。</p></div><div class="reading-item"><strong>创意形式</strong><p data-ai-field="form">尚未生成。</p></div></div>`
    :`<div class="reading-grid" aria-live="polite"><div class="reading-item news-reading"><strong>${item.contentType==='AI新闻日报'?'新闻解读':'趋势解读'}</strong><p data-ai-field="analysis">点击后将读取原文并调用你设置的 AI 模型。</p></div></div>`;
  function draw(){
    const items=listItems(),pages=Math.max(1,Math.ceil(items.length/pageSize));
    page=Math.min(page,pages);
    const shown=items.slice((page-1)*pageSize,page*pageSize);
    gridEl.innerHTML=shown.length?'':'<div class="empty-state">当前视图暂无已核验内容</div>';
    shown.forEach(item=>{
      const card=document.createElement('article');
      card.className='card';card.dataset.itemId=item.id;
      card.dataset.sourceUrl=item.originalUrl||item.url||'';
      const access=item.accessNote?`<p class="summary access-note">${escHtml(item.accessNote)}</p>`:'';
      const evidence=(item.evidenceLabel||item.evidenceText)?`<p class="summary evidence">${escHtml(item.evidenceLabel||'')}：${escHtml(item.evidenceText||'')}</p>`:'';
      const tags=(item.tags||[]).map(tag=>`<span class="mini-tag">${escHtml(tag)}</span>`).join('');
      const title=titleOf(item);
      card.innerHTML=`<div class="card-front"><div class="card-top"><time>${escHtml(dateLabel(item))}</time><span>来源：${escHtml(item.source)}</span><span class="category">${escHtml(item.category)}</span></div><div class="cover">${coverMarkup(item)}</div><h2>${escHtml(title)}</h2><div class="mini-tags">${tags}</div><p class="summary">${escHtml(item.summary||'')}</p>${evidence}${access}<div class="actions"><a class="action original-link" href="${escHtml(item.originalUrl||item.url||'')}" target="_blank" rel="noopener noreferrer">查看原文</a><button class="action read-toggle" type="button">AI帮你读</button><button class="action save-toggle" type="button">收藏</button></div></div><div class="card-back"><p class="reading-label">AI 帮你读 · 来源：${escHtml(item.source)}</p><h2 class="reading-title">${escHtml(title)}</h2>${readingMarkup(item)}<textarea class="note-input" placeholder="写下你的想法，保存进灵感库"></textarea><div class="back-actions"><button class="action return-card" type="button">返回正面</button></div></div>`;
      gridEl.appendChild(card);
      const img=card.querySelector('.cover img');
      if(img){
        const source=item.localCoverPath||item.coverUrl||item.cover||'';
        if(!source||/^data:image\/svg\+xml/i.test(source)||/evidence|placeholder|cover-fallback/i.test(source)) recoverCover(img,item);
        img.addEventListener('error',()=>recoverCover(img,item),{once:true});
      }
      card.querySelector('.return-card').onclick=()=>card.classList.remove('is-reading');
      const save=card.querySelector('.save-toggle');
      save.onclick=async()=>{const selected=await window.chooseInspirationFolder();if(!selected)return;saveToLibrary(item,selected);save.textContent=`已收藏 · ${selected}`};
      if(isSavedToLibrary(item.id)){save.textContent='已收藏'}
    });
    statusEl.textContent=`${page} / ${pages} · 共 ${items.length} 条`;
    prevEl.disabled=page<=1;nextEl.disabled=page>=pages;
    paginationEl.hidden=items.length===0||pages<=1;
  }
  const selectCategory=btn=>{
    let requested=btn.textContent.trim();
    if(mode==='today'&&!DATA.items.some(item=>item.contentType===requested&&isToday(item))){
      const fallbackButton=[...document.querySelectorAll('.filters .filter')].find(candidate=>DATA.items.some(item=>item.contentType===candidate.textContent.trim()&&isToday(item)));
      if(fallbackButton){btn=fallbackButton;requested=btn.textContent.trim();}
    }
    category=requested;mode='today';page=1;
    document.querySelectorAll('.filters .filter').forEach(b=>b.classList.toggle('active',b===btn));
    document.querySelectorAll('.time-filter').forEach(b=>b.classList.toggle('active',b.dataset.mode==='today'));
    timeFiltersEl.hidden=category==='AI新闻日报';gridEl.hidden=false;draw();
  };
  document.querySelectorAll('.filters .filter').forEach(btn=>btn.addEventListener('click',()=>selectCategory(btn)));
  document.querySelectorAll('.time-filter').forEach(btn=>btn.addEventListener('click',()=>{mode=btn.dataset.mode;page=1;document.querySelectorAll('.time-filter').forEach(b=>b.classList.toggle('active',b===btn));draw()}));
  prevEl.onclick=()=>{if(page>1){page--;draw()}};
  nextEl.onclick=()=>{if(page<Math.ceil(listItems().length/pageSize)){page++;draw()}};
  const defaultCategory=[...document.querySelectorAll('.filters .filter')].find(btn=>DATA.items.some(item=>item.contentType===btn.textContent.trim()&&isToday(item)))||[...document.querySelectorAll('.filters .filter')].find(btn=>btn.textContent.trim()==='热点趋势');
  if(defaultCategory)selectCategory(defaultCategory);
})();


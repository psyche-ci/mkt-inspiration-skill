(()=>{
  const DATA=window.MKT_INSPIRATION_DATA||{items:[]};
  const REPORT_DATES=DATA.reportDates||['2026-08-11','2026-08-10'];
  const pageSize=9;
  let page=1,category='热点趋势',mode='today';
  const gridEl=document.getElementById('grid');
  const statusEl=document.getElementById('pageStatus');
  const prevEl=document.getElementById('prevPage');
  const nextEl=document.getElementById('nextPage');
  const timeFiltersEl=document.querySelector('.time-filters');
  const paginationEl=document.querySelector('.pagination');
  const escHtml=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
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
  const coverMarkup=item=>item.evidenceCover
    ?`<div class="evidence-cover"><span>${escHtml(item.evidenceCover.label)}</span><strong>${escHtml(item.evidenceCover.metric)}</strong><small>${escHtml(item.evidenceCover.detail)}</small></div>`
    :(item.localCoverPath||item.coverUrl)
      ?`<img src="${escHtml(item.localCoverPath||item.coverUrl)}" alt="案例原文封面：${escHtml(item.title)}" loading="lazy">`
      :`<div class="placeholder" style="height:100%">原文未提供可核验封面</div>`;
  const generalAnalysis=item=>item.reading?.analysis||[item.reading?.insight,item.reading?.content,item.reading?.form].filter(Boolean).join(' ');
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
      const access=item.accessNote?`<p class="summary access-note">${escHtml(item.accessNote)}</p>`:'';
      const tags=(item.tags||[]).map(tag=>`<span class="mini-tag">${escHtml(tag)}</span>`).join('');
      card.innerHTML=`<div class="card-front"><div class="card-top"><time>${escHtml(dateLabel(item))}</time><span>来源：${escHtml(item.source)}</span><span class="category">${escHtml(item.category)}</span></div><div class="cover">${coverMarkup(item)}</div><h2>${escHtml(item.title)}</h2><div class="mini-tags">${tags}</div><p class="summary">${escHtml(item.summary)}</p><p class="summary evidence">${escHtml(item.evidenceLabel)}：${escHtml(item.evidenceText)}</p>${access}<div class="actions"><a class="action original-link" href="${escHtml(item.originalUrl)}" target="_blank" rel="noopener noreferrer">查看原文</a><button class="action read-toggle" type="button">AI帮你读</button><button class="action save-toggle" type="button">收藏</button></div></div><div class="card-back"><p class="reading-label">AI 帮你读 · 来源：${escHtml(item.source)}</p><h2 class="reading-title">${escHtml(item.title)}</h2>${readingMarkup(item)}<textarea class="note-input" placeholder="写下你的想法，保存进灵感库"></textarea><div class="back-actions"><button class="action return-card" type="button">返回正面</button></div></div>`;
      gridEl.appendChild(card);
      const img=card.querySelector('.cover img');
      if(img)img.addEventListener('error',()=>{const cover=img.parentElement;cover.classList.add('placeholder');cover.textContent='封面加载失败，请重新核验原文图片';});
      card.querySelector('.return-card').onclick=()=>card.classList.remove('is-reading');
      const save=card.querySelector('.save-toggle');
      save.onclick=()=>{const folders=['内容向','形式向','节点向','视觉向'];const selected=prompt(`收藏到哪个文件夹？\n${folders.join(' / ')}`,'内容向');if(!folders.includes(selected))return;localStorage.setItem(`mkt-inspiration-save-${item.id}`,JSON.stringify({folder:selected,item}));save.textContent=`已收藏 · ${selected}`};
      const saved=localStorage.getItem(`mkt-inspiration-save-${item.id}`);if(saved){try{save.textContent=`已收藏 · ${JSON.parse(saved).folder}`}catch{}}
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

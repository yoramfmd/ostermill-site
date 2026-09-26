var DETAILS={
proposal:{phase:'DECIDE · LATE FEBRUARY',title:'Proposal and demonstration',meta:'OWNER · T. BRINDLE / P. NAIR / D. OKAFOR',copy:'Tom proposes Agent v1. Priya builds a four-hour demonstration. The Friday meeting creates interest but no decision.',links:[['T1','transcripts/T1-friday-demo.md','Friday demonstration'],['CAL','calendar.html#m4','Meeting summary']]},
before:{phase:'DECIDE · WEEK 1',title:'Before-state week',meta:'OWNER · D. OKAFOR / R. VAUGHN',copy:'One ordinary week was counted before the product was shaped. The project begins with the work as it exists, not the demonstration.',links:[['A','exhibits.html#ex-a','Ruth’s week as a log'],['CAL','calendar.html#m2','Queue observation meeting']]},
prototype:{phase:'DECIDE · WEEKS 2 TO 4',title:'Protected cases and prototypes',meta:'OWNER · P. NAIR / D. OKAFOR / R. VAUGHN',copy:'Three deliberately rough product shapes are tested against protected cases. Two shapes and Agent v1 are withdrawn.',links:[['LAB','prototypes.html','Prototype lab'],['T2','transcripts/T2-adjudication-withdrawal.md','Adjudication and withdrawal'],['CAL','calendar.html#m7','Meeting summary']]},
go:{phase:'GATE · WEEK 5 · 2 APRIL',title:'Go memo',meta:'SIGNED · ALL FIVE / CFO BY OFFICE',copy:'Agent v2, the triager, advances to Design with a retirement condition, named non-goals and no payback-period theater.',links:[['B','exhibits.html#ex-b','The go decision'],['T3','transcripts/T3-go-meeting.md','Go meeting'],['PLAN','project-plan.html','Plan of record']]},
design:{phase:'DESIGN · WEEKS 5 TO 9',title:'Two briefs, walls and memory',meta:'OWNER · D. OKAFOR / P. NAIR',copy:'The Human Brief and Executable Brief are written from prototype behavior. The hours claim is corrected, memory is bounded and the renegotiation signal becomes a wall.',links:[['C','briefs.html#human','Human Brief'],['D','briefs.html#executable','Executable Brief'],['T4','transcripts/T4-hours-debate.md','Design and hours debate'],['PEOPLE','persona-cards-v2.html','Design-phase personas']]},
approval:{phase:'DESIGN · 6 MAY',title:'Approval moment',meta:'OWNER · R. VAUGHN / M. ELLERY / P. NAIR',copy:'The review budget, information hierarchy, escalation cap and random sample are specified before launch.',links:[['E','approval-screen.html','Approval screen, running'],['CAL','calendar.html#m13','Meeting summary']]},
eval:{phase:'PROVE · WEEKS 8 TO 11',title:'Evaluation passes 1 to 3',meta:'OWNER · R. VAUGHN / D. OKAFOR / P. NAIR',copy:'The full set is rerun after each change. A retrieval improvement causes an adversarial regression, which is found because untouched cases are rerun too.',links:[['EVAL','eval-simulator.html','Run the evaluation bench'],['F','exhibits.html#ex-f','Eval v3 readout']]},
readiness:{phase:'GATE · WEEK 11',title:'All-owner readiness review',meta:'DECISION · LAUNCH AT RUNG 2',copy:'Every granted capability is reviewed. Write-off authority is suspended in under two minutes. Launch is approved with every output still reviewed by a person.',links:[['F','exhibits.html#ex-f','Readout that shipped'],['T5','transcripts/T5-readiness-review.md','Readiness review'],['CAL','calendar.html#m16','Meeting summary']]},
launch:{phase:'OBSERVE · WEEK 12',title:'Launch at rung 2',meta:'SCOPE · NOTHING ABOVE THE BREAK',copy:'The agent enters production with six instruments active and a person reviewing every draft.',links:[['AGENT','agent.html','Monitoring replay'],['G','exhibits.html#ex-g','First-month instruments']]},
month:{phase:'OBSERVE · FIRST MONTH TO 14 JULY',title:'First month observed',meta:'OWNER · SIX INSTRUMENT OWNERS',copy:'Production is measured by instrument and case class. The aggregate is never allowed to conceal the difficult slices.',links:[['G','exhibits.html#ex-g','First-month evidence'],['CAL','calendar.html','Full project calendar']]},
incident:{phase:'OBSERVE · 21 JULY TO 4 AUGUST',title:'The incident the calendar could not see',meta:'SENT · 21 JUL / FOUND · 4 AUG',copy:'A correct reminder against every available input reaches a family five days after the account owner dies. The hold note exists outside retrieval scope.',links:[['H','exhibit-h-postmortem.html','Incident record'],['AGENT','agent.html','Replay the information boundary'],['CAL','calendar.html#m18','Incident thread']]},
postmortem:{phase:'OBSERVE · 11 AUGUST',title:'Incident review',meta:'OWNER · ALL FIVE',copy:'The incident is classified as a reachable-record failure, not a model defect. Retrieval is not quietly widened into free text.',links:[['H','exhibit-h-postmortem.html','Postmortem'],['T6','transcripts/T6-postmortem.md','Postmortem meeting']]},
quarter:{phase:'OPERATE · END OF QUARTER',title:'Quarter review',meta:'DECISION · RUNG 3 REFUSED',copy:'The promotion is refused because reviewer behavior contaminates the apparent override rate. A fresh-eyes condition is attached.',links:[['G','exhibits.html#ex-g','Operating evidence'],['PLAN','project-plan.html','Revision 1.2']]},
changes:{phase:'OPERATE · JANUARY TO APRIL',title:'Three accommodations',meta:'DEPOT / SHIPMENT / NATIONAL ACCOUNTS',copy:'Each change is reasonable alone. Together they move the product beyond its approved declaration.',links:[['I','exhibit-i-revision-record.html','Revision record'],['CAL','calendar.html#s-operate','Operating-year meetings']]},
reconstruction:{phase:'OPERATE · MAY',title:'The reconstruction response',meta:'OWNER · D. OKAFOR / M. ELLERY / LEGAL',copy:'A legal request is answered from the sealed record eight months and two model swaps later. The third dispute-flag incident funds the records project.',links:[['J','exhibits.html#ex-j','The appeal'],['CAL','calendar.html#m25','Meeting summary']]},
revision:{phase:'OPERATE · JUNE',title:'Cumulative diff and restoration',meta:'REVISION · 1.3',copy:'National accounts are revoked on the cumulative diff. Write-off authority is restored only after both recorded conditions and the authority audit are satisfied.',links:[['I','exhibit-i-revision-record.html','Revision record'],['PLAN','project-plan.html','Maintained plan'],['CAL','calendar.html#m26','Cumulative-diff meeting']]},
handover:{phase:'OPERATE · OCTOBER',title:'CFO retirement handover',meta:'AUTHORITY · OFFICE, NOT PERSON',copy:'The original signer leaves. The later authority audit shows why signatures must outlive the people who made them.',links:[['I','exhibit-i-revision-record.html','Revision record'],['CAL','calendar.html#m19a','Handover summary']]},
year:{phase:'OPERATE · TWELVE MONTHS',title:'Year review',meta:'EVAL SET · NINETEEN',copy:'Two model swaps are absorbed under the personnel-change protocol. The revision record closes the year and the supervising role is formalized.',links:[['I','exhibit-i-revision-record.html','Year revision record'],['K','exhibit-k-posting.html','Agent-supervisor role'],['CAL','calendar.html#m30','Year review meeting']]}
};
function showDetail(id){var d=DETAILS[id];if(!d)return;document.getElementById('detail-phase').textContent=d.phase;document.getElementById('detail-title').textContent=d.title;document.getElementById('detail-meta').textContent=d.meta;document.getElementById('detail-copy').textContent=d.copy;var box=document.getElementById('detail-links');box.innerHTML='';d.links.forEach(function(l){var a=document.createElement('a');a.href=l[1];a.innerHTML='<span>'+l[2]+'</span><b>'+l[0]+' →</b>';box.appendChild(a)});if(innerWidth<1100)document.querySelector('.detail').scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelectorAll('[data-detail]').forEach(function(b){b.addEventListener('click',function(){showDetail(b.dataset.detail)})});
document.querySelectorAll('.filter').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.filter').forEach(function(x){x.classList.remove('on')});b.classList.add('on');var f=b.dataset.filter;document.querySelectorAll('.gantt-row[data-phase]').forEach(function(r){r.style.display=f==='all'||r.dataset.phase===f?'grid':'none'})})});showDetail('before');

document.querySelectorAll('.gantt-card.desktop-gantt').forEach(function(card,index){
  var rail=document.createElement('div');
  var thumb=document.createElement('div');
  rail.className='gantt-scrollbar';
  thumb.className='gantt-scroll-thumb';
  rail.setAttribute('role','scrollbar');
  rail.setAttribute('aria-label',index===0?'Scroll the sixteen-week project chart':'Scroll the operating-year chart');
  rail.setAttribute('aria-orientation','horizontal');
  rail.setAttribute('aria-valuemin','0');
  rail.tabIndex=0;
  rail.appendChild(thumb);
  card.appendChild(rail);
  function sync(){
    var max=Math.max(0,card.scrollWidth-card.clientWidth);
    var railWidth=rail.clientWidth-10;
    var thumbWidth=Math.max(44,railWidth*(card.clientWidth/card.scrollWidth));
    var travel=Math.max(0,railWidth-thumbWidth);
    thumb.style.width=thumbWidth+'px';
    thumb.style.transform='translateX('+(max?card.scrollLeft/max*travel:0)+'px)';
    rail.setAttribute('aria-valuemax',String(Math.round(max)));
    rail.setAttribute('aria-valuenow',String(Math.round(card.scrollLeft)));
  }
  function setFromPointer(event,offset){
    var rect=rail.getBoundingClientRect();
    var max=Math.max(0,card.scrollWidth-card.clientWidth);
    var travel=Math.max(1,rail.clientWidth-10-thumb.offsetWidth);
    var x=Math.max(0,Math.min(travel,event.clientX-rect.left-5-offset));
    card.scrollLeft=x/travel*max;
  }
  var dragging=false,grab=0;
  rail.addEventListener('pointerdown',function(event){
    event.preventDefault();
    dragging=true;
    grab=event.target===thumb?event.clientX-thumb.getBoundingClientRect().left:thumb.offsetWidth/2;
    rail.setPointerCapture(event.pointerId);
    setFromPointer(event,grab);
  });
  rail.addEventListener('pointermove',function(event){if(dragging)setFromPointer(event,grab)});
  rail.addEventListener('pointerup',function(event){dragging=false;rail.releasePointerCapture(event.pointerId)});
  rail.addEventListener('keydown',function(event){
    var amount=0;
    if(event.key==='ArrowLeft')amount=-80;
    if(event.key==='ArrowRight')amount=80;
    if(event.key==='PageUp')amount=-card.clientWidth*.8;
    if(event.key==='PageDown')amount=card.clientWidth*.8;
    if(event.key==='Home')card.scrollLeft=0;
    else if(event.key==='End')card.scrollLeft=card.scrollWidth;
    else if(amount)card.scrollLeft+=amount;
    else return;
    event.preventDefault();
  });
  card.addEventListener('scroll',sync,{passive:true});
  if(window.ResizeObserver)new ResizeObserver(sync).observe(card);
  window.addEventListener('resize',sync);
  sync();
});

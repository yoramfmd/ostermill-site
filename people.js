const profiles=[...document.querySelectorAll('.person-profile')],cards=[...document.querySelectorAll('[data-person]')];
function selectProfile(id){const match=profiles.find(p=>p.id===id);if(!match)return;profiles.forEach(p=>p.hidden=p!==match);cards.forEach(c=>{if(c.dataset.person===id)c.setAttribute('aria-current','true');else c.removeAttribute('aria-current')});}
function route(){const id=location.hash.slice(1);if(!id)selectProfile(profiles[0].id);else if(profiles.some(p=>p.id===id))selectProfile(id)}
selectProfile(profiles.some(p=>p.id===location.hash.slice(1))?location.hash.slice(1):profiles[0].id);
cards.forEach(c=>c.addEventListener('click',()=>selectProfile(c.dataset.person)));window.addEventListener('hashchange',route);
const dialog=document.querySelector('dialog');document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();dialog.showModal()}));

const form=document.querySelector('.search'),input=form.querySelector('input'),cards=[...document.querySelectorAll('.products .product')],status=document.querySelector('#search-status');
function filter(q){q=q.trim().toLowerCase();let n=0;for(const card of cards){card.hidden=!!q&&!`${card.textContent} ${card.dataset.series}`.toLowerCase().includes(q);if(!card.hidden)n++;}status.textContent=q?`${n} matching categories.`:'';}
form.addEventListener('submit',e=>{e.preventDefault();filter(input.value);document.querySelector('#categories').scrollIntoView()});
input.addEventListener('input',()=>{if(!input.value)filter('')});
document.querySelectorAll('[data-category]').forEach(a=>a.addEventListener('click',()=>{input.value=a.dataset.category;filter(input.value)}));
document.querySelector('.cats .here').addEventListener('click',()=>{input.value='';filter('')});
const dialog=document.querySelector('dialog');document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();dialog.showModal()}));
const requestedQuery=new URLSearchParams(location.search).get('q');if(requestedQuery){input.value=requestedQuery;filter(requestedQuery);document.querySelector('#categories').scrollIntoView();}

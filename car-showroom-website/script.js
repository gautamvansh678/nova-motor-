const WHATSAPP_NUMBER = "919876543210"; // Replace with your WhatsApp number: country code + digits only
const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav nav');
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.car-card').forEach(card=>card.hidden=btn.dataset.filter!=='all'&&card.dataset.type!==btn.dataset.filter)}));
document.querySelectorAll('.heart').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('saved');btn.textContent=btn.classList.contains('saved')?'♥':'♡'}));
document.querySelectorAll('.enquire').forEach(btn=>btn.addEventListener('click',()=>{const car=btn.dataset.car;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi NOVA MOTORS, I am interested in the '+car+'. Please share more details.')}`,'_blank')}));
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);const msg=`Car enquiry%0AName: ${encodeURIComponent(f.get('name'))}%0APhone: ${encodeURIComponent(f.get('phone'))}%0ACar: ${encodeURIComponent(f.get('car'))}%0AMessage: ${encodeURIComponent(f.get('message')||'Please contact me')}`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,'_blank')});


// Premium polish: subtle scroll reveals; respects reduced-motion preferences.
document.querySelectorAll('.section-heading,.car-card,.service-grid article,.about-copy,.contact>div,.contact form,.final-cta').forEach(el=>el.classList.add('reveal'));
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
 }),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}

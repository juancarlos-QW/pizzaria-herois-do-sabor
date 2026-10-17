const LINKS={
  menu:'https://app.cardapioweb.com/pizzariaheroisdosabor?s=cb',
  whats:'https://wa.me/5554991221339?text='+encodeURIComponent('Olá, Heróis do Sabor! Quero fazer um pedido 🍕'),
  phone:'tel:+5554991221339',
  maps:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Rua Vêneto, 310, Nova Vicenza, Farroupilha - RS'),
  insta:'https://www.instagram.com/pizzariaheroisdosabor/'
};
const DIALOGS={
  order:{title:'Bora pedir?',copy:'Escolha o seu canal favorito. Atendemos todos os dias a partir das 18h, com tele-entrega e retirada.',links:[['Pedir pelo cardápio online',LINKS.menu],['Chamar no WhatsApp',LINKS.whats],['Ligar: (54) 99122-1339',LINKS.phone]]},
  delivery:{title:'A pizza vai até você.',copy:'Tele-entrega em Farroupilha, todos os dias a partir das 18h. É só escolher os sabores e esperar o herói chegar.',links:[['Pedir pelo cardápio online',LINKS.menu],['Pedir pelo WhatsApp',LINKS.whats]]},
  takeaway:{title:'Passa aqui e leva.',copy:'Rua Vêneto, 310, sala 100 · Nova Vicenza, Farroupilha/RS. Faça o pedido antes e retire quentinha, todos os dias a partir das 18h.',links:[['Ver no Google Maps',LINKS.maps],['Encomendar pelo cardápio online',LINKS.menu],['Avisar pelo WhatsApp',LINKS.whats]]}
};
const actionDialog=document.querySelector('#action-dialog');
function openAction(type){
  const data=DIALOGS[type]||DIALOGS.order,content=document.querySelector('#dialog-content');
  document.querySelector('#dialog-title').textContent=data.title;
  document.querySelector('#dialog-copy').textContent=data.copy;
  content.replaceChildren();
  data.links.forEach(([name,url],i)=>{const a=document.createElement('a');a.textContent=name+' ↗';a.href=url;a.style.setProperty('--i',i);if(!url.startsWith('tel:')){a.target='_blank';a.rel='noopener'}content.append(a)});
  actionDialog.showModal();
}
document.querySelectorAll('[data-dialog]').forEach(b=>b.addEventListener('click',()=>openAction(b.dataset.dialog)));

const menuButton=document.querySelector('#menu-toggle'),menu=document.querySelector('#mobile-menu');
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false')}
menuButton.addEventListener('click',()=>{menu.hidden=!menu.hidden;menuButton.setAttribute('aria-expanded',String(!menu.hidden))});
menu.querySelectorAll('a,button').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{const img=document.querySelector('#large-photo'),src=b.querySelector('img');img.src=src.src;img.alt=src.alt;document.querySelector('#photo-dialog').showModal()}));

// Letras do logotipo animadas uma a uma
document.querySelectorAll('h1 .word, .footer-brand').forEach(el=>{
  const text=el.textContent;el.textContent='';
  [...text].forEach((ch,i)=>{const s=document.createElement('span');s.className='char';s.textContent=ch;s.style.setProperty('--i',i);el.append(s)});
});
document.querySelectorAll('.service').forEach((s,i)=>s.style.setProperty('--i',i));
document.querySelectorAll('.flavors li').forEach((li,i)=>li.style.setProperty('--i',i));

// Elementos aparecem ao rolar a página
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');revealObserver.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('[data-reveal]').forEach(el=>{
  const siblings=[...el.parentElement.querySelectorAll(':scope>[data-reveal]')];
  el.style.transitionDelay=(siblings.indexOf(el)*90)+'ms';
  revealObserver.observe(el);
});
// a galeria e os chips mantêm o atraso só na entrada, sem atrasar o hover depois
document.querySelectorAll('.gallery [data-reveal]').forEach(el=>el.addEventListener('transitionend',()=>{el.style.transitionDelay=''},{once:true}));
const flavors=document.querySelector('.flavors');new MutationObserver((_,o)=>{if(flavors.classList.contains('is-in')){setTimeout(()=>flavors.classList.add('is-done'),1400);o.disconnect()}}).observe(flavors,{attributes:true});

// Cenário de fundo: troca de foto conforme a seção que está no meio da tela
const scene=document.querySelector('.scene'),sceneImgs=[...scene.querySelectorAll('.scene-img')];
const sceneObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)sceneImgs.forEach((img,i)=>img.classList.toggle('is-active',i===Number(e.target.dataset.scene)))}),{rootMargin:'-45% 0px -45% 0px'});
document.querySelectorAll('[data-scene]').forEach(s=>sceneObserver.observe(s));

// Cabeçalho, barra de progresso, selo flutuante, parallax e letreiro reagindo à rolagem
const header=document.querySelector('header'),fab=document.querySelector('.fab'),hero=document.querySelector('.hero');
const marquee=document.querySelector('.marquee div'),parallax=[...document.querySelectorAll('[data-parallax]')];
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
let lastY=scrollY,ticking=false,skewTimer;
function onScroll(){
  const y=scrollY,max=document.documentElement.scrollHeight-innerHeight,delta=y-lastY;
  header.style.setProperty('--progress',max>0?y/max:0);
  if(!reduceMotion)scene.style.setProperty('--y',max>0?y/max:0);
  header.classList.toggle('is-hidden',delta>4&&y>300&&menu.hidden);
  if(delta<-4)header.classList.remove('is-hidden');
  fab.classList.toggle('is-visible',y>hero.offsetHeight*.6);
  if(!reduceMotion){
    marquee.style.setProperty('--skew',Math.max(-12,Math.min(12,delta*-.6))+'deg');
    clearTimeout(skewTimer);skewTimer=setTimeout(()=>marquee.style.setProperty('--skew','0deg'),120);
    parallax.forEach(img=>{const r=img.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=(r.top+r.height/2-innerHeight/2)/innerHeight;img.style.translate=`0 ${p*-60}px`});
  }
  lastY=y;ticking=false;
}
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(onScroll);ticking=true}},{passive:true});
onScroll();

(function(){
var $=function(i){return document.getElementById(i)};
var mb=$('mb'),nv=$('nav');
mb.onclick=function(){mb.setAttribute('aria-expanded',nv.classList.toggle('o'))};
document.querySelectorAll('[data-n]').forEach(function(e){var n=+e.dataset.n,k=0,t=setInterval(function(){k++;e.textContent=Math.round(n*k/30);if(k>=30)clearInterval(t)},30)});
/* tabs that switch panels */
document.querySelectorAll('.tabs[data-for]').forEach(function(t){t.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
[].forEach.call(t.children,function(x){x.classList.toggle('on',x==b)});var k=b.dataset.k;
document.querySelectorAll(t.dataset.for).forEach(function(p){p.hidden=!(k=='All'||p.dataset.k==k)})})});
/* gallery lightbox */
var lb=$('lb');
document.querySelectorAll('.gal [data-src]').forEach(function(b){b.onclick=function(){lb.querySelector('img').src=b.dataset.src;lb.querySelector('img').alt=b.dataset.cap;lb.querySelector('p').textContent=b.dataset.cap;lb.hidden=false}});
lb.onclick=function(){lb.hidden=true};
document.addEventListener('keydown',function(e){if(e.key=='Escape')lb.hidden=true});
/* FAQ search and filter */
var fs=$('fs');if(fs){var fc='All',items=document.querySelectorAll('#fl details');
var run=function(){var q=fs.value.toLowerCase(),n=0;items.forEach(function(d){var ok=(fc=='All'||d.dataset.k==fc)&&d.textContent.toLowerCase().indexOf(q)>-1;d.hidden=!ok;if(ok)n++});$('fe').hidden=n>0};
document.getElementById('ft').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;[].forEach.call(this.children,function(x){x.classList.toggle('on',x==b)});fc=b.dataset.k;run()});fs.oninput=run}
/* quote form */
var qf=$('qf');if(qf){var p=new URLSearchParams(location.search);
if(p.get('l'))qf.elements.l.value=p.get('l');if(p.get('s'))qf.elements.s.value=p.get('s');
qf.onsubmit=function(e){e.preventDefault();var v=function(n){return qf.elements[n].value};
var m='Quote request from '+v('n')+'\nPhone: '+v('p')+'\nLocation: '+v('l')+'\nProperty: '+v('t')+'\nService: '+v('s')+(v('a')?'\nArea: '+v('a')+' m²':'')+(v('m')?'\nDetails: '+v('m'):'');
window.open('https://wa.me/27612152973?text='+encodeURIComponent(m),'_blank','noopener')}}
/* legal dialogs */
var D={pv:['Privacy policy and POPIA','<p>Advance collects the details you submit through the quote form or WhatsApp, such as your name, phone number, location and project details, only to respond to your request and provide a quote.</p><p>We handle personal information in line with the Protection of Personal Information Act (POPIA). You may ask to see, correct or delete your information by contacting us on +27 61 215 2973.</p>'],tm:['Terms of service','<p>Quotes are estimates based on the information supplied and are subject to confirmation in writing. Work is carried out under the terms agreed in the accepted quote. By using this website you agree to these terms.</p>'],ds:['Website disclaimer','<p>Information on this website is general and may change without notice. Images show examples of finishes and are illustrative. Colours and appearance vary by product and site conditions. Contact us for advice specific to your project.</p>']};
var dg=$('dg');
document.querySelectorAll('[data-d]').forEach(function(a){a.onclick=function(e){e.preventDefault();var d=D[a.dataset.d];$('dc').innerHTML='<h3>'+d[0]+'</h3>'+d[1];dg.showModal?dg.showModal():dg.setAttribute('open','')}});
$('dx').onclick=function(){dg.close?dg.close():dg.removeAttribute('open')};
})();

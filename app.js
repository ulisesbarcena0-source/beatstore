// EDITÁ ESTE ARCHIVO para cambiar tus datos y agregar beats.
// Los archivos de audio/portadas se alojan en GitHub Pages (o en un hosting) y se enlazan aquí.
const CONFIG = {
  email: "TU_CORREO@EJEMPLO.COM",
  spotify: "https://open.spotify.com/",
  youtube: "https://youtube.com/",
  beats: [
  ]
};
const $=s=>document.querySelector(s);
$("#year").textContent=new Date().getFullYear();
$("#serviceMail").href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("Consulta por servicio")}`;
$("#emailLink").href=`mailto:${CONFIG.email}`;
$("#spotify").href=CONFIG.spotify;$("#youtube").href=CONFIG.youtube;
function money(n){return new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(n||0)}
function render(){
 const host=$("#beats");
 if(!CONFIG.beats.length){host.innerHTML='<div class="empty">Todavía no hay beats publicados. Agregá tus beats en <b>app.js</b> y subí sus archivos al repositorio.</div>';return}
 host.innerHTML=CONFIG.beats.map((b,i)=>`<article class="beat">
 <img class="cover" src="${b.cover||'cover-placeholder.svg'}" alt="Portada de ${b.title}" onerror="this.src='cover-placeholder.svg'">
 <div class="beat-content"><h3>${b.title}</h3><p>${b.description||""}</p><div class="tags"><span class="tag">${b.type||"WAV"}</span>${b.free?'<span class="tag">GRATIS</span>':'<span class="tag">LICENCIA</span>'}</div>
 <div class="price">${b.free?"Gratis":money(b.price)}</div>
 <a class="buy" href="${b.link||('mailto:'+CONFIG.email+'?subject='+encodeURIComponent('Compra: '+b.title)+'&body='+encodeURIComponent('Hola, quiero '+b.title+'. Mi email para entrega es: '))}" ${b.link?'target="_blank" rel="noopener"':''}>${b.free?"Descargar gratis":"Comprar / consultar"}</a></div></article>`).join("");
}
render();

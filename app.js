(function(){
"use strict";var c=window.BIOSITE||{};var $=function(s){return document.querySelector(s)};
var valid=function(v){return /^(https?:\/\/|mailto:|tel:)/i.test(v||"")};
function icon(name){var el=document.createElementNS("http://www.w3.org/2000/svg","svg");el.classList.add("icon");el.setAttribute("aria-hidden","true");var u=document.createElementNS("http://www.w3.org/2000/svg","use");u.setAttribute("href","#i-"+name);el.appendChild(u);return el}
function demo(title){$("#dialog-title").textContent=title||"Seu link vai aqui.";if($("#demo").showModal)$("#demo").showModal();else alert("Link demonstrativo. Configure em config.js.")}
function elm(tag,cls,txt){var e=document.createElement(tag);e.className=cls||"";if(txt)e.textContent=txt;return e}
function buttonFor(item,isSocial,i){var active=valid(item.url),el=elm(active?"a":"button",isSocial?"social":"link"+(item.featured?" featured":""));if(active){el.href=item.url;if(/^https?:/i.test(item.url)){el.target="_blank";el.rel="noopener noreferrer"}}else{el.type="button";el.addEventListener("click",function(){demo(item.title)})}if(isSocial){el.title=item.title;el.setAttribute("aria-label",item.title);el.appendChild(icon(item.icon||"arrow"));return el}
el.style.setProperty("--delay",(i*75)+"ms");var ib=elm("span","link-icon");ib.appendChild(icon(item.icon||"arrow"));el.appendChild(ib);
var content=elm("span","link-content");content.appendChild(elm("span","link-title",item.title));content.appendChild(elm("span","link-caption",item.caption));el.appendChild(content);
var ar=elm("span","link-arrow");ar.appendChild(icon("arrow"));el.appendChild(ar);return el}
var name=c.name||"Ana Lemos";document.title=name+" | Links e contato";$("#name").textContent="";$("#name").appendChild(document.createTextNode(c.firstName||"Ana"));$("#name").appendChild(document.createTextNode(" "));$("#name").appendChild(elm("em","",c.lastName||"Lemos."));
$("#category").textContent=c.category||"";$("#description").textContent=c.bio||"";$("#status").textContent=c.status||"";$("#copyright-name").textContent=name;$("#year").textContent=new Date().getFullYear();
if(c.photo){$("#avatar").src=c.photo;$("#avatar").alt=c.photoAlt||"Foto de perfil"}
(c.links||[]).forEach(function(l,i){$("#links").appendChild(buttonFor(l,false,i))});(c.socials||[]).forEach(function(l,i){$("#socials").appendChild(buttonFor(l,true,i))});
function theme(x){document.body.dataset.theme=x;$("#theme-toggle use").setAttribute("href",x==="dark"?"#i-sun":"#i-moon");try{localStorage.setItem("bio-theme",x)}catch(e){}}
var stored;try{stored=localStorage.getItem("bio-theme")}catch(e){}theme(stored||c.theme||"light");$("#theme-toggle").addEventListener("click",function(){theme(document.body.dataset.theme==="dark"?"light":"dark")});
$("#close-demo").addEventListener("click",function(){$("#demo").close()});$("#ok-demo").addEventListener("click",function(){$("#demo").close()});$("#demo").addEventListener("click",function(e){if(e.target===$("#demo"))$("#demo").close()});
function toast(t){$("#toast").textContent=t;$("#toast").classList.add("visible");setTimeout(function(){$("#toast").classList.remove("visible")},2600)}
$("#share").addEventListener("click",async function(){try{if(navigator.share){await navigator.share({title:document.title,url:location.href});return}if(navigator.clipboard){await navigator.clipboard.writeText(location.href);toast("Link copiado!");return}}catch(e){if(e.name==="AbortError")return}toast("Copie a URL na barra do navegador")});
})();
import{a as d,S as f,i as a}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="50855680-e7e32480db9ff9b763cd16451",h="https://pixabay.com/api";function m(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(h,{params:o}).then(e=>e.data).catch(e=>{throw console.error("Error fetching data:",e),e})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",function(s){s.preventDefault();const e=c.elements["search-text"].value.trim();if(e===""){a.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L(),m(e).then(n=>{n.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(n.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map

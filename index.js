import{a as f,i as p,S as m}from"./assets/vendor-vwbIfzmB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="50855680-e7e32480db9ff9b763cd16451",y="https://pixabay.com/api/";function g(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(y,{params:r}).then(L)}function L(s){const r=s.data.hits;return r.length===0?(p.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),[]):r}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");document.querySelector(".form");let b=new m(".gallery a",{});function q(s){const r=s.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:o,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${n}" alt="${e}" width='360'/>
        </a>
        <ul class='list'>
      
      <li class='item'>
         <span>Likes</span>
         <span>${t}</span>
        </li>

        <li class='item'>
          <span>views</span>
         <span>${o}</span>
         </li>

         <li class='item'>
          <span>comments</span>
         <span>${u}</span>
         </li>

         <li class='item'>
          <span>downloads</span>
         <span>${d}</span>
         </li>
       </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function v(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const a=document.querySelector(".form");a.addEventListener("submit",function(s){s.preventDefault();const n=a.elements["search-text"].value.trim();if(n===""){a.reset();return}S(),v(),g(n).then(q).catch(console.log).finally(w),a.reset()});
//# sourceMappingURL=index.js.map

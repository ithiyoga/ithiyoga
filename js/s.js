!function(a,e){zaraz.debug=(a="")=>{document.cookie=`zarazDebug=${a}; path=/`,location.reload()},window.zaraz._al=function(e,t,r){a.zaraz.listeners.push({item:e,type:t,callback:r}),e.addEventListener(t,r)},zaraz.preview=(a="")=>{document.cookie=`zarazPreview=${a}; path=/`,location.reload()},zaraz.i=function(a){const t=e.createElement("div");t.innerHTML=unescape(a);const r=t.querySelectorAll("script");for(let a=0;a<r.length;a++){const t=e.createElement("script");r[a].innerHTML&&(t.innerHTML=r[a].innerHTML);for(const e of r[a].attributes)t.setAttribute(e.name,e.value);e.head.appendChild(t),r[a].remove()}e.body.appendChild(t)},zaraz.f=async function(a,e){const t={credentials:"include",keepalive:!0,mode:"no-cors"};return e&&(t.method="POST",t.body=new URLSearchParams(e),t.headers={"Content-Type":"application/x-www-form-urlencoded"}),await fetch(a,t)},window.zaraz._p=async a=>new Promise((e=>{a&&(a.e&&a.e.forEach((a=>{try{new Function(a)()}catch(e){console.error(`Error executing script: ${a}\n`,e)}})),Promise.allSettled((a.f||[]).map((a=>fetch(a[0],a[1]))))),e()})),zaraz.pageVariables={},zaraz.__zcl=zaraz.__zcl||{},zaraz.track=async function(a,e,t){return new Promise(((r,z)=>{const i={name:a,data:{}};for(const a of[localStorage,sessionStorage])Object.keys(a||{}).filter((a=>a.startsWith("_zaraz_"))).forEach((e=>{try{i.data[e.slice(7)]=JSON.parse(a.getItem(e))}catch{i.data[e.slice(7)]=a.getItem(e)}}));Object.keys(zaraz.pageVariables).forEach((a=>i.data[a]=JSON.parse(zaraz.pageVariables[a]))),Object.keys(zaraz.__zcl).forEach((a=>i.data[`__zcl_${a}`]=zaraz.__zcl[a])),i.data.__zarazMCListeners=zaraz.__zarazMCListeners,i.data={...i.data,...e},i.zarazData=zarazData,fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).catch((()=>fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}))).then((function(a){return zarazData._let=(new Date).getTime(),a.ok||z(),204!==a.status&&a.json()})).then((async a=>{await zaraz._p(a),"function"==typeof t&&t()})).finally((()=>r()))}))},zaraz.set=function(a,e,t){try{e=JSON.stringify(e)}catch(a){return}prefixedKey="_zaraz_"+a,sessionStorage&&sessionStorage.removeItem(prefixedKey),localStorage&&localStorage.removeItem(prefixedKey),delete zaraz.pageVariables[a],void 0!==e&&(t&&"session"==t.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,e):t&&"page"==t.scope?zaraz.pageVariables[a]=e:localStorage&&localStorage.setItem(prefixedKey,e),zaraz.__watchVar={key:a,value:e})};for(const{m:a,a:e}of zarazData.q.filter((({m:a})=>["debug","set"].includes(a))))zaraz[a](...e);for(const{m:a,a:e}of zaraz.q)zaraz[a](...e);delete zaraz.q,delete zarazData.q,zaraz.fulfilTrigger=function(a,e,t,r){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={}),zaraz.__zarazTriggerMap[a]||(zaraz.__zarazTriggerMap[a]=""),zaraz.__zarazTriggerMap[a]+="*"+e+"*",zaraz.track("__zarazEmpty",{...t,__zarazClientTriggers:zaraz.__zarazTriggerMap[a]},r)},window.dataLayer=a.dataLayer||[],zaraz._processDataLayer=a=>{for(const e of Object.entries(a))zaraz.set(e[0],e[1],{scope:"page"});if(a.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(a.event))return;let e={};for(let t of dataLayer.slice(0,dataLayer.indexOf(a)+1))e={...e,...t};delete e.event,a.event.startsWith("gtm.")||zaraz.track(a.event,e)}};const t=a.dataLayer.push;Object.defineProperty(a.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...a){let e=t.apply(this,a);return zaraz._processDataLayer(a[0]),e}}),dataLayer.forEach((a=>zaraz._processDataLayer(a))),zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((a=>clearTimeout(a))),zaraz._timeouts=[]},zaraz._rl=function(){a.zaraz.listeners&&a.zaraz.listeners.forEach((a=>a.item.removeEventListener(a.type,a.callback))),window.zaraz.listeners=[]},history.pushState=function(){try{zaraz._rl(),zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments),setTimeout((()=>{zarazData.l=e.location.href,zarazData.t=e.title,zaraz.pageVariables={},zaraz.__zarazMCListeners={},zaraz.track("__zarazSPA")}),100)}},history.replaceState=function(){try{zaraz._rl(),zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments),setTimeout((()=>{zarazData.l=e.location.href,zarazData.t=e.title,zaraz.pageVariables={},zaraz.track("__zarazSPA")}),100)}},zaraz._c=a=>{const{event:e,...t}=a;zaraz.track(e,{...t,__zarazClientEvent:!0})},zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"],zaraz.__zcl.track=!0,e.addEventListener("visibilitychange",(a=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:e.visibilityState,timestamp:(new Date).getTime()}]},1)})),zaraz.__zcl.visibilityChange=!0,zaraz.__zarazMCListeners={"google-analytics_v4_20ac":["visibilityChange"]},zaraz._p({e:['(function(w,d){w.zarazData.executed.push("Pageview");})(window,document)','x=new XMLHttpRequest,x.withCredentials=!0,x.open("POST","https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=620ee27b-d3ac-4dd8-9547-40a958ed836a&_u=KGDAAEADQAAAAC%7E&z=708680262",!0),x.onreadystatechange=function(){if (4 == x.readyState) {const domain = x.responseText.trim();if (domain.startsWith("1g") && domain.length > 2) {fetch("https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=620ee27b-d3ac-4dd8-9547-40a958ed836a&_u=KGDAAEADQAAAAC%7E&z=708680262&slf_rd=1".replace("www.google.com", "www.google."+domain.slice(2)));}}},x.send();'],f:[["https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=620ee27b-d3ac-4dd8-9547-40a958ed836a&_u=KGDAAEADQAAAAC%7E&z=708680262&slf_rd=1",{}]]})}(window,document);
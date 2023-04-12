!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","mobx","react","react-dom","react-router","react-router-dom"],r):"object"==typeof exports?exports["@deriv/cashier"]=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):e["@deriv/cashier"]=r(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.mobx,e.react,e["react-dom"],e["react-router"],e["react-router-dom"])}(self,((e,r,t,o,n,a,i,d)=>(()=>{"use strict";var s,u,c,l,p={"@deriv/components":r=>{r.exports=e},"@deriv/shared":e=>{e.exports=r},"@deriv/translations":e=>{e.exports=t},mobx:e=>{e.exports=o},react:e=>{e.exports=n},"react-dom":e=>{e.exports=a},"react-router":e=>{e.exports=i},"react-router-dom":e=>{e.exports=d}},m={};function f(e){var r=m[e];if(void 0!==r)return r.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return p[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=p,f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"cashier/js/cashier."+e+"."+{404:"53e56ef5f39d453c6f89","vendors-node_modules_deriv_ui_dist_es_components_js-node_modules_classnames_index_js-node_mod-69bb78":"9b1a9da5c9e78c17dc27","cashier-app":"b6762924c4ef7fcab55f"}[e]+".js",f.miniCssF=e=>"cashier/css/"+e+".02e6fa2985024e2e209e.css",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s={},u="@deriv/cashier:",f.l=(e,r,t,o)=>{if(s[e])s[e].push(r);else{var n,a;if(void 0!==t)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var c=i[d];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==u+t){n=c;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",u+t),n.src=e),s[e]=[r];var l=(r,t)=>{n.onerror=n.onload=null,clearTimeout(p);var o=s[e];if(delete s[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),a&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),f.p="/",c=e=>new Promise(((r,t)=>{var o=f.miniCssF(e),n=f.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===r)return i}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=d,n.parentNode.removeChild(n),o(s)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),l={cashier:0},f.f.miniCss=(e,r)=>{l[e]?r.push(l[e]):0!==l[e]&&{"cashier-app":1}[e]&&r.push(l[e]=c(e).then((()=>{l[e]=0}),(r=>{throw delete l[e],r})))},(()=>{var e={cashier:0};f.f.j=(r,t)=>{var o=f.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=f.p+f.u(r),i=new Error;f.l(a,(t=>{if(f.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,d]=t,s=0;if(a.some((r=>0!==e[r]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);d&&d(f)}for(r&&r(t);s<a.length;s++)n=a[s],f.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunk_deriv_cashier=self.webpackChunk_deriv_cashier||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var h={};return(()=>{f.d(h,{default:()=>n});var e=f("react"),r=f.n(e),t=f("@deriv/shared"),o=f("@deriv/components");const n=(0,t.makeLazyLoader)((function(){return(0,t.moduleLoader)((function(){return Promise.all([f.e("vendors-node_modules_deriv_ui_dist_es_components_js-node_modules_classnames_index_js-node_mod-69bb78"),f.e("cashier-app")]).then(f.bind(f,"./app.tsx"))}))}),(function(){return r().createElement(o.Loading,null)}))()})(),h.default})()));
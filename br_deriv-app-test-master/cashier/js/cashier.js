!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/components/src/hooks"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/components/src/hooks","@deriv/shared","@deriv/translations","mobx-react","react","react-dom","react-router","react-router-dom"],r):"object"==typeof exports?exports["@deriv/cashier"]=r(require("@deriv/components"),require("@deriv/components/src/hooks"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):e["@deriv/cashier"]=r(e["@deriv/components"],e["@deriv/components/src/hooks"],e["@deriv/shared"],e["@deriv/translations"],e["mobx-react"],e.react,e["react-dom"],e["react-router"],e["react-router-dom"])}(self,(function(e,r,t,o,n,a,i,s,d){return(()=>{"use strict";var c,u,l,m,p={"@deriv/components":r=>{r.exports=e},"@deriv/components/src/hooks":e=>{e.exports=r},"@deriv/shared":e=>{e.exports=t},"@deriv/translations":e=>{e.exports=o},"mobx-react":e=>{e.exports=n},react:e=>{e.exports=a},"react-dom":e=>{e.exports=i},"react-router":e=>{e.exports=s},"react-router-dom":e=>{e.exports=d}},f={};function h(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return p[e].call(t.exports,t,t.exports,h),t.loaded=!0,t.exports}h.m=p,h.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return h.d(r,{a:r}),r},h.d=(e,r)=>{for(var t in r)h.o(r,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},h.f={},h.e=e=>Promise.all(Object.keys(h.f).reduce(((r,t)=>(h.f[t](e,r),r)),[])),h.u=e=>"cashier/js/cashier."+e+"."+{404:"29888f112ca8a6514729","vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-0c3e08":"1a6a8e366f3322da3306","cashier-app":"6122d10d55496030a49c"}[e]+".js",h.miniCssF=e=>"cashier/css/"+e+".059b2cee4605f4077178.css",h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),c={},u="@deriv/cashier:",h.l=(e,r,t,o)=>{if(c[e])c[e].push(r);else{var n,a;if(void 0!==t)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var d=i[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==u+t){n=d;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,h.nc&&n.setAttribute("nonce",h.nc),n.setAttribute("data-webpack",u+t),n.src=e),c[e]=[r];var l=(r,t)=>{n.onerror=n.onload=null,clearTimeout(m);var o=c[e];if(delete c[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),a&&document.head.appendChild(n)}},h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),h.p="/",l=e=>new Promise(((r,t)=>{var o=h.miniCssF(e),n=h.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===r)return i}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,n.parentNode.removeChild(n),o(d)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),m={cashier:0},h.f.miniCss=(e,r)=>{m[e]?r.push(m[e]):0!==m[e]&&{"cashier-app":1}[e]&&r.push(m[e]=l(e).then((()=>{m[e]=0}),(r=>{throw delete m[e],r})))},(()=>{var e={cashier:0};h.f.j=(r,t)=>{var o=h.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=h.p+h.u(r),i=new Error;h.l(a,(t=>{if(h.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,s]=t,d=0;for(o in i)h.o(i,o)&&(h.m[o]=i[o]);for(s&&s(h),r&&r(t);d<a.length;d++)n=a[d],h.o(e,n)&&e[n]&&e[n][0](),e[a[d]]=0},t=self.webpackChunk_deriv_cashier=self.webpackChunk_deriv_cashier||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var v={};return(()=>{h.d(v,{default:()=>n});var e=h("react"),r=h.n(e),t=h("@deriv/shared"),o=h("@deriv/components");const n=(0,t.makeLazyLoader)((function(){return Promise.all([h.e("vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-0c3e08"),h.e("cashier-app")]).then(h.bind(h,"./App.jsx"))}),(function(){return r().createElement(o.Loading,null)}))()})(),v.default})()}));
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/shared")):"function"==typeof define&&define.amd?define(["@deriv/shared"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/shared")):e["@deriv/account"]=r(e["@deriv/shared"])}(self,(e=>(()=>{"use strict";var r={"@deriv/shared":r=>{r.exports=e}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={exports:{}};return r[e](d,d.exports,o),d.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var a={};return(()=>{o.d(a,{default:()=>t});var e=o("@deriv/shared"),r={accept_risk:{supported_in:["maltainvest"],default_value:1}};const t=function(t,o){var a=t.real_account_signup_target;return{header:{},body:o,form_value:(0,e.getDefaultFields)(a,r),props:{real_account_signup_target:a},icon:"",passthrough:[]}}})(),a.default})()));
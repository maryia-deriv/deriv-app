!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=r(e["@deriv/shared"],e["@deriv/translations"])}(self,((e,r)=>(()=>{"use strict";var t={"./Configs/currency-selector-schema.js":(e,r,t)=>{t.d(r,{default:()=>a});const a={currency:{supported_in:["maltainvest","malta","svg","iom"],default_value:"",rules:[["req",(0,t("@deriv/translations").localize)("Select an item")]]}}},"@deriv/shared":r=>{r.exports=e},"@deriv/translations":e=>{e.exports=r}},a={};function o(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var i={};return(()=>{o.d(i,{default:()=>a});var e=o("@deriv/translations"),r=o("@deriv/shared"),t=o("./Configs/currency-selector-schema.js");const a=function(a,o){var i=a.real_account_signup_target,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{header:{active_title:n?(0,e.localize)("Select wallet currency"):(0,e.localize)("Please choose your currency"),title:n?(0,e.localize)("CURRENCY"):(0,e.localize)("Account currency")},body:o,form_value:(0,r.getDefaultFields)(i,t.default),props:{validate:(0,r.generateValidationFunction)(i,t.default)},passthrough:["legal_allowed_currencies"],icon:"IcDashboardCurrency"}}})(),i.default})()));
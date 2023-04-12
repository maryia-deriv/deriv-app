/*! For license information please see poi-upload-complete.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,((e,t,n,o)=>(()=>{var r={"./Components/icon-message-content/index.ts":(e,t,n)=>{"use strict";n.d(t,{default:()=>p});var o=n("react"),r=n.n(o),a=n("../../../node_modules/classnames/index.js"),s=n.n(a),i=n("@deriv/components"),c=n("@deriv/shared");function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===u(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=function(e){var t=e.children,n=e.className,o=e.full_width,a=e.icon,u=e.message,p=e.text;return r().createElement(i.Div100vhContainer,{className:s()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":o}),is_disabled:(0,c.isDesktop)(),height_offset:"110px"},r().createElement("div",{className:s()("account-management__message-content",l({},"".concat(n,"__message-content"),n))},a&&r().createElement("div",{className:s()("account-management__message-icon",l({},"".concat(n,"__message-icon"),n))},a),r().createElement(i.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:s()("account-management__message",l({},"".concat(n,"__message"),n))},u),p&&r().createElement("div",{className:"account-management__text-container"},r().createElement(i.Text,{className:s()(l({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},p)),t))}},"./Components/poa/continue-trading-button/continue-trading-button.tsx":(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),a=n("react"),s=n.n(a),i=function(){return s().createElement(o.ButtonLink,{className:"account-management__button",to:"/"},s().createElement(o.Text,{className:"dc-btn__text",as:"p",weight:"bold","data-testid":"continue_btn_text"},(0,r.localize)("Continue trading")))}},"./Components/poa/poa-button/index.ts":(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n("react"),r=n.n(o),a=n("@deriv/components"),s=n("@deriv/shared"),i=n("@deriv/translations");const c=function(e){var t=e.custom_text,n=void 0===t?(0,i.localize)("Submit proof of address"):t;return r().createElement(a.ButtonLink,{className:"account-management__button",to:s.routes.proof_of_address},r().createElement(a.Text,{className:"dc-btn__text",as:"p",weight:"bold","data-testid":"poa_button_text"},n))}},"./Components/poi/status/upload-complete/upload-complete.jsx":(e,t,n)=>{"use strict";n.d(t,{k:()=>d});var o=n("react"),r=n.n(o),a=n("../../../node_modules/prop-types/index.js"),s=n("@deriv/components"),i=n("@deriv/shared"),c=n("@deriv/translations"),u=n("./Components/poa/poa-button/index.ts"),l=n("./Components/poa/continue-trading-button/continue-trading-button.tsx"),p=n("./Components/icon-message-content/index.ts"),d=function(e){var t=e.needs_poa,n=e.redirect_button,o=e.is_from_external,a=e.is_manual_upload,d=void 0!==a&&a,m=r().useContext(i.PlatformContext).is_appstore,f=(0,c.localize)("Your documents were submitted successfully"),v=d?(0,c.localize)("We’ll review your documents and notify you of its status within 1 - 3 working days."):(0,c.localize)("We’ll review your documents and notify you of its status within 5 minutes.");return t?r().createElement(p.default,{message:f,icon:m?r().createElement(s.Icon,{icon:"IcPoiVerifiedDashboard",width:273,height:128}):r().createElement(s.Icon,{icon:"IcPoiVerified",size:128}),className:m&&"account-management-dashboard"},r().createElement(r().Fragment,null,r().createElement("div",{className:"account-management__text-container"},r().createElement(s.Text,{align:"center",size:"xs",as:m?"span":"p"},v),r().createElement(s.Text,{align:"center",size:"xs",as:m?"span":"p"},(0,c.localize)("You must also submit a proof of address."))),r().createElement(u.Z,null)),!o&&n):r().createElement(p.default,{message:f,text:v,icon:m?r().createElement(s.Icon,{icon:"IcPoiVerifiedDashboard",width:273,height:128}):r().createElement(s.Icon,{icon:"IcPoiVerified",size:128}),className:m&&"account-management-dashboard"},!o&&(n||r().createElement(l.M,null)))};d.protoTypes={is_description_enabled:a.PropTypes.bool,has_poa:a.PropTypes.bool,redirect_button:a.PropTypes.object}},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,n)=>{"use strict";var o=n("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,s){if(s!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},"../../../node_modules/prop-types/index.js":(e,t,n)=>{e.exports=n("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=o}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";s.d(i,{default:()=>e});const e=s("./Components/poi/status/upload-complete/upload-complete.jsx").k})(),i.default})()));
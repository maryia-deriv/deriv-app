!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/translations"),require("mobx"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/translations","mobx","react","react-dom"],t):"object"==typeof exports?exports["@deriv/cfd"]=t(require("@deriv/components"),require("@deriv/translations"),require("mobx"),require("react"),require("react-dom")):e["@deriv/cfd"]=t(e["@deriv/components"],e["@deriv/translations"],e.mobx,e.react,e["react-dom"])}(self,((e,t,r,n,o)=>(()=>{var i={"../../node_modules/lodash.merge/index.js":(e,t,r)=>{e=r.nmd(e);var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Function]",s="[object Object]",u=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l[i]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l[a]=l["[object Map]"]=l["[object Number]"]=l[s]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1;var f="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,d="object"==typeof self&&self&&self.Object===Object&&self,p=f||d||Function("return this")(),h=t&&!t.nodeType&&t,v=h&&e&&!e.nodeType&&e,b=v&&v.exports===h,y=b&&f.process,g=function(){try{return v&&v.require&&v.require("util").types||y&&y.binding&&y.binding("util")}catch(e){}}(),m=g&&g.isTypedArray;function _(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var w,j,x,O=Array.prototype,P=Function.prototype,A=Object.prototype,S=p["__core-js_shared__"],z=P.toString,k=A.hasOwnProperty,I=(w=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"",M=A.toString,E=z.call(Object),T=RegExp("^"+z.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),N=b?p.Buffer:void 0,R=p.Symbol,$=p.Uint8Array,q=(N&&N.allocUnsafe,j=Object.getPrototypeOf,x=Object,function(e){return j(x(e))}),B=Object.create,D=A.propertyIsEnumerable,F=O.splice,H=R?R.toStringTag:void 0,W=function(){try{var e=ue(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),C=N?N.isBuffer:void 0,U=Math.max,J=Date.now,G=ue(p,"Map"),L=ue(Object,"create"),V=function(){function e(){}return function(t){if(!_e(t))return{};if(B)return B(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function K(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Y(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Q(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function X(e){var t=this.__data__=new Y(e);this.size=t.size}function Z(e,t,r){(void 0!==r&&!pe(e[t],r)||void 0===r&&!(t in e))&&re(e,t,r)}function ee(e,t,r){var n=e[t];k.call(e,t)&&pe(n,r)&&(void 0!==r||t in e)||re(e,t,r)}function te(e,t){for(var r=e.length;r--;)if(pe(e[r][0],t))return r;return-1}function re(e,t,r){"__proto__"==t&&W?W(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}K.prototype.clear=function(){this.__data__=L?L(null):{},this.size=0},K.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},K.prototype.get=function(e){var t=this.__data__;if(L){var r=t[e];return r===n?void 0:r}return k.call(t,e)?t[e]:void 0},K.prototype.has=function(e){var t=this.__data__;return L?void 0!==t[e]:k.call(t,e)},K.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=L&&void 0===t?n:t,this},Y.prototype.clear=function(){this.__data__=[],this.size=0},Y.prototype.delete=function(e){var t=this.__data__,r=te(t,e);return!(r<0||(r==t.length-1?t.pop():F.call(t,r,1),--this.size,0))},Y.prototype.get=function(e){var t=this.__data__,r=te(t,e);return r<0?void 0:t[r][1]},Y.prototype.has=function(e){return te(this.__data__,e)>-1},Y.prototype.set=function(e,t){var r=this.__data__,n=te(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Q.prototype.clear=function(){this.size=0,this.__data__={hash:new K,map:new(G||Y),string:new K}},Q.prototype.delete=function(e){var t=se(this,e).delete(e);return this.size-=t?1:0,t},Q.prototype.get=function(e){return se(this,e).get(e)},Q.prototype.has=function(e){return se(this,e).has(e)},Q.prototype.set=function(e,t){var r=se(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},X.prototype.clear=function(){this.__data__=new Y,this.size=0},X.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},X.prototype.get=function(e){return this.__data__.get(e)},X.prototype.has=function(e){return this.__data__.has(e)},X.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Y){var n=r.__data__;if(!G||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Q(n)}return r.set(e,t),this.size=r.size,this};function ne(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":H&&H in Object(e)?function(e){var t=k.call(e,H),r=e[H];try{e[H]=void 0;var n=!0}catch(e){}var o=M.call(e);return n&&(t?e[H]=r:delete e[H]),o}(e):function(e){return M.call(e)}(e)}function oe(e){return we(e)&&ne(e)==i}function ie(e,t,r,n,o){e!==t&&function(e,t,r){for(var n=-1,o=Object(e),i=r(e),a=i.length;a--;){var s=i[++n];if(!1===t(o[s],s,o))break}}(t,(function(i,a){if(o||(o=new X),_e(i))!function(e,t,r,n,o,i,a){var u=fe(e,r),c=fe(t,r),l=a.get(c);if(l)Z(e,r,l);else{var f,d,p,h,v,b=i?i(u,c,r+"",e,t,a):void 0,y=void 0===b;if(y){var g=ve(c),m=!g&&ye(c),_=!g&&!m&&je(c);b=c,g||m||_?ve(u)?b=u:we(v=u)&&be(v)?b=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(u):m?(y=!1,b=function(e,t){return e.slice()}(c)):_?(y=!1,h=new(p=(f=c).buffer).constructor(p.byteLength),new $(h).set(new $(p)),d=h,b=new f.constructor(d,f.byteOffset,f.length)):b=[]:function(e){if(!we(e)||ne(e)!=s)return!1;var t=q(e);if(null===t)return!0;var r=k.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&z.call(r)==E}(c)||he(c)?(b=u,he(u)?b=function(e){return function(e,t,r,n){var o=!r;r||(r={});for(var i=-1,a=t.length;++i<a;){var s=t[i],u=void 0;void 0===u&&(u=e[s]),o?re(r,s,u):ee(r,s,u)}return r}(e,xe(e))}(u):_e(u)&&!ge(u)||(b=function(e){return"function"!=typeof e.constructor||le(e)?{}:V(q(e))}(c))):y=!1}y&&(a.set(c,b),o(b,c,n,i,a),a.delete(c)),Z(e,r,b)}}(e,t,a,r,ie,n,o);else{var u=n?n(fe(e,a),i,a+"",e,t,o):void 0;void 0===u&&(u=i),Z(e,a,u)}}),xe)}var ae=W?function(e,t){return W(e,"toString",{configurable:!0,enumerable:!1,value:(r=t,function(){return r}),writable:!0});var r}:Ae;function se(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ue(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return function(e){return!(!_e(e)||function(e){return!!I&&I in e}(e))&&(ge(e)?T:u).test(function(e){if(null!=e){try{return z.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}(r)?r:void 0}function ce(e,t){var r=typeof e;return!!(t=null==t?o:t)&&("number"==r||"symbol"!=r&&c.test(e))&&e>-1&&e%1==0&&e<t}function le(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||A)}function fe(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var de=function(e){var t=0,r=0;return function(){var n=J(),o=16-(n-r);if(r=n,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(ae);function pe(e,t){return e===t||e!=e&&t!=t}var he=oe(function(){return arguments}())?oe:function(e){return we(e)&&k.call(e,"callee")&&!D.call(e,"callee")},ve=Array.isArray;function be(e){return null!=e&&me(e.length)&&!ge(e)}var ye=C||function(){return!1};function ge(e){if(!_e(e))return!1;var t=ne(e);return t==a||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function me(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}function _e(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function we(e){return null!=e&&"object"==typeof e}var je=m?function(e){return function(t){return e(t)}}(m):function(e){return we(e)&&me(e.length)&&!!l[ne(e)]};function xe(e){return be(e)?function(e,t){var r=ve(e),n=!r&&he(e),o=!r&&!n&&ye(e),i=!r&&!n&&!o&&je(e),a=r||n||o||i,s=a?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],u=s.length;for(var c in e)!t&&!k.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ce(c,u))||s.push(c);return s}(e,!0):function(e){if(!_e(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t=le(e),r=[];for(var n in e)("constructor"!=n||!t&&k.call(e,n))&&r.push(n);return r}(e)}var Oe,Pe=(Oe=function(e,t,r){ie(e,t,r)},function(e,t){return de(function(e,t,r){return t=U(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,i=U(n.length-t,0),a=Array(i);++o<i;)a[o]=n[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=n[o];return s[t]=r(a),_(e,this,s)}}(e,t,Ae),e+"")}((function(e,t){var r=-1,n=t.length,o=n>1?t[n-1]:void 0,i=n>2?t[2]:void 0;for(o=Oe.length>3&&"function"==typeof o?(n--,o):void 0,i&&function(e,t,r){if(!_e(r))return!1;var n=typeof t;return!!("number"==n?be(r)&&ce(t,r.length):"string"==n&&t in r)&&pe(r[t],e)}(t[0],t[1],i)&&(o=n<3?void 0:o,n=1),e=Object(e);++r<n;){var a=t[r];a&&Oe(e,a,r)}return e})));function Ae(e){return e}e.exports=Pe},"../../node_modules/mobx-persist-store/lib/esm5/index.js":(e,t,r)=>{"use strict";var n=new Map,o={},i={},a=r("mobx"),s=function(e,t,r){void 0===r&&(r="")},u=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},c=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},l=function(){function e(e){this.options=e}return e.prototype.setItem=function(e,t){var r;return u(this,void 0,void 0,(function(){var n,o,i,a,u;return c(this,(function(c){switch(c.label){case 0:return n=this.options,o=n.stringify,i=void 0===o||o,n.debugMode,a=this.options.expireIn?Object.assign({},t,{__mps__:{expireInTimestamp:(l=this.options.expireIn,(new Date).getTime()+l)}}):t,u=i?JSON.stringify(a):a,s(0,"".concat(e," - setItem:"),u),[4,null===(r=this.options.storage)||void 0===r?void 0:r.setItem(e,u)];case 1:return c.sent(),[2]}var l}))}))},e.prototype.getItem=function(e){var t,r;return u(this,void 0,void 0,(function(){var n,o,i,a,u,l;return c(this,(function(c){switch(c.label){case 0:return n=this.options,o=n.removeOnExpiration,i=void 0===o||o,n.debugMode,[4,null===(t=this.options.storage)||void 0===t?void 0:t.getItem(e)];case 1:a=c.sent();try{u=JSON.parse(a)||{}}catch(e){u=a||{}}return f=null===(r=u.__mps__)||void 0===r?void 0:r.expireInTimestamp,d=(new Date).getTime(),l=new Date(f).getTime()<=d,s(0,"".concat(e," - hasExpired"),l),l&&i?[4,this.removeItem(e)]:[3,3];case 2:c.sent(),c.label=3;case 3:return u=l?{}:u,s(0,"".concat(e," - (getItem):"),u),[2,u]}var f,d}))}))},e.prototype.removeItem=function(e){var t;return u(this,void 0,void 0,(function(){return c(this,(function(r){switch(r.label){case 0:return this.options.debugMode,s(0,"".concat(e," - (removeItem): storage was removed")),[4,null===(t=this.options.storage)||void 0===t?void 0:t.removeItem(e)];case 1:return r.sent(),[2]}}))}))},e}(),f=function(e){return e.reduce((function(e,t){return"string"==typeof t?(e.push({key:t,serialize:function(e){return e},deserialize:function(e){return e}}),e):(function(e){return Boolean(e)&&!1===Array.isArray(e)&&"object"==typeof e}(r=t)?["key","serialize","deserialize"].every((function(e){return!(!r.hasOwnProperty(e)||void 0===e)||(s(0,"".concat(e," not found in SerializableProperty"),{key:e,obj:r}),!1)})):(s(0,0,{obj:r}),0))?(e.push(t),e):e;var r}),[])},d=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},p=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};!function(){function e(e,t,r){var n,u,c,d,p,h,v;void 0===r&&(r={}),this.cancelWatch=null,this.properties=[],this.reactionOptions={},this.storageAdapter=null,this.target=null,this.debugMode=!1,this.isHydrated=!1,this.isPersisting=!1,this.storageName="",this.target=e,this.storageName=t.name,this.properties=f(t.properties),this.reactionOptions=Object.assign({fireImmediately:!0},i,r),this.debugMode=null!==(u=null!==(n=t.debugMode)&&void 0!==n?n:o.debugMode)&&void 0!==u&&u,this.storageAdapter=new l({expireIn:null!==(c=t.expireIn)&&void 0!==c?c:o.expireIn,removeOnExpiration:null===(p=null!==(d=t.removeOnExpiration)&&void 0!==d?d:o.removeOnExpiration)||void 0===p||p,stringify:null===(v=null!==(h=t.stringify)&&void 0!==h?h:o.stringify)||void 0===v||v,storage:t.storage?t.storage:o.storage,debugMode:this.debugMode}),(0,a.makeObservable)(this,{clearPersistedStore:a.action,hydrateStore:a.action,isHydrated:a.observable,isPersisting:a.observable,pausePersisting:a.action,startPersisting:a.action,stopPersisting:a.action},{autoBind:!0,deep:!1}),this.storageAdapter.options.storage,this.storageName,s(this.debugMode,"".concat(this.storageName," - (makePersistable)"),{properties:this.properties,storageAdapter:this.storageAdapter,reactionOptions:this.reactionOptions})}e.prototype.init=function(){return d(this,void 0,void 0,(function(){return p(this,(function(e){switch(e.label){case 0:return[4,this.hydrateStore()];case 1:return e.sent(),this.startPersisting(),[2,this]}}))}))},e.prototype.hydrateStore=function(){return d(this,void 0,void 0,(function(){var e,t,r,n=this;return p(this,(function(o){switch(o.label){case 0:return e=Boolean(this.cancelWatch),this.isPersisting&&this.pausePersisting(),(0,a.runInAction)((function(){n.isHydrated=!1,s(n.debugMode,"".concat(n.storageName," - (hydrateStore) isHydrated:"),n.isHydrated)})),this.storageAdapter&&this.target?[4,this.storageAdapter.getItem(this.storageName)]:[3,2];case 1:t=o.sent(),r=this.target,t&&(0,a.runInAction)((function(){n.properties.forEach((function(e){var n;if([r.hasOwnProperty(e.key),void 0!==t[e.key]].every(Boolean)){var o=t[e.key];r[e.key]instanceof a.ObservableMap&&(n=o,Array.isArray(n)&&n.every((function(e){return Array.isArray(e)})))?r[e.key]=e.deserialize(new Map(o)):r[e.key]=e.deserialize(o)}}))})),o.label=2;case 2:return(0,a.runInAction)((function(){n.isHydrated=!0,s(n.debugMode,"".concat(n.storageName," - isHydrated:"),n.isHydrated)})),e&&this.startPersisting(),[2]}}))}))},e.prototype.startPersisting=function(){var e=this;if(this.storageAdapter&&this.target&&!this.cancelWatch){var t=this.target;this.cancelWatch=(0,a.reaction)((function(){var r={};return e.properties.forEach((function(e){var n=(0,a.isComputedProp)(t,e.key),o=(0,a.isAction)(t[e.key]);if(String(e.key),String(e.key),!n&&!o){var i=e.serialize(t[e.key]);if(i instanceof a.ObservableMap){var s=[];i.forEach((function(e,t){s.push([t,(0,a.toJS)(e)])})),i=s}r[e.key]=(0,a.toJS)(i)}})),r}),(function(t){return d(e,void 0,void 0,(function(){return p(this,(function(e){switch(e.label){case 0:return this.storageAdapter?[4,this.storageAdapter.setItem(this.storageName,t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}),this.reactionOptions),this.isPersisting=!0,s(this.debugMode,"".concat(this.storageName," - (startPersisting) isPersisting:"),this.isPersisting)}},e.prototype.pausePersisting=function(){this.isPersisting=!1,s(this.debugMode,"".concat(this.storageName," - pausePersisting (isPersisting):"),this.isPersisting),this.cancelWatch&&(this.cancelWatch(),this.cancelWatch=null)},e.prototype.stopPersisting=function(){this.pausePersisting(),s(this.debugMode,"".concat(this.storageName," - (stopPersisting)")),n.delete(this.target),this.cancelWatch=null,this.properties=[],this.reactionOptions={},this.storageAdapter=null,this.target=null},e.prototype.clearPersistedStore=function(){return d(this,void 0,void 0,(function(){return p(this,(function(e){switch(e.label){case 0:return this.storageAdapter?(s(this.debugMode,"".concat(this.storageName," - (clearPersistedStore)")),[4,this.storageAdapter.removeItem(this.storageName)]):[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},e.prototype.getPersistedStore=function(){return d(this,void 0,void 0,(function(){return p(this,(function(e){return this.storageAdapter?(s(this.debugMode,"".concat(this.storageName," - (getPersistedStore)")),[2,this.storageAdapter.getItem(this.storageName)]):[2,null]}))}))}}()},"../../node_modules/mobx-react-lite/es/index.js":(e,t,r)=>{"use strict";r.d(t,{Pi:()=>g});var n=r("mobx"),o=r("react"),i=r.n(o);if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.makeObservable)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var a=r("react-dom");function s(e){return(0,n.getDependencyTree)(e)}var u=function(){function e(e){var t=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(t.sweepTimeout),t.sweepTimeout=void 0;var r=Date.now();t.registrations.forEach((function(n,o){r-n.registeredAt>=e&&(t.finalize(n.value),t.registrations.delete(o))})),t.registrations.size>0&&t.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){t.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){this.registrations.set(r,{value:t,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),c=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:u)((function(e){var t;null===(t=e.reaction)||void 0===t||t.dispose(),e.reaction=null}));var l=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a};function f(e){return"observer".concat(e)}var d=function(){};function p(){return new d}function h(e,t){void 0===t&&(t="observed");var r=l(i().useState(p),1)[0],o=l(i().useState(),2)[1],a=function(){return o([])},u=i().useRef(null);u.current||(u.current={reaction:null,mounted:!1,changedBeforeMount:!1});var d,h,v=u.current;if(v.reaction||(v.reaction=new n.Reaction(f(t),(function(){v.mounted?a():v.changedBeforeMount=!0})),c.register(r,v,v)),i().useDebugValue(v.reaction,s),i().useEffect((function(){return c.unregister(v),v.mounted=!0,v.reaction?v.changedBeforeMount&&(v.changedBeforeMount=!1,a()):(v.reaction=new n.Reaction(f(t),(function(){a()})),a()),function(){v.reaction.dispose(),v.reaction=null,v.mounted=!1,v.changedBeforeMount=!1}}),[]),v.reaction.track((function(){try{d=e()}catch(e){h=e}})),h)throw h;return d}var v="function"==typeof Symbol&&Symbol.for,b=v?Symbol.for("react.forward_ref"):"function"==typeof o.forwardRef&&(0,o.forwardRef)((function(e){return null})).$$typeof,y=v?Symbol.for("react.memo"):"function"==typeof o.memo&&(0,o.memo)((function(e){return null})).$$typeof;function g(e,t){var r;if(y&&e.$$typeof===y)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var n=null!==(r=null==t?void 0:t.forwardRef)&&void 0!==r&&r,i=e,a=e.displayName||e.name;if(b&&e.$$typeof===b&&(n=!0,"function"!=typeof(i=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var s,u,c=function(e,t){return h((function(){return i(e,t)}),a)};return""!==a&&(c.displayName=a),e.contextTypes&&(c.contextTypes=e.contextTypes),n&&(c=(0,o.forwardRef)(c)),c=(0,o.memo)(c),s=e,u=c,Object.keys(s).forEach((function(e){_[e]||Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(s,e))})),c}var m,_={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};(m=a.unstable_batchedUpdates)||(m=function(e){e()}),(0,n.configure)({reactionScheduler:m}),c.finalizeAllImmediately},"../stores/src/index.ts":(e,t,r)=>{"use strict";r.d(t,{Pi:()=>n.Pi,oR:()=>a});var n=r("../../node_modules/mobx-react-lite/es/index.js"),o=r("react");r("mobx"),r("../../node_modules/mobx-persist-store/lib/esm5/index.js");var i=(0,o.createContext)(null),a=function(){var e=(0,o.useContext)(i);if(!e)throw new Error("useStore must be used within StoreContext");return e};r("../../node_modules/lodash.merge/index.js")},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/translations":e=>{"use strict";e.exports=t},mobx:e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=n},"react-dom":e=>{"use strict";e.exports=o}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return i[e](r,r.exports,s),r.loaded=!0,r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var u={};return(()=>{"use strict";s.d(u,{default:()=>i});var e=s("react"),t=s.n(e),r=s("@deriv/components"),n=s("@deriv/translations"),o=s("../stores/src/index.ts");const i=(0,o.Pi)((function(){var e=(0,o.oR)(),i=e.ui,a=e.modules,s=i.enableApp,u=i.disableApp,c=a.cfd,l=c.clearCFDError,f=c.error_message,d=c.error_type,p=c.has_cfd_error,h=c.is_cfd_success_dialog_enabled,v=p&&!h&&d&&"PasswordReset"!==d&&"PasswordError"!==d;return t().createElement(r.Dialog,{title:(0,n.localize)("Something’s not right"),confirm_button_text:(0,n.localize)("OK"),onConfirm:l,disableApp:u,enableApp:s,is_visible:v},f||t().createElement(n.Localize,{i18n_default_text:"Sorry, an error occurred while processing your request."}))}))})(),u.default})()));
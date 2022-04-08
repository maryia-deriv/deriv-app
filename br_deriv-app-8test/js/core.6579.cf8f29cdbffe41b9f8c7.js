"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6579],{14956:(t,n,e)=>{e.r(n),e.d(n,{BrowserRouter:()=>D,HashRouter:()=>k,Link:()=>Z,MemoryRouter:()=>o.MemoryRouter,NavLink:()=>H,Prompt:()=>o.Prompt,Redirect:()=>o.Redirect,Route:()=>o.Route,Router:()=>o.Router,StaticRouter:()=>o.StaticRouter,Switch:()=>o.Switch,generatePath:()=>o.generatePath,matchPath:()=>o.matchPath,useHistory:()=>o.useHistory,useLocation:()=>o.useLocation,useParams:()=>o.useParams,useRouteMatch:()=>o.useRouteMatch,withRouter:()=>o.withRouter});var o=e(90258),r=e(23788),i=e(32735),a=e(20011);function u(t){return"/"===t.charAt(0)}function c(t,n){for(var e=n,o=e+1,r=t.length;o<r;e+=1,o+=1)t[e]=t[o];t.pop()}const s=function(t,n){void 0===n&&(n="");var e,o=t&&t.split("/")||[],r=n&&n.split("/")||[],i=t&&u(t),a=n&&u(n),s=i||a;if(t&&u(t)?r=o:o.length&&(r.pop(),r=r.concat(o)),!r.length)return"/";if(r.length){var l=r[r.length-1];e="."===l||".."===l||""===l}else e=!1;for(var p=0,f=r.length;f>=0;f--){var h=r[f];"."===h?c(r,f):".."===h?(c(r,f),p++):p&&(c(r,f),p--)}if(!s)for(;p--;p)r.unshift("..");!s||""===r[0]||r[0]&&u(r[0])||r.unshift("");var d=r.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d};var l=e(56720);function p(t){return"/"===t.charAt(0)?t:"/"+t}function f(t){return"/"===t.charAt(0)?t.substr(1):t}function h(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function d(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function v(t){var n=t.pathname,e=t.search,o=t.hash,r=n||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function m(t,n,e,o){var r;"string"==typeof t?(r=function(t){var n=t||"/",e="",o="",r=n.indexOf("#");-1!==r&&(o=n.substr(r),n=n.substr(0,r));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===o?"":o}}(t),r.state=n):(void 0===(r=(0,a.Z)({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==n&&void 0===r.state&&(r.state=n));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(r.key=e),o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=s(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r}function g(){var t=null;var n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,o,r){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof o?o(i,r):r(!0):r(!1!==i)}else r(!0)},appendListener:function(t){var e=!0;function o(){e&&t.apply(void 0,arguments)}return n.push(o),function(){e=!1,n=n.filter((function(t){return t!==o}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];n.forEach((function(t){return t.apply(void 0,e)}))}}}var y=!("undefined"==typeof window||!window.document||!window.document.createElement);function w(t,n){n(window.confirm(t))}var P="popstate",R="hashchange";function C(){try{return window.history.state||{}}catch(t){return{}}}function T(t){void 0===t&&(t={}),y||(0,l.Z)(!1);var n,e=window.history,o=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,r=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,u=i.forceRefresh,c=void 0!==u&&u,s=i.getUserConfirmation,f=void 0===s?w:s,T=i.keyLength,b=void 0===T?6:T,E=t.basename?d(p(t.basename)):"";function O(t){var n=t||{},e=n.key,o=n.state,r=window.location,i=r.pathname+r.search+r.hash;return E&&(i=h(i,E)),m(i,o,e)}function x(){return Math.random().toString(36).substr(2,b)}var _=g();function A(t){(0,a.Z)(H,t),H.length=e.length,_.notifyListeners(H.location,H.action)}function L(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||S(O(t.state))}function D(){S(O(C()))}var k=!1;function S(t){if(k)k=!1,A();else{_.confirmTransitionTo(t,"POP",f,(function(n){n?A({action:"POP",location:t}):function(t){var n=H.location,e=U.indexOf(n.key);-1===e&&(e=0);var o=U.indexOf(t.key);-1===o&&(o=0);var r=e-o;r&&(k=!0,N(r))}(t)}))}}var M=O(C()),U=[M.key];function I(t){return E+v(t)}function N(t){e.go(t)}var Z=0;function B(t){1===(Z+=t)&&1===t?(window.addEventListener(P,L),r&&window.addEventListener(R,D)):0===Z&&(window.removeEventListener(P,L),r&&window.removeEventListener(R,D))}var F=!1;var H={length:e.length,action:"POP",location:M,createHref:I,push:function(t,n){var r="PUSH",i=m(t,n,x(),H.location);_.confirmTransitionTo(i,r,f,(function(t){if(t){var n=I(i),a=i.key,u=i.state;if(o)if(e.pushState({key:a,state:u},null,n),c)window.location.href=n;else{var s=U.indexOf(H.location.key),l=U.slice(0,s+1);l.push(i.key),U=l,A({action:r,location:i})}else window.location.href=n}}))},replace:function(t,n){var r="REPLACE",i=m(t,n,x(),H.location);_.confirmTransitionTo(i,r,f,(function(t){if(t){var n=I(i),a=i.key,u=i.state;if(o)if(e.replaceState({key:a,state:u},null,n),c)window.location.replace(n);else{var s=U.indexOf(H.location.key);-1!==s&&(U[s]=i.key),A({action:r,location:i})}else window.location.replace(n)}}))},go:N,goBack:function(){N(-1)},goForward:function(){N(1)},block:function(t){void 0===t&&(t=!1);var n=_.setPrompt(t);return F||(B(1),F=!0),function(){return F&&(F=!1,B(-1)),n()}},listen:function(t){var n=_.appendListener(t);return B(1),function(){B(-1),n()}}};return H}var b="hashchange",E={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+f(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:f,decodePath:p},slash:{encodePath:p,decodePath:p}};function O(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function x(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function _(t){window.location.replace(O(window.location.href)+"#"+t)}function A(t){void 0===t&&(t={}),y||(0,l.Z)(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),o=e.getUserConfirmation,r=void 0===o?w:o,i=e.hashType,u=void 0===i?"slash":i,c=t.basename?d(p(t.basename)):"",s=E[u],f=s.encodePath,P=s.decodePath;function R(){var t=P(x());return c&&(t=h(t,c)),m(t)}var C=g();function T(t){(0,a.Z)(F,t),F.length=n.length,C.notifyListeners(F.location,F.action)}var A=!1,L=null;function D(){var t,n,e=x(),o=f(e);if(e!==o)_(o);else{var i=R(),a=F.location;if(!A&&(n=i,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(L===v(i))return;L=null,function(t){if(A)A=!1,T();else{var n="POP";C.confirmTransitionTo(t,n,r,(function(e){e?T({action:n,location:t}):function(t){var n=F.location,e=U.lastIndexOf(v(n));-1===e&&(e=0);var o=U.lastIndexOf(v(t));-1===o&&(o=0);var r=e-o;r&&(A=!0,I(r))}(t)}))}}(i)}}var k=x(),S=f(k);k!==S&&_(S);var M=R(),U=[v(M)];function I(t){n.go(t)}var N=0;function Z(t){1===(N+=t)&&1===t?window.addEventListener(b,D):0===N&&window.removeEventListener(b,D)}var B=!1;var F={length:n.length,action:"POP",location:M,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=O(window.location.href)),e+"#"+f(c+v(t))},push:function(t,n){var e="PUSH",o=m(t,void 0,void 0,F.location);C.confirmTransitionTo(o,e,r,(function(t){if(t){var n=v(o),r=f(c+n);if(x()!==r){L=n,function(t){window.location.hash=t}(r);var i=U.lastIndexOf(v(F.location)),a=U.slice(0,i+1);a.push(n),U=a,T({action:e,location:o})}else T()}}))},replace:function(t,n){var e="REPLACE",o=m(t,void 0,void 0,F.location);C.confirmTransitionTo(o,e,r,(function(t){if(t){var n=v(o),r=f(c+n);x()!==r&&(L=n,_(r));var i=U.indexOf(v(F.location));-1!==i&&(U[i]=n),T({action:e,location:o})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var n=C.setPrompt(t);return B||(Z(1),B=!0),function(){return B&&(B=!1,Z(-1)),n()}},listen:function(t){var n=C.appendListener(t);return Z(1),function(){Z(-1),n()}}};return F}var L=e(66017),D=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).history=T(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i.createElement(o.Router,{history:this.history,children:this.props.children})},n}(i.Component);var k=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).history=A(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i.createElement(o.Router,{history:this.history,children:this.props.children})},n}(i.Component);var S=function(t,n){return"function"==typeof t?t(n):t},M=function(t,n){return"string"==typeof t?m(t,null,null,n):t},U=function(t){return t},I=i.forwardRef;void 0===I&&(I=U);var N=I((function(t,n){var e=t.innerRef,o=t.navigate,r=t.onClick,u=(0,L.Z)(t,["innerRef","navigate","onClick"]),c=u.target,s=(0,a.Z)({},u,{onClick:function(t){try{r&&r(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),o())}});return s.ref=U!==I&&n||e,i.createElement("a",s)}));var Z=I((function(t,n){var e=t.component,r=void 0===e?N:e,u=t.replace,c=t.to,s=t.innerRef,p=(0,L.Z)(t,["component","replace","to","innerRef"]);return i.createElement(o.__RouterContext.Consumer,null,(function(t){t||(0,l.Z)(!1);var e=t.history,o=M(S(c,t.location),t.location),f=o?e.createHref(o):"",h=(0,a.Z)({},p,{href:f,navigate:function(){var n=S(c,t.location),o=v(t.location)===v(M(n));(u||o?e.replace:e.push)(n)}});return U!==I?h.ref=n||s:h.innerRef=s,i.createElement(r,h)}))})),B=function(t){return t},F=i.forwardRef;void 0===F&&(F=B);var H=F((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,u=t.activeClassName,c=void 0===u?"active":u,s=t.activeStyle,p=t.className,f=t.exact,h=t.isActive,d=t.location,v=t.sensitive,m=t.strict,g=t.style,y=t.to,w=t.innerRef,P=(0,L.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(o.__RouterContext.Consumer,null,(function(t){t||(0,l.Z)(!1);var e=d||t.location,u=M(S(y,e),e),R=u.pathname,C=R&&R.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=C?(0,o.matchPath)(e.pathname,{path:C,exact:f,sensitive:v,strict:m}):null,b=!!(h?h(T,e):T),E="function"==typeof p?p(b):p,O="function"==typeof g?g(b):g;b&&(E=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(E,c),O=(0,a.Z)({},O,s));var x=(0,a.Z)({"aria-current":b&&r||null,className:E,style:O,to:u},P);return B!==F?x.ref=n||w:x.innerRef=w,i.createElement(Z,x)}))}))},90258:(t,n,e)=>{e.r(n),e.d(n,{MemoryRouter:()=>S,Prompt:()=>U,Redirect:()=>B,Route:()=>W,Router:()=>k,StaticRouter:()=>X,Switch:()=>K,__HistoryContext:()=>L,__RouterContext:()=>D,generatePath:()=>Z,matchPath:()=>j,useHistory:()=>J,useLocation:()=>tt,useParams:()=>nt,useRouteMatch:()=>et,withRouter:()=>$});var o=e(23788),r=e(32735),i=e(20011);function a(t){return"/"===t.charAt(0)}function u(t,n){for(var e=n,o=e+1,r=t.length;o<r;e+=1,o+=1)t[e]=t[o];t.pop()}const c=function(t,n){void 0===n&&(n="");var e,o=t&&t.split("/")||[],r=n&&n.split("/")||[],i=t&&a(t),c=n&&a(n),s=i||c;if(t&&a(t)?r=o:o.length&&(r.pop(),r=r.concat(o)),!r.length)return"/";if(r.length){var l=r[r.length-1];e="."===l||".."===l||""===l}else e=!1;for(var p=0,f=r.length;f>=0;f--){var h=r[f];"."===h?u(r,f):".."===h?(u(r,f),p++):p&&(u(r,f),p--)}if(!s)for(;p--;p)r.unshift("..");!s||""===r[0]||r[0]&&a(r[0])||r.unshift("");var d=r.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d};function s(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}const l=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every((function(n,o){return t(n,e[o])}));if("object"==typeof n||"object"==typeof e){var o=s(n),r=s(e);return o!==n||r!==e?t(o,r):Object.keys(Object.assign({},n,e)).every((function(o){return t(n[o],e[o])}))}return!1};function p(t){var n=t.pathname,e=t.search,o=t.hash,r=n||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function f(t,n,e,o){var r;"string"==typeof t?(r=function(t){var n=t||"/",e="",o="",r=n.indexOf("#");-1!==r&&(o=n.substr(r),n=n.substr(0,r));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===o?"":o}}(t),r.state=n):(void 0===(r=(0,i.Z)({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==n&&void 0===r.state&&(r.state=n));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(r.key=e),o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=c(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r}function h(){var t=null;var n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,o,r){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof o?o(i,r):r(!0):r(!1!==i)}else r(!0)},appendListener:function(t){var e=!0;function o(){e&&t.apply(void 0,arguments)}return n.push(o),function(){e=!1,n=n.filter((function(t){return t!==o}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];n.forEach((function(t){return t.apply(void 0,e)}))}}}"undefined"==typeof window||!window.document||window.document.createElement;function d(t,n,e){return Math.min(Math.max(t,n),e)}function v(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,o=n.initialEntries,r=void 0===o?["/"]:o,a=n.initialIndex,u=void 0===a?0:a,c=n.keyLength,s=void 0===c?6:c,l=h();function v(t){(0,i.Z)(R,t),R.length=R.entries.length,l.notifyListeners(R.location,R.action)}function m(){return Math.random().toString(36).substr(2,s)}var g=d(u,0,r.length-1),y=r.map((function(t){return f(t,void 0,"string"==typeof t?m():t.key||m())})),w=p;function P(t){var n=d(R.index+t,0,R.entries.length-1),o=R.entries[n];l.confirmTransitionTo(o,"POP",e,(function(t){t?v({action:"POP",location:o,index:n}):v()}))}var R={length:y.length,action:"POP",location:y[g],index:g,entries:y,createHref:w,push:function(t,n){var o="PUSH",r=f(t,n,m(),R.location);l.confirmTransitionTo(r,o,e,(function(t){if(t){var n=R.index+1,e=R.entries.slice(0);e.length>n?e.splice(n,e.length-n,r):e.push(r),v({action:o,location:r,index:n,entries:e})}}))},replace:function(t,n){var o="REPLACE",r=f(t,n,m(),R.location);l.confirmTransitionTo(r,o,e,(function(t){t&&(R.entries[R.index]=r,v({action:o,location:r}))}))},go:P,goBack:function(){P(-1)},goForward:function(){P(1)},canGo:function(t){var n=R.index+t;return n>=0&&n<R.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return R}var m=e(60216),g=e.n(m),y=1073741823,w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function P(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,o){t=e,n.forEach((function(n){return n(t,o)}))}}}var R=r.createContext||function(t,n){var e,i,a="__create-react-context-"+function(){var t="__global_unique_id__";return w[t]=(w[t]||0)+1}()+"__",u=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).emitter=P(n.props.value),n}(0,o.Z)(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[a]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,o=this.props.value,r=t.value;((i=o)===(a=r)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(o,r):y,0!==(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(r.Component);u.childContextTypes=((e={})[a]=g().object.isRequired,e);var c=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}(0,o.Z)(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?y:n},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?y:t},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(r.Component);return c.contextTypes=((i={})[a]=g().object,i),{Provider:u,Consumer:c}};const C=R;var T=e(56720),b=e(50193),E=e.n(b),O=(e(72594),e(66017)),x=e(86058),_=e.n(x),A=function(t){var n=C();return n.displayName=t,n},L=A("Router-History"),D=A("Router"),k=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}(0,o.Z)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return r.createElement(D.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},r.createElement(L.Provider,{children:this.props.children||null,value:this.props.history}))},n}(r.Component);var S=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).history=v(n.props),n}return(0,o.Z)(n,t),n.prototype.render=function(){return r.createElement(k,{history:this.history,children:this.props.children})},n}(r.Component);var M=function(t){function n(){return t.apply(this,arguments)||this}(0,o.Z)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(r.Component);function U(t){var n=t.message,e=t.when,o=void 0===e||e;return r.createElement(D.Consumer,null,(function(t){if(t||(0,T.Z)(!1),!o||t.staticContext)return null;var e=t.history.block;return r.createElement(M,{onMount:function(t){t.release=e(n)},onUpdate:function(t,o){o.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var I={},N=0;function Z(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(I[t])return I[t];var n=E().compile(t);return N<1e4&&(I[t]=n,N++),n}(t)(n,{pretty:!0})}function B(t){var n=t.computedMatch,e=t.to,o=t.push,a=void 0!==o&&o;return r.createElement(D.Consumer,null,(function(t){t||(0,T.Z)(!1);var o=t.history,u=t.staticContext,c=a?o.push:o.replace,s=f(n?"string"==typeof e?Z(e,n.params):(0,i.Z)({},e,{pathname:Z(e.pathname,n.params)}):e);return u?(c(s),null):r.createElement(M,{onMount:function(){c(s)},onUpdate:function(t,n){var e,o,r=f(n.to);e=r,o=(0,i.Z)({},s,{key:r.key}),e.pathname===o.pathname&&e.search===o.search&&e.hash===o.hash&&e.key===o.key&&l(e.state,o.state)||c(s)},to:e})}))}var F={},H=0;function j(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,o=e.path,r=e.exact,i=void 0!==r&&r,a=e.strict,u=void 0!==a&&a,c=e.sensitive,s=void 0!==c&&c;return[].concat(o).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var o=function(t,n){var e=""+n.end+n.strict+n.sensitive,o=F[e]||(F[e]={});if(o[t])return o[t];var r=[],i={regexp:E()(t,r,n),keys:r};return H<1e4&&(o[t]=i,H++),i}(e,{end:i,strict:u,sensitive:s}),r=o.regexp,a=o.keys,c=r.exec(t);if(!c)return null;var l=c[0],p=c.slice(1),f=t===l;return i&&!f?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:f,params:a.reduce((function(t,n,e){return t[n.name]=p[e],t}),{})}}),null)}var W=function(t){function n(){return t.apply(this,arguments)||this}return(0,o.Z)(n,t),n.prototype.render=function(){var t=this;return r.createElement(D.Consumer,null,(function(n){n||(0,T.Z)(!1);var e=t.props.location||n.location,o=t.props.computedMatch?t.props.computedMatch:t.props.path?j(e.pathname,t.props):n.match,a=(0,i.Z)({},n,{location:e,match:o}),u=t.props,c=u.children,s=u.component,l=u.render;return Array.isArray(c)&&function(t){return 0===r.Children.count(t)}(c)&&(c=null),r.createElement(D.Provider,{value:a},a.match?c?"function"==typeof c?c(a):c:s?r.createElement(s,a):l?l(a):null:"function"==typeof c?c(a):null)}))},n}(r.Component);function q(t){return"/"===t.charAt(0)?t:"/"+t}function z(t,n){if(!t)return n;var e=q(t);return 0!==n.pathname.indexOf(e)?n:(0,i.Z)({},n,{pathname:n.pathname.substr(e.length)})}function Y(t){return"string"==typeof t?t:p(t)}function V(t){return function(){(0,T.Z)(!1)}}function G(){}var X=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return G},n.handleBlock=function(){return G},n}(0,o.Z)(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,o=e.basename,r=void 0===o?"":o,a=e.context,u=void 0===a?{}:a;u.action=n,u.location=function(t,n){return t?(0,i.Z)({},n,{pathname:q(t)+n.pathname}):n}(r,f(t)),u.url=Y(u.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,o=t.context,a=void 0===o?{}:o,u=t.location,c=void 0===u?"/":u,s=(0,O.Z)(t,["basename","context","location"]),l={createHref:function(t){return q(e+Y(t))},action:"POP",location:z(e,f(c)),push:this.handlePush,replace:this.handleReplace,go:V(),goBack:V(),goForward:V(),listen:this.handleListen,block:this.handleBlock};return r.createElement(k,(0,i.Z)({},s,{history:l,staticContext:a}))},n}(r.Component);var K=function(t){function n(){return t.apply(this,arguments)||this}return(0,o.Z)(n,t),n.prototype.render=function(){var t=this;return r.createElement(D.Consumer,null,(function(n){n||(0,T.Z)(!1);var e,o,a=t.props.location||n.location;return r.Children.forEach(t.props.children,(function(t){if(null==o&&r.isValidElement(t)){e=t;var u=t.props.path||t.props.from;o=u?j(a.pathname,(0,i.Z)({},t.props,{path:u})):n.match}})),o?r.cloneElement(e,{location:a,computedMatch:o}):null}))},n}(r.Component);function $(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,o=(0,O.Z)(n,["wrappedComponentRef"]);return r.createElement(D.Consumer,null,(function(n){return n||(0,T.Z)(!1),r.createElement(t,(0,i.Z)({},o,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,_()(e,t)}var Q=r.useContext;function J(){return Q(L)}function tt(){return Q(D).location}function nt(){var t=Q(D).match;return t?t.params:{}}function et(t){var n=tt(),e=Q(D).match;return t?j(n.pathname,t):e}},24775:(t,n,e)=>{e.d(n,{QS:()=>d,mp:()=>v});var o=e(32735),r=e(60216),i=e.n(r);function a(){return a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a.apply(this,arguments)}var u={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},c={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},s="mousemove",l="mouseup";function p(t,n){if(0===n)return t;var e=Math.PI/180*n;return[t[0]*Math.cos(e)+t[1]*Math.sin(e),t[1]*Math.cos(e)-t[0]*Math.sin(e)]}function f(t,n){var e=function(n){n.touches&&n.touches.length>1||t((function(t,e){e.trackMouse&&(document.addEventListener(s,o),document.addEventListener(l,u));var r=n.touches?n.touches[0]:n,i=p([r.clientX,r.clientY],e.rotationAngle);return a({},t,c,{eventData:{initial:[].concat(i),first:!0},xy:i,start:n.timeStamp||0})}))},o=function(n){t((function(t,e){if(!t.xy[0]||!t.xy[1]||n.touches&&n.touches.length>1)return t;var o=n.touches?n.touches[0]:n,r=p([o.clientX,o.clientY],e.rotationAngle),i=r[0],u=r[1],c=t.xy[0]-i,s=t.xy[1]-u,l=Math.abs(c),f=Math.abs(s),h=(n.timeStamp||0)-t.start,d=Math.sqrt(l*l+f*f)/(h||1);if(l<e.delta&&f<e.delta&&!t.swiping)return t;var v=function(t,n,e,o){return t>n?e>0?"Left":"Right":o>0?"Up":"Down"}(l,f,c,s),m=a({},t.eventData,{event:n,absX:l,absY:f,deltaX:c,deltaY:s,velocity:d,dir:v});e.onSwiping&&e.onSwiping(m);var g=!1;return(e.onSwiping||e.onSwiped||e["onSwiped"+v])&&(g=!0),g&&e.preventDefaultTouchmoveEvent&&e.trackTouch&&n.cancelable&&n.preventDefault(),a({},t,{eventData:a({},m,{first:!1}),swiping:!0})}))},r=function(n){t((function(t,e){var o;return t.swiping&&(o=a({},t.eventData,{event:n}),e.onSwiped&&e.onSwiped(o),e["onSwiped"+o.dir]&&e["onSwiped"+o.dir](o)),a({},t,c,{eventData:o})}))},i=function(){document.removeEventListener(s,o),document.removeEventListener(l,u)},u=function(t){i(),r(t)},f=function(t){if(t&&t.addEventListener){var n=[["touchstart",e],["touchmove",o],["touchend",r]];return n.forEach((function(n){var e=n[0],o=n[1];return t.addEventListener(e,o)})),function(){return n.forEach((function(n){var e=n[0],o=n[1];return t.removeEventListener(e,o)}))}}},h={ref:function(n){null!==n&&t((function(t,e){if(t.el===n)return t;var o={};return t.el&&t.el!==n&&t.cleanUpTouch&&(t.cleanUpTouch(),o.cleanUpTouch=null),e.trackTouch&&n&&(o.cleanUpTouch=f(n)),a({},t,{el:n},o)}))}};return n.trackMouse&&(h.onMouseDown=e),[h,f]}function h(t,n,e){var o={};return!n.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),o.cleanUpTouch=null):n.trackTouch&&!t.cleanUpTouch&&t.el&&(o.cleanUpTouch=e(t.el)),a({},t,o)}function d(t){var n=t.trackMouse,e=o.useRef(a({},c,{type:"hook"})),r=o.useRef();r.current=a({},u,t);var i=o.useMemo((function(){return f((function(t){return e.current=t(e.current,r.current)}),{trackMouse:n})}),[n]),s=i[0],l=i[1];return e.current=h(e.current,r.current,l),s}var v=function(t){var n,e;function r(n){var e;return(e=t.call(this,n)||this)._set=function(t){e.transientState=t(e.transientState,e.props)},e.transientState=a({},c,{type:"class"}),e}return e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,r.prototype.render=function(){var t=this.props,n=t.className,e=t.style,r=t.nodeName,i=void 0===r?"div":r,u=t.innerRef,c=t.children,s=t.trackMouse,l=f(this._set,{trackMouse:s}),p=l[0],d=l[1];this.transientState=h(this.transientState,this.props,d);var v=u?function(t){return u(t),p.ref(t)}:p.ref;return o.createElement(i,a({},p,{className:n,style:e,ref:v}),c)},r}(o.PureComponent);v.propTypes={onSwiped:i().func,onSwiping:i().func,onSwipedUp:i().func,onSwipedRight:i().func,onSwipedDown:i().func,onSwipedLeft:i().func,delta:i().number,preventDefaultTouchmoveEvent:i().bool,nodeName:i().string,trackMouse:i().bool,trackTouch:i().bool,innerRef:i().func,rotationAngle:i().number},v.defaultProps=u},83284:function(t,n,e){var o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},o.apply(this,arguments)},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n};Object.defineProperty(n,"__esModule",{value:!0});var i=r(e(32735)),a=e(68169);n.ArrowContainer=function(t){var n=t.position,e=t.children,r=t.style,u=t.arrowColor,c=void 0===u?a.Constants.DEFAULT_ARROW_COLOR:u,s=t.arrowSize,l=void 0===s?10:s,p=t.arrowStyle,f=t.popoverRect,h=t.targetRect;return i.createElement("div",{style:o({paddingLeft:"right"===n?l:0,paddingTop:"bottom"===n?l:0,paddingBottom:"top"===n?l:0,paddingRight:"left"===n?l:0},r)},i.createElement("div",{style:o(o({position:"absolute"},function(){var t=2*l,e=h.top-f.top+h.height/2-t/2,o=h.left-f.left+h.width/2-t/2;switch(o=(o=o<0?0:o)+t>f.width?f.width-t:o,e=(e=e<0?0:e)+t>f.height?f.height-t:e,n){case"right":return{borderTop:l+"px solid transparent",borderBottom:l+"px solid transparent",borderRight:l+"px solid "+c,left:0,top:e};case"left":return{borderTop:l+"px solid transparent",borderBottom:l+"px solid transparent",borderLeft:l+"px solid "+c,right:0,top:e};case"bottom":return{borderLeft:l+"px solid transparent",borderRight:l+"px solid transparent",borderBottom:l+"px solid "+c,top:0,left:o};default:return{borderLeft:l+"px solid transparent",borderRight:l+"px solid transparent",borderTop:l+"px solid "+c,bottom:0,left:o}}}()),p)}),e)}},17261:function(t,n,e){var o,r=this&&this.__extends||(o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},o(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=this&&this.__spreadArrays||function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var o=Array(t),r=0;for(n=0;n<e;n++)for(var i=arguments[n],a=0,u=i.length;a<u;a++,r++)o[r]=i[a];return o},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var u=a(e(32735)),c=e(83284);n.ArrowContainer=c.ArrowContainer;var s=e(79297),l=e(68169),p=["top","right","left","bottom"],f=function(t){function n(n){var e=t.call(this,n)||this;return e.targetRef=u.default.createRef(),e.targetRect=void 0,e.targetPositionIntervalHandler=void 0,e.popoverDiv=void 0,e.positionOrder=void 0,e.willUnmount=!1,e.willMount=!1,e.onClick=function(t){var n=e.props,o=n.onClickOutside,r=n.isOpen;e.willUnmount||e.willMount||e.popoverDiv.contains(t.target)||e.targetRef.current.contains(t.target)||!o||!r||o(t)},e.onResize=function(){e.renderPopover()},e.state={popoverInfo:void 0,isTransitioningToClosed:!1,internalisOpen:!1},e.willUnmount=!1,e.willMount=!0,e}return r(n,t),n.getDerivedStateFromProps=function(t,n){var e=n.internalisOpen,o=n.isTransitioningToClosed,r=t.isOpen;return!0!==e||!1!==r||o?null:{internalisOpen:!1,isTransitioningToClosed:!0}},n.prototype.componentDidMount=function(){var t=this;window.setTimeout((function(){return t.willMount=!1}));var n=this.props,e=n.position,o=n.isOpen;this.positionOrder=this.getPositionPriorityOrder(e),this.updatePopover(o)},n.prototype.componentDidUpdate=function(t){var n=t.isOpen,e=t.align,o=t.position,r=t.transitionDuration,i=t.padding,a=t.windowBorderPadding,u=this.props,c=u.isOpen,s=u.position,l=u.transitionDuration,p=u.align,f=u.contentDestination,h=u.padding,d=u.windowBorderPadding;this.positionOrder=this.getPositionPriorityOrder(s);var v=t.contentDestination!==f;(n!==c||e!==p||o!==s||i!==h||a!==d||v)&&this.updatePopover(c),r!==l&&(this.popoverDiv.style.transition="opacity "+l+"s")},n.prototype.componentWillUnmount=function(){this.willUnmount=!0,window.clearTimeout(this.removePopoverTimeout),window.clearInterval(this.targetPositionIntervalHandler),window.removeEventListener("resize",this.onResize),window.removeEventListener("click",this.onClick),this.removePopover()},n.prototype.getNudgedPopoverPosition=function(t){var n=t.top,e=t.left,o=t.width,r=t.height,i=this.props.windowBorderPadding;return{top:n=(n=n<i?i:n)+r>window.innerHeight-i?window.innerHeight-i-r:n,left:e=(e=e<i?i:e)+o>window.innerWidth-i?window.innerWidth-i-o:e}},n.prototype.getPositionPriorityOrder=function(t){if(t&&"string"!=typeof t){if(l.Constants.DEFAULT_POSITIONS.every((function(n){return void 0!==t.find((function(t){return t===n}))})))return l.arrayUnique(t);var n=l.Constants.DEFAULT_POSITIONS.filter((function(n){return void 0===t.find((function(t){return t===n}))}));return l.arrayUnique(i(t,n))}if(t&&"string"==typeof t){n=l.Constants.DEFAULT_POSITIONS.filter((function(n){return n!==t}));return l.arrayUnique(i([t],n))}return p},n.prototype.getLocationForPosition=function(t,n,e){var o,r,i=this.props,a=i.padding,u=i.align,c=n.left+n.width/2,s=n.top+n.height/2;switch(t){case"top":o=n.top-e.height-a,r=c-e.width/2,"start"===u&&(r=n.left),"end"===u&&(r=n.right-e.width);break;case"left":o=s-e.height/2,r=n.left-a-e.width,"start"===u&&(o=n.top),"end"===u&&(o=n.bottom-e.height);break;case"bottom":o=n.bottom+a,r=c-e.width/2,"start"===u&&(r=n.left),"end"===u&&(r=n.right-e.width);break;case"right":o=s-e.height/2,r=n.right+a,"start"===u&&(o=n.top),"end"===u&&(o=n.bottom-e.height)}return{top:o,left:r}},n.prototype.createContainer=function(){var t=this.props,n=t.containerStyle,e=t.containerClassName,o=window.document.createElement("div");return o.style.overflow="hidden",n&&Object.keys(n).forEach((function(t){return o.style[t]=n[t]})),o.className=e,o.style.position="absolute",o.style.top="0",o.style.left="0",o},n.prototype.updatePopover=function(t){if(t&&this.targetRef){if(!this.popoverDiv||!this.popoverDiv.parentNode){var n=this.props.transitionDuration;this.popoverDiv=this.createContainer(),this.popoverDiv.style.opacity="0",this.popoverDiv.style.transition="opacity "+n+"s"}window.addEventListener("resize",this.onResize),window.addEventListener("click",this.onClick),this.renderPopover()}else this.removePopover()},n.prototype.startTargetPositionListener=function(t){var n=this;this.targetPositionIntervalHandler||(this.targetPositionIntervalHandler=window.setInterval((function(){var t=n.targetRef.current.getBoundingClientRect();l.targetPositionHasChanged(n.targetRect,t)&&n.renderPopover(),n.targetRect=t}),t))},n.prototype.removePopover=function(){var t=this,n=this.props,e=n.transitionDuration,o=n.isOpen;this.popoverDiv&&(this.popoverDiv.style.opacity="0");var r=function(){!t.willUnmount&&o&&t.popoverDiv.parentNode||(window.clearInterval(t.targetPositionIntervalHandler),window.removeEventListener("resize",t.onResize),window.removeEventListener("click",t.onClick),t.targetPositionIntervalHandler=void 0,t.setState({isTransitioningToClosed:!1}))};this.willUnmount?r():this.removePopoverTimeout=window.setTimeout(r,1e3*(e||l.Constants.FADE_TRANSITION))},n.prototype.renderPopover=function(t){var n=this;void 0===t&&(t=0),t>=this.positionOrder.length||this.renderWithPosition({position:this.positionOrder[t],targetRect:this.targetRef.current.getBoundingClientRect()},(function(e,o){var r,i=n.props,a=i.disableReposition,u=i.contentLocation,c=i.contentDestination;if(e&&!a&&"object"!=typeof u)n.renderPopover(t+1);else{var s=n.props,l=s.contentLocation,p=s.align,f=n.getNudgedPopoverPosition(o),h=f.top,d=f.left,v=o.top,m=o.left,g=n.positionOrder[t],y=a?{top:v,left:m}:{top:h,left:d},w=y.top,P=y.left;if(l){var R=n.targetRef.current.getBoundingClientRect(),C=n.popoverDiv.getBoundingClientRect();w=(r="function"==typeof l?l({targetRect:R,popoverRect:C,position:g,align:p,nudgedLeft:d,nudgedTop:h}):l).top,P=r.left,n.popoverDiv.style.left=P.toFixed()+"px",n.popoverDiv.style.top=w.toFixed()+"px"}else{var T=0,b=0;if(c){var E=c.getBoundingClientRect();T=-E.top,b=-E.left}var O=w+window.pageYOffset,x=P+window.pageXOffset+T,_=O+b;n.popoverDiv.style.left=x.toFixed()+"px",n.popoverDiv.style.top=_.toFixed()+"px"}n.popoverDiv.style.width=void 0,n.popoverDiv.style.height=void 0,n.renderWithPosition({position:g,nudgedTop:h-o.top,nudgedLeft:d-o.left,targetRect:n.targetRef.current.getBoundingClientRect(),popoverRect:n.popoverDiv.getBoundingClientRect()},(function(){n.startTargetPositionListener(10),"1"===n.popoverDiv.style.opacity||n.state.isTransitioningToClosed||(n.popoverDiv.style.opacity="1")}))}}))},n.prototype.renderPopoverContent=function(){var t,n=this.props,e=n.content,o=n.isOpen,r=n.contentDestination,i=this.state,a=i.popoverInfo,c=i.isTransitioningToClosed;if((o||c)&&this.popoverDiv&&a){return u.default.createElement(s.PopoverPortal,{element:this.popoverDiv,container:r||window.document.body},(t=a,"function"==typeof e?e(t):e))}return null},n.prototype.renderChildContent=function(){var t=this.props.children;return"function"==typeof t?t(this.targetRef):u.default.cloneElement(t,{ref:this.targetRef})},n.prototype.renderWithPosition=function(t,n){var e=this,o=t.position,r=t.nudgedLeft,i=void 0===r?0:r,a=t.nudgedTop,u=void 0===a?0:a,c=t.targetRect,s=void 0===c?l.Constants.EMPTY_CLIENT_RECT:c,p=t.popoverRect,f=void 0===p?l.Constants.EMPTY_CLIENT_RECT:p,h=this.props,d=h.windowBorderPadding,v=h.align,m={position:o,nudgedLeft:i,nudgedTop:u,targetRect:s,popoverRect:f,align:v};l.popoverInfosAreEqual(this.state.popoverInfo,m)||(window.clearTimeout(this.removePopoverTimeout),this.setState({popoverInfo:m,isTransitioningToClosed:!1,internalisOpen:!0},(function(){if(!e.willUnmount){s=e.targetRef.current.getBoundingClientRect(),f=e.popoverDiv.getBoundingClientRect();var t=e.getLocationForPosition(o,s,f),r=t.top,i=t.left;n("top"===o&&r<d||"left"===o&&i<d||"right"===o&&i+f.width>window.innerWidth-d||"bottom"===o&&r+f.height>window.innerHeight-d,{width:f.width,height:f.height,top:r,left:i})}})))},n.prototype.render=function(){return u.default.createElement(u.default.Fragment,null,this.renderChildContent(),this.renderPopoverContent())},n.defaultProps={padding:l.Constants.DEFAULT_PADDING,windowBorderPadding:l.Constants.DEFAULT_WINDOW_PADDING,position:p,align:"center",containerClassName:l.Constants.POPOVER_CONTAINER_CLASS_NAME,transitionDuration:l.Constants.FADE_TRANSITION},n}(u.default.Component);n.default=f},79297:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0});var o=e(32735),r=e(12788);n.PopoverPortal=function(t){var n=t.container,e=t.element,i=t.children;return o.useLayoutEffect((function(){return n.appendChild(e),function(){return n.removeChild(e)}}),[n]),r.createPortal(i,e)}},68169:(t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Constants={POPOVER_CONTAINER_CLASS_NAME:"react-tiny-popover-container",DEFAULT_PADDING:6,DEFAULT_WINDOW_PADDING:6,FADE_TRANSITION:.35,DEFAULT_ARROW_COLOR:"black",DEFAULT_POSITIONS:["top","left","right","bottom"],EMPTY_CLIENT_RECT:{top:0,left:0,bottom:0,height:0,right:0,width:0}},n.arrayUnique=function(t){return t.filter((function(t,n,e){return e.indexOf(t)===n}))},n.rectsAreEqual=function(t,n){return t===n||(null==t?void 0:t.bottom)===(null==n?void 0:n.bottom)&&(null==t?void 0:t.height)===(null==n?void 0:n.height)&&(null==t?void 0:t.left)===(null==n?void 0:n.left)&&(null==t?void 0:t.right)===(null==n?void 0:n.right)&&(null==t?void 0:t.top)===(null==n?void 0:n.top)&&(null==t?void 0:t.width)===(null==n?void 0:n.width)},n.popoverInfosAreEqual=function(t,e){return t===e||(null==t?void 0:t.align)===(null==e?void 0:e.align)&&(null==t?void 0:t.nudgedLeft)===(null==e?void 0:e.nudgedLeft)&&(null==t?void 0:t.nudgedTop)===(null==e?void 0:e.nudgedTop)&&n.rectsAreEqual(null==t?void 0:t.popoverRect,null==e?void 0:e.popoverRect)&&n.rectsAreEqual(null==t?void 0:t.targetRect,null==e?void 0:e.targetRect)&&(null==t?void 0:t.position)===(null==e?void 0:e.position)},n.targetPositionHasChanged=function(t,n){return void 0===t||t.left!==n.left||t.top!==n.top||t.width!==n.width||t.height!==n.height}}}]);
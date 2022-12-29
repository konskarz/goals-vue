import{c as Je,j as be,h as qe,G as We,r as wt,J as Et,o as vt,K as St,w as Ot,Z as gt,_ as Rt,g as At,$ as Ge}from"./index-99c26e0d.js";const dn=Je({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const r=be(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>qe("div",{class:r.value},We(t.default))}}),hn=Je({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const r=be(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>qe("div",{class:r.value,role:"toolbar"},We(t.default))}}),pn={dark:{type:Boolean,default:null}};function mn(e,t){return be(()=>e.dark===null?t.dark.isActive:e.dark)}function Tt(e){let t=null;if(document.cookie&&document.cookie!==""){const r=document.cookie.split(";");for(let n=0;n<r.length;n++){const i=r[n].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}}return t}const _t=Tt("csrftoken");function Ye(e,t){return function(){return e.apply(t,arguments)}}const{toString:Qe}=Object.prototype,{getPrototypeOf:we}=Object,Ee=(e=>t=>{const r=Qe.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>Ee(t)===e),ee=e=>t=>typeof t===e,{isArray:k}=Array,M=ee("undefined");function xt(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&D(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Xe=_("ArrayBuffer");function Ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Xe(e.buffer),t}const Nt=ee("string"),D=ee("function"),Ze=ee("number"),ve=e=>e!==null&&typeof e=="object",Dt=e=>e===!0||e===!1,W=e=>{if(Ee(e)!=="object")return!1;const t=we(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Pt=_("Date"),Ft=_("File"),Lt=_("Blob"),Bt=_("FileList"),kt=e=>ve(e)&&D(e.pipe),jt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Qe.call(e)===t||D(e.toString)&&e.toString()===t)},Ut=_("URLSearchParams"),It=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function z(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),k(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let u;for(n=0;n<s;n++)u=o[n],t.call(null,e[u],u,e)}}function et(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const tt=typeof self>"u"?typeof global>"u"?globalThis:global:self,rt=e=>!M(e)&&e!==tt;function he(){const{caseless:e}=rt(this)&&this||{},t={},r=(n,i)=>{const o=e&&et(t,i)||i;W(t[o])&&W(n)?t[o]=he(t[o],n):W(n)?t[o]=he({},n):k(n)?t[o]=n.slice():t[o]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&z(arguments[n],r);return t}const Vt=(e,t,r,{allOwnKeys:n}={})=>(z(t,(i,o)=>{r&&D(i)?e[o]=Ye(i,r):e[o]=i},{allOwnKeys:n}),e),Mt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Ht=(e,t,r,n)=>{let i,o,s;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!n||n(s,e,t))&&!u[s]&&(t[s]=e[s],u[s]=!0);e=r!==!1&&we(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Kt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},$t=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Ze(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&we(Uint8Array)),qt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Wt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Gt=_("HTMLFormElement"),Yt=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),Pe=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Qt=_("RegExp"),nt=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};z(r,(i,o)=>{t(i,o,e)!==!1&&(n[o]=i)}),Object.defineProperties(e,n)},Xt=e=>{nt(e,(t,r)=>{if(D(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(D(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Zt=(e,t)=>{const r={},n=i=>{i.forEach(o=>{r[o]=!0})};return k(e)?n(e):n(String(e).split(t)),r},er=()=>{},tr=(e,t)=>(e=+e,Number.isFinite(e)?e:t),rr=e=>{const t=new Array(10),r=(n,i)=>{if(ve(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const o=k(n)?[]:{};return z(n,(s,u)=>{const f=r(s,i+1);!M(f)&&(o[u]=f)}),t[i]=void 0,o}}return n};return r(e,0)},c={isArray:k,isArrayBuffer:Xe,isBuffer:xt,isFormData:jt,isArrayBufferView:Ct,isString:Nt,isNumber:Ze,isBoolean:Dt,isObject:ve,isPlainObject:W,isUndefined:M,isDate:Pt,isFile:Ft,isBlob:Lt,isRegExp:Qt,isFunction:D,isStream:kt,isURLSearchParams:Ut,isTypedArray:Jt,isFileList:Bt,forEach:z,merge:he,extend:Vt,trim:It,stripBOM:Mt,inherits:zt,toFlatObject:Ht,kindOf:Ee,kindOfTest:_,endsWith:Kt,toArray:$t,forEachEntry:qt,matchAll:Wt,isHTMLForm:Gt,hasOwnProperty:Pe,hasOwnProp:Pe,reduceDescriptors:nt,freezeMethods:Xt,toObjectSet:Zt,toCamelCase:Yt,noop:er,toFiniteNumber:tr,findKey:et,global:tt,isContextDefined:rt,toJSONObject:rr};function y(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}c.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ot=y.prototype,it={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{it[e]={value:e}});Object.defineProperties(y,it);Object.defineProperty(ot,"isAxiosError",{value:!0});y.from=(e,t,r,n,i,o)=>{const s=Object.create(ot);return c.toFlatObject(e,s,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),y.call(s,e.message,t,r,n,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nr=typeof self=="object"?self.FormData:window.FormData;const or=nr;function pe(e){return c.isPlainObject(e)||c.isArray(e)}function st(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Fe(e,t,r){return e?e.concat(t).map(function(i,o){return i=st(i),!r&&o?"["+i+"]":i}).join(r?".":""):t}function ir(e){return c.isArray(e)&&!e.some(pe)}const sr=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function ar(e){return e&&c.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function te(e,t,r){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new(or||FormData),r=c.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,S){return!c.isUndefined(S[m])});const n=r.metaTokens,i=r.visitor||l,o=r.dots,s=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&ar(t);if(!c.isFunction(i))throw new TypeError("visitor must be a function");function a(d){if(d===null)return"";if(c.isDate(d))return d.toISOString();if(!f&&c.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(d)||c.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,S){let O=d;if(d&&!S&&typeof d=="object"){if(c.endsWith(m,"{}"))m=n?m:m.slice(0,-2),d=JSON.stringify(d);else if(c.isArray(d)&&ir(d)||c.isFileList(d)||c.endsWith(m,"[]")&&(O=c.toArray(d)))return m=st(m),O.forEach(function(w,K){!(c.isUndefined(w)||w===null)&&t.append(s===!0?Fe([m],K,o):s===null?m:m+"[]",a(w))}),!1}return pe(d)?!0:(t.append(Fe(S,m,o),a(d)),!1)}const h=[],b=Object.assign(sr,{defaultVisitor:l,convertValue:a,isVisitable:pe});function p(d,m){if(!c.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(d),c.forEach(d,function(O,E){(!(c.isUndefined(O)||O===null)&&i.call(t,O,c.isString(E)?E.trim():E,m,b))===!0&&p(O,m?m.concat(E):[E])}),h.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Se(e,t){this._pairs=[],e&&te(e,this,t)}const at=Se.prototype;at.append=function(t,r){this._pairs.push([t,r])};at.toString=function(t){const r=t?function(n){return t.call(this,n,Le)}:Le;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function cr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ct(e,t,r){if(!t)return e;const n=r&&r.encode||cr,i=r&&r.serialize;let o;if(i?o=i(t,r):o=c.isURLSearchParams(t)?t.toString():new Se(t,r).toString(n),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ur{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Be=ur,ut={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lr=typeof URLSearchParams<"u"?URLSearchParams:Se,fr=FormData,dr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),hr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:lr,FormData:fr,Blob},isStandardBrowserEnv:dr,isStandardBrowserWebWorkerEnv:hr,protocols:["http","https","file","blob","url","data"]};function pr(e,t){return te(e,new R.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,o){return R.isNode&&c.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function mr(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yr(e){const t={},r=Object.keys(e);let n;const i=r.length;let o;for(n=0;n<i;n++)o=r[n],t[o]=e[o];return t}function lt(e){function t(r,n,i,o){let s=r[o++];const u=Number.isFinite(+s),f=o>=r.length;return s=!s&&c.isArray(i)?i.length:s,f?(c.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!u):((!i[s]||!c.isObject(i[s]))&&(i[s]=[]),t(r,n,i[s],o)&&c.isArray(i[s])&&(i[s]=yr(i[s])),!u)}if(c.isFormData(e)&&c.isFunction(e.entries)){const r={};return c.forEachEntry(e,(n,i)=>{t(mr(n),i,r,0)}),r}return null}const br={"Content-Type":void 0};function wr(e,t,r){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const re={transitional:ut,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return i&&i?JSON.stringify(lt(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return pr(t,this.formSerializer).toString();if((u=c.isFileList(t))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return te(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),wr(t)):t}],transformResponse:[function(t){const r=this.transitional||re.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&c.isString(t)&&(n&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(s)throw u.name==="SyntaxError"?y.from(u,y.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(t){re.headers[t]={}});c.forEach(["post","put","patch"],function(t){re.headers[t]=c.merge(br)});const Oe=re,Er=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vr=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),n=s.substring(i+1).trim(),!(!r||t[r]&&Er[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},ke=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function G(e){return e===!1||e==null?e:c.isArray(e)?e.map(G):String(e)}function Sr(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}function Or(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function je(e,t,r,n){if(c.isFunction(n))return n.call(this,t,r);if(c.isString(t)){if(c.isString(n))return t.indexOf(n)!==-1;if(c.isRegExp(n))return n.test(t)}}function gr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Rr(e,t){const r=c.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,o,s){return this[n].call(this,t,i,o,s)},configurable:!0})})}class ne{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function o(u,f,a){const l=I(f);if(!l)throw new Error("header name must be a non-empty string");const h=c.findKey(i,l);(!h||i[h]===void 0||a===!0||a===void 0&&i[h]!==!1)&&(i[h||f]=G(u))}const s=(u,f)=>c.forEach(u,(a,l)=>o(a,l,f));return c.isPlainObject(t)||t instanceof this.constructor?s(t,r):c.isString(t)&&(t=t.trim())&&!Or(t)?s(vr(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=I(t),t){const n=c.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return Sr(i);if(c.isFunction(r))return r.call(this,i,n);if(c.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=I(t),t){const n=c.findKey(this,t);return!!(n&&(!r||je(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function o(s){if(s=I(s),s){const u=c.findKey(n,s);u&&(!r||je(n,n[u],u,r))&&(delete n[u],i=!0)}}return c.isArray(t)?t.forEach(o):o(t),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const r=this,n={};return c.forEach(this,(i,o)=>{const s=c.findKey(n,o);if(s){r[s]=G(i),delete r[o];return}const u=t?gr(o):String(o).trim();u!==o&&delete r[o],r[u]=G(i),n[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return c.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&c.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[ke]=this[ke]={accessors:{}}).accessors,i=this.prototype;function o(s){const u=I(s);n[u]||(Rr(i,s),n[u]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}ne.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);c.freezeMethods(ne.prototype);c.freezeMethods(ne);const T=ne;function ae(e,t){const r=this||Oe,n=t||r,i=T.from(n.headers);let o=n.data;return c.forEach(e,function(u){o=u.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function ft(e){return!!(e&&e.__CANCEL__)}function H(e,t,r){y.call(this,e??"canceled",y.ERR_CANCELED,t,r),this.name="CanceledError"}c.inherits(H,y,{__CANCEL__:!0});const Ar=null;function Tr(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new y("Request failed with status code "+r.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const _r=R.isStandardBrowserEnv?function(){return{write:function(r,n,i,o,s,u){const f=[];f.push(r+"="+encodeURIComponent(n)),c.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),c.isString(o)&&f.push("path="+o),c.isString(s)&&f.push("domain="+s),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function xr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Cr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function dt(e,t){return e&&!xr(t)?Cr(e,t):t}const Nr=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function i(o){let s=o;return t&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(s){const u=c.isString(s)?i(s):s;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();function Dr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Pr(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(f){const a=Date.now(),l=n[o];s||(s=a),r[i]=f,n[i]=a;let h=o,b=0;for(;h!==i;)b+=r[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),a-s<t)return;const p=l&&a-l;return p?Math.round(b*1e3/p):void 0}}function Ue(e,t){let r=0;const n=Pr(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,u=o-r,f=n(u),a=o<=s;r=o;const l={loaded:o,total:s,progress:s?o/s:void 0,bytes:u,rate:f||void 0,estimated:f&&s&&a?(s-o)/f:void 0,event:i};l[t?"download":"upload"]=!0,e(l)}}const Fr=typeof XMLHttpRequest<"u",Lr=Fr&&function(e){return new Promise(function(r,n){let i=e.data;const o=T.from(e.headers).normalize(),s=e.responseType;let u;function f(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}c.isFormData(i)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let a=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(p+":"+d))}const l=dt(e.baseURL,e.url);a.open(e.method.toUpperCase(),ct(l,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function h(){if(!a)return;const p=T.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),m={data:!s||s==="text"||s==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:p,config:e,request:a};Tr(function(O){r(O),f()},function(O){n(O),f()},m),a=null}if("onloadend"in a?a.onloadend=h:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(h)},a.onabort=function(){a&&(n(new y("Request aborted",y.ECONNABORTED,e,a)),a=null)},a.onerror=function(){n(new y("Network Error",y.ERR_NETWORK,e,a)),a=null},a.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||ut;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),n(new y(d,m.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,a)),a=null},R.isStandardBrowserEnv){const p=(e.withCredentials||Nr(l))&&e.xsrfCookieName&&_r.read(e.xsrfCookieName);p&&o.set(e.xsrfHeaderName,p)}i===void 0&&o.setContentType(null),"setRequestHeader"in a&&c.forEach(o.toJSON(),function(d,m){a.setRequestHeader(m,d)}),c.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),s&&s!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",Ue(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",Ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=p=>{a&&(n(!p||p.type?new H(null,e,a):p),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const b=Dr(l);if(b&&R.protocols.indexOf(b)===-1){n(new y("Unsupported protocol "+b+":",y.ERR_BAD_REQUEST,e));return}a.send(i||null)})},Y={http:Ar,xhr:Lr};c.forEach(Y,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Br={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let r,n;for(let i=0;i<t&&(r=e[i],!(n=c.isString(r)?Y[r.toLowerCase()]:r));i++);if(!n)throw n===!1?new y(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(c.hasOwnProp(Y,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!c.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:Y};function ce(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function Ie(e){return ce(e),e.headers=T.from(e.headers),e.data=ae.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Br.getAdapter(e.adapter||Oe.adapter)(e).then(function(n){return ce(e),n.data=ae.call(e,e.transformResponse,n),n.headers=T.from(n.headers),n},function(n){return ft(n)||(ce(e),n&&n.response&&(n.response.data=ae.call(e,e.transformResponse,n.response),n.response.headers=T.from(n.response.headers))),Promise.reject(n)})}const Ve=e=>e instanceof T?e.toJSON():e;function B(e,t){t=t||{};const r={};function n(a,l,h){return c.isPlainObject(a)&&c.isPlainObject(l)?c.merge.call({caseless:h},a,l):c.isPlainObject(l)?c.merge({},l):c.isArray(l)?l.slice():l}function i(a,l,h){if(c.isUndefined(l)){if(!c.isUndefined(a))return n(void 0,a,h)}else return n(a,l,h)}function o(a,l){if(!c.isUndefined(l))return n(void 0,l)}function s(a,l){if(c.isUndefined(l)){if(!c.isUndefined(a))return n(void 0,a)}else return n(void 0,l)}function u(a,l,h){if(h in t)return n(a,l);if(h in e)return n(void 0,a)}const f={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u,headers:(a,l)=>i(Ve(a),Ve(l),!0)};return c.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const h=f[l]||i,b=h(e[l],t[l],l);c.isUndefined(b)&&h!==u||(r[l]=b)}),r}const ht="1.2.1",ge={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ge[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Me={};ge.transitional=function(t,r,n){function i(o,s){return"[Axios v"+ht+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return(o,s,u)=>{if(t===!1)throw new y(i(s," has been removed"+(r?" in "+r:"")),y.ERR_DEPRECATED);return r&&!Me[s]&&(Me[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,s,u):!0}};function kr(e,t,r){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const o=n[i],s=t[o];if(s){const u=e[o],f=u===void 0||s(u,o,e);if(f!==!0)throw new y("option "+o+" must be "+f,y.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const me={assertOptions:kr,validators:ge},x=me.validators;class X{constructor(t){this.defaults=t,this.interceptors={request:new Be,response:new Be}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=B(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:o}=r;n!==void 0&&me.assertOptions(n,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),i!==void 0&&me.assertOptions(i,{encode:x.function,serialize:x.function},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s;s=o&&c.merge(o.common,o[r.method]),s&&c.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),r.headers=T.concat(s,o);const u=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(f=f&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const a=[];this.interceptors.response.forEach(function(m){a.push(m.fulfilled,m.rejected)});let l,h=0,b;if(!f){const d=[Ie.bind(this),void 0];for(d.unshift.apply(d,u),d.push.apply(d,a),b=d.length,l=Promise.resolve(r);h<b;)l=l.then(d[h++],d[h++]);return l}b=u.length;let p=r;for(h=0;h<b;){const d=u[h++],m=u[h++];try{p=d(p)}catch(S){m.call(this,S);break}}try{l=Ie.call(this,p)}catch(d){return Promise.reject(d)}for(h=0,b=a.length;h<b;)l=l.then(a[h++],a[h++]);return l}getUri(t){t=B(this.defaults,t);const r=dt(t.baseURL,t.url);return ct(r,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){X.prototype[t]=function(r,n){return this.request(B(n||{},{method:t,url:r,data:(n||{}).data}))}});c.forEach(["post","put","patch"],function(t){function r(n){return function(o,s,u){return this.request(B(u||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}X.prototype[t]=r(),X.prototype[t+"Form"]=r(!0)});const Q=X;class Re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(i=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](i);n._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(u=>{n.subscribe(u),o=u}).then(i);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o,s,u){n.reason||(n.reason=new H(o,s,u),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Re(function(i){t=i}),cancel:t}}}const jr=Re;function Ur(e){return function(r){return e.apply(null,r)}}function Ir(e){return c.isObject(e)&&e.isAxiosError===!0}function pt(e){const t=new Q(e),r=Ye(Q.prototype.request,t);return c.extend(r,Q.prototype,t,{allOwnKeys:!0}),c.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return pt(B(e,i))},r}const v=pt(Oe);v.Axios=Q;v.CanceledError=H;v.CancelToken=jr;v.isCancel=ft;v.VERSION=ht;v.toFormData=te;v.AxiosError=y;v.Cancel=v.CanceledError;v.all=function(t){return Promise.all(t)};v.spread=Ur;v.isAxiosError=Ir;v.mergeConfig=B;v.AxiosHeaders=T;v.formToJSON=e=>lt(c.isHTMLForm(e)?new FormData(e):e);v.default=v;const Vr=v;var ue=new WeakMap,ze=0;function Mr(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r){var n=void 0;e[r]===null||typeof e[r]!="object"&&typeof e[r]!="function"?typeof e[r]=="string"?n='"'+e[r]+'"':n=String(e[r]):ue.has(e[r])?n=ue.get(e[r]):(n=ze,ue.set(e[r],ze++)),t+="@"+n}return t}function zr(e){if(typeof e=="function")try{e=e()}catch{e=""}return Array.isArray(e)?e=Mr(e):e=String(e||""),e}var Ae=function(){function e(t){t===void 0&&(t=0),this.items=new Map,this.ttl=t}return e.prototype.serializeKey=function(t){return zr(t)},e.prototype.get=function(t){var r=this.serializeKey(t);return this.items.get(r)},e.prototype.set=function(t,r,n){var i=this.serializeKey(t),o=n||this.ttl,s=Date.now(),u={data:r,createdAt:s,expiresAt:o?s+o:1/0};this.dispatchExpire(o,u,i),this.items.set(i,u)},e.prototype.dispatchExpire=function(t,r,n){var i=this;t&&setTimeout(function(){var o=Date.now(),s=o>=r.expiresAt;s&&i.delete(n)},t)},e.prototype.delete=function(t){this.items.delete(t)},e}();function Hr(){return typeof navigator.onLine<"u"?navigator.onLine:!0}function Kr(){return typeof document<"u"&&typeof document.visibilityState<"u"?document.visibilityState!=="hidden":!0}var $r=function(e){return fetch(e).then(function(t){return t.json()})};const le={isOnline:Hr,isDocumentVisible:Kr,fetcher:$r};var A=globalThis&&globalThis.__assign||function(){return A=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},A.apply(this,arguments)},P=globalThis&&globalThis.__awaiter||function(e,t,r,n){function i(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function u(l){try{a(n.next(l))}catch(h){s(h)}}function f(l){try{a(n.throw(l))}catch(h){s(h)}}function a(l){l.done?o(l.value):i(l.value).then(u,f)}a((n=n.apply(e,t||[])).next())})},F=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(l){return f([a,l])}}function f(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(l){a=[6,l],i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},Jr=globalThis&&globalThis.__read||function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(s)throw s.error}}return o},qr=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))},mt=new Ae,Z=new Ae,fe=new Ae,yt={cache:mt,refreshInterval:0,ttl:0,serverTTL:1e3,dedupingInterval:2e3,revalidateOnFocus:!0,revalidateDebounce:0,shouldRetryOnError:!0,errorRetryInterval:5e3,errorRetryCount:5,fetcher:le.fetcher,isOnline:le.isOnline,isDocumentVisible:le.isDocumentVisible};function Wr(e,t,r){var n=Z.get(e);if(n)n.data.push(t);else{var i=5e3;Z.set(e,[t],r>0?r+i:r)}}function Gr(e,t,r){if(r.isDocumentVisible()&&!(r.errorRetryCount!==void 0&&t>r.errorRetryCount)){var n=Math.min(t||0,r.errorRetryCount),i=n*r.errorRetryInterval;setTimeout(function(){e(null,{errorRetryCount:n+1,shouldRetryOnError:!0})},i)}}var He=function(e,t,r,n){return r===void 0&&(r=mt),n===void 0&&(n=yt.ttl),P(void 0,void 0,void 0,function(){var i,o,s,u,f,a,l;return F(this,function(h){switch(h.label){case 0:if(!Qr(t))return[3,5];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,t];case 2:return i=h.sent(),[3,4];case 3:return u=h.sent(),o=u,[3,4];case 4:return[3,6];case 5:i=t,h.label=6;case 6:return s=!1,f={data:i,error:o,isValidating:s},typeof i<"u"&&r.set(e,f,n),a=Z.get(e),a&&a.data.length&&(l=a.data.filter(function(b){return b.key===e}),l.forEach(function(b,p){typeof f.data<"u"&&(b.data=f.data),b.error=f.error,b.isValidating=f.isValidating;var d=p===l.length-1;d||delete l[p]}),l=l.filter(Boolean)),[2,f]}})})};function Yr(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n,i,o=A({},yt),s=!1,u=!1,f=At(),a=(f==null?void 0:f.proxy)||f;if(!a)return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."),null;var l=(a==null?void 0:a.$isServer)||!1;t.length>=1&&(n=t[0]),t.length>=2&&(i=t[1]),t.length>2&&(o=A(A({},o),t[2]));var h=l?o.serverTTL:o.ttl,b=typeof n=="function"?n:wt(n);typeof i>"u"&&(i=o.fetcher);var p=null;p||(p=Et({data:void 0,error:void 0,isValidating:!0,key:null}));var d=function(E,w){return P(e,void 0,void 0,function(){var K,g,j,U,oe,xe,ie,Ce=this;return F(this,function($){switch($.label){case 0:return K=p.data===void 0,g=b.value,g?(j=o.cache.get(g),U=j&&j.data,p.isValidating=!0,U&&(p.data=U.data,p.error=U.error),oe=E||i,!oe||!o.isDocumentVisible()&&!K||(w==null?void 0:w.forceRevalidate)!==void 0&&!(w!=null&&w.forceRevalidate)?(p.isValidating=!1,[2]):j&&(xe=Boolean(Date.now()-j.createdAt>=o.dedupingInterval||(w==null?void 0:w.forceRevalidate)),!xe)?(p.isValidating=!1,[2]):(ie=function(){return P(Ce,void 0,void 0,function(){var N,Ne,se,De;return F(this,function(J){switch(J.label){case 0:return N=fe.get(g),N?[3,2]:(Ne=Array.isArray(g)?g:[g],se=oe.apply(void 0,qr([],Jr(Ne),!1)),fe.set(g,se,o.dedupingInterval),[4,He(g,se,o.cache,h)]);case 1:return J.sent(),[3,4];case 2:return[4,He(g,N.data,o.cache,h)];case 3:J.sent(),J.label=4;case 4:return p.isValidating=!1,fe.delete(g),p.error!==void 0&&(De=!s&&o.shouldRetryOnError&&(w?w.shouldRetryOnError:!0),De&&Gr(d,w?w.errorRetryCount:1,o)),[2]}})})},U&&o.revalidateDebounce?[4,setTimeout(function(){return P(Ce,void 0,void 0,function(){return F(this,function(N){switch(N.label){case 0:return s?[3,2]:[4,ie()];case 1:N.sent(),N.label=2;case 2:return[2]}})})},o.revalidateDebounce)]:[3,2])):[2];case 1:return $.sent(),[3,4];case 2:return[4,ie()];case 3:$.sent(),$.label=4;case 4:return[2]}})})},m=function(){return P(e,void 0,void 0,function(){return F(this,function(E){return[2,d(null,{shouldRetryOnError:!1})]})})},S=null;vt(function(){var E=function(){return P(e,void 0,void 0,function(){return F(this,function(w){switch(w.label){case 0:return!p.error&&o.isOnline()?[4,d()]:[3,2];case 1:return w.sent(),[3,3];case 2:S&&clearTimeout(S),w.label=3;case 3:return o.refreshInterval&&!s&&(S=setTimeout(E,o.refreshInterval)),[2]}})})};o.refreshInterval&&(S=setTimeout(E,o.refreshInterval)),o.revalidateOnFocus&&(document.addEventListener("visibilitychange",m,!1),window.addEventListener("focus",m,!1))}),St(function(){s=!0,S&&clearTimeout(S),o.revalidateOnFocus&&(document.removeEventListener("visibilitychange",m,!1),window.removeEventListener("focus",m,!1));var E=Z.get(b.value);E&&(E.data=E.data.filter(function(w){return w!==p}))});try{Ot(b,function(E){gt(b)||(b.value=E),p.key=E,p.isValidating=Boolean(E),Wr(b.value,p,h),!l&&!u&&b.value&&d(),u=!1},{immediate:!0})}catch{}var O=A(A({},Rt(p)),{mutate:function(E,w){return d(E,A(A({},w),{forceRevalidate:!0}))}});return O}function Qr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var bt={},Te={},_e={};Object.defineProperty(_e,"__esModule",{value:!0});var de=new WeakMap,Ke=0;function Xr(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r){var n=void 0;e[r]===null||typeof e[r]!="object"&&typeof e[r]!="function"?typeof e[r]=="string"?n='"'+e[r]+'"':n=String(e[r]):de.has(e[r])?n=de.get(e[r]):(n=Ke,de.set(e[r],Ke++)),t+="@"+n}return t}_e.default=Xr;var Zr=L&&L.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Te,"__esModule",{value:!0});var en=Zr(_e);function tn(e){if(typeof e=="function")try{e=e()}catch{e=""}return Array.isArray(e)?e=(0,en.default)(e):e=String(e||""),e}var rn=function(){function e(t){t===void 0&&(t=0),this.items=new Map,this.ttl=t}return e.prototype.serializeKey=function(t){return tn(t)},e.prototype.get=function(t){var r=this.serializeKey(t);return this.items.get(r)},e.prototype.set=function(t,r,n){var i=this.serializeKey(t),o=n||this.ttl,s=Date.now(),u={data:r,createdAt:s,expiresAt:o?s+o:1/0};this.dispatchExpire(o,u,i),this.items.set(i,u)},e.prototype.dispatchExpire=function(t,r,n){var i=this;t&&setTimeout(function(){var o=Date.now(),s=o>=r.expiresAt;s&&i.delete(n)},t)},e.prototype.delete=function(t){this.items.delete(t)},e}();Te.default=rn;var nn=L&&L.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),on=L&&L.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bt,"__esModule",{value:!0});var sn=on(Te),an=function(e){nn(t,e);function t(r,n){r===void 0&&(r="swrv"),n===void 0&&(n=0);var i=e.call(this,n)||this;return i.STORAGE_KEY=r,i}return t.prototype.encode=function(r){return JSON.stringify(r)},t.prototype.decode=function(r){return JSON.parse(r)},t.prototype.get=function(r){var n=localStorage.getItem(this.STORAGE_KEY);if(n){var i=this.serializeKey(r),o=JSON.parse(n)[i];return(o==null?void 0:o.expiresAt)===null&&(o.expiresAt=1/0),o}},t.prototype.set=function(r,n,i){var o,s={},u=this.serializeKey(r),f=i||this.ttl,a=localStorage.getItem(this.STORAGE_KEY),l=Date.now(),h={data:n,createdAt:l,expiresAt:f?l+f:1/0};a?(s=this.decode(a),s[u]=h):s=(o={},o[u]=h,o),this.dispatchExpire(f,h,u),localStorage.setItem(this.STORAGE_KEY,this.encode(s))},t.prototype.dispatchExpire=function(r,n,i){var o=this;r&&setTimeout(function(){var s=Date.now(),u=s>=n.expiresAt;u&&o.delete(i)},r)},t.prototype.delete=function(r){var n=localStorage.getItem(this.STORAGE_KEY),i={};n&&(i=this.decode(n),delete i[r]),localStorage.setItem(this.STORAGE_KEY,this.encode(i))},t}(sn.default),cn=bt.default=an;const un={cache:new cn("swrv"),shouldRetryOnError:!1},ye="Access-Token",$e=localStorage.getItem(ye),C=Vr.create({baseURL:"https://lifetrackerbuddy.com",headers:{"content-type":"application/json","X-CSRFTOKEN":_t}});$e&&(C.defaults.headers.common.Authorization=`Token ${$e}`);const q=e=>(Ge.create({color:"positive",message:e.statusText}),e.data),V=e=>{Ge.create({color:"negative",message:e.response.data.detail||e.message})},ln=e=>C.get(e).then(t=>t.data).catch(V),yn={create(e,t){return C.post(e,t).then(q).catch(V)},read(e){return Yr(e,ln,un)},replace(e,t){return C.put(e,t).then(q).catch(V)},update(e,t){return C.patch(e,t).then(q).catch(V)},delete(e){return C.delete(e).then(q).catch(V)},setAuthToken(e){C.defaults.headers.common.Authorization=`Token ${e}`,localStorage.setItem(ye,e)},clearAuthToken(){C.defaults.headers.common.Authorization="",localStorage.removeItem(ye)}};export{hn as Q,mn as a,dn as b,yn as c,pn as u};

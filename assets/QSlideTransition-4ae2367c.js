import{ap as nt,g as V,r as q,x as Le,C as de,b as I,A as fe,w as S,o as qe,a as k,F as ot,l as b,aq as it,ar as D,t as lt,an as rt,h as R,as as at,at as st,au as ut,j as x,I as ke,av as Me,aw as ct,ax as me,y as T,c as We,E as dt,m as ft,ab as $e,ao as mt,G as Ae,ay as he,az as ht,aA as vt,ai as gt}from"./index-11efb6b3.js";import{r as ve,e as pt,u as wt,a as yt,d as bt}from"./uid-5aea0a88.js";function xt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),nt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Tt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Et({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:i,emit:s}=V(),l=q(null);let r=null;function c(d){return l.value===null?!1:d===void 0||d.touches===void 0||d.touches.length<=1}const a={};o===void 0&&(Object.assign(a,{hide(d){i.hide(d)},toggle(d){i.toggle(d),d.qAnchorHandled=!0},toggleKey(d){Le(d,13)===!0&&a.toggle(d)},contextClick(d){i.hide(d),de(d),I(()=>{i.show(d),d.qAnchorHandled=!0})},prevent:de,mobileTouch(d){if(a.mobileCleanup(d),c(d)!==!0)return;i.hide(d),l.value.classList.add("non-selectable");const p=d.target;fe(a,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,i.show(d),d.qAnchorHandled=!0},300)},mobileCleanup(d){l.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&d!==void 0&&xt()}}),o=function(d=n.contextMenu){if(n.noParentEvent===!0||l.value===null)return;let p;d===!0?i.$q.platform.is.mobile===!0?p=[[l.value,"touchstart","mobileTouch","passive"]]:p=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:p=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],fe(a,"anchor",p)});function u(){ot(a,"anchor")}function g(d){for(l.value=d;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;o()}function v(){if(n.target===!1||n.target===""||i.$el.parentNode===null)l.value=null;else if(n.target===!0)g(i.$el.parentNode);else{let d=n.target;if(typeof n.target=="string")try{d=document.querySelector(n.target)}catch{d=void 0}d!=null?(l.value=d.$el||d,o()):(l.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return S(()=>n.contextMenu,d=>{l.value!==null&&(u(),o(d))}),S(()=>n.target,()=>{l.value!==null&&u(),v()}),S(()=>n.noParentEvent,d=>{l.value!==null&&(d===!0?u():o())}),qe(()=>{v(),t!==!0&&n.modelValue===!0&&l.value===null&&s("update:modelValue",!1)}),k(()=>{r!==null&&clearTimeout(r),u()}),{anchorEl:l,canShow:c,anchorEvents:a}}function St(e,t){const o=q(null);let n;function i(r,c){const a=`${c!==void 0?"add":"remove"}EventListener`,u=c!==void 0?c:n;r!==window&&r[a]("scroll",u,b.passive),window[a]("scroll",u,b.passive),n=c}function s(){o.value!==null&&(i(o.value),o.value=null)}const l=S(()=>e.noParentEvent,()=>{o.value!==null&&(s(),t())});return k(l),{localScrollTarget:o,unconfigureScrollTarget:s,changeScrollEvent:i}}const Ct={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Pt=["beforeShow","show","beforeHide","hide"];function Ht({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:i,processOnMount:s}){const l=V(),{props:r,emit:c,proxy:a}=l;let u;function g(m){e.value===!0?p(m):v(m)}function v(m){if(r.disable===!0||m!==void 0&&m.qAnchorHandled===!0||t!==void 0&&t(m)!==!0)return;const E=r["onUpdate:modelValue"]!==void 0;E===!0&&(c("update:modelValue",!0),u=m,I(()=>{u===m&&(u=void 0)})),(r.modelValue===null||E===!1)&&d(m)}function d(m){e.value!==!0&&(e.value=!0,c("beforeShow",m),n!==void 0?n(m):c("show",m))}function p(m){if(r.disable===!0)return;const E=r["onUpdate:modelValue"]!==void 0;E===!0&&(c("update:modelValue",!1),u=m,I(()=>{u===m&&(u=void 0)})),(r.modelValue===null||E===!1)&&h(m)}function h(m){e.value!==!1&&(e.value=!1,c("beforeHide",m),i!==void 0?i(m):c("hide",m))}function w(m){r.disable===!0&&m===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):m===!0!==e.value&&(m===!0?d:h)(u)}S(()=>r.modelValue,w),o!==void 0&&it(l)===!0&&S(()=>a.$route.fullPath,()=>{o.value===!0&&e.value===!0&&p()}),s===!0&&qe(()=>{w(r.modelValue)});const y={show:v,hide:p,toggle:g};return Object.assign(a,y),y}const W=[];function nn(e){return W.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Oe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return D(e)}else if(e.__qPortal===!0){const o=D(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=D(e)}while(e!=null)}function on(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=Oe(e,t);continue}e.hide(t)}e=D(e)}}function Lt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function qt(e,t,o,n){const i=q(!1),s=q(!1);let l=null;const r={},c=n==="dialog"&&Lt(e);function a(g){if(g===!0){ve(r),s.value=!0;return}s.value=!1,i.value===!1&&(c===!1&&l===null&&(l=st(!1,n)),i.value=!0,W.push(e.proxy),pt(r))}function u(g){if(s.value=!1,g!==!0)return;ve(r),i.value=!1;const v=W.indexOf(e.proxy);v!==-1&&W.splice(v,1),l!==null&&(ut(l),l=null)}return lt(()=>{u(!0)}),e.proxy.__qPortal=!0,rt(e.proxy,"contentEl",()=>t.value),{showPortal:a,hidePortal:u,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>c===!0?o():i.value===!0?[R(at,{to:l},o())]:void 0}}const kt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Mt(e,t=()=>{},o=()=>{}){return{transitionProps:x(()=>{const n=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:x(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Wt(){let e;const t=V();function o(){e=void 0}return ke(o),k(o),{removeTick:o,registerTick(n){e=n,I(()=>{e===n&&(Me(t)===!1&&e(),e=void 0)})}}}function $t(){let e=null;const t=V();function o(){e!==null&&(clearTimeout(e),e=null)}return ke(o),k(o),{removeTimeout:o,registerTimeout(n,i){o(),Me(t)===!1&&(e=setTimeout(n,i))}}}const At=[null,document,document.body,document.scrollingElement,document.documentElement];function Ot(e,t){let o=ct(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return At.includes(o)?window:o}function Fe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ve(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function ze(e,t,o=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=Fe(e);if(o<=0){i!==t&&Z(e,t);return}requestAnimationFrame(s=>{const l=s-n,r=i+(t-i)/Math.max(l,o)*l;Z(e,r),r!==t&&ze(e,t,o-l,s)})}function Be(e,t,o=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=Ve(e);if(o<=0){i!==t&&ee(e,t);return}requestAnimationFrame(s=>{const l=s-n,r=i+(t-i)/Math.max(l,o)*l;ee(e,r),r!==t&&Be(e,t,o-l,s)})}function Z(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function ee(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function ln(e,t,o){if(o){ze(e,t,o);return}Z(e,t)}function rn(e,t,o){if(o){Be(e,t,o);return}ee(e,t)}let z;function Ft(){if(z!==void 0)return z;const e=document.createElement("p"),t=document.createElement("div");me(e,{width:"100%",height:"200px"}),me(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),z=o-n,z}function Vt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const P=[];let $;function zt(e){$=e.keyCode===27}function Bt(){$===!0&&($=!1)}function Dt(e){$===!0&&($=!1,Le(e,27)===!0&&P[P.length-1](e))}function De(e){window[e]("keydown",zt),window[e]("blur",Bt),window[e]("keyup",Dt),$=!1}function It(e){T.is.desktop===!0&&(P.push(e),P.length===1&&De("addEventListener"))}function ge(e){const t=P.indexOf(e);t>-1&&(P.splice(t,1),P.length===0&&De("removeEventListener"))}const H=[];function Ie(e){H[H.length-1](e)}function Rt(e){T.is.desktop===!0&&(H.push(e),H.length===1&&document.body.addEventListener("focusin",Ie))}function Yt(e){const t=H.indexOf(e);t>-1&&(H.splice(t,1),H.length===0&&document.body.removeEventListener("focusin",Ie))}const{notPassiveCapture:Y}=b,L=[];function N(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=W.length-1;for(;o>=0;){const n=W[o].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=L.length-1;n>=0;n--){const i=L[n];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Nt(e){L.push(e),L.length===1&&(document.addEventListener("mousedown",N,Y),document.addEventListener("touchstart",N,Y))}function pe(e){const t=L.findIndex(o=>o===e);t>-1&&(L.splice(t,1),L.length===0&&(document.removeEventListener("mousedown",N,Y),document.removeEventListener("touchstart",N,Y)))}let we,ye;function be(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Qt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const te={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{te[`${e}#ltr`]=e,te[`${e}#rtl`]=e});function xe(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:te[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function jt(e,t){let{top:o,left:n,right:i,bottom:s,width:l,height:r}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],s+=t[1],i+=t[0],l+=t[0],r+=t[1]),{top:o,bottom:s,height:r,left:n,right:i,width:l,middle:n+(i-n)/2,center:o+(s-o)/2}}function Kt(e,t,o){let{top:n,left:i}=e.getBoundingClientRect();return n+=t.top,i+=t.left,o!==void 0&&(n+=o[1],i+=o[0]),{top:n,bottom:n+1,height:1,left:i,right:i+1,width:1,middle:i,center:n}}function Xt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Te(e,t,o){return{top:e[o.anchorOrigin.vertical]-t[o.selfOrigin.vertical],left:e[o.anchorOrigin.horizontal]-t[o.selfOrigin.horizontal]}}function _t(e){if(T.is.ios===!0&&window.visualViewport!==void 0){const r=document.body.style,{offsetLeft:c,offsetTop:a}=window.visualViewport;c!==we&&(r.setProperty("--q-pe-left",c+"px"),we=c),a!==ye&&(r.setProperty("--q-pe-top",a+"px"),ye=a)}const{scrollLeft:t,scrollTop:o}=e.el,n=e.absoluteOffset===void 0?jt(e.anchorEl,e.cover===!0?[0,0]:e.offset):Kt(e.anchorEl,e.absoluteOffset,e.offset);let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=n.width+"px",e.cover===!0&&(i.minHeight=n.height+"px")),Object.assign(e.el.style,i);const s=Xt(e.el);let l=Te(n,s,e);if(e.absoluteOffset===void 0||e.offset===void 0)_(l,n,s,e.anchorOrigin,e.selfOrigin);else{const{top:r,left:c}=l;_(l,n,s,e.anchorOrigin,e.selfOrigin);let a=!1;if(l.top!==r){a=!0;const u=2*e.offset[1];n.center=n.top-=u,n.bottom-=u+2}if(l.left!==c){a=!0;const u=2*e.offset[0];n.middle=n.left-=u,n.right-=u+2}a===!0&&(l=Te(n,s,e),_(l,n,s,e.anchorOrigin,e.selfOrigin))}i={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(i.maxHeight=l.maxHeight+"px",n.height>l.maxHeight&&(i.minHeight=i.maxHeight)),l.maxWidth!==void 0&&(i.maxWidth=l.maxWidth+"px",n.width>l.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==t&&(e.el.scrollLeft=t)}function _(e,t,o,n,i){const s=o.bottom,l=o.right,r=Ft(),c=window.innerHeight-r,a=document.body.clientWidth;if(e.top<0||e.top+s>c)if(i.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-s):0,e.maxHeight=Math.min(s,c);else if(t[n.vertical]>c/2){const u=Math.min(c,n.vertical==="center"?t.center:n.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,u),e.top=Math.max(0,u-s)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,c-e.top);if(e.left<0||e.left+l>a)if(e.maxWidth=Math.min(l,a),i.horizontal==="middle")e.left=t[n.horizontal]>a/2?Math.max(0,a-l):0;else if(t[n.horizontal]>a/2){const u=Math.min(a,n.horizontal==="middle"?t.middle:n.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(l,u),e.left=Math.max(0,u-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(l,a-e.left)}const an=We({name:"QMenu",inheritAttrs:!1,props:{...Tt,...Ct,...wt,...kt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:be},self:{type:String,validator:be},offset:{type:Array,validator:Qt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Pt,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let i=null,s,l,r;const c=V(),{proxy:a}=c,{$q:u}=a,g=q(null),v=q(!1),d=x(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),p=yt(e,u),{registerTick:h,removeTick:w}=Wt(),{registerTimeout:y}=$t(),{transitionProps:m,transitionStyle:E}=Mt(e),{localScrollTarget:ne,changeScrollEvent:Ye,unconfigureScrollTarget:Ne}=St(e,ue),{anchorEl:M,canShow:Qe}=Et({showing:v}),{hide:oe}=Ht({showing:v,canShow:Qe,handleShow:Ge,handleHide:Ue,hideOnRouteChange:d,processOnMount:!0}),{showPortal:ie,hidePortal:le,renderPortal:je}=qt(c,g,Ze,"menu"),Q={anchorEl:M,innerRef:g,onClickOutside(f){if(e.persistent!==!0&&v.value===!0)return oe(f),(f.type==="touchstart"||f.target.classList.contains("q-dialog__backdrop"))&&Ae(f),!0}},re=x(()=>xe(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),Ke=x(()=>e.cover===!0?re.value:xe(e.self||"top start",u.lang.rtl)),Xe=x(()=>(e.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),_e=x(()=>e.autoClose===!0?{onClick:Je}:{}),ae=x(()=>v.value===!0&&e.persistent!==!0);S(ae,f=>{f===!0?(It(K),Nt(Q)):(ge(K),pe(Q))});function j(){bt(()=>{let f=g.value;f&&f.contains(document.activeElement)!==!0&&(f=f.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function Ge(f){if(i=e.noRefocus===!1?document.activeElement:null,Rt(ce),ie(),ue(),s=void 0,f!==void 0&&(e.touchPosition||e.contextMenu)){const X=dt(f);if(X.left!==void 0){const{top:et,left:tt}=M.value.getBoundingClientRect();s={left:X.left-tt,top:X.top-et}}}l===void 0&&(l=S(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,A)),e.noFocus!==!0&&document.activeElement.blur(),h(()=>{A(),e.noFocus!==!0&&j()}),y(()=>{u.platform.is.ios===!0&&(r=e.autoClose,g.value.click()),A(),ie(!0),o("show",f)},e.transitionDuration)}function Ue(f){w(),le(),se(!0),i!==null&&(f===void 0||f.qClickOutside!==!0)&&(((f&&f.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),y(()=>{le(!0),o("hide",f)},e.transitionDuration)}function se(f){s=void 0,l!==void 0&&(l(),l=void 0),(f===!0||v.value===!0)&&(Yt(ce),Ne(),pe(Q),ge(K)),f!==!0&&(i=null)}function ue(){(M.value!==null||e.scrollTarget!==void 0)&&(ne.value=Ot(M.value,e.scrollTarget),Ye(ne.value,A))}function Je(f){r!==!0?(Oe(a,f),o("click",f)):r=!1}function ce(f){ae.value===!0&&e.noFocus!==!0&&mt(g.value,f.target)!==!0&&j()}function K(f){o("escapeKey"),oe(f)}function A(){const f=g.value;f===null||M.value===null||_t({el:f,offset:e.offset,anchorEl:M.value,anchorOrigin:re.value,selfOrigin:Ke.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ze(){return R($e,m.value,()=>v.value===!0?R("div",{role:"menu",...n,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Xe.value,n.class],style:[n.style,E.value],..._e.value},ft(t.default)):null)}return k(se),Object.assign(a,{focus:j,updatePosition:A}),je}});function sn(e,t,o){let n;function i(){n!==void 0&&(he.remove(n),n=void 0)}return k(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){n={condition:()=>o.value===!0,handler:t},he.add(n)}}}let O=0,G,U,F,J=!1,Ee,Se,Ce,C=null;function Gt(e){Ut(e)&&Ae(e)}function Ut(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ht(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=o||n?e.deltaY:e.deltaX;for(let s=0;s<t.length;s++){const l=t[s];if(Vt(l,n))return n?i<0&&l.scrollTop===0?!0:i>0&&l.scrollTop+l.clientHeight===l.scrollHeight:i<0&&l.scrollLeft===0?!0:i>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function Pe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function B(e){J!==!0&&(J=!0,requestAnimationFrame(()=>{J=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(F===void 0||t!==window.innerHeight)&&(F=o-t,document.scrollingElement.scrollTop=n),n>F&&(document.scrollingElement.scrollTop-=Math.ceil((n-F)/8))}))}function He(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:i}=window.getComputedStyle(t);G=Ve(window),U=Fe(window),Ee=t.style.left,Se=t.style.top,Ce=window.location.href,t.style.left=`-${G}px`,t.style.top=`-${U}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,T.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",B,b.passiveCapture),window.visualViewport.addEventListener("scroll",B,b.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Pe,b.passiveCapture))}T.is.desktop===!0&&T.is.mac===!0&&window[`${e}EventListener`]("wheel",Gt,b.notPassive),e==="remove"&&(T.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",B,b.passiveCapture),window.visualViewport.removeEventListener("scroll",B,b.passiveCapture)):window.removeEventListener("scroll",Pe,b.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Ee,t.style.top=Se,window.location.href===Ce&&window.scrollTo(G,U),F=void 0)}function Jt(e){let t="add";if(e===!0){if(O++,C!==null){clearTimeout(C),C=null;return}if(O>1)return}else{if(O===0||(O--,O>0))return;if(t="remove",T.is.ios===!0&&T.is.nativeMobile===!0){C!==null&&clearTimeout(C),C=setTimeout(()=>{He(t),C=null},100);return}}He(t)}function un(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Jt(t))}}}function Zt(e){const{request:t,get:o}=vt(),n=q(JSON.parse(localStorage.getItem(e)));function i(){o(e).then(a=>{n.value=a,localStorage.setItem(e,JSON.stringify(a))})}function s(a){return n.value.find(u=>u.id===a)}function l(a){return t({method:"post",url:e,data:a})}function r(a,u){return t({method:"patch",url:e+a,data:u})}function c(a){return t({method:"delete",url:e+a})}return i(),{data:n,refetch:i,getItem:s,createItem:l,updateItem:r,deleteItem:c}}const Re=(e,t=null)=>e.filter(o=>o.parent===t).map(o=>({...o,children:Re(e,o.id)})),cn=gt("GoalStore",()=>{const{data:e,refetch:t,getItem:o,createItem:n,updateItem:i,deleteItem:s}=Zt("/goals/"),l=x(()=>e.value?Re(e.value):null);function r(c){const a=[c],u=g=>e.value.filter(v=>v.parent===g).forEach(v=>{a.push(v.id),u(v.id)});return u(c),a}return{data:e,refetch:t,getItem:o,createItem:n,updateItem:i,deleteItem:s,tree:l,getBranch:r}}),dn=We({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:o}){let n=!1,i,s,l=null,r=null,c,a;function u(){i&&i(),i=null,n=!1,l!==null&&(clearTimeout(l),l=null),r!==null&&(clearTimeout(r),r=null),s!==void 0&&s.removeEventListener("transitionend",c),c=null}function g(h,w,y){w!==void 0&&(h.style.height=`${w}px`),h.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,n=!0,i=y}function v(h,w){h.style.overflowY=null,h.style.height=null,h.style.transition=null,u(),w!==a&&o(w)}function d(h,w){let y=0;s=h,n===!0?(u(),y=h.offsetHeight===h.scrollHeight?0:void 0):(a="hide",h.style.overflowY="hidden"),g(h,y,w),l=setTimeout(()=>{l=null,h.style.height=`${h.scrollHeight}px`,c=m=>{r=null,(Object(m)!==m||m.target===h)&&v(h,"show")},h.addEventListener("transitionend",c),r=setTimeout(c,e.duration*1.1)},100)}function p(h,w){let y;s=h,n===!0?u():(a="show",h.style.overflowY="hidden",y=h.scrollHeight),g(h,y,w),l=setTimeout(()=>{l=null,h.style.height=0,c=m=>{r=null,(Object(m)!==m||m.target===h)&&v(h,"hide")},h.addEventListener("transitionend",c),r=setTimeout(c,e.duration*1.1)},100)}return k(()=>{n===!0&&u()}),()=>R($e,{css:!1,appear:e.appear,onEnter:d,onLeave:p},t.default)}});export{Tt as A,Et as B,dn as Q,Fe as a,Ve as b,Ft as c,nn as d,on as e,xt as f,Ot as g,ln as h,Pt as i,$t as j,Ht as k,sn as l,un as m,cn as n,an as o,Zt as p,kt as q,Wt as r,rn as s,Mt as t,Ct as u,qt as v,Yt as w,ge as x,Rt as y,It as z};

import{r as S,L as tt,c as X,g as Q,j as b,h as E,G,B as nt,a as Y,b as Be,c6 as ot,c7 as fe,K as lt,c8 as He,ak as it,c9 as at,ca as ut,p as xe,c5 as _e,w as H,T as he,cb as Me,u as be,s as ye,o as st,y as rt,l as ve,x as ct,z as dt,Q as $e,R as We,S as N,a3 as ft,$ as mt,U as ne,Z as ht,a1 as vt}from"./index-c1262791.js";import{a as gt}from"./QTree-eb90dd56.js";import{u as De,a as Fe}from"./use-dark-0fdf7892.js";import{u as Le,e as pt,f as xt,c as bt,h as yt,g as wt}from"./use-timeout-98a38dec.js";import{u as Ae,a as Ve,b as ze}from"./use-model-toggle-1b8c67f0.js";import{r as we,b as kt,c as Oe,u as St,d as qt,e as Et,f as Tt,Q as Ct}from"./QForm-de112843.js";import{a as Pt}from"./TaskStore-f52158f3.js";function en(e,t,o){const n=S(e?{...t.getItem(e)}:o),l=S(e),u=S(!1),i=e?{...n.value}:null,s=tt();function c(a,m){return Object.fromEntries(Object.entries(m).filter(([g,q])=>a[g]!==q))}function r(a,m){return Object.keys(c(a,m)).length}function d(){s.back()}function v(){u.value=!0,t.deleteItem(l.value).then(()=>{t.refetch(),d()})}function p(){u.value=!0,e?t.updateItem(l.value,c(i,{...n.value})).then(()=>{t.refetch(),d()}):t.createItem(n.value).then(()=>{t.refetch(),d()})}return{item:n,original:i,path:l,persist:u,changed:r,remove:v,save:p,back:d}}const Bt=X({name:"QBanner",props:{...De,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=Q(),n=Fe(e,o),l=b(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(n.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),u=b(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const i=[E("div",{class:"q-banner__avatar col-auto row items-center self-start"},G(t.avatar)),E("div",{class:"q-banner__content col text-body2"},G(t.default))],s=G(t.action);return s!==void 0&&i.push(E("div",{class:u.value},s)),E("div",{class:l.value+(e.inlineActions===!1&&s!==void 0?" q-banner--top-padding":""),role:"alert"},i)}}});function Ie(){let e;const t=Q();function o(){e=void 0}return nt(o),Y(o),{removeTick:o,registerTick(n){e=n,Be(()=>{e===n&&(ot(t)===!1&&e(),e=void 0)})}}}const Qe={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Re(e,t=()=>{},o=()=>{}){return{transitionProps:b(()=>{const n=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:b(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const U=[];function Ht(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return fe(e)}else if(e.__qPortal===!0){const o=fe(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=fe(e)}while(e!=null)}function _t(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function je(e,t,o,n){const l=S(!1),u=S(!1);let i=null;const s={},c=n==="dialog"&&_t(e);function r(v){if(v===!0){we(s),u.value=!0;return}u.value=!1,l.value===!1&&(c===!1&&i===null&&(i=at(!1,n)),l.value=!0,U.push(e.proxy),kt(s))}function d(v){if(u.value=!1,v!==!0)return;we(s),l.value=!1;const p=U.indexOf(e.proxy);p!==-1&&U.splice(p,1),i!==null&&(ut(i),i=null)}return lt(()=>{d(!0)}),e.proxy.__qPortal=!0,He(e.proxy,"contentEl",()=>t.value),{showPortal:r,hidePortal:d,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>c===!0?o():l.value===!0?[E(it,{to:i},o())]:void 0}}const W=[];let I;function Mt(e){I=e.keyCode===27}function $t(){I===!0&&(I=!1)}function Wt(e){I===!0&&(I=!1,_e(e,27)===!0&&W[W.length-1](e))}function Ke(e){window[e]("keydown",Mt),window[e]("blur",$t),window[e]("keyup",Wt),I=!1}function Ne(e){xe.is.desktop===!0&&(W.push(e),W.length===1&&Ke("addEventListener"))}function le(e){const t=W.indexOf(e);t>-1&&(W.splice(t,1),W.length===0&&Ke("removeEventListener"))}const D=[];function Ge(e){D[D.length-1](e)}function Ue(e){xe.is.desktop===!0&&(D.push(e),D.length===1&&document.body.addEventListener("focusin",Ge))}function ge(e){const t=D.indexOf(e);t>-1&&(D.splice(t,1),D.length===0&&document.body.removeEventListener("focusin",Ge))}let oe=0;const Dt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ke={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Ft=X({name:"QDialog",inheritAttrs:!1,props:{...Ae,...Qe,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Ve,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const l=Q(),u=S(null),i=S(!1),s=S(!1);let c=null,r=null,d,v;const p=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:a}=xt(),{registerTimeout:m}=Le(),{registerTick:g,removeTick:q}=Ie(),{transitionProps:L,transitionStyle:A}=Re(e,()=>ke[e.position][0],()=>ke[e.position][1]),{showPortal:w,hidePortal:T,portalIsAccessible:y,renderPortal:_}=je(l,u,ce,"dialog"),{hide:k}=ze({showing:i,hideOnRouteChange:p,handleShow:J,handleHide:se,processOnMount:!0}),{addToHistory:C,removeFromHistory:P}=pt(i,k,p),Z=b(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Dt[e.position]}`+(s.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),M=b(()=>i.value===!0&&e.seamless!==!0),ue=b(()=>e.autoClose===!0?{onClick:re}:{}),R=b(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${M.value===!0?"modal":"seamless"}`,n.class]);H(()=>e.maximized,h=>{i.value===!0&&K(h)}),H(M,h=>{a(h),h===!0?(Ue(O),Ne(V)):(ge(O),le(V))});function J(h){C(),r=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,K(e.maximized),w(),s.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),g($)):q(),m(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:x,bottom:B}=document.activeElement.getBoundingClientRect(),{innerHeight:te}=window,f=window.visualViewport!==void 0?window.visualViewport.height:te;x>0&&B>f/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-f,B>=te?1/0:Math.ceil(document.scrollingElement.scrollTop+B-f/2))),document.activeElement.scrollIntoView()}v=!0,u.value.click(),v=!1}w(!0),s.value=!1,o("show",h)},e.transitionDuration)}function se(h){q(),P(),z(!0),s.value=!0,T(),r!==null&&(((h&&h.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),m(()=>{T(!0),s.value=!1,o("hide",h)},e.transitionDuration)}function $(h){Oe(()=>{let x=u.value;x===null||x.contains(document.activeElement)===!0||(x=(h!==""?x.querySelector(h):null)||x.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||x.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||x.querySelector("[autofocus], [data-autofocus]")||x,x.focus({preventScroll:!0}))})}function j(h){h&&typeof h.focus=="function"?h.focus({preventScroll:!0}):$(),o("shake");const x=u.value;x!==null&&(x.classList.remove("q-animate--scale"),x.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,u.value!==null&&(x.classList.remove("q-animate--scale"),$())},170))}function V(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&j():(o("escapeKey"),k()))}function z(h){c!==null&&(clearTimeout(c),c=null),(h===!0||i.value===!0)&&(K(!1),e.seamless!==!0&&(a(!1),ge(O),le(V))),h!==!0&&(r=null)}function K(h){h===!0?d!==!0&&(oe<1&&document.body.classList.add("q-body--dialog"),oe++,d=!0):d===!0&&(oe<2&&document.body.classList.remove("q-body--dialog"),oe--,d=!1)}function re(h){v!==!0&&(k(h),o("click",h))}function ee(h){e.persistent!==!0&&e.noBackdropDismiss!==!0?k(h):e.noShake!==!0&&j()}function O(h){e.allowFocusOutside!==!0&&y.value===!0&&Me(u.value,h.target)!==!0&&$('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:$,shake:j,__updateRefocusTarget(h){r=h||null}}),Y(z);function ce(){return E("div",{role:"dialog","aria-modal":M.value===!0?"true":"false",...n,class:R.value},[E(he,{name:"q-transition--fade",appear:!0},()=>M.value===!0?E("div",{class:"q-dialog__backdrop fixed-full",style:A.value,"aria-hidden":"true",tabindex:-1,onClick:ee}):null),E(he,L.value,()=>i.value===!0?E("div",{ref:u,class:Z.value,style:A.value,tabindex:-1,...ue.value},G(t.default)):null)])}return _}}),Xe={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ye({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:u}=Q(),i=S(null);let s=null;function c(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};o===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){_e(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),be(a),Be(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:be,mobileTouch(a){if(r.mobileCleanup(a),c(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const m=a.target;ye(r,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&a!==void 0&&bt()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let m;a===!0?l.$q.platform.is.mobile===!0?m=[[i.value,"touchstart","mobileTouch","passive"]]:m=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:m=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],ye(r,"anchor",m)});function d(){rt(r,"anchor")}function v(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function p(){if(n.target===!1||n.target===""||l.$el.parentNode===null)i.value=null;else if(n.target===!0)v(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return H(()=>n.contextMenu,a=>{i.value!==null&&(d(),o(a))}),H(()=>n.target,()=>{i.value!==null&&d(),p()}),H(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),st(()=>{p(),t!==!0&&n.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),Y(()=>{s!==null&&clearTimeout(s),d()}),{anchorEl:i,canShow:c,anchorEvents:r}}function Lt(e,t){const o=S(null);let n;function l(s,c){const r=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:n;s!==window&&s[r]("scroll",d,ve.passive),window[r]("scroll",d,ve.passive),n=c}function u(){o.value!==null&&(l(o.value),o.value=null)}const i=H(()=>e.noParentEvent,()=>{o.value!==null&&(u(),t())});return Y(i),{localScrollTarget:o,unconfigureScrollTarget:u,changeScrollEvent:l}}const{notPassiveCapture:ie}=ve,F=[];function ae(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=U.length-1;for(;o>=0;){const n=U[o].$;if(n.type.name==="QTooltip"){o--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=F.length-1;n>=0;n--){const l=F[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function At(e){F.push(e),F.length===1&&(document.addEventListener("mousedown",ae,ie),document.addEventListener("touchstart",ae,ie))}function Se(e){const t=F.findIndex(o=>o===e);t>-1&&(F.splice(t,1),F.length===0&&(document.removeEventListener("mousedown",ae,ie),document.removeEventListener("touchstart",ae,ie)))}let qe,Ee;function Te(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Vt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const pe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{pe[`${e}#ltr`]=e,pe[`${e}#rtl`]=e});function Ce(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:pe[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function zt(e,t){let{top:o,left:n,right:l,bottom:u,width:i,height:s}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],u+=t[1],l+=t[0],i+=t[0],s+=t[1]),{top:o,bottom:u,height:s,left:n,right:l,width:i,middle:n+(l-n)/2,center:o+(u-o)/2}}function Ot(e,t,o){let{top:n,left:l}=e.getBoundingClientRect();return n+=t.top,l+=t.left,o!==void 0&&(n+=o[1],l+=o[0]),{top:n,bottom:n+1,height:1,left:l,right:l+1,width:1,middle:l,center:n}}function It(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Pe(e,t,o,n){return{top:e[o.vertical]-t[n.vertical],left:e[o.horizontal]-t[n.horizontal]}}function Ze(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ze(e,t+1)},10);return}const{targetEl:o,offset:n,anchorEl:l,anchorOrigin:u,selfOrigin:i,absoluteOffset:s,fit:c,cover:r,maxHeight:d,maxWidth:v}=e;if(xe.is.ios===!0&&window.visualViewport!==void 0){const _=document.body.style,{offsetLeft:k,offsetTop:C}=window.visualViewport;k!==qe&&(_.setProperty("--q-pe-left",k+"px"),qe=k),C!==Ee&&(_.setProperty("--q-pe-top",C+"px"),Ee=C)}const{scrollLeft:p,scrollTop:a}=o,m=s===void 0?zt(l,r===!0?[0,0]:n):Ot(l,s,n);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:v||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:g,offsetHeight:q}=o,{elWidth:L,elHeight:A}=c===!0||r===!0?{elWidth:Math.max(m.width,g),elHeight:r===!0?Math.max(m.height,q):q}:{elWidth:g,elHeight:q};let w={maxWidth:v,maxHeight:d};(c===!0||r===!0)&&(w.minWidth=m.width+"px",r===!0&&(w.minHeight=m.height+"px")),Object.assign(o.style,w);const T=It(L,A);let y=Pe(m,T,u,i);if(s===void 0||n===void 0)me(y,m,T,u,i);else{const{top:_,left:k}=y;me(y,m,T,u,i);let C=!1;if(y.top!==_){C=!0;const P=2*n[1];m.center=m.top-=P,m.bottom-=P+2}if(y.left!==k){C=!0;const P=2*n[0];m.middle=m.left-=P,m.right-=P+2}C===!0&&(y=Pe(m,T,u,i),me(y,m,T,u,i))}w={top:y.top+"px",left:y.left+"px"},y.maxHeight!==void 0&&(w.maxHeight=y.maxHeight+"px",m.height>y.maxHeight&&(w.minHeight=w.maxHeight)),y.maxWidth!==void 0&&(w.maxWidth=y.maxWidth+"px",m.width>y.maxWidth&&(w.minWidth=w.maxWidth)),Object.assign(o.style,w),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==p&&(o.scrollLeft=p)}function me(e,t,o,n,l){const u=o.bottom,i=o.right,s=yt(),c=window.innerHeight-s,r=document.body.clientWidth;if(e.top<0||e.top+u>c)if(l.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(t[n.vertical]>c/2){const d=Math.min(c,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),l.horizontal==="middle")e.left=t[n.horizontal]>r/2?Math.max(0,r-i):0;else if(t[n.horizontal]>r/2){const d=Math.min(r,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,r-e.left)}const Qt=X({name:"QMenu",inheritAttrs:!1,props:{...Xe,...Ae,...De,...Qe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Te},self:{type:String,validator:Te},offset:{type:Array,validator:Vt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ve,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let l=null,u,i,s;const c=Q(),{proxy:r}=c,{$q:d}=r,v=S(null),p=S(!1),a=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),m=Fe(e,d),{registerTick:g,removeTick:q}=Ie(),{registerTimeout:L}=Le(),{transitionProps:A,transitionStyle:w}=Re(e),{localScrollTarget:T,changeScrollEvent:y,unconfigureScrollTarget:_}=Lt(e,O),{anchorEl:k,canShow:C}=Ye({showing:p}),{hide:P}=ze({showing:p,canShow:C,handleShow:K,handleHide:re,hideOnRouteChange:a,processOnMount:!0}),{showPortal:Z,hidePortal:M,renderPortal:ue}=je(c,v,te,"menu"),R={anchorEl:k,innerRef:v,onClickOutside(f){if(e.persistent!==!0&&p.value===!0)return P(f),(f.type==="touchstart"||f.target.classList.contains("q-dialog__backdrop"))&&dt(f),!0}},J=b(()=>Ce(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),se=b(()=>e.cover===!0?J.value:Ce(e.self||"top start",d.lang.rtl)),$=b(()=>(e.square===!0?" q-menu--square":"")+(m.value===!0?" q-menu--dark q-dark":"")),j=b(()=>e.autoClose===!0?{onClick:ce}:{}),V=b(()=>p.value===!0&&e.persistent!==!0);H(V,f=>{f===!0?(Ne(x),At(R)):(le(x),Se(R))});function z(){Oe(()=>{let f=v.value;f&&f.contains(document.activeElement)!==!0&&(f=f.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function K(f){if(l=e.noRefocus===!1?document.activeElement:null,Ue(h),Z(),O(),u=void 0,f!==void 0&&(e.touchPosition||e.contextMenu)){const de=ct(f);if(de.left!==void 0){const{top:Je,left:et}=k.value.getBoundingClientRect();u={left:de.left-et,top:de.top-Je}}}i===void 0&&(i=H(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,B)),e.noFocus!==!0&&document.activeElement.blur(),g(()=>{B(),e.noFocus!==!0&&z()}),L(()=>{d.platform.is.ios===!0&&(s=e.autoClose,v.value.click()),B(),Z(!0),o("show",f)},e.transitionDuration)}function re(f){q(),M(),ee(!0),l!==null&&(f===void 0||f.qClickOutside!==!0)&&(((f&&f.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),L(()=>{M(!0),o("hide",f)},e.transitionDuration)}function ee(f){u=void 0,i!==void 0&&(i(),i=void 0),(f===!0||p.value===!0)&&(ge(h),_(),Se(R),le(x)),f!==!0&&(l=null)}function O(){(k.value!==null||e.scrollTarget!==void 0)&&(T.value=wt(k.value,e.scrollTarget),y(T.value,B))}function ce(f){s!==!0?(Ht(r,f),o("click",f)):s=!1}function h(f){V.value===!0&&e.noFocus!==!0&&Me(v.value,f.target)!==!0&&z()}function x(f){o("escapeKey"),P(f)}function B(){Ze({targetEl:v.value,offset:e.offset,anchorEl:k.value,anchorOrigin:J.value,selfOrigin:se.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function te(){return E(he,A.value,()=>p.value===!0?E("div",{role:"menu",...n,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+$.value,n.class],style:[n.style,w.value],...j.value},G(t.default)):null)}return Y(ee),Object.assign(r,{focus:z,updatePosition:B}),ue}}),Rt=X({name:"QPopupProxy",props:{...Xe,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:t,emit:o,attrs:n}){const{proxy:l}=Q(),{$q:u}=l,i=S(!1),s=S(null),c=b(()=>parseInt(e.breakpoint,10)),{canShow:r}=Ye({showing:i});function d(){return u.screen.width<c.value||u.screen.height<c.value?"dialog":"menu"}const v=S(d()),p=b(()=>v.value==="menu"?{maxHeight:"99vh"}:{});H(()=>d(),g=>{i.value!==!0&&(v.value=g)});function a(g){i.value=!0,o("show",g)}function m(g){i.value=!1,v.value=d(),o("hide",g)}return Object.assign(l,{show(g){r(g)===!0&&s.value.show(g)},hide(g){s.value.hide(g)},toggle(g){s.value.toggle(g)}}),He(l,"currentComponent",()=>({type:v.value,ref:s.value})),()=>{const g={ref:s,...p.value,...n,onShow:a,onHide:m};let q;return v.value==="dialog"?q=Ft:(q=Qt,Object.assign(g,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),E(q,g,t.default)}}}),jt=X({name:"QField",inheritAttrs:!1,props:St,emits:qt,setup(){return Et(Tt())}}),Kt={class:"self-center full-width no-outline ellipsis",tabindex:"0"},tn={__name:"GoalSelect",props:{modelValue:{type:Number,default:null},exceptId:{type:Number,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,n=b({get(){return o.modelValue},set(s){t("update:modelValue",s)}}),l=Pt(),u=b(()=>o.modelValue?l.getItem(o.modelValue).name:null);function i(s){return s.id!==o.exceptId}return(s,c)=>($e(),We(jt,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=r=>n.value=r),clearable:"","clear-icon":"close"},{control:N(()=>[ft("div",Kt,mt(u.value),1)]),append:N(()=>[ne(ht,{name:"keyboard_arrow_down"})]),default:N(()=>[ne(Rt,{fit:"","auto-close":""},{default:N(()=>[ne(Bt,null,{default:N(()=>[ne(gt,{selected:n.value,"onUpdate:selected":c[0]||(c[0]=r=>n.value=r),nodes:vt(l).tree,filter:String(e.exceptId),"filter-method":i,"node-key":"id","label-key":"name",icon:"keyboard_arrow_right","no-selection-unset":"","default-expand-all":""},null,8,["selected","nodes","filter"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},nn={__name:"DateInput",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,n=b({get(){return o.modelValue?o.modelValue.slice(0,10):null},set(l){t("update:modelValue",l?new Date(l).toISOString():null)}});return(l,u)=>($e(),We(Ct,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=i=>n.value=i),type:"date","stack-label":""},null,8,["modelValue"]))}};export{tn as _,nn as a,en as u};
import{r as g,u as Se,c as D,g as K,a as v,b as h,d as F,o as re,c6 as J,bP as S,c2 as x,bY as Te,c7 as _e,w as W,T as Z,c8 as Ee,c9 as Pe,v as ue,x as ce,y as _,J as Be,D as Ve,B as C,Q as Ce,E as He}from"./index-ad79f6fd.js";import{a as Le,c as Fe}from"./QTree-8c1b80ae.js";import{u as De,a as Ie}from"./QToolbar-d3f5c8d8.js";import{u as Me,a as Qe,b as ze,c as Ae,d as Oe,e as $e,f as je,g as Re,h as We,i as Ke,r as ee,j as te,k as Ne,l as Ye,Q as Ue}from"./QMenu-b5cae49a.js";import{f as Xe,e as Ge,h as Je}from"./scroll-410001e8.js";import{a as Ze}from"./focus-manager-4e5c0bab.js";import{u as et,b as tt,c as ot,d as nt,Q as lt}from"./QForm-c9e124d8.js";function kt(e,t,a){const o=g(e?{...t.getItem(e)}:a),n=g(e),i=g(!1),l=e?{...o.value}:null,r=Se();function c(w,y){return Object.fromEntries(Object.entries(y).filter(([u,b])=>w[u]!==b))}function f(w,y){return Object.keys(c(w,y)).length}function m(){r.back()}function p(){i.value=!0,t.deleteItem(n.value).then(()=>{t.refetch(),m()})}function k(){i.value=!0,e?t.updateItem(n.value,c(l,{...o.value})).then(()=>{t.refetch(),m()}):t.createItem(o.value).then(()=>{t.refetch(),m()})}return{item:o,original:l,path:n,persist:i,changed:f,remove:p,save:k,back:m}}const st=D({name:"QBanner",props:{...De,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=K(),o=Ie(e,a),n=v(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(o.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),i=v(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const l=[h("div",{class:"q-banner__avatar col-auto row items-center self-start"},F(t.avatar)),h("div",{class:"q-banner__content col text-body2"},F(t.default))],r=F(t.action);return r!==void 0&&l.push(h("div",{class:i.value},r)),h("div",{class:n.value+(e.inlineActions===!1&&r!==void 0?" q-banner--top-padding":""),role:"alert"},l)}}});function at(e,t,a){let o;function n(){o!==void 0&&(J.remove(o),o=void 0)}return re(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){o={condition:()=>a.value===!0,handler:t},J.add(o)}}}let E=0,$,j,P,R=!1,oe,ne,le,q=null;function it(e){rt(e)&&Te(e)}function rt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=_e(e),a=e.shiftKey&&!e.deltaX,o=!a&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=a||o?e.deltaY:e.deltaX;for(let i=0;i<t.length;i++){const l=t[i];if(Je(l,o))return o?n<0&&l.scrollTop===0?!0:n>0&&l.scrollTop+l.clientHeight===l.scrollHeight:n<0&&l.scrollLeft===0?!0:n>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function se(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function H(e){R!==!0&&(R=!0,requestAnimationFrame(()=>{R=!1;const{height:t}=e.target,{clientHeight:a,scrollTop:o}=document.scrollingElement;(P===void 0||t!==window.innerHeight)&&(P=a-t,document.scrollingElement.scrollTop=o),o>P&&(document.scrollingElement.scrollTop-=Math.ceil((o-P)/8))}))}function ae(e){const t=document.body,a=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:n}=window.getComputedStyle(t);$=Xe(window),j=Ge(window),oe=t.style.left,ne=t.style.top,le=window.location.href,t.style.left=`-${$}px`,t.style.top=`-${j}px`,n!=="hidden"&&(n==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,S.is.ios===!0&&(a===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",H,x.passiveCapture),window.visualViewport.addEventListener("scroll",H,x.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",se,x.passiveCapture))}S.is.desktop===!0&&S.is.mac===!0&&window[`${e}EventListener`]("wheel",it,x.notPassive),e==="remove"&&(S.is.ios===!0&&(a===!0?(window.visualViewport.removeEventListener("resize",H,x.passiveCapture),window.visualViewport.removeEventListener("scroll",H,x.passiveCapture)):window.removeEventListener("scroll",se,x.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=oe,t.style.top=ne,window.location.href===le&&window.scrollTo($,j),P=void 0)}function ut(e){let t="add";if(e===!0){if(E++,q!==null){clearTimeout(q),q=null;return}if(E>1)return}else{if(E===0||(E--,E>0))return;if(t="remove",S.is.ios===!0&&S.is.nativeMobile===!0){q!==null&&clearTimeout(q),q=setTimeout(()=>{ae(t),q=null},100);return}}ae(t)}function ct(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ut(t))}}}let L=0;const dt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ie={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},ft=D({name:"QDialog",inheritAttrs:!1,props:{...Me,...Qe,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ze,"shake","click","escapeKey"],setup(e,{slots:t,emit:a,attrs:o}){const n=K(),i=g(null),l=g(!1),r=g(!1);let c=null,f=null,m,p;const k=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:w}=ct(),{registerTimeout:y}=Ae(),{registerTick:u,removeTick:b}=Oe(),{transitionProps:de,transitionStyle:N}=$e(e,()=>ie[e.position][0],()=>ie[e.position][1]),{showPortal:Y,hidePortal:U,portalIsAccessible:fe,renderPortal:me}=je(n,i,ke,"dialog"),{hide:B}=Re({showing:l,hideOnRouteChange:k,handleShow:ye,handleHide:be,processOnMount:!0}),{addToHistory:ve,removeFromHistory:pe}=at(l,B,k),he=v(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${dt[e.position]}`+(r.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),V=v(()=>l.value===!0&&e.seamless!==!0),ge=v(()=>e.autoClose===!0?{onClick:xe}:{}),we=v(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${V.value===!0?"modal":"seamless"}`,o.class]);W(()=>e.maximized,s=>{l.value===!0&&Q(s)}),W(V,s=>{w(s),s===!0?(We(z),Ke(M)):(ee(z),te(M))});function ye(s){ve(),f=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,Q(e.maximized),Y(),r.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),u(T)):b(),y(()=>{if(n.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:d,bottom:A}=document.activeElement.getBoundingClientRect(),{innerHeight:G}=window,O=window.visualViewport!==void 0?window.visualViewport.height:G;d>0&&A>O/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-O,A>=G?1/0:Math.ceil(document.scrollingElement.scrollTop+A-O/2))),document.activeElement.scrollIntoView()}p=!0,i.value.click(),p=!1}Y(!0),r.value=!1,a("show",s)},e.transitionDuration)}function be(s){b(),pe(),X(!0),r.value=!0,U(),f!==null&&(((s&&s.type.indexOf("key")===0?f.closest('[tabindex]:not([tabindex^="-"])'):void 0)||f).focus(),f=null),y(()=>{U(!0),r.value=!1,a("hide",s)},e.transitionDuration)}function T(s){Ze(()=>{let d=i.value;d===null||d.contains(document.activeElement)===!0||(d=(s!==""?d.querySelector(s):null)||d.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.querySelector("[autofocus], [data-autofocus]")||d,d.focus({preventScroll:!0}))})}function I(s){s&&typeof s.focus=="function"?s.focus({preventScroll:!0}):T(),a("shake");const d=i.value;d!==null&&(d.classList.remove("q-animate--scale"),d.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,i.value!==null&&(d.classList.remove("q-animate--scale"),T())},170))}function M(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&I():(a("escapeKey"),B()))}function X(s){c!==null&&(clearTimeout(c),c=null),(s===!0||l.value===!0)&&(Q(!1),e.seamless!==!0&&(w(!1),ee(z),te(M))),s!==!0&&(f=null)}function Q(s){s===!0?m!==!0&&(L<1&&document.body.classList.add("q-body--dialog"),L++,m=!0):m===!0&&(L<2&&document.body.classList.remove("q-body--dialog"),L--,m=!1)}function xe(s){p!==!0&&(B(s),a("click",s))}function qe(s){e.persistent!==!0&&e.noBackdropDismiss!==!0?B(s):e.noShake!==!0&&I()}function z(s){e.allowFocusOutside!==!0&&fe.value===!0&&Ee(i.value,s.target)!==!0&&T('[tabindex]:not([tabindex="-1"])')}Object.assign(n.proxy,{focus:T,shake:I,__updateRefocusTarget(s){f=s||null}}),re(X);function ke(){return h("div",{role:"dialog","aria-modal":V.value===!0?"true":"false",...o,class:we.value},[h(Z,{name:"q-transition--fade",appear:!0},()=>V.value===!0?h("div",{class:"q-dialog__backdrop fixed-full",style:N.value,"aria-hidden":"true",tabindex:-1,onClick:qe}):null),h(Z,de.value,()=>l.value===!0?h("div",{ref:i,class:he.value,style:N.value,tabindex:-1,...ge.value},F(t.default)):null)])}return me}}),mt=D({name:"QPopupProxy",props:{...Ne,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:t,emit:a,attrs:o}){const{proxy:n}=K(),{$q:i}=n,l=g(!1),r=g(null),c=v(()=>parseInt(e.breakpoint,10)),{canShow:f}=Ye({showing:l});function m(){return i.screen.width<c.value||i.screen.height<c.value?"dialog":"menu"}const p=g(m()),k=v(()=>p.value==="menu"?{maxHeight:"99vh"}:{});W(()=>m(),u=>{l.value!==!0&&(p.value=u)});function w(u){l.value=!0,a("show",u)}function y(u){l.value=!1,p.value=m(),a("hide",u)}return Object.assign(n,{show(u){f(u)===!0&&r.value.show(u)},hide(u){r.value.hide(u)},toggle(u){r.value.toggle(u)}}),Pe(n,"currentComponent",()=>({type:p.value,ref:r.value})),()=>{const u={ref:r,...k.value,...o,onShow:w,onHide:y};let b;return p.value==="dialog"?b=ft:(b=Ue,Object.assign(u,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(b,u,t.default)}}}),vt=D({name:"QField",inheritAttrs:!1,props:et,emits:tt,setup(){return ot(nt())}}),pt={class:"self-center full-width no-outline ellipsis",tabindex:"0"},St={__name:"GoalSelect",props:{modelValue:{type:Number,default:null},exceptId:{type:Number,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,o=v({get(){return a.modelValue},set(r){t("update:modelValue",r)}}),n=Le(),i=v(()=>a.modelValue?n.getItem(a.modelValue).name:null);function l(r){return r.id!==a.exceptId}return(r,c)=>(ue(),ce(vt,{modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=f=>o.value=f),clearable:"","clear-icon":"close"},{control:_(()=>[Be("div",pt,Ve(i.value),1)]),append:_(()=>[C(Ce,{name:"keyboard_arrow_down"})]),default:_(()=>[C(mt,{fit:"","auto-close":""},{default:_(()=>[C(st,null,{default:_(()=>[C(Fe,{selected:o.value,"onUpdate:selected":c[0]||(c[0]=f=>o.value=f),nodes:He(n).tree,filter:String(e.exceptId),"filter-method":l,"node-key":"id","label-key":"name",icon:"keyboard_arrow_right","no-selection-unset":"","default-expand-all":""},null,8,["selected","nodes","filter"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Tt={__name:"DateInput",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,o=v({get(){return a.modelValue?a.modelValue.slice(0,10):null},set(n){t("update:modelValue",n?new Date(n).toISOString():null)}});return(n,i)=>(ue(),ce(lt,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=l=>o.value=l),type:"date","stack-label":""},null,8,["modelValue"]))}};export{St as _,Tt as a,kt as u};

import{r as q,i as Ge,o as le,c as U,g as Y,a as J,n as Oe,b as ce,h as T,l as ke,d as Me,e as V,f as de,j as f,w as x,k as bt,m as gt,p as te,q as yt,s as re,t as ye,u as He,v as pe,x as Pe,y as ze,z as pt,A as zt,B as St,C as wt,D as Je,E as Le,F as Ae,G as Ze,H as et,I as _t,J as ue,K as qt,L as Ct,M as Tt,N as xt,O as $t,P as kt,Q as Se,R as Qe,S as k,T as C,U as we,V as se,W as _e,X as Pt,Y as Lt,Z as Ot,_ as Mt}from"./index-55d44a5d.js";import{Q as De,a as Bt}from"./QToolbar-dda70e16.js";import{Q as qe,a as G}from"./QItem-02e4a8b0.js";import{Q as Re}from"./QItemLabel-83422d1a.js";import{Q as Ve}from"./QList-9360b03a.js";import{u as tt,a as at}from"./use-dark-f25deefa.js";import{g as Et,a as Ht,b as At,c as Qt,s as Ce,d as Fe,u as Dt,e as Rt,f as Vt,h as Te}from"./use-timeout-f8353b71.js";import{b as I}from"./format-8c778330.js";import{u as Ft,a as Nt,b as Wt}from"./use-model-toggle-b09a1263.js";function jt(){const e=q(!Ge.value);return e.value===!1&&le(()=>{e.value=!0}),e}const lt=typeof ResizeObserver<"u",Ne=lt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},oe=U({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let r=null,c,t={width:-1,height:-1};function l(v){v===!0||e.debounce===0||e.debounce==="0"?o():r===null&&(r=setTimeout(o,e.debounce))}function o(){if(r!==null&&(clearTimeout(r),r=null),c){const{offsetWidth:v,offsetHeight:s}=c;(v!==t.width||s!==t.height)&&(t={width:v,height:s},u("resize",t))}}const{proxy:a}=Y();if(lt===!0){let v;const s=i=>{c=a.$el.parentNode,c?(v=new ResizeObserver(l),v.observe(c),o()):i!==!0&&ce(()=>{s(!0)})};return le(()=>{s()}),J(()=>{r!==null&&clearTimeout(r),v!==void 0&&(v.disconnect!==void 0?v.disconnect():c&&v.unobserve(c))}),Oe}else{let i=function(){r!==null&&(clearTimeout(r),r=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",l,ke.passive),s=void 0)},y=function(){i(),c&&c.contentDocument&&(s=c.contentDocument.defaultView,s.addEventListener("resize",l,ke.passive),o())};const v=jt();let s;return le(()=>{ce(()=>{c=a.$el,c&&y()})}),J(i),a.trigger=l,()=>{if(v.value===!0)return T("object",{style:Ne.style,tabindex:-1,type:"text/html",data:Ne.url,"aria-hidden":"true",onLoad:y})}}}}),It=U({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:r}){const{proxy:{$q:c}}=Y(),t=Me(de,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const l=q(parseInt(e.heightHint,10)),o=q(!0),a=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||c.platform.is.ios&&t.isContainer.value===!0),v=f(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),s=f(()=>e.modelValue!==!0||a.value===!0&&o.value!==!0),i=f(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),y=f(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=f(()=>{const h=t.rows.value.top,L={};return h[0]==="l"&&t.left.space===!0&&(L[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(L[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function b(h,L){t.update("header",h,L)}function g(h,L){h.value!==L&&(h.value=L)}function M({height:h}){g(l,h),b("size",h)}function P(h){i.value===!0&&g(o,!0),r("focusin",h)}x(()=>e.modelValue,h=>{b("space",h),g(o,!0),t.animate()}),x(v,h=>{b("offset",h)}),x(()=>e.reveal,h=>{h===!1&&g(o,e.modelValue)}),x(o,h=>{t.animate(),r("reveal",h)}),x(t.scroll,h=>{e.reveal===!0&&g(o,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&b("size",l.value),b("space",e.modelValue),b("offset",v.value),J(()=>{t.instances.header===w&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const h=bt(u.default,[]);return e.elevated===!0&&h.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(T(oe,{debounce:0,onResize:M})),T("header",{class:y.value,style:p.value,onFocusin:P},h)}}}),{passive:We}=ke,Xt=["both","horizontal","vertical"],ot=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Xt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:u}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,t,l;x(()=>e.scrollTarget,()=>{v(),a()});function o(){c!==null&&c();const y=Math.max(0,Ht(t)),p=At(t),b={top:y-r.position.top,left:p-r.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const g=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";r.position={top:y,left:p},r.directionChanged=r.direction!==g,r.delta=b,r.directionChanged===!0&&(r.direction=g,r.inflectionPoint=r.position),u("scroll",{...r})}function a(){t=Et(l,e.scrollTarget),t.addEventListener("scroll",s,We),s(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",s,We),t=void 0)}function s(y){if(y===!0||e.debounce===0||e.debounce==="0")o();else if(c===null){const[p,b]=e.debounce?[setTimeout(o,e.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];c=()=>{b(p),c=null}}}const{proxy:i}=Y();return x(()=>i.$q.lang.rtl,o),le(()=>{l=i.$el.parentNode,a()}),J(()=>{c!==null&&c(),v()}),Object.assign(i,{trigger:s,getPosition:()=>r}),Oe}}),Be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ut=Object.keys(Be);Be.all=!0;function je(e){const u={};for(const r of Ut)e[r]===!0&&(u[r]=!0);return Object.keys(u).length===0?Be:(u.horizontal===!0?u.left=u.right=!0:u.left===!0&&u.right===!0&&(u.horizontal=!0),u.vertical===!0?u.up=u.down=!0:u.up===!0&&u.down===!0&&(u.vertical=!0),u.horizontal===!0&&u.vertical===!0&&(u.all=!0),u)}const Yt=["INPUT","TEXTAREA"];function Ie(e,u){return u.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof u.handler=="function"&&Yt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(u.uid)===-1)}function xe(e,u,r){const c=Pe(e);let t,l=c.left-u.event.x,o=c.top-u.event.y,a=Math.abs(l),v=Math.abs(o);const s=u.direction;s.horizontal===!0&&s.vertical!==!0?t=l<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=o<0?"up":"down":s.up===!0&&o<0?(t="up",a>v&&(s.left===!0&&l<0?t="left":s.right===!0&&l>0&&(t="right"))):s.down===!0&&o>0?(t="down",a>v&&(s.left===!0&&l<0?t="left":s.right===!0&&l>0&&(t="right"))):s.left===!0&&l<0?(t="left",a<v&&(s.up===!0&&o<0?t="up":s.down===!0&&o>0&&(t="down"))):s.right===!0&&l>0&&(t="right",a<v&&(s.up===!0&&o<0?t="up":s.down===!0&&o>0&&(t="down")));let i=!1;if(t===void 0&&r===!1){if(u.event.isFirst===!0||u.event.lastDir===void 0)return{};t=u.event.lastDir,i=!0,t==="left"||t==="right"?(c.left-=l,a=0,l=0):(c.top-=o,v=0,o=0)}return{synthetic:i,payload:{evt:e,touch:u.event.mouse!==!0,mouse:u.event.mouse===!0,position:c,direction:t,isFirst:u.event.isFirst,isFinal:r===!0,duration:Date.now()-u.event.time,distance:{x:a,y:v},offset:{x:l,y:o},delta:{x:c.left-u.event.lastX,y:c.top-u.event.lastY}}}}let Kt=0;const ae=gt({name:"touch-pan",beforeMount(e,{value:u,modifiers:r}){if(r.mouse!==!0&&te.has.touch!==!0)return;function c(l,o){r.mouse===!0&&o===!0?pt(l):(r.stop===!0&&pe(l),r.prevent===!0&&He(l))}const t={uid:"qvtp_"+Kt++,handler:u,modifiers:r,direction:je(r),noop:Oe,mouseStart(l){Ie(l,t)&&yt(l)&&(re(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ie(l,t)){const o=l.target;re(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,o){if(te.is.firefox===!0&&ye(e,!0),t.lastEvt=l,o===!0||r.stop===!0){if(t.direction.all!==!0&&(o!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&He(s),l.cancelBubble===!0&&pe(s),Object.assign(s,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:s}}pe(l)}const{left:a,top:v}=Pe(l);t.event={x:a,y:v,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:v}},move(l){if(t.event===void 0)return;const o=Pe(l),a=o.left-t.event.x,v=o.top-t.event.y;if(a===0&&v===0)return;t.lastEvt=l;const s=t.event.mouse===!0,i=()=>{c(l,s);let b;r.preserveCursor!==!0&&r.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Qt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),s===!0){const M=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{M(),g()},50):M()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&c(l,t.event.mouse);const{payload:b,synthetic:g}=xe(l,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=g===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(l);return}const y=Math.abs(a),p=Math.abs(v);y!==p&&(t.direction.horizontal===!0&&y>p||t.direction.vertical===!0&&y<p||t.direction.up===!0&&y<p&&v<0||t.direction.down===!0&&y<p&&v>0||t.direction.left===!0&&y>p&&a<0||t.direction.right===!0&&y>p&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,o){if(t.event!==void 0){if(ze(t,"temp"),te.is.firefox===!0&&ye(e,!1),o===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(xe(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=xe(l===void 0?t.lastEvt:l,t,!0),v=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,r.mouse===!0){const l=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";re(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}te.has.touch===!0&&re(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,u){const r=e.__qtouchpan;r!==void 0&&(u.oldValue!==u.value&&(typeof value!="function"&&r.end(),r.handler=u.value),r.direction=je(u.modifiers))},beforeUnmount(e){const u=e.__qtouchpan;u!==void 0&&(u.event!==void 0&&u.end(),ze(u,"main"),ze(u,"temp"),te.is.firefox===!0&&ye(e,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete e.__qtouchpan)}}),Xe=["vertical","horizontal"],$e={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ue={prevent:!0,mouse:!0,mouseAllDir:!0},Ye=e=>e>=250?50:Math.ceil(e/5),Gt=U({name:"QScrollArea",props:{...tt,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:u,emit:r}){const c=q(!1),t=q(!1),l=q(!1),o={vertical:q(0),horizontal:q(0)},a={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:v}=Y(),s=at(e,v.$q);let i=null,y;const p=q(null),b=f(()=>"q-scrollarea"+(s.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=f(()=>{const d=a.vertical.size.value-o.vertical.value;if(d<=0)return 0;const m=I(a.vertical.position.value/d,0,1);return Math.round(m*1e4)/1e4}),a.vertical.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.vertical.size.value<=o.vertical.value+1),a.vertical.thumbStart=f(()=>a.vertical.percentage.value*(o.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=f(()=>Math.round(I(o.vertical.value*o.vertical.value/a.vertical.size.value,Ye(o.vertical.value),o.vertical.value))),a.vertical.style=f(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=f(()=>{const d=a.horizontal.size.value-o.horizontal.value;if(d<=0)return 0;const m=I(Math.abs(a.horizontal.position.value)/d,0,1);return Math.round(m*1e4)/1e4}),a.horizontal.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&c.value===!1&&t.value===!1||a.horizontal.size.value<=o.horizontal.value+1),a.horizontal.thumbStart=f(()=>a.horizontal.percentage.value*(o.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=f(()=>Math.round(I(o.horizontal.value*o.horizontal.value/a.horizontal.size.value,Ye(o.horizontal.value),o.horizontal.value))),a.horizontal.style=f(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=f(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),M=[[ae,d=>{D(d,"vertical")},void 0,{vertical:!0,...Ue}]],P=[[ae,d=>{D(d,"horizontal")},void 0,{horizontal:!0,...Ue}]];function w(){const d={};return Xe.forEach(m=>{const _=a[m];d[m+"Position"]=_.position.value,d[m+"Percentage"]=_.percentage.value,d[m+"Size"]=_.size.value,d[m+"ContainerSize"]=o[m].value}),d}const h=zt(()=>{const d=w();d.ref=v,r("scroll",d)},0);function L(d,m,_){if(Xe.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?Fe:Ce)(p.value,m,_)}function z({height:d,width:m}){let _=!1;o.vertical.value!==d&&(o.vertical.value=d,_=!0),o.horizontal.value!==m&&(o.horizontal.value=m,_=!0),_===!0&&Q()}function $({position:d}){let m=!1;a.vertical.position.value!==d.top&&(a.vertical.position.value=d.top,m=!0),a.horizontal.position.value!==d.left&&(a.horizontal.position.value=d.left,m=!0),m===!0&&Q()}function O({height:d,width:m}){a.horizontal.size.value!==m&&(a.horizontal.size.value=m,Q()),a.vertical.size.value!==d&&(a.vertical.size.value=d,Q())}function D(d,m){const _=a[m];if(d.isFirst===!0){if(_.thumbHidden.value===!0)return;y=_.position.value,t.value=!0}else if(t.value!==!0)return;d.isFinal===!0&&(t.value=!1);const E=$e[m],K=o[m].value,ve=(_.size.value-K)/(K-_.thumbSize.value),fe=d.distance[E.dist],ne=y+(d.direction===E.dir?1:-1)*fe*ve;Z(ne,m)}function F(d,m){const _=a[m];if(_.thumbHidden.value!==!0){const E=d[$e[m].offset];if(E<_.thumbStart.value||E>_.thumbStart.value+_.thumbSize.value){const K=E-_.thumbSize.value/2;Z(K/o[m].value*_.size.value,m)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function R(d){F(d,"vertical")}function A(d){F(d,"horizontal")}function Q(){c.value=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,c.value=!1},e.delay),e.onScroll!==void 0&&h()}function Z(d,m){p.value[$e[m].scroll]=d}function N(){l.value=!0}function ee(){l.value=!1}let X=null;return x(()=>v.$q.lang.rtl,d=>{p.value!==null&&Ce(p.value,Math.abs(a.horizontal.position.value)*(d===!0?-1:1))}),St(()=>{X={top:a.vertical.position.value,left:a.horizontal.position.value}}),wt(()=>{if(X===null)return;const d=p.value;d!==null&&(Ce(d,X.left),Fe(d,X.top))}),J(h.cancel),Object.assign(v,{getScrollTarget:()=>p.value,getScroll:w,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:L,setScrollPercentage(d,m,_){L(d,m*(a[d].size.value-o[d].value)*(d==="horizontal"&&v.$q.lang.rtl===!0?-1:1),_)}}),()=>T("div",{class:b.value,onMouseenter:N,onMouseleave:ee},[T("div",{ref:p,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[T("div",{class:"q-scrollarea__content absolute",style:g.value},Je(u.default,[T(oe,{debounce:0,onResize:O})])),T(ot,{axis:"both",onScroll:$})]),T(oe,{debounce:0,onResize:z}),T("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:R}),T("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),Le(T("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),M),Le(T("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),P)])}}),Ke=150,Jt=U({name:"QDrawer",inheritAttrs:!1,props:{...Ft,...tt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Nt,"onLayout","miniState"],setup(e,{slots:u,emit:r,attrs:c}){const t=Y(),{proxy:{$q:l}}=t,o=at(e,l),{preventBodyScroll:a}=Vt(),{registerTimeout:v,removeTimeout:s}=Dt(),i=Me(de,V);if(i===V)return console.error("QDrawer needs to be child of QLayout"),V;let y,p=null,b;const g=q(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),M=f(()=>e.mini===!0&&g.value!==!0),P=f(()=>M.value===!0?e.miniWidth:e.width),w=q(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),h=f(()=>e.persistent!==!0&&(g.value===!0||K.value===!0));function L(n,S){if(D(),n!==!1&&i.animate(),H(0),g.value===!0){const B=i.instances[d.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),W(1),i.isContainer.value!==!0&&a(!0)}else W(0),n!==!1&&me(!1);v(()=>{n!==!1&&me(!0),S!==!0&&r("show",n)},Ke)}function z(n,S){F(),n!==!1&&i.animate(),W(0),H(Q.value*P.value),be(),S!==!0?v(()=>{r("hide",n)},Ke):s()}const{show:$,hide:O}=Wt({showing:w,hideOnRouteChange:h,handleShow:L,handleHide:z}),{addToHistory:D,removeFromHistory:F}=Rt(w,O,h),R={belowBreakpoint:g,hide:O},A=f(()=>e.side==="right"),Q=f(()=>(l.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),Z=q(0),N=q(!1),ee=q(!1),X=q(P.value*Q.value),d=f(()=>A.value===!0?"left":"right"),m=f(()=>w.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),_=f(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(A.value?"R":"L")>-1||l.platform.is.ios===!0&&i.isContainer.value===!0),E=f(()=>e.overlay===!1&&w.value===!0&&g.value===!1),K=f(()=>e.overlay===!0&&w.value===!0&&g.value===!1),ve=f(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&N.value===!1?" hidden":"")),fe=f(()=>({backgroundColor:`rgba(0,0,0,${Z.value*.4})`})),ne=f(()=>A.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),nt=f(()=>A.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),it=f(()=>{const n={};return i.header.space===!0&&ne.value===!1&&(_.value===!0?n.top=`${i.header.offset}px`:i.header.space===!0&&(n.top=`${i.header.size}px`)),i.footer.space===!0&&nt.value===!1&&(_.value===!0?n.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(n.bottom=`${i.footer.size}px`)),n}),rt=f(()=>{const n={width:`${P.value}px`,transform:`translateX(${X.value}px)`};return g.value===!0?n:Object.assign(n,it.value)}),ut=f(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),st=f(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${M.value===!0?"mini":"standard"}`+(_.value===!0||E.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ne.value===!0?" q-drawer--top-padding":""))),ct=f(()=>{const n=l.lang.rtl===!0?e.side:d.value;return[[ae,ht,void 0,{[n]:!0,mouse:!0}]]}),dt=f(()=>{const n=l.lang.rtl===!0?d.value:e.side;return[[ae,Ee,void 0,{[n]:!0,mouse:!0}]]}),vt=f(()=>{const n=l.lang.rtl===!0?d.value:e.side;return[[ae,Ee,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function he(){mt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}x(g,n=>{n===!0?(y=w.value,w.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&y!==!1&&(w.value===!0?(H(0),W(0),be()):$(!1))}),x(()=>e.side,(n,S)=>{i.instances[S]===R&&(i.instances[S]=void 0,i[S].space=!1,i[S].offset=0),i.instances[n]=R,i[n].size=P.value,i[n].space=E.value,i[n].offset=m.value}),x(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&he()}),x(()=>e.behavior+e.breakpoint,he),x(i.isContainer,n=>{w.value===!0&&a(n!==!0),n===!0&&he()}),x(i.scrollbarWidth,()=>{H(w.value===!0?0:void 0)}),x(m,n=>{j("offset",n)}),x(E,n=>{r("onLayout",n),j("space",n)}),x(A,()=>{H()}),x(P,n=>{H(),ge(e.miniToOverlay,n)}),x(()=>e.miniToOverlay,n=>{ge(n,P.value)}),x(()=>l.lang.rtl,()=>{H()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ft(),i.animate())}),x(M,n=>{r("miniState",n)});function H(n){n===void 0?ce(()=>{n=w.value===!0?0:P.value,H(Q.value*n)}):(i.isContainer.value===!0&&A.value===!0&&(g.value===!0||Math.abs(n)===P.value)&&(n+=Q.value*i.scrollbarWidth.value),X.value=n)}function W(n){Z.value=n}function me(n){const S=n===!0?"remove":i.isContainer.value!==!0?"add":"";S!==""&&document.body.classList[S]("q-body--drawer-toggle")}function ft(){p!==null&&clearTimeout(p),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,p=setTimeout(()=>{p=null,ee.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ht(n){if(w.value!==!1)return;const S=P.value,B=I(n.distance.x,0,S);if(n.isFinal===!0){B>=Math.min(75,S)===!0?$():(i.animate(),W(0),H(Q.value*S)),N.value=!1;return}H((l.lang.rtl===!0?A.value!==!0:A.value)?Math.max(S-B,0):Math.min(0,B-S)),W(I(B/S,0,1)),n.isFirst===!0&&(N.value=!0)}function Ee(n){if(w.value!==!0)return;const S=P.value,B=n.direction===e.side,ie=(l.lang.rtl===!0?B!==!0:B)?I(n.distance.x,0,S):0;if(n.isFinal===!0){Math.abs(ie)<Math.min(75,S)===!0?(i.animate(),W(1),H(0)):O(),N.value=!1;return}H(Q.value*ie),W(I(1-ie/S,0,1)),n.isFirst===!0&&(N.value=!0)}function be(){a(!1),me(!0)}function j(n,S){i.update(e.side,n,S)}function mt(n,S){n.value!==S&&(n.value=S)}function ge(n,S){j("size",n===!0?e.miniWidth:S)}return i.instances[e.side]=R,ge(e.miniToOverlay,P.value),j("space",E.value),j("offset",m.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),le(()=>{r("onLayout",E.value),r("miniState",M.value),y=e.showIfAbove===!0;const n=()=>{(w.value===!0?L:z)(!1,!0)};if(i.totalWidth.value!==0){ce(n);return}b=x(i.totalWidth,()=>{b(),b=void 0,w.value===!1&&e.showIfAbove===!0&&g.value===!1?$(!1):n()})}),J(()=>{b!==void 0&&b(),p!==null&&(clearTimeout(p),p=null),w.value===!0&&be(),i.instances[e.side]===R&&(i.instances[e.side]=void 0,j("size",0),j("offset",0),j("space",!1))}),()=>{const n=[];g.value===!0&&(e.noSwipeOpen===!1&&n.push(Le(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ct.value)),n.push(Ae("div",{ref:"backdrop",class:ve.value,style:fe.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>vt.value)));const S=M.value===!0&&u.mini!==void 0,B=[T("div",{...c,key:""+S,class:[ut.value,c.class]},S===!0?u.mini():Ze(u.default))];return e.elevated===!0&&w.value===!0&&B.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Ae("aside",{ref:"content",class:st.value,style:rt.value},B,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>dt.value)),T("div",{class:"q-drawer-container"},n)}}}),Zt=U({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:r}}=Y(),c=Me(de,V);if(c===V)return console.error("QPageContainer needs to be child of QLayout"),V;et(_t,!0);const t=f(()=>{const l={};return c.header.space===!0&&(l.paddingTop=`${c.header.size}px`),c.right.space===!0&&(l[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(l.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(l[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),l});return()=>T("div",{class:"q-page-container",style:t.value},Ze(u.default))}}),ea=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:r}){const{proxy:{$q:c}}=Y(),t=q(null),l=q(c.screen.height),o=q(e.container===!0?0:c.screen.width),a=q({position:0,direction:"down",inflectionPoint:0}),v=q(0),s=q(Ge.value===!0?0:Te()),i=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=f(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),p=f(()=>s.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),b=f(()=>s.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function g(z){if(e.container===!0||document.qScrollPrevented!==!0){const $={position:z.position.top,direction:z.direction,directionChanged:z.directionChanged,inflectionPoint:z.inflectionPoint.top,delta:z.delta.top};a.value=$,e.onScroll!==void 0&&r("scroll",$)}}function M(z){const{height:$,width:O}=z;let D=!1;l.value!==$&&(D=!0,l.value=$,e.onScrollHeight!==void 0&&r("scrollHeight",$),w()),o.value!==O&&(D=!0,o.value=O),D===!0&&e.onResize!==void 0&&r("resize",z)}function P({height:z}){v.value!==z&&(v.value=z,w())}function w(){if(e.container===!0){const z=l.value>v.value?Te():0;s.value!==z&&(s.value=z)}}let h=null;const L={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:l,containerHeight:v,scrollbarWidth:s,totalWidth:f(()=>o.value+s.value),rows:f(()=>{const z=e.view.toLowerCase().split(" ");return{top:z[0].split(""),middle:z[1].split(""),bottom:z[2].split("")}}),header:ue({size:0,offset:0,space:!1}),right:ue({size:300,offset:0,space:!1}),footer:ue({size:0,offset:0,space:!1}),left:ue({size:300,offset:0,space:!1}),scroll:a,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(z,$,O){L[z][$]=O}};if(et(de,L),Te()>0){let O=function(){z=null,$.classList.remove("hide-scrollbar")},D=function(){if(z===null){if($.scrollHeight>c.screen.height)return;$.classList.add("hide-scrollbar")}else clearTimeout(z);z=setTimeout(O,300)},F=function(R){z!==null&&R==="remove"&&(clearTimeout(z),O()),window[`${R}EventListener`]("resize",D)},z=null;const $=document.body;x(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),qt(()=>{F("remove")})}return()=>{const z=Je(u.default,[T(ot,{onScroll:g}),T(oe,{onResize:M})]),$=T("div",{class:i.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},z);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(oe,{onResize:P}),T("div",{class:"absolute-full",style:p.value},[T("div",{class:"scroll",style:b.value},[$])])]):$}}}),da={__name:"MainLayout",setup(e){const u=Ct(),r=Tt(),c=xt(),t=$t(),l=[{to:"/",icon:"pending_actions",label:"Plan"},{to:"/goals",icon:"outlined_flag",label:"Goals"},{to:"/reports",icon:"auto_graph",label:"Reports"}],o=q(!1);function a(){t.logout(),u.push({name:"login",query:{next:r.fullPath}}),c._s.forEach(v=>{v.$dispose(),delete c.state.value[v.$id]}),localStorage.clear()}return(v,s)=>{const i=kt("router-view");return Se(),Qe(ea,{view:"hHh LpR fFf"},{default:k(()=>[C(It,{reveal:"","reveal-offset":0},{default:k(()=>[C(De,null,{default:k(()=>[C(we,{flat:"",round:"",icon:"menu",class:"lt-md",onClick:s[0]||(s[0]=y=>o.value=!o.value)}),C(Bt,null,{default:k(()=>[se("LifeTrackerBuddy")]),_:1}),C(we,{flat:"",round:"",icon:"logout",onClick:a})]),_:1})]),_:1}),C(Jt,{modelValue:o.value,"onUpdate:modelValue":s[2]||(s[2]=y=>o.value=y),"show-if-above":""},{default:k(()=>[C(Gt,{class:"fit"},{default:k(()=>[C(De,{class:"lt-md bg-primary text-white"},{default:k(()=>[C(we,{flat:"",round:"",icon:"menu_open",onClick:s[1]||(s[1]=y=>o.value=!1)})]),_:1}),C(Ve,{class:"q-mt-md"},{default:k(()=>[C(qe,{to:{name:"task",params:{id:"new"}}},{default:k(()=>[C(G,{avatar:""},{default:k(()=>[C(_e,{name:"add_task"})]),_:1}),C(G,{"no-wrap":""},{default:k(()=>[C(Re,null,{default:k(()=>[se("New task")]),_:1})]),_:1})]),_:1}),C(qe,{to:{name:"goal",params:{id:"new"}}},{default:k(()=>[C(G,{avatar:""},{default:k(()=>[C(_e,{name:"control_point"})]),_:1}),C(G,{"no-wrap":""},{default:k(()=>[C(Re,null,{default:k(()=>[se("New goal")]),_:1})]),_:1})]),_:1})]),_:1}),C(Ve,{class:"q-mt-md"},{default:k(()=>[(Se(),Pt(Ot,null,Lt(l,(y,p)=>C(qe,{key:p,to:y.to,exact:""},{default:k(()=>[C(G,{avatar:""},{default:k(()=>[C(_e,{name:y.icon},null,8,["name"])]),_:2},1024),C(G,null,{default:k(()=>[se(Mt(y.label),1)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1})]),_:1})]),_:1},8,["modelValue"]),C(Zt,null,{default:k(()=>[(Se(),Qe(i,{key:v.$route.path}))]),_:1})]),_:1})}}};export{da as default};

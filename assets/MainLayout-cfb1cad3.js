import{r as q,i as Ge,o as oe,c as X,g as K,a as G,n as Be,b as ve,h as k,l as Me,d as Ee,e as V,f as he,j as f,w as x,k as gt,m as Je,p as ee,q as yt,s as ue,t as Se,u as Qe,v as we,x as Oe,y as _e,z as pt,A as zt,B as St,C as wt,D as Ze,E as fe,F as De,G as et,H as tt,I as _t,J as se,K as qt,L as Ct,M as Tt,N as kt,O as xt,P as Lt,Q as Pt,R as ce,S as qe,T as C,U as T,V as Ce,W as te,X as $t,Y as Mt,Z as Ot,_ as Bt,$ as Et}from"./index-d21feb98.js";import{u as at,a as lt,Q as Ht,b as At}from"./QToolbar-3a9e0a57.js";import{Q as Te,a as de,b as ae,c as ke}from"./QList-a2481d46.js";import{g as Qt,a as Dt,b as Rt,c as Vt,s as xe,d as Re,u as Ft,e as Nt,f as Wt,h as Le,i as jt,j as It,Q as Ve}from"./use-prevent-scroll-cae2b09b.js";import{b as I}from"./format-8c778330.js";import{u as Ut,a as Xt,b as Kt}from"./use-model-toggle-d77af729.js";import"./focus-manager-4e5c0bab.js";function Yt(){const e=q(!Ge.value);return e.value===!1&&oe(()=>{e.value=!0}),e}const ot=typeof ResizeObserver<"u",Fe=ot===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},ne=X({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,s,t={width:-1,height:-1};function l(v){v===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(n!==null&&(clearTimeout(n),n=null),s){const{offsetWidth:v,offsetHeight:c}=s;(v!==t.width||c!==t.height)&&(t={width:v,height:c},o("resize",t))}}const{proxy:a}=K();if(ot===!0){let v;const c=u=>{s=a.$el.parentNode,s?(v=new ResizeObserver(l),v.observe(s),i()):u!==!0&&ve(()=>{c(!0)})};return oe(()=>{c()}),G(()=>{n!==null&&clearTimeout(n),v!==void 0&&(v.disconnect!==void 0?v.disconnect():s&&v.unobserve(s))}),Be}else{let u=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,Me.passive),c=void 0)},z=function(){u(),s&&s.contentDocument&&(c=s.contentDocument.defaultView,c.addEventListener("resize",l,Me.passive),i())};const v=Yt();let c;return oe(()=>{ve(()=>{s=a.$el,s&&z()})}),G(u),a.trigger=l,()=>{if(v.value===!0)return k("object",{style:Fe.style,tabindex:-1,type:"text/html",data:Fe.url,"aria-hidden":"true",onLoad:z})}}}}),Gt=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:s}}=K(),t=Ee(he,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const l=q(parseInt(e.heightHint,10)),i=q(!0),a=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||s.platform.is.ios&&t.isContainer.value===!0),v=f(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return i.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),c=f(()=>e.modelValue!==!0||a.value===!0&&i.value!==!0),u=f(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),z=f(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=f(()=>{const h=t.rows.value.top,$={};return h[0]==="l"&&t.left.space===!0&&($[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&($[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),$});function b(h,$){t.update("header",h,$)}function g(h,$){h.value!==$&&(h.value=$)}function O({height:h}){g(l,h),b("size",h)}function P(h){u.value===!0&&g(i,!0),n("focusin",h)}x(()=>e.modelValue,h=>{b("space",h),g(i,!0),t.animate()}),x(v,h=>{b("offset",h)}),x(()=>e.reveal,h=>{h===!1&&g(i,e.modelValue)}),x(i,h=>{t.animate(),n("reveal",h)}),x(t.scroll,h=>{e.reveal===!0&&g(i,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&b("size",l.value),b("space",e.modelValue),b("offset",v.value),G(()=>{t.instances.header===w&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const h=gt(o.default,[]);return e.elevated===!0&&h.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(k(ne,{debounce:0,onResize:O})),k("header",{class:z.value,style:y.value,onFocusin:P},h)}}}),{passive:Ne}=Me,Jt=["both","horizontal","vertical"],nt=X({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,t,l;x(()=>e.scrollTarget,()=>{v(),a()});function i(){s!==null&&s();const z=Math.max(0,Dt(t)),y=Rt(t),b={top:z-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const g=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";n.position={top:z,left:y},n.directionChanged=n.direction!==g,n.delta=b,n.directionChanged===!0&&(n.direction=g,n.inflectionPoint=n.position),o("scroll",{...n})}function a(){t=Qt(l,e.scrollTarget),t.addEventListener("scroll",c,Ne),c(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",c,Ne),t=void 0)}function c(z){if(z===!0||e.debounce===0||e.debounce==="0")i();else if(s===null){const[y,b]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];s=()=>{b(y),s=null}}}const{proxy:u}=K();return x(()=>u.$q.lang.rtl,i),oe(()=>{l=u.$el.parentNode,a()}),G(()=>{s!==null&&s(),v()}),Object.assign(u,{trigger:c,getPosition:()=>n}),Be}}),He={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Zt=Object.keys(He);He.all=!0;function We(e){const o={};for(const n of Zt)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?He:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const ea=["INPUT","TEXTAREA"];function je(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&ea.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Pe(e,o,n){const s=Oe(e);let t,l=s.left-o.event.x,i=s.top-o.event.y,a=Math.abs(l),v=Math.abs(i);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=i<0?"up":"down":c.up===!0&&i<0?(t="up",a>v&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&i>0?(t="down",a>v&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",a<v&&(c.up===!0&&i<0?t="up":c.down===!0&&i>0&&(t="down"))):c.right===!0&&l>0&&(t="right",a<v&&(c.up===!0&&i<0?t="up":c.down===!0&&i>0&&(t="down")));let u=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,u=!0,t==="left"||t==="right"?(s.left-=l,a=0,l=0):(s.top-=i,v=0,i=0)}return{synthetic:u,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:s,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:a,y:v},offset:{x:l,y:i},delta:{x:s.left-o.event.lastX,y:s.top-o.event.lastY}}}}let ta=0;const le=Je({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&ee.has.touch!==!0)return;function s(l,i){n.mouse===!0&&i===!0?pt(l):(n.stop===!0&&we(l),n.prevent===!0&&Qe(l))}const t={uid:"qvtp_"+ta++,handler:o,modifiers:n,direction:We(n),noop:Be,mouseStart(l){je(l,t)&&yt(l)&&(ue(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(je(l,t)){const i=l.target;ue(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,i){if(ee.is.firefox===!0&&Se(e,!0),t.lastEvt=l,i===!0||n.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Qe(c),l.cancelBubble===!0&&we(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}we(l)}const{left:a,top:v}=Oe(l);t.event={x:a,y:v,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:v}},move(l){if(t.event===void 0)return;const i=Oe(l),a=i.left-t.event.x,v=i.top-t.event.y;if(a===0&&v===0)return;t.lastEvt=l;const c=t.event.mouse===!0,u=()=>{s(l,c);let b;n.preserveCursor!==!0&&n.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Vt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),c===!0){const O=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{O(),g()},50):O()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(l,t.event.mouse);const{payload:b,synthetic:g}=Pe(l,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=g===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(l);return}const z=Math.abs(a),y=Math.abs(v);z!==y&&(t.direction.horizontal===!0&&z>y||t.direction.vertical===!0&&z<y||t.direction.up===!0&&z<y&&v<0||t.direction.down===!0&&z<y&&v>0||t.direction.left===!0&&z>y&&a<0||t.direction.right===!0&&z>y&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,i){if(t.event!==void 0){if(_e(t,"temp"),ee.is.firefox===!0&&Se(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Pe(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=Pe(l===void 0?t.lastEvt:l,t,!0),v=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ue(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}ee.has.touch===!0&&ue(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=We(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),_e(o,"main"),_e(o,"temp"),ee.is.firefox===!0&&Se(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}}),Ie=["vertical","horizontal"],$e={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ue={prevent:!0,mouse:!0,mouseAllDir:!0},Xe=e=>e>=250?50:Math.ceil(e/5),aa=X({name:"QScrollArea",props:{...at,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:o,emit:n}){const s=q(!1),t=q(!1),l=q(!1),i={vertical:q(0),horizontal:q(0)},a={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:v}=K(),c=lt(e,v.$q);let u=null,z;const y=q(null),b=f(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=f(()=>{const d=a.vertical.size.value-i.vertical.value;if(d<=0)return 0;const m=I(a.vertical.position.value/d,0,1);return Math.round(m*1e4)/1e4}),a.vertical.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&s.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=f(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=f(()=>Math.round(I(i.vertical.value*i.vertical.value/a.vertical.size.value,Xe(i.vertical.value),i.vertical.value))),a.vertical.style=f(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=f(()=>{const d=a.horizontal.size.value-i.horizontal.value;if(d<=0)return 0;const m=I(Math.abs(a.horizontal.position.value)/d,0,1);return Math.round(m*1e4)/1e4}),a.horizontal.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&s.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=f(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=f(()=>Math.round(I(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,Xe(i.horizontal.value),i.horizontal.value))),a.horizontal.style=f(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=f(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),O=[[le,d=>{D(d,"vertical")},void 0,{vertical:!0,...Ue}]],P=[[le,d=>{D(d,"horizontal")},void 0,{horizontal:!0,...Ue}]];function w(){const d={};return Ie.forEach(m=>{const _=a[m];d[m+"Position"]=_.position.value,d[m+"Percentage"]=_.percentage.value,d[m+"Size"]=_.size.value,d[m+"ContainerSize"]=i[m].value}),d}const h=zt(()=>{const d=w();d.ref=v,n("scroll",d)},0);function $(d,m,_){if(Ie.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?Re:xe)(y.value,m,_)}function p({height:d,width:m}){let _=!1;i.vertical.value!==d&&(i.vertical.value=d,_=!0),i.horizontal.value!==m&&(i.horizontal.value=m,_=!0),_===!0&&Q()}function L({position:d}){let m=!1;a.vertical.position.value!==d.top&&(a.vertical.position.value=d.top,m=!0),a.horizontal.position.value!==d.left&&(a.horizontal.position.value=d.left,m=!0),m===!0&&Q()}function M({height:d,width:m}){a.horizontal.size.value!==m&&(a.horizontal.size.value=m,Q()),a.vertical.size.value!==d&&(a.vertical.size.value=d,Q())}function D(d,m){const _=a[m];if(d.isFirst===!0){if(_.thumbHidden.value===!0)return;z=_.position.value,t.value=!0}else if(t.value!==!0)return;d.isFinal===!0&&(t.value=!1);const E=$e[m],Y=i[m].value,me=(_.size.value-Y)/(Y-_.thumbSize.value),be=d.distance[E.dist],ie=z+(d.direction===E.dir?1:-1)*be*me;J(ie,m)}function F(d,m){const _=a[m];if(_.thumbHidden.value!==!0){const E=d[$e[m].offset];if(E<_.thumbStart.value||E>_.thumbStart.value+_.thumbSize.value){const Y=E-_.thumbSize.value/2;J(Y/i[m].value*_.size.value,m)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function R(d){F(d,"vertical")}function A(d){F(d,"horizontal")}function Q(){s.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,s.value=!1},e.delay),e.onScroll!==void 0&&h()}function J(d,m){y.value[$e[m].scroll]=d}function N(){l.value=!0}function Z(){l.value=!1}let U=null;return x(()=>v.$q.lang.rtl,d=>{y.value!==null&&xe(y.value,Math.abs(a.horizontal.position.value)*(d===!0?-1:1))}),St(()=>{U={top:a.vertical.position.value,left:a.horizontal.position.value}}),wt(()=>{if(U===null)return;const d=y.value;d!==null&&(xe(d,U.left),Re(d,U.top))}),G(h.cancel),Object.assign(v,{getScrollTarget:()=>y.value,getScroll:w,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:$,setScrollPercentage(d,m,_){$(d,m*(a[d].size.value-i[d].value)*(d==="horizontal"&&v.$q.lang.rtl===!0?-1:1),_)}}),()=>k("div",{class:b.value,onMouseenter:N,onMouseleave:Z},[k("div",{ref:y,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[k("div",{class:"q-scrollarea__content absolute",style:g.value},Ze(o.default,[k(ne,{debounce:0,onResize:M})])),k(nt,{axis:"both",onScroll:L})]),k(ne,{debounce:0,onResize:p}),k("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:R}),k("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),fe(k("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),O),fe(k("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),P)])}}),Ke=150,la=X({name:"QDrawer",inheritAttrs:!1,props:{...Ut,...at,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Xt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:s}){const t=K(),{proxy:{$q:l}}=t,i=lt(e,l),{preventBodyScroll:a}=Wt(),{registerTimeout:v,removeTimeout:c}=Ft(),u=Ee(he,V);if(u===V)return console.error("QDrawer needs to be child of QLayout"),V;let z,y=null,b;const g=q(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),O=f(()=>e.mini===!0&&g.value!==!0),P=f(()=>O.value===!0?e.miniWidth:e.width),w=q(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),h=f(()=>e.persistent!==!0&&(g.value===!0||Y.value===!0));function $(r,S){if(D(),r!==!1&&u.animate(),H(0),g.value===!0){const B=u.instances[d.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),W(1),u.isContainer.value!==!0&&a(!0)}else W(0),r!==!1&&ye(!1);v(()=>{r!==!1&&ye(!0),S!==!0&&n("show",r)},Ke)}function p(r,S){F(),r!==!1&&u.animate(),W(0),H(Q.value*P.value),pe(),S!==!0?v(()=>{n("hide",r)},Ke):c()}const{show:L,hide:M}=Kt({showing:w,hideOnRouteChange:h,handleShow:$,handleHide:p}),{addToHistory:D,removeFromHistory:F}=Nt(w,M,h),R={belowBreakpoint:g,hide:M},A=f(()=>e.side==="right"),Q=f(()=>(l.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),J=q(0),N=q(!1),Z=q(!1),U=q(P.value*Q.value),d=f(()=>A.value===!0?"left":"right"),m=f(()=>w.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),_=f(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(A.value?"R":"L")>-1||l.platform.is.ios===!0&&u.isContainer.value===!0),E=f(()=>e.overlay===!1&&w.value===!0&&g.value===!1),Y=f(()=>e.overlay===!0&&w.value===!0&&g.value===!1),me=f(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&N.value===!1?" hidden":"")),be=f(()=>({backgroundColor:`rgba(0,0,0,${J.value*.4})`})),ie=f(()=>A.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),it=f(()=>A.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),rt=f(()=>{const r={};return u.header.space===!0&&ie.value===!1&&(_.value===!0?r.top=`${u.header.offset}px`:u.header.space===!0&&(r.top=`${u.header.size}px`)),u.footer.space===!0&&it.value===!1&&(_.value===!0?r.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(r.bottom=`${u.footer.size}px`)),r}),ut=f(()=>{const r={width:`${P.value}px`,transform:`translateX(${U.value}px)`};return g.value===!0?r:Object.assign(r,rt.value)}),st=f(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),ct=f(()=>`q-drawer q-drawer--${e.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${O.value===!0?"mini":"standard"}`+(_.value===!0||E.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ie.value===!0?" q-drawer--top-padding":""))),dt=f(()=>{const r=l.lang.rtl===!0?e.side:d.value;return[[le,mt,void 0,{[r]:!0,mouse:!0}]]}),vt=f(()=>{const r=l.lang.rtl===!0?d.value:e.side;return[[le,Ae,void 0,{[r]:!0,mouse:!0}]]}),ft=f(()=>{const r=l.lang.rtl===!0?d.value:e.side;return[[le,Ae,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ge(){bt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}x(g,r=>{r===!0?(z=w.value,w.value===!0&&M(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(w.value===!0?(H(0),W(0),pe()):L(!1))}),x(()=>e.side,(r,S)=>{u.instances[S]===R&&(u.instances[S]=void 0,u[S].space=!1,u[S].offset=0),u.instances[r]=R,u[r].size=P.value,u[r].space=E.value,u[r].offset=m.value}),x(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&ge()}),x(()=>e.behavior+e.breakpoint,ge),x(u.isContainer,r=>{w.value===!0&&a(r!==!0),r===!0&&ge()}),x(u.scrollbarWidth,()=>{H(w.value===!0?0:void 0)}),x(m,r=>{j("offset",r)}),x(E,r=>{n("onLayout",r),j("space",r)}),x(A,()=>{H()}),x(P,r=>{H(),ze(e.miniToOverlay,r)}),x(()=>e.miniToOverlay,r=>{ze(r,P.value)}),x(()=>l.lang.rtl,()=>{H()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ht(),u.animate())}),x(O,r=>{n("miniState",r)});function H(r){r===void 0?ve(()=>{r=w.value===!0?0:P.value,H(Q.value*r)}):(u.isContainer.value===!0&&A.value===!0&&(g.value===!0||Math.abs(r)===P.value)&&(r+=Q.value*u.scrollbarWidth.value),U.value=r)}function W(r){J.value=r}function ye(r){const S=r===!0?"remove":u.isContainer.value!==!0?"add":"";S!==""&&document.body.classList[S]("q-body--drawer-toggle")}function ht(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,y=setTimeout(()=>{y=null,Z.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(r){if(w.value!==!1)return;const S=P.value,B=I(r.distance.x,0,S);if(r.isFinal===!0){B>=Math.min(75,S)===!0?L():(u.animate(),W(0),H(Q.value*S)),N.value=!1;return}H((l.lang.rtl===!0?A.value!==!0:A.value)?Math.max(S-B,0):Math.min(0,B-S)),W(I(B/S,0,1)),r.isFirst===!0&&(N.value=!0)}function Ae(r){if(w.value!==!0)return;const S=P.value,B=r.direction===e.side,re=(l.lang.rtl===!0?B!==!0:B)?I(r.distance.x,0,S):0;if(r.isFinal===!0){Math.abs(re)<Math.min(75,S)===!0?(u.animate(),W(1),H(0)):M(),N.value=!1;return}H(Q.value*re),W(I(1-re/S,0,1)),r.isFirst===!0&&(N.value=!0)}function pe(){a(!1),ye(!0)}function j(r,S){u.update(e.side,r,S)}function bt(r,S){r.value!==S&&(r.value=S)}function ze(r,S){j("size",r===!0?e.miniWidth:S)}return u.instances[e.side]=R,ze(e.miniToOverlay,P.value),j("space",E.value),j("offset",m.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),oe(()=>{n("onLayout",E.value),n("miniState",O.value),z=e.showIfAbove===!0;const r=()=>{(w.value===!0?$:p)(!1,!0)};if(u.totalWidth.value!==0){ve(r);return}b=x(u.totalWidth,()=>{b(),b=void 0,w.value===!1&&e.showIfAbove===!0&&g.value===!1?L(!1):r()})}),G(()=>{b!==void 0&&b(),y!==null&&(clearTimeout(y),y=null),w.value===!0&&pe(),u.instances[e.side]===R&&(u.instances[e.side]=void 0,j("size",0),j("offset",0),j("space",!1))}),()=>{const r=[];g.value===!0&&(e.noSwipeOpen===!1&&r.push(fe(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),dt.value)),r.push(De("div",{ref:"backdrop",class:me.value,style:be.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>ft.value)));const S=O.value===!0&&o.mini!==void 0,B=[k("div",{...s,key:""+S,class:[st.value,s.class]},S===!0?o.mini():et(o.default))];return e.elevated===!0&&w.value===!0&&B.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(De("aside",{ref:"content",class:ct.value,style:ut.value},B,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>vt.value)),k("div",{class:"q-drawer-container"},r)}}}),oa=X({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=K(),s=Ee(he,V);if(s===V)return console.error("QPageContainer needs to be child of QLayout"),V;tt(_t,!0);const t=f(()=>{const l={};return s.header.space===!0&&(l.paddingTop=`${s.header.size}px`),s.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(l.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),l});return()=>k("div",{class:"q-page-container",style:t.value},et(o.default))}}),na=X({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:s}}=K(),t=q(null),l=q(s.screen.height),i=q(e.container===!0?0:s.screen.width),a=q({position:0,direction:"down",inflectionPoint:0}),v=q(0),c=q(Ge.value===!0?0:Le()),u=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=f(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),y=f(()=>c.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),b=f(()=>c.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function g(p){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};a.value=L,e.onScroll!==void 0&&n("scroll",L)}}function O(p){const{height:L,width:M}=p;let D=!1;l.value!==L&&(D=!0,l.value=L,e.onScrollHeight!==void 0&&n("scrollHeight",L),w()),i.value!==M&&(D=!0,i.value=M),D===!0&&e.onResize!==void 0&&n("resize",p)}function P({height:p}){v.value!==p&&(v.value=p,w())}function w(){if(e.container===!0){const p=l.value>v.value?Le():0;c.value!==p&&(c.value=p)}}let h=null;const $={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:l,containerHeight:v,scrollbarWidth:c,totalWidth:f(()=>i.value+c.value),rows:f(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:se({size:0,offset:0,space:!1}),right:se({size:300,offset:0,space:!1}),footer:se({size:0,offset:0,space:!1}),left:se({size:300,offset:0,space:!1}),scroll:a,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,L,M){$[p][L]=M}};if(tt(he,$),Le()>0){let M=function(){p=null,L.classList.remove("hide-scrollbar")},D=function(){if(p===null){if(L.scrollHeight>s.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(M,300)},F=function(R){p!==null&&R==="remove"&&(clearTimeout(p),M()),window[`${R}EventListener`]("resize",D)},p=null;const L=document.body;x(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),qt(()=>{F("remove")})}return()=>{const p=Ze(o.default,[k(nt,{onScroll:g}),k(ne,{onResize:O})]),L=k("div",{class:u.value,style:z.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(ne,{onResize:P}),k("div",{class:"absolute-full",style:y.value},[k("div",{class:"scroll",style:b.value},[L])])]):L}}});function Ye(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const o=parseInt(e,10);return isNaN(o)?0:o}const ia=Je({name:"close-popup",beforeMount(e,{value:o}){const n={depth:Ye(o),handler(s){n.depth!==0&&setTimeout(()=>{const t=jt(e);t!==void 0&&It(t,s,n.depth)})},handlerKey(s){Ct(s,13)===!0&&n.handler(s)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:o,oldValue:n}){o!==n&&(e.__qclosepopup.depth=Ye(o))},beforeUnmount(e){const o=e.__qclosepopup;e.removeEventListener("click",o.handler),e.removeEventListener("keyup",o.handlerKey),delete e.__qclosepopup}}),ma={__name:"MainLayout",setup(e){const o=Tt(),n=kt(),s=xt(),t=Lt(),l=[{to:"/",icon:"pending_actions",label:"Plan"},{to:"/goals",icon:"task_alt",label:"Goals"},{to:"/tasks",icon:"done",label:"Tasks"}],i=q(!1);function a(){t.logout(),o.push({name:"login",query:{next:n.fullPath}}),s._s.forEach(v=>{v.$dispose(),delete s.state.value[v.$id]}),localStorage.clear()}return(v,c)=>{const u=Pt("router-view");return ce(),qe(na,{view:"hhh LpR fff"},{default:C(()=>[T(Gt,{reveal:""},{default:C(()=>[T(Ht,null,{default:C(()=>[T(Ce,{flat:"",round:"",icon:"menu",onClick:c[0]||(c[0]=z=>i.value=!i.value)}),T(At,null,{default:C(()=>[te("LifeTrackerBuddy")]),_:1}),T(Ce,{flat:"",round:"",icon:"add"},{default:C(()=>[T(Ve,{"auto-close":""},{default:C(()=>[T(Te,null,{default:C(()=>[T(de,{to:{name:"task",params:{id:"new"}}},{default:C(()=>[T(ae,null,{default:C(()=>[T(ke,null,{default:C(()=>[te("New task")]),_:1})]),_:1})]),_:1}),T(de,{to:{name:"goal",params:{id:"new"}}},{default:C(()=>[T(ae,null,{default:C(()=>[T(ke,null,{default:C(()=>[te("New goal")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),T(Ce,{flat:"",round:"",icon:"person_outline"},{default:C(()=>[T(Ve,null,{default:C(()=>[T(Te,null,{default:C(()=>[fe((ce(),qe(de,{clickable:"",onClick:a},{default:C(()=>[T(ae,null,{default:C(()=>[T(ke,null,{default:C(()=>[te("Logout")]),_:1})]),_:1})]),_:1})),[[ia]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),T(la,{modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=z=>i.value=z),"show-if-above":""},{default:C(()=>[T(aa,{class:"fit"},{default:C(()=>[T(Te,{class:"q-mt-md"},{default:C(()=>[(ce(),$t(Ot,null,Mt(l,(z,y)=>T(de,{key:y,to:z.to,exact:""},{default:C(()=>[T(ae,{avatar:""},{default:C(()=>[T(Bt,{name:z.icon},null,8,["name"])]),_:2},1024),T(ae,null,{default:C(()=>[te(Et(z.label),1)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1})]),_:1})]),_:1},8,["modelValue"]),T(oa,null,{default:C(()=>[(ce(),qe(u,{key:v.$route.path}))]),_:1})]),_:1})}}};export{ma as default};

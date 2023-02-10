import{r as q,i as Ge,o as oe,c as X,a as G,n as Be,b as ve,h as k,g as K,l as Oe,d as Ee,e as V,f,w as x,j as gt,k as he,m as yt,p as pt,q as zt,s as Je,t as ee,u as St,v as ue,x as Se,y as De,z as we,A as Me,B as _e,C as wt,D as Ze,E as et,F as _t,G as qt,H as Ct,I as tt,J as fe,K as qe,L as Ae,M as Tt,N as kt,O as xt,P as Pt,Q as Lt,R as Re,S as at,T as $t,U as lt,V as Ot,W as Ce,X as se,Y as Mt,Z as Bt,_ as Et,$ as Ht,a0 as Qt,a1 as Te,a2 as C,a3 as Dt,a4 as At,a5 as Rt,a6 as Vt,a7 as ce,a8 as T,a9 as ke,aa as te,ab as Ft,ac as Nt,ad as Wt,ae as jt,af as It}from"./index-09be7c6a.js";import{Q as Ut,a as Xt}from"./QToolbar-31644b32.js";import{Q as xe}from"./QItemLabel-5285cf7b.js";import{Q as de,a as ae}from"./QItem-a03fe2cf.js";import{Q as Pe}from"./QList-a7e74de4.js";import{c as Kt,Q as Ve}from"./QMenu-a7721c75.js";import{b as I}from"./format-ff5bcb16.js";function Yt(){const e=q(!Ge.value);return e.value===!1&&oe(()=>{e.value=!0}),e}const ot=typeof ResizeObserver<"u",Fe=ot===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},ne=X({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,s,t={width:-1,height:-1};function l(v){v===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(n!==null&&(clearTimeout(n),n=null),s){const{offsetWidth:v,offsetHeight:c}=s;(v!==t.width||c!==t.height)&&(t={width:v,height:c},o("resize",t))}}const{proxy:a}=K();if(ot===!0){let v;const c=u=>{s=a.$el.parentNode,s?(v=new ResizeObserver(l),v.observe(s),i()):u!==!0&&ve(()=>{c(!0)})};return oe(()=>{c()}),G(()=>{n!==null&&clearTimeout(n),v!==void 0&&(v.disconnect!==void 0?v.disconnect():s&&v.unobserve(s))}),Be}else{let u=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,Oe.passive),c=void 0)},_=function(){u(),s&&s.contentDocument&&(c=s.contentDocument.defaultView,c.addEventListener("resize",l,Oe.passive),i())};const v=Yt();let c;return oe(()=>{ve(()=>{s=a.$el,s&&_()})}),G(u),a.trigger=l,()=>{if(v.value===!0)return k("object",{style:Fe.style,tabindex:-1,type:"text/html",data:Fe.url,"aria-hidden":"true",onLoad:_})}}}}),Gt=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:s}}=K(),t=Ee(he,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const l=q(parseInt(e.heightHint,10)),i=q(!0),a=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||s.platform.is.ios&&t.isContainer.value===!0),v=f(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return i.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),c=f(()=>e.modelValue!==!0||a.value===!0&&i.value!==!0),u=f(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),_=f(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=f(()=>{const h=t.rows.value.top,$={};return h[0]==="l"&&t.left.space===!0&&($[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&($[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),$});function m(h,$){t.update("header",h,$)}function y(h,$){h.value!==$&&(h.value=$)}function M({height:h}){y(l,h),m("size",h)}function L(h){u.value===!0&&y(i,!0),n("focusin",h)}x(()=>e.modelValue,h=>{m("space",h),y(i,!0),t.animate()}),x(v,h=>{m("offset",h)}),x(()=>e.reveal,h=>{h===!1&&y(i,e.modelValue)}),x(i,h=>{t.animate(),n("reveal",h)}),x(t.scroll,h=>{e.reveal===!0&&y(i,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const S={};return t.instances.header=S,e.modelValue===!0&&m("size",l.value),m("space",e.modelValue),m("offset",v.value),G(()=>{t.instances.header===S&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const h=gt(o.default,[]);return e.elevated===!0&&h.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(k(ne,{debounce:0,onResize:M})),k("header",{class:_.value,style:g.value,onFocusin:L},h)}}}),{passive:Ne}=Oe,Jt=["both","horizontal","vertical"],nt=X({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,t,l;x(()=>e.scrollTarget,()=>{v(),a()});function i(){s!==null&&s();const _=Math.max(0,pt(t)),g=zt(t),m={top:_-n.position.top,left:g-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const y=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:_,left:g},n.directionChanged=n.direction!==y,n.delta=m,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),o("scroll",{...n})}function a(){t=yt(l,e.scrollTarget),t.addEventListener("scroll",c,Ne),c(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",c,Ne),t=void 0)}function c(_){if(_===!0||e.debounce===0||e.debounce==="0")i();else if(s===null){const[g,m]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];s=()=>{m(g),s=null}}}const{proxy:u}=K();return x(()=>u.$q.lang.rtl,i),oe(()=>{l=u.$el.parentNode,a()}),G(()=>{s!==null&&s(),v()}),Object.assign(u,{trigger:c,getPosition:()=>n}),Be}}),He={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Zt=Object.keys(He);He.all=!0;function We(e){const o={};for(const n of Zt)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?He:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function je(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Le(e,o,n){const s=Me(e);let t,l=s.left-o.event.x,i=s.top-o.event.y,a=Math.abs(l),v=Math.abs(i);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=i<0?"up":"down":c.up===!0&&i<0?(t="up",a>v&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&i>0?(t="down",a>v&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",a<v&&(c.up===!0&&i<0?t="up":c.down===!0&&i>0&&(t="down"))):c.right===!0&&l>0&&(t="right",a<v&&(c.up===!0&&i<0?t="up":c.down===!0&&i>0&&(t="down")));let u=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,u=!0,t==="left"||t==="right"?(s.left-=l,a=0,l=0):(s.top-=i,v=0,i=0)}return{synthetic:u,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:s,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:a,y:v},offset:{x:l,y:i},delta:{x:s.left-o.event.lastX,y:s.top-o.event.lastY}}}}let ea=0;const le=Je({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&ee.has.touch!==!0)return;function s(l,i){n.mouse===!0&&i===!0?wt(l):(n.stop===!0&&we(l),n.prevent===!0&&De(l))}const t={uid:"qvtp_"+ea++,handler:o,modifiers:n,direction:We(n),noop:Be,mouseStart(l){je(l,t)&&St(l)&&(ue(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(je(l,t)){const i=l.target;ue(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,i){if(ee.is.firefox===!0&&Se(e,!0),t.lastEvt=l,i===!0||n.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&De(c),l.cancelBubble===!0&&we(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}we(l)}const{left:a,top:v}=Me(l);t.event={x:a,y:v,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:v}},move(l){if(t.event===void 0)return;const i=Me(l),a=i.left-t.event.x,v=i.top-t.event.y;if(a===0&&v===0)return;t.lastEvt=l;const c=t.event.mouse===!0,u=()=>{s(l,c);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Kt(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const M=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{M(),y()},50):M()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(l,t.event.mouse);const{payload:m,synthetic:y}=Le(l,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=y===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(l);return}const _=Math.abs(a),g=Math.abs(v);_!==g&&(t.direction.horizontal===!0&&_>g||t.direction.vertical===!0&&_<g||t.direction.up===!0&&_<g&&v<0||t.direction.down===!0&&_<g&&v>0||t.direction.left===!0&&_>g&&a<0||t.direction.right===!0&&_>g&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,i){if(t.event!==void 0){if(_e(t,"temp"),ee.is.firefox===!0&&Se(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=Le(l===void 0?t.lastEvt:l,t,!0),v=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ue(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}ee.has.touch===!0&&ue(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=We(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),_e(o,"main"),_e(o,"temp"),ee.is.firefox===!0&&Se(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}}),Ie=["vertical","horizontal"],$e={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ue={prevent:!0,mouse:!0,mouseAllDir:!0},Xe=e=>e>=250?50:Math.ceil(e/5),ta=X({name:"QScrollArea",props:{...Ze,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:o,emit:n}){const s=q(!1),t=q(!1),l=q(!1),i={vertical:q(0),horizontal:q(0)},a={vertical:{ref:q(null),position:q(0),size:q(0)},horizontal:{ref:q(null),position:q(0),size:q(0)}},{proxy:v}=K(),c=et(e,v.$q);let u=null,_;const g=q(null),m=f(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=f(()=>{const d=a.vertical.size.value-i.vertical.value;if(d<=0)return 0;const b=I(a.vertical.position.value/d,0,1);return Math.round(b*1e4)/1e4}),a.vertical.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&s.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=f(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=f(()=>Math.round(I(i.vertical.value*i.vertical.value/a.vertical.size.value,Xe(i.vertical.value),i.vertical.value))),a.vertical.style=f(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=f(()=>{const d=a.horizontal.size.value-i.horizontal.value;if(d<=0)return 0;const b=I(Math.abs(a.horizontal.position.value)/d,0,1);return Math.round(b*1e4)/1e4}),a.horizontal.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&s.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=f(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=f(()=>Math.round(I(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,Xe(i.horizontal.value),i.horizontal.value))),a.horizontal.style=f(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=f(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),M=[[le,d=>{A(d,"vertical")},void 0,{vertical:!0,...Ue}]],L=[[le,d=>{A(d,"horizontal")},void 0,{horizontal:!0,...Ue}]];function S(){const d={};return Ie.forEach(b=>{const w=a[b];d[b+"Position"]=w.position.value,d[b+"Percentage"]=w.percentage.value,d[b+"Size"]=w.size.value,d[b+"ContainerSize"]=i[b].value}),d}const h=_t(()=>{const d=S();d.ref=v,n("scroll",d)},0);function $(d,b,w){if(Ie.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?Ae:qe)(g.value,b,w)}function p({height:d,width:b}){let w=!1;i.vertical.value!==d&&(i.vertical.value=d,w=!0),i.horizontal.value!==b&&(i.horizontal.value=b,w=!0),w===!0&&D()}function P({position:d}){let b=!1;a.vertical.position.value!==d.top&&(a.vertical.position.value=d.top,b=!0),a.horizontal.position.value!==d.left&&(a.horizontal.position.value=d.left,b=!0),b===!0&&D()}function O({height:d,width:b}){a.horizontal.size.value!==b&&(a.horizontal.size.value=b,D()),a.vertical.size.value!==d&&(a.vertical.size.value=d,D())}function A(d,b){const w=a[b];if(d.isFirst===!0){if(w.thumbHidden.value===!0)return;_=w.position.value,t.value=!0}else if(t.value!==!0)return;d.isFinal===!0&&(t.value=!1);const E=$e[b],Y=i[b].value,me=(w.size.value-Y)/(Y-w.thumbSize.value),be=d.distance[E.dist],ie=_+(d.direction===E.dir?1:-1)*be*me;J(ie,b)}function F(d,b){const w=a[b];if(w.thumbHidden.value!==!0){const E=d[$e[b].offset];if(E<w.thumbStart.value||E>w.thumbStart.value+w.thumbSize.value){const Y=E-w.thumbSize.value/2;J(Y/i[b].value*w.size.value,b)}w.ref.value!==null&&w.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function R(d){F(d,"vertical")}function Q(d){F(d,"horizontal")}function D(){s.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,s.value=!1},e.delay),e.onScroll!==void 0&&h()}function J(d,b){g.value[$e[b].scroll]=d}function N(){l.value=!0}function Z(){l.value=!1}let U=null;return x(()=>v.$q.lang.rtl,d=>{g.value!==null&&qe(g.value,Math.abs(a.horizontal.position.value)*(d===!0?-1:1))}),qt(()=>{U={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ct(()=>{if(U===null)return;const d=g.value;d!==null&&(qe(d,U.left),Ae(d,U.top))}),G(h.cancel),Object.assign(v,{getScrollTarget:()=>g.value,getScroll:S,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:$,setScrollPercentage(d,b,w){$(d,b*(a[d].size.value-i[d].value)*(d==="horizontal"&&v.$q.lang.rtl===!0?-1:1),w)}}),()=>k("div",{class:m.value,onMouseenter:N,onMouseleave:Z},[k("div",{ref:g,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[k("div",{class:"q-scrollarea__content absolute",style:y.value},tt(o.default,[k(ne,{debounce:0,onResize:O})])),k(nt,{axis:"both",onScroll:P})]),k(ne,{debounce:0,onResize:p}),k("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:R}),k("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:Q}),fe(k("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),M),fe(k("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),L)])}}),Ke=150,aa=X({name:"QDrawer",inheritAttrs:!1,props:{...Tt,...Ze,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...kt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:s}){const t=K(),{proxy:{$q:l}}=t,i=et(e,l),{preventBodyScroll:a}=$t(),{registerTimeout:v,removeTimeout:c}=xt(),u=Ee(he,V);if(u===V)return console.error("QDrawer needs to be child of QLayout"),V;let _,g=null,m;const y=q(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),M=f(()=>e.mini===!0&&y.value!==!0),L=f(()=>M.value===!0?e.miniWidth:e.width),S=q(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),h=f(()=>e.persistent!==!0&&(y.value===!0||Y.value===!0));function $(r,z){if(A(),r!==!1&&u.animate(),H(0),y.value===!0){const B=u.instances[d.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),W(1),u.isContainer.value!==!0&&a(!0)}else W(0),r!==!1&&ye(!1);v(()=>{r!==!1&&ye(!0),z!==!0&&n("show",r)},Ke)}function p(r,z){F(),r!==!1&&u.animate(),W(0),H(D.value*L.value),pe(),z!==!0?v(()=>{n("hide",r)},Ke):c()}const{show:P,hide:O}=Pt({showing:S,hideOnRouteChange:h,handleShow:$,handleHide:p}),{addToHistory:A,removeFromHistory:F}=Lt(S,O,h),R={belowBreakpoint:y,hide:O},Q=f(()=>e.side==="right"),D=f(()=>(l.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),J=q(0),N=q(!1),Z=q(!1),U=q(L.value*D.value),d=f(()=>Q.value===!0?"left":"right"),b=f(()=>S.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),w=f(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(Q.value?"R":"L")>-1||l.platform.is.ios===!0&&u.isContainer.value===!0),E=f(()=>e.overlay===!1&&S.value===!0&&y.value===!1),Y=f(()=>e.overlay===!0&&S.value===!0&&y.value===!1),me=f(()=>"fullscreen q-drawer__backdrop"+(S.value===!1&&N.value===!1?" hidden":"")),be=f(()=>({backgroundColor:`rgba(0,0,0,${J.value*.4})`})),ie=f(()=>Q.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),it=f(()=>Q.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),rt=f(()=>{const r={};return u.header.space===!0&&ie.value===!1&&(w.value===!0?r.top=`${u.header.offset}px`:u.header.space===!0&&(r.top=`${u.header.size}px`)),u.footer.space===!0&&it.value===!1&&(w.value===!0?r.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(r.bottom=`${u.footer.size}px`)),r}),ut=f(()=>{const r={width:`${L.value}px`,transform:`translateX(${U.value}px)`};return y.value===!0?r:Object.assign(r,rt.value)}),st=f(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),ct=f(()=>`q-drawer q-drawer--${e.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":S.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${M.value===!0?"mini":"standard"}`+(w.value===!0||E.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ie.value===!0?" q-drawer--top-padding":""))),dt=f(()=>{const r=l.lang.rtl===!0?e.side:d.value;return[[le,mt,void 0,{[r]:!0,mouse:!0}]]}),vt=f(()=>{const r=l.lang.rtl===!0?d.value:e.side;return[[le,Qe,void 0,{[r]:!0,mouse:!0}]]}),ft=f(()=>{const r=l.lang.rtl===!0?d.value:e.side;return[[le,Qe,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ge(){bt(y,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}x(y,r=>{r===!0?(_=S.value,S.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&_!==!1&&(S.value===!0?(H(0),W(0),pe()):P(!1))}),x(()=>e.side,(r,z)=>{u.instances[z]===R&&(u.instances[z]=void 0,u[z].space=!1,u[z].offset=0),u.instances[r]=R,u[r].size=L.value,u[r].space=E.value,u[r].offset=b.value}),x(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&ge()}),x(()=>e.behavior+e.breakpoint,ge),x(u.isContainer,r=>{S.value===!0&&a(r!==!0),r===!0&&ge()}),x(u.scrollbarWidth,()=>{H(S.value===!0?0:void 0)}),x(b,r=>{j("offset",r)}),x(E,r=>{n("onLayout",r),j("space",r)}),x(Q,()=>{H()}),x(L,r=>{H(),ze(e.miniToOverlay,r)}),x(()=>e.miniToOverlay,r=>{ze(r,L.value)}),x(()=>l.lang.rtl,()=>{H()}),x(()=>e.mini,()=>{e.modelValue===!0&&(ht(),u.animate())}),x(M,r=>{n("miniState",r)});function H(r){r===void 0?ve(()=>{r=S.value===!0?0:L.value,H(D.value*r)}):(u.isContainer.value===!0&&Q.value===!0&&(y.value===!0||Math.abs(r)===L.value)&&(r+=D.value*u.scrollbarWidth.value),U.value=r)}function W(r){J.value=r}function ye(r){const z=r===!0?"remove":u.isContainer.value!==!0?"add":"";z!==""&&document.body.classList[z]("q-body--drawer-toggle")}function ht(){g!==null&&clearTimeout(g),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,g=setTimeout(()=>{g=null,Z.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(r){if(S.value!==!1)return;const z=L.value,B=I(r.distance.x,0,z);if(r.isFinal===!0){B>=Math.min(75,z)===!0?P():(u.animate(),W(0),H(D.value*z)),N.value=!1;return}H((l.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(z-B,0):Math.min(0,B-z)),W(I(B/z,0,1)),r.isFirst===!0&&(N.value=!0)}function Qe(r){if(S.value!==!0)return;const z=L.value,B=r.direction===e.side,re=(l.lang.rtl===!0?B!==!0:B)?I(r.distance.x,0,z):0;if(r.isFinal===!0){Math.abs(re)<Math.min(75,z)===!0?(u.animate(),W(1),H(0)):O(),N.value=!1;return}H(D.value*re),W(I(1-re/z,0,1)),r.isFirst===!0&&(N.value=!0)}function pe(){a(!1),ye(!0)}function j(r,z){u.update(e.side,r,z)}function bt(r,z){r.value!==z&&(r.value=z)}function ze(r,z){j("size",r===!0?e.miniWidth:z)}return u.instances[e.side]=R,ze(e.miniToOverlay,L.value),j("space",E.value),j("offset",b.value),e.showIfAbove===!0&&e.modelValue!==!0&&S.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),oe(()=>{n("onLayout",E.value),n("miniState",M.value),_=e.showIfAbove===!0;const r=()=>{(S.value===!0?$:p)(!1,!0)};if(u.totalWidth.value!==0){ve(r);return}m=x(u.totalWidth,()=>{m(),m=void 0,S.value===!1&&e.showIfAbove===!0&&y.value===!1?P(!1):r()})}),G(()=>{m!==void 0&&m(),g!==null&&(clearTimeout(g),g=null),S.value===!0&&pe(),u.instances[e.side]===R&&(u.instances[e.side]=void 0,j("size",0),j("offset",0),j("space",!1))}),()=>{const r=[];y.value===!0&&(e.noSwipeOpen===!1&&r.push(fe(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),dt.value)),r.push(Re("div",{ref:"backdrop",class:me.value,style:be.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&S.value===!0,()=>ft.value)));const z=M.value===!0&&o.mini!==void 0,B=[k("div",{...s,key:""+z,class:[st.value,s.class]},z===!0?o.mini():at(o.default))];return e.elevated===!0&&S.value===!0&&B.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Re("aside",{ref:"content",class:ct.value,style:ut.value},B,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>vt.value)),k("div",{class:"q-drawer-container"},r)}}}),la=X({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=K(),s=Ee(he,V);if(s===V)return console.error("QPageContainer needs to be child of QLayout"),V;lt(Ot,!0);const t=f(()=>{const l={};return s.header.space===!0&&(l.paddingTop=`${s.header.size}px`),s.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(l.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),l});return()=>k("div",{class:"q-page-container",style:t.value},at(o.default))}}),oa=X({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:s}}=K(),t=q(null),l=q(s.screen.height),i=q(e.container===!0?0:s.screen.width),a=q({position:0,direction:"down",inflectionPoint:0}),v=q(0),c=q(Ge.value===!0?0:Ce()),u=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),_=f(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),g=f(()=>c.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=f(()=>c.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function y(p){if(e.container===!0||document.qScrollPrevented!==!0){const P={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};a.value=P,e.onScroll!==void 0&&n("scroll",P)}}function M(p){const{height:P,width:O}=p;let A=!1;l.value!==P&&(A=!0,l.value=P,e.onScrollHeight!==void 0&&n("scrollHeight",P),S()),i.value!==O&&(A=!0,i.value=O),A===!0&&e.onResize!==void 0&&n("resize",p)}function L({height:p}){v.value!==p&&(v.value=p,S())}function S(){if(e.container===!0){const p=l.value>v.value?Ce():0;c.value!==p&&(c.value=p)}}let h=null;const $={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:l,containerHeight:v,scrollbarWidth:c,totalWidth:f(()=>i.value+c.value),rows:f(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:se({size:0,offset:0,space:!1}),right:se({size:300,offset:0,space:!1}),footer:se({size:0,offset:0,space:!1}),left:se({size:300,offset:0,space:!1}),scroll:a,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,P,O){$[p][P]=O}};if(lt(he,$),Ce()>0){let O=function(){p=null,P.classList.remove("hide-scrollbar")},A=function(){if(p===null){if(P.scrollHeight>s.screen.height)return;P.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(O,300)},F=function(R){p!==null&&R==="remove"&&(clearTimeout(p),O()),window[`${R}EventListener`]("resize",A)},p=null;const P=document.body;x(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),Mt(()=>{F("remove")})}return()=>{const p=tt(o.default,[k(nt,{onScroll:y}),k(ne,{onResize:M})]),P=k("div",{class:u.value,style:_.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(ne,{onResize:L}),k("div",{class:"absolute-full",style:g.value},[k("div",{class:"scroll",style:m.value},[P])])]):P}}});function Ye(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const o=parseInt(e,10);return isNaN(o)?0:o}const na=Je({name:"close-popup",beforeMount(e,{value:o}){const n={depth:Ye(o),handler(s){n.depth!==0&&setTimeout(()=>{const t=Bt(e);t!==void 0&&Et(t,s,n.depth)})},handlerKey(s){Ht(s,13)===!0&&n.handler(s)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:o,oldValue:n}){o!==n&&(e.__qclosepopup.depth=Ye(o))},beforeUnmount(e){const o=e.__qclosepopup;e.removeEventListener("click",o.handler),e.removeEventListener("keyup",o.handlerKey),delete e.__qclosepopup}}),ha={__name:"MainLayout",setup(e){const o=Dt(),n=At(),s=Rt(),t=Qt(),l=[{to:"/",icon:"pending_actions",label:"Plan"},{to:"/goals",icon:"task_alt",label:"Goals"},{to:"/tasks",icon:"done",label:"Tasks"},{to:"/times",icon:"schedule",label:"Times"}],i=q(!1);function a(){i.value=!i.value}function v(){t.logout(),o.push({name:"login",query:{next:n.fullPath}}),s._s.forEach(c=>{c.$dispose(),delete s.state.value[c.$id]})}return(c,u)=>{const _=Vt("router-view");return ce(),Te(oa,{view:"hHh LpR fff"},{default:C(()=>[T(Gt,null,{default:C(()=>[T(Ut,null,{default:C(()=>[T(ke,{flat:"",round:"",icon:"menu",onClick:a}),T(Xt,null,{default:C(()=>[te("LifeTrackerBuddy")]),_:1}),T(ke,{flat:"",round:"",icon:"add"},{default:C(()=>[T(Ve,{"auto-close":""},{default:C(()=>[T(Pe,null,{default:C(()=>[T(de,{to:{name:"goal",params:{id:"new"}}},{default:C(()=>[T(ae,null,{default:C(()=>[T(xe,null,{default:C(()=>[te("New goal")]),_:1})]),_:1})]),_:1}),T(de,{to:{name:"task",params:{id:"new"}}},{default:C(()=>[T(ae,null,{default:C(()=>[T(xe,null,{default:C(()=>[te("New task")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),T(ke,{flat:"",round:"",icon:"person_outline"},{default:C(()=>[T(Ve,null,{default:C(()=>[T(Pe,null,{default:C(()=>[fe((ce(),Te(de,{clickable:"",onClick:v},{default:C(()=>[T(ae,null,{default:C(()=>[T(xe,null,{default:C(()=>[te("Logout")]),_:1})]),_:1})]),_:1})),[[na]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),T(aa,{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=g=>i.value=g),"show-if-above":""},{default:C(()=>[T(ta,{class:"fit q-pa-sm"},{default:C(()=>[T(Pe,{padding:""},{default:C(()=>[(ce(),Ft(Wt,null,Nt(l,(g,m)=>T(de,{key:m,to:g.to,exact:""},{default:C(()=>[T(ae,{avatar:""},{default:C(()=>[T(jt,{name:g.icon},null,8,["name"])]),_:2},1024),T(ae,null,{default:C(()=>[te(It(g.label),1)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1})]),_:1})]),_:1},8,["modelValue"]),T(la,null,{default:C(()=>[(ce(),Te(_,{key:c.$route.path}))]),_:1})]),_:1})}}};export{ha as default};

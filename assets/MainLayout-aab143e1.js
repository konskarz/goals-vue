import{r as T,i as ft,o as ce,c as ee,g as te,a as ie,n as De,b as pe,h as p,l as Ie,e as Y,d as v,w as k,f as Ht,j as Ae,k as _e,m as He,p as vt,q as Qt,s as Rt,t as Vt,u as Nt,v as ke,x as ge,y as jt,z as ht,A as mt,B as Ft,C as Wt,D as Yt,E as ue,F as Ut,G as be,H as Le,I as Ke,J as $e,K as Ee,L as Oe,M as gt,N as Qe,O as Re,P as Kt,Q as Gt,R as Xt,S as de,T as Ge,U as Pe,V as bt,W as yt,X as Jt,Y as pt,Z as Zt,_ as Xe,$ as ea,a0 as ta,a1 as St,a2 as Je,a3 as Ze,a4 as aa,a5 as et,a6 as I,a7 as H,a8 as b,a9 as z,aa as F,ab as Se,ac as oe,ad as _t,ae as Ve,af as Ne,ag as je,ah as wt,ai as la,aj as na,ak as ye,al as oa,am as ia}from"./index-41a9566c.js";import{Q as Fe,a as We}from"./QToolbar-b14363bf.js";import{Q as re,a as U,b as Z,c as fe,d as ra}from"./QIntersection-74d4edf5.js";import{c as ua,Q as sa,u as ca,a as tt}from"./QSlideTransition-e2c1f438.js";import{b as J,d as zt,u as da}from"./TaskStore-92ad74c0.js";function fa(){const e=T(!ft.value);return e.value===!1&&ce(()=>{e.value=!0}),e}const qt=typeof ResizeObserver<"u",at=qt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},ve=ee({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,r,t={width:-1,height:-1};function a(h){h===!0||e.debounce===0||e.debounce==="0"?i():o===null&&(o=setTimeout(i,e.debounce))}function i(){if(o!==null&&(clearTimeout(o),o=null),r){const{offsetWidth:h,offsetHeight:d}=r;(h!==t.width||d!==t.height)&&(t={width:h,height:d},n("resize",t))}}const{proxy:l}=te();if(qt===!0){let h;const d=u=>{r=l.$el.parentNode,r?(h=new ResizeObserver(a),h.observe(r),i()):u!==!0&&pe(()=>{d(!0)})};return ce(()=>{d()}),ie(()=>{o!==null&&clearTimeout(o),h!==void 0&&(h.disconnect!==void 0?h.disconnect():r&&h.unobserve(r))}),De}else{let u=function(){o!==null&&(clearTimeout(o),o=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",a,Ie.passive),d=void 0)},S=function(){u(),r&&r.contentDocument&&(d=r.contentDocument.defaultView,d.addEventListener("resize",a,Ie.passive),i())};const h=fa();let d;return ce(()=>{pe(()=>{r=l.$el,r&&S()})}),ie(u),l.trigger=a,()=>{if(h.value===!0)return p("object",{style:at.style,tabindex:-1,type:"text/html",data:at.url,"aria-hidden":"true",onLoad:S})}}}}),va=ee({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:o}){const{proxy:{$q:r}}=te(),t=Ae(_e,Y);if(t===Y)return console.error("QHeader needs to be child of QLayout"),Y;const a=T(parseInt(e.heightHint,10)),i=T(!0),l=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),h=v(()=>{if(e.modelValue!==!0)return 0;if(l.value===!0)return i.value===!0?a.value:0;const g=a.value-t.scroll.value.position;return g>0?g:0}),d=v(()=>e.modelValue!==!0||l.value===!0&&i.value!==!0),u=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),S=v(()=>"q-header q-layout__section--marginal "+(l.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=v(()=>{const g=t.rows.value.top,P={};return g[0]==="l"&&t.left.space===!0&&(P[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),g[2]==="r"&&t.right.space===!0&&(P[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),P});function m(g,P){t.update("header",g,P)}function w(g,P){g.value!==P&&(g.value=P)}function O({height:g}){w(a,g),m("size",g)}function $(g){u.value===!0&&w(i,!0),o("focusin",g)}k(()=>e.modelValue,g=>{m("space",g),w(i,!0),t.animate()}),k(h,g=>{m("offset",g)}),k(()=>e.reveal,g=>{g===!1&&w(i,e.modelValue)}),k(i,g=>{t.animate(),o("reveal",g)}),k(t.scroll,g=>{e.reveal===!0&&w(i,g.direction==="up"||g.position<=e.revealOffset||g.position-g.inflectionPoint<100)});const C={};return t.instances.header=C,e.modelValue===!0&&m("size",a.value),m("space",e.modelValue),m("offset",h.value),ie(()=>{t.instances.header===C&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const g=Ht(n.default,[]);return e.elevated===!0&&g.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g.push(p(ve,{debounce:0,onResize:O})),p("header",{class:S.value,style:y.value,onFocusin:$},g)}}}),ha=ee({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=te(),r=Ae(_e,Y);if(r===Y)return console.error("QPageContainer needs to be child of QLayout"),Y;vt(Qt,!0);const t=v(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>p("div",{class:"q-page-container",style:t.value},He(n.default))}}),{passive:lt}=Ie,ma=["both","horizontal","vertical"],xt=ee({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ma.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;k(()=>e.scrollTarget,()=>{h(),l()});function i(){r!==null&&r();const S=Math.max(0,Vt(t)),y=Nt(t),m={top:S-o.position.top,left:y-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const w=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:S,left:y},o.directionChanged=o.direction!==w,o.delta=m,o.directionChanged===!0&&(o.direction=w,o.inflectionPoint=o.position),n("scroll",{...o})}function l(){t=Rt(a,e.scrollTarget),t.addEventListener("scroll",d,lt),d(!0)}function h(){t!==void 0&&(t.removeEventListener("scroll",d,lt),t=void 0)}function d(S){if(S===!0||e.debounce===0||e.debounce==="0")i();else if(r===null){const[y,m]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];r=()=>{m(y),r=null}}}const{proxy:u}=te();return k(()=>u.$q.lang.rtl,i),ce(()=>{a=u.$el.parentNode,l()}),ie(()=>{r!==null&&r(),h()}),Object.assign(u,{trigger:d,getPosition:()=>o}),De}}),ga=ee({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:r}}=te(),t=T(null),a=T(r.screen.height),i=T(e.container===!0?0:r.screen.width),l=T({position:0,direction:"down",inflectionPoint:0}),h=T(0),d=T(ft.value===!0?0:ke()),u=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),S=v(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),y=v(()=>d.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=v(()=>d.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function w(q){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:q.position.top,direction:q.direction,directionChanged:q.directionChanged,inflectionPoint:q.inflectionPoint.top,delta:q.delta.top};l.value=L,e.onScroll!==void 0&&o("scroll",L)}}function O(q){const{height:L,width:B}=q;let Q=!1;a.value!==L&&(Q=!0,a.value=L,e.onScrollHeight!==void 0&&o("scrollHeight",L),C()),i.value!==B&&(Q=!0,i.value=B),Q===!0&&e.onResize!==void 0&&o("resize",q)}function $({height:q}){h.value!==q&&(h.value=q,C())}function C(){if(e.container===!0){const q=a.value>h.value?ke():0;d.value!==q&&(d.value=q)}}let g=null;const P={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:a,containerHeight:h,scrollbarWidth:d,totalWidth:v(()=>i.value+d.value),rows:v(()=>{const q=e.view.toLowerCase().split(" ");return{top:q[0].split(""),middle:q[1].split(""),bottom:q[2].split("")}}),header:ge({size:0,offset:0,space:!1}),right:ge({size:300,offset:0,space:!1}),footer:ge({size:0,offset:0,space:!1}),left:ge({size:300,offset:0,space:!1}),scroll:l,animate(){g!==null?clearTimeout(g):document.body.classList.add("q-body--layout-animate"),g=setTimeout(()=>{g=null,document.body.classList.remove("q-body--layout-animate")},155)},update(q,L,B){P[q][L]=B}};if(vt(_e,P),ke()>0){let B=function(){q=null,L.classList.remove("hide-scrollbar")},Q=function(){if(q===null){if(L.scrollHeight>r.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(q);q=setTimeout(B,300)},V=function(N){q!==null&&N==="remove"&&(clearTimeout(q),B()),window[`${N}EventListener`]("resize",Q)},q=null;const L=document.body;k(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),jt(()=>{V("remove")})}return()=>{const q=ht(n.default,[p(xt,{onScroll:w}),p(ve,{onResize:O})]),L=p("div",{class:u.value,style:S.value,ref:e.container===!0?void 0:t,tabindex:-1},q);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:t},[p(ve,{onResize:$}),p("div",{class:"absolute-full",style:y.value},[p("div",{class:"scroll",style:m.value},[L])])]):L}}});function nt(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const n=parseInt(e,10);return isNaN(n)?0:n}const ba=mt({name:"close-popup",beforeMount(e,{value:n}){const o={depth:nt(n),handler(r){o.depth!==0&&setTimeout(()=>{const t=Ft(e);t!==void 0&&Wt(t,r,o.depth)})},handlerKey(r){Yt(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:n,oldValue:o}){n!==o&&(e.__qclosepopup.depth=nt(n))},beforeUnmount(e){const n=e.__qclosepopup;e.removeEventListener("click",n.handler),e.removeEventListener("keyup",n.handlerKey),delete e.__qclosepopup}}),Ye={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ya=Object.keys(Ye);Ye.all=!0;function ot(e){const n={};for(const o of ya)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?Ye:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const pa=["INPUT","TEXTAREA"];function it(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&pa.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Me(e,n,o){const r=Ee(e);let t,a=r.left-n.event.x,i=r.top-n.event.y,l=Math.abs(a),h=Math.abs(i);const d=n.direction;d.horizontal===!0&&d.vertical!==!0?t=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=i<0?"up":"down":d.up===!0&&i<0?(t="up",l>h&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.down===!0&&i>0?(t="down",l>h&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.left===!0&&a<0?(t="left",l<h&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down"))):d.right===!0&&a>0&&(t="right",l<h&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down")));let u=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,u=!0,t==="left"||t==="right"?(r.left-=a,l=0,a=0):(r.top-=i,h=0,i=0)}return{synthetic:u,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:r,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:l,y:h},offset:{x:a,y:i},delta:{x:r.left-n.event.lastX,y:r.top-n.event.lastY}}}}let Sa=0;const se=mt({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&ue.has.touch!==!0)return;function r(a,i){o.mouse===!0&&i===!0?gt(a):(o.stop===!0&&$e(a),o.prevent===!0&&Ke(a))}const t={uid:"qvtp_"+Sa++,handler:n,modifiers:o,direction:ot(o),noop:De,mouseStart(a){it(a,t)&&Ut(a)&&(be(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(it(a,t)){const i=a.target;be(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,i){if(ue.is.firefox===!0&&Le(e,!0),t.lastEvt=a,i===!0||o.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ke(d),a.cancelBubble===!0&&$e(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:d}}$e(a)}const{left:l,top:h}=Ee(a);t.event={x:l,y:h,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:h}},move(a){if(t.event===void 0)return;const i=Ee(a),l=i.left-t.event.x,h=i.top-t.event.y;if(l===0&&h===0)return;t.lastEvt=a;const d=t.event.mouse===!0,u=()=>{r(a,d);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ua(),t.styleCleanup=w=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const O=()=>{document.body.classList.remove("no-pointer-events--children")};w!==void 0?setTimeout(()=>{O(),w()},50):O()}else w!==void 0&&w()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:m,synthetic:w}=Me(a,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=w===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(a);return}const S=Math.abs(l),y=Math.abs(h);S!==y&&(t.direction.horizontal===!0&&S>y||t.direction.vertical===!0&&S<y||t.direction.up===!0&&S<y&&h<0||t.direction.down===!0&&S<y&&h>0||t.direction.left===!0&&S>y&&l<0||t.direction.right===!0&&S>y&&l>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,i){if(t.event!==void 0){if(Oe(t,"temp"),ue.is.firefox===!0&&Le(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Me(a===void 0?t.lastEvt:a,t).payload);const{payload:l}=Me(a===void 0?t.lastEvt:a,t,!0),h=()=>{t.handler(l)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";be(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}ue.has.touch===!0&&be(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=ot(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),Oe(n,"main"),Oe(n,"temp"),ue.is.firefox===!0&&Le(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}}),rt=["vertical","horizontal"],Be={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ut={prevent:!0,mouse:!0,mouseAllDir:!0},st=e=>e>=250?50:Math.ceil(e/5),Ct=ee({name:"QScrollArea",props:{...Qe,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:n,emit:o}){const r=T(!1),t=T(!1),a=T(!1),i={vertical:T(0),horizontal:T(0)},l={vertical:{ref:T(null),position:T(0),size:T(0)},horizontal:{ref:T(null),position:T(0),size:T(0)}},{proxy:h}=te(),d=Re(e,h.$q);let u=null,S;const y=T(null),m=v(()=>"q-scrollarea"+(d.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=v(()=>{const f=l.vertical.size.value-i.vertical.value;if(f<=0)return 0;const c=J(l.vertical.position.value/f,0,1);return Math.round(c*1e4)/1e4}),l.vertical.thumbHidden=v(()=>(e.visible===null?a.value:e.visible)!==!0&&r.value===!1&&t.value===!1||l.vertical.size.value<=i.vertical.value+1),l.vertical.thumbStart=v(()=>l.vertical.percentage.value*(i.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=v(()=>Math.round(J(i.vertical.value*i.vertical.value/l.vertical.size.value,st(i.vertical.value),i.vertical.value))),l.vertical.style=v(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=v(()=>{const f=l.horizontal.size.value-i.horizontal.value;if(f<=0)return 0;const c=J(Math.abs(l.horizontal.position.value)/f,0,1);return Math.round(c*1e4)/1e4}),l.horizontal.thumbHidden=v(()=>(e.visible===null?a.value:e.visible)!==!0&&r.value===!1&&t.value===!1||l.horizontal.size.value<=i.horizontal.value+1),l.horizontal.thumbStart=v(()=>l.horizontal.percentage.value*(i.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=v(()=>Math.round(J(i.horizontal.value*i.horizontal.value/l.horizontal.size.value,st(i.horizontal.value),i.horizontal.value))),l.horizontal.style=v(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[h.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const w=v(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),O=[[se,f=>{Q(f,"vertical")},void 0,{vertical:!0,...ut}]],$=[[se,f=>{Q(f,"horizontal")},void 0,{horizontal:!0,...ut}]];function C(){const f={};return rt.forEach(c=>{const _=l[c];f[c+"Position"]=_.position.value,f[c+"Percentage"]=_.percentage.value,f[c+"Size"]=_.size.value,f[c+"ContainerSize"]=i[c].value}),f}const g=Kt(()=>{const f=C();f.ref=h,o("scroll",f)},0);function P(f,c,_){if(rt.includes(f)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(f==="vertical"?Ge:Pe)(y.value,c,_)}function q({height:f,width:c}){let _=!1;i.vertical.value!==f&&(i.vertical.value=f,_=!0),i.horizontal.value!==c&&(i.horizontal.value=c,_=!0),_===!0&&E()}function L({position:f}){let c=!1;l.vertical.position.value!==f.top&&(l.vertical.position.value=f.top,c=!0),l.horizontal.position.value!==f.left&&(l.horizontal.position.value=f.left,c=!0),c===!0&&E()}function B({height:f,width:c}){l.horizontal.size.value!==c&&(l.horizontal.size.value=c,E()),l.vertical.size.value!==f&&(l.vertical.size.value=f,E())}function Q(f,c){const _=l[c];if(f.isFirst===!0){if(_.thumbHidden.value===!0)return;S=_.position.value,t.value=!0}else if(t.value!==!0)return;f.isFinal===!0&&(t.value=!1);const M=Be[c],K=i[c].value,we=(_.size.value-K)/(K-_.thumbSize.value),ze=f.distance[M.dist],he=S+(f.direction===M.dir?1:-1)*ze*we;ae(he,c)}function V(f,c){const _=l[c];if(_.thumbHidden.value!==!0){const M=f[Be[c].offset];if(M<_.thumbStart.value||M>_.thumbStart.value+_.thumbSize.value){const K=M-_.thumbSize.value/2;ae(K/i[c].value*_.size.value,c)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(f.type,f))}}function N(f){V(f,"vertical")}function A(f){V(f,"horizontal")}function E(){r.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,r.value=!1},e.delay),e.onScroll!==void 0&&g()}function ae(f,c){y.value[Be[c].scroll]=f}function j(){a.value=!0}function le(){a.value=!1}let W=null;return k(()=>h.$q.lang.rtl,f=>{y.value!==null&&Pe(y.value,Math.abs(l.horizontal.position.value)*(f===!0?-1:1))}),Gt(()=>{W={top:l.vertical.position.value,left:l.horizontal.position.value}}),Xt(()=>{if(W===null)return;const f=y.value;f!==null&&(Pe(f,W.left),Ge(f,W.top))}),ie(g.cancel),Object.assign(h,{getScrollTarget:()=>y.value,getScroll:C,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:P,setScrollPercentage(f,c,_){P(f,c*(l[f].size.value-i[f].value)*(f==="horizontal"&&h.$q.lang.rtl===!0?-1:1),_)}}),()=>p("div",{class:m.value,onMouseenter:j,onMouseleave:le},[p("div",{ref:y,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[p("div",{class:"q-scrollarea__content absolute",style:w.value},ht(n.default,[p(ve,{debounce:0,onResize:B})])),p(xt,{axis:"both",onScroll:L})]),p(ve,{debounce:0,onResize:q}),p("div",{class:l.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:N}),p("div",{class:l.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),de(p("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),O),de(p("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),$)])}}),ct=150,Tt=ee({name:"QDrawer",inheritAttrs:!1,props:{...bt,...Qe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...yt,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:r}){const t=te(),{proxy:{$q:a}}=t,i=Re(e,a),{preventBodyScroll:l}=ea(),{registerTimeout:h,removeTimeout:d}=Jt(),u=Ae(_e,Y);if(u===Y)return console.error("QDrawer needs to be child of QLayout"),Y;let S,y=null,m;const w=T(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),O=v(()=>e.mini===!0&&w.value!==!0),$=v(()=>O.value===!0?e.miniWidth:e.width),C=T(e.showIfAbove===!0&&w.value===!1?!0:e.modelValue===!0),g=v(()=>e.persistent!==!0&&(w.value===!0||K.value===!0));function P(s,x){if(Q(),s!==!1&&u.animate(),R(0),w.value===!0){const D=u.instances[f.value];D!==void 0&&D.belowBreakpoint===!0&&D.hide(!1),G(1),u.isContainer.value!==!0&&l(!0)}else G(0),s!==!1&&xe(!1);h(()=>{s!==!1&&xe(!0),x!==!0&&o("show",s)},ct)}function q(s,x){V(),s!==!1&&u.animate(),G(0),R(E.value*$.value),Ce(),x!==!0?h(()=>{o("hide",s)},ct):d()}const{show:L,hide:B}=pt({showing:C,hideOnRouteChange:g,handleShow:P,handleHide:q}),{addToHistory:Q,removeFromHistory:V}=Zt(C,B,g),N={belowBreakpoint:w,hide:B},A=v(()=>e.side==="right"),E=v(()=>(a.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),ae=T(0),j=T(!1),le=T(!1),W=T($.value*E.value),f=v(()=>A.value===!0?"left":"right"),c=v(()=>C.value===!0&&w.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:$.value:0),_=v(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(A.value?"R":"L")>-1||a.platform.is.ios===!0&&u.isContainer.value===!0),M=v(()=>e.overlay===!1&&C.value===!0&&w.value===!1),K=v(()=>e.overlay===!0&&C.value===!0&&w.value===!1),we=v(()=>"fullscreen q-drawer__backdrop"+(C.value===!1&&j.value===!1?" hidden":"")),ze=v(()=>({backgroundColor:`rgba(0,0,0,${ae.value*.4})`})),he=v(()=>A.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),kt=v(()=>A.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),Lt=v(()=>{const s={};return u.header.space===!0&&he.value===!1&&(_.value===!0?s.top=`${u.header.offset}px`:u.header.space===!0&&(s.top=`${u.header.size}px`)),u.footer.space===!0&&kt.value===!1&&(_.value===!0?s.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(s.bottom=`${u.footer.size}px`)),s}),$t=v(()=>{const s={width:`${$.value}px`,transform:`translateX(${W.value}px)`};return w.value===!0?s:Object.assign(s,Lt.value)}),Ot=v(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Pt=v(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":C.value===!0?"":" q-layout--prevent-focus")+(w.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${O.value===!0?"mini":"standard"}`+(_.value===!0||M.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(he.value===!0?" q-drawer--top-padding":""))),Mt=v(()=>{const s=a.lang.rtl===!0?e.side:f.value;return[[se,Dt,void 0,{[s]:!0,mouse:!0}]]}),Bt=v(()=>{const s=a.lang.rtl===!0?f.value:e.side;return[[se,Ue,void 0,{[s]:!0,mouse:!0}]]}),It=v(()=>{const s=a.lang.rtl===!0?f.value:e.side;return[[se,Ue,void 0,{[s]:!0,mouse:!0,mouseAllDir:!0}]]});function qe(){At(w,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}k(w,s=>{s===!0?(S=C.value,C.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&S!==!1&&(C.value===!0?(R(0),G(0),Ce()):L(!1))}),k(()=>e.side,(s,x)=>{u.instances[x]===N&&(u.instances[x]=void 0,u[x].space=!1,u[x].offset=0),u.instances[s]=N,u[s].size=$.value,u[s].space=M.value,u[s].offset=c.value}),k(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&qe()}),k(()=>e.behavior+e.breakpoint,qe),k(u.isContainer,s=>{C.value===!0&&l(s!==!0),s===!0&&qe()}),k(u.scrollbarWidth,()=>{R(C.value===!0?0:void 0)}),k(c,s=>{X("offset",s)}),k(M,s=>{o("onLayout",s),X("space",s)}),k(A,()=>{R()}),k($,s=>{R(),Te(e.miniToOverlay,s)}),k(()=>e.miniToOverlay,s=>{Te(s,$.value)}),k(()=>a.lang.rtl,()=>{R()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Et(),u.animate())}),k(O,s=>{o("miniState",s)});function R(s){s===void 0?pe(()=>{s=C.value===!0?0:$.value,R(E.value*s)}):(u.isContainer.value===!0&&A.value===!0&&(w.value===!0||Math.abs(s)===$.value)&&(s+=E.value*u.scrollbarWidth.value),W.value=s)}function G(s){ae.value=s}function xe(s){const x=s===!0?"remove":u.isContainer.value!==!0?"add":"";x!==""&&document.body.classList[x]("q-body--drawer-toggle")}function Et(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,y=setTimeout(()=>{y=null,le.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Dt(s){if(C.value!==!1)return;const x=$.value,D=J(s.distance.x,0,x);if(s.isFinal===!0){D>=Math.min(75,x)===!0?L():(u.animate(),G(0),R(E.value*x)),j.value=!1;return}R((a.lang.rtl===!0?A.value!==!0:A.value)?Math.max(x-D,0):Math.min(0,D-x)),G(J(D/x,0,1)),s.isFirst===!0&&(j.value=!0)}function Ue(s){if(C.value!==!0)return;const x=$.value,D=s.direction===e.side,me=(a.lang.rtl===!0?D!==!0:D)?J(s.distance.x,0,x):0;if(s.isFinal===!0){Math.abs(me)<Math.min(75,x)===!0?(u.animate(),G(1),R(0)):B(),j.value=!1;return}R(E.value*me),G(J(1-me/x,0,1)),s.isFirst===!0&&(j.value=!0)}function Ce(){l(!1),xe(!0)}function X(s,x){u.update(e.side,s,x)}function At(s,x){s.value!==x&&(s.value=x)}function Te(s,x){X("size",s===!0?e.miniWidth:x)}return u.instances[e.side]=N,Te(e.miniToOverlay,$.value),X("space",M.value),X("offset",c.value),e.showIfAbove===!0&&e.modelValue!==!0&&C.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),ce(()=>{o("onLayout",M.value),o("miniState",O.value),S=e.showIfAbove===!0;const s=()=>{(C.value===!0?P:q)(!1,!0)};if(u.totalWidth.value!==0){pe(s);return}m=k(u.totalWidth,()=>{m(),m=void 0,C.value===!1&&e.showIfAbove===!0&&w.value===!1?L(!1):s()})}),ie(()=>{m!==void 0&&m(),y!==null&&(clearTimeout(y),y=null),C.value===!0&&Ce(),u.instances[e.side]===N&&(u.instances[e.side]=void 0,X("size",0),X("offset",0),X("space",!1))}),()=>{const s=[];w.value===!0&&(e.noSwipeOpen===!1&&s.push(de(p("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Mt.value)),s.push(Xe("div",{ref:"backdrop",class:we.value,style:ze.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&C.value===!0,()=>It.value)));const x=O.value===!0&&n.mini!==void 0,D=[p("div",{...r,key:""+x,class:[Ot.value,r.class]},x===!0?n.mini():He(n.default))];return e.elevated===!0&&C.value===!0&&D.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(Xe("aside",{ref:"content",class:Pt.value,style:$t.value},D,"contentclose",e.noSwipeClose!==!0&&w.value===!0,()=>Bt.value)),p("div",{class:"q-drawer-container"},s)}}}),ne=ta({}),_a=Object.keys(St),wa=ee({name:"QExpansionItem",props:{...St,...bt,...Qe,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...yt,"click","afterShow","afterHide"],setup(e,{slots:n,emit:o}){const{proxy:{$q:r}}=te(),t=Re(e,r),a=T(e.modelValue!==null?e.modelValue:e.defaultOpened),i=T(null),l=Je(),{show:h,hide:d,toggle:u}=pt({showing:a});let S,y;const m=v(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),w=v(()=>e.contentInsetLevel===void 0?null:{["padding"+(r.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),O=v(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),$=v(()=>{const c={};return _a.forEach(_=>{c[_]=e[_]}),c}),C=v(()=>O.value===!0||e.expandIconToggle!==!0),g=v(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),P=v(()=>e.disable!==!0&&(O.value===!0||e.expandIconToggle===!0)),q=v(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:u,show:h,hide:d})),L=v(()=>{const c=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":l,"aria-label":c}});k(()=>e.group,c=>{y!==void 0&&y(),c!==void 0&&E()});function B(c){O.value!==!0&&u(c),o("click",c)}function Q(c){c.keyCode===13&&V(c,!0)}function V(c,_){_!==!0&&i.value!==null&&i.value.focus(),u(c),gt(c)}function N(){o("afterShow")}function A(){o("afterHide")}function E(){S===void 0&&(S=Je()),a.value===!0&&(ne[e.group]=S);const c=k(a,M=>{M===!0?ne[e.group]=S:ne[e.group]===S&&delete ne[e.group]}),_=k(()=>ne[e.group],(M,K)=>{K===S&&M!==void 0&&M!==S&&d()});y=()=>{c(),_(),ne[e.group]===S&&delete ne[e.group],y=void 0}}function ae(){const c={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},_=[p(et,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:g.value})];return P.value===!0&&(Object.assign(c,{tabindex:0,...L.value,onClick:V,onKeyup:Q}),_.unshift(p("div",{ref:i,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),p(Z,c,()=>_)}function j(){let c;return n.header!==void 0?c=[].concat(n.header(q.value)):(c=[p(Z,()=>[p(U,{lines:e.labelLines},()=>e.label||""),e.caption?p(U,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&c[e.switchToggleSide===!0?"push":"unshift"](p(Z,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>p(et,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&c[e.switchToggleSide===!0?"unshift":"push"](ae()),c}function le(){const c={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return C.value===!0&&(c.clickable=!0,c.onClick=B,Object.assign(c,O.value===!0?$.value:L.value)),p(re,c,j)}function W(){return de(p("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:w.value,id:l},He(n.default)),[[aa,a.value]])}function f(){const c=[le(),p(sa,{duration:e.duration,onShow:N,onHide:A},W)];return e.expandSeparator===!0&&c.push(p(Ze,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),p(Ze,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),c}return e.group!==void 0&&E(),ie(()=>{y!==void 0&&y()}),()=>p("div",{class:m.value},[p("div",{class:"q-expansion-item__container relative-position"},f())])}}),dt={__name:"GoalListItemSections",props:{goal:{type:Object,required:!0}},setup(e){const n=e,o=v(()=>n.goal.planned?zt.formatDate(n.goal.planned,"ddd MMM DD YYYY"):null);return(r,t)=>(I(),H(Z,null,{default:b(()=>[z(U,null,{default:b(()=>[F(Se(e.goal.name),1)]),_:1}),z(U,{caption:""},{default:b(()=>[F(Se(oe(o)),1)]),_:1})]),_:1}))}},za={__name:"GoalListItem",props:{goal:{type:Object,required:!0}},setup(e){const n=e,o={name:"goal",params:{id:n.goal.id}},r=v(()=>n.goal.children&&n.goal.children.length);return(t,a)=>{const i=_t("GoalListItem",!0);return oe(r)?(I(),H(wa,{key:0,to:o,"content-inset-level":.5,"default-opened":"","expand-icon-toggle":"","expand-icon":"keyboard_arrow_right","expanded-icon":"keyboard_arrow_down"},{header:b(()=>[z(dt,{goal:e.goal},null,8,["goal"])]),default:b(()=>[z(fe,null,{default:b(()=>[(I(!0),Ve(Ne,null,je(e.goal.children,l=>(I(),H(i,{key:l.id,goal:l},null,8,["goal"]))),128))]),_:1})]),_:1},8,["content-inset-level"])):(I(),H(re,{key:1,to:o},{default:b(()=>[z(dt,{goal:e.goal},null,8,["goal"])]),_:1}))}}},qa={__name:"GoalsDrawer",setup(e){const n=ca();return(o,r)=>(I(),H(Tt,null,{default:b(()=>[z(Ct,{class:"fit q-pa-md"},{default:b(()=>[z(Fe,null,{default:b(()=>[z(We,null,{default:b(()=>[F("Goals")]),_:1})]),_:1}),oe(n).tree?(I(),H(fe,{key:0,class:"q-py-sm"},{default:b(()=>[(I(!0),Ve(Ne,null,je(oe(n).tree,t=>(I(),H(za,{key:t.id,goal:t},null,8,["goal"]))),128))]),_:1})):wt("",!0)]),_:1})]),_:1}))}},xa={__name:"TasksDrawer",setup(e){const n=da();return(o,r)=>(I(),H(Tt,null,{default:b(()=>[z(Ct,{class:"fit q-pa-md"},{default:b(()=>[z(Fe,null,{default:b(()=>[z(We,null,{default:b(()=>[F("Tasks")]),_:1})]),_:1}),oe(n).relative?(I(),H(fe,{key:0,class:"q-py-sm"},{default:b(()=>[(I(!0),Ve(Ne,null,je(oe(n).relative,t=>(I(),H(ra,{key:t.id,style:{"min-height":"51.19px"}},{default:b(()=>[z(re,{to:{name:"task",params:{id:t.id}}},{default:b(()=>[z(Z,null,{default:b(()=>[z(U,null,{default:b(()=>[F(Se(t.name),1)]),_:2},1024),z(U,{caption:""},{default:b(()=>[F(Se(oe(zt).formatDate(t.planned,"ddd MMM DD YYYY")),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):wt("",!0)]),_:1})]),_:1}))}},Pa={__name:"MainLayout",setup(e){const n=oa(),o=ia(),r=la(),t=na(),a=T(!1),i=T(!1);function l(){a.value=!a.value}function h(){i.value=!i.value}function d(){t.logout(),n.push({name:"login",query:{next:o.fullPath}}),r._s.forEach(u=>{u.$dispose(),delete r.state.value[u.$id]}),localStorage.clear()}return(u,S)=>{const y=_t("router-view");return I(),H(ga,{view:"hHh LpR fff"},{default:b(()=>[z(va,null,{default:b(()=>[z(Fe,null,{default:b(()=>[z(ye,{flat:"",round:"",icon:"done",class:"lt-md",onClick:l}),z(ye,{flat:"",round:"",icon:"task_alt",class:"lt-sm",onClick:h}),z(We,null,{default:b(()=>[F("LifeTrackerBuddy")]),_:1}),z(ye,{flat:"",round:"",icon:"add"},{default:b(()=>[z(tt,{"auto-close":""},{default:b(()=>[z(fe,null,{default:b(()=>[z(re,{to:{name:"goal",params:{id:"new"}}},{default:b(()=>[z(Z,null,{default:b(()=>[z(U,null,{default:b(()=>[F("New goal")]),_:1})]),_:1})]),_:1}),z(re,{to:{name:"task",params:{id:"new"}}},{default:b(()=>[z(Z,null,{default:b(()=>[z(U,null,{default:b(()=>[F("New task")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),z(ye,{flat:"",round:"",icon:"person_outline"},{default:b(()=>[z(tt,null,{default:b(()=>[z(fe,null,{default:b(()=>[de((I(),H(re,{clickable:"",onClick:d},{default:b(()=>[z(Z,null,{default:b(()=>[z(U,null,{default:b(()=>[F("Logout")]),_:1})]),_:1})]),_:1})),[[ba]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),z(xa,{modelValue:a.value,"onUpdate:modelValue":S[0]||(S[0]=m=>a.value=m),"show-if-above":"",side:"left",bordered:""},null,8,["modelValue"]),z(qa,{modelValue:i.value,"onUpdate:modelValue":S[1]||(S[1]=m=>i.value=m),breakpoint:599,"show-if-above":"",side:"right",bordered:""},null,8,["modelValue"]),z(ha,null,{default:b(()=>[(I(),H(y,{key:u.$route.path}))]),_:1})]),_:1})}}};export{Pa as default};

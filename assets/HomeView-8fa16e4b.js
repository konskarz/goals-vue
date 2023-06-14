import{a as Qe,Q as Be}from"./QToolbar-fbaba36b.js";import{c as ne,g as pe,H as Ve,a0 as ye,j as D,h as w,G as ae,d as Ye,e as J,k as We,_ as j,a1 as je,a2 as ze,D as Ue,M as Xe,R as T,S as P,T as I,U as C,W as z,$ as ee,a3 as Q,V as U,a4 as Ze,X as re,Z as be,Y as Se,a5 as x,a6 as te,E as Ke,a7 as Ge,a8 as Je}from"./index-d7307de2.js";import{Q as fe}from"./QToggle-441b2d10.js";import{Q as et}from"./QSlideTransition-c27aac13.js";import{u as ke,a as De}from"./use-dark-e5f5c597.js";import{Q as tt}from"./GoalStore-10baf2b4.js";import{u as ie}from"./TaskStore-7fb7ff16.js";import{_ as at}from"./GoalSelect-0bd38803.js";import{Q as rt}from"./QIntersection-9d127403.js";import{d as $}from"./date-72f78baa.js";import{a as Y,Q as nt}from"./QItem-88efd3df.js";import{Q as W}from"./QItemLabel-4ba5d4ec.js";import"./use-field-64bc6d51.js";import"./uid-6a237b22.js";import"./focus-manager-4e5c0bab.js";import"./use-prevent-scroll-c8d971c8.js";import"./use-model-toggle-6c70179b.js";import"./format-8c778330.js";const it=ne({name:"QTimeline",props:{...ke,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:i=>["left","right"].includes(i)},layout:{type:String,default:"dense",validator:i=>["dense","comfortable","loose"].includes(i)}},setup(i,{slots:s}){const o=pe(),n=De(i,o.proxy.$q);Ve(ye,i);const e=D(()=>`q-timeline q-timeline--${i.layout} q-timeline--${i.layout}--${i.side}`+(n.value===!0?" q-timeline--dark":""));return()=>w("ul",{class:e.value},ae(s.default))}}),ot=ne({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:i=>["left","right"].includes(i)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(i,{slots:s}){const o=Ye(ye,J);if(o===J)return console.error("QTimelineEntry needs to be child of QTimeline"),J;const n=D(()=>`q-timeline__entry q-timeline__entry--${i.side}`+(i.icon!==void 0||i.avatar!==void 0?" q-timeline__entry--icon":"")),e=D(()=>`q-timeline__dot text-${i.color||o.color}`),r=D(()=>o.layout==="comfortable"&&o.side==="left");return()=>{const l=We(s.default,[]);if(i.body!==void 0&&l.unshift(i.body),i.heading===!0){const c=[w("div"),w("div"),w(i.tag,{class:"q-timeline__heading-title"},l)];return w("div",{class:"q-timeline__heading"},r.value===!0?c.reverse():c)}let u;i.icon!==void 0?u=[w(j,{class:"row items-center justify-center",name:i.icon})]:i.avatar!==void 0&&(u=[w("img",{class:"q-timeline__dot-img",src:i.avatar})]);const _=[w("div",{class:"q-timeline__subtitle"},[w("span",{},ae(s.subtitle,[i.subtitle]))]),w("div",{class:e.value},u),w("div",{class:"q-timeline__content"},[w("h6",{class:"q-timeline__title"},ae(s.title,[i.title]))].concat(l))];return w("li",{class:n.value},r.value===!0?_.reverse():_)}}}),st={xs:2,sm:4,md:6,lg:10,xl:14};function me(i,s,o){return{transform:s===!0?`translateX(${o.lang.rtl===!0?"-":""}100%) scale3d(${-i},1,1)`:`scale3d(${i},1,1)`}}const lt=ne({name:"QLinearProgress",props:{...ke,...je,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(i,{slots:s}){const{proxy:o}=pe(),n=De(i,o.$q),e=ze(i,st),r=D(()=>i.indeterminate===!0||i.query===!0),l=D(()=>i.reverse!==i.query),u=D(()=>({...e.value!==null?e.value:{},"--q-linear-progress-speed":`${i.animationSpeed}ms`})),_=D(()=>"q-linear-progress"+(i.color!==void 0?` text-${i.color}`:"")+(i.reverse===!0||i.query===!0?" q-linear-progress--reverse":"")+(i.rounded===!0?" rounded-borders":"")),c=D(()=>me(i.buffer!==void 0?i.buffer:1,l.value,o.$q)),m=D(()=>`with${i.instantFeedback===!0?"out":""}-transition`),M=D(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${m.value} q-linear-progress__track--${n.value===!0?"dark":"light"}`+(i.trackColor!==void 0?` bg-${i.trackColor}`:"")),R=D(()=>me(r.value===!0?1:i.value,l.value,o.$q)),p=D(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${m.value} q-linear-progress__model--${r.value===!0?"in":""}determinate`),E=D(()=>({width:`${i.value*100}%`})),N=D(()=>`q-linear-progress__stripe absolute-${i.reverse===!0?"right":"left"} q-linear-progress__stripe--${m.value}`);return()=>{const H=[w("div",{class:M.value,style:c.value}),w("div",{class:p.value,style:R.value})];return i.stripe===!0&&r.value===!1&&H.push(w("div",{class:N.value,style:E.value})),w("div",{class:_.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":i.indeterminate===!0?void 0:i.value},Ue(s.default,H))}}});var oe={};(function i(s,o,n,e){var r=!!(s.Worker&&s.Blob&&s.Promise&&s.OffscreenCanvas&&s.OffscreenCanvasRenderingContext2D&&s.HTMLCanvasElement&&s.HTMLCanvasElement.prototype.transferControlToOffscreen&&s.URL&&s.URL.createObjectURL);function l(){}function u(a){var t=o.exports.Promise,g=t!==void 0?t:s.Promise;return typeof g=="function"?new g(a):(a(l,l),null)}var _=function(){var a=Math.floor(16.666666666666668),t,g,d={},y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(v){var h=Math.random();return d[h]=requestAnimationFrame(function f(k){y===k||y+a-1<k?(y=k,delete d[h],v()):d[h]=requestAnimationFrame(f)}),h},g=function(v){d[v]&&cancelAnimationFrame(d[v])}):(t=function(v){return setTimeout(v,a)},g=function(v){return clearTimeout(v)}),{frame:t,cancel:g}}(),c=function(){var a,t,g={};function d(y){function v(h,f){y.postMessage({options:h||{},callback:f})}y.init=function(f){var k=f.transferControlToOffscreen();y.postMessage({canvas:k},[k])},y.fire=function(f,k,L){if(t)return v(f,null),t;var b=Math.random().toString(36).slice(2);return t=u(function(q){function O(S){S.data.callback===b&&(delete g[b],y.removeEventListener("message",O),t=null,L(),q())}y.addEventListener("message",O),v(f,b),g[b]=O.bind(null,{data:{callback:b}})}),t},y.reset=function(){y.postMessage({reset:!0});for(var f in g)g[f](),delete g[f]}}return function(){if(a)return a;if(!n&&r){var y=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([y])))}catch(v){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",v),null}d(a)}return a}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(a,t){return t?t(a):a}function R(a){return a!=null}function p(a,t,g){return M(a&&R(a[t])?a[t]:m[t],g)}function E(a){return a<0?0:Math.floor(a)}function N(a,t){return Math.floor(Math.random()*(t-a))+a}function H(a){return parseInt(a,16)}function Me(a){return a.map(Ee)}function Ee(a){var t=String(a).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:H(t.substring(0,2)),g:H(t.substring(2,4)),b:H(t.substring(4,6))}}function we(a){var t=p(a,"origin",Object);return t.x=p(t,"x",Number),t.y=p(t,"y",Number),t}function Te(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function Ie(a){var t=a.getBoundingClientRect();a.width=t.width,a.height=t.height}function Ce(a){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=a,t}function Pe(a,t,g,d,y,v,h,f,k){a.save(),a.translate(t,g),a.rotate(v),a.scale(d,y),a.arc(0,0,1,h,f,k),a.restore()}function xe(a){var t=a.angle*(Math.PI/180),g=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-t+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar}}function Oe(a,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var g=t.tick++/t.totalTicks,d=t.x+t.random*t.tiltCos,y=t.y+t.random*t.tiltSin,v=t.wobbleX+t.random*t.tiltCos,h=t.wobbleY+t.random*t.tiltSin;if(a.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-g)+")",a.beginPath(),t.shape==="circle")a.ellipse?a.ellipse(t.x,t.y,Math.abs(v-d)*t.ovalScalar,Math.abs(h-y)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):Pe(a,t.x,t.y,Math.abs(v-d)*t.ovalScalar,Math.abs(h-y)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var f=Math.PI/2*3,k=4*t.scalar,L=8*t.scalar,b=t.x,q=t.y,O=5,S=Math.PI/O;O--;)b=t.x+Math.cos(f)*L,q=t.y+Math.sin(f)*L,a.lineTo(b,q),f+=S,b=t.x+Math.cos(f)*k,q=t.y+Math.sin(f)*k,a.lineTo(b,q),f+=S;else a.moveTo(Math.floor(t.x),Math.floor(t.y)),a.lineTo(Math.floor(t.wobbleX),Math.floor(y)),a.lineTo(Math.floor(v),Math.floor(h)),a.lineTo(Math.floor(d),Math.floor(t.wobbleY));return a.closePath(),a.fill(),t.tick<t.totalTicks}function qe(a,t,g,d,y){var v=t.slice(),h=a.getContext("2d"),f,k,L=u(function(b){function q(){f=k=null,h.clearRect(0,0,d.width,d.height),y(),b()}function O(){n&&!(d.width===e.width&&d.height===e.height)&&(d.width=a.width=e.width,d.height=a.height=e.height),!d.width&&!d.height&&(g(a),d.width=a.width,d.height=a.height),h.clearRect(0,0,d.width,d.height),v=v.filter(function(S){return Oe(h,S)}),v.length?f=_.frame(O):q()}f=_.frame(O),k=q});return{addFettis:function(b){return v=v.concat(b),L},canvas:a,promise:L,reset:function(){f&&_.cancel(f),k&&k()}}}function se(a,t){var g=!a,d=!!p(t||{},"resize"),y=p(t,"disableForReducedMotion",Boolean),v=r&&!!p(t||{},"useWorker"),h=v?c():null,f=g?Te:Ie,k=a&&h?!!a.__confetti_initialized:!1,L=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,b;function q(S,Z,K){for(var A=p(S,"particleCount",E),B=p(S,"angle",Number),V=p(S,"spread",Number),F=p(S,"startVelocity",Number),Le=p(S,"decay",Number),Re=p(S,"gravity",Number),He=p(S,"drift",Number),ue=p(S,"colors",Me),Fe=p(S,"ticks",Number),ce=p(S,"shapes"),$e=p(S,"scalar"),de=we(S),he=A,G=[],Ne=a.width*de.x,Ae=a.height*de.y;he--;)G.push(xe({x:Ne,y:Ae,angle:B,spread:V,startVelocity:F,color:ue[he%ue.length],shape:ce[N(0,ce.length)],ticks:Fe,decay:Le,gravity:Re,drift:He,scalar:$e}));return b?b.addFettis(G):(b=qe(a,G,f,Z,K),b.promise)}function O(S){var Z=y||p(S,"disableForReducedMotion",Boolean),K=p(S,"zIndex",Number);if(Z&&L)return u(function(F){F()});g&&b?a=b.canvas:g&&!a&&(a=Ce(K),document.body.appendChild(a)),d&&!k&&f(a);var A={width:a.width,height:a.height};h&&!k&&h.init(a),k=!0,h&&(a.__confetti_initialized=!0);function B(){if(h){var F={getBoundingClientRect:function(){if(!g)return a.getBoundingClientRect()}};f(F),h.postMessage({resize:{width:F.width,height:F.height}});return}A.width=A.height=null}function V(){b=null,d&&s.removeEventListener("resize",B),g&&a&&(document.body.removeChild(a),a=null,k=!1)}return d&&s.addEventListener("resize",B,!1),h?h.fire(S,A,V):q(S,A,V)}return O.reset=function(){h&&h.reset(),b&&b.reset()},O}var X;function le(){return X||(X=se(null,{useWorker:!0,resize:!0})),X}o.exports=function(){return le().apply(this,arguments)},o.exports.reset=function(){le().reset()},o.exports.create=se})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),oe,!1);const ge=oe.exports;oe.exports.create;function ve(){var i=3e3,s=Date.now()+i,o={startVelocity:30,spread:360,ticks:60,zIndex:0,disableForReducedMotion:!0};function n(r,l){return Math.random()*(l-r)+r}var e=setInterval(function(){var r=s-Date.now();if(r<=0)return clearInterval(e);var l=100*(r/i);ge(Object.assign({},o,{particleCount:l,origin:{x:n(.1,.3),y:Math.random()-.2}})),ge(Object.assign({},o,{particleCount:l,origin:{x:n(.7,.9),y:Math.random()-.2}}))},250)}const ut={__name:"TaskListItem",props:{task:{type:Object,required:!0}},emits:["ondragstart"],setup(i,{emit:s}){const o=i,n=Xe(),e=ie(),r=D(()=>o.task.target>1&&!o.task.done),l=D(()=>r.value?o.task.performance/o.task.target:0),u=D(()=>[o.task.performance,"of",o.task.target].join(" ")),_=D(()=>{const E=o.task.performance_history;return E&&E.length?$.formatDate(E[0].updated,"DD.MM.YYYY HH:mm"):null});function c(){n.push({name:"task",params:{id:o.task.id}})}function m(){const E={done:null};o.task.performance>=o.task.target&&(E.performance=o.task.target-1),e.updateItem(o.task.id+"/",E).then(()=>e.refetch())}function M(){const E={performance:o.task.performance+1};E.performance>=o.task.target&&ve(),e.updateItem(o.task.id+"/",E).then(()=>e.refetch())}function R(){const E={done:new Date().toISOString()};ve(),e.updateItem(o.task.id+"/",E).then(()=>e.refetch())}function p(E){s("ondragstart",E,o.task)}return(E,N)=>(T(),P(nt,{clickable:"",active:!!i.task.done,"active-class":"text-positive"},{default:I(()=>[i.task.group_id?(T(),P(Y,{key:0,thumbnail:""},{default:I(()=>[C(j,{name:"event_repeat"})]),_:1})):(T(),P(Y,{key:1,thumbnail:"",style:{cursor:"grab"},draggable:"true",onDragstart:p,"onTouchmove:native":N[0]||(N[0]=H=>{})},{default:I(()=>[C(j,{name:"drag_indicator"})]),_:1})),C(Y,{onClick:c},{default:I(()=>[C(W,null,{default:I(()=>[z(ee(i.task.name),1)]),_:1}),r.value?(T(),P(W,{key:0,caption:""},{default:I(()=>[z(ee(u.value),1)]),_:1})):Q("",!0),r.value?(T(),P(W,{key:1},{default:I(()=>[C(lt,{value:l.value,color:"positive"},null,8,["value"])]),_:1})):Q("",!0),r.value&&_.value?(T(),P(W,{key:2,caption:""},{default:I(()=>[C(j,{name:"update",class:"vertical-top"}),z(" "+ee(_.value),1)]),_:1})):Q("",!0)]),_:1}),C(Y,{avatar:""},{default:I(()=>[i.task.done?(T(),P(U,{key:0,flat:"",round:"",icon:"check_box",onClick:m})):r.value?(T(),P(U,{key:1,flat:"",round:"",icon:"plus_one",onClick:M})):(T(),P(U,{key:2,flat:"",round:"",icon:"check_box_outline_blank",onClick:R}))]),_:1})]),_:1},8,["active"]))}};var _e;(function(i){var s=function(){function n(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(n.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(e){this._dropEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(e){this._effectAllowed=e},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),n.prototype.clearData=function(e){e!=null?delete this._data[e]:this._data=null},n.prototype.getData=function(e){return this._data[e]||""},n.prototype.setData=function(e,r){this._data[e]=r},n.prototype.setDragImage=function(e,r,l){var u=o._instance;u._imgCustom=e,u._imgOffset={x:r,y:l}},n}();i.DataTransfer=s;var o=function(){function n(){if(this._lastClick=0,n._instance)throw"DragDropTouch instance already created.";var e=!1;if(document.addEventListener("test",function(){},{get passive(){return e=!0,!0}}),"ontouchstart"in document){var r=document,l=this._touchstart.bind(this),u=this._touchmove.bind(this),_=this._touchend.bind(this),c=e?{passive:!1,capture:!1}:!1;r.addEventListener("touchstart",l,c),r.addEventListener("touchmove",u,c),r.addEventListener("touchend",_),r.addEventListener("touchcancel",_)}}return n.getInstance=function(){return n._instance},n.prototype._touchstart=function(e){var r=this;if(this._shouldHandle(e)){if(Date.now()-this._lastClick<n._DBLCLICK&&this._dispatchEvent(e,"dblclick",e.target)){e.cancelable&&e.preventDefault(),this._reset();return}this._reset();var l=this._closestDraggable(e.target);l&&!this._dispatchEvent(e,"mousemove",e.target)&&!this._dispatchEvent(e,"mousedown",e.target)&&(this._dragSource=l,this._ptDown=this._getPoint(e),this._lastTouch=e,e.cancelable&&e.preventDefault(),setTimeout(function(){r._dragSource==l&&r._img==null&&r._dispatchEvent(e,"contextmenu",l)&&r._reset()},n._CTXMENU),n._ISPRESSHOLDMODE&&(this._pressHoldInterval=setTimeout(function(){r._isDragEnabled=!0,r._touchmove(e)},n._PRESSHOLDAWAIT)))}},n.prototype._touchmove=function(e){if(this._shouldCancelPressHoldMove(e)){this._reset();return}if(this._shouldHandleMove(e)||this._shouldHandlePressHoldMove(e)){var r=this._getTarget(e);if(this._dispatchEvent(e,"mousemove",r)){this._lastTouch=e,e.cancelable&&e.preventDefault();return}this._dragSource&&!this._img&&this._shouldStartDragging(e)&&(this._dispatchEvent(e,"dragstart",this._dragSource),this._createImage(e),this._dispatchEvent(e,"dragenter",r)),this._img&&(this._lastTouch=e,e.cancelable&&e.preventDefault(),r!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(e,"dragenter",r),this._lastTarget=r),this._moveImage(e),this._isDropZone=this._dispatchEvent(e,"dragover",r))}},n.prototype._touchend=function(e){if(this._shouldHandle(e)){if(this._dispatchEvent(this._lastTouch,"mouseup",e.target)){e.cancelable&&e.preventDefault();return}this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",e.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(e.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},n.prototype._shouldHandle=function(e){return e&&!e.defaultPrevented&&e.touches&&e.touches.length<2},n.prototype._shouldHandleMove=function(e){return!n._ISPRESSHOLDMODE&&this._shouldHandle(e)},n.prototype._shouldHandlePressHoldMove=function(e){return n._ISPRESSHOLDMODE&&this._isDragEnabled&&e&&e.touches&&e.touches.length},n.prototype._shouldCancelPressHoldMove=function(e){return n._ISPRESSHOLDMODE&&!this._isDragEnabled&&this._getDelta(e)>n._PRESSHOLDMARGIN},n.prototype._shouldStartDragging=function(e){var r=this._getDelta(e);return r>n._THRESHOLD||n._ISPRESSHOLDMODE&&r>=n._PRESSHOLDTHRESHOLD},n.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new s,clearInterval(this._pressHoldInterval)},n.prototype._getPoint=function(e,r){return e&&e.touches&&(e=e.touches[0]),{x:r?e.pageX:e.clientX,y:r?e.pageY:e.clientY}},n.prototype._getDelta=function(e){if(n._ISPRESSHOLDMODE&&!this._ptDown)return 0;var r=this._getPoint(e);return Math.abs(r.x-this._ptDown.x)+Math.abs(r.y-this._ptDown.y)},n.prototype._getTarget=function(e){for(var r=this._getPoint(e),l=document.elementFromPoint(r.x,r.y);l&&getComputedStyle(l).pointerEvents=="none";)l=l.parentElement;return l},n.prototype._createImage=function(e){this._img&&this._destroyImage();var r=this._imgCustom||this._dragSource;if(this._img=r.cloneNode(!0),this._copyStyle(r,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var l=r.getBoundingClientRect(),u=this._getPoint(e);this._imgOffset={x:u.x-l.left,y:u.y-l.top},this._img.style.opacity=n._OPACITY.toString()}this._moveImage(e),document.body.appendChild(this._img)},n.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},n.prototype._moveImage=function(e){var r=this;requestAnimationFrame(function(){if(r._img){var l=r._getPoint(e,!0),u=r._img.style;u.position="absolute",u.pointerEvents="none",u.zIndex="999999",u.left=Math.round(l.x-r._imgOffset.x)+"px",u.top=Math.round(l.y-r._imgOffset.y)+"px"}})},n.prototype._copyProps=function(e,r,l){for(var u=0;u<l.length;u++){var _=l[u];e[_]=r[_]}},n.prototype._copyStyle=function(e,r){if(n._rmvAtts.forEach(function(M){r.removeAttribute(M)}),e instanceof HTMLCanvasElement){var l=e,u=r;u.width=l.width,u.height=l.height,u.getContext("2d").drawImage(l,0,0)}for(var _=getComputedStyle(e),c=0;c<_.length;c++){var m=_[c];m.indexOf("transition")<0&&(r.style[m]=_[m])}r.style.pointerEvents="none";for(var c=0;c<e.children.length;c++)this._copyStyle(e.children[c],r.children[c])},n.prototype._dispatchEvent=function(e,r,l){if(e&&l){var u=document.createEvent("Event"),_=e.touches?e.touches[0]:e;return u.initEvent(r,!0,!0),u.button=0,u.which=u.buttons=1,this._copyProps(u,e,n._kbdProps),this._copyProps(u,_,n._ptProps),u.dataTransfer=this._dataTransfer,l.dispatchEvent(u),u.defaultPrevented}return!1},n.prototype._closestDraggable=function(e){for(;e;e=e.parentElement)if(e.hasAttribute("draggable")&&e.draggable)return e;return null},n}();o._instance=new o,o._THRESHOLD=5,o._OPACITY=.5,o._DBLCLICK=500,o._CTXMENU=900,o._ISPRESSHOLDMODE=!1,o._PRESSHOLDAWAIT=400,o._PRESSHOLDMARGIN=25,o._PRESSHOLDTHRESHOLD=0,o._rmvAtts="id,class,style,draggable".split(","),o._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),o._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),i.DragDropTouch=o})(_e||(_e={}));const ct={key:0},dt={__name:"WeekTimelineEntry",props:{tasks:{type:Array,required:!0},monday:{type:String,required:!0}},setup(i){const s=i,o=ie(),n=D(()=>s.tasks.length?[...s.tasks].sort((c,m)=>m.target-c.target):null),e=D(()=>{const c=$.subtractFromDate(s.monday,{days:1}),m=$.addToDate(s.monday,{days:6}),M=p=>$.formatDate(p,"MMMM"),R=M(s.monday);return R!==M(c)||R!==M(m)}),r=$.formatDate(s.monday,"w-Q-YYYY-MMM D").split("-"),l=["Week "+r[0],"Q"+r[1],r[2],r[3]].join(" · ");function u(c,m){const M={id:m.id,day:$.getDayOfWeek(m.planned),week:r[0]};c.dataTransfer.setData("text",JSON.stringify(M)),c.dataTransfer.dropEffect="move"}function _(c){const m=JSON.parse(c.dataTransfer.getData("text"));if(m.week===r[0])return;const M={planned:$.addToDate(s.monday,{days:m.day-1}).toISOString()};o.updateItem(m.id+"/",M).then(()=>o.refetch())}return(c,m)=>(T(),P(ot,{color:i.monday===x(o).currentWeek?"orange":"primary",subtitle:x(l),icon:e.value?"calendar_month":void 0,onDragover:m[0]||(m[0]=te(()=>{},["prevent"])),onDragenter:m[1]||(m[1]=te(()=>{},["prevent"])),onDrop:m[2]||(m[2]=te(M=>_(M),["prevent"]))},{default:I(()=>[n.value?(T(),re("div",ct,[(T(!0),re(be,null,Se(n.value,M=>(T(),P(rt,{key:M.id,class:"task-list-item",once:""},{default:I(()=>[C(ut,{task:M,onOndragstart:u},null,8,["task"])]),_:2},1024))),128))])):Q("",!0)]),_:1},8,["color","subtitle","icon"]))}},ht=Ze(dt,[["__scopeId","data-v-d135276a"]]),ft={class:"row"},Ot={__name:"HomeView",setup(i){const s=ie();return(o,n)=>(T(),P(tt,null,{default:I(()=>[C(Be,{class:"q-mt-md q-pl-lg"},{default:I(()=>[C(Qe,null,{default:I(()=>[z("Plan")]),_:1}),C(U,{flat:"",round:"",icon:"filter_list",onClick:n[0]||(n[0]=e=>x(s).filter.show=!x(s).filter.show)})]),_:1}),C(et,null,{default:I(()=>[Ke(Je("div",ft,[C(at,{modelValue:x(s).filter.goal,"onUpdate:modelValue":n[1]||(n[1]=e=>x(s).filter.goal=e),label:"For Goal",dense:"",borderless:o.$q.screen.gt.xs,class:"q-px-lg q-pb-md col-xs-12 col-sm-4"},null,8,["modelValue","borderless"]),C(fe,{modelValue:x(s).filter.done,"onUpdate:modelValue":n[2]||(n[2]=e=>x(s).filter.done=e),label:"Show passed done",class:"q-pl-md q-pb-md"},null,8,["modelValue"]),C(fe,{modelValue:x(s).filter.recurring,"onUpdate:modelValue":n[3]||(n[3]=e=>x(s).filter.recurring=e),label:"Show passed recurring",class:"q-pl-md q-pb-md"},null,8,["modelValue"])],512),[[Ge,x(s).filter.show]])]),_:1}),x(s).calendar?(T(),P(it,{key:0,class:"q-pl-lg"},{default:I(()=>[(T(!0),re(be,null,Se(x(s).calendar,(e,r)=>(T(),P(ht,{key:r,tasks:e,monday:r},null,8,["tasks","monday"]))),128))]),_:1})):Q("",!0)]),_:1}))}};export{Ot as default};

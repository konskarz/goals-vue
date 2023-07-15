import{u as Ve,a as Be,b as $e}from"./use-dark-d22129ab.js";import{c as J,g as Qe,H as We,a2 as me,j as O,h as M,G as B,Q as S,R as w,S as T,T as I,a0 as x,W as $,a3 as Ye,Z as k,m as je,a4 as Ue,r as Xe,i as se,a5 as ze,F as Ze,d as Ke,e as z,k as Ge,$ as K,V as ge,a1 as Je,U as V,_ as et,Y as ve,X as _e,a6 as Z,E as tt,a7 as nt}from"./index-608f85d7.js";import{Q as rt}from"./QSlideTransition-9315b97e.js";import{u as Q,d as at,M as it}from"./MainPage-f267339b.js";import{Q as le}from"./QToggle-0cc04e26.js";import{_ as ot}from"./GoalSelect-26e438cc.js";import{a as F,Q as pe,b as st}from"./QItemLabel-34403415.js";import{_ as G}from"./ProgressLabel-5696ee40.js";import"./format-8c778330.js";import"./use-field-276a4c5e.js";import"./uid-6a237b22.js";import"./use-timeout-37cc130a.js";import"./use-model-toggle-83d9866c.js";const lt=J({name:"QTimeline",props:{...Ve,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:r=>["left","right"].includes(r)},layout:{type:String,default:"dense",validator:r=>["dense","comfortable","loose"].includes(r)}},setup(r,{slots:a}){const u=Qe(),i=Be(r,u.proxy.$q);We(me,r);const e=O(()=>`q-timeline q-timeline--${r.layout} q-timeline--${r.layout}--${r.side}`+(i.value===!0?" q-timeline--dark":""));return()=>M("ul",{class:e.value},B(a.default))}}),ut={__name:"ProgressItem",props:{item:{type:Object,required:!0}},setup(r){return(a,u)=>(S(),w(pe,null,{default:T(()=>[I(F,null,{default:T(()=>[r.item.target>0?(S(),w(G,{key:0,value:r.item.performance/r.item.target,label:r.item.performance+" of "+r.item.target,color:"positive","label-icon":"event",caption:""},null,8,["value","label"])):x("",!0),r.item.rperformance!==null?(S(),w(G,{key:1,value:r.item.rperformance/r.item.rtarget,label:(r.item.rperformance/r.item.rtarget*100).toFixed(2)+"% for "+r.item.rtarget,color:"accent","label-icon":"event_repeat",caption:""},null,8,["value","label"])):x("",!0)]),_:1})]),_:1}))}},ct={class:"row q-pl-lg q-pr-sm"},dt={__name:"HomePane",setup(r){const a=Q();return(u,i)=>(S(),$("div",null,[Ye("div",ct,[I(ot,{modelValue:k(a).filter.goal,"onUpdate:modelValue":i[0]||(i[0]=e=>k(a).filter.goal=e),label:"Filter by goal",borderless:u.$q.screen.gt.xs,dense:"","hide-bottom-space":"",class:"col-12 col-sm q-pb-md q-pr-md"},null,8,["modelValue","borderless"]),I(le,{modelValue:k(a).filter.pastDone,"onUpdate:modelValue":i[1]||(i[1]=e=>k(a).filter.pastDone=e),label:"Show past done",dense:"",class:"q-pb-md q-pr-md"},null,8,["modelValue"]),I(le,{modelValue:k(a).filter.pastRecurring,"onUpdate:modelValue":i[2]||(i[2]=e=>k(a).filter.pastRecurring=e),label:"Show past recurring",dense:"",class:"q-pb-md q-pr-lg"},null,8,["modelValue"])]),k(a).progress?(S(),w(ut,{key:0,item:k(a).progress,class:"q-pb-lg q-px-lg"},null,8,["item"])):x("",!0)]))}},ue={threshold:0,root:null,rootMargin:"0px"};function ce(r,a,u){let i,e,o;typeof u=="function"?(i=u,e=ue,o=a.cfg===void 0):(i=u.handler,e=Object.assign({},ue,u.cfg),o=a.cfg===void 0||Ue(a.cfg,e)===!1),a.handler!==i&&(a.handler=i),o===!0&&(a.cfg=e,a.observer!==void 0&&a.observer.unobserve(r),a.observer=new IntersectionObserver(([l])=>{if(typeof a.handler=="function"){if(l.rootBounds===null&&document.body.contains(r)===!0){a.observer.unobserve(r),a.observer.observe(r);return}(a.handler(l,a.observer)===!1||a.once===!0&&l.isIntersecting===!0)&&ye(r)}},e),a.observer.observe(r))}function ye(r){const a=r.__qvisible;a!==void 0&&(a.observer!==void 0&&a.observer.unobserve(r),delete r.__qvisible)}const ht=je({name:"intersection",mounted(r,{modifiers:a,value:u}){const i={once:a.once===!0};ce(r,i,u),r.__qvisible=i},updated(r,a){const u=r.__qvisible;u!==void 0&&ce(r,u,a.value)},beforeUnmount:ye}),ft=J({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(r,{slots:a,emit:u}){const i=Xe(se.value===!0?r.ssrPrerender:!1),e=O(()=>r.root!==void 0||r.margin!==void 0||r.threshold!==void 0?{handler:d,cfg:{root:r.root,rootMargin:r.margin,threshold:r.threshold}}:d),o=O(()=>r.disable!==!0&&(se.value!==!0||r.once!==!0||r.ssrPrerender!==!0)),l=O(()=>[[ht,e.value,void 0,{once:r.once}]]),s=O(()=>`--q-transition-duration: ${r.transitionDuration}ms`);function d(D){i.value!==D.isIntersecting&&(i.value=D.isIntersecting,r.onVisibility!==void 0&&u("visibility",i.value))}function c(){if(i.value===!0)return[M("div",{key:"content",style:s.value},B(a.default))];if(a.hidden!==void 0)return[M("div",{key:"hidden",style:s.value},a.hidden())]}return()=>{const D=r.transition?[M(ze,{name:"q-transition--"+r.transition},c)]:c();return Ze(r.tag,{class:"q-intersection"},D,"main",o.value,()=>l.value)}}}),mt=J({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:r=>["left","right"].includes(r)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(r,{slots:a}){const u=Ke(me,z);if(u===z)return console.error("QTimelineEntry needs to be child of QTimeline"),z;const i=O(()=>`q-timeline__entry q-timeline__entry--${r.side}`+(r.icon!==void 0||r.avatar!==void 0?" q-timeline__entry--icon":"")),e=O(()=>`q-timeline__dot text-${r.color||u.color}`),o=O(()=>u.layout==="comfortable"&&u.side==="left");return()=>{const l=Ge(a.default,[]);if(r.body!==void 0&&l.unshift(r.body),r.heading===!0){const c=[M("div"),M("div"),M(r.tag,{class:"q-timeline__heading-title"},l)];return M("div",{class:"q-timeline__heading"},o.value===!0?c.reverse():c)}let s;r.icon!==void 0?s=[M(K,{class:"row items-center justify-center",name:r.icon})]:r.avatar!==void 0&&(s=[M("img",{class:"q-timeline__dot-img",src:r.avatar})]);const d=[M("div",{class:"q-timeline__subtitle"},[M("span",{},B(a.subtitle,[r.subtitle]))]),M("div",{class:e.value},s),M("div",{class:"q-timeline__content"},[M("h6",{class:"q-timeline__title"},B(a.title,[r.title]))].concat(l))];return M("li",{class:i.value},o.value===!0?d.reverse():d)}}});var ee={};(function r(a,u,i,e){var o=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL);function l(){}function s(n){var t=u.exports.Promise,g=t!==void 0?t:a.Promise;return typeof g=="function"?new g(n):(n(l,l),null)}var d=function(){var n=Math.floor(16.666666666666668),t,g,h={},_=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(v){var f=Math.random();return h[f]=requestAnimationFrame(function m(b){_===b||_+n-1<b?(_=b,delete h[f],v()):h[f]=requestAnimationFrame(m)}),f},g=function(v){h[v]&&cancelAnimationFrame(h[v])}):(t=function(v){return setTimeout(v,n)},g=function(v){return clearTimeout(v)}),{frame:t,cancel:g}}(),c=function(){var n,t,g={};function h(_){function v(f,m){_.postMessage({options:f||{},callback:m})}_.init=function(m){var b=m.transferControlToOffscreen();_.postMessage({canvas:b},[b])},_.fire=function(m,b,H){if(t)return v(m,null),t;var p=Math.random().toString(36).slice(2);return t=s(function(P){function C(y){y.data.callback===p&&(delete g[p],_.removeEventListener("message",C),t=null,H(),P())}_.addEventListener("message",C),v(m,p),g[p]=C.bind(null,{data:{callback:p}})}),t},_.reset=function(){_.postMessage({reset:!0});for(var m in g)g[m](),delete g[m]}}return function(){if(n)return n;if(!i&&o){var _=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{n=new Worker(URL.createObjectURL(new Blob([_])))}catch(v){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",v),null}h(n)}return n}}(),D={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function R(n,t){return t?t(n):n}function be(n){return n!=null}function E(n,t,g){return R(n&&be(n[t])?n[t]:D[t],g)}function Se(n){return n<0?0:Math.floor(n)}function De(n,t){return Math.floor(Math.random()*(t-n))+n}function W(n){return parseInt(n,16)}function Ee(n){return n.map(Me)}function Me(n){var t=String(n).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:W(t.substring(0,2)),g:W(t.substring(2,4)),b:W(t.substring(4,6))}}function we(n){var t=E(n,"origin",Object);return t.x=E(t,"x",Number),t.y=E(t,"y",Number),t}function Te(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function Ie(n){var t=n.getBoundingClientRect();n.width=t.width,n.height=t.height}function ke(n){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=n,t}function Ce(n,t,g,h,_,v,f,m,b){n.save(),n.translate(t,g),n.rotate(v),n.scale(h,_),n.arc(0,0,1,f,m,b),n.restore()}function Pe(n){var t=n.angle*(Math.PI/180),g=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:n.startVelocity*.5+Math.random()*n.startVelocity,angle2D:-t+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:n.gravity*3,ovalScalar:.6,scalar:n.scalar}}function Oe(n,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var g=t.tick++/t.totalTicks,h=t.x+t.random*t.tiltCos,_=t.y+t.random*t.tiltSin,v=t.wobbleX+t.random*t.tiltCos,f=t.wobbleY+t.random*t.tiltSin;if(n.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-g)+")",n.beginPath(),t.shape==="circle")n.ellipse?n.ellipse(t.x,t.y,Math.abs(v-h)*t.ovalScalar,Math.abs(f-_)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):Ce(n,t.x,t.y,Math.abs(v-h)*t.ovalScalar,Math.abs(f-_)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var m=Math.PI/2*3,b=4*t.scalar,H=8*t.scalar,p=t.x,P=t.y,C=5,y=Math.PI/C;C--;)p=t.x+Math.cos(m)*H,P=t.y+Math.sin(m)*H,n.lineTo(p,P),m+=y,p=t.x+Math.cos(m)*b,P=t.y+Math.sin(m)*b,n.lineTo(p,P),m+=y;else n.moveTo(Math.floor(t.x),Math.floor(t.y)),n.lineTo(Math.floor(t.wobbleX),Math.floor(_)),n.lineTo(Math.floor(v),Math.floor(f)),n.lineTo(Math.floor(h),Math.floor(t.wobbleY));return n.closePath(),n.fill(),t.tick<t.totalTicks}function He(n,t,g,h,_){var v=t.slice(),f=n.getContext("2d"),m,b,H=s(function(p){function P(){m=b=null,f.clearRect(0,0,h.width,h.height),_(),p()}function C(){i&&!(h.width===e.width&&h.height===e.height)&&(h.width=n.width=e.width,h.height=n.height=e.height),!h.width&&!h.height&&(g(n),h.width=n.width,h.height=n.height),f.clearRect(0,0,h.width,h.height),v=v.filter(function(y){return Oe(f,y)}),v.length?m=d.frame(C):P()}m=d.frame(C),b=P});return{addFettis:function(p){return v=v.concat(p),H},canvas:n,promise:H,reset:function(){m&&d.cancel(m),b&&b()}}}function te(n,t){var g=!n,h=!!E(t||{},"resize"),_=E(t,"disableForReducedMotion",Boolean),v=o&&!!E(t||{},"useWorker"),f=v?c():null,m=g?Te:Ie,b=n&&f?!!n.__confetti_initialized:!1,H=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,p;function P(y,j,U){for(var L=E(y,"particleCount",Se),A=E(y,"angle",Number),N=E(y,"spread",Number),q=E(y,"startVelocity",Number),Re=E(y,"decay",Number),qe=E(y,"gravity",Number),Le=E(y,"drift",Number),re=E(y,"colors",Ee),xe=E(y,"ticks",Number),ae=E(y,"shapes"),Fe=E(y,"scalar"),ie=we(y),oe=L,X=[],Ae=n.width*ie.x,Ne=n.height*ie.y;oe--;)X.push(Pe({x:Ae,y:Ne,angle:A,spread:N,startVelocity:q,color:re[oe%re.length],shape:ae[De(0,ae.length)],ticks:xe,decay:Re,gravity:qe,drift:Le,scalar:Fe}));return p?p.addFettis(X):(p=He(n,X,m,j,U),p.promise)}function C(y){var j=_||E(y,"disableForReducedMotion",Boolean),U=E(y,"zIndex",Number);if(j&&H)return s(function(q){q()});g&&p?n=p.canvas:g&&!n&&(n=ke(U),document.body.appendChild(n)),h&&!b&&m(n);var L={width:n.width,height:n.height};f&&!b&&f.init(n),b=!0,f&&(n.__confetti_initialized=!0);function A(){if(f){var q={getBoundingClientRect:function(){if(!g)return n.getBoundingClientRect()}};m(q),f.postMessage({resize:{width:q.width,height:q.height}});return}L.width=L.height=null}function N(){p=null,h&&a.removeEventListener("resize",A),g&&n&&(document.body.removeChild(n),n=null,b=!1)}return h&&a.addEventListener("resize",A,!1),f?f.fire(y,L,N):P(y,L,N)}return C.reset=function(){f&&f.reset(),p&&p.reset()},C}var Y;function ne(){return Y||(Y=te(null,{useWorker:!0,resize:!0})),Y}u.exports=function(){return ne().apply(this,arguments)},u.exports.reset=function(){ne().reset()},u.exports.create=te})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ee,!1);const de=ee.exports;ee.exports.create;function he(){var r=3e3,a=Date.now()+r,u={startVelocity:30,spread:360,ticks:60,zIndex:0,disableForReducedMotion:!0};function i(o,l){return Math.random()*(l-o)+o}var e=setInterval(function(){var o=a-Date.now();if(o<=0)return clearInterval(e);var l=100*(o/r);de(Object.assign({},u,{particleCount:l,origin:{x:i(.1,.3),y:Math.random()-.2}})),de(Object.assign({},u,{particleCount:l,origin:{x:i(.7,.9),y:Math.random()-.2}}))},250)}const gt={__name:"TaskListItem",props:{item:{type:Object,required:!0}},emits:["ondragstart"],setup(r){const a=r,u=Q(),i=O(()=>a.item.target>1&&!a.item.done),e=O(()=>!a.item.performance_history||!a.item.performance_history.length?null:at.formatDate(a.item.performance_history[0].updated,"DD.MM.YYYY HH:mm"));function o(c,D){c.push({name:"task",params:{id:D}})}function l(){const c={done:null};a.item.performance>=a.item.target&&(c.performance=a.item.target-1),u.updateItem(a.item.id+"/",c).then(()=>u.refetch())}function s(){const c={performance:a.item.performance+1};c.performance>=a.item.target&&he(),u.updateItem(a.item.id+"/",c).then(()=>u.refetch())}function d(){const c={done:new Date().toISOString()};he(),u.updateItem(a.item.id+"/",c).then(()=>u.refetch())}return(c,D)=>(S(),w(pe,{clickable:"",active:!!r.item.done,"active-class":"text-positive"},{default:T(()=>[r.item.group_id?(S(),w(F,{key:0,thumbnail:""},{default:T(()=>[I(K,{name:"event_repeat"})]),_:1})):(S(),w(F,{key:1,thumbnail:"",style:{cursor:"grab"},draggable:"true",onDragstart:D[0]||(D[0]=R=>c.$emit("ondragstart",R,r.item)),"onTouchmove:native":D[1]||(D[1]=R=>{})},{default:T(()=>[I(K,{name:"drag_indicator"})]),_:1})),I(F,{onClick:D[2]||(D[2]=R=>o(c.$router,r.item.id))},{default:T(()=>[I(st,null,{default:T(()=>[ge(Je(r.item.name),1)]),_:1}),i.value?(S(),w(G,{key:0,value:r.item.performance/r.item.target,label:r.item.performance+" of "+r.item.target,hint:e.value,color:"positive","label-icon":"track_changes","hint-icon":"update",caption:""},null,8,["value","label","hint"])):x("",!0)]),_:1}),I(F,{avatar:""},{default:T(()=>[r.item.done?(S(),w(V,{key:0,flat:"",round:"",icon:"check_box",onClick:l})):i.value?(S(),w(V,{key:1,flat:"",round:"",icon:"plus_one",onClick:s})):(S(),w(V,{key:2,flat:"",round:"",icon:"check_box_outline_blank",onClick:d}))]),_:1})]),_:1},8,["active"]))}};var fe;(function(r){var a=function(){function i(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(i.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(e){this._dropEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(e){this._effectAllowed=e},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),i.prototype.clearData=function(e){e!=null?delete this._data[e]:this._data=null},i.prototype.getData=function(e){return this._data[e]||""},i.prototype.setData=function(e,o){this._data[e]=o},i.prototype.setDragImage=function(e,o,l){var s=u._instance;s._imgCustom=e,s._imgOffset={x:o,y:l}},i}();r.DataTransfer=a;var u=function(){function i(){if(this._lastClick=0,i._instance)throw"DragDropTouch instance already created.";var e=!1;if(document.addEventListener("test",function(){},{get passive(){return e=!0,!0}}),"ontouchstart"in document){var o=document,l=this._touchstart.bind(this),s=this._touchmove.bind(this),d=this._touchend.bind(this),c=e?{passive:!1,capture:!1}:!1;o.addEventListener("touchstart",l,c),o.addEventListener("touchmove",s,c),o.addEventListener("touchend",d),o.addEventListener("touchcancel",d)}}return i.getInstance=function(){return i._instance},i.prototype._touchstart=function(e){var o=this;if(this._shouldHandle(e)){if(Date.now()-this._lastClick<i._DBLCLICK&&this._dispatchEvent(e,"dblclick",e.target)){e.cancelable&&e.preventDefault(),this._reset();return}this._reset();var l=this._closestDraggable(e.target);l&&!this._dispatchEvent(e,"mousemove",e.target)&&!this._dispatchEvent(e,"mousedown",e.target)&&(this._dragSource=l,this._ptDown=this._getPoint(e),this._lastTouch=e,e.cancelable&&e.preventDefault(),setTimeout(function(){o._dragSource==l&&o._img==null&&o._dispatchEvent(e,"contextmenu",l)&&o._reset()},i._CTXMENU),i._ISPRESSHOLDMODE&&(this._pressHoldInterval=setTimeout(function(){o._isDragEnabled=!0,o._touchmove(e)},i._PRESSHOLDAWAIT)))}},i.prototype._touchmove=function(e){if(this._shouldCancelPressHoldMove(e)){this._reset();return}if(this._shouldHandleMove(e)||this._shouldHandlePressHoldMove(e)){var o=this._getTarget(e);if(this._dispatchEvent(e,"mousemove",o)){this._lastTouch=e,e.cancelable&&e.preventDefault();return}this._dragSource&&!this._img&&this._shouldStartDragging(e)&&(this._dispatchEvent(e,"dragstart",this._dragSource),this._createImage(e),this._dispatchEvent(e,"dragenter",o)),this._img&&(this._lastTouch=e,e.cancelable&&e.preventDefault(),o!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(e,"dragenter",o),this._lastTarget=o),this._moveImage(e),this._isDropZone=this._dispatchEvent(e,"dragover",o))}},i.prototype._touchend=function(e){if(this._shouldHandle(e)){if(this._dispatchEvent(this._lastTouch,"mouseup",e.target)){e.cancelable&&e.preventDefault();return}this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",e.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(e.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},i.prototype._shouldHandle=function(e){return e&&!e.defaultPrevented&&e.touches&&e.touches.length<2},i.prototype._shouldHandleMove=function(e){return!i._ISPRESSHOLDMODE&&this._shouldHandle(e)},i.prototype._shouldHandlePressHoldMove=function(e){return i._ISPRESSHOLDMODE&&this._isDragEnabled&&e&&e.touches&&e.touches.length},i.prototype._shouldCancelPressHoldMove=function(e){return i._ISPRESSHOLDMODE&&!this._isDragEnabled&&this._getDelta(e)>i._PRESSHOLDMARGIN},i.prototype._shouldStartDragging=function(e){var o=this._getDelta(e);return o>i._THRESHOLD||i._ISPRESSHOLDMODE&&o>=i._PRESSHOLDTHRESHOLD},i.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new a,clearInterval(this._pressHoldInterval)},i.prototype._getPoint=function(e,o){return e&&e.touches&&(e=e.touches[0]),{x:o?e.pageX:e.clientX,y:o?e.pageY:e.clientY}},i.prototype._getDelta=function(e){if(i._ISPRESSHOLDMODE&&!this._ptDown)return 0;var o=this._getPoint(e);return Math.abs(o.x-this._ptDown.x)+Math.abs(o.y-this._ptDown.y)},i.prototype._getTarget=function(e){for(var o=this._getPoint(e),l=document.elementFromPoint(o.x,o.y);l&&getComputedStyle(l).pointerEvents=="none";)l=l.parentElement;return l},i.prototype._createImage=function(e){this._img&&this._destroyImage();var o=this._imgCustom||this._dragSource;if(this._img=o.cloneNode(!0),this._copyStyle(o,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var l=o.getBoundingClientRect(),s=this._getPoint(e);this._imgOffset={x:s.x-l.left,y:s.y-l.top},this._img.style.opacity=i._OPACITY.toString()}this._moveImage(e),document.body.appendChild(this._img)},i.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},i.prototype._moveImage=function(e){var o=this;requestAnimationFrame(function(){if(o._img){var l=o._getPoint(e,!0),s=o._img.style;s.position="absolute",s.pointerEvents="none",s.zIndex="999999",s.left=Math.round(l.x-o._imgOffset.x)+"px",s.top=Math.round(l.y-o._imgOffset.y)+"px"}})},i.prototype._copyProps=function(e,o,l){for(var s=0;s<l.length;s++){var d=l[s];e[d]=o[d]}},i.prototype._copyStyle=function(e,o){if(i._rmvAtts.forEach(function(R){o.removeAttribute(R)}),e instanceof HTMLCanvasElement){var l=e,s=o;s.width=l.width,s.height=l.height,s.getContext("2d").drawImage(l,0,0)}for(var d=getComputedStyle(e),c=0;c<d.length;c++){var D=d[c];D.indexOf("transition")<0&&(o.style[D]=d[D])}o.style.pointerEvents="none";for(var c=0;c<e.children.length;c++)this._copyStyle(e.children[c],o.children[c])},i.prototype._dispatchEvent=function(e,o,l){if(e&&l){var s=document.createEvent("Event"),d=e.touches?e.touches[0]:e;return s.initEvent(o,!0,!0),s.button=0,s.which=s.buttons=1,this._copyProps(s,e,i._kbdProps),this._copyProps(s,d,i._ptProps),s.dataTransfer=this._dataTransfer,l.dispatchEvent(s),s.defaultPrevented}return!1},i.prototype._closestDraggable=function(e){for(;e;e=e.parentElement)if(e.hasAttribute("draggable")&&e.draggable)return e;return null},i}();u._instance=new u,u._THRESHOLD=5,u._OPACITY=.5,u._DBLCLICK=500,u._CTXMENU=900,u._ISPRESSHOLDMODE=!1,u._PRESSHOLDAWAIT=400,u._PRESSHOLDMARGIN=25,u._PRESSHOLDTHRESHOLD=0,u._rmvAtts="id,class,style,draggable".split(","),u._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),u._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),r.DragDropTouch=u})(fe||(fe={}));const vt={key:0},_t={__name:"WeekTimelineEntry",props:{week:{type:Object,required:!0},monday:{type:String,required:!0}},setup(r){const a=r,u=Q(),i=O(()=>a.week.tasks.length?[...a.week.tasks].sort((l,s)=>s.target-l.target):null);function e(l,s){const d={id:s.id,planned:s.planned,monday:a.monday};l.dataTransfer.setData("text",JSON.stringify(d)),l.dataTransfer.dropEffect="move"}function o(l){const s=JSON.parse(l.dataTransfer.getData("text"));s.monday!==a.monday&&u.moveItem(s,a.monday)}return(l,s)=>(S(),w(mt,{subtitle:r.week.title,color:r.week.current?"orange":"primary",icon:r.week.start?"calendar_month":void 0,onDragover:s[0]||(s[0]=Z(()=>{},["prevent"])),onDragenter:s[1]||(s[1]=Z(()=>{},["prevent"])),onDrop:s[2]||(s[2]=Z(d=>o(d),["prevent"]))},{default:T(()=>[i.value?(S(),$("div",vt,[(S(!0),$(ve,null,_e(i.value,d=>(S(),w(ft,{key:d.id,class:"min-h-58",once:""},{default:T(()=>[I(gt,{item:d,onOndragstart:e},null,8,["item"])]),_:2},1024))),128))])):x("",!0)]),_:1},8,["subtitle","color","icon"]))}},pt=et(_t,[["__scopeId","data-v-ad693319"]]),Ht={__name:"HomeView",setup(r){const a=Q();return(u,i)=>(S(),w(it,null,{toolbar:T(()=>[I($e,null,{default:T(()=>[ge("Tasks")]),_:1}),I(V,{flat:"",round:"",icon:"more_vert",onClick:i[0]||(i[0]=e=>k(a).filter.show=!k(a).filter.show)})]),default:T(()=>[I(rt,null,{default:T(()=>[tt(I(dt,null,null,512),[[nt,k(a).filter.show]])]),_:1}),k(a).calendar?(S(),w(lt,{key:0,class:"q-pl-lg"},{default:T(()=>[(S(!0),$(ve,null,_e(k(a).calendar,(e,o)=>(S(),w(pt,{key:o,week:e,monday:o},null,8,["week","monday"]))),128))]),_:1})):x("",!0)]),_:1}))}};export{Ht as default};

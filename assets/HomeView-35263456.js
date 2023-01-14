import{b as S,a as V,Q as K}from"./api.client-4f1613d5.js";import{c as Q,D as B,E as X,U,f as v,h as f,S as w,g as j,ai as $,d as F,e as T,j as W,a9 as H,r as I,Z as g,_ as d,aj as m,ak as Z,a2 as _,a3 as c,al as O,am as z,a4 as y,an as G,ao as J,ap as E,a5 as x,aa as q,aq as tt,a6 as L,a8 as M,a7 as Y,ar as P}from"./index-ee49e85a.js";import{Q as et}from"./QPage-4ebdf1c4.js";import{d as D}from"./date-f80771f5.js";import{Q as at}from"./QList-ed27aa2f.js";import{a as C,Q as nt}from"./format-30bf4482.js";import{Q as R}from"./QItemLabel-90e823b9.js";import{_ as it,u as st}from"./NumberInput-adfcdda3.js";import{_ as ot}from"./DurationInput-fd1c95c4.js";const rt=Q({name:"QTimeline",props:{...B,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:n=>["left","right"].includes(n)},layout:{type:String,default:"dense",validator:n=>["dense","comfortable","loose"].includes(n)}},setup(n,{slots:u}){const o=j(),e=X(n,o.proxy.$q);U($,n);const t=v(()=>`q-timeline q-timeline--${n.layout} q-timeline--${n.layout}--${n.side}`+(e.value===!0?" q-timeline--dark":""));return()=>f("ul",{class:t.value},w(u.default))}}),lt=Q({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:n=>["left","right"].includes(n)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(n,{slots:u}){const o=F($,T);if(o===T)return console.error("QTimelineEntry needs to be child of QTimeline"),T;const e=v(()=>`q-timeline__entry q-timeline__entry--${n.side}`+(n.icon!==void 0||n.avatar!==void 0?" q-timeline__entry--icon":"")),t=v(()=>`q-timeline__dot text-${n.color||o.color}`),a=v(()=>o.layout==="comfortable"&&o.side==="left");return()=>{const i=W(u.default,[]);if(n.body!==void 0&&i.unshift(n.body),n.heading===!0){const r=[f("div"),f("div"),f(n.tag,{class:"q-timeline__heading-title"},i)];return f("div",{class:"q-timeline__heading"},a.value===!0?r.reverse():r)}let s;n.icon!==void 0?s=[f(H,{class:"row items-center justify-center",name:n.icon})]:n.avatar!==void 0&&(s=[f("img",{class:"q-timeline__dot-img",src:n.avatar})]);const l=[f("div",{class:"q-timeline__subtitle"},[f("span",{},w(u.subtitle,[n.subtitle]))]),f("div",{class:t.value},s),f("div",{class:"q-timeline__content"},[f("h6",{class:"q-timeline__title"},w(u.title,[n.title]))].concat(i))];return f("li",{class:e.value},a.value===!0?l.reverse():l)}}});var A;(function(n){var u=function(){function e(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(e.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(t){this._dropEffect=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(t){this._effectAllowed=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),e.prototype.clearData=function(t){t!=null?delete this._data[t]:this._data=null},e.prototype.getData=function(t){return this._data[t]||""},e.prototype.setData=function(t,a){this._data[t]=a},e.prototype.setDragImage=function(t,a,i){var s=o._instance;s._imgCustom=t,s._imgOffset={x:a,y:i}},e}();n.DataTransfer=u;var o=function(){function e(){if(this._lastClick=0,e._instance)throw"DragDropTouch instance already created.";var t=!1;if(document.addEventListener("test",function(){},{get passive(){return t=!0,!0}}),"ontouchstart"in document){var a=document,i=this._touchstart.bind(this),s=this._touchmove.bind(this),l=this._touchend.bind(this),r=t?{passive:!1,capture:!1}:!1;a.addEventListener("touchstart",i,r),a.addEventListener("touchmove",s,r),a.addEventListener("touchend",l),a.addEventListener("touchcancel",l)}}return e.getInstance=function(){return e._instance},e.prototype._touchstart=function(t){var a=this;if(this._shouldHandle(t)){if(Date.now()-this._lastClick<e._DBLCLICK&&this._dispatchEvent(t,"dblclick",t.target)){t.cancelable&&t.preventDefault(),this._reset();return}this._reset();var i=this._closestDraggable(t.target);i&&!this._dispatchEvent(t,"mousemove",t.target)&&!this._dispatchEvent(t,"mousedown",t.target)&&(this._dragSource=i,this._ptDown=this._getPoint(t),this._lastTouch=t,t.cancelable&&t.preventDefault(),setTimeout(function(){a._dragSource==i&&a._img==null&&a._dispatchEvent(t,"contextmenu",i)&&a._reset()},e._CTXMENU),e._ISPRESSHOLDMODE&&(this._pressHoldInterval=setTimeout(function(){a._isDragEnabled=!0,a._touchmove(t)},e._PRESSHOLDAWAIT)))}},e.prototype._touchmove=function(t){if(this._shouldCancelPressHoldMove(t)){this._reset();return}if(this._shouldHandleMove(t)||this._shouldHandlePressHoldMove(t)){var a=this._getTarget(t);if(this._dispatchEvent(t,"mousemove",a)){this._lastTouch=t,t.cancelable&&t.preventDefault();return}this._dragSource&&!this._img&&this._shouldStartDragging(t)&&(this._dispatchEvent(t,"dragstart",this._dragSource),this._createImage(t),this._dispatchEvent(t,"dragenter",a)),this._img&&(this._lastTouch=t,t.cancelable&&t.preventDefault(),a!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(t,"dragenter",a),this._lastTarget=a),this._moveImage(t),this._isDropZone=this._dispatchEvent(t,"dragover",a))}},e.prototype._touchend=function(t){if(this._shouldHandle(t)){if(this._dispatchEvent(this._lastTouch,"mouseup",t.target)){t.cancelable&&t.preventDefault();return}this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",t.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(t.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},e.prototype._shouldHandle=function(t){return t&&!t.defaultPrevented&&t.touches&&t.touches.length<2},e.prototype._shouldHandleMove=function(t){return!e._ISPRESSHOLDMODE&&this._shouldHandle(t)},e.prototype._shouldHandlePressHoldMove=function(t){return e._ISPRESSHOLDMODE&&this._isDragEnabled&&t&&t.touches&&t.touches.length},e.prototype._shouldCancelPressHoldMove=function(t){return e._ISPRESSHOLDMODE&&!this._isDragEnabled&&this._getDelta(t)>e._PRESSHOLDMARGIN},e.prototype._shouldStartDragging=function(t){var a=this._getDelta(t);return a>e._THRESHOLD||e._ISPRESSHOLDMODE&&a>=e._PRESSHOLDTHRESHOLD},e.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new u,clearInterval(this._pressHoldInterval)},e.prototype._getPoint=function(t,a){return t&&t.touches&&(t=t.touches[0]),{x:a?t.pageX:t.clientX,y:a?t.pageY:t.clientY}},e.prototype._getDelta=function(t){if(e._ISPRESSHOLDMODE&&!this._ptDown)return 0;var a=this._getPoint(t);return Math.abs(a.x-this._ptDown.x)+Math.abs(a.y-this._ptDown.y)},e.prototype._getTarget=function(t){for(var a=this._getPoint(t),i=document.elementFromPoint(a.x,a.y);i&&getComputedStyle(i).pointerEvents=="none";)i=i.parentElement;return i},e.prototype._createImage=function(t){this._img&&this._destroyImage();var a=this._imgCustom||this._dragSource;if(this._img=a.cloneNode(!0),this._copyStyle(a,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var i=a.getBoundingClientRect(),s=this._getPoint(t);this._imgOffset={x:s.x-i.left,y:s.y-i.top},this._img.style.opacity=e._OPACITY.toString()}this._moveImage(t),document.body.appendChild(this._img)},e.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},e.prototype._moveImage=function(t){var a=this;requestAnimationFrame(function(){if(a._img){var i=a._getPoint(t,!0),s=a._img.style;s.position="absolute",s.pointerEvents="none",s.zIndex="999999",s.left=Math.round(i.x-a._imgOffset.x)+"px",s.top=Math.round(i.y-a._imgOffset.y)+"px"}})},e.prototype._copyProps=function(t,a,i){for(var s=0;s<i.length;s++){var l=i[s];t[l]=a[l]}},e.prototype._copyStyle=function(t,a){if(e._rmvAtts.forEach(function(p){a.removeAttribute(p)}),t instanceof HTMLCanvasElement){var i=t,s=a;s.width=i.width,s.height=i.height,s.getContext("2d").drawImage(i,0,0)}for(var l=getComputedStyle(t),r=0;r<l.length;r++){var h=l[r];h.indexOf("transition")<0&&(a.style[h]=l[h])}a.style.pointerEvents="none";for(var r=0;r<t.children.length;r++)this._copyStyle(t.children[r],a.children[r])},e.prototype._dispatchEvent=function(t,a,i){if(t&&i){var s=document.createEvent("Event"),l=t.touches?t.touches[0]:t;return s.initEvent(a,!0,!0),s.button=0,s.which=s.buttons=1,this._copyProps(s,t,e._kbdProps),this._copyProps(s,l,e._ptProps),s.dataTransfer=this._dataTransfer,i.dispatchEvent(s),s.defaultPrevented}return!1},e.prototype._closestDraggable=function(t){for(;t;t=t.parentElement)if(t.hasAttribute("draggable")&&t.draggable)return t;return null},e}();o._instance=new o,o._THRESHOLD=5,o._OPACITY=.5,o._DBLCLICK=500,o._CTXMENU=900,o._ISPRESSHOLDMODE=!1,o._PRESSHOLDAWAIT=400,o._PRESSHOLDMARGIN=25,o._PRESSHOLDTHRESHOLD=0,o._rmvAtts="id,class,style,draggable".split(","),o._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),o._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),n.DragDropTouch=o})(A||(A={}));const ut=f("div",{class:"q-space"}),ct=Q({name:"QSpace",setup(){return()=>ut}}),dt=()=>!0;function ft(n){const u={};return n.forEach(o=>{u[o]=dt}),u}function b(){const{emit:n,proxy:u}=j(),o=I(null);function e(){o.value.show()}function t(){o.value.hide()}function a(s){n("ok",s),t()}function i(){n("hide")}return Object.assign(u,{show:e,hide:t}),{dialogRef:o,onDialogHide:i,onDialogOK:a,onDialogCancel:t}}const N=["ok","hide"];b.emits=N;b.emitsObject=ft(N);const ht=J("div",{class:"text-h6"},"Progress",-1),_t={__name:"ProgressDialog",props:{task:{type:Object,required:!0}},emits:[...b.emits],setup(n){const u=n,o=I(u.task.performance),e=I(null),{dialogRef:t,onDialogHide:a,onDialogOK:i,onDialogCancel:s}=b(),l=v(()=>o.value===u.task.performance&&!e.value);function r(){i({performance:o.value,duration:e.value})}return(h,p)=>(_(),g(Z,{ref_key:"dialogRef",ref:t,onHide:m(a)},{default:d(()=>[c(G,{class:"q-dialog-plugin"},{default:d(()=>[c(O,null,{default:d(()=>[ht]),_:1}),c(O,null,{default:d(()=>[c(it,{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=k=>o.value=k),label:"Performance",hint:"of "+n.task.target},null,8,["modelValue","hint"])]),_:1}),c(O,null,{default:d(()=>[c(ot,{modelValue:e.value,"onUpdate:modelValue":p[1]||(p[1]=k=>e.value=k),label:"Time spent"},null,8,["modelValue"])]),_:1}),c(z,{align:"right"},{default:d(()=>[c(y,{flat:"",label:"Edit Task",class:"text-primary",to:{name:"task",params:{id:n.task.id}}},null,8,["to"]),c(ct),c(y,{flat:"",label:"Cancel",class:"text-primary",onClick:m(s)},null,8,["onClick"]),c(y,{disable:m(l),flat:"",label:"Submit",class:"text-primary",onClick:r},null,8,["disable"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}},mt={__name:"TaskListItem",props:{task:{type:Object,required:!0}},emits:["mutate","ondragstart"],setup(n,{emit:u}){const o=n,e=st(),t=v(()=>[o.task.performance,"of",o.task.target].join(" "));function a(){e.dialog({component:_t,componentProps:{task:o.task}}).onOk(i=>{i.performance!==o.task.performance&&S.update("/tasks/"+o.task.id+"/",{performance:i.performance}).then(()=>u("mutate")),i.duration&&S.create("/times/",{task:o.task.id,start:new Date().toISOString(),end:null,duration:i.duration,description:""}).then(()=>u("mutate"))})}return(i,s)=>(_(),g(nt,{clickable:"",class:tt(n.task.done?"text-grey":"")},{default:d(()=>[c(C,{thumbnail:"",style:{cursor:"grab"},draggable:"true",onDragstart:s[0]||(s[0]=l=>i.$emit("ondragstart",l,n.task)),"onTouchmove:native":s[1]||(s[1]=l=>{})},{default:d(()=>[c(H,{name:"drag_indicator"})]),_:1}),n.task.group_id?(_(),g(C,{key:0,thumbnail:""},{default:d(()=>[c(H,{name:"event_repeat"})]),_:1})):E("",!0),c(C,{onClick:a},{default:d(()=>[c(R,null,{default:d(()=>[x(q(n.task.name),1)]),_:1}),c(R,{caption:""},{default:d(()=>[x(q(m(t)),1)]),_:1})]),_:1})]),_:1},8,["class"]))}},gt={__name:"WeekTimelineEntry",props:{week:{type:Object,required:!0}},emits:["mutate"],setup(n,{emit:u}){const o=n,e=new Date(o.week.day),t=D.formatDate(e,"w-YYYY-Q-MMM D").split("-"),a=["Week "+t[0],t[1]+" / Q"+t[2],t[3]].join(" · ");function i(l,r){const h={id:r.id,day:D.getDayOfWeek(r.planned),week:t[0]};l.dataTransfer.setData("text",JSON.stringify(h)),l.dataTransfer.dropEffect="move"}function s(l){const r=JSON.parse(l.dataTransfer.getData("text"));if(r.week===t[0])return;const h=D.addToDate(e,{days:r.day-1});S.update("/tasks/"+r.id+"/",{planned:h.toISOString()}).then(()=>u("mutate"))}return(l,r)=>(_(),g(lt,{subtitle:m(a),onDragover:r[1]||(r[1]=P(()=>{},["prevent"])),onDragenter:r[2]||(r[2]=P(()=>{},["prevent"])),onDrop:r[3]||(r[3]=P(h=>s(h),["prevent"]))},{default:d(()=>[n.week.tasks&&n.week.tasks.length?(_(),g(at,{key:0},{default:d(()=>[(_(!0),L(M,null,Y(n.week.tasks,h=>(_(),g(mt,{key:h.id,task:h,onOndragstart:i,onMutate:r[0]||(r[0]=p=>l.$emit("mutate"))},null,8,["task"]))),128))]),_:1})):E("",!0)]),_:1},8,["subtitle"]))}},Ot={__name:"HomeView",setup(n){const u=D.formatDate(new Date,"YYYY-w"),{data:o,mutate:e}=S.read("/plan/");return(t,a)=>(_(),g(et,{padding:""},{default:d(()=>[c(K,null,{default:d(()=>[c(V,null,{default:d(()=>[x("Plan")]),_:1}),c(y,{to:{name:"task",params:{id:"create"}},icon:"assignment_add",flat:"",round:""})]),_:1}),m(o)?(_(),g(rt,{key:0,layout:"dense",class:"q-px-md"},{default:d(()=>[(_(!0),L(M,null,Y(m(o),(i,s)=>(_(),L(M,{key:s},[i.day?(_(),g(gt,{key:0,color:s===m(u)?"orange":"",week:i,onMutate:m(e)},null,8,["color","week","onMutate"])):E("",!0)],64))),128))]),_:1})):E("",!0)]),_:1}))}};export{Ot as default};

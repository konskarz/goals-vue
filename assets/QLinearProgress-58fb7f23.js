import{c as _,a as k,h,as as w,D as x,aX as T,E as B,aY as C,f as r,I as L,g as E}from"./index-29616774.js";const D=_({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:f,emit:o}){let d=!1,c,i,n=null,s=null,l,g;function u(){c&&c(),c=null,d=!1,n!==null&&(clearTimeout(n),n=null),s!==null&&(clearTimeout(s),s=null),i!==void 0&&i.removeEventListener("transitionend",l),l=null}function y(t,a,v){t.style.overflowY="hidden",a!==void 0&&(t.style.height=`${a}px`),t.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,d=!0,c=v}function b(t,a){t.style.overflowY=null,t.style.height=null,t.style.transition=null,u(),a!==g&&o(a)}function $(t,a){let v=0;i=t,d===!0?(u(),v=t.offsetHeight===t.scrollHeight?0:void 0):g="hide",y(t,v,a),n=setTimeout(()=>{n=null,t.style.height=`${t.scrollHeight}px`,l=m=>{s=null,(Object(m)!==m||m.target===t)&&b(t,"show")},t.addEventListener("transitionend",l),s=setTimeout(l,e.duration*1.1)},100)}function q(t,a){let v;i=t,d===!0?u():(g="show",v=t.scrollHeight),y(t,v,a),n=setTimeout(()=>{n=null,t.style.height=0,l=m=>{s=null,(Object(m)!==m||m.target===t)&&b(t,"hide")},t.addEventListener("transitionend",l),s=setTimeout(l,e.duration*1.1)},100)}return k(()=>{d===!0&&u()}),()=>h(w,{css:!1,appear:e.appear,onEnter:$,onLeave:q},f.default)}}),z={xs:2,sm:4,md:6,lg:10,xl:14};function S(e,f,o){return{transform:f===!0?`translateX(${o.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const F=_({name:"QLinearProgress",props:{...x,...T,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:f}){const{proxy:o}=E(),d=B(e,o.$q),c=C(e,z),i=r(()=>e.indeterminate===!0||e.query===!0),n=r(()=>e.reverse!==e.query),s=r(()=>({...c.value!==null?c.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),l=r(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),g=r(()=>S(e.buffer!==void 0?e.buffer:1,n.value,o.$q)),u=r(()=>`with${e.instantFeedback===!0?"out":""}-transition`),y=r(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${u.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),b=r(()=>S(i.value===!0?1:e.value,n.value,o.$q)),$=r(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${u.value} q-linear-progress__model--${i.value===!0?"in":""}determinate`),q=r(()=>({width:`${e.value*100}%`})),t=r(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${u.value}`);return()=>{const a=[h("div",{class:y.value,style:g.value}),h("div",{class:$.value,style:b.value})];return e.stripe===!0&&i.value===!1&&a.push(h("div",{class:t.value,style:q.value})),h("div",{class:l.value,style:s.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},L(f.default,a))}}});export{D as Q,F as a};

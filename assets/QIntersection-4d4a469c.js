import{c as f,d as o,h as u,m as h,N as S,a1 as R,g as C,O as L,as as $,r as q,D as A,M as K,f as O,A as j,at as M,i as k,au as F,_ as T}from"./index-31a503aa.js";const W=f({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=o(()=>parseInt(e.lines,10)),a=o(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),r=o(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>u("div",{style:r.value,class:a.value},h(t.default))}}),x=f({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=o(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>u("div",{class:n.value},h(t.default))}}),H=f({name:"QItem",props:{...S,...R,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=C(),r=L(e,a),{hasLink:l,linkAttrs:c,linkClass:d,linkTag:b,navigateOnClick:m}=$(),s=q(null),g=q(null),y=o(()=>e.clickable===!0||l.value===!0||e.tag==="label"),v=o(()=>e.disable!==!0&&y.value===!0),Q=o(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=o(()=>e.insetLevel===void 0?null:{["padding"+(a.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function E(i){v.value===!0&&(g.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===s.value?g.value.focus():document.activeElement===g.value&&s.value.focus()),m(i))}function P(i){if(v.value===!0&&A(i,13)===!0){K(i),i.qKeyEvent=!0;const _=new MouseEvent("click",i);_.qKeyEvent=!0,s.value.dispatchEvent(_)}n("keyup",i)}function N(){const i=O(t.default,[]);return v.value===!0&&i.unshift(u("div",{class:"q-focus-helper",tabindex:-1,ref:g})),i}return()=>{const i={ref:s,class:Q.value,style:w.value,role:"listitem",onClick:E,onKeyup:P};return v.value===!0?(i.tabindex=e.tabindex||"0",Object.assign(i,c.value)):y.value===!0&&(i["aria-disabled"]="true"),u(b.value,i,N())}}}),z=f({name:"QList",props:{...S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=C(),a=L(e,n.proxy.$q),r=o(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>u(e.tag,{class:r.value},h(t.default))}}),B={threshold:0,root:null,rootMargin:"0px"};function I(e,t,n){let a,r,l;typeof n=="function"?(a=n,r=B,l=t.cfg===void 0):(a=n.handler,r=Object.assign({},B,n.cfg),l=t.cfg===void 0||M(t.cfg,r)===!1),t.handler!==a&&(t.handler=a),l===!0&&(t.cfg=r,t.observer!==void 0&&t.observer.unobserve(e),t.observer=new IntersectionObserver(([c])=>{if(typeof t.handler=="function"){if(c.rootBounds===null&&document.body.contains(e)===!0){t.observer.unobserve(e),t.observer.observe(e);return}(t.handler(c,t.observer)===!1||t.once===!0&&c.isIntersecting===!0)&&D(e)}},r),t.observer.observe(e))}function D(e){const t=e.__qvisible;t!==void 0&&(t.observer!==void 0&&t.observer.unobserve(e),delete e.__qvisible)}const U=j({name:"intersection",mounted(e,{modifiers:t,value:n}){const a={once:t.once===!0};I(e,a,n),e.__qvisible=a},updated(e,t){const n=e.__qvisible;n!==void 0&&I(e,n,t.value)},beforeUnmount:D}),G=f({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(e,{slots:t,emit:n}){const a=q(k.value===!0?e.ssrPrerender:!1),r=o(()=>e.root!==void 0||e.margin!==void 0||e.threshold!==void 0?{handler:b,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:b),l=o(()=>e.disable!==!0&&(k.value!==!0||e.once!==!0||e.ssrPrerender!==!0)),c=o(()=>[[U,r.value,void 0,{once:e.once}]]),d=o(()=>`--q-transition-duration: ${e.transitionDuration}ms`);function b(s){a.value!==s.isIntersecting&&(a.value=s.isIntersecting,e.onVisibility!==void 0&&n("visibility",a.value))}function m(){if(a.value===!0)return[u("div",{key:"content",style:d.value},h(t.default))];if(t.hidden!==void 0)return[u("div",{key:"hidden",style:d.value},t.hidden())]}return()=>{const s=e.transition?[u(F,{name:"q-transition--"+e.transition},m)]:m();return T(e.tag,{class:"q-intersection"},s,"main",l.value,()=>c.value)}}});export{H as Q,W as a,x as b,z as c,G as d};

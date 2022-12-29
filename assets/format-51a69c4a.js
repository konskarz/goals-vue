import{c as b,j as s,h as c,G as E,a0 as L,a1 as w,r as m,a2 as I,z as S,k as j,g as A}from"./index-99c26e0d.js";import{u as K,a as Q}from"./api.client-cfdf14f0.js";const $=b({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=s(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:n.value},E(t.default))}}),D=b({name:"QItem",props:{...K,...L,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:u}}=A(),l=Q(e,u),{hasLink:v,linkAttrs:q,linkClass:k,linkTag:h,navigateOnClick:y}=w(),o=m(null),r=m(null),d=s(()=>e.clickable===!0||v.value===!0||e.tag==="label"),i=s(()=>e.disable!==!0&&d.value===!0),g=s(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=s(()=>e.insetLevel===void 0?null:{["padding"+(u.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function C(a){i.value===!0&&(r.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===o.value?r.value.focus():document.activeElement===r.value&&o.value.focus()),y(a))}function B(a){if(i.value===!0&&I(a,13)===!0){S(a),a.qKeyEvent=!0;const f=new MouseEvent("click",a);f.qKeyEvent=!0,o.value.dispatchEvent(f)}n("keyup",a)}function x(){const a=j(t.default,[]);return i.value===!0&&a.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),a}return()=>{const a={ref:o,class:g.value,style:_.value,role:"listitem",onClick:C,onKeyup:B};return i.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,q.value)):d.value===!0&&(a["aria-disabled"]="true"),c(h.value,a,x())}}});function M(e){return e.charAt(0).toUpperCase()+e.slice(1)}function P(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function T(e,t,n){if(n<=t)return t;const u=n-t+1;let l=t+(e-t)%u;return l<t&&(l=u+l),l===0?0:l}function F(e,t=2,n="0"){if(e==null)return e;const u=""+e;return u.length>=t?u:new Array(t-u.length+1).join(n)+u}export{D as Q,$ as a,P as b,M as c,T as n,F as p};

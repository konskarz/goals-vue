import{c as v,f as u,h as c,S as q,D as L,ag as I,E,ah as S,r as b,g as Q,$ as j,C as A,j as K}from"./index-b0aafda0.js";const $=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=u(()=>parseInt(e.lines,10)),l=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=u(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>c("div",{style:i.value,class:l.value},q(t.default))}}),D=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:n.value},q(t.default))}}),z=v({name:"QItem",props:{...L,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=Q(),i=E(e,l),{hasLink:d,linkAttrs:k,linkClass:h,linkTag:_,navigateOnClick:y}=S(),o=b(null),r=b(null),f=u(()=>e.clickable===!0||d.value===!0||e.tag==="label"),s=u(()=>e.disable!==!0&&f.value===!0),g=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=u(()=>e.insetLevel===void 0?null:{["padding"+(l.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function C(a){s.value===!0&&(r.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===o.value?r.value.focus():document.activeElement===r.value&&o.value.focus()),y(a))}function x(a){if(s.value===!0&&j(a,13)===!0){A(a),a.qKeyEvent=!0;const m=new MouseEvent("click",a);m.qKeyEvent=!0,o.value.dispatchEvent(m)}n("keyup",a)}function w(){const a=K(t.default,[]);return s.value===!0&&a.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),a}return()=>{const a={ref:o,class:g.value,style:B.value,role:"listitem",onClick:C,onKeyup:x};return s.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,k.value)):f.value===!0&&(a["aria-disabled"]="true"),c(_.value,a,w())}}});function M(e){return e.charAt(0).toUpperCase()+e.slice(1)}function N(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function P(e,t,n){if(n<=t)return t;const l=n-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}function T(e,t=2,n="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(n)+l}export{z as Q,D as a,N as b,$ as c,M as d,P as n,T as p};

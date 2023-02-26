import{a as ue,Q as se}from"./QToolbar-d524ebfa.js";import{Q as D}from"./QList-4867a02d.js";import{u as ce,Q as de}from"./GoalStore-a50d1a00.js";import{Q as H,b as v,a as y}from"./QItem-6f037dcd.js";import{Q as ge,a as N}from"./QLinearProgress-58fb7f23.js";import{a$ as fe,c as ve,ag as V,M as me,D as he,N as _e,E as be,r as O,b0 as G,P as xe,f as i,w as Q,a as Se,h as o,b1 as j,g as ke,J as Ie,aB as ye,S as Te,ae as E,C as we,a6 as Le,aF as s,a7 as u,a1 as c,a2 as n,a8 as g,aa as k,af as q,aK as I,ab as $,ad as R,ac as K}from"./index-29616774.js";const _=fe({}),qe=Object.keys(V),Ce=ve({name:"QExpansionItem",props:{...V,...me,...he,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[..._e,"click","afterShow","afterHide"],setup(e,{slots:a,emit:m}){const{proxy:{$q:h}}=ke(),r=be(e,h),l=O(e.modelValue!==null?e.modelValue:e.defaultOpened),b=O(null),C=G(),{show:B,hide:T,toggle:x}=xe({showing:l});let f,S;const M=i(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),U=i(()=>e.contentInsetLevel===void 0?null:{["padding"+(h.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),w=i(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),F=i(()=>{const t={};return qe.forEach(d=>{t[d]=e[d]}),t}),J=i(()=>w.value===!0||e.expandIconToggle!==!0),z=i(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||h.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),W=i(()=>e.disable!==!0&&(w.value===!0||e.expandIconToggle===!0)),X=i(()=>({expanded:l.value===!0,detailsId:e.targetUid,toggle:x,show:B,hide:T})),P=i(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:h.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":C,"aria-label":t}});Q(()=>e.group,t=>{S!==void 0&&S(),t!==void 0&&A()});function Y(t){w.value!==!0&&x(t),m("click",t)}function Z(t){t.keyCode===13&&p(t,!0)}function p(t,d){d!==!0&&b.value!==null&&b.value.focus(),x(t),we(t)}function ee(){m("afterShow")}function te(){m("afterHide")}function A(){f===void 0&&(f=G()),l.value===!0&&(_[e.group]=f);const t=Q(l,L=>{L===!0?_[e.group]=f:_[e.group]===f&&delete _[e.group]}),d=Q(()=>_[e.group],(L,re)=>{re===f&&L!==void 0&&L!==f&&T()});S=()=>{t(),d(),_[e.group]===f&&delete _[e.group],S=void 0}}function ae(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},d=[o(E,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:z.value})];return W.value===!0&&(Object.assign(t,{tabindex:0,...P.value,onClick:p,onKeyup:Z}),d.unshift(o("div",{ref:b,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),o(y,t,()=>d)}function ne(){let t;return a.header!==void 0?t=[].concat(a.header(X.value)):(t=[o(y,()=>[o(v,{lines:e.labelLines},()=>e.label||""),e.caption?o(v,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](o(y,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>o(E,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](ae()),t}function oe(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:r.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return J.value===!0&&(t.clickable=!0,t.onClick=Y,Object.assign(t,w.value===!0?F.value:P.value)),o(H,t,ne)}function le(){return Ie(o("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:U.value,id:C},Te(a.default)),[[ye,l.value]])}function ie(){const t=[oe(),o(ge,{duration:e.duration,onShow:ee,onHide:te},le)];return e.expandSeparator===!0&&t.push(o(j,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:r.value}),o(j,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:r.value})),t}return e.group!==void 0&&A(),Se(()=>{S!==void 0&&S()}),()=>o("div",{class:M.value},[o("div",{class:"q-expansion-item__container relative-position"},ie())])}}),Qe={__name:"GoalListItem",props:{goal:{type:Object,required:!0}},setup(e){const a=e,m={name:"goal",params:{id:a.goal.id}},h=i(()=>a.goal.children&&a.goal.children.length),r=i(()=>a.goal.tasks_target>1),l=i(()=>r.value?a.goal.tasks_performance/a.goal.tasks_target:0),b=i(()=>[a.goal.on_track+"%","·",a.goal.tasks_performance,"of",a.goal.tasks_target].join(" "));return(C,B)=>{const T=Le("GoalListItem",!0);return s(h)?(u(),c(Ce,{key:0,to:m,"content-inset-level":.5,"default-opened":"","expand-icon-toggle":"","expand-icon":"keyboard_arrow_right","expanded-icon":"keyboard_arrow_down"},{header:n(()=>[g(y,null,{default:n(()=>[g(v,null,{default:n(()=>[k(q(e.goal.name),1)]),_:1}),s(r)?(u(),c(v,{key:0,caption:""},{default:n(()=>[k(q(s(b)),1)]),_:1})):I("",!0),s(r)?(u(),c(v,{key:1},{default:n(()=>[g(N,{value:s(l),color:"positive"},null,8,["value"])]),_:1})):I("",!0)]),_:1})]),default:n(()=>[g(D,null,{default:n(()=>[(u(!0),$(R,null,K(e.goal.children,x=>(u(),c(T,{key:x.id,goal:x},null,8,["goal"]))),128))]),_:1})]),_:1},8,["content-inset-level"])):(u(),c(H,{key:1,to:m},{default:n(()=>[g(y,null,{default:n(()=>[g(v,null,{default:n(()=>[k(q(e.goal.name),1)]),_:1}),s(r)?(u(),c(v,{key:0,caption:""},{default:n(()=>[k(q(s(b)),1)]),_:1})):I("",!0),s(r)?(u(),c(v,{key:1},{default:n(()=>[g(N,{value:s(l),color:"positive"},null,8,["value"])]),_:1})):I("",!0)]),_:1})]),_:1}))}}},Ge={__name:"GoalsView",setup(e){const a=ce();return(m,h)=>(u(),c(de,{padding:""},{default:n(()=>[g(se,null,{default:n(()=>[g(ue,null,{default:n(()=>[k("Goals")]),_:1})]),_:1}),s(a).tree?(u(),c(D,{key:0},{default:n(()=>[(u(!0),$(R,null,K(s(a).tree,r=>(u(),c(Qe,{key:r.id,goal:r},null,8,["goal"]))),128))]),_:1})):I("",!0)]),_:1}))}};export{Ge as default};

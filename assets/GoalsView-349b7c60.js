import{u as V,a as z,b as ve,Q as fe}from"./use-dark-36666f26.js";import{Q as D}from"./QList-b18112f4.js";import{a as he,Q as _e}from"./TaskStore-b1ad383e.js";import{c as H,g as M,j as n,h as l,a6 as be,a7 as K,r as O,w as p,a as xe,E as Se,a4 as Ie,G as ye,W as $,z as ke,Q as s,R as d,S as i,T as v,V as w,_ as T,a0 as y,a1 as qe,P as Le,X as U,Z as F,Y as W,a2 as j}from"./index-c75b0bb2.js";import{Q as X,b as x,a as Q}from"./QItem-d73babb3.js";import{Q as Te}from"./QSlideTransition-324bb334.js";import{u as we,a as Qe,b as pe}from"./use-model-toggle-8d3632f9.js";import{u as A}from"./uid-6a237b22.js";import{Q as N}from"./QLinearProgress-71231f80.js";import"./format-8c778330.js";const Ce={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},C={xs:2,sm:4,md:8,lg:16,xl:24},E=H({name:"QSeparator",props:{...V,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=M(),r=z(e,a.proxy.$q),u=n(()=>e.vertical===!0?"vertical":"horizontal"),c=n(()=>` q-separator--${u.value}`),o=n(()=>e.inset!==!1?`${c.value}-${Ce[e.inset]}`:""),g=n(()=>`q-separator${c.value}${o.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(r.value===!0?" q-separator--dark":"")),f=n(()=>{const _={};if(e.size!==void 0&&(_[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const k=e.spaced===!0?`${C.md}px`:e.spaced in C?`${C[e.spaced]}px`:e.spaced,S=e.vertical===!0?["Left","Right"]:["Top","Bottom"];_[`margin${S[0]}`]=_[`margin${S[1]}`]=k}return _});return()=>l("hr",{class:g.value,style:f.value,"aria-orientation":u.value})}}),b=be({}),$e=Object.keys(K),Be=H({name:"QExpansionItem",props:{...K,...we,...V,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Qe,"click","afterShow","afterHide"],setup(e,{slots:a,emit:r}){const{proxy:{$q:u}}=M(),c=z(e,u),o=O(e.modelValue!==null?e.modelValue:e.defaultOpened),g=O(null),f=A(),{show:_,hide:k,toggle:S}=pe({showing:o});let h,I;const Y=n(()=>`q-expansion-item q-item-type q-expansion-item--${o.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),Z=n(()=>e.contentInsetLevel===void 0?null:{["padding"+(u.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),q=n(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),J=n(()=>{const t={};return $e.forEach(m=>{t[m]=e[m]}),t}),ee=n(()=>q.value===!0||e.expandIconToggle!==!0),te=n(()=>e.expandedIcon!==void 0&&o.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),ae=n(()=>e.disable!==!0&&(q.value===!0||e.expandIconToggle===!0)),ne=n(()=>({expanded:o.value===!0,detailsId:e.targetUid,toggle:S,show:_,hide:k})),B=n(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:u.lang.label[o.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":o.value===!0?"true":"false","aria-controls":f,"aria-label":t}});p(()=>e.group,t=>{I!==void 0&&I(),t!==void 0&&P()});function oe(t){q.value!==!0&&S(t),r("click",t)}function le(t){t.keyCode===13&&G(t,!0)}function G(t,m){m!==!0&&g.value!==null&&g.value.focus(),S(t),ke(t)}function ie(){r("afterShow")}function re(){r("afterHide")}function P(){h===void 0&&(h=A()),o.value===!0&&(b[e.group]=h);const t=p(o,L=>{L===!0?b[e.group]=h:b[e.group]===h&&delete b[e.group]}),m=p(()=>b[e.group],(L,me)=>{me===h&&L!==void 0&&L!==h&&k()});I=()=>{t(),m(),b[e.group]===h&&delete b[e.group],I=void 0}}function se(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},m=[l($,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&o.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:te.value})];return ae.value===!0&&(Object.assign(t,{tabindex:0,...B.value,onClick:G,onKeyup:le}),m.unshift(l("div",{ref:g,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),l(Q,t,()=>m)}function ue(){let t;return a.header!==void 0?t=[].concat(a.header(ne.value)):(t=[l(Q,()=>[l(x,{lines:e.labelLines},()=>e.label||""),e.caption?l(x,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](l(Q,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>l($,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](se()),t}function ce(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:c.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return ee.value===!0&&(t.clickable=!0,t.onClick=oe,Object.assign(t,q.value===!0?J.value:B.value)),l(X,t,ue)}function de(){return Se(l("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:Z.value,id:f},ye(a.default)),[[Ie,o.value]])}function ge(){const t=[ce(),l(Te,{duration:e.duration,onShow:ie,onHide:re},de)];return e.expandSeparator===!0&&t.push(l(E,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:c.value}),l(E,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:c.value})),t}return e.group!==void 0&&P(),xe(()=>{I!==void 0&&I()}),()=>l("div",{class:Y.value},[l("div",{class:"q-expansion-item__container relative-position"},ge())])}}),R={__name:"GoalListItemSections",props:{goal:{type:Object,required:!0}},setup(e){const a=e,r=n(()=>a.goal.target>0),u=n(()=>[a.goal.performance,"of",a.goal.target].join(" ")),c=n(()=>r.value?a.goal.performance/a.goal.target:0),o=n(()=>a.goal.rperformance!==null),g=n(()=>o.value?a.goal.rperformance/a.goal.rtarget:0);return(f,_)=>(s(),d(Q,null,{default:i(()=>[v(x,null,{default:i(()=>[w(T(e.goal.name),1)]),_:1}),r.value?(s(),d(x,{key:0,caption:""},{default:i(()=>[w(T(u.value),1)]),_:1})):y("",!0),r.value?(s(),d(x,{key:1},{default:i(()=>[v(N,{value:c.value,color:"positive"},null,8,["value"])]),_:1})):y("",!0),o.value?(s(),d(x,{key:2,caption:""},{default:i(()=>[v($,{name:"event_repeat",class:"vertical-top"}),w(" "+T(Math.round(g.value*100))+"% for "+T(a.goal.rtarget),1)]),_:1})):y("",!0),o.value?(s(),d(x,{key:3},{default:i(()=>[v(N,{value:g.value,color:"primary"},null,8,["value"])]),_:1})):y("",!0)]),_:1}))}};const Ge={__name:"GoalListItem",props:{goal:{type:Object,required:!0}},setup(e){const a=e,r={name:"goal",params:{id:a.goal.id}},u=n(()=>a.goal.children&&a.goal.children.length);return(c,o)=>{const g=Le("GoalListItem",!0);return u.value?(s(),d(Be,{key:0,to:r,"content-inset-level":.5,"default-opened":"","expand-icon-toggle":"","expand-icon":"keyboard_arrow_right","expanded-icon":"keyboard_arrow_down"},{header:i(()=>[v(R,{goal:e.goal},null,8,["goal"])]),default:i(()=>[v(D,null,{default:i(()=>[(s(!0),U(F,null,W(e.goal.children,f=>(s(),d(g,{key:f.id,goal:f},null,8,["goal"]))),128))]),_:1})]),_:1})):(s(),d(X,{key:1,to:r,class:"pr-56"},{default:i(()=>[v(R,{goal:e.goal},null,8,["goal"])]),_:1}))}}},Pe=qe(Ge,[["__scopeId","data-v-cb443204"]]),Me={__name:"GoalsView",setup(e){const a=he();return(r,u)=>(s(),d(_e,null,{default:i(()=>[v(fe,{class:"q-mt-md q-pl-lg"},{default:i(()=>[v(ve,null,{default:i(()=>[w("Goals")]),_:1})]),_:1}),j(a).tree?(s(),d(D,{key:0,class:"q-py-sm q-pl-sm"},{default:i(()=>[(s(!0),U(F,null,W(j(a).tree,c=>(s(),d(Pe,{key:c.id,goal:c},null,8,["goal"]))),128))]),_:1})):y("",!0)]),_:1}))}};export{Me as default};

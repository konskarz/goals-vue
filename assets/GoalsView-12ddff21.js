import{u as z,a as D,Q as de,b as ge}from"./use-dark-b8bc7aea.js";import{Q as H}from"./QList-be6e2bff.js";import{a as me}from"./TaskStore-3e73f515.js";import{Q as ve,b as C,a as y}from"./QItemLabel-8a3f6f98.js";import{c as V,g as M,j as n,h as a,a8 as fe,a9 as U,r as O,w as T,a as he,E as be,a7 as xe,G as Se,Z as N,z as Ie,_ as _e,P as ke,Q as s,R as f,S as m,U as L,a4 as ye,W as K,$ as qe,a2 as q,X as $,a0 as Q,Y as F,a1 as R}from"./index-77aa797c.js";import{Q as Le}from"./QSlideTransition-e4d21466.js";import{u as Te,a as we,b as Ce}from"./use-model-toggle-d2cbc6bf.js";import{u as j}from"./uid-6a237b22.js";import{_ as E}from"./ProgressLabel-6132d85a.js";import"./format-8c778330.js";const $e={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},w={xs:2,sm:4,md:8,lg:16,xl:24},P=V({name:"QSeparator",props:{...z,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=M(),l=D(e,o.proxy.$q),c=n(()=>e.vertical===!0?"vertical":"horizontal"),r=n(()=>` q-separator--${c.value}`),i=n(()=>e.inset!==!1?`${r.value}-${$e[e.inset]}`:""),d=n(()=>`q-separator${r.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),S=n(()=>{const h={};if(e.size!==void 0&&(h[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const I=e.spaced===!0?`${w.md}px`:e.spaced in w?`${w[e.spaced]}px`:e.spaced,b=e.vertical===!0?["Left","Right"]:["Top","Bottom"];h[`margin${b[0]}`]=h[`margin${b[1]}`]=I}return h});return()=>a("hr",{class:d.value,style:S.value,"aria-orientation":c.value})}}),v=fe({}),Qe=Object.keys(U),Be=V({name:"QExpansionItem",props:{...U,...Te,...z,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...we,"click","afterShow","afterHide"],setup(e,{slots:o,emit:l}){const{proxy:{$q:c}}=M(),r=D(e,c),i=O(e.modelValue!==null?e.modelValue:e.defaultOpened),d=O(null),S=j(),{show:h,hide:I,toggle:b}=Ce({showing:i});let g,x;const W=n(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),X=n(()=>e.contentInsetLevel===void 0?null:{["padding"+(c.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),_=n(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),Y=n(()=>{const t={};return Qe.forEach(u=>{t[u]=e[u]}),t}),Z=n(()=>_.value===!0||e.expandIconToggle!==!0),J=n(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||c.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),p=n(()=>e.disable!==!0&&(_.value===!0||e.expandIconToggle===!0)),ee=n(()=>({expanded:i.value===!0,detailsId:e.targetUid,toggle:b,show:h,hide:I})),B=n(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:c.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":S,"aria-label":t}});T(()=>e.group,t=>{x!==void 0&&x(),t!==void 0&&A()});function te(t){_.value!==!0&&b(t),l("click",t)}function ae(t){t.keyCode===13&&G(t,!0)}function G(t,u){u!==!0&&d.value!==null&&d.value.focus(),b(t),Ie(t)}function ne(){l("afterShow")}function ie(){l("afterHide")}function A(){g===void 0&&(g=j()),i.value===!0&&(v[e.group]=g);const t=T(i,k=>{k===!0?v[e.group]=g:v[e.group]===g&&delete v[e.group]}),u=T(()=>v[e.group],(k,ue)=>{ue===g&&k!==void 0&&k!==g&&I()});x=()=>{t(),u(),v[e.group]===g&&delete v[e.group],x=void 0}}function oe(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},u=[a(N,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:J.value})];return p.value===!0&&(Object.assign(t,{tabindex:0,...B.value,onClick:G,onKeyup:ae}),u.unshift(a("div",{ref:d,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),a(y,t,()=>u)}function le(){let t;return o.header!==void 0?t=[].concat(o.header(ee.value)):(t=[a(y,()=>[a(C,{lines:e.labelLines},()=>e.label||""),e.caption?a(C,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](a(y,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>a(N,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](oe()),t}function re(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:r.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return Z.value===!0&&(t.clickable=!0,t.onClick=te,Object.assign(t,_.value===!0?Y.value:B.value)),a(ve,t,le)}function se(){return be(a("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:X.value,id:S},Se(o.default)),[[xe,i.value]])}function ce(){const t=[re(),a(Le,{duration:e.duration,onShow:ne,onHide:ie},se)];return e.expandSeparator===!0&&t.push(a(P,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:r.value}),a(P,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:r.value})),t}return e.group!==void 0&&A(),he(()=>{x!==void 0&&x()}),()=>a("div",{class:W.value},[a("div",{class:"q-expansion-item__container relative-position"},ce())])}});const Ge={__name:"GoalListItem",props:{item:{type:Object,required:!0}},setup(e){const o=e,l=n(()=>o.item.children&&o.item.children.length);return(c,r)=>{const i=ke("GoalListItem",!0);return s(),f(Be,{to:{name:"goal",params:{id:e.item.id}},"content-inset-level":.5,"default-opened":"","expand-icon-toggle":"","expand-icon":"keyboard_arrow_right","expanded-icon":"keyboard_arrow_down","hide-expand-icon":!l.value},{header:m(()=>[L(y,{class:ye(l.value?"":"pr-40")},{default:m(()=>[L(C,null,{default:m(()=>[K(qe(e.item.name),1)]),_:1}),e.item.target>0?(s(),f(E,{key:0,value:e.item.performance/e.item.target,label:e.item.performance+" of "+e.item.target,color:"positive","label-icon":"event",caption:""},null,8,["value","label"])):q("",!0),e.item.rperformance!==null?(s(),f(E,{key:1,value:e.item.rperformance/e.item.rtarget,label:(e.item.rperformance/e.item.rtarget*100).toFixed(2)+"% for "+e.item.rtarget,color:"primary","label-icon":"event_repeat",caption:"",class:"q-mb-xs"},null,8,["value","label"])):q("",!0)]),_:1},8,["class"])]),default:m(()=>[l.value?(s(),f(H,{key:0},{default:m(()=>[(s(!0),$(Q,null,F(e.item.children,d=>(s(),f(i,{key:d.id,item:d},null,8,["item"]))),128))]),_:1})):q("",!0)]),_:1},8,["to","hide-expand-icon"])}}},Ae=_e(Ge,[["__scopeId","data-v-27635384"]]),Me={__name:"GoalsView",setup(e){const o=me();return(l,c)=>(s(),$(Q,null,[L(de,{class:"q-pl-lg"},{default:m(()=>[L(ge,null,{default:m(()=>[K("Goals")]),_:1})]),_:1}),R(o).treeReport?(s(),f(H,{key:0,class:"q-pt-sm q-pl-sm"},{default:m(()=>[(s(!0),$(Q,null,F(R(o).treeReport,r=>(s(),f(Ae,{key:r.id,item:r},null,8,["item"]))),128))]),_:1})):q("",!0)],64))}};export{Me as default};

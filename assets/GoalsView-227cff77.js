import{a as ge,Q as me}from"./QToolbar-82e2ba0c.js";import{Q as E}from"./QList-d783a8ca.js";import{u as fe,Q as ve}from"./GoalStore-6c169534.js";import{c as P,g as M,j as n,h as a,a7 as he,a8 as R,r as G,w as L,a as be,E as xe,a9 as _e,G as Se,_ as O,z as Ie,R as d,S as h,T as u,U as b,W as C,$ as A,Q as ke,X as z,Z as H,Y as V,a5 as j,a3 as qe}from"./index-df1bcde5.js";import{Q as Y,a as y}from"./QItem-f8da0eab.js";import{Q as T}from"./QItemLabel-db8ef004.js";import{Q as ye}from"./QSlideTransition-ca597132.js";import{u as U,a as K}from"./use-dark-c03da7f6.js";import{u as Te,a as Le,b as we}from"./use-model-toggle-646e6d46.js";import{u as D}from"./uid-6a237b22.js";import{d as Ce}from"./date-34c73bca.js";import"./format-8c778330.js";const Qe={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},w={xs:2,sm:4,md:8,lg:16,xl:24},N=P({name:"QSeparator",props:{...U,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=M(),i=K(e,o.proxy.$q),r=n(()=>e.vertical===!0?"vertical":"horizontal"),s=n(()=>` q-separator--${r.value}`),l=n(()=>e.inset!==!1?`${s.value}-${Qe[e.inset]}`:""),m=n(()=>`q-separator${s.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),f=n(()=>{const x={};if(e.size!==void 0&&(x[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const I=e.spaced===!0?`${w.md}px`:e.spaced in w?`${w[e.spaced]}px`:e.spaced,_=e.vertical===!0?["Left","Right"]:["Top","Bottom"];x[`margin${_[0]}`]=x[`margin${_[1]}`]=I}return x});return()=>a("hr",{class:m.value,style:f.value,"aria-orientation":r.value})}}),v=he({}),$e=Object.keys(R),Be=P({name:"QExpansionItem",props:{...R,...Te,...U,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Le,"click","afterShow","afterHide"],setup(e,{slots:o,emit:i}){const{proxy:{$q:r}}=M(),s=K(e,r),l=G(e.modelValue!==null?e.modelValue:e.defaultOpened),m=G(null),f=D(),{show:x,hide:I,toggle:_}=we({showing:l});let g,S;const F=n(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),W=n(()=>e.contentInsetLevel===void 0?null:{["padding"+(r.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),k=n(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),X=n(()=>{const t={};return $e.forEach(c=>{t[c]=e[c]}),t}),Z=n(()=>k.value===!0||e.expandIconToggle!==!0),J=n(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),ee=n(()=>e.disable!==!0&&(k.value===!0||e.expandIconToggle===!0)),te=n(()=>({expanded:l.value===!0,detailsId:e.targetUid,toggle:_,show:x,hide:I})),Q=n(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":f,"aria-label":t}});L(()=>e.group,t=>{S!==void 0&&S(),t!==void 0&&B()});function ae(t){k.value!==!0&&_(t),i("click",t)}function ne(t){t.keyCode===13&&$(t,!0)}function $(t,c){c!==!0&&m.value!==null&&m.value.focus(),_(t),Ie(t)}function oe(){i("afterShow")}function le(){i("afterHide")}function B(){g===void 0&&(g=D()),l.value===!0&&(v[e.group]=g);const t=L(l,q=>{q===!0?v[e.group]=g:v[e.group]===g&&delete v[e.group]}),c=L(()=>v[e.group],(q,de)=>{de===g&&q!==void 0&&q!==g&&I()});S=()=>{t(),c(),v[e.group]===g&&delete v[e.group],S=void 0}}function ie(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},c=[a(O,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:J.value})];return ee.value===!0&&(Object.assign(t,{tabindex:0,...Q.value,onClick:$,onKeyup:ne}),c.unshift(a("div",{ref:m,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),a(y,t,()=>c)}function re(){let t;return o.header!==void 0?t=[].concat(o.header(te.value)):(t=[a(y,()=>[a(T,{lines:e.labelLines},()=>e.label||""),e.caption?a(T,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](a(y,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>a(O,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](ie()),t}function se(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:s.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return Z.value===!0&&(t.clickable=!0,t.onClick=ae,Object.assign(t,k.value===!0?X.value:Q.value)),a(Y,t,re)}function ue(){return xe(a("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:W.value,id:f},Se(o.default)),[[_e,l.value]])}function ce(){const t=[se(),a(ye,{duration:e.duration,onShow:oe,onHide:le},ue)];return e.expandSeparator===!0&&t.push(a(N,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:s.value}),a(N,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:s.value})),t}return e.group!==void 0&&B(),be(()=>{S!==void 0&&S()}),()=>a("div",{class:F.value},[a("div",{class:"q-expansion-item__container relative-position"},ce())])}}),p={__name:"GoalListItemSections",props:{goal:{type:Object,required:!0}},setup(e){const o=e,i=n(()=>o.goal.planned?Ce.formatDate(o.goal.planned,"ddd MMM DD YYYY"):null);return(r,s)=>(d(),h(y,null,{default:u(()=>[b(T,null,{default:u(()=>[C(A(e.goal.name),1)]),_:1}),b(T,{caption:""},{default:u(()=>[C(A(i.value),1)]),_:1})]),_:1}))}},Ge={__name:"GoalListItem",props:{goal:{type:Object,required:!0}},setup(e){const o=e,i={name:"goal",params:{id:o.goal.id}},r=n(()=>o.goal.children&&o.goal.children.length);return(s,l)=>{const m=ke("GoalListItem",!0);return r.value?(d(),h(Be,{key:0,to:i,"content-inset-level":.5,"default-opened":"","expand-icon-toggle":"","expand-icon":"keyboard_arrow_right","expanded-icon":"keyboard_arrow_down"},{header:u(()=>[b(p,{goal:e.goal},null,8,["goal"])]),default:u(()=>[b(E,null,{default:u(()=>[(d(!0),z(H,null,V(e.goal.children,f=>(d(),h(m,{key:f.id,goal:f},null,8,["goal"]))),128))]),_:1})]),_:1})):(d(),h(Y,{key:1,to:i},{default:u(()=>[b(p,{goal:e.goal},null,8,["goal"])]),_:1}))}}},Ve={__name:"GoalsView",setup(e){const o=fe();return(i,r)=>(d(),h(ve,null,{default:u(()=>[b(me,{class:"q-mt-md q-pl-lg"},{default:u(()=>[b(ge,null,{default:u(()=>[C("Goals")]),_:1})]),_:1}),j(o).tree?(d(),h(E,{key:0,class:"q-py-sm q-pl-sm"},{default:u(()=>[(d(!0),z(H,null,V(j(o).tree,s=>(d(),h(Ge,{key:s.id,goal:s},null,8,["goal"]))),128))]),_:1})):qe("",!0)]),_:1}))}};export{Ve as default};

import{Q,a as x}from"./QToolbar-c4881315.js";import{N as g,j as q,R as d,S as m,T as n,U as o,W as C,a5 as e,V as r,a3 as N,ad as p,ae as w,a6 as B}from"./index-98b7a469.js";import{Q as c,a as T}from"./QForm-fd9e68f4.js";import{u as U,Q as P}from"./GoalStore-726cb1cc.js";import{u as S,_ as G}from"./DateInput-dec4a184.js";import{_ as I}from"./GoalSelect-1a54d16b.js";import"./use-field-e2edc0b5.js";import"./use-dark-40b6a939.js";import"./uid-6a237b22.js";import"./focus-manager-4e5c0bab.js";import"./QSlideTransition-80202aaf.js";import"./use-prevent-scroll-ca34f1da.js";import"./use-model-toggle-558c813f.js";const K={class:"q-py-sm q-px-lg"},F={class:"row q-col-gutter-lg"},Z={__name:"GoalView",setup(R){const f=g(),b=U(),s=parseInt(f.params.id),{item:a,original:V,persist:u,changed:_,remove:k,save:v,back:i}=S(s,b,{name:"",parent:null,planned:null,description:""}),y=q(()=>!a.value.name||u.value||!!(s&&!_(V,{...a.value})));return($,t)=>(d(),m(P,null,{default:n(()=>[o(T,{onSubmit:B(e(v),["prevent"])},{default:n(()=>[o(Q,{class:"q-mt-md q-pl-lg"},{default:n(()=>[o(x,null,{default:n(()=>[C("Goal")]),_:1}),e(s)?(d(),m(r,{key:0,type:"button",flat:"",round:"",icon:"delete",disable:e(u),onClick:e(k)},null,8,["disable","onClick"])):N("",!0),o(r,{type:"submit",flat:"",round:"",icon:"save",disable:y.value},null,8,["disable"]),o(r,{type:"button",flat:"",round:"",icon:"clear",onClick:e(i)},null,8,["onClick"])]),_:1}),p("div",K,[o(c,{modelValue:e(a).name,"onUpdate:modelValue":t[0]||(t[0]=l=>e(a).name=l),label:"Name","stack-label":"",autofocus:!e(s),rules:[l=>!!l||"Field is required"],onKeyup:w(e(i),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),p("div",F,[o(I,{modelValue:e(a).parent,"onUpdate:modelValue":t[1]||(t[1]=l=>e(a).parent=l),label:"Parent","stack-label":"","except-id":e(s),class:"col-12 col-sm-6"},null,8,["modelValue","except-id"]),o(G,{modelValue:e(a).planned,"onUpdate:modelValue":t[2]||(t[2]=l=>e(a).planned=l),label:"Planned",class:"col-12 col-sm-6"},null,8,["modelValue"])]),o(c,{modelValue:e(a).description,"onUpdate:modelValue":t[3]||(t[3]=l=>e(a).description=l),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"])])]),_:1},8,["onSubmit"])]),_:1}))}};export{Z as default};
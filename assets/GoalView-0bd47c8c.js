import{Q as y,a as g}from"./QToolbar-d524ebfa.js";import{f as C,a1 as d,a2 as n,a4 as w,a7 as m,a8 as o,aa as x,aF as e,a9 as i,aK as B,aE as p,a_ as c,b3 as N,aL as q}from"./index-29616774.js";import{Q as K}from"./QForm-b6043a76.js";import{u as P,Q as T}from"./GoalStore-a50d1a00.js";import{u as U,_ as F}from"./DateInput-7dfb1dd0.js";import{_ as G}from"./GoalSelect-3e7ba1db.js";import"./QField-ec413f27.js";import"./QItem-6f037dcd.js";import"./QMenu-f71fe624.js";import"./format-ff5bcb16.js";const I={class:"q-pa-md"},S={class:"row q-col-gutter-lg"},W={__name:"GoalView",setup($){const b=w(),f=P(),s=parseInt(b.params.id),{item:a,original:V,persist:u,changed:_,remove:k,save:v,back:r}=U(s,f,{name:"",parent:null,planned:null,description:""}),Q=C(()=>!a.value.name||u.value||Boolean(s&&!_(V,{...a.value})));return(D,t)=>(m(),d(T,{padding:""},{default:n(()=>[o(K,{onSubmit:q(e(v),["prevent"])},{default:n(()=>[o(y,null,{default:n(()=>[o(g,null,{default:n(()=>[x("Goal")]),_:1}),e(s)?(m(),d(i,{key:0,type:"button",flat:"",round:"",icon:"delete",disable:e(u),onClick:e(k)},null,8,["disable","onClick"])):B("",!0),o(i,{type:"submit",flat:"",round:"",icon:"save",disable:e(Q)},null,8,["disable"]),o(i,{type:"button",flat:"",round:"",icon:"clear",onClick:e(r)},null,8,["onClick"])]),_:1}),p("div",I,[o(c,{modelValue:e(a).name,"onUpdate:modelValue":t[0]||(t[0]=l=>e(a).name=l),label:"Name","stack-label":"",autofocus:!e(s),rules:[l=>!!l||"Field is required"],onKeyup:N(e(r),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),p("div",S,[o(G,{modelValue:e(a).parent,"onUpdate:modelValue":t[1]||(t[1]=l=>e(a).parent=l),label:"Parent","stack-label":"","option-disable-id":e(s),class:"col-12 col-sm-6"},null,8,["modelValue","option-disable-id"]),o(F,{modelValue:e(a).planned,"onUpdate:modelValue":t[2]||(t[2]=l=>e(a).planned=l),label:"Planned",class:"col-12 col-sm-6"},null,8,["modelValue"])]),o(c,{modelValue:e(a).description,"onUpdate:modelValue":t[3]||(t[3]=l=>e(a).description=l),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"])])]),_:1},8,["onSubmit"])]),_:1}))}};export{W as default};

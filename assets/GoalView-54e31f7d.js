import{b as x}from"./use-dark-74eb2e5e.js";import{j as C,Q as m,R as p,S as s,T as t,V as _,Z as e,U as r,$ as y,af as Q,a6 as g}from"./index-237da410.js";import{Q as c,a as q}from"./QForm-7b04b2d0.js";import{a as S,M as U}from"./MainPage-b6f0d248.js";import{u as w,_ as B}from"./DateInput-3db9e9ef.js";import{_ as N}from"./GoalSelect-05d0f3ca.js";import"./use-field-5a115d5a.js";import"./uid-6a237b22.js";import"./format-8c778330.js";import"./QSlideTransition-fde5fe8e.js";import"./use-timeout-684486c7.js";import"./use-model-toggle-504d87a8.js";const E={__name:"GoalView",props:{id:{type:String,required:!0}},setup(f){const n=parseInt(f.id),{item:l,original:b,persist:i,changed:V,remove:k,save:u,back:d}=w(n,S(),{name:"",parent:null,planned:null,description:""}),v=C(()=>!l.value.name||i.value||!!(n&&!V(b,{...l.value})));return(T,o)=>(m(),p(U,null,{toolbar:s(()=>[t(x,null,{default:s(()=>[_("Goal")]),_:1}),e(n)?(m(),p(r,{key:0,flat:"",round:"",icon:"delete",disable:e(i),onClick:e(k)},null,8,["disable","onClick"])):y("",!0),t(r,{flat:"",round:"",icon:"save",disable:v.value,onClick:e(u)},null,8,["disable","onClick"]),t(r,{flat:"",round:"",icon:"clear",onClick:e(d)},null,8,["onClick"])]),default:s(()=>[t(q,{class:"q-pt-sm q-px-lg",onSubmit:g(e(u),["prevent"])},{default:s(()=>[t(c,{modelValue:e(l).name,"onUpdate:modelValue":o[0]||(o[0]=a=>e(l).name=a),label:"Name","stack-label":"",autofocus:!e(n),rules:[a=>!!a||"Field is required"],onKeyup:Q(e(d),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),t(N,{modelValue:e(l).parent,"onUpdate:modelValue":o[1]||(o[1]=a=>e(l).parent=a),label:"Parent","stack-label":"","except-id":e(n)},null,8,["modelValue","except-id"]),t(B,{modelValue:e(l).planned,"onUpdate:modelValue":o[2]||(o[2]=a=>e(l).planned=a),label:"Planned"},null,8,["modelValue"]),t(c,{modelValue:e(l).description,"onUpdate:modelValue":o[3]||(o[3]=a=>e(l).description=a),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"])]),_:1},8,["onSubmit"])]),_:1}))}};export{E as default};

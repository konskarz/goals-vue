import{Q as S,b as _}from"./QToolbar-3a9e0a57.js";import{Q as $}from"./QToggle-e5bd6943.js";import{j as U,R as u,S as n,T as p,U as r,V,N as I,r as M,w as Y,W as q,a4 as a,a3 as f,ac as C,ad as H,a5 as K}from"./index-d21feb98.js";import{Q as b,a as R}from"./QForm-00d810b0.js";import{Q as F}from"./GoalStore-39114259.js";import{d as G}from"./date-519b718d.js";import{u as j}from"./TaskStore-7540ff0e.js";import{u as W,_ as T}from"./DateInput-d31d24e5.js";import{_ as z}from"./GoalSelect-4d2b4435.js";import"./use-field-5d859b6a.js";import"./uid-6a237b22.js";import"./focus-manager-4e5c0bab.js";import"./format-8c778330.js";import"./QSlideTransition-0a45e098.js";import"./use-prevent-scroll-cae2b09b.js";import"./use-model-toggle-d77af729.js";const N={__name:"NumberInput",props:{label:{type:String,required:!0},modelValue:{type:Number,default:null}},emits:["update:modelValue"],setup(g,{emit:k}){const v=g,t=U({get(){return v.modelValue},set(e){e>=0&&k("update:modelValue",e)}});return(e,d)=>(u(),n(b,{modelValue:t.value,"onUpdate:modelValue":d[2]||(d[2]=c=>t.value=c),modelModifiers:{number:!0},type:"number",min:"0",label:g.label,"stack-label":""},{append:p(()=>[r(V,{round:"",label:"-1",onClick:d[0]||(d[0]=c=>t.value--)}),r(V,{round:"",label:"+1",onClick:d[1]||(d[1]=c=>t.value++)})]),_:1},8,["modelValue","label"]))}},A={class:"q-py-sm q-px-lg"},E={class:"row q-col-gutter-lg"},me={__name:"TaskView",setup(g){const k=I(),v=j(),t=parseInt(k.params.id),{item:e,original:d,path:c,persist:Q,changed:w,remove:B,save:D,back:x}=W(t,v,{name:"",goal:null,planned:null,recurring_until:null,target:1,performance:0,done:null,description:"",performance_history:[]}),m=M(!1),P=U(()=>!e.value.name||Q.value||!!(t&&!w(d,{...e.value}))),y=U(()=>{const s=e.value.performance_history;if(!s||!s.length)return null;const o=i=>G.formatDate(i.updated,"DD.MM.YYYY HH:mm")+" to "+i.value;let l=o(s[0]);if(s.length===1)return l;for(let i=1;i<s.length;i++)l+=", "+o(s[i]);return l});return Y(m,s=>{c.value=s?"recurring/"+e.value.group_id+"/":t+"/"}),(s,o)=>(u(),n(F,null,{default:p(()=>[r(R,{onSubmit:K(a(D),["prevent"])},{default:p(()=>[r(S,{class:"q-mt-md q-pl-lg"},{default:p(()=>[m.value?(u(),n(_,{key:1},{default:p(()=>[q("Group")]),_:1})):(u(),n(_,{key:0},{default:p(()=>[q("Task")]),_:1})),a(e).group_id?(u(),n($,{key:2,modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=l=>m.value=l),"checked-icon":"done_all","unchecked-icon":"done"},null,8,["modelValue"])):f("",!0),a(t)?(u(),n(V,{key:3,type:"button",flat:"",round:"",icon:"delete",disable:a(Q),onClick:a(B)},null,8,["disable","onClick"])):f("",!0),r(V,{type:"submit",flat:"",round:"",icon:"save",disable:P.value},null,8,["disable"]),r(V,{type:"button",flat:"",round:"",icon:"clear",onClick:a(x)},null,8,["onClick"])]),_:1}),C("div",A,[C("div",E,[r(b,{modelValue:a(e).name,"onUpdate:modelValue":o[1]||(o[1]=l=>a(e).name=l),label:"Name","stack-label":"",autofocus:!a(t),rules:[l=>!!l||"Field is required"],class:"col-12 col-lg-6",onKeyup:H(a(x),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),r(z,{modelValue:a(e).goal,"onUpdate:modelValue":o[2]||(o[2]=l=>a(e).goal=l),label:"Goal","stack-label":"",class:"col-12 col-lg-6"},null,8,["modelValue"]),m.value?f("",!0):(u(),n(T,{key:0,modelValue:a(e).planned,"onUpdate:modelValue":o[3]||(o[3]=l=>a(e).planned=l),label:"Planned",class:"col-12 col-lg-6"},null,8,["modelValue"])),a(t)?(u(),n(T,{key:1,modelValue:a(e).done,"onUpdate:modelValue":o[4]||(o[4]=l=>a(e).done=l),label:"Done",class:"col-12 col-lg-6"},null,8,["modelValue"])):(u(),n(T,{key:2,modelValue:a(e).recurring_until,"onUpdate:modelValue":o[5]||(o[5]=l=>a(e).recurring_until=l),label:"Recurring until",class:"col-12 col-lg-6"},null,8,["modelValue"])),r(N,{modelValue:a(e).target,"onUpdate:modelValue":o[6]||(o[6]=l=>a(e).target=l),label:"Target",class:"col-12 col-lg-6"},null,8,["modelValue"]),m.value?f("",!0):(u(),n(N,{key:3,modelValue:a(e).performance,"onUpdate:modelValue":o[7]||(o[7]=l=>a(e).performance=l),label:"Performance",class:"col-12 col-lg-6"},null,8,["modelValue"]))]),r(b,{modelValue:a(e).description,"onUpdate:modelValue":o[8]||(o[8]=l=>a(e).description=l),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"]),y.value&&!m.value?(u(),n(b,{key:0,modelValue:y.value,"onUpdate:modelValue":o[9]||(o[9]=l=>y.value=l),type:"textarea",label:"Performance updates","stack-label":"",readonly:"",class:"q-pt-md"},null,8,["modelValue"])):f("",!0)])]),_:1},8,["onSubmit"])]),_:1}))}};export{me as default};

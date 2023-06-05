import{Q as S,a as _}from"./QToolbar-71a58ea8.js";import{Q as $}from"./QToggle-47d4257a.js";import{j as U,R as u,S as n,T as p,U as r,V,N as I,r as M,w as Y,W as q,a5 as a,a3 as f,ad as C,ae as H,a6 as K}from"./index-7ce8a7d6.js";import{Q as b,a as R}from"./QForm-5a376e63.js";import{Q as F}from"./GoalStore-7246b423.js";import{d as G}from"./date-59e72ec0.js";import{u as j}from"./TaskStore-326842d1.js";import{u as W,_ as T}from"./DateInput-c13f12c6.js";import{_ as z}from"./GoalSelect-3725b258.js";import"./use-field-ea5d68d2.js";import"./use-dark-7e67962c.js";import"./uid-6a237b22.js";import"./focus-manager-4e5c0bab.js";import"./format-8c778330.js";import"./QSlideTransition-bc613f2a.js";import"./use-prevent-scroll-ad0d6f73.js";import"./use-model-toggle-031c640e.js";const N={__name:"NumberInput",props:{label:{type:String,required:!0},modelValue:{type:Number,default:null}},emits:["update:modelValue"],setup(k,{emit:g}){const v=k,t=U({get(){return v.modelValue},set(e){e>=0&&g("update:modelValue",e)}});return(e,m)=>(u(),n(b,{modelValue:t.value,"onUpdate:modelValue":m[2]||(m[2]=c=>t.value=c),modelModifiers:{number:!0},type:"number",min:"0",label:k.label,"stack-label":""},{append:p(()=>[r(V,{round:"",label:"-1",onClick:m[0]||(m[0]=c=>t.value--)}),r(V,{round:"",label:"+1",onClick:m[1]||(m[1]=c=>t.value++)})]),_:1},8,["modelValue","label"]))}},A={class:"q-py-sm q-px-lg"},E={class:"row q-col-gutter-lg"},ie={__name:"TaskView",setup(k){const g=I(),v=j(),t=parseInt(g.params.id),{item:e,original:m,path:c,persist:Q,changed:w,remove:B,save:D,back:x}=W(t,v,{name:"",goal:null,planned:null,recurring_until:null,target:1,performance:0,done:null,description:"",performance_history:[]}),d=M(!1),P=U(()=>!e.value.name||Q.value||!!(t&&!w(m,{...e.value}))),y=U(()=>{const s=e.value.performance_history;if(!s||!s.length)return null;const o=i=>G.formatDate(i.updated,"DD.MM.YYYY HH:mm")+" to "+i.value;let l=o(s[0]);if(s.length===1)return l;for(let i=1;i<s.length;i++)l+=", "+o(s[i]);return l});return Y(d,s=>{c.value=s?"recurring/"+e.value.group_id+"/":t+"/"}),(s,o)=>(u(),n(F,null,{default:p(()=>[r(R,{onSubmit:K(a(D),["prevent"])},{default:p(()=>[r(S,{class:"q-mt-md q-pl-lg"},{default:p(()=>[d.value?(u(),n(_,{key:1},{default:p(()=>[q("Group")]),_:1})):(u(),n(_,{key:0},{default:p(()=>[q("Task")]),_:1})),a(e).group_id?(u(),n($,{key:2,modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=l=>d.value=l),"checked-icon":"done_all","unchecked-icon":"done"},null,8,["modelValue"])):f("",!0),a(t)?(u(),n(V,{key:3,type:"button",flat:"",round:"",icon:"delete",disable:a(Q),onClick:a(B)},null,8,["disable","onClick"])):f("",!0),r(V,{type:"submit",flat:"",round:"",icon:"save",disable:P.value},null,8,["disable"]),r(V,{type:"button",flat:"",round:"",icon:"clear",onClick:a(x)},null,8,["onClick"])]),_:1}),C("div",A,[C("div",E,[r(b,{modelValue:a(e).name,"onUpdate:modelValue":o[1]||(o[1]=l=>a(e).name=l),label:"Name","stack-label":"",autofocus:!a(t),rules:[l=>!!l||"Field is required"],class:"col-12 col-sm-6",onKeyup:H(a(x),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),r(z,{modelValue:a(e).goal,"onUpdate:modelValue":o[2]||(o[2]=l=>a(e).goal=l),label:"Goal","stack-label":"",class:"col-12 col-sm-6"},null,8,["modelValue"]),d.value?f("",!0):(u(),n(T,{key:0,modelValue:a(e).planned,"onUpdate:modelValue":o[3]||(o[3]=l=>a(e).planned=l),label:"Planned",class:"col-12 col-sm-6"},null,8,["modelValue"])),a(t)?(u(),n(T,{key:1,modelValue:a(e).done,"onUpdate:modelValue":o[4]||(o[4]=l=>a(e).done=l),label:"Done",class:"col-12 col-sm-6"},null,8,["modelValue"])):(u(),n(T,{key:2,modelValue:a(e).recurring_until,"onUpdate:modelValue":o[5]||(o[5]=l=>a(e).recurring_until=l),label:"Recurring until",class:"col-12 col-sm-6"},null,8,["modelValue"])),r(N,{modelValue:a(e).target,"onUpdate:modelValue":o[6]||(o[6]=l=>a(e).target=l),label:"Target",class:"col-12 col-sm-6"},null,8,["modelValue"]),d.value?f("",!0):(u(),n(N,{key:3,modelValue:a(e).performance,"onUpdate:modelValue":o[7]||(o[7]=l=>a(e).performance=l),label:"Performance",class:"col-12 col-sm-6"},null,8,["modelValue"]))]),r(b,{modelValue:a(e).description,"onUpdate:modelValue":o[8]||(o[8]=l=>a(e).description=l),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"]),y.value&&!d.value?(u(),n(b,{key:0,modelValue:y.value,"onUpdate:modelValue":o[9]||(o[9]=l=>y.value=l),type:"textarea",label:"Performance updates","stack-label":"",readonly:"",class:"q-pt-md"},null,8,["modelValue"])):f("",!0)])]),_:1},8,["onSubmit"])]),_:1}))}};export{ie as default};

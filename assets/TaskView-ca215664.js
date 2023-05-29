import{Q as D,c as x}from"./uid-ede08da6.js";import{Q as S}from"./QToggle-e60537e4.js";import{j as U,P as u,R as n,S as p,T as r,a4 as f,a1 as I,r as M,w as Y,U as q,_ as a,$ as V,ac as C,ad as H,a8 as K}from"./index-fc6f4158.js";import{Q as b,a as R}from"./QForm-ad47b497.js";import{Q as F,_ as G}from"./GoalSelect-b3c59981.js";import{u as j,d as z}from"./TaskStore-6a1270e3.js";import{u as A,_ as T}from"./DateInput-6b18d961.js";import"./use-field-08065cf4.js";import"./QSlideTransition-0501fc4f.js";const w={__name:"NumberInput",props:{label:{type:String,required:!0},modelValue:{type:Number,default:null}},emits:["update:modelValue"],setup(g,{emit:k}){const v=g,t=U({get(){return v.modelValue},set(e){e>=0&&k("update:modelValue",e)}});return(e,d)=>(u(),n(b,{modelValue:t.value,"onUpdate:modelValue":d[2]||(d[2]=c=>t.value=c),modelModifiers:{number:!0},type:"number",min:"0",label:g.label,"stack-label":""},{append:p(()=>[r(f,{round:"",label:"-1",onClick:d[0]||(d[0]=c=>t.value--)}),r(f,{round:"",label:"+1",onClick:d[1]||(d[1]=c=>t.value++)})]),_:1},8,["modelValue","label"]))}},E={class:"q-px-lg q-py-sm"},J={class:"row q-col-gutter-lg"},oe={__name:"TaskView",setup(g){const k=I(),v=j(),t=parseInt(k.params.id),{item:e,original:d,path:c,persist:Q,changed:N,remove:P,save:$,back:_}=A(t,v,{name:"",goal:null,planned:null,recurring_until:null,target:1,performance:0,done:null,description:"",performance_history:[]}),m=M(!1),B=U(()=>!e.value.name||Q.value||!!(t&&!N(d,{...e.value}))),y=U(()=>{const s=e.value.performance_history;if(!s||!s.length)return null;const o=i=>z.formatDate(i.updated,"DD.MM.YYYY HH:mm")+" to "+i.value;let l=o(s[0]);if(s.length===1)return l;for(let i=1;i<s.length;i++)l+=", "+o(s[i]);return l});return Y(m,s=>{c.value=s?"recurring/"+e.value.group_id+"/":t+"/"}),(s,o)=>(u(),n(F,null,{default:p(()=>[r(R,{onSubmit:K(a($),["prevent"])},{default:p(()=>[r(D,{class:"q-mt-md q-pl-lg"},{default:p(()=>[m.value?(u(),n(x,{key:1},{default:p(()=>[q("Group")]),_:1})):(u(),n(x,{key:0},{default:p(()=>[q("Task")]),_:1})),a(e).group_id?(u(),n(S,{key:2,modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=l=>m.value=l),"checked-icon":"done_all","unchecked-icon":"done"},null,8,["modelValue"])):V("",!0),a(t)?(u(),n(f,{key:3,type:"button",flat:"",round:"",icon:"delete",disable:a(Q),onClick:a(P)},null,8,["disable","onClick"])):V("",!0),r(f,{type:"submit",flat:"",round:"",icon:"save",disable:B.value},null,8,["disable"]),r(f,{type:"button",flat:"",round:"",icon:"clear",onClick:a(_)},null,8,["onClick"])]),_:1}),C("div",E,[C("div",J,[r(b,{modelValue:a(e).name,"onUpdate:modelValue":o[1]||(o[1]=l=>a(e).name=l),label:"Name","stack-label":"",autofocus:!a(t),rules:[l=>!!l||"Field is required"],class:"col-12 col-lg-6",onKeyup:H(a(_),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),r(G,{modelValue:a(e).goal,"onUpdate:modelValue":o[2]||(o[2]=l=>a(e).goal=l),label:"Goal","stack-label":"",class:"col-12 col-lg-6"},null,8,["modelValue"]),m.value?V("",!0):(u(),n(T,{key:0,modelValue:a(e).planned,"onUpdate:modelValue":o[3]||(o[3]=l=>a(e).planned=l),label:"Planned",class:"col-12 col-lg-6"},null,8,["modelValue"])),a(t)?(u(),n(T,{key:1,modelValue:a(e).done,"onUpdate:modelValue":o[4]||(o[4]=l=>a(e).done=l),label:"Done",class:"col-12 col-lg-6"},null,8,["modelValue"])):(u(),n(T,{key:2,modelValue:a(e).recurring_until,"onUpdate:modelValue":o[5]||(o[5]=l=>a(e).recurring_until=l),label:"Recurring until",class:"col-12 col-lg-6"},null,8,["modelValue"])),r(w,{modelValue:a(e).target,"onUpdate:modelValue":o[6]||(o[6]=l=>a(e).target=l),label:"Target",class:"col-12 col-lg-6"},null,8,["modelValue"]),m.value?V("",!0):(u(),n(w,{key:3,modelValue:a(e).performance,"onUpdate:modelValue":o[7]||(o[7]=l=>a(e).performance=l),label:"Performance",class:"col-12 col-lg-6"},null,8,["modelValue"]))]),r(b,{modelValue:a(e).description,"onUpdate:modelValue":o[8]||(o[8]=l=>a(e).description=l),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"]),y.value&&!m.value?(u(),n(b,{key:0,modelValue:y.value,"onUpdate:modelValue":o[9]||(o[9]=l=>y.value=l),type:"textarea",label:"Performance updates","stack-label":"",readonly:"",class:"q-pt-md"},null,8,["modelValue"])):V("",!0)])]),_:1},8,["onSubmit"])]),_:1}))}};export{oe as default};

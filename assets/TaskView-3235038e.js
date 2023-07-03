import{b as q}from"./use-dark-3cb31fc4.js";import{Q as _}from"./QToggle-9cbc18a9.js";import{j as y,Q as t,R as u,S as p,T as n,U as f,r as D,w as M,V as w,a4 as l,a2 as V,a7 as B,ae as I,a5 as P}from"./index-c1e69825.js";import{Q as b,a as $}from"./QForm-bca8eb7c.js";import{u as Y,M as F,d as H}from"./MainPage-93bc26cf.js";import{u as K,_ as g}from"./DateInput-0a98ac8a.js";import{_ as j}from"./GoalSelect-8feb7bd9.js";import"./use-field-4873ed5d.js";import"./uid-6a237b22.js";import"./format-8c778330.js";import"./QSlideTransition-1344db42.js";import"./use-timeout-1ec60c9c.js";import"./use-model-toggle-52a53531.js";const x={__name:"NumberInput",props:{modelValue:{type:Number,default:null}},emits:["update:modelValue"],setup(k,{emit:U}){const r=k,e=y({get(){return r.modelValue},set(c){c>=0&&U("update:modelValue",c)}});return(c,s)=>(t(),u(b,{modelValue:e.value,"onUpdate:modelValue":s[2]||(s[2]=m=>e.value=m),modelModifiers:{number:!0},type:"number",min:"0","stack-label":""},{append:p(()=>[n(f,{round:"",label:"-1",onClick:s[0]||(s[0]=m=>e.value--)}),n(f,{round:"",label:"+1",onClick:s[1]||(s[1]=m=>e.value++)})]),_:1},8,["modelValue"]))}},G={class:"row q-col-gutter-lg"},ae={__name:"TaskView",props:{id:{type:String,required:!0}},setup(k){const r=parseInt(k.id),{item:e,original:c,path:s,persist:m,changed:Q,remove:N,save:C,back:T}=K(r,Y(),{name:"",goal:null,planned:new Date().toISOString(),recurring_until:null,target:1,performance:0,done:null,description:"",performance_history:[]}),d=D(!1),S=y(()=>!e.value.name||!e.value.planned||m.value||!!(r&&!Q(c,{...e.value}))),v=y(()=>{const i=e.value.performance_history;return!i||!i.length?null:i.map(a=>H.formatDate(a.updated,"DD.MM.YYYY HH:mm")+" to "+a.value).join(", ")});return M(d,i=>{s.value=i?"recurring/"+e.value.group_id+"/":r+"/"}),(i,a)=>(t(),u(F,null,{toolbar:p(()=>[d.value?(t(),u(q,{key:1},{default:p(()=>[w("Group")]),_:1})):(t(),u(q,{key:0},{default:p(()=>[w("Task")]),_:1})),l(e).group_id?(t(),u(_,{key:2,modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=o=>d.value=o),"checked-icon":"done_all","unchecked-icon":"done"},null,8,["modelValue"])):V("",!0),l(r)?(t(),u(f,{key:3,flat:"",round:"",icon:"delete",disable:l(m),onClick:l(N)},null,8,["disable","onClick"])):V("",!0),n(f,{flat:"",round:"",icon:"save",disable:S.value,onClick:l(C)},null,8,["disable","onClick"]),n(f,{flat:"",round:"",icon:"clear",onClick:l(T)},null,8,["onClick"])]),default:p(()=>[n($,{class:"q-pt-sm q-px-lg",onSubmit:P(l(C),["prevent"])},{default:p(()=>[B("div",G,[n(b,{modelValue:l(e).name,"onUpdate:modelValue":a[1]||(a[1]=o=>l(e).name=o),label:"Name","stack-label":"",autofocus:!l(r),rules:[o=>!!o||"Field is required"],class:"col-12 col-sm-6",onKeyup:I(l(T),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),n(j,{modelValue:l(e).goal,"onUpdate:modelValue":a[2]||(a[2]=o=>l(e).goal=o),label:"Goal","stack-label":"",class:"col-12 col-sm-6"},null,8,["modelValue"]),d.value?V("",!0):(t(),u(g,{key:0,modelValue:l(e).planned,"onUpdate:modelValue":a[3]||(a[3]=o=>l(e).planned=o),label:"Planned",class:"col-12 col-sm-6",rules:[o=>!!o||"Field is required"]},null,8,["modelValue","rules"])),l(r)?(t(),u(g,{key:1,modelValue:l(e).done,"onUpdate:modelValue":a[4]||(a[4]=o=>l(e).done=o),label:"Done",class:"col-12 col-sm-6"},null,8,["modelValue"])):(t(),u(g,{key:2,modelValue:l(e).recurring_until,"onUpdate:modelValue":a[5]||(a[5]=o=>l(e).recurring_until=o),label:"Recurring until",class:"col-12 col-sm-6"},null,8,["modelValue"])),n(x,{modelValue:l(e).target,"onUpdate:modelValue":a[6]||(a[6]=o=>l(e).target=o),label:"Target",class:"col-12 col-sm-6"},null,8,["modelValue"]),d.value?V("",!0):(t(),u(x,{key:3,modelValue:l(e).performance,"onUpdate:modelValue":a[7]||(a[7]=o=>l(e).performance=o),label:"Performance",class:"col-12 col-sm-6"},null,8,["modelValue"]))]),n(b,{modelValue:l(e).description,"onUpdate:modelValue":a[8]||(a[8]=o=>l(e).description=o),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"]),v.value&&!d.value?(t(),u(b,{key:0,modelValue:v.value,"onUpdate:modelValue":a[9]||(a[9]=o=>v.value=o),type:"textarea",label:"Performance updates","stack-label":"",readonly:"",class:"q-pt-md"},null,8,["modelValue"])):V("",!0)]),_:1},8,["onSubmit"])]),_:1}))}};export{ae as default};

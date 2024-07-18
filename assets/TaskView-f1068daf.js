import{Q as N,b as Q}from"./use-dark-49206753.js";import{c as B,j as k,h as q,Z as P,Q as t,R as u,S as g,U as r,V as f,r as $,w as F,X as H,a6 as M,a1 as l,a0 as Y,W as T,a2 as V,ah as _}from"./index-325c1935.js";import{u as K,b as j,c as E}from"./QTree-e4907360.js";import{Q as y,a as G}from"./QForm-9db9c423.js";import{u as R,d as O}from"./TaskStore-f75c6b0c.js";import{u as W,_ as X,a as x}from"./DateInput-a1ea61b7.js";import"./private.use-form-89e81e97.js";import"./QSlideTransition-1c57a7c3.js";import"./use-id-ff296695.js";import"./format-8c778330.js";import"./use-timeout-18664a60.js";import"./use-model-toggle-e4b7c314.js";const Z=B({name:"QToggle",props:{...K,icon:String,iconColor:String},emits:j,setup(s){function v(n,e){const d=k(()=>(n.value===!0?s.checkedIcon:e.value===!0?s.indeterminateIcon:s.uncheckedIcon)||s.icon),i=k(()=>n.value===!0?s.iconColor:null);return()=>[q("div",{class:"q-toggle__track"}),q("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},d.value!==void 0?[q(P,{name:d.value,color:i.value})]:void 0)]}return E("toggle",v)}}),S={__name:"NumberInput",props:{modelValue:{type:Number,default:null}},emits:["update:modelValue"],setup(s,{emit:v}){const n=v,e=s,d=k({get(){return e.modelValue},set(i){i>=0&&n("update:modelValue",i)}});return(i,m)=>(t(),u(y,{modelValue:d.value,"onUpdate:modelValue":m[2]||(m[2]=b=>d.value=b),modelModifiers:{number:!0},type:"number",min:"0","stack-label":""},{append:g(()=>[r(f,{round:"",label:"-1",onClick:m[0]||(m[0]=b=>d.value--)}),r(f,{round:"",label:"+1",onClick:m[1]||(m[1]=b=>d.value++)})]),_:1},8,["modelValue"]))}},re={__name:"TaskView",props:{id:{type:String,required:!0}},setup(s){const n=parseInt(s.id),{item:e,original:d,path:i,persist:m,changed:b,remove:w,save:I,back:U}=W(n,R(),{name:"",goal:null,planned:new Date().toISOString(),recurring_until:null,target:1,performance:0,done:null,description:""}),p=$(!1),D=k(()=>!e.value.name||!e.value.planned||m.value||!!(n&&!b(d,{...e.value}))),C=k(()=>{const c=e.value.performanceHistory;return!c||!c.length?null:c.map(a=>O.formatDate(a.updated,"DD.MM.YYYY HH:mm")+" to "+a.value).join(", ")});return F(p,c=>{i.value=c?"recurring/"+e.value.groupId:n}),(c,a)=>(t(),H(Y,null,[r(N,{class:"q-pl-lg"},{default:g(()=>[p.value?(t(),u(Q,{key:1},{default:g(()=>[T("Group")]),_:1})):(t(),u(Q,{key:0},{default:g(()=>[T("Task")]),_:1})),l(e).groupId?(t(),u(Z,{key:2,modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=o=>p.value=o),"checked-icon":"done_all","unchecked-icon":"done"},null,8,["modelValue"])):V("",!0),l(n)?(t(),u(f,{key:3,flat:"",round:"",icon:"delete",disable:l(m),onClick:l(w)},null,8,["disable","onClick"])):V("",!0),r(f,{flat:"",round:"",icon:"save",disable:D.value,onClick:l(I)},null,8,["disable","onClick"]),r(f,{flat:"",round:"",icon:"clear",onClick:l(U)},null,8,["onClick"])]),_:1}),r(G,{class:"q-px-lg",onSubmit:M(l(I),["prevent"])},{default:g(()=>[r(y,{modelValue:l(e).name,"onUpdate:modelValue":a[1]||(a[1]=o=>l(e).name=o),label:"Name","stack-label":"",autofocus:!l(n),rules:[o=>!!o||"Field is required"],onKeyup:_(l(U),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),r(X,{modelValue:l(e).goal,"onUpdate:modelValue":a[2]||(a[2]=o=>l(e).goal=o),label:"Goal","stack-label":"",class:"q-pb-lg"},null,8,["modelValue"]),p.value?V("",!0):(t(),u(x,{key:0,modelValue:l(e).planned,"onUpdate:modelValue":a[3]||(a[3]=o=>l(e).planned=o),label:"Planned",rules:[o=>!!o||"Field is required"]},null,8,["modelValue","rules"])),l(n)?(t(),u(x,{key:1,modelValue:l(e).done,"onUpdate:modelValue":a[4]||(a[4]=o=>l(e).done=o),label:"Done",class:"q-pb-lg"},null,8,["modelValue"])):(t(),u(x,{key:2,modelValue:l(e).recurring_until,"onUpdate:modelValue":a[5]||(a[5]=o=>l(e).recurring_until=o),label:"Recurring until",class:"q-pb-lg"},null,8,["modelValue"])),r(S,{modelValue:l(e).target,"onUpdate:modelValue":a[6]||(a[6]=o=>l(e).target=o),label:"Target",class:"q-pb-lg"},null,8,["modelValue"]),p.value?V("",!0):(t(),u(S,{key:3,modelValue:l(e).performance,"onUpdate:modelValue":a[7]||(a[7]=o=>l(e).performance=o),label:"Performance",class:"q-pb-lg"},null,8,["modelValue"])),r(y,{modelValue:l(e).description,"onUpdate:modelValue":a[8]||(a[8]=o=>l(e).description=o),type:"textarea",label:"Description","stack-label":"",class:"q-pb-lg"},null,8,["modelValue"]),C.value&&!p.value?(t(),u(y,{key:4,modelValue:C.value,"onUpdate:modelValue":a[9]||(a[9]=o=>C.value=o),type:"textarea",label:"Performance updates","stack-label":"",readonly:""},null,8,["modelValue"])):V("",!0)]),_:1},8,["onSubmit"])],64))}};export{re as default};

import{Q as x,a as N}from"./QToolbar-d524ebfa.js";import{f as c,a7 as f,a1 as V,a2 as d,a8 as a,a9 as r,aF as l,aG as Q,a_ as k,a4 as U,aa as $,aK as q,aE as g,b3 as B,aL as _}from"./index-29616774.js";import{Q as D}from"./QForm-b6043a76.js";import{Q as K}from"./GoalStore-a50d1a00.js";import{u as F}from"./TimeStore-b625950e.js";import{u as E}from"./TaskStore-042833dc.js";import{u as M,_ as C}from"./DateInput-7dfb1dd0.js";import"./format-ff5bcb16.js";const P={__name:"DurationInput",props:{label:{type:String,required:!0},modelValue:{type:Number,default:null}},emits:["update:modelValue"],setup(m,{emit:i}){const p=m,t=c({get(){return p.modelValue},set(u){i("update:modelValue",u)}});return(u,e)=>(f(),V(k,{modelValue:l(t),"onUpdate:modelValue":e[4]||(e[4]=n=>Q(t)?t.value=n:null),modelModifiers:{number:!0},type:"number",min:"0",step:"15",label:m.label,"stack-label":""},{append:d(()=>[a(r,{round:"",label:"-60",onClick:e[0]||(e[0]=n=>{l(t)>=60&&(t.value-=60)})}),a(r,{round:"",label:"-15",onClick:e[1]||(e[1]=n=>{l(t)>=15&&(t.value-=15)})}),a(r,{round:"",label:"+15",onClick:e[2]||(e[2]=n=>t.value+=15)}),a(r,{round:"",label:"+60",onClick:e[3]||(e[3]=n=>t.value+=60)})]),_:1},8,["modelValue","label"]))}},R={class:"q-pa-md"},G={class:"row q-col-gutter-lg"},Y={__name:"TimeView",setup(m){const i=U(),p=F(),t=E(),u=parseInt(i.params.id),{item:e,original:n,persist:v,changed:S,remove:T,save:I,back:y}=M(u,p,{task:parseInt(i.params.task),start:new Date().toISOString(),end:null,duration:null,description:""}),w=c(()=>!e.value.duration||v.value||Boolean(u&&!S(n,{...e.value}))),b=c(()=>t.getItem(e.value.task).name);return(L,s)=>(f(),V(K,{padding:""},{default:d(()=>[a(D,{onSubmit:_(l(I),["prevent"])},{default:d(()=>[a(x,null,{default:d(()=>[a(N,null,{default:d(()=>[$("Time")]),_:1}),l(u)?(f(),V(r,{key:0,type:"button",flat:"",round:"",icon:"delete",disable:l(v),onClick:l(T)},null,8,["disable","onClick"])):q("",!0),a(r,{type:"submit",flat:"",round:"",icon:"save",disable:l(w)},null,8,["disable"]),a(r,{type:"button",flat:"",round:"",icon:"clear",onClick:l(y)},null,8,["onClick"])]),_:1}),g("div",R,[g("div",G,[a(k,{modelValue:l(b),"onUpdate:modelValue":s[0]||(s[0]=o=>Q(b)?b.value=o:null),label:"Task","stack-label":"",readonly:"",class:"col-12 col-sm-6"},null,8,["modelValue"]),a(P,{modelValue:l(e).duration,"onUpdate:modelValue":s[1]||(s[1]=o=>l(e).duration=o),label:"Duration",class:"col-12 col-sm-6",autofocus:!l(u),rules:[o=>!!o||"Field is required"],onKeyup:B(l(y),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),a(C,{modelValue:l(e).start,"onUpdate:modelValue":s[2]||(s[2]=o=>l(e).start=o),label:"Start",class:"col-12 col-sm-6"},null,8,["modelValue"]),a(C,{modelValue:l(e).end,"onUpdate:modelValue":s[3]||(s[3]=o=>l(e).end=o),label:"End",class:"col-12 col-sm-6"},null,8,["modelValue"])]),a(k,{modelValue:l(e).description,"onUpdate:modelValue":s[4]||(s[4]=o=>l(e).description=o),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"])])]),_:1},8,["onSubmit"])]),_:1}))}};export{Y as default};

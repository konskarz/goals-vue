import{Q as _,a as y}from"./api.client-4f1613d5.js";import{Z as m,_ as s,a0 as Q,a2 as p,a3 as o,a5 as T,aj as e,a4 as u,ap as v,ao as c,ax as f,aE as w,ar as x}from"./index-ee49e85a.js";import{Q as C}from"./QForm-d2eb2285.js";import{Q as g}from"./QPage-4ebdf1c4.js";import{u as I,_ as V}from"./DateInput-8433818f.js";import{_ as S}from"./DurationInput-fd1c95c4.js";const U={class:"q-pa-md"},q={class:"row q-col-gutter-lg"},j={__name:"TimeView",setup(B){const r=Q(),n=parseInt(r.params.id),{item:a,persist:d,remove:b,save:k,back:i}=I({task:parseInt(r.params.task),start:new Date().toISOString(),end:null,duration:null,description:""},"/times/",n);return(N,t)=>(p(),m(g,{padding:""},{default:s(()=>[o(C,{onSubmit:x(e(k),["prevent"])},{default:s(()=>[o(_,null,{default:s(()=>[o(y,null,{default:s(()=>[T("Time")]),_:1}),e(n)?(p(),m(u,{key:0,type:"button",flat:"",round:"",icon:"delete",disable:e(d),onClick:e(b)},null,8,["disable","onClick"])):v("",!0),o(u,{type:"submit",flat:"",round:"",icon:"save",disable:!e(a).duration||e(d)},null,8,["disable"]),o(u,{type:"button",flat:"",round:"",icon:"clear",onClick:e(i)},null,8,["onClick"])]),_:1}),c("div",U,[c("div",q,[o(f,{modelValue:e(a).task,"onUpdate:modelValue":t[0]||(t[0]=l=>e(a).task=l),label:"Task","stack-label":"",readonly:"",class:"col-12 col-sm-6"},null,8,["modelValue"]),o(S,{modelValue:e(a).duration,"onUpdate:modelValue":t[1]||(t[1]=l=>e(a).duration=l),label:"Duration",class:"col-12 col-sm-6",autofocus:!e(n),rules:[l=>!!l||"Field is required"],onKeyup:w(e(i),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),o(V,{modelValue:e(a).start,"onUpdate:modelValue":t[2]||(t[2]=l=>e(a).start=l),label:"Start",class:"col-12 col-sm-6"},null,8,["modelValue"]),o(V,{modelValue:e(a).end,"onUpdate:modelValue":t[3]||(t[3]=l=>e(a).end=l),label:"End",class:"col-12 col-sm-6"},null,8,["modelValue"])]),o(f,{modelValue:e(a).description,"onUpdate:modelValue":t[4]||(t[4]=l=>e(a).description=l),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"])])]),_:1},8,["onSubmit"])]),_:1}))}};export{j as default};

import{Q as y,b as Q}from"./api.client-cfdf14f0.js";import{M as _,O as p,P as c,Q as s,R as o,T,af as e,S as u,ah as v,ae as b,ao as g,ag as w}from"./index-99c26e0d.js";import{Q as r,a as C}from"./QForm-42b4edba.js";import{Q as S}from"./QPage-65b53fcc.js";import{u as x,_ as f}from"./DateInput-98879bb3.js";import"./uid-6a237b22.js";import"./use-form-f3b015c3.js";const I={class:"q-pa-md"},U={class:"row q-col-gutter-lg"},R={__name:"TimeView",setup(q){const d=_(),n=parseInt(d.params.id),{item:l,persist:i,remove:V,save:k,back:m}=x({task:parseInt(d.params.task),start:new Date().toISOString(),end:null,duration:null,description:""},"/api/v2/times/",n);return(B,t)=>(p(),c(S,{padding:""},{default:s(()=>[o(C,{onSubmit:w(e(k),["prevent"])},{default:s(()=>[o(y,null,{default:s(()=>[o(Q,null,{default:s(()=>[T("Time")]),_:1}),e(n)?(p(),c(u,{key:0,type:"button",flat:"",round:"",icon:"delete",disable:e(i),onClick:e(V)},null,8,["disable","onClick"])):v("",!0),o(u,{type:"submit",flat:"",round:"",icon:"save",disable:!e(l).duration||e(i)},null,8,["disable"]),o(u,{type:"button",flat:"",round:"",icon:"clear",onClick:e(m)},null,8,["onClick"])]),_:1}),b("div",I,[b("div",U,[o(r,{modelValue:e(l).task,"onUpdate:modelValue":t[0]||(t[0]=a=>e(l).task=a),label:"Task","stack-label":"",readonly:"",class:"col-12 col-sm-6"},null,8,["modelValue"]),o(r,{modelValue:e(l).duration,"onUpdate:modelValue":t[1]||(t[1]=a=>e(l).duration=a),type:"number",label:"Duration","stack-label":"",class:"col-12 col-sm-6",autofocus:!e(n),rules:[a=>!!a||"Field is required"],onKeyup:g(e(m),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),o(f,{modelValue:e(l).start,"onUpdate:modelValue":t[2]||(t[2]=a=>e(l).start=a),label:"Start",class:"col-12 col-sm-6"},null,8,["modelValue"]),o(f,{modelValue:e(l).end,"onUpdate:modelValue":t[3]||(t[3]=a=>e(l).end=a),label:"End",class:"col-12 col-sm-6"},null,8,["modelValue"])]),o(r,{modelValue:e(l).description,"onUpdate:modelValue":t[4]||(t[4]=a=>e(l).description=a),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"])])]),_:1},8,["onSubmit"])]),_:1}))}};export{R as default};

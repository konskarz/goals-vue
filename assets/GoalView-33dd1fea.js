import{Q,c as x}from"./uid-0f74c6fb.js";import{a1 as g,j as q,O as i,P as m,R as n,S as o,T as C,_ as e,Z as u,$ as w,ac as p,ad as B,a7 as N}from"./index-19c0a061.js";import{Q as c,a as P}from"./QForm-5637be80.js";import{Q as T,_ as S}from"./GoalSelect-ef3ea088.js";import{l as U}from"./QSlideTransition-cd59d0e7.js";import{u as G,_ as I}from"./DateInput-bcdf09c3.js";import"./use-field-85d9dbf8.js";const K={class:"q-py-sm q-px-md"},$={class:"row q-col-gutter-lg"},E={__name:"GoalView",setup(F){const f=g(),b=U(),s=parseInt(f.params.id),{item:l,original:V,persist:r,changed:_,remove:k,save:v,back:d}=G(s,b,{name:"",parent:null,planned:null,description:""}),y=q(()=>!l.value.name||r.value||!!(s&&!_(V,{...l.value})));return(R,t)=>(i(),m(T,null,{default:n(()=>[o(P,{onSubmit:N(e(v),["prevent"])},{default:n(()=>[o(Q,{class:"q-mt-md"},{default:n(()=>[o(x,null,{default:n(()=>[C("Goal")]),_:1}),e(s)?(i(),m(u,{key:0,type:"button",flat:"",round:"",icon:"delete",disable:e(r),onClick:e(k)},null,8,["disable","onClick"])):w("",!0),o(u,{type:"submit",flat:"",round:"",icon:"save",disable:y.value},null,8,["disable"]),o(u,{type:"button",flat:"",round:"",icon:"clear",onClick:e(d)},null,8,["onClick"])]),_:1}),p("div",K,[o(c,{modelValue:e(l).name,"onUpdate:modelValue":t[0]||(t[0]=a=>e(l).name=a),label:"Name","stack-label":"",autofocus:!e(s),rules:[a=>!!a||"Field is required"],onKeyup:B(e(d),["esc"])},null,8,["modelValue","autofocus","rules","onKeyup"]),p("div",$,[o(S,{modelValue:e(l).parent,"onUpdate:modelValue":t[1]||(t[1]=a=>e(l).parent=a),label:"Parent","stack-label":"","except-id":e(s),class:"col-12 col-lg-6"},null,8,["modelValue","except-id"]),o(I,{modelValue:e(l).planned,"onUpdate:modelValue":t[2]||(t[2]=a=>e(l).planned=a),label:"Planned",class:"col-12 col-lg-6"},null,8,["modelValue"])]),o(c,{modelValue:e(l).description,"onUpdate:modelValue":t[3]||(t[3]=a=>e(l).description=a),type:"textarea",label:"Description","stack-label":"",class:"q-pt-md"},null,8,["modelValue"])])]),_:1},8,["onSubmit"])]),_:1}))}};export{E as default};

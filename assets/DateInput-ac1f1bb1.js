import{r as m,a2 as g,w as h,f as k,a5 as I,a0 as S,ax as _,a_ as x,b0 as O}from"./index-b46a5b62.js";import{b as p}from"./api.client-8cb6dbfd.js";function y(c,u,e){const t=m(c),a=m(e+"/"),n=m(!1),f=g();let d=null;if(e){const{data:l}=p.read(u+e+"/"),o=r=>{t.value=r,d={...r}};l.value&&o(l.value),h(l,o)}function b(){e&&(n.value=!0,p.delete(u+a.value).then(()=>s()))}function v(){const l={...t.value},o=Object.keys(l).reduce((r,i)=>(l[i]!==d[i]&&(r[i]=l[i]),r),{});Object.keys(o).length?p.update(u+a.value,o).then(()=>s()):s()}function V(){n.value=!0,e?v():p.create(u,t.value).then(()=>s())}function s(){f.back()}return{item:t,path:a,persist:n,remove:b,save:V,back:s}}const B={__name:"DateInput",props:{label:{type:String,required:!0},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(c,{emit:u}){const e=c,t=k({get(){return e.modelValue?e.modelValue.slice(0,10):null},set(a){u("update:modelValue",a?new Date(a).toISOString():null)}});return(a,n)=>(I(),S(O,{modelValue:_(t),"onUpdate:modelValue":n[0]||(n[0]=f=>x(t)?t.value=f:null),type:"date",label:c.label,"stack-label":""},null,8,["modelValue","label"]))}};export{B as _,y as u};

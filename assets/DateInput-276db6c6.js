import{r as m,ab as v,d as V,a4 as I,a2 as k,aj as j,aD as y,aB as O}from"./index-c0954342.js";function B(t,e,u){const a=m(t?{...e.getItem(t)}:u),l=m(t+"/"),n=m(!1),r=t?{...a.value}:null,f=v();function i(o,c){return Object.fromEntries(Object.entries(c).filter(([g,h])=>o[g]!==h))}function p(o,c){return Object.keys(i(o,c)).length}function s(){f.back()}function d(){n.value=!0,e.deleteItem(l.value).then(()=>{e.refetch(),s()})}function b(){n.value=!0,t?e.updateItem(l.value,i(r,{...a.value})).then(()=>{e.refetch(),s()}):e.createItem(a.value).then(()=>{e.refetch(),s()})}return{item:a,original:r,path:l,persist:n,changed:p,remove:d,save:b,back:s}}const D={__name:"DateInput",props:{label:{type:String,required:!0},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const u=t,a=V({get(){return u.modelValue?u.modelValue.slice(0,10):null},set(l){e("update:modelValue",l?new Date(l).toISOString():null)}});return(l,n)=>(I(),k(O,{modelValue:j(a),"onUpdate:modelValue":n[0]||(n[0]=r=>y(a)?a.value=r:null),type:"date",label:t.label,"stack-label":""},null,8,["modelValue","label"]))}};export{D as _,B as u};

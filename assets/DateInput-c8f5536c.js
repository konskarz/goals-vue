import{r as c,a3 as g,f as v,a7 as b,a1 as V,aw as I,aZ as h,b2 as k}from"./index-09be7c6a.js";function y(t,e,n){const a=c(t?{...e.getItem(t)}:n),l=c(t+"/"),u=c(!1),o=t?{...a.value}:null,r=g();function s(){r.back()}function m(){e.createItem(a.value).then(()=>{e.mutate(),s()})}function p(){const f=e.getChanges(o,{...a.value});e.updateItem(l.value,f).then(()=>{e.mutate(),s()})}function i(){u.value=!0,e.deleteItem(l.value).then(()=>{e.mutate(),s()})}function d(){u.value=!0,t?p():m()}return{item:a,original:o,path:l,persist:u,remove:i,save:d,back:s}}const _={__name:"DateInput",props:{label:{type:String,required:!0},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,a=v({get(){return n.modelValue?n.modelValue.slice(0,10):null},set(l){e("update:modelValue",l?new Date(l).toISOString():null)}});return(l,u)=>(b(),V(k,{modelValue:I(a),"onUpdate:modelValue":u[0]||(u[0]=o=>h(a)?a.value=o:null),type:"date",label:t.label,"stack-label":""},null,8,["modelValue","label"]))}};export{_,y as u};

import{d as m,a_ as i,f as p,a2 as f,Z as b,_ as v,a3 as t,a4 as u,al as n,aZ as V,a$ as k}from"./index-940e76f3.js";function $(){return m(i)}const y={__name:"NumberInput",props:{label:{type:String,required:!0},modelValue:{type:Number,default:null}},emits:["update:modelValue"],setup(o,{emit:s}){const d=o,l=p({get(){return d.modelValue},set(r){s("update:modelValue",r)}});return(r,e)=>(f(),b(k,{modelValue:n(l),"onUpdate:modelValue":e[4]||(e[4]=a=>V(l)?l.value=a:null),modelModifiers:{number:!0},type:"number",min:"0",label:o.label,"stack-label":""},{append:v(()=>[t(u,{round:"",dense:"",flat:"",label:"-10",onClick:e[0]||(e[0]=a=>{n(l)>=10&&(l.value-=10)})}),t(u,{round:"",dense:"",flat:"",label:"-1",onClick:e[1]||(e[1]=a=>{n(l)>=1&&l.value--})}),t(u,{round:"",dense:"",flat:"",label:"+1",onClick:e[2]||(e[2]=a=>l.value++)}),t(u,{round:"",dense:"",flat:"",label:"+10",onClick:e[3]||(e[3]=a=>l.value+=10)})]),_:1},8,["modelValue","label"]))}};export{y as _,$ as u};

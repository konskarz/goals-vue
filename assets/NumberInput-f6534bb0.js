import{d as m,a$ as i,f as p,a5 as b,a0 as f,a1 as v,a6 as u,a7 as t,ax as n,a_ as V,b0 as k}from"./index-b46a5b62.js";function $(){return m(i)}const x={__name:"NumberInput",props:{label:{type:String,required:!0},modelValue:{type:Number,default:null}},emits:["update:modelValue"],setup(o,{emit:s}){const d=o,l=p({get(){return d.modelValue},set(r){s("update:modelValue",r)}});return(r,e)=>(b(),f(k,{modelValue:n(l),"onUpdate:modelValue":e[4]||(e[4]=a=>V(l)?l.value=a:null),modelModifiers:{number:!0},type:"number",min:"0",label:o.label,"stack-label":""},{append:v(()=>[u(t,{round:"",label:"-10",onClick:e[0]||(e[0]=a=>{n(l)>=10&&(l.value-=10)})}),u(t,{round:"",label:"-1",onClick:e[1]||(e[1]=a=>{n(l)>=1&&l.value--})}),u(t,{round:"",label:"+1",onClick:e[2]||(e[2]=a=>l.value++)}),u(t,{round:"",label:"+10",onClick:e[3]||(e[3]=a=>l.value+=10)})]),_:1},8,["modelValue","label"]))}};export{x as _,$ as u};

import{c as u,j as t,h as o,Q as s}from"./index-19c0a061.js";import{u as i,b as g,c as m}from"./GoalSelect-ef3ea088.js";const h=u({name:"QToggle",props:{...i,icon:String,iconColor:String},emits:g,setup(e){function a(c,l){const n=t(()=>(c.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),r=t(()=>c.value===!0?e.iconColor:null);return()=>[o("div",{class:"q-toggle__track"}),o("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},n.value!==void 0?[o(s,{name:n.value,color:r.value})]:void 0)]}return m("toggle",a)}});export{h as Q};

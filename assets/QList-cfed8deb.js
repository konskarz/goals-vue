import{c as o,D as n,E as d,f as l,h as i,S as u,g as c}from"./index-d95bd3d0.js";const q=o({name:"QList",props:{...n,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const a=c(),s=d(e,a.proxy.$q),r=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>i(e.tag,{class:r.value},u(t.default))}});export{q as Q};

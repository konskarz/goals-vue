import{c as t,a as s,h as r,b as l}from"./index-7e23eb14.js";const u=t({name:"QToolbarTitle",props:{shrink:Boolean},setup(o,{slots:a}){const e=s(()=>"q-toolbar__title ellipsis"+(o.shrink===!0?" col-shrink":""));return()=>r("div",{class:e.value},l(a.default))}}),i={dark:{type:Boolean,default:null}};function c(o,a){return s(()=>o.dark===null?a.dark.isActive:o.dark)}const p=t({name:"QToolbar",props:{inset:Boolean},setup(o,{slots:a}){const e=s(()=>"q-toolbar row no-wrap items-center"+(o.inset===!0?" q-toolbar--inset":""));return()=>r("div",{class:e.value,role:"toolbar"},l(a.default))}});export{p as Q,c as a,u as b,i as u};

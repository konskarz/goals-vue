import{b as Q,a as V,Q as b}from"./api.client-d0e688b5.js";import{Q as k,_ as v}from"./WeekTimelineEntry-077e610b.js";import{Q as x}from"./QPage-77d3f6ff.js";import{d as T}from"./date-6a5b7688.js";import{_ as y}from"./GoalSelect-36815da1.js";import{r as I,f as Y,o as F,w as B,a0 as n,a1 as l,a5 as o,a6 as m,a8 as C,ax as r,a9 as d,aa as E,ab as p,ay as f}from"./index-1f2035cb.js";import"./QList-1e981ce5.js";import"./format-5e880990.js";import"./QItemLabel-41aa1ee7.js";import"./NumberInput-61048a49.js";import"./DurationInput-6191a77f.js";import"./QMenu-5bc91eb7.js";const O={__name:"HomeView",setup(G){const s="Goal-Filter",_=T.formatDate(new Date,"YYYY-w"),a=I(null),g=Y(()=>a.value?"/plan/?goal="+a.value:"/plan/"),{data:u,mutate:w}=Q.read(g);return F(()=>{const e=localStorage.getItem(s);e&&(a.value=parseInt(e))}),B(a,e=>{e?localStorage.setItem(s,e):localStorage.removeItem(s)}),(e,c)=>(o(),n(x,{padding:""},{default:l(()=>[m(b,null,{default:l(()=>[m(V,null,{default:l(()=>[C("Plan")]),_:1}),m(y,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=t=>a.value=t),label:"For Goal",dense:"",borderless:"",class:"col-6 col-sm-3 col-lg-2"},null,8,["modelValue"])]),_:1}),r(u)?(o(),n(k,{key:0,layout:"dense",class:"q-px-md"},{default:l(()=>[(o(!0),d(p,null,E(r(u),(t,i)=>(o(),d(p,{key:i},[t.day?(o(),n(v,{key:0,color:i===r(_)?"orange":"",week:t,onMutate:r(w)},null,8,["color","week","onMutate"])):f("",!0)],64))),128))]),_:1})):f("",!0)]),_:1}))}};export{O as default};
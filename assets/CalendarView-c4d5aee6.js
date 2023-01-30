import{b as B,a as C,Q as E}from"./api.client-d0e688b5.js";import{Q as v}from"./QItemLabel-41aa1ee7.js";import{Q as w,a as i}from"./format-5e880990.js";import{r as L,f as T,o as W,w as h,a0 as g,a1 as t,a5 as u,a6 as e,a8 as _,a7 as U,b5 as V,ax as c,a9 as k,aa as H,ab as b,ay as M}from"./index-1f2035cb.js";import{Q as J}from"./QList-1e981ce5.js";import{Q as K}from"./QMenu-5bc91eb7.js";import{Q as $,_ as q}from"./WeekTimelineEntry-077e610b.js";import{Q as A}from"./QPage-77d3f6ff.js";import{d as o}from"./date-6a5b7688.js";import{_ as G}from"./GoalSelect-36815da1.js";import"./NumberInput-61048a49.js";import"./DurationInput-6191a77f.js";const se={__name:"CalendarView",setup(P){const D="Tasks-Filter",d=o.startOfDate(new Date,"day"),F=o.subtractFromDate(d,{days:o.getDayOfWeek(d)-1}),S=o.formatDate(d,"YYYY-w"),r=L({done:!0,recurring:!0,goal:null}),{data:x,mutate:I}=B.read("/tasks/"),y=T(()=>x.value.filter(a=>{const l=new Date(a.planned.slice(0,10))<F;return l&&r.value.done&&a.done||l&&r.value.recurring&&a.group_id?!1:!(r.value.goal&&r.value.goal!==a.goal)})),Q=T(()=>{const a=y.value.length,l=a?[...y.value].sort((f,N)=>Date.parse(f.planned)-Date.parse(N.planned)):null,n=a?new Date(l[0].planned.slice(0,10)):d,m=a?new Date(l[l.length-1].planned.slice(0,10)):o.addToDate(n,{days:7}),Y=o.addToDate(m,{days:7});let s=o.subtractFromDate(n,{days:o.getDayOfWeek(n)-1});const O=o.subtractFromDate(Y,{days:o.getDayOfWeek(Y)-1});let p={};for(;s<=O;)p[o.formatDate(s,"YYYY-w")]={day:o.formatDate(s,"YYYY-MM-DD"),tasks:[]},s=o.addToDate(s,{days:7});return a&&l.forEach(f=>{p[o.formatDate(f.planned,"YYYY-w")].tasks.push(f)}),p});return W(()=>{const a=localStorage.getItem(D);a&&(r.value=JSON.parse(a))}),h(()=>r.value,a=>{localStorage.setItem(D,JSON.stringify(a))},{deep:!0}),(a,l)=>(u(),g(A,{padding:""},{default:t(()=>[e(E,null,{default:t(()=>[e(C,null,{default:t(()=>[_("Tasks")]),_:1}),e(G,{modelValue:r.value.goal,"onUpdate:modelValue":l[0]||(l[0]=n=>r.value.goal=n),label:"For Goal",dense:"",borderless:"",class:"col-6 col-sm-3 col-lg-2"},null,8,["modelValue"]),e(U,{flat:"",round:"",icon:"filter_list"},{default:t(()=>[e(K,null,{default:t(()=>[e(J,null,{default:t(()=>[e(w,null,{default:t(()=>[e(i,null,{default:t(()=>[e(v,null,{default:t(()=>[_("Hide passed done")]),_:1})]),_:1}),e(i,{side:""},{default:t(()=>[e(V,{modelValue:r.value.done,"onUpdate:modelValue":l[1]||(l[1]=n=>r.value.done=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(i,null,{default:t(()=>[e(v,null,{default:t(()=>[_("Hide passed recurring")]),_:1})]),_:1}),e(i,{side:""},{default:t(()=>[e(V,{modelValue:r.value.recurring,"onUpdate:modelValue":l[2]||(l[2]=n=>r.value.recurring=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),c(Q)?(u(),g($,{key:0,layout:"dense",class:"q-px-md"},{default:t(()=>[(u(!0),k(b,null,H(c(Q),(n,m)=>(u(),k(b,{key:m},[n.day?(u(),g(q,{key:0,color:m===c(S)?"orange":"",week:n,onMutate:c(I)},null,8,["color","week","onMutate"])):M("",!0)],64))),128))]),_:1})):M("",!0)]),_:1}))}};export{se as default};

import{af as x,j as d,r as F}from"./index-7ce8a7d6.js";import{d as l}from"./date-59e72ec0.js";import{a as O,u as W}from"./GoalStore-7246b423.js";const B=x("TaskStore",()=>{const{data:u,refetch:D,getItem:h,createItem:y,updateItem:w,deleteItem:I}=O("/tasks/"),i=W(),S=d(()=>u.value&&i.data?u.value.map(e=>({...e,goalName:e.goal?i.getItem(e.goal).name:null})):null),o=F({done:!0,recurring:!0,goal:null}),v=d(()=>o.value.goal?i.getBranch(o.value.goal):null);i.$onAction(({name:e,args:n})=>{e==="deleteItem"&&o.value.goal===n[0]&&(o.value.goal=null)});const f=e=>l.subtractFromDate(e,{days:l.getDayOfWeek(e)-1}),g=e=>l.formatDate(e,"YYYY-MM-DD"),m=l.startOfDate(new Date,"day"),p=f(m),T=g(p),s=d(()=>u.value?u.value.filter(e=>!(!e.planned||new Date(e.planned.slice(0,10))<p&&(o.value.done&&e.done||o.value.recurring&&e.group_id)||v.value&&!v.value.includes(e.goal))).sort((e,n)=>Date.parse(e.planned)-Date.parse(n.planned)):null),b=d(()=>{const e=(n,t,c)=>{for(;t<=c;)n[g(t)]=[],t=l.addToDate(t,{days:7});return n};if(s.value&&s.value.length){const n=f(s.value[0].planned.slice(0,10)),t=l.addToDate(f(s.value[s.value.length-1].planned.slice(0,10)),{days:7}),c=e({},n,t);return s.value.forEach(a=>{c[g(f(a.planned.slice(0,10)))].push(a)}),c}return e({},p,l.addToDate(p,{days:14}))}),Y=d(()=>{if(!u.value)return null;const e=u.value.filter(a=>{if(!a.group_id||!a.planned)return!1;const r=new Date(a.planned.slice(0,10));return!(r>m||r<l.subtractFromDate(m,{years:1}))}).sort((a,r)=>Date.parse(a.planned)-Date.parse(r.planned));if(!e.length)return null;const n=a=>a.done?100:a.target>1?a.performance/a.target*100:0,t=e.reduce((a,r)=>({...a,[r.name]:[...a[r.name]||[],{x:"w"+l.formatDate(r.planned.slice(0,10),"w"),y:n(r)}]}),{}),c=[];for(const a in t)c.push({name:a,data:t[a]});return c});return{data:u,refetch:D,getItem:h,createItem:y,updateItem:w,deleteItem:I,relative:S,filter:o,currentWeek:T,filtered:s,calendar:b,recurring:Y}});export{B as u};

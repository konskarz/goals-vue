import{a as i,Q as c}from"./QToolbar-c6ccf8bd.js";import{Q as p}from"./GoalStore-3f6647c8.js";import{u as m}from"./TaskStore-56d7b033.js";import{Q as u,R as s,S as d,T as o,U as r,W as h,a5 as a,X as f,a3 as _,a7 as g}from"./index-1721af1a.js";import"./date-ee1bb105.js";import"./format-8c778330.js";function x(t,e=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(!(e instanceof Element))throw new TypeError("Expected a DOM element");return getComputedStyle(e).getPropertyValue(`--q-${t}`).trim()||null}const y={key:0,class:"q-pl-lg q-pr-sm"},b=g("div",{class:"text-subtitle2"},"Recurring Tasks",-1),C={__name:"ReportsView",setup(t){const e=m(),n={chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},colors:[x("positive")],responsive:[{breakpoint:600,options:{chart:{width:568},yaxis:{labels:{maxWidth:100}}}}]};return(w,T)=>{const l=u("apexchart");return s(),d(p,null,{default:o(()=>[r(c,{class:"q-mt-md q-pl-lg"},{default:o(()=>[r(i,null,{default:o(()=>[h("Reports")]),_:1})]),_:1}),a(e).recurring?(s(),f("div",y,[b,r(l,{type:"heatmap",height:a(e).recurring.length*44,options:n,series:a(e).recurring,style:{overflow:"auto hidden"}},null,8,["height","series"])])):_("",!0)]),_:1})}}};export{C as default};

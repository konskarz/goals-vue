import{b as h,Q as _}from"./use-dark-654e3562.js";import{Q as g,a as b,b as i}from"./QItemLabel-a463bde5.js";import{Q as y}from"./QList-fdf7fef4.js";import{u as x,d as Q,Q as w}from"./TaskStore-77a9efc1.js";import{P as T,Q as r,R as l,S as e,T as t,V as p,a4 as f,W as k,X as V,Y as E,a2 as S,_ as q}from"./index-151d9773.js";import"./format-8c778330.js";function C(s,a=document.body){if(typeof s!="string")throw new TypeError("Expected a string as propName");if(!(a instanceof Element))throw new TypeError("Expected a DOM element");return getComputedStyle(a).getPropertyValue(`--q-${s}`).trim()||null}const M={__name:"ReportsView",setup(s){const a=x(),m={chart:{toolbar:{show:!1},parentHeightOffset:0},yaxis:{labels:{show:!1}},xaxis:{type:"datetime",labels:{show:!0,rotate:0,hideOverlappingLabels:!0,formatter:(u,n)=>Q.formatDate(n,"DD.MM"),style:{colors:"rgba(0, 0, 0, 0.54)",fontSize:".75rem"},offsetY:-4,offsetX:5},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},grid:{padding:{top:-30,left:-10,right:10}},tooltip:{enabled:!1},dataLabels:{enabled:!1},colors:[C("primary")]};return(u,n)=>{const c=T("apexchart");return r(),l(w,null,{default:e(()=>[t(_,{class:"q-mt-md q-pl-lg"},{default:e(()=>[t(h,null,{default:e(()=>[p("Reports")]),_:1})]),_:1}),f(a).recurring?(r(),l(y,{key:0,class:"q-py-sm q-pl-sm"},{default:e(()=>[(r(!0),k(E,null,V(f(a).recurring,(d,o)=>(r(),l(g,{key:o},{default:e(()=>[t(b,null,{default:e(()=>[t(i,null,{default:e(()=>[p(q(o),1)]),_:2},1024),t(i,{caption:""},{default:e(()=>[t(c,{type:"heatmap",series:[{name:o,data:d}],options:m,height:32+14},null,8,["series"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):S("",!0)]),_:1})}}};export{M as default};

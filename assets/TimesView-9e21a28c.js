import{b as m,a as f,Q as _}from"./api.client-03bb990c.js";import{a as r,Q as i}from"./format-822d6f4d.js";import{Q as c}from"./QList-30318d06.js";import{Q as p}from"./QPage-cb509279.js";import{d as Q}from"./date-ef5576d6.js";import{Z as o,_ as a,a2 as l,a3 as t,a5 as e,al as d,a6 as k,a7 as T,a8 as D,ar as g,aa as u}from"./index-54897337.js";const S={__name:"TimesView",setup(x){const{data:n}=m.read("/times/");return(V,Y)=>(l(),o(p,{padding:""},{default:a(()=>[t(_,null,{default:a(()=>[t(f,null,{default:a(()=>[e("Times")]),_:1})]),_:1}),d(n)?(l(),o(c,{key:0,separator:""},{default:a(()=>[t(i,null,{default:a(()=>[t(r,{class:"col-5"},{default:a(()=>[e("Start")]),_:1}),t(r,null,{default:a(()=>[e("Duration")]),_:1}),t(r,{side:""},{default:a(()=>[e("Task")]),_:1})]),_:1}),(l(!0),k(D,null,T(d(n),s=>(l(),o(i,{key:s.id,to:{name:"time",params:{id:s.id,task:s.task}}},{default:a(()=>[t(r,{class:"col-5"},{default:a(()=>[e(u(d(Q).formatDate(s.start,"ddd MMM DD YYYY")),1)]),_:2},1024),t(r,null,{default:a(()=>[e(u(s.duration),1)]),_:2},1024),t(r,{side:""},{default:a(()=>[e(u(s.task),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})):g("",!0)]),_:1}))}};export{S as default};
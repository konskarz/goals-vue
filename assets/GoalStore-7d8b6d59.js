import{c as j,d as Q,e as c,f as b,h as O,S as P,g as S,k as q,V as H,aI as m,aJ as V}from"./index-09be7c6a.js";const B=j({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:o}){const{proxy:{$q:a}}=S(),n=Q(q,c);if(n===c)return console.error("QPage needs to be a deep child of QLayout"),c;if(Q(H,c)===c)return console.error("QPage needs to be child of QPageContainer"),c;const i=b(()=>{const s=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof t.styleFn=="function"){const u=n.isContainer.value===!0?n.containerHeight.value:a.screen.height;return t.styleFn(s,u)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-s+"px":a.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":a.screen.height-s+"px"}}),l=b(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>O("main",{class:l.value,style:i.value},P(o.default))}});function k(t){const{data:o,error:a,isValidating:n,mutate:d}=m.read(t);function i(e){return o.value.find(r=>r.id===e)}function l(e,r){Object.assign(i(e),r)}function s(e){o.value.push(e)}function u(e){return o.value.indexOf(e)}function v(e){o.value.splice(u(i(e)),1)}function I(e){return m.create(t,e)}function y(e,r){return m.update(t+e,r)}function C(e){return m.delete(t+e)}function g(e,r){return Object.fromEntries(Object.entries(r).filter(([f,h])=>e[f]!==h))}function x(e,r){return Object.keys(g(e,r)).length}return{data:o,error:a,isValidating:n,mutate:d,getItem:i,setItem:l,addItem:s,getIndex:u,removeItem:v,createItem:I,updateItem:y,deleteItem:C,getChanges:g,isChanged:x}}const F=(t,o=null)=>t.filter(a=>a.parent===o).map(a=>({...a,children:F(t,a.id)})),E=V("GoalStore",()=>{const{data:t,error:o,isValidating:a,mutate:n,getItem:d,setItem:i,addItem:l,getIndex:s,removeItem:u,createItem:v,updateItem:I,deleteItem:y,getChanges:C,isChanged:g}=k("/goals/"),x=b(()=>t.value?F(t.value):null);function e(r){const f=[r],h=$=>t.value.filter(p=>p.parent===$).forEach(p=>{f.push(p.id),h(p.id)});return h(r),f}return{data:t,error:o,isValidating:a,mutate:n,getItem:d,setItem:i,addItem:l,getIndex:s,removeItem:u,createItem:v,updateItem:I,deleteItem:y,getChanges:C,isChanged:g,tree:x,getBranch:e}});export{B as Q,E as a,k as u};

import{r as F,j as y,h as x,g as G,ab as st,af as ie,D as ct,G as ae,aa as dt,z as de,c as te,Z as me,ag as ft,w as O,b as $e,ah as vt,ai as ht,E as mt,a6 as gt,aj as ge,B as bt,a as fe,ak as xt,al as Ce,K as yt,am as kt,an as qt,ao as wt,p as Fe,ad as Ne,a1 as Ee,ap as Qe,u as He,s as Me,o as St,y as _t,l as pe,x as Ct,Q as Tt,R as Et,S as se,a7 as pt,_ as Bt,T as ve,a4 as Pt}from"./index-82773c7f.js";import{a as ke,u as qe}from"./use-dark-ab69c230.js";import{u as $t,a as Ft,r as Oe,b as Kt,c as je,d as At,e as Ht,f as Mt,g as Ot}from"./use-field-51305d66.js";import{Q as Vt}from"./QSlideTransition-782458ae.js";import{u as Ge,e as zt,f as Lt,c as Dt,h as It,g as Rt}from"./use-timeout-90e9a518.js";import{u as Ue,a as Xe,b as Ye}from"./use-model-toggle-6bc55501.js";import{a as Wt}from"./MainPage-0202bc80.js";function Nt(e,o){const t=F(null),i=y(()=>e.disable===!0?null:x("span",{ref:t,class:"no-outline",tabindex:-1}));function r(d){const a=o.value;d!==void 0&&d.type.indexOf("key")===0?a!==null&&document.activeElement!==a&&a.contains(document.activeElement)===!0&&a.focus():t.value!==null&&(d===void 0||a!==null&&a.contains(d.target)===!0)&&t.value.focus()}return{refocusTargetEl:i,refocusTarget:r}}const Qt={xs:30,sm:35,md:40,lg:50,xl:60},jt={...qe,...dt,...$t,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Gt=["update:modelValue"];function Ut(e,o){const{props:t,slots:i,emit:r,proxy:d}=G(),{$q:a}=d,f=ke(t,a),v=F(null),{refocusTargetEl:m,refocusTarget:b}=Nt(t,v),_=st(t,Qt),T=y(()=>t.val!==void 0&&Array.isArray(t.modelValue)),h=y(()=>{const q=ie(t.val);return T.value===!0?t.modelValue.findIndex(K=>ie(K)===q):-1}),w=y(()=>T.value===!0?h.value>-1:ie(t.modelValue)===ie(t.trueValue)),C=y(()=>T.value===!0?h.value===-1:ie(t.modelValue)===ie(t.falseValue)),H=y(()=>w.value===!1&&C.value===!1),P=y(()=>t.disable===!0?-1:t.tabindex||0),M=y(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(f.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),Q=y(()=>{const q=w.value===!0?"truthy":C.value===!0?"falsy":"indet",K=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?w.value===!0:C.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${q}${K}`}),V=y(()=>{const q={type:"checkbox"};return t.name!==void 0&&Object.assign(q,{".checked":w.value,"^checked":w.value===!0?"checked":void 0,name:t.name,value:T.value===!0?t.val:t.trueValue}),q}),U=Ft(V),X=y(()=>{const q={tabindex:P.value,role:e==="toggle"?"switch":"checkbox","aria-label":t.label,"aria-checked":H.value===!0?"mixed":w.value===!0?"true":"false"};return t.disable===!0&&(q["aria-disabled"]="true"),q});function $(q){q!==void 0&&(de(q),b(q)),t.disable!==!0&&r("update:modelValue",z(),q)}function z(){if(T.value===!0){if(w.value===!0){const q=t.modelValue.slice();return q.splice(h.value,1),q}return t.modelValue.concat([t.val])}if(w.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(C.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function L(q){(q.keyCode===13||q.keyCode===32)&&de(q)}function j(q){(q.keyCode===13||q.keyCode===32)&&$(q)}const A=o(w,H);return Object.assign(d,{toggle:$}),()=>{const q=A();t.disable!==!0&&U(q,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const K=[x("div",{class:Q.value,style:_.value,"aria-hidden":"true"},q)];m.value!==null&&K.push(m.value);const D=t.label!==void 0?ct(i.default,[t.label]):ae(i.default);return D!==void 0&&K.push(x("div",{class:`q-${e}__label q-anchor--skip`},D)),x("div",{ref:v,class:M.value,...X.value,onClick:$,onKeydown:L,onKeyup:j},K)}}const Xt=x("div",{key:"svg",class:"q-checkbox__bg absolute"},[x("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[x("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),x("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),Yt=te({name:"QCheckbox",props:jt,emits:Gt,setup(e){function o(t,i){const r=y(()=>(t.value===!0?e.checkedIcon:i.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[x("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[x(me,{class:"q-checkbox__icon",name:r.value})])]:[Xt]}return Ut("checkbox",o)}}),Zt=["none","strict","leaf","leaf-filtered"],Jt=te({name:"QTree",props:{...qe,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>Zt.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:o,emit:t}){const{proxy:i}=G(),{$q:r}=i,d=ke(e,r),a=F({}),f=F(e.ticked||[]),v=F(e.expanded||[]);let m={};ft(()=>{m={}});const b=y(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(d.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),_=y(()=>e.selected!==void 0),T=y(()=>e.icon||r.iconSet.tree.icon),h=y(()=>e.controlColor||e.color),w=y(()=>e.textColor!==void 0?` text-${e.textColor}`:""),C=y(()=>{const l=e.selectedColor||e.color;return l?` text-${l}`:""}),H=y(()=>e.filterMethod!==void 0?e.filterMethod:(l,c)=>{const n=c.toLowerCase();return l[e.labelKey]&&l[e.labelKey].toLowerCase().indexOf(n)>-1}),P=y(()=>{const l={},c=(n,s)=>{const u=n.tickStrategy||(s?s.tickStrategy:e.tickStrategy),k=n[e.nodeKey],E=n[e.childrenKey]&&n[e.childrenKey].length!==0,g=n.disabled!==!0&&_.value===!0&&n.selectable!==!1,p=n.disabled!==!0&&n.expandable!==!1,we=u!=="none",ne=u==="strict",Ke=u==="leaf-filtered",Se=u==="leaf"||u==="leaf-filtered";let _e=n.disabled!==!0&&n.tickable!==!1;Se===!0&&_e===!0&&s&&s.tickable!==!0&&(_e=!1);let le=n.lazy;le===!0&&a.value[k]!==void 0&&Array.isArray(n[e.childrenKey])===!0&&(le=a.value[k]);const S={key:k,parent:s,isParent:E,lazy:le,disabled:n.disabled,link:n.disabled!==!0&&(g===!0||p===!0&&(E===!0||le===!0)),children:[],matchesFilter:e.filter?H.value(n,e.filter):!0,selected:k===e.selected&&g===!0,selectable:g,expanded:E===!0?v.value.includes(k):!1,expandable:p,noTick:n.noTick===!0||ne!==!0&&le&&le!=="loaded",tickable:_e,tickStrategy:u,hasTicking:we,strictTicking:ne,leafFilteredTicking:Ke,leafTicking:Se,ticked:ne===!0?f.value.includes(k):E===!0?!1:f.value.includes(k)};if(l[k]=S,E===!0&&(S.children=n[e.childrenKey].map(B=>c(B,S)),e.filter&&(S.matchesFilter!==!0?S.matchesFilter=S.children.some(B=>B.matchesFilter):S.noTick!==!0&&S.disabled!==!0&&S.tickable===!0&&Ke===!0&&S.children.every(B=>B.matchesFilter!==!0||B.noTick===!0||B.tickable!==!0)===!0&&(S.tickable=!1)),S.matchesFilter===!0&&(S.noTick!==!0&&ne!==!0&&S.children.every(B=>B.noTick)===!0&&(S.noTick=!0),Se))){if(S.ticked=!1,S.indeterminate=S.children.some(B=>B.indeterminate===!0),S.tickable=S.tickable===!0&&S.children.some(B=>B.tickable),S.indeterminate!==!0){const B=S.children.reduce((Ae,ut)=>ut.ticked===!0?Ae+1:Ae,0);B===S.children.length?S.ticked=!0:B>0&&(S.indeterminate=!0)}S.indeterminate===!0&&(S.indeterminateNextState=S.children.every(B=>B.tickable!==!0||B.ticked!==!0))}return S};return e.nodes.forEach(n=>c(n,null)),l});O(()=>e.ticked,l=>{f.value=l}),O(()=>e.expanded,l=>{v.value=l});function M(l){const c=[].reduce,n=(s,u)=>{if(s||!u)return s;if(Array.isArray(u)===!0)return c.call(Object(u),n,s);if(u[e.nodeKey]===l)return u;if(u[e.childrenKey])return n(null,u[e.childrenKey])};return n(null,e.nodes)}function Q(){return f.value.map(l=>M(l))}function V(){return v.value.map(l=>M(l))}function U(l){return l&&P.value[l]?P.value[l].expanded:!1}function X(){e.expanded!==void 0?t("update:expanded",[]):v.value=[]}function $(){const l=[],c=n=>{n[e.childrenKey]&&n[e.childrenKey].length!==0&&n.expandable!==!1&&n.disabled!==!0&&(l.push(n[e.nodeKey]),n[e.childrenKey].forEach(c))};e.nodes.forEach(c),e.expanded!==void 0?t("update:expanded",l):v.value=l}function z(l,c,n=M(l),s=P.value[l]){if(s.lazy&&s.lazy!=="loaded"){if(s.lazy==="loading")return;a.value[l]="loading",Array.isArray(n[e.childrenKey])!==!0&&(n[e.childrenKey]=[]),t("lazyLoad",{node:n,key:l,done:u=>{a.value[l]="loaded",n[e.childrenKey]=Array.isArray(u)===!0?u:[],$e(()=>{const k=P.value[l];k&&k.isParent===!0&&L(l,!0)})},fail:()=>{delete a.value[l],n[e.childrenKey].length===0&&delete n[e.childrenKey]}})}else s.isParent===!0&&s.expandable===!0&&L(l,c)}function L(l,c){let n=v.value;const s=e.expanded!==void 0;if(s===!0&&(n=n.slice()),c){if(e.accordion&&P.value[l]){const u=[];P.value[l].parent?P.value[l].parent.children.forEach(k=>{k.key!==l&&k.expandable===!0&&u.push(k.key)}):e.nodes.forEach(k=>{const E=k[e.nodeKey];E!==l&&u.push(E)}),u.length!==0&&(n=n.filter(k=>u.includes(k)===!1))}n=n.concat([l]).filter((u,k,E)=>E.indexOf(u)===k)}else n=n.filter(u=>u!==l);s===!0?t("update:expanded",n):v.value=n}function j(l){return l&&P.value[l]?P.value[l].ticked:!1}function A(l,c){let n=f.value;const s=e.ticked!==void 0;s===!0&&(n=n.slice()),c?n=n.concat(l).filter((u,k,E)=>E.indexOf(u)===k):n=n.filter(u=>l.includes(u)===!1),s===!0&&t("update:ticked",n)}function q(l,c,n){const s={tree:i,node:l,key:n,color:e.color,dark:d.value};return ge(s,"expanded",()=>c.expanded,u=>{u!==c.expanded&&z(n,u)}),ge(s,"ticked",()=>c.ticked,u=>{u!==c.ticked&&A([n],u)}),s}function K(l){return(e.filter?l.filter(c=>P.value[c[e.nodeKey]].matchesFilter):l).map(c=>Y(c))}function D(l){if(l.icon!==void 0)return x(me,{class:"q-tree__icon q-mr-sm",name:l.icon,color:l.iconColor});const c=l.img||l.avatar;if(c)return x("img",{class:`q-tree__${l.img?"img":"avatar"} q-mr-sm`,src:c})}function re(){t("afterShow")}function I(){t("afterHide")}function Y(l){const c=l[e.nodeKey],n=P.value[c],s=l.header&&o[`header-${l.header}`]||o["default-header"],u=n.isParent===!0?K(l[e.childrenKey]):[],k=u.length!==0||n.lazy&&n.lazy!=="loaded";let E=l.body&&o[`body-${l.body}`]||o["default-body"];const g=s!==void 0||E!==void 0?q(l,n,c):null;return E!==void 0&&(E=x("div",{class:"q-tree__node-body relative-position"},[x("div",{class:w.value},[E(g)])])),x("div",{key:c,class:`q-tree__node relative-position q-tree__node--${k===!0?"parent":"child"}`},[x("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(n.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(n.selected===!0?" q-tree__node--selected":"")+(n.disabled===!0?" q-tree__node--disabled":""),tabindex:n.link===!0?0:-1,onClick:p=>{W(l,n,p)},onKeypress(p){vt(p)!==!0&&(p.keyCode===13?W(l,n,p,!0):p.keyCode===32&&N(l,n,p,!0))}},[x("div",{class:"q-focus-helper",tabindex:-1,ref:p=>{m[n.key]=p}}),n.lazy==="loading"?x(ht,{class:"q-tree__spinner",color:h.value}):k===!0?x(me,{class:"q-tree__arrow"+(n.expanded===!0?" q-tree__arrow--rotate":""),name:T.value,onClick(p){N(l,n,p)}}):null,n.hasTicking===!0&&n.noTick!==!0?x(Yt,{class:"q-tree__tickbox",modelValue:n.indeterminate===!0?null:n.ticked,color:h.value,dark:d.value,dense:!0,keepColor:!0,disable:n.tickable!==!0,onKeydown:de,"onUpdate:modelValue":p=>{ue(n,p)}}):null,x("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(n.selected===!0?C.value:w.value)},[s?s(g):[D(l),x("div",l[e.labelKey])]])]),k===!0?e.noTransition===!0?x("div",{class:"q-tree__node-collapsible"+w.value,key:`${c}__q`},[E,x("div",{class:"q-tree__children"+(n.disabled===!0?" q-tree__node--disabled":"")},n.expanded?u:null)]):x(Vt,{duration:e.duration,onShow:re,onHide:I},()=>mt(x("div",{class:"q-tree__node-collapsible"+w.value,key:`${c}__q`},[E,x("div",{class:"q-tree__children"+(n.disabled===!0?" q-tree__node--disabled":"")},u)]),[[gt,n.expanded]])):E])}function R(l){const c=m[l];c&&c.focus()}function W(l,c,n,s){s!==!0&&c.selectable!==!1&&R(c.key),_.value&&c.selectable?e.noSelectionUnset===!1?t("update:selected",c.key!==e.selected?c.key:null):c.key!==e.selected&&t("update:selected",c.key===void 0?null:c.key):N(l,c,n,s),typeof l.handler=="function"&&l.handler(l)}function N(l,c,n,s){n!==void 0&&de(n),s!==!0&&c.selectable!==!1&&R(c.key),z(c.key,!c.expanded,l,c)}function ue(l,c){if(l.indeterminate===!0&&(c=l.indeterminateNextState),l.strictTicking)A([l.key],c);else if(l.leafTicking){const n=[],s=u=>{u.isParent?(c!==!0&&u.noTick!==!0&&u.tickable===!0&&n.push(u.key),u.leafTicking===!0&&u.children.forEach(s)):u.noTick!==!0&&u.tickable===!0&&(u.leafFilteredTicking!==!0||u.matchesFilter===!0)&&n.push(u.key)};s(l),A(n,c)}}return e.defaultExpandAll===!0&&$(),Object.assign(i,{getNodeByKey:M,getTickedNodes:Q,getExpandedNodes:V,isExpanded:U,collapseAll:X,expandAll:$,setExpanded:z,isTicked:j,setTicked:A}),()=>{const l=K(e.nodes);return x("div",{class:b.value},l.length===0?e.filter?e.noResultsLabel||r.lang.tree.noResults:e.noNodesLabel||r.lang.tree.noNodes:l)}}}),en=te({name:"QBanner",props:{...qe,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:o}){const{proxy:{$q:t}}=G(),i=ke(e,t),r=y(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(i.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),d=y(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const a=[x("div",{class:"q-banner__avatar col-auto row items-center self-start"},ae(o.avatar)),x("div",{class:"q-banner__content col text-body2"},ae(o.default))],f=ae(o.action);return f!==void 0&&a.push(x("div",{class:d.value},f)),x("div",{class:r.value+(e.inlineActions===!1&&f!==void 0?" q-banner--top-padding":""),role:"alert"},a)}}});function Ze(){let e;const o=G();function t(){e=void 0}return bt(t),fe(t),{removeTick:t,registerTick(i){e=i,$e(()=>{e===i&&(xt(o)===!1&&e(),e=void 0)})}}}const Je={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function et(e,o=()=>{},t=()=>{}){return{transitionProps:y(()=>{const i=`q-transition--${e.transitionShow||o()}`,r=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${r}-leave-from`,leaveActiveClass:`${r}-leave-active`,leaveToClass:`${r}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const ce=[];function tn(e,o){do{if(e.$options.name==="QMenu"){if(e.hide(o),e.$props.separateClosePopup===!0)return Ce(e)}else if(e.__qPortal===!0){const t=Ce(e);return t!==void 0&&t.$options.name==="QPopupProxy"?(e.hide(o),t):e}e=Ce(e)}while(e!=null)}function nn(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function tt(e,o,t,i){const r=F(!1),d=F(!1);let a=null;const f={},v=i==="dialog"&&nn(e);function m(_){if(_===!0){Oe(f),d.value=!0;return}d.value=!1,r.value===!1&&(v===!1&&a===null&&(a=qt(!1,i)),r.value=!0,ce.push(e.proxy),Kt(f))}function b(_){if(d.value=!1,_!==!0)return;Oe(f),r.value=!1;const T=ce.indexOf(e.proxy);T!==-1&&ce.splice(T,1),a!==null&&(wt(a),a=null)}return yt(()=>{b(!0)}),e.proxy.__qPortal=!0,ge(e.proxy,"contentEl",()=>o.value),{showPortal:m,hidePortal:b,portalIsActive:r,portalIsAccessible:d,renderPortal:()=>v===!0?t():r.value===!0?[x(kt,{to:a},t())]:void 0}}const Z=[];let oe;function ln(e){oe=e.keyCode===27}function an(){oe===!0&&(oe=!1)}function on(e){oe===!0&&(oe=!1,Ne(e,27)===!0&&Z[Z.length-1](e))}function nt(e){window[e]("keydown",ln),window[e]("blur",an),window[e]("keyup",on),oe=!1}function lt(e){Fe.is.desktop===!0&&(Z.push(e),Z.length===1&&nt("addEventListener"))}function be(e){const o=Z.indexOf(e);o>-1&&(Z.splice(o,1),Z.length===0&&nt("removeEventListener"))}const J=[];function it(e){J[J.length-1](e)}function at(e){Fe.is.desktop===!0&&(J.push(e),J.length===1&&document.body.addEventListener("focusin",it))}function Be(e){const o=J.indexOf(e);o>-1&&(J.splice(o,1),J.length===0&&document.body.removeEventListener("focusin",it))}let he=0;const rn={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ve={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},un=te({name:"QDialog",inheritAttrs:!1,props:{...Ue,...Je,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Xe,"shake","click","escapeKey"],setup(e,{slots:o,emit:t,attrs:i}){const r=G(),d=F(null),a=F(!1),f=F(!1);let v=null,m=null,b,_;const T=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:h}=Lt(),{registerTimeout:w}=Ge(),{registerTick:C,removeTick:H}=Ze(),{transitionProps:P,transitionStyle:M}=et(e,()=>Ve[e.position][0],()=>Ve[e.position][1]),{showPortal:Q,hidePortal:V,portalIsAccessible:U,renderPortal:X}=tt(r,d,n,"dialog"),{hide:$}=Ye({showing:a,hideOnRouteChange:T,handleShow:D,handleHide:re,processOnMount:!0}),{addToHistory:z,removeFromHistory:L}=zt(a,$,T),j=y(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${rn[e.position]}`+(f.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),A=y(()=>a.value===!0&&e.seamless!==!0),q=y(()=>e.autoClose===!0?{onClick:ue}:{}),K=y(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${A.value===!0?"modal":"seamless"}`,i.class]);O(()=>e.maximized,s=>{a.value===!0&&N(s)}),O(A,s=>{h(s),s===!0?(at(c),lt(R)):(Be(c),be(R))});function D(s){z(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,N(e.maximized),Q(),f.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(I)):H(),w(()=>{if(r.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:u,bottom:k}=document.activeElement.getBoundingClientRect(),{innerHeight:E}=window,g=window.visualViewport!==void 0?window.visualViewport.height:E;u>0&&k>g/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-g,k>=E?1/0:Math.ceil(document.scrollingElement.scrollTop+k-g/2))),document.activeElement.scrollIntoView()}_=!0,d.value.click(),_=!1}Q(!0),f.value=!1,t("show",s)},e.transitionDuration)}function re(s){H(),L(),W(!0),f.value=!0,V(),m!==null&&(((s&&s.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),w(()=>{V(!0),f.value=!1,t("hide",s)},e.transitionDuration)}function I(s){je(()=>{let u=d.value;u===null||u.contains(document.activeElement)===!0||(u=(s!==""?u.querySelector(s):null)||u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function Y(s){s&&typeof s.focus=="function"?s.focus({preventScroll:!0}):I(),t("shake");const u=d.value;u!==null&&(u.classList.remove("q-animate--scale"),u.classList.add("q-animate--scale"),v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,d.value!==null&&(u.classList.remove("q-animate--scale"),I())},170))}function R(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&Y():(t("escapeKey"),$()))}function W(s){v!==null&&(clearTimeout(v),v=null),(s===!0||a.value===!0)&&(N(!1),e.seamless!==!0&&(h(!1),Be(c),be(R))),s!==!0&&(m=null)}function N(s){s===!0?b!==!0&&(he<1&&document.body.classList.add("q-body--dialog"),he++,b=!0):b===!0&&(he<2&&document.body.classList.remove("q-body--dialog"),he--,b=!1)}function ue(s){_!==!0&&($(s),t("click",s))}function l(s){e.persistent!==!0&&e.noBackdropDismiss!==!0?$(s):e.noShake!==!0&&Y()}function c(s){e.allowFocusOutside!==!0&&U.value===!0&&Qe(d.value,s.target)!==!0&&I('[tabindex]:not([tabindex="-1"])')}Object.assign(r.proxy,{focus:I,shake:Y,__updateRefocusTarget(s){m=s||null}}),fe(W);function n(){return x("div",{role:"dialog","aria-modal":A.value===!0?"true":"false",...i,class:K.value},[x(Ee,{name:"q-transition--fade",appear:!0},()=>A.value===!0?x("div",{class:"q-dialog__backdrop fixed-full",style:M.value,"aria-hidden":"true",tabindex:-1,onClick:l}):null),x(Ee,P.value,()=>a.value===!0?x("div",{ref:d,class:j.value,style:M.value,tabindex:-1,...q.value},ae(o.default)):null)])}return X}}),ot={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function rt({showing:e,avoidEmit:o,configureAnchorEl:t}){const{props:i,proxy:r,emit:d}=G(),a=F(null);let f=null;function v(h){return a.value===null?!1:h===void 0||h.touches===void 0||h.touches.length<=1}const m={};t===void 0&&(Object.assign(m,{hide(h){r.hide(h)},toggle(h){r.toggle(h),h.qAnchorHandled=!0},toggleKey(h){Ne(h,13)===!0&&m.toggle(h)},contextClick(h){r.hide(h),He(h),$e(()=>{r.show(h),h.qAnchorHandled=!0})},prevent:He,mobileTouch(h){if(m.mobileCleanup(h),v(h)!==!0)return;r.hide(h),a.value.classList.add("non-selectable");const w=h.target;Me(m,"anchor",[[w,"touchmove","mobileCleanup","passive"],[w,"touchend","mobileCleanup","passive"],[w,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,r.show(h),h.qAnchorHandled=!0},300)},mobileCleanup(h){a.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&h!==void 0&&Dt()}}),t=function(h=i.contextMenu){if(i.noParentEvent===!0||a.value===null)return;let w;h===!0?r.$q.platform.is.mobile===!0?w=[[a.value,"touchstart","mobileTouch","passive"]]:w=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:w=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],Me(m,"anchor",w)});function b(){_t(m,"anchor")}function _(h){for(a.value=h;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;t()}function T(){if(i.target===!1||i.target===""||r.$el.parentNode===null)a.value=null;else if(i.target===!0)_(r.$el.parentNode);else{let h=i.target;if(typeof i.target=="string")try{h=document.querySelector(i.target)}catch{h=void 0}h!=null?(a.value=h.$el||h,t()):(a.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return O(()=>i.contextMenu,h=>{a.value!==null&&(b(),t(h))}),O(()=>i.target,()=>{a.value!==null&&b(),T()}),O(()=>i.noParentEvent,h=>{a.value!==null&&(h===!0?b():t())}),St(()=>{T(),o!==!0&&i.modelValue===!0&&a.value===null&&d("update:modelValue",!1)}),fe(()=>{f!==null&&clearTimeout(f),b()}),{anchorEl:a,canShow:v,anchorEvents:m}}function sn(e,o){const t=F(null);let i;function r(f,v){const m=`${v!==void 0?"add":"remove"}EventListener`,b=v!==void 0?v:i;f!==window&&f[m]("scroll",b,pe.passive),window[m]("scroll",b,pe.passive),i=v}function d(){t.value!==null&&(r(t.value),t.value=null)}const a=O(()=>e.noParentEvent,()=>{t.value!==null&&(d(),o())});return fe(a),{localScrollTarget:t,unconfigureScrollTarget:d,changeScrollEvent:r}}const{notPassiveCapture:xe}=pe,ee=[];function ye(e){const o=e.target;if(o===void 0||o.nodeType===8||o.classList.contains("no-pointer-events")===!0)return;let t=ce.length-1;for(;t>=0;){const i=ce[t].$;if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;t--}for(let i=ee.length-1;i>=0;i--){const r=ee[i];if((r.anchorEl.value===null||r.anchorEl.value.contains(o)===!1)&&(o===document.body||r.innerRef.value!==null&&r.innerRef.value.contains(o)===!1))e.qClickOutside=!0,r.onClickOutside(e);else return}}function cn(e){ee.push(e),ee.length===1&&(document.addEventListener("mousedown",ye,xe),document.addEventListener("touchstart",ye,xe))}function ze(e){const o=ee.findIndex(t=>t===e);o>-1&&(ee.splice(o,1),ee.length===0&&(document.removeEventListener("mousedown",ye,xe),document.removeEventListener("touchstart",ye,xe)))}let Le,De;function Ie(e){const o=e.split(" ");return o.length!==2?!1:["top","center","bottom"].includes(o[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(o[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function dn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Pe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Pe[`${e}#ltr`]=e,Pe[`${e}#rtl`]=e});function Re(e,o){const t=e.split(" ");return{vertical:t[0],horizontal:Pe[`${t[1]}#${o===!0?"rtl":"ltr"}`]}}function fn(e,o){let{top:t,left:i,right:r,bottom:d,width:a,height:f}=e.getBoundingClientRect();return o!==void 0&&(t-=o[1],i-=o[0],d+=o[1],r+=o[0],a+=o[0],f+=o[1]),{top:t,bottom:d,height:f,left:i,right:r,width:a,middle:i+(r-i)/2,center:t+(d-t)/2}}function vn(e,o,t){let{top:i,left:r}=e.getBoundingClientRect();return i+=o.top,r+=o.left,t!==void 0&&(i+=t[1],r+=t[0]),{top:i,bottom:i+1,height:1,left:r,right:r+1,width:1,middle:r,center:i}}function hn(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function We(e,o,t){return{top:e[t.anchorOrigin.vertical]-o[t.selfOrigin.vertical],left:e[t.anchorOrigin.horizontal]-o[t.selfOrigin.horizontal]}}function mn(e){if(Fe.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:v,offsetTop:m}=window.visualViewport;v!==Le&&(f.setProperty("--q-pe-left",v+"px"),Le=v),m!==De&&(f.setProperty("--q-pe-top",m+"px"),De=m)}const{scrollLeft:o,scrollTop:t}=e.el,i=e.absoluteOffset===void 0?fn(e.anchorEl,e.cover===!0?[0,0]:e.offset):vn(e.anchorEl,e.absoluteOffset,e.offset);let r={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(r.minWidth=i.width+"px",e.cover===!0&&(r.minHeight=i.height+"px")),Object.assign(e.el.style,r);const d=hn(e.el);let a=We(i,d,e);if(e.absoluteOffset===void 0||e.offset===void 0)Te(a,i,d,e.anchorOrigin,e.selfOrigin);else{const{top:f,left:v}=a;Te(a,i,d,e.anchorOrigin,e.selfOrigin);let m=!1;if(a.top!==f){m=!0;const b=2*e.offset[1];i.center=i.top-=b,i.bottom-=b+2}if(a.left!==v){m=!0;const b=2*e.offset[0];i.middle=i.left-=b,i.right-=b+2}m===!0&&(a=We(i,d,e),Te(a,i,d,e.anchorOrigin,e.selfOrigin))}r={top:a.top+"px",left:a.left+"px"},a.maxHeight!==void 0&&(r.maxHeight=a.maxHeight+"px",i.height>a.maxHeight&&(r.minHeight=r.maxHeight)),a.maxWidth!==void 0&&(r.maxWidth=a.maxWidth+"px",i.width>a.maxWidth&&(r.minWidth=r.maxWidth)),Object.assign(e.el.style,r),e.el.scrollTop!==t&&(e.el.scrollTop=t),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function Te(e,o,t,i,r){const d=t.bottom,a=t.right,f=It(),v=window.innerHeight-f,m=document.body.clientWidth;if(e.top<0||e.top+d>v)if(r.vertical==="center")e.top=o[i.vertical]>v/2?Math.max(0,v-d):0,e.maxHeight=Math.min(d,v);else if(o[i.vertical]>v/2){const b=Math.min(v,i.vertical==="center"?o.center:i.vertical===r.vertical?o.bottom:o.top);e.maxHeight=Math.min(d,b),e.top=Math.max(0,b-d)}else e.top=Math.max(0,i.vertical==="center"?o.center:i.vertical===r.vertical?o.top:o.bottom),e.maxHeight=Math.min(d,v-e.top);if(e.left<0||e.left+a>m)if(e.maxWidth=Math.min(a,m),r.horizontal==="middle")e.left=o[i.horizontal]>m/2?Math.max(0,m-a):0;else if(o[i.horizontal]>m/2){const b=Math.min(m,i.horizontal==="middle"?o.middle:i.horizontal===r.horizontal?o.right:o.left);e.maxWidth=Math.min(a,b),e.left=Math.max(0,b-e.maxWidth)}else e.left=Math.max(0,i.horizontal==="middle"?o.middle:i.horizontal===r.horizontal?o.left:o.right),e.maxWidth=Math.min(a,m-e.left)}const gn=te({name:"QMenu",inheritAttrs:!1,props:{...ot,...Ue,...qe,...Je,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ie},self:{type:String,validator:Ie},offset:{type:Array,validator:dn},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Xe,"click","escapeKey"],setup(e,{slots:o,emit:t,attrs:i}){let r=null,d,a,f;const v=G(),{proxy:m}=v,{$q:b}=m,_=F(null),T=F(!1),h=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),w=ke(e,b),{registerTick:C,removeTick:H}=Ze(),{registerTimeout:P}=Ge(),{transitionProps:M,transitionStyle:Q}=et(e),{localScrollTarget:V,changeScrollEvent:U,unconfigureScrollTarget:X}=sn(e,c),{anchorEl:$,canShow:z}=rt({showing:T}),{hide:L}=Ye({showing:T,canShow:z,handleShow:N,handleHide:ue,hideOnRouteChange:h,processOnMount:!0}),{showPortal:j,hidePortal:A,renderPortal:q}=tt(v,_,E,"menu"),K={anchorEl:$,innerRef:_,onClickOutside(g){if(e.persistent!==!0&&T.value===!0)return L(g),(g.type==="touchstart"||g.target.classList.contains("q-dialog__backdrop"))&&de(g),!0}},D=y(()=>Re(e.anchor||(e.cover===!0?"center middle":"bottom start"),b.lang.rtl)),re=y(()=>e.cover===!0?D.value:Re(e.self||"top start",b.lang.rtl)),I=y(()=>(e.square===!0?" q-menu--square":"")+(w.value===!0?" q-menu--dark q-dark":"")),Y=y(()=>e.autoClose===!0?{onClick:n}:{}),R=y(()=>T.value===!0&&e.persistent!==!0);O(R,g=>{g===!0?(lt(u),cn(K)):(be(u),ze(K))});function W(){je(()=>{let g=_.value;g&&g.contains(document.activeElement)!==!0&&(g=g.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||g.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||g.querySelector("[autofocus], [data-autofocus]")||g,g.focus({preventScroll:!0}))})}function N(g){if(r=e.noRefocus===!1?document.activeElement:null,at(s),j(),c(),d=void 0,g!==void 0&&(e.touchPosition||e.contextMenu)){const p=Ct(g);if(p.left!==void 0){const{top:we,left:ne}=$.value.getBoundingClientRect();d={left:p.left-ne,top:p.top-we}}}a===void 0&&(a=O(()=>b.screen.width+"|"+b.screen.height+"|"+e.self+"|"+e.anchor+"|"+b.lang.rtl,k)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{k(),e.noFocus!==!0&&W()}),P(()=>{b.platform.is.ios===!0&&(f=e.autoClose,_.value.click()),k(),j(!0),t("show",g)},e.transitionDuration)}function ue(g){H(),A(),l(!0),r!==null&&(g===void 0||g.qClickOutside!==!0)&&(((g&&g.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),P(()=>{A(!0),t("hide",g)},e.transitionDuration)}function l(g){d=void 0,a!==void 0&&(a(),a=void 0),(g===!0||T.value===!0)&&(Be(s),X(),ze(K),be(u)),g!==!0&&(r=null)}function c(){($.value!==null||e.scrollTarget!==void 0)&&(V.value=Rt($.value,e.scrollTarget),U(V.value,k))}function n(g){f!==!0?(tn(m,g),t("click",g)):f=!1}function s(g){R.value===!0&&e.noFocus!==!0&&Qe(_.value,g.target)!==!0&&W()}function u(g){t("escapeKey"),L(g)}function k(){const g=_.value;g===null||$.value===null||mn({el:g,offset:e.offset,anchorEl:$.value,anchorOrigin:D.value,selfOrigin:re.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function E(){return x(Ee,M.value,()=>T.value===!0?x("div",{role:"menu",...i,ref:_,tabindex:-1,class:["q-menu q-position-engine scroll"+I.value,i.class],style:[i.style,Q.value],...Y.value},ae(o.default)):null)}return fe(l),Object.assign(m,{focus:W,updatePosition:k}),q}}),bn=te({name:"QPopupProxy",props:{...ot,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:o,emit:t,attrs:i}){const{proxy:r}=G(),{$q:d}=r,a=F(!1),f=F(null),v=y(()=>parseInt(e.breakpoint,10)),{canShow:m}=rt({showing:a});function b(){return d.screen.width<v.value||d.screen.height<v.value?"dialog":"menu"}const _=F(b()),T=y(()=>_.value==="menu"?{maxHeight:"99vh"}:{});O(()=>b(),C=>{a.value!==!0&&(_.value=C)});function h(C){a.value=!0,t("show",C)}function w(C){a.value=!1,_.value=b(),t("hide",C)}return Object.assign(r,{show(C){m(C)===!0&&f.value.show(C)},hide(C){f.value.hide(C)},toggle(C){f.value.toggle(C)}}),ge(r,"currentComponent",()=>({type:_.value,ref:f.value})),()=>{const C={ref:f,...T.value,...i,onShow:h,onHide:w};let H;return _.value==="dialog"?H=un:(H=gn,Object.assign(C,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),x(H,C,o.default)}}}),xn=te({name:"QField",inheritAttrs:!1,props:At,emits:Ht,setup(){return Mt(Ot())}}),yn={class:"self-center full-width no-outline ellipsis",tabindex:"0"},En={__name:"GoalSelect",props:{modelValue:{type:Number,default:null},exceptId:{type:Number,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const t=e,i=y({get(){return t.modelValue},set(f){o("update:modelValue",f)}}),r=Wt(),d=y(()=>t.modelValue?r.getItem(t.modelValue).name:null);function a(f){return f.id!==t.exceptId}return(f,v)=>(Tt(),Et(xn,{modelValue:i.value,"onUpdate:modelValue":v[1]||(v[1]=m=>i.value=m),clearable:"","clear-icon":"close"},{control:se(()=>[pt("div",yn,Bt(d.value),1)]),append:se(()=>[ve(me,{name:"keyboard_arrow_down"})]),default:se(()=>[ve(bn,{fit:"","auto-close":""},{default:se(()=>[ve(en,null,{default:se(()=>[ve(Jt,{selected:i.value,"onUpdate:selected":v[0]||(v[0]=m=>i.value=m),nodes:Pt(r).tree,filter:String(e.exceptId),"filter-method":a,"node-key":"id","label-key":"name",icon:"keyboard_arrow_right","no-selection-unset":"","default-expand-all":""},null,8,["selected","nodes","filter"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};export{En as _,Gt as a,Ut as b,jt as u};

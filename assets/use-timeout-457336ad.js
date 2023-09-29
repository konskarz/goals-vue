import{cc as V,cd as b,ce as X,a as x,cf as T,p as d,l as s,z as Y,cg as A,g as M,B as O,c6 as R}from"./index-77aa797c.js";const F=[null,document,document.body,document.scrollingElement,document.documentElement];function k(e,o){let t=V(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return F.includes(t)?window:t}function q(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function C(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function W(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=q(e);if(t<=0){i!==o&&g(e,o);return}requestAnimationFrame(r=>{const l=r-n,a=i+(o-i)/Math.max(l,t)*l;g(e,a),a!==o&&W(e,o,t-l,r)})}function z(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=C(e);if(t<=0){i!==o&&y(e,o);return}requestAnimationFrame(r=>{const l=r-n,a=i+(o-i)/Math.max(l,t)*l;y(e,a),a!==o&&z(e,o,t-l,r)})}function g(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function y(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function I(e,o,t){if(t){W(e,o,t);return}g(e,o)}function U(e,o,t){if(t){z(e,o,t);return}y(e,o)}let w;function K(){if(w!==void 0)return w;const e=document.createElement("p"),o=document.createElement("div");b(e,{width:"100%",height:"200px"}),b(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=o.clientWidth),o.remove(),w=t-n,w}function B(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function j(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),X.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function G(e,o,t){let n;function i(){n!==void 0&&(T.remove(n),n=void 0)}return x(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){n={condition:()=>t.value===!0,handler:o},T.add(n)}}}let u=0,p,v,f,h=!1,L,S,E,c=null;function D(e){N(e)&&Y(e)}function N(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=A(e),t=e.shiftKey&&!e.deltaX,n=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=t||n?e.deltaY:e.deltaX;for(let r=0;r<o.length;r++){const l=o[r];if(B(l,n))return n?i<0&&l.scrollTop===0?!0:i>0&&l.scrollTop+l.clientHeight===l.scrollHeight:i<0&&l.scrollLeft===0?!0:i>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function P(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function m(e){h!==!0&&(h=!0,requestAnimationFrame(()=>{h=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:n}=document.scrollingElement;(f===void 0||o!==window.innerHeight)&&(f=t-o,document.scrollingElement.scrollTop=n),n>f&&(document.scrollingElement.scrollTop-=Math.ceil((n-f)/8))}))}function H(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:i}=window.getComputedStyle(o);p=C(window),v=q(window),L=o.style.left,S=o.style.top,E=window.location.href,o.style.left=`-${p}px`,o.style.top=`-${v}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,d.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",m,s.passiveCapture),window.visualViewport.addEventListener("scroll",m,s.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",P,s.passiveCapture))}d.is.desktop===!0&&d.is.mac===!0&&window[`${e}EventListener`]("wheel",D,s.notPassive),e==="remove"&&(d.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",m,s.passiveCapture),window.visualViewport.removeEventListener("scroll",m,s.passiveCapture)):window.removeEventListener("scroll",P,s.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=L,o.style.top=S,window.location.href===E&&window.scrollTo(p,v),f=void 0)}function _(e){let o="add";if(e===!0){if(u++,c!==null){clearTimeout(c),c=null;return}if(u>1)return}else{if(u===0||(u--,u>0))return;if(o="remove",d.is.ios===!0&&d.is.nativeMobile===!0){c!==null&&clearTimeout(c),c=setTimeout(()=>{H(o),c=null},100);return}}H(o)}function J(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,_(o))}}}function Q(){let e=null;const o=M();function t(){e!==null&&(clearTimeout(e),e=null)}return O(t),x(t),{removeTimeout:t,registerTimeout(n,i){t(),R(o)===!1&&(e=setTimeout(n,i))}}}export{q as a,C as b,j as c,I as d,G as e,J as f,k as g,K as h,U as s,Q as u};

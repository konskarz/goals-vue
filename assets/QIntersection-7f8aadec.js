import{s as m,ax as y,c as q,r as S,i as f,d,h as v,ay as _,R as I,S as D}from"./index-c0954342.js";const b={threshold:0,root:null,rootMargin:"0px"};function g(e,n,i){let t,r,o;typeof i=="function"?(t=i,r=b,o=n.cfg===void 0):(t=i.handler,r=Object.assign({},b,i.cfg),o=n.cfg===void 0||y(n.cfg,r)===!1),n.handler!==t&&(n.handler=t),o===!0&&(n.cfg=r,n.observer!==void 0&&n.observer.unobserve(e),n.observer=new IntersectionObserver(([s])=>{if(typeof n.handler=="function"){if(s.rootBounds===null&&document.body.contains(e)===!0){n.observer.unobserve(e),n.observer.observe(e);return}(n.handler(s,n.observer)===!1||n.once===!0&&s.isIntersecting===!0)&&h(e)}},r),n.observer.observe(e))}function h(e){const n=e.__qvisible;n!==void 0&&(n.observer!==void 0&&n.observer.unobserve(e),delete e.__qvisible)}const P=m({name:"intersection",mounted(e,{modifiers:n,value:i}){const t={once:n.once===!0};g(e,t,i),e.__qvisible=t},updated(e,n){const i=e.__qvisible;i!==void 0&&g(e,i,n.value)},beforeUnmount:h}),C=q({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(e,{slots:n,emit:i}){const t=S(f.value===!0?e.ssrPrerender:!1),r=d(()=>e.root!==void 0||e.margin!==void 0||e.threshold!==void 0?{handler:c,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:c),o=d(()=>e.disable!==!0&&(f.value!==!0||e.once!==!0||e.ssrPrerender!==!0)),s=d(()=>[[P,r.value,void 0,{once:e.once}]]),u=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`);function c(a){t.value!==a.isIntersecting&&(t.value=a.isIntersecting,e.onVisibility!==void 0&&i("visibility",t.value))}function l(){if(t.value===!0)return[v("div",{key:"content",style:u.value},D(n.default))];if(n.hidden!==void 0)return[v("div",{key:"hidden",style:u.value},n.hidden())]}return()=>{const a=e.transition?[v(_,{name:"q-transition--"+e.transition},l)]:l();return I(e.tag,{class:"q-intersection"},a,"main",o.value,()=>s.value)}}});export{C as Q};

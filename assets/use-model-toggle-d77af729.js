import{g as T,w as M,ay as U,o as x,b as g}from"./index-d21feb98.js";const A={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},P=["beforeShow","show","beforeHide","hide"];function j({showing:l,canShow:s,hideOnRouteChange:i,handleShow:d,handleHide:f,processOnMount:y}){const n=T(),{props:o,emit:u,proxy:c}=n;let a;function H(e){l.value===!0?r(e):p(e)}function p(e){if(o.disable===!0||e!==void 0&&e.qAnchorHandled===!0||s!==void 0&&s(e)!==!0)return;const t=o["onUpdate:modelValue"]!==void 0;t===!0&&(u("update:modelValue",!0),a=e,g(()=>{a===e&&(a=void 0)})),(o.modelValue===null||t===!1)&&m(e)}function m(e){l.value!==!0&&(l.value=!0,u("beforeShow",e),d!==void 0?d(e):u("show",e))}function r(e){if(o.disable===!0)return;const t=o["onUpdate:modelValue"]!==void 0;t===!0&&(u("update:modelValue",!1),a=e,g(()=>{a===e&&(a=void 0)})),(o.modelValue===null||t===!1)&&V(e)}function V(e){l.value!==!1&&(l.value=!1,u("beforeHide",e),f!==void 0?f(e):u("hide",e))}function b(e){o.disable===!0&&e===!0?o["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):e===!0!==l.value&&(e===!0?m:V)(a)}M(()=>o.modelValue,b),i!==void 0&&U(n)===!0&&M(()=>c.$route.fullPath,()=>{i.value===!0&&l.value===!0&&r()}),y===!0&&x(()=>{b(o.modelValue)});const v={show:p,hide:r,toggle:H};return Object.assign(c,v),v}export{P as a,j as b,A as u};

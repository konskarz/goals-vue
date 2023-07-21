import{i as we,g as W,w as L,o as ne,j as le,ct as be,r as N,a as M,b$ as Se,cb as pe,aT as Me,b_ as ae,aO as Q,aU as ye,aR as ke,n as Re,h as S,bX as X,Q as se,cn as qe,b as J,T as Ve,cm as Fe,bS as Ae,c as xe,s as de,m as _e,cg as Ee}from"./index-7e23eb14.js";import{u as Be,a as Oe}from"./QToolbar-42614659.js";import{a as ie,u as Te,c as $e}from"./uid-11c26a05.js";import{u as Pe,b as Ie}from"./use-form-05eaf2b9.js";function je({validate:e,resetValidation:t,requiresQForm:u}){const i=we(be,!1);if(i!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),L(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),ne(()=>{f.disable!==!0&&i.bindComponent(d)}),le(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const fe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ve=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,G=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,oe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>fe.test(e),hexaColor:e=>ce.test(e),hexOrHexaColor:e=>ve.test(e),rgbColor:e=>G.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>G.test(e)||ee.test(e),hexOrRgbColor:e=>fe.test(e)||G.test(e),hexaOrRgbaColor:e=>ce.test(e)||ee.test(e),anyColor:e=>ve.test(e)||G.test(e)||ee.test(e)},De=[!0,!1,"ondemand"],ze={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>De.includes(e)}};function Ne(e,t){const{props:u,proxy:i}=W(),f=N(!1),d=N(null),c=N(null);je({validate:F,resetValidation:v});let y=0,O;const R=M(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),k=M(()=>u.disable!==!0&&R.value===!0),m=M(()=>u.error===!0||f.value===!0),Z=M(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);L(()=>u.modelValue,()=>{D()}),L(()=>u.reactiveRules,j=>{j===!0?O===void 0&&(O=L(()=>u.rules,()=>{D(!0)})):O!==void 0&&(O(),O=void 0)},{immediate:!0}),L(e,j=>{j===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,k.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function v(){y++,t.value=!1,c.value=null,f.value=!1,d.value=null,I.cancel()}function F(j=u.modelValue){if(k.value!==!0)return!0;const B=++y,V=t.value!==!0?()=>{c.value=!0}:()=>{},A=(C,x)=>{C===!0&&V(),f.value=C,d.value=x||null,t.value=!1},_=[];for(let C=0;C<u.rules.length;C++){const x=u.rules[C];let P;if(typeof x=="function"?P=x(j,oe):typeof x=="string"&&oe[x]!==void 0&&(P=oe[x](j)),P===!1||typeof P=="string")return A(!0,P),!1;P!==!0&&P!==void 0&&_.push(P)}return _.length===0?(A(!1),!0):(t.value=!0,Promise.all(_).then(C=>{if(C===void 0||Array.isArray(C)===!1||C.length===0)return B===y&&A(!1),!0;const x=C.find(P=>P===!1||typeof P=="string");return B===y&&A(x!==void 0,x),x===void 0},C=>(B===y&&(console.error(C),A(!0)),!1)))}function D(j){k.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&j!==!0)&&I()}const I=Se(F,0);return le(()=>{O!==void 0&&O(),I.cancel()}),Object.assign(i,{resetValidation:v,validate:F}),pe(i,"hasError",()=>m.value),{isDirtyModel:c,hasRules:R,hasError:m,errorMessage:Z,validate:F,resetValidation:v}}const me=/^on[A-Z]/;function Le(e,t){const u={listeners:N({}),attributes:N({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&me.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)me.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Me(i),i(),u}function re(e){return e===void 0?`f_${Te()}`:e}function ue(e){return e!=null&&(""+e).length!==0}const Ue={...Be,...ze,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ze=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ke(){const{props:e,attrs:t,proxy:u,vnode:i}=W();return{isDark:Oe(e,u.$q),editable:M(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:N(!1),focused:N(!1),hasPopupOpen:!1,splitAttrs:Le(t,i),targetUid:N(re(e.for)),rootRef:N(null),targetRef:N(null),controlRef:N(null)}}function He(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=W(),{$q:c}=d;let y=null;e.hasValue===void 0&&(e.hasValue=M(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:o,focus:x}),e.computedCounter===void 0&&(e.computedCounter=M(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,p=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(p!==void 0?" / "+p:"")}}));const{isDirtyModel:O,hasRules:R,hasError:k,errorMessage:m,resetValidation:Z}=Ne(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?M(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):M(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),F=M(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),D=M(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=M(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(B.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(k.value===!0?" q-field--error":"")+(k.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&F.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),j=M(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(k.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),B=M(()=>t.labelSlot===!0||t.label!==void 0),V=M(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&k.value!==!0?` text-${t.labelColor}`:"")),A=M(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),_=M(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});L(()=>t.for,n=>{e.targetUid.value=re(n)});function C(){const n=document.activeElement;let p=e.targetRef!==void 0&&e.targetRef.value;p&&(n===null||n.id!==e.targetUid.value)&&(p.hasAttribute("tabindex")===!0||(p=p.querySelector("[tabindex]")),p&&p!==n&&p.focus({preventScroll:!0}))}function x(){ie(C)}function P(){$e(C);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function r(n){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function o(n,p){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),p!==void 0&&p())})}function s(n){ae(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Q(()=>{Z(),c.platform.is.mobile!==!0&&(O.value=!1)})}function a(){const n=[];return i.prepend!==void 0&&n.push(S("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),n.push(S("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),k.value===!0&&t.noErrorIcon===!1&&n.push(q("error",[S(se,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(q("inner-loading-append",i.loading!==void 0?i.loading():[S(qe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(q("inner-clearable-append",[S(se,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(S("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&n.push(q("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function h(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(S("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(S("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(A.value))),B.value===!0&&n.push(S("div",{class:V.value},J(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(S("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(J(i.default))}function g(){let n,p;k.value===!0?m.value!==null?(n=[S("div",{role:"alert"},m.value)],p=`q--slot-error-${m.value}`):(n=J(i.error),p="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[S("div",t.hint)],p=`q--slot-hint-${t.hint}`):(n=J(i.hint),p="q--slot-hint"));const K=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&n===void 0)return;const w=S("div",{key:p,class:"q-field__messages col"},n);return S("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?w:S(Ve,{name:"q-transition--field-message"},()=>w),K===!0?S("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function q(n,p){return p===null?null:S("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},p)}let b=!1;return ye(()=>{b=!0}),ke(()=>{b===!0&&t.autofocus===!0&&d.focus()}),ne(()=>{Re.value===!0&&t.for===void 0&&(e.targetUid.value=re()),t.autofocus===!0&&d.focus()}),le(()=>{y!==null&&clearTimeout(y)}),Object.assign(d,{focus:x,blur:P}),function(){const p=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,..._.value}:_.value;return S("label",{ref:e.rootRef,class:[I.value,f.class],style:f.style,...p},[i.before!==void 0?S("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,S("div",{class:"q-field__inner relative-position col self-stretch"},[S("div",{ref:e.controlRef,class:j.value,tabindex:-1,...e.controlEvents},a()),F.value===!0?g():null]),i.after!==void 0?S("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const ge={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ce=Object.keys(te);Ce.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Qe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ce.join("")+"])|(.)","g"),he=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),Ye={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function We(e,t,u,i){let f,d,c,y,O,R;const k=N(null),m=N(v());function Z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,D),L(()=>e.mask,r=>{if(r!==void 0)I(m.value,!0);else{const o=x(m.value);D(),e.modelValue!==o&&t("update:modelValue",o)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{k.value===!0&&I(m.value,!0)}),L(()=>e.unmaskedValue,()=>{k.value===!0&&I(m.value)});function v(){if(D(),k.value===!0){const r=_(x(e.modelValue));return e.fillMask!==!1?P(r):r}return e.modelValue}function F(r){if(r<f.length)return f.slice(-r);let o="",s=f;const a=s.indexOf(T);if(a>-1){for(let h=r-s.length;h>0;h--)o+=T;s=s.slice(0,a)+o+s.slice(a)}return s}function D(){if(k.value=e.mask!==void 0&&e.mask.length!==0&&Z(),k.value===!1){y=void 0,f="",d="";return}const r=ge[e.mask]===void 0?e.mask:ge[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=o.replace(he,"\\$&"),a=[],h=[],g=[];let q=e.reverseFillMask===!0,b="",n="";r.replace(Qe,($,l,E,H,U)=>{if(H!==void 0){const z=te[H];g.push(z),n=z.negate,q===!0&&(h.push("(?:"+n+"+)?("+z.pattern+"+)?(?:"+n+"+)?("+z.pattern+"+)?"),q=!1),h.push("(?:"+n+"+)?("+z.pattern+")?")}else if(E!==void 0)b="\\"+(E==="\\"?"":E),g.push(E),a.push("([^"+b+"]+)?"+b+"?");else{const z=l!==void 0?l:U;b=z==="\\"?"\\\\\\\\":z.replace(he,"\\\\$&"),g.push(z),a.push("([^"+b+"]+)?"+b+"?")}});const p=new RegExp("^"+a.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),K=h.length-1,w=h.map(($,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+$):l===K?new RegExp("^"+$+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+$));c=g,y=$=>{const l=p.exec(e.reverseFillMask===!0?$:$.slice(0,g.length+1));l!==null&&($=l.slice(1).join(""));const E=[],H=w.length;for(let U=0,z=$;U<H;U++){const Y=w[U].exec(z);if(Y===null)break;z=z.slice(Y.shift().length),E.push(...Y)}return E.length!==0?E.join(""):$},f=g.map($=>typeof $=="string"?$:T).join(""),d=f.split(T).join(o)}function I(r,o,s){const a=i.value,h=a.selectionEnd,g=a.value.length-h,q=x(r);o===!0&&D();const b=_(q),n=e.fillMask!==!1?P(b):b,p=m.value!==n;a.value!==n&&(a.value=n),p===!0&&(m.value=n),document.activeElement===a&&Q(()=>{if(n===d){const w=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(w,w,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const w=a.selectionEnd;let $=h-1;for(let l=O;l<=$&&l<w;l++)f[l]!==T&&$++;B.right(a,$);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const w=e.reverseFillMask===!0?h===0?n.length>b.length?1:0:Math.max(0,n.length-(n===d?0:Math.min(b.length,g)+1))+1:h;a.setSelectionRange(w,w,"forward");return}if(e.reverseFillMask===!0)if(p===!0){const w=Math.max(0,n.length-(n===d?0:Math.min(b.length,g+1)));w===1&&h===1?a.setSelectionRange(w,w,"forward"):B.rightReverse(a,w)}else{const w=n.length-g;a.setSelectionRange(w,w,"backward")}else if(p===!0){const w=Math.max(0,f.indexOf(T),Math.min(b.length,h)-1);B.right(a,w)}else{const w=h-1;B.right(a,w)}});const K=e.unmaskedValue===!0?x(n):n;String(e.modelValue)!==K&&u(K,!0)}function j(r,o,s){const a=_(x(r.value));o=Math.max(0,f.indexOf(T),Math.min(a.length,o)),O=o,r.setSelectionRange(o,s,"forward")}const B={left(r,o){const s=f.slice(o-1).indexOf(T)===-1;let a=Math.max(0,o-1);for(;a>=0;a--)if(f[a]===T){o=a,s===!0&&o++;break}if(a<0&&f[o]!==void 0&&f[o]!==T)return B.right(r,0);o>=0&&r.setSelectionRange(o,o,"backward")},right(r,o){const s=r.value.length;let a=Math.min(s,o+1);for(;a<=s;a++)if(f[a]===T){o=a;break}else f[a-1]===T&&(o=a);if(a>s&&f[o-1]!==void 0&&f[o-1]!==T)return B.left(r,s);r.setSelectionRange(o,o,"forward")},leftReverse(r,o){const s=F(r.value.length);let a=Math.max(0,o-1);for(;a>=0;a--)if(s[a-1]===T){o=a;break}else if(s[a]===T&&(o=a,a===0))break;if(a<0&&s[o]!==void 0&&s[o]!==T)return B.rightReverse(r,0);o>=0&&r.setSelectionRange(o,o,"backward")},rightReverse(r,o){const s=r.value.length,a=F(s),h=a.slice(0,o+1).indexOf(T)===-1;let g=Math.min(s,o+1);for(;g<=s;g++)if(a[g-1]===T){o=g,o>0&&h===!0&&o--;break}if(g>s&&a[o-1]!==void 0&&a[o-1]!==T)return B.leftReverse(r,s);r.setSelectionRange(o,o,"forward")}};function V(r){t("click",r),R=void 0}function A(r){if(t("keydown",r),Fe(r)===!0)return;const o=i.value,s=o.selectionStart,a=o.selectionEnd;if(r.shiftKey||(R=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&R===void 0&&(R=o.selectionDirection==="forward"?s:a);const h=B[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),h(o,R===s?a:s),r.shiftKey){const g=o.selectionStart;o.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===a?(B.left(o,s),o.setSelectionRange(o.selectionStart,a,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===a&&(B.rightReverse(o,a),o.setSelectionRange(s,o.selectionEnd,"forward"))}function _(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return C(r);const o=c;let s=0,a="";for(let h=0;h<o.length;h++){const g=r[s],q=o[h];if(typeof q=="string")a+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))a+=q.transform!==void 0?q.transform(g):g,s++;else return a}return a}function C(r){const o=c,s=f.indexOf(T);let a=r.length-1,h="";for(let g=o.length-1;g>=0&&a>-1;g--){const q=o[g];let b=r[a];if(typeof q=="string")h=q+h,b===q&&a--;else if(b!==void 0&&q.regex.test(b))do h=(q.transform!==void 0?q.transform(b):b)+h,a--,b=r[a];while(s===g&&b!==void 0&&q.regex.test(b));else return h}return h}function x(r){return typeof r!="string"||y===void 0?typeof r=="number"?y(""+r):r:y(r)}function P(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:m,hasMask:k,moveCursorForPaste:j,updateMaskValue:I,onMaskedKeydown:A,onMaskedClick:V}}function Xe(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?M(()=>{if(e.type==="file")return u()}):M(u)}const Je=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ge=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,et=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,tt=/[a-z0-9_ -]$/i;function nt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ae.is.firefox===!0?tt.test(u.data)===!1:Je.test(u.data)===!0||Ge.test(u.data)===!0||et.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}const ut=xe({name:"QInput",inheritAttrs:!1,props:{...Ue,...Ye,...Pe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ze,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=W(),{$q:f}=i,d={};let c=NaN,y,O,R=null,k;const m=N(null),Z=Ie(e),{innerValue:v,hasMask:F,moveCursorForPaste:D,updateMaskValue:I,onMaskedKeydown:j,onMaskedClick:B}=We(e,t,b,m),V=Xe(e,!0),A=M(()=>ue(v.value)),_=nt(g),C=Ke(),x=M(()=>e.type==="textarea"||e.autogrow===!0),P=M(()=>x.value===!0||["text","search","url","tel","password"].includes(e.type)),r=M(()=>{const l={...C.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:p,onBlur:K,onFocus:de};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=_,F.value===!0&&(l.onKeydown=j,l.onClick=B),e.autogrow===!0&&(l.onAnimationend=q),l}),o=M(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Z.value,...C.splitAttrs.attributes.value,id:C.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return x.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});L(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),L(()=>e.modelValue,l=>{if(F.value===!0){if(O===!0&&(O=!1,String(l)===c))return;I(l)}else v.value!==l&&(v.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete d.value));e.autogrow===!0&&Q(n)}),L(()=>e.autogrow,l=>{l===!0?Q(n):m.value!==null&&u.rows>0&&(m.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&Q(n)});function s(){ie(()=>{const l=document.activeElement;m.value!==null&&m.value!==l&&(l===null||l.id!==C.targetUid.value)&&m.value.focus({preventScroll:!0})})}function a(){m.value!==null&&m.value.select()}function h(l){if(F.value===!0&&e.reverseFillMask!==!0){const E=l.target;D(E,E.selectionStart,E.selectionEnd)}t("paste",l)}function g(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const E=l.target.value;if(l.target.qComposing===!0){d.value=E;return}if(F.value===!0)I(E,!1,l.inputType);else if(b(E),P.value===!0&&l.target===document.activeElement){const{selectionStart:H,selectionEnd:U}=l.target;H!==void 0&&U!==void 0&&Q(()=>{l.target===document.activeElement&&E.indexOf(l.target.value)===0&&l.target.setSelectionRange(H,U)})}e.autogrow===!0&&n()}function q(l){t("animationend",l),n()}function b(l,E){k=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&c!==l&&(c=l,E===!0&&(O=!0),t("update:modelValue",l),Q(()=>{c===l&&(c=NaN)})),k=void 0},e.type==="number"&&(y=!0,d.value=l),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=l,R=setTimeout(k,e.debounce)):k()}function n(){requestAnimationFrame(()=>{const l=m.value;if(l!==null){const E=l.parentNode.style,{scrollTop:H}=l,{overflowY:U,maxHeight:z}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),Y=U!==void 0&&U!=="scroll";Y===!0&&(l.style.overflowY="hidden"),E.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",Y===!0&&(l.style.overflowY=parseInt(z,10)<l.scrollHeight?"auto":"hidden"),E.marginBottom="",l.scrollTop=H}})}function p(l){_(l),R!==null&&(clearTimeout(R),R=null),k!==void 0&&k(),t("change",l.target.value)}function K(l){l!==void 0&&de(l),R!==null&&(clearTimeout(R),R=null),k!==void 0&&k(),y=!1,O=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=v.value!==void 0?v.value:"")})}function w(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}le(()=>{K()}),ne(()=>{e.autogrow===!0&&n()}),Object.assign(C,{innerValue:v,fieldClass:M(()=>`q-${x.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:M(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:b,hasValue:A,floatingLabel:M(()=>A.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||ue(e.displayValue)),getControl:()=>S(x.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...r.value,...e.type!=="file"?{value:w()}:V.value}),getShadowControl:()=>S("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(x.value===!0?"":" text-no-wrap")},[S("span",{class:"invisible"},w()),S("span",e.shadowText)])});const $=He(C);return Object.assign(i,{focus:s,select:a,getNativeElement:()=>m.value}),pe(i,"nativeEl",()=>m.value),$}}),it=xe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const i=W(),f=N(null);let d=0;const c=[];function y(v){const F=typeof v=="boolean"?v:e.noErrorFocus!==!0,D=++d,I=(V,A)=>{u("validation"+(V===!0?"Success":"Error"),A)},j=V=>{const A=V.validate();return typeof A.then=="function"?A.then(_=>({valid:_,comp:V}),_=>({valid:!1,comp:V,err:_})):Promise.resolve({valid:A,comp:V})};return(e.greedy===!0?Promise.all(c.map(j)).then(V=>V.filter(A=>A.valid!==!0)):c.reduce((V,A)=>V.then(()=>j(A).then(_=>{if(_.valid===!1)return Promise.reject(_)})),Promise.resolve()).catch(V=>[V])).then(V=>{if(V===void 0||V.length===0)return D===d&&I(!0),!0;if(D===d){const{comp:A,err:_}=V[0];if(_!==void 0&&console.error(_),I(!1,A),F===!0){const C=V.find(({comp:x})=>typeof x.focus=="function"&&Ee(x.$)===!1);C!==void 0&&C.comp.focus()}}return!1})}function O(){d++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function R(v){v!==void 0&&ae(v);const F=d+1;y().then(D=>{F===d&&D===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function k(v){v!==void 0&&ae(v),u("reset"),Q(()=>{O(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){ie(()=>{if(f.value===null)return;const v=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),F=>F.tabIndex>-1);v!=null&&v.focus({preventScroll:!0})})}_e(be,{bindComponent(v){c.push(v)},unbindComponent(v){const F=c.indexOf(v);F>-1&&c.splice(F,1)}});let Z=!1;return ye(()=>{Z=!0}),ke(()=>{Z===!0&&e.autofocus===!0&&m()}),ne(()=>{e.autofocus===!0&&m()}),Object.assign(i.proxy,{validate:y,resetValidation:O,submit:R,reset:k,focus:m,getValidationComponents:()=>c}),()=>S("form",{class:"q-form",ref:f,onSubmit:R,onReset:k},J(t.default))}});export{ut as Q,it as a,Ze as b,He as c,Ke as d,Ue as u};

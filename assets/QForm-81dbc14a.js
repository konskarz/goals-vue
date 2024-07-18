import{g as Y,r as K,aw as Me,d as qe,aG as pe,w as L,o as oe,a as ae,j as M,A as Re,ak as ye,z as ue,b as Q,B as ke,C as xe,h as R,u as J,Z as de,ay as Fe,G as X,T as Ve,ax as Ae,p as Ee,c as Ce,v as fe,I as _e,ai as Be}from"./index-99cd7975.js";import{u as Oe}from"./use-id-68ea78dc.js";import{a as Pe,u as $e}from"./use-dark-9c0be348.js";import{u as Te,b as Ie}from"./private.use-form-ef27ac7c.js";const ce=/^on[A-Z]/;function je(){const{attrs:e,vnode:t}=Y(),u={listeners:K({}),attributes:K({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&ce.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)ce.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Me(i),i(),u}function De({validate:e,resetValidation:t,requiresQForm:u}){const i=qe(pe,!1);if(i!==!1){const{props:f,proxy:d}=Y();Object.assign(d,{validate:e,resetValidation:t}),L(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ve=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,me=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,re={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ve.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>me.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>ve.test(e)||te.test(e),hexaOrRgbaColor:e=>ge.test(e)||ne.test(e),anyColor:e=>me.test(e)||te.test(e)||ne.test(e)},ze=[!0,!1,"ondemand"],Ne={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>ze.includes(e)}};function Ke(e,t){const{props:u,proxy:i}=Y(),f=K(!1),d=K(null),c=K(!1);De({validate:I,resetValidation:A});let k=0,P;const q=M(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),x=M(()=>u.disable!==!0&&q.value===!0&&t.value===!1),g=M(()=>u.error===!0||f.value===!0),U=M(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);L(()=>u.modelValue,()=>{c.value=!0,x.value===!0&&u.lazyRules===!1&&j()});function v(){u.lazyRules!=="ondemand"&&x.value===!0&&c.value===!0&&j()}L(()=>u.reactiveRules,z=>{z===!0?P===void 0&&(P=L(()=>u.rules,v,{immediate:!0,deep:!0})):P!==void 0&&(P(),P=void 0)},{immediate:!0}),L(()=>u.lazyRules,v),L(e,z=>{z===!0?c.value=!0:x.value===!0&&u.lazyRules!=="ondemand"&&j()});function A(){k++,t.value=!1,c.value=!1,f.value=!1,d.value=null,j.cancel()}function I(z=u.modelValue){if(u.disable===!0||q.value===!1)return!0;const $=++k,F=t.value!==!0?()=>{c.value=!0}:()=>{},V=(w,C)=>{w===!0&&F(),f.value=w,d.value=C||null,t.value=!1},E=[];for(let w=0;w<u.rules.length;w++){const C=u.rules[w];let D;if(typeof C=="function"?D=C(z,re):typeof C=="string"&&re[C]!==void 0&&(D=re[C](z)),D===!1||typeof D=="string")return V(!0,D),!1;D!==!0&&D!==void 0&&E.push(D)}return E.length===0?(V(!1),!0):(t.value=!0,Promise.all(E).then(w=>{if(w===void 0||Array.isArray(w)===!1||w.length===0)return $===k&&V(!1),!0;const C=w.find(D=>D===!1||typeof D=="string");return $===k&&V(C!==void 0,C),C===void 0},w=>($===k&&(console.error(w),V(!0)),!1)))}const j=Re(I,0);return ae(()=>{P!==void 0&&P(),j.cancel()}),Object.assign(i,{resetValidation:A,validate:I}),ye(i,"hasError",()=>g.value),{isDirtyModel:c,hasRules:q,hasError:g,errorMessage:U,validate:I,resetValidation:A}}let W=[],ee=[];function we(e){ee=ee.filter(t=>t!==e)}function st(e){we(e),ee.push(e)}function dt(e){we(e),ee.length===0&&W.length!==0&&(W[W.length-1](),W=[])}function se(e){ee.length===0?e():W.push(e)}function Le(e){W=W.filter(t=>t!==e)}function ie(e){return e!=null&&(""+e).length!==0}const Ze={...$e,...Ne,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Ue={...Ze,maxlength:[Number,String]},He=["update:modelValue","clear","focus","blur"];function Qe({requiredForAttr:e=!0,tagProp:t,changeEvent:u=!1}={}){const{props:i,proxy:f}=Y(),d=Pe(i,f.$q),c=Oe({required:e,getValue:()=>i.for});return{requiredForAttr:e,changeEvent:u,tag:t===!0?M(()=>i.tag):{value:"label"},isDark:d,editable:M(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:K(!1),focused:K(!1),hasPopupOpen:!1,splitAttrs:je(),targetUid:c,rootRef:K(null),targetRef:K(null),controlRef:K(null)}}function We(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=Y(),{$q:c}=d;let k=null;e.hasValue===void 0&&(e.hasValue=M(()=>ie(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{u("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:l,focus:C}),e.computedCounter===void 0&&(e.computedCounter=M(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:P,hasRules:q,hasError:x,errorMessage:g,resetValidation:U}=Ke(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?M(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):M(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),A=M(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),I=M(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),j=M(()=>`q-field row no-wrap items-start q-field--${I.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+($.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),z=M(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),$=M(()=>t.labelSlot===!0||t.label!==void 0),F=M(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),V=M(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),E=M(()=>{const r={};return e.targetUid.value&&(r.for=e.targetUid.value),t.disable===!0&&(r["aria-disabled"]="true"),r});function w(){const r=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(r===null||r.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==r&&m.focus({preventScroll:!0}))}function C(){se(w)}function D(){Le(w);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function o(r){k!==null&&(clearTimeout(k),k=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",r))}function l(r,m){k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",r)),m!==void 0&&m())})}function s(r){ue(r),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),e.changeEvent===!0&&u("change",null),u("clear",t.modelValue),Q(()=>{const m=P.value;U(),P.value=m})}function a(r){[13,32].includes(r.keyCode)&&s(r)}function p(){const r=[];return i.prepend!==void 0&&r.push(R("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},i.prepend())),r.push(R("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),x.value===!0&&t.noErrorIcon===!1&&r.push(b("error",[R(de,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(b("inner-loading-append",i.loading!==void 0?i.loading():[R(Fe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(b("inner-clearable-append",[R(de,{class:"q-field__focusable-action",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,role:"button","aria-label":c.lang.label.clear,onKeyup:a,onClick:s})])),i.append!==void 0&&r.push(R("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},i.append())),e.getInnerAppend!==void 0&&r.push(b("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function h(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(R("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):i.rawControl!==void 0?r.push(i.rawControl()):i.control!==void 0&&r.push(R("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(V.value))),$.value===!0&&r.push(R("div",{class:F.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(R("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(X(i.default))}function _(){let r,m;x.value===!0?g.value!==null?(r=[R("div",{role:"alert"},g.value)],m=`q--slot-error-${g.value}`):(r=X(i.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[R("div",t.hint)],m=`q--slot-hint-${t.hint}`):(r=X(i.hint),m="q--slot-hint"));const S=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&S===!1&&r===void 0)return;const B=R("div",{key:m,class:"q-field__messages col"},r);return R("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?B:R(Ve,{name:"q-transition--field-message"},()=>B),S===!0?R("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function b(r,m){return m===null?null:R("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}let y=!1;return ke(()=>{y=!0}),xe(()=>{y===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&oe(()=>{d.focus()}),ae(()=>{k!==null&&clearTimeout(k)}),Object.assign(d,{focus:C,blur:D}),function(){const m=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...E.value}:E.value;return R(e.tag.value,{ref:e.rootRef,class:[j.value,f.class],style:f.style,...m},[i.before!==void 0?R("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},i.before()):null,R("div",{class:"q-field__inner relative-position col self-stretch"},[R("div",{ref:e.controlRef,class:z.value,tabindex:-1,...e.controlEvents},p()),A.value===!0?_():null]),i.after!==void 0?R("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},i.after()):null])}}const he={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Se=Object.keys(le);Se.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const Ye=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Se.join("")+"])|(.)","g"),be=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),Ge={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Je(e,t,u,i){let f,d,c,k,P,q;const x=K(null),g=K(v());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,I),L(()=>e.mask,o=>{if(o!==void 0)j(g.value,!0);else{const l=C(g.value);I(),e.modelValue!==l&&t("update:modelValue",l)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&j(g.value,!0)}),L(()=>e.unmaskedValue,()=>{x.value===!0&&j(g.value)});function v(){if(I(),x.value===!0){const o=E(C(e.modelValue));return e.fillMask!==!1?D(o):o}return e.modelValue}function A(o){if(o<f.length)return f.slice(-o);let l="",s=f;const a=s.indexOf(T);if(a!==-1){for(let p=o-s.length;p>0;p--)l+=T;s=s.slice(0,a)+l+s.slice(a)}return s}function I(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&U(),x.value===!1){k=void 0,f="",d="";return}const o=he[e.mask]===void 0?e.mask:he[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(be,"\\$&"),a=[],p=[],h=[];let _=e.reverseFillMask===!0,b="",y="";o.replace(Ye,(B,n,O,H,Z)=>{if(H!==void 0){const N=le[H];h.push(N),y=N.negate,_===!0&&(p.push("(?:"+y+"+)?("+N.pattern+"+)?(?:"+y+"+)?("+N.pattern+"+)?"),_=!1),p.push("(?:"+y+"+)?("+N.pattern+")?")}else if(O!==void 0)b="\\"+(O==="\\"?"":O),h.push(O),a.push("([^"+b+"]+)?"+b+"?");else{const N=n!==void 0?n:Z;b=N==="\\"?"\\\\\\\\":N.replace(be,"\\\\$&"),h.push(N),a.push("([^"+b+"]+)?"+b+"?")}});const r=new RegExp("^"+a.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),m=p.length-1,S=p.map((B,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+B):n===m?new RegExp("^"+B+"("+(y===""?".":y)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+B));c=h,k=B=>{const n=r.exec(e.reverseFillMask===!0?B:B.slice(0,h.length+1));n!==null&&(B=n.slice(1).join(""));const O=[],H=S.length;for(let Z=0,N=B;Z<H;Z++){const G=S[Z].exec(N);if(G===null)break;N=N.slice(G.shift().length),O.push(...G)}return O.length!==0?O.join(""):B},f=h.map(B=>typeof B=="string"?B:T).join(""),d=f.split(T).join(l)}function j(o,l,s){const a=i.value,p=a.selectionEnd,h=a.value.length-p,_=C(o);l===!0&&I();const b=E(_),y=e.fillMask!==!1?D(b):b,r=g.value!==y;a.value!==y&&(a.value=y),r===!0&&(g.value=y),document.activeElement===a&&Q(()=>{if(y===d){const S=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(S,S,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const S=a.selectionEnd;let B=p-1;for(let n=P;n<=B&&n<S;n++)f[n]!==T&&B++;$.right(a,B);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const S=e.reverseFillMask===!0?p===0?y.length>b.length?1:0:Math.max(0,y.length-(y===d?0:Math.min(b.length,h)+1))+1:p;a.setSelectionRange(S,S,"forward");return}if(e.reverseFillMask===!0)if(r===!0){const S=Math.max(0,y.length-(y===d?0:Math.min(b.length,h+1)));S===1&&p===1?a.setSelectionRange(S,S,"forward"):$.rightReverse(a,S)}else{const S=y.length-h;a.setSelectionRange(S,S,"backward")}else if(r===!0){const S=Math.max(0,f.indexOf(T),Math.min(b.length,p)-1);$.right(a,S)}else{const S=p-1;$.right(a,S)}});const m=e.unmaskedValue===!0?C(y):y;String(e.modelValue)!==m&&(e.modelValue!==null||m!=="")&&u(m,!0)}function z(o,l,s){const a=E(C(o.value));l=Math.max(0,f.indexOf(T),Math.min(a.length,l)),P=l,o.setSelectionRange(l,s,"forward")}const $={left(o,l){const s=f.slice(l-1).indexOf(T)===-1;let a=Math.max(0,l-1);for(;a>=0;a--)if(f[a]===T){l=a,s===!0&&l++;break}if(a<0&&f[l]!==void 0&&f[l]!==T)return $.right(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},right(o,l){const s=o.value.length;let a=Math.min(s,l+1);for(;a<=s;a++)if(f[a]===T){l=a;break}else f[a-1]===T&&(l=a);if(a>s&&f[l-1]!==void 0&&f[l-1]!==T)return $.left(o,s);o.setSelectionRange(l,l,"forward")},leftReverse(o,l){const s=A(o.value.length);let a=Math.max(0,l-1);for(;a>=0;a--)if(s[a-1]===T){l=a;break}else if(s[a]===T&&(l=a,a===0))break;if(a<0&&s[l]!==void 0&&s[l]!==T)return $.rightReverse(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},rightReverse(o,l){const s=o.value.length,a=A(s),p=a.slice(0,l+1).indexOf(T)===-1;let h=Math.min(s,l+1);for(;h<=s;h++)if(a[h-1]===T){l=h,l>0&&p===!0&&l--;break}if(h>s&&a[l-1]!==void 0&&a[l-1]!==T)return $.leftReverse(o,s);o.setSelectionRange(l,l,"forward")}};function F(o){t("click",o),q=void 0}function V(o){if(t("keydown",o),Ae(o)===!0||o.altKey===!0)return;const l=i.value,s=l.selectionStart,a=l.selectionEnd;if(o.shiftKey||(q=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&q===void 0&&(q=l.selectionDirection==="forward"?s:a);const p=$[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),p(l,q===s?a:s),o.shiftKey){const h=l.selectionStart;l.setSelectionRange(Math.min(q,h),Math.max(q,h),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===a?($.left(l,s),l.setSelectionRange(l.selectionStart,a,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===a&&($.rightReverse(l,a),l.setSelectionRange(s,l.selectionEnd,"forward"))}function E(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return w(o);const l=c;let s=0,a="";for(let p=0;p<l.length;p++){const h=o[s],_=l[p];if(typeof _=="string")a+=_,h===_&&s++;else if(h!==void 0&&_.regex.test(h))a+=_.transform!==void 0?_.transform(h):h,s++;else return a}return a}function w(o){const l=c,s=f.indexOf(T);let a=o.length-1,p="";for(let h=l.length-1;h>=0&&a!==-1;h--){const _=l[h];let b=o[a];if(typeof _=="string")p=_+p,b===_&&a--;else if(b!==void 0&&_.regex.test(b))do p=(_.transform!==void 0?_.transform(b):b)+p,a--,b=o[a];while(s===h&&b!==void 0&&_.regex.test(b));else return p}return p}function C(o){return typeof o!="string"||k===void 0?typeof o=="number"?k(""+o):o:k(o)}function D(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:g,hasMask:x,moveCursorForPaste:z,updateMaskValue:j,onMaskedKeydown:V,onMaskedClick:F}}function Xe(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?M(()=>{if(e.type==="file")return u()}):M(u)}const et=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,tt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,nt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,lt=/[a-z0-9_ -]$/i;function ot(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ee.is.firefox===!0?lt.test(u.data)===!1:et.test(u.data)===!0||tt.test(u.data)===!0||nt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}const ft=Ce({name:"QInput",inheritAttrs:!1,props:{...Ue,...Ge,...Te,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...He,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=Y(),{$q:f}=i,d={};let c=NaN,k,P,q=null,x;const g=K(null),U=Ie(e),{innerValue:v,hasMask:A,moveCursorForPaste:I,updateMaskValue:j,onMaskedKeydown:z,onMaskedClick:$}=Je(e,t,b,g),F=Xe(e,!0),V=M(()=>ie(v.value)),E=ot(h),w=Qe({changeEvent:!0}),C=M(()=>e.type==="textarea"||e.autogrow===!0),D=M(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),o=M(()=>{const n={...w.splitAttrs.listeners.value,onInput:h,onPaste:p,onChange:r,onBlur:m,onFocus:fe};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=E,A.value===!0&&(n.onKeydown=z,n.onClick=$),e.autogrow===!0&&(n.onAnimationend=_),n}),l=M(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...w.splitAttrs.attributes.value,id:w.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});L(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),L(()=>e.modelValue,n=>{if(A.value===!0){if(P===!0&&(P=!1,String(n)===c))return;j(n)}else v.value!==n&&(v.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete d.value));e.autogrow===!0&&Q(y)}),L(()=>e.autogrow,n=>{n===!0?Q(y):g.value!==null&&u.rows>0&&(g.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&Q(y)});function s(){se(()=>{const n=document.activeElement;g.value!==null&&g.value!==n&&(n===null||n.id!==w.targetUid.value)&&g.value.focus({preventScroll:!0})})}function a(){g.value!==null&&g.value.select()}function p(n){if(A.value===!0&&e.reverseFillMask!==!0){const O=n.target;I(O,O.selectionStart,O.selectionEnd)}t("paste",n)}function h(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const O=n.target.value;if(n.target.qComposing===!0){d.value=O;return}if(A.value===!0)j(O,!1,n.inputType);else if(b(O),D.value===!0&&n.target===document.activeElement){const{selectionStart:H,selectionEnd:Z}=n.target;H!==void 0&&Z!==void 0&&Q(()=>{n.target===document.activeElement&&O.indexOf(n.target.value)===0&&n.target.setSelectionRange(H,Z)})}e.autogrow===!0&&y()}function _(n){t("animationend",n),y()}function b(n,O){x=()=>{q=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,O===!0&&(P=!0),t("update:modelValue",n),Q(()=>{c===n&&(c=NaN)})),x=void 0},e.type==="number"&&(k=!0,d.value=n),e.debounce!==void 0?(q!==null&&clearTimeout(q),d.value=n,q=setTimeout(x,e.debounce)):x()}function y(){requestAnimationFrame(()=>{const n=g.value;if(n!==null){const O=n.parentNode.style,{scrollTop:H}=n,{overflowY:Z,maxHeight:N}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),G=Z!==void 0&&Z!=="scroll";G===!0&&(n.style.overflowY="hidden"),O.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",G===!0&&(n.style.overflowY=parseInt(N,10)<n.scrollHeight?"auto":"hidden"),O.marginBottom="",n.scrollTop=H}})}function r(n){E(n),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),t("change",n.target.value)}function m(n){n!==void 0&&fe(n),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),k=!1,P=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=v.value!==void 0?v.value:"")})}function S(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}ae(()=>{m()}),oe(()=>{e.autogrow===!0&&y()}),Object.assign(w,{innerValue:v,fieldClass:M(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:M(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:b,hasValue:V,floatingLabel:M(()=>V.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||ie(e.displayValue)),getControl:()=>R(C.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...o.value,...e.type!=="file"?{value:S()}:F.value}),getShadowControl:()=>R("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[R("span",{class:"invisible"},S()),R("span",e.shadowText)])});const B=We(w);return Object.assign(i,{focus:s,select:a,getNativeElement:()=>g.value}),ye(i,"nativeEl",()=>g.value),B}}),ct=Ce({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const i=Y(),f=K(null);let d=0;const c=[];function k(v){const A=typeof v=="boolean"?v:e.noErrorFocus!==!0,I=++d,j=(F,V)=>{u(`validation${F===!0?"Success":"Error"}`,V)},z=F=>{const V=F.validate();return typeof V.then=="function"?V.then(E=>({valid:E,comp:F}),E=>({valid:!1,comp:F,err:E})):Promise.resolve({valid:V,comp:F})};return(e.greedy===!0?Promise.all(c.map(z)).then(F=>F.filter(V=>V.valid!==!0)):c.reduce((F,V)=>F.then(()=>z(V).then(E=>{if(E.valid===!1)return Promise.reject(E)})),Promise.resolve()).catch(F=>[F])).then(F=>{if(F===void 0||F.length===0)return I===d&&j(!0),!0;if(I===d){const{comp:V,err:E}=F[0];if(E!==void 0&&console.error(E),j(!1,V),A===!0){const w=F.find(({comp:C})=>typeof C.focus=="function"&&Be(C.$)===!1);w!==void 0&&w.comp.focus()}}return!1})}function P(){d++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function q(v){v!==void 0&&ue(v);const A=d+1;k().then(I=>{A===d&&I===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function x(v){v!==void 0&&ue(v),u("reset"),Q(()=>{P(),e.autofocus===!0&&e.noResetFocus!==!0&&g()})}function g(){se(()=>{if(f.value===null)return;const v=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),A=>A.tabIndex!==-1);v!=null&&v.focus({preventScroll:!0})})}_e(pe,{bindComponent(v){c.push(v)},unbindComponent(v){const A=c.indexOf(v);A!==-1&&c.splice(A,1)}});let U=!1;return ke(()=>{U=!0}),xe(()=>{U===!0&&e.autofocus===!0&&g()}),oe(()=>{e.autofocus===!0&&g()}),Object.assign(i.proxy,{validate:k,resetValidation:P,submit:q,reset:x,focus:g,getValidationComponents:()=>c}),()=>R("form",{class:"q-form",ref:f,onSubmit:q,onReset:x},X(t.default))}});export{ft as Q,ct as a,st as b,se as c,He as d,We as e,Qe as f,dt as r,Ue as u};

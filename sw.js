if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const r=e=>s(e,c),l={module:{uri:c},exports:a,require:r};i[c]=Promise.all(n.map((e=>l[e]||r(e)))).then((e=>(o(...e),a)))}}define(["./workbox-fc255c04"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/DateInput-3ace1826.js",revision:null},{url:"assets/ErrorNotFound-6aa9d461.js",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-fd84f88b.woff",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-4a4dbc62.woff2",revision:null},{url:"assets/GoalSelect-207cb4be.js",revision:null},{url:"assets/GoalView-fb51ad41.js",revision:null},{url:"assets/HomeView-df25d410.js",revision:null},{url:"assets/index-5a3b7a6b.js",revision:null},{url:"assets/index-93f379d0.css",revision:null},{url:"assets/LoginView-fd71358d.js",revision:null},{url:"assets/MainLayout-1275e5f9.js",revision:null},{url:"assets/QForm-8389e9b3.js",revision:null},{url:"assets/QIntersection-e0f8ee33.js",revision:null},{url:"assets/QSlideTransition-a77edcff.js",revision:null},{url:"assets/QToggle-d58b9506.js",revision:null},{url:"assets/TaskStore-0e29ca86.js",revision:null},{url:"assets/TaskView-4161fc51.js",revision:null},{url:"assets/uid-ba94bac9.js",revision:null},{url:"assets/use-field-9a346963.js",revision:null},{url:"icons/apple-icon-120x120.png",revision:"0dfa23321609c8513fa04c4520d144c7"},{url:"icons/apple-icon-152x152.png",revision:"9b5e26e37ba866d7c06fc011f03f61b8"},{url:"icons/apple-icon-167x167.png",revision:"2143f1f63ed7932c6362a66593045872"},{url:"icons/apple-icon-180x180.png",revision:"b5ad3742b686af2dbbc5087dc998c99f"},{url:"icons/favicon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/favicon-16x16.png",revision:"c4af78b719a8d45c12775544530b84ff"},{url:"icons/favicon-32x32.png",revision:"54b71835d2c1a1e5e5492250f9e76837"},{url:"icons/favicon-96x96.png",revision:"75c896747c3a5bc1b9921b55ea033f43"},{url:"icons/favicon.ico",revision:"b8ba89fd6bc1841caaf7a2a23fe6b983"},{url:"icons/icon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/icon-192x192.png",revision:"3ed8908a1b22e2edefe7c3784a9ec520"},{url:"icons/icon-256x256.png",revision:"249dc7b7d8d0b7136d71d4c9a450830b"},{url:"icons/icon-384x384.png",revision:"aad38f917d7fca6a553baf28e859d20e"},{url:"icons/icon-512x512.png",revision:"139f7e54c631356a6e22d49f977f6086"},{url:"icons/ms-icon-144x144.png",revision:"49e3740faa5e39cdace04bd1b19c3223"},{url:"icons/safari-pinned-tab.svg",revision:"769dba3e90716c4e4f88c535b6f70b82"},{url:"index.html",revision:"2de96fa65246ee50f033eff0edb7ebe5"},{url:"icons/favicon.ico",revision:"b8ba89fd6bc1841caaf7a2a23fe6b983"},{url:"icons/apple-icon-120x120.png",revision:"0dfa23321609c8513fa04c4520d144c7"},{url:"icons/safari-pinned-tab.svg",revision:"769dba3e90716c4e4f88c535b6f70b82"},{url:"icons/icon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/icon-192x192.png",revision:"3ed8908a1b22e2edefe7c3784a9ec520"},{url:"icons/icon-256x256.png",revision:"249dc7b7d8d0b7136d71d4c9a450830b"},{url:"icons/icon-384x384.png",revision:"aad38f917d7fca6a553baf28e859d20e"},{url:"icons/icon-512x512.png",revision:"139f7e54c631356a6e22d49f977f6086"},{url:"manifest.webmanifest",revision:"122649422c5fed03ce60fd131dce15ff"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^index.html$/]}))}));

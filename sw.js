if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const c=s=>i(s,o),a={module:{uri:o},exports:r,require:c};e[o]=Promise.all(n.map((s=>a[s]||c(s)))).then((s=>(l(...s),r)))}}define(["./workbox-fc255c04"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/DateInput-e8099af0.js",revision:null},{url:"assets/ErrorNotFound-3a2e908e.js",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-fd84f88b.woff",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-4a4dbc62.woff2",revision:null},{url:"assets/format-8c778330.js",revision:null},{url:"assets/GoalSelect-b885713c.js",revision:null},{url:"assets/GoalsView-09264dc3.js",revision:null},{url:"assets/GoalsView-5230be89.css",revision:null},{url:"assets/GoalView-31ebc624.js",revision:null},{url:"assets/HomeView-279178a8.css",revision:null},{url:"assets/HomeView-3dc9286a.js",revision:null},{url:"assets/index-82b5f30c.js",revision:null},{url:"assets/index-93f379d0.css",revision:null},{url:"assets/LoginView-a637c15f.js",revision:null},{url:"assets/MainLayout-e0edcecf.css",revision:null},{url:"assets/MainLayout-efc1b0c4.js",revision:null},{url:"assets/MainPage-1232e6f4.css",revision:null},{url:"assets/MainPage-4b537487.js",revision:null},{url:"assets/ProgressLabel-49c5e299.js",revision:null},{url:"assets/QForm-1a6e2042.js",revision:null},{url:"assets/QItemLabel-e27ff9d1.js",revision:null},{url:"assets/QList-fce9ab6b.js",revision:null},{url:"assets/QSlideTransition-29cf0b9d.js",revision:null},{url:"assets/QToggle-982e9ffc.js",revision:null},{url:"assets/ReportsView-40af564f.js",revision:null},{url:"assets/TaskView-4968f386.js",revision:null},{url:"assets/uid-6a237b22.js",revision:null},{url:"assets/use-dark-6e7124a3.js",revision:null},{url:"assets/use-field-33cb7631.js",revision:null},{url:"assets/use-model-toggle-d4ffc14c.js",revision:null},{url:"assets/use-timeout-76d6bbf0.js",revision:null},{url:"icons/apple-icon-120x120.png",revision:"0dfa23321609c8513fa04c4520d144c7"},{url:"icons/apple-icon-152x152.png",revision:"9b5e26e37ba866d7c06fc011f03f61b8"},{url:"icons/apple-icon-167x167.png",revision:"2143f1f63ed7932c6362a66593045872"},{url:"icons/apple-icon-180x180.png",revision:"b5ad3742b686af2dbbc5087dc998c99f"},{url:"icons/favicon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/favicon-16x16.png",revision:"c4af78b719a8d45c12775544530b84ff"},{url:"icons/favicon-32x32.png",revision:"54b71835d2c1a1e5e5492250f9e76837"},{url:"icons/favicon-96x96.png",revision:"75c896747c3a5bc1b9921b55ea033f43"},{url:"icons/favicon.ico",revision:"b8ba89fd6bc1841caaf7a2a23fe6b983"},{url:"icons/icon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/icon-192x192.png",revision:"3ed8908a1b22e2edefe7c3784a9ec520"},{url:"icons/icon-256x256.png",revision:"249dc7b7d8d0b7136d71d4c9a450830b"},{url:"icons/icon-384x384.png",revision:"aad38f917d7fca6a553baf28e859d20e"},{url:"icons/icon-512x512.png",revision:"139f7e54c631356a6e22d49f977f6086"},{url:"icons/ms-icon-144x144.png",revision:"49e3740faa5e39cdace04bd1b19c3223"},{url:"icons/safari-pinned-tab.svg",revision:"769dba3e90716c4e4f88c535b6f70b82"},{url:"index.html",revision:"24591f46449b1a9fde8b0175078ccf66"},{url:"icons/favicon.ico",revision:"b8ba89fd6bc1841caaf7a2a23fe6b983"},{url:"icons/apple-icon-120x120.png",revision:"0dfa23321609c8513fa04c4520d144c7"},{url:"icons/safari-pinned-tab.svg",revision:"769dba3e90716c4e4f88c535b6f70b82"},{url:"icons/icon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/icon-192x192.png",revision:"3ed8908a1b22e2edefe7c3784a9ec520"},{url:"icons/icon-256x256.png",revision:"249dc7b7d8d0b7136d71d4c9a450830b"},{url:"icons/icon-384x384.png",revision:"aad38f917d7fca6a553baf28e859d20e"},{url:"icons/icon-512x512.png",revision:"139f7e54c631356a6e22d49f977f6086"},{url:"manifest.webmanifest",revision:"122649422c5fed03ce60fd131dce15ff"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{allowlist:[/^index.html$/]}))}));

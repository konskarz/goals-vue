if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const a=s=>i(s,o),c={module:{uri:o},exports:r,require:a};e[o]=Promise.all(n.map((s=>c[s]||a(s)))).then((s=>(l(...s),r)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/date-7894991d.js",revision:null},{url:"assets/DateInput-42ee6451.js",revision:null},{url:"assets/DurationInput-703e9dbb.js",revision:null},{url:"assets/ErrorNotFound-01c2f570.js",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-fd84f88b.woff",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-83be7b2f.woff2",revision:null},{url:"assets/format-ff5bcb16.js",revision:null},{url:"assets/GoalSelect-abe5b0c5.js",revision:null},{url:"assets/GoalStore-74e108f3.js",revision:null},{url:"assets/GoalsView-3f35ea39.js",revision:null},{url:"assets/GoalView-96e9933c.js",revision:null},{url:"assets/HomeView-5577aefb.js",revision:null},{url:"assets/index-52896586.js",revision:null},{url:"assets/index-e3459e00.css",revision:null},{url:"assets/LoginView-f4fa9b08.js",revision:null},{url:"assets/MainLayout-b68165a3.js",revision:null},{url:"assets/NumberInput-21cde291.js",revision:null},{url:"assets/PlanView-cb1b8fdb.js",revision:null},{url:"assets/QForm-81ae9ad4.js",revision:null},{url:"assets/QItem-4de8b7a5.js",revision:null},{url:"assets/QItemLabel-f95f7916.js",revision:null},{url:"assets/QList-25eda6b1.js",revision:null},{url:"assets/QMenu-f314d073.js",revision:null},{url:"assets/QToolbar-5c4eb316.js",revision:null},{url:"assets/TaskStore-90304fee.js",revision:null},{url:"assets/TasksView-8a447032.js",revision:null},{url:"assets/TaskView-498e4ed2.js",revision:null},{url:"assets/TimeStore-8c41c65e.js",revision:null},{url:"assets/TimesView-9ebeeb73.js",revision:null},{url:"assets/TimeView-b13d66de.js",revision:null},{url:"assets/WeekTimelineEntry-f22c3968.js",revision:null},{url:"icons/apple-icon-120x120.png",revision:"0dfa23321609c8513fa04c4520d144c7"},{url:"icons/apple-icon-152x152.png",revision:"9b5e26e37ba866d7c06fc011f03f61b8"},{url:"icons/apple-icon-167x167.png",revision:"2143f1f63ed7932c6362a66593045872"},{url:"icons/apple-icon-180x180.png",revision:"b5ad3742b686af2dbbc5087dc998c99f"},{url:"icons/favicon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/favicon-16x16.png",revision:"c4af78b719a8d45c12775544530b84ff"},{url:"icons/favicon-32x32.png",revision:"54b71835d2c1a1e5e5492250f9e76837"},{url:"icons/favicon-96x96.png",revision:"75c896747c3a5bc1b9921b55ea033f43"},{url:"icons/favicon.ico",revision:"b8ba89fd6bc1841caaf7a2a23fe6b983"},{url:"icons/icon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/icon-192x192.png",revision:"3ed8908a1b22e2edefe7c3784a9ec520"},{url:"icons/icon-256x256.png",revision:"249dc7b7d8d0b7136d71d4c9a450830b"},{url:"icons/icon-384x384.png",revision:"aad38f917d7fca6a553baf28e859d20e"},{url:"icons/icon-512x512.png",revision:"139f7e54c631356a6e22d49f977f6086"},{url:"icons/ms-icon-144x144.png",revision:"49e3740faa5e39cdace04bd1b19c3223"},{url:"icons/safari-pinned-tab.svg",revision:"769dba3e90716c4e4f88c535b6f70b82"},{url:"index.html",revision:"53af20e7735f2e50faf484a69cf418f8"},{url:"icons/favicon.ico",revision:"b8ba89fd6bc1841caaf7a2a23fe6b983"},{url:"icons/apple-icon-120x120.png",revision:"0dfa23321609c8513fa04c4520d144c7"},{url:"icons/safari-pinned-tab.svg",revision:"769dba3e90716c4e4f88c535b6f70b82"},{url:"icons/icon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/icon-192x192.png",revision:"3ed8908a1b22e2edefe7c3784a9ec520"},{url:"icons/icon-256x256.png",revision:"249dc7b7d8d0b7136d71d4c9a450830b"},{url:"icons/icon-384x384.png",revision:"aad38f917d7fca6a553baf28e859d20e"},{url:"icons/icon-512x512.png",revision:"139f7e54c631356a6e22d49f977f6086"},{url:"manifest.webmanifest",revision:"cfa6230ec0f4a57933689e4ae5b62303"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{allowlist:[/^index.html$/]}))}));

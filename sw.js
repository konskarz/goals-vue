if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const a=s=>i(s,o),c={module:{uri:o},exports:r,require:a};e[o]=Promise.all(n.map((s=>c[s]||a(s)))).then((s=>(l(...s),r)))}}define(["./workbox-fc255c04"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/date-a7be4692.js",revision:null},{url:"assets/DateInput-d8aaff52.js",revision:null},{url:"assets/ErrorNotFound-e7bbe034.js",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-fd84f88b.woff",revision:null},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-4a4dbc62.woff2",revision:null},{url:"assets/focus-manager-4e5c0bab.js",revision:null},{url:"assets/format-8c778330.js",revision:null},{url:"assets/GoalSelect-6216d30d.js",revision:null},{url:"assets/GoalStore-da510c3e.js",revision:null},{url:"assets/GoalsView-e721a97c.js",revision:null},{url:"assets/GoalView-02d61dd1.js",revision:null},{url:"assets/HomeView-7d23efdb.js",revision:null},{url:"assets/HomeView-8b48d699.css",revision:null},{url:"assets/index-93f379d0.css",revision:null},{url:"assets/index-f225ddba.js",revision:null},{url:"assets/LoginView-0219302e.js",revision:null},{url:"assets/MainLayout-b8466fa8.js",revision:null},{url:"assets/QForm-44ad8d66.js",revision:null},{url:"assets/QIntersection-c97d6774.js",revision:null},{url:"assets/QItem-c41dc70c.js",revision:null},{url:"assets/QItemLabel-e3dbd325.js",revision:null},{url:"assets/QList-0b788cc1.js",revision:null},{url:"assets/QSlideTransition-6441ea72.js",revision:null},{url:"assets/QToggle-7f72f015.js",revision:null},{url:"assets/QToolbar-b92d05dd.js",revision:null},{url:"assets/ReportsView-0e4b34a0.js",revision:null},{url:"assets/TaskStore-20a6fa20.js",revision:null},{url:"assets/TasksView-1f9d9d61.js",revision:null},{url:"assets/TasksView-5445e644.css",revision:null},{url:"assets/TaskView-adcda279.js",revision:null},{url:"assets/uid-6a237b22.js",revision:null},{url:"assets/use-dark-8f518d31.js",revision:null},{url:"assets/use-field-fee23105.js",revision:null},{url:"assets/use-model-toggle-f4732691.js",revision:null},{url:"assets/use-prevent-scroll-4c06de89.js",revision:null},{url:"icons/apple-icon-120x120.png",revision:"0dfa23321609c8513fa04c4520d144c7"},{url:"icons/apple-icon-152x152.png",revision:"9b5e26e37ba866d7c06fc011f03f61b8"},{url:"icons/apple-icon-167x167.png",revision:"2143f1f63ed7932c6362a66593045872"},{url:"icons/apple-icon-180x180.png",revision:"b5ad3742b686af2dbbc5087dc998c99f"},{url:"icons/favicon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/favicon-16x16.png",revision:"c4af78b719a8d45c12775544530b84ff"},{url:"icons/favicon-32x32.png",revision:"54b71835d2c1a1e5e5492250f9e76837"},{url:"icons/favicon-96x96.png",revision:"75c896747c3a5bc1b9921b55ea033f43"},{url:"icons/favicon.ico",revision:"b8ba89fd6bc1841caaf7a2a23fe6b983"},{url:"icons/icon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/icon-192x192.png",revision:"3ed8908a1b22e2edefe7c3784a9ec520"},{url:"icons/icon-256x256.png",revision:"249dc7b7d8d0b7136d71d4c9a450830b"},{url:"icons/icon-384x384.png",revision:"aad38f917d7fca6a553baf28e859d20e"},{url:"icons/icon-512x512.png",revision:"139f7e54c631356a6e22d49f977f6086"},{url:"icons/ms-icon-144x144.png",revision:"49e3740faa5e39cdace04bd1b19c3223"},{url:"icons/safari-pinned-tab.svg",revision:"769dba3e90716c4e4f88c535b6f70b82"},{url:"index.html",revision:"5114cee3daabd92169653840f9871608"},{url:"icons/favicon.ico",revision:"b8ba89fd6bc1841caaf7a2a23fe6b983"},{url:"icons/apple-icon-120x120.png",revision:"0dfa23321609c8513fa04c4520d144c7"},{url:"icons/safari-pinned-tab.svg",revision:"769dba3e90716c4e4f88c535b6f70b82"},{url:"icons/icon-128x128.png",revision:"7e6fb2db8ae3c3cb3197286aad69087b"},{url:"icons/icon-192x192.png",revision:"3ed8908a1b22e2edefe7c3784a9ec520"},{url:"icons/icon-256x256.png",revision:"249dc7b7d8d0b7136d71d4c9a450830b"},{url:"icons/icon-384x384.png",revision:"aad38f917d7fca6a553baf28e859d20e"},{url:"icons/icon-512x512.png",revision:"139f7e54c631356a6e22d49f977f6086"},{url:"manifest.webmanifest",revision:"122649422c5fed03ce60fd131dce15ff"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{allowlist:[/^index.html$/]}))}));

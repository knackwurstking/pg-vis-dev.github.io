if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>i(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BPyn_P1u.js",revision:null},{url:"assets/index-CVOMIGuw.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"1ab17cec01cfc620a5bd4495f59f5147"},{url:"CHANGELOG.md",revision:"a0ba1436049b47eaf20e825db38f49d4"},{url:"icons/maskable-icon-512x512.png",revision:"5a5e4426cbae3a13bcb6322198f9554e"},{url:"icons/pwa-192x192.png",revision:"1c64eabd3060eee60aef0bef3147b7e6"},{url:"icons/pwa-512x512.png",revision:"5a5e4426cbae3a13bcb6322198f9554e"},{url:"icons/pwa-64x64.png",revision:"71e23b5765bada059b7e19dca9f5d05b"},{url:"manifest.webmanifest",revision:"224d453c87a89d19c61499b4c0e74111"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>s(e,o),l={module:{uri:o},exports:d,require:c};i[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-cUmKQav4.js",revision:null},{url:"assets/index-XKniV7d-.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"6ab9ff98a6542d9e5675348adc795308"},{url:"themes/gruvbox.css",revision:"0dc1d58e3856024da9ca86ddec3edb00"},{url:"themes/original.css",revision:"25a17ef24faad48615a957d4f15d9eb6"},{url:"CHANGELOG.md",revision:"0f55e707eb39c3c9741433c09d988ed3"},{url:"icons/maskable-icon-512x512.png",revision:"29c47cde1a2b6c436f0c47bee40d7547"},{url:"icons/pwa-192x192.png",revision:"033bbe99672a9e90eb73ed180e83d35d"},{url:"icons/pwa-512x512.png",revision:"29c47cde1a2b6c436f0c47bee40d7547"},{url:"icons/pwa-64x64.png",revision:"537afa2ef86b721348584a3afa685a1f"},{url:"manifest.webmanifest",revision:"1aeb5d42ce02a450773a04d186ec7325"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

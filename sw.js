if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const d=e=>i(e,o),l={module:{uri:o},exports:c,require:d};s[o]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CQPpamml.js",revision:null},{url:"assets/index-D1wJ9DKB.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"82bb0e76189c4b157bfb1ce4fc9e81fc"},{url:"themes/gruvbox.css",revision:"0dc1d58e3856024da9ca86ddec3edb00"},{url:"themes/original.css",revision:"ec51e08e2f5bd5f1f71e5fcd47dee66a"},{url:"CHANGELOG.md",revision:"0f55e707eb39c3c9741433c09d988ed3"},{url:"icons/maskable-icon-512x512.png",revision:"29c47cde1a2b6c436f0c47bee40d7547"},{url:"icons/pwa-192x192.png",revision:"033bbe99672a9e90eb73ed180e83d35d"},{url:"icons/pwa-512x512.png",revision:"29c47cde1a2b6c436f0c47bee40d7547"},{url:"icons/pwa-64x64.png",revision:"537afa2ef86b721348584a3afa685a1f"},{url:"manifest.webmanifest",revision:"1aeb5d42ce02a450773a04d186ec7325"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

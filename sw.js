if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const c=e=>i(e,o),l={module:{uri:o},exports:d,require:c};s[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CXRu_ppR.js",revision:null},{url:"assets/index-Wre6ZC9E.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"5dbb2853d372eb28d396b02e03af0694"},{url:"themes/gruvbox.css",revision:"0dc1d58e3856024da9ca86ddec3edb00"},{url:"themes/original.css",revision:"25a17ef24faad48615a957d4f15d9eb6"},{url:"CHANGELOG.md",revision:"d7294c484b552317525733c6c98a6ae2"},{url:"icons/maskable-icon-512x512.png",revision:"29c47cde1a2b6c436f0c47bee40d7547"},{url:"icons/pwa-192x192.png",revision:"033bbe99672a9e90eb73ed180e83d35d"},{url:"icons/pwa-512x512.png",revision:"29c47cde1a2b6c436f0c47bee40d7547"},{url:"icons/pwa-64x64.png",revision:"537afa2ef86b721348584a3afa685a1f"},{url:"manifest.webmanifest",revision:"1aeb5d42ce02a450773a04d186ec7325"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

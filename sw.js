if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const t=e=>i(e,o),l={module:{uri:o},exports:d,require:t};s[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CfEHTa5s.js",revision:null},{url:"assets/index-iIxL53OE.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"126fc7aea822e45e7363c03ea849bf3d"},{url:"themes/gruvbox.css",revision:"0dc1d58e3856024da9ca86ddec3edb00"},{url:"themes/original.css",revision:"ec51e08e2f5bd5f1f71e5fcd47dee66a"},{url:"CHANGELOG.md",revision:"0f55e707eb39c3c9741433c09d988ed3"},{url:"manifest.webmanifest",revision:"7803bd608127751f46d6130259c5de84"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

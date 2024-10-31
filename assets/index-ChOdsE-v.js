(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=globalThis,Ar=Fe.ShadowRoot&&(Fe.ShadyCSS===void 0||Fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Er=Symbol(),Yr=new WeakMap;let zi=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Er)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ar&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Yr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Yr.set(e,t))}return t}toString(){return this.cssText}};const pn=o=>new zi(typeof o=="string"?o:o+"",void 0,Er),fn=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new zi(e,o,Er)},gn=(o,t)=>{if(Ar)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=Fe.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i)}},Xr=Ar?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return pn(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mn,defineProperty:yn,getOwnPropertyDescriptor:vn,getOwnPropertyNames:bn,getOwnPropertySymbols:_n,getPrototypeOf:wn}=Object,jt=globalThis,Jr=jt.trustedTypes,kn=Jr?Jr.emptyScript:"",dr=jt.reactiveElementPolyfillSupport,ye=(o,t)=>o,Ze={toAttribute(o,t){switch(t){case Boolean:o=o?kn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Lr=(o,t)=>!mn(o,t),Qr={attribute:!0,type:String,converter:Ze,reflect:!1,hasChanged:Lr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),jt.litPropertyMetadata??(jt.litPropertyMetadata=new WeakMap);let Jt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Qr){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&yn(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=vn(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const l=r==null?void 0:r.call(this);s.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Qr}static _$Ei(){if(this.hasOwnProperty(ye("elementProperties")))return;const t=wn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ye("properties"))){const e=this.properties,i=[...bn(e),..._n(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(Xr(r))}else t!==void 0&&e.push(Xr(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gn(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Ze).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)==null?void 0:s.fromAttribute)!==void 0?n.converter:Ze;this._$Em=r,this[r]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Lr)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};Jt.elementStyles=[],Jt.shadowRootOptions={mode:"open"},Jt[ye("elementProperties")]=new Map,Jt[ye("finalized")]=new Map,dr==null||dr({ReactiveElement:Jt}),(jt.reactiveElementVersions??(jt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn={attribute:!0,type:String,converter:Ze,reflect:!1,hasChanged:Lr},Sn=(o=xn,t,e)=>{const{kind:i,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(e.name,o),i==="accessor"){const{name:n}=e;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,h,o)},init(l){return l!==void 0&&this.P(n,void 0,o),l}}}if(i==="setter"){const{name:n}=e;return function(l){const h=this[n];t.call(this,l),this.requestUpdate(n,h,o)}}throw Error("Unsupported decorator location: "+i)};function vt(o){return(t,e)=>typeof e=="object"?Sn(o,t,e):((i,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,s):void 0})(o,t,e)}class Or{constructor(){this.listeners={}}addListener(t,e){return this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e),()=>this.removeListener(t,e)}removeListener(t,e){this.listeners[t]&&(this.listeners[t]=this.listeners[t].filter(i=>i!==e))}dispatch(t,e){this.listeners[t]&&this.listeners[t].forEach(i=>i(e))}}class Ri{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){this.callbacks.filter(t=>(t(),!1))}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=globalThis,Pr=He.ShadowRoot&&(He.ShadyCSS===void 0||He.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zr=Symbol(),ti=new WeakMap;let ji=class{constructor(o,t,e){if(this._$cssResult$=!0,e!==zr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=t}get styleSheet(){let o=this.o;const t=this.t;if(Pr&&o===void 0){const e=t!==void 0&&t.length===1;e&&(o=ti.get(t)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),e&&ti.set(t,o))}return o}toString(){return this.cssText}};const Cn=o=>new ji(typeof o=="string"?o:o+"",void 0,zr),lt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new ji(e,o,zr)},$n=(o,t)=>{if(Pr)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=He.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i)}},ei=Pr?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Cn(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:An,defineProperty:En,getOwnPropertyDescriptor:Ln,getOwnPropertyNames:On,getOwnPropertySymbols:Pn,getPrototypeOf:zn}=Object,te=globalThis,ri=te.trustedTypes,Rn=ri?ri.emptyScript:"",ii=te.reactiveElementPolyfillSupport,ve=(o,t)=>o,Ve={toAttribute(o,t){switch(t){case Boolean:o=o?Rn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Rr=(o,t)=>!An(o,t),ni={attribute:!0,type:String,converter:Ve,reflect:!1,hasChanged:Rr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),te.litPropertyMetadata??(te.litPropertyMetadata=new WeakMap);class Qt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ni){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&En(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=Ln(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const l=r==null?void 0:r.call(this);s.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ni}static _$Ei(){if(this.hasOwnProperty(ve("elementProperties")))return;const t=zn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ve("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ve("properties"))){const e=this.properties,i=[...On(e),...Pn(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(ei(r))}else t!==void 0&&e.push(ei(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $n(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Ve).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var i;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:Ve;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Rr)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}Qt.elementStyles=[],Qt.shadowRootOptions={mode:"open"},Qt[ve("elementProperties")]=new Map,Qt[ve("finalized")]=new Map,ii==null||ii({ReactiveElement:Qt}),(te.reactiveElementVersions??(te.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=globalThis,We=Ge.trustedTypes,si=We?We.createPolicy("lit-html",{createHTML:o=>o}):void 0,Bi="$lit$",zt=`lit$${Math.random().toFixed(9).slice(2)}$`,Di="?"+zt,jn=`<${Di}>`,Vt=document,_e=()=>Vt.createComment(""),we=o=>o===null||typeof o!="object"&&typeof o!="function",jr=Array.isArray,Bn=o=>jr(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",pr=`[ 	
\f\r]`,ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oi=/-->/g,ai=/>/g,Nt=RegExp(`>|${pr}(?:([^\\s"'>=/]+)(${pr}*=${pr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),li=/'/g,ci=/"/g,Ii=/^(?:script|style|textarea|title)$/i,Dn=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),Y=Dn(1),ee=Symbol.for("lit-noChange"),ft=Symbol.for("lit-nothing"),hi=new WeakMap,Ht=Vt.createTreeWalker(Vt,129);function Ti(o,t){if(!jr(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return si!==void 0?si.createHTML(t):t}const In=(o,t)=>{const e=o.length-1,i=[];let r,s=t===2?"<svg>":t===3?"<math>":"",n=ge;for(let l=0;l<e;l++){const h=o[l];let f,v,p=-1,b=0;for(;b<h.length&&(n.lastIndex=b,v=n.exec(h),v!==null);)b=n.lastIndex,n===ge?v[1]==="!--"?n=oi:v[1]!==void 0?n=ai:v[2]!==void 0?(Ii.test(v[2])&&(r=RegExp("</"+v[2],"g")),n=Nt):v[3]!==void 0&&(n=Nt):n===Nt?v[0]===">"?(n=r??ge,p=-1):v[1]===void 0?p=-2:(p=n.lastIndex-v[2].length,f=v[1],n=v[3]===void 0?Nt:v[3]==='"'?ci:li):n===ci||n===li?n=Nt:n===oi||n===ai?n=ge:(n=Nt,r=void 0);const u=n===Nt&&o[l+1].startsWith("/>")?" ":"";s+=n===ge?h+jn:p>=0?(i.push(f),h.slice(0,p)+Bi+h.slice(p)+zt+u):h+zt+(p===-2?l:u)}return[Ti(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ke{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const l=t.length-1,h=this.parts,[f,v]=In(t,e);if(this.el=ke.createElement(f,i),Ht.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Ht.nextNode())!==null&&h.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(Bi)){const b=v[n++],u=r.getAttribute(p).split(zt),w=/([.?@])?(.*)/.exec(b);h.push({type:1,index:s,name:w[2],strings:u,ctor:w[1]==="."?Mn:w[1]==="?"?Un:w[1]==="@"?Nn:nr}),r.removeAttribute(p)}else p.startsWith(zt)&&(h.push({type:6,index:s}),r.removeAttribute(p));if(Ii.test(r.tagName)){const p=r.textContent.split(zt),b=p.length-1;if(b>0){r.textContent=We?We.emptyScript:"";for(let u=0;u<b;u++)r.append(p[u],_e()),Ht.nextNode(),h.push({type:2,index:++s});r.append(p[b],_e())}}}else if(r.nodeType===8)if(r.data===Di)h.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(zt,p+1))!==-1;)h.push({type:7,index:s}),p+=zt.length-1}s++}}static createElement(t,e){const i=Vt.createElement("template");return i.innerHTML=t,i}}function re(o,t,e=o,i){var r,s;if(t===ee)return t;let n=i!==void 0?(r=e._$Co)==null?void 0:r[i]:e._$Cl;const l=we(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==l&&((s=n==null?void 0:n._$AO)==null||s.call(n,!1),l===void 0?n=void 0:(n=new l(o),n._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=re(o,n._$AS(o,t.values),n,i)),t}class Tn{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??Vt).importNode(e,!0);Ht.currentNode=r;let s=Ht.nextNode(),n=0,l=0,h=i[0];for(;h!==void 0;){if(n===h.index){let f;h.type===2?f=new Oe(s,s.nextSibling,this,t):h.type===1?f=new h.ctor(s,h.name,h.strings,this,t):h.type===6&&(f=new Fn(s,this,t)),this._$AV.push(f),h=i[++l]}n!==(h==null?void 0:h.index)&&(s=Ht.nextNode(),n++)}return Ht.currentNode=Vt,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Oe{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=ft,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=re(this,t,e),we(t)?t===ft||t==null||t===""?(this._$AH!==ft&&this._$AR(),this._$AH=ft):t!==this._$AH&&t!==ee&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ft&&we(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ke.createElement(Ti(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)==null?void 0:e._$AD)===s)this._$AH.p(i);else{const n=new Tn(s,this),l=n.u(this.options);n.p(i),this.T(l),this._$AH=n}}_$AC(t){let e=hi.get(t.strings);return e===void 0&&hi.set(t.strings,e=new ke(t)),e}k(t){jr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new Oe(this.O(_e()),this.O(_e()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class nr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=ft,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ft}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(s===void 0)t=re(this,t,e,0),n=!we(t)||t!==this._$AH&&t!==ee,n&&(this._$AH=t);else{const l=t;let h,f;for(t=s[0],h=0;h<s.length-1;h++)f=re(this,l[i+h],e,h),f===ee&&(f=this._$AH[h]),n||(n=!we(f)||f!==this._$AH[h]),f===ft?t=ft:t!==ft&&(t+=(f??"")+s[h+1]),this._$AH[h]=f}n&&!r&&this.j(t)}j(t){t===ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mn extends nr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ft?void 0:t}}class Un extends nr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ft)}}class Nn extends nr{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=re(this,t,e,0)??ft)===ee)return;const i=this._$AH,r=t===ft&&i!==ft||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==ft&&(i===ft||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Fn{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){re(this,t)}}const ui=Ge.litHtmlPolyfillSupport;ui==null||ui(ke,Oe),(Ge.litHtmlVersions??(Ge.litHtmlVersions=[])).push("3.2.1");const Hn=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const s=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new Oe(t.insertBefore(_e(),s),s,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends Qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Hn(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ee}};var di;st._$litElement$=!0,st.finalized=!0,(di=globalThis.litElementHydrateSupport)==null||di.call(globalThis,{LitElement:st});const pi=globalThis.litElementPolyfillSupport;pi==null||pi({LitElement:st});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Mi={color:"var(--ui-ripple-text, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",usePointer:!1};function sr(o,t){t={...Mi,...t||{}};let e=null;const i=l=>{e=vr(l,t),o.addEventListener("pointermove",s)},r=()=>{o.removeEventListener("pointermove",s),br(e),e=null},s=()=>r(),n=l=>{e=vr(l,t),br(e),e=null};return o.classList.add("ripple-container"),o.style.overflow="hidden",t.usePointer?(o.addEventListener("pointerdown",i),o.addEventListener("pointerup",r),o.addEventListener("pointerleave",r)):o.addEventListener("click",n),()=>{if(o.classList.remove("ripple-container"),t.usePointer){o.removeEventListener("pointerdown",i),o.removeEventListener("pointerup",r),o.removeEventListener("pointerleave",r),o.removeEventListener("pointermove",s);return}o.removeEventListener("click",n)}}function vr(o,t){const e=document.createElement("div"),i=o.currentTarget;i.appendChild(e),e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=`${t.color}`,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`;const r=i.getBoundingClientRect();t.centered?(e.style.top=`${r.height/2}px`,e.style.left=`${r.width/2}px`):(e.style.top=`${o.clientY-r.top}px`,e.style.left=`${o.clientX-r.left}px`);const s=Math.max(r.width,r.height)*.02;return e.style.transform=`scale(${s}) translate(0, 0)`,e}function br(o){o&&(o.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&o.remove()}),o.style.opacity="0")}const Zn=Object.freeze(Object.defineProperty({__proto__:null,create:sr,defaultOptions:Mi,start:vr,stop:br},Symbol.toStringTag,{value:"Module"}));function Br(o){return Object.entries(o).map(([t,e])=>`${t.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}:${e}`).join(";")+";"}const Vn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M5 19.6693V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V19.6693C19 20.131 18.4277 20.346 18.1237 19.9985L12 13L5.87629 19.9985C5.57227 20.346 5 20.131 5 19.6693Z"
                stroke="currentColor"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Gn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Dr=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M17 9.5L12 14.5L7 9.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Wn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M14.5 17L9.5 12L14.5 7"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Ui=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M7 17L16.8995 7.10051"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M7 7.00001L16.8995 16.8995"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,qn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M13 3L16 6L19 9M13 3L5 3L5 21L19 21L19 9M13 3L13 9L19 9"
                stroke="currentColor"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Kn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M12 3L12 15M12 15L16 11M12 15L8 11"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Yn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <circle
                cx="9.5"
                cy="6"
                r="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="9.5"
                cy="10"
                r="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="9.5"
                cy="14"
                r="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="9.5"
                cy="18"
                r="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="14.5"
                cy="6"
                r="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="14.5"
                cy="10"
                r="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="14.5"
                cy="14"
                r="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="14.5"
                cy="18"
                r="0.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
        </g>
    </svg>
`,Xn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M6 12H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 15.5H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 8.5H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Jn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="transparent"></rect>
            <circle
                cx="12"
                cy="7"
                r="0.5"
                transform="rotate(90 12 7)"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="12"
                cy="12"
                r="0.5"
                transform="rotate(90 12 12)"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
            <circle
                cx="12"
                cy="17"
                r="0.5"
                transform="rotate(90 12 17)"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></circle>
        </g>
    </svg>
`,Qn=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,ts=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M12 6V18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 12H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,es=Y`
    <svg
        style="color: inherit;"
        viewBox="0 0 64 64"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <style type="text/css">
                .st0 {
                    fill: var(--ui-svg-bg, red);
                    transition: fill 0.25s linear;
                }
                .st1 {
                    opacity: 0.2;
                }
                .st2 {
                    fill: var(--ui-svg-bg, red);
                    transition: fill 0.25s linear;
                }
                .st3 {
                    fill: none;
                    stroke: var(--ui-svg-fg, currentColor);
                    stroke-width: 4;
                    stroke-linecap: round;
                    stroke-miterlimit: 10;
                    transition: fill 0.25s linear;
                }
            </style>
            <circle class="st0" cx="32" cy="32" r="32"></circle>
            <g class="st1">
                <path
                    class="st2"
                    d="M32,52c-9.9,0-18-8.1-18-18c0-6.4,3.4-12.3,8.9-15.5c1-0.6,2.2-0.2,2.7,0.7c0.6,1,0.2,2.2-0.7,2.7 C20.7,24.4,18,29.1,18,34c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14c0-5.1-2.7-9.7-7.2-12.2c-1-0.5-1.3-1.8-0.8-2.7 c0.5-1,1.8-1.3,2.7-0.8C46.5,21.5,50,27.5,50,34C50,43.9,41.9,52,32,52z"
                ></path>
            </g>
            <g class="st1">
                <path
                    class="st2"
                    d="M32,36c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2v20C34,35.1,33.1,36,32,36z"
                ></path>
            </g>
            <path
                class="st3"
                d="M39.8,18c4.9,2.7,8.2,8,8.2,14c0,8.8-7.2,16-16,16c-8.8,0-16-7.2-16-16c0-5.9,3.2-11,7.9-13.8"
            ></path>
            <line class="st3" x1="32" y1="32" x2="32" y2="12"></line>
        </g>
    </svg>
`,rs=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M18.75 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H5.25"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20V12Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V7H6V4Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M8.5 13.5H15.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M8.5 18.5H15.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M8.5 16H15.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,is=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill=""></rect>
            <path
                d="M21.3687 13.5827C21.4144 13.3104 21.2306 13.0526 20.9583 13.0069C20.686 12.9612 20.4281 13.1449 20.3825 13.4173L21.3687 13.5827ZM12 20.5C7.30558 20.5 3.5 16.6944 3.5 12H2.5C2.5 17.2467 6.75329 21.5 12 21.5V20.5ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5V2.5C6.75329 2.5 2.5 6.75329 2.5 12H3.5ZM12 3.5C15.3367 3.5 18.2252 5.4225 19.6167 8.22252L20.5122 7.77748C18.9583 4.65062 15.7308 2.5 12 2.5V3.5ZM20.3825 13.4173C19.7081 17.437 16.2112 20.5 12 20.5V21.5C16.7077 21.5 20.6148 18.0762 21.3687 13.5827L20.3825 13.4173Z"
                fill="currentColor"
            ></path>
            <path
                d="M20.4716 2.42157V8.07843H14.8147"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Ni=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <g clip-path="url(#clip0_15_152)">
                <rect width="24" height="24" fill="none"></rect>
                <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
                <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="currentColor"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_15_152">
                    <rect width="24" height="24" fill="none"></rect>
                </clipPath>
            </defs>
        </g>
    </svg>
`,ns=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M13.5 2L13.9961 1.93798C13.9649 1.68777 13.7522 1.5 13.5 1.5V2ZM10.5 2V1.5C10.2478 1.5 10.0351 1.68777 10.0039 1.93798L10.5 2ZM13.7747 4.19754L13.2786 4.25955C13.3047 4.46849 13.4589 4.63867 13.6642 4.68519L13.7747 4.19754ZM16.2617 5.22838L15.995 5.6513C16.1731 5.76362 16.4024 5.75233 16.5687 5.62306L16.2617 5.22838ZM18.0104 3.86826L18.364 3.51471C18.1857 3.3364 17.9025 3.31877 17.7034 3.47359L18.0104 3.86826ZM20.1317 5.98958L20.5264 6.29655C20.6812 6.09751 20.6636 5.81434 20.4853 5.63603L20.1317 5.98958ZM18.7716 7.73831L18.3769 7.43134C18.2477 7.59754 18.2364 7.82693 18.3487 8.00503L18.7716 7.73831ZM19.8025 10.2253L19.3148 10.3358C19.3613 10.5411 19.5315 10.6953 19.7404 10.7214L19.8025 10.2253ZM22 10.5H22.5C22.5 10.2478 22.3122 10.0351 22.062 10.0039L22 10.5ZM22 13.5L22.062 13.9961C22.3122 13.9649 22.5 13.7522 22.5 13.5H22ZM19.8025 13.7747L19.7404 13.2786C19.5315 13.3047 19.3613 13.4589 19.3148 13.6642L19.8025 13.7747ZM18.7716 16.2617L18.3487 15.995C18.2364 16.1731 18.2477 16.4025 18.3769 16.5687L18.7716 16.2617ZM20.1317 18.0104L20.4853 18.364C20.6636 18.1857 20.6812 17.9025 20.5264 17.7034L20.1317 18.0104ZM18.0104 20.1317L17.7034 20.5264C17.9025 20.6812 18.1857 20.6636 18.364 20.4853L18.0104 20.1317ZM16.2617 18.7716L16.5687 18.3769C16.4024 18.2477 16.1731 18.2364 15.995 18.3487L16.2617 18.7716ZM13.7747 19.8025L13.6642 19.3148C13.4589 19.3613 13.3047 19.5315 13.2786 19.7404L13.7747 19.8025ZM13.5 22V22.5C13.7522 22.5 13.9649 22.3122 13.9961 22.062L13.5 22ZM10.5 22L10.0039 22.062C10.0351 22.3122 10.2478 22.5 10.5 22.5V22ZM10.2253 19.8025L10.7214 19.7404C10.6953 19.5315 10.5411 19.3613 10.3358 19.3148L10.2253 19.8025ZM7.73832 18.7716L8.00504 18.3487C7.82694 18.2364 7.59756 18.2477 7.43135 18.3769L7.73832 18.7716ZM5.98959 20.1317L5.63604 20.4853C5.81435 20.6636 6.09752 20.6812 6.29656 20.5264L5.98959 20.1317ZM3.86827 18.0104L3.4736 17.7034C3.31878 17.9025 3.33641 18.1857 3.51472 18.364L3.86827 18.0104ZM5.22839 16.2617L5.62307 16.5687C5.75234 16.4025 5.76363 16.1731 5.65131 15.995L5.22839 16.2617ZM4.19754 13.7747L4.68519 13.6642C4.63867 13.4589 4.46849 13.3047 4.25955 13.2786L4.19754 13.7747ZM2 13.5H1.5C1.5 13.7522 1.68777 13.9649 1.93798 13.9961L2 13.5ZM2 10.5L1.93798 10.0039C1.68777 10.0351 1.5 10.2478 1.5 10.5H2ZM4.19754 10.2253L4.25955 10.7214C4.46849 10.6953 4.63867 10.5411 4.68519 10.3358L4.19754 10.2253ZM5.22839 7.73831L5.65131 8.00503C5.76363 7.82693 5.75234 7.59755 5.62307 7.43134L5.22839 7.73831ZM3.86827 5.98959L3.51472 5.63603C3.33641 5.81434 3.31878 6.09751 3.47359 6.29656L3.86827 5.98959ZM5.98959 3.86827L6.29656 3.47359C6.09752 3.31878 5.81434 3.33641 5.63604 3.51471L5.98959 3.86827ZM7.73832 5.22839L7.43135 5.62306C7.59755 5.75233 7.82694 5.76363 8.00504 5.6513L7.73832 5.22839ZM10.2253 4.19754L10.3358 4.68519C10.5411 4.63867 10.6953 4.46849 10.7214 4.25955L10.2253 4.19754ZM13.5 1.5H10.5V2.5H13.5V1.5ZM14.2708 4.13552L13.9961 1.93798L13.0039 2.06202L13.2786 4.25955L14.2708 4.13552ZM16.5284 4.80547C15.7279 4.30059 14.8369 3.92545 13.8851 3.70989L13.6642 4.68519C14.503 4.87517 15.2886 5.20583 15.995 5.6513L16.5284 4.80547ZM16.5687 5.62306L18.3174 4.26294L17.7034 3.47359L15.9547 4.83371L16.5687 5.62306ZM17.6569 4.22182L19.7782 6.34314L20.4853 5.63603L18.364 3.51471L17.6569 4.22182ZM19.7371 5.68261L18.3769 7.43134L19.1663 8.04528L20.5264 6.29655L19.7371 5.68261ZM20.2901 10.1149C20.0746 9.16313 19.6994 8.27213 19.1945 7.47158L18.3487 8.00503C18.7942 8.71138 19.1248 9.49695 19.3148 10.3358L20.2901 10.1149ZM22.062 10.0039L19.8645 9.72917L19.7404 10.7214L21.938 10.9961L22.062 10.0039ZM22.5 13.5V10.5H21.5V13.5H22.5ZM19.8645 14.2708L22.062 13.9961L21.938 13.0039L19.7404 13.2786L19.8645 14.2708ZM19.1945 16.5284C19.6994 15.7279 20.0746 14.8369 20.2901 13.8851L19.3148 13.6642C19.1248 14.503 18.7942 15.2886 18.3487 15.995L19.1945 16.5284ZM20.5264 17.7034L19.1663 15.9547L18.3769 16.5687L19.7371 18.3174L20.5264 17.7034ZM18.364 20.4853L20.4853 18.364L19.7782 17.6569L17.6569 19.7782L18.364 20.4853ZM15.9547 19.1663L17.7034 20.5264L18.3174 19.7371L16.5687 18.3769L15.9547 19.1663ZM13.8851 20.2901C14.8369 20.0746 15.7279 19.6994 16.5284 19.1945L15.995 18.3487C15.2886 18.7942 14.503 19.1248 13.6642 19.3148L13.8851 20.2901ZM13.9961 22.062L14.2708 19.8645L13.2786 19.7404L13.0039 21.938L13.9961 22.062ZM10.5 22.5H13.5V21.5H10.5V22.5ZM9.72917 19.8645L10.0039 22.062L10.9961 21.938L10.7214 19.7404L9.72917 19.8645ZM7.4716 19.1945C8.27214 19.6994 9.16314 20.0746 10.1149 20.2901L10.3358 19.3148C9.49696 19.1248 8.71139 18.7942 8.00504 18.3487L7.4716 19.1945ZM6.29656 20.5264L8.04529 19.1663L7.43135 18.3769L5.68262 19.7371L6.29656 20.5264ZM3.51472 18.364L5.63604 20.4853L6.34315 19.7782L4.22183 17.6569L3.51472 18.364ZM4.83372 15.9547L3.4736 17.7034L4.26295 18.3174L5.62307 16.5687L4.83372 15.9547ZM3.70989 13.8851C3.92545 14.8369 4.30059 15.7279 4.80547 16.5284L5.65131 15.995C5.20584 15.2886 4.87517 14.503 4.68519 13.6642L3.70989 13.8851ZM1.93798 13.9961L4.13552 14.2708L4.25955 13.2786L2.06202 13.0039L1.93798 13.9961ZM1.5 10.5V13.5H2.5V10.5H1.5ZM4.13552 9.72917L1.93798 10.0039L2.06202 10.9961L4.25955 10.7214L4.13552 9.72917ZM4.80547 7.47159C4.30059 8.27213 3.92545 9.16313 3.70989 10.1149L4.68519 10.3358C4.87517 9.49696 5.20583 8.71138 5.65131 8.00503L4.80547 7.47159ZM3.47359 6.29656L4.83371 8.04528L5.62307 7.43134L4.26295 5.68262L3.47359 6.29656ZM5.63604 3.51471L3.51472 5.63603L4.22182 6.34314L6.34314 4.22182L5.63604 3.51471ZM8.04529 4.83371L6.29656 3.47359L5.68262 4.26294L7.43135 5.62306L8.04529 4.83371ZM10.1149 3.70989C9.16313 3.92545 8.27214 4.30059 7.4716 4.80547L8.00504 5.6513C8.71139 5.20583 9.49696 4.87517 10.3358 4.68519L10.1149 3.70989ZM10.0039 1.93798L9.72917 4.13552L10.7214 4.25955L10.9961 2.06202L10.0039 1.93798Z"
                fill="currentColor"
            ></path>
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                stroke-linejoin="round"
            ></circle>
        </g>
    </svg>
`,ss=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <g clip-path="url(#clip0_15_72)">
                <rect width="24" height="24" fill="none"></rect>
                <circle
                    cx="7"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
                <circle
                    cx="17"
                    cy="6"
                    r="2"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
                <path d="M15 7L8.5 11" stroke="currentColor"></path>
                <circle
                    cx="17"
                    cy="18"
                    r="2"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
                <path d="M8.5 13.5L15 17" stroke="currentColor"></path>
            </g>
            <defs>
                <clipPath id="clip0_15_72">
                    <rect width="24" height="24" fill="none"></rect>
                </clipPath>
            </defs>
        </g>
    </svg>
`,os=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <g filter="url(#filter0_d_15_286)">
                <path
                    d="M3 8.26667V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V8.26667M3 8.26667V5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V8.26667M3 8.26667H21"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></path>
            </g>
            <g filter="url(#filter1_d_15_286)">
                <circle
                    cx="12"
                    cy="14"
                    r="2"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
            </g>
            <g filter="url(#filter2_d_15_286)">
                <path
                    d="M7 2V5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </g>
            <g filter="url(#filter3_d_15_286)">
                <path
                    d="M17 2V5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_15_286"
                    x="1.5"
                    y="3.5"
                    width="21"
                    height="19"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_286"
                    ></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_286"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter1_d_15_286"
                    x="8.5"
                    y="11.5"
                    width="7"
                    height="7"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_286"
                    ></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_286"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter2_d_15_286"
                    x="5.5"
                    y="1.5"
                    width="3"
                    height="6"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_286"
                    ></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_286"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter3_d_15_286"
                    x="15.5"
                    y="1.5"
                    width="3"
                    height="6"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_286"
                    ></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_286"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </g>
    </svg>
`,as=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M5 7.5H19L18 21H6L5 7.5Z"
                stroke="currentColor"
                stroke-linejoin="round"
            ></path>
            <path
                d="M15.5 9.5L15 19"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M12 9.5V19"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M8.5 9.5L9 19"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8"
                stroke="currentColor"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,ls=Y`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M12 15L12 3M12 3L8 7M12 3L16 7"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,cs=Object.freeze(Object.defineProperty({__proto__:null,bookmark:Vn,checkmark:Gn,chevronDown:Dr,chevronLeft:Wn,close:Ui,documentNew:qn,download:Kn,drag:Yn,menu:Xn,moreVertical:Jn,pen:Qn,plus:ts,power:es,printer:rs,refresh:is,search:Ni,settings:ns,share:ss,today:os,trash:as,upload:ls},Symbol.toStringTag,{value:"Module"})),Pt=Object.freeze(Object.defineProperty({__proto__:null,smoothieLineIcons:cs},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs={attribute:!0,type:String,converter:Ve,reflect:!1,hasChanged:Rr},us=(o=hs,t,e)=>{const{kind:i,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(e.name,o),i==="accessor"){const{name:n}=e;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,h,o)},init(l){return l!==void 0&&this.P(n,void 0,o),l}}}if(i==="setter"){const{name:n}=e;return function(l){const h=this[n];t.call(this,l),this.requestUpdate(n,h,o)}}throw Error("Unsupported decorator location: "+i)};function H(o){return(t,e)=>typeof e=="object"?us(o,t,e):((i,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,s):void 0})(o,t,e)}var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,Ir=(o,t,e,i)=>{for(var r=i>1?void 0:i?ps(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ds(t,e,r),r};let qe=class extends st{constructor(){super(...arguments),this.variant="info",this.message="",this.role="button"}static get styles(){return lt`
            :host {
                position: relative;

                flex: 1;
                display: block;

                border-radius: var(--ui-radius);
                border: 1px solid hsl(var(--ui-hsl-borderColor));

                padding: var(--ui-spacing);

                width: 28rem;
                max-width: 100%;

                cursor: pointer;
            }

            :host([variant="info"]) {
                background-color: hsl(var(--ui-hsl-info));
                color: hsl(var(--ui-hsl-info-text));
            }

            :host([variant="warning"]) {
                background-color: hsl(48, 100%, 50%);
                background-color: hsl(var(--ui-hsl-warning));
                color: hsl(var(--ui-hsl-warning-text));
            }

            :host([variant="error"]) {
                background-color: hsl(var(--ui-hsl-error));
                color: hsl(var(--ui-hsl-error-text));
            }

            ui-text {
                flex-grow: 1;
            }
        `}render(){return Y`
            <ui-text style="font-size: 0.9rem;">${this.message}</ui-text>
        `}firstUpdated(o){super.firstUpdated(o),this.addEventListener("click",()=>{this.parentElement&&this.parentElement.removeChild(this)})}};Ir([H({type:String,attribute:"variant",reflect:!0})],qe.prototype,"variant",2);Ir([H({type:String,attribute:"message"})],qe.prototype,"message",2);qe=Ir([ot("ui-alert")],qe);var fs=(o,t,e,i)=>{for(var r=t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=n(r)||r);return r};let fi=class extends st{static get styles(){return lt`
            :host {
                display: block;

                z-index: 999;
                position: fixed !important;
                right: 0;
                bottom: 0;

                width: fit-content;
                max-width: 100%;
                height: fit-content;
                max-height: 100%;

                background: transparent;

                border-radius: var(--ui-radius);

                overflow: auto;

                /* Disable touch actions and pointer events */

                pointer-events: none;

                -ms-touch-action: none;
                touch-action: none;
            }

            ui-flex-grid {
                padding: var(--ui-spacing);
            }

            ::slotted(*) {
                pointer-events: auto;

                -ms-touch-action: auto;
                touch-action: auto;
            }
        `}render(){return Y`
            <ui-flex-grid class="container" gap="0.25rem">
                <slot></slot>
            </ui-flex-grid>
        `}addAlert(o){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".container");return e&&e.append(o),()=>this.removeAlert(o)}removeAlert(o){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".container");e&&e.removeChild(o)}};fi=fs([ot("ui-alerts")],fi);var gs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,Tr=(o,t,e,i)=>{for(var r=i>1?void 0:i?ms(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&gs(t,e,r),r};let Ke=class extends st{constructor(){super(...arguments),this.position="top",this.fixed=!1}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            :host {
                display: block;
                width: 100%;
                overflow: hidden;
                padding: calc(var(--ui-spacing) / 2);

                background-color: hsla(
                    var(--ui-hsl-backdrop),
                    var(--ui-hsl-backdrop-alpha)
                );
                -webkit-backdrop-filter: var(--ui-backdropFilter);
                backdrop-filter: var(--ui-backdropFilter);
            }

            :host([position="top"]),
            :host([position="bottom"]) {
                position: absolute !important;
                left: 0;
                right: 0;
                height: var(--ui-app-bar-height);
            }

            :host([position="top"]):host([fixed]),
            :host([position="bottom"]):host([fixed]) {
                position: fixed !important;
            }

            :host([position="top"]) {
                top: 0;
                border-bottom: 1px solid hsl(var(--ui-hsl-borderColor));
            }

            :host([position="bottom"]) {
                bottom: 0;
                border-top: 1px solid hsl(var(--ui-hsl-borderColor));
            }

            :host > ui-flex-grid-row {
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: space-between;
            }

            :host > ui-flex-grid-row > * {
                height: 100%;
                width: 100%;
            }

            :host > ui-flex-grid-row > *:nth-child(1),
            :host > ui-flex-grid-row > *:nth-child(3) {
                width: fit-content;
            }

            ::slotted([slot="left"]) {
                margin-left: 0 !important;
                justify-content: flex-start;
            }

            ::slotted([slot="center"]) {
                width: 100%;
            }

            ::slotted([slot="right"]) {
                margin-right: 0 !important;
                justify-content: flex-end;
            }
        `}render(){return Y`
            <ui-flex-grid-row gap="0.25rem">
                <ui-flex-grid-row gap="0.25rem" align="center">
                    <slot name="left"></slot>
                </ui-flex-grid-row>

                <ui-flex-grid-row
                    gap="0.25rem"
                    style="overflow: hidden;"
                    align="center"
                >
                    <slot name="center"></slot>
                </ui-flex-grid-row>

                <ui-flex-grid-row gap="0.25rem" align="center">
                    <slot name="right"></slot>
                </ui-flex-grid-row>
            </ui-flex-grid-row>
        `}content(o){return[...this.querySelectorAll(`[slot="${o}"]`)]}contentName(o){return this.querySelector(`[name="${o}"]`)}};Tr([H({type:String,attribute:"position",reflect:!0})],Ke.prototype,"position",2);Tr([H({type:Boolean,attribute:"fixed",reflect:!0})],Ke.prototype,"fixed",2);Ke=Tr([ot("ui-app-bar")],Ke);var ys=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,Mr=(o,t,e,i)=>{for(var r=i>1?void 0:i?vs(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ys(t,e,r),r};let Ye=class extends st{constructor(){super(...arguments),this.name="",this.hidden=!1}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            :host {
                display: block;
                flex: 1;
            }

            :host([hidden]) {
                display: none;
            }

            ::slotted(*) {
                flex-grow: 1;
            }
        `}render(){return Y`<slot></slot>`}content(){return[...this.children]}contentAt(o=0){return this.children[o]}show(){this.hidden=!1}hide(){this.hidden=!0}};Mr([H({type:String,attribute:"name",reflect:!0})],Ye.prototype,"name",2);Mr([H({type:Boolean,attribute:"hidden",reflect:!0})],Ye.prototype,"hidden",2);Ye=Mr([ot("ui-app-bar-item")],Ye);var bs=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,Pe=(o,t,e,i)=>{for(var r=i>1?void 0:i?_s(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&bs(t,e,r),r};let Gt=class extends st{constructor(){super(...arguments),this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return lt`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;

                position: relative;

                padding: var(--ui-spacing) calc(var(--ui-spacing) * 2.5);

                outline: none;
                border: 1px solid currentColor;
                border-radius: var(--ui-radius);

                user-select: none;
                overflow: hidden;
                cursor: pointer;

                text-transform: capitalize;
                font-size: 1.1rem;
                font-family: var(--ui-fontFamily);
                font-variation-settings: var(--ui-button-fontVariation);
            }

            :host([variant="full"]) {
                border: none;
            }

            :host([variant="full"][color="primary"]) {
                background-color: hsl(var(--ui-hsl-primary));
                color: hsl(var(--ui-hsl-primary-text));
            }

            :host([variant="full"][color="secondary"]) {
                background-color: hsl(var(--ui-hsl-secondary));
                color: hsl(var(--ui-hsl-secondary-text));
            }

            :host([variant="full"][color="destructive"]) {
                background-color: hsl(var(--ui-hsl-destructive));
                color: hsl(var(--ui-hsl-destructive-text));
            }

            :host([variant="outline"]) {
                border-color: currentColor;
                background-color: transparent;
            }

            :host([variant="outline"][color="primary"]) {
                color: hsl(var(--ui-hsl-primary));
            }

            :host([variant="outline"][color="secondary"]) {
                color: hsl(var(--ui-hsl-secondary));
            }

            :host([variant="outline"][color="destructive"]) {
                color: hsl(var(--ui-hsl-destructive));
            }

            :host([variant="ghost"]) {
                border-color: transparent;
                background-color: transparent;
            }

            :host([variant="ghost"][color="primary"]) {
                color: hsl(var(--ui-hsl-primary));
            }

            :host([variant="ghost"][color="secondary"]) {
                color: hsl(var(--ui-hsl-secondary));
            }

            :host([variant="ghost"][color="destructive"]) {
                color: hsl(var(--ui-hsl-destructive));
            }

            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:active) {
                background-color: transparent;
                opacity: 0.25;
                cursor: default;
                pointer-events: none;
            }
        `}render(){return Y`<slot></slot>`}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),i!==null&&(this.rippleCleanUp=sr(this));break}}};Pe([H({type:String,attribute:"color",reflect:!0})],Gt.prototype,"color",2);Pe([H({type:String,attribute:"variant",reflect:!0})],Gt.prototype,"variant",2);Pe([H({type:Boolean,attribute:"disabled"})],Gt.prototype,"disabled",2);Pe([H({type:Boolean,attribute:"ripple"})],Gt.prototype,"ripple",2);Gt=Pe([ot("ui-button")],Gt);const ws=Gt;var ks=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,ze=(o,t,e,i)=>{for(var r=i>1?void 0:i?xs(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ks(t,e,r),r};let ie=class extends st{constructor(){super(...arguments),this.ghost=!1,this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return lt`
            :host {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 2.5rem;
                height: 2.5rem;
                padding: calc(var(--ui-spacing) / 2);
                border: 1px solid currentColor;
                border-radius: var(--ui-radius);
                outline: none;
                overflow: hidden;
                cursor: pointer;
                user-select: none;
                font-size: 1.1rem;
                font-family: var(--ui-fontFamily);
                font-variation-settings: var(--ui-button-fontVariation);
                transition: color 0.5s linear;
            }

            :host([ghost]) {
                border-color: transparent !important;
                box-shadow: none;
            }

            :host([color="primary"]) {
                color: hsl(var(--ui-hsl-primary));
                border-color: hsl(var(--ui-hsl-primary));
            }

            :host([color="secondary"]) {
                color: hsl(var(--ui-hsl-secondary));
                border-color: hsl(var(--ui-hsl-secondary));
            }

            :host([color="destructive"]) {
                color: hsl(var(--ui-hsl-destructive));
                border-color: hsl(var(--ui-hsl-destructive));
            }

            /* :disabled */

            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:active) {
                opacity: 0.25;
                cursor: default;
                pointer-events: none;
            }

            ui-svg {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `}render(){return Y`<slot></slot>`}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),i!==null&&(this.rippleCleanUp=sr(this));break}}};ze([H({type:String,attribute:"color",reflect:!0})],ie.prototype,"color",2);ze([H({type:Boolean,attribute:"ghost"})],ie.prototype,"ghost",2);ze([H({type:Boolean,attribute:"disabled"})],ie.prototype,"disabled",2);ze([H({type:Boolean,attribute:"ripple"})],ie.prototype,"ripple",2);ie=ze([ot("ui-icon-button")],ie);var Ss=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,Yt=(o,t,e,i)=>{for(var r=i>1?void 0:i?Cs(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Ss(t,e,r),r};let Dt=class extends st{constructor(){super(...arguments),this.title="",this.fullscreen="",this.noFooter="",this.open=!1,this.modal=!1,this.inert=!1}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            dialog {
                z-index: 998; /* UIAlerts z-index is 999 */

                position: fixed !important;
                top: 50%;
                left: 50%;

                max-width: 100%;
                max-height: 100%;

                margin: 0;
                padding: 0;

                border: none;
                outline: none;

                background-color: transparent;

                transform: translate(-50%, -50%);

                /* Remove Scrollbar */
                -ms-overflow-style: none;
                scrollbar-width: none;
                scroll-behavior: smooth;
            }

            /* Remove Scrollbar */
            dialog::-webkit-scrollbar {
                display: none;
            }

            dialog::backdrop {
                background-color: hsla(
                    var(--ui-hsl-backdrop),
                    var(--ui-hsl-backdrop-alpha)
                );
                -webkit-backdrop-filter: var(--ui-backdropFilter);
                backdrop-filter: var(--ui-backdropFilter);
            }

            :host([fullscreen]) dialog {
                width: 100%;
                height: 100%;
            }

            dialog > .container {
                background-color: hsl(var(--ui-hsl-bg));
                color: hsl(var(--ui-hsl-text));

                border: 1px solid hsl(var(--ui-hsl-borderColor));
                border-radius: var(--ui-radius);

                padding: var(--ui-spacing);

                display: flex;
                flex-direction: column;
                justify-content: space-between;

                position: relative;
            }

            :host([fullscreen]) dialog > .container {
                width: calc(100% - var(--ui-spacing) * 2);
                height: calc(100% - var(--ui-spacing) * 2);

                margin: var(--ui-spacing);
            }

            /*
             * Header Styles
             */

            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;

                border-top-right-radius: var(--ui-radius);
                border-top-left-radius: var(--ui-radius);

                width: 100%;
                height: var(--ui-dialog-header-height);
            }

            :host([fullscreen]) .header {
                z-index: 15;
                position: absolute;
                top: var(--ui-spacing);
                right: var(--ui-spacing);
                left: var(--ui-spacing);
                width: calc(100% - var(--ui-spacing) * 2);
            }

            /*
             * Content Styles
             */

            .content {
                padding: var(--ui-spacing);
                height: fit-content;
                min-width: fit-content;
                width: 100%;
            }

            :host([fullscreen]) .content {
                z-index: 10;
                position: absolute;
                top: calc(var(--ui-dialog-header-height) + var(--ui-spacing));
                bottom: calc(
                    var(--ui-dialog-footer-height) + var(--ui-spacing)
                );
                right: var(--ui-spacing);
                left: var(--ui-spacing);
                padding: unset;
                height: unset;
                width: unset;
                min-width: unset;
            }

            :host([no-footer]) .content {
                bottom: var(--ui-spacing);
            }

            /*
             * Footer Styles
             */

            .footer {
                margin-top: var(--ui-spacing);
                border-bottom-right-radius: var(--ui-radius);
                border-bottom-left-radius: var(--ui-radius);

                width: 100%;
                height: var(--ui-dialog-footer-height);
            }

            :host([fullscreen]) .footer {
                z-index: 15;
                position: absolute;
                right: var(--ui-spacing);
                bottom: var(--ui-spacing);
                left: var(--ui-spacing);
                width: calc(100% - var(--ui-spacing) * 2);
            }

            :host([no-footer]) .footer {
                display: none;
            }

            .footer ui-flex-grid-row {
                height: 100%;
                flex-wrap: nowrap;
                justify-content: flex-end;
                align-items: center;
            }
        `}render(){return Y`
            <dialog
                @cancel=${t=>{t.preventDefault()}}
            >
                <div class="container">
                    <div class="header">
                        <ui-heading level="4">${this.title}</ui-heading>

                        <ui-icon-button
                            style="width: var(--ui-dialog-header-height); height: 100%;"
                            ghost
                            @click=${()=>{this.close()}}
                        >
                            ${Ui}
                        </ui-icon-button>
                    </div>

                    <div class="content">
                        <slot></slot>
                    </div>

                    <div class="footer">
                        <ui-flex-grid-row gap="calc(var(--ui-spacing) / 2)">
                            <slot name="actions"></slot>
                        </ui-flex-grid-row>
                    </div>
                </div>
            </dialog>
        `}updated(t){this.open?this.show():this.close()}show(){this.open||(this.open=!0);const t=this.shadowRoot.querySelector("dialog");if(t===null)return;const e=t.inert;t.inert=this.inert,this.modal?t.showModal():t.show(),t.inert=e,this.dispatchEvent(new Event("open"))}close(){this.dispatchEvent(new Event("close")),this.shadowRoot.querySelector("dialog").close()}addDialogActionButton(t,e){const i=new qt;i.flex=(e==null?void 0:e.flex)||1,i.slot="actions",this.appendChild(i);let r=new ws;return r.innerHTML=t,r.variant=e==null?void 0:e.variant,r.color=e==null?void 0:e.color,r.onclick=(e==null?void 0:e.onClick)||null,i.appendChild(r),r}};Yt([H({type:String,attribute:"title",reflect:!0})],Dt.prototype,"title",2);Yt([H({type:Boolean,attribute:"fullscreen",reflect:!0})],Dt.prototype,"fullscreen",2);Yt([H({type:Boolean,attribute:"no-footer",reflect:!0})],Dt.prototype,"noFooter",2);Yt([H({type:Boolean,attribute:"open",reflect:!0})],Dt.prototype,"open",2);Yt([H({type:Boolean,attribute:"modal",reflect:!0})],Dt.prototype,"modal",2);Yt([H({type:Boolean,attribute:"inert",reflect:!0})],Dt.prototype,"inert",2);Dt=Yt([ot("ui-dialog")],Dt);var $s=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Re=(o,t,e,i)=>{for(var r=i>1?void 0:i?As(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&$s(t,e,r),r};const Es="0";let Wt=class extends st{constructor(){super(...arguments),this.title="",this.gap=Es,this.open=!1,this.noFold=!1}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            ::selection {
                background-color: hsl(var(--ui-hsl-primary));
                color: hsl(var(--ui-hsl-primary-text));
            }

            :host {
                display: block;
                margin: 0;
                list-style: none;
                padding: var(--ui-spacing);
                overflow: hidden;
            }

            .fold {
                display: flex;
                position: relative;
                border-radius: var(--ui-radius);
                cursor: pointer;
            }

            :host([no-fold]) .fold {
                display: none;
            }

            .fold .icon {
                transition: transform 0.25s ease;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :host(:not([open])) .fold .icon {
                transform: rotate(-90deg);
            }

            :host(:not([open])):host(:not([no-fold])) ::slotted(*) {
                display: none !important;
            }
        `}render(){return Y`
            <ui-flex-grid gap="${this.gap}">
                <ui-drawer-group-item
                    class="fold"
                    role="button"
                    @click=${async()=>{this.open=!this.open,setTimeout(()=>{this.open?this.dispatchEvent(new Event("unfold")):this.dispatchEvent(new Event("fold"))})}}
                >
                    <ui-flex-grid-row>
                        <ui-flex-grid-item
                            align="center"
                            style="padding-right: var(--ui-spacing);"
                        >
                            <ui-heading level="4">${this.title}</ui-heading>
                        </ui-flex-grid-item>

                        <ui-flex-grid-item class="icon" align="center" flex="0">
                            <ui-svg style="width: 2.5rem; height: 2.5rem;">
                                ${Dr}
                            </ui-svg>
                        </ui-flex-grid-item>
                    </ui-flex-grid-row>
                </ui-drawer-group-item>

                <slot></slot>
            </ui-flex-grid>
        `}};Re([H({type:String,attribute:"title",reflect:!0})],Wt.prototype,"title",2);Re([H({type:String,attribute:"gap"})],Wt.prototype,"gap",2);Re([H({type:Boolean,attribute:"open",reflect:!0})],Wt.prototype,"open",2);Re([H({type:Boolean,attribute:"no-fold",reflect:!0})],Wt.prototype,"noFold",2);Wt=Re([ot("ui-drawer-group")],Wt);const Ls=Wt;var Os=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,Ur=(o,t,e,i)=>{for(var r=i>1?void 0:i?Ps(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Os(t,e,r),r};let Xe=class extends st{constructor(){super(...arguments),this.open=!1,this.role="button",this.handleUnfold=o=>{o.currentTarget.scrollIntoView(!0)}}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            :host {
                display: block;

                position: fixed !important;
                z-index: 150;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;

                overflow: hidden;

                transition: left 0s ease 0.25s;
            }

            :host([open]) {
                left: 0;
                transition: none;
            }

            :host(:not([open])) {
            }

            aside {
                position: absolute;
                z-index: 150;
                top: 0;
                left: -100%;
                width: var(--_width, fit-content);
                max-width: calc(100% - 2.5rem);
                height: 100%;

                overflow-x: hidden;
                overflow-y: scroll;

                border-right: 1px solid hsl(var(--ui-hsl-card-borderColor));

                transition: left 0.5s ease;

                /* Remove Scrollbar */
                -ms-overflow-style: none;
                scrollbar-width: none;
                scroll-behavior: smooth;

                /* Backdrop Blur */
                background-color: hsla(
                    var(--ui-hsl-backdrop),
                    var(--ui-hsl-backdrop-alpha)
                );
                -webkit-backdrop-filter: var(--ui-backdropFilter);
                backdrop-filter: var(--ui-backdropFilter);
            }

            aside::-webkit-scrollbar {
                display: none;
            }

            :host([open]) aside {
                left: 0;
            }
        `}render(){return Y`
            <aside
                @click=${o=>{o.stopPropagation()}}
            >
                <slot></slot>
            </aside>
        `}firstUpdated(o){this.classList.add("has-backdrop-blur"),this.addEventListener("click",()=>{this.open=!1})}updated(o){[...this.children].forEach(async t=>{t instanceof Ls&&t.addEventListener("unfold",this.handleUnfold)})}attributeChangedCallback(o,t,e){switch(super.attributeChangedCallback(o,t,e),o){case"width":e!==null?this.style.setProperty("--_width",e):this.style.removeProperty("--_width");break;case"open":e!==null?(history.pushState(null,"ui-drawer",location.href),this.dispatchEvent(new Event("open"))):this.dispatchEvent(new Event("close"));break}}};Ur([H({type:String,attribute:"width",reflect:!0})],Xe.prototype,"width",2);Ur([H({type:Boolean,attribute:"open",reflect:!0})],Xe.prototype,"open",2);Xe=Ur([ot("ui-drawer")],Xe);var zs=(o,t,e,i)=>{for(var r=t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=n(r)||r);return r};let _r=class extends st{static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            :host {
                width: 100%;

                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;

                padding: var(--ui-spacing) calc(var(--ui-spacing) * 1.5);
            }

            ::slotted(*) {
                width: 100%;
            }
        `}render(){return Y`<slot></slot>`}};_r=zs([ot("ui-drawer-group-item")],_r);const Nr=_r;var Rs=Object.defineProperty,js=Object.getOwnPropertyDescriptor,je=(o,t,e,i)=>{for(var r=i>1?void 0:i?js(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Rs(t,e,r),r};const gi="0";let ne=class extends st{constructor(){super(...arguments),this.gap=gi}static get styles(){return lt`
            :host {
                display: flex;
                flex-flow: column var(--_wrap, nowrap);
                justify-content: var(--_justify);
                align-items: var(--_align);

                position: relative;
                width: 100%;
                height: fit-content;
            }

            :host > ::slotted(*) {
                margin: var(--_gap, 0) 0 !important;
            }

            :host > ::slotted(*:first-child) {
                margin-top: 0 !important;
            }

            :host > ::slotted(*:last-child) {
                margin-bottom: 0 !important;
            }
        `}render(){return Y`<slot></slot>`}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"gap":i?this.style.setProperty("--_gap",i||gi):this.style.removeProperty("--_gap");break;case"justify":i?this.style.setProperty("--_justify",i||""):this.style.removeProperty("--_justify");break;case"align":i?this.style.setProperty("--_align",i||""):this.style.removeProperty("--_align");break;case"wrap":i?this.style.setProperty("--_wrap",i||""):this.style.removeProperty("--_wrap");break}}};je([H({type:String,attribute:"gap"})],ne.prototype,"gap",2);je([H({type:String,attribute:"justify"})],ne.prototype,"justify",2);je([H({type:String,attribute:"align"})],ne.prototype,"align",2);je([H({type:String,attribute:"wrap"})],ne.prototype,"wrap",2);ne=je([ot("ui-flex-grid")],ne);var Bs=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,Be=(o,t,e,i)=>{for(var r=i>1?void 0:i?Ds(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Bs(t,e,r),r};const fr=1;let qt=class extends st{constructor(){super(...arguments),this.flex=fr}static get styles(){return lt`
            :host {
                flex: var(--_flex, ${fr});
                display: flex;
                flex-direction: var(--_direction, row);
                justify-content: var(--_justify);
                align-items: var(--_align);
            }

            ::slotted(*) {
                flex-grow: 1;
            }
        `}render(){return Y`<slot></slot>`}attributeChangedCallback(o,t,e){switch(super.attributeChangedCallback(o,t,e),o){case"flex":this.style.setProperty("--_flex",e||fr.toString());break;case"direction":e?this.style.setProperty("--_direction",e):this.style.removeProperty("--_direction");break;case"justify":e?this.style.setProperty("--_justify",e):this.style.removeProperty("--_justify");break;case"align":e?this.style.setProperty("--_align",e):this.style.removeProperty("--_align");break}}};Be([H({type:Number,attribute:"flex"})],qt.prototype,"flex",2);Be([H({type:String,attribute:"direction",reflect:!0})],qt.prototype,"direction",2);Be([H({type:String,attribute:"justify"})],qt.prototype,"justify",2);Be([H({type:String,attribute:"align"})],qt.prototype,"align",2);qt=Be([ot("ui-flex-grid-item")],qt);var Is=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,De=(o,t,e,i)=>{for(var r=i>1?void 0:i?Ts(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Is(t,e,r),r};const mi="0";let se=class extends st{constructor(){super(...arguments),this.gap=mi}static get styles(){return lt`
            :host {
                display: flex;
                flex-flow: row var(--_wrap, nowrap);
                justify-content: var(--_justify);
                align-items: var(--_align);

                width: 100%;
            }

            :host > ::slotted(*) {
                margin: 0 var(--_gap, 0) !important;
            }

            :host > ::slotted(*:first-child) {
                margin-left: 0 !important;
            }

            :host > ::slotted(*:last-child) {
                margin-right: 0 !important;
            }
        `}render(){return Y`<slot></slot>`}attributeChangedCallback(t,e,i){switch(super.attributeChangedCallback(t,e,i),t){case"gap":i?this.style.setProperty("--_gap",i||mi):this.style.removeProperty("--_gap");break;case"justify":i?this.style.setProperty("--_justify",i||""):this.style.removeProperty("--_justify");break;case"align":i?this.style.setProperty("--_align",i||""):this.style.removeProperty("--_align");break;case"wrap":i?this.style.setProperty("--_wrap",i||""):this.style.removeProperty("--_wrap");break}}};De([H({type:String,attribute:"gap"})],se.prototype,"gap",2);De([H({type:String,attribute:"justify"})],se.prototype,"justify",2);De([H({type:String,attribute:"align"})],se.prototype,"align",2);De([H({type:String,attribute:"wrap"})],se.prototype,"wrap",2);se=De([ot("ui-flex-grid-row")],se);var Ms=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Fi=(o,t,e,i)=>{for(var r=i>1?void 0:i?Us(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Ms(t,e,r),r};let wr=class extends st{constructor(){super(...arguments),this.checked=!1,this.role="checkbox"}static get styles(){return lt`
            :host {
                border-radius: var(--ui-radius);
            }

            input {
                display: inline-block;

                height: 1.5rem;
                width: 1.5rem;

                padding: var(--ui-spacing) calc(var(--ui-spacing) * 2);

                border: 1px solid hsl(var(--ui-hsl-primary));
                border-radius: var(--ui-radius);

                accent-color: hsl(var(--ui-hsl-primary));
                color: hsl(var(--ui-hsl-text));
                background-color: transparent;

                box-shadow: none;
                outline: none;
                cursor: pointer;

                transition: border-color 0.25s linear;
            }

            input:disabled {
                cursor: default;
                user-select: none;
            }
        `}render(){return Y`
            <input
                type="checkbox"
                ?checked=${this.checked}

                @input=${()=>{this.checked=!this.checked}}

                @change=${()=>{this.dispatchEvent(new Event("change",{}))}}
            ></input>
        `}click(){super.click(),this.shadowRoot.querySelector("input").checked=this.checked=!this.checked}};Fi([H({type:Boolean,attribute:"checked",reflect:!0})],wr.prototype,"checked",2);wr=Fi([ot("ui-check")],wr);var Ns=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,Mt=(o,t,e,i)=>{for(var r=i>1?void 0:i?Fs(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Ns(t,e,r),r};let Et=class extends st{constructor(){super(...arguments),this.title="",this.type="",this.value="",this.placeholder="",this.invalid=!1,this.min="",this.max="",this.role="input"}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            ::selection {
                background-color: hsl(var(--ui-hsl-primary));
                color: hsl(var(--ui-hsl-primary-text));
            }

            :host {
                display: block;

                position: relative;
                width: 100%;
                height: fit-content;

                border-radius: var(--ui-radius);
            }

            .container {
                width: 100%;

                border: 1px solid hsl(var(--ui-hsl-borderColor));
                border-radius: var(--ui-radius);

                transition: border-color 0.25s linear;
            }

            .container:has(input:focus) {
                border-color: hsl(var(--ui-hsl-primary));
            }

            :host([invalid]) .container {
                border-color: hsl(var(--ui-hsl-destructive));
            }

            ui-secondary.title {
                display: block;
                padding: 0 var(--ui-spacing);
                font-size: 0.85rem;
            }

            input {
                display: block;

                width: 100%;

                margin: 0;
                padding: var(--ui-spacing) calc(var(--ui-spacing) * 2);

                accent-color: hsl(var(--ui-hsl-primary));
                background-color: transparent;
                color: hsl(var(--ui-hsl-input-text));

                outline: none;
                border: none;
                border-radius: inherit;

                font-size: 0.95rem;
                font-family: var(--ui-fontFamily);
                font-variation-settings: var(--ui-input-fontVariation);
            }

            ui-secondary.title ~ input {
                padding-top: 0;
            }
        `}render(){return Y`
            <div class="container">
                ${this.title?Y`
                          <ui-secondary class="title">
                              ${this.title}
                          </ui-secondary>
                      `:""}
                <input
                    type="${this.type}"
                    value="${this.value}"
                    placeholder="${this.placeholder}"
                    min="${this.min}"
                    max="${this.max}"
                    @input=${t=>{this.value=t.currentTarget.value}}
                    @change=${()=>{this.dispatchEvent(new Event("change"))}}
                />
            </div>
        `}focus(t){super.focus(t),this.shadowRoot.querySelector("input").focus(t)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};Mt([H({type:String,attribute:"title",reflect:!0})],Et.prototype,"title",2);Mt([H({type:String,attribute:"type",reflect:!0})],Et.prototype,"type",2);Mt([H({type:String,attribute:"value"})],Et.prototype,"value",2);Mt([H({type:String,attribute:"placeholder",reflect:!0})],Et.prototype,"placeholder",2);Mt([H({type:Boolean,attribute:"invalid",reflect:!0})],Et.prototype,"invalid",2);Mt([H({type:String,attribute:"min",reflect:!0})],Et.prototype,"min",2);Mt([H({type:String,attribute:"max",reflect:!0})],Et.prototype,"max",2);Et=Mt([ot("ui-input")],Et);var Hs=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,Ot=(o,t,e,i)=>{for(var r=i>1?void 0:i?Zs(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Hs(t,e,r),r};let St=class extends st{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.noSubmit=!1,this.storage=!1,this.storagePrefix="",this.storageKey="",this.role="search"}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            ::selection {
                background-color: hsl(var(--ui-hsl-primary));
                color: hsl(var(--ui-hsl-primary-text));
            }

            :host {
                display: block;

                position: relative;
                width: 100%;
                height: fit-content;
            }

            .container {
                position: relative;
                width: 100%;

                border: none;
                border: 1px solid hsl(var(--ui-hsl-borderColor));
                border-radius: var(--ui-radius);

                transition: border-color 0.25s linear;
            }

            .container:has(input:focus) {
                border-color: hsl(var(--ui-hsl-primary));
            }

            :host([invalid]) .container {
                border-color: hsl(var(--ui-hsl-destructive));
            }

            ui-secondary.title {
                display: block;
                margin-right: 2.5rem;
                padding: 0 var(--ui-spacing);
                font-size: 0.85rem;
            }

            input {
                display: block;

                width: 100%;

                margin: 0;
                padding: var(--ui-spacing) calc(var(--ui-spacing) * 2);

                accent-color: hsl(var(--ui-hsl-primary));
                background-color: transparent;
                color: hsl(var(--ui-hsl-input-text));

                outline: none;
                border: none;
                border-radius: inherit;

                font-size: 0.9rem;
                font-family: var(--ui-fontFamily);
                font-variation-settings: var(--ui-input-fontVariation);
            }

            ui-secondary.title ~ input {
                padding-top: 0;
            }

            :host(:not([no-submit])) input {
                width: calc(100% - 2rem);
            }

            ui-icon-button {
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;

                display: flex;
                justify-content: center;
                align-items: center;

                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }

            :host([no-submit]) ui-icon-button {
                display: none;
            }
        `}render(){return Y`
            <div class="container has-backdrop-blur">
                ${this.title?Y`<ui-secondary class="title">
                          ${this.title}
                      </ui-secondary>`:""}

                <input
                    name="search"
                    type="search"
                    value="${this.value}"
                    @keydown=${t=>{var e,i;this.noSubmit||t.key!=="Enter"||(i=(e=this.shadowRoot)==null?void 0:e.querySelector('ui-icon-button[name="submit"]'))==null||i.click()}}
                    @input=${t=>{this.value=t.currentTarget.value,this.storage&&(localStorage.setItem(this.storagePrefix+this.storageKey,this.value),this.noSubmit&&this.dispatchEvent(new Event("change")))}}
                />

                <ui-icon-button
                    name="submit"
                    for="search"
                    ghost
                    ripple
                    @click=${()=>{this.dispatchEvent(new Event("change"))}}
                >
                    ${Ni}
                </ui-icon-button>
            </div>
        `}firstUpdated(t){if(super.firstUpdated(t),this.storage){const e=localStorage.getItem(this.storagePrefix+this.storageKey)||this.value;this.value=e,this.dispatchEvent(new Event("storage"))}}focus(t){super.focus(t),this.shadowRoot.querySelector("input").focus(t)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};Ot([H({type:String,attribute:"title",reflect:!0})],St.prototype,"title",2);Ot([H({type:String,attribute:"value"})],St.prototype,"value",2);Ot([H({type:String,attribute:"placeholder",reflect:!0})],St.prototype,"placeholder",2);Ot([H({type:Boolean,attribute:"invalid",reflect:!0})],St.prototype,"invalid",2);Ot([H({type:Boolean,attribute:"no-submit",reflect:!0})],St.prototype,"noSubmit",2);Ot([H({type:Boolean,attribute:"storage",reflect:!0})],St.prototype,"storage",2);Ot([H({type:String,attribute:"storage-prefix",reflect:!0})],St.prototype,"storagePrefix",2);Ot([H({type:String,attribute:"storage-key",reflect:!0})],St.prototype,"storageKey",2);St=Ot([ot("ui-search")],St);var Vs=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,Fr=(o,t,e,i)=>{for(var r=i>1?void 0:i?Gs(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Vs(t,e,r),r};let Je=class extends st{constructor(){super(...arguments),this.open=!1,this.keepOpen=!1}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            :host {
                --_lineHeight: 1.25;
                line-height: var(--_lineHeight) !important;

                position: relative;
                display: block;

                width: 100%;
                height: calc(1em * var(--_lineHeight) + var(--ui-spacing) * 2);
                transition: height 0.25s ease;

                background-color: transparent;

                border: 1px solid hsl(var(--ui-hsl-borderColor));
                border-radius: var(--ui-radius);

                overflow: hidden;

                font-size: 0.9rem;
                font-family: var(--ui-fontFamily);
                font-variation-settings: var(--ui-input-fontVariation);
            }

            :host([open]),
            :host([keep-open]) {
                height: calc(
                    (1em * var(--_lineHeight) + var(--ui-spacing) * 2) *
                        var(--_items)
                );
            }

            :host(:not([open]))
                .options:has(> ::slotted(ui-select-option[selected])),
            :host(:not([keep-open]))
                .options:has(> ::slotted(ui-select-option[selected])) {
                display: block;
            }

            .options {
                cursor: pointer;
                display: none;
                display: flex;
                flex-direction: column;
                min-height: 100%;
            }

            :host([open]) .options,
            :host([keep-open]) .options {
                display: block;
            }

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                right: 0;
                width: 2.5rem;
                height: 100%;
                padding: 0.25rem;
                color: hsl(var(--ui-hsl-primary));
            }

            .icon > * {
                width: 2rem;
                height: 2rem;
            }

            :host([open]) .icon,
            :host([keep-open]) .icon {
                display: none;
            }

            ::slotted(ui-select-option) {
                display: flex;
            }

            :host([open]) ::slotted(ui-select-option[selected]),
            :host([keep-open]) ::slotted(ui-select-option[selected]) {
                background-color: hsl(var(--ui-hsl-primary));
                color: hsl(var(--ui-hsl-primary-text));
            }

            :host([open]) ::slotted(ui-select-option:not([selected]):hover),
            :host([keep-open])
                ::slotted(ui-select-option:not([selected]):hover) {
                background-color: hsla(var(--ui-hsl-text), 0.1);
            }

            :host(:not([open], [keep-open]))
                ::slotted(ui-select-option:not([selected])) {
                display: none;
            }
        `}render(){!this.open&&!this.keepOpen?this.role="button":this.role=null;const o=this.optionsClickHandler.bind(this);return Y`
            <div
                class="options"
                @click=${async t=>{if(this.keepOpen)return await o(t);this.open=!this.open,this.open?(t.stopPropagation(),this.addEventListener("click",o)):this.removeEventListener("click",o)}}
            >
                <div class="icon">
                    <ui-svg>${Dr}</ui-svg>
                </div>

                <slot></slot>
            </div>
        `}updated(o){this.style.setProperty("--_items",`${this.children.length}`)}async optionsClickHandler(o){o.composedPath().forEach(t=>{t instanceof oe&&([...this.querySelectorAll("ui-select-option")].forEach(e=>e.removeAttribute("selected")),t.setAttribute("selected",""),this.dispatchEvent(new Event("change")))})}options(){return[...this.children].filter(o=>o instanceof oe)}selected(){return this.options().find(o=>o.selected)||null}click(){super.click(),this.shadowRoot.querySelector("div.options").click()}};Fr([H({type:Boolean,attribute:"open",reflect:!0})],Je.prototype,"open",2);Fr([H({type:Boolean,attribute:"keep-open",reflect:!0})],Je.prototype,"keepOpen",2);Je=Fr([ot("ui-select")],Je);var Ws=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,Hr=(o,t,e,i)=>{for(var r=i>1?void 0:i?qs(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Ws(t,e,r),r};let oe=class extends st{constructor(){super(...arguments),this.value="",this.selected=!1,this.role="button"}static get styles(){return lt`
            :host {
                --_lineHeight: var(--_lineHeight, 1.25);
                line-height: var(--_lineHeight) !important;

                display: none;
                align-items: center;

                padding: var(--ui-spacing);
                padding-right: 2.5rem;

                height: calc(1em * var(--_lineHeight) + var(--ui-spacing) * 2);

                font-variation-settings: var(--ui-input-fontVariation);
                color: hsl(var(--ui-hsl-input-text));

                white-space: nowrap;
                text-overflow: ellipsis;

                overflow: hidden;

                transition:
                    background-color 0.25s linear,
                    color 0.25s linear;
            }
        `}render(){return Y`<slot></slot>`}};Hr([H({type:String,attribute:"value",reflect:!0})],oe.prototype,"value",2);Hr([H({type:Boolean,attribute:"selected",reflect:!0})],oe.prototype,"selected",2);oe=Hr([ot("ui-select-option")],oe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=o=>o??ft;var Ks=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Xt=(o,t,e,i)=>{for(var r=i>1?void 0:i?Ys(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Ks(t,e,r),r};let It=class extends st{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.role="textbox"}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            ::selection {
                background-color: hsl(var(--ui-hsl-primary));
                color: hsl(var(--ui-hsl-primary-text));
            }

            :host {
                display: block;
                position: relative;
                width: 100%;
                height: fit-content;
            }

            .container {
                width: 100%;
                height: 100%;
                border: none;
                border: 1px solid hsl(var(--ui-hsl-borderColor));
                border-radius: var(--ui-radius);
                transition: border-color 0.25s linear;
            }

            .container:has(textarea:focus) {
                border-color: hsl(var(--ui-hsl-primary));
            }

            :host([invalid]) .container {
                border-color: hsl(var(--ui-hsl-destructive));
            }

            ui-secondary.title {
                display: block;
                padding: 0 var(--ui-spacing);
                user-select: none;
                transform: translateY(calc(var(--ui-spacing) / 2));
            }

            textarea {
                resize: none;
                width: 100%;
                display: block;
                margin: 0;
                padding: var(--ui-spacing) calc(var(--ui-spacing) * 2);
                border: none;
                border-radius: inherit;
                outline: none;
                font-size: 0.9rem;
                font-family: var(--ui-fontFamily);
                font-variation-settings: var(--ui-input-fontVariation);
                accent-color: hsl(var(--ui-hsl-primary));
                background-color: transparent;
                color: hsl(var(--ui-hsl-input-text));
            }
        `}render(){return Y`
            <div class="container">
                ${this.title?Y`
                          <ui-secondary class="title">
                              ${this.title}
                          </ui-secondary>
                      `:""}

                <textarea
                    placeholder=${this.placeholder}
                    .value=${this.value}
                    rows=${yi(this.rows)}
                    cols=${yi(this.cols)}
                    @input=${t=>{this.value=t.currentTarget.value}}
                    @change=${()=>{this.dispatchEvent(new Event("change"))}}
                ></textarea>
            </div>
        `}focus(t){super.focus(t),this.shadowRoot.querySelector("textarea").focus(t)}blur(){super.blur(),this.shadowRoot.querySelector("textarea").blur()}click(){super.click(),this.focus()}};Xt([H({type:String,attribute:"title",reflect:!0})],It.prototype,"title",2);Xt([H({type:String,attribute:"value"})],It.prototype,"value",2);Xt([H({type:String,attribute:"placeholder",reflect:!0})],It.prototype,"placeholder",2);Xt([H({type:Boolean,attribute:"invalid",reflect:!0})],It.prototype,"invalid",2);Xt([H({type:Number,attribute:"rows",reflect:!0})],It.prototype,"rows",2);Xt([H({type:Number,attribute:"cols",reflect:!0})],It.prototype,"cols",2);It=Xt([ot("ui-textarea")],It);var Xs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,or=(o,t,e,i)=>{for(var r=i>1?void 0:i?Js(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Xs(t,e,r),r};let xe=class extends st{constructor(){super(...arguments),this.name="",this.href="",this.fallback=!1}static get styles(){return lt`
            :host {
                display: none;
            }
        `}};or([H({type:String,attribute:"name",reflect:!0})],xe.prototype,"name",2);or([H({type:String,attribute:"href",reflect:!0})],xe.prototype,"href",2);or([H({type:Boolean,attribute:"fallback",reflect:!0})],xe.prototype,"fallback",2);xe=or([ot("ui-lang-type")],xe);var Qs=Object.defineProperty,to=Object.getOwnPropertyDescriptor,Hi=(o,t,e,i)=>{for(var r=i>1?void 0:i?to(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Qs(t,e,r),r};let kr=class extends st{constructor(){super(...arguments),this.data={},this.events=new Or,this.current=""}static get styles(){return lt`
            :host {
                display: none;
            }
        `}render(){return Y`<slot></slot>`}attributeChangedCallback(o,t,e){switch(super.attributeChangedCallback(o,t,e),o){case"current":this.setCurrent(e||"");break}}fallback(){return this.querySelector("ui-lang-type[fallback]")}get(o,t){var e,i;return((i=(e=this.data)==null?void 0:e[o])==null?void 0:i[t])||null}async setCurrent(o){const t=(o!==""?this.querySelector(`ui-lang-type[name="${o}"]`):this.fallback())||this.fallback();if(t){if(!t.href)throw"Missing href attribute!";try{this.data=await(await fetch(t.href)).json()}catch(e){console.error(e)}this.events.dispatch("change",t)}}};Hi([H({type:String,attribute:"current",reflect:!0})],kr.prototype,"current",2);kr=Hi([ot("ui-lang")],kr);var eo=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,Zi=(o,t,e,i)=>{for(var r=i>1?void 0:i?ro(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&eo(t,e,r),r};let xr=class extends st{constructor(){super(...arguments),this.nobg=!1}static get styles(){return lt`
            :host {
                position: absolute !important;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }

            .background {
                display: "block";

                z-index: 999;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;

                background-color: hsla(
                    var(--ui-hsl-backdrop),
                    var(--ui-hsl-backdrop-alpha)
                );
                -webkit-backdrop-filter: var(--ui-backdropFilter);
                backdrop-filter: var(--ui-backdropFilter);
            }

            :host([nobg]) .background {
                display: none;
            }

            .spinner {
                content: "";
                box-sizing: border-box;

                z-index: 1000;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 2.5rem;
                height: 2.5rem;

                margin-top: -1.25rem;
                margin-left: -1.25rem;

                border: 2px solid hsl(var(--ui-hsl-borderColor));
                border-top-color: hsl(var(--ui-hsl-primary));
                border-radius: 50%;

                animation: spinner 0.6s linear infinite;
            }

            @keyframes spinner {
                to {
                    transform: rotate(360deg);
                }
            }
        `}render(){return Y`
            <div class="background"></div>
            <div class="spinner"></div>
        `}};Zi([H({type:Boolean,attribute:"nobg",reflect:!0})],xr.prototype,"nobg",2);xr=Zi([ot("ui-spinner")],xr);var io=(o,t,e,i)=>{for(var r=t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=n(r)||r);return r};let vi=class extends st{constructor(){super(...arguments),this.events=new Or,this.stack=[],this.onpopstate=()=>{if(this.stack.length===0){this.dispatchChangeEvent(null);return}const o=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(o)},this.pages={},this.lockNavigation=!1}static get styles(){return lt`
            :host {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }
        `}render(){return Y`<slot></slot>`}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.onpopstate)}stackSize(){return this.stack.length}clearStack(){for(;this.stack.length>0;)this.removeChild(this.stack.pop())}goBack(){this.stack.length===0||this.lockNavigation||history.back()}registerPage(o,t){this.pages[o]=t}unregisterPage(o){delete this.pages[o]}async setPage(o,t=null,e=!1){var i;if(this.lockNavigation)return;if(!(o in this.pages))throw new Error(`page "${o}" not found`);const r=await this.pages[o]();this.stack.push(this.appendChild(r)),typeof t=="function"&&t(r);let s=null;this.stack.length>1&&!e&&(s=this.stack[this.stack.length-2],(i=s.parentElement)==null||i.removeChild(s)),this.dispatchChangeEvent(s),this.onpopstate!==null&&history.pushState(null,document.title,location.href)}async dispatchChangeEvent(o){this.events.dispatch("change",{old:o||this.stack[this.stack.length-2]||null,current:this.stack[this.stack.length-1]||null})}};vi=io([ot("ui-stack-layout")],vi);var no=Object.defineProperty,so=Object.getOwnPropertyDescriptor,Vi=(o,t,e,i)=>{for(var r=i>1?void 0:i?so(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&no(t,e,r),r};let Qe=class extends st{constructor(){super(...arguments),this.name=""}static get styles(){return lt`
            :host {
                display: block;

                position: absolute !important;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;

                opacity: 0;

                transition: opacity 0.5s ease;
                animation: fade-in 0.5s;
            }

            :host(:last-child) {
                opacity: 1;
            }

            @keyframes fade-in {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        `}render(){return Y`<slot></slot>`}};Vi([H({type:String,attribute:"name",reflect:!0})],Qe.prototype,"name",2);Qe=Vi([ot("ui-stack-layout-page")],Qe);const bi=Qe;var oo=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,Zr=(o,t,e,i)=>{for(var r=i>1?void 0:i?ao(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&oo(t,e,r),r};let tr=class extends st{constructor(){super(...arguments),this.data={},this.events=new Or,this.storage=!1,this.storagePrefix=""}static get styles(){return lt`
            :host {
                display: none;
            }
        `}getData(o){if(this.storage){const t=localStorage.getItem(`${this.storagePrefix}${o}`);if(t!==null)return JSON.parse(t)}if(this.data.hasOwnProperty(o))return this.data[o]}setData(o,t,e=!1){if(e&&this.storage){const i=localStorage.getItem(`${this.storagePrefix}${o}`);i!==null?this.data[o]=JSON.parse(i):this.data.hasOwnProperty(o)||(this.data[o]=t)}else this.data[o]=t;this.storage&&localStorage.setItem(`${this.storagePrefix}${o}`,JSON.stringify(this.data[o])),this.events.dispatch(o,this.data[o])}updateData(o,t){const e=this.getData(o);if(e===void 0)throw new Error(`"${o}" not found, use \`setData\``);this.setData(o,t(e))}addListener(o,t,e=!1){if(e){const i=this.getData(o);i!==void 0&&setTimeout(()=>t(i))}return this.events.addListener(o,t)}};Zr([H({type:Boolean,attribute:"storage",reflect:!0})],tr.prototype,"storage",2);Zr([H({type:String,attribute:"storage-prefix",reflect:!0})],tr.prototype,"storagePrefix",2);tr=Zr([ot("ui-store")],tr);var lo=(o,t,e,i)=>{for(var r=t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=n(r)||r);return r};let _i=class extends st{static get styles(){return lt`
            :host {
                display: inline-block;
                color: inherit;
            }

            ::slotted(*) {
                width: 100%;
                height: 100%;
            }
        `}render(){return Y` <slot></slot> `}};_i=lo([ot("ui-svg")],_i);var co=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,Ut=(o,t,e,i)=>{for(var r=i>1?void 0:i?ho(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&co(t,e,r),r};let Ct=class extends st{constructor(){super(...arguments),this.family="var(--ui-fontFamily)",this.size="var(--ui-fontSize)",this.mono=0,this.casl=1,this.wght=400,this.slnt=0,this.crsv=.5}static get styles(){return lt`
            :host {
                display: inline-block;
                overflow-wrap: anywhere;

                font-family: var(--_family) !important;
                font-size: var(--_size) !important;
                font-variation-settings:
                    "MONO" var(--_mono),
                    "CASL" var(--_casl),
                    "wght" var(--_wght),
                    "slnt" var(--_slnt),
                    "CRSV" var(--_crsv) !important;
            }
        `}render(){return this.style.setProperty("--_family",this.family),this.style.setProperty("--_size",this.size),this.style.setProperty("--_mono",this.mono.toString()),this.style.setProperty("--_casl",this.casl.toString()),this.style.setProperty("--_wght",this.wght.toString()),this.style.setProperty("--_slnt",this.slnt.toString()),this.style.setProperty("--_crsv",this.crsv.toString()),Y`<slot></slot>`}};Ut([H({type:String,attribute:"family",reflect:!0})],Ct.prototype,"family",2);Ut([H({type:String,attribute:"size",reflect:!0})],Ct.prototype,"size",2);Ut([H({type:Number,attribute:"mono",reflect:!0})],Ct.prototype,"mono",2);Ut([H({type:Number,attribute:"casl",reflect:!0})],Ct.prototype,"casl",2);Ut([H({type:Number,attribute:"wght",reflect:!0})],Ct.prototype,"wght",2);Ut([H({type:Number,attribute:"slnt",reflect:!0})],Ct.prototype,"slnt",2);Ut([H({type:Number,attribute:"crsv",reflect:!0})],Ct.prototype,"crsv",2);Ct=Ut([ot("ui-text")],Ct);const Vr=Ct;var uo=Object.defineProperty,po=Object.getOwnPropertyDescriptor,Gi=(o,t,e,i)=>{for(var r=i>1?void 0:i?po(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&uo(t,e,r),r};let Sr=class extends Vr{constructor(){super(...arguments),this.mono=.25,this.casl=1,this.wght=750,this.slnt=0}render(){switch(this.level){case 6:this.size="0.75rem";break;case 5:this.size="1rem";break;case 4:this.size="1.25rem";break;case 3:this.size="1.5rem";break;case 2:this.size="1.75rem";break;case 1:this.size="2rem";break}return super.render()}};Gi([H({type:Number,attribute:"level",reflect:!0})],Sr.prototype,"level",2);Sr=Gi([ot("ui-heading")],Sr);var fo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,ar=(o,t,e,i)=>{for(var r=i>1?void 0:i?go(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&fo(t,e,r),r};let Se=class extends st{constructor(){super(...arguments),this.rippleCleanUp=null,this.clickHandler=async o=>{o.currentTarget&&[...o.currentTarget.children].forEach(t=>{t.click()})},this.childClickHandler=async o=>{o.stopPropagation()},this.ripple=!1}static get styles(){return lt`
            * {
                box-sizing: border-box;
            }

            ::selection {
                background-color: hsl(var(--ui-hsl-primary));
                color: hsl(var(--ui-hsl-primary-text));
            }

            :host {
                display: block;
            }

            :host > div {
                display: flex;
                flex-direction: row;

                position: relative;
                width: 100%;

                padding: var(--ui-spacing);

                border-radius: var(--ui-radius);
            }

            :host > div > span:nth-child(1) {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;

                margin-right: var(--ui-spacing);
            }

            :host > div > span:nth-child(2) {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
            }
        `}render(){return Y`
            <div>
                <span>
                    ${this.primary?Y`<ui-primary>${this.primary}</ui-primary>`:""}
                    ${this.secondary?Y`<ui-secondary>${this.secondary}</ui-secondary>`:""}
                </span>

                <span>
                    <slot></slot>
                </span>
            </div>
        `}firstUpdated(o){super.firstUpdated(o),this.ripple?this.enableRipple():this.disableRipple()}attributeChangedCallback(o,t,e){switch(super.attributeChangedCallback(o,t,e),o){case"ripple":this.ripple?this.enableRipple():this.disableRipple()}}async enableRipple(){var o;if(this.rippleCleanUp)return;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("div");t&&(this.rippleCleanUp=sr(t),this.role="button",this.style.cursor="pointer",this.addEventListener("click",this.clickHandler),[...this.children].forEach(e=>{e.addEventListener("click",this.childClickHandler)}))}async disableRipple(){this.rippleCleanUp&&(this.style.cursor="default",this.role=null,this.rippleCleanUp(),this.rippleCleanUp=null,this.removeEventListener("click",this.clickHandler),[...this.children].forEach(o=>{o.removeEventListener("click",this.childClickHandler)}))}};ar([H({type:String,attribute:"primary",reflect:!0})],Se.prototype,"primary",2);ar([H({type:String,attribute:"secondary",reflect:!0})],Se.prototype,"secondary",2);ar([H({type:Boolean,attribute:"ripple",reflect:!0})],Se.prototype,"ripple",2);Se=ar([ot("ui-label")],Se);var mo=(o,t,e,i)=>{for(var r=t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=n(r)||r);return r};let wi=class extends Vr{constructor(){super(...arguments),this.size="1.1rem",this.wght=425}};wi=mo([ot("ui-primary")],wi);var yo=(o,t,e,i)=>{for(var r=t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=n(r)||r);return r};let ki=class extends Vr{constructor(){super(...arguments),this.size="0.9rem",this.wght=350,this.slnt=-15}};ki=yo([ot("ui-secondary")],ki);var vo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,Ie=(o,t,e,i)=>{for(var r=i>1?void 0:i?bo(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&vo(t,e,r),r};let ae=class extends st{constructor(){super(...arguments),this.themesPath="themes",this.media=null}get target(){return document.body}get mediaHandler(){return o=>{o.matches?this.target.setAttribute("data-theme","dark"):this.target.setAttribute("data-theme","light")}}static get styles(){return lt`
            :host {
                display: none;
            }
        `}firstUpdated(o){this.hasAttribute("theme")||this.handleTheme()}attributeChangedCallback(o,t,e){switch(super.attributeChangedCallback(o,t,e),o){case"auto":this.handleAuto();break;case"mode":this.handleMode();break;case"theme":this.handleTheme();break}}handleAuto(){if(!this.auto){if(console.debug("[ui][ui-theme-handler] Disable auto mode"),!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null;return}if(this.mode=null,console.debug("[ui][ui-theme-handler] Enable auto mode"),this.media){this.mediaHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}handleMode(){console.debug(`[ui][ui-theme-handler] Set mode ${this.mode}`),this.mode?this.target.setAttribute("data-theme",this.mode):this.target.removeAttribute("data-theme")}handleTheme(){const o=document.head;console.debug(`[ui][ui-theme-handler] Load theme from "${this.themesPath}/${this.theme}"`),o.querySelectorAll("link.theme").forEach(e=>{o.removeChild(e)});const t=document.createElement("link");t.classList.add("theme"),t.rel="stylesheet",t.href=`${this.themesPath}/${this.theme}.css`,o.appendChild(t)}};Ie([H({type:Boolean,attribute:"auto",reflect:!0})],ae.prototype,"auto",2);Ie([H({type:String,attribute:"mode",reflect:!0})],ae.prototype,"mode",2);Ie([H({type:String,attribute:"theme",reflect:!0})],ae.prototype,"theme",2);Ie([H({type:String,attribute:"themes-path",reflect:!0})],ae.prototype,"themesPath",2);ae=Ie([ot("ui-theme-handler")],ae);class Wi{constructor(t){this._url="",this.id=t}get url(){return this._url}async get(){this._url=`https://api.github.com/gists/${this.id}`;const t=await fetch(this.url);if(!t.ok)throw`request to "${this.url}" failed with "${t.status}"!`;const e=await t.json(),i={};return Object.entries(e.files).forEach(([r,s])=>{i[r]={filename:s.filename,content:JSON.parse(s.content)}}),{revision:e.history.length,files:i,owner:{login:e.owner.login}}}}class qi{constructor(t){if(this.data=[],t&&!Array.isArray(t))throw new Error("data not from type array");this.data=t||[]}key(){return""}listKey(t){return"title"in t?t.title:"unknown"}title(){return""}fileName(t){return`${this.listKey(t)}.json`}zipFileName(){return`${new Date().getTime()}.zip`}validate(t){return t}sort(t){const e=[],i=t.map(r=>`${this.listKey(r)}`).sort();for(const r of i){const s=t.find(n=>`${this.listKey(n)}`===r);s!==void 0&&e.push(s)}return e}updateStore(t){const e=ht.queryStore(),i=e.getData(this.key());if(i===void 0)return;const s=[...i.filter(n=>this.data.find(h=>this.listKey(h)===this.listKey(n))===void 0),...this.data];e.setData(this.key(),t?this.sort(s):s)}}class Ki extends qi{key(){return"alertLists"}listKey(t){return t.title}title(){return"Alarm Listen"}fileName(t){return`Alarm Liste - ${super.fileName(t)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(t){if(typeof(t==null?void 0:t.title)!="string"||!("data"in t)||!Array.isArray(t.data))return null;for(const e of t.data)if(!("from"in e&&"to"in e&&"alert"in e&&"desc"in e)||typeof e.from!="number"||typeof e.to!="number"||typeof e.alert!="string"||(typeof e.desc=="string"&&(e.desc=e.desc.split(`
`)),!Array.isArray(e.desc))||e.desc.filter(i=>typeof i!="string").length>0)return null;return t}}class Yi extends qi{key(){return"metalSheets"}listKey(t){return`${t.format} ${t.toolID}`}title(){return"Blech Listen"}fileName(t){return`Blech Liste - ${super.fileName(t)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(t){if(typeof t.format!="string"||(t.toolID||(t.toolID=""),typeof t.toolID!="string")||!("data"in t)||typeof t.data!="object"||t.data.press!=="number")return null;if(!("table"in t.data))t.data.table={header:[],data:[]};else{if(typeof t.data.table!="object"||!("header"in t.data.table)||!("data"in t.data.table)||!Array.isArray(t.data.table.header)||!Array.isArray(t.data.table.table))return null;for(const e of t.data.table.header)if(typeof e!="string")return null;for(const e of t.data.table.data)for(const i of e)if(typeof i!="string")return null}return t}}var _o=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,lr=(o,t,e,i)=>{for(var r=i>1?void 0:i?wo(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&_o(t,e,r),r};let Ce=class extends Nr{constructor(){super(...arguments),this.revision=0,this.gistID="",this.cleanup=new Ri}createRenderRoot(){return this}render(){return Y`
            <ui-flex-grid>
                <ui-flex-grid-item direction="column" align="flex-start">
                    <ui-text mono="1" size="0.85rem"
                        >${this.gistID||Y`???`}</ui-text
                    >
                    <ui-text mono="1" size="0.95rem">
                        <ui-text mono="0" size="0.75rem">REVISION:</ui-text>
                        ${this.revision}
                    </ui-text>
                </ui-flex-grid-item>

                <ui-flex-grid-item>
                    <ui-button
                        variant="full"
                        color="secondary"
                        ?ripple=${this.gistID!==""}
                        ?disabled=${this.gistID===""}
                        @click=${async()=>{try{this.startSpinner(),confirm("Alle Ihre Änderungen gehen verloren!")&&await this.pullFromGist()}finally{this.stopSpinner()}}}
                    >
                        Aktualisieren
                    </ui-button>
                </ui-flex-grid-item>
            </ui-flex-grid>

            <ui-spinner
                style="${Br({position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"none"})}"
            ></ui-spinner>
        `}connectedCallback(){super.connectedCallback();const o=ht.queryStore();this.cleanup.add(o.addListener("gist",t=>{const e=this.getListsStore(),i=t[e.key()];i!==void 0&&(this.gistID=i.id,this.revision=i.revision)},!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}startSpinner(){this.querySelector("ui-spinner").style.display="block"}stopSpinner(){this.querySelector("ui-spinner").style.display="none"}async pullFromGist(){if(this.gistID!=="")try{const o=new Wi(this.gistID),t=await o.get(),e=this.getListsStore();for(const i of Object.values(t.files)){const r=e.validate(i.content);if(r===null){alert(`Ungültige Daten von "${o.url}"!`);continue}e.data.push(r)}e.updateStore(!0),ht.queryStore().updateData("gist",i=>(i[e.key()]={id:this.gistID,revision:t.revision},i))}catch(o){alert(o)}}getListsStore(){switch(this.storeKey){case"alertLists":return new Ki;case"metalSheets":return new Yi;default:throw new Error(`unknown "${this.storeKey}"`)}}};lr([vt({type:String,attribute:"store-key",reflect:!0})],Ce.prototype,"storeKey",2);lr([vt({type:Number,attribute:!1,reflect:!0})],Ce.prototype,"revision",2);lr([vt({type:String,attribute:!1,reflect:!0})],Ce.prototype,"gistID",2);Ce=lr([Lt("pg-drawer-item-gist")],Ce);var At=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xi(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ji={exports:{}};(function(o,t){(function(e,i){i()})(At,function(){function e(f,v){return typeof v>"u"?v={autoBom:!1}:typeof v!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),v={autoBom:!v}),v.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function i(f,v,p){var b=new XMLHttpRequest;b.open("GET",f),b.responseType="blob",b.onload=function(){h(b.response,v,p)},b.onerror=function(){console.error("could not download file")},b.send()}function r(f){var v=new XMLHttpRequest;v.open("HEAD",f,!1);try{v.send()}catch{}return 200<=v.status&&299>=v.status}function s(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var v=document.createEvent("MouseEvents");v.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(v)}}var n=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof At=="object"&&At.global===At?At:void 0,l=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=n.saveAs||(typeof window!="object"||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(f,v,p){var b=n.URL||n.webkitURL,u=document.createElement("a");v=v||f.name||"download",u.download=v,u.rel="noopener",typeof f=="string"?(u.href=f,u.origin===location.origin?s(u):r(u.href)?i(f,v,p):s(u,u.target="_blank")):(u.href=b.createObjectURL(f),setTimeout(function(){b.revokeObjectURL(u.href)},4e4),setTimeout(function(){s(u)},0))}:"msSaveOrOpenBlob"in navigator?function(f,v,p){if(v=v||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(e(f,p),v);else if(r(f))i(f,v,p);else{var b=document.createElement("a");b.href=f,b.target="_blank",setTimeout(function(){s(b)})}}:function(f,v,p,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof f=="string")return i(f,v,p);var u=f.type==="application/octet-stream",w=/constructor/i.test(n.HTMLElement)||n.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||u&&w||l)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var S=y.result;S=d?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=S:location=S,b=null},y.readAsDataURL(f)}else{var g=n.URL||n.webkitURL,k=g.createObjectURL(f);b?b.location=k:location.href=k,b=null,setTimeout(function(){g.revokeObjectURL(k)},4e4)}});n.saveAs=h.saveAs=h,o.exports=h})})(Ji);var ko=Ji.exports;const xo=Xi(ko);function Ne(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Qi={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(o,t){(function(e){o.exports=e()})(function(){return function e(i,r,s){function n(f,v){if(!r[f]){if(!i[f]){var p=typeof Ne=="function"&&Ne;if(!v&&p)return p(f,!0);if(l)return l(f,!0);var b=new Error("Cannot find module '"+f+"'");throw b.code="MODULE_NOT_FOUND",b}var u=r[f]={exports:{}};i[f][0].call(u.exports,function(w){var d=i[f][1][w];return n(d||w)},u,u.exports,e,i,r,s)}return r[f].exports}for(var l=typeof Ne=="function"&&Ne,h=0;h<s.length;h++)n(s[h]);return n}({1:[function(e,i,r){var s=e("./utils"),n=e("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(h){for(var f,v,p,b,u,w,d,y=[],g=0,k=h.length,S=k,A=s.getTypeOf(h)!=="string";g<h.length;)S=k-g,p=A?(f=h[g++],v=g<k?h[g++]:0,g<k?h[g++]:0):(f=h.charCodeAt(g++),v=g<k?h.charCodeAt(g++):0,g<k?h.charCodeAt(g++):0),b=f>>2,u=(3&f)<<4|v>>4,w=1<S?(15&v)<<2|p>>6:64,d=2<S?63&p:64,y.push(l.charAt(b)+l.charAt(u)+l.charAt(w)+l.charAt(d));return y.join("")},r.decode=function(h){var f,v,p,b,u,w,d=0,y=0,g="data:";if(h.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var k,S=3*(h=h.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(h.charAt(h.length-1)===l.charAt(64)&&S--,h.charAt(h.length-2)===l.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=n.uint8array?new Uint8Array(0|S):new Array(0|S);d<h.length;)f=l.indexOf(h.charAt(d++))<<2|(b=l.indexOf(h.charAt(d++)))>>4,v=(15&b)<<4|(u=l.indexOf(h.charAt(d++)))>>2,p=(3&u)<<6|(w=l.indexOf(h.charAt(d++))),k[y++]=f,u!==64&&(k[y++]=v),w!==64&&(k[y++]=p);return k}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),n=e("./stream/DataWorker"),l=e("./stream/Crc32Probe"),h=e("./stream/DataLengthProbe");function f(v,p,b,u,w){this.compressedSize=v,this.uncompressedSize=p,this.crc32=b,this.compression=u,this.compressedContent=w}f.prototype={getContentWorker:function(){var v=new n(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")),p=this;return v.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),v},getCompressedWorker:function(){return new n(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(v,p,b){return v.pipe(new l).pipe(new h("uncompressedSize")).pipe(p.compressWorker(b)).pipe(new h("compressedSize")).withStreamInfo("compression",p)},i.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),n=function(){for(var l,h=[],f=0;f<256;f++){l=f;for(var v=0;v<8;v++)l=1&l?3988292384^l>>>1:l>>>1;h[f]=l}return h}();i.exports=function(l,h){return l!==void 0&&l.length?s.getTypeOf(l)!=="string"?function(f,v,p,b){var u=n,w=b+p;f^=-1;for(var d=b;d<w;d++)f=f>>>8^u[255&(f^v[d])];return-1^f}(0|h,l,l.length,0):function(f,v,p,b){var u=n,w=b+p;f^=-1;for(var d=b;d<w;d++)f=f>>>8^u[255&(f^v.charCodeAt(d))];return-1^f}(0|h,l,l.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",n=e("pako"),l=e("./utils"),h=e("./stream/GenericWorker"),f=s?"uint8array":"array";function v(p,b){h.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=b,this.meta={}}r.magic="\b\0",l.inherits(v,h),v.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(f,p.data),!1)},v.prototype.flush=function(){h.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},v.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},v.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(b){p.push({data:b,meta:p.meta})}},r.compressWorker=function(p){return new v("Deflate",p)},r.uncompressWorker=function(){return new v("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(u,w){var d,y="";for(d=0;d<w;d++)y+=String.fromCharCode(255&u),u>>>=8;return y}function n(u,w,d,y,g,k){var S,A,$=u.file,I=u.compression,R=k!==f.utf8encode,N=l.transformTo("string",k($.name)),z=l.transformTo("string",f.utf8encode($.name)),V=$.comment,Q=l.transformTo("string",k(V)),x=l.transformTo("string",f.utf8encode(V)),j=z.length!==$.name.length,c=x.length!==V.length,D="",et="",U="",rt=$.dir,F=$.date,tt={crc32:0,compressedSize:0,uncompressedSize:0};w&&!d||(tt.crc32=u.crc32,tt.compressedSize=u.compressedSize,tt.uncompressedSize=u.uncompressedSize);var O=0;w&&(O|=8),R||!j&&!c||(O|=2048);var L=0,J=0;rt&&(L|=16),g==="UNIX"?(J=798,L|=function(W,ut){var yt=W;return W||(yt=ut?16893:33204),(65535&yt)<<16}($.unixPermissions,rt)):(J=20,L|=function(W){return 63&(W||0)}($.dosPermissions)),S=F.getUTCHours(),S<<=6,S|=F.getUTCMinutes(),S<<=5,S|=F.getUTCSeconds()/2,A=F.getUTCFullYear()-1980,A<<=4,A|=F.getUTCMonth()+1,A<<=5,A|=F.getUTCDate(),j&&(et=s(1,1)+s(v(N),4)+z,D+="up"+s(et.length,2)+et),c&&(U=s(1,1)+s(v(Q),4)+x,D+="uc"+s(U.length,2)+U);var q="";return q+=`
\0`,q+=s(O,2),q+=I.magic,q+=s(S,2),q+=s(A,2),q+=s(tt.crc32,4),q+=s(tt.compressedSize,4),q+=s(tt.uncompressedSize,4),q+=s(N.length,2),q+=s(D.length,2),{fileRecord:p.LOCAL_FILE_HEADER+q+N+D,dirRecord:p.CENTRAL_FILE_HEADER+s(J,2)+q+s(Q.length,2)+"\0\0\0\0"+s(L,4)+s(y,4)+N+D+Q}}var l=e("../utils"),h=e("../stream/GenericWorker"),f=e("../utf8"),v=e("../crc32"),p=e("../signature");function b(u,w,d,y){h.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=d,this.encodeFileName=y,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(b,h),b.prototype.push=function(u){var w=u.meta.percent||0,d=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,h.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:d?(w+100*(d-y-1))/d:100}}))},b.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var w=this.streamFiles&&!u.file.dir;if(w){var d=n(u,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(u){this.accumulate=!1;var w=this.streamFiles&&!u.file.dir,d=n(u,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),w)this.push({data:function(y){return p.DATA_DESCRIPTOR+s(y.crc32,4)+s(y.compressedSize,4)+s(y.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var u=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var d=this.bytesWritten-u,y=function(g,k,S,A,$){var I=l.transformTo("string",$(A));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(g,2)+s(g,2)+s(k,4)+s(S,4)+s(I.length,2)+I}(this.dirRecords.length,d,u,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(u){this._sources.push(u);var w=this;return u.on("data",function(d){w.processChunk(d)}),u.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),u.on("error",function(d){w.error(d)}),this},b.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(u){var w=this._sources;if(!h.prototype.error.call(this,u))return!1;for(var d=0;d<w.length;d++)try{w[d].error(u)}catch{}return!0},b.prototype.lock=function(){h.prototype.lock.call(this);for(var u=this._sources,w=0;w<u.length;w++)u[w].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(l,h,f){var v=new n(h.streamFiles,f,h.platform,h.encodeFileName),p=0;try{l.forEach(function(b,u){p++;var w=function(k,S){var A=k||S,$=s[A];if(!$)throw new Error(A+" is not a valid compression method !");return $}(u.options.compression,h.compression),d=u.options.compressionOptions||h.compressionOptions||{},y=u.dir,g=u.date;u._compressWorker(w,d).withStreamInfo("file",{name:b,dir:y,date:g,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(v)}),v.entriesCount=p}catch(b){v.error(b)}return v}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var n=new s;for(var l in this)typeof this[l]!="function"&&(n[l]=this[l]);return n}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(n,l){return new s().loadAsync(n,l)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),n=e("./external"),l=e("./utf8"),h=e("./zipEntries"),f=e("./stream/Crc32Probe"),v=e("./nodejsUtils");function p(b){return new n.Promise(function(u,w){var d=b.decompressed.getContentWorker().pipe(new f);d.on("error",function(y){w(y)}).on("end",function(){d.streamInfo.crc32!==b.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}i.exports=function(b,u){var w=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),v.isNode&&v.isStream(b)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",b,!0,u.optimizedBinaryString,u.base64).then(function(d){var y=new h(u);return y.load(d),y}).then(function(d){var y=[n.Promise.resolve(d)],g=d.files;if(u.checkCRC32)for(var k=0;k<g.length;k++)y.push(p(g[k]));return n.Promise.all(y)}).then(function(d){for(var y=d.shift(),g=y.files,k=0;k<g.length;k++){var S=g[k],A=S.fileNameStr,$=s.resolve(S.fileNameStr);w.file($,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:u.createFolders}),S.dir||(w.file($).unsafeOriginalName=A)}return y.zipComment.length&&(w.comment=y.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),n=e("../stream/GenericWorker");function l(h,f){n.call(this,"Nodejs stream input adapter for "+h),this._upstreamEnded=!1,this._bindStream(f)}s.inherits(l,n),l.prototype._bindStream=function(h){var f=this;(this._stream=h).pause(),h.on("data",function(v){f.push({data:v,meta:{percent:0}})}).on("error",function(v){f.isPaused?this.generatedError=v:f.error(v)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},l.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function n(l,h,f){s.call(this,h),this._helper=l;var v=this;l.on("data",function(p,b){v.push(p)||v._helper.pause(),f&&f(b)}).on("error",function(p){v.emit("error",p)}).on("end",function(){v.push(null)})}e("../utils").inherits(n,s),n.prototype._read=function(){this._helper.resume()},i.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,n){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,n);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,n)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var n=new Buffer(s);return n.fill(0),n},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s($,I,R){var N,z=l.getTypeOf(I),V=l.extend(R||{},v);V.date=V.date||new Date,V.compression!==null&&(V.compression=V.compression.toUpperCase()),typeof V.unixPermissions=="string"&&(V.unixPermissions=parseInt(V.unixPermissions,8)),V.unixPermissions&&16384&V.unixPermissions&&(V.dir=!0),V.dosPermissions&&16&V.dosPermissions&&(V.dir=!0),V.dir&&($=g($)),V.createFolders&&(N=y($))&&k.call(this,N,!0);var Q=z==="string"&&V.binary===!1&&V.base64===!1;R&&R.binary!==void 0||(V.binary=!Q),(I instanceof p&&I.uncompressedSize===0||V.dir||!I||I.length===0)&&(V.base64=!1,V.binary=!0,I="",V.compression="STORE",z="string");var x=null;x=I instanceof p||I instanceof h?I:w.isNode&&w.isStream(I)?new d($,I):l.prepareContent($,I,V.binary,V.optimizedBinaryString,V.base64);var j=new b($,x,V);this.files[$]=j}var n=e("./utf8"),l=e("./utils"),h=e("./stream/GenericWorker"),f=e("./stream/StreamHelper"),v=e("./defaults"),p=e("./compressedObject"),b=e("./zipObject"),u=e("./generate"),w=e("./nodejsUtils"),d=e("./nodejs/NodejsStreamInputAdapter"),y=function($){$.slice(-1)==="/"&&($=$.substring(0,$.length-1));var I=$.lastIndexOf("/");return 0<I?$.substring(0,I):""},g=function($){return $.slice(-1)!=="/"&&($+="/"),$},k=function($,I){return I=I!==void 0?I:v.createFolders,$=g($),this.files[$]||s.call(this,$,null,{dir:!0,createFolders:I}),this.files[$]};function S($){return Object.prototype.toString.call($)==="[object RegExp]"}var A={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function($){var I,R,N;for(I in this.files)N=this.files[I],(R=I.slice(this.root.length,I.length))&&I.slice(0,this.root.length)===this.root&&$(R,N)},filter:function($){var I=[];return this.forEach(function(R,N){$(R,N)&&I.push(N)}),I},file:function($,I,R){if(arguments.length!==1)return $=this.root+$,s.call(this,$,I,R),this;if(S($)){var N=$;return this.filter(function(V,Q){return!Q.dir&&N.test(V)})}var z=this.files[this.root+$];return z&&!z.dir?z:null},folder:function($){if(!$)return this;if(S($))return this.filter(function(z,V){return V.dir&&$.test(z)});var I=this.root+$,R=k.call(this,I),N=this.clone();return N.root=R.name,N},remove:function($){$=this.root+$;var I=this.files[$];if(I||($.slice(-1)!=="/"&&($+="/"),I=this.files[$]),I&&!I.dir)delete this.files[$];else for(var R=this.filter(function(z,V){return V.name.slice(0,$.length)===$}),N=0;N<R.length;N++)delete this.files[R[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function($){var I,R={};try{if((R=l.extend($||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=R.type.toLowerCase(),R.compression=R.compression.toUpperCase(),R.type==="binarystring"&&(R.type="string"),!R.type)throw new Error("No output type specified.");l.checkSupport(R.type),R.platform!=="darwin"&&R.platform!=="freebsd"&&R.platform!=="linux"&&R.platform!=="sunos"||(R.platform="UNIX"),R.platform==="win32"&&(R.platform="DOS");var N=R.comment||this.comment||"";I=u.generateWorker(this,R,N)}catch(z){(I=new h("error")).error(z)}return new f(I,R.type||"string",R.mimeType)},generateAsync:function($,I){return this.generateInternalStream($).accumulate(I)},generateNodeStream:function($,I){return($=$||{}).type||($.type="nodebuffer"),this.generateInternalStream($).toNodejsStream(I)}};i.exports=A},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function n(l){s.call(this,l);for(var h=0;h<this.data.length;h++)l[h]=255&l[h]}e("../utils").inherits(n,s),n.prototype.byteAt=function(l){return this.data[this.zero+l]},n.prototype.lastIndexOfSignature=function(l){for(var h=l.charCodeAt(0),f=l.charCodeAt(1),v=l.charCodeAt(2),p=l.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===h&&this.data[b+1]===f&&this.data[b+2]===v&&this.data[b+3]===p)return b-this.zero;return-1},n.prototype.readAndCheckSignature=function(l){var h=l.charCodeAt(0),f=l.charCodeAt(1),v=l.charCodeAt(2),p=l.charCodeAt(3),b=this.readData(4);return h===b[0]&&f===b[1]&&v===b[2]&&p===b[3]},n.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},i.exports=n},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function n(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(){},readInt:function(l){var h,f=0;for(this.checkOffset(l),h=this.index+l-1;h>=this.index;h--)f=(f<<8)+this.byteAt(h);return this.index+=l,f},readString:function(l){return s.transformTo("string",this.readData(l))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},i.exports=n},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function n(l){s.call(this,l)}e("../utils").inherits(n,s),n.prototype.readData=function(l){this.checkOffset(l);var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},i.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function n(l){s.call(this,l)}e("../utils").inherits(n,s),n.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},n.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},n.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},n.prototype.readData=function(l){this.checkOffset(l);var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},i.exports=n},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function n(l){s.call(this,l)}e("../utils").inherits(n,s),n.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var h=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},i.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),n=e("../support"),l=e("./ArrayReader"),h=e("./StringReader"),f=e("./NodeBufferReader"),v=e("./Uint8ArrayReader");i.exports=function(p){var b=s.getTypeOf(p);return s.checkSupport(b),b!=="string"||n.uint8array?b==="nodebuffer"?new f(p):n.uint8array?new v(s.transformTo("uint8array",p)):new l(s.transformTo("array",p)):new h(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),n=e("../utils");function l(h){s.call(this,"ConvertWorker to "+h),this.destType=h}n.inherits(l,s),l.prototype.processChunk=function(h){this.push({data:n.transformTo(this.destType,h.data),meta:h.meta})},i.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),n=e("../crc32");function l(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(l,s),l.prototype.processChunk=function(h){this.streamInfo.crc32=n(h.data,this.streamInfo.crc32||0),this.push(h)},i.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),n=e("./GenericWorker");function l(h){n.call(this,"DataLengthProbe for "+h),this.propName=h,this.withStreamInfo(h,0)}s.inherits(l,n),l.prototype.processChunk=function(h){if(h){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+h.data.length}n.prototype.processChunk.call(this,h)},i.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),n=e("./GenericWorker");function l(h){n.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,h.then(function(v){f.dataIsReady=!0,f.data=v,f.max=v&&v.length||0,f.type=s.getTypeOf(v),f.isPaused||f._tickAndRepeat()},function(v){f.error(v)})}s.inherits(l,n),l.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var h=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":h=this.data.substring(this.index,f);break;case"uint8array":h=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":h=this.data.slice(this.index,f)}return this.index=f,this.push({data:h,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(n){this.name=n||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(n){this.emit("data",n)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(n){this.emit("error",n)}return!0},error:function(n){return!this.isFinished&&(this.isPaused?this.generatedError=n:(this.isFinished=!0,this.emit("error",n),this.previous&&this.previous.error(n),this.cleanUp()),!0)},on:function(n,l){return this._listeners[n].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(n,l){if(this._listeners[n])for(var h=0;h<this._listeners[n].length;h++)this._listeners[n][h].call(this,l)},pipe:function(n){return n.registerPrevious(this)},registerPrevious:function(n){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=n.streamInfo,this.mergeStreamInfo(),this.previous=n;var l=this;return n.on("data",function(h){l.processChunk(h)}),n.on("end",function(){l.end()}),n.on("error",function(h){l.error(h)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var n=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),n=!0),this.previous&&this.previous.resume(),!n},flush:function(){},processChunk:function(n){this.push(n)},withStreamInfo:function(n,l){return this.extraStreamInfo[n]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var n in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,n)&&(this.streamInfo[n]=this.extraStreamInfo[n])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var n="Worker "+this.name;return this.previous?this.previous+" -> "+n:n}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),n=e("./ConvertWorker"),l=e("./GenericWorker"),h=e("../base64"),f=e("../support"),v=e("../external"),p=null;if(f.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(w,d){return new v.Promise(function(y,g){var k=[],S=w._internalType,A=w._outputType,$=w._mimeType;w.on("data",function(I,R){k.push(I),d&&d(R)}).on("error",function(I){k=[],g(I)}).on("end",function(){try{var I=function(R,N,z){switch(R){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),z);case"base64":return h.encode(N);default:return s.transformTo(R,N)}}(A,function(R,N){var z,V=0,Q=null,x=0;for(z=0;z<N.length;z++)x+=N[z].length;switch(R){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(Q=new Uint8Array(x),z=0;z<N.length;z++)Q.set(N[z],V),V+=N[z].length;return Q;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+R+"'")}}(S,k),$);y(I)}catch(R){g(R)}k=[]}).resume()})}function u(w,d,y){var g=d;switch(d){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=d,this._mimeType=y,s.checkSupport(g),this._worker=w.pipe(new n(g)),w.lock()}catch(k){this._worker=new l("error"),this._worker.error(k)}}u.prototype={accumulate:function(w){return b(this,w)},on:function(w,d){var y=this;return w==="data"?this._worker.on(w,function(g){d.call(y,g.data,g.meta)}):this._worker.on(w,function(){s.delay(d,arguments,y)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},w)}},i.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(s),r.blob=n.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),n=e("./support"),l=e("./nodejsUtils"),h=e("./stream/GenericWorker"),f=new Array(256),v=0;v<256;v++)f[v]=252<=v?6:248<=v?5:240<=v?4:224<=v?3:192<=v?2:1;f[254]=f[254]=1;function p(){h.call(this,"utf-8 decode"),this.leftOver=null}function b(){h.call(this,"utf-8 encode")}r.utf8encode=function(u){return n.nodebuffer?l.newBufferFrom(u,"utf-8"):function(w){var d,y,g,k,S,A=w.length,$=0;for(k=0;k<A;k++)(64512&(y=w.charCodeAt(k)))==55296&&k+1<A&&(64512&(g=w.charCodeAt(k+1)))==56320&&(y=65536+(y-55296<<10)+(g-56320),k++),$+=y<128?1:y<2048?2:y<65536?3:4;for(d=n.uint8array?new Uint8Array($):new Array($),k=S=0;S<$;k++)(64512&(y=w.charCodeAt(k)))==55296&&k+1<A&&(64512&(g=w.charCodeAt(k+1)))==56320&&(y=65536+(y-55296<<10)+(g-56320),k++),y<128?d[S++]=y:(y<2048?d[S++]=192|y>>>6:(y<65536?d[S++]=224|y>>>12:(d[S++]=240|y>>>18,d[S++]=128|y>>>12&63),d[S++]=128|y>>>6&63),d[S++]=128|63&y);return d}(u)},r.utf8decode=function(u){return n.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):function(w){var d,y,g,k,S=w.length,A=new Array(2*S);for(d=y=0;d<S;)if((g=w[d++])<128)A[y++]=g;else if(4<(k=f[g]))A[y++]=65533,d+=k-1;else{for(g&=k===2?31:k===3?15:7;1<k&&d<S;)g=g<<6|63&w[d++],k--;1<k?A[y++]=65533:g<65536?A[y++]=g:(g-=65536,A[y++]=55296|g>>10&1023,A[y++]=56320|1023&g)}return A.length!==y&&(A.subarray?A=A.subarray(0,y):A.length=y),s.applyFromCharCode(A)}(u=s.transformTo(n.uint8array?"uint8array":"array",u))},s.inherits(p,h),p.prototype.processChunk=function(u){var w=s.transformTo(n.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(n.uint8array){var d=w;(w=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),w.set(d,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var y=function(k,S){var A;for((S=S||k.length)>k.length&&(S=k.length),A=S-1;0<=A&&(192&k[A])==128;)A--;return A<0||A===0?S:A+f[k[A]]>S?A:S}(w),g=w;y!==w.length&&(n.uint8array?(g=w.subarray(0,y),this.leftOver=w.subarray(y,w.length)):(g=w.slice(0,y),this.leftOver=w.slice(y,w.length))),this.push({data:r.utf8decode(g),meta:u.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=p,s.inherits(b,h),b.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),n=e("./base64"),l=e("./nodejsUtils"),h=e("./external");function f(d){return d}function v(d,y){for(var g=0;g<d.length;++g)y[g]=255&d.charCodeAt(g);return y}e("setimmediate"),r.newBlob=function(d,y){r.checkSupport("blob");try{return new Blob([d],{type:y})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(d),g.getBlob(y)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(d,y,g){var k=[],S=0,A=d.length;if(A<=g)return String.fromCharCode.apply(null,d);for(;S<A;)y==="array"||y==="nodebuffer"?k.push(String.fromCharCode.apply(null,d.slice(S,Math.min(S+g,A)))):k.push(String.fromCharCode.apply(null,d.subarray(S,Math.min(S+g,A)))),S+=g;return k.join("")},stringifyByChar:function(d){for(var y="",g=0;g<d.length;g++)y+=String.fromCharCode(d[g]);return y},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}}()}};function b(d){var y=65536,g=r.getTypeOf(d),k=!0;if(g==="uint8array"?k=p.applyCanBeUsed.uint8array:g==="nodebuffer"&&(k=p.applyCanBeUsed.nodebuffer),k)for(;1<y;)try{return p.stringifyByChunk(d,g,y)}catch{y=Math.floor(y/2)}return p.stringifyByChar(d)}function u(d,y){for(var g=0;g<d.length;g++)y[g]=d[g];return y}r.applyFromCharCode=b;var w={};w.string={string:f,array:function(d){return v(d,new Array(d.length))},arraybuffer:function(d){return w.string.uint8array(d).buffer},uint8array:function(d){return v(d,new Uint8Array(d.length))},nodebuffer:function(d){return v(d,l.allocBuffer(d.length))}},w.array={string:b,array:f,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return l.newBufferFrom(d)}},w.arraybuffer={string:function(d){return b(new Uint8Array(d))},array:function(d){return u(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:f,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return l.newBufferFrom(new Uint8Array(d))}},w.uint8array={string:b,array:function(d){return u(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:f,nodebuffer:function(d){return l.newBufferFrom(d)}},w.nodebuffer={string:b,array:function(d){return u(d,new Array(d.length))},arraybuffer:function(d){return w.nodebuffer.uint8array(d).buffer},uint8array:function(d){return u(d,new Uint8Array(d.length))},nodebuffer:f},r.transformTo=function(d,y){if(y=y||"",!d)return y;r.checkSupport(d);var g=r.getTypeOf(y);return w[g][d](y)},r.resolve=function(d){for(var y=d.split("/"),g=[],k=0;k<y.length;k++){var S=y[k];S==="."||S===""&&k!==0&&k!==y.length-1||(S===".."?g.pop():g.push(S))}return g.join("/")},r.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":s.nodebuffer&&l.isBuffer(d)?"nodebuffer":s.uint8array&&d instanceof Uint8Array?"uint8array":s.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(d){if(!s[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(d){var y,g,k="";for(g=0;g<(d||"").length;g++)k+="\\x"+((y=d.charCodeAt(g))<16?"0":"")+y.toString(16).toUpperCase();return k},r.delay=function(d,y,g){setImmediate(function(){d.apply(g||null,y||[])})},r.inherits=function(d,y){function g(){}g.prototype=y.prototype,d.prototype=new g},r.extend=function(){var d,y,g={};for(d=0;d<arguments.length;d++)for(y in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],y)&&g[y]===void 0&&(g[y]=arguments[d][y]);return g},r.prepareContent=function(d,y,g,k,S){return h.Promise.resolve(y).then(function(A){return s.blob&&(A instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(A))!==-1)&&typeof FileReader<"u"?new h.Promise(function($,I){var R=new FileReader;R.onload=function(N){$(N.target.result)},R.onerror=function(N){I(N.target.error)},R.readAsArrayBuffer(A)}):A}).then(function(A){var $=r.getTypeOf(A);return $?($==="arraybuffer"?A=r.transformTo("uint8array",A):$==="string"&&(S?A=n.decode(A):g&&k!==!0&&(A=function(I){return v(I,s.uint8array?new Uint8Array(I.length):new Array(I.length))}(A))),A):h.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),n=e("./utils"),l=e("./signature"),h=e("./zipEntry"),f=e("./support");function v(p){this.files=[],this.loadOptions=p}v.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(b)+", expected "+n.pretty(p)+")")}},isSignature:function(p,b){var u=this.reader.index;this.reader.setIndex(p);var w=this.reader.readString(4)===b;return this.reader.setIndex(u),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),b=f.uint8array?"uint8array":"array",u=n.transformTo(b,p);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,b,u,w=this.zip64EndOfCentralSize-44;0<w;)p=this.reader.readInt(2),b=this.reader.readInt(4),u=this.reader.readData(b),this.zip64ExtensibleData[p]={id:p,length:b,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,b;for(p=0;p<this.files.length;p++)b=this.files[p],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(p=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var b=p;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var w=b-u;if(0<w)this.isSignature(b,l.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=v},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),n=e("./utils"),l=e("./compressedObject"),h=e("./crc32"),f=e("./utf8"),v=e("./compressions"),p=e("./support");function b(u,w){this.options=u,this.loadOptions=w}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var w,d;if(u.skip(22),this.fileNameLength=u.readInt(2),d=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(y){for(var g in v)if(Object.prototype.hasOwnProperty.call(v,g)&&v[g].magic===y)return v[g];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+n.pretty(this.compressionMethod)+" unknown (inner file : "+n.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,w,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var w=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(w),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===n.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===n.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===n.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===n.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var w,d,y,g=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<g;)w=u.readInt(2),d=u.readInt(2),y=u.readData(d),this.extraFields[w]={id:w,length:d,value:y};u.setIndex(g)},handleUTF8:function(){var u=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var d=n.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var g=n.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var w=s(u.value);return w.readInt(1)!==1||h(this.fileName)!==w.readInt(4)?null:f.utf8decode(w.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var w=s(u.value);return w.readInt(1)!==1||h(this.fileComment)!==w.readInt(4)?null:f.utf8decode(w.readData(u.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(w,d,y){this.name=w,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=d,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var n=e("./stream/StreamHelper"),l=e("./stream/DataWorker"),h=e("./utf8"),f=e("./compressedObject"),v=e("./stream/GenericWorker");s.prototype={internalStream:function(w){var d=null,y="string";try{if(!w)throw new Error("No output type specified.");var g=(y=w.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),d=this._decompressWorker();var k=!this._dataBinary;k&&!g&&(d=d.pipe(new h.Utf8EncodeWorker)),!k&&g&&(d=d.pipe(new h.Utf8DecodeWorker))}catch(S){(d=new v("error")).error(S)}return new n(d,y,"")},async:function(w,d){return this.internalStream(w).accumulate(d)},nodeStream:function(w,d){return this.internalStream(w||"nodebuffer").toNodejsStream(d)},_compressWorker:function(w,d){if(this._data instanceof f&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new h.Utf8EncodeWorker)),f.createWorkerFrom(y,w,d)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof v?this._data:new l(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<p.length;u++)s.prototype[p[u]]=b;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var n,l,h=s.MutationObserver||s.WebKitMutationObserver;if(h){var f=0,v=new h(w),p=s.document.createTextNode("");v.observe(p,{characterData:!0}),n=function(){p.data=f=++f%2}}else if(s.setImmediate||s.MessageChannel===void 0)n="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var d=s.document.createElement("script");d.onreadystatechange=function(){w(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},s.document.documentElement.appendChild(d)}:function(){setTimeout(w,0)};else{var b=new s.MessageChannel;b.port1.onmessage=w,n=function(){b.port2.postMessage(0)}}var u=[];function w(){var d,y;l=!0;for(var g=u.length;g;){for(y=u,u=[],d=-1;++d<g;)y[d]();g=u.length}l=!1}i.exports=function(d){u.push(d)!==1||l||n()}}).call(this,typeof At<"u"?At:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function n(){}var l={},h=["REJECTED"],f=["FULFILLED"],v=["PENDING"];function p(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=v,this.queue=[],this.outcome=void 0,g!==n&&d(this,g)}function b(g,k,S){this.promise=g,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function u(g,k,S){s(function(){var A;try{A=k(S)}catch($){return l.reject(g,$)}A===g?l.reject(g,new TypeError("Cannot resolve promise with itself")):l.resolve(g,A)})}function w(g){var k=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof k=="function")return function(){k.apply(g,arguments)}}function d(g,k){var S=!1;function A(R){S||(S=!0,l.reject(g,R))}function $(R){S||(S=!0,l.resolve(g,R))}var I=y(function(){k($,A)});I.status==="error"&&A(I.value)}function y(g,k){var S={};try{S.value=g(k),S.status="success"}catch(A){S.status="error",S.value=A}return S}(i.exports=p).prototype.finally=function(g){if(typeof g!="function")return this;var k=this.constructor;return this.then(function(S){return k.resolve(g()).then(function(){return S})},function(S){return k.resolve(g()).then(function(){throw S})})},p.prototype.catch=function(g){return this.then(null,g)},p.prototype.then=function(g,k){if(typeof g!="function"&&this.state===f||typeof k!="function"&&this.state===h)return this;var S=new this.constructor(n);return this.state!==v?u(S,this.state===f?g:k,this.outcome):this.queue.push(new b(S,g,k)),S},b.prototype.callFulfilled=function(g){l.resolve(this.promise,g)},b.prototype.otherCallFulfilled=function(g){u(this.promise,this.onFulfilled,g)},b.prototype.callRejected=function(g){l.reject(this.promise,g)},b.prototype.otherCallRejected=function(g){u(this.promise,this.onRejected,g)},l.resolve=function(g,k){var S=y(w,k);if(S.status==="error")return l.reject(g,S.value);var A=S.value;if(A)d(g,A);else{g.state=f,g.outcome=k;for(var $=-1,I=g.queue.length;++$<I;)g.queue[$].callFulfilled(k)}return g},l.reject=function(g,k){g.state=h,g.outcome=k;for(var S=-1,A=g.queue.length;++S<A;)g.queue[S].callRejected(k);return g},p.resolve=function(g){return g instanceof this?g:l.resolve(new this(n),g)},p.reject=function(g){var k=new this(n);return l.reject(k,g)},p.all=function(g){var k=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=g.length,A=!1;if(!S)return this.resolve([]);for(var $=new Array(S),I=0,R=-1,N=new this(n);++R<S;)z(g[R],R);return N;function z(V,Q){k.resolve(V).then(function(x){$[Q]=x,++I!==S||A||(A=!0,l.resolve(N,$))},function(x){A||(A=!0,l.reject(N,x))})}},p.race=function(g){var k=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=g.length,A=!1;if(!S)return this.resolve([]);for(var $=-1,I=new this(n);++$<S;)R=g[$],k.resolve(R).then(function(N){A||(A=!0,l.resolve(I,N))},function(N){A||(A=!0,l.reject(I,N))});var R;return I}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),n=e("./utils/common"),l=e("./utils/strings"),h=e("./zlib/messages"),f=e("./zlib/zstream"),v=Object.prototype.toString,p=0,b=-1,u=0,w=8;function d(g){if(!(this instanceof d))return new d(g);this.options=n.assign({level:b,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},g||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var S=s.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(S!==p)throw new Error(h[S]);if(k.header&&s.deflateSetHeader(this.strm,k.header),k.dictionary){var A;if(A=typeof k.dictionary=="string"?l.string2buf(k.dictionary):v.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(S=s.deflateSetDictionary(this.strm,A))!==p)throw new Error(h[S]);this._dict_set=!0}}function y(g,k){var S=new d(k);if(S.push(g,!0),S.err)throw S.msg||h[S.err];return S.result}d.prototype.push=function(g,k){var S,A,$=this.strm,I=this.options.chunkSize;if(this.ended)return!1;A=k===~~k?k:k===!0?4:0,typeof g=="string"?$.input=l.string2buf(g):v.call(g)==="[object ArrayBuffer]"?$.input=new Uint8Array(g):$.input=g,$.next_in=0,$.avail_in=$.input.length;do{if($.avail_out===0&&($.output=new n.Buf8(I),$.next_out=0,$.avail_out=I),(S=s.deflate($,A))!==1&&S!==p)return this.onEnd(S),!(this.ended=!0);$.avail_out!==0&&($.avail_in!==0||A!==4&&A!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(n.shrinkBuf($.output,$.next_out))):this.onData(n.shrinkBuf($.output,$.next_out)))}while((0<$.avail_in||$.avail_out===0)&&S!==1);return A===4?(S=s.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===p):A!==2||(this.onEnd(p),!($.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Deflate=d,r.deflate=y,r.deflateRaw=function(g,k){return(k=k||{}).raw=!0,y(g,k)},r.gzip=function(g,k){return(k=k||{}).gzip=!0,y(g,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),n=e("./utils/common"),l=e("./utils/strings"),h=e("./zlib/constants"),f=e("./zlib/messages"),v=e("./zlib/zstream"),p=e("./zlib/gzheader"),b=Object.prototype.toString;function u(d){if(!(this instanceof u))return new u(d);this.options=n.assign({chunkSize:16384,windowBits:0,to:""},d||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||d&&d.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&!(15&y.windowBits)&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new v,this.strm.avail_out=0;var g=s.inflateInit2(this.strm,y.windowBits);if(g!==h.Z_OK)throw new Error(f[g]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function w(d,y){var g=new u(y);if(g.push(d,!0),g.err)throw g.msg||f[g.err];return g.result}u.prototype.push=function(d,y){var g,k,S,A,$,I,R=this.strm,N=this.options.chunkSize,z=this.options.dictionary,V=!1;if(this.ended)return!1;k=y===~~y?y:y===!0?h.Z_FINISH:h.Z_NO_FLUSH,typeof d=="string"?R.input=l.binstring2buf(d):b.call(d)==="[object ArrayBuffer]"?R.input=new Uint8Array(d):R.input=d,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new n.Buf8(N),R.next_out=0,R.avail_out=N),(g=s.inflate(R,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&z&&(I=typeof z=="string"?l.string2buf(z):b.call(z)==="[object ArrayBuffer]"?new Uint8Array(z):z,g=s.inflateSetDictionary(this.strm,I)),g===h.Z_BUF_ERROR&&V===!0&&(g=h.Z_OK,V=!1),g!==h.Z_STREAM_END&&g!==h.Z_OK)return this.onEnd(g),!(this.ended=!0);R.next_out&&(R.avail_out!==0&&g!==h.Z_STREAM_END&&(R.avail_in!==0||k!==h.Z_FINISH&&k!==h.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=l.utf8border(R.output,R.next_out),A=R.next_out-S,$=l.buf2string(R.output,S),R.next_out=A,R.avail_out=N-A,A&&n.arraySet(R.output,R.output,S,A,0),this.onData($)):this.onData(n.shrinkBuf(R.output,R.next_out)))),R.avail_in===0&&R.avail_out===0&&(V=!0)}while((0<R.avail_in||R.avail_out===0)&&g!==h.Z_STREAM_END);return g===h.Z_STREAM_END&&(k=h.Z_FINISH),k===h.Z_FINISH?(g=s.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===h.Z_OK):k!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),!(R.avail_out=0))},u.prototype.onData=function(d){this.chunks.push(d)},u.prototype.onEnd=function(d){d===h.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Inflate=u,r.inflate=w,r.inflateRaw=function(d,y){return(y=y||{}).raw=!0,w(d,y)},r.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(h){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var v=f.shift();if(v){if(typeof v!="object")throw new TypeError(v+"must be non-object");for(var p in v)v.hasOwnProperty(p)&&(h[p]=v[p])}}return h},r.shrinkBuf=function(h,f){return h.length===f?h:h.subarray?h.subarray(0,f):(h.length=f,h)};var n={arraySet:function(h,f,v,p,b){if(f.subarray&&h.subarray)h.set(f.subarray(v,v+p),b);else for(var u=0;u<p;u++)h[b+u]=f[v+u]},flattenChunks:function(h){var f,v,p,b,u,w;for(f=p=0,v=h.length;f<v;f++)p+=h[f].length;for(w=new Uint8Array(p),f=b=0,v=h.length;f<v;f++)u=h[f],w.set(u,b),b+=u.length;return w}},l={arraySet:function(h,f,v,p,b){for(var u=0;u<p;u++)h[b+u]=f[v+u]},flattenChunks:function(h){return[].concat.apply([],h)}};r.setTyped=function(h){h?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,l))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),n=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var h=new s.Buf8(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function v(p,b){if(b<65537&&(p.subarray&&l||!p.subarray&&n))return String.fromCharCode.apply(null,s.shrinkBuf(p,b));for(var u="",w=0;w<b;w++)u+=String.fromCharCode(p[w]);return u}h[254]=h[254]=1,r.string2buf=function(p){var b,u,w,d,y,g=p.length,k=0;for(d=0;d<g;d++)(64512&(u=p.charCodeAt(d)))==55296&&d+1<g&&(64512&(w=p.charCodeAt(d+1)))==56320&&(u=65536+(u-55296<<10)+(w-56320),d++),k+=u<128?1:u<2048?2:u<65536?3:4;for(b=new s.Buf8(k),d=y=0;y<k;d++)(64512&(u=p.charCodeAt(d)))==55296&&d+1<g&&(64512&(w=p.charCodeAt(d+1)))==56320&&(u=65536+(u-55296<<10)+(w-56320),d++),u<128?b[y++]=u:(u<2048?b[y++]=192|u>>>6:(u<65536?b[y++]=224|u>>>12:(b[y++]=240|u>>>18,b[y++]=128|u>>>12&63),b[y++]=128|u>>>6&63),b[y++]=128|63&u);return b},r.buf2binstring=function(p){return v(p,p.length)},r.binstring2buf=function(p){for(var b=new s.Buf8(p.length),u=0,w=b.length;u<w;u++)b[u]=p.charCodeAt(u);return b},r.buf2string=function(p,b){var u,w,d,y,g=b||p.length,k=new Array(2*g);for(u=w=0;u<g;)if((d=p[u++])<128)k[w++]=d;else if(4<(y=h[d]))k[w++]=65533,u+=y-1;else{for(d&=y===2?31:y===3?15:7;1<y&&u<g;)d=d<<6|63&p[u++],y--;1<y?k[w++]=65533:d<65536?k[w++]=d:(d-=65536,k[w++]=55296|d>>10&1023,k[w++]=56320|1023&d)}return v(k,w)},r.utf8border=function(p,b){var u;for((b=b||p.length)>p.length&&(b=p.length),u=b-1;0<=u&&(192&p[u])==128;)u--;return u<0||u===0?b:u+h[p[u]]>b?u:b}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,n,l,h){for(var f=65535&s|0,v=s>>>16&65535|0,p=0;l!==0;){for(l-=p=2e3<l?2e3:l;v=v+(f=f+n[h++]|0)|0,--p;);f%=65521,v%=65521}return f|v<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=function(){for(var n,l=[],h=0;h<256;h++){n=h;for(var f=0;f<8;f++)n=1&n?3988292384^n>>>1:n>>>1;l[h]=n}return l}();i.exports=function(n,l,h,f){var v=s,p=f+h;n^=-1;for(var b=f;b<p;b++)n=n>>>8^v[255&(n^l[b])];return-1^n}},{}],46:[function(e,i,r){var s,n=e("../utils/common"),l=e("./trees"),h=e("./adler32"),f=e("./crc32"),v=e("./messages"),p=0,b=4,u=0,w=-2,d=-1,y=4,g=2,k=8,S=9,A=286,$=30,I=19,R=2*A+1,N=15,z=3,V=258,Q=V+z+1,x=42,j=113,c=1,D=2,et=3,U=4;function rt(a,B){return a.msg=v[B],B}function F(a){return(a<<1)-(4<a?9:0)}function tt(a){for(var B=a.length;0<=--B;)a[B]=0}function O(a){var B=a.state,P=B.pending;P>a.avail_out&&(P=a.avail_out),P!==0&&(n.arraySet(a.output,B.pending_buf,B.pending_out,P,a.next_out),a.next_out+=P,B.pending_out+=P,a.total_out+=P,a.avail_out-=P,B.pending-=P,B.pending===0&&(B.pending_out=0))}function L(a,B){l._tr_flush_block(a,0<=a.block_start?a.block_start:-1,a.strstart-a.block_start,B),a.block_start=a.strstart,O(a.strm)}function J(a,B){a.pending_buf[a.pending++]=B}function q(a,B){a.pending_buf[a.pending++]=B>>>8&255,a.pending_buf[a.pending++]=255&B}function W(a,B){var P,_,m=a.max_chain_length,C=a.strstart,T=a.prev_length,M=a.nice_match,E=a.strstart>a.w_size-Q?a.strstart-(a.w_size-Q):0,Z=a.window,K=a.w_mask,G=a.prev,X=a.strstart+V,ct=Z[C+T-1],nt=Z[C+T];a.prev_length>=a.good_match&&(m>>=2),M>a.lookahead&&(M=a.lookahead);do if(Z[(P=B)+T]===nt&&Z[P+T-1]===ct&&Z[P]===Z[C]&&Z[++P]===Z[C+1]){C+=2,P++;do;while(Z[++C]===Z[++P]&&Z[++C]===Z[++P]&&Z[++C]===Z[++P]&&Z[++C]===Z[++P]&&Z[++C]===Z[++P]&&Z[++C]===Z[++P]&&Z[++C]===Z[++P]&&Z[++C]===Z[++P]&&C<X);if(_=V-(X-C),C=X-V,T<_){if(a.match_start=B,M<=(T=_))break;ct=Z[C+T-1],nt=Z[C+T]}}while((B=G[B&K])>E&&--m!=0);return T<=a.lookahead?T:a.lookahead}function ut(a){var B,P,_,m,C,T,M,E,Z,K,G=a.w_size;do{if(m=a.window_size-a.lookahead-a.strstart,a.strstart>=G+(G-Q)){for(n.arraySet(a.window,a.window,G,G,0),a.match_start-=G,a.strstart-=G,a.block_start-=G,B=P=a.hash_size;_=a.head[--B],a.head[B]=G<=_?_-G:0,--P;);for(B=P=G;_=a.prev[--B],a.prev[B]=G<=_?_-G:0,--P;);m+=G}if(a.strm.avail_in===0)break;if(T=a.strm,M=a.window,E=a.strstart+a.lookahead,Z=m,K=void 0,K=T.avail_in,Z<K&&(K=Z),P=K===0?0:(T.avail_in-=K,n.arraySet(M,T.input,T.next_in,K,E),T.state.wrap===1?T.adler=h(T.adler,M,K,E):T.state.wrap===2&&(T.adler=f(T.adler,M,K,E)),T.next_in+=K,T.total_in+=K,K),a.lookahead+=P,a.lookahead+a.insert>=z)for(C=a.strstart-a.insert,a.ins_h=a.window[C],a.ins_h=(a.ins_h<<a.hash_shift^a.window[C+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[C+z-1])&a.hash_mask,a.prev[C&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=C,C++,a.insert--,!(a.lookahead+a.insert<z)););}while(a.lookahead<Q&&a.strm.avail_in!==0)}function yt(a,B){for(var P,_;;){if(a.lookahead<Q){if(ut(a),a.lookahead<Q&&B===p)return c;if(a.lookahead===0)break}if(P=0,a.lookahead>=z&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+z-1])&a.hash_mask,P=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),P!==0&&a.strstart-P<=a.w_size-Q&&(a.match_length=W(a,P)),a.match_length>=z)if(_=l._tr_tally(a,a.strstart-a.match_start,a.match_length-z),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=z){for(a.match_length--;a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+z-1])&a.hash_mask,P=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart,--a.match_length!=0;);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else _=l._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(_&&(L(a,!1),a.strm.avail_out===0))return c}return a.insert=a.strstart<z-1?a.strstart:z-1,B===b?(L(a,!0),a.strm.avail_out===0?et:U):a.last_lit&&(L(a,!1),a.strm.avail_out===0)?c:D}function it(a,B){for(var P,_,m;;){if(a.lookahead<Q){if(ut(a),a.lookahead<Q&&B===p)return c;if(a.lookahead===0)break}if(P=0,a.lookahead>=z&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+z-1])&a.hash_mask,P=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=z-1,P!==0&&a.prev_length<a.max_lazy_match&&a.strstart-P<=a.w_size-Q&&(a.match_length=W(a,P),a.match_length<=5&&(a.strategy===1||a.match_length===z&&4096<a.strstart-a.match_start)&&(a.match_length=z-1)),a.prev_length>=z&&a.match_length<=a.prev_length){for(m=a.strstart+a.lookahead-z,_=l._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-z),a.lookahead-=a.prev_length-1,a.prev_length-=2;++a.strstart<=m&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+z-1])&a.hash_mask,P=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),--a.prev_length!=0;);if(a.match_available=0,a.match_length=z-1,a.strstart++,_&&(L(a,!1),a.strm.avail_out===0))return c}else if(a.match_available){if((_=l._tr_tally(a,0,a.window[a.strstart-1]))&&L(a,!1),a.strstart++,a.lookahead--,a.strm.avail_out===0)return c}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(_=l._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<z-1?a.strstart:z-1,B===b?(L(a,!0),a.strm.avail_out===0?et:U):a.last_lit&&(L(a,!1),a.strm.avail_out===0)?c:D}function at(a,B,P,_,m){this.good_length=a,this.max_lazy=B,this.nice_length=P,this.max_chain=_,this.func=m}function gt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*R),this.dyn_dtree=new n.Buf16(2*(2*$+1)),this.bl_tree=new n.Buf16(2*(2*I+1)),tt(this.dyn_ltree),tt(this.dyn_dtree),tt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(N+1),this.heap=new n.Buf16(2*A+1),tt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*A+1),tt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function dt(a){var B;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=g,(B=a.state).pending=0,B.pending_out=0,B.wrap<0&&(B.wrap=-B.wrap),B.status=B.wrap?x:j,a.adler=B.wrap===2?0:1,B.last_flush=p,l._tr_init(B),u):rt(a,w)}function kt(a){var B=dt(a);return B===u&&function(P){P.window_size=2*P.w_size,tt(P.head),P.max_lazy_match=s[P.level].max_lazy,P.good_match=s[P.level].good_length,P.nice_match=s[P.level].nice_length,P.max_chain_length=s[P.level].max_chain,P.strstart=0,P.block_start=0,P.lookahead=0,P.insert=0,P.match_length=P.prev_length=z-1,P.match_available=0,P.ins_h=0}(a.state),B}function wt(a,B,P,_,m,C){if(!a)return w;var T=1;if(B===d&&(B=6),_<0?(T=0,_=-_):15<_&&(T=2,_-=16),m<1||S<m||P!==k||_<8||15<_||B<0||9<B||C<0||y<C)return rt(a,w);_===8&&(_=9);var M=new gt;return(a.state=M).strm=a,M.wrap=T,M.gzhead=null,M.w_bits=_,M.w_size=1<<M.w_bits,M.w_mask=M.w_size-1,M.hash_bits=m+7,M.hash_size=1<<M.hash_bits,M.hash_mask=M.hash_size-1,M.hash_shift=~~((M.hash_bits+z-1)/z),M.window=new n.Buf8(2*M.w_size),M.head=new n.Buf16(M.hash_size),M.prev=new n.Buf16(M.w_size),M.lit_bufsize=1<<m+6,M.pending_buf_size=4*M.lit_bufsize,M.pending_buf=new n.Buf8(M.pending_buf_size),M.d_buf=1*M.lit_bufsize,M.l_buf=3*M.lit_bufsize,M.level=B,M.strategy=C,M.method=P,kt(a)}s=[new at(0,0,0,0,function(a,B){var P=65535;for(P>a.pending_buf_size-5&&(P=a.pending_buf_size-5);;){if(a.lookahead<=1){if(ut(a),a.lookahead===0&&B===p)return c;if(a.lookahead===0)break}a.strstart+=a.lookahead,a.lookahead=0;var _=a.block_start+P;if((a.strstart===0||a.strstart>=_)&&(a.lookahead=a.strstart-_,a.strstart=_,L(a,!1),a.strm.avail_out===0)||a.strstart-a.block_start>=a.w_size-Q&&(L(a,!1),a.strm.avail_out===0))return c}return a.insert=0,B===b?(L(a,!0),a.strm.avail_out===0?et:U):(a.strstart>a.block_start&&(L(a,!1),a.strm.avail_out),c)}),new at(4,4,8,4,yt),new at(4,5,16,8,yt),new at(4,6,32,32,yt),new at(4,4,16,16,it),new at(8,16,32,32,it),new at(8,16,128,128,it),new at(8,32,128,256,it),new at(32,128,258,1024,it),new at(32,258,258,4096,it)],r.deflateInit=function(a,B){return wt(a,B,k,15,8,0)},r.deflateInit2=wt,r.deflateReset=kt,r.deflateResetKeep=dt,r.deflateSetHeader=function(a,B){return a&&a.state?a.state.wrap!==2?w:(a.state.gzhead=B,u):w},r.deflate=function(a,B){var P,_,m,C;if(!a||!a.state||5<B||B<0)return a?rt(a,w):w;if(_=a.state,!a.output||!a.input&&a.avail_in!==0||_.status===666&&B!==b)return rt(a,a.avail_out===0?-5:w);if(_.strm=a,P=_.last_flush,_.last_flush=B,_.status===x)if(_.wrap===2)a.adler=0,J(_,31),J(_,139),J(_,8),_.gzhead?(J(_,(_.gzhead.text?1:0)+(_.gzhead.hcrc?2:0)+(_.gzhead.extra?4:0)+(_.gzhead.name?8:0)+(_.gzhead.comment?16:0)),J(_,255&_.gzhead.time),J(_,_.gzhead.time>>8&255),J(_,_.gzhead.time>>16&255),J(_,_.gzhead.time>>24&255),J(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),J(_,255&_.gzhead.os),_.gzhead.extra&&_.gzhead.extra.length&&(J(_,255&_.gzhead.extra.length),J(_,_.gzhead.extra.length>>8&255)),_.gzhead.hcrc&&(a.adler=f(a.adler,_.pending_buf,_.pending,0)),_.gzindex=0,_.status=69):(J(_,0),J(_,0),J(_,0),J(_,0),J(_,0),J(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),J(_,3),_.status=j);else{var T=k+(_.w_bits-8<<4)<<8;T|=(2<=_.strategy||_.level<2?0:_.level<6?1:_.level===6?2:3)<<6,_.strstart!==0&&(T|=32),T+=31-T%31,_.status=j,q(_,T),_.strstart!==0&&(q(_,a.adler>>>16),q(_,65535&a.adler)),a.adler=1}if(_.status===69)if(_.gzhead.extra){for(m=_.pending;_.gzindex<(65535&_.gzhead.extra.length)&&(_.pending!==_.pending_buf_size||(_.gzhead.hcrc&&_.pending>m&&(a.adler=f(a.adler,_.pending_buf,_.pending-m,m)),O(a),m=_.pending,_.pending!==_.pending_buf_size));)J(_,255&_.gzhead.extra[_.gzindex]),_.gzindex++;_.gzhead.hcrc&&_.pending>m&&(a.adler=f(a.adler,_.pending_buf,_.pending-m,m)),_.gzindex===_.gzhead.extra.length&&(_.gzindex=0,_.status=73)}else _.status=73;if(_.status===73)if(_.gzhead.name){m=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>m&&(a.adler=f(a.adler,_.pending_buf,_.pending-m,m)),O(a),m=_.pending,_.pending===_.pending_buf_size)){C=1;break}C=_.gzindex<_.gzhead.name.length?255&_.gzhead.name.charCodeAt(_.gzindex++):0,J(_,C)}while(C!==0);_.gzhead.hcrc&&_.pending>m&&(a.adler=f(a.adler,_.pending_buf,_.pending-m,m)),C===0&&(_.gzindex=0,_.status=91)}else _.status=91;if(_.status===91)if(_.gzhead.comment){m=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>m&&(a.adler=f(a.adler,_.pending_buf,_.pending-m,m)),O(a),m=_.pending,_.pending===_.pending_buf_size)){C=1;break}C=_.gzindex<_.gzhead.comment.length?255&_.gzhead.comment.charCodeAt(_.gzindex++):0,J(_,C)}while(C!==0);_.gzhead.hcrc&&_.pending>m&&(a.adler=f(a.adler,_.pending_buf,_.pending-m,m)),C===0&&(_.status=103)}else _.status=103;if(_.status===103&&(_.gzhead.hcrc?(_.pending+2>_.pending_buf_size&&O(a),_.pending+2<=_.pending_buf_size&&(J(_,255&a.adler),J(_,a.adler>>8&255),a.adler=0,_.status=j)):_.status=j),_.pending!==0){if(O(a),a.avail_out===0)return _.last_flush=-1,u}else if(a.avail_in===0&&F(B)<=F(P)&&B!==b)return rt(a,-5);if(_.status===666&&a.avail_in!==0)return rt(a,-5);if(a.avail_in!==0||_.lookahead!==0||B!==p&&_.status!==666){var M=_.strategy===2?function(E,Z){for(var K;;){if(E.lookahead===0&&(ut(E),E.lookahead===0)){if(Z===p)return c;break}if(E.match_length=0,K=l._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++,K&&(L(E,!1),E.strm.avail_out===0))return c}return E.insert=0,Z===b?(L(E,!0),E.strm.avail_out===0?et:U):E.last_lit&&(L(E,!1),E.strm.avail_out===0)?c:D}(_,B):_.strategy===3?function(E,Z){for(var K,G,X,ct,nt=E.window;;){if(E.lookahead<=V){if(ut(E),E.lookahead<=V&&Z===p)return c;if(E.lookahead===0)break}if(E.match_length=0,E.lookahead>=z&&0<E.strstart&&(G=nt[X=E.strstart-1])===nt[++X]&&G===nt[++X]&&G===nt[++X]){ct=E.strstart+V;do;while(G===nt[++X]&&G===nt[++X]&&G===nt[++X]&&G===nt[++X]&&G===nt[++X]&&G===nt[++X]&&G===nt[++X]&&G===nt[++X]&&X<ct);E.match_length=V-(ct-X),E.match_length>E.lookahead&&(E.match_length=E.lookahead)}if(E.match_length>=z?(K=l._tr_tally(E,1,E.match_length-z),E.lookahead-=E.match_length,E.strstart+=E.match_length,E.match_length=0):(K=l._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++),K&&(L(E,!1),E.strm.avail_out===0))return c}return E.insert=0,Z===b?(L(E,!0),E.strm.avail_out===0?et:U):E.last_lit&&(L(E,!1),E.strm.avail_out===0)?c:D}(_,B):s[_.level].func(_,B);if(M!==et&&M!==U||(_.status=666),M===c||M===et)return a.avail_out===0&&(_.last_flush=-1),u;if(M===D&&(B===1?l._tr_align(_):B!==5&&(l._tr_stored_block(_,0,0,!1),B===3&&(tt(_.head),_.lookahead===0&&(_.strstart=0,_.block_start=0,_.insert=0))),O(a),a.avail_out===0))return _.last_flush=-1,u}return B!==b?u:_.wrap<=0?1:(_.wrap===2?(J(_,255&a.adler),J(_,a.adler>>8&255),J(_,a.adler>>16&255),J(_,a.adler>>24&255),J(_,255&a.total_in),J(_,a.total_in>>8&255),J(_,a.total_in>>16&255),J(_,a.total_in>>24&255)):(q(_,a.adler>>>16),q(_,65535&a.adler)),O(a),0<_.wrap&&(_.wrap=-_.wrap),_.pending!==0?u:1)},r.deflateEnd=function(a){var B;return a&&a.state?(B=a.state.status)!==x&&B!==69&&B!==73&&B!==91&&B!==103&&B!==j&&B!==666?rt(a,w):(a.state=null,B===j?rt(a,-3):u):w},r.deflateSetDictionary=function(a,B){var P,_,m,C,T,M,E,Z,K=B.length;if(!a||!a.state||(C=(P=a.state).wrap)===2||C===1&&P.status!==x||P.lookahead)return w;for(C===1&&(a.adler=h(a.adler,B,K,0)),P.wrap=0,K>=P.w_size&&(C===0&&(tt(P.head),P.strstart=0,P.block_start=0,P.insert=0),Z=new n.Buf8(P.w_size),n.arraySet(Z,B,K-P.w_size,P.w_size,0),B=Z,K=P.w_size),T=a.avail_in,M=a.next_in,E=a.input,a.avail_in=K,a.next_in=0,a.input=B,ut(P);P.lookahead>=z;){for(_=P.strstart,m=P.lookahead-(z-1);P.ins_h=(P.ins_h<<P.hash_shift^P.window[_+z-1])&P.hash_mask,P.prev[_&P.w_mask]=P.head[P.ins_h],P.head[P.ins_h]=_,_++,--m;);P.strstart=_,P.lookahead=z-1,ut(P)}return P.strstart+=P.lookahead,P.block_start=P.strstart,P.insert=P.lookahead,P.lookahead=0,P.match_length=P.prev_length=z-1,P.match_available=0,a.next_in=M,a.input=E,a.avail_in=T,P.wrap=C,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,n){var l,h,f,v,p,b,u,w,d,y,g,k,S,A,$,I,R,N,z,V,Q,x,j,c,D;l=s.state,h=s.next_in,c=s.input,f=h+(s.avail_in-5),v=s.next_out,D=s.output,p=v-(n-s.avail_out),b=v+(s.avail_out-257),u=l.dmax,w=l.wsize,d=l.whave,y=l.wnext,g=l.window,k=l.hold,S=l.bits,A=l.lencode,$=l.distcode,I=(1<<l.lenbits)-1,R=(1<<l.distbits)-1;t:do{S<15&&(k+=c[h++]<<S,S+=8,k+=c[h++]<<S,S+=8),N=A[k&I];e:for(;;){if(k>>>=z=N>>>24,S-=z,(z=N>>>16&255)===0)D[v++]=65535&N;else{if(!(16&z)){if(!(64&z)){N=A[(65535&N)+(k&(1<<z)-1)];continue e}if(32&z){l.mode=12;break t}s.msg="invalid literal/length code",l.mode=30;break t}V=65535&N,(z&=15)&&(S<z&&(k+=c[h++]<<S,S+=8),V+=k&(1<<z)-1,k>>>=z,S-=z),S<15&&(k+=c[h++]<<S,S+=8,k+=c[h++]<<S,S+=8),N=$[k&R];r:for(;;){if(k>>>=z=N>>>24,S-=z,!(16&(z=N>>>16&255))){if(!(64&z)){N=$[(65535&N)+(k&(1<<z)-1)];continue r}s.msg="invalid distance code",l.mode=30;break t}if(Q=65535&N,S<(z&=15)&&(k+=c[h++]<<S,(S+=8)<z&&(k+=c[h++]<<S,S+=8)),u<(Q+=k&(1<<z)-1)){s.msg="invalid distance too far back",l.mode=30;break t}if(k>>>=z,S-=z,(z=v-p)<Q){if(d<(z=Q-z)&&l.sane){s.msg="invalid distance too far back",l.mode=30;break t}if(j=g,(x=0)===y){if(x+=w-z,z<V){for(V-=z;D[v++]=g[x++],--z;);x=v-Q,j=D}}else if(y<z){if(x+=w+y-z,(z-=y)<V){for(V-=z;D[v++]=g[x++],--z;);if(x=0,y<V){for(V-=z=y;D[v++]=g[x++],--z;);x=v-Q,j=D}}}else if(x+=y-z,z<V){for(V-=z;D[v++]=g[x++],--z;);x=v-Q,j=D}for(;2<V;)D[v++]=j[x++],D[v++]=j[x++],D[v++]=j[x++],V-=3;V&&(D[v++]=j[x++],1<V&&(D[v++]=j[x++]))}else{for(x=v-Q;D[v++]=D[x++],D[v++]=D[x++],D[v++]=D[x++],2<(V-=3););V&&(D[v++]=D[x++],1<V&&(D[v++]=D[x++]))}break}}break}}while(h<f&&v<b);h-=V=S>>3,k&=(1<<(S-=V<<3))-1,s.next_in=h,s.next_out=v,s.avail_in=h<f?f-h+5:5-(h-f),s.avail_out=v<b?b-v+257:257-(v-b),l.hold=k,l.bits=S}},{}],49:[function(e,i,r){var s=e("../utils/common"),n=e("./adler32"),l=e("./crc32"),h=e("./inffast"),f=e("./inftrees"),v=1,p=2,b=0,u=-2,w=1,d=852,y=592;function g(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(x){var j;return x&&x.state?(j=x.state,x.total_in=x.total_out=j.total=0,x.msg="",j.wrap&&(x.adler=1&j.wrap),j.mode=w,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new s.Buf32(d),j.distcode=j.distdyn=new s.Buf32(y),j.sane=1,j.back=-1,b):u}function A(x){var j;return x&&x.state?((j=x.state).wsize=0,j.whave=0,j.wnext=0,S(x)):u}function $(x,j){var c,D;return x&&x.state?(D=x.state,j<0?(c=0,j=-j):(c=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?u:(D.window!==null&&D.wbits!==j&&(D.window=null),D.wrap=c,D.wbits=j,A(x))):u}function I(x,j){var c,D;return x?(D=new k,(x.state=D).window=null,(c=$(x,j))!==b&&(x.state=null),c):u}var R,N,z=!0;function V(x){if(z){var j;for(R=new s.Buf32(512),N=new s.Buf32(32),j=0;j<144;)x.lens[j++]=8;for(;j<256;)x.lens[j++]=9;for(;j<280;)x.lens[j++]=7;for(;j<288;)x.lens[j++]=8;for(f(v,x.lens,0,288,R,0,x.work,{bits:9}),j=0;j<32;)x.lens[j++]=5;f(p,x.lens,0,32,N,0,x.work,{bits:5}),z=!1}x.lencode=R,x.lenbits=9,x.distcode=N,x.distbits=5}function Q(x,j,c,D){var et,U=x.state;return U.window===null&&(U.wsize=1<<U.wbits,U.wnext=0,U.whave=0,U.window=new s.Buf8(U.wsize)),D>=U.wsize?(s.arraySet(U.window,j,c-U.wsize,U.wsize,0),U.wnext=0,U.whave=U.wsize):(D<(et=U.wsize-U.wnext)&&(et=D),s.arraySet(U.window,j,c-D,et,U.wnext),(D-=et)?(s.arraySet(U.window,j,c-D,D,0),U.wnext=D,U.whave=U.wsize):(U.wnext+=et,U.wnext===U.wsize&&(U.wnext=0),U.whave<U.wsize&&(U.whave+=et))),0}r.inflateReset=A,r.inflateReset2=$,r.inflateResetKeep=S,r.inflateInit=function(x){return I(x,15)},r.inflateInit2=I,r.inflate=function(x,j){var c,D,et,U,rt,F,tt,O,L,J,q,W,ut,yt,it,at,gt,dt,kt,wt,a,B,P,_,m=0,C=new s.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return u;(c=x.state).mode===12&&(c.mode=13),rt=x.next_out,et=x.output,tt=x.avail_out,U=x.next_in,D=x.input,F=x.avail_in,O=c.hold,L=c.bits,J=F,q=tt,B=b;t:for(;;)switch(c.mode){case w:if(c.wrap===0){c.mode=13;break}for(;L<16;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(2&c.wrap&&O===35615){C[c.check=0]=255&O,C[1]=O>>>8&255,c.check=l(c.check,C,2,0),L=O=0,c.mode=2;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&O)<<8)+(O>>8))%31){x.msg="incorrect header check",c.mode=30;break}if((15&O)!=8){x.msg="unknown compression method",c.mode=30;break}if(L-=4,a=8+(15&(O>>>=4)),c.wbits===0)c.wbits=a;else if(a>c.wbits){x.msg="invalid window size",c.mode=30;break}c.dmax=1<<a,x.adler=c.check=1,c.mode=512&O?10:12,L=O=0;break;case 2:for(;L<16;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(c.flags=O,(255&c.flags)!=8){x.msg="unknown compression method",c.mode=30;break}if(57344&c.flags){x.msg="unknown header flags set",c.mode=30;break}c.head&&(c.head.text=O>>8&1),512&c.flags&&(C[0]=255&O,C[1]=O>>>8&255,c.check=l(c.check,C,2,0)),L=O=0,c.mode=3;case 3:for(;L<32;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}c.head&&(c.head.time=O),512&c.flags&&(C[0]=255&O,C[1]=O>>>8&255,C[2]=O>>>16&255,C[3]=O>>>24&255,c.check=l(c.check,C,4,0)),L=O=0,c.mode=4;case 4:for(;L<16;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}c.head&&(c.head.xflags=255&O,c.head.os=O>>8),512&c.flags&&(C[0]=255&O,C[1]=O>>>8&255,c.check=l(c.check,C,2,0)),L=O=0,c.mode=5;case 5:if(1024&c.flags){for(;L<16;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}c.length=O,c.head&&(c.head.extra_len=O),512&c.flags&&(C[0]=255&O,C[1]=O>>>8&255,c.check=l(c.check,C,2,0)),L=O=0}else c.head&&(c.head.extra=null);c.mode=6;case 6:if(1024&c.flags&&(F<(W=c.length)&&(W=F),W&&(c.head&&(a=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),s.arraySet(c.head.extra,D,U,W,a)),512&c.flags&&(c.check=l(c.check,D,W,U)),F-=W,U+=W,c.length-=W),c.length))break t;c.length=0,c.mode=7;case 7:if(2048&c.flags){if(F===0)break t;for(W=0;a=D[U+W++],c.head&&a&&c.length<65536&&(c.head.name+=String.fromCharCode(a)),a&&W<F;);if(512&c.flags&&(c.check=l(c.check,D,W,U)),F-=W,U+=W,a)break t}else c.head&&(c.head.name=null);c.length=0,c.mode=8;case 8:if(4096&c.flags){if(F===0)break t;for(W=0;a=D[U+W++],c.head&&a&&c.length<65536&&(c.head.comment+=String.fromCharCode(a)),a&&W<F;);if(512&c.flags&&(c.check=l(c.check,D,W,U)),F-=W,U+=W,a)break t}else c.head&&(c.head.comment=null);c.mode=9;case 9:if(512&c.flags){for(;L<16;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(O!==(65535&c.check)){x.msg="header crc mismatch",c.mode=30;break}L=O=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),x.adler=c.check=0,c.mode=12;break;case 10:for(;L<32;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}x.adler=c.check=g(O),L=O=0,c.mode=11;case 11:if(c.havedict===0)return x.next_out=rt,x.avail_out=tt,x.next_in=U,x.avail_in=F,c.hold=O,c.bits=L,2;x.adler=c.check=1,c.mode=12;case 12:if(j===5||j===6)break t;case 13:if(c.last){O>>>=7&L,L-=7&L,c.mode=27;break}for(;L<3;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}switch(c.last=1&O,L-=1,3&(O>>>=1)){case 0:c.mode=14;break;case 1:if(V(c),c.mode=20,j!==6)break;O>>>=2,L-=2;break t;case 2:c.mode=17;break;case 3:x.msg="invalid block type",c.mode=30}O>>>=2,L-=2;break;case 14:for(O>>>=7&L,L-=7&L;L<32;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if((65535&O)!=(O>>>16^65535)){x.msg="invalid stored block lengths",c.mode=30;break}if(c.length=65535&O,L=O=0,c.mode=15,j===6)break t;case 15:c.mode=16;case 16:if(W=c.length){if(F<W&&(W=F),tt<W&&(W=tt),W===0)break t;s.arraySet(et,D,U,W,rt),F-=W,U+=W,tt-=W,rt+=W,c.length-=W;break}c.mode=12;break;case 17:for(;L<14;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(c.nlen=257+(31&O),O>>>=5,L-=5,c.ndist=1+(31&O),O>>>=5,L-=5,c.ncode=4+(15&O),O>>>=4,L-=4,286<c.nlen||30<c.ndist){x.msg="too many length or distance symbols",c.mode=30;break}c.have=0,c.mode=18;case 18:for(;c.have<c.ncode;){for(;L<3;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}c.lens[T[c.have++]]=7&O,O>>>=3,L-=3}for(;c.have<19;)c.lens[T[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,P={bits:c.lenbits},B=f(0,c.lens,0,19,c.lencode,0,c.work,P),c.lenbits=P.bits,B){x.msg="invalid code lengths set",c.mode=30;break}c.have=0,c.mode=19;case 19:for(;c.have<c.nlen+c.ndist;){for(;at=(m=c.lencode[O&(1<<c.lenbits)-1])>>>16&255,gt=65535&m,!((it=m>>>24)<=L);){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(gt<16)O>>>=it,L-=it,c.lens[c.have++]=gt;else{if(gt===16){for(_=it+2;L<_;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(O>>>=it,L-=it,c.have===0){x.msg="invalid bit length repeat",c.mode=30;break}a=c.lens[c.have-1],W=3+(3&O),O>>>=2,L-=2}else if(gt===17){for(_=it+3;L<_;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}L-=it,a=0,W=3+(7&(O>>>=it)),O>>>=3,L-=3}else{for(_=it+7;L<_;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}L-=it,a=0,W=11+(127&(O>>>=it)),O>>>=7,L-=7}if(c.have+W>c.nlen+c.ndist){x.msg="invalid bit length repeat",c.mode=30;break}for(;W--;)c.lens[c.have++]=a}}if(c.mode===30)break;if(c.lens[256]===0){x.msg="invalid code -- missing end-of-block",c.mode=30;break}if(c.lenbits=9,P={bits:c.lenbits},B=f(v,c.lens,0,c.nlen,c.lencode,0,c.work,P),c.lenbits=P.bits,B){x.msg="invalid literal/lengths set",c.mode=30;break}if(c.distbits=6,c.distcode=c.distdyn,P={bits:c.distbits},B=f(p,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,P),c.distbits=P.bits,B){x.msg="invalid distances set",c.mode=30;break}if(c.mode=20,j===6)break t;case 20:c.mode=21;case 21:if(6<=F&&258<=tt){x.next_out=rt,x.avail_out=tt,x.next_in=U,x.avail_in=F,c.hold=O,c.bits=L,h(x,q),rt=x.next_out,et=x.output,tt=x.avail_out,U=x.next_in,D=x.input,F=x.avail_in,O=c.hold,L=c.bits,c.mode===12&&(c.back=-1);break}for(c.back=0;at=(m=c.lencode[O&(1<<c.lenbits)-1])>>>16&255,gt=65535&m,!((it=m>>>24)<=L);){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(at&&!(240&at)){for(dt=it,kt=at,wt=gt;at=(m=c.lencode[wt+((O&(1<<dt+kt)-1)>>dt)])>>>16&255,gt=65535&m,!(dt+(it=m>>>24)<=L);){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}O>>>=dt,L-=dt,c.back+=dt}if(O>>>=it,L-=it,c.back+=it,c.length=gt,at===0){c.mode=26;break}if(32&at){c.back=-1,c.mode=12;break}if(64&at){x.msg="invalid literal/length code",c.mode=30;break}c.extra=15&at,c.mode=22;case 22:if(c.extra){for(_=c.extra;L<_;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}c.length+=O&(1<<c.extra)-1,O>>>=c.extra,L-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=23;case 23:for(;at=(m=c.distcode[O&(1<<c.distbits)-1])>>>16&255,gt=65535&m,!((it=m>>>24)<=L);){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(!(240&at)){for(dt=it,kt=at,wt=gt;at=(m=c.distcode[wt+((O&(1<<dt+kt)-1)>>dt)])>>>16&255,gt=65535&m,!(dt+(it=m>>>24)<=L);){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}O>>>=dt,L-=dt,c.back+=dt}if(O>>>=it,L-=it,c.back+=it,64&at){x.msg="invalid distance code",c.mode=30;break}c.offset=gt,c.extra=15&at,c.mode=24;case 24:if(c.extra){for(_=c.extra;L<_;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}c.offset+=O&(1<<c.extra)-1,O>>>=c.extra,L-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){x.msg="invalid distance too far back",c.mode=30;break}c.mode=25;case 25:if(tt===0)break t;if(W=q-tt,c.offset>W){if((W=c.offset-W)>c.whave&&c.sane){x.msg="invalid distance too far back",c.mode=30;break}ut=W>c.wnext?(W-=c.wnext,c.wsize-W):c.wnext-W,W>c.length&&(W=c.length),yt=c.window}else yt=et,ut=rt-c.offset,W=c.length;for(tt<W&&(W=tt),tt-=W,c.length-=W;et[rt++]=yt[ut++],--W;);c.length===0&&(c.mode=21);break;case 26:if(tt===0)break t;et[rt++]=c.length,tt--,c.mode=21;break;case 27:if(c.wrap){for(;L<32;){if(F===0)break t;F--,O|=D[U++]<<L,L+=8}if(q-=tt,x.total_out+=q,c.total+=q,q&&(x.adler=c.check=c.flags?l(c.check,et,q,rt-q):n(c.check,et,q,rt-q)),q=tt,(c.flags?O:g(O))!==c.check){x.msg="incorrect data check",c.mode=30;break}L=O=0}c.mode=28;case 28:if(c.wrap&&c.flags){for(;L<32;){if(F===0)break t;F--,O+=D[U++]<<L,L+=8}if(O!==(4294967295&c.total)){x.msg="incorrect length check",c.mode=30;break}L=O=0}c.mode=29;case 29:B=1;break t;case 30:B=-3;break t;case 31:return-4;case 32:default:return u}return x.next_out=rt,x.avail_out=tt,x.next_in=U,x.avail_in=F,c.hold=O,c.bits=L,(c.wsize||q!==x.avail_out&&c.mode<30&&(c.mode<27||j!==4))&&Q(x,x.output,x.next_out,q-x.avail_out)?(c.mode=31,-4):(J-=x.avail_in,q-=x.avail_out,x.total_in+=J,x.total_out+=q,c.total+=q,c.wrap&&q&&(x.adler=c.check=c.flags?l(c.check,et,q,x.next_out-q):n(c.check,et,q,x.next_out-q)),x.data_type=c.bits+(c.last?64:0)+(c.mode===12?128:0)+(c.mode===20||c.mode===15?256:0),(J==0&&q===0||j===4)&&B===b&&(B=-5),B)},r.inflateEnd=function(x){if(!x||!x.state)return u;var j=x.state;return j.window&&(j.window=null),x.state=null,b},r.inflateGetHeader=function(x,j){var c;return x&&x.state&&2&(c=x.state).wrap?((c.head=j).done=!1,b):u},r.inflateSetDictionary=function(x,j){var c,D=j.length;return x&&x.state?(c=x.state).wrap!==0&&c.mode!==11?u:c.mode===11&&n(1,j,D,0)!==c.check?-3:Q(x,j,D,D)?(c.mode=31,-4):(c.havedict=1,b):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(v,p,b,u,w,d,y,g){var k,S,A,$,I,R,N,z,V,Q=g.bits,x=0,j=0,c=0,D=0,et=0,U=0,rt=0,F=0,tt=0,O=0,L=null,J=0,q=new s.Buf16(16),W=new s.Buf16(16),ut=null,yt=0;for(x=0;x<=15;x++)q[x]=0;for(j=0;j<u;j++)q[p[b+j]]++;for(et=Q,D=15;1<=D&&q[D]===0;D--);if(D<et&&(et=D),D===0)return w[d++]=20971520,w[d++]=20971520,g.bits=1,0;for(c=1;c<D&&q[c]===0;c++);for(et<c&&(et=c),x=F=1;x<=15;x++)if(F<<=1,(F-=q[x])<0)return-1;if(0<F&&(v===0||D!==1))return-1;for(W[1]=0,x=1;x<15;x++)W[x+1]=W[x]+q[x];for(j=0;j<u;j++)p[b+j]!==0&&(y[W[p[b+j]]++]=j);if(R=v===0?(L=ut=y,19):v===1?(L=n,J-=257,ut=l,yt-=257,256):(L=h,ut=f,-1),x=c,I=d,rt=j=O=0,A=-1,$=(tt=1<<(U=et))-1,v===1&&852<tt||v===2&&592<tt)return 1;for(;;){for(N=x-rt,V=y[j]<R?(z=0,y[j]):y[j]>R?(z=ut[yt+y[j]],L[J+y[j]]):(z=96,0),k=1<<x-rt,c=S=1<<U;w[I+(O>>rt)+(S-=k)]=N<<24|z<<16|V|0,S!==0;);for(k=1<<x-1;O&k;)k>>=1;if(k!==0?(O&=k-1,O+=k):O=0,j++,--q[x]==0){if(x===D)break;x=p[b+y[j]]}if(et<x&&(O&$)!==A){for(rt===0&&(rt=et),I+=c,F=1<<(U=x-rt);U+rt<D&&!((F-=q[U+rt])<=0);)U++,F<<=1;if(tt+=1<<U,v===1&&852<tt||v===2&&592<tt)return 1;w[A=O&$]=et<<24|U<<16|I-d|0}}return O!==0&&(w[I+O]=x-rt<<24|64<<16|0),g.bits=et,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),n=0,l=1;function h(m){for(var C=m.length;0<=--C;)m[C]=0}var f=0,v=29,p=256,b=p+1+v,u=30,w=19,d=2*b+1,y=15,g=16,k=7,S=256,A=16,$=17,I=18,R=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],z=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(b+2));h(Q);var x=new Array(2*u);h(x);var j=new Array(512);h(j);var c=new Array(256);h(c);var D=new Array(v);h(D);var et,U,rt,F=new Array(u);function tt(m,C,T,M,E){this.static_tree=m,this.extra_bits=C,this.extra_base=T,this.elems=M,this.max_length=E,this.has_stree=m&&m.length}function O(m,C){this.dyn_tree=m,this.max_code=0,this.stat_desc=C}function L(m){return m<256?j[m]:j[256+(m>>>7)]}function J(m,C){m.pending_buf[m.pending++]=255&C,m.pending_buf[m.pending++]=C>>>8&255}function q(m,C,T){m.bi_valid>g-T?(m.bi_buf|=C<<m.bi_valid&65535,J(m,m.bi_buf),m.bi_buf=C>>g-m.bi_valid,m.bi_valid+=T-g):(m.bi_buf|=C<<m.bi_valid&65535,m.bi_valid+=T)}function W(m,C,T){q(m,T[2*C],T[2*C+1])}function ut(m,C){for(var T=0;T|=1&m,m>>>=1,T<<=1,0<--C;);return T>>>1}function yt(m,C,T){var M,E,Z=new Array(y+1),K=0;for(M=1;M<=y;M++)Z[M]=K=K+T[M-1]<<1;for(E=0;E<=C;E++){var G=m[2*E+1];G!==0&&(m[2*E]=ut(Z[G]++,G))}}function it(m){var C;for(C=0;C<b;C++)m.dyn_ltree[2*C]=0;for(C=0;C<u;C++)m.dyn_dtree[2*C]=0;for(C=0;C<w;C++)m.bl_tree[2*C]=0;m.dyn_ltree[2*S]=1,m.opt_len=m.static_len=0,m.last_lit=m.matches=0}function at(m){8<m.bi_valid?J(m,m.bi_buf):0<m.bi_valid&&(m.pending_buf[m.pending++]=m.bi_buf),m.bi_buf=0,m.bi_valid=0}function gt(m,C,T,M){var E=2*C,Z=2*T;return m[E]<m[Z]||m[E]===m[Z]&&M[C]<=M[T]}function dt(m,C,T){for(var M=m.heap[T],E=T<<1;E<=m.heap_len&&(E<m.heap_len&&gt(C,m.heap[E+1],m.heap[E],m.depth)&&E++,!gt(C,M,m.heap[E],m.depth));)m.heap[T]=m.heap[E],T=E,E<<=1;m.heap[T]=M}function kt(m,C,T){var M,E,Z,K,G=0;if(m.last_lit!==0)for(;M=m.pending_buf[m.d_buf+2*G]<<8|m.pending_buf[m.d_buf+2*G+1],E=m.pending_buf[m.l_buf+G],G++,M===0?W(m,E,C):(W(m,(Z=c[E])+p+1,C),(K=R[Z])!==0&&q(m,E-=D[Z],K),W(m,Z=L(--M),T),(K=N[Z])!==0&&q(m,M-=F[Z],K)),G<m.last_lit;);W(m,S,C)}function wt(m,C){var T,M,E,Z=C.dyn_tree,K=C.stat_desc.static_tree,G=C.stat_desc.has_stree,X=C.stat_desc.elems,ct=-1;for(m.heap_len=0,m.heap_max=d,T=0;T<X;T++)Z[2*T]!==0?(m.heap[++m.heap_len]=ct=T,m.depth[T]=0):Z[2*T+1]=0;for(;m.heap_len<2;)Z[2*(E=m.heap[++m.heap_len]=ct<2?++ct:0)]=1,m.depth[E]=0,m.opt_len--,G&&(m.static_len-=K[2*E+1]);for(C.max_code=ct,T=m.heap_len>>1;1<=T;T--)dt(m,Z,T);for(E=X;T=m.heap[1],m.heap[1]=m.heap[m.heap_len--],dt(m,Z,1),M=m.heap[1],m.heap[--m.heap_max]=T,m.heap[--m.heap_max]=M,Z[2*E]=Z[2*T]+Z[2*M],m.depth[E]=(m.depth[T]>=m.depth[M]?m.depth[T]:m.depth[M])+1,Z[2*T+1]=Z[2*M+1]=E,m.heap[1]=E++,dt(m,Z,1),2<=m.heap_len;);m.heap[--m.heap_max]=m.heap[1],function(nt,bt){var de,xt,pe,pt,Me,ur,$t=bt.dyn_tree,qr=bt.max_code,hn=bt.stat_desc.static_tree,un=bt.stat_desc.has_stree,dn=bt.stat_desc.extra_bits,Kr=bt.stat_desc.extra_base,fe=bt.stat_desc.max_length,Ue=0;for(pt=0;pt<=y;pt++)nt.bl_count[pt]=0;for($t[2*nt.heap[nt.heap_max]+1]=0,de=nt.heap_max+1;de<d;de++)fe<(pt=$t[2*$t[2*(xt=nt.heap[de])+1]+1]+1)&&(pt=fe,Ue++),$t[2*xt+1]=pt,qr<xt||(nt.bl_count[pt]++,Me=0,Kr<=xt&&(Me=dn[xt-Kr]),ur=$t[2*xt],nt.opt_len+=ur*(pt+Me),un&&(nt.static_len+=ur*(hn[2*xt+1]+Me)));if(Ue!==0){do{for(pt=fe-1;nt.bl_count[pt]===0;)pt--;nt.bl_count[pt]--,nt.bl_count[pt+1]+=2,nt.bl_count[fe]--,Ue-=2}while(0<Ue);for(pt=fe;pt!==0;pt--)for(xt=nt.bl_count[pt];xt!==0;)qr<(pe=nt.heap[--de])||($t[2*pe+1]!==pt&&(nt.opt_len+=(pt-$t[2*pe+1])*$t[2*pe],$t[2*pe+1]=pt),xt--)}}(m,C),yt(Z,ct,m.bl_count)}function a(m,C,T){var M,E,Z=-1,K=C[1],G=0,X=7,ct=4;for(K===0&&(X=138,ct=3),C[2*(T+1)+1]=65535,M=0;M<=T;M++)E=K,K=C[2*(M+1)+1],++G<X&&E===K||(G<ct?m.bl_tree[2*E]+=G:E!==0?(E!==Z&&m.bl_tree[2*E]++,m.bl_tree[2*A]++):G<=10?m.bl_tree[2*$]++:m.bl_tree[2*I]++,Z=E,ct=(G=0)===K?(X=138,3):E===K?(X=6,3):(X=7,4))}function B(m,C,T){var M,E,Z=-1,K=C[1],G=0,X=7,ct=4;for(K===0&&(X=138,ct=3),M=0;M<=T;M++)if(E=K,K=C[2*(M+1)+1],!(++G<X&&E===K)){if(G<ct)for(;W(m,E,m.bl_tree),--G!=0;);else E!==0?(E!==Z&&(W(m,E,m.bl_tree),G--),W(m,A,m.bl_tree),q(m,G-3,2)):G<=10?(W(m,$,m.bl_tree),q(m,G-3,3)):(W(m,I,m.bl_tree),q(m,G-11,7));Z=E,ct=(G=0)===K?(X=138,3):E===K?(X=6,3):(X=7,4)}}h(F);var P=!1;function _(m,C,T,M){q(m,(f<<1)+(M?1:0),3),function(E,Z,K,G){at(E),J(E,K),J(E,~K),s.arraySet(E.pending_buf,E.window,Z,K,E.pending),E.pending+=K}(m,C,T)}r._tr_init=function(m){P||(function(){var C,T,M,E,Z,K=new Array(y+1);for(E=M=0;E<v-1;E++)for(D[E]=M,C=0;C<1<<R[E];C++)c[M++]=E;for(c[M-1]=E,E=Z=0;E<16;E++)for(F[E]=Z,C=0;C<1<<N[E];C++)j[Z++]=E;for(Z>>=7;E<u;E++)for(F[E]=Z<<7,C=0;C<1<<N[E]-7;C++)j[256+Z++]=E;for(T=0;T<=y;T++)K[T]=0;for(C=0;C<=143;)Q[2*C+1]=8,C++,K[8]++;for(;C<=255;)Q[2*C+1]=9,C++,K[9]++;for(;C<=279;)Q[2*C+1]=7,C++,K[7]++;for(;C<=287;)Q[2*C+1]=8,C++,K[8]++;for(yt(Q,b+1,K),C=0;C<u;C++)x[2*C+1]=5,x[2*C]=ut(C,5);et=new tt(Q,R,p+1,b,y),U=new tt(x,N,0,u,y),rt=new tt(new Array(0),z,0,w,k)}(),P=!0),m.l_desc=new O(m.dyn_ltree,et),m.d_desc=new O(m.dyn_dtree,U),m.bl_desc=new O(m.bl_tree,rt),m.bi_buf=0,m.bi_valid=0,it(m)},r._tr_stored_block=_,r._tr_flush_block=function(m,C,T,M){var E,Z,K=0;0<m.level?(m.strm.data_type===2&&(m.strm.data_type=function(G){var X,ct=4093624447;for(X=0;X<=31;X++,ct>>>=1)if(1&ct&&G.dyn_ltree[2*X]!==0)return n;if(G.dyn_ltree[18]!==0||G.dyn_ltree[20]!==0||G.dyn_ltree[26]!==0)return l;for(X=32;X<p;X++)if(G.dyn_ltree[2*X]!==0)return l;return n}(m)),wt(m,m.l_desc),wt(m,m.d_desc),K=function(G){var X;for(a(G,G.dyn_ltree,G.l_desc.max_code),a(G,G.dyn_dtree,G.d_desc.max_code),wt(G,G.bl_desc),X=w-1;3<=X&&G.bl_tree[2*V[X]+1]===0;X--);return G.opt_len+=3*(X+1)+5+5+4,X}(m),E=m.opt_len+3+7>>>3,(Z=m.static_len+3+7>>>3)<=E&&(E=Z)):E=Z=T+5,T+4<=E&&C!==-1?_(m,C,T,M):m.strategy===4||Z===E?(q(m,2+(M?1:0),3),kt(m,Q,x)):(q(m,4+(M?1:0),3),function(G,X,ct,nt){var bt;for(q(G,X-257,5),q(G,ct-1,5),q(G,nt-4,4),bt=0;bt<nt;bt++)q(G,G.bl_tree[2*V[bt]+1],3);B(G,G.dyn_ltree,X-1),B(G,G.dyn_dtree,ct-1)}(m,m.l_desc.max_code+1,m.d_desc.max_code+1,K+1),kt(m,m.dyn_ltree,m.dyn_dtree)),it(m),M&&at(m)},r._tr_tally=function(m,C,T){return m.pending_buf[m.d_buf+2*m.last_lit]=C>>>8&255,m.pending_buf[m.d_buf+2*m.last_lit+1]=255&C,m.pending_buf[m.l_buf+m.last_lit]=255&T,m.last_lit++,C===0?m.dyn_ltree[2*T]++:(m.matches++,C--,m.dyn_ltree[2*(c[T]+p+1)]++,m.dyn_dtree[2*L(C)]++),m.last_lit===m.lit_bufsize-1},r._tr_align=function(m){q(m,2,3),W(m,S,Q),function(C){C.bi_valid===16?(J(C,C.bi_buf),C.bi_buf=0,C.bi_valid=0):8<=C.bi_valid&&(C.pending_buf[C.pending++]=255&C.bi_buf,C.bi_buf>>=8,C.bi_valid-=8)}(m)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(n,l){if(!n.setImmediate){var h,f,v,p,b=1,u={},w=!1,d=n.document,y=Object.getPrototypeOf&&Object.getPrototypeOf(n);y=y&&y.setTimeout?y:n,h={}.toString.call(n.process)==="[object process]"?function(A){process.nextTick(function(){k(A)})}:function(){if(n.postMessage&&!n.importScripts){var A=!0,$=n.onmessage;return n.onmessage=function(){A=!1},n.postMessage("","*"),n.onmessage=$,A}}()?(p="setImmediate$"+Math.random()+"$",n.addEventListener?n.addEventListener("message",S,!1):n.attachEvent("onmessage",S),function(A){n.postMessage(p+A,"*")}):n.MessageChannel?((v=new MessageChannel).port1.onmessage=function(A){k(A.data)},function(A){v.port2.postMessage(A)}):d&&"onreadystatechange"in d.createElement("script")?(f=d.documentElement,function(A){var $=d.createElement("script");$.onreadystatechange=function(){k(A),$.onreadystatechange=null,f.removeChild($),$=null},f.appendChild($)}):function(A){setTimeout(k,0,A)},y.setImmediate=function(A){typeof A!="function"&&(A=new Function(""+A));for(var $=new Array(arguments.length-1),I=0;I<$.length;I++)$[I]=arguments[I+1];var R={callback:A,args:$};return u[b]=R,h(b),b++},y.clearImmediate=g}function g(A){delete u[A]}function k(A){if(w)setTimeout(k,0,A);else{var $=u[A];if($){w=!0;try{(function(I){var R=I.callback,N=I.args;switch(N.length){case 0:R();break;case 1:R(N[0]);break;case 2:R(N[0],N[1]);break;case 3:R(N[0],N[1],N[2]);break;default:R.apply(l,N)}})($)}finally{g(A),w=!1}}}}function S(A){A.source===n&&typeof A.data=="string"&&A.data.indexOf(p)===0&&k(+A.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof At<"u"?At:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Qi);var So=Qi.exports;const Co=Xi(So);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=globalThis,er=be.trustedTypes,xi=er?er.createPolicy("lit-html",{createHTML:o=>o}):void 0,tn="$lit$",Rt=`lit$${Math.random().toFixed(9).slice(2)}$`,en="?"+Rt,$o=`<${en}>`,Kt=document,$e=()=>Kt.createComment(""),Ae=o=>o===null||typeof o!="object"&&typeof o!="function",Gr=Array.isArray,Ao=o=>Gr(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",gr=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Si=/-->/g,Ci=/>/g,Ft=RegExp(`>|${gr}(?:([^\\s"'>=/]+)(${gr}*=${gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$i=/'/g,Ai=/"/g,rn=/^(?:script|style|textarea|title)$/i,Eo=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),_t=Eo(1),le=Symbol.for("lit-noChange"),mt=Symbol.for("lit-nothing"),Ei=new WeakMap,Zt=Kt.createTreeWalker(Kt,129);function nn(o,t){if(!Gr(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return xi!==void 0?xi.createHTML(t):t}const Lo=(o,t)=>{const e=o.length-1,i=[];let r,s=t===2?"<svg>":t===3?"<math>":"",n=me;for(let l=0;l<e;l++){const h=o[l];let f,v,p=-1,b=0;for(;b<h.length&&(n.lastIndex=b,v=n.exec(h),v!==null);)b=n.lastIndex,n===me?v[1]==="!--"?n=Si:v[1]!==void 0?n=Ci:v[2]!==void 0?(rn.test(v[2])&&(r=RegExp("</"+v[2],"g")),n=Ft):v[3]!==void 0&&(n=Ft):n===Ft?v[0]===">"?(n=r??me,p=-1):v[1]===void 0?p=-2:(p=n.lastIndex-v[2].length,f=v[1],n=v[3]===void 0?Ft:v[3]==='"'?Ai:$i):n===Ai||n===$i?n=Ft:n===Si||n===Ci?n=me:(n=Ft,r=void 0);const u=n===Ft&&o[l+1].startsWith("/>")?" ":"";s+=n===me?h+$o:p>=0?(i.push(f),h.slice(0,p)+tn+h.slice(p)+Rt+u):h+Rt+(p===-2?l:u)}return[nn(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Ee{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const l=t.length-1,h=this.parts,[f,v]=Lo(t,e);if(this.el=Ee.createElement(f,i),Zt.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Zt.nextNode())!==null&&h.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(tn)){const b=v[n++],u=r.getAttribute(p).split(Rt),w=/([.?@])?(.*)/.exec(b);h.push({type:1,index:s,name:w[2],strings:u,ctor:w[1]==="."?Po:w[1]==="?"?zo:w[1]==="@"?Ro:cr}),r.removeAttribute(p)}else p.startsWith(Rt)&&(h.push({type:6,index:s}),r.removeAttribute(p));if(rn.test(r.tagName)){const p=r.textContent.split(Rt),b=p.length-1;if(b>0){r.textContent=er?er.emptyScript:"";for(let u=0;u<b;u++)r.append(p[u],$e()),Zt.nextNode(),h.push({type:2,index:++s});r.append(p[b],$e())}}}else if(r.nodeType===8)if(r.data===en)h.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(Rt,p+1))!==-1;)h.push({type:7,index:s}),p+=Rt.length-1}s++}}static createElement(t,e){const i=Kt.createElement("template");return i.innerHTML=t,i}}function ce(o,t,e=o,i){var n,l;if(t===le)return t;let r=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const s=Ae(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(o),r._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=r:e._$Cl=r),r!==void 0&&(t=ce(o,r._$AS(o,t.values),r,i)),t}class Oo{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??Kt).importNode(e,!0);Zt.currentNode=r;let s=Zt.nextNode(),n=0,l=0,h=i[0];for(;h!==void 0;){if(n===h.index){let f;h.type===2?f=new Te(s,s.nextSibling,this,t):h.type===1?f=new h.ctor(s,h.name,h.strings,this,t):h.type===6&&(f=new jo(s,this,t)),this._$AV.push(f),h=i[++l]}n!==(h==null?void 0:h.index)&&(s=Zt.nextNode(),n++)}return Zt.currentNode=Kt,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Te{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=mt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ce(this,t,e),Ae(t)?t===mt||t==null||t===""?(this._$AH!==mt&&this._$AR(),this._$AH=mt):t!==this._$AH&&t!==le&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ao(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==mt&&Ae(this._$AH)?this._$AA.nextSibling.data=t:this.T(Kt.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ee.createElement(nn(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(e);else{const n=new Oo(r,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=Ei.get(t.strings);return e===void 0&&Ei.set(t.strings,e=new Ee(t)),e}k(t){Gr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new Te(this.O($e()),this.O($e()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class cr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=mt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=mt}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(s===void 0)t=ce(this,t,e,0),n=!Ae(t)||t!==this._$AH&&t!==le,n&&(this._$AH=t);else{const l=t;let h,f;for(t=s[0],h=0;h<s.length-1;h++)f=ce(this,l[i+h],e,h),f===le&&(f=this._$AH[h]),n||(n=!Ae(f)||f!==this._$AH[h]),f===mt?t=mt:t!==mt&&(t+=(f??"")+s[h+1]),this._$AH[h]=f}n&&!r&&this.j(t)}j(t){t===mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Po extends cr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===mt?void 0:t}}class zo extends cr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==mt)}}class Ro extends cr{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=ce(this,t,e,0)??mt)===le)return;const i=this._$AH,r=t===mt&&i!==mt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==mt&&(i===mt||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class jo{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ce(this,t)}}const mr=be.litHtmlPolyfillSupport;mr==null||mr(Ee,Te),(be.litHtmlVersions??(be.litHtmlVersions=[])).push("3.2.1");const Bo=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const s=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new Te(t.insertBefore($e(),s),s,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bt extends Jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bo(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return le}}var Pi;Bt._$litElement$=!0,Bt.finalized=!0,(Pi=globalThis.litElementHydrateSupport)==null||Pi.call(globalThis,{LitElement:Bt});const yr=globalThis.litElementPolyfillSupport;yr==null||yr({LitElement:Bt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var Do=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,sn=(o,t,e,i)=>{for(var r=i>1?void 0:i?Io(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Do(t,e,r),r};let Cr=class extends Nr{createRenderRoot(){return this}render(){return _t`
            <ui-flex-grid-row gap="0.25rem">
                <ui-flex-grid-item>
                    <ui-button
                        variant="full"
                        color="primary"
                        ripple
                        @click=${async()=>{const o=document.querySelector('ui-dialog[name="import"]');o.title=`Import "${this.dialogTitle()}"`,o.show()}}
                    >
                        Import
                    </ui-button>
                </ui-flex-grid-item>

                <ui-flex-grid-item
                    class="flex align-center justify-center"
                    flex="0"
                >
                    <ui-icon-button
                        style="width: 2.5rem; height: 2.5rem;"
                        ghost
                        ripple
                        @click=${async()=>await this.export()}
                    >
                        ${Pt.smoothieLineIcons.download}
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>

            <ui-dialog name="import" title="Import" modal inert>
                <ui-flex-grid gap="0.5rem">
                    <ui-flex-grid-item>
                        <ui-label
                            secondary="Zum Importieren einer Datei leer lassen"
                        ></ui-label>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        <ui-input
                            name="gistID"
                            type="text"
                            title="Gist ID"
                        ></ui-input>
                    </ui-flex-grid-item>
                </ui-flex-grid>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="secondary"
                    @click=${async()=>{this.querySelector('ui-dialog[name="import"]').close()}}
                >
                    Cancel
                </ui-button>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>{const t=this.querySelector('ui-dialog ui-input[name="gistID"]').value;t===""?await this.importFromFile():await this.importFromGist(t),this.querySelector('ui-dialog[name="import"]').close()}}
                >
                    Submit
                </ui-button>
            </ui-dialog>
        `}dialogTitle(){return this.getListsStore().title()}async importFromFile(){if(this.storeKey===void 0)return;const o=document.createElement("input");o.type="file",o.multiple=!0,o.onchange=async()=>{if(o.files!==null)for(const t of o.files){const e=new FileReader;e.onload=async()=>{if(typeof e.result!="string")return;const i=this.getListsStore(),r=i.validate(JSON.parse(e.result));if(r===null){alert(`Ungültige Daten für "${i.title()}"!`);return}i.data.push(r),i.updateStore(!0)},e.onerror=()=>{alert(`Lesen der Datei "${t.name}" ist fehlgeschlagen!`)},e.readAsText(t)}},o.click()}async importFromGist(o){if(this.storeKey===void 0)return;let t;try{t=await new Wi(o).get()}catch(r){alert(`Etwas ist schiefgelaufen: ${r}`);return}const e=this.getListsStore();for(const r of Object.values(t.files)){const s=e.validate(r.content);if(s===null){alert(`Ungültige Daten für "${e.title}"!`);return}e.data.push(s)}const i=ht.queryStore();i.setData(this.storeKey,[]),e.updateStore(!0),i.updateData("gist",r=>(r[`${this.storeKey}`]={id:o,revision:t.revision},r))}async export(){if(this.storeKey===void 0)return;const o=new Co,t=this.getListsStore(),e=ht.queryStore().getData(this.storeKey);if(e!==void 0){t.data=e;for(const i of t.data){const r=t.fileName(i);o.file(r,JSON.stringify(i,null,4))}xo.saveAs(await o.generateAsync({type:"blob"}),t.zipFileName())}}getListsStore(){switch(this.storeKey){case"alertLists":return new Ki;case"metalSheets":return new Yi;default:throw new Error(`unknown "${this.storeKey}"`)}}};sn([vt({type:String,attribute:"store-key",reflect:!0})],Cr.prototype,"storeKey",2);Cr=sn([Lt("pg-drawer-item-import")],Cr);const on="v1.1.0.dev",To=9;var Mo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,an=(o,t,e,i)=>{for(var r=i>1?void 0:i?Uo(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Mo(t,e,r),r};let rr=class extends Bt{constructor(){super(...arguments),this.name="",this.slot=""}createRenderRoot(){return this.style.display="block",this.style.paddingTop="var(--ui-app-bar-height)",this}};an([vt({type:Object,attribute:"data",reflect:!1})],rr.prototype,"data",2);rr=an([Lt("pg-page-content")],rr);const ln=rr;var No=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Ho=(o,t,e,i)=>{for(var r=i>1?void 0:i?Fo(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&No(t,e,r),r};let $r=class extends ln{render(){return _t`
            <ui-flex-grid style="width: 100%; height: 100%;" gap="0.25rem">
                <ui-flex-grid-item flex="0">
                    ${this.data!==void 0?_t`<pg-alert-list-item
                              data=${JSON.stringify(this.data)}
                          ></pg-alert-list-item>`:""}
                </ui-flex-grid-item>

                <ui-flex-grid-item>
                    <p
                        class="description"
                        style="padding: var(--ui-spacing);"
                    ></p>
                </ui-flex-grid-item>
            </ui-flex-grid>
        `}updated(o){if(this.data!==void 0){const t=this.querySelector(".description");t.innerHTML=this.data.desc.join("<br/>")}}firstUpdated(o){this.style.overflow="auto"}};$r=Ho([Lt("pg-page-content-alert")],$r);const Zo=$r;var Vo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,Wr=(o,t,e,i)=>{for(var r=i>1?void 0:i?Go(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Vo(t,e,r),r};let Le=class extends Bt{constructor(){super(...arguments),this.rippleCleanUp=null}createRenderRoot(){return this}render(){return this.data===void 0?_t``:(this.ripple&&this.rippleCleanUp===null?(this.style.cursor="pointer",this.role="button",this.rippleCleanUp=Zn.create(this)):!this.ripple&&this.rippleCleanUp!==null&&(this.style.cursor="default",this.role="none",this.rippleCleanUp(),this.rippleCleanUp=null),_t`
            <ui-text>${this.data.alert}</ui-text>

            <ui-text style="color: hsl(var(--ui-hsl-primary));" wght="750">
                ${this.data.from===this.data.to?this.data.from:`${this.data.from}..${this.data.to}`}
            </ui-text>
        `)}firstUpdated(o){this.classList.add("flex"),this.classList.add("row"),this.classList.add("nowrap"),this.classList.add("align-center"),this.classList.add("justify-between"),this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)"}};Wr([vt({type:Object,attribute:"data",reflect:!1})],Le.prototype,"data",2);Wr([vt({type:Boolean,attribute:"ripple",reflect:!0})],Le.prototype,"ripple",2);Le=Wr([Lt("pg-alert-list-item")],Le);const Li=Le;var Wo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,hr=(o,t,e,i)=>{for(var r=i>1?void 0:i?qo(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Wo(t,e,r),r};let he=class extends Bt{constructor(){super(...arguments),this.title="",this.storageKey=""}static generateRegExp(o){const t=o.split(" ").filter(e=>e!=="");return new RegExp("("+t.join("|")+")","i")}static get styles(){return fn`
            * {
                box-sizing: border-box;
            }

            :host {
                position: absolute !important;
                top: var(--ui-app-bar-height);
                left: 0;
                right: 0;
                height: fit-content;
                margin: var(--ui-spacing);
                overflow: hidden;
            }

            :host(:not([active])) ui-search {
                display: none;
            }
        `}render(){return _t`
            <ui-search
                style="z-index: 10;"
                title="${this.title}"
                no-submit
                storage
                storage-prefix="pg-vis:search:"
                storage-key="${this.storageKey}"
                @storage=${()=>console.debug("Storage event fired...")}
                @change=${()=>{this.dispatchEvent(new Event("change"))}}
            ></ui-search>
        `}value(){var o,t;return((t=(o=this.shadowRoot)==null?void 0:o.querySelector("ui-search"))==null?void 0:t.value)||""}};hr([vt({type:String,attribute:"title",reflect:!0})],he.prototype,"title",2);hr([vt({type:String,attribute:"storage-key",reflect:!0})],he.prototype,"storageKey",2);hr([vt({type:Boolean,attribute:"active",reflect:!0})],he.prototype,"active",2);he=hr([Lt("pg-search-bar")],he);const Ko=he;function Yo(o,t){for(;!o.matches(t);){if(!o.parentElement)return null;o=o.parentElement}return o}var Xo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,cn=(o,t,e,i)=>{for(var r=i>1?void 0:i?Jo(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Xo(t,e,r),r};let ir=class extends ln{constructor(){super(...arguments),this.cleanup=new Ri}querySearchBar(){return this.querySelector("pg-search-bar")}render(){var t;const o=ht.queryAppBar();return o.contentName("title").contentAt(0).innerText=this.data!==void 0?this.data.title:"Alarm Liste",_t`
            <pg-search-bar
                title="Alarmsuche (RegEx Mode)"
                storage-key="${(t=this.data)==null?void 0:t.title}"
                ?active=${!!this.searchBar}
                @change=${async e=>{await this.filter(e.currentTarget.value())}}
            ></pg-search-bar>

            <div
                class="container no-scrollbar"
                style="${Br({width:"100%",height:"100%",overflow:"auto",scrollBehavior:"smooth"})}"
            >
                <div
                    class="list"
                    @click=${async e=>{if(!((e==null?void 0:e.target)instanceof Element))return;const i=Yo(e.target,"pg-alert-list-item");i!==null&&ht.queryStackLayout().setPage("alert",r=>{const s=r.children[0];s!==void 0&&(s.data=i.data)},!0)}}
                ></div>
            </div>
        `}updated(o){const t=this.querySelector("pg-search-bar"),e=this.querySelector("div.container");this.searchBar?(e.style.paddingTop=`calc(${t.clientHeight}px + var(--ui-spacing) * 2)`,this.filter(this.querySelector("pg-search-bar").value())):(e.style.paddingTop="0",this.filter(""))}firstUpdated(o){const t=this.querySelector(".list");this.data!==void 0&&this.data.data.forEach(async e=>{const i=new Li;i.data=e,i.ripple=!0,t.appendChild(i)})}connectedCallback(){super.connectedCallback();const o=ht.queryAppBar(),t=async()=>this.searchBar=!this.searchBar,e=o.contentName("search").contentAt(0);e.addEventListener("click",t),this.cleanup.add(()=>e.removeEventListener("click",t))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async filter(o){const t=this.querySelector(".list"),e=Ko.generateRegExp(o);let i,r,s,n;for(const l of[...t.children])l instanceof Li&&l.data!==void 0&&(h=>{s=Math.min(h.data.from,h.data.to),n=Math.max(h.data.from,h.data.to),i=[];for(let f=s;f<n;f++)i.push(f.toString());r=`${i.join(",")} ${h.data.alert}`,e.test(r)?h.style.display="flex":h.style.display="none"})(l)}};cn([vt({type:Boolean,attribute:"search-bar",reflect:!0})],ir.prototype,"searchBar",2);ir=cn([Lt("pg-page-content-alert-lists")],ir);const Qo=ir;var ta=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,ue=(o,t,e,i)=>{for(var r=i>1?void 0:i?ea(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ta(t,e,r),r};let Tt=class extends Nr{createRenderRoot(){return this}render(){return _t`
            <ui-flex-grid-row>
                <ui-flex-grid-item>
                    <ui-label
                        style="cursor: pointer;"
                        primary="${this.primary||""}"
                        secondary="${this.secondary||""}"
                        @click=${async()=>{await this.setStackLayoutPage(),ht.queryDrawer().open=!1}}
                    ></ui-label>
                </ui-flex-grid-item>

                ${this.allowDeletion?_t`<ui-flex-grid-item
                          name="delete"
                          class="flex align-center justify-center"
                          flex="0"
                      >
                          <ui-icon-button
                              style="height: 100%"
                              color="destructive"
                              ghost
                              ripple
                              @click=${async()=>{await this.deleteStoreData()}}
                          >
                              ${Pt.smoothieLineIcons.trash}
                          </ui-icon-button>
                      </ui-flex-grid-item>`:""}
            </ui-flex-grid-row>
        `}async setStackLayoutPage(){var e;if(!this.storeKey)return;const o=(e=ht.queryStore().getData(this.storeKey))==null?void 0:e.find(i=>i.title===this.storeKeyEntry);if(o===void 0)throw new Error(`Data undefined for "${this.storeKeyEntry}" in "${this.storeKey}"`);const t=ht.queryStackLayout();t.clearStack(),t.setPage(this.storeKey,async i=>{const r=i.children[0];r!==void 0&&(r.data=o)})}async deleteStoreData(){if(!(this.storeKey===void 0||!this.storeKeyEntry===void 0))switch(this.storeKey){case"alertLists":case"metalSheets":case"vis":case"visBookmarks":case"visData":confirm(`Möchten Sie "${this.storeKeyEntry}" wirklich löschen?`)&&ht.queryStore().updateData(this.storeKey,o=>o.filter(t=>t.title!==this.storeKeyEntry))}}};ue([vt({type:String,attribute:"store-key",reflect:!0})],Tt.prototype,"storeKey",2);ue([vt({type:String,attribute:"store-key-entry",reflect:!0})],Tt.prototype,"storeKeyEntry",2);ue([vt({type:String,attribute:"primary",reflect:!0})],Tt.prototype,"primary",2);ue([vt({type:String,attribute:"secondary",reflect:!0})],Tt.prototype,"secondary",2);ue([vt({type:Boolean,attribute:"allow-deletion",reflect:!0})],Tt.prototype,"allowDeletion",2);Tt=ue([Lt("pg-drawer-item")],Tt);const ra=Tt;var ia=Object.defineProperty,na=Object.getOwnPropertyDescriptor,sa=(o,t,e,i)=>{for(var r=i>1?void 0:i?na(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ia(t,e,r),r};let ht=class extends Bt{static queryStore(){return document.querySelector("ui-store")}static queryAppBar(){return document.querySelector("ui-app-bar")||null}static queryDrawer(){return document.querySelector("ui-drawer")||null}static queryStackLayout(){return document.querySelector("ui-stack-layout")}constructor(){super(),this.initializeStores()}initializeStores(){const o=ht.queryStore();o.setData("drawerGroup",{},!0),o.setData("alertLists",[],!0),o.setData("metalSheets",[],!0),o.setData("gist",{},!0)}createRenderRoot(){return this}render(){return _t`
            <div class="is-container no-scrollbar" style="height: 100%;">
                <ui-stack-layout></ui-stack-layout>
            </div>

            ${this.renderAppBar()} ${this.renderDrawer()}
        `}renderAppBar(){return _t`
            <ui-app-bar position="top">
                <ui-app-bar-item name="menu" slot="left">
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{const o=ht.queryDrawer();o.open=!0}}
                    >
                        ${Pt.smoothieLineIcons.menu}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="back" slot="left" hidden>
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{ht.queryStackLayout().goBack()}}
                    >
                        ${Pt.smoothieLineIcons.chevronLeft}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="title" slot="center">
                    <ui-heading style="white-space: nowrap;">
                        PG: Vis
                    </ui-heading>
                </ui-app-bar-item>

                <ui-app-bar-item name="edit" slot="right" hidden>
                    <ui-icon-button ripple ghost>
                        ${Pt.smoothieLineIcons.pen}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="share" slot="right" hidden>
                    <ui-icon-button ripple ghost>
                        ${Pt.smoothieLineIcons.share}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="search" slot="right" hidden>
                    <ui-icon-button ripple ghost>
                        ${Pt.smoothieLineIcons.search}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="bookmark" slot="right" hidden>
                    <ui-icon-button ripple ghost>
                        ${Pt.smoothieLineIcons.bookmark}
                    </ui-icon-button>
                </ui-app-bar-item>
            </ui-app-bar>
        `}renderDrawer(){var t,e,i;const o=ht.queryStore();return _t`
            <ui-drawer
                ?open=${!!((t=o.getData("drawer"))!=null&&t.open)}
                @open=${()=>{o.setData("drawer",{open:!0})}}
                @close=${()=>{o.setData("drawer",{open:!1})}}
            >
                <ui-drawer-group name="app-info" no-fold>
                    <ui-button
                        style="${Br({display:"flex",justifyContent:"flex-start",marginBottom:"var(--ui-spacing)",padding:"0.25rem",fontSize:"0.85rem",textTransform:"none"})}"
                        variant="ghost"
                        color="primary"
                        ripple
                        @click=${()=>{}}
                    >
                        ${on} - [Build: ${To}]
                    </ui-button>
                </ui-drawer-group>

                <ui-drawer-group
                    name="alert-lists"
                    title="Alarm Listen"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((i=(e=o.getData("drawerGroup"))==null?void 0:e["alert-lists"])!=null&&i.open)}
                    @fold=${()=>{o.updateData("drawerGroup",r=>(r["alert-lists"]={open:!1},r))}}
                    @unfold=${()=>{o.updateData("drawerGroup",r=>(r["alert-lists"]={open:!0},r))}}
                >
                    <!-- Fixed Item 1 -->
                    <pg-drawer-item-import
                        store-key="alertLists"
                    ></pg-drawer-item-import>

                    <!-- Fixed Item 2 -->
                    <pg-drawer-item-gist
                        store-key="alertLists"
                    ></pg-drawer-item-gist>
                </ui-drawer-group>

                <ui-drawer-group
                    name="metal-sheets"
                    title="Blech Listen"
                    data-fixed-items="3"
                    gap="0.25rem"
                >
                    <!-- Fixed Item 1 -->
                    <pg-drawer-item-import
                        store-key="metalSheets"
                    ></pg-drawer-item-import>

                    <!-- Fixed Item 2 -->
                    <pg-drawer-item-gist
                        store-key="metalSheets"
                    ></pg-drawer-item-gist>

                    <!-- Fixed Item 3 -->
                    <!-- TODO: Create new table -->
                    <span class="placeholder"></span>
                </ui-drawer-group>

                <ui-drawer-group name="vis" title="Vis" data-fixed-items="2">
                    <!-- Fixed Item 1 -->
                    <!-- TODO: Import / Export -->
                    <span class="placeholder"></span>

                    <!-- Fixed Item 2 -->
                    <!-- TODO: Gist -->
                    <span class="placeholder"></span>
                </ui-drawer-group>

                <ui-drawer-group
                    name="vis-bookmarks"
                    title="Vis Bookmarks"
                    data-fixed-items="0"
                ></ui-drawer-group>

                <ui-drawer-group
                    name="vis-data"
                    title="Vis Data"
                    data-fixed-items="3"
                >
                    <!-- Fixed Item 1 -->
                    <!-- TODO: Import / Export -->
                    <span class="placeholder"></span>

                    <!-- Fixed Item 2 -->
                    <!-- TODO: Gist -->
                    <span class="placeholder"></span>

                    <!-- Fixed Item 3 -->
                    <!-- TODO: Create new -->
                    <span class="placeholder"></span>
                </ui-drawer-group>
            </ui-drawer>
        `}updated(o){this.updatedRegisterPages(),this.updatedLayout()}updatedRegisterPages(){const o=ht.queryStackLayout();o.registerPage("alertLists",()=>{const t=new bi;t.name="alertLists";const e=new Qo;return t.appendChild(e),t}),o.registerPage("alert",()=>{const t=new bi;t.name="alert";const e=new Zo;return t.appendChild(e),t})}updatedLayout(){const o=ht.queryStackLayout(),t=ht.queryAppBar(),e=ht.queryDrawer();o.events.addListener("change",({current:i})=>{if(o.stackSize()>1?t.contentName("back").show():t.contentName("back").hide(),t.content("left").forEach(r=>{r.name==="menu"||r.name==="back"||r.hide()}),t.content("right").forEach(r=>{r.hide()}),i===null){t.contentName("title").contentAt(0).innerText="PG: Vis",e.open=!0;return}switch(i.name){case"alertLists":t.contentName("search").show();break;case"metalSheets":t.contentName("edit").show();break;case"visData":t.contentName("edit").show();break}})}firstUpdated(o){this.style.position="fixed",this.style.top="0",this.style.right="0",this.style.bottom="0",this.style.left="0",ht.queryStore().addListener("alertLists",e=>{const i=this.querySelector('ui-drawer-group[name="alert-lists"]'),r=parseInt(i.getAttribute("data-fixed-items")||"0");Array.from(i.children).slice(r).forEach(s=>i.removeChild(s)),e.forEach(async s=>{const n=new ra;n.storeKey="alertLists",n.storeKeyEntry=s.title,n.primary=s.title,n.secondary=`${s.data.length} Einträge`,n.allowDeletion=!0,i.appendChild(n)})},!0)}};ht=sa([Lt("pg-app")],ht);const oa="modulepreload",aa=function(o){return"/pg-vis-dev.github.io/"+o},Oi={},la=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(e.map(h=>{if(h=aa(h),h in Oi)return;Oi[h]=!0;const f=h.endsWith(".css"),v=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":oa,f||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise((b,u)=>{p.addEventListener("load",b),p.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return r.then(n=>{for(const l of n||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function ca(o={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:n}=o;let l,h;const f=async(p=!0)=>{await h};async function v(){if("serviceWorker"in navigator){if(l=await la(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/pg-vis-dev.github.io/sw.js",{scope:"/pg-vis-dev.github.io/",type:"classic"})).catch(p=>{n==null||n(p)}),!l)return;l.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),l.addEventListener("installed",p=>{p.isUpdate||i==null||i()}),l.register({immediate:t}).then(p=>{s?s("/pg-vis-dev.github.io/sw.js",p):r==null||r(p)}).catch(p=>{n==null||n(p)})}}return h=v(),f}ca({onRegistered(o){setTimeout(async()=>{try{console.debug(`Update service... (currentVersion: ${on})`),await(o==null?void 0:o.update())}catch(t){console.warn(`Auto update failed: ${t}`)}})}});

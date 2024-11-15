var sn=Object.defineProperty;var on=(r,e,t)=>e in r?sn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var De=(r,e,t)=>on(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr=globalThis,Es=wr.ShadowRoot&&(wr.ShadyCSS===void 0||wr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ks=Symbol(),ti=new WeakMap;let Ki=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ks)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Es&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ti.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ti.set(t,e))}return e}toString(){return this.cssText}};const nn=r=>new Ki(typeof r=="string"?r:r+"",void 0,ks),an=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Ki(t,r,ks)},ln=(r,e)=>{if(Es)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=wr.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},ri=Es?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return nn(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:cn,defineProperty:un,getOwnPropertyDescriptor:dn,getOwnPropertyNames:pn,getOwnPropertySymbols:hn,getPrototypeOf:gn}=Object,Ze=globalThis,si=Ze.trustedTypes,fn=si?si.emptyScript:"",Yr=Ze.reactiveElementPolyfillSupport,Ht=(r,e)=>r,kr={toAttribute(r,e){switch(e){case Boolean:r=r?fn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ts=(r,e)=>!cn(r,e),ii={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:Ts};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ze.litPropertyMetadata??(Ze.litPropertyMetadata=new WeakMap);class wt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ii){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&un(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=dn(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ii}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;const e=gn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){const t=this.properties,i=[...pn(t),...hn(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ri(s))}else e!==void 0&&t.push(ri(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ln(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:kr).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:kr;this._$Em=s,this[s]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ts)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},wt[Ht("elementProperties")]=new Map,wt[Ht("finalized")]=new Map,Yr==null||Yr({ReactiveElement:wt}),(Ze.reactiveElementVersions??(Ze.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=globalThis,Tr=Vt.trustedTypes,oi=Tr?Tr.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ss="$lit$",Me=`lit$${Math.random().toFixed(9).slice(2)}$`,xs="?"+Me,mn=`<${xs}>`,ut=document,Zt=()=>ut.createComment(""),Jt=r=>r===null||typeof r!="object"&&typeof r!="function",Cs=Array.isArray,Zi=r=>Cs(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Xr=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ni=/-->/g,ai=/>/g,it=RegExp(`>|${Xr}(?:([^\\s"'>=/]+)(${Xr}*=${Xr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),li=/'/g,ci=/"/g,Ji=/^(?:script|style|textarea|title)$/i,yn=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),re=yn(1),dt=Symbol.for("lit-noChange"),Ce=Symbol.for("lit-nothing"),ui=new WeakMap,at=ut.createTreeWalker(ut,129);function Yi(r,e){if(!Cs(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return oi!==void 0?oi.createHTML(e):e}const Xi=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=Bt;for(let a=0;a<t;a++){const l=r[a];let h,m,u=-1,v=0;for(;v<l.length&&(o.lastIndex=v,m=o.exec(l),m!==null);)v=o.lastIndex,o===Bt?m[1]==="!--"?o=ni:m[1]!==void 0?o=ai:m[2]!==void 0?(Ji.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=it):m[3]!==void 0&&(o=it):o===it?m[0]===">"?(o=s??Bt,u=-1):m[1]===void 0?u=-2:(u=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?it:m[3]==='"'?ci:li):o===ci||o===li?o=it:o===ni||o===ai?o=Bt:(o=it,s=void 0);const p=o===it&&r[a+1].startsWith("/>")?" ":"";n+=o===Bt?l+mn:u>=0?(i.push(h),l.slice(0,u)+Ss+l.slice(u)+Me+p):l+Me+(u===-2?a:p)}return[Yi(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let ls=class Qi{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[h,m]=Xi(e,t);if(this.el=Qi.createElement(h,i),at.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=at.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Ss)){const v=m[o++],p=s.getAttribute(u).split(Me),b=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:b[2],strings:p,ctor:b[1]==="."?ro:b[1]==="?"?so:b[1]==="@"?io:lr}),s.removeAttribute(u)}else u.startsWith(Me)&&(l.push({type:6,index:n}),s.removeAttribute(u));if(Ji.test(s.tagName)){const u=s.textContent.split(Me),v=u.length-1;if(v>0){s.textContent=Tr?Tr.emptyScript:"";for(let p=0;p<v;p++)s.append(u[p],Zt()),at.nextNode(),l.push({type:2,index:++n});s.append(u[v],Zt())}}}else if(s.nodeType===8)if(s.data===xs)l.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(Me,u+1))!==-1;)l.push({type:7,index:n}),u+=Me.length-1}n++}}static createElement(e,t){const i=ut.createElement("template");return i.innerHTML=e,i}};function pt(r,e,t=r,i){var o,a;if(e===dt)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=Jt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=pt(r,s._$AS(r,e.values),s,i)),e}let eo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??ut).importNode(t,!0);at.currentNode=s;let n=at.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Nr(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new oo(n,this,e)),this._$AV.push(h),l=i[++a]}o!==(l==null?void 0:l.index)&&(n=at.nextNode(),o++)}return at.currentNode=ut,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Nr=class to{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Ce,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pt(this,e,t),Jt(e)?e===Ce||e==null||e===""?(this._$AH!==Ce&&this._$AR(),this._$AH=Ce):e!==this._$AH&&e!==dt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Zi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ce&&Jt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ut.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ls.createElement(Yi(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new eo(s,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=ui.get(e.strings);return t===void 0&&ui.set(e.strings,t=new ls(e)),t}k(e){Cs(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new to(this.O(Zt()),this.O(Zt()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},lr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=Ce,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ce}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=pt(this,e,t,0),o=!Jt(e)||e!==this._$AH&&e!==dt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=pt(this,a[i+l],t,l),h===dt&&(h=this._$AH[l]),o||(o=!Jt(h)||h!==this._$AH[l]),h===Ce?e=Ce:e!==Ce&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===Ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ro=class extends lr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ce?void 0:e}},so=class extends lr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ce)}},io=class extends lr{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=pt(this,e,t,0)??Ce)===dt)return;const i=this._$AH,s=e===Ce&&i!==Ce||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Ce&&(i===Ce||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},oo=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){pt(this,e)}};const vn={M:Ss,P:Me,A:xs,C:1,L:Xi,R:eo,D:Zi,V:pt,I:Nr,H:lr,N:so,U:io,B:ro,F:oo},Qr=Vt.litHtmlPolyfillSupport;Qr==null||Qr(ls,Nr),(Vt.litHtmlVersions??(Vt.litHtmlVersions=[])).push("3.2.1");const _n=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new Nr(e.insertBefore(Zt(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ae=class extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_n(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return dt}};var Wi;Ae._$litElement$=!0,Ae.finalized=!0,(Wi=globalThis.litElementHydrateSupport)==null||Wi.call(globalThis,{LitElement:Ae});const es=globalThis.litElementPolyfillSupport;es==null||es({LitElement:Ae});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bn={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:Ts},wn=(r=bn,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,r)},init(a){return a!==void 0&&this.P(o,void 0,r),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,r)}}throw Error("Unsupported decorator location: "+i)};function pe(r){return(e,t)=>typeof t=="object"?wn(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function cr(r){return pe({...r,state:!0,attribute:!1})}var En=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,qr=(r,e,t,i)=>{for(var s=i>1?void 0:i?kn(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&En(e,t,s),s};let xt=class extends Ae{constructor(){super(...arguments),this.title="",this.storageKey=""}static generateRegExp(r){const e=r.split(" ").filter(t=>t!=="");return new RegExp("(?=.*"+e.map(t=>t.replace(/[()]/g,"\\$&")).join(")(?=.*")+")","i")}static get styles(){return an`
            * {
                box-sizing: border-box;
            }

            :host {
                z-index: 10;
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
        `}render(){return re`
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
        `}firstUpdated(r){this.classList.add("has-backdrop-blur")}value(){var r,e;return((e=(r=this.shadowRoot)==null?void 0:r.querySelector("ui-search"))==null?void 0:e.value)||""}};qr([pe({type:String,attribute:"title",reflect:!0})],xt.prototype,"title",2);qr([pe({type:String,attribute:"storage-key",reflect:!0})],xt.prototype,"storageKey",2);qr([pe({type:Boolean,attribute:"active",reflect:!0})],xt.prototype,"active",2);xt=qr([Se("pg-search-bar")],xt);const no=xt;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ao=r=>(...e)=>({_$litDirective$:r,values:e});let lo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Sn}=vn,di=()=>document.createComment(""),zt=(r,e,t)=>{var n;const i=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){const o=i.insertBefore(di(),s),a=i.insertBefore(di(),s);t=new Sn(o,a,r,r.options)}else{const o=t._$AB.nextSibling,a=t._$AM,l=a!==r;if(l){let h;(n=t._$AQ)==null||n.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==a._$AU&&t._$AP(h)}if(o!==s||l){let h=t._$AA;for(;h!==o;){const m=h.nextSibling;i.insertBefore(h,s),h=m}}}return t},ot=(r,e,t=r)=>(r._$AI(e,t),r),xn={},co=(r,e=xn)=>r._$AH=e,Cn=r=>r._$AH,ts=r=>{var i;(i=r._$AP)==null||i.call(r,!1,!0);let e=r._$AA;const t=r._$AB.nextSibling;for(;e!==t;){const s=e.nextSibling;e.remove(),e=s}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=ao(class extends lo{constructor(){super(...arguments),this.key=Ce}render(r,e){return this.key=r,e}update(r,[e,t]){return e!==this.key&&(co(r),this.key=e),t}});class As{constructor(){this.listeners={}}addListener(e,t){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(i=>i!==t))}dispatch(e,t){this.listeners[e]&&this.listeners[e].forEach(i=>i(t))}}class qe{constructor(){this.callbacks=[]}add(...e){this.callbacks.push(...e)}run(){this.callbacks.filter(e=>(e(),!1))}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er=globalThis,Ps=Er.ShadowRoot&&(Er.ShadyCSS===void 0||Er.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$s=Symbol(),pi=new WeakMap;let uo=class{constructor(r,e,t){if(this._$cssResult$=!0,t!==$s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=e}get styleSheet(){let r=this.o;const e=this.t;if(Ps&&r===void 0){const t=e!==void 0&&e.length===1;t&&(r=pi.get(e)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),t&&pi.set(e,r))}return r}toString(){return this.cssText}};const An=r=>new uo(typeof r=="string"?r:r+"",void 0,$s),Ee=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new uo(t,r,$s)},Pn=(r,e)=>{if(Ps)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Er.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},hi=Ps?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return An(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$n,defineProperty:On,getOwnPropertyDescriptor:Rn,getOwnPropertyNames:Dn,getOwnPropertySymbols:Ln,getPrototypeOf:Gn}=Object,Ct=globalThis,gi=Ct.trustedTypes,Fn=gi?gi.emptyScript:"",fi=Ct.reactiveElementPolyfillSupport,Wt=(r,e)=>r,Sr={toAttribute(r,e){switch(e){case Boolean:r=r?Fn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Os=(r,e)=>!$n(r,e),mi={attribute:!0,type:String,converter:Sr,reflect:!1,hasChanged:Os};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ct.litPropertyMetadata??(Ct.litPropertyMetadata=new WeakMap);class Et extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=mi){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&On(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Rn(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??mi}static _$Ei(){if(this.hasOwnProperty(Wt("elementProperties")))return;const e=Gn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Wt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wt("properties"))){const t=this.properties,i=[...Dn(t),...Ln(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(hi(s))}else e!==void 0&&t.push(hi(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pn(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var i;const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:Sr).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=s.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:Sr;this._$Em=n,this[n]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Os)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(i)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}Et.elementStyles=[],Et.shadowRootOptions={mode:"open"},Et[Wt("elementProperties")]=new Map,Et[Wt("finalized")]=new Map,fi==null||fi({ReactiveElement:Et}),(Ct.reactiveElementVersions??(Ct.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xr=globalThis,Cr=xr.trustedTypes,yi=Cr?Cr.createPolicy("lit-html",{createHTML:r=>r}):void 0,po="$lit$",Ke=`lit$${Math.random().toFixed(9).slice(2)}$`,ho="?"+Ke,Un=`<${ho}>`,ht=document,Yt=()=>ht.createComment(""),Xt=r=>r===null||typeof r!="object"&&typeof r!="function",Rs=Array.isArray,In=r=>Rs(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",rs=`[ 	
\f\r]`,Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vi=/-->/g,_i=/>/g,nt=RegExp(`>|${rs}(?:([^\\s"'>=/]+)(${rs}*=${rs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bi=/'/g,wi=/"/g,go=/^(?:script|style|textarea|title)$/i,jn=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),ae=jn(1),At=Symbol.for("lit-noChange"),Oe=Symbol.for("lit-nothing"),Ei=new WeakMap,lt=ht.createTreeWalker(ht,129);function fo(r,e){if(!Rs(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yi!==void 0?yi.createHTML(e):e}const Bn=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=Mt;for(let a=0;a<t;a++){const l=r[a];let h,m,u=-1,v=0;for(;v<l.length&&(o.lastIndex=v,m=o.exec(l),m!==null);)v=o.lastIndex,o===Mt?m[1]==="!--"?o=vi:m[1]!==void 0?o=_i:m[2]!==void 0?(go.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=nt):m[3]!==void 0&&(o=nt):o===nt?m[0]===">"?(o=s??Mt,u=-1):m[1]===void 0?u=-2:(u=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?nt:m[3]==='"'?wi:bi):o===wi||o===bi?o=nt:o===vi||o===_i?o=Mt:(o=nt,s=void 0);const p=o===nt&&r[a+1].startsWith("/>")?" ":"";n+=o===Mt?l+Un:u>=0?(i.push(h),l.slice(0,u)+po+l.slice(u)+Ke+p):l+Ke+(u===-2?a:p)}return[fo(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Qt{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[h,m]=Bn(e,t);if(this.el=Qt.createElement(h,i),lt.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=lt.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(po)){const v=m[o++],p=s.getAttribute(u).split(Ke),b=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:b[2],strings:p,ctor:b[1]==="."?Mn:b[1]==="?"?Nn:b[1]==="@"?qn:Hr}),s.removeAttribute(u)}else u.startsWith(Ke)&&(l.push({type:6,index:n}),s.removeAttribute(u));if(go.test(s.tagName)){const u=s.textContent.split(Ke),v=u.length-1;if(v>0){s.textContent=Cr?Cr.emptyScript:"";for(let p=0;p<v;p++)s.append(u[p],Yt()),lt.nextNode(),l.push({type:2,index:++n});s.append(u[v],Yt())}}}else if(s.nodeType===8)if(s.data===ho)l.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(Ke,u+1))!==-1;)l.push({type:7,index:n}),u+=Ke.length-1}n++}}static createElement(e,t){const i=ht.createElement("template");return i.innerHTML=e,i}}function Pt(r,e,t=r,i){var s,n;if(e===At)return e;let o=i!==void 0?(s=t._$Co)==null?void 0:s[i]:t._$Cl;const a=Xt(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((n=o==null?void 0:o._$AO)==null||n.call(o,!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=Pt(r,o._$AS(r,e.values),o,i)),e}class zn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??ht).importNode(t,!0);lt.currentNode=s;let n=lt.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new ur(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Hn(n,this,e)),this._$AV.push(h),l=i[++a]}o!==(l==null?void 0:l.index)&&(n=lt.nextNode(),o++)}return lt.currentNode=ht,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ur{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Oe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pt(this,e,t),Xt(e)?e===Oe||e==null||e===""?(this._$AH!==Oe&&this._$AR(),this._$AH=Oe):e!==this._$AH&&e!==At&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):In(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Oe&&Xt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ht.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Qt.createElement(fo(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)==null?void 0:t._$AD)===n)this._$AH.p(i);else{const o=new zn(n,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=Ei.get(e.strings);return t===void 0&&Ei.set(e.strings,t=new Qt(e)),t}k(e){Rs(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new ur(this.O(Yt()),this.O(Yt()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=Oe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Oe}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=Pt(this,e,t,0),o=!Xt(e)||e!==this._$AH&&e!==At,o&&(this._$AH=e);else{const a=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Pt(this,a[i+l],t,l),h===At&&(h=this._$AH[l]),o||(o=!Xt(h)||h!==this._$AH[l]),h===Oe?e=Oe:e!==Oe&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===Oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mn extends Hr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Oe?void 0:e}}class Nn extends Hr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Oe)}}class qn extends Hr{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Pt(this,e,t,0)??Oe)===At)return;const i=this._$AH,s=e===Oe&&i!==Oe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Oe&&(i===Oe||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Hn{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Pt(this,e)}}const ki=xr.litHtmlPolyfillSupport;ki==null||ki(Qt,ur),(xr.litHtmlVersions??(xr.litHtmlVersions=[])).push("3.2.1");const Vn=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new ur(e.insertBefore(Yt(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let me=class extends Et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return At}};var Ti;me._$litElement$=!0,me.finalized=!0,(Ti=globalThis.litElementHydrateSupport)==null||Ti.call(globalThis,{LitElement:me});const Si=globalThis.litElementPolyfillSupport;Si==null||Si({LitElement:me});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Wn={onDragStart:null,onDragging:null,onDragEnd:null};function Kn(r,e,t){t={...Wn,...t};const i=[...r.children].indexOf(e);return e.draggable=!0,e.ondragstart=s=>{s.dataTransfer&&(s.dataTransfer.effectAllowed="move",s.dataTransfer.dropEffect="move"),r.classList.add("dragging"),t.onDragStart&&t.onDragStart(i)},e.ondragover=s=>(s.preventDefault(),!1),e.ondragenter=s=>{s.preventDefault(),[...r.children].forEach((n,o)=>{if(o===i){n.style.background="hsl(var(--ui-hsl-primary))",n.style.color="hsl(var(--ui-hsl-primary-text))";return}n.style.background="inherit",n.style.color="inherit"}),t.onDragging&&t.onDragging(i)},e.ondrop=s=>{s.preventDefault(),s.dataTransfer&&(s.dataTransfer.dropEffect="move"),r.classList.remove("dragging"),t.onDragEnd&&t.onDragEnd(i),[...r.children].forEach(n=>{n.style.background="inherit",n.style.color="inherit"})},()=>{e.draggable=!1,e.ondragstart=null,e.ondragover=null,e.ondragenter=null,e.ondrop=null}}const Zn={onDragStart:null,onDragEnd:null};function Jn(r,e){e={...Zn,...e};let t=null,i=null,s=null,n=!1,o="",a="";const l=u=>{const v=u.currentTarget;!t&&Array.from(v.classList).includes("draggable")&&(i=new Date().getTime(),t=v,s&&clearTimeout(s),s=setTimeout(()=>{t&&(o=t.style.color,a=t.style.backgroundColor,t.style.color="hsl(var(--ui-hsl-primary-text))",t.style.backgroundColor="hsl(var(--ui-hsl-primary))",r.classList.add("dragging"),n=!0,e!=null&&e.onDragStart&&e.onDragStart())},200))},h=u=>{if(!i||!t)return;if(!n&&new Date().getTime()-i<200){m();return}u.preventDefault(),n||(n=!0,e!=null&&e.onDragStart&&e.onDragStart());let v;if(u instanceof TouchEvent){const b=u.targetTouches[0];v={clientX:b.clientX,clientY:b.clientY}}else v={clientX:u.clientX,clientY:u.clientY};let p=document.elementFromPoint(v.clientX,v.clientY);if(p){for(;!p.classList.contains("draggable")&&p.parentElement;)p=p.parentElement;p.classList.contains("draggable")&&((()=>{let b=t==null?void 0:t.previousElementSibling;for(;b;){if(b===p)return!0;b=b.previousElementSibling}return!1})()?r.insertBefore(t,p):r.insertBefore(t,p.nextElementSibling))}},m=()=>{s!==null&&(clearTimeout(s),s=null),t&&(t.style.color=o,t.style.backgroundColor=a,t=null),i=null,r.classList.remove("dragging"),n&&(n=!1,e!=null&&e.onDragEnd&&e.onDragEnd())};return[...r.children].forEach(u=>{u.classList.add("draggable"),u.onmousedown=l,u.ontouchstart=l,u.onmousemove=h,u.ontouchmove=h,r.onmouseleave=u.onmouseup=m,u.ontouchend=m}),()=>{[...r.children].forEach(u=>{u.classList.remove("draggable"),u.onmousedown=null,u.ontouchstart=null,u.onmousemove=null,u.ontouchmove=null,r.onmouseleave=u.onmouseup=null,u.ontouchend=null})}}const mo=Object.freeze(Object.defineProperty({__proto__:null,createMobile:Jn,createNative:Kn},Symbol.toStringTag,{value:"Module"})),Yn={color:"var(--ui-ripple-text, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",usePointer:!1};function Ds(r,e){e={...Yn,...e||{}};let t=null;const i=a=>{t=xi(a,e),r.addEventListener("pointermove",n)},s=()=>{r.removeEventListener("pointermove",n),Ci(t),t=null},n=()=>s(),o=a=>{t=xi(a,e),Ci(t),t=null};return r.classList.add("ripple-container"),r.style.overflow="hidden",e.usePointer?(r.addEventListener("pointerdown",i),r.addEventListener("pointerup",s),r.addEventListener("pointerleave",s)):r.addEventListener("click",o),()=>{if(r.classList.remove("ripple-container"),e.usePointer){r.removeEventListener("pointerdown",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointerleave",s),r.removeEventListener("pointermove",n);return}r.removeEventListener("click",o)}}function xi(r,e){const t=document.createElement("div"),i=r.currentTarget;i.appendChild(t),t.classList.add("ripple"),t.style.position="absolute",t.style.color="inherit",t.style.borderRadius="50%",t.style.pointerEvents="none",t.style.width="100px",t.style.height="100px",t.style.marginTop="-50px",t.style.marginLeft="-50px",t.style.opacity=`${e.opacity}`,t.style.backgroundColor=`${e.color}`,t.style.transform="scale(0) translate(0, 0)",t.style.transition=`transform ${e.spreadDuration} ${e.spreadTiming} 0s,opacity ${e.clearDuration} ${e.clearTiming} 0s`;const s=i.getBoundingClientRect();e.centered?(t.style.top=`${s.height/2}px`,t.style.left=`${s.width/2}px`):(t.style.top=`${r.clientY-s.top}px`,t.style.left=`${r.clientX-s.left}px`);const n=Math.max(s.width,s.height)*.02;return t.style.transform=`scale(${n}) translate(0, 0)`,t}function Ci(r){r&&(r.addEventListener("transitionend",e=>{e.propertyName==="opacity"&&r.remove()}),r.style.opacity="0")}function Ft(r){return Object.entries(r).map(([e,t])=>`${e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}:${t}`).join(";")+";"}const Xn=ae`
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
`,Qn=ae`
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
`,Ls=ae`
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
`,ea=ae`
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
`,yo=ae`
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
`,ta=ae`
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
`,ra=ae`
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
`,sa=ae`
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
`,ia=ae`
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
`,oa=ae`
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
`,na=ae`
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
`,aa=ae`
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
`,la=ae`
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
`,ca=ae`
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
`,ua=ae`
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
`,vo=ae`
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
`,da=ae`
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
`,pa=ae`
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
`,ha=ae`
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
`,ga=ae`
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
`,fa=ae`
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
`,ma=Object.freeze(Object.defineProperty({__proto__:null,bookmark:Xn,checkmark:Qn,chevronDown:Ls,chevronLeft:ea,close:yo,documentNew:ta,download:ra,drag:sa,menu:ia,moreVertical:oa,pen:na,plus:aa,power:la,printer:ca,refresh:ua,search:vo,settings:da,share:pa,today:ha,trash:ga,upload:fa},Symbol.toStringTag,{value:"Module"})),ze=Object.freeze(Object.defineProperty({__proto__:null,smoothieLineIcons:ma},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ya={attribute:!0,type:String,converter:Sr,reflect:!1,hasChanged:Os},va=(r=ya,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,r)},init(a){return a!==void 0&&this.P(o,void 0,r),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,r)}}throw Error("Unsupported decorator location: "+i)};function Y(r){return(e,t)=>typeof t=="object"?va(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}var _a=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,Gs=(r,e,t,i)=>{for(var s=i>1?void 0:i?ba(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&_a(e,t,s),s};let Ar=class extends me{constructor(){super(...arguments),this.variant="info",this.message="",this.role="button"}static get styles(){return Ee`
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
        `}render(){return ae`
            <ui-text style="font-size: 0.9rem;">${this.message}</ui-text>
        `}firstUpdated(r){super.firstUpdated(r),this.addEventListener("click",()=>{this.parentElement&&this.parentElement.removeChild(this)})}};Gs([Y({type:String,attribute:"variant",reflect:!0})],Ar.prototype,"variant",2);Gs([Y({type:String,attribute:"message"})],Ar.prototype,"message",2);Ar=Gs([ve("ui-alert")],Ar);var wa=(r,e,t,i)=>{for(var s=e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(s)||s);return s};let Ai=class extends me{static get styles(){return Ee`
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
        `}render(){return ae`
            <ui-flex-grid class="container" gap="0.25rem">
                <slot></slot>
            </ui-flex-grid>
        `}addAlert(r){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".container");return t&&t.append(r),()=>this.removeAlert(r)}removeAlert(r){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".container");t&&t.removeChild(r)}};Ai=wa([ve("ui-alerts")],Ai);var Ea=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,Fs=(r,e,t,i)=>{for(var s=i>1?void 0:i?ka(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ea(e,t,s),s};let Pr=class extends me{constructor(){super(...arguments),this.position="top",this.fixed=!1}static get styles(){return Ee`
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
                    var(--ui-backdrop-alpha)
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
        `}render(){return ae`
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
        `}content(r){return[...this.querySelectorAll(`[slot="${r}"]`)]}contentName(r){return this.querySelector(`[name="${r}"]`)}};Fs([Y({type:String,attribute:"position",reflect:!0})],Pr.prototype,"position",2);Fs([Y({type:Boolean,attribute:"fixed",reflect:!0})],Pr.prototype,"fixed",2);Pr=Fs([ve("ui-app-bar")],Pr);var Ta=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,Us=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sa(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ta(e,t,s),s};let $r=class extends me{constructor(){super(...arguments),this.name="",this.hidden=!1}static get styles(){return Ee`
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
        `}render(){return ae`<slot></slot>`}content(){return[...this.children]}contentAt(r=0){return this.children[r]}show(){this.hidden=!1}hide(){this.hidden=!0}};Us([Y({type:String,attribute:"name",reflect:!0})],$r.prototype,"name",2);Us([Y({type:Boolean,attribute:"hidden",reflect:!0})],$r.prototype,"hidden",2);$r=Us([ve("ui-app-bar-item")],$r);var xa=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ca(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&xa(e,t,s),s};let gt=class extends me{constructor(){super(...arguments),this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return Ee`
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
        `}render(){return ae`<slot></slot>`}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),t!==null&&(this.rippleCleanUp=Ds(this));break}}};dr([Y({type:String,attribute:"color",reflect:!0})],gt.prototype,"color",2);dr([Y({type:String,attribute:"variant",reflect:!0})],gt.prototype,"variant",2);dr([Y({type:Boolean,attribute:"disabled"})],gt.prototype,"disabled",2);dr([Y({type:Boolean,attribute:"ripple"})],gt.prototype,"ripple",2);gt=dr([ve("ui-button")],gt);const Aa=gt;var Pa=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?$a(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Pa(e,t,s),s};let $t=class extends me{constructor(){super(...arguments),this.ghost=!1,this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return Ee`
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
        `}render(){return ae`<ui-svg><slot></slot></ui-svg>`}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),t!==null&&(this.rippleCleanUp=Ds(this));break}}};pr([Y({type:String,attribute:"color",reflect:!0})],$t.prototype,"color",2);pr([Y({type:Boolean,attribute:"ghost"})],$t.prototype,"ghost",2);pr([Y({type:Boolean,attribute:"disabled"})],$t.prototype,"disabled",2);pr([Y({type:Boolean,attribute:"ripple"})],$t.prototype,"ripple",2);$t=pr([ve("ui-icon-button")],$t);var Oa=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,vt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ra(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Oa(e,t,s),s};let Je=class extends me{constructor(){super(...arguments),this.title="",this.fullscreen="",this.noFooter="",this.open=!1,this.modal=!1,this.inert=!1}static get styles(){return Ee`
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
                    var(--ui-backdrop-alpha)
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
        `}render(){return ae`
            <dialog
                @cancel=${r=>{r.preventDefault()}}
            >
                <div class="container">
                    <div class="header">
                        <ui-heading level="4">${this.title}</ui-heading>

                        <ui-icon-button
                            style="width: var(--ui-dialog-header-height); height: 100%;"
                            ghost
                            @click=${()=>{this.close()}}
                        >
                            ${yo}
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
        `}updated(r){this.open?this.show():this.close()}show(){this.open||(this.open=!0);const r=this.shadowRoot.querySelector("dialog");if(r===null)return;const e=r.inert;r.inert=this.inert,this.modal?r.showModal():r.show(),r.inert=e,this.dispatchEvent(new Event("open"))}close(){this.dispatchEvent(new Event("close")),this.shadowRoot.querySelector("dialog").close()}addDialogActionButton(r,e){const t=new mt;t.flex=(e==null?void 0:e.flex)||1,t.slot="actions",this.appendChild(t);let i=new Aa;return i.innerHTML=r,i.variant=e==null?void 0:e.variant,i.color=e==null?void 0:e.color,i.onclick=(e==null?void 0:e.onClick)||null,t.appendChild(i),i}};vt([Y({type:String,attribute:"title",reflect:!0})],Je.prototype,"title",2);vt([Y({type:Boolean,attribute:"fullscreen",reflect:!0})],Je.prototype,"fullscreen",2);vt([Y({type:Boolean,attribute:"no-footer",reflect:!0})],Je.prototype,"noFooter",2);vt([Y({type:Boolean,attribute:"open",reflect:!0})],Je.prototype,"open",2);vt([Y({type:Boolean,attribute:"modal",reflect:!0})],Je.prototype,"modal",2);vt([Y({type:Boolean,attribute:"inert",reflect:!0})],Je.prototype,"inert",2);Je=vt([ve("ui-dialog")],Je);var Da=Object.defineProperty,La=Object.getOwnPropertyDescriptor,hr=(r,e,t,i)=>{for(var s=i>1?void 0:i?La(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Da(e,t,s),s};const Ga="0";let ft=class extends me{constructor(){super(...arguments),this.title="",this.gap=Ga,this.open=!1,this.noFold=!1}static get styles(){return Ee`
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
        `}render(){return ae`
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
                                ${Ls}
                            </ui-svg>
                        </ui-flex-grid-item>
                    </ui-flex-grid-row>
                </ui-drawer-group-item>

                <slot></slot>
            </ui-flex-grid>
        `}};hr([Y({type:String,attribute:"title",reflect:!0})],ft.prototype,"title",2);hr([Y({type:String,attribute:"gap"})],ft.prototype,"gap",2);hr([Y({type:Boolean,attribute:"open",reflect:!0})],ft.prototype,"open",2);hr([Y({type:Boolean,attribute:"no-fold",reflect:!0})],ft.prototype,"noFold",2);ft=hr([ve("ui-drawer-group")],ft);const Fa=ft;var Ua=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,Is=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ia(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ua(e,t,s),s};let Or=class extends me{constructor(){super(...arguments),this.open=!1,this.role="button",this.handleUnfold=r=>{r.currentTarget.scrollIntoView(!0)}}static get styles(){return Ee`
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
                    var(--ui-backdrop-alpha)
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
        `}render(){return ae`
            <aside
                @click=${r=>{r.stopPropagation()}}
            >
                <slot></slot>
            </aside>
        `}firstUpdated(r){this.classList.add("has-backdrop-blur"),this.addEventListener("click",()=>{this.open=!1})}updated(r){[...this.children].forEach(async e=>{e instanceof Fa&&e.addEventListener("unfold",this.handleUnfold)})}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"width":t!==null?this.style.setProperty("--_width",t):this.style.removeProperty("--_width");break;case"open":t!==null?(history.pushState(null,"ui-drawer",location.href),this.dispatchEvent(new Event("open"))):this.dispatchEvent(new Event("close"));break}}};Is([Y({type:String,attribute:"width",reflect:!0})],Or.prototype,"width",2);Is([Y({type:Boolean,attribute:"open",reflect:!0})],Or.prototype,"open",2);Or=Is([ve("ui-drawer")],Or);var ja=(r,e,t,i)=>{for(var s=e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(s)||s);return s};let cs=class extends me{static get styles(){return Ee`
            * {
                box-sizing: border-box;
            }

            :host {
                width: 100%;

                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
            }

            ::slotted(*) {
                width: 100%;
            }
        `}render(){return ae`<slot></slot>`}};cs=ja([ve("ui-drawer-group-item")],cs);const Ba=cs;var za=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,gr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ma(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&za(e,t,s),s};const Pi="0";let Ot=class extends me{constructor(){super(...arguments),this.gap=Pi}static get styles(){return Ee`
            :host {
                display: flex;
                flex-direction: column !important;
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
        `}render(){return ae`<slot></slot>`}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"gap":t?this.style.setProperty("--_gap",t||Pi):this.style.removeProperty("--_gap");break;case"justify":t?this.style.setProperty("--_justify",t||""):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t||""):this.style.removeProperty("--_align");break;case"wrap":t?this.style.setProperty("--_wrap",t||""):this.style.removeProperty("--_wrap");break}}};gr([Y({type:String,attribute:"gap"})],Ot.prototype,"gap",2);gr([Y({type:String,attribute:"justify"})],Ot.prototype,"justify",2);gr([Y({type:String,attribute:"align"})],Ot.prototype,"align",2);gr([Y({type:String,attribute:"wrap"})],Ot.prototype,"wrap",2);Ot=gr([ve("ui-flex-grid")],Ot);var Na=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?qa(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Na(e,t,s),s};const ss=1;let mt=class extends me{constructor(){super(...arguments),this.flex=ss}static get styles(){return Ee`
            :host {
                flex: var(--_flex, ${ss});
                display: flex;
                flex-direction: var(--_direction, row);
                justify-content: var(--_justify);
                align-items: var(--_align);
            }

            ::slotted(*) {
                flex-grow: 1;
            }
        `}render(){return ae`<slot></slot>`}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"flex":this.style.setProperty("--_flex",t||ss.toString());break;case"direction":t?this.style.setProperty("--_direction",t):this.style.removeProperty("--_direction");break;case"justify":t?this.style.setProperty("--_justify",t):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t):this.style.removeProperty("--_align");break}}};fr([Y({type:Number,attribute:"flex"})],mt.prototype,"flex",2);fr([Y({type:String,attribute:"direction",reflect:!0})],mt.prototype,"direction",2);fr([Y({type:String,attribute:"justify"})],mt.prototype,"justify",2);fr([Y({type:String,attribute:"align"})],mt.prototype,"align",2);mt=fr([ve("ui-flex-grid-item")],mt);var Ha=Object.defineProperty,Va=Object.getOwnPropertyDescriptor,mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Va(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ha(e,t,s),s};const $i="0";let Rt=class extends me{constructor(){super(...arguments),this.gap=$i}static get styles(){return Ee`
            :host {
                display: flex;
                flex-direction: row !important;
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
        `}render(){return ae`<slot></slot>`}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"gap":t?this.style.setProperty("--_gap",t||$i):this.style.removeProperty("--_gap");break;case"justify":t?this.style.setProperty("--_justify",t||""):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t||""):this.style.removeProperty("--_align");break;case"wrap":t?this.style.setProperty("--_wrap",t||""):this.style.removeProperty("--_wrap");break}}};mr([Y({type:String,attribute:"gap"})],Rt.prototype,"gap",2);mr([Y({type:String,attribute:"justify"})],Rt.prototype,"justify",2);mr([Y({type:String,attribute:"align"})],Rt.prototype,"align",2);mr([Y({type:String,attribute:"wrap"})],Rt.prototype,"wrap",2);Rt=mr([ve("ui-flex-grid-row")],Rt);var Wa=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,_o=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ka(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Wa(e,t,s),s};let us=class extends me{constructor(){super(...arguments),this.checked=!1,this.role="checkbox"}static get styles(){return Ee`
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
        `}render(){return ae`
            <input
                type="checkbox"
                ?checked=${this.checked}

                @input=${()=>{this.checked=!this.checked}}

                @change=${()=>{this.dispatchEvent(new Event("change",{}))}}
            ></input>
        `}click(){super.click(),this.shadowRoot.querySelector("input").checked=this.checked=!this.checked}};_o([Y({type:Boolean,attribute:"checked",reflect:!0})],us.prototype,"checked",2);us=_o([ve("ui-check")],us);var Za=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,Qe=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ja(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Za(e,t,s),s};let Ne=class extends me{constructor(){super(...arguments),this.title="",this.type="",this.value="",this.placeholder="",this.invalid=!1,this.min="",this.max="",this.role="input"}static get styles(){return Ee`
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
        `}render(){return ae`
            <div class="container">
                ${this.title?ae`
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
                    @input=${r=>{this.value=r.currentTarget.value}}
                    @change=${()=>{this.dispatchEvent(new Event("change"))}}
                />
            </div>
        `}focus(r){super.focus(r),this.shadowRoot.querySelector("input").focus(r)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};Qe([Y({type:String,attribute:"title",reflect:!0})],Ne.prototype,"title",2);Qe([Y({type:String,attribute:"type",reflect:!0})],Ne.prototype,"type",2);Qe([Y({type:String,attribute:"value"})],Ne.prototype,"value",2);Qe([Y({type:String,attribute:"placeholder",reflect:!0})],Ne.prototype,"placeholder",2);Qe([Y({type:Boolean,attribute:"invalid",reflect:!0})],Ne.prototype,"invalid",2);Qe([Y({type:String,attribute:"min",reflect:!0})],Ne.prototype,"min",2);Qe([Y({type:String,attribute:"max",reflect:!0})],Ne.prototype,"max",2);Ne=Qe([ve("ui-input")],Ne);var Ya=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,He=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xa(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ya(e,t,s),s};let je=class extends me{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.noSubmit=!1,this.storage=!1,this.storagePrefix="",this.storageKey="",this.role="search"}static get styles(){return Ee`
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
        `}render(){return ae`
            <div class="container has-backdrop-blur">
                ${this.title?ae`<ui-secondary class="title">
                          ${this.title}
                      </ui-secondary>`:""}

                <input
                    name="search"
                    type="search"
                    value="${this.value}"
                    @keydown=${r=>{var e,t;this.noSubmit||r.key!=="Enter"||(t=(e=this.shadowRoot)==null?void 0:e.querySelector('ui-icon-button[name="submit"]'))==null||t.click()}}
                    @input=${r=>{this.value=r.currentTarget.value,this.storage&&(localStorage.setItem(this.storagePrefix+this.storageKey,this.value),this.noSubmit&&this.dispatchEvent(new Event("change")))}}
                />

                <ui-icon-button
                    name="submit"
                    for="search"
                    ghost
                    ripple
                    @click=${()=>{this.dispatchEvent(new Event("change"))}}
                >
                    ${vo}
                </ui-icon-button>
            </div>
        `}firstUpdated(r){if(super.firstUpdated(r),this.storage){const e=localStorage.getItem(this.storagePrefix+this.storageKey)||this.value;this.value=e,this.dispatchEvent(new Event("storage"))}}focus(r){super.focus(r),this.shadowRoot.querySelector("input").focus(r)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};He([Y({type:String,attribute:"title",reflect:!0})],je.prototype,"title",2);He([Y({type:String,attribute:"value"})],je.prototype,"value",2);He([Y({type:String,attribute:"placeholder",reflect:!0})],je.prototype,"placeholder",2);He([Y({type:Boolean,attribute:"invalid",reflect:!0})],je.prototype,"invalid",2);He([Y({type:Boolean,attribute:"no-submit",reflect:!0})],je.prototype,"noSubmit",2);He([Y({type:Boolean,attribute:"storage",reflect:!0})],je.prototype,"storage",2);He([Y({type:String,attribute:"storage-prefix",reflect:!0})],je.prototype,"storagePrefix",2);He([Y({type:String,attribute:"storage-key",reflect:!0})],je.prototype,"storageKey",2);je=He([ve("ui-search")],je);var Qa=Object.defineProperty,el=Object.getOwnPropertyDescriptor,js=(r,e,t,i)=>{for(var s=i>1?void 0:i?el(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Qa(e,t,s),s};let Rr=class extends me{constructor(){super(...arguments),this.open=!1,this.keepOpen=!1}static get styles(){return Ee`
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
        `}render(){!this.open&&!this.keepOpen?this.role="button":this.role=null;const r=this.optionsClickHandler.bind(this);return ae`
            <div
                class="options"
                @click=${async e=>{if(this.keepOpen)return await r(e);this.open=!this.open,this.open?(e.stopPropagation(),this.addEventListener("click",r)):this.removeEventListener("click",r)}}
            >
                <div class="icon">
                    <ui-svg>${Ls}</ui-svg>
                </div>

                <slot></slot>
            </div>
        `}updated(r){this.style.setProperty("--_items",`${this.children.length}`)}async optionsClickHandler(r){r.composedPath().forEach(e=>{e instanceof Dt&&([...this.querySelectorAll("ui-select-option")].forEach(t=>t.removeAttribute("selected")),e.setAttribute("selected",""),this.dispatchEvent(new Event("change")))})}options(){return[...this.children].filter(r=>r instanceof Dt)}selected(){return this.options().find(r=>r.selected)||null}click(){super.click(),this.shadowRoot.querySelector("div.options").click()}};js([Y({type:Boolean,attribute:"open",reflect:!0})],Rr.prototype,"open",2);js([Y({type:Boolean,attribute:"keep-open",reflect:!0})],Rr.prototype,"keepOpen",2);Rr=js([ve("ui-select")],Rr);var tl=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,Bs=(r,e,t,i)=>{for(var s=i>1?void 0:i?rl(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&tl(e,t,s),s};let Dt=class extends me{constructor(){super(...arguments),this.value="",this.selected=!1,this.role="button"}static get styles(){return Ee`
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
        `}render(){return ae`<slot></slot>`}};Bs([Y({type:String,attribute:"value",reflect:!0})],Dt.prototype,"value",2);Bs([Y({type:Boolean,attribute:"selected",reflect:!0})],Dt.prototype,"selected",2);Dt=Bs([ve("ui-select-option")],Dt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=r=>r??Oe;var sl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,_t=(r,e,t,i)=>{for(var s=i>1?void 0:i?il(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&sl(e,t,s),s};let Ye=class extends me{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.role="textbox"}static get styles(){return Ee`
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
        `}render(){return ae`
            <div class="container">
                ${this.title?ae`
                          <ui-secondary class="title">
                              ${this.title}
                          </ui-secondary>
                      `:""}

                <textarea
                    placeholder=${this.placeholder}
                    .value=${this.value}
                    rows=${Oi(this.rows)}
                    cols=${Oi(this.cols)}
                    @input=${r=>{this.value=r.currentTarget.value}}
                    @change=${()=>{this.dispatchEvent(new Event("change"))}}
                ></textarea>
            </div>
        `}focus(r){super.focus(r),this.shadowRoot.querySelector("textarea").focus(r)}blur(){super.blur(),this.shadowRoot.querySelector("textarea").blur()}click(){super.click(),this.focus()}};_t([Y({type:String,attribute:"title",reflect:!0})],Ye.prototype,"title",2);_t([Y({type:String,attribute:"value"})],Ye.prototype,"value",2);_t([Y({type:String,attribute:"placeholder",reflect:!0})],Ye.prototype,"placeholder",2);_t([Y({type:Boolean,attribute:"invalid",reflect:!0})],Ye.prototype,"invalid",2);_t([Y({type:Number,attribute:"rows",reflect:!0})],Ye.prototype,"rows",2);_t([Y({type:Number,attribute:"cols",reflect:!0})],Ye.prototype,"cols",2);Ye=_t([ve("ui-textarea")],Ye);var ol=Object.defineProperty,nl=Object.getOwnPropertyDescriptor,Vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?nl(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ol(e,t,s),s};let er=class extends me{constructor(){super(...arguments),this.name="",this.href="",this.fallback=!1}static get styles(){return Ee`
            :host {
                display: none;
            }
        `}};Vr([Y({type:String,attribute:"name",reflect:!0})],er.prototype,"name",2);Vr([Y({type:String,attribute:"href",reflect:!0})],er.prototype,"href",2);Vr([Y({type:Boolean,attribute:"fallback",reflect:!0})],er.prototype,"fallback",2);er=Vr([ve("ui-lang-type")],er);var al=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,bo=(r,e,t,i)=>{for(var s=i>1?void 0:i?ll(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&al(e,t,s),s};let ds=class extends me{constructor(){super(...arguments),this.data={},this.events=new As,this.current=""}static get styles(){return Ee`
            :host {
                display: none;
            }
        `}render(){return ae`<slot></slot>`}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"current":this.setCurrent(t||"");break}}fallback(){return this.querySelector("ui-lang-type[fallback]")}get(r,e){var t,i;return((i=(t=this.data)==null?void 0:t[r])==null?void 0:i[e])||null}async setCurrent(r){const e=(r!==""?this.querySelector(`ui-lang-type[name="${r}"]`):this.fallback())||this.fallback();if(e){if(!e.href)throw"Missing href attribute!";try{this.data=await(await fetch(e.href)).json()}catch(t){console.error(t)}this.events.dispatch("change",e)}}};bo([Y({type:String,attribute:"current",reflect:!0})],ds.prototype,"current",2);ds=bo([ve("ui-lang")],ds);var cl=Object.defineProperty,ul=Object.getOwnPropertyDescriptor,wo=(r,e,t,i)=>{for(var s=i>1?void 0:i?ul(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&cl(e,t,s),s};let Dr=class extends me{constructor(){super(...arguments),this.nobg=!1}static get styles(){return Ee`
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
                    var(--ui-backdrop-alpha)
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
        `}render(){return ae`
            <div class="background"></div>
            <div class="spinner"></div>
        `}};wo([Y({type:Boolean,attribute:"nobg",reflect:!0})],Dr.prototype,"nobg",2);Dr=wo([ve("ui-spinner")],Dr);const dl=Dr;var pl=(r,e,t,i)=>{for(var s=e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(s)||s);return s};let Ri=class extends me{constructor(){super(...arguments),this.events=new As,this.stack=[],this.onpopstate=()=>{if(this.stack.length===0){this.dispatchChangeEvent(null);return}const r=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(r)},this.pages={},this.lockNavigation=!1}static get styles(){return Ee`
            :host {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }
        `}render(){return ae`<slot></slot>`}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.onpopstate)}stackSize(){return this.stack.length}clearStack(){for(;this.stack.length>0;)this.removeChild(this.stack.pop());this.dispatchChangeEvent(null)}goBack(){this.stack.length===0||this.lockNavigation||history.back()}registerPage(r,e){this.pages[r]=e}unregisterPage(r){delete this.pages[r]}async setPage(r,e=null,t=!1){var i;if(this.lockNavigation)return;if(!(r in this.pages))throw new Error(`page "${r}" not found`);const s=await this.pages[r]();this.stack.push(this.appendChild(s)),typeof e=="function"&&e(s);let n=null;this.stack.length>1&&!t&&(n=this.stack[this.stack.length-2],(i=n.parentElement)==null||i.removeChild(n)),this.dispatchChangeEvent(n),this.onpopstate!==null&&history.pushState(null,document.title,location.href)}async dispatchChangeEvent(r){this.events.dispatch("change",{old:r||this.stack[this.stack.length-2]||null,current:this.stack[this.stack.length-1]||null})}};Ri=pl([ve("ui-stack-layout")],Ri);var hl=Object.defineProperty,gl=Object.getOwnPropertyDescriptor,Eo=(r,e,t,i)=>{for(var s=i>1?void 0:i?gl(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&hl(e,t,s),s};let Lr=class extends me{constructor(){super(...arguments),this.name=""}static get styles(){return Ee`
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
        `}render(){return ae`<slot></slot>`}};Eo([Y({type:String,attribute:"name",reflect:!0})],Lr.prototype,"name",2);Lr=Eo([ve("ui-stack-layout-page")],Lr);const We=Lr;var fl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,zs=(r,e,t,i)=>{for(var s=i>1?void 0:i?ml(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&fl(e,t,s),s};let Gr=class extends me{constructor(){super(...arguments),this.data={},this.events=new As,this.storage=!1,this.storagePrefix=""}static get styles(){return Ee`
            :host {
                display: none;
            }
        `}getData(r){if(this.storage){const e=localStorage.getItem(`${this.storagePrefix}${r}`);if(e!==null)return JSON.parse(e)}if(this.data.hasOwnProperty(r))return this.data[r]}setData(r,e,t=!1){if(t&&this.storage){const i=localStorage.getItem(`${this.storagePrefix}${r}`);i!==null?this.data[r]=JSON.parse(i):this.data.hasOwnProperty(r)||(this.data[r]=e)}else this.data[r]=e;this.storage&&localStorage.setItem(`${this.storagePrefix}${r}`,JSON.stringify(this.data[r])),this.events.dispatch(r,this.data[r])}updateData(r,e){const t=this.getData(r);if(t===void 0)throw new Error(`"${r}" not found, use \`setData\``);this.setData(r,e(t))}addListener(r,e,t=!1){if(t){const i=this.getData(r);i!==void 0&&setTimeout(()=>e(i))}return this.events.addListener(r,e)}};zs([Y({type:Boolean,attribute:"storage",reflect:!0})],Gr.prototype,"storage",2);zs([Y({type:String,attribute:"storage-prefix",reflect:!0})],Gr.prototype,"storagePrefix",2);Gr=zs([ve("ui-store")],Gr);var yl=(r,e,t,i)=>{for(var s=e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(s)||s);return s};let Di=class extends me{static get styles(){return Ee`
            :host {
                display: inline-block;
                color: inherit;
            }

            ::slotted(*) {
                width: 100%;
                height: 100%;
            }
        `}render(){return ae` <slot></slot> `}};Di=yl([ve("ui-svg")],Di);var vl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,et=(r,e,t,i)=>{for(var s=i>1?void 0:i?_l(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&vl(e,t,s),s};let Be=class extends me{constructor(){super(...arguments),this.family="var(--ui-fontFamily)",this.size="var(--ui-fontSize)",this.mono=0,this.casl=1,this.wght=400,this.slnt=0,this.crsv=.5}static get styles(){return Ee`
            :host {
                display: inline-block;

                width: fit-content;
                max-width: 100%;
                overflow-wrap: break-word;

                font-family: var(--_family) !important;
                font-size: var(--_size) !important;
                font-variation-settings:
                    "MONO" var(--_mono),
                    "CASL" var(--_casl),
                    "wght" var(--_wght),
                    "slnt" var(--_slnt),
                    "CRSV" var(--_crsv) !important;
            }
        `}render(){return this.style.setProperty("--_family",this.family),this.style.setProperty("--_size",this.size),this.style.setProperty("--_mono",this.mono.toString()),this.style.setProperty("--_casl",this.casl.toString()),this.style.setProperty("--_wght",this.wght.toString()),this.style.setProperty("--_slnt",this.slnt.toString()),this.style.setProperty("--_crsv",this.crsv.toString()),ae`<slot></slot>`}};et([Y({type:String,attribute:"family",reflect:!0})],Be.prototype,"family",2);et([Y({type:String,attribute:"size",reflect:!0})],Be.prototype,"size",2);et([Y({type:Number,attribute:"mono",reflect:!0})],Be.prototype,"mono",2);et([Y({type:Number,attribute:"casl",reflect:!0})],Be.prototype,"casl",2);et([Y({type:Number,attribute:"wght",reflect:!0})],Be.prototype,"wght",2);et([Y({type:Number,attribute:"slnt",reflect:!0})],Be.prototype,"slnt",2);et([Y({type:Number,attribute:"crsv",reflect:!0})],Be.prototype,"crsv",2);Be=et([ve("ui-text")],Be);const Ms=Be;var bl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,ko=(r,e,t,i)=>{for(var s=i>1?void 0:i?wl(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&bl(e,t,s),s};let ps=class extends Ms{constructor(){super(...arguments),this.mono=.25,this.casl=1,this.wght=750,this.slnt=0}render(){switch(this.level){case 6:this.size="0.75rem";break;case 5:this.size="1rem";break;case 4:this.size="1.25rem";break;case 3:this.size="1.5rem";break;case 2:this.size="1.75rem";break;case 1:this.size="2rem";break}return super.render()}};ko([Y({type:Number,attribute:"level",reflect:!0})],ps.prototype,"level",2);ps=ko([ve("ui-heading")],ps);var El=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,Wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?kl(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&El(e,t,s),s};let tr=class extends me{constructor(){super(...arguments),this.rippleCleanUp=null,this.clickHandler=async r=>{r.currentTarget&&[...r.currentTarget.children].forEach(e=>{e.click()})},this.childClickHandler=async r=>{r.stopPropagation()},this.ripple=!1}static get styles(){return Ee`
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
        `}render(){return ae`
            <div>
                <span>
                    ${this.primary?ae`<ui-primary>${this.primary}</ui-primary>`:""}
                    ${this.secondary?ae`<ui-secondary>${this.secondary}</ui-secondary>`:""}
                </span>

                <span>
                    <slot></slot>
                </span>
            </div>
        `}firstUpdated(r){super.firstUpdated(r),this.ripple?this.enableRipple():this.disableRipple()}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"ripple":this.ripple?this.enableRipple():this.disableRipple()}}async enableRipple(){var r;if(this.rippleCleanUp)return;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("div");e&&(this.rippleCleanUp=Ds(e),this.role="button",this.style.cursor="pointer",this.addEventListener("click",this.clickHandler),[...this.children].forEach(t=>{t.addEventListener("click",this.childClickHandler)}))}async disableRipple(){this.rippleCleanUp&&(this.style.cursor="default",this.role=null,this.rippleCleanUp(),this.rippleCleanUp=null,this.removeEventListener("click",this.clickHandler),[...this.children].forEach(r=>{r.removeEventListener("click",this.childClickHandler)}))}};Wr([Y({type:String,attribute:"primary",reflect:!0})],tr.prototype,"primary",2);Wr([Y({type:String,attribute:"secondary",reflect:!0})],tr.prototype,"secondary",2);Wr([Y({type:Boolean,attribute:"ripple",reflect:!0})],tr.prototype,"ripple",2);tr=Wr([ve("ui-label")],tr);var Tl=(r,e,t,i)=>{for(var s=e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(s)||s);return s};let Li=class extends Ms{constructor(){super(...arguments),this.size="1.1rem",this.wght=425}};Li=Tl([ve("ui-primary")],Li);var Sl=(r,e,t,i)=>{for(var s=e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(s)||s);return s};let Gi=class extends Ms{constructor(){super(...arguments),this.size="0.9rem",this.wght=350,this.slnt=-15}};Gi=Sl([ve("ui-secondary")],Gi);var xl=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cl(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&xl(e,t,s),s};let Lt=class extends me{constructor(){super(...arguments),this.themesPath="themes",this.media=null}get target(){return document.body}get mediaHandler(){return r=>{r.matches?this.target.setAttribute("data-theme","dark"):this.target.setAttribute("data-theme","light")}}static get styles(){return Ee`
            :host {
                display: none;
            }
        `}attributeChangedCallback(r,e,t){switch(super.attributeChangedCallback(r,e,t),r){case"auto":this.handleAuto();break;case"mode":this.handleMode();break;case"theme":this.handleTheme();break}}handleAuto(){if(!this.auto){if(console.debug("[ui][ui-theme-handler] Disable auto mode"),!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null;return}if(this.mode=null,console.debug("[ui][ui-theme-handler] Enable auto mode"),this.media){this.mediaHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}handleMode(){console.debug(`[ui][ui-theme-handler] Set mode ${this.mode}`),this.mode?this.target.setAttribute("data-theme",this.mode):this.target.removeAttribute("data-theme")}handleTheme(){const r=document.head;console.debug(`[ui][ui-theme-handler] Load theme from "${this.themesPath}/${this.theme}"`),r.querySelectorAll("link.theme").forEach(t=>{r.removeChild(t)});const e=document.createElement("link");e.classList.add("theme"),e.rel="stylesheet",e.href=`${this.themesPath}/${this.theme}.css`,r.appendChild(e)}};yr([Y({type:Boolean,attribute:"auto",reflect:!0})],Lt.prototype,"auto",2);yr([Y({type:String,attribute:"mode",reflect:!0})],Lt.prototype,"mode",2);yr([Y({type:String,attribute:"theme",reflect:!0})],Lt.prototype,"theme",2);yr([Y({type:String,attribute:"themes-path",reflect:!0})],Lt.prototype,"themesPath",2);Lt=yr([ve("ui-theme-handler")],Lt);class Ut{key(){return""}listKey(e){return"title"in e?e.title:"unknown"}title(){return""}fileName(e){return`${this.listKey(e)}.json`}zipFileName(){return`${this.title()} - ${new Date().getTime()}.zip`}validate(e){try{return JSON.parse(e)}catch{return null}}sort(e){const t=[],i=e.map(s=>`${this.listKey(s)}`).sort();for(const s of i){const n=e.find(o=>`${this.listKey(o)}`===s);n!==void 0&&t.push(n)}return t}replaceInStore(e,t,i){const s=this.listKey(t),n=this.listKey(i);if(n!==s){for(const o of e.getData(this.key())||[])if(this.listKey(o)===s)throw new Error(`Liste "${s}" existiert bereits!"`)}e.updateData(this.key(),o=>{for(let a=0;a<o.length;a++)this.listKey(o[a])===n&&(o[a]=t);return o})}addToStore(e,t,i){const s=e.getData(this.key());if(s===void 0)return;for(const a of t){const l=this.listKey(a);if(s.find(m=>this.listKey(m)===l)!==void 0)throw new Error(`Liste "${l}" existiert bereits!"`)}const o=[...s.filter(a=>t.find(h=>this.listKey(h)===this.listKey(a))===void 0),...t];e.setData(this.key(),i?this.sort(o):o)}}class Al extends Ut{key(){return"alertLists"}listKey(e){return e.title}title(){return"Alarm Listen"}fileName(e){return`Alarm Liste - ${super.fileName(e)}`}validate(e){const t=super.validate(e);if(typeof t!="object"||typeof(t==null?void 0:t.title)!="string"||!("data"in t)||!Array.isArray(t.data))return null;for(const i of t.data)if(!("from"in i&&"to"in i&&"alert"in i&&"desc"in i)||typeof i.from!="number"||typeof i.to!="number"||typeof i.alert!="string"||(typeof i.desc=="string"&&(i.desc=i.desc.split(`
`)),!Array.isArray(i.desc))||i.desc.filter(s=>typeof s!="string").length>0)return null;return t}}class Pl extends Ut{key(){return"metalSheets"}listKey(e){return`${e.format} ${e.toolID}`}title(){return"Blech Listen"}fileName(e){return`Blech Liste - ${super.fileName(e)}`}validate(e){const t=super.validate(e);if(typeof t!="object"||typeof t.format!="string"||(t.toolID||(t.toolID=""),typeof t.toolID!="string")||!("data"in t)||typeof t.data!="object"||typeof t.data.press!="number")return null;if(!("table"in t.data))t.data.table={header:[],data:[]};else{if(typeof t.data.table!="object"||!("header"in t.data.table)||!("data"in t.data.table)||!Array.isArray(t.data.table.header)||!Array.isArray(t.data.table.data))return null;for(const i of t.data.table.header)if(typeof i!="string")return null;for(const i of t.data.table.data)for(const s of i)if(typeof s!="string")return null}return t}}class $l extends Ut{key(){return"special"}listKey(e){return`${e.title}`}title(){return"Special"}fileName(e){return`Special - ${super.fileName(e)}`}validate(e){return typeof super.validate(e)!="object",null}}class Ol extends Ut{key(){return"visBookmarks"}listKey(e){return`${e.title}`}title(){return"Vis Bookmarks"}fileName(e){return`Vis Bookmarks - ${super.fileName(e)}`}}class Rl extends Ut{key(){return"visData"}listKey(e){return`${e.title}`}title(){return"Vis Data"}fileName(e){return`Vis Data - ${super.fileName(e)}`}validate(e){const t=super.validate(e);if(typeof t!="object"||typeof t.title!="string"||!Array.isArray(t.data))return null;for(const i of t.data)if(typeof i.key!="string"&&i.key!==null||typeof i.value!="string"||typeof i.lotto!="string"&&i.lotto!==null||typeof i.format!="string"&&i.format!==null||typeof i.thickness!="string"&&i.thickness!==null||typeof i.stamp!="string"&&i.stamp!==null)return null;return t}}class Dl extends Ut{key(){return"vis"}listKey(e){return`${e.title}`}title(){return"Vis"}fileName(e){return`Vis Liste - ${super.fileName(e)}`}validate(e){let t=super.validate(e);if(t===null)return Gl(e);if(typeof t!="object"||((typeof t.date!="number"||t.date<=0)&&(t.date=new Date().getTime()),typeof t.title!="string"||!Array.isArray(t.data)))return null;for(const i of t.data)if(typeof i!="object"||!("lotto"in i)||!("name"in i)||!("format"in i)||!("thickness"in i)||!("stamp"in i))return null;return t}}function Ll(r){var e,t;try{const i=r.split(/[xX]/i);if(i.length>2)return r;const s=((e=i[0].match(/[0-9]+(.*)/i))==null?void 0:e[1])||"",n=((t=i[1].match(/[0-9]+(.*)/i))==null?void 0:t[1])||"",o=parseInt(i[0],10),a=parseInt(i[1],10);r=o>a?`${o}${s}X${a}${n}`:`${a}${s}X${o}${n}`}catch(i){console.warn(`Fix product format "${r}": ${i}`)}return r}function Gl(r){const e=(()=>{const t=new Date,i=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");return{date:t.getTime(),title:`${t.getFullYear()}-${i}-${s}`,data:[]}})();for(let t of r.split(`
`)){if(t=t.trim(),!t)continue;const i={lotto:"",name:"",format:"",stamp:"",thickness:-1},s=t.split("	");if(i.lotto=s[0]||"",i.lotto==="")throw new Error(`product lotto missing in ${t}`);if(i.name=s[1]||"",i.name==="")throw new Error(`product name not found in "${t}"`);if(i.format=s[2]||"",i.format==="")throw new Error(`product format not found in "${t}"`);if(i.format=Ll(i.format),i.thickness=parseInt(s[3]||"-1",10),i.thickness===-1)throw new Error(`product thickness not found in "${t}"`);if(i.stamp=s[4]||"",i.stamp==="")throw new Error(`product stamp not found in "${t}"`);e.data.push(i)}return e}function Kr(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&process.version!==void 0?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}function Ns(r,e,t,i){if(typeof t!="function")throw new Error("method for before hook must be a function");return i||(i={}),Array.isArray(e)?e.reverse().reduce((s,n)=>Ns.bind(null,r,n,s,i),t)():Promise.resolve().then(()=>r.registry[e]?r.registry[e].reduce((s,n)=>n.hook.bind(null,s,i),t)():t(i))}function Fl(r,e,t,i){const s=i;r.registry[t]||(r.registry[t]=[]),e==="before"&&(i=(n,o)=>Promise.resolve().then(s.bind(null,o)).then(n.bind(null,o))),e==="after"&&(i=(n,o)=>{let a;return Promise.resolve().then(n.bind(null,o)).then(l=>(a=l,s(a,o))).then(()=>a)}),e==="error"&&(i=(n,o)=>Promise.resolve().then(n.bind(null,o)).catch(a=>s(a,o))),r.registry[t].push({hook:i,orig:s})}function Ul(r,e,t){if(!r.registry[e])return;const i=r.registry[e].map(s=>s.orig).indexOf(t);i!==-1&&r.registry[e].splice(i,1)}const Fi=Function.bind,Ui=Fi.bind(Fi);function To(r,e,t){const i=Ui(Ul,null).apply(null,t?[e,t]:[e]);r.api={remove:i},r.remove=i,["before","error","after","wrap"].forEach(s=>{const n=t?[e,s,t]:[e,s];r[s]=r.api[s]=Ui(Fl,null).apply(null,n)})}function Il(){const r=Symbol("Singular"),e={registry:{}},t=Ns.bind(null,e,r);return To(t,e,r),t}function jl(){const r={registry:{}},e=Ns.bind(null,r);return To(e,r),e}const Bl={Singular:Il,Collection:jl};var zl="0.0.0-development",Ml=`octokit-endpoint.js/${zl} ${Kr()}`,Nl={method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":Ml},mediaType:{format:""}};function ql(r){return r?Object.keys(r).reduce((e,t)=>(e[t.toLowerCase()]=r[t],e),{}):{}}function Hl(r){if(typeof r!="object"||r===null||Object.prototype.toString.call(r)!=="[object Object]")return!1;const e=Object.getPrototypeOf(r);if(e===null)return!0;const t=Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Function.prototype.call(t)===Function.prototype.call(r)}function So(r,e){const t=Object.assign({},r);return Object.keys(e).forEach(i=>{Hl(e[i])?i in r?t[i]=So(r[i],e[i]):Object.assign(t,{[i]:e[i]}):Object.assign(t,{[i]:e[i]})}),t}function Ii(r){for(const e in r)r[e]===void 0&&delete r[e];return r}function hs(r,e,t){var s;if(typeof e=="string"){let[n,o]=e.split(" ");t=Object.assign(o?{method:n,url:o}:{url:n},t)}else t=Object.assign({},e);t.headers=ql(t.headers),Ii(t),Ii(t.headers);const i=So(r||{},t);return t.url==="/graphql"&&(r&&((s=r.mediaType.previews)!=null&&s.length)&&(i.mediaType.previews=r.mediaType.previews.filter(n=>!i.mediaType.previews.includes(n)).concat(i.mediaType.previews)),i.mediaType.previews=(i.mediaType.previews||[]).map(n=>n.replace(/-preview/,""))),i}function Vl(r,e){const t=/\?/.test(r)?"&":"?",i=Object.keys(e);return i.length===0?r:r+t+i.map(s=>s==="q"?"q="+e.q.split("+").map(encodeURIComponent).join("+"):`${s}=${encodeURIComponent(e[s])}`).join("&")}var Wl=/\{[^}]+\}/g;function Kl(r){return r.replace(/^\W+|\W+$/g,"").split(/,/)}function Zl(r){const e=r.match(Wl);return e?e.map(Kl).reduce((t,i)=>t.concat(i),[]):[]}function ji(r,e){const t={__proto__:null};for(const i of Object.keys(r))e.indexOf(i)===-1&&(t[i]=r[i]);return t}function xo(r){return r.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function kt(r){return encodeURIComponent(r).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Nt(r,e,t){return e=r==="+"||r==="#"?xo(e):kt(e),t?kt(t)+"="+e:e}function bt(r){return r!=null}function is(r){return r===";"||r==="&"||r==="?"}function Jl(r,e,t,i){var s=r[t],n=[];if(bt(s)&&s!=="")if(typeof s=="string"||typeof s=="number"||typeof s=="boolean")s=s.toString(),i&&i!=="*"&&(s=s.substring(0,parseInt(i,10))),n.push(Nt(e,s,is(e)?t:""));else if(i==="*")Array.isArray(s)?s.filter(bt).forEach(function(o){n.push(Nt(e,o,is(e)?t:""))}):Object.keys(s).forEach(function(o){bt(s[o])&&n.push(Nt(e,s[o],o))});else{const o=[];Array.isArray(s)?s.filter(bt).forEach(function(a){o.push(Nt(e,a))}):Object.keys(s).forEach(function(a){bt(s[a])&&(o.push(kt(a)),o.push(Nt(e,s[a].toString())))}),is(e)?n.push(kt(t)+"="+o.join(",")):o.length!==0&&n.push(o.join(","))}else e===";"?bt(s)&&n.push(kt(t)):s===""&&(e==="&"||e==="?")?n.push(kt(t)+"="):s===""&&n.push("");return n}function Yl(r){return{expand:Xl.bind(null,r)}}function Xl(r,e){var t=["+","#",".","/",";","?","&"];return r=r.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(i,s,n){if(s){let a="";const l=[];if(t.indexOf(s.charAt(0))!==-1&&(a=s.charAt(0),s=s.substr(1)),s.split(/,/g).forEach(function(h){var m=/([^:\*]*)(?::(\d+)|(\*))?/.exec(h);l.push(Jl(e,a,m[1],m[2]||m[3]))}),a&&a!=="+"){var o=",";return a==="?"?o="&":a!=="#"&&(o=a),(l.length!==0?a:"")+l.join(o)}else return l.join(",")}else return xo(n)}),r==="/"?r:r.replace(/\/$/,"")}function Co(r){var m;let e=r.method.toUpperCase(),t=(r.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),i=Object.assign({},r.headers),s,n=ji(r,["method","baseUrl","url","headers","request","mediaType"]);const o=Zl(t);t=Yl(t).expand(n),/^http/.test(t)||(t=r.baseUrl+t);const a=Object.keys(r).filter(u=>o.includes(u)).concat("baseUrl"),l=ji(n,a);if(!/application\/octet-stream/i.test(i.accept)&&(r.mediaType.format&&(i.accept=i.accept.split(/,/).map(u=>u.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${r.mediaType.format}`)).join(",")),t.endsWith("/graphql")&&(m=r.mediaType.previews)!=null&&m.length)){const u=i.accept.match(/[\w-]+(?=-preview)/g)||[];i.accept=u.concat(r.mediaType.previews).map(v=>{const p=r.mediaType.format?`.${r.mediaType.format}`:"+json";return`application/vnd.github.${v}-preview${p}`}).join(",")}return["GET","HEAD"].includes(e)?t=Vl(t,l):"data"in l?s=l.data:Object.keys(l).length&&(s=l),!i["content-type"]&&typeof s<"u"&&(i["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(e)&&typeof s>"u"&&(s=""),Object.assign({method:e,url:t,headers:i},typeof s<"u"?{body:s}:null,r.request?{request:r.request}:null)}function Ql(r,e,t){return Co(hs(r,e,t))}function Ao(r,e){const t=hs(r,e),i=Ql.bind(null,t);return Object.assign(i,{DEFAULTS:t,defaults:Ao.bind(null,t),merge:hs.bind(null,t),parse:Co})}var ec=Ao(null,Nl);class qt extends Error{constructor(t,i,s){super(t);De(this,"name");De(this,"status");De(this,"request");De(this,"response");this.name="HttpError",this.status=Number.parseInt(i),Number.isNaN(this.status)&&(this.status=0),"response"in s&&(this.response=s.response);const n=Object.assign({},s.request);s.request.headers.authorization&&(n.headers=Object.assign({},s.request.headers,{authorization:s.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),n.url=n.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=n}}var tc="0.0.0-development",rc={headers:{"user-agent":`octokit-request.js/${tc} ${Kr()}`}};function sc(r){if(typeof r!="object"||r===null||Object.prototype.toString.call(r)!=="[object Object]")return!1;const e=Object.getPrototypeOf(r);if(e===null)return!0;const t=Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Function.prototype.call(t)===Function.prototype.call(r)}async function Bi(r){var u,v,p,b,f;const e=((u=r.request)==null?void 0:u.fetch)||globalThis.fetch;if(!e)throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");const t=((v=r.request)==null?void 0:v.log)||console,i=((p=r.request)==null?void 0:p.parseSuccessResponseBody)!==!1,s=sc(r.body)||Array.isArray(r.body)?JSON.stringify(r.body):r.body,n=Object.fromEntries(Object.entries(r.headers).map(([g,y])=>[g,String(y)]));let o;try{o=await e(r.url,{method:r.method,body:s,redirect:(b=r.request)==null?void 0:b.redirect,headers:n,signal:(f=r.request)==null?void 0:f.signal,...r.body&&{duplex:"half"}})}catch(g){let y="Unknown Error";if(g instanceof Error){if(g.name==="AbortError")throw g.status=500,g;y=g.message,g.name==="TypeError"&&"cause"in g&&(g.cause instanceof Error?y=g.cause.message:typeof g.cause=="string"&&(y=g.cause))}const k=new qt(y,500,{request:r});throw k.cause=g,k}const a=o.status,l=o.url,h={};for(const[g,y]of o.headers)h[g]=y;const m={url:l,status:a,headers:h,data:""};if("deprecation"in h){const g=h.link&&h.link.match(/<([^>]+)>; rel="deprecation"/),y=g&&g.pop();t.warn(`[@octokit/request] "${r.method} ${r.url}" is deprecated. It is scheduled to be removed on ${h.sunset}${y?`. See ${y}`:""}`)}if(a===204||a===205)return m;if(r.method==="HEAD"){if(a<400)return m;throw new qt(o.statusText,a,{response:m,request:r})}if(a===304)throw m.data=await os(o),new qt("Not modified",a,{response:m,request:r});if(a>=400)throw m.data=await os(o),new qt(ic(m.data),a,{response:m,request:r});return m.data=i?await os(o):o.body,m}async function os(r){const e=r.headers.get("content-type");return/application\/json/.test(e)?r.json().catch(()=>r.text()).catch(()=>""):!e||/^text\/|charset=utf-8$/.test(e)?r.text():r.arrayBuffer()}function ic(r){if(typeof r=="string")return r;if(r instanceof ArrayBuffer)return"Unknown error";if("message"in r){const e="documentation_url"in r?` - ${r.documentation_url}`:"";return Array.isArray(r.errors)?`${r.message}: ${r.errors.map(t=>JSON.stringify(t)).join(", ")}${e}`:`${r.message}${e}`}return`Unknown error: ${JSON.stringify(r)}`}function gs(r,e){const t=r.defaults(e);return Object.assign(function(s,n){const o=t.merge(s,n);if(!o.request||!o.request.hook)return Bi(t.parse(o));const a=(l,h)=>Bi(t.parse(t.merge(l,h)));return Object.assign(a,{endpoint:t,defaults:gs.bind(null,t)}),o.request.hook(a,o)},{endpoint:t,defaults:gs.bind(null,t)})}var fs=gs(ec,rc),oc="0.0.0-development";function nc(r){return`Request failed due to following response errors:
`+r.errors.map(e=>` - ${e.message}`).join(`
`)}var ac=class extends Error{constructor(e,t,i){super(nc(i));De(this,"name","GraphqlResponseError");De(this,"errors");De(this,"data");this.request=e,this.headers=t,this.response=i,this.errors=i.errors,this.data=i.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},lc=["method","baseUrl","url","headers","request","query","mediaType"],cc=["query","method","url"],zi=/\/api\/v3\/?$/;function uc(r,e,t){if(t){if(typeof e=="string"&&"query"in t)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const o in t)if(cc.includes(o))return Promise.reject(new Error(`[@octokit/graphql] "${o}" cannot be used as variable name`))}const i=typeof e=="string"?Object.assign({query:e},t):e,s=Object.keys(i).reduce((o,a)=>lc.includes(a)?(o[a]=i[a],o):(o.variables||(o.variables={}),o.variables[a]=i[a],o),{}),n=i.baseUrl||r.endpoint.DEFAULTS.baseUrl;return zi.test(n)&&(s.url=n.replace(zi,"/api/graphql")),r(s).then(o=>{if(o.data.errors){const a={};for(const l of Object.keys(o.headers))a[l]=o.headers[l];throw new ac(s,a,o.data)}return o.data.data})}function qs(r,e){const t=r.defaults(e);return Object.assign((s,n)=>uc(t,s,n),{defaults:qs.bind(null,t),endpoint:t.endpoint})}qs(fs,{headers:{"user-agent":`octokit-graphql.js/${oc} ${Kr()}`},method:"POST",url:"/graphql"});function dc(r){return qs(r,{method:"POST",url:"/graphql"})}var pc=/^v1\./,hc=/^ghs_/,gc=/^ghu_/;async function fc(r){const e=r.split(/\./).length===3,t=pc.test(r)||hc.test(r),i=gc.test(r);return{type:"token",token:r,tokenType:e?"app":t?"installation":i?"user-to-server":"oauth"}}function mc(r){return r.split(/\./).length===3?`bearer ${r}`:`token ${r}`}async function yc(r,e,t,i){const s=e.endpoint.merge(t,i);return s.headers.authorization=mc(r),e(s)}var vc=function(e){if(!e)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof e!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return e=e.replace(/^(token|bearer) +/i,""),Object.assign(fc.bind(null,e),{hook:yc.bind(null,e)})};const Po="6.1.2",Mi=()=>{},_c=console.warn.bind(console),bc=console.error.bind(console),Ni=`octokit-core.js/${Po} ${Kr()}`;var br;let wc=(br=class{constructor(e={}){De(this,"request");De(this,"graphql");De(this,"log");De(this,"hook");De(this,"auth");const t=new Bl.Collection,i={baseUrl:fs.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},e.request,{hook:t.bind(null,"request")}),mediaType:{previews:[],format:""}};if(i.headers["user-agent"]=e.userAgent?`${e.userAgent} ${Ni}`:Ni,e.baseUrl&&(i.baseUrl=e.baseUrl),e.previews&&(i.mediaType.previews=e.previews),e.timeZone&&(i.headers["time-zone"]=e.timeZone),this.request=fs.defaults(i),this.graphql=dc(this.request).defaults(i),this.log=Object.assign({debug:Mi,info:Mi,warn:_c,error:bc},e.log),this.hook=t,e.authStrategy){const{authStrategy:n,...o}=e,a=n(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:o},e.auth));t.wrap("request",a.hook),this.auth=a}else if(!e.auth)this.auth=async()=>({type:"unauthenticated"});else{const n=vc(e.auth);t.wrap("request",n.hook),this.auth=n}const s=this.constructor;for(let n=0;n<s.plugins.length;++n)Object.assign(this,s.plugins[n](this,e))}static defaults(e){return class extends this{constructor(...i){const s=i[0]||{};if(typeof e=="function"){super(e(s));return}super(Object.assign({},e,s,s.userAgent&&e.userAgent?{userAgent:`${s.userAgent} ${e.userAgent}`}:null))}}}static plugin(...e){var s;const t=this.plugins;return s=class extends this{},De(s,"plugins",t.concat(e.filter(n=>!t.includes(n)))),s}},De(br,"VERSION",Po),De(br,"plugins",[]),br);var Ec="0.0.0-development";function kc(r){if(!r.data)return{...r,data:[]};if(!("total_count"in r.data&&!("url"in r.data)))return r;const t=r.data.incomplete_results,i=r.data.repository_selection,s=r.data.total_count;delete r.data.incomplete_results,delete r.data.repository_selection,delete r.data.total_count;const n=Object.keys(r.data)[0],o=r.data[n];return r.data=o,typeof t<"u"&&(r.data.incomplete_results=t),typeof i<"u"&&(r.data.repository_selection=i),r.data.total_count=s,r}function Hs(r,e,t){const i=typeof e=="function"?e.endpoint(t):r.request.endpoint(e,t),s=typeof e=="function"?e:r.request,n=i.method,o=i.headers;let a=i.url;return{[Symbol.asyncIterator]:()=>({async next(){if(!a)return{done:!0};try{const l=await s({method:n,url:a,headers:o}),h=kc(l);return a=((h.headers.link||"").match(/<([^>]+)>;\s*rel="next"/)||[])[1],{value:h}}catch(l){if(l.status!==409)throw l;return a="",{value:{status:200,headers:{},data:[]}}}}})}}function $o(r,e,t,i){return typeof t=="function"&&(i=t,t=void 0),Oo(r,[],Hs(r,e,t)[Symbol.asyncIterator](),i)}function Oo(r,e,t,i){return t.next().then(s=>{if(s.done)return e;let n=!1;function o(){n=!0}return e=e.concat(i?i(s.value,o):s.value.data),n?e:Oo(r,e,t,i)})}Object.assign($o,{iterator:Hs});function Ro(r){return{paginate:Object.assign($o.bind(null,r),{iterator:Hs.bind(null,r)})}}Ro.VERSION=Ec;var Tc=(r,e)=>`The cursor at "${r.join(",")}" did not change its value "${e}" after a page transition. Please make sure your that your query is set up correctly.`,Sc=class extends Error{constructor(e,t){super(Tc(e.pathInQuery,t));De(this,"name","MissingCursorChangeError");this.pageInfo=e,this.cursorValue=t,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},xc=class extends Error{constructor(e){super(`No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(e,null,2)}`);De(this,"name","MissingPageInfo");this.response=e,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Cc=r=>Object.prototype.toString.call(r)==="[object Object]";function Do(r){const e=Lo(r,"pageInfo");if(e.length===0)throw new xc(r);return e}var Lo=(r,e,t=[])=>{for(const i of Object.keys(r)){const s=[...t,i],n=r[i];if(Cc(n)){if(n.hasOwnProperty(e))return s;const o=Lo(n,e,s);if(o.length>0)return o}}return[]},Kt=(r,e)=>e.reduce((t,i)=>t[i],r),ns=(r,e,t)=>{const i=e[e.length-1],s=[...e].slice(0,-1),n=Kt(r,s);typeof t=="function"?n[i]=t(n[i]):n[i]=t},Ac=r=>{const e=Do(r);return{pathInQuery:e,pageInfo:Kt(r,[...e,"pageInfo"])}},Go=r=>r.hasOwnProperty("hasNextPage"),Pc=r=>Go(r)?r.endCursor:r.startCursor,$c=r=>Go(r)?r.hasNextPage:r.hasPreviousPage,Fo=r=>(e,t={})=>{let i=!0,s={...t};return{[Symbol.asyncIterator]:()=>({async next(){if(!i)return{done:!0,value:{}};const n=await r.graphql(e,s),o=Ac(n),a=Pc(o.pageInfo);if(i=$c(o.pageInfo),i&&a===s.cursor)throw new Sc(o,a);return s={...s,cursor:a},{done:!1,value:n}}})}},Oc=(r,e)=>{if(Object.keys(r).length===0)return Object.assign(r,e);const t=Do(r),i=[...t,"nodes"],s=Kt(e,i);s&&ns(r,i,l=>[...l,...s]);const n=[...t,"edges"],o=Kt(e,n);o&&ns(r,n,l=>[...l,...o]);const a=[...t,"pageInfo"];return ns(r,a,Kt(e,a)),r},Rc=r=>{const e=Fo(r);return async(t,i={})=>{let s={};for await(const n of e(t,i))s=Oc(s,n);return s}};function Dc(r){return{graphql:Object.assign(r.graphql,{paginate:Object.assign(Rc(r),{iterator:Fo(r)})})}}const Lc="13.2.6",Gc={actions:{addCustomLabelsToSelfHostedRunnerForOrg:["POST /orgs/{org}/actions/runners/{runner_id}/labels"],addCustomLabelsToSelfHostedRunnerForRepo:["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],addSelectedRepoToOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],addSelectedRepoToOrgVariable:["PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"],approveWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"],cancelWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],createEnvironmentVariable:["POST /repos/{owner}/{repo}/environments/{environment_name}/variables"],createOrUpdateEnvironmentSecret:["PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],createOrUpdateOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],createOrgVariable:["POST /orgs/{org}/actions/variables"],createRegistrationTokenForOrg:["POST /orgs/{org}/actions/runners/registration-token"],createRegistrationTokenForRepo:["POST /repos/{owner}/{repo}/actions/runners/registration-token"],createRemoveTokenForOrg:["POST /orgs/{org}/actions/runners/remove-token"],createRemoveTokenForRepo:["POST /repos/{owner}/{repo}/actions/runners/remove-token"],createRepoVariable:["POST /repos/{owner}/{repo}/actions/variables"],createWorkflowDispatch:["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"],deleteActionsCacheById:["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"],deleteActionsCacheByKey:["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"],deleteArtifact:["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],deleteEnvironmentSecret:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],deleteEnvironmentVariable:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],deleteOrgSecret:["DELETE /orgs/{org}/actions/secrets/{secret_name}"],deleteOrgVariable:["DELETE /orgs/{org}/actions/variables/{name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],deleteRepoVariable:["DELETE /repos/{owner}/{repo}/actions/variables/{name}"],deleteSelfHostedRunnerFromOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}"],deleteSelfHostedRunnerFromRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"],deleteWorkflowRun:["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],deleteWorkflowRunLogs:["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],disableSelectedRepositoryGithubActionsOrganization:["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"],disableWorkflow:["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"],downloadArtifact:["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"],downloadJobLogsForWorkflowRun:["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],downloadWorkflowRunAttemptLogs:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"],downloadWorkflowRunLogs:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],enableSelectedRepositoryGithubActionsOrganization:["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"],enableWorkflow:["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"],forceCancelWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"],generateRunnerJitconfigForOrg:["POST /orgs/{org}/actions/runners/generate-jitconfig"],generateRunnerJitconfigForRepo:["POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"],getActionsCacheList:["GET /repos/{owner}/{repo}/actions/caches"],getActionsCacheUsage:["GET /repos/{owner}/{repo}/actions/cache/usage"],getActionsCacheUsageByRepoForOrg:["GET /orgs/{org}/actions/cache/usage-by-repository"],getActionsCacheUsageForOrg:["GET /orgs/{org}/actions/cache/usage"],getAllowedActionsOrganization:["GET /orgs/{org}/actions/permissions/selected-actions"],getAllowedActionsRepository:["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"],getArtifact:["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],getCustomOidcSubClaimForRepo:["GET /repos/{owner}/{repo}/actions/oidc/customization/sub"],getEnvironmentPublicKey:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"],getEnvironmentSecret:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],getEnvironmentVariable:["GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],getGithubActionsDefaultWorkflowPermissionsOrganization:["GET /orgs/{org}/actions/permissions/workflow"],getGithubActionsDefaultWorkflowPermissionsRepository:["GET /repos/{owner}/{repo}/actions/permissions/workflow"],getGithubActionsPermissionsOrganization:["GET /orgs/{org}/actions/permissions"],getGithubActionsPermissionsRepository:["GET /repos/{owner}/{repo}/actions/permissions"],getJobForWorkflowRun:["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],getOrgPublicKey:["GET /orgs/{org}/actions/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/actions/secrets/{secret_name}"],getOrgVariable:["GET /orgs/{org}/actions/variables/{name}"],getPendingDeploymentsForRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],getRepoPermissions:["GET /repos/{owner}/{repo}/actions/permissions",{},{renamed:["actions","getGithubActionsPermissionsRepository"]}],getRepoPublicKey:["GET /repos/{owner}/{repo}/actions/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],getRepoVariable:["GET /repos/{owner}/{repo}/actions/variables/{name}"],getReviewsForRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"],getSelfHostedRunnerForOrg:["GET /orgs/{org}/actions/runners/{runner_id}"],getSelfHostedRunnerForRepo:["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],getWorkflow:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],getWorkflowAccessToRepository:["GET /repos/{owner}/{repo}/actions/permissions/access"],getWorkflowRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],getWorkflowRunAttempt:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"],getWorkflowRunUsage:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],getWorkflowUsage:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],listArtifactsForRepo:["GET /repos/{owner}/{repo}/actions/artifacts"],listEnvironmentSecrets:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"],listEnvironmentVariables:["GET /repos/{owner}/{repo}/environments/{environment_name}/variables"],listJobsForWorkflowRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],listJobsForWorkflowRunAttempt:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"],listLabelsForSelfHostedRunnerForOrg:["GET /orgs/{org}/actions/runners/{runner_id}/labels"],listLabelsForSelfHostedRunnerForRepo:["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],listOrgSecrets:["GET /orgs/{org}/actions/secrets"],listOrgVariables:["GET /orgs/{org}/actions/variables"],listRepoOrganizationSecrets:["GET /repos/{owner}/{repo}/actions/organization-secrets"],listRepoOrganizationVariables:["GET /repos/{owner}/{repo}/actions/organization-variables"],listRepoSecrets:["GET /repos/{owner}/{repo}/actions/secrets"],listRepoVariables:["GET /repos/{owner}/{repo}/actions/variables"],listRepoWorkflows:["GET /repos/{owner}/{repo}/actions/workflows"],listRunnerApplicationsForOrg:["GET /orgs/{org}/actions/runners/downloads"],listRunnerApplicationsForRepo:["GET /repos/{owner}/{repo}/actions/runners/downloads"],listSelectedReposForOrgSecret:["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"],listSelectedReposForOrgVariable:["GET /orgs/{org}/actions/variables/{name}/repositories"],listSelectedRepositoriesEnabledGithubActionsOrganization:["GET /orgs/{org}/actions/permissions/repositories"],listSelfHostedRunnersForOrg:["GET /orgs/{org}/actions/runners"],listSelfHostedRunnersForRepo:["GET /repos/{owner}/{repo}/actions/runners"],listWorkflowRunArtifacts:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],listWorkflowRuns:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],listWorkflowRunsForRepo:["GET /repos/{owner}/{repo}/actions/runs"],reRunJobForWorkflowRun:["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"],reRunWorkflow:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],reRunWorkflowFailedJobs:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"],removeAllCustomLabelsFromSelfHostedRunnerForOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"],removeAllCustomLabelsFromSelfHostedRunnerForRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],removeCustomLabelFromSelfHostedRunnerForOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"],removeCustomLabelFromSelfHostedRunnerForRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],removeSelectedRepoFromOrgVariable:["DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"],reviewCustomGatesForRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"],reviewPendingDeploymentsForRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],setAllowedActionsOrganization:["PUT /orgs/{org}/actions/permissions/selected-actions"],setAllowedActionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"],setCustomLabelsForSelfHostedRunnerForOrg:["PUT /orgs/{org}/actions/runners/{runner_id}/labels"],setCustomLabelsForSelfHostedRunnerForRepo:["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],setCustomOidcSubClaimForRepo:["PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"],setGithubActionsDefaultWorkflowPermissionsOrganization:["PUT /orgs/{org}/actions/permissions/workflow"],setGithubActionsDefaultWorkflowPermissionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions/workflow"],setGithubActionsPermissionsOrganization:["PUT /orgs/{org}/actions/permissions"],setGithubActionsPermissionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"],setSelectedReposForOrgVariable:["PUT /orgs/{org}/actions/variables/{name}/repositories"],setSelectedRepositoriesEnabledGithubActionsOrganization:["PUT /orgs/{org}/actions/permissions/repositories"],setWorkflowAccessToRepository:["PUT /repos/{owner}/{repo}/actions/permissions/access"],updateEnvironmentVariable:["PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],updateOrgVariable:["PATCH /orgs/{org}/actions/variables/{name}"],updateRepoVariable:["PATCH /repos/{owner}/{repo}/actions/variables/{name}"]},activity:{checkRepoIsStarredByAuthenticatedUser:["GET /user/starred/{owner}/{repo}"],deleteRepoSubscription:["DELETE /repos/{owner}/{repo}/subscription"],deleteThreadSubscription:["DELETE /notifications/threads/{thread_id}/subscription"],getFeeds:["GET /feeds"],getRepoSubscription:["GET /repos/{owner}/{repo}/subscription"],getThread:["GET /notifications/threads/{thread_id}"],getThreadSubscriptionForAuthenticatedUser:["GET /notifications/threads/{thread_id}/subscription"],listEventsForAuthenticatedUser:["GET /users/{username}/events"],listNotificationsForAuthenticatedUser:["GET /notifications"],listOrgEventsForAuthenticatedUser:["GET /users/{username}/events/orgs/{org}"],listPublicEvents:["GET /events"],listPublicEventsForRepoNetwork:["GET /networks/{owner}/{repo}/events"],listPublicEventsForUser:["GET /users/{username}/events/public"],listPublicOrgEvents:["GET /orgs/{org}/events"],listReceivedEventsForUser:["GET /users/{username}/received_events"],listReceivedPublicEventsForUser:["GET /users/{username}/received_events/public"],listRepoEvents:["GET /repos/{owner}/{repo}/events"],listRepoNotificationsForAuthenticatedUser:["GET /repos/{owner}/{repo}/notifications"],listReposStarredByAuthenticatedUser:["GET /user/starred"],listReposStarredByUser:["GET /users/{username}/starred"],listReposWatchedByUser:["GET /users/{username}/subscriptions"],listStargazersForRepo:["GET /repos/{owner}/{repo}/stargazers"],listWatchedReposForAuthenticatedUser:["GET /user/subscriptions"],listWatchersForRepo:["GET /repos/{owner}/{repo}/subscribers"],markNotificationsAsRead:["PUT /notifications"],markRepoNotificationsAsRead:["PUT /repos/{owner}/{repo}/notifications"],markThreadAsDone:["DELETE /notifications/threads/{thread_id}"],markThreadAsRead:["PATCH /notifications/threads/{thread_id}"],setRepoSubscription:["PUT /repos/{owner}/{repo}/subscription"],setThreadSubscription:["PUT /notifications/threads/{thread_id}/subscription"],starRepoForAuthenticatedUser:["PUT /user/starred/{owner}/{repo}"],unstarRepoForAuthenticatedUser:["DELETE /user/starred/{owner}/{repo}"]},apps:{addRepoToInstallation:["PUT /user/installations/{installation_id}/repositories/{repository_id}",{},{renamed:["apps","addRepoToInstallationForAuthenticatedUser"]}],addRepoToInstallationForAuthenticatedUser:["PUT /user/installations/{installation_id}/repositories/{repository_id}"],checkToken:["POST /applications/{client_id}/token"],createFromManifest:["POST /app-manifests/{code}/conversions"],createInstallationAccessToken:["POST /app/installations/{installation_id}/access_tokens"],deleteAuthorization:["DELETE /applications/{client_id}/grant"],deleteInstallation:["DELETE /app/installations/{installation_id}"],deleteToken:["DELETE /applications/{client_id}/token"],getAuthenticated:["GET /app"],getBySlug:["GET /apps/{app_slug}"],getInstallation:["GET /app/installations/{installation_id}"],getOrgInstallation:["GET /orgs/{org}/installation"],getRepoInstallation:["GET /repos/{owner}/{repo}/installation"],getSubscriptionPlanForAccount:["GET /marketplace_listing/accounts/{account_id}"],getSubscriptionPlanForAccountStubbed:["GET /marketplace_listing/stubbed/accounts/{account_id}"],getUserInstallation:["GET /users/{username}/installation"],getWebhookConfigForApp:["GET /app/hook/config"],getWebhookDelivery:["GET /app/hook/deliveries/{delivery_id}"],listAccountsForPlan:["GET /marketplace_listing/plans/{plan_id}/accounts"],listAccountsForPlanStubbed:["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],listInstallationReposForAuthenticatedUser:["GET /user/installations/{installation_id}/repositories"],listInstallationRequestsForAuthenticatedApp:["GET /app/installation-requests"],listInstallations:["GET /app/installations"],listInstallationsForAuthenticatedUser:["GET /user/installations"],listPlans:["GET /marketplace_listing/plans"],listPlansStubbed:["GET /marketplace_listing/stubbed/plans"],listReposAccessibleToInstallation:["GET /installation/repositories"],listSubscriptionsForAuthenticatedUser:["GET /user/marketplace_purchases"],listSubscriptionsForAuthenticatedUserStubbed:["GET /user/marketplace_purchases/stubbed"],listWebhookDeliveries:["GET /app/hook/deliveries"],redeliverWebhookDelivery:["POST /app/hook/deliveries/{delivery_id}/attempts"],removeRepoFromInstallation:["DELETE /user/installations/{installation_id}/repositories/{repository_id}",{},{renamed:["apps","removeRepoFromInstallationForAuthenticatedUser"]}],removeRepoFromInstallationForAuthenticatedUser:["DELETE /user/installations/{installation_id}/repositories/{repository_id}"],resetToken:["PATCH /applications/{client_id}/token"],revokeInstallationAccessToken:["DELETE /installation/token"],scopeToken:["POST /applications/{client_id}/token/scoped"],suspendInstallation:["PUT /app/installations/{installation_id}/suspended"],unsuspendInstallation:["DELETE /app/installations/{installation_id}/suspended"],updateWebhookConfigForApp:["PATCH /app/hook/config"]},billing:{getGithubActionsBillingOrg:["GET /orgs/{org}/settings/billing/actions"],getGithubActionsBillingUser:["GET /users/{username}/settings/billing/actions"],getGithubPackagesBillingOrg:["GET /orgs/{org}/settings/billing/packages"],getGithubPackagesBillingUser:["GET /users/{username}/settings/billing/packages"],getSharedStorageBillingOrg:["GET /orgs/{org}/settings/billing/shared-storage"],getSharedStorageBillingUser:["GET /users/{username}/settings/billing/shared-storage"]},checks:{create:["POST /repos/{owner}/{repo}/check-runs"],createSuite:["POST /repos/{owner}/{repo}/check-suites"],get:["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],getSuite:["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],listAnnotations:["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"],listForRef:["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],listForSuite:["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"],listSuitesForRef:["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],rerequestRun:["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"],rerequestSuite:["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"],setSuitesPreferences:["PATCH /repos/{owner}/{repo}/check-suites/preferences"],update:["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]},codeScanning:{deleteAnalysis:["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"],getAlert:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",{},{renamedParameters:{alert_id:"alert_number"}}],getAnalysis:["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"],getCodeqlDatabase:["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"],getDefaultSetup:["GET /repos/{owner}/{repo}/code-scanning/default-setup"],getSarif:["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],listAlertInstances:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"],listAlertsForOrg:["GET /orgs/{org}/code-scanning/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/code-scanning/alerts"],listAlertsInstances:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",{},{renamed:["codeScanning","listAlertInstances"]}],listCodeqlDatabases:["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"],listRecentAnalyses:["GET /repos/{owner}/{repo}/code-scanning/analyses"],updateAlert:["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],updateDefaultSetup:["PATCH /repos/{owner}/{repo}/code-scanning/default-setup"],uploadSarif:["POST /repos/{owner}/{repo}/code-scanning/sarifs"]},codesOfConduct:{getAllCodesOfConduct:["GET /codes_of_conduct"],getConductCode:["GET /codes_of_conduct/{key}"]},codespaces:{addRepositoryForSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"],addSelectedRepoToOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"],checkPermissionsForDevcontainer:["GET /repos/{owner}/{repo}/codespaces/permissions_check"],codespaceMachinesForAuthenticatedUser:["GET /user/codespaces/{codespace_name}/machines"],createForAuthenticatedUser:["POST /user/codespaces"],createOrUpdateOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],createOrUpdateSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}"],createWithPrForAuthenticatedUser:["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"],createWithRepoForAuthenticatedUser:["POST /repos/{owner}/{repo}/codespaces"],deleteForAuthenticatedUser:["DELETE /user/codespaces/{codespace_name}"],deleteFromOrganization:["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"],deleteOrgSecret:["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],deleteSecretForAuthenticatedUser:["DELETE /user/codespaces/secrets/{secret_name}"],exportForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/exports"],getCodespacesForUserInOrg:["GET /orgs/{org}/members/{username}/codespaces"],getExportDetailsForAuthenticatedUser:["GET /user/codespaces/{codespace_name}/exports/{export_id}"],getForAuthenticatedUser:["GET /user/codespaces/{codespace_name}"],getOrgPublicKey:["GET /orgs/{org}/codespaces/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/codespaces/secrets/{secret_name}"],getPublicKeyForAuthenticatedUser:["GET /user/codespaces/secrets/public-key"],getRepoPublicKey:["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],getSecretForAuthenticatedUser:["GET /user/codespaces/secrets/{secret_name}"],listDevcontainersInRepositoryForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/devcontainers"],listForAuthenticatedUser:["GET /user/codespaces"],listInOrganization:["GET /orgs/{org}/codespaces",{},{renamedParameters:{org_id:"org"}}],listInRepositoryForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces"],listOrgSecrets:["GET /orgs/{org}/codespaces/secrets"],listRepoSecrets:["GET /repos/{owner}/{repo}/codespaces/secrets"],listRepositoriesForSecretForAuthenticatedUser:["GET /user/codespaces/secrets/{secret_name}/repositories"],listSecretsForAuthenticatedUser:["GET /user/codespaces/secrets"],listSelectedReposForOrgSecret:["GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"],preFlightWithRepoForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/new"],publishForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/publish"],removeRepositoryForSecretForAuthenticatedUser:["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"],repoMachinesForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/machines"],setRepositoriesForSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}/repositories"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"],startForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/start"],stopForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/stop"],stopInOrganization:["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"],updateForAuthenticatedUser:["PATCH /user/codespaces/{codespace_name}"]},copilot:{addCopilotSeatsForTeams:["POST /orgs/{org}/copilot/billing/selected_teams"],addCopilotSeatsForUsers:["POST /orgs/{org}/copilot/billing/selected_users"],cancelCopilotSeatAssignmentForTeams:["DELETE /orgs/{org}/copilot/billing/selected_teams"],cancelCopilotSeatAssignmentForUsers:["DELETE /orgs/{org}/copilot/billing/selected_users"],getCopilotOrganizationDetails:["GET /orgs/{org}/copilot/billing"],getCopilotSeatDetailsForUser:["GET /orgs/{org}/members/{username}/copilot"],listCopilotSeats:["GET /orgs/{org}/copilot/billing/seats"],usageMetricsForEnterprise:["GET /enterprises/{enterprise}/copilot/usage"],usageMetricsForOrg:["GET /orgs/{org}/copilot/usage"],usageMetricsForTeam:["GET /orgs/{org}/team/{team_slug}/copilot/usage"]},dependabot:{addSelectedRepoToOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"],createOrUpdateOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],deleteOrgSecret:["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],getAlert:["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],getOrgPublicKey:["GET /orgs/{org}/dependabot/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/dependabot/secrets/{secret_name}"],getRepoPublicKey:["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],listAlertsForEnterprise:["GET /enterprises/{enterprise}/dependabot/alerts"],listAlertsForOrg:["GET /orgs/{org}/dependabot/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/dependabot/alerts"],listOrgSecrets:["GET /orgs/{org}/dependabot/secrets"],listRepoSecrets:["GET /repos/{owner}/{repo}/dependabot/secrets"],listSelectedReposForOrgSecret:["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"],updateAlert:["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"]},dependencyGraph:{createRepositorySnapshot:["POST /repos/{owner}/{repo}/dependency-graph/snapshots"],diffRange:["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"],exportSbom:["GET /repos/{owner}/{repo}/dependency-graph/sbom"]},emojis:{get:["GET /emojis"]},gists:{checkIsStarred:["GET /gists/{gist_id}/star"],create:["POST /gists"],createComment:["POST /gists/{gist_id}/comments"],delete:["DELETE /gists/{gist_id}"],deleteComment:["DELETE /gists/{gist_id}/comments/{comment_id}"],fork:["POST /gists/{gist_id}/forks"],get:["GET /gists/{gist_id}"],getComment:["GET /gists/{gist_id}/comments/{comment_id}"],getRevision:["GET /gists/{gist_id}/{sha}"],list:["GET /gists"],listComments:["GET /gists/{gist_id}/comments"],listCommits:["GET /gists/{gist_id}/commits"],listForUser:["GET /users/{username}/gists"],listForks:["GET /gists/{gist_id}/forks"],listPublic:["GET /gists/public"],listStarred:["GET /gists/starred"],star:["PUT /gists/{gist_id}/star"],unstar:["DELETE /gists/{gist_id}/star"],update:["PATCH /gists/{gist_id}"],updateComment:["PATCH /gists/{gist_id}/comments/{comment_id}"]},git:{createBlob:["POST /repos/{owner}/{repo}/git/blobs"],createCommit:["POST /repos/{owner}/{repo}/git/commits"],createRef:["POST /repos/{owner}/{repo}/git/refs"],createTag:["POST /repos/{owner}/{repo}/git/tags"],createTree:["POST /repos/{owner}/{repo}/git/trees"],deleteRef:["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],getBlob:["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],getCommit:["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],getRef:["GET /repos/{owner}/{repo}/git/ref/{ref}"],getTag:["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],getTree:["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],listMatchingRefs:["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],updateRef:["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]},gitignore:{getAllTemplates:["GET /gitignore/templates"],getTemplate:["GET /gitignore/templates/{name}"]},interactions:{getRestrictionsForAuthenticatedUser:["GET /user/interaction-limits"],getRestrictionsForOrg:["GET /orgs/{org}/interaction-limits"],getRestrictionsForRepo:["GET /repos/{owner}/{repo}/interaction-limits"],getRestrictionsForYourPublicRepos:["GET /user/interaction-limits",{},{renamed:["interactions","getRestrictionsForAuthenticatedUser"]}],removeRestrictionsForAuthenticatedUser:["DELETE /user/interaction-limits"],removeRestrictionsForOrg:["DELETE /orgs/{org}/interaction-limits"],removeRestrictionsForRepo:["DELETE /repos/{owner}/{repo}/interaction-limits"],removeRestrictionsForYourPublicRepos:["DELETE /user/interaction-limits",{},{renamed:["interactions","removeRestrictionsForAuthenticatedUser"]}],setRestrictionsForAuthenticatedUser:["PUT /user/interaction-limits"],setRestrictionsForOrg:["PUT /orgs/{org}/interaction-limits"],setRestrictionsForRepo:["PUT /repos/{owner}/{repo}/interaction-limits"],setRestrictionsForYourPublicRepos:["PUT /user/interaction-limits",{},{renamed:["interactions","setRestrictionsForAuthenticatedUser"]}]},issues:{addAssignees:["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],addLabels:["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],checkUserCanBeAssigned:["GET /repos/{owner}/{repo}/assignees/{assignee}"],checkUserCanBeAssignedToIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"],create:["POST /repos/{owner}/{repo}/issues"],createComment:["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],createLabel:["POST /repos/{owner}/{repo}/labels"],createMilestone:["POST /repos/{owner}/{repo}/milestones"],deleteComment:["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],deleteLabel:["DELETE /repos/{owner}/{repo}/labels/{name}"],deleteMilestone:["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],get:["GET /repos/{owner}/{repo}/issues/{issue_number}"],getComment:["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],getEvent:["GET /repos/{owner}/{repo}/issues/events/{event_id}"],getLabel:["GET /repos/{owner}/{repo}/labels/{name}"],getMilestone:["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],list:["GET /issues"],listAssignees:["GET /repos/{owner}/{repo}/assignees"],listComments:["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],listCommentsForRepo:["GET /repos/{owner}/{repo}/issues/comments"],listEvents:["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],listEventsForRepo:["GET /repos/{owner}/{repo}/issues/events"],listEventsForTimeline:["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"],listForAuthenticatedUser:["GET /user/issues"],listForOrg:["GET /orgs/{org}/issues"],listForRepo:["GET /repos/{owner}/{repo}/issues"],listLabelsForMilestone:["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],listLabelsForRepo:["GET /repos/{owner}/{repo}/labels"],listLabelsOnIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],listMilestones:["GET /repos/{owner}/{repo}/milestones"],lock:["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],removeAllLabels:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],removeAssignees:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],removeLabel:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],setLabels:["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],unlock:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],update:["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],updateComment:["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],updateLabel:["PATCH /repos/{owner}/{repo}/labels/{name}"],updateMilestone:["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]},licenses:{get:["GET /licenses/{license}"],getAllCommonlyUsed:["GET /licenses"],getForRepo:["GET /repos/{owner}/{repo}/license"]},markdown:{render:["POST /markdown"],renderRaw:["POST /markdown/raw",{headers:{"content-type":"text/plain; charset=utf-8"}}]},meta:{get:["GET /meta"],getAllVersions:["GET /versions"],getOctocat:["GET /octocat"],getZen:["GET /zen"],root:["GET /"]},migrations:{deleteArchiveForAuthenticatedUser:["DELETE /user/migrations/{migration_id}/archive"],deleteArchiveForOrg:["DELETE /orgs/{org}/migrations/{migration_id}/archive"],downloadArchiveForOrg:["GET /orgs/{org}/migrations/{migration_id}/archive"],getArchiveForAuthenticatedUser:["GET /user/migrations/{migration_id}/archive"],getStatusForAuthenticatedUser:["GET /user/migrations/{migration_id}"],getStatusForOrg:["GET /orgs/{org}/migrations/{migration_id}"],listForAuthenticatedUser:["GET /user/migrations"],listForOrg:["GET /orgs/{org}/migrations"],listReposForAuthenticatedUser:["GET /user/migrations/{migration_id}/repositories"],listReposForOrg:["GET /orgs/{org}/migrations/{migration_id}/repositories"],listReposForUser:["GET /user/migrations/{migration_id}/repositories",{},{renamed:["migrations","listReposForAuthenticatedUser"]}],startForAuthenticatedUser:["POST /user/migrations"],startForOrg:["POST /orgs/{org}/migrations"],unlockRepoForAuthenticatedUser:["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"],unlockRepoForOrg:["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"]},oidc:{getOidcCustomSubTemplateForOrg:["GET /orgs/{org}/actions/oidc/customization/sub"],updateOidcCustomSubTemplateForOrg:["PUT /orgs/{org}/actions/oidc/customization/sub"]},orgs:{addSecurityManagerTeam:["PUT /orgs/{org}/security-managers/teams/{team_slug}"],assignTeamToOrgRole:["PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"],assignUserToOrgRole:["PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"],blockUser:["PUT /orgs/{org}/blocks/{username}"],cancelInvitation:["DELETE /orgs/{org}/invitations/{invitation_id}"],checkBlockedUser:["GET /orgs/{org}/blocks/{username}"],checkMembershipForUser:["GET /orgs/{org}/members/{username}"],checkPublicMembershipForUser:["GET /orgs/{org}/public_members/{username}"],convertMemberToOutsideCollaborator:["PUT /orgs/{org}/outside_collaborators/{username}"],createCustomOrganizationRole:["POST /orgs/{org}/organization-roles"],createInvitation:["POST /orgs/{org}/invitations"],createOrUpdateCustomProperties:["PATCH /orgs/{org}/properties/schema"],createOrUpdateCustomPropertiesValuesForRepos:["PATCH /orgs/{org}/properties/values"],createOrUpdateCustomProperty:["PUT /orgs/{org}/properties/schema/{custom_property_name}"],createWebhook:["POST /orgs/{org}/hooks"],delete:["DELETE /orgs/{org}"],deleteCustomOrganizationRole:["DELETE /orgs/{org}/organization-roles/{role_id}"],deleteWebhook:["DELETE /orgs/{org}/hooks/{hook_id}"],enableOrDisableSecurityProductOnAllOrgRepos:["POST /orgs/{org}/{security_product}/{enablement}"],get:["GET /orgs/{org}"],getAllCustomProperties:["GET /orgs/{org}/properties/schema"],getCustomProperty:["GET /orgs/{org}/properties/schema/{custom_property_name}"],getMembershipForAuthenticatedUser:["GET /user/memberships/orgs/{org}"],getMembershipForUser:["GET /orgs/{org}/memberships/{username}"],getOrgRole:["GET /orgs/{org}/organization-roles/{role_id}"],getWebhook:["GET /orgs/{org}/hooks/{hook_id}"],getWebhookConfigForOrg:["GET /orgs/{org}/hooks/{hook_id}/config"],getWebhookDelivery:["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"],list:["GET /organizations"],listAppInstallations:["GET /orgs/{org}/installations"],listBlockedUsers:["GET /orgs/{org}/blocks"],listCustomPropertiesValuesForRepos:["GET /orgs/{org}/properties/values"],listFailedInvitations:["GET /orgs/{org}/failed_invitations"],listForAuthenticatedUser:["GET /user/orgs"],listForUser:["GET /users/{username}/orgs"],listInvitationTeams:["GET /orgs/{org}/invitations/{invitation_id}/teams"],listMembers:["GET /orgs/{org}/members"],listMembershipsForAuthenticatedUser:["GET /user/memberships/orgs"],listOrgRoleTeams:["GET /orgs/{org}/organization-roles/{role_id}/teams"],listOrgRoleUsers:["GET /orgs/{org}/organization-roles/{role_id}/users"],listOrgRoles:["GET /orgs/{org}/organization-roles"],listOrganizationFineGrainedPermissions:["GET /orgs/{org}/organization-fine-grained-permissions"],listOutsideCollaborators:["GET /orgs/{org}/outside_collaborators"],listPatGrantRepositories:["GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"],listPatGrantRequestRepositories:["GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"],listPatGrantRequests:["GET /orgs/{org}/personal-access-token-requests"],listPatGrants:["GET /orgs/{org}/personal-access-tokens"],listPendingInvitations:["GET /orgs/{org}/invitations"],listPublicMembers:["GET /orgs/{org}/public_members"],listSecurityManagerTeams:["GET /orgs/{org}/security-managers"],listWebhookDeliveries:["GET /orgs/{org}/hooks/{hook_id}/deliveries"],listWebhooks:["GET /orgs/{org}/hooks"],patchCustomOrganizationRole:["PATCH /orgs/{org}/organization-roles/{role_id}"],pingWebhook:["POST /orgs/{org}/hooks/{hook_id}/pings"],redeliverWebhookDelivery:["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],removeCustomProperty:["DELETE /orgs/{org}/properties/schema/{custom_property_name}"],removeMember:["DELETE /orgs/{org}/members/{username}"],removeMembershipForUser:["DELETE /orgs/{org}/memberships/{username}"],removeOutsideCollaborator:["DELETE /orgs/{org}/outside_collaborators/{username}"],removePublicMembershipForAuthenticatedUser:["DELETE /orgs/{org}/public_members/{username}"],removeSecurityManagerTeam:["DELETE /orgs/{org}/security-managers/teams/{team_slug}"],reviewPatGrantRequest:["POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"],reviewPatGrantRequestsInBulk:["POST /orgs/{org}/personal-access-token-requests"],revokeAllOrgRolesTeam:["DELETE /orgs/{org}/organization-roles/teams/{team_slug}"],revokeAllOrgRolesUser:["DELETE /orgs/{org}/organization-roles/users/{username}"],revokeOrgRoleTeam:["DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"],revokeOrgRoleUser:["DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"],setMembershipForUser:["PUT /orgs/{org}/memberships/{username}"],setPublicMembershipForAuthenticatedUser:["PUT /orgs/{org}/public_members/{username}"],unblockUser:["DELETE /orgs/{org}/blocks/{username}"],update:["PATCH /orgs/{org}"],updateMembershipForAuthenticatedUser:["PATCH /user/memberships/orgs/{org}"],updatePatAccess:["POST /orgs/{org}/personal-access-tokens/{pat_id}"],updatePatAccesses:["POST /orgs/{org}/personal-access-tokens"],updateWebhook:["PATCH /orgs/{org}/hooks/{hook_id}"],updateWebhookConfigForOrg:["PATCH /orgs/{org}/hooks/{hook_id}/config"]},packages:{deletePackageForAuthenticatedUser:["DELETE /user/packages/{package_type}/{package_name}"],deletePackageForOrg:["DELETE /orgs/{org}/packages/{package_type}/{package_name}"],deletePackageForUser:["DELETE /users/{username}/packages/{package_type}/{package_name}"],deletePackageVersionForAuthenticatedUser:["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],deletePackageVersionForOrg:["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],deletePackageVersionForUser:["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],getAllPackageVersionsForAPackageOwnedByAnOrg:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions",{},{renamed:["packages","getAllPackageVersionsForPackageOwnedByOrg"]}],getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions",{},{renamed:["packages","getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]}],getAllPackageVersionsForPackageOwnedByAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions"],getAllPackageVersionsForPackageOwnedByOrg:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"],getAllPackageVersionsForPackageOwnedByUser:["GET /users/{username}/packages/{package_type}/{package_name}/versions"],getPackageForAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}"],getPackageForOrganization:["GET /orgs/{org}/packages/{package_type}/{package_name}"],getPackageForUser:["GET /users/{username}/packages/{package_type}/{package_name}"],getPackageVersionForAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],getPackageVersionForOrganization:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],getPackageVersionForUser:["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],listDockerMigrationConflictingPackagesForAuthenticatedUser:["GET /user/docker/conflicts"],listDockerMigrationConflictingPackagesForOrganization:["GET /orgs/{org}/docker/conflicts"],listDockerMigrationConflictingPackagesForUser:["GET /users/{username}/docker/conflicts"],listPackagesForAuthenticatedUser:["GET /user/packages"],listPackagesForOrganization:["GET /orgs/{org}/packages"],listPackagesForUser:["GET /users/{username}/packages"],restorePackageForAuthenticatedUser:["POST /user/packages/{package_type}/{package_name}/restore{?token}"],restorePackageForOrg:["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"],restorePackageForUser:["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"],restorePackageVersionForAuthenticatedUser:["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],restorePackageVersionForOrg:["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],restorePackageVersionForUser:["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]},projects:{addCollaborator:["PUT /projects/{project_id}/collaborators/{username}"],createCard:["POST /projects/columns/{column_id}/cards"],createColumn:["POST /projects/{project_id}/columns"],createForAuthenticatedUser:["POST /user/projects"],createForOrg:["POST /orgs/{org}/projects"],createForRepo:["POST /repos/{owner}/{repo}/projects"],delete:["DELETE /projects/{project_id}"],deleteCard:["DELETE /projects/columns/cards/{card_id}"],deleteColumn:["DELETE /projects/columns/{column_id}"],get:["GET /projects/{project_id}"],getCard:["GET /projects/columns/cards/{card_id}"],getColumn:["GET /projects/columns/{column_id}"],getPermissionForUser:["GET /projects/{project_id}/collaborators/{username}/permission"],listCards:["GET /projects/columns/{column_id}/cards"],listCollaborators:["GET /projects/{project_id}/collaborators"],listColumns:["GET /projects/{project_id}/columns"],listForOrg:["GET /orgs/{org}/projects"],listForRepo:["GET /repos/{owner}/{repo}/projects"],listForUser:["GET /users/{username}/projects"],moveCard:["POST /projects/columns/cards/{card_id}/moves"],moveColumn:["POST /projects/columns/{column_id}/moves"],removeCollaborator:["DELETE /projects/{project_id}/collaborators/{username}"],update:["PATCH /projects/{project_id}"],updateCard:["PATCH /projects/columns/cards/{card_id}"],updateColumn:["PATCH /projects/columns/{column_id}"]},pulls:{checkIfMerged:["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],create:["POST /repos/{owner}/{repo}/pulls"],createReplyForReviewComment:["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"],createReview:["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],createReviewComment:["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],deletePendingReview:["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],deleteReviewComment:["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],dismissReview:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"],get:["GET /repos/{owner}/{repo}/pulls/{pull_number}"],getReview:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],getReviewComment:["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],list:["GET /repos/{owner}/{repo}/pulls"],listCommentsForReview:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"],listCommits:["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],listFiles:["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],listRequestedReviewers:["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],listReviewComments:["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],listReviewCommentsForRepo:["GET /repos/{owner}/{repo}/pulls/comments"],listReviews:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],merge:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],removeRequestedReviewers:["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],requestReviewers:["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],submitReview:["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],update:["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],updateBranch:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"],updateReview:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],updateReviewComment:["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]},rateLimit:{get:["GET /rate_limit"]},reactions:{createForCommitComment:["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"],createForIssue:["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"],createForIssueComment:["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"],createForPullRequestReviewComment:["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"],createForRelease:["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"],createForTeamDiscussionCommentInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"],createForTeamDiscussionInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"],deleteForCommitComment:["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"],deleteForIssue:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"],deleteForIssueComment:["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"],deleteForPullRequestComment:["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"],deleteForRelease:["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"],deleteForTeamDiscussion:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"],deleteForTeamDiscussionComment:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"],listForCommitComment:["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"],listForIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],listForIssueComment:["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"],listForPullRequestReviewComment:["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"],listForRelease:["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"],listForTeamDiscussionCommentInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"],listForTeamDiscussionInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]},repos:{acceptInvitation:["PATCH /user/repository_invitations/{invitation_id}",{},{renamed:["repos","acceptInvitationForAuthenticatedUser"]}],acceptInvitationForAuthenticatedUser:["PATCH /user/repository_invitations/{invitation_id}"],addAppAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],addCollaborator:["PUT /repos/{owner}/{repo}/collaborators/{username}"],addStatusCheckContexts:["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],addTeamAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],addUserAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],cancelPagesDeployment:["POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"],checkAutomatedSecurityFixes:["GET /repos/{owner}/{repo}/automated-security-fixes"],checkCollaborator:["GET /repos/{owner}/{repo}/collaborators/{username}"],checkPrivateVulnerabilityReporting:["GET /repos/{owner}/{repo}/private-vulnerability-reporting"],checkVulnerabilityAlerts:["GET /repos/{owner}/{repo}/vulnerability-alerts"],codeownersErrors:["GET /repos/{owner}/{repo}/codeowners/errors"],compareCommits:["GET /repos/{owner}/{repo}/compare/{base}...{head}"],compareCommitsWithBasehead:["GET /repos/{owner}/{repo}/compare/{basehead}"],createAutolink:["POST /repos/{owner}/{repo}/autolinks"],createCommitComment:["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],createCommitSignatureProtection:["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],createCommitStatus:["POST /repos/{owner}/{repo}/statuses/{sha}"],createDeployKey:["POST /repos/{owner}/{repo}/keys"],createDeployment:["POST /repos/{owner}/{repo}/deployments"],createDeploymentBranchPolicy:["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"],createDeploymentProtectionRule:["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"],createDeploymentStatus:["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],createDispatchEvent:["POST /repos/{owner}/{repo}/dispatches"],createForAuthenticatedUser:["POST /user/repos"],createFork:["POST /repos/{owner}/{repo}/forks"],createInOrg:["POST /orgs/{org}/repos"],createOrUpdateCustomPropertiesValues:["PATCH /repos/{owner}/{repo}/properties/values"],createOrUpdateEnvironment:["PUT /repos/{owner}/{repo}/environments/{environment_name}"],createOrUpdateFileContents:["PUT /repos/{owner}/{repo}/contents/{path}"],createOrgRuleset:["POST /orgs/{org}/rulesets"],createPagesDeployment:["POST /repos/{owner}/{repo}/pages/deployments"],createPagesSite:["POST /repos/{owner}/{repo}/pages"],createRelease:["POST /repos/{owner}/{repo}/releases"],createRepoRuleset:["POST /repos/{owner}/{repo}/rulesets"],createTagProtection:["POST /repos/{owner}/{repo}/tags/protection"],createUsingTemplate:["POST /repos/{template_owner}/{template_repo}/generate"],createWebhook:["POST /repos/{owner}/{repo}/hooks"],declineInvitation:["DELETE /user/repository_invitations/{invitation_id}",{},{renamed:["repos","declineInvitationForAuthenticatedUser"]}],declineInvitationForAuthenticatedUser:["DELETE /user/repository_invitations/{invitation_id}"],delete:["DELETE /repos/{owner}/{repo}"],deleteAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],deleteAdminBranchProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],deleteAnEnvironment:["DELETE /repos/{owner}/{repo}/environments/{environment_name}"],deleteAutolink:["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],deleteBranchProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],deleteCommitComment:["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],deleteCommitSignatureProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],deleteDeployKey:["DELETE /repos/{owner}/{repo}/keys/{key_id}"],deleteDeployment:["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],deleteDeploymentBranchPolicy:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],deleteFile:["DELETE /repos/{owner}/{repo}/contents/{path}"],deleteInvitation:["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],deleteOrgRuleset:["DELETE /orgs/{org}/rulesets/{ruleset_id}"],deletePagesSite:["DELETE /repos/{owner}/{repo}/pages"],deletePullRequestReviewProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],deleteRelease:["DELETE /repos/{owner}/{repo}/releases/{release_id}"],deleteReleaseAsset:["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],deleteRepoRuleset:["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],deleteTagProtection:["DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"],deleteWebhook:["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],disableAutomatedSecurityFixes:["DELETE /repos/{owner}/{repo}/automated-security-fixes"],disableDeploymentProtectionRule:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"],disablePrivateVulnerabilityReporting:["DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"],disableVulnerabilityAlerts:["DELETE /repos/{owner}/{repo}/vulnerability-alerts"],downloadArchive:["GET /repos/{owner}/{repo}/zipball/{ref}",{},{renamed:["repos","downloadZipballArchive"]}],downloadTarballArchive:["GET /repos/{owner}/{repo}/tarball/{ref}"],downloadZipballArchive:["GET /repos/{owner}/{repo}/zipball/{ref}"],enableAutomatedSecurityFixes:["PUT /repos/{owner}/{repo}/automated-security-fixes"],enablePrivateVulnerabilityReporting:["PUT /repos/{owner}/{repo}/private-vulnerability-reporting"],enableVulnerabilityAlerts:["PUT /repos/{owner}/{repo}/vulnerability-alerts"],generateReleaseNotes:["POST /repos/{owner}/{repo}/releases/generate-notes"],get:["GET /repos/{owner}/{repo}"],getAccessRestrictions:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],getAdminBranchProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],getAllDeploymentProtectionRules:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"],getAllEnvironments:["GET /repos/{owner}/{repo}/environments"],getAllStatusCheckContexts:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"],getAllTopics:["GET /repos/{owner}/{repo}/topics"],getAppsWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"],getAutolink:["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],getBranch:["GET /repos/{owner}/{repo}/branches/{branch}"],getBranchProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection"],getBranchRules:["GET /repos/{owner}/{repo}/rules/branches/{branch}"],getClones:["GET /repos/{owner}/{repo}/traffic/clones"],getCodeFrequencyStats:["GET /repos/{owner}/{repo}/stats/code_frequency"],getCollaboratorPermissionLevel:["GET /repos/{owner}/{repo}/collaborators/{username}/permission"],getCombinedStatusForRef:["GET /repos/{owner}/{repo}/commits/{ref}/status"],getCommit:["GET /repos/{owner}/{repo}/commits/{ref}"],getCommitActivityStats:["GET /repos/{owner}/{repo}/stats/commit_activity"],getCommitComment:["GET /repos/{owner}/{repo}/comments/{comment_id}"],getCommitSignatureProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],getCommunityProfileMetrics:["GET /repos/{owner}/{repo}/community/profile"],getContent:["GET /repos/{owner}/{repo}/contents/{path}"],getContributorsStats:["GET /repos/{owner}/{repo}/stats/contributors"],getCustomDeploymentProtectionRule:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"],getCustomPropertiesValues:["GET /repos/{owner}/{repo}/properties/values"],getDeployKey:["GET /repos/{owner}/{repo}/keys/{key_id}"],getDeployment:["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],getDeploymentBranchPolicy:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],getDeploymentStatus:["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"],getEnvironment:["GET /repos/{owner}/{repo}/environments/{environment_name}"],getLatestPagesBuild:["GET /repos/{owner}/{repo}/pages/builds/latest"],getLatestRelease:["GET /repos/{owner}/{repo}/releases/latest"],getOrgRuleSuite:["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],getOrgRuleSuites:["GET /orgs/{org}/rulesets/rule-suites"],getOrgRuleset:["GET /orgs/{org}/rulesets/{ruleset_id}"],getOrgRulesets:["GET /orgs/{org}/rulesets"],getPages:["GET /repos/{owner}/{repo}/pages"],getPagesBuild:["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],getPagesDeployment:["GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"],getPagesHealthCheck:["GET /repos/{owner}/{repo}/pages/health"],getParticipationStats:["GET /repos/{owner}/{repo}/stats/participation"],getPullRequestReviewProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],getPunchCardStats:["GET /repos/{owner}/{repo}/stats/punch_card"],getReadme:["GET /repos/{owner}/{repo}/readme"],getReadmeInDirectory:["GET /repos/{owner}/{repo}/readme/{dir}"],getRelease:["GET /repos/{owner}/{repo}/releases/{release_id}"],getReleaseAsset:["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],getReleaseByTag:["GET /repos/{owner}/{repo}/releases/tags/{tag}"],getRepoRuleSuite:["GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"],getRepoRuleSuites:["GET /repos/{owner}/{repo}/rulesets/rule-suites"],getRepoRuleset:["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],getRepoRulesets:["GET /repos/{owner}/{repo}/rulesets"],getStatusChecksProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],getTeamsWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"],getTopPaths:["GET /repos/{owner}/{repo}/traffic/popular/paths"],getTopReferrers:["GET /repos/{owner}/{repo}/traffic/popular/referrers"],getUsersWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"],getViews:["GET /repos/{owner}/{repo}/traffic/views"],getWebhook:["GET /repos/{owner}/{repo}/hooks/{hook_id}"],getWebhookConfigForRepo:["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"],getWebhookDelivery:["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"],listActivities:["GET /repos/{owner}/{repo}/activity"],listAutolinks:["GET /repos/{owner}/{repo}/autolinks"],listBranches:["GET /repos/{owner}/{repo}/branches"],listBranchesForHeadCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"],listCollaborators:["GET /repos/{owner}/{repo}/collaborators"],listCommentsForCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],listCommitCommentsForRepo:["GET /repos/{owner}/{repo}/comments"],listCommitStatusesForRef:["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],listCommits:["GET /repos/{owner}/{repo}/commits"],listContributors:["GET /repos/{owner}/{repo}/contributors"],listCustomDeploymentRuleIntegrations:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"],listDeployKeys:["GET /repos/{owner}/{repo}/keys"],listDeploymentBranchPolicies:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"],listDeploymentStatuses:["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],listDeployments:["GET /repos/{owner}/{repo}/deployments"],listForAuthenticatedUser:["GET /user/repos"],listForOrg:["GET /orgs/{org}/repos"],listForUser:["GET /users/{username}/repos"],listForks:["GET /repos/{owner}/{repo}/forks"],listInvitations:["GET /repos/{owner}/{repo}/invitations"],listInvitationsForAuthenticatedUser:["GET /user/repository_invitations"],listLanguages:["GET /repos/{owner}/{repo}/languages"],listPagesBuilds:["GET /repos/{owner}/{repo}/pages/builds"],listPublic:["GET /repositories"],listPullRequestsAssociatedWithCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"],listReleaseAssets:["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],listReleases:["GET /repos/{owner}/{repo}/releases"],listTagProtection:["GET /repos/{owner}/{repo}/tags/protection"],listTags:["GET /repos/{owner}/{repo}/tags"],listTeams:["GET /repos/{owner}/{repo}/teams"],listWebhookDeliveries:["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"],listWebhooks:["GET /repos/{owner}/{repo}/hooks"],merge:["POST /repos/{owner}/{repo}/merges"],mergeUpstream:["POST /repos/{owner}/{repo}/merge-upstream"],pingWebhook:["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],redeliverWebhookDelivery:["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],removeAppAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],removeCollaborator:["DELETE /repos/{owner}/{repo}/collaborators/{username}"],removeStatusCheckContexts:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],removeStatusCheckProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],removeTeamAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],removeUserAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],renameBranch:["POST /repos/{owner}/{repo}/branches/{branch}/rename"],replaceAllTopics:["PUT /repos/{owner}/{repo}/topics"],requestPagesBuild:["POST /repos/{owner}/{repo}/pages/builds"],setAdminBranchProtection:["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],setAppAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],setStatusCheckContexts:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],setTeamAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],setUserAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],testPushWebhook:["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],transfer:["POST /repos/{owner}/{repo}/transfer"],update:["PATCH /repos/{owner}/{repo}"],updateBranchProtection:["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],updateCommitComment:["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],updateDeploymentBranchPolicy:["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],updateInformationAboutPagesSite:["PUT /repos/{owner}/{repo}/pages"],updateInvitation:["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],updateOrgRuleset:["PUT /orgs/{org}/rulesets/{ruleset_id}"],updatePullRequestReviewProtection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],updateRelease:["PATCH /repos/{owner}/{repo}/releases/{release_id}"],updateReleaseAsset:["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],updateRepoRuleset:["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],updateStatusCheckPotection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",{},{renamed:["repos","updateStatusCheckProtection"]}],updateStatusCheckProtection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],updateWebhook:["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],updateWebhookConfigForRepo:["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"],uploadReleaseAsset:["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",{baseUrl:"https://uploads.github.com"}]},search:{code:["GET /search/code"],commits:["GET /search/commits"],issuesAndPullRequests:["GET /search/issues"],labels:["GET /search/labels"],repos:["GET /search/repositories"],topics:["GET /search/topics"],users:["GET /search/users"]},secretScanning:{getAlert:["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"],listAlertsForEnterprise:["GET /enterprises/{enterprise}/secret-scanning/alerts"],listAlertsForOrg:["GET /orgs/{org}/secret-scanning/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/secret-scanning/alerts"],listLocationsForAlert:["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"],updateAlert:["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]},securityAdvisories:{createFork:["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"],createPrivateVulnerabilityReport:["POST /repos/{owner}/{repo}/security-advisories/reports"],createRepositoryAdvisory:["POST /repos/{owner}/{repo}/security-advisories"],createRepositoryAdvisoryCveRequest:["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"],getGlobalAdvisory:["GET /advisories/{ghsa_id}"],getRepositoryAdvisory:["GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"],listGlobalAdvisories:["GET /advisories"],listOrgRepositoryAdvisories:["GET /orgs/{org}/security-advisories"],listRepositoryAdvisories:["GET /repos/{owner}/{repo}/security-advisories"],updateRepositoryAdvisory:["PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"]},teams:{addOrUpdateMembershipForUserInOrg:["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"],addOrUpdateProjectPermissionsInOrg:["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"],addOrUpdateRepoPermissionsInOrg:["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],checkPermissionsForProjectInOrg:["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"],checkPermissionsForRepoInOrg:["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],create:["POST /orgs/{org}/teams"],createDiscussionCommentInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],createDiscussionInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions"],deleteDiscussionCommentInOrg:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],deleteDiscussionInOrg:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],deleteInOrg:["DELETE /orgs/{org}/teams/{team_slug}"],getByName:["GET /orgs/{org}/teams/{team_slug}"],getDiscussionCommentInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],getDiscussionInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],getMembershipForUserInOrg:["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],list:["GET /orgs/{org}/teams"],listChildInOrg:["GET /orgs/{org}/teams/{team_slug}/teams"],listDiscussionCommentsInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],listDiscussionsInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions"],listForAuthenticatedUser:["GET /user/teams"],listMembersInOrg:["GET /orgs/{org}/teams/{team_slug}/members"],listPendingInvitationsInOrg:["GET /orgs/{org}/teams/{team_slug}/invitations"],listProjectsInOrg:["GET /orgs/{org}/teams/{team_slug}/projects"],listReposInOrg:["GET /orgs/{org}/teams/{team_slug}/repos"],removeMembershipForUserInOrg:["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"],removeProjectInOrg:["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],removeRepoInOrg:["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],updateDiscussionCommentInOrg:["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],updateDiscussionInOrg:["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],updateInOrg:["PATCH /orgs/{org}/teams/{team_slug}"]},users:{addEmailForAuthenticated:["POST /user/emails",{},{renamed:["users","addEmailForAuthenticatedUser"]}],addEmailForAuthenticatedUser:["POST /user/emails"],addSocialAccountForAuthenticatedUser:["POST /user/social_accounts"],block:["PUT /user/blocks/{username}"],checkBlocked:["GET /user/blocks/{username}"],checkFollowingForUser:["GET /users/{username}/following/{target_user}"],checkPersonIsFollowedByAuthenticated:["GET /user/following/{username}"],createGpgKeyForAuthenticated:["POST /user/gpg_keys",{},{renamed:["users","createGpgKeyForAuthenticatedUser"]}],createGpgKeyForAuthenticatedUser:["POST /user/gpg_keys"],createPublicSshKeyForAuthenticated:["POST /user/keys",{},{renamed:["users","createPublicSshKeyForAuthenticatedUser"]}],createPublicSshKeyForAuthenticatedUser:["POST /user/keys"],createSshSigningKeyForAuthenticatedUser:["POST /user/ssh_signing_keys"],deleteEmailForAuthenticated:["DELETE /user/emails",{},{renamed:["users","deleteEmailForAuthenticatedUser"]}],deleteEmailForAuthenticatedUser:["DELETE /user/emails"],deleteGpgKeyForAuthenticated:["DELETE /user/gpg_keys/{gpg_key_id}",{},{renamed:["users","deleteGpgKeyForAuthenticatedUser"]}],deleteGpgKeyForAuthenticatedUser:["DELETE /user/gpg_keys/{gpg_key_id}"],deletePublicSshKeyForAuthenticated:["DELETE /user/keys/{key_id}",{},{renamed:["users","deletePublicSshKeyForAuthenticatedUser"]}],deletePublicSshKeyForAuthenticatedUser:["DELETE /user/keys/{key_id}"],deleteSocialAccountForAuthenticatedUser:["DELETE /user/social_accounts"],deleteSshSigningKeyForAuthenticatedUser:["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"],follow:["PUT /user/following/{username}"],getAuthenticated:["GET /user"],getByUsername:["GET /users/{username}"],getContextForUser:["GET /users/{username}/hovercard"],getGpgKeyForAuthenticated:["GET /user/gpg_keys/{gpg_key_id}",{},{renamed:["users","getGpgKeyForAuthenticatedUser"]}],getGpgKeyForAuthenticatedUser:["GET /user/gpg_keys/{gpg_key_id}"],getPublicSshKeyForAuthenticated:["GET /user/keys/{key_id}",{},{renamed:["users","getPublicSshKeyForAuthenticatedUser"]}],getPublicSshKeyForAuthenticatedUser:["GET /user/keys/{key_id}"],getSshSigningKeyForAuthenticatedUser:["GET /user/ssh_signing_keys/{ssh_signing_key_id}"],list:["GET /users"],listBlockedByAuthenticated:["GET /user/blocks",{},{renamed:["users","listBlockedByAuthenticatedUser"]}],listBlockedByAuthenticatedUser:["GET /user/blocks"],listEmailsForAuthenticated:["GET /user/emails",{},{renamed:["users","listEmailsForAuthenticatedUser"]}],listEmailsForAuthenticatedUser:["GET /user/emails"],listFollowedByAuthenticated:["GET /user/following",{},{renamed:["users","listFollowedByAuthenticatedUser"]}],listFollowedByAuthenticatedUser:["GET /user/following"],listFollowersForAuthenticatedUser:["GET /user/followers"],listFollowersForUser:["GET /users/{username}/followers"],listFollowingForUser:["GET /users/{username}/following"],listGpgKeysForAuthenticated:["GET /user/gpg_keys",{},{renamed:["users","listGpgKeysForAuthenticatedUser"]}],listGpgKeysForAuthenticatedUser:["GET /user/gpg_keys"],listGpgKeysForUser:["GET /users/{username}/gpg_keys"],listPublicEmailsForAuthenticated:["GET /user/public_emails",{},{renamed:["users","listPublicEmailsForAuthenticatedUser"]}],listPublicEmailsForAuthenticatedUser:["GET /user/public_emails"],listPublicKeysForUser:["GET /users/{username}/keys"],listPublicSshKeysForAuthenticated:["GET /user/keys",{},{renamed:["users","listPublicSshKeysForAuthenticatedUser"]}],listPublicSshKeysForAuthenticatedUser:["GET /user/keys"],listSocialAccountsForAuthenticatedUser:["GET /user/social_accounts"],listSocialAccountsForUser:["GET /users/{username}/social_accounts"],listSshSigningKeysForAuthenticatedUser:["GET /user/ssh_signing_keys"],listSshSigningKeysForUser:["GET /users/{username}/ssh_signing_keys"],setPrimaryEmailVisibilityForAuthenticated:["PATCH /user/email/visibility",{},{renamed:["users","setPrimaryEmailVisibilityForAuthenticatedUser"]}],setPrimaryEmailVisibilityForAuthenticatedUser:["PATCH /user/email/visibility"],unblock:["DELETE /user/blocks/{username}"],unfollow:["DELETE /user/following/{username}"],updateAuthenticated:["PATCH /user"]}};var Fc=Gc;const ct=new Map;for(const[r,e]of Object.entries(Fc))for(const[t,i]of Object.entries(e)){const[s,n,o]=i,[a,l]=s.split(/ /),h=Object.assign({method:a,url:l},n);ct.has(r)||ct.set(r,new Map),ct.get(r).set(t,{scope:r,methodName:t,endpointDefaults:h,decorations:o})}const Uc={has({scope:r},e){return ct.get(r).has(e)},getOwnPropertyDescriptor(r,e){return{value:this.get(r,e),configurable:!0,writable:!0,enumerable:!0}},defineProperty(r,e,t){return Object.defineProperty(r.cache,e,t),!0},deleteProperty(r,e){return delete r.cache[e],!0},ownKeys({scope:r}){return[...ct.get(r).keys()]},set(r,e,t){return r.cache[e]=t},get({octokit:r,scope:e,cache:t},i){if(t[i])return t[i];const s=ct.get(e).get(i);if(!s)return;const{endpointDefaults:n,decorations:o}=s;return o?t[i]=jc(r,e,i,n,o):t[i]=r.request.defaults(n),t[i]}};function Ic(r){const e={};for(const t of ct.keys())e[t]=new Proxy({octokit:r,scope:t,cache:{}},Uc);return e}function jc(r,e,t,i,s){const n=r.request.defaults(i);function o(...a){let l=n.endpoint.merge(...a);if(s.mapToData)return l=Object.assign({},l,{data:l[s.mapToData],[s.mapToData]:void 0}),n(l);if(s.renamed){const[h,m]=s.renamed;r.log.warn(`octokit.${e}.${t}() has been renamed to octokit.${h}.${m}()`)}if(s.deprecated&&r.log.warn(s.deprecated),s.renamedParameters){const h=n.endpoint.merge(...a);for(const[m,u]of Object.entries(s.renamedParameters))m in h&&(r.log.warn(`"${m}" parameter is deprecated for "octokit.${e}.${t}()". Use "${u}" instead`),u in h||(h[u]=h[m]),delete h[m]);return n(h)}return n(...a)}return Object.assign(o,n)}function Uo(r){return{rest:Ic(r)}}Uo.VERSION=Lc;var Ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vs(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Io={exports:{}};(function(r,e){(function(t,i){r.exports=i()})(Ue,function(){var t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Ue<"u"?Ue:typeof self<"u"?self:{};function i(se){return se&&se.default||se}var s=function(se,$,_={}){var A,U,M;for(A in $)M=$[A],_[A]=(U=se[A])!=null?U:M;return _},n=function(se,$,_={}){var A,U;for(A in se)U=se[A],$[A]!==void 0&&(_[A]=U);return _},o={load:s,overwrite:n},a;a=class{constructor($,_){this.incr=$,this.decr=_,this._first=null,this._last=null,this.length=0}push($){var _;this.length++,typeof this.incr=="function"&&this.incr(),_={value:$,prev:this._last,next:null},this._last!=null?(this._last.next=_,this._last=_):this._first=this._last=_}shift(){var $;if(this._first!=null)return this.length--,typeof this.decr=="function"&&this.decr(),$=this._first.value,(this._first=this._first.next)!=null?this._first.prev=null:this._last=null,$}first(){if(this._first!=null)return this._first.value}getArray(){var $,_,A;for($=this._first,A=[];$!=null;)A.push((_=$,$=$.next,_.value));return A}forEachShift($){var _;for(_=this.shift();_!=null;)$(_),_=this.shift()}debug(){var $,_,A,U,M;for($=this._first,M=[];$!=null;)M.push((_=$,$=$.next,{value:_.value,prev:(A=_.prev)!=null?A.value:void 0,next:(U=_.next)!=null?U.value:void 0}));return M}};var l=a,h;h=class{constructor($){if(this.instance=$,this._events={},this.instance.on!=null||this.instance.once!=null||this.instance.removeAllListeners!=null)throw new Error("An Emitter already exists for this object");this.instance.on=(_,A)=>this._addListener(_,"many",A),this.instance.once=(_,A)=>this._addListener(_,"once",A),this.instance.removeAllListeners=(_=null)=>_!=null?delete this._events[_]:this._events={}}_addListener($,_,A){var U;return(U=this._events)[$]==null&&(U[$]=[]),this._events[$].push({cb:A,status:_}),this.instance}listenerCount($){return this._events[$]!=null?this._events[$].length:0}async trigger($,..._){var A,U;try{return $!=="debug"&&this.trigger("debug",`Event triggered: ${$}`,_),this._events[$]==null?void 0:(this._events[$]=this._events[$].filter(function(M){return M.status!=="none"}),U=this._events[$].map(async M=>{var W,ie;if(M.status!=="none"){M.status==="once"&&(M.status="none");try{return ie=typeof M.cb=="function"?M.cb(..._):void 0,typeof(ie!=null?ie.then:void 0)=="function"?await ie:ie}catch(_e){return W=_e,this.trigger("error",W),null}}}),(await Promise.all(U)).find(function(M){return M!=null}))}catch(M){return A=M,this.trigger("error",A),null}}};var m=h,u,v,p;u=l,v=m,p=class{constructor($){this.Events=new v(this),this._length=0,this._lists=(function(){var _,A,U;for(U=[],_=1,A=$;1<=A?_<=A:_>=A;1<=A?++_:--_)U.push(new u(()=>this.incr(),()=>this.decr()));return U}).call(this)}incr(){if(this._length++===0)return this.Events.trigger("leftzero")}decr(){if(--this._length===0)return this.Events.trigger("zero")}push($){return this._lists[$.options.priority].push($)}queued($){return $!=null?this._lists[$].length:this._length}shiftAll($){return this._lists.forEach(function(_){return _.forEachShift($)})}getFirst($=this._lists){var _,A,U;for(_=0,A=$.length;_<A;_++)if(U=$[_],U.length>0)return U;return[]}shiftLastFrom($){return this.getFirst(this._lists.slice($).reverse()).shift()}};var b=p,f;f=class extends Error{};var g=f,y,k,S,P,C;P=10,k=5,C=o,y=g,S=class{constructor($,_,A,U,M,W,ie,_e){this.task=$,this.args=_,this.rejectOnDrop=M,this.Events=W,this._states=ie,this.Promise=_e,this.options=C.load(A,U),this.options.priority=this._sanitizePriority(this.options.priority),this.options.id===U.id&&(this.options.id=`${this.options.id}-${this._randomIndex()}`),this.promise=new this.Promise(($e,Re)=>{this._resolve=$e,this._reject=Re}),this.retryCount=0}_sanitizePriority($){var _;return _=~~$!==$?k:$,_<0?0:_>P-1?P-1:_}_randomIndex(){return Math.random().toString(36).slice(2)}doDrop({error:$,message:_="This job has been dropped by Bottleneck"}={}){return this._states.remove(this.options.id)?(this.rejectOnDrop&&this._reject($??new y(_)),this.Events.trigger("dropped",{args:this.args,options:this.options,task:this.task,promise:this.promise}),!0):!1}_assertStatus($){var _;if(_=this._states.jobStatus(this.options.id),!(_===$||$==="DONE"&&_===null))throw new y(`Invalid job status ${_}, expected ${$}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`)}doReceive(){return this._states.start(this.options.id),this.Events.trigger("received",{args:this.args,options:this.options})}doQueue($,_){return this._assertStatus("RECEIVED"),this._states.next(this.options.id),this.Events.trigger("queued",{args:this.args,options:this.options,reachedHWM:$,blocked:_})}doRun(){return this.retryCount===0?(this._assertStatus("QUEUED"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),this.Events.trigger("scheduled",{args:this.args,options:this.options})}async doExecute($,_,A,U){var M,W,ie;this.retryCount===0?(this._assertStatus("RUNNING"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),W={args:this.args,options:this.options,retryCount:this.retryCount},this.Events.trigger("executing",W);try{if(ie=await($!=null?$.schedule(this.options,this.task,...this.args):this.task(...this.args)),_())return this.doDone(W),await U(this.options,W),this._assertStatus("DONE"),this._resolve(ie)}catch(_e){return M=_e,this._onFailure(M,W,_,A,U)}}doExpire($,_,A){var U,M;return this._states.jobStatus(this.options.id==="RUNNING")&&this._states.next(this.options.id),this._assertStatus("EXECUTING"),M={args:this.args,options:this.options,retryCount:this.retryCount},U=new y(`This job timed out after ${this.options.expiration} ms.`),this._onFailure(U,M,$,_,A)}async _onFailure($,_,A,U,M){var W,ie;if(A())return W=await this.Events.trigger("failed",$,_),W!=null?(ie=~~W,this.Events.trigger("retry",`Retrying ${this.options.id} after ${ie} ms`,_),this.retryCount++,U(ie)):(this.doDone(_),await M(this.options,_),this._assertStatus("DONE"),this._reject($))}doDone($){return this._assertStatus("EXECUTING"),this._states.next(this.options.id),this.Events.trigger("done",$)}};var B=S,F,V,G;G=o,F=g,V=class{constructor($,_,A){this.instance=$,this.storeOptions=_,this.clientId=this.instance._randomIndex(),G.load(A,A,this),this._nextRequest=this._lastReservoirRefresh=this._lastReservoirIncrease=Date.now(),this._running=0,this._done=0,this._unblockTime=0,this.ready=this.Promise.resolve(),this.clients={},this._startHeartbeat()}_startHeartbeat(){var $;return this.heartbeat==null&&(this.storeOptions.reservoirRefreshInterval!=null&&this.storeOptions.reservoirRefreshAmount!=null||this.storeOptions.reservoirIncreaseInterval!=null&&this.storeOptions.reservoirIncreaseAmount!=null)?typeof($=this.heartbeat=setInterval(()=>{var _,A,U,M,W;if(M=Date.now(),this.storeOptions.reservoirRefreshInterval!=null&&M>=this._lastReservoirRefresh+this.storeOptions.reservoirRefreshInterval&&(this._lastReservoirRefresh=M,this.storeOptions.reservoir=this.storeOptions.reservoirRefreshAmount,this.instance._drainAll(this.computeCapacity())),this.storeOptions.reservoirIncreaseInterval!=null&&M>=this._lastReservoirIncrease+this.storeOptions.reservoirIncreaseInterval&&({reservoirIncreaseAmount:_,reservoirIncreaseMaximum:U,reservoir:W}=this.storeOptions,this._lastReservoirIncrease=M,A=U!=null?Math.min(_,U-W):_,A>0))return this.storeOptions.reservoir+=A,this.instance._drainAll(this.computeCapacity())},this.heartbeatInterval)).unref=="function"?$.unref():void 0:clearInterval(this.heartbeat)}async __publish__($){return await this.yieldLoop(),this.instance.Events.trigger("message",$.toString())}async __disconnect__($){return await this.yieldLoop(),clearInterval(this.heartbeat),this.Promise.resolve()}yieldLoop($=0){return new this.Promise(function(_,A){return setTimeout(_,$)})}computePenalty(){var $;return($=this.storeOptions.penalty)!=null?$:15*this.storeOptions.minTime||5e3}async __updateSettings__($){return await this.yieldLoop(),G.overwrite($,$,this.storeOptions),this._startHeartbeat(),this.instance._drainAll(this.computeCapacity()),!0}async __running__(){return await this.yieldLoop(),this._running}async __queued__(){return await this.yieldLoop(),this.instance.queued()}async __done__(){return await this.yieldLoop(),this._done}async __groupCheck__($){return await this.yieldLoop(),this._nextRequest+this.timeout<$}computeCapacity(){var $,_;return{maxConcurrent:$,reservoir:_}=this.storeOptions,$!=null&&_!=null?Math.min($-this._running,_):$!=null?$-this._running:_??null}conditionsCheck($){var _;return _=this.computeCapacity(),_==null||$<=_}async __incrementReservoir__($){var _;return await this.yieldLoop(),_=this.storeOptions.reservoir+=$,this.instance._drainAll(this.computeCapacity()),_}async __currentReservoir__(){return await this.yieldLoop(),this.storeOptions.reservoir}isBlocked($){return this._unblockTime>=$}check($,_){return this.conditionsCheck($)&&this._nextRequest-_<=0}async __check__($){var _;return await this.yieldLoop(),_=Date.now(),this.check($,_)}async __register__($,_,A){var U,M;return await this.yieldLoop(),U=Date.now(),this.conditionsCheck(_)?(this._running+=_,this.storeOptions.reservoir!=null&&(this.storeOptions.reservoir-=_),M=Math.max(this._nextRequest-U,0),this._nextRequest=U+M+this.storeOptions.minTime,{success:!0,wait:M,reservoir:this.storeOptions.reservoir}):{success:!1}}strategyIsBlock(){return this.storeOptions.strategy===3}async __submit__($,_){var A,U,M;if(await this.yieldLoop(),this.storeOptions.maxConcurrent!=null&&_>this.storeOptions.maxConcurrent)throw new F(`Impossible to add a job having a weight of ${_} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`);return U=Date.now(),M=this.storeOptions.highWater!=null&&$===this.storeOptions.highWater&&!this.check(_,U),A=this.strategyIsBlock()&&(M||this.isBlocked(U)),A&&(this._unblockTime=U+this.computePenalty(),this._nextRequest=this._unblockTime+this.storeOptions.minTime,this.instance._dropAllQueued()),{reachedHWM:M,blocked:A,strategy:this.storeOptions.strategy}}async __free__($,_){return await this.yieldLoop(),this._running-=_,this._done+=_,this.instance._drainAll(this.computeCapacity()),{running:this._running}}};var X=V,ce,T;ce=g,T=class{constructor($){this.status=$,this._jobs={},this.counts=this.status.map(function(){return 0})}next($){var _,A;if(_=this._jobs[$],A=_+1,_!=null&&A<this.status.length)return this.counts[_]--,this.counts[A]++,this._jobs[$]++;if(_!=null)return this.counts[_]--,delete this._jobs[$]}start($){var _;return _=0,this._jobs[$]=_,this.counts[_]++}remove($){var _;return _=this._jobs[$],_!=null&&(this.counts[_]--,delete this._jobs[$]),_!=null}jobStatus($){var _;return(_=this.status[this._jobs[$]])!=null?_:null}statusJobs($){var _,A,U,M,W;if($!=null){if(A=this.status.indexOf($),A<0)throw new ce(`status must be one of ${this.status.join(", ")}`);U=this._jobs,M=[];for(_ in U)W=U[_],W===A&&M.push(_);return M}else return Object.keys(this._jobs)}statusCounts(){return this.counts.reduce(($,_,A)=>($[this.status[A]]=_,$),{})}};var I=T,d,z;d=l,z=class{constructor($,_){this.schedule=this.schedule.bind(this),this.name=$,this.Promise=_,this._running=0,this._queue=new d}isEmpty(){return this._queue.length===0}async _tryToRun(){var $,_,A,U,M,W,ie;if(this._running<1&&this._queue.length>0)return this._running++,{task:ie,args:$,resolve:M,reject:U}=this._queue.shift(),_=await async function(){try{return W=await ie(...$),function(){return M(W)}}catch(_e){return A=_e,function(){return U(A)}}}(),this._running--,this._tryToRun(),_()}schedule($,..._){var A,U,M;return M=U=null,A=new this.Promise(function(W,ie){return M=W,U=ie}),this._queue.push({task:$,args:_,resolve:M,reject:U}),this._tryToRun(),A}};var de=z,H="2.19.5",he={version:H},K=Object.freeze({version:H,default:he}),ue=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),D=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),R=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),le,ee,Q,ke,Pe,ge;ge=o,le=m,ke=ue,Q=D,Pe=R,ee=(function(){class se{constructor(_={}){this.deleteKey=this.deleteKey.bind(this),this.limiterOptions=_,ge.load(this.limiterOptions,this.defaults,this),this.Events=new le(this),this.instances={},this.Bottleneck=fe,this._startAutoCleanup(),this.sharedConnection=this.connection!=null,this.connection==null&&(this.limiterOptions.datastore==="redis"?this.connection=new ke(Object.assign({},this.limiterOptions,{Events:this.Events})):this.limiterOptions.datastore==="ioredis"&&(this.connection=new Q(Object.assign({},this.limiterOptions,{Events:this.Events}))))}key(_=""){var A;return(A=this.instances[_])!=null?A:(()=>{var U;return U=this.instances[_]=new this.Bottleneck(Object.assign(this.limiterOptions,{id:`${this.id}-${_}`,timeout:this.timeout,connection:this.connection})),this.Events.trigger("created",U,_),U})()}async deleteKey(_=""){var A,U;return U=this.instances[_],this.connection&&(A=await this.connection.__runCommand__(["del",...Pe.allKeys(`${this.id}-${_}`)])),U!=null&&(delete this.instances[_],await U.disconnect()),U!=null||A>0}limiters(){var _,A,U,M;A=this.instances,U=[];for(_ in A)M=A[_],U.push({key:_,limiter:M});return U}keys(){return Object.keys(this.instances)}async clusterKeys(){var _,A,U,M,W,ie,_e,$e,Re;if(this.connection==null)return this.Promise.resolve(this.keys());for(ie=[],_=null,Re=`b_${this.id}-`.length,A=9;_!==0;)for([$e,U]=await this.connection.__runCommand__(["scan",_??0,"match",`b_${this.id}-*_settings`,"count",1e4]),_=~~$e,M=0,_e=U.length;M<_e;M++)W=U[M],ie.push(W.slice(Re,-A));return ie}_startAutoCleanup(){var _;return clearInterval(this.interval),typeof(_=this.interval=setInterval(async()=>{var A,U,M,W,ie,_e;ie=Date.now(),M=this.instances,W=[];for(U in M){_e=M[U];try{await _e._store.__groupCheck__(ie)?W.push(this.deleteKey(U)):W.push(void 0)}catch($e){A=$e,W.push(_e.Events.trigger("error",A))}}return W},this.timeout/2)).unref=="function"?_.unref():void 0}updateSettings(_={}){if(ge.overwrite(_,this.defaults,this),ge.overwrite(_,_,this.limiterOptions),_.timeout!=null)return this._startAutoCleanup()}disconnect(_=!0){var A;if(!this.sharedConnection)return(A=this.connection)!=null?A.disconnect(_):void 0}}return se.prototype.defaults={timeout:1e3*60*5,connection:null,Promise,id:"group-key"},se}).call(t);var ye=ee,xe,Te,Ge;Ge=o,Te=m,xe=(function(){class se{constructor(_={}){this.options=_,Ge.load(this.options,this.defaults,this),this.Events=new Te(this),this._arr=[],this._resetPromise(),this._lastFlush=Date.now()}_resetPromise(){return this._promise=new this.Promise((_,A)=>this._resolve=_)}_flush(){return clearTimeout(this._timeout),this._lastFlush=Date.now(),this._resolve(),this.Events.trigger("batch",this._arr),this._arr=[],this._resetPromise()}add(_){var A;return this._arr.push(_),A=this._promise,this._arr.length===this.maxSize?this._flush():this.maxTime!=null&&this._arr.length===1&&(this._timeout=setTimeout(()=>this._flush(),this.maxTime)),A}}return se.prototype.defaults={maxTime:null,maxSize:null,Promise},se}).call(t);var Fe=xe,c=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),j=i(K),L,E,w,x,N,q,O,Z,te,J,oe,we=[].splice;q=10,E=5,oe=o,O=b,x=B,N=X,Z=c,w=m,te=I,J=de,L=(function(){class se{constructor(_={},...A){var U,M;this._addToQueue=this._addToQueue.bind(this),this._validateOptions(_,A),oe.load(_,this.instanceDefaults,this),this._queues=new O(q),this._scheduled={},this._states=new te(["RECEIVED","QUEUED","RUNNING","EXECUTING"].concat(this.trackDoneStatus?["DONE"]:[])),this._limiter=null,this.Events=new w(this),this._submitLock=new J("submit",this.Promise),this._registerLock=new J("register",this.Promise),M=oe.load(_,this.storeDefaults,{}),this._store=(function(){if(this.datastore==="redis"||this.datastore==="ioredis"||this.connection!=null)return U=oe.load(_,this.redisStoreDefaults,{}),new Z(this,M,U);if(this.datastore==="local")return U=oe.load(_,this.localStoreDefaults,{}),new N(this,M,U);throw new se.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`)}).call(this),this._queues.on("leftzero",()=>{var W;return(W=this._store.heartbeat)!=null&&typeof W.ref=="function"?W.ref():void 0}),this._queues.on("zero",()=>{var W;return(W=this._store.heartbeat)!=null&&typeof W.unref=="function"?W.unref():void 0})}_validateOptions(_,A){if(!(_!=null&&typeof _=="object"&&A.length===0))throw new se.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.")}ready(){return this._store.ready}clients(){return this._store.clients}channel(){return`b_${this.id}`}channel_client(){return`b_${this.id}_${this._store.clientId}`}publish(_){return this._store.__publish__(_)}disconnect(_=!0){return this._store.__disconnect__(_)}chain(_){return this._limiter=_,this}queued(_){return this._queues.queued(_)}clusterQueued(){return this._store.__queued__()}empty(){return this.queued()===0&&this._submitLock.isEmpty()}running(){return this._store.__running__()}done(){return this._store.__done__()}jobStatus(_){return this._states.jobStatus(_)}jobs(_){return this._states.statusJobs(_)}counts(){return this._states.statusCounts()}_randomIndex(){return Math.random().toString(36).slice(2)}check(_=1){return this._store.__check__(_)}_clearGlobalState(_){return this._scheduled[_]!=null?(clearTimeout(this._scheduled[_].expiration),delete this._scheduled[_],!0):!1}async _free(_,A,U,M){var W,ie;try{if({running:ie}=await this._store.__free__(_,U.weight),this.Events.trigger("debug",`Freed ${U.id}`,M),ie===0&&this.empty())return this.Events.trigger("idle")}catch(_e){return W=_e,this.Events.trigger("error",W)}}_run(_,A,U){var M,W,ie;return A.doRun(),M=this._clearGlobalState.bind(this,_),ie=this._run.bind(this,_,A),W=this._free.bind(this,_,A),this._scheduled[_]={timeout:setTimeout(()=>A.doExecute(this._limiter,M,ie,W),U),expiration:A.options.expiration!=null?setTimeout(function(){return A.doExpire(M,ie,W)},U+A.options.expiration):void 0,job:A}}_drainOne(_){return this._registerLock.schedule(()=>{var A,U,M,W,ie;return this.queued()===0?this.Promise.resolve(null):(ie=this._queues.getFirst(),{options:W,args:A}=M=ie.first(),_!=null&&W.weight>_?this.Promise.resolve(null):(this.Events.trigger("debug",`Draining ${W.id}`,{args:A,options:W}),U=this._randomIndex(),this._store.__register__(U,W.weight,W.expiration).then(({success:_e,wait:$e,reservoir:Re})=>{var Ve;return this.Events.trigger("debug",`Drained ${W.id}`,{success:_e,args:A,options:W}),_e?(ie.shift(),Ve=this.empty(),Ve&&this.Events.trigger("empty"),Re===0&&this.Events.trigger("depleted",Ve),this._run(U,M,$e),this.Promise.resolve(W.weight)):this.Promise.resolve(null)})))})}_drainAll(_,A=0){return this._drainOne(_).then(U=>{var M;return U!=null?(M=_!=null?_-U:_,this._drainAll(M,A+U)):this.Promise.resolve(A)}).catch(U=>this.Events.trigger("error",U))}_dropAllQueued(_){return this._queues.shiftAll(function(A){return A.doDrop({message:_})})}stop(_={}){var A,U;return _=oe.load(_,this.stopDefaults),U=M=>{var W;return W=()=>{var ie;return ie=this._states.counts,ie[0]+ie[1]+ie[2]+ie[3]===M},new this.Promise((ie,_e)=>W()?ie():this.on("done",()=>{if(W())return this.removeAllListeners("done"),ie()}))},A=_.dropWaitingJobs?(this._run=function(M,W){return W.doDrop({message:_.dropErrorMessage})},this._drainOne=()=>this.Promise.resolve(null),this._registerLock.schedule(()=>this._submitLock.schedule(()=>{var M,W,ie;W=this._scheduled;for(M in W)ie=W[M],this.jobStatus(ie.job.options.id)==="RUNNING"&&(clearTimeout(ie.timeout),clearTimeout(ie.expiration),ie.job.doDrop({message:_.dropErrorMessage}));return this._dropAllQueued(_.dropErrorMessage),U(0)}))):this.schedule({priority:q-1,weight:0},()=>U(1)),this._receive=function(M){return M._reject(new se.prototype.BottleneckError(_.enqueueErrorMessage))},this.stop=()=>this.Promise.reject(new se.prototype.BottleneckError("stop() has already been called")),A}async _addToQueue(_){var A,U,M,W,ie,_e,$e;({args:A,options:W}=_);try{({reachedHWM:ie,blocked:U,strategy:$e}=await this._store.__submit__(this.queued(),W.weight))}catch(Re){return M=Re,this.Events.trigger("debug",`Could not queue ${W.id}`,{args:A,options:W,error:M}),_.doDrop({error:M}),!1}return U?(_.doDrop(),!0):ie&&(_e=$e===se.prototype.strategy.LEAK?this._queues.shiftLastFrom(W.priority):$e===se.prototype.strategy.OVERFLOW_PRIORITY?this._queues.shiftLastFrom(W.priority+1):$e===se.prototype.strategy.OVERFLOW?_:void 0,_e!=null&&_e.doDrop(),_e==null||$e===se.prototype.strategy.OVERFLOW)?(_e==null&&_.doDrop(),ie):(_.doQueue(ie,U),this._queues.push(_),await this._drainAll(),ie)}_receive(_){return this._states.jobStatus(_.options.id)!=null?(_._reject(new se.prototype.BottleneckError(`A job with the same id already exists (id=${_.options.id})`)),!1):(_.doReceive(),this._submitLock.schedule(this._addToQueue,_))}submit(..._){var A,U,M,W,ie,_e,$e;return typeof _[0]=="function"?(ie=_,[U,..._]=ie,[A]=we.call(_,-1),W=oe.load({},this.jobDefaults)):(_e=_,[W,U,..._]=_e,[A]=we.call(_,-1),W=oe.load(W,this.jobDefaults)),$e=(...Re)=>new this.Promise(function(Ve,rt){return U(...Re,function(...st){return(st[0]!=null?rt:Ve)(st)})}),M=new x($e,_,W,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),M.promise.then(function(Re){return typeof A=="function"?A(...Re):void 0}).catch(function(Re){return Array.isArray(Re)?typeof A=="function"?A(...Re):void 0:typeof A=="function"?A(Re):void 0}),this._receive(M)}schedule(..._){var A,U,M;return typeof _[0]=="function"?([M,..._]=_,U={}):[U,M,..._]=_,A=new x(M,_,U,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),this._receive(A),A.promise}wrap(_){var A,U;return A=this.schedule.bind(this),U=function(...M){return A(_.bind(this),...M)},U.withOptions=function(M,...W){return A(M,_,...W)},U}async updateSettings(_={}){return await this._store.__updateSettings__(oe.overwrite(_,this.storeDefaults)),oe.overwrite(_,this.instanceDefaults,this),this}currentReservoir(){return this._store.__currentReservoir__()}incrementReservoir(_=0){return this._store.__incrementReservoir__(_)}}return se.default=se,se.Events=w,se.version=se.prototype.version=j.version,se.strategy=se.prototype.strategy={LEAK:1,OVERFLOW:2,OVERFLOW_PRIORITY:4,BLOCK:3},se.BottleneckError=se.prototype.BottleneckError=g,se.Group=se.prototype.Group=ye,se.RedisConnection=se.prototype.RedisConnection=ue,se.IORedisConnection=se.prototype.IORedisConnection=D,se.Batcher=se.prototype.Batcher=Fe,se.prototype.jobDefaults={priority:E,weight:1,expiration:null,id:"<no-id>"},se.prototype.storeDefaults={maxConcurrent:null,minTime:0,highWater:null,strategy:se.prototype.strategy.LEAK,penalty:null,reservoir:null,reservoirRefreshInterval:null,reservoirRefreshAmount:null,reservoirIncreaseInterval:null,reservoirIncreaseAmount:null,reservoirIncreaseMaximum:null},se.prototype.localStoreDefaults={Promise,timeout:null,heartbeatInterval:250},se.prototype.redisStoreDefaults={Promise,timeout:null,heartbeatInterval:5e3,clientTimeout:1e4,Redis:null,clientOptions:{},clusterNodes:null,clearDatastore:!1,connection:null},se.prototype.instanceDefaults={datastore:"local",connection:null,id:"<no-id>",rejectOnDrop:!0,trackDoneStatus:!1,Promise},se.prototype.stopDefaults={enqueueErrorMessage:"This limiter has been stopped and cannot accept new jobs.",dropWaitingJobs:!0,dropErrorMessage:"This limiter has been stopped."},se}).call(t);var fe=L,Le=fe;return Le})})(Io);var Bc=Io.exports;const jo=Vs(Bc);var zc="0.0.0-development";async function Bo(r,e,t,i){if(!t.request||!t.request.request)throw t;if(t.status>=400&&!r.doNotRetry.includes(t.status)){const s=i.request.retries!=null?i.request.retries:r.retries,n=Math.pow((i.request.retryCount||0)+1,2);throw e.retry.retryRequest(t,s,n)}throw t}async function Mc(r,e,t,i){const s=new jo;return s.on("failed",function(n,o){const a=~~n.request.request.retries,l=~~n.request.request.retryAfter;if(i.request.retryCount=o.retryCount+1,a>o.retryCount)return l*r.retryAfterBaseValue}),s.schedule(Nc.bind(null,r,e,t),i)}async function Nc(r,e,t,i){const s=await t(t,i);if(s.data&&s.data.errors&&s.data.errors.length>0&&/Something went wrong while executing your query/.test(s.data.errors[0].message)){const n=new qt(s.data.errors[0].message,500,{request:i,response:s});return Bo(r,e,n,i)}return s}function zo(r,e){const t=Object.assign({enabled:!0,retryAfterBaseValue:1e3,doNotRetry:[400,401,403,404,422,451],retries:3},e.retry);return t.enabled&&(r.hook.error("request",Bo.bind(null,t,r)),r.hook.wrap("request",Mc.bind(null,t,r))),{retry:{retryRequest:(i,s,n)=>(i.request.request=Object.assign({},i.request.request,{retries:s,retryAfter:n}),i)}}}zo.VERSION=zc;var qc="0.0.0-development",as=()=>Promise.resolve();function Hc(r,e,t){return r.retryLimiter.schedule(Vc,r,e,t)}async function Vc(r,e,t){const i=t.method!=="GET"&&t.method!=="HEAD",{pathname:s}=new URL(t.url,"http://github.test"),n=t.method==="GET"&&s.startsWith("/search/"),o=s.startsWith("/graphql"),l=~~e.retryCount>0?{priority:0,weight:0}:{};r.clustering&&(l.expiration=1e3*60),(i||o)&&await r.write.key(r.id).schedule(l,as),i&&r.triggersNotification(s)&&await r.notifications.key(r.id).schedule(l,as),n&&await r.search.key(r.id).schedule(l,as);const h=r.global.key(r.id).schedule(l,e,t);if(o){const m=await h;if(m.data.errors!=null&&m.data.errors.some(u=>u.type==="RATE_LIMITED"))throw Object.assign(new Error("GraphQL Rate Limit Exceeded"),{response:m,data:m.data})}return h}var Wc=["/orgs/{org}/invitations","/orgs/{org}/invitations/{invitation_id}","/orgs/{org}/teams/{team_slug}/discussions","/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments","/repos/{owner}/{repo}/collaborators/{username}","/repos/{owner}/{repo}/commits/{commit_sha}/comments","/repos/{owner}/{repo}/issues","/repos/{owner}/{repo}/issues/{issue_number}/comments","/repos/{owner}/{repo}/pulls","/repos/{owner}/{repo}/pulls/{pull_number}/comments","/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies","/repos/{owner}/{repo}/pulls/{pull_number}/merge","/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers","/repos/{owner}/{repo}/pulls/{pull_number}/reviews","/repos/{owner}/{repo}/releases","/teams/{team_id}/discussions","/teams/{team_id}/discussions/{discussion_number}/comments"];function Kc(r){const t=`^(?:${r.map(i=>i.split("/").map(s=>s.startsWith("{")?"(?:.+?)":s).join("/")).map(i=>`(?:${i})`).join("|")})[^/]*$`;return new RegExp(t,"i")}var qi=Kc(Wc),Mo=qi.test.bind(qi),Tt={},Zc=function(r,e){Tt.global=new r.Group({id:"octokit-global",maxConcurrent:10,...e}),Tt.search=new r.Group({id:"octokit-search",maxConcurrent:1,minTime:2e3,...e}),Tt.write=new r.Group({id:"octokit-write",maxConcurrent:1,minTime:1e3,...e}),Tt.notifications=new r.Group({id:"octokit-notifications",maxConcurrent:1,minTime:3e3,...e})};function Ws(r,e){const{enabled:t=!0,Bottleneck:i=jo,id:s="no-id",timeout:n=1e3*60*2,connection:o}=e.throttle||{};if(!t)return{};const a={timeout:n};typeof o<"u"&&(a.connection=o),Tt.global==null&&Zc(i,a);const l=Object.assign({clustering:o!=null,triggersNotification:Mo,fallbackSecondaryRateRetryAfter:60,retryAfterBaseValue:1e3,retryLimiter:new i,id:s,...Tt},e.throttle);if(typeof l.onSecondaryRateLimit!="function"||typeof l.onRateLimit!="function")throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);const h={},m=new i.Events(h);return h.on("secondary-limit",l.onSecondaryRateLimit),h.on("rate-limit",l.onRateLimit),h.on("error",u=>r.log.warn("Error in throttling-plugin limit handler",u)),l.retryLimiter.on("failed",async function(u,v){const[p,b,f]=v.args,{pathname:g}=new URL(f.url,"http://github.test");if(!(g.startsWith("/graphql")&&u.status!==401||u.status===403||u.status===429))return;const k=~~b.retryCount;b.retryCount=k,f.request.retryCount=k;const{wantRetry:S,retryAfter:P=0}=await async function(){var C;if(/\bsecondary rate\b/i.test(u.message)){const B=Number(u.response.headers["retry-after"])||p.fallbackSecondaryRateRetryAfter;return{wantRetry:await m.trigger("secondary-limit",B,f,r,k),retryAfter:B}}if(u.response.headers!=null&&u.response.headers["x-ratelimit-remaining"]==="0"||(((C=u.response.data)==null?void 0:C.errors)??[]).some(B=>B.type==="RATE_LIMITED")){const B=new Date(~~u.response.headers["x-ratelimit-reset"]*1e3).getTime(),F=Math.max(Math.ceil((B-Date.now())/1e3)+1,0);return{wantRetry:await m.trigger("rate-limit",F,f,r,k),retryAfter:F}}return{}}();if(S)return b.retryCount++,P*p.retryAfterBaseValue}),r.hook.wrap("request",Hc.bind(null,l)),{}}Ws.VERSION=qc;Ws.triggersNotification=Mo;var Jc="0.0.0-development",No=wc.plugin(Uo,Ro,Dc,zo,Ws).defaults({userAgent:`octokit.js/${Jc}`,throttle:{onRateLimit:Yc,onSecondaryRateLimit:Xc}});function Yc(r,e,t){if(t.log.warn(`Request quota exhausted for request ${e.method} ${e.url}`),e.request.retryCount===0)return t.log.info(`Retrying after ${r} seconds!`),!0}function Xc(r,e,t){if(t.log.warn(`SecondaryRateLimit detected for request ${e.method} ${e.url}`),e.request.retryCount===0)return t.log.info(`Retrying after ${r} seconds!`),!0}async function qo(r,e){try{const t=await Qc(e),i=be(r),s=[];for(const a of Object.values(t.data.files||{})){if(!(a!=null&&a.content))continue;const l=i.validate(a.content);if(l===null)throw console.error(`Invalid data for "${i.title()}":`,a.content),new Error(`ungültige Daten für "${i.title()}"!`);s.push(l)}const n=await eu(e),o=ne.queryStore();o.setData(r,[]),i.addToStore(o,s,!0),o.updateData("gist",a=>(a[`${r}`]={id:e,revision:n},a))}catch(t){alert(`Etwas ist schiefgelaufen: ${t}`);return}}async function Qc(r){const t=await new No().request("GET /gists/{gist_id}",{gist_id:r,headers:{"X-GitHub-Api-Version":"2022-11-28"}});if(t.status!==200)throw console.error(t),new Error(`anfrage von "GET /gist/${r}" ist mit Statuscode ${t.status} fehlgeschlagen`);return t}async function eu(r){const t=await new No().request("GET /gists/{gist_id}/commits",{gist_id:r,headers:{"X-GitHub-Api-Version":"2022-11-28"}});return t.status!==200?(console.error(t),-1):t.data.length}function St(r){return`${r.lotto} ${r.name}`}function be(r){switch(r){case"alertLists":return new Al;case"metalSheets":return new Pl;case"vis":return new Dl;case"visBookmarks":return new Ol;case"visData":return new Rl;case"special":return new $l;default:throw new Error(`unknown "${r}"`)}}var tu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,Ho=(r,e,t,i)=>{for(var s=i>1?void 0:i?ru(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&tu(e,t,s),s};let ms=class extends Ae{constructor(){super(...arguments),this.cleanup=new qe}createRenderRoot(){return this}render(){const r=ne.queryStore();return re`
            <ui-dialog title="Bookmark" modal inert>
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-row justify="flex-end">
                        <ui-flex-grid-item flex="1">
                            <ui-button
                                style="text-wrap: nowrap;"
                                variant="full"
                                color="secondary"
                                ripple
                                @click=${()=>{const t=ne.queryVisBookmarksDialog();t.title="",t.invalidTitle=!1,t.show()}}
                            >
                                Neue Liste
                            </ui-button>
                        </ui-flex-grid-item>
                    </ui-flex-grid-row>

                    <ui-flex-grid-item>${this.renderChecklists(r)}</ui-flex-grid-item>
                </ui-flex-grid>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>this.close()}
                >
                    OK
                </ui-button>
            </ui-dialog>
        `}renderChecklists(r){if(this.product===void 0)return re``;const e=r.getData("visBookmarks")||[],t=s=>{if(this.product===void 0)return;const n=St(this.product);be("visBookmarks").replaceInStore(ne.queryStore(),{...s,data:this.isBookmark(s)?s.data.filter(o=>St(o)!==n):[...s.data,this.product]},s)},i=[];for(const s of e)i.push(Ie(s,re`
                        <ui-flex-grid-item>
                            <ui-label primary="${s.title}" ripple>
                                <ui-check
                                    ?checked=${this.isBookmark(s)}
                                    @click=${()=>t(s)}
                                ></ui-check>
                            </ui-label>
                        </ui-flex-grid-item>
                    `));return re`<ui-flex-grid gap="0.25rem">${i}</ui-flex-grid>`}connectedCallback(){super.connectedCallback();const r=ne.queryStore();this.cleanup.add(r.addListener("visBookmarks",()=>this.requestUpdate()))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}isBookmark(r){if(this.product===void 0)return!1;const e=St(this.product);return r.data.find(t=>St(t)===e)!==void 0}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Ho([pe({type:Object,attribute:"product",reflect:!1})],ms.prototype,"product",2);ms=Ho([Se("pg-bookmark-select-dialog")],ms);var su=Object.defineProperty,iu=Object.getOwnPropertyDescriptor,Vo=(r,e,t,i)=>{for(var s=i>1?void 0:i?iu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&su(e,t,s),s};let ys=class extends Ae{createRenderRoot(){return this}render(){return re`
            <ui-dialog title="Import" modal inert>
                <ui-flex-grid gap="0.5rem">
                    <ui-flex-grid-item>
                        <ui-label
                            secondary="Zum Importieren von einer Datei leer lassen"
                        ></ui-label>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        ${Ie(this.storeKey,re` <ui-input name="gistID" type="text" title="Gist ID"></ui-input> `)}
                    </ui-flex-grid-item>
                </ui-flex-grid>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="secondary"
                    @click=${async()=>this.close()}
                >
                    Abbrechen
                </ui-button>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>{if(!this.storeKey)return;const r=this.querySelector('ui-dialog ui-input[name="gistID"]').value;r===""?await this.importFromFile():await qo(this.storeKey,r),ne.queryStackLayout().clearStack(),this.close()}}
                >
                    OK
                </ui-button>
            </ui-dialog>
        `}async importFromFile(){if(!this.storeKey)return;const r=document.createElement("input");r.type="file",r.multiple=!0,r.onchange=async()=>{if(r.files!==null)for(const e of r.files){const t=new FileReader;t.onload=async()=>{if(typeof t.result!="string"||this.storeKey===void 0)return;const i=be(this.storeKey);let s;try{s=i.validate(t.result)}catch(n){alert(n);return}if(s===null){alert(`Ungültige Daten für "${i.title()}"!`);return}try{i.addToStore(ne.queryStore(),[s],!0)}catch(n){alert(n);return}},t.onerror=()=>{alert(`Lesen der Datei "${e.name}" ist fehlgeschlagen!`)},t.readAsText(e)}},r.click()}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Vo([pe({type:String,attribute:"store-key",reflect:!0})],ys.prototype,"storeKey",2);ys=Vo([Se("pg-import-dialog")],ys);var ou=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,Zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?nu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ou(e,t,s),s};let rr=class extends Ae{constructor(){super(...arguments),this.entryData=[],this.tableIndex=-1}createRenderRoot(){return this}render(){return this.header!==void 0&&this.header.length>this.entryData.length&&(this.entryData=this.header.map((r,e)=>this.entryData[e]||"")),re`
            <ui-dialog title="${this.tableIndex<0?"Neuer Eintrag":"Bearbeiten"}" modal inert>
                <ui-flex-grid gap="0.25rem"> ${this.renderInputs()} </ui-flex-grid>

                ${this.renderDeleteAction()}

                <ui-button
                    slot="actions"
                    variant="full"
                    color="secondary"
                    @click=${async()=>this.close()}
                >
                    Abbrechen
                </ui-button>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>{this.dispatchEvent(new Event("submit")),this.close()}}
                >
                    OK
                </ui-button>
            </ui-dialog>
        `}renderInputs(){const r=[...(this.header||[]).map((e,t)=>Ie(this.entryData[t],re`
                        <ui-flex-grid-item>
                            <ui-input
                                title="${e}"
                                type="text"
                                value=${this.entryData[t]}
                                @change=${i=>{this.entryData[t]=i.currentTarget.value}}
                            ></ui-input>
                        </ui-flex-grid-item>
                    `))];return re`${r}`}renderDeleteAction(){return this.tableIndex<0?re``:re`
            <ui-button
                slot="actions"
                variant="full"
                color="destructive"
                @click=${async()=>{this.dispatchEvent(new Event("delete")),this.close()}}
            >
                Löschen
            </ui-button>
        `}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Zr([pe({type:Object,attribute:"header",reflect:!0})],rr.prototype,"header",2);Zr([pe({type:Object,attribute:"entry-data",reflect:!0})],rr.prototype,"entryData",2);Zr([pe({type:Number,attribute:"table-index",reflect:!0})],rr.prototype,"tableIndex",2);rr=Zr([Se("pg-metal-sheet-entry-dialog")],rr);var au=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?lu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&au(e,t,s),s};let Gt=class extends Ae{constructor(){super(...arguments),this.title="",this.format="",this.toolID="",this.press=-1}createRenderRoot(){return this}render(){return re`
            <ui-dialog title=${this.title} modal inert>
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${Ie(this.format,re`
                                <ui-input
                                    type="text"
                                    title="Format"
                                    value=${this.format}
                                    @change=${r=>{this.format=r.currentTarget.value}}
                                ></ui-input>
                            `)}
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        ${Ie(this.toolID,re`
                                <ui-input
                                    type="text"
                                    title="Unterteil ID"
                                    value=${this.toolID}
                                    @change=${r=>{this.toolID=r.currentTarget.value}}
                                ></ui-input>
                            `)}
                    </ui-flex-grid-item>

                    <ui-flex-grid-item> ${this.renderPressSelect()} </ui-flex-grid-item>
                </ui-flex-grid>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="secondary"
                    @click=${async()=>this.close()}
                >
                    Abbrechen
                </ui-button>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>{this.dispatchEvent(new Event("submit")),this.close()}}
                >
                    OK
                </ui-button>
            </ui-dialog>
        `}renderPressSelect(){return Ie(this.press,re`
                <ui-label primary="Presse">
                    <ui-select
                        @change=${r=>{const t=r.currentTarget.selected();t&&(this.press=parseInt(t.value,10))}}
                    >
                        <ui-select-option value="-1" ?selected=${this.press===-1}>
                            -
                        </ui-select-option>

                        <ui-select-option value="0" ?selected=${this.press===0}>
                            0
                        </ui-select-option>

                        <ui-select-option value="2" ?selected=${this.press===2}>
                            2
                        </ui-select-option>

                        <ui-select-option value="3" ?selected=${this.press===3}>
                            3
                        </ui-select-option>

                        <ui-select-option value="4" ?selected=${this.press===4}>
                            4
                        </ui-select-option>

                        <ui-select-option value="5" ?selected=${this.press===5}>
                            5
                        </ui-select-option>
                    </ui-select>
                </ui-label>
            `)}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};vr([pe({type:String,attribute:"title",reflect:!0})],Gt.prototype,"title",2);vr([pe({type:String,attribute:"format",reflect:!0})],Gt.prototype,"format",2);vr([pe({type:String,attribute:"tool-id",reflect:!0})],Gt.prototype,"toolID",2);vr([pe({type:Number,attribute:"press",reflect:!0})],Gt.prototype,"press",2);Gt=vr([Se("pg-metal-sheet-table-dialog")],Gt);var cu=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,Ks=(r,e,t,i)=>{for(var s=i>1?void 0:i?uu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&cu(e,t,s),s};let Fr=class extends Ae{constructor(){super(...arguments),this.title=""}createRenderRoot(){return this}render(){return re`
            <ui-dialog title="Bookmarks" modal inert>
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${Ie(this.title,re`
                                <ui-input
                                    title="Name"
                                    type="text"
                                    value="${this.title}"
                                    ?invalid=${this.invalidTitle}
                                    @change=${r=>{this.title=r.currentTarget.value}}
                                >
                                </ui-input>
                            `)}
                    </ui-flex-grid-item>
                </ui-flex-grid>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="secondary"
                    @click=${async()=>this.close()}
                >
                    Abbrechen
                </ui-button>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>{this.dispatchEvent(new Event("submit")),this.close()}}
                >
                    OK
                </ui-button>
            </ui-dialog>
        `}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Ks([pe({type:String,attribute:"title",reflect:!0})],Fr.prototype,"title",2);Ks([pe({type:Boolean,attribute:"invalid-title",reflect:!0})],Fr.prototype,"invalidTitle",2);Fr=Ks([Se("pg-vis-bookmarks-dialog")],Fr);var du=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,Zs=(r,e,t,i)=>{for(var s=i>1?void 0:i?pu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&du(e,t,s),s};let Ur=class extends Ae{constructor(){super(...arguments),this.title=""}createRenderRoot(){return this}render(){return re`
            <ui-dialog title="Vis Data" modal inert>
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${Ie(this.title,re`
                                <ui-input
                                    title="Name"
                                    type="text"
                                    value="${this.title}"
                                    ?invalid=${this.invalidTitle}
                                    @change=${r=>{this.title=r.currentTarget.value}}
                                >
                                </ui-input>
                            `)}
                    </ui-flex-grid-item>
                </ui-flex-grid>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="secondary"
                    @click=${async()=>this.close()}
                >
                    Abbrechen
                </ui-button>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>{this.dispatchEvent(new Event("submit")),this.close()}}
                >
                    OK
                </ui-button>
            </ui-dialog>
        `}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Zs([pe({type:String,attribute:"title",reflect:!0})],Ur.prototype,"title",2);Zs([pe({type:Boolean,attribute:"invalid-title",reflect:!0})],Ur.prototype,"invalidTitle",2);Ur=Zs([Se("pg-vis-data-dialog")],Ur);var hu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,Js=(r,e,t,i)=>{for(var s=i>1?void 0:i?gu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&hu(e,t,s),s};let Ir=class extends Ae{constructor(){super(...arguments),this.clickHandler=()=>{ne.queryStackLayout().setPage("alert",r=>{const e=r.children[0];e!==void 0&&(e.data=this.data)},!0)}}createRenderRoot(){return this.classList.add("flex"),this.classList.add("row"),this.classList.add("nowrap"),this.classList.add("align-center"),this.classList.add("justify-between"),this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)",this}render(){return this.data===void 0?re``:re`
            <ui-text>${this.data.alert}</ui-text>

            <ui-text
                style="color: hsl(var(--ui-hsl-primary)); text-wrap: nowrap; margin-left: var(--ui-spacing);"
                wght="750"
            >
                ${this.data.from===this.data.to?this.data.from:`${this.data.from}..${this.data.to}`}
            </ui-text>
        `}updated(r){this.route?(this.addEventListener("click",this.clickHandler),this.role="button",this.style.cursor="pointer"):(this.removeEventListener("click",this.clickHandler),this.role=null,this.style.cursor="default")}};Js([pe({type:Object,attribute:"data",reflect:!1})],Ir.prototype,"data",2);Js([pe({type:Boolean,attribute:"route",reflect:!0})],Ir.prototype,"route",2);Ir=Js([Se("pg-alert-list-item")],Ir);var fu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,It=(r,e,t,i)=>{for(var s=i>1?void 0:i?mu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&fu(e,t,s),s};let yt=class extends Ae{constructor(){super(...arguments),this.clickHandler=()=>{ne.queryStackLayout().setPage("visDataEdit",r=>{const e=r.children[0];e!==void 0&&(e.data=this.data,e.listKey=this.listKey,e.entryIndex=this.entryIndex)},!0)}}createRenderRoot(){return this.style.display="block",this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)",this}render(){return this.data===void 0?re``:re`
            <ui-flex-grid gap="0.25rem">
                ${this.data.key!==null?re`
                          <ui-flex-grid-item>
                              <ui-primary wght="650"> ${this.data.key} </ui-primary>
                          </ui-flex-grid-item>
                      `:""}
                ${this.renderFilterTags()}

                <ui-flex-grid-item>
                    <ui-text name="value">${this.data.value}</ui-text>
                </ui-flex-grid-item>
            </ui-flex-grid>
        `}renderFilterTags(){if(this.data===void 0||!this.showFilter)return re``;const r=[];return this.data.lotto!==null&&r.push(re`
                <ui-flex-grid-item flex="0">
                    <code>${this.data.lotto}</code>
                </ui-flex-grid-item>
            `),this.data.format!==null&&r.push(re`
                <ui-flex-grid-item flex="0">
                    <code>${this.data.format}</code>
                </ui-flex-grid-item>
            `),this.data.stamp!==null&&r.push(re`
                <ui-flex-grid-item flex="0">
                    <code>${this.data.stamp}</code>
                </ui-flex-grid-item>
            `),this.data.thickness!==null&&r.push(re`
                <ui-flex-grid-item flex="0">
                    <code>${this.data.thickness}</code>
                </ui-flex-grid-item>
            `),re`
            <ui-flex-grid gap="0">
                ${r.length>0?re`<ui-secondary>Filter</ui-secondary>`:""}
                <ui-flex-grid-row gap="0.25rem"> ${r} </ui-flex-grid-row>
            </ui-flex-grid>

            ${r.length>0?re`<br />`:""}
        `}updated(r){var e;this.querySelector('ui-text[name="value"]').innerHTML=(((e=this.data)==null?void 0:e.value)||"").replaceAll(`
`,"<br/>"),this.route?(this.addEventListener("click",this.clickHandler),this.role="button",this.style.cursor="pointer"):(this.removeEventListener("click",this.clickHandler),this.role=null,this.style.cursor="default")}};It([pe({type:Object,attribute:"data",reflect:!0})],yt.prototype,"data",2);It([pe({type:Boolean,attribute:"route",reflect:!0})],yt.prototype,"route",2);It([pe({type:String,attribute:"list-key",reflect:!0})],yt.prototype,"listKey",2);It([pe({type:Number,attribute:"entry-index",reflect:!0})],yt.prototype,"entryIndex",2);It([pe({type:Boolean,attribute:"show-filter",reflect:!0})],yt.prototype,"showFilter",2);yt=It([Se("pg-vis-data-list-item")],yt);var yu=Object.defineProperty,vu=Object.getOwnPropertyDescriptor,Ys=(r,e,t,i)=>{for(var s=i>1?void 0:i?vu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&yu(e,t,s),s};let sr=class extends Ae{constructor(){super(...arguments),this.clickHandler=()=>{ne.queryStackLayout().setPage("product",r=>{const e=r.children[0];e!==void 0&&(e.data=this.data)},!0)}}createRenderRoot(){return this.style.display="block",this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)",this}render(){return this.data===void 0?re``:re`
            <ui-flex-grid gap="0.25rem">
                <ui-flex-grid-row gap="0.25rem">
                    <ui-flex-grid-item style="padding: var(--ui-spacing);" align="center">
                        <ui-text
                            style="color: hsl(var(--ui-hsl-primary));"
                            wght="750"
                        >
                            ${this.data.lotto}
                        </ui-text>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item style="padding: var(--ui-spacing);" align="center">
                        <ui-text>${this.data.name}</ui-text>
                    </ui-flex-grid-item>
                </ui-flex-grid-row>

                <ui-flex-grid-row gap="0.25rem">
                    <ui-flex-grid-item style="padding: var(--ui-spacing);" align="center">
                        <ui-text>${this.data.format}</ui-text>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item style="padding: var(--ui-spacing);" align="center">
                        <ui-text>${this.data.stamp}</ui-text>
                    </ui-flex-grid-item align="center">

                    <ui-flex-grid-item style="padding: var(--ui-spacing);" align="center">
                        <ui-text>${this.data.thickness}</ui-text>
                    </ui-flex-grid-item>
                </ui-flex-grid-row>
            </ui-flex-grid>
        `}updated(r){this.route?(this.addEventListener("click",this.clickHandler),this.role="button",this.style.cursor="pointer"):(this.removeEventListener("click",this.clickHandler),this.role=null,this.style.cursor="default")}};Ys([pe({type:Object,attribute:"data",reflect:!0})],sr.prototype,"data",2);Ys([pe({type:Boolean,attribute:"route",reflect:!0})],sr.prototype,"route",2);sr=Ys([Se("pg-vis-list-item")],sr);const _u=sr;var bu=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,Wo=(r,e,t,i)=>{for(var s=i>1?void 0:i?wu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&bu(e,t,s),s};let jr=class extends Ae{constructor(){super(...arguments),this.name="",this.slot=""}createRenderRoot(){return this.style.width="100%",this.style.height="100%",this.style.display="block",this.style.paddingTop="var(--ui-app-bar-height)",this}};Wo([pe({type:Object,attribute:"data",reflect:!1})],jr.prototype,"data",2);jr=Wo([Se("pg-page-content")],jr);const tt=jr;var Eu=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Xs=(r,e,t,i)=>{for(var s=i>1?void 0:i?ku(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Eu(e,t,s),s};let ir=class extends tt{constructor(){super(...arguments),this.listItems=[],this.cleanup=new qe}querySearchBar(){return this.querySelector("pg-search-bar")}render(){var r;return ne.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?be("alertLists").listKey(this.data):be("alertLists").title(),re`
            <pg-search-bar
                title="Alarmsuche"
                storage-key="${(r=this.data)==null?void 0:r.title}"
                ?active=${!!this.searchBar}
                @change=${async e=>{await this.filter(e.currentTarget.value())}}
            ></pg-search-bar>

            <div
                class="container no-scrollbar"
                style="${Ft({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <div class="list">${this.listItems}</div>
            </div>
        `}updated(r){const e=this.querySelector("pg-search-bar"),t=this.querySelector("div.container");this.searchBar?(t.style.paddingTop=`calc(${e.clientHeight}px + var(--ui-spacing) * 2)`,this.filter(e.value())):(t.style.paddingTop="0",this.filter("")),r.has("data")&&setTimeout(()=>this.updateContent())}updateContent(){this.listItems=[],this.data!==void 0&&(this.listItems=this.data.data.map(r=>re`<pg-alert-list-item
                data=${JSON.stringify(r)}
                route
            ></pg-alert-list-item>`))}connectedCallback(){super.connectedCallback();const r=ne.queryAppBar(),e=async()=>this.searchBar=!this.searchBar,t=r.contentName("search").contentAt(0);t.addEventListener("click",e),this.cleanup.add(()=>t.removeEventListener("click",e))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async filter(r){const e=this.querySelector(".list"),t=no.generateRegExp(r);let i,s,n,o;for(const a of[...e.children])a.data!==void 0&&setTimeout(()=>{n=Math.min(a.data.from,a.data.to),o=Math.max(a.data.from,a.data.to),i=[];for(let l=n;l<o;l++)i.push(l.toString());s=`${i.join(",")} ${a.data.alert}`,t.test(s)?a.style.display="flex":a.style.display="none"})}};Xs([pe({type:Boolean,attribute:"search-bar",reflect:!0})],ir.prototype,"searchBar",2);Xs([cr()],ir.prototype,"listItems",2);ir=Xs([Se("pg-page-content-alert-lists")],ir);const Tu=ir;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=(r,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(r[s],s);return i},Ko=ao(class extends lo{constructor(r){if(super(r),r.type!==Tn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],n=[];let o=0;for(const a of r)s[o]=i?i(a,o):o,n[o]=t(a,o),o++;return{values:n,keys:s}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,i]){const s=Cn(r),{values:n,keys:o}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=o,n;const a=this.ut??(this.ut=[]),l=[];let h,m,u=0,v=s.length-1,p=0,b=n.length-1;for(;u<=v&&p<=b;)if(s[u]===null)u++;else if(s[v]===null)v--;else if(a[u]===o[p])l[p]=ot(s[u],n[p]),u++,p++;else if(a[v]===o[b])l[b]=ot(s[v],n[b]),v--,b--;else if(a[u]===o[b])l[b]=ot(s[u],n[b]),zt(r,l[b+1],s[u]),u++,b--;else if(a[v]===o[p])l[p]=ot(s[v],n[p]),zt(r,s[u],s[v]),v--,p++;else if(h===void 0&&(h=Hi(o,p,b),m=Hi(a,u,v)),h.has(a[u]))if(h.has(a[v])){const f=m.get(o[p]),g=f!==void 0?s[f]:null;if(g===null){const y=zt(r,s[u]);ot(y,n[p]),l[p]=y}else l[p]=ot(g,n[p]),zt(r,s[u],g),s[f]=null;p++}else ts(s[v]),v--;else ts(s[u]),u++;for(;p<=b;){const f=zt(r,l[b+1]);ot(f,n[p]),l[p++]=f}for(;u<=v;){const f=s[u++];f!==null&&ts(f)}return this.ut=o,co(r,l),dt}});var Su=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,Cu=(r,e,t,i)=>{for(var s=i>1?void 0:i?xu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Su(e,t,s),s};let vs=class extends tt{constructor(){super(...arguments),this.cleanup=new qe}render(){return ne.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?be("metalSheets").listKey(this.data):be("metalSheets").title(),re`
            <div
                class="no-scrollbar"
                style="${Ft({width:"100%",overflowX:"auto"})}"
            >
                <table>
                    <thead>
                        <tr>
                            ${this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        ${this.renderTableBody()}
                    </tbody>
                </table>
            </div>

            <br />

            <ui-flex-grid-row class="actions">
                <ui-button
                    variant="full"
                    color="primary"
                    ripple
                    @click=${()=>{var e;const r=this.querySelector("pg-metal-sheet-entry-dialog");r.header=((e=this.data)==null?void 0:e.data.table.header)||[],r.tableIndex=-1,r.entryData=[],r.show()}}
                >
                    Neuer Eintrag
                </ui-button>
            </ui-flex-grid-row>

            <pg-metal-sheet-entry-dialog
                @submit=${async r=>{this.data&&(r.currentTarget.tableIndex<0?this.data.data.table.data.push(r.currentTarget.entryData):this.data.data.table.data[r.currentTarget.tableIndex]=r.currentTarget.entryData,this.requestUpdate(),this.replaceInStore(this.data))}}
                @delete=${async r=>{this.data&&(this.data.data.table.data.splice(r.currentTarget.tableIndex,1),this.requestUpdate(),this.replaceInStore(this.data))}}
            ></pg-metal-sheet-entry-dialog>

            <pg-metal-sheet-table-dialog
                title="Bearbeiten"
                @submit=${r=>{if(!this.data)return;const e=r.currentTarget.format,t=r.currentTarget.toolID,i=r.currentTarget.press;if(!e||!t){setTimeout(()=>this.openTableDialog({format:e,toolID:t,press:i}));return}const s=ne.queryStore(),n=be("metalSheets");try{const o={...this.data,format:e,toolID:t,data:{...this.data.data,press:i}};n.replaceInStore(s,o,this.data),this.data=o}catch(o){setTimeout(()=>this.openTableDialog({format:e,toolID:t,press:i})),alert(o);return}}}
            ></pg-metal-sheet-table-dialog>
        `}renderTableHeader(){if(!this.data)return re``;const r=[];for(const e of this.data.data.table.header)r.push(re` <th style="text-align: center; text-wrap: pretty;">${e}</th> `);return re`${[...r]}`}renderTableBody(){if(!this.data)return re``;const r=Ko(this.data.data.table.data,e=>`${e.join(",")}`,(e,t)=>re`
                    <tr
                        style="cursor: pointer;"
                        role="button"
                        data-json="${JSON.stringify(e)}"
                        @click=${()=>{var s;const i=this.querySelector("pg-metal-sheet-entry-dialog");i.header=((s=this.data)==null?void 0:s.data.table.header)||[],i.entryData=e,i.tableIndex=t,i.show()}}
                    >
                        ${[...e.map(i=>re` <td style="text-align: center;">${i}</td> `)]}
                    </tr>
                `);return re`${r}`}updated(r){const e=this.querySelector("tbody");mo.createMobile(e,{onDragEnd:()=>{this.data&&(this.data.data.table.data=Array.from(e.children).map(t=>{const i=t.getAttribute("data-json");if(!i)throw new Error('missing attribute "data-json"');return JSON.parse(i)}),this.requestUpdate(),this.replaceInStore(this.data))}})}firstUpdated(r){this.classList.add("no-scrollbar"),this.style.overflow="hidden",this.style.overflowY="auto"}connectedCallback(){super.connectedCallback();const r=async()=>{this.data&&this.openTableDialog({format:this.data.format,toolID:this.data.toolID,press:this.data.data.press})},e=ne.queryAppBar().contentName("edit").contentAt(0);e.addEventListener("click",r),this.cleanup.add(()=>{e.removeEventListener("click",r)})}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}openTableDialog(r){const e=this.querySelector("pg-metal-sheet-table-dialog");e.format=r.format,e.toolID=r.toolID,e.press=r.press,e.show()}replaceInStore(r){be("metalSheets").replaceInStore(ne.queryStore(),r,r)}};vs=Cu([Se("pg-page-content-metal-sheets")],vs);const Au=vs;var Pu=Object.defineProperty,$u=Object.getOwnPropertyDescriptor,Qs=(r,e,t,i)=>{for(var s=i>1?void 0:i?$u(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Pu(e,t,s),s};let or=class extends tt{constructor(){super(...arguments),this.listItems=[],this.cleanup=new qe}render(){var r;return ne.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?be("vis").listKey(this.data):be("vis").title(),re`
            <pg-search-bar
                title="Produktsuche"
                storage-key="${(r=this.data)==null?void 0:r.title}"
                ?active=${!!this.searchBar}
                @change=${async e=>{await this.filter(e.currentTarget.value())}}
            ></pg-search-bar>

            <div
                class="container no-scrollbar"
                style="${Ft({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <div class="list">${this.listItems}</div>
            </div>
        `}updated(r){const e=this.querySelector("pg-search-bar"),t=this.querySelector("div.container");this.searchBar?(t.style.paddingTop=`calc(${e.clientHeight}px + var(--ui-spacing) * 2)`,this.filter(e.value())):(t.style.paddingTop="0",this.filter("")),r.has("data")&&setTimeout(()=>this.updateContent())}updateContent(){this.listItems=[],this.data!==void 0&&(this.listItems=this.data.data.map(r=>re`<pg-vis-list-item data=${JSON.stringify(r)} route>
            </pg-vis-list-item>`))}connectedCallback(){super.connectedCallback();const r=ne.queryAppBar(),e=async()=>this.searchBar=!this.searchBar,t=r.contentName("search").contentAt(0);t.addEventListener("click",e),this.cleanup.add(()=>t.removeEventListener("click",e))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async filter(r){const e=this.querySelector(".list"),t=no.generateRegExp(r);let i;for(const s of[...e.children])s.data!==void 0&&setTimeout(()=>{i=`${s.data.lotto} ${s.data.name} ${s.data.format} ${s.data.stamp} ${s.data.thickness}mm`,t.test(i)?s.style.display="block":s.style.display="none"})}};Qs([pe({type:Boolean,attribute:"search-bar",reflect:!0})],or.prototype,"searchBar",2);Qs([cr()],or.prototype,"listItems",2);or=Qs([Se("pg-page-content-vis")],or);const Ou=or;var Ru=Object.defineProperty,Du=Object.getOwnPropertyDescriptor,Zo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Du(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ru(e,t,s),s};let Br=class extends tt{constructor(){super(...arguments),this.listItems=Ce,this.cleanup=new qe}render(){return ne.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?be("visBookmarks").listKey(this.data):be("visBookmarks").title(),ae`
            <div class="container no-scrollbar" style="width: 100%; height: 100%; overflow: auto;">
                <div class="list">${this.listItems}</div>
            </div>
        `}updated(r){r.has("data")&&setTimeout(()=>this.updateContent())}updateContent(){if(this.listItems=[],this.data===void 0)return;const r=ne.queryStore();this.listItems=Ko(this.data.data,e=>`${e.lotto} ${e.name}`,e=>{const t=this.productFromStore(r,e);return ae`
                    <pg-vis-list-item
                        class="no-user-select"
                        data=${JSON.stringify(t)}
                        route
                    ></pg-vis-list-item>
                `}),setTimeout(()=>{const e=this.querySelector(".list");mo.createMobile(e,{onDragEnd:()=>{if(this.data===void 0)return;const t=Array.from(e.children).filter(i=>i instanceof _u).map(i=>i.data);be("visBookmarks").replaceInStore(r,{...this.data,data:t},this.data)}})})}connectedCallback(){super.connectedCallback();const r=ne.queryStore(),e=be("visBookmarks");this.cleanup.add(r.addListener("visBookmarks",t=>{if(this.data===void 0)return;const i=e.listKey(this.data);for(const s of t)if(e.listKey(s)===i){this.data=s;break}}))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}productFromStore(r,e){const t=St(e);for(const i of this.sortVisLists(r.getData("vis")||[])){console.debug(`Search list "${i.title}" for the product key "${t}"`);for(const s of i.data)if(St(s)===t)return console.debug(`Found "${t}" in "${i.title}"`),e}return console.warn(`Product key "${t}" not found`),e}sortVisLists(r){return r.sort((e,t)=>e.date-t.date).reverse()}};Zo([cr()],Br.prototype,"listItems",2);Br=Zo([Se("pg-page-content-vis-bookmarks")],Br);const Lu=Br;var Gu=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,Jo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Gu(e,t,s),s};let zr=class extends tt{constructor(){super(...arguments),this.listItems=[],this.cleanup=new qe}render(){return ne.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?be("visData").listKey(this.data):be("visData").title(),re`
            <div class="container no-scrollbar" style="width: 100%; height: 100%; overflow: auto;">
                <ui-flex-grid gap="0.25rem">
                    ${this.renderActions()}

                    <ui-flex-grid-item>
                        <div
                            class="list no-scrollbar"
                            style="width: 100%; height: 100%; overflow: auto;"
                        >
                            ${this.listItems}
                        </div>
                    </ui-flex-grid-item>
                </ui-flex-grid>
            </div>

            ${this.renderDialog()}
        `}renderActions(){return re`
            <ui-flex-grid-row justify="flex-end" gap="0.25rem">
                <ui-flex-grid-item flex="0">
                    <ui-button
                        name="new-entry"
                        style="text-wrap: nowrap;"
                        variant="full"
                        color="primary"
                        @click=${async()=>{ne.queryStackLayout().setPage("visDataEdit",e=>{const t=e.children[0];t!==void 0&&(t.data={key:null,value:"",lotto:null,format:null,stamp:null,thickness:null},t.listKey=be("visData").listKey(this.data),t.entryIndex=-1)},!0)}}
                    >
                        Neuer Eintrag
                    </ui-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `}renderDialog(){return re` <pg-vis-data-dialog @submit=${async e=>{if(this.data===void 0)return;const t={...this.data};this.data.title=e.currentTarget.title;try{be("visData").replaceInStore(ne.queryStore(),{...this.data},t)}catch(i){alert(i),setTimeout(()=>{const s=e.currentTarget;s.invalidTitle=!0,s.show()})}}}></pg-vis-data-dialog> `}updated(r){r.has("data")&&setTimeout(()=>this.updateContent())}updateContent(){if(this.listItems=[],this.data===void 0)return;const r=be("visData");this.listItems=this.data.data.map((e,t)=>Ie(e,re`
                    <pg-vis-data-list-item
                        data=${JSON.stringify(e)}
                        list-key=${this.data!==void 0?r.listKey(this.data):""}
                        entry-index=${t}
                        show-filter
                        route
                    >
                    </pg-vis-data-list-item>
                `))}connectedCallback(){super.connectedCallback();const r=()=>{if(this.data===void 0)return;const s=this.querySelector("pg-vis-data-dialog");s.invalidTitle=!1,s.title=this.data.title,s.show()},e=ne.queryAppBar().contentName("edit").contentAt(0);e.addEventListener("click",r),this.cleanup.add(()=>{e.removeEventListener("click",r)});const t=be("visData"),i=ne.queryStore();this.cleanup.add(i.addListener("visData",s=>{if(this.data===void 0)return;const n=t.listKey(this.data);for(const o of s)if(t.listKey(o)===n){this.data=o;break}}))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};Jo([cr()],zr.prototype,"listItems",2);zr=Jo([Se("pg-page-content-vis-data")],zr);const Uu=zr;var Iu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,Bu=(r,e,t,i)=>{for(var s=i>1?void 0:i?ju(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Iu(e,t,s),s};let _s=class extends tt{render(){return re`
            <div
                class="container no-scrollbar"
                style="${Ft({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${this.data!==void 0?re`<pg-alert-list-item
                                  data=${JSON.stringify(this.data)}
                              ></pg-alert-list-item>`:""}
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        <p class="description" style="padding: var(--ui-spacing);"></p>
                    </ui-flex-grid-item>
                </ui-flex-grid>
            </div>
        `}updated(r){if(this.data!==void 0){const e=this.querySelector(".description");e.innerHTML=this.data.desc.join("<br/>")}}firstUpdated(r){this.style.overflow="auto"}};_s=Bu([Se("pg-page-content-alert")],_s);const zu=_s;var Mu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,Yo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Mu(e,t,s),s};let bs=class extends Ae{createRenderRoot(){return this}render(){return re`
            <ui-button variant="outline" color="secondary" ripple @click=${()=>{if(this.product===void 0)return;const e=ne.queryBookmarkSelectDialog();e.product=this.product,e.show()}}>
                <ui-svg style="width: 2rem;">${ze.smoothieLineIcons.bookmark}</ui-svg>
                Speichern
            </ui-button>
        `}};Yo([pe({type:Object,attribute:"product",reflect:!1})],bs.prototype,"product",2);bs=Yo([Se("pg-bookmarks-action")],bs);var qu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,Xo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&qu(e,t,s),s};let Mr=class extends tt{constructor(){super(...arguments),this.listItems=[],this.cleanup=new qe}render(){return re`
            <div class="container no-scrollbar" style="width: 100%; height: 100%; overflow: auto;">
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${this.data!==void 0?re`<pg-vis-list-item
                                  data=${JSON.stringify(this.data)}
                              ></pg-vis-list-item>`:""}
                    </ui-flex-grid-item>

                    <ui-flex-grid-row justify="flex-end" wrap="warp" gap="0.25rem">
                        <ui-flex-grid-item flex="0">
                            <pg-bookmarks-action
                                product="${JSON.stringify(this.data)||""}"
                            ></pg-bookmarks-action>
                        </ui-flex-grid-item>
                    </ui-flex-grid-row>

                    <ui-flex-grid class="list" direction="column" gap="0.25rem">
                        ${this.listItems}
                    </ui-flex-grid>
                </ui-flex-grid>
            </div>
        `}updated(r){r.has("data")&&setTimeout(()=>this.updateContent())}updateContent(){if(this.listItems=[],this.data===void 0)return re``;const r=be("visData");for(const e of ne.queryStore().getData("visData")||[]){const t=r.listKey(e);let i=!1,s=-1;for(const n of e.data){if(s++,!this.isLotto(n.lotto,this.data.lotto)||!this.isFormat(n.format,this.data.format)||!this.isStamp(n.stamp,this.data.stamp)||!this.isThickness(n.thickness,this.data.thickness))continue;i||(i=!0,this.listItems=[...this.listItems,Ie(e.title,re`<ui-flex-grid-item>
                                <ui-heading level="3">${e.title}</ui-heading>
                            </ui-flex-grid-item>`)]);const o=JSON.stringify(n);this.listItems=[...this.listItems,Ie(o,re`<pg-vis-data-list-item
                            data=${o}
                            entry-index=${s}
                            list-key=${t}
                            route
                        ></pg-vis-data-list-item>`)]}i=!1}}connectedCallback(){super.connectedCallback();const r=ne.queryStore();this.cleanup.add(r.addListener("visData",()=>{this.updateContent()}))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}isLotto(r,e){return r===null?!0:new RegExp(r,"i").test(e)}isFormat(r,e){return r===null?!0:new RegExp(r,"i").test(e)}isStamp(r,e){return r===null?!0:new RegExp(r,"i").test(e)}isThickness(r,e){return r===null?!0:new RegExp(r,"i").test(e.toString())}};Xo([cr()],Mr.prototype,"listItems",2);Mr=Xo([Se("pg-page-contents-product")],Mr);const Vu=Mr;var Wu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,ei=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ku(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Wu(e,t,s),s};let nr=class extends tt{constructor(){super(...arguments),this.modified=!1,this.deleteEntry=!1,this.cleanup=new qe}render(){return this.data===void 0||this.listKey===void 0||this.entryIndex===void 0?re``:re`
            <div class="container no-scrollbar" style="width: 100%; height: 100%; overflow: auto;">
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        <ui-input
                            name="key"
                            title="Key (Optional)"
                            type="text"
                            value=${this.data.key||""}
                            @change=${async r=>{this.data.key=r.currentTarget.value||null,this.modified=!0}}
                        ></ui-input>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        <ui-textarea
                            name="value"
                            title="Value"
                            type="text"
                            value=${this.data.value||""}
                            rows="10"
                            @change=${async r=>{this.data.value=r.currentTarget.value,this.modified=!0}}
                        ></ui-textarea>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        <ui-input
                            name="lotto"
                            title="Lotto (Filter, Optional)"
                            type="text"
                            value=${this.data.lotto||""}
                            @change=${async r=>{this.data.lotto=r.currentTarget.value||null,this.modified=!0}}
                        ></ui-input>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        <ui-input
                            name="format"
                            title="Format (Filter, Optional)"
                            type="text"
                            value=${this.data.format||""}
                            @change=${async r=>{this.data.format=r.currentTarget.value||null,this.modified=!0}}
                        ></ui-input>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        <ui-input
                            name="stamp"
                            title="Stempel (Filter, Optional)"
                            type="text"
                            value=${this.data.stamp||""}
                            @change=${async r=>{this.data.stamp=r.currentTarget.value||null,this.modified=!0}}
                        ></ui-input>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        <ui-input
                            name="thickness"
                            title="Stärke (Filter, Optional)"
                            type="number"
                            value=${this.data.thickness||""}
                            @change=${async r=>{this.data.thickness=r.currentTarget.value||null,this.modified=!0}}
                        ></ui-input>
                    </ui-flex-grid-item>
                </ui-flex-grid>
            </div>
        `}firstUpdated(r){super.firstUpdated(r);const e=ne.queryStore(),i=ne.queryStackLayout().events.addListener("change",()=>{i(),e.updateData("visData",s=>{if(!this.modified||this.data===void 0||this.listKey===void 0||this.entryIndex===void 0)return s;const n=be("visData");for(const o of s)if(n.listKey(o)===this.listKey){if(this.deleteEntry){this.entryIndex>-1&&o.data.splice(this.entryIndex,1);break}this.entryIndex<0?o.data.unshift(this.data):o.data[this.entryIndex]=this.data;break}return s})})}connectedCallback(){super.connectedCallback();const r=()=>{confirm("Möchten Sie diesen Eintrag wirklich löschen?")&&(this.modified=!0,this.deleteEntry=!0,ne.queryStackLayout().goBack())},e=ne.queryAppBar().contentName("trash").contentAt(0);e.addEventListener("click",r),this.cleanup.add(()=>{e.removeEventListener("click",r)})}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};ei([pe({type:String,attribute:"list-key",reflect:!0})],nr.prototype,"listKey",2);ei([pe({type:Number,attribute:"entry-index",reflect:!0})],nr.prototype,"entryIndex",2);nr=ei([Se("pg-page-content-vis-data-edit")],nr);const Zu=nr,Qo="v1.1.0.dev",Ju=9;var Yu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,Qu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xu(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Yu(e,t,s),s};let ne=class extends Ae{static queryStore(){return document.querySelector("ui-store")}static queryThemeHandler(){return document.querySelector("ui-theme-handler")}static queryAppBar(){return document.querySelector("ui-app-bar")||null}static queryDrawer(){return document.querySelector("ui-drawer")||null}static queryStackLayout(){return document.querySelector("ui-stack-layout")}static queryImportDialog(){return document.querySelector("pg-import-dialog")}static queryVisBookmarksDialog(){return document.querySelector("pg-vis-bookmarks-dialog")}static queryBookmarkSelectDialog(){return document.querySelector("pg-bookmark-select-dialog")}static queryVisDataDialog(){return document.querySelector("pg-vis-data-dialog")}constructor(){super(),this.initializeStores()}initializeStores(){const r=ne.queryStore();r.setData("theme",{name:"original"},!0),r.setData("drawer",{open:!0},!1),r.setData("drawerGroup",{},!0),r.setData("alertLists",[],!0),r.setData("metalSheets",[],!0),r.setData("vis",[],!0),r.setData("visBookmarks",[{title:"Presse 0",allowDeletion:!0,data:[]},{title:"Presse 2",allowDeletion:!0,data:[]},{title:"Presse 3",allowDeletion:!0,data:[]},{title:"Presse 4",allowDeletion:!0,data:[]},{title:"Presse 5",allowDeletion:!0,data:[]}],!0),r.setData("visData",[],!0),r.setData("special",[],!0),r.setData("gist",{},!0)}createRenderRoot(){return this}render(){return re`
            <div class="is-container no-scrollbar" style="height: 100%;">
                <ui-stack-layout></ui-stack-layout>
            </div>

            ${this.renderAppBar()} ${this.renderDrawer()} ${this.renderDialogs()}
        `}renderAppBar(){return re`
            <ui-app-bar position="top">
                <ui-app-bar-item name="menu" slot="left">
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{const r=ne.queryDrawer();r.open=!0}}
                    >
                        ${ze.smoothieLineIcons.menu}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="back" slot="left" hidden>
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{ne.queryStackLayout().goBack()}}
                    >
                        ${ze.smoothieLineIcons.chevronLeft}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="title" slot="center">
                    <ui-heading style="white-space: nowrap;"> PG: Vis </ui-heading>
                </ui-app-bar-item>

                <ui-app-bar-item name="edit" slot="right" hidden>
                    <ui-icon-button ripple ghost> ${ze.smoothieLineIcons.pen} </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="share" slot="right" hidden>
                    <ui-icon-button ripple ghost> ${ze.smoothieLineIcons.share} </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="search" slot="right" hidden>
                    <ui-icon-button ripple ghost> ${ze.smoothieLineIcons.search} </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="trash" slot="right" hidden>
                    <ui-icon-button ripple ghost> ${ze.smoothieLineIcons.trash} </ui-icon-button>
                </ui-app-bar-item>
            </ui-app-bar>
        `}renderDrawer(){var e,t,i,s,n,o,a,l,h,m,u,v,p,b,f;const r=ne.queryStore();return re`
            <ui-drawer
                ?open=${!!((e=r.getData("drawer"))!=null&&e.open)}
                @open=${()=>{r.setData("drawer",{open:!0})}}
                @close=${()=>{r.setData("drawer",{open:!1})}}
            >
                <ui-drawer-group name="app-info" no-fold>
                    <ui-drawer-group-item>
                        <ui-button
                            style="${Ft({display:"flex",justifyContent:"flex-start",marginBottom:"var(--ui-spacing)",padding:"0.25rem",fontSize:"0.85rem",textTransform:"none"})}"
                            variant="ghost"
                            color="primary"
                            ripple
                            @click=${()=>{}}
                        >
                            ${Qo} - [Build: ${Ju}]
                        </ui-button>
                    </ui-drawer-group-item>

                    <ui-drawer-group-item>
                        <ui-label primary="Theme">
                            <select
                                style="text-align: center;"
                                @change=${g=>{const y=g.currentTarget.children[g.currentTarget.selectedIndex];r.setData("theme",{name:y.value})}}
                            >
                                <option
                                    value="original"
                                    ?selected=${((t=r.getData("theme"))==null?void 0:t.name)==="original"}
                                >
                                    Original
                                </option>
                                <option
                                    value="gruvbox"
                                    ?selected=${((i=r.getData("theme"))==null?void 0:i.name)==="gruvbox"}
                                >
                                    Gruvbox
                                </option>
                            </select>
                        </ui-label>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="alertLists"
                    title="Alarm Listen"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((n=(s=r.getData("drawerGroup"))==null?void 0:s.alertLists)!=null&&n.open)}
                    @fold=${()=>{r.updateData("drawerGroup",g=>(g.alertLists={open:!1},g))}}
                    @unfold=${()=>{r.updateData("drawerGroup",g=>(g.alertLists={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import store-key="alertLists"></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist store-key="alertLists"></pg-drawer-item-gist>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="metalSheets"
                    title="Blech Listen"
                    data-fixed-items="3"
                    gap="0.25rem"
                    ?open=${!!((a=(o=r.getData("drawerGroup"))==null?void 0:o.metalSheets)!=null&&a.open)}
                    @fold=${()=>{r.updateData("drawerGroup",g=>(g.metalSheets={open:!1},g))}}
                    @unfold=${()=>{r.updateData("drawerGroup",g=>(g.metalSheets={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import store-key="metalSheets"></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist store-key="metalSheets"></pg-drawer-item-gist>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 3 -->
                    <ui-drawer-group-item>
                        <ui-button
                            variant="full"
                            color="secondary"
                            @click=${()=>{const g=this.querySelector("pg-metal-sheet-table-dialog");g.format="",g.toolID="",g.press=-1,g.show()}}
                        >
                            Neue Liste
                        </ui-button>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="vis"
                    title="Vis"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((h=(l=r.getData("drawerGroup"))==null?void 0:l.vis)!=null&&h.open)}
                    @fold=${()=>{r.updateData("drawerGroup",g=>(g.vis={open:!1},g))}}
                    @unfold=${()=>{r.updateData("drawerGroup",g=>(g.vis={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import store-key="vis"></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist store-key="vis"></pg-drawer-item-gist>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="visBookmarks"
                    title="Vis Bookmarks"
                    data-fixed-items="1"
                    gap="0.25rem"
                    ?open=${!!((u=(m=r.getData("drawerGroup"))==null?void 0:m.visBookmarks)!=null&&u.open)}
                    @fold=${()=>{r.updateData("drawerGroup",g=>(g.visBookmarks={open:!1},g))}}
                    @unfold=${()=>{r.updateData("drawerGroup",g=>(g.visBookmarks={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <ui-button
                            variant="full"
                            color="secondary"
                            @click=${()=>{const g=ne.queryVisBookmarksDialog();g.title="",g.invalidTitle=!1,g.show()}}
                        >
                            Neue Liste
                        </ui-button>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="visData"
                    title="Vis Data"
                    data-fixed-items="3"
                    gap="0.25rem"
                    ?open=${!!((p=(v=r.getData("drawerGroup"))==null?void 0:v.visData)!=null&&p.open)}
                    @fold=${()=>{r.updateData("drawerGroup",g=>(g.visData={open:!1},g))}}
                    @unfold=${()=>{r.updateData("drawerGroup",g=>(g.visData={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import store-key="visData"></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist store-key="visData"></pg-drawer-item-gist>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 3 -->
                    <ui-drawer-group-item>
                        <ui-button
                            variant="full"
                            color="secondary"
                            @click=${()=>{const g=ne.queryVisDataDialog();g.invalidTitle=!1,g.title="",g.show()}}
                        >
                            Neue Liste
                        </ui-button>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="special"
                    title="Spezial"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((f=(b=r.getData("drawerGroup"))==null?void 0:b.special)!=null&&f.open)}
                    @fold=${()=>{r.updateData("drawerGroup",g=>(g.special={open:!1},g))}}
                    @unfold=${()=>{r.updateData("drawerGroup",g=>(g.special={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import store-key="special"></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist store-key="special"></pg-drawer-item-gist>
                    </ui-drawer-group-item>
                </ui-drawer-group>
            </ui-drawer>
        `}renderDialogs(){return re`
            <pg-import-dialog></pg-import-dialog>

            <pg-metal-sheet-table-dialog
                title="Neue Liste"
                @submit=${r=>{const e=r.currentTarget.format,t=r.currentTarget.toolID,i=r.currentTarget.press,s=()=>{const h=this.querySelector("pg-metal-sheet-table-dialog");h.format=e,h.toolID=t,h.press=i,h.show()};if(!e||!t){setTimeout(s);return}const n=ne.queryStore(),o={format:e,toolID:t,data:{press:i,table:{header:[],data:[]}}},a=be("metalSheets"),l=a.listKey(o);for(const h of n.getData("metalSheets")||[])if(a.listKey(h)===l){setTimeout(s),alert(`Liste "${l}" existiert bereits!"`);return}a.addToStore(n,[],!0)}}
            ></pg-metal-sheet-table-dialog>

            <pg-vis-data-dialog
                @submit=${r=>{const e=r.currentTarget.title,t=be("visData");try{t.addToStore(ne.queryStore(),[{title:e,data:[]}],!0)}catch(i){alert(i),setTimeout(()=>{const s=ne.queryVisDataDialog();s.invalidTitle=!0,s.show()})}}}
            >
            </pg-vis-data-dialog>

            <pg-vis-bookmarks-dialog
                @submit=${r=>{const e=r.currentTarget.title,t=be("visBookmarks");try{t.addToStore(ne.queryStore(),[{title:e,allowDeletion:!0,data:[]}],!0)}catch(i){alert(i),setTimeout(()=>{const s=ne.queryVisBookmarksDialog();s.invalidTitle=!0,s.show()})}}}
            >
            </pg-vis-bookmarks-dialog>

            <pg-bookmark-select-dialog></pg-bookmark-select-dialog>
        `}firstUpdated(r){this.style.position="fixed",this.style.top="0",this.style.right="0",this.style.bottom="0",this.style.left="0",this.registerPages(),this.handleStackLayoutChanges(),this.storeEventHandlers()}registerPages(){const r=ne.queryStackLayout();r.registerPage("alertLists",()=>{const e=new We;return e.name="alertLists",e.appendChild(new Tu),e}),r.registerPage("metalSheets",()=>{const e=new We;return e.name="metalSheets",e.appendChild(new Au),e}),r.registerPage("vis",()=>{const e=new We;return e.name="vis",e.appendChild(new Ou),e}),r.registerPage("visBookmarks",()=>{const e=new We;return e.name="visBookmarks",e.appendChild(new Lu),e}),r.registerPage("visData",()=>{const e=new We;return e.name="visData",e.appendChild(new Uu),e}),r.registerPage("alert",()=>{const e=new We;return e.name="alert",e.appendChild(new zu),e}),r.registerPage("product",()=>{const e=new We;return e.name="product",e.append(new Vu),e}),r.registerPage("visDataEdit",()=>{const e=new We;return e.name="visDataEdit",e.append(new Zu),e})}handleStackLayoutChanges(){const r=ne.queryStackLayout(),e=ne.queryAppBar(),t=ne.queryDrawer();r.events.addListener("change",({current:i})=>{if(r.stackSize()>1?e.contentName("back").show():e.contentName("back").hide(),e.content("left").forEach(s=>{s.name==="menu"||s.name==="back"||s.hide()}),e.content("right").forEach(s=>{s.hide()}),i===null){e.contentName("title").contentAt(0).innerText="PG: Vis",t.open=!0;return}switch(i.name){case"alertLists":e.contentName("search").show();break;case"metalSheets":e.contentName("edit").show();break;case"vis":e.contentName("search").show();break;case"visData":e.contentName("edit").show();break;case"visDataEdit":e.contentName("trash").show();break}})}storeEventHandlers(){const r=ne.queryStore();r.addListener("theme",e=>{const t=ne.queryThemeHandler();t.theme=e.name},!0),this.drawerGroupItemsRendering(r,"alertLists"),this.drawerGroupItemsRendering(r,"metalSheets"),this.drawerGroupItemsRendering(r,"vis"),this.drawerGroupItemsRendering(r,"visBookmarks"),this.drawerGroupItemsRendering(r,"visData")}drawerGroupItemsRendering(r,e){r.addListener(e,t=>{const i=this.querySelector(`ui-drawer-group[name="${e}"]`),s=parseInt(i.getAttribute("data-fixed-items")||"0");Array.from(i.children).slice(s).forEach(o=>i.removeChild(o));const n=be(e);t.forEach(async o=>{const a=new Ba;i.appendChild(a);const l=new Xe;switch(a.appendChild(l),l.storeKey=n.key(),l.storeListKey=n.listKey(o),l.primary=n.listKey(o),e){case"metalSheets":(h=>{l.primary=(h.data.press>=0?`[P${h.data.press}] `:"")+n.listKey(h),l.secondary=`${h.data.table.data.length} Einträge`})(o);break;default:l.secondary=`${o.data.length} Einträge`}l.allowDeletion=!0})},!0)}};ne=Qu([Se("pg-app")],ne);var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?td(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ed(e,t,s),s};let Xe=class extends Ae{createRenderRoot(){return this}render(){let r=!1;return re`
            <ui-flex-grid-row>
                <ui-flex-grid-item>
                    <ui-label
                        role="button"
                        style="cursor: pointer;"
                        primary="${this.primary||""}"
                        secondary="${this.secondary||""}"
                        ripple
                        @click=${async()=>{if(r)return;r=!0;const e=new dl;e.id="pageLoadSpinner",document.querySelector("pg-app").appendChild(e),setTimeout(async()=>{try{await this.setStackLayoutPage(),ne.queryDrawer().open=!1}finally{r=!1,setTimeout(()=>{var t;(t=e.parentElement)==null||t.removeChild(e)})}})}}
                    ></ui-label>
                </ui-flex-grid-item>

                ${this.allowDeletion?re`<ui-flex-grid-item
                          name="delete"
                          class="flex align-center justify-center"
                          flex="0"
                      >
                          <ui-icon-button
                              style="height: 100%"
                              color="destructive"
                              ghost
                              ripple
                              @click=${async()=>{r||(r=!0,setTimeout(async()=>{try{await this.deleteStoreData()}finally{r=!1}}))}}
                          >
                              ${ze.smoothieLineIcons.trash}
                          </ui-icon-button>
                      </ui-flex-grid-item>`:""}
            </ui-flex-grid-row>
        `}async setStackLayoutPage(){if(!this.storeKey)return;const r=be(this.storeKey),e=ne.queryStore().getData(this.storeKey),t=e==null?void 0:e.find(s=>r.listKey(s)===this.storeListKey);if(t===void 0)throw new Error(`Data undefined for "${this.storeListKey}" in "${this.storeKey}"`);const i=ne.queryStackLayout();i.clearStack(),i.setPage(this.storeKey,async s=>{const n=s.children[0];n!==void 0&&(n.data=t)})}async deleteStoreData(){if(!(!this.storeKey||!this.storeListKey))switch(this.storeKey){case"alertLists":case"metalSheets":case"vis":case"visBookmarks":case"visData":if(confirm(`Möchten Sie "${this.storeListKey}" wirklich löschen?`)){const r=be(this.storeKey);ne.queryStore().updateData(this.storeKey,e=>e.filter(t=>r.listKey(t)!==this.storeListKey))}}}};jt([pe({type:String,attribute:"store-key",reflect:!0})],Xe.prototype,"storeKey",2);jt([pe({type:String,attribute:"store-list-key",reflect:!0})],Xe.prototype,"storeListKey",2);jt([pe({type:String,attribute:"primary",reflect:!0})],Xe.prototype,"primary",2);jt([pe({type:String,attribute:"secondary",reflect:!0})],Xe.prototype,"secondary",2);jt([pe({type:Boolean,attribute:"allow-deletion",reflect:!0})],Xe.prototype,"allowDeletion",2);Xe=jt([Se("pg-drawer-item")],Xe);var rd=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,Jr=(r,e,t,i)=>{for(var s=i>1?void 0:i?sd(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&rd(e,t,s),s};let ar=class extends Ae{constructor(){super(...arguments),this.revision=0,this.gistID="",this.cleanup=new qe}createRenderRoot(){return this}render(){return ae`
            <ui-flex-grid>
                <ui-flex-grid-item direction="column" align="flex-start">
                    <ui-text mono="1" size="0.85rem">${this.gistID||ae`???`}</ui-text>
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
                        @click=${async()=>{if(this.storeKey)try{this.startSpinner(),confirm("Alle Ihre Änderungen gehen verloren!")&&(await qo(this.storeKey,this.gistID),ne.queryStackLayout().clearStack())}finally{this.stopSpinner()}}}
                    >
                        Aktualisieren
                    </ui-button>
                </ui-flex-grid-item>
            </ui-flex-grid>

            <ui-spinner
                style="${Ft({position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"none"})}"
            ></ui-spinner>
        `}connectedCallback(){super.connectedCallback();const r=ne.queryStore();this.cleanup.add(r.addListener("gist",e=>{if(!this.storeKey)return;const t=be(this.storeKey),i=e[t.key()];i!==void 0&&(this.gistID=i.id,this.revision=i.revision)},!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}startSpinner(){this.querySelector("ui-spinner").style.display="block"}stopSpinner(){this.querySelector("ui-spinner").style.display="none"}};Jr([pe({type:String,attribute:"store-key",reflect:!0})],ar.prototype,"storeKey",2);Jr([pe({type:Number,attribute:!1,reflect:!0})],ar.prototype,"revision",2);Jr([pe({type:String,attribute:!1,reflect:!0})],ar.prototype,"gistID",2);ar=Jr([Se("pg-drawer-item-gist")],ar);var en={exports:{}};(function(r,e){(function(t,i){i()})(Ue,function(){function t(h,m){return typeof m>"u"?m={autoBom:!1}:typeof m!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),m={autoBom:!m}),m.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function i(h,m,u){var v=new XMLHttpRequest;v.open("GET",h),v.responseType="blob",v.onload=function(){l(v.response,m,u)},v.onerror=function(){console.error("could not download file")},v.send()}function s(h){var m=new XMLHttpRequest;m.open("HEAD",h,!1);try{m.send()}catch{}return 200<=m.status&&299>=m.status}function n(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var m=document.createEvent("MouseEvents");m.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(m)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ue=="object"&&Ue.global===Ue?Ue:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(h,m,u){var v=o.URL||o.webkitURL,p=document.createElement("a");m=m||h.name||"download",p.download=m,p.rel="noopener",typeof h=="string"?(p.href=h,p.origin===location.origin?n(p):s(p.href)?i(h,m,u):n(p,p.target="_blank")):(p.href=v.createObjectURL(h),setTimeout(function(){v.revokeObjectURL(p.href)},4e4),setTimeout(function(){n(p)},0))}:"msSaveOrOpenBlob"in navigator?function(h,m,u){if(m=m||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(t(h,u),m);else if(s(h))i(h,m,u);else{var v=document.createElement("a");v.href=h,v.target="_blank",setTimeout(function(){n(v)})}}:function(h,m,u,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof h=="string")return i(h,m,u);var p=h.type==="application/octet-stream",b=/constructor/i.test(o.HTMLElement)||o.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||p&&b||a)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var S=g.result;S=f?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=S:location=S,v=null},g.readAsDataURL(h)}else{var y=o.URL||o.webkitURL,k=y.createObjectURL(h);v?v.location=k:location.href=k,v=null,setTimeout(function(){y.revokeObjectURL(k)},4e4)}});o.saveAs=l.saveAs=l,r.exports=l})})(en);var id=en.exports;const od=Vs(id);function _r(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var tn={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(r,e){(function(t){r.exports=t()})(function(){return function t(i,s,n){function o(h,m){if(!s[h]){if(!i[h]){var u=typeof _r=="function"&&_r;if(!m&&u)return u(h,!0);if(a)return a(h,!0);var v=new Error("Cannot find module '"+h+"'");throw v.code="MODULE_NOT_FOUND",v}var p=s[h]={exports:{}};i[h][0].call(p.exports,function(b){var f=i[h][1][b];return o(f||b)},p,p.exports,t,i,s,n)}return s[h].exports}for(var a=typeof _r=="function"&&_r,l=0;l<n.length;l++)o(n[l]);return o}({1:[function(t,i,s){var n=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(l){for(var h,m,u,v,p,b,f,g=[],y=0,k=l.length,S=k,P=n.getTypeOf(l)!=="string";y<l.length;)S=k-y,u=P?(h=l[y++],m=y<k?l[y++]:0,y<k?l[y++]:0):(h=l.charCodeAt(y++),m=y<k?l.charCodeAt(y++):0,y<k?l.charCodeAt(y++):0),v=h>>2,p=(3&h)<<4|m>>4,b=1<S?(15&m)<<2|u>>6:64,f=2<S?63&u:64,g.push(a.charAt(v)+a.charAt(p)+a.charAt(b)+a.charAt(f));return g.join("")},s.decode=function(l){var h,m,u,v,p,b,f=0,g=0,y="data:";if(l.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var k,S=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&S--,l.charAt(l.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=o.uint8array?new Uint8Array(0|S):new Array(0|S);f<l.length;)h=a.indexOf(l.charAt(f++))<<2|(v=a.indexOf(l.charAt(f++)))>>4,m=(15&v)<<4|(p=a.indexOf(l.charAt(f++)))>>2,u=(3&p)<<6|(b=a.indexOf(l.charAt(f++))),k[g++]=h,p!==64&&(k[g++]=m),b!==64&&(k[g++]=u);return k}},{"./support":30,"./utils":32}],2:[function(t,i,s){var n=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function h(m,u,v,p,b){this.compressedSize=m,this.uncompressedSize=u,this.crc32=v,this.compression=p,this.compressedContent=b}h.prototype={getContentWorker:function(){var m=new o(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return m.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),m},getCompressedWorker:function(){return new o(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(m,u,v){return m.pipe(new a).pipe(new l("uncompressedSize")).pipe(u.compressWorker(v)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},i.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,s){var n=t("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},s.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,s){var n=t("./utils"),o=function(){for(var a,l=[],h=0;h<256;h++){a=h;for(var m=0;m<8;m++)a=1&a?3988292384^a>>>1:a>>>1;l[h]=a}return l}();i.exports=function(a,l){return a!==void 0&&a.length?n.getTypeOf(a)!=="string"?function(h,m,u,v){var p=o,b=v+u;h^=-1;for(var f=v;f<b;f++)h=h>>>8^p[255&(h^m[f])];return-1^h}(0|l,a,a.length,0):function(h,m,u,v){var p=o,b=v+u;h^=-1;for(var f=v;f<b;f++)h=h>>>8^p[255&(h^m.charCodeAt(f))];return-1^h}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(t,i,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(t,i,s){var n=null;n=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:n}},{lie:37}],7:[function(t,i,s){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),l=t("./stream/GenericWorker"),h=n?"uint8array":"array";function m(u,v){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=v,this.meta={}}s.magic="\b\0",a.inherits(m,l),m.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,u.data),!1)},m.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},m.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},m.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(v){u.push({data:v,meta:u.meta})}},s.compressWorker=function(u){return new m("Deflate",u)},s.uncompressWorker=function(){return new m("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,s){function n(p,b){var f,g="";for(f=0;f<b;f++)g+=String.fromCharCode(255&p),p>>>=8;return g}function o(p,b,f,g,y,k){var S,P,C=p.file,B=p.compression,F=k!==h.utf8encode,V=a.transformTo("string",k(C.name)),G=a.transformTo("string",h.utf8encode(C.name)),X=C.comment,ce=a.transformTo("string",k(X)),T=a.transformTo("string",h.utf8encode(X)),I=G.length!==C.name.length,d=T.length!==X.length,z="",de="",H="",he=C.dir,K=C.date,ue={crc32:0,compressedSize:0,uncompressedSize:0};b&&!f||(ue.crc32=p.crc32,ue.compressedSize=p.compressedSize,ue.uncompressedSize=p.uncompressedSize);var D=0;b&&(D|=8),F||!I&&!d||(D|=2048);var R=0,le=0;he&&(R|=16),y==="UNIX"?(le=798,R|=function(Q,ke){var Pe=Q;return Q||(Pe=ke?16893:33204),(65535&Pe)<<16}(C.unixPermissions,he)):(le=20,R|=function(Q){return 63&(Q||0)}(C.dosPermissions)),S=K.getUTCHours(),S<<=6,S|=K.getUTCMinutes(),S<<=5,S|=K.getUTCSeconds()/2,P=K.getUTCFullYear()-1980,P<<=4,P|=K.getUTCMonth()+1,P<<=5,P|=K.getUTCDate(),I&&(de=n(1,1)+n(m(V),4)+G,z+="up"+n(de.length,2)+de),d&&(H=n(1,1)+n(m(ce),4)+T,z+="uc"+n(H.length,2)+H);var ee="";return ee+=`
\0`,ee+=n(D,2),ee+=B.magic,ee+=n(S,2),ee+=n(P,2),ee+=n(ue.crc32,4),ee+=n(ue.compressedSize,4),ee+=n(ue.uncompressedSize,4),ee+=n(V.length,2),ee+=n(z.length,2),{fileRecord:u.LOCAL_FILE_HEADER+ee+V+z,dirRecord:u.CENTRAL_FILE_HEADER+n(le,2)+ee+n(ce.length,2)+"\0\0\0\0"+n(R,4)+n(g,4)+V+z+ce}}var a=t("../utils"),l=t("../stream/GenericWorker"),h=t("../utf8"),m=t("../crc32"),u=t("../signature");function v(p,b,f,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=f,this.encodeFileName=g,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(v,l),v.prototype.push=function(p){var b=p.meta.percent||0,f=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:f?(b+100*(f-g-1))/f:100}}))},v.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var b=this.streamFiles&&!p.file.dir;if(b){var f=o(p,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(p){this.accumulate=!1;var b=this.streamFiles&&!p.file.dir,f=o(p,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),b)this.push({data:function(g){return u.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var p=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var f=this.bytesWritten-p,g=function(y,k,S,P,C){var B=a.transformTo("string",C(P));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(y,2)+n(y,2)+n(k,4)+n(S,4)+n(B.length,2)+B}(this.dirRecords.length,f,p,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(p){this._sources.push(p);var b=this;return p.on("data",function(f){b.processChunk(f)}),p.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),p.on("error",function(f){b.error(f)}),this},v.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(p){var b=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var f=0;f<b.length;f++)try{b[f].error(p)}catch{}return!0},v.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,b=0;b<p.length;b++)p[b].lock()},i.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,s){var n=t("../compressions"),o=t("./ZipFileWorker");s.generateWorker=function(a,l,h){var m=new o(l.streamFiles,h,l.platform,l.encodeFileName),u=0;try{a.forEach(function(v,p){u++;var b=function(k,S){var P=k||S,C=n[P];if(!C)throw new Error(P+" is not a valid compression method !");return C}(p.options.compression,l.compression),f=p.options.compressionOptions||l.compressionOptions||{},g=p.dir,y=p.date;p._compressWorker(b,f).withStreamInfo("file",{name:v,dir:g,date:y,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(m)}),m.entriesCount=u}catch(v){m.error(v)}return m}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,s){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new n;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(n.prototype=t("./object")).loadAsync=t("./load"),n.support=t("./support"),n.defaults=t("./defaults"),n.version="3.10.1",n.loadAsync=function(o,a){return new n().loadAsync(o,a)},n.external=t("./external"),i.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,s){var n=t("./utils"),o=t("./external"),a=t("./utf8"),l=t("./zipEntries"),h=t("./stream/Crc32Probe"),m=t("./nodejsUtils");function u(v){return new o.Promise(function(p,b){var f=v.decompressed.getContentWorker().pipe(new h);f.on("error",function(g){b(g)}).on("end",function(){f.streamInfo.crc32!==v.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(v,p){var b=this;return p=n.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),m.isNode&&m.isStream(v)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",v,!0,p.optimizedBinaryString,p.base64).then(function(f){var g=new l(p);return g.load(f),g}).then(function(f){var g=[o.Promise.resolve(f)],y=f.files;if(p.checkCRC32)for(var k=0;k<y.length;k++)g.push(u(y[k]));return o.Promise.all(g)}).then(function(f){for(var g=f.shift(),y=g.files,k=0;k<y.length;k++){var S=y[k],P=S.fileNameStr,C=n.resolve(S.fileNameStr);b.file(C,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:p.createFolders}),S.dir||(b.file(C).unsafeOriginalName=P)}return g.zipComment.length&&(b.comment=g.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,s){var n=t("../utils"),o=t("../stream/GenericWorker");function a(l,h){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(h)}n.inherits(a,o),a.prototype._bindStream=function(l){var h=this;(this._stream=l).pause(),l.on("data",function(m){h.push({data:m,meta:{percent:0}})}).on("error",function(m){h.isPaused?this.generatedError=m:h.error(m)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,s){var n=t("readable-stream").Readable;function o(a,l,h){n.call(this,l),this._helper=a;var m=this;a.on("data",function(u,v){m.push(u)||m._helper.pause(),h&&h(v)}).on("error",function(u){m.emit("error",u)}).on("end",function(){m.push(null)})}t("../utils").inherits(o,n),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,i,s){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,o);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,o)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var o=new Buffer(n);return o.fill(0),o},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(t,i,s){function n(C,B,F){var V,G=a.getTypeOf(B),X=a.extend(F||{},m);X.date=X.date||new Date,X.compression!==null&&(X.compression=X.compression.toUpperCase()),typeof X.unixPermissions=="string"&&(X.unixPermissions=parseInt(X.unixPermissions,8)),X.unixPermissions&&16384&X.unixPermissions&&(X.dir=!0),X.dosPermissions&&16&X.dosPermissions&&(X.dir=!0),X.dir&&(C=y(C)),X.createFolders&&(V=g(C))&&k.call(this,V,!0);var ce=G==="string"&&X.binary===!1&&X.base64===!1;F&&F.binary!==void 0||(X.binary=!ce),(B instanceof u&&B.uncompressedSize===0||X.dir||!B||B.length===0)&&(X.base64=!1,X.binary=!0,B="",X.compression="STORE",G="string");var T=null;T=B instanceof u||B instanceof l?B:b.isNode&&b.isStream(B)?new f(C,B):a.prepareContent(C,B,X.binary,X.optimizedBinaryString,X.base64);var I=new v(C,T,X);this.files[C]=I}var o=t("./utf8"),a=t("./utils"),l=t("./stream/GenericWorker"),h=t("./stream/StreamHelper"),m=t("./defaults"),u=t("./compressedObject"),v=t("./zipObject"),p=t("./generate"),b=t("./nodejsUtils"),f=t("./nodejs/NodejsStreamInputAdapter"),g=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var B=C.lastIndexOf("/");return 0<B?C.substring(0,B):""},y=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},k=function(C,B){return B=B!==void 0?B:m.createFolders,C=y(C),this.files[C]||n.call(this,C,null,{dir:!0,createFolders:B}),this.files[C]};function S(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var P={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var B,F,V;for(B in this.files)V=this.files[B],(F=B.slice(this.root.length,B.length))&&B.slice(0,this.root.length)===this.root&&C(F,V)},filter:function(C){var B=[];return this.forEach(function(F,V){C(F,V)&&B.push(V)}),B},file:function(C,B,F){if(arguments.length!==1)return C=this.root+C,n.call(this,C,B,F),this;if(S(C)){var V=C;return this.filter(function(X,ce){return!ce.dir&&V.test(X)})}var G=this.files[this.root+C];return G&&!G.dir?G:null},folder:function(C){if(!C)return this;if(S(C))return this.filter(function(G,X){return X.dir&&C.test(G)});var B=this.root+C,F=k.call(this,B),V=this.clone();return V.root=F.name,V},remove:function(C){C=this.root+C;var B=this.files[C];if(B||(C.slice(-1)!=="/"&&(C+="/"),B=this.files[C]),B&&!B.dir)delete this.files[C];else for(var F=this.filter(function(G,X){return X.name.slice(0,C.length)===C}),V=0;V<F.length;V++)delete this.files[F[V].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var B,F={};try{if((F=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=F.type.toLowerCase(),F.compression=F.compression.toUpperCase(),F.type==="binarystring"&&(F.type="string"),!F.type)throw new Error("No output type specified.");a.checkSupport(F.type),F.platform!=="darwin"&&F.platform!=="freebsd"&&F.platform!=="linux"&&F.platform!=="sunos"||(F.platform="UNIX"),F.platform==="win32"&&(F.platform="DOS");var V=F.comment||this.comment||"";B=p.generateWorker(this,F,V)}catch(G){(B=new l("error")).error(G)}return new h(B,F.type||"string",F.mimeType)},generateAsync:function(C,B){return this.generateInternalStream(C).accumulate(B)},generateNodeStream:function(C,B){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(B)}};i.exports=P},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,s){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,s){var n=t("./DataReader");function o(a){n.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}t("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),h=a.charCodeAt(1),m=a.charCodeAt(2),u=a.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===l&&this.data[v+1]===h&&this.data[v+2]===m&&this.data[v+3]===u)return v-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),h=a.charCodeAt(1),m=a.charCodeAt(2),u=a.charCodeAt(3),v=this.readData(4);return l===v[0]&&h===v[1]&&m===v[2]&&u===v[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,i,s){var n=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,h=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)h=(h<<8)+this.byteAt(l);return this.index+=a,h},readString:function(a){return n.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(t,i,s){var n=t("./Uint8ArrayReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,s){var n=t("./DataReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,i,s){var n=t("./ArrayReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,s){var n=t("../utils"),o=t("../support"),a=t("./ArrayReader"),l=t("./StringReader"),h=t("./NodeBufferReader"),m=t("./Uint8ArrayReader");i.exports=function(u){var v=n.getTypeOf(u);return n.checkSupport(v),v!=="string"||o.uint8array?v==="nodebuffer"?new h(u):o.uint8array?new m(n.transformTo("uint8array",u)):new a(n.transformTo("array",u)):new l(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,s){var n=t("./GenericWorker"),o=t("../utils");function a(l){n.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,n),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,s){var n=t("./GenericWorker"),o=t("../crc32");function a(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,n),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,s){var n=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}n.inherits(a,o),a.prototype.processChunk=function(l){if(l){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+l.data.length}o.prototype.processChunk.call(this,l)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,s){var n=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(m){h.dataIsReady=!0,h.data=m,h.max=m&&m.length||0,h.type=n.getTypeOf(m),h.isPaused||h._tickAndRepeat()},function(m){h.error(m)})}n.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,h);break;case"uint8array":l=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":l=this.data.slice(this.index,h)}return this.index=h,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,s){function n(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=n},{}],29:[function(t,i,s){var n=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),l=t("../base64"),h=t("../support"),m=t("../external"),u=null;if(h.nodestream)try{u=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(b,f){return new m.Promise(function(g,y){var k=[],S=b._internalType,P=b._outputType,C=b._mimeType;b.on("data",function(B,F){k.push(B),f&&f(F)}).on("error",function(B){k=[],y(B)}).on("end",function(){try{var B=function(F,V,G){switch(F){case"blob":return n.newBlob(n.transformTo("arraybuffer",V),G);case"base64":return l.encode(V);default:return n.transformTo(F,V)}}(P,function(F,V){var G,X=0,ce=null,T=0;for(G=0;G<V.length;G++)T+=V[G].length;switch(F){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(ce=new Uint8Array(T),G=0;G<V.length;G++)ce.set(V[G],X),X+=V[G].length;return ce;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+F+"'")}}(S,k),C);g(B)}catch(F){y(F)}k=[]}).resume()})}function p(b,f,g){var y=f;switch(f){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string"}try{this._internalType=y,this._outputType=f,this._mimeType=g,n.checkSupport(y),this._worker=b.pipe(new o(y)),b.lock()}catch(k){this._worker=new a("error"),this._worker.error(k)}}p.prototype={accumulate:function(b){return v(this,b)},on:function(b,f){var g=this;return b==="data"?this._worker.on(b,function(y){f.call(g,y.data,y.meta)}):this._worker.on(b,function(){n.delay(f,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},b)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var n=new ArrayBuffer(0);try{s.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(n),s.blob=o.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!t("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,s){for(var n=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),l=t("./stream/GenericWorker"),h=new Array(256),m=0;m<256;m++)h[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;h[254]=h[254]=1;function u(){l.call(this,"utf-8 decode"),this.leftOver=null}function v(){l.call(this,"utf-8 encode")}s.utf8encode=function(p){return o.nodebuffer?a.newBufferFrom(p,"utf-8"):function(b){var f,g,y,k,S,P=b.length,C=0;for(k=0;k<P;k++)(64512&(g=b.charCodeAt(k)))==55296&&k+1<P&&(64512&(y=b.charCodeAt(k+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),k++),C+=g<128?1:g<2048?2:g<65536?3:4;for(f=o.uint8array?new Uint8Array(C):new Array(C),k=S=0;S<C;k++)(64512&(g=b.charCodeAt(k)))==55296&&k+1<P&&(64512&(y=b.charCodeAt(k+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),k++),g<128?f[S++]=g:(g<2048?f[S++]=192|g>>>6:(g<65536?f[S++]=224|g>>>12:(f[S++]=240|g>>>18,f[S++]=128|g>>>12&63),f[S++]=128|g>>>6&63),f[S++]=128|63&g);return f}(p)},s.utf8decode=function(p){return o.nodebuffer?n.transformTo("nodebuffer",p).toString("utf-8"):function(b){var f,g,y,k,S=b.length,P=new Array(2*S);for(f=g=0;f<S;)if((y=b[f++])<128)P[g++]=y;else if(4<(k=h[y]))P[g++]=65533,f+=k-1;else{for(y&=k===2?31:k===3?15:7;1<k&&f<S;)y=y<<6|63&b[f++],k--;1<k?P[g++]=65533:y<65536?P[g++]=y:(y-=65536,P[g++]=55296|y>>10&1023,P[g++]=56320|1023&y)}return P.length!==g&&(P.subarray?P=P.subarray(0,g):P.length=g),n.applyFromCharCode(P)}(p=n.transformTo(o.uint8array?"uint8array":"array",p))},n.inherits(u,l),u.prototype.processChunk=function(p){var b=n.transformTo(o.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var f=b;(b=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),b.set(f,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var g=function(k,S){var P;for((S=S||k.length)>k.length&&(S=k.length),P=S-1;0<=P&&(192&k[P])==128;)P--;return P<0||P===0?S:P+h[k[P]]>S?P:S}(b),y=b;g!==b.length&&(o.uint8array?(y=b.subarray(0,g),this.leftOver=b.subarray(g,b.length)):(y=b.slice(0,g),this.leftOver=b.slice(g,b.length))),this.push({data:s.utf8decode(y),meta:p.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=u,n.inherits(v,l),v.prototype.processChunk=function(p){this.push({data:s.utf8encode(p.data),meta:p.meta})},s.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,s){var n=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),l=t("./external");function h(f){return f}function m(f,g){for(var y=0;y<f.length;++y)g[y]=255&f.charCodeAt(y);return g}t("setimmediate"),s.newBlob=function(f,g){s.checkSupport("blob");try{return new Blob([f],{type:g})}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return y.append(f),y.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(f,g,y){var k=[],S=0,P=f.length;if(P<=y)return String.fromCharCode.apply(null,f);for(;S<P;)g==="array"||g==="nodebuffer"?k.push(String.fromCharCode.apply(null,f.slice(S,Math.min(S+y,P)))):k.push(String.fromCharCode.apply(null,f.subarray(S,Math.min(S+y,P)))),S+=y;return k.join("")},stringifyByChar:function(f){for(var g="",y=0;y<f.length;y++)g+=String.fromCharCode(f[y]);return g},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function v(f){var g=65536,y=s.getTypeOf(f),k=!0;if(y==="uint8array"?k=u.applyCanBeUsed.uint8array:y==="nodebuffer"&&(k=u.applyCanBeUsed.nodebuffer),k)for(;1<g;)try{return u.stringifyByChunk(f,y,g)}catch{g=Math.floor(g/2)}return u.stringifyByChar(f)}function p(f,g){for(var y=0;y<f.length;y++)g[y]=f[y];return g}s.applyFromCharCode=v;var b={};b.string={string:h,array:function(f){return m(f,new Array(f.length))},arraybuffer:function(f){return b.string.uint8array(f).buffer},uint8array:function(f){return m(f,new Uint8Array(f.length))},nodebuffer:function(f){return m(f,a.allocBuffer(f.length))}},b.array={string:v,array:h,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return a.newBufferFrom(f)}},b.arraybuffer={string:function(f){return v(new Uint8Array(f))},array:function(f){return p(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:h,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return a.newBufferFrom(new Uint8Array(f))}},b.uint8array={string:v,array:function(f){return p(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:h,nodebuffer:function(f){return a.newBufferFrom(f)}},b.nodebuffer={string:v,array:function(f){return p(f,new Array(f.length))},arraybuffer:function(f){return b.nodebuffer.uint8array(f).buffer},uint8array:function(f){return p(f,new Uint8Array(f.length))},nodebuffer:h},s.transformTo=function(f,g){if(g=g||"",!f)return g;s.checkSupport(f);var y=s.getTypeOf(g);return b[y][f](g)},s.resolve=function(f){for(var g=f.split("/"),y=[],k=0;k<g.length;k++){var S=g[k];S==="."||S===""&&k!==0&&k!==g.length-1||(S===".."?y.pop():y.push(S))}return y.join("/")},s.getTypeOf=function(f){return typeof f=="string"?"string":Object.prototype.toString.call(f)==="[object Array]"?"array":n.nodebuffer&&a.isBuffer(f)?"nodebuffer":n.uint8array&&f instanceof Uint8Array?"uint8array":n.arraybuffer&&f instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(f){if(!n[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(f){var g,y,k="";for(y=0;y<(f||"").length;y++)k+="\\x"+((g=f.charCodeAt(y))<16?"0":"")+g.toString(16).toUpperCase();return k},s.delay=function(f,g,y){setImmediate(function(){f.apply(y||null,g||[])})},s.inherits=function(f,g){function y(){}y.prototype=g.prototype,f.prototype=new y},s.extend=function(){var f,g,y={};for(f=0;f<arguments.length;f++)for(g in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],g)&&y[g]===void 0&&(y[g]=arguments[f][g]);return y},s.prepareContent=function(f,g,y,k,S){return l.Promise.resolve(g).then(function(P){return n.blob&&(P instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(P))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,B){var F=new FileReader;F.onload=function(V){C(V.target.result)},F.onerror=function(V){B(V.target.error)},F.readAsArrayBuffer(P)}):P}).then(function(P){var C=s.getTypeOf(P);return C?(C==="arraybuffer"?P=s.transformTo("uint8array",P):C==="string"&&(S?P=o.decode(P):y&&k!==!0&&(P=function(B){return m(B,n.uint8array?new Uint8Array(B.length):new Array(B.length))}(P))),P):l.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,s){var n=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),l=t("./zipEntry"),h=t("./support");function m(u){this.files=[],this.loadOptions=u}m.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(v)+", expected "+o.pretty(u)+")")}},isSignature:function(u,v){var p=this.reader.index;this.reader.setIndex(u);var b=this.reader.readString(4)===v;return this.reader.setIndex(p),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),v=h.uint8array?"uint8array":"array",p=o.transformTo(v,u);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,v,p,b=this.zip64EndOfCentralSize-44;0<b;)u=this.reader.readInt(2),v=this.reader.readInt(4),p=this.reader.readData(v),this.zip64ExtensibleData[u]={id:u,length:v,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,v;for(u=0;u<this.files.length;u++)v=this.files[u],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(u=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var v=u;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var b=v-p;if(0<b)this.isSignature(v,a.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(u){this.reader=n(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=m},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,s){var n=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),l=t("./crc32"),h=t("./utf8"),m=t("./compressions"),u=t("./support");function v(p,b){this.options=p,this.loadOptions=b}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var b,f;if(p.skip(22),this.fileNameLength=p.readInt(2),f=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=function(g){for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)&&m[y].magic===g)return m[y];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,b,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var b=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(b),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=n(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var b,f,g,y=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<y;)b=p.readInt(2),f=p.readInt(2),g=p.readData(f),this.extraFields[b]={id:b,length:f,value:g};p.setIndex(y)},handleUTF8:function(){var p=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var f=o.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var y=o.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(y)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var b=n(p.value);return b.readInt(1)!==1||l(this.fileName)!==b.readInt(4)?null:h.utf8decode(b.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var b=n(p.value);return b.readInt(1)!==1||l(this.fileComment)!==b.readInt(4)?null:h.utf8decode(b.readData(p.length-5))}return null}},i.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,s){function n(b,f,g){this.name=b,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=f,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),l=t("./utf8"),h=t("./compressedObject"),m=t("./stream/GenericWorker");n.prototype={internalStream:function(b){var f=null,g="string";try{if(!b)throw new Error("No output type specified.");var y=(g=b.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),f=this._decompressWorker();var k=!this._dataBinary;k&&!y&&(f=f.pipe(new l.Utf8EncodeWorker)),!k&&y&&(f=f.pipe(new l.Utf8DecodeWorker))}catch(S){(f=new m("error")).error(S)}return new o(f,g,"")},async:function(b,f){return this.internalStream(b).accumulate(f)},nodeStream:function(b,f){return this.internalStream(b||"nodebuffer").toNodejsStream(f)},_compressWorker:function(b,f){if(this._data instanceof h&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),h.createWorkerFrom(g,b,f)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof m?this._data:new a(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<u.length;p++)n.prototype[u[p]]=v;i.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,s){(function(n){var o,a,l=n.MutationObserver||n.WebKitMutationObserver;if(l){var h=0,m=new l(b),u=n.document.createTextNode("");m.observe(u,{characterData:!0}),o=function(){u.data=h=++h%2}}else if(n.setImmediate||n.MessageChannel===void 0)o="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var f=n.document.createElement("script");f.onreadystatechange=function(){b(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},n.document.documentElement.appendChild(f)}:function(){setTimeout(b,0)};else{var v=new n.MessageChannel;v.port1.onmessage=b,o=function(){v.port2.postMessage(0)}}var p=[];function b(){var f,g;a=!0;for(var y=p.length;y;){for(g=p,p=[],f=-1;++f<y;)g[f]();y=p.length}a=!1}i.exports=function(f){p.push(f)!==1||a||o()}}).call(this,typeof Ue<"u"?Ue:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,s){var n=t("immediate");function o(){}var a={},l=["REJECTED"],h=["FULFILLED"],m=["PENDING"];function u(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,y!==o&&f(this,y)}function v(y,k,S){this.promise=y,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function p(y,k,S){n(function(){var P;try{P=k(S)}catch(C){return a.reject(y,C)}P===y?a.reject(y,new TypeError("Cannot resolve promise with itself")):a.resolve(y,P)})}function b(y){var k=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof k=="function")return function(){k.apply(y,arguments)}}function f(y,k){var S=!1;function P(F){S||(S=!0,a.reject(y,F))}function C(F){S||(S=!0,a.resolve(y,F))}var B=g(function(){k(C,P)});B.status==="error"&&P(B.value)}function g(y,k){var S={};try{S.value=y(k),S.status="success"}catch(P){S.status="error",S.value=P}return S}(i.exports=u).prototype.finally=function(y){if(typeof y!="function")return this;var k=this.constructor;return this.then(function(S){return k.resolve(y()).then(function(){return S})},function(S){return k.resolve(y()).then(function(){throw S})})},u.prototype.catch=function(y){return this.then(null,y)},u.prototype.then=function(y,k){if(typeof y!="function"&&this.state===h||typeof k!="function"&&this.state===l)return this;var S=new this.constructor(o);return this.state!==m?p(S,this.state===h?y:k,this.outcome):this.queue.push(new v(S,y,k)),S},v.prototype.callFulfilled=function(y){a.resolve(this.promise,y)},v.prototype.otherCallFulfilled=function(y){p(this.promise,this.onFulfilled,y)},v.prototype.callRejected=function(y){a.reject(this.promise,y)},v.prototype.otherCallRejected=function(y){p(this.promise,this.onRejected,y)},a.resolve=function(y,k){var S=g(b,k);if(S.status==="error")return a.reject(y,S.value);var P=S.value;if(P)f(y,P);else{y.state=h,y.outcome=k;for(var C=-1,B=y.queue.length;++C<B;)y.queue[C].callFulfilled(k)}return y},a.reject=function(y,k){y.state=l,y.outcome=k;for(var S=-1,P=y.queue.length;++S<P;)y.queue[S].callRejected(k);return y},u.resolve=function(y){return y instanceof this?y:a.resolve(new this(o),y)},u.reject=function(y){var k=new this(o);return a.reject(k,y)},u.all=function(y){var k=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=y.length,P=!1;if(!S)return this.resolve([]);for(var C=new Array(S),B=0,F=-1,V=new this(o);++F<S;)G(y[F],F);return V;function G(X,ce){k.resolve(X).then(function(T){C[ce]=T,++B!==S||P||(P=!0,a.resolve(V,C))},function(T){P||(P=!0,a.reject(V,T))})}},u.race=function(y){var k=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=y.length,P=!1;if(!S)return this.resolve([]);for(var C=-1,B=new this(o);++C<S;)F=y[C],k.resolve(F).then(function(V){P||(P=!0,a.resolve(B,V))},function(V){P||(P=!0,a.reject(B,V))});var F;return B}},{immediate:36}],38:[function(t,i,s){var n={};(0,t("./lib/utils/common").assign)(n,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,s){var n=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/messages"),h=t("./zlib/zstream"),m=Object.prototype.toString,u=0,v=-1,p=0,b=8;function f(y){if(!(this instanceof f))return new f(y);this.options=o.assign({level:v,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},y||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var S=n.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(S!==u)throw new Error(l[S]);if(k.header&&n.deflateSetHeader(this.strm,k.header),k.dictionary){var P;if(P=typeof k.dictionary=="string"?a.string2buf(k.dictionary):m.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(S=n.deflateSetDictionary(this.strm,P))!==u)throw new Error(l[S]);this._dict_set=!0}}function g(y,k){var S=new f(k);if(S.push(y,!0),S.err)throw S.msg||l[S.err];return S.result}f.prototype.push=function(y,k){var S,P,C=this.strm,B=this.options.chunkSize;if(this.ended)return!1;P=k===~~k?k:k===!0?4:0,typeof y=="string"?C.input=a.string2buf(y):m.call(y)==="[object ArrayBuffer]"?C.input=new Uint8Array(y):C.input=y,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(B),C.next_out=0,C.avail_out=B),(S=n.deflate(C,P))!==1&&S!==u)return this.onEnd(S),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||P!==4&&P!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&S!==1);return P===4?(S=n.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===u):P!==2||(this.onEnd(u),!(C.avail_out=0))},f.prototype.onData=function(y){this.chunks.push(y)},f.prototype.onEnd=function(y){y===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},s.Deflate=f,s.deflate=g,s.deflateRaw=function(y,k){return(k=k||{}).raw=!0,g(y,k)},s.gzip=function(y,k){return(k=k||{}).gzip=!0,g(y,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,s){var n=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/constants"),h=t("./zlib/messages"),m=t("./zlib/zstream"),u=t("./zlib/gzheader"),v=Object.prototype.toString;function p(f){if(!(this instanceof p))return new p(f);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},f||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||f&&f.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&!(15&g.windowBits)&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var y=n.inflateInit2(this.strm,g.windowBits);if(y!==l.Z_OK)throw new Error(h[y]);this.header=new u,n.inflateGetHeader(this.strm,this.header)}function b(f,g){var y=new p(g);if(y.push(f,!0),y.err)throw y.msg||h[y.err];return y.result}p.prototype.push=function(f,g){var y,k,S,P,C,B,F=this.strm,V=this.options.chunkSize,G=this.options.dictionary,X=!1;if(this.ended)return!1;k=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof f=="string"?F.input=a.binstring2buf(f):v.call(f)==="[object ArrayBuffer]"?F.input=new Uint8Array(f):F.input=f,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new o.Buf8(V),F.next_out=0,F.avail_out=V),(y=n.inflate(F,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&G&&(B=typeof G=="string"?a.string2buf(G):v.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,y=n.inflateSetDictionary(this.strm,B)),y===l.Z_BUF_ERROR&&X===!0&&(y=l.Z_OK,X=!1),y!==l.Z_STREAM_END&&y!==l.Z_OK)return this.onEnd(y),!(this.ended=!0);F.next_out&&(F.avail_out!==0&&y!==l.Z_STREAM_END&&(F.avail_in!==0||k!==l.Z_FINISH&&k!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=a.utf8border(F.output,F.next_out),P=F.next_out-S,C=a.buf2string(F.output,S),F.next_out=P,F.avail_out=V-P,P&&o.arraySet(F.output,F.output,S,P,0),this.onData(C)):this.onData(o.shrinkBuf(F.output,F.next_out)))),F.avail_in===0&&F.avail_out===0&&(X=!0)}while((0<F.avail_in||F.avail_out===0)&&y!==l.Z_STREAM_END);return y===l.Z_STREAM_END&&(k=l.Z_FINISH),k===l.Z_FINISH?(y=n.inflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===l.Z_OK):k!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(F.avail_out=0))},p.prototype.onData=function(f){this.chunks.push(f)},p.prototype.onEnd=function(f){f===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},s.Inflate=p,s.inflate=b,s.inflateRaw=function(f,g){return(g=g||{}).raw=!0,b(f,g)},s.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,s){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(l){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var m=h.shift();if(m){if(typeof m!="object")throw new TypeError(m+"must be non-object");for(var u in m)m.hasOwnProperty(u)&&(l[u]=m[u])}}return l},s.shrinkBuf=function(l,h){return l.length===h?l:l.subarray?l.subarray(0,h):(l.length=h,l)};var o={arraySet:function(l,h,m,u,v){if(h.subarray&&l.subarray)l.set(h.subarray(m,m+u),v);else for(var p=0;p<u;p++)l[v+p]=h[m+p]},flattenChunks:function(l){var h,m,u,v,p,b;for(h=u=0,m=l.length;h<m;h++)u+=l[h].length;for(b=new Uint8Array(u),h=v=0,m=l.length;h<m;h++)p=l[h],b.set(p,v),v+=p.length;return b}},a={arraySet:function(l,h,m,u,v){for(var p=0;p<u;p++)l[v+p]=h[m+p]},flattenChunks:function(l){return[].concat.apply([],l)}};s.setTyped=function(l){l?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,o)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,a))},s.setTyped(n)},{}],42:[function(t,i,s){var n=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new n.Buf8(256),h=0;h<256;h++)l[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function m(u,v){if(v<65537&&(u.subarray&&a||!u.subarray&&o))return String.fromCharCode.apply(null,n.shrinkBuf(u,v));for(var p="",b=0;b<v;b++)p+=String.fromCharCode(u[b]);return p}l[254]=l[254]=1,s.string2buf=function(u){var v,p,b,f,g,y=u.length,k=0;for(f=0;f<y;f++)(64512&(p=u.charCodeAt(f)))==55296&&f+1<y&&(64512&(b=u.charCodeAt(f+1)))==56320&&(p=65536+(p-55296<<10)+(b-56320),f++),k+=p<128?1:p<2048?2:p<65536?3:4;for(v=new n.Buf8(k),f=g=0;g<k;f++)(64512&(p=u.charCodeAt(f)))==55296&&f+1<y&&(64512&(b=u.charCodeAt(f+1)))==56320&&(p=65536+(p-55296<<10)+(b-56320),f++),p<128?v[g++]=p:(p<2048?v[g++]=192|p>>>6:(p<65536?v[g++]=224|p>>>12:(v[g++]=240|p>>>18,v[g++]=128|p>>>12&63),v[g++]=128|p>>>6&63),v[g++]=128|63&p);return v},s.buf2binstring=function(u){return m(u,u.length)},s.binstring2buf=function(u){for(var v=new n.Buf8(u.length),p=0,b=v.length;p<b;p++)v[p]=u.charCodeAt(p);return v},s.buf2string=function(u,v){var p,b,f,g,y=v||u.length,k=new Array(2*y);for(p=b=0;p<y;)if((f=u[p++])<128)k[b++]=f;else if(4<(g=l[f]))k[b++]=65533,p+=g-1;else{for(f&=g===2?31:g===3?15:7;1<g&&p<y;)f=f<<6|63&u[p++],g--;1<g?k[b++]=65533:f<65536?k[b++]=f:(f-=65536,k[b++]=55296|f>>10&1023,k[b++]=56320|1023&f)}return m(k,b)},s.utf8border=function(u,v){var p;for((v=v||u.length)>u.length&&(v=u.length),p=v-1;0<=p&&(192&u[p])==128;)p--;return p<0||p===0?v:p+l[u[p]]>v?p:v}},{"./common":41}],43:[function(t,i,s){i.exports=function(n,o,a,l){for(var h=65535&n|0,m=n>>>16&65535|0,u=0;a!==0;){for(a-=u=2e3<a?2e3:a;m=m+(h=h+o[l++]|0)|0,--u;);h%=65521,m%=65521}return h|m<<16|0}},{}],44:[function(t,i,s){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,s){var n=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();i.exports=function(o,a,l,h){var m=n,u=h+l;o^=-1;for(var v=h;v<u;v++)o=o>>>8^m[255&(o^a[v])];return-1^o}},{}],46:[function(t,i,s){var n,o=t("../utils/common"),a=t("./trees"),l=t("./adler32"),h=t("./crc32"),m=t("./messages"),u=0,v=4,p=0,b=-2,f=-1,g=4,y=2,k=8,S=9,P=286,C=30,B=19,F=2*P+1,V=15,G=3,X=258,ce=X+G+1,T=42,I=113,d=1,z=2,de=3,H=4;function he(c,j){return c.msg=m[j],j}function K(c){return(c<<1)-(4<c?9:0)}function ue(c){for(var j=c.length;0<=--j;)c[j]=0}function D(c){var j=c.state,L=j.pending;L>c.avail_out&&(L=c.avail_out),L!==0&&(o.arraySet(c.output,j.pending_buf,j.pending_out,L,c.next_out),c.next_out+=L,j.pending_out+=L,c.total_out+=L,c.avail_out-=L,j.pending-=L,j.pending===0&&(j.pending_out=0))}function R(c,j){a._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,j),c.block_start=c.strstart,D(c.strm)}function le(c,j){c.pending_buf[c.pending++]=j}function ee(c,j){c.pending_buf[c.pending++]=j>>>8&255,c.pending_buf[c.pending++]=255&j}function Q(c,j){var L,E,w=c.max_chain_length,x=c.strstart,N=c.prev_length,q=c.nice_match,O=c.strstart>c.w_size-ce?c.strstart-(c.w_size-ce):0,Z=c.window,te=c.w_mask,J=c.prev,oe=c.strstart+X,we=Z[x+N-1],fe=Z[x+N];c.prev_length>=c.good_match&&(w>>=2),q>c.lookahead&&(q=c.lookahead);do if(Z[(L=j)+N]===fe&&Z[L+N-1]===we&&Z[L]===Z[x]&&Z[++L]===Z[x+1]){x+=2,L++;do;while(Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&x<oe);if(E=X-(oe-x),x=oe-X,N<E){if(c.match_start=j,q<=(N=E))break;we=Z[x+N-1],fe=Z[x+N]}}while((j=J[j&te])>O&&--w!=0);return N<=c.lookahead?N:c.lookahead}function ke(c){var j,L,E,w,x,N,q,O,Z,te,J=c.w_size;do{if(w=c.window_size-c.lookahead-c.strstart,c.strstart>=J+(J-ce)){for(o.arraySet(c.window,c.window,J,J,0),c.match_start-=J,c.strstart-=J,c.block_start-=J,j=L=c.hash_size;E=c.head[--j],c.head[j]=J<=E?E-J:0,--L;);for(j=L=J;E=c.prev[--j],c.prev[j]=J<=E?E-J:0,--L;);w+=J}if(c.strm.avail_in===0)break;if(N=c.strm,q=c.window,O=c.strstart+c.lookahead,Z=w,te=void 0,te=N.avail_in,Z<te&&(te=Z),L=te===0?0:(N.avail_in-=te,o.arraySet(q,N.input,N.next_in,te,O),N.state.wrap===1?N.adler=l(N.adler,q,te,O):N.state.wrap===2&&(N.adler=h(N.adler,q,te,O)),N.next_in+=te,N.total_in+=te,te),c.lookahead+=L,c.lookahead+c.insert>=G)for(x=c.strstart-c.insert,c.ins_h=c.window[x],c.ins_h=(c.ins_h<<c.hash_shift^c.window[x+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[x+G-1])&c.hash_mask,c.prev[x&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=x,x++,c.insert--,!(c.lookahead+c.insert<G)););}while(c.lookahead<ce&&c.strm.avail_in!==0)}function Pe(c,j){for(var L,E;;){if(c.lookahead<ce){if(ke(c),c.lookahead<ce&&j===u)return d;if(c.lookahead===0)break}if(L=0,c.lookahead>=G&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+G-1])&c.hash_mask,L=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),L!==0&&c.strstart-L<=c.w_size-ce&&(c.match_length=Q(c,L)),c.match_length>=G)if(E=a._tr_tally(c,c.strstart-c.match_start,c.match_length-G),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=G){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+G-1])&c.hash_mask,L=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else E=a._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(E&&(R(c,!1),c.strm.avail_out===0))return d}return c.insert=c.strstart<G-1?c.strstart:G-1,j===v?(R(c,!0),c.strm.avail_out===0?de:H):c.last_lit&&(R(c,!1),c.strm.avail_out===0)?d:z}function ge(c,j){for(var L,E,w;;){if(c.lookahead<ce){if(ke(c),c.lookahead<ce&&j===u)return d;if(c.lookahead===0)break}if(L=0,c.lookahead>=G&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+G-1])&c.hash_mask,L=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=G-1,L!==0&&c.prev_length<c.max_lazy_match&&c.strstart-L<=c.w_size-ce&&(c.match_length=Q(c,L),c.match_length<=5&&(c.strategy===1||c.match_length===G&&4096<c.strstart-c.match_start)&&(c.match_length=G-1)),c.prev_length>=G&&c.match_length<=c.prev_length){for(w=c.strstart+c.lookahead-G,E=a._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-G),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=w&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+G-1])&c.hash_mask,L=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=G-1,c.strstart++,E&&(R(c,!1),c.strm.avail_out===0))return d}else if(c.match_available){if((E=a._tr_tally(c,0,c.window[c.strstart-1]))&&R(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return d}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(E=a._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<G-1?c.strstart:G-1,j===v?(R(c,!0),c.strm.avail_out===0?de:H):c.last_lit&&(R(c,!1),c.strm.avail_out===0)?d:z}function ye(c,j,L,E,w){this.good_length=c,this.max_lazy=j,this.nice_length=L,this.max_chain=E,this.func=w}function xe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*F),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*B+1)),ue(this.dyn_ltree),ue(this.dyn_dtree),ue(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(V+1),this.heap=new o.Buf16(2*P+1),ue(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*P+1),ue(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Te(c){var j;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=y,(j=c.state).pending=0,j.pending_out=0,j.wrap<0&&(j.wrap=-j.wrap),j.status=j.wrap?T:I,c.adler=j.wrap===2?0:1,j.last_flush=u,a._tr_init(j),p):he(c,b)}function Ge(c){var j=Te(c);return j===p&&function(L){L.window_size=2*L.w_size,ue(L.head),L.max_lazy_match=n[L.level].max_lazy,L.good_match=n[L.level].good_length,L.nice_match=n[L.level].nice_length,L.max_chain_length=n[L.level].max_chain,L.strstart=0,L.block_start=0,L.lookahead=0,L.insert=0,L.match_length=L.prev_length=G-1,L.match_available=0,L.ins_h=0}(c.state),j}function Fe(c,j,L,E,w,x){if(!c)return b;var N=1;if(j===f&&(j=6),E<0?(N=0,E=-E):15<E&&(N=2,E-=16),w<1||S<w||L!==k||E<8||15<E||j<0||9<j||x<0||g<x)return he(c,b);E===8&&(E=9);var q=new xe;return(c.state=q).strm=c,q.wrap=N,q.gzhead=null,q.w_bits=E,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=w+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+G-1)/G),q.window=new o.Buf8(2*q.w_size),q.head=new o.Buf16(q.hash_size),q.prev=new o.Buf16(q.w_size),q.lit_bufsize=1<<w+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new o.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=j,q.strategy=x,q.method=L,Ge(c)}n=[new ye(0,0,0,0,function(c,j){var L=65535;for(L>c.pending_buf_size-5&&(L=c.pending_buf_size-5);;){if(c.lookahead<=1){if(ke(c),c.lookahead===0&&j===u)return d;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var E=c.block_start+L;if((c.strstart===0||c.strstart>=E)&&(c.lookahead=c.strstart-E,c.strstart=E,R(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-ce&&(R(c,!1),c.strm.avail_out===0))return d}return c.insert=0,j===v?(R(c,!0),c.strm.avail_out===0?de:H):(c.strstart>c.block_start&&(R(c,!1),c.strm.avail_out),d)}),new ye(4,4,8,4,Pe),new ye(4,5,16,8,Pe),new ye(4,6,32,32,Pe),new ye(4,4,16,16,ge),new ye(8,16,32,32,ge),new ye(8,16,128,128,ge),new ye(8,32,128,256,ge),new ye(32,128,258,1024,ge),new ye(32,258,258,4096,ge)],s.deflateInit=function(c,j){return Fe(c,j,k,15,8,0)},s.deflateInit2=Fe,s.deflateReset=Ge,s.deflateResetKeep=Te,s.deflateSetHeader=function(c,j){return c&&c.state?c.state.wrap!==2?b:(c.state.gzhead=j,p):b},s.deflate=function(c,j){var L,E,w,x;if(!c||!c.state||5<j||j<0)return c?he(c,b):b;if(E=c.state,!c.output||!c.input&&c.avail_in!==0||E.status===666&&j!==v)return he(c,c.avail_out===0?-5:b);if(E.strm=c,L=E.last_flush,E.last_flush=j,E.status===T)if(E.wrap===2)c.adler=0,le(E,31),le(E,139),le(E,8),E.gzhead?(le(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),le(E,255&E.gzhead.time),le(E,E.gzhead.time>>8&255),le(E,E.gzhead.time>>16&255),le(E,E.gzhead.time>>24&255),le(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),le(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(le(E,255&E.gzhead.extra.length),le(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(c.adler=h(c.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(le(E,0),le(E,0),le(E,0),le(E,0),le(E,0),le(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),le(E,3),E.status=I);else{var N=k+(E.w_bits-8<<4)<<8;N|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(N|=32),N+=31-N%31,E.status=I,ee(E,N),E.strstart!==0&&(ee(E,c.adler>>>16),ee(E,65535&c.adler)),c.adler=1}if(E.status===69)if(E.gzhead.extra){for(w=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>w&&(c.adler=h(c.adler,E.pending_buf,E.pending-w,w)),D(c),w=E.pending,E.pending!==E.pending_buf_size));)le(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>w&&(c.adler=h(c.adler,E.pending_buf,E.pending-w,w)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){w=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>w&&(c.adler=h(c.adler,E.pending_buf,E.pending-w,w)),D(c),w=E.pending,E.pending===E.pending_buf_size)){x=1;break}x=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,le(E,x)}while(x!==0);E.gzhead.hcrc&&E.pending>w&&(c.adler=h(c.adler,E.pending_buf,E.pending-w,w)),x===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){w=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>w&&(c.adler=h(c.adler,E.pending_buf,E.pending-w,w)),D(c),w=E.pending,E.pending===E.pending_buf_size)){x=1;break}x=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,le(E,x)}while(x!==0);E.gzhead.hcrc&&E.pending>w&&(c.adler=h(c.adler,E.pending_buf,E.pending-w,w)),x===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&D(c),E.pending+2<=E.pending_buf_size&&(le(E,255&c.adler),le(E,c.adler>>8&255),c.adler=0,E.status=I)):E.status=I),E.pending!==0){if(D(c),c.avail_out===0)return E.last_flush=-1,p}else if(c.avail_in===0&&K(j)<=K(L)&&j!==v)return he(c,-5);if(E.status===666&&c.avail_in!==0)return he(c,-5);if(c.avail_in!==0||E.lookahead!==0||j!==u&&E.status!==666){var q=E.strategy===2?function(O,Z){for(var te;;){if(O.lookahead===0&&(ke(O),O.lookahead===0)){if(Z===u)return d;break}if(O.match_length=0,te=a._tr_tally(O,0,O.window[O.strstart]),O.lookahead--,O.strstart++,te&&(R(O,!1),O.strm.avail_out===0))return d}return O.insert=0,Z===v?(R(O,!0),O.strm.avail_out===0?de:H):O.last_lit&&(R(O,!1),O.strm.avail_out===0)?d:z}(E,j):E.strategy===3?function(O,Z){for(var te,J,oe,we,fe=O.window;;){if(O.lookahead<=X){if(ke(O),O.lookahead<=X&&Z===u)return d;if(O.lookahead===0)break}if(O.match_length=0,O.lookahead>=G&&0<O.strstart&&(J=fe[oe=O.strstart-1])===fe[++oe]&&J===fe[++oe]&&J===fe[++oe]){we=O.strstart+X;do;while(J===fe[++oe]&&J===fe[++oe]&&J===fe[++oe]&&J===fe[++oe]&&J===fe[++oe]&&J===fe[++oe]&&J===fe[++oe]&&J===fe[++oe]&&oe<we);O.match_length=X-(we-oe),O.match_length>O.lookahead&&(O.match_length=O.lookahead)}if(O.match_length>=G?(te=a._tr_tally(O,1,O.match_length-G),O.lookahead-=O.match_length,O.strstart+=O.match_length,O.match_length=0):(te=a._tr_tally(O,0,O.window[O.strstart]),O.lookahead--,O.strstart++),te&&(R(O,!1),O.strm.avail_out===0))return d}return O.insert=0,Z===v?(R(O,!0),O.strm.avail_out===0?de:H):O.last_lit&&(R(O,!1),O.strm.avail_out===0)?d:z}(E,j):n[E.level].func(E,j);if(q!==de&&q!==H||(E.status=666),q===d||q===de)return c.avail_out===0&&(E.last_flush=-1),p;if(q===z&&(j===1?a._tr_align(E):j!==5&&(a._tr_stored_block(E,0,0,!1),j===3&&(ue(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),D(c),c.avail_out===0))return E.last_flush=-1,p}return j!==v?p:E.wrap<=0?1:(E.wrap===2?(le(E,255&c.adler),le(E,c.adler>>8&255),le(E,c.adler>>16&255),le(E,c.adler>>24&255),le(E,255&c.total_in),le(E,c.total_in>>8&255),le(E,c.total_in>>16&255),le(E,c.total_in>>24&255)):(ee(E,c.adler>>>16),ee(E,65535&c.adler)),D(c),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?p:1)},s.deflateEnd=function(c){var j;return c&&c.state?(j=c.state.status)!==T&&j!==69&&j!==73&&j!==91&&j!==103&&j!==I&&j!==666?he(c,b):(c.state=null,j===I?he(c,-3):p):b},s.deflateSetDictionary=function(c,j){var L,E,w,x,N,q,O,Z,te=j.length;if(!c||!c.state||(x=(L=c.state).wrap)===2||x===1&&L.status!==T||L.lookahead)return b;for(x===1&&(c.adler=l(c.adler,j,te,0)),L.wrap=0,te>=L.w_size&&(x===0&&(ue(L.head),L.strstart=0,L.block_start=0,L.insert=0),Z=new o.Buf8(L.w_size),o.arraySet(Z,j,te-L.w_size,L.w_size,0),j=Z,te=L.w_size),N=c.avail_in,q=c.next_in,O=c.input,c.avail_in=te,c.next_in=0,c.input=j,ke(L);L.lookahead>=G;){for(E=L.strstart,w=L.lookahead-(G-1);L.ins_h=(L.ins_h<<L.hash_shift^L.window[E+G-1])&L.hash_mask,L.prev[E&L.w_mask]=L.head[L.ins_h],L.head[L.ins_h]=E,E++,--w;);L.strstart=E,L.lookahead=G-1,ke(L)}return L.strstart+=L.lookahead,L.block_start=L.strstart,L.insert=L.lookahead,L.lookahead=0,L.match_length=L.prev_length=G-1,L.match_available=0,c.next_in=q,c.input=O,c.avail_in=N,L.wrap=x,p},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,s){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,s){i.exports=function(n,o){var a,l,h,m,u,v,p,b,f,g,y,k,S,P,C,B,F,V,G,X,ce,T,I,d,z;a=n.state,l=n.next_in,d=n.input,h=l+(n.avail_in-5),m=n.next_out,z=n.output,u=m-(o-n.avail_out),v=m+(n.avail_out-257),p=a.dmax,b=a.wsize,f=a.whave,g=a.wnext,y=a.window,k=a.hold,S=a.bits,P=a.lencode,C=a.distcode,B=(1<<a.lenbits)-1,F=(1<<a.distbits)-1;e:do{S<15&&(k+=d[l++]<<S,S+=8,k+=d[l++]<<S,S+=8),V=P[k&B];t:for(;;){if(k>>>=G=V>>>24,S-=G,(G=V>>>16&255)===0)z[m++]=65535&V;else{if(!(16&G)){if(!(64&G)){V=P[(65535&V)+(k&(1<<G)-1)];continue t}if(32&G){a.mode=12;break e}n.msg="invalid literal/length code",a.mode=30;break e}X=65535&V,(G&=15)&&(S<G&&(k+=d[l++]<<S,S+=8),X+=k&(1<<G)-1,k>>>=G,S-=G),S<15&&(k+=d[l++]<<S,S+=8,k+=d[l++]<<S,S+=8),V=C[k&F];r:for(;;){if(k>>>=G=V>>>24,S-=G,!(16&(G=V>>>16&255))){if(!(64&G)){V=C[(65535&V)+(k&(1<<G)-1)];continue r}n.msg="invalid distance code",a.mode=30;break e}if(ce=65535&V,S<(G&=15)&&(k+=d[l++]<<S,(S+=8)<G&&(k+=d[l++]<<S,S+=8)),p<(ce+=k&(1<<G)-1)){n.msg="invalid distance too far back",a.mode=30;break e}if(k>>>=G,S-=G,(G=m-u)<ce){if(f<(G=ce-G)&&a.sane){n.msg="invalid distance too far back",a.mode=30;break e}if(I=y,(T=0)===g){if(T+=b-G,G<X){for(X-=G;z[m++]=y[T++],--G;);T=m-ce,I=z}}else if(g<G){if(T+=b+g-G,(G-=g)<X){for(X-=G;z[m++]=y[T++],--G;);if(T=0,g<X){for(X-=G=g;z[m++]=y[T++],--G;);T=m-ce,I=z}}}else if(T+=g-G,G<X){for(X-=G;z[m++]=y[T++],--G;);T=m-ce,I=z}for(;2<X;)z[m++]=I[T++],z[m++]=I[T++],z[m++]=I[T++],X-=3;X&&(z[m++]=I[T++],1<X&&(z[m++]=I[T++]))}else{for(T=m-ce;z[m++]=z[T++],z[m++]=z[T++],z[m++]=z[T++],2<(X-=3););X&&(z[m++]=z[T++],1<X&&(z[m++]=z[T++]))}break}}break}}while(l<h&&m<v);l-=X=S>>3,k&=(1<<(S-=X<<3))-1,n.next_in=l,n.next_out=m,n.avail_in=l<h?h-l+5:5-(l-h),n.avail_out=m<v?v-m+257:257-(m-v),a.hold=k,a.bits=S}},{}],49:[function(t,i,s){var n=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),l=t("./inffast"),h=t("./inftrees"),m=1,u=2,v=0,p=-2,b=1,f=852,g=592;function y(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(T){var I;return T&&T.state?(I=T.state,T.total_in=T.total_out=I.total=0,T.msg="",I.wrap&&(T.adler=1&I.wrap),I.mode=b,I.last=0,I.havedict=0,I.dmax=32768,I.head=null,I.hold=0,I.bits=0,I.lencode=I.lendyn=new n.Buf32(f),I.distcode=I.distdyn=new n.Buf32(g),I.sane=1,I.back=-1,v):p}function P(T){var I;return T&&T.state?((I=T.state).wsize=0,I.whave=0,I.wnext=0,S(T)):p}function C(T,I){var d,z;return T&&T.state?(z=T.state,I<0?(d=0,I=-I):(d=1+(I>>4),I<48&&(I&=15)),I&&(I<8||15<I)?p:(z.window!==null&&z.wbits!==I&&(z.window=null),z.wrap=d,z.wbits=I,P(T))):p}function B(T,I){var d,z;return T?(z=new k,(T.state=z).window=null,(d=C(T,I))!==v&&(T.state=null),d):p}var F,V,G=!0;function X(T){if(G){var I;for(F=new n.Buf32(512),V=new n.Buf32(32),I=0;I<144;)T.lens[I++]=8;for(;I<256;)T.lens[I++]=9;for(;I<280;)T.lens[I++]=7;for(;I<288;)T.lens[I++]=8;for(h(m,T.lens,0,288,F,0,T.work,{bits:9}),I=0;I<32;)T.lens[I++]=5;h(u,T.lens,0,32,V,0,T.work,{bits:5}),G=!1}T.lencode=F,T.lenbits=9,T.distcode=V,T.distbits=5}function ce(T,I,d,z){var de,H=T.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new n.Buf8(H.wsize)),z>=H.wsize?(n.arraySet(H.window,I,d-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(z<(de=H.wsize-H.wnext)&&(de=z),n.arraySet(H.window,I,d-z,de,H.wnext),(z-=de)?(n.arraySet(H.window,I,d-z,z,0),H.wnext=z,H.whave=H.wsize):(H.wnext+=de,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=de))),0}s.inflateReset=P,s.inflateReset2=C,s.inflateResetKeep=S,s.inflateInit=function(T){return B(T,15)},s.inflateInit2=B,s.inflate=function(T,I){var d,z,de,H,he,K,ue,D,R,le,ee,Q,ke,Pe,ge,ye,xe,Te,Ge,Fe,c,j,L,E,w=0,x=new n.Buf8(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return p;(d=T.state).mode===12&&(d.mode=13),he=T.next_out,de=T.output,ue=T.avail_out,H=T.next_in,z=T.input,K=T.avail_in,D=d.hold,R=d.bits,le=K,ee=ue,j=v;e:for(;;)switch(d.mode){case b:if(d.wrap===0){d.mode=13;break}for(;R<16;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(2&d.wrap&&D===35615){x[d.check=0]=255&D,x[1]=D>>>8&255,d.check=a(d.check,x,2,0),R=D=0,d.mode=2;break}if(d.flags=0,d.head&&(d.head.done=!1),!(1&d.wrap)||(((255&D)<<8)+(D>>8))%31){T.msg="incorrect header check",d.mode=30;break}if((15&D)!=8){T.msg="unknown compression method",d.mode=30;break}if(R-=4,c=8+(15&(D>>>=4)),d.wbits===0)d.wbits=c;else if(c>d.wbits){T.msg="invalid window size",d.mode=30;break}d.dmax=1<<c,T.adler=d.check=1,d.mode=512&D?10:12,R=D=0;break;case 2:for(;R<16;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(d.flags=D,(255&d.flags)!=8){T.msg="unknown compression method",d.mode=30;break}if(57344&d.flags){T.msg="unknown header flags set",d.mode=30;break}d.head&&(d.head.text=D>>8&1),512&d.flags&&(x[0]=255&D,x[1]=D>>>8&255,d.check=a(d.check,x,2,0)),R=D=0,d.mode=3;case 3:for(;R<32;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}d.head&&(d.head.time=D),512&d.flags&&(x[0]=255&D,x[1]=D>>>8&255,x[2]=D>>>16&255,x[3]=D>>>24&255,d.check=a(d.check,x,4,0)),R=D=0,d.mode=4;case 4:for(;R<16;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}d.head&&(d.head.xflags=255&D,d.head.os=D>>8),512&d.flags&&(x[0]=255&D,x[1]=D>>>8&255,d.check=a(d.check,x,2,0)),R=D=0,d.mode=5;case 5:if(1024&d.flags){for(;R<16;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}d.length=D,d.head&&(d.head.extra_len=D),512&d.flags&&(x[0]=255&D,x[1]=D>>>8&255,d.check=a(d.check,x,2,0)),R=D=0}else d.head&&(d.head.extra=null);d.mode=6;case 6:if(1024&d.flags&&(K<(Q=d.length)&&(Q=K),Q&&(d.head&&(c=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),n.arraySet(d.head.extra,z,H,Q,c)),512&d.flags&&(d.check=a(d.check,z,Q,H)),K-=Q,H+=Q,d.length-=Q),d.length))break e;d.length=0,d.mode=7;case 7:if(2048&d.flags){if(K===0)break e;for(Q=0;c=z[H+Q++],d.head&&c&&d.length<65536&&(d.head.name+=String.fromCharCode(c)),c&&Q<K;);if(512&d.flags&&(d.check=a(d.check,z,Q,H)),K-=Q,H+=Q,c)break e}else d.head&&(d.head.name=null);d.length=0,d.mode=8;case 8:if(4096&d.flags){if(K===0)break e;for(Q=0;c=z[H+Q++],d.head&&c&&d.length<65536&&(d.head.comment+=String.fromCharCode(c)),c&&Q<K;);if(512&d.flags&&(d.check=a(d.check,z,Q,H)),K-=Q,H+=Q,c)break e}else d.head&&(d.head.comment=null);d.mode=9;case 9:if(512&d.flags){for(;R<16;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(D!==(65535&d.check)){T.msg="header crc mismatch",d.mode=30;break}R=D=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),T.adler=d.check=0,d.mode=12;break;case 10:for(;R<32;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}T.adler=d.check=y(D),R=D=0,d.mode=11;case 11:if(d.havedict===0)return T.next_out=he,T.avail_out=ue,T.next_in=H,T.avail_in=K,d.hold=D,d.bits=R,2;T.adler=d.check=1,d.mode=12;case 12:if(I===5||I===6)break e;case 13:if(d.last){D>>>=7&R,R-=7&R,d.mode=27;break}for(;R<3;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}switch(d.last=1&D,R-=1,3&(D>>>=1)){case 0:d.mode=14;break;case 1:if(X(d),d.mode=20,I!==6)break;D>>>=2,R-=2;break e;case 2:d.mode=17;break;case 3:T.msg="invalid block type",d.mode=30}D>>>=2,R-=2;break;case 14:for(D>>>=7&R,R-=7&R;R<32;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if((65535&D)!=(D>>>16^65535)){T.msg="invalid stored block lengths",d.mode=30;break}if(d.length=65535&D,R=D=0,d.mode=15,I===6)break e;case 15:d.mode=16;case 16:if(Q=d.length){if(K<Q&&(Q=K),ue<Q&&(Q=ue),Q===0)break e;n.arraySet(de,z,H,Q,he),K-=Q,H+=Q,ue-=Q,he+=Q,d.length-=Q;break}d.mode=12;break;case 17:for(;R<14;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(d.nlen=257+(31&D),D>>>=5,R-=5,d.ndist=1+(31&D),D>>>=5,R-=5,d.ncode=4+(15&D),D>>>=4,R-=4,286<d.nlen||30<d.ndist){T.msg="too many length or distance symbols",d.mode=30;break}d.have=0,d.mode=18;case 18:for(;d.have<d.ncode;){for(;R<3;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}d.lens[N[d.have++]]=7&D,D>>>=3,R-=3}for(;d.have<19;)d.lens[N[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,L={bits:d.lenbits},j=h(0,d.lens,0,19,d.lencode,0,d.work,L),d.lenbits=L.bits,j){T.msg="invalid code lengths set",d.mode=30;break}d.have=0,d.mode=19;case 19:for(;d.have<d.nlen+d.ndist;){for(;ye=(w=d.lencode[D&(1<<d.lenbits)-1])>>>16&255,xe=65535&w,!((ge=w>>>24)<=R);){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(xe<16)D>>>=ge,R-=ge,d.lens[d.have++]=xe;else{if(xe===16){for(E=ge+2;R<E;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(D>>>=ge,R-=ge,d.have===0){T.msg="invalid bit length repeat",d.mode=30;break}c=d.lens[d.have-1],Q=3+(3&D),D>>>=2,R-=2}else if(xe===17){for(E=ge+3;R<E;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}R-=ge,c=0,Q=3+(7&(D>>>=ge)),D>>>=3,R-=3}else{for(E=ge+7;R<E;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}R-=ge,c=0,Q=11+(127&(D>>>=ge)),D>>>=7,R-=7}if(d.have+Q>d.nlen+d.ndist){T.msg="invalid bit length repeat",d.mode=30;break}for(;Q--;)d.lens[d.have++]=c}}if(d.mode===30)break;if(d.lens[256]===0){T.msg="invalid code -- missing end-of-block",d.mode=30;break}if(d.lenbits=9,L={bits:d.lenbits},j=h(m,d.lens,0,d.nlen,d.lencode,0,d.work,L),d.lenbits=L.bits,j){T.msg="invalid literal/lengths set",d.mode=30;break}if(d.distbits=6,d.distcode=d.distdyn,L={bits:d.distbits},j=h(u,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,L),d.distbits=L.bits,j){T.msg="invalid distances set",d.mode=30;break}if(d.mode=20,I===6)break e;case 20:d.mode=21;case 21:if(6<=K&&258<=ue){T.next_out=he,T.avail_out=ue,T.next_in=H,T.avail_in=K,d.hold=D,d.bits=R,l(T,ee),he=T.next_out,de=T.output,ue=T.avail_out,H=T.next_in,z=T.input,K=T.avail_in,D=d.hold,R=d.bits,d.mode===12&&(d.back=-1);break}for(d.back=0;ye=(w=d.lencode[D&(1<<d.lenbits)-1])>>>16&255,xe=65535&w,!((ge=w>>>24)<=R);){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(ye&&!(240&ye)){for(Te=ge,Ge=ye,Fe=xe;ye=(w=d.lencode[Fe+((D&(1<<Te+Ge)-1)>>Te)])>>>16&255,xe=65535&w,!(Te+(ge=w>>>24)<=R);){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}D>>>=Te,R-=Te,d.back+=Te}if(D>>>=ge,R-=ge,d.back+=ge,d.length=xe,ye===0){d.mode=26;break}if(32&ye){d.back=-1,d.mode=12;break}if(64&ye){T.msg="invalid literal/length code",d.mode=30;break}d.extra=15&ye,d.mode=22;case 22:if(d.extra){for(E=d.extra;R<E;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}d.length+=D&(1<<d.extra)-1,D>>>=d.extra,R-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=23;case 23:for(;ye=(w=d.distcode[D&(1<<d.distbits)-1])>>>16&255,xe=65535&w,!((ge=w>>>24)<=R);){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(!(240&ye)){for(Te=ge,Ge=ye,Fe=xe;ye=(w=d.distcode[Fe+((D&(1<<Te+Ge)-1)>>Te)])>>>16&255,xe=65535&w,!(Te+(ge=w>>>24)<=R);){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}D>>>=Te,R-=Te,d.back+=Te}if(D>>>=ge,R-=ge,d.back+=ge,64&ye){T.msg="invalid distance code",d.mode=30;break}d.offset=xe,d.extra=15&ye,d.mode=24;case 24:if(d.extra){for(E=d.extra;R<E;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}d.offset+=D&(1<<d.extra)-1,D>>>=d.extra,R-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){T.msg="invalid distance too far back",d.mode=30;break}d.mode=25;case 25:if(ue===0)break e;if(Q=ee-ue,d.offset>Q){if((Q=d.offset-Q)>d.whave&&d.sane){T.msg="invalid distance too far back",d.mode=30;break}ke=Q>d.wnext?(Q-=d.wnext,d.wsize-Q):d.wnext-Q,Q>d.length&&(Q=d.length),Pe=d.window}else Pe=de,ke=he-d.offset,Q=d.length;for(ue<Q&&(Q=ue),ue-=Q,d.length-=Q;de[he++]=Pe[ke++],--Q;);d.length===0&&(d.mode=21);break;case 26:if(ue===0)break e;de[he++]=d.length,ue--,d.mode=21;break;case 27:if(d.wrap){for(;R<32;){if(K===0)break e;K--,D|=z[H++]<<R,R+=8}if(ee-=ue,T.total_out+=ee,d.total+=ee,ee&&(T.adler=d.check=d.flags?a(d.check,de,ee,he-ee):o(d.check,de,ee,he-ee)),ee=ue,(d.flags?D:y(D))!==d.check){T.msg="incorrect data check",d.mode=30;break}R=D=0}d.mode=28;case 28:if(d.wrap&&d.flags){for(;R<32;){if(K===0)break e;K--,D+=z[H++]<<R,R+=8}if(D!==(4294967295&d.total)){T.msg="incorrect length check",d.mode=30;break}R=D=0}d.mode=29;case 29:j=1;break e;case 30:j=-3;break e;case 31:return-4;case 32:default:return p}return T.next_out=he,T.avail_out=ue,T.next_in=H,T.avail_in=K,d.hold=D,d.bits=R,(d.wsize||ee!==T.avail_out&&d.mode<30&&(d.mode<27||I!==4))&&ce(T,T.output,T.next_out,ee-T.avail_out)?(d.mode=31,-4):(le-=T.avail_in,ee-=T.avail_out,T.total_in+=le,T.total_out+=ee,d.total+=ee,d.wrap&&ee&&(T.adler=d.check=d.flags?a(d.check,de,ee,T.next_out-ee):o(d.check,de,ee,T.next_out-ee)),T.data_type=d.bits+(d.last?64:0)+(d.mode===12?128:0)+(d.mode===20||d.mode===15?256:0),(le==0&&ee===0||I===4)&&j===v&&(j=-5),j)},s.inflateEnd=function(T){if(!T||!T.state)return p;var I=T.state;return I.window&&(I.window=null),T.state=null,v},s.inflateGetHeader=function(T,I){var d;return T&&T.state&&2&(d=T.state).wrap?((d.head=I).done=!1,v):p},s.inflateSetDictionary=function(T,I){var d,z=I.length;return T&&T.state?(d=T.state).wrap!==0&&d.mode!==11?p:d.mode===11&&o(1,I,z,0)!==d.check?-3:ce(T,I,z,z)?(d.mode=31,-4):(d.havedict=1,v):p},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,s){var n=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(m,u,v,p,b,f,g,y){var k,S,P,C,B,F,V,G,X,ce=y.bits,T=0,I=0,d=0,z=0,de=0,H=0,he=0,K=0,ue=0,D=0,R=null,le=0,ee=new n.Buf16(16),Q=new n.Buf16(16),ke=null,Pe=0;for(T=0;T<=15;T++)ee[T]=0;for(I=0;I<p;I++)ee[u[v+I]]++;for(de=ce,z=15;1<=z&&ee[z]===0;z--);if(z<de&&(de=z),z===0)return b[f++]=20971520,b[f++]=20971520,y.bits=1,0;for(d=1;d<z&&ee[d]===0;d++);for(de<d&&(de=d),T=K=1;T<=15;T++)if(K<<=1,(K-=ee[T])<0)return-1;if(0<K&&(m===0||z!==1))return-1;for(Q[1]=0,T=1;T<15;T++)Q[T+1]=Q[T]+ee[T];for(I=0;I<p;I++)u[v+I]!==0&&(g[Q[u[v+I]]++]=I);if(F=m===0?(R=ke=g,19):m===1?(R=o,le-=257,ke=a,Pe-=257,256):(R=l,ke=h,-1),T=d,B=f,he=I=D=0,P=-1,C=(ue=1<<(H=de))-1,m===1&&852<ue||m===2&&592<ue)return 1;for(;;){for(V=T-he,X=g[I]<F?(G=0,g[I]):g[I]>F?(G=ke[Pe+g[I]],R[le+g[I]]):(G=96,0),k=1<<T-he,d=S=1<<H;b[B+(D>>he)+(S-=k)]=V<<24|G<<16|X|0,S!==0;);for(k=1<<T-1;D&k;)k>>=1;if(k!==0?(D&=k-1,D+=k):D=0,I++,--ee[T]==0){if(T===z)break;T=u[v+g[I]]}if(de<T&&(D&C)!==P){for(he===0&&(he=de),B+=d,K=1<<(H=T-he);H+he<z&&!((K-=ee[H+he])<=0);)H++,K<<=1;if(ue+=1<<H,m===1&&852<ue||m===2&&592<ue)return 1;b[P=D&C]=de<<24|H<<16|B-f|0}}return D!==0&&(b[B+D]=T-he<<24|64<<16|0),y.bits=de,0}},{"../utils/common":41}],51:[function(t,i,s){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,s){var n=t("../utils/common"),o=0,a=1;function l(w){for(var x=w.length;0<=--x;)w[x]=0}var h=0,m=29,u=256,v=u+1+m,p=30,b=19,f=2*v+1,g=15,y=16,k=7,S=256,P=16,C=17,B=18,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],X=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ce=new Array(2*(v+2));l(ce);var T=new Array(2*p);l(T);var I=new Array(512);l(I);var d=new Array(256);l(d);var z=new Array(m);l(z);var de,H,he,K=new Array(p);function ue(w,x,N,q,O){this.static_tree=w,this.extra_bits=x,this.extra_base=N,this.elems=q,this.max_length=O,this.has_stree=w&&w.length}function D(w,x){this.dyn_tree=w,this.max_code=0,this.stat_desc=x}function R(w){return w<256?I[w]:I[256+(w>>>7)]}function le(w,x){w.pending_buf[w.pending++]=255&x,w.pending_buf[w.pending++]=x>>>8&255}function ee(w,x,N){w.bi_valid>y-N?(w.bi_buf|=x<<w.bi_valid&65535,le(w,w.bi_buf),w.bi_buf=x>>y-w.bi_valid,w.bi_valid+=N-y):(w.bi_buf|=x<<w.bi_valid&65535,w.bi_valid+=N)}function Q(w,x,N){ee(w,N[2*x],N[2*x+1])}function ke(w,x){for(var N=0;N|=1&w,w>>>=1,N<<=1,0<--x;);return N>>>1}function Pe(w,x,N){var q,O,Z=new Array(g+1),te=0;for(q=1;q<=g;q++)Z[q]=te=te+N[q-1]<<1;for(O=0;O<=x;O++){var J=w[2*O+1];J!==0&&(w[2*O]=ke(Z[J]++,J))}}function ge(w){var x;for(x=0;x<v;x++)w.dyn_ltree[2*x]=0;for(x=0;x<p;x++)w.dyn_dtree[2*x]=0;for(x=0;x<b;x++)w.bl_tree[2*x]=0;w.dyn_ltree[2*S]=1,w.opt_len=w.static_len=0,w.last_lit=w.matches=0}function ye(w){8<w.bi_valid?le(w,w.bi_buf):0<w.bi_valid&&(w.pending_buf[w.pending++]=w.bi_buf),w.bi_buf=0,w.bi_valid=0}function xe(w,x,N,q){var O=2*x,Z=2*N;return w[O]<w[Z]||w[O]===w[Z]&&q[x]<=q[N]}function Te(w,x,N){for(var q=w.heap[N],O=N<<1;O<=w.heap_len&&(O<w.heap_len&&xe(x,w.heap[O+1],w.heap[O],w.depth)&&O++,!xe(x,q,w.heap[O],w.depth));)w.heap[N]=w.heap[O],N=O,O<<=1;w.heap[N]=q}function Ge(w,x,N){var q,O,Z,te,J=0;if(w.last_lit!==0)for(;q=w.pending_buf[w.d_buf+2*J]<<8|w.pending_buf[w.d_buf+2*J+1],O=w.pending_buf[w.l_buf+J],J++,q===0?Q(w,O,x):(Q(w,(Z=d[O])+u+1,x),(te=F[Z])!==0&&ee(w,O-=z[Z],te),Q(w,Z=R(--q),N),(te=V[Z])!==0&&ee(w,q-=K[Z],te)),J<w.last_lit;);Q(w,S,x)}function Fe(w,x){var N,q,O,Z=x.dyn_tree,te=x.stat_desc.static_tree,J=x.stat_desc.has_stree,oe=x.stat_desc.elems,we=-1;for(w.heap_len=0,w.heap_max=f,N=0;N<oe;N++)Z[2*N]!==0?(w.heap[++w.heap_len]=we=N,w.depth[N]=0):Z[2*N+1]=0;for(;w.heap_len<2;)Z[2*(O=w.heap[++w.heap_len]=we<2?++we:0)]=1,w.depth[O]=0,w.opt_len--,J&&(w.static_len-=te[2*O+1]);for(x.max_code=we,N=w.heap_len>>1;1<=N;N--)Te(w,Z,N);for(O=oe;N=w.heap[1],w.heap[1]=w.heap[w.heap_len--],Te(w,Z,1),q=w.heap[1],w.heap[--w.heap_max]=N,w.heap[--w.heap_max]=q,Z[2*O]=Z[2*N]+Z[2*q],w.depth[O]=(w.depth[N]>=w.depth[q]?w.depth[N]:w.depth[q])+1,Z[2*N+1]=Z[2*q+1]=O,w.heap[1]=O++,Te(w,Z,1),2<=w.heap_len;);w.heap[--w.heap_max]=w.heap[1],function(fe,Le){var se,$,_,A,U,M,W=Le.dyn_tree,ie=Le.max_code,_e=Le.stat_desc.static_tree,$e=Le.stat_desc.has_stree,Re=Le.stat_desc.extra_bits,Ve=Le.stat_desc.extra_base,rt=Le.stat_desc.max_length,st=0;for(A=0;A<=g;A++)fe.bl_count[A]=0;for(W[2*fe.heap[fe.heap_max]+1]=0,se=fe.heap_max+1;se<f;se++)rt<(A=W[2*W[2*($=fe.heap[se])+1]+1]+1)&&(A=rt,st++),W[2*$+1]=A,ie<$||(fe.bl_count[A]++,U=0,Ve<=$&&(U=Re[$-Ve]),M=W[2*$],fe.opt_len+=M*(A+U),$e&&(fe.static_len+=M*(_e[2*$+1]+U)));if(st!==0){do{for(A=rt-1;fe.bl_count[A]===0;)A--;fe.bl_count[A]--,fe.bl_count[A+1]+=2,fe.bl_count[rt]--,st-=2}while(0<st);for(A=rt;A!==0;A--)for($=fe.bl_count[A];$!==0;)ie<(_=fe.heap[--se])||(W[2*_+1]!==A&&(fe.opt_len+=(A-W[2*_+1])*W[2*_],W[2*_+1]=A),$--)}}(w,x),Pe(Z,we,w.bl_count)}function c(w,x,N){var q,O,Z=-1,te=x[1],J=0,oe=7,we=4;for(te===0&&(oe=138,we=3),x[2*(N+1)+1]=65535,q=0;q<=N;q++)O=te,te=x[2*(q+1)+1],++J<oe&&O===te||(J<we?w.bl_tree[2*O]+=J:O!==0?(O!==Z&&w.bl_tree[2*O]++,w.bl_tree[2*P]++):J<=10?w.bl_tree[2*C]++:w.bl_tree[2*B]++,Z=O,we=(J=0)===te?(oe=138,3):O===te?(oe=6,3):(oe=7,4))}function j(w,x,N){var q,O,Z=-1,te=x[1],J=0,oe=7,we=4;for(te===0&&(oe=138,we=3),q=0;q<=N;q++)if(O=te,te=x[2*(q+1)+1],!(++J<oe&&O===te)){if(J<we)for(;Q(w,O,w.bl_tree),--J!=0;);else O!==0?(O!==Z&&(Q(w,O,w.bl_tree),J--),Q(w,P,w.bl_tree),ee(w,J-3,2)):J<=10?(Q(w,C,w.bl_tree),ee(w,J-3,3)):(Q(w,B,w.bl_tree),ee(w,J-11,7));Z=O,we=(J=0)===te?(oe=138,3):O===te?(oe=6,3):(oe=7,4)}}l(K);var L=!1;function E(w,x,N,q){ee(w,(h<<1)+(q?1:0),3),function(O,Z,te,J){ye(O),le(O,te),le(O,~te),n.arraySet(O.pending_buf,O.window,Z,te,O.pending),O.pending+=te}(w,x,N)}s._tr_init=function(w){L||(function(){var x,N,q,O,Z,te=new Array(g+1);for(O=q=0;O<m-1;O++)for(z[O]=q,x=0;x<1<<F[O];x++)d[q++]=O;for(d[q-1]=O,O=Z=0;O<16;O++)for(K[O]=Z,x=0;x<1<<V[O];x++)I[Z++]=O;for(Z>>=7;O<p;O++)for(K[O]=Z<<7,x=0;x<1<<V[O]-7;x++)I[256+Z++]=O;for(N=0;N<=g;N++)te[N]=0;for(x=0;x<=143;)ce[2*x+1]=8,x++,te[8]++;for(;x<=255;)ce[2*x+1]=9,x++,te[9]++;for(;x<=279;)ce[2*x+1]=7,x++,te[7]++;for(;x<=287;)ce[2*x+1]=8,x++,te[8]++;for(Pe(ce,v+1,te),x=0;x<p;x++)T[2*x+1]=5,T[2*x]=ke(x,5);de=new ue(ce,F,u+1,v,g),H=new ue(T,V,0,p,g),he=new ue(new Array(0),G,0,b,k)}(),L=!0),w.l_desc=new D(w.dyn_ltree,de),w.d_desc=new D(w.dyn_dtree,H),w.bl_desc=new D(w.bl_tree,he),w.bi_buf=0,w.bi_valid=0,ge(w)},s._tr_stored_block=E,s._tr_flush_block=function(w,x,N,q){var O,Z,te=0;0<w.level?(w.strm.data_type===2&&(w.strm.data_type=function(J){var oe,we=4093624447;for(oe=0;oe<=31;oe++,we>>>=1)if(1&we&&J.dyn_ltree[2*oe]!==0)return o;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return a;for(oe=32;oe<u;oe++)if(J.dyn_ltree[2*oe]!==0)return a;return o}(w)),Fe(w,w.l_desc),Fe(w,w.d_desc),te=function(J){var oe;for(c(J,J.dyn_ltree,J.l_desc.max_code),c(J,J.dyn_dtree,J.d_desc.max_code),Fe(J,J.bl_desc),oe=b-1;3<=oe&&J.bl_tree[2*X[oe]+1]===0;oe--);return J.opt_len+=3*(oe+1)+5+5+4,oe}(w),O=w.opt_len+3+7>>>3,(Z=w.static_len+3+7>>>3)<=O&&(O=Z)):O=Z=N+5,N+4<=O&&x!==-1?E(w,x,N,q):w.strategy===4||Z===O?(ee(w,2+(q?1:0),3),Ge(w,ce,T)):(ee(w,4+(q?1:0),3),function(J,oe,we,fe){var Le;for(ee(J,oe-257,5),ee(J,we-1,5),ee(J,fe-4,4),Le=0;Le<fe;Le++)ee(J,J.bl_tree[2*X[Le]+1],3);j(J,J.dyn_ltree,oe-1),j(J,J.dyn_dtree,we-1)}(w,w.l_desc.max_code+1,w.d_desc.max_code+1,te+1),Ge(w,w.dyn_ltree,w.dyn_dtree)),ge(w),q&&ye(w)},s._tr_tally=function(w,x,N){return w.pending_buf[w.d_buf+2*w.last_lit]=x>>>8&255,w.pending_buf[w.d_buf+2*w.last_lit+1]=255&x,w.pending_buf[w.l_buf+w.last_lit]=255&N,w.last_lit++,x===0?w.dyn_ltree[2*N]++:(w.matches++,x--,w.dyn_ltree[2*(d[N]+u+1)]++,w.dyn_dtree[2*R(x)]++),w.last_lit===w.lit_bufsize-1},s._tr_align=function(w){ee(w,2,3),Q(w,S,ce),function(x){x.bi_valid===16?(le(x,x.bi_buf),x.bi_buf=0,x.bi_valid=0):8<=x.bi_valid&&(x.pending_buf[x.pending++]=255&x.bi_buf,x.bi_buf>>=8,x.bi_valid-=8)}(w)}},{"../utils/common":41}],53:[function(t,i,s){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,s){(function(n){(function(o,a){if(!o.setImmediate){var l,h,m,u,v=1,p={},b=!1,f=o.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(o);g=g&&g.setTimeout?g:o,l={}.toString.call(o.process)==="[object process]"?function(P){process.nextTick(function(){k(P)})}:function(){if(o.postMessage&&!o.importScripts){var P=!0,C=o.onmessage;return o.onmessage=function(){P=!1},o.postMessage("","*"),o.onmessage=C,P}}()?(u="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(P){o.postMessage(u+P,"*")}):o.MessageChannel?((m=new MessageChannel).port1.onmessage=function(P){k(P.data)},function(P){m.port2.postMessage(P)}):f&&"onreadystatechange"in f.createElement("script")?(h=f.documentElement,function(P){var C=f.createElement("script");C.onreadystatechange=function(){k(P),C.onreadystatechange=null,h.removeChild(C),C=null},h.appendChild(C)}):function(P){setTimeout(k,0,P)},g.setImmediate=function(P){typeof P!="function"&&(P=new Function(""+P));for(var C=new Array(arguments.length-1),B=0;B<C.length;B++)C[B]=arguments[B+1];var F={callback:P,args:C};return p[v]=F,l(v),v++},g.clearImmediate=y}function y(P){delete p[P]}function k(P){if(b)setTimeout(k,0,P);else{var C=p[P];if(C){b=!0;try{(function(B){var F=B.callback,V=B.args;switch(V.length){case 0:F();break;case 1:F(V[0]);break;case 2:F(V[0],V[1]);break;case 3:F(V[0],V[1],V[2]);break;default:F.apply(a,V)}})(C)}finally{y(P),b=!1}}}}function S(P){P.source===o&&typeof P.data=="string"&&P.data.indexOf(u)===0&&k(+P.data.slice(u.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof Ue<"u"?Ue:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(tn);var nd=tn.exports;const ad=Vs(nd);var ld=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,rn=(r,e,t,i)=>{for(var s=i>1?void 0:i?cd(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ld(e,t,s),s};let ws=class extends Ae{createRenderRoot(){return this}render(){return re`
            <ui-flex-grid-row gap="0.25rem">
                <ui-flex-grid-item>
                    <ui-button
                        variant="full"
                        color="primary"
                        ripple
                        @click=${async()=>{const r=ne.queryImportDialog();r.storeKey=this.storeKey,r.show()}}
                    >
                        Import
                    </ui-button>
                </ui-flex-grid-item>

                <ui-flex-grid-item class="flex align-center justify-center" flex="0">
                    <ui-icon-button
                        style="width: 2.5rem; height: 2.5rem;"
                        ghost
                        ripple
                        @click=${async()=>await this.export()}
                    >
                        ${ze.smoothieLineIcons.download}
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `}async export(){if(!this.storeKey)return;const r=new ad,e=be(this.storeKey),t=ne.queryStore().getData(this.storeKey);if(t!==void 0){for(const i of t){const s=e.fileName(i);r.file(s,JSON.stringify(i,null,4))}od.saveAs(await r.generateAsync({type:"blob"}),e.zipFileName())}}};rn([pe({type:String,attribute:"store-key",reflect:!0})],ws.prototype,"storeKey",2);ws=rn([Se("pg-drawer-item-import")],ws);const ud="modulepreload",dd=function(r){return"/pg-vis-dev.github.io/"+r},Vi={},pd=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=dd(l),l in Vi)return;Vi[l]=!0;const h=l.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":ud,h||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),h)return new Promise((v,p)=>{u.addEventListener("load",v),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})};function hd(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:s,onRegisteredSW:n,onRegisterError:o}=r;let a,l;const h=async(u=!0)=>{await l};async function m(){if("serviceWorker"in navigator){if(a=await pd(async()=>{const{Workbox:u}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:u}},[]).then(({Workbox:u})=>new u("/pg-vis-dev.github.io/sw.js",{scope:"/pg-vis-dev.github.io/",type:"classic"})).catch(u=>{o==null||o(u)}),!a)return;a.addEventListener("activated",u=>{(u.isUpdate||u.isExternal)&&window.location.reload()}),a.addEventListener("installed",u=>{u.isUpdate||i==null||i()}),a.register({immediate:e}).then(u=>{n?n("/pg-vis-dev.github.io/sw.js",u):s==null||s(u)}).catch(u=>{o==null||o(u)})}}return l=m(),h}hd({onRegistered(r){setTimeout(async()=>{try{console.debug(`Update service... (currentVersion: ${Qo})`),await(r==null?void 0:r.update())}catch(e){console.warn(`Auto update failed: ${e}`)}})}});

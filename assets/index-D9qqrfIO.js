var vo=Object.defineProperty;var bo=(s,e,t)=>e in s?vo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Oe=(s,e,t)=>bo(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar=globalThis,ns=ar.ShadowRoot&&(ar.ShadyCSS===void 0||ar.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,as=Symbol(),Ds=new WeakMap;let Ti=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==as)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ns&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ds.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ds.set(t,e))}return e}toString(){return this.cssText}};const wo=s=>new Ti(typeof s=="string"?s:s+"",void 0,as),Eo=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Ti(t,s,as)},ko=(s,e)=>{if(ns)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=ar.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},Gs=ns?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return wo(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:To,defineProperty:So,getOwnPropertyDescriptor:Ao,getOwnPropertyNames:Co,getOwnPropertySymbols:xo,getPrototypeOf:Po}=Object,Ve=globalThis,Us=Ve.trustedTypes,Oo=Us?Us.emptyScript:"",$r=Ve.reactiveElementPolyfillSupport,Dt=(s,e)=>s,cr={toAttribute(s,e){switch(e){case Boolean:s=s?Oo:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ls=(s,e)=>!To(s,e),Fs={attribute:!0,type:String,converter:cr,reflect:!1,hasChanged:ls};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ve.litPropertyMetadata??(Ve.litPropertyMetadata=new WeakMap);class ht extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Fs){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&So(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=Ao(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const a=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fs}static _$Ei(){if(this.hasOwnProperty(Dt("elementProperties")))return;const e=Po(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dt("properties"))){const t=this.properties,i=[...Co(t),...xo(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Gs(r))}else e!==void 0&&t.push(Gs(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ko(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:cr).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:cr;this._$Em=r,this[r]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ls)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ht[Dt("elementProperties")]=new Map,ht[Dt("finalized")]=new Map,$r==null||$r({ReactiveElement:ht}),(Ve.reactiveElementVersions??(Ve.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=globalThis,ur=Gt.trustedTypes,js=ur?ur.createPolicy("lit-html",{createHTML:s=>s}):void 0,Si="$lit$",qe=`lit$${Math.random().toFixed(9).slice(2)}$`,Ai="?"+qe,Ro=`<${Ai}>`,ot=document,It=()=>ot.createComment(""),Bt=s=>s===null||typeof s!="object"&&typeof s!="function",cs=Array.isArray,$o=s=>cs(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Lr=`[ 	
\f\r]`,Ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Is=/-->/g,Bs=/>/g,et=RegExp(`>|${Lr}(?:([^\\s"'>=/]+)(${Lr}*=${Lr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zs=/'/g,Ms=/"/g,Ci=/^(?:script|style|textarea|title)$/i,Lo=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),_e=Lo(1),yt=Symbol.for("lit-noChange"),Ce=Symbol.for("lit-nothing"),Ns=new WeakMap,rt=ot.createTreeWalker(ot,129);function xi(s,e){if(!cs(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return js!==void 0?js.createHTML(e):e}const Do=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=Ot;for(let a=0;a<t;a++){const c=s[a];let h,m,p=-1,b=0;for(;b<c.length&&(o.lastIndex=b,m=o.exec(c),m!==null);)b=o.lastIndex,o===Ot?m[1]==="!--"?o=Is:m[1]!==void 0?o=Bs:m[2]!==void 0?(Ci.test(m[2])&&(r=RegExp("</"+m[2],"g")),o=et):m[3]!==void 0&&(o=et):o===et?m[0]===">"?(o=r??Ot,p=-1):m[1]===void 0?p=-2:(p=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?et:m[3]==='"'?Ms:zs):o===Ms||o===zs?o=et:o===Is||o===Bs?o=Ot:(o=et,r=void 0);const d=o===et&&s[a+1].startsWith("/>")?" ":"";n+=o===Ot?c+Ro:p>=0?(i.push(h),c.slice(0,p)+Si+c.slice(p)+qe+d):c+qe+(p===-2?a:d)}return[xi(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Hr=class Pi{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,c=this.parts,[h,m]=Do(e,t);if(this.el=Pi.createElement(h,i),rt.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=rt.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(Si)){const b=m[o++],d=r.getAttribute(p).split(qe),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:w[2],strings:d,ctor:w[1]==="."?Uo:w[1]==="?"?Fo:w[1]==="@"?jo:kr}),r.removeAttribute(p)}else p.startsWith(qe)&&(c.push({type:6,index:n}),r.removeAttribute(p));if(Ci.test(r.tagName)){const p=r.textContent.split(qe),b=p.length-1;if(b>0){r.textContent=ur?ur.emptyScript:"";for(let d=0;d<b;d++)r.append(p[d],It()),rt.nextNode(),c.push({type:2,index:++n});r.append(p[b],It())}}}else if(r.nodeType===8)if(r.data===Ai)c.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(qe,p+1))!==-1;)c.push({type:7,index:n}),p+=qe.length-1}n++}}static createElement(e,t){const i=ot.createElement("template");return i.innerHTML=e,i}};function _t(s,e,t=s,i){var o,a;if(e===yt)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=Bt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=_t(s,r._$AS(s,e.values),r,i)),e}let Go=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??ot).importNode(t,!0);rt.currentNode=r;let n=rt.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new us(n,n.nextSibling,this,e):c.type===1?h=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(h=new Io(n,this,e)),this._$AV.push(h),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=rt.nextNode(),o++)}return rt.currentNode=ot,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},us=class Oi{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=Ce,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_t(this,e,t),Bt(e)?e===Ce||e==null||e===""?(this._$AH!==Ce&&this._$AR(),this._$AH=Ce):e!==this._$AH&&e!==yt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$o(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ce&&Bt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ot.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Hr.createElement(xi(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new Go(r,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Ns.get(e.strings);return t===void 0&&Ns.set(e.strings,t=new Hr(e)),t}k(e){cs(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Oi(this.O(It()),this.O(It()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},kr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=Ce,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ce}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=_t(this,e,t,0),o=!Bt(e)||e!==this._$AH&&e!==yt,o&&(this._$AH=e);else{const a=e;let c,h;for(e=n[0],c=0;c<n.length-1;c++)h=_t(this,a[i+c],t,c),h===yt&&(h=this._$AH[c]),o||(o=!Bt(h)||h!==this._$AH[c]),h===Ce?e=Ce:e!==Ce&&(e+=(h??"")+n[c+1]),this._$AH[c]=h}o&&!r&&this.j(e)}j(e){e===Ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Uo=class extends kr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ce?void 0:e}},Fo=class extends kr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ce)}},jo=class extends kr{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=_t(this,e,t,0)??Ce)===yt)return;const i=this._$AH,r=e===Ce&&i!==Ce||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Ce&&(i===Ce||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Io=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){_t(this,e)}};const Dr=Gt.litHtmlPolyfillSupport;Dr==null||Dr(Hr,us),(Gt.litHtmlVersions??(Gt.litHtmlVersions=[])).push("3.2.1");const Bo=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new us(e.insertBefore(It(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Le=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return yt}};var ki;Le._$litElement$=!0,Le.finalized=!0,(ki=globalThis.litElementHydrateSupport)==null||ki.call(globalThis,{LitElement:Le});const Gr=globalThis.litElementPolyfillSupport;Gr==null||Gr({LitElement:Le});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo={attribute:!0,type:String,converter:cr,reflect:!1,hasChanged:ls},Mo=(s=zo,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){const{name:o}=t;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,s)}}throw Error("Unsupported decorator location: "+i)};function ke(s){return(e,t)=>typeof t=="object"?Mo(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}function Tr(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&process.version!==void 0?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}function ps(s,e,t,i){if(typeof t!="function")throw new Error("method for before hook must be a function");return i||(i={}),Array.isArray(e)?e.reverse().reduce((r,n)=>ps.bind(null,s,n,r,i),t)():Promise.resolve().then(()=>s.registry[e]?s.registry[e].reduce((r,n)=>n.hook.bind(null,r,i),t)():t(i))}function No(s,e,t,i){const r=i;s.registry[t]||(s.registry[t]=[]),e==="before"&&(i=(n,o)=>Promise.resolve().then(r.bind(null,o)).then(n.bind(null,o))),e==="after"&&(i=(n,o)=>{let a;return Promise.resolve().then(n.bind(null,o)).then(c=>(a=c,r(a,o))).then(()=>a)}),e==="error"&&(i=(n,o)=>Promise.resolve().then(n.bind(null,o)).catch(a=>r(a,o))),s.registry[t].push({hook:i,orig:r})}function qo(s,e,t){if(!s.registry[e])return;const i=s.registry[e].map(r=>r.orig).indexOf(t);i!==-1&&s.registry[e].splice(i,1)}const qs=Function.bind,Hs=qs.bind(qs);function Ri(s,e,t){const i=Hs(qo,null).apply(null,t?[e,t]:[e]);s.api={remove:i},s.remove=i,["before","error","after","wrap"].forEach(r=>{const n=t?[e,r,t]:[e,r];s[r]=s.api[r]=Hs(No,null).apply(null,n)})}function Ho(){const s=Symbol("Singular"),e={registry:{}},t=ps.bind(null,e,s);return Ri(t,e,s),t}function Vo(){const s={registry:{}},e=ps.bind(null,s);return Ri(e,s),e}const Wo={Singular:Ho,Collection:Vo};var Zo="0.0.0-development",Ko=`octokit-endpoint.js/${Zo} ${Tr()}`,Jo={method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":Ko},mediaType:{format:""}};function Yo(s){return s?Object.keys(s).reduce((e,t)=>(e[t.toLowerCase()]=s[t],e),{}):{}}function Xo(s){if(typeof s!="object"||s===null||Object.prototype.toString.call(s)!=="[object Object]")return!1;const e=Object.getPrototypeOf(s);if(e===null)return!0;const t=Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Function.prototype.call(t)===Function.prototype.call(s)}function $i(s,e){const t=Object.assign({},s);return Object.keys(e).forEach(i=>{Xo(e[i])?i in s?t[i]=$i(s[i],e[i]):Object.assign(t,{[i]:e[i]}):Object.assign(t,{[i]:e[i]})}),t}function Vs(s){for(const e in s)s[e]===void 0&&delete s[e];return s}function Vr(s,e,t){var r;if(typeof e=="string"){let[n,o]=e.split(" ");t=Object.assign(o?{method:n,url:o}:{url:n},t)}else t=Object.assign({},e);t.headers=Yo(t.headers),Vs(t),Vs(t.headers);const i=$i(s||{},t);return t.url==="/graphql"&&(s&&((r=s.mediaType.previews)!=null&&r.length)&&(i.mediaType.previews=s.mediaType.previews.filter(n=>!i.mediaType.previews.includes(n)).concat(i.mediaType.previews)),i.mediaType.previews=(i.mediaType.previews||[]).map(n=>n.replace(/-preview/,""))),i}function Qo(s,e){const t=/\?/.test(s)?"&":"?",i=Object.keys(e);return i.length===0?s:s+t+i.map(r=>r==="q"?"q="+e.q.split("+").map(encodeURIComponent).join("+"):`${r}=${encodeURIComponent(e[r])}`).join("&")}var en=/\{[^}]+\}/g;function tn(s){return s.replace(/^\W+|\W+$/g,"").split(/,/)}function rn(s){const e=s.match(en);return e?e.map(tn).reduce((t,i)=>t.concat(i),[]):[]}function Ws(s,e){const t={__proto__:null};for(const i of Object.keys(s))e.indexOf(i)===-1&&(t[i]=s[i]);return t}function Li(s){return s.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function ft(s){return encodeURIComponent(s).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Rt(s,e,t){return e=s==="+"||s==="#"?Li(e):ft(e),t?ft(t)+"="+e:e}function dt(s){return s!=null}function Ur(s){return s===";"||s==="&"||s==="?"}function sn(s,e,t,i){var r=s[t],n=[];if(dt(r)&&r!=="")if(typeof r=="string"||typeof r=="number"||typeof r=="boolean")r=r.toString(),i&&i!=="*"&&(r=r.substring(0,parseInt(i,10))),n.push(Rt(e,r,Ur(e)?t:""));else if(i==="*")Array.isArray(r)?r.filter(dt).forEach(function(o){n.push(Rt(e,o,Ur(e)?t:""))}):Object.keys(r).forEach(function(o){dt(r[o])&&n.push(Rt(e,r[o],o))});else{const o=[];Array.isArray(r)?r.filter(dt).forEach(function(a){o.push(Rt(e,a))}):Object.keys(r).forEach(function(a){dt(r[a])&&(o.push(ft(a)),o.push(Rt(e,r[a].toString())))}),Ur(e)?n.push(ft(t)+"="+o.join(",")):o.length!==0&&n.push(o.join(","))}else e===";"?dt(r)&&n.push(ft(t)):r===""&&(e==="&"||e==="?")?n.push(ft(t)+"="):r===""&&n.push("");return n}function on(s){return{expand:nn.bind(null,s)}}function nn(s,e){var t=["+","#",".","/",";","?","&"];return s=s.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(i,r,n){if(r){let a="";const c=[];if(t.indexOf(r.charAt(0))!==-1&&(a=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(h){var m=/([^:\*]*)(?::(\d+)|(\*))?/.exec(h);c.push(sn(e,a,m[1],m[2]||m[3]))}),a&&a!=="+"){var o=",";return a==="?"?o="&":a!=="#"&&(o=a),(c.length!==0?a:"")+c.join(o)}else return c.join(",")}else return Li(n)}),s==="/"?s:s.replace(/\/$/,"")}function Di(s){var m;let e=s.method.toUpperCase(),t=(s.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),i=Object.assign({},s.headers),r,n=Ws(s,["method","baseUrl","url","headers","request","mediaType"]);const o=rn(t);t=on(t).expand(n),/^http/.test(t)||(t=s.baseUrl+t);const a=Object.keys(s).filter(p=>o.includes(p)).concat("baseUrl"),c=Ws(n,a);if(!/application\/octet-stream/i.test(i.accept)&&(s.mediaType.format&&(i.accept=i.accept.split(/,/).map(p=>p.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${s.mediaType.format}`)).join(",")),t.endsWith("/graphql")&&(m=s.mediaType.previews)!=null&&m.length)){const p=i.accept.match(/[\w-]+(?=-preview)/g)||[];i.accept=p.concat(s.mediaType.previews).map(b=>{const d=s.mediaType.format?`.${s.mediaType.format}`:"+json";return`application/vnd.github.${b}-preview${d}`}).join(",")}return["GET","HEAD"].includes(e)?t=Qo(t,c):"data"in c?r=c.data:Object.keys(c).length&&(r=c),!i["content-type"]&&typeof r<"u"&&(i["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(e)&&typeof r>"u"&&(r=""),Object.assign({method:e,url:t,headers:i},typeof r<"u"?{body:r}:null,s.request?{request:s.request}:null)}function an(s,e,t){return Di(Vr(s,e,t))}function Gi(s,e){const t=Vr(s,e),i=an.bind(null,t);return Object.assign(i,{DEFAULTS:t,defaults:Gi.bind(null,t),merge:Vr.bind(null,t),parse:Di})}var ln=Gi(null,Jo);class Lt extends Error{constructor(t,i,r){super(t);Oe(this,"name");Oe(this,"status");Oe(this,"request");Oe(this,"response");this.name="HttpError",this.status=Number.parseInt(i),Number.isNaN(this.status)&&(this.status=0),"response"in r&&(this.response=r.response);const n=Object.assign({},r.request);r.request.headers.authorization&&(n.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),n.url=n.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=n}}var cn="0.0.0-development",un={headers:{"user-agent":`octokit-request.js/${cn} ${Tr()}`}};function pn(s){if(typeof s!="object"||s===null||Object.prototype.toString.call(s)!=="[object Object]")return!1;const e=Object.getPrototypeOf(s);if(e===null)return!0;const t=Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Function.prototype.call(t)===Function.prototype.call(s)}async function Zs(s){var p,b,d,w,g;const e=((p=s.request)==null?void 0:p.fetch)||globalThis.fetch;if(!e)throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");const t=((b=s.request)==null?void 0:b.log)||console,i=((d=s.request)==null?void 0:d.parseSuccessResponseBody)!==!1,r=pn(s.body)||Array.isArray(s.body)?JSON.stringify(s.body):s.body,n=Object.fromEntries(Object.entries(s.headers).map(([y,f])=>[y,String(f)]));let o;try{o=await e(s.url,{method:s.method,body:r,redirect:(w=s.request)==null?void 0:w.redirect,headers:n,signal:(g=s.request)==null?void 0:g.signal,...s.body&&{duplex:"half"}})}catch(y){let f="Unknown Error";if(y instanceof Error){if(y.name==="AbortError")throw y.status=500,y;f=y.message,y.name==="TypeError"&&"cause"in y&&(y.cause instanceof Error?f=y.cause.message:typeof y.cause=="string"&&(f=y.cause))}const k=new Lt(f,500,{request:s});throw k.cause=y,k}const a=o.status,c=o.url,h={};for(const[y,f]of o.headers)h[y]=f;const m={url:c,status:a,headers:h,data:""};if("deprecation"in h){const y=h.link&&h.link.match(/<([^>]+)>; rel="deprecation"/),f=y&&y.pop();t.warn(`[@octokit/request] "${s.method} ${s.url}" is deprecated. It is scheduled to be removed on ${h.sunset}${f?`. See ${f}`:""}`)}if(a===204||a===205)return m;if(s.method==="HEAD"){if(a<400)return m;throw new Lt(o.statusText,a,{response:m,request:s})}if(a===304)throw m.data=await Fr(o),new Lt("Not modified",a,{response:m,request:s});if(a>=400)throw m.data=await Fr(o),new Lt(dn(m.data),a,{response:m,request:s});return m.data=i?await Fr(o):o.body,m}async function Fr(s){const e=s.headers.get("content-type");return/application\/json/.test(e)?s.json().catch(()=>s.text()).catch(()=>""):!e||/^text\/|charset=utf-8$/.test(e)?s.text():s.arrayBuffer()}function dn(s){if(typeof s=="string")return s;if(s instanceof ArrayBuffer)return"Unknown error";if("message"in s){const e="documentation_url"in s?` - ${s.documentation_url}`:"";return Array.isArray(s.errors)?`${s.message}: ${s.errors.map(t=>JSON.stringify(t)).join(", ")}${e}`:`${s.message}${e}`}return`Unknown error: ${JSON.stringify(s)}`}function Wr(s,e){const t=s.defaults(e);return Object.assign(function(r,n){const o=t.merge(r,n);if(!o.request||!o.request.hook)return Zs(t.parse(o));const a=(c,h)=>Zs(t.parse(t.merge(c,h)));return Object.assign(a,{endpoint:t,defaults:Wr.bind(null,t)}),o.request.hook(a,o)},{endpoint:t,defaults:Wr.bind(null,t)})}var Zr=Wr(ln,un),hn="0.0.0-development";function gn(s){return`Request failed due to following response errors:
`+s.errors.map(e=>` - ${e.message}`).join(`
`)}var fn=class extends Error{constructor(e,t,i){super(gn(i));Oe(this,"name","GraphqlResponseError");Oe(this,"errors");Oe(this,"data");this.request=e,this.headers=t,this.response=i,this.errors=i.errors,this.data=i.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},mn=["method","baseUrl","url","headers","request","query","mediaType"],yn=["query","method","url"],Ks=/\/api\/v3\/?$/;function _n(s,e,t){if(t){if(typeof e=="string"&&"query"in t)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const o in t)if(yn.includes(o))return Promise.reject(new Error(`[@octokit/graphql] "${o}" cannot be used as variable name`))}const i=typeof e=="string"?Object.assign({query:e},t):e,r=Object.keys(i).reduce((o,a)=>mn.includes(a)?(o[a]=i[a],o):(o.variables||(o.variables={}),o.variables[a]=i[a],o),{}),n=i.baseUrl||s.endpoint.DEFAULTS.baseUrl;return Ks.test(n)&&(r.url=n.replace(Ks,"/api/graphql")),s(r).then(o=>{if(o.data.errors){const a={};for(const c of Object.keys(o.headers))a[c]=o.headers[c];throw new fn(r,a,o.data)}return o.data.data})}function ds(s,e){const t=s.defaults(e);return Object.assign((r,n)=>_n(t,r,n),{defaults:ds.bind(null,t),endpoint:t.endpoint})}ds(Zr,{headers:{"user-agent":`octokit-graphql.js/${hn} ${Tr()}`},method:"POST",url:"/graphql"});function vn(s){return ds(s,{method:"POST",url:"/graphql"})}var bn=/^v1\./,wn=/^ghs_/,En=/^ghu_/;async function kn(s){const e=s.split(/\./).length===3,t=bn.test(s)||wn.test(s),i=En.test(s);return{type:"token",token:s,tokenType:e?"app":t?"installation":i?"user-to-server":"oauth"}}function Tn(s){return s.split(/\./).length===3?`bearer ${s}`:`token ${s}`}async function Sn(s,e,t,i){const r=e.endpoint.merge(t,i);return r.headers.authorization=Tn(s),e(r)}var An=function(e){if(!e)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof e!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return e=e.replace(/^(token|bearer) +/i,""),Object.assign(kn.bind(null,e),{hook:Sn.bind(null,e)})};const Ui="6.1.2",Js=()=>{},Cn=console.warn.bind(console),xn=console.error.bind(console),Ys=`octokit-core.js/${Ui} ${Tr()}`;var nr;let Pn=(nr=class{constructor(e={}){Oe(this,"request");Oe(this,"graphql");Oe(this,"log");Oe(this,"hook");Oe(this,"auth");const t=new Wo.Collection,i={baseUrl:Zr.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},e.request,{hook:t.bind(null,"request")}),mediaType:{previews:[],format:""}};if(i.headers["user-agent"]=e.userAgent?`${e.userAgent} ${Ys}`:Ys,e.baseUrl&&(i.baseUrl=e.baseUrl),e.previews&&(i.mediaType.previews=e.previews),e.timeZone&&(i.headers["time-zone"]=e.timeZone),this.request=Zr.defaults(i),this.graphql=vn(this.request).defaults(i),this.log=Object.assign({debug:Js,info:Js,warn:Cn,error:xn},e.log),this.hook=t,e.authStrategy){const{authStrategy:n,...o}=e,a=n(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:o},e.auth));t.wrap("request",a.hook),this.auth=a}else if(!e.auth)this.auth=async()=>({type:"unauthenticated"});else{const n=An(e.auth);t.wrap("request",n.hook),this.auth=n}const r=this.constructor;for(let n=0;n<r.plugins.length;++n)Object.assign(this,r.plugins[n](this,e))}static defaults(e){return class extends this{constructor(...i){const r=i[0]||{};if(typeof e=="function"){super(e(r));return}super(Object.assign({},e,r,r.userAgent&&e.userAgent?{userAgent:`${r.userAgent} ${e.userAgent}`}:null))}}}static plugin(...e){var r;const t=this.plugins;return r=class extends this{},Oe(r,"plugins",t.concat(e.filter(n=>!t.includes(n)))),r}},Oe(nr,"VERSION",Ui),Oe(nr,"plugins",[]),nr);var On="0.0.0-development";function Rn(s){if(!s.data)return{...s,data:[]};if(!("total_count"in s.data&&!("url"in s.data)))return s;const t=s.data.incomplete_results,i=s.data.repository_selection,r=s.data.total_count;delete s.data.incomplete_results,delete s.data.repository_selection,delete s.data.total_count;const n=Object.keys(s.data)[0],o=s.data[n];return s.data=o,typeof t<"u"&&(s.data.incomplete_results=t),typeof i<"u"&&(s.data.repository_selection=i),s.data.total_count=r,s}function hs(s,e,t){const i=typeof e=="function"?e.endpoint(t):s.request.endpoint(e,t),r=typeof e=="function"?e:s.request,n=i.method,o=i.headers;let a=i.url;return{[Symbol.asyncIterator]:()=>({async next(){if(!a)return{done:!0};try{const c=await r({method:n,url:a,headers:o}),h=Rn(c);return a=((h.headers.link||"").match(/<([^>]+)>;\s*rel="next"/)||[])[1],{value:h}}catch(c){if(c.status!==409)throw c;return a="",{value:{status:200,headers:{},data:[]}}}}})}}function Fi(s,e,t,i){return typeof t=="function"&&(i=t,t=void 0),ji(s,[],hs(s,e,t)[Symbol.asyncIterator](),i)}function ji(s,e,t,i){return t.next().then(r=>{if(r.done)return e;let n=!1;function o(){n=!0}return e=e.concat(i?i(r.value,o):r.value.data),n?e:ji(s,e,t,i)})}Object.assign(Fi,{iterator:hs});function Ii(s){return{paginate:Object.assign(Fi.bind(null,s),{iterator:hs.bind(null,s)})}}Ii.VERSION=On;var $n=(s,e)=>`The cursor at "${s.join(",")}" did not change its value "${e}" after a page transition. Please make sure your that your query is set up correctly.`,Ln=class extends Error{constructor(e,t){super($n(e.pathInQuery,t));Oe(this,"name","MissingCursorChangeError");this.pageInfo=e,this.cursorValue=t,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Dn=class extends Error{constructor(e){super(`No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(e,null,2)}`);Oe(this,"name","MissingPageInfo");this.response=e,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Gn=s=>Object.prototype.toString.call(s)==="[object Object]";function Bi(s){const e=zi(s,"pageInfo");if(e.length===0)throw new Dn(s);return e}var zi=(s,e,t=[])=>{for(const i of Object.keys(s)){const r=[...t,i],n=s[i];if(Gn(n)){if(n.hasOwnProperty(e))return r;const o=zi(n,e,r);if(o.length>0)return o}}return[]},Ut=(s,e)=>e.reduce((t,i)=>t[i],s),jr=(s,e,t)=>{const i=e[e.length-1],r=[...e].slice(0,-1),n=Ut(s,r);typeof t=="function"?n[i]=t(n[i]):n[i]=t},Un=s=>{const e=Bi(s);return{pathInQuery:e,pageInfo:Ut(s,[...e,"pageInfo"])}},Mi=s=>s.hasOwnProperty("hasNextPage"),Fn=s=>Mi(s)?s.endCursor:s.startCursor,jn=s=>Mi(s)?s.hasNextPage:s.hasPreviousPage,Ni=s=>(e,t={})=>{let i=!0,r={...t};return{[Symbol.asyncIterator]:()=>({async next(){if(!i)return{done:!0,value:{}};const n=await s.graphql(e,r),o=Un(n),a=Fn(o.pageInfo);if(i=jn(o.pageInfo),i&&a===r.cursor)throw new Ln(o,a);return r={...r,cursor:a},{done:!1,value:n}}})}},In=(s,e)=>{if(Object.keys(s).length===0)return Object.assign(s,e);const t=Bi(s),i=[...t,"nodes"],r=Ut(e,i);r&&jr(s,i,c=>[...c,...r]);const n=[...t,"edges"],o=Ut(e,n);o&&jr(s,n,c=>[...c,...o]);const a=[...t,"pageInfo"];return jr(s,a,Ut(e,a)),s},Bn=s=>{const e=Ni(s);return async(t,i={})=>{let r={};for await(const n of e(t,i))r=In(r,n);return r}};function zn(s){return{graphql:Object.assign(s.graphql,{paginate:Object.assign(Bn(s),{iterator:Ni(s)})})}}const Mn="13.2.6",Nn={actions:{addCustomLabelsToSelfHostedRunnerForOrg:["POST /orgs/{org}/actions/runners/{runner_id}/labels"],addCustomLabelsToSelfHostedRunnerForRepo:["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],addSelectedRepoToOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],addSelectedRepoToOrgVariable:["PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"],approveWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"],cancelWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],createEnvironmentVariable:["POST /repos/{owner}/{repo}/environments/{environment_name}/variables"],createOrUpdateEnvironmentSecret:["PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],createOrUpdateOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],createOrgVariable:["POST /orgs/{org}/actions/variables"],createRegistrationTokenForOrg:["POST /orgs/{org}/actions/runners/registration-token"],createRegistrationTokenForRepo:["POST /repos/{owner}/{repo}/actions/runners/registration-token"],createRemoveTokenForOrg:["POST /orgs/{org}/actions/runners/remove-token"],createRemoveTokenForRepo:["POST /repos/{owner}/{repo}/actions/runners/remove-token"],createRepoVariable:["POST /repos/{owner}/{repo}/actions/variables"],createWorkflowDispatch:["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"],deleteActionsCacheById:["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"],deleteActionsCacheByKey:["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"],deleteArtifact:["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],deleteEnvironmentSecret:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],deleteEnvironmentVariable:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],deleteOrgSecret:["DELETE /orgs/{org}/actions/secrets/{secret_name}"],deleteOrgVariable:["DELETE /orgs/{org}/actions/variables/{name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],deleteRepoVariable:["DELETE /repos/{owner}/{repo}/actions/variables/{name}"],deleteSelfHostedRunnerFromOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}"],deleteSelfHostedRunnerFromRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"],deleteWorkflowRun:["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],deleteWorkflowRunLogs:["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],disableSelectedRepositoryGithubActionsOrganization:["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"],disableWorkflow:["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"],downloadArtifact:["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"],downloadJobLogsForWorkflowRun:["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],downloadWorkflowRunAttemptLogs:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"],downloadWorkflowRunLogs:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],enableSelectedRepositoryGithubActionsOrganization:["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"],enableWorkflow:["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"],forceCancelWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"],generateRunnerJitconfigForOrg:["POST /orgs/{org}/actions/runners/generate-jitconfig"],generateRunnerJitconfigForRepo:["POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"],getActionsCacheList:["GET /repos/{owner}/{repo}/actions/caches"],getActionsCacheUsage:["GET /repos/{owner}/{repo}/actions/cache/usage"],getActionsCacheUsageByRepoForOrg:["GET /orgs/{org}/actions/cache/usage-by-repository"],getActionsCacheUsageForOrg:["GET /orgs/{org}/actions/cache/usage"],getAllowedActionsOrganization:["GET /orgs/{org}/actions/permissions/selected-actions"],getAllowedActionsRepository:["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"],getArtifact:["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],getCustomOidcSubClaimForRepo:["GET /repos/{owner}/{repo}/actions/oidc/customization/sub"],getEnvironmentPublicKey:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"],getEnvironmentSecret:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],getEnvironmentVariable:["GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],getGithubActionsDefaultWorkflowPermissionsOrganization:["GET /orgs/{org}/actions/permissions/workflow"],getGithubActionsDefaultWorkflowPermissionsRepository:["GET /repos/{owner}/{repo}/actions/permissions/workflow"],getGithubActionsPermissionsOrganization:["GET /orgs/{org}/actions/permissions"],getGithubActionsPermissionsRepository:["GET /repos/{owner}/{repo}/actions/permissions"],getJobForWorkflowRun:["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],getOrgPublicKey:["GET /orgs/{org}/actions/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/actions/secrets/{secret_name}"],getOrgVariable:["GET /orgs/{org}/actions/variables/{name}"],getPendingDeploymentsForRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],getRepoPermissions:["GET /repos/{owner}/{repo}/actions/permissions",{},{renamed:["actions","getGithubActionsPermissionsRepository"]}],getRepoPublicKey:["GET /repos/{owner}/{repo}/actions/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],getRepoVariable:["GET /repos/{owner}/{repo}/actions/variables/{name}"],getReviewsForRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"],getSelfHostedRunnerForOrg:["GET /orgs/{org}/actions/runners/{runner_id}"],getSelfHostedRunnerForRepo:["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],getWorkflow:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],getWorkflowAccessToRepository:["GET /repos/{owner}/{repo}/actions/permissions/access"],getWorkflowRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],getWorkflowRunAttempt:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"],getWorkflowRunUsage:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],getWorkflowUsage:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],listArtifactsForRepo:["GET /repos/{owner}/{repo}/actions/artifacts"],listEnvironmentSecrets:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"],listEnvironmentVariables:["GET /repos/{owner}/{repo}/environments/{environment_name}/variables"],listJobsForWorkflowRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],listJobsForWorkflowRunAttempt:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"],listLabelsForSelfHostedRunnerForOrg:["GET /orgs/{org}/actions/runners/{runner_id}/labels"],listLabelsForSelfHostedRunnerForRepo:["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],listOrgSecrets:["GET /orgs/{org}/actions/secrets"],listOrgVariables:["GET /orgs/{org}/actions/variables"],listRepoOrganizationSecrets:["GET /repos/{owner}/{repo}/actions/organization-secrets"],listRepoOrganizationVariables:["GET /repos/{owner}/{repo}/actions/organization-variables"],listRepoSecrets:["GET /repos/{owner}/{repo}/actions/secrets"],listRepoVariables:["GET /repos/{owner}/{repo}/actions/variables"],listRepoWorkflows:["GET /repos/{owner}/{repo}/actions/workflows"],listRunnerApplicationsForOrg:["GET /orgs/{org}/actions/runners/downloads"],listRunnerApplicationsForRepo:["GET /repos/{owner}/{repo}/actions/runners/downloads"],listSelectedReposForOrgSecret:["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"],listSelectedReposForOrgVariable:["GET /orgs/{org}/actions/variables/{name}/repositories"],listSelectedRepositoriesEnabledGithubActionsOrganization:["GET /orgs/{org}/actions/permissions/repositories"],listSelfHostedRunnersForOrg:["GET /orgs/{org}/actions/runners"],listSelfHostedRunnersForRepo:["GET /repos/{owner}/{repo}/actions/runners"],listWorkflowRunArtifacts:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],listWorkflowRuns:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],listWorkflowRunsForRepo:["GET /repos/{owner}/{repo}/actions/runs"],reRunJobForWorkflowRun:["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"],reRunWorkflow:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],reRunWorkflowFailedJobs:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"],removeAllCustomLabelsFromSelfHostedRunnerForOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"],removeAllCustomLabelsFromSelfHostedRunnerForRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],removeCustomLabelFromSelfHostedRunnerForOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"],removeCustomLabelFromSelfHostedRunnerForRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],removeSelectedRepoFromOrgVariable:["DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"],reviewCustomGatesForRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"],reviewPendingDeploymentsForRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],setAllowedActionsOrganization:["PUT /orgs/{org}/actions/permissions/selected-actions"],setAllowedActionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"],setCustomLabelsForSelfHostedRunnerForOrg:["PUT /orgs/{org}/actions/runners/{runner_id}/labels"],setCustomLabelsForSelfHostedRunnerForRepo:["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],setCustomOidcSubClaimForRepo:["PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"],setGithubActionsDefaultWorkflowPermissionsOrganization:["PUT /orgs/{org}/actions/permissions/workflow"],setGithubActionsDefaultWorkflowPermissionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions/workflow"],setGithubActionsPermissionsOrganization:["PUT /orgs/{org}/actions/permissions"],setGithubActionsPermissionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"],setSelectedReposForOrgVariable:["PUT /orgs/{org}/actions/variables/{name}/repositories"],setSelectedRepositoriesEnabledGithubActionsOrganization:["PUT /orgs/{org}/actions/permissions/repositories"],setWorkflowAccessToRepository:["PUT /repos/{owner}/{repo}/actions/permissions/access"],updateEnvironmentVariable:["PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],updateOrgVariable:["PATCH /orgs/{org}/actions/variables/{name}"],updateRepoVariable:["PATCH /repos/{owner}/{repo}/actions/variables/{name}"]},activity:{checkRepoIsStarredByAuthenticatedUser:["GET /user/starred/{owner}/{repo}"],deleteRepoSubscription:["DELETE /repos/{owner}/{repo}/subscription"],deleteThreadSubscription:["DELETE /notifications/threads/{thread_id}/subscription"],getFeeds:["GET /feeds"],getRepoSubscription:["GET /repos/{owner}/{repo}/subscription"],getThread:["GET /notifications/threads/{thread_id}"],getThreadSubscriptionForAuthenticatedUser:["GET /notifications/threads/{thread_id}/subscription"],listEventsForAuthenticatedUser:["GET /users/{username}/events"],listNotificationsForAuthenticatedUser:["GET /notifications"],listOrgEventsForAuthenticatedUser:["GET /users/{username}/events/orgs/{org}"],listPublicEvents:["GET /events"],listPublicEventsForRepoNetwork:["GET /networks/{owner}/{repo}/events"],listPublicEventsForUser:["GET /users/{username}/events/public"],listPublicOrgEvents:["GET /orgs/{org}/events"],listReceivedEventsForUser:["GET /users/{username}/received_events"],listReceivedPublicEventsForUser:["GET /users/{username}/received_events/public"],listRepoEvents:["GET /repos/{owner}/{repo}/events"],listRepoNotificationsForAuthenticatedUser:["GET /repos/{owner}/{repo}/notifications"],listReposStarredByAuthenticatedUser:["GET /user/starred"],listReposStarredByUser:["GET /users/{username}/starred"],listReposWatchedByUser:["GET /users/{username}/subscriptions"],listStargazersForRepo:["GET /repos/{owner}/{repo}/stargazers"],listWatchedReposForAuthenticatedUser:["GET /user/subscriptions"],listWatchersForRepo:["GET /repos/{owner}/{repo}/subscribers"],markNotificationsAsRead:["PUT /notifications"],markRepoNotificationsAsRead:["PUT /repos/{owner}/{repo}/notifications"],markThreadAsDone:["DELETE /notifications/threads/{thread_id}"],markThreadAsRead:["PATCH /notifications/threads/{thread_id}"],setRepoSubscription:["PUT /repos/{owner}/{repo}/subscription"],setThreadSubscription:["PUT /notifications/threads/{thread_id}/subscription"],starRepoForAuthenticatedUser:["PUT /user/starred/{owner}/{repo}"],unstarRepoForAuthenticatedUser:["DELETE /user/starred/{owner}/{repo}"]},apps:{addRepoToInstallation:["PUT /user/installations/{installation_id}/repositories/{repository_id}",{},{renamed:["apps","addRepoToInstallationForAuthenticatedUser"]}],addRepoToInstallationForAuthenticatedUser:["PUT /user/installations/{installation_id}/repositories/{repository_id}"],checkToken:["POST /applications/{client_id}/token"],createFromManifest:["POST /app-manifests/{code}/conversions"],createInstallationAccessToken:["POST /app/installations/{installation_id}/access_tokens"],deleteAuthorization:["DELETE /applications/{client_id}/grant"],deleteInstallation:["DELETE /app/installations/{installation_id}"],deleteToken:["DELETE /applications/{client_id}/token"],getAuthenticated:["GET /app"],getBySlug:["GET /apps/{app_slug}"],getInstallation:["GET /app/installations/{installation_id}"],getOrgInstallation:["GET /orgs/{org}/installation"],getRepoInstallation:["GET /repos/{owner}/{repo}/installation"],getSubscriptionPlanForAccount:["GET /marketplace_listing/accounts/{account_id}"],getSubscriptionPlanForAccountStubbed:["GET /marketplace_listing/stubbed/accounts/{account_id}"],getUserInstallation:["GET /users/{username}/installation"],getWebhookConfigForApp:["GET /app/hook/config"],getWebhookDelivery:["GET /app/hook/deliveries/{delivery_id}"],listAccountsForPlan:["GET /marketplace_listing/plans/{plan_id}/accounts"],listAccountsForPlanStubbed:["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],listInstallationReposForAuthenticatedUser:["GET /user/installations/{installation_id}/repositories"],listInstallationRequestsForAuthenticatedApp:["GET /app/installation-requests"],listInstallations:["GET /app/installations"],listInstallationsForAuthenticatedUser:["GET /user/installations"],listPlans:["GET /marketplace_listing/plans"],listPlansStubbed:["GET /marketplace_listing/stubbed/plans"],listReposAccessibleToInstallation:["GET /installation/repositories"],listSubscriptionsForAuthenticatedUser:["GET /user/marketplace_purchases"],listSubscriptionsForAuthenticatedUserStubbed:["GET /user/marketplace_purchases/stubbed"],listWebhookDeliveries:["GET /app/hook/deliveries"],redeliverWebhookDelivery:["POST /app/hook/deliveries/{delivery_id}/attempts"],removeRepoFromInstallation:["DELETE /user/installations/{installation_id}/repositories/{repository_id}",{},{renamed:["apps","removeRepoFromInstallationForAuthenticatedUser"]}],removeRepoFromInstallationForAuthenticatedUser:["DELETE /user/installations/{installation_id}/repositories/{repository_id}"],resetToken:["PATCH /applications/{client_id}/token"],revokeInstallationAccessToken:["DELETE /installation/token"],scopeToken:["POST /applications/{client_id}/token/scoped"],suspendInstallation:["PUT /app/installations/{installation_id}/suspended"],unsuspendInstallation:["DELETE /app/installations/{installation_id}/suspended"],updateWebhookConfigForApp:["PATCH /app/hook/config"]},billing:{getGithubActionsBillingOrg:["GET /orgs/{org}/settings/billing/actions"],getGithubActionsBillingUser:["GET /users/{username}/settings/billing/actions"],getGithubPackagesBillingOrg:["GET /orgs/{org}/settings/billing/packages"],getGithubPackagesBillingUser:["GET /users/{username}/settings/billing/packages"],getSharedStorageBillingOrg:["GET /orgs/{org}/settings/billing/shared-storage"],getSharedStorageBillingUser:["GET /users/{username}/settings/billing/shared-storage"]},checks:{create:["POST /repos/{owner}/{repo}/check-runs"],createSuite:["POST /repos/{owner}/{repo}/check-suites"],get:["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],getSuite:["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],listAnnotations:["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"],listForRef:["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],listForSuite:["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"],listSuitesForRef:["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],rerequestRun:["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"],rerequestSuite:["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"],setSuitesPreferences:["PATCH /repos/{owner}/{repo}/check-suites/preferences"],update:["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]},codeScanning:{deleteAnalysis:["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"],getAlert:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",{},{renamedParameters:{alert_id:"alert_number"}}],getAnalysis:["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"],getCodeqlDatabase:["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"],getDefaultSetup:["GET /repos/{owner}/{repo}/code-scanning/default-setup"],getSarif:["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],listAlertInstances:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"],listAlertsForOrg:["GET /orgs/{org}/code-scanning/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/code-scanning/alerts"],listAlertsInstances:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",{},{renamed:["codeScanning","listAlertInstances"]}],listCodeqlDatabases:["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"],listRecentAnalyses:["GET /repos/{owner}/{repo}/code-scanning/analyses"],updateAlert:["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],updateDefaultSetup:["PATCH /repos/{owner}/{repo}/code-scanning/default-setup"],uploadSarif:["POST /repos/{owner}/{repo}/code-scanning/sarifs"]},codesOfConduct:{getAllCodesOfConduct:["GET /codes_of_conduct"],getConductCode:["GET /codes_of_conduct/{key}"]},codespaces:{addRepositoryForSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"],addSelectedRepoToOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"],checkPermissionsForDevcontainer:["GET /repos/{owner}/{repo}/codespaces/permissions_check"],codespaceMachinesForAuthenticatedUser:["GET /user/codespaces/{codespace_name}/machines"],createForAuthenticatedUser:["POST /user/codespaces"],createOrUpdateOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],createOrUpdateSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}"],createWithPrForAuthenticatedUser:["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"],createWithRepoForAuthenticatedUser:["POST /repos/{owner}/{repo}/codespaces"],deleteForAuthenticatedUser:["DELETE /user/codespaces/{codespace_name}"],deleteFromOrganization:["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"],deleteOrgSecret:["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],deleteSecretForAuthenticatedUser:["DELETE /user/codespaces/secrets/{secret_name}"],exportForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/exports"],getCodespacesForUserInOrg:["GET /orgs/{org}/members/{username}/codespaces"],getExportDetailsForAuthenticatedUser:["GET /user/codespaces/{codespace_name}/exports/{export_id}"],getForAuthenticatedUser:["GET /user/codespaces/{codespace_name}"],getOrgPublicKey:["GET /orgs/{org}/codespaces/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/codespaces/secrets/{secret_name}"],getPublicKeyForAuthenticatedUser:["GET /user/codespaces/secrets/public-key"],getRepoPublicKey:["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],getSecretForAuthenticatedUser:["GET /user/codespaces/secrets/{secret_name}"],listDevcontainersInRepositoryForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/devcontainers"],listForAuthenticatedUser:["GET /user/codespaces"],listInOrganization:["GET /orgs/{org}/codespaces",{},{renamedParameters:{org_id:"org"}}],listInRepositoryForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces"],listOrgSecrets:["GET /orgs/{org}/codespaces/secrets"],listRepoSecrets:["GET /repos/{owner}/{repo}/codespaces/secrets"],listRepositoriesForSecretForAuthenticatedUser:["GET /user/codespaces/secrets/{secret_name}/repositories"],listSecretsForAuthenticatedUser:["GET /user/codespaces/secrets"],listSelectedReposForOrgSecret:["GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"],preFlightWithRepoForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/new"],publishForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/publish"],removeRepositoryForSecretForAuthenticatedUser:["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"],repoMachinesForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/machines"],setRepositoriesForSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}/repositories"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"],startForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/start"],stopForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/stop"],stopInOrganization:["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"],updateForAuthenticatedUser:["PATCH /user/codespaces/{codespace_name}"]},copilot:{addCopilotSeatsForTeams:["POST /orgs/{org}/copilot/billing/selected_teams"],addCopilotSeatsForUsers:["POST /orgs/{org}/copilot/billing/selected_users"],cancelCopilotSeatAssignmentForTeams:["DELETE /orgs/{org}/copilot/billing/selected_teams"],cancelCopilotSeatAssignmentForUsers:["DELETE /orgs/{org}/copilot/billing/selected_users"],getCopilotOrganizationDetails:["GET /orgs/{org}/copilot/billing"],getCopilotSeatDetailsForUser:["GET /orgs/{org}/members/{username}/copilot"],listCopilotSeats:["GET /orgs/{org}/copilot/billing/seats"],usageMetricsForEnterprise:["GET /enterprises/{enterprise}/copilot/usage"],usageMetricsForOrg:["GET /orgs/{org}/copilot/usage"],usageMetricsForTeam:["GET /orgs/{org}/team/{team_slug}/copilot/usage"]},dependabot:{addSelectedRepoToOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"],createOrUpdateOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],deleteOrgSecret:["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],getAlert:["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],getOrgPublicKey:["GET /orgs/{org}/dependabot/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/dependabot/secrets/{secret_name}"],getRepoPublicKey:["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],listAlertsForEnterprise:["GET /enterprises/{enterprise}/dependabot/alerts"],listAlertsForOrg:["GET /orgs/{org}/dependabot/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/dependabot/alerts"],listOrgSecrets:["GET /orgs/{org}/dependabot/secrets"],listRepoSecrets:["GET /repos/{owner}/{repo}/dependabot/secrets"],listSelectedReposForOrgSecret:["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"],updateAlert:["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"]},dependencyGraph:{createRepositorySnapshot:["POST /repos/{owner}/{repo}/dependency-graph/snapshots"],diffRange:["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"],exportSbom:["GET /repos/{owner}/{repo}/dependency-graph/sbom"]},emojis:{get:["GET /emojis"]},gists:{checkIsStarred:["GET /gists/{gist_id}/star"],create:["POST /gists"],createComment:["POST /gists/{gist_id}/comments"],delete:["DELETE /gists/{gist_id}"],deleteComment:["DELETE /gists/{gist_id}/comments/{comment_id}"],fork:["POST /gists/{gist_id}/forks"],get:["GET /gists/{gist_id}"],getComment:["GET /gists/{gist_id}/comments/{comment_id}"],getRevision:["GET /gists/{gist_id}/{sha}"],list:["GET /gists"],listComments:["GET /gists/{gist_id}/comments"],listCommits:["GET /gists/{gist_id}/commits"],listForUser:["GET /users/{username}/gists"],listForks:["GET /gists/{gist_id}/forks"],listPublic:["GET /gists/public"],listStarred:["GET /gists/starred"],star:["PUT /gists/{gist_id}/star"],unstar:["DELETE /gists/{gist_id}/star"],update:["PATCH /gists/{gist_id}"],updateComment:["PATCH /gists/{gist_id}/comments/{comment_id}"]},git:{createBlob:["POST /repos/{owner}/{repo}/git/blobs"],createCommit:["POST /repos/{owner}/{repo}/git/commits"],createRef:["POST /repos/{owner}/{repo}/git/refs"],createTag:["POST /repos/{owner}/{repo}/git/tags"],createTree:["POST /repos/{owner}/{repo}/git/trees"],deleteRef:["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],getBlob:["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],getCommit:["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],getRef:["GET /repos/{owner}/{repo}/git/ref/{ref}"],getTag:["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],getTree:["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],listMatchingRefs:["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],updateRef:["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]},gitignore:{getAllTemplates:["GET /gitignore/templates"],getTemplate:["GET /gitignore/templates/{name}"]},interactions:{getRestrictionsForAuthenticatedUser:["GET /user/interaction-limits"],getRestrictionsForOrg:["GET /orgs/{org}/interaction-limits"],getRestrictionsForRepo:["GET /repos/{owner}/{repo}/interaction-limits"],getRestrictionsForYourPublicRepos:["GET /user/interaction-limits",{},{renamed:["interactions","getRestrictionsForAuthenticatedUser"]}],removeRestrictionsForAuthenticatedUser:["DELETE /user/interaction-limits"],removeRestrictionsForOrg:["DELETE /orgs/{org}/interaction-limits"],removeRestrictionsForRepo:["DELETE /repos/{owner}/{repo}/interaction-limits"],removeRestrictionsForYourPublicRepos:["DELETE /user/interaction-limits",{},{renamed:["interactions","removeRestrictionsForAuthenticatedUser"]}],setRestrictionsForAuthenticatedUser:["PUT /user/interaction-limits"],setRestrictionsForOrg:["PUT /orgs/{org}/interaction-limits"],setRestrictionsForRepo:["PUT /repos/{owner}/{repo}/interaction-limits"],setRestrictionsForYourPublicRepos:["PUT /user/interaction-limits",{},{renamed:["interactions","setRestrictionsForAuthenticatedUser"]}]},issues:{addAssignees:["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],addLabels:["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],checkUserCanBeAssigned:["GET /repos/{owner}/{repo}/assignees/{assignee}"],checkUserCanBeAssignedToIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"],create:["POST /repos/{owner}/{repo}/issues"],createComment:["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],createLabel:["POST /repos/{owner}/{repo}/labels"],createMilestone:["POST /repos/{owner}/{repo}/milestones"],deleteComment:["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],deleteLabel:["DELETE /repos/{owner}/{repo}/labels/{name}"],deleteMilestone:["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],get:["GET /repos/{owner}/{repo}/issues/{issue_number}"],getComment:["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],getEvent:["GET /repos/{owner}/{repo}/issues/events/{event_id}"],getLabel:["GET /repos/{owner}/{repo}/labels/{name}"],getMilestone:["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],list:["GET /issues"],listAssignees:["GET /repos/{owner}/{repo}/assignees"],listComments:["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],listCommentsForRepo:["GET /repos/{owner}/{repo}/issues/comments"],listEvents:["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],listEventsForRepo:["GET /repos/{owner}/{repo}/issues/events"],listEventsForTimeline:["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"],listForAuthenticatedUser:["GET /user/issues"],listForOrg:["GET /orgs/{org}/issues"],listForRepo:["GET /repos/{owner}/{repo}/issues"],listLabelsForMilestone:["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],listLabelsForRepo:["GET /repos/{owner}/{repo}/labels"],listLabelsOnIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],listMilestones:["GET /repos/{owner}/{repo}/milestones"],lock:["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],removeAllLabels:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],removeAssignees:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],removeLabel:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],setLabels:["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],unlock:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],update:["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],updateComment:["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],updateLabel:["PATCH /repos/{owner}/{repo}/labels/{name}"],updateMilestone:["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]},licenses:{get:["GET /licenses/{license}"],getAllCommonlyUsed:["GET /licenses"],getForRepo:["GET /repos/{owner}/{repo}/license"]},markdown:{render:["POST /markdown"],renderRaw:["POST /markdown/raw",{headers:{"content-type":"text/plain; charset=utf-8"}}]},meta:{get:["GET /meta"],getAllVersions:["GET /versions"],getOctocat:["GET /octocat"],getZen:["GET /zen"],root:["GET /"]},migrations:{deleteArchiveForAuthenticatedUser:["DELETE /user/migrations/{migration_id}/archive"],deleteArchiveForOrg:["DELETE /orgs/{org}/migrations/{migration_id}/archive"],downloadArchiveForOrg:["GET /orgs/{org}/migrations/{migration_id}/archive"],getArchiveForAuthenticatedUser:["GET /user/migrations/{migration_id}/archive"],getStatusForAuthenticatedUser:["GET /user/migrations/{migration_id}"],getStatusForOrg:["GET /orgs/{org}/migrations/{migration_id}"],listForAuthenticatedUser:["GET /user/migrations"],listForOrg:["GET /orgs/{org}/migrations"],listReposForAuthenticatedUser:["GET /user/migrations/{migration_id}/repositories"],listReposForOrg:["GET /orgs/{org}/migrations/{migration_id}/repositories"],listReposForUser:["GET /user/migrations/{migration_id}/repositories",{},{renamed:["migrations","listReposForAuthenticatedUser"]}],startForAuthenticatedUser:["POST /user/migrations"],startForOrg:["POST /orgs/{org}/migrations"],unlockRepoForAuthenticatedUser:["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"],unlockRepoForOrg:["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"]},oidc:{getOidcCustomSubTemplateForOrg:["GET /orgs/{org}/actions/oidc/customization/sub"],updateOidcCustomSubTemplateForOrg:["PUT /orgs/{org}/actions/oidc/customization/sub"]},orgs:{addSecurityManagerTeam:["PUT /orgs/{org}/security-managers/teams/{team_slug}"],assignTeamToOrgRole:["PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"],assignUserToOrgRole:["PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"],blockUser:["PUT /orgs/{org}/blocks/{username}"],cancelInvitation:["DELETE /orgs/{org}/invitations/{invitation_id}"],checkBlockedUser:["GET /orgs/{org}/blocks/{username}"],checkMembershipForUser:["GET /orgs/{org}/members/{username}"],checkPublicMembershipForUser:["GET /orgs/{org}/public_members/{username}"],convertMemberToOutsideCollaborator:["PUT /orgs/{org}/outside_collaborators/{username}"],createCustomOrganizationRole:["POST /orgs/{org}/organization-roles"],createInvitation:["POST /orgs/{org}/invitations"],createOrUpdateCustomProperties:["PATCH /orgs/{org}/properties/schema"],createOrUpdateCustomPropertiesValuesForRepos:["PATCH /orgs/{org}/properties/values"],createOrUpdateCustomProperty:["PUT /orgs/{org}/properties/schema/{custom_property_name}"],createWebhook:["POST /orgs/{org}/hooks"],delete:["DELETE /orgs/{org}"],deleteCustomOrganizationRole:["DELETE /orgs/{org}/organization-roles/{role_id}"],deleteWebhook:["DELETE /orgs/{org}/hooks/{hook_id}"],enableOrDisableSecurityProductOnAllOrgRepos:["POST /orgs/{org}/{security_product}/{enablement}"],get:["GET /orgs/{org}"],getAllCustomProperties:["GET /orgs/{org}/properties/schema"],getCustomProperty:["GET /orgs/{org}/properties/schema/{custom_property_name}"],getMembershipForAuthenticatedUser:["GET /user/memberships/orgs/{org}"],getMembershipForUser:["GET /orgs/{org}/memberships/{username}"],getOrgRole:["GET /orgs/{org}/organization-roles/{role_id}"],getWebhook:["GET /orgs/{org}/hooks/{hook_id}"],getWebhookConfigForOrg:["GET /orgs/{org}/hooks/{hook_id}/config"],getWebhookDelivery:["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"],list:["GET /organizations"],listAppInstallations:["GET /orgs/{org}/installations"],listBlockedUsers:["GET /orgs/{org}/blocks"],listCustomPropertiesValuesForRepos:["GET /orgs/{org}/properties/values"],listFailedInvitations:["GET /orgs/{org}/failed_invitations"],listForAuthenticatedUser:["GET /user/orgs"],listForUser:["GET /users/{username}/orgs"],listInvitationTeams:["GET /orgs/{org}/invitations/{invitation_id}/teams"],listMembers:["GET /orgs/{org}/members"],listMembershipsForAuthenticatedUser:["GET /user/memberships/orgs"],listOrgRoleTeams:["GET /orgs/{org}/organization-roles/{role_id}/teams"],listOrgRoleUsers:["GET /orgs/{org}/organization-roles/{role_id}/users"],listOrgRoles:["GET /orgs/{org}/organization-roles"],listOrganizationFineGrainedPermissions:["GET /orgs/{org}/organization-fine-grained-permissions"],listOutsideCollaborators:["GET /orgs/{org}/outside_collaborators"],listPatGrantRepositories:["GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"],listPatGrantRequestRepositories:["GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"],listPatGrantRequests:["GET /orgs/{org}/personal-access-token-requests"],listPatGrants:["GET /orgs/{org}/personal-access-tokens"],listPendingInvitations:["GET /orgs/{org}/invitations"],listPublicMembers:["GET /orgs/{org}/public_members"],listSecurityManagerTeams:["GET /orgs/{org}/security-managers"],listWebhookDeliveries:["GET /orgs/{org}/hooks/{hook_id}/deliveries"],listWebhooks:["GET /orgs/{org}/hooks"],patchCustomOrganizationRole:["PATCH /orgs/{org}/organization-roles/{role_id}"],pingWebhook:["POST /orgs/{org}/hooks/{hook_id}/pings"],redeliverWebhookDelivery:["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],removeCustomProperty:["DELETE /orgs/{org}/properties/schema/{custom_property_name}"],removeMember:["DELETE /orgs/{org}/members/{username}"],removeMembershipForUser:["DELETE /orgs/{org}/memberships/{username}"],removeOutsideCollaborator:["DELETE /orgs/{org}/outside_collaborators/{username}"],removePublicMembershipForAuthenticatedUser:["DELETE /orgs/{org}/public_members/{username}"],removeSecurityManagerTeam:["DELETE /orgs/{org}/security-managers/teams/{team_slug}"],reviewPatGrantRequest:["POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"],reviewPatGrantRequestsInBulk:["POST /orgs/{org}/personal-access-token-requests"],revokeAllOrgRolesTeam:["DELETE /orgs/{org}/organization-roles/teams/{team_slug}"],revokeAllOrgRolesUser:["DELETE /orgs/{org}/organization-roles/users/{username}"],revokeOrgRoleTeam:["DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"],revokeOrgRoleUser:["DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"],setMembershipForUser:["PUT /orgs/{org}/memberships/{username}"],setPublicMembershipForAuthenticatedUser:["PUT /orgs/{org}/public_members/{username}"],unblockUser:["DELETE /orgs/{org}/blocks/{username}"],update:["PATCH /orgs/{org}"],updateMembershipForAuthenticatedUser:["PATCH /user/memberships/orgs/{org}"],updatePatAccess:["POST /orgs/{org}/personal-access-tokens/{pat_id}"],updatePatAccesses:["POST /orgs/{org}/personal-access-tokens"],updateWebhook:["PATCH /orgs/{org}/hooks/{hook_id}"],updateWebhookConfigForOrg:["PATCH /orgs/{org}/hooks/{hook_id}/config"]},packages:{deletePackageForAuthenticatedUser:["DELETE /user/packages/{package_type}/{package_name}"],deletePackageForOrg:["DELETE /orgs/{org}/packages/{package_type}/{package_name}"],deletePackageForUser:["DELETE /users/{username}/packages/{package_type}/{package_name}"],deletePackageVersionForAuthenticatedUser:["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],deletePackageVersionForOrg:["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],deletePackageVersionForUser:["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],getAllPackageVersionsForAPackageOwnedByAnOrg:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions",{},{renamed:["packages","getAllPackageVersionsForPackageOwnedByOrg"]}],getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions",{},{renamed:["packages","getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]}],getAllPackageVersionsForPackageOwnedByAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions"],getAllPackageVersionsForPackageOwnedByOrg:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"],getAllPackageVersionsForPackageOwnedByUser:["GET /users/{username}/packages/{package_type}/{package_name}/versions"],getPackageForAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}"],getPackageForOrganization:["GET /orgs/{org}/packages/{package_type}/{package_name}"],getPackageForUser:["GET /users/{username}/packages/{package_type}/{package_name}"],getPackageVersionForAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],getPackageVersionForOrganization:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],getPackageVersionForUser:["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],listDockerMigrationConflictingPackagesForAuthenticatedUser:["GET /user/docker/conflicts"],listDockerMigrationConflictingPackagesForOrganization:["GET /orgs/{org}/docker/conflicts"],listDockerMigrationConflictingPackagesForUser:["GET /users/{username}/docker/conflicts"],listPackagesForAuthenticatedUser:["GET /user/packages"],listPackagesForOrganization:["GET /orgs/{org}/packages"],listPackagesForUser:["GET /users/{username}/packages"],restorePackageForAuthenticatedUser:["POST /user/packages/{package_type}/{package_name}/restore{?token}"],restorePackageForOrg:["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"],restorePackageForUser:["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"],restorePackageVersionForAuthenticatedUser:["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],restorePackageVersionForOrg:["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],restorePackageVersionForUser:["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]},projects:{addCollaborator:["PUT /projects/{project_id}/collaborators/{username}"],createCard:["POST /projects/columns/{column_id}/cards"],createColumn:["POST /projects/{project_id}/columns"],createForAuthenticatedUser:["POST /user/projects"],createForOrg:["POST /orgs/{org}/projects"],createForRepo:["POST /repos/{owner}/{repo}/projects"],delete:["DELETE /projects/{project_id}"],deleteCard:["DELETE /projects/columns/cards/{card_id}"],deleteColumn:["DELETE /projects/columns/{column_id}"],get:["GET /projects/{project_id}"],getCard:["GET /projects/columns/cards/{card_id}"],getColumn:["GET /projects/columns/{column_id}"],getPermissionForUser:["GET /projects/{project_id}/collaborators/{username}/permission"],listCards:["GET /projects/columns/{column_id}/cards"],listCollaborators:["GET /projects/{project_id}/collaborators"],listColumns:["GET /projects/{project_id}/columns"],listForOrg:["GET /orgs/{org}/projects"],listForRepo:["GET /repos/{owner}/{repo}/projects"],listForUser:["GET /users/{username}/projects"],moveCard:["POST /projects/columns/cards/{card_id}/moves"],moveColumn:["POST /projects/columns/{column_id}/moves"],removeCollaborator:["DELETE /projects/{project_id}/collaborators/{username}"],update:["PATCH /projects/{project_id}"],updateCard:["PATCH /projects/columns/cards/{card_id}"],updateColumn:["PATCH /projects/columns/{column_id}"]},pulls:{checkIfMerged:["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],create:["POST /repos/{owner}/{repo}/pulls"],createReplyForReviewComment:["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"],createReview:["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],createReviewComment:["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],deletePendingReview:["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],deleteReviewComment:["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],dismissReview:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"],get:["GET /repos/{owner}/{repo}/pulls/{pull_number}"],getReview:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],getReviewComment:["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],list:["GET /repos/{owner}/{repo}/pulls"],listCommentsForReview:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"],listCommits:["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],listFiles:["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],listRequestedReviewers:["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],listReviewComments:["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],listReviewCommentsForRepo:["GET /repos/{owner}/{repo}/pulls/comments"],listReviews:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],merge:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],removeRequestedReviewers:["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],requestReviewers:["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],submitReview:["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],update:["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],updateBranch:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"],updateReview:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],updateReviewComment:["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]},rateLimit:{get:["GET /rate_limit"]},reactions:{createForCommitComment:["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"],createForIssue:["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"],createForIssueComment:["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"],createForPullRequestReviewComment:["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"],createForRelease:["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"],createForTeamDiscussionCommentInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"],createForTeamDiscussionInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"],deleteForCommitComment:["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"],deleteForIssue:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"],deleteForIssueComment:["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"],deleteForPullRequestComment:["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"],deleteForRelease:["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"],deleteForTeamDiscussion:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"],deleteForTeamDiscussionComment:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"],listForCommitComment:["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"],listForIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],listForIssueComment:["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"],listForPullRequestReviewComment:["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"],listForRelease:["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"],listForTeamDiscussionCommentInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"],listForTeamDiscussionInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]},repos:{acceptInvitation:["PATCH /user/repository_invitations/{invitation_id}",{},{renamed:["repos","acceptInvitationForAuthenticatedUser"]}],acceptInvitationForAuthenticatedUser:["PATCH /user/repository_invitations/{invitation_id}"],addAppAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],addCollaborator:["PUT /repos/{owner}/{repo}/collaborators/{username}"],addStatusCheckContexts:["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],addTeamAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],addUserAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],cancelPagesDeployment:["POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"],checkAutomatedSecurityFixes:["GET /repos/{owner}/{repo}/automated-security-fixes"],checkCollaborator:["GET /repos/{owner}/{repo}/collaborators/{username}"],checkPrivateVulnerabilityReporting:["GET /repos/{owner}/{repo}/private-vulnerability-reporting"],checkVulnerabilityAlerts:["GET /repos/{owner}/{repo}/vulnerability-alerts"],codeownersErrors:["GET /repos/{owner}/{repo}/codeowners/errors"],compareCommits:["GET /repos/{owner}/{repo}/compare/{base}...{head}"],compareCommitsWithBasehead:["GET /repos/{owner}/{repo}/compare/{basehead}"],createAutolink:["POST /repos/{owner}/{repo}/autolinks"],createCommitComment:["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],createCommitSignatureProtection:["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],createCommitStatus:["POST /repos/{owner}/{repo}/statuses/{sha}"],createDeployKey:["POST /repos/{owner}/{repo}/keys"],createDeployment:["POST /repos/{owner}/{repo}/deployments"],createDeploymentBranchPolicy:["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"],createDeploymentProtectionRule:["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"],createDeploymentStatus:["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],createDispatchEvent:["POST /repos/{owner}/{repo}/dispatches"],createForAuthenticatedUser:["POST /user/repos"],createFork:["POST /repos/{owner}/{repo}/forks"],createInOrg:["POST /orgs/{org}/repos"],createOrUpdateCustomPropertiesValues:["PATCH /repos/{owner}/{repo}/properties/values"],createOrUpdateEnvironment:["PUT /repos/{owner}/{repo}/environments/{environment_name}"],createOrUpdateFileContents:["PUT /repos/{owner}/{repo}/contents/{path}"],createOrgRuleset:["POST /orgs/{org}/rulesets"],createPagesDeployment:["POST /repos/{owner}/{repo}/pages/deployments"],createPagesSite:["POST /repos/{owner}/{repo}/pages"],createRelease:["POST /repos/{owner}/{repo}/releases"],createRepoRuleset:["POST /repos/{owner}/{repo}/rulesets"],createTagProtection:["POST /repos/{owner}/{repo}/tags/protection"],createUsingTemplate:["POST /repos/{template_owner}/{template_repo}/generate"],createWebhook:["POST /repos/{owner}/{repo}/hooks"],declineInvitation:["DELETE /user/repository_invitations/{invitation_id}",{},{renamed:["repos","declineInvitationForAuthenticatedUser"]}],declineInvitationForAuthenticatedUser:["DELETE /user/repository_invitations/{invitation_id}"],delete:["DELETE /repos/{owner}/{repo}"],deleteAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],deleteAdminBranchProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],deleteAnEnvironment:["DELETE /repos/{owner}/{repo}/environments/{environment_name}"],deleteAutolink:["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],deleteBranchProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],deleteCommitComment:["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],deleteCommitSignatureProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],deleteDeployKey:["DELETE /repos/{owner}/{repo}/keys/{key_id}"],deleteDeployment:["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],deleteDeploymentBranchPolicy:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],deleteFile:["DELETE /repos/{owner}/{repo}/contents/{path}"],deleteInvitation:["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],deleteOrgRuleset:["DELETE /orgs/{org}/rulesets/{ruleset_id}"],deletePagesSite:["DELETE /repos/{owner}/{repo}/pages"],deletePullRequestReviewProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],deleteRelease:["DELETE /repos/{owner}/{repo}/releases/{release_id}"],deleteReleaseAsset:["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],deleteRepoRuleset:["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],deleteTagProtection:["DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"],deleteWebhook:["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],disableAutomatedSecurityFixes:["DELETE /repos/{owner}/{repo}/automated-security-fixes"],disableDeploymentProtectionRule:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"],disablePrivateVulnerabilityReporting:["DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"],disableVulnerabilityAlerts:["DELETE /repos/{owner}/{repo}/vulnerability-alerts"],downloadArchive:["GET /repos/{owner}/{repo}/zipball/{ref}",{},{renamed:["repos","downloadZipballArchive"]}],downloadTarballArchive:["GET /repos/{owner}/{repo}/tarball/{ref}"],downloadZipballArchive:["GET /repos/{owner}/{repo}/zipball/{ref}"],enableAutomatedSecurityFixes:["PUT /repos/{owner}/{repo}/automated-security-fixes"],enablePrivateVulnerabilityReporting:["PUT /repos/{owner}/{repo}/private-vulnerability-reporting"],enableVulnerabilityAlerts:["PUT /repos/{owner}/{repo}/vulnerability-alerts"],generateReleaseNotes:["POST /repos/{owner}/{repo}/releases/generate-notes"],get:["GET /repos/{owner}/{repo}"],getAccessRestrictions:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],getAdminBranchProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],getAllDeploymentProtectionRules:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"],getAllEnvironments:["GET /repos/{owner}/{repo}/environments"],getAllStatusCheckContexts:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"],getAllTopics:["GET /repos/{owner}/{repo}/topics"],getAppsWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"],getAutolink:["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],getBranch:["GET /repos/{owner}/{repo}/branches/{branch}"],getBranchProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection"],getBranchRules:["GET /repos/{owner}/{repo}/rules/branches/{branch}"],getClones:["GET /repos/{owner}/{repo}/traffic/clones"],getCodeFrequencyStats:["GET /repos/{owner}/{repo}/stats/code_frequency"],getCollaboratorPermissionLevel:["GET /repos/{owner}/{repo}/collaborators/{username}/permission"],getCombinedStatusForRef:["GET /repos/{owner}/{repo}/commits/{ref}/status"],getCommit:["GET /repos/{owner}/{repo}/commits/{ref}"],getCommitActivityStats:["GET /repos/{owner}/{repo}/stats/commit_activity"],getCommitComment:["GET /repos/{owner}/{repo}/comments/{comment_id}"],getCommitSignatureProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],getCommunityProfileMetrics:["GET /repos/{owner}/{repo}/community/profile"],getContent:["GET /repos/{owner}/{repo}/contents/{path}"],getContributorsStats:["GET /repos/{owner}/{repo}/stats/contributors"],getCustomDeploymentProtectionRule:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"],getCustomPropertiesValues:["GET /repos/{owner}/{repo}/properties/values"],getDeployKey:["GET /repos/{owner}/{repo}/keys/{key_id}"],getDeployment:["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],getDeploymentBranchPolicy:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],getDeploymentStatus:["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"],getEnvironment:["GET /repos/{owner}/{repo}/environments/{environment_name}"],getLatestPagesBuild:["GET /repos/{owner}/{repo}/pages/builds/latest"],getLatestRelease:["GET /repos/{owner}/{repo}/releases/latest"],getOrgRuleSuite:["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],getOrgRuleSuites:["GET /orgs/{org}/rulesets/rule-suites"],getOrgRuleset:["GET /orgs/{org}/rulesets/{ruleset_id}"],getOrgRulesets:["GET /orgs/{org}/rulesets"],getPages:["GET /repos/{owner}/{repo}/pages"],getPagesBuild:["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],getPagesDeployment:["GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"],getPagesHealthCheck:["GET /repos/{owner}/{repo}/pages/health"],getParticipationStats:["GET /repos/{owner}/{repo}/stats/participation"],getPullRequestReviewProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],getPunchCardStats:["GET /repos/{owner}/{repo}/stats/punch_card"],getReadme:["GET /repos/{owner}/{repo}/readme"],getReadmeInDirectory:["GET /repos/{owner}/{repo}/readme/{dir}"],getRelease:["GET /repos/{owner}/{repo}/releases/{release_id}"],getReleaseAsset:["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],getReleaseByTag:["GET /repos/{owner}/{repo}/releases/tags/{tag}"],getRepoRuleSuite:["GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"],getRepoRuleSuites:["GET /repos/{owner}/{repo}/rulesets/rule-suites"],getRepoRuleset:["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],getRepoRulesets:["GET /repos/{owner}/{repo}/rulesets"],getStatusChecksProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],getTeamsWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"],getTopPaths:["GET /repos/{owner}/{repo}/traffic/popular/paths"],getTopReferrers:["GET /repos/{owner}/{repo}/traffic/popular/referrers"],getUsersWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"],getViews:["GET /repos/{owner}/{repo}/traffic/views"],getWebhook:["GET /repos/{owner}/{repo}/hooks/{hook_id}"],getWebhookConfigForRepo:["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"],getWebhookDelivery:["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"],listActivities:["GET /repos/{owner}/{repo}/activity"],listAutolinks:["GET /repos/{owner}/{repo}/autolinks"],listBranches:["GET /repos/{owner}/{repo}/branches"],listBranchesForHeadCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"],listCollaborators:["GET /repos/{owner}/{repo}/collaborators"],listCommentsForCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],listCommitCommentsForRepo:["GET /repos/{owner}/{repo}/comments"],listCommitStatusesForRef:["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],listCommits:["GET /repos/{owner}/{repo}/commits"],listContributors:["GET /repos/{owner}/{repo}/contributors"],listCustomDeploymentRuleIntegrations:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"],listDeployKeys:["GET /repos/{owner}/{repo}/keys"],listDeploymentBranchPolicies:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"],listDeploymentStatuses:["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],listDeployments:["GET /repos/{owner}/{repo}/deployments"],listForAuthenticatedUser:["GET /user/repos"],listForOrg:["GET /orgs/{org}/repos"],listForUser:["GET /users/{username}/repos"],listForks:["GET /repos/{owner}/{repo}/forks"],listInvitations:["GET /repos/{owner}/{repo}/invitations"],listInvitationsForAuthenticatedUser:["GET /user/repository_invitations"],listLanguages:["GET /repos/{owner}/{repo}/languages"],listPagesBuilds:["GET /repos/{owner}/{repo}/pages/builds"],listPublic:["GET /repositories"],listPullRequestsAssociatedWithCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"],listReleaseAssets:["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],listReleases:["GET /repos/{owner}/{repo}/releases"],listTagProtection:["GET /repos/{owner}/{repo}/tags/protection"],listTags:["GET /repos/{owner}/{repo}/tags"],listTeams:["GET /repos/{owner}/{repo}/teams"],listWebhookDeliveries:["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"],listWebhooks:["GET /repos/{owner}/{repo}/hooks"],merge:["POST /repos/{owner}/{repo}/merges"],mergeUpstream:["POST /repos/{owner}/{repo}/merge-upstream"],pingWebhook:["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],redeliverWebhookDelivery:["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],removeAppAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],removeCollaborator:["DELETE /repos/{owner}/{repo}/collaborators/{username}"],removeStatusCheckContexts:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],removeStatusCheckProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],removeTeamAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],removeUserAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],renameBranch:["POST /repos/{owner}/{repo}/branches/{branch}/rename"],replaceAllTopics:["PUT /repos/{owner}/{repo}/topics"],requestPagesBuild:["POST /repos/{owner}/{repo}/pages/builds"],setAdminBranchProtection:["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],setAppAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],setStatusCheckContexts:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],setTeamAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],setUserAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],testPushWebhook:["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],transfer:["POST /repos/{owner}/{repo}/transfer"],update:["PATCH /repos/{owner}/{repo}"],updateBranchProtection:["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],updateCommitComment:["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],updateDeploymentBranchPolicy:["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],updateInformationAboutPagesSite:["PUT /repos/{owner}/{repo}/pages"],updateInvitation:["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],updateOrgRuleset:["PUT /orgs/{org}/rulesets/{ruleset_id}"],updatePullRequestReviewProtection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],updateRelease:["PATCH /repos/{owner}/{repo}/releases/{release_id}"],updateReleaseAsset:["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],updateRepoRuleset:["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],updateStatusCheckPotection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",{},{renamed:["repos","updateStatusCheckProtection"]}],updateStatusCheckProtection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],updateWebhook:["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],updateWebhookConfigForRepo:["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"],uploadReleaseAsset:["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",{baseUrl:"https://uploads.github.com"}]},search:{code:["GET /search/code"],commits:["GET /search/commits"],issuesAndPullRequests:["GET /search/issues"],labels:["GET /search/labels"],repos:["GET /search/repositories"],topics:["GET /search/topics"],users:["GET /search/users"]},secretScanning:{getAlert:["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"],listAlertsForEnterprise:["GET /enterprises/{enterprise}/secret-scanning/alerts"],listAlertsForOrg:["GET /orgs/{org}/secret-scanning/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/secret-scanning/alerts"],listLocationsForAlert:["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"],updateAlert:["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]},securityAdvisories:{createFork:["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"],createPrivateVulnerabilityReport:["POST /repos/{owner}/{repo}/security-advisories/reports"],createRepositoryAdvisory:["POST /repos/{owner}/{repo}/security-advisories"],createRepositoryAdvisoryCveRequest:["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"],getGlobalAdvisory:["GET /advisories/{ghsa_id}"],getRepositoryAdvisory:["GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"],listGlobalAdvisories:["GET /advisories"],listOrgRepositoryAdvisories:["GET /orgs/{org}/security-advisories"],listRepositoryAdvisories:["GET /repos/{owner}/{repo}/security-advisories"],updateRepositoryAdvisory:["PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"]},teams:{addOrUpdateMembershipForUserInOrg:["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"],addOrUpdateProjectPermissionsInOrg:["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"],addOrUpdateRepoPermissionsInOrg:["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],checkPermissionsForProjectInOrg:["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"],checkPermissionsForRepoInOrg:["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],create:["POST /orgs/{org}/teams"],createDiscussionCommentInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],createDiscussionInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions"],deleteDiscussionCommentInOrg:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],deleteDiscussionInOrg:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],deleteInOrg:["DELETE /orgs/{org}/teams/{team_slug}"],getByName:["GET /orgs/{org}/teams/{team_slug}"],getDiscussionCommentInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],getDiscussionInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],getMembershipForUserInOrg:["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],list:["GET /orgs/{org}/teams"],listChildInOrg:["GET /orgs/{org}/teams/{team_slug}/teams"],listDiscussionCommentsInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],listDiscussionsInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions"],listForAuthenticatedUser:["GET /user/teams"],listMembersInOrg:["GET /orgs/{org}/teams/{team_slug}/members"],listPendingInvitationsInOrg:["GET /orgs/{org}/teams/{team_slug}/invitations"],listProjectsInOrg:["GET /orgs/{org}/teams/{team_slug}/projects"],listReposInOrg:["GET /orgs/{org}/teams/{team_slug}/repos"],removeMembershipForUserInOrg:["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"],removeProjectInOrg:["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],removeRepoInOrg:["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],updateDiscussionCommentInOrg:["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],updateDiscussionInOrg:["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],updateInOrg:["PATCH /orgs/{org}/teams/{team_slug}"]},users:{addEmailForAuthenticated:["POST /user/emails",{},{renamed:["users","addEmailForAuthenticatedUser"]}],addEmailForAuthenticatedUser:["POST /user/emails"],addSocialAccountForAuthenticatedUser:["POST /user/social_accounts"],block:["PUT /user/blocks/{username}"],checkBlocked:["GET /user/blocks/{username}"],checkFollowingForUser:["GET /users/{username}/following/{target_user}"],checkPersonIsFollowedByAuthenticated:["GET /user/following/{username}"],createGpgKeyForAuthenticated:["POST /user/gpg_keys",{},{renamed:["users","createGpgKeyForAuthenticatedUser"]}],createGpgKeyForAuthenticatedUser:["POST /user/gpg_keys"],createPublicSshKeyForAuthenticated:["POST /user/keys",{},{renamed:["users","createPublicSshKeyForAuthenticatedUser"]}],createPublicSshKeyForAuthenticatedUser:["POST /user/keys"],createSshSigningKeyForAuthenticatedUser:["POST /user/ssh_signing_keys"],deleteEmailForAuthenticated:["DELETE /user/emails",{},{renamed:["users","deleteEmailForAuthenticatedUser"]}],deleteEmailForAuthenticatedUser:["DELETE /user/emails"],deleteGpgKeyForAuthenticated:["DELETE /user/gpg_keys/{gpg_key_id}",{},{renamed:["users","deleteGpgKeyForAuthenticatedUser"]}],deleteGpgKeyForAuthenticatedUser:["DELETE /user/gpg_keys/{gpg_key_id}"],deletePublicSshKeyForAuthenticated:["DELETE /user/keys/{key_id}",{},{renamed:["users","deletePublicSshKeyForAuthenticatedUser"]}],deletePublicSshKeyForAuthenticatedUser:["DELETE /user/keys/{key_id}"],deleteSocialAccountForAuthenticatedUser:["DELETE /user/social_accounts"],deleteSshSigningKeyForAuthenticatedUser:["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"],follow:["PUT /user/following/{username}"],getAuthenticated:["GET /user"],getByUsername:["GET /users/{username}"],getContextForUser:["GET /users/{username}/hovercard"],getGpgKeyForAuthenticated:["GET /user/gpg_keys/{gpg_key_id}",{},{renamed:["users","getGpgKeyForAuthenticatedUser"]}],getGpgKeyForAuthenticatedUser:["GET /user/gpg_keys/{gpg_key_id}"],getPublicSshKeyForAuthenticated:["GET /user/keys/{key_id}",{},{renamed:["users","getPublicSshKeyForAuthenticatedUser"]}],getPublicSshKeyForAuthenticatedUser:["GET /user/keys/{key_id}"],getSshSigningKeyForAuthenticatedUser:["GET /user/ssh_signing_keys/{ssh_signing_key_id}"],list:["GET /users"],listBlockedByAuthenticated:["GET /user/blocks",{},{renamed:["users","listBlockedByAuthenticatedUser"]}],listBlockedByAuthenticatedUser:["GET /user/blocks"],listEmailsForAuthenticated:["GET /user/emails",{},{renamed:["users","listEmailsForAuthenticatedUser"]}],listEmailsForAuthenticatedUser:["GET /user/emails"],listFollowedByAuthenticated:["GET /user/following",{},{renamed:["users","listFollowedByAuthenticatedUser"]}],listFollowedByAuthenticatedUser:["GET /user/following"],listFollowersForAuthenticatedUser:["GET /user/followers"],listFollowersForUser:["GET /users/{username}/followers"],listFollowingForUser:["GET /users/{username}/following"],listGpgKeysForAuthenticated:["GET /user/gpg_keys",{},{renamed:["users","listGpgKeysForAuthenticatedUser"]}],listGpgKeysForAuthenticatedUser:["GET /user/gpg_keys"],listGpgKeysForUser:["GET /users/{username}/gpg_keys"],listPublicEmailsForAuthenticated:["GET /user/public_emails",{},{renamed:["users","listPublicEmailsForAuthenticatedUser"]}],listPublicEmailsForAuthenticatedUser:["GET /user/public_emails"],listPublicKeysForUser:["GET /users/{username}/keys"],listPublicSshKeysForAuthenticated:["GET /user/keys",{},{renamed:["users","listPublicSshKeysForAuthenticatedUser"]}],listPublicSshKeysForAuthenticatedUser:["GET /user/keys"],listSocialAccountsForAuthenticatedUser:["GET /user/social_accounts"],listSocialAccountsForUser:["GET /users/{username}/social_accounts"],listSshSigningKeysForAuthenticatedUser:["GET /user/ssh_signing_keys"],listSshSigningKeysForUser:["GET /users/{username}/ssh_signing_keys"],setPrimaryEmailVisibilityForAuthenticated:["PATCH /user/email/visibility",{},{renamed:["users","setPrimaryEmailVisibilityForAuthenticatedUser"]}],setPrimaryEmailVisibilityForAuthenticatedUser:["PATCH /user/email/visibility"],unblock:["DELETE /user/blocks/{username}"],unfollow:["DELETE /user/following/{username}"],updateAuthenticated:["PATCH /user"]}};var qn=Nn;const it=new Map;for(const[s,e]of Object.entries(qn))for(const[t,i]of Object.entries(e)){const[r,n,o]=i,[a,c]=r.split(/ /),h=Object.assign({method:a,url:c},n);it.has(s)||it.set(s,new Map),it.get(s).set(t,{scope:s,methodName:t,endpointDefaults:h,decorations:o})}const Hn={has({scope:s},e){return it.get(s).has(e)},getOwnPropertyDescriptor(s,e){return{value:this.get(s,e),configurable:!0,writable:!0,enumerable:!0}},defineProperty(s,e,t){return Object.defineProperty(s.cache,e,t),!0},deleteProperty(s,e){return delete s.cache[e],!0},ownKeys({scope:s}){return[...it.get(s).keys()]},set(s,e,t){return s.cache[e]=t},get({octokit:s,scope:e,cache:t},i){if(t[i])return t[i];const r=it.get(e).get(i);if(!r)return;const{endpointDefaults:n,decorations:o}=r;return o?t[i]=Wn(s,e,i,n,o):t[i]=s.request.defaults(n),t[i]}};function Vn(s){const e={};for(const t of it.keys())e[t]=new Proxy({octokit:s,scope:t,cache:{}},Hn);return e}function Wn(s,e,t,i,r){const n=s.request.defaults(i);function o(...a){let c=n.endpoint.merge(...a);if(r.mapToData)return c=Object.assign({},c,{data:c[r.mapToData],[r.mapToData]:void 0}),n(c);if(r.renamed){const[h,m]=r.renamed;s.log.warn(`octokit.${e}.${t}() has been renamed to octokit.${h}.${m}()`)}if(r.deprecated&&s.log.warn(r.deprecated),r.renamedParameters){const h=n.endpoint.merge(...a);for(const[m,p]of Object.entries(r.renamedParameters))m in h&&(s.log.warn(`"${m}" parameter is deprecated for "octokit.${e}.${t}()". Use "${p}" instead`),p in h||(h[p]=h[m]),delete h[m]);return n(h)}return n(...a)}return Object.assign(o,n)}function qi(s){return{rest:Vn(s)}}qi.VERSION=Mn;var Fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gs(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Hi={exports:{}};(function(s,e){(function(t,i){s.exports=i()})(Fe,function(){var t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Fe<"u"?Fe:typeof self<"u"?self:{};function i(re){return re&&re.default||re}var r=function(re,O,_={}){var x,F,M;for(x in O)M=O[x],_[x]=(F=re[x])!=null?F:M;return _},n=function(re,O,_={}){var x,F;for(x in re)F=re[x],O[x]!==void 0&&(_[x]=F);return _},o={load:r,overwrite:n},a;a=class{constructor(O,_){this.incr=O,this.decr=_,this._first=null,this._last=null,this.length=0}push(O){var _;this.length++,typeof this.incr=="function"&&this.incr(),_={value:O,prev:this._last,next:null},this._last!=null?(this._last.next=_,this._last=_):this._first=this._last=_}shift(){var O;if(this._first!=null)return this.length--,typeof this.decr=="function"&&this.decr(),O=this._first.value,(this._first=this._first.next)!=null?this._first.prev=null:this._last=null,O}first(){if(this._first!=null)return this._first.value}getArray(){var O,_,x;for(O=this._first,x=[];O!=null;)x.push((_=O,O=O.next,_.value));return x}forEachShift(O){var _;for(_=this.shift();_!=null;)O(_),_=this.shift()}debug(){var O,_,x,F,M;for(O=this._first,M=[];O!=null;)M.push((_=O,O=O.next,{value:_.value,prev:(x=_.prev)!=null?x.value:void 0,next:(F=_.next)!=null?F.value:void 0}));return M}};var c=a,h;h=class{constructor(O){if(this.instance=O,this._events={},this.instance.on!=null||this.instance.once!=null||this.instance.removeAllListeners!=null)throw new Error("An Emitter already exists for this object");this.instance.on=(_,x)=>this._addListener(_,"many",x),this.instance.once=(_,x)=>this._addListener(_,"once",x),this.instance.removeAllListeners=(_=null)=>_!=null?delete this._events[_]:this._events={}}_addListener(O,_,x){var F;return(F=this._events)[O]==null&&(F[O]=[]),this._events[O].push({cb:x,status:_}),this.instance}listenerCount(O){return this._events[O]!=null?this._events[O].length:0}async trigger(O,..._){var x,F;try{return O!=="debug"&&this.trigger("debug",`Event triggered: ${O}`,_),this._events[O]==null?void 0:(this._events[O]=this._events[O].filter(function(M){return M.status!=="none"}),F=this._events[O].map(async M=>{var W,se;if(M.status!=="none"){M.status==="once"&&(M.status="none");try{return se=typeof M.cb=="function"?M.cb(..._):void 0,typeof(se!=null?se.then:void 0)=="function"?await se:se}catch(me){return W=me,this.trigger("error",W),null}}}),(await Promise.all(F)).find(function(M){return M!=null}))}catch(M){return x=M,this.trigger("error",x),null}}};var m=h,p,b,d;p=c,b=m,d=class{constructor(O){this.Events=new b(this),this._length=0,this._lists=(function(){var _,x,F;for(F=[],_=1,x=O;1<=x?_<=x:_>=x;1<=x?++_:--_)F.push(new p(()=>this.incr(),()=>this.decr()));return F}).call(this)}incr(){if(this._length++===0)return this.Events.trigger("leftzero")}decr(){if(--this._length===0)return this.Events.trigger("zero")}push(O){return this._lists[O.options.priority].push(O)}queued(O){return O!=null?this._lists[O].length:this._length}shiftAll(O){return this._lists.forEach(function(_){return _.forEachShift(O)})}getFirst(O=this._lists){var _,x,F;for(_=0,x=O.length;_<x;_++)if(F=O[_],F.length>0)return F;return[]}shiftLastFrom(O){return this.getFirst(this._lists.slice(O).reverse()).shift()}};var w=d,g;g=class extends Error{};var y=g,f,k,S,P,C;P=10,k=5,C=o,f=y,S=class{constructor(O,_,x,F,M,W,se,me){this.task=O,this.args=_,this.rejectOnDrop=M,this.Events=W,this._states=se,this.Promise=me,this.options=C.load(x,F),this.options.priority=this._sanitizePriority(this.options.priority),this.options.id===F.id&&(this.options.id=`${this.options.id}-${this._randomIndex()}`),this.promise=new this.Promise((Ae,Pe)=>{this._resolve=Ae,this._reject=Pe}),this.retryCount=0}_sanitizePriority(O){var _;return _=~~O!==O?k:O,_<0?0:_>P-1?P-1:_}_randomIndex(){return Math.random().toString(36).slice(2)}doDrop({error:O,message:_="This job has been dropped by Bottleneck"}={}){return this._states.remove(this.options.id)?(this.rejectOnDrop&&this._reject(O??new f(_)),this.Events.trigger("dropped",{args:this.args,options:this.options,task:this.task,promise:this.promise}),!0):!1}_assertStatus(O){var _;if(_=this._states.jobStatus(this.options.id),!(_===O||O==="DONE"&&_===null))throw new f(`Invalid job status ${_}, expected ${O}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`)}doReceive(){return this._states.start(this.options.id),this.Events.trigger("received",{args:this.args,options:this.options})}doQueue(O,_){return this._assertStatus("RECEIVED"),this._states.next(this.options.id),this.Events.trigger("queued",{args:this.args,options:this.options,reachedHWM:O,blocked:_})}doRun(){return this.retryCount===0?(this._assertStatus("QUEUED"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),this.Events.trigger("scheduled",{args:this.args,options:this.options})}async doExecute(O,_,x,F){var M,W,se;this.retryCount===0?(this._assertStatus("RUNNING"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),W={args:this.args,options:this.options,retryCount:this.retryCount},this.Events.trigger("executing",W);try{if(se=await(O!=null?O.schedule(this.options,this.task,...this.args):this.task(...this.args)),_())return this.doDone(W),await F(this.options,W),this._assertStatus("DONE"),this._resolve(se)}catch(me){return M=me,this._onFailure(M,W,_,x,F)}}doExpire(O,_,x){var F,M;return this._states.jobStatus(this.options.id==="RUNNING")&&this._states.next(this.options.id),this._assertStatus("EXECUTING"),M={args:this.args,options:this.options,retryCount:this.retryCount},F=new f(`This job timed out after ${this.options.expiration} ms.`),this._onFailure(F,M,O,_,x)}async _onFailure(O,_,x,F,M){var W,se;if(x())return W=await this.Events.trigger("failed",O,_),W!=null?(se=~~W,this.Events.trigger("retry",`Retrying ${this.options.id} after ${se} ms`,_),this.retryCount++,F(se)):(this.doDone(_),await M(this.options,_),this._assertStatus("DONE"),this._reject(O))}doDone(O){return this._assertStatus("EXECUTING"),this._states.next(this.options.id),this.Events.trigger("done",O)}};var B=S,U,V,G;G=o,U=y,V=class{constructor(O,_,x){this.instance=O,this.storeOptions=_,this.clientId=this.instance._randomIndex(),G.load(x,x,this),this._nextRequest=this._lastReservoirRefresh=this._lastReservoirIncrease=Date.now(),this._running=0,this._done=0,this._unblockTime=0,this.ready=this.Promise.resolve(),this.clients={},this._startHeartbeat()}_startHeartbeat(){var O;return this.heartbeat==null&&(this.storeOptions.reservoirRefreshInterval!=null&&this.storeOptions.reservoirRefreshAmount!=null||this.storeOptions.reservoirIncreaseInterval!=null&&this.storeOptions.reservoirIncreaseAmount!=null)?typeof(O=this.heartbeat=setInterval(()=>{var _,x,F,M,W;if(M=Date.now(),this.storeOptions.reservoirRefreshInterval!=null&&M>=this._lastReservoirRefresh+this.storeOptions.reservoirRefreshInterval&&(this._lastReservoirRefresh=M,this.storeOptions.reservoir=this.storeOptions.reservoirRefreshAmount,this.instance._drainAll(this.computeCapacity())),this.storeOptions.reservoirIncreaseInterval!=null&&M>=this._lastReservoirIncrease+this.storeOptions.reservoirIncreaseInterval&&({reservoirIncreaseAmount:_,reservoirIncreaseMaximum:F,reservoir:W}=this.storeOptions,this._lastReservoirIncrease=M,x=F!=null?Math.min(_,F-W):_,x>0))return this.storeOptions.reservoir+=x,this.instance._drainAll(this.computeCapacity())},this.heartbeatInterval)).unref=="function"?O.unref():void 0:clearInterval(this.heartbeat)}async __publish__(O){return await this.yieldLoop(),this.instance.Events.trigger("message",O.toString())}async __disconnect__(O){return await this.yieldLoop(),clearInterval(this.heartbeat),this.Promise.resolve()}yieldLoop(O=0){return new this.Promise(function(_,x){return setTimeout(_,O)})}computePenalty(){var O;return(O=this.storeOptions.penalty)!=null?O:15*this.storeOptions.minTime||5e3}async __updateSettings__(O){return await this.yieldLoop(),G.overwrite(O,O,this.storeOptions),this._startHeartbeat(),this.instance._drainAll(this.computeCapacity()),!0}async __running__(){return await this.yieldLoop(),this._running}async __queued__(){return await this.yieldLoop(),this.instance.queued()}async __done__(){return await this.yieldLoop(),this._done}async __groupCheck__(O){return await this.yieldLoop(),this._nextRequest+this.timeout<O}computeCapacity(){var O,_;return{maxConcurrent:O,reservoir:_}=this.storeOptions,O!=null&&_!=null?Math.min(O-this._running,_):O!=null?O-this._running:_??null}conditionsCheck(O){var _;return _=this.computeCapacity(),_==null||O<=_}async __incrementReservoir__(O){var _;return await this.yieldLoop(),_=this.storeOptions.reservoir+=O,this.instance._drainAll(this.computeCapacity()),_}async __currentReservoir__(){return await this.yieldLoop(),this.storeOptions.reservoir}isBlocked(O){return this._unblockTime>=O}check(O,_){return this.conditionsCheck(O)&&this._nextRequest-_<=0}async __check__(O){var _;return await this.yieldLoop(),_=Date.now(),this.check(O,_)}async __register__(O,_,x){var F,M;return await this.yieldLoop(),F=Date.now(),this.conditionsCheck(_)?(this._running+=_,this.storeOptions.reservoir!=null&&(this.storeOptions.reservoir-=_),M=Math.max(this._nextRequest-F,0),this._nextRequest=F+M+this.storeOptions.minTime,{success:!0,wait:M,reservoir:this.storeOptions.reservoir}):{success:!1}}strategyIsBlock(){return this.storeOptions.strategy===3}async __submit__(O,_){var x,F,M;if(await this.yieldLoop(),this.storeOptions.maxConcurrent!=null&&_>this.storeOptions.maxConcurrent)throw new U(`Impossible to add a job having a weight of ${_} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`);return F=Date.now(),M=this.storeOptions.highWater!=null&&O===this.storeOptions.highWater&&!this.check(_,F),x=this.strategyIsBlock()&&(M||this.isBlocked(F)),x&&(this._unblockTime=F+this.computePenalty(),this._nextRequest=this._unblockTime+this.storeOptions.minTime,this.instance._dropAllQueued()),{reachedHWM:M,blocked:x,strategy:this.storeOptions.strategy}}async __free__(O,_){return await this.yieldLoop(),this._running-=_,this._done+=_,this.instance._drainAll(this.computeCapacity()),{running:this._running}}};var X=V,ae,T;ae=y,T=class{constructor(O){this.status=O,this._jobs={},this.counts=this.status.map(function(){return 0})}next(O){var _,x;if(_=this._jobs[O],x=_+1,_!=null&&x<this.status.length)return this.counts[_]--,this.counts[x]++,this._jobs[O]++;if(_!=null)return this.counts[_]--,delete this._jobs[O]}start(O){var _;return _=0,this._jobs[O]=_,this.counts[_]++}remove(O){var _;return _=this._jobs[O],_!=null&&(this.counts[_]--,delete this._jobs[O]),_!=null}jobStatus(O){var _;return(_=this.status[this._jobs[O]])!=null?_:null}statusJobs(O){var _,x,F,M,W;if(O!=null){if(x=this.status.indexOf(O),x<0)throw new ae(`status must be one of ${this.status.join(", ")}`);F=this._jobs,M=[];for(_ in F)W=F[_],W===x&&M.push(_);return M}else return Object.keys(this._jobs)}statusCounts(){return this.counts.reduce((O,_,x)=>(O[this.status[x]]=_,O),{})}};var j=T,u,z;u=c,z=class{constructor(O,_){this.schedule=this.schedule.bind(this),this.name=O,this.Promise=_,this._running=0,this._queue=new u}isEmpty(){return this._queue.length===0}async _tryToRun(){var O,_,x,F,M,W,se;if(this._running<1&&this._queue.length>0)return this._running++,{task:se,args:O,resolve:M,reject:F}=this._queue.shift(),_=await async function(){try{return W=await se(...O),function(){return M(W)}}catch(me){return x=me,function(){return F(x)}}}(),this._running--,this._tryToRun(),_()}schedule(O,..._){var x,F,M;return M=F=null,x=new this.Promise(function(W,se){return M=W,F=se}),this._queue.push({task:O,args:_,resolve:M,reject:F}),this._tryToRun(),x}};var ce=z,H="2.19.5",ue={version:H},Z=Object.freeze({version:H,default:ue}),le=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),L=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),$=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),ne,ee,Q,we,Se,pe;pe=o,ne=m,we=le,Q=L,Se=$,ee=(function(){class re{constructor(_={}){this.deleteKey=this.deleteKey.bind(this),this.limiterOptions=_,pe.load(this.limiterOptions,this.defaults,this),this.Events=new ne(this),this.instances={},this.Bottleneck=de,this._startAutoCleanup(),this.sharedConnection=this.connection!=null,this.connection==null&&(this.limiterOptions.datastore==="redis"?this.connection=new we(Object.assign({},this.limiterOptions,{Events:this.Events})):this.limiterOptions.datastore==="ioredis"&&(this.connection=new Q(Object.assign({},this.limiterOptions,{Events:this.Events}))))}key(_=""){var x;return(x=this.instances[_])!=null?x:(()=>{var F;return F=this.instances[_]=new this.Bottleneck(Object.assign(this.limiterOptions,{id:`${this.id}-${_}`,timeout:this.timeout,connection:this.connection})),this.Events.trigger("created",F,_),F})()}async deleteKey(_=""){var x,F;return F=this.instances[_],this.connection&&(x=await this.connection.__runCommand__(["del",...Se.allKeys(`${this.id}-${_}`)])),F!=null&&(delete this.instances[_],await F.disconnect()),F!=null||x>0}limiters(){var _,x,F,M;x=this.instances,F=[];for(_ in x)M=x[_],F.push({key:_,limiter:M});return F}keys(){return Object.keys(this.instances)}async clusterKeys(){var _,x,F,M,W,se,me,Ae,Pe;if(this.connection==null)return this.Promise.resolve(this.keys());for(se=[],_=null,Pe=`b_${this.id}-`.length,x=9;_!==0;)for([Ae,F]=await this.connection.__runCommand__(["scan",_??0,"match",`b_${this.id}-*_settings`,"count",1e4]),_=~~Ae,M=0,me=F.length;M<me;M++)W=F[M],se.push(W.slice(Pe,-x));return se}_startAutoCleanup(){var _;return clearInterval(this.interval),typeof(_=this.interval=setInterval(async()=>{var x,F,M,W,se,me;se=Date.now(),M=this.instances,W=[];for(F in M){me=M[F];try{await me._store.__groupCheck__(se)?W.push(this.deleteKey(F)):W.push(void 0)}catch(Ae){x=Ae,W.push(me.Events.trigger("error",x))}}return W},this.timeout/2)).unref=="function"?_.unref():void 0}updateSettings(_={}){if(pe.overwrite(_,this.defaults,this),pe.overwrite(_,_,this.limiterOptions),_.timeout!=null)return this._startAutoCleanup()}disconnect(_=!0){var x;if(!this.sharedConnection)return(x=this.connection)!=null?x.disconnect(_):void 0}}return re.prototype.defaults={timeout:1e3*60*5,connection:null,Promise,id:"group-key"},re}).call(t);var ge=ee,Te,Ee,De;De=o,Ee=m,Te=(function(){class re{constructor(_={}){this.options=_,De.load(this.options,this.defaults,this),this.Events=new Ee(this),this._arr=[],this._resetPromise(),this._lastFlush=Date.now()}_resetPromise(){return this._promise=new this.Promise((_,x)=>this._resolve=_)}_flush(){return clearTimeout(this._timeout),this._lastFlush=Date.now(),this._resolve(),this.Events.trigger("batch",this._arr),this._arr=[],this._resetPromise()}add(_){var x;return this._arr.push(_),x=this._promise,this._arr.length===this.maxSize?this._flush():this.maxTime!=null&&this._arr.length===1&&(this._timeout=setTimeout(()=>this._flush(),this.maxTime)),x}}return re.prototype.defaults={maxTime:null,maxSize:null,Promise},re}).call(t);var Ge=Te,l=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),I=i(Z),D,E,v,A,N,q,R,K,te,J,ie,ve=[].splice;q=10,E=5,ie=o,R=w,A=B,N=X,K=l,v=m,te=j,J=ce,D=(function(){class re{constructor(_={},...x){var F,M;this._addToQueue=this._addToQueue.bind(this),this._validateOptions(_,x),ie.load(_,this.instanceDefaults,this),this._queues=new R(q),this._scheduled={},this._states=new te(["RECEIVED","QUEUED","RUNNING","EXECUTING"].concat(this.trackDoneStatus?["DONE"]:[])),this._limiter=null,this.Events=new v(this),this._submitLock=new J("submit",this.Promise),this._registerLock=new J("register",this.Promise),M=ie.load(_,this.storeDefaults,{}),this._store=(function(){if(this.datastore==="redis"||this.datastore==="ioredis"||this.connection!=null)return F=ie.load(_,this.redisStoreDefaults,{}),new K(this,M,F);if(this.datastore==="local")return F=ie.load(_,this.localStoreDefaults,{}),new N(this,M,F);throw new re.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`)}).call(this),this._queues.on("leftzero",()=>{var W;return(W=this._store.heartbeat)!=null&&typeof W.ref=="function"?W.ref():void 0}),this._queues.on("zero",()=>{var W;return(W=this._store.heartbeat)!=null&&typeof W.unref=="function"?W.unref():void 0})}_validateOptions(_,x){if(!(_!=null&&typeof _=="object"&&x.length===0))throw new re.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.")}ready(){return this._store.ready}clients(){return this._store.clients}channel(){return`b_${this.id}`}channel_client(){return`b_${this.id}_${this._store.clientId}`}publish(_){return this._store.__publish__(_)}disconnect(_=!0){return this._store.__disconnect__(_)}chain(_){return this._limiter=_,this}queued(_){return this._queues.queued(_)}clusterQueued(){return this._store.__queued__()}empty(){return this.queued()===0&&this._submitLock.isEmpty()}running(){return this._store.__running__()}done(){return this._store.__done__()}jobStatus(_){return this._states.jobStatus(_)}jobs(_){return this._states.statusJobs(_)}counts(){return this._states.statusCounts()}_randomIndex(){return Math.random().toString(36).slice(2)}check(_=1){return this._store.__check__(_)}_clearGlobalState(_){return this._scheduled[_]!=null?(clearTimeout(this._scheduled[_].expiration),delete this._scheduled[_],!0):!1}async _free(_,x,F,M){var W,se;try{if({running:se}=await this._store.__free__(_,F.weight),this.Events.trigger("debug",`Freed ${F.id}`,M),se===0&&this.empty())return this.Events.trigger("idle")}catch(me){return W=me,this.Events.trigger("error",W)}}_run(_,x,F){var M,W,se;return x.doRun(),M=this._clearGlobalState.bind(this,_),se=this._run.bind(this,_,x),W=this._free.bind(this,_,x),this._scheduled[_]={timeout:setTimeout(()=>x.doExecute(this._limiter,M,se,W),F),expiration:x.options.expiration!=null?setTimeout(function(){return x.doExpire(M,se,W)},F+x.options.expiration):void 0,job:x}}_drainOne(_){return this._registerLock.schedule(()=>{var x,F,M,W,se;return this.queued()===0?this.Promise.resolve(null):(se=this._queues.getFirst(),{options:W,args:x}=M=se.first(),_!=null&&W.weight>_?this.Promise.resolve(null):(this.Events.trigger("debug",`Draining ${W.id}`,{args:x,options:W}),F=this._randomIndex(),this._store.__register__(F,W.weight,W.expiration).then(({success:me,wait:Ae,reservoir:Pe})=>{var Me;return this.Events.trigger("debug",`Drained ${W.id}`,{success:me,args:x,options:W}),me?(se.shift(),Me=this.empty(),Me&&this.Events.trigger("empty"),Pe===0&&this.Events.trigger("depleted",Me),this._run(F,M,Ae),this.Promise.resolve(W.weight)):this.Promise.resolve(null)})))})}_drainAll(_,x=0){return this._drainOne(_).then(F=>{var M;return F!=null?(M=_!=null?_-F:_,this._drainAll(M,x+F)):this.Promise.resolve(x)}).catch(F=>this.Events.trigger("error",F))}_dropAllQueued(_){return this._queues.shiftAll(function(x){return x.doDrop({message:_})})}stop(_={}){var x,F;return _=ie.load(_,this.stopDefaults),F=M=>{var W;return W=()=>{var se;return se=this._states.counts,se[0]+se[1]+se[2]+se[3]===M},new this.Promise((se,me)=>W()?se():this.on("done",()=>{if(W())return this.removeAllListeners("done"),se()}))},x=_.dropWaitingJobs?(this._run=function(M,W){return W.doDrop({message:_.dropErrorMessage})},this._drainOne=()=>this.Promise.resolve(null),this._registerLock.schedule(()=>this._submitLock.schedule(()=>{var M,W,se;W=this._scheduled;for(M in W)se=W[M],this.jobStatus(se.job.options.id)==="RUNNING"&&(clearTimeout(se.timeout),clearTimeout(se.expiration),se.job.doDrop({message:_.dropErrorMessage}));return this._dropAllQueued(_.dropErrorMessage),F(0)}))):this.schedule({priority:q-1,weight:0},()=>F(1)),this._receive=function(M){return M._reject(new re.prototype.BottleneckError(_.enqueueErrorMessage))},this.stop=()=>this.Promise.reject(new re.prototype.BottleneckError("stop() has already been called")),x}async _addToQueue(_){var x,F,M,W,se,me,Ae;({args:x,options:W}=_);try{({reachedHWM:se,blocked:F,strategy:Ae}=await this._store.__submit__(this.queued(),W.weight))}catch(Pe){return M=Pe,this.Events.trigger("debug",`Could not queue ${W.id}`,{args:x,options:W,error:M}),_.doDrop({error:M}),!1}return F?(_.doDrop(),!0):se&&(me=Ae===re.prototype.strategy.LEAK?this._queues.shiftLastFrom(W.priority):Ae===re.prototype.strategy.OVERFLOW_PRIORITY?this._queues.shiftLastFrom(W.priority+1):Ae===re.prototype.strategy.OVERFLOW?_:void 0,me!=null&&me.doDrop(),me==null||Ae===re.prototype.strategy.OVERFLOW)?(me==null&&_.doDrop(),se):(_.doQueue(se,F),this._queues.push(_),await this._drainAll(),se)}_receive(_){return this._states.jobStatus(_.options.id)!=null?(_._reject(new re.prototype.BottleneckError(`A job with the same id already exists (id=${_.options.id})`)),!1):(_.doReceive(),this._submitLock.schedule(this._addToQueue,_))}submit(..._){var x,F,M,W,se,me,Ae;return typeof _[0]=="function"?(se=_,[F,..._]=se,[x]=ve.call(_,-1),W=ie.load({},this.jobDefaults)):(me=_,[W,F,..._]=me,[x]=ve.call(_,-1),W=ie.load(W,this.jobDefaults)),Ae=(...Pe)=>new this.Promise(function(Me,Xe){return F(...Pe,function(...Qe){return(Qe[0]!=null?Xe:Me)(Qe)})}),M=new A(Ae,_,W,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),M.promise.then(function(Pe){return typeof x=="function"?x(...Pe):void 0}).catch(function(Pe){return Array.isArray(Pe)?typeof x=="function"?x(...Pe):void 0:typeof x=="function"?x(Pe):void 0}),this._receive(M)}schedule(..._){var x,F,M;return typeof _[0]=="function"?([M,..._]=_,F={}):[F,M,..._]=_,x=new A(M,_,F,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),this._receive(x),x.promise}wrap(_){var x,F;return x=this.schedule.bind(this),F=function(...M){return x(_.bind(this),...M)},F.withOptions=function(M,...W){return x(M,_,...W)},F}async updateSettings(_={}){return await this._store.__updateSettings__(ie.overwrite(_,this.storeDefaults)),ie.overwrite(_,this.instanceDefaults,this),this}currentReservoir(){return this._store.__currentReservoir__()}incrementReservoir(_=0){return this._store.__incrementReservoir__(_)}}return re.default=re,re.Events=v,re.version=re.prototype.version=I.version,re.strategy=re.prototype.strategy={LEAK:1,OVERFLOW:2,OVERFLOW_PRIORITY:4,BLOCK:3},re.BottleneckError=re.prototype.BottleneckError=y,re.Group=re.prototype.Group=ge,re.RedisConnection=re.prototype.RedisConnection=le,re.IORedisConnection=re.prototype.IORedisConnection=L,re.Batcher=re.prototype.Batcher=Ge,re.prototype.jobDefaults={priority:E,weight:1,expiration:null,id:"<no-id>"},re.prototype.storeDefaults={maxConcurrent:null,minTime:0,highWater:null,strategy:re.prototype.strategy.LEAK,penalty:null,reservoir:null,reservoirRefreshInterval:null,reservoirRefreshAmount:null,reservoirIncreaseInterval:null,reservoirIncreaseAmount:null,reservoirIncreaseMaximum:null},re.prototype.localStoreDefaults={Promise,timeout:null,heartbeatInterval:250},re.prototype.redisStoreDefaults={Promise,timeout:null,heartbeatInterval:5e3,clientTimeout:1e4,Redis:null,clientOptions:{},clusterNodes:null,clearDatastore:!1,connection:null},re.prototype.instanceDefaults={datastore:"local",connection:null,id:"<no-id>",rejectOnDrop:!0,trackDoneStatus:!1,Promise},re.prototype.stopDefaults={enqueueErrorMessage:"This limiter has been stopped and cannot accept new jobs.",dropWaitingJobs:!0,dropErrorMessage:"This limiter has been stopped."},re}).call(t);var de=D,Re=de;return Re})})(Hi);var Zn=Hi.exports;const Vi=gs(Zn);var Kn="0.0.0-development";async function Wi(s,e,t,i){if(!t.request||!t.request.request)throw t;if(t.status>=400&&!s.doNotRetry.includes(t.status)){const r=i.request.retries!=null?i.request.retries:s.retries,n=Math.pow((i.request.retryCount||0)+1,2);throw e.retry.retryRequest(t,r,n)}throw t}async function Jn(s,e,t,i){const r=new Vi;return r.on("failed",function(n,o){const a=~~n.request.request.retries,c=~~n.request.request.retryAfter;if(i.request.retryCount=o.retryCount+1,a>o.retryCount)return c*s.retryAfterBaseValue}),r.schedule(Yn.bind(null,s,e,t),i)}async function Yn(s,e,t,i){const r=await t(t,i);if(r.data&&r.data.errors&&r.data.errors.length>0&&/Something went wrong while executing your query/.test(r.data.errors[0].message)){const n=new Lt(r.data.errors[0].message,500,{request:i,response:r});return Wi(s,e,n,i)}return r}function Zi(s,e){const t=Object.assign({enabled:!0,retryAfterBaseValue:1e3,doNotRetry:[400,401,403,404,422,451],retries:3},e.retry);return t.enabled&&(s.hook.error("request",Wi.bind(null,t,s)),s.hook.wrap("request",Jn.bind(null,t,s))),{retry:{retryRequest:(i,r,n)=>(i.request.request=Object.assign({},i.request.request,{retries:r,retryAfter:n}),i)}}}Zi.VERSION=Kn;var Xn="0.0.0-development",Ir=()=>Promise.resolve();function Qn(s,e,t){return s.retryLimiter.schedule(ea,s,e,t)}async function ea(s,e,t){const i=t.method!=="GET"&&t.method!=="HEAD",{pathname:r}=new URL(t.url,"http://github.test"),n=t.method==="GET"&&r.startsWith("/search/"),o=r.startsWith("/graphql"),c=~~e.retryCount>0?{priority:0,weight:0}:{};s.clustering&&(c.expiration=1e3*60),(i||o)&&await s.write.key(s.id).schedule(c,Ir),i&&s.triggersNotification(r)&&await s.notifications.key(s.id).schedule(c,Ir),n&&await s.search.key(s.id).schedule(c,Ir);const h=s.global.key(s.id).schedule(c,e,t);if(o){const m=await h;if(m.data.errors!=null&&m.data.errors.some(p=>p.type==="RATE_LIMITED"))throw Object.assign(new Error("GraphQL Rate Limit Exceeded"),{response:m,data:m.data})}return h}var ta=["/orgs/{org}/invitations","/orgs/{org}/invitations/{invitation_id}","/orgs/{org}/teams/{team_slug}/discussions","/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments","/repos/{owner}/{repo}/collaborators/{username}","/repos/{owner}/{repo}/commits/{commit_sha}/comments","/repos/{owner}/{repo}/issues","/repos/{owner}/{repo}/issues/{issue_number}/comments","/repos/{owner}/{repo}/pulls","/repos/{owner}/{repo}/pulls/{pull_number}/comments","/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies","/repos/{owner}/{repo}/pulls/{pull_number}/merge","/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers","/repos/{owner}/{repo}/pulls/{pull_number}/reviews","/repos/{owner}/{repo}/releases","/teams/{team_id}/discussions","/teams/{team_id}/discussions/{discussion_number}/comments"];function ra(s){const t=`^(?:${s.map(i=>i.split("/").map(r=>r.startsWith("{")?"(?:.+?)":r).join("/")).map(i=>`(?:${i})`).join("|")})[^/]*$`;return new RegExp(t,"i")}var Xs=ra(ta),Ki=Xs.test.bind(Xs),mt={},sa=function(s,e){mt.global=new s.Group({id:"octokit-global",maxConcurrent:10,...e}),mt.search=new s.Group({id:"octokit-search",maxConcurrent:1,minTime:2e3,...e}),mt.write=new s.Group({id:"octokit-write",maxConcurrent:1,minTime:1e3,...e}),mt.notifications=new s.Group({id:"octokit-notifications",maxConcurrent:1,minTime:3e3,...e})};function fs(s,e){const{enabled:t=!0,Bottleneck:i=Vi,id:r="no-id",timeout:n=1e3*60*2,connection:o}=e.throttle||{};if(!t)return{};const a={timeout:n};typeof o<"u"&&(a.connection=o),mt.global==null&&sa(i,a);const c=Object.assign({clustering:o!=null,triggersNotification:Ki,fallbackSecondaryRateRetryAfter:60,retryAfterBaseValue:1e3,retryLimiter:new i,id:r,...mt},e.throttle);if(typeof c.onSecondaryRateLimit!="function"||typeof c.onRateLimit!="function")throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);const h={},m=new i.Events(h);return h.on("secondary-limit",c.onSecondaryRateLimit),h.on("rate-limit",c.onRateLimit),h.on("error",p=>s.log.warn("Error in throttling-plugin limit handler",p)),c.retryLimiter.on("failed",async function(p,b){const[d,w,g]=b.args,{pathname:y}=new URL(g.url,"http://github.test");if(!(y.startsWith("/graphql")&&p.status!==401||p.status===403||p.status===429))return;const k=~~w.retryCount;w.retryCount=k,g.request.retryCount=k;const{wantRetry:S,retryAfter:P=0}=await async function(){var C;if(/\bsecondary rate\b/i.test(p.message)){const B=Number(p.response.headers["retry-after"])||d.fallbackSecondaryRateRetryAfter;return{wantRetry:await m.trigger("secondary-limit",B,g,s,k),retryAfter:B}}if(p.response.headers!=null&&p.response.headers["x-ratelimit-remaining"]==="0"||(((C=p.response.data)==null?void 0:C.errors)??[]).some(B=>B.type==="RATE_LIMITED")){const B=new Date(~~p.response.headers["x-ratelimit-reset"]*1e3).getTime(),U=Math.max(Math.ceil((B-Date.now())/1e3)+1,0);return{wantRetry:await m.trigger("rate-limit",U,g,s,k),retryAfter:U}}return{}}();if(S)return w.retryCount++,P*d.retryAfterBaseValue}),s.hook.wrap("request",Qn.bind(null,c)),{}}fs.VERSION=Xn;fs.triggersNotification=Ki;var ia="0.0.0-development",Ji=Pn.plugin(qi,Ii,zn,Zi,fs).defaults({userAgent:`octokit.js/${ia}`,throttle:{onRateLimit:oa,onSecondaryRateLimit:na}});function oa(s,e,t){if(t.log.warn(`Request quota exhausted for request ${e.method} ${e.url}`),e.request.retryCount===0)return t.log.info(`Retrying after ${s} seconds!`),!0}function na(s,e,t){if(t.log.warn(`SecondaryRateLimit detected for request ${e.method} ${e.url}`),e.request.retryCount===0)return t.log.info(`Retrying after ${s} seconds!`),!0}class ms{key(){return""}listKey(e){return"title"in e?e.title:"unknown"}title(){return""}fileName(e){return`${this.listKey(e)}.json`}zipFileName(){return`${new Date().getTime()}.zip`}validate(e){return e}sort(e){const t=[],i=e.map(r=>`${this.listKey(r)}`).sort();for(const r of i){const n=e.find(o=>`${this.listKey(o)}`===r);n!==void 0&&t.push(n)}return t}replaceInStore(e,t,i){const r=this.listKey(t),n=this.listKey(i);if(n!==r){for(const o of e.getData(this.key())||[])if(this.listKey(o)===r)throw new Error(`Liste "${r}" existiert bereits!"`)}e.updateData(this.key(),o=>{for(let a=0;a<o.length;a++)this.listKey(o[a])===n&&(o[a]=t);return o})}addToStore(e,t,i){const r=e.getData(this.key());if(r===void 0)return;const o=[...r.filter(a=>t.find(h=>this.listKey(h)===this.listKey(a))===void 0),...t];e.setData(this.key(),i?this.sort(o):o)}}class aa extends ms{key(){return"alertLists"}listKey(e){return e.title}title(){return"Alarm Listen"}fileName(e){return`Alarm Liste - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof(e==null?void 0:e.title)!="string"||!("data"in e)||!Array.isArray(e.data))return null;for(const t of e.data)if(!("from"in t&&"to"in t&&"alert"in t&&"desc"in t)||typeof t.from!="number"||typeof t.to!="number"||typeof t.alert!="string"||(typeof t.desc=="string"&&(t.desc=t.desc.split(`
`)),!Array.isArray(t.desc))||t.desc.filter(i=>typeof i!="string").length>0)return null;return e}}class la extends ms{key(){return"metalSheets"}listKey(e){return`${e.format} ${e.toolID}`}title(){return"Blech Listen"}fileName(e){return`Blech Liste - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof e.format!="string"||(e.toolID||(e.toolID=""),typeof e.toolID!="string")||!("data"in e)||typeof e.data!="object"||typeof e.data.press!="number")return null;if(!("table"in e.data))e.data.table={header:[],data:[]};else{if(typeof e.data.table!="object"||!("header"in e.data.table)||!("data"in e.data.table)||!Array.isArray(e.data.table.header)||!Array.isArray(e.data.table.data))return null;for(const t of e.data.table.header)if(typeof t!="string")return null;for(const t of e.data.table.data)for(const i of t)if(typeof i!="string")return null}return e}}class ca extends ms{key(){return"vis"}listKey(e){return`${e.title}`}title(){return"Vis Listen"}fileName(e){return`Vis Liste - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof e=="string")try{e=JSON.parse(e)}catch(t){return console.error(t),null}if(typeof e.title!="string"||!Array.isArray(e.data))return null;for(const t of e.data)if(typeof t!="object"||!("lotto"in t)||!("name"in t)||!("format"in t)||!("thickness"in t)||!("stamp"in t))return null;return e}}function $e(s){switch(s){case"alertLists":return new aa;case"metalSheets":return new la;case"vis":return new ca;default:throw new Error(`unknown "${s}"`)}}async function Yi(s,e){try{const t=await ua(e),i=$e(s),r=[];for(const a of Object.values(t.data.files||{})){if(!(a!=null&&a.content))continue;const c=JSON.parse(a.content),h=i.validate(c);if(h===null)throw console.error(`Invalid data for "${i.title()}":`,c),new Error(`ungültige Daten für "${i.title()}"!`);r.push(h)}const n=await pa(e),o=ye.queryStore();o.setData(s,[]),i.addToStore(o,r,!0),o.updateData("gist",a=>(a[`${s}`]={id:e,revision:n},a))}catch(t){alert(`Etwas ist schiefgelaufen: ${t}`);return}}async function ua(s){const t=await new Ji().request("GET /gists/{gist_id}",{gist_id:s,headers:{"X-GitHub-Api-Version":"2022-11-28"}});if(t.status!==200)throw console.error(t),new Error(`anfrage von "GET /gist/${s}" ist mit Statuscode ${t.status} fehlgeschlagen`);return t}async function pa(s){const t=await new Ji().request("GET /gists/{gist_id}/commits",{gist_id:s,headers:{"X-GitHub-Api-Version":"2022-11-28"}});return t.status!==200?(console.error(t),-1):t.data.length}var da=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,Xi=(s,e,t,i)=>{for(var r=i>1?void 0:i?ha(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&da(e,t,r),r};let Kr=class extends Le{createRenderRoot(){return this}render(){return _e`
            <ui-dialog title="Import" modal inert>
                <ui-flex-grid gap="0.5rem">
                    <ui-flex-grid-item>
                        <ui-label
                            secondary="Zum Importieren von einer Datei leer lassen"
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
                    @click=${async()=>this.close()}
                >
                    Abbrechen
                </ui-button>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>{if(!this.storeKey)return;const s=this.querySelector('ui-dialog ui-input[name="gistID"]').value;s===""?await this.importFromFile():await Yi(this.storeKey,s),ye.queryStackLayout().clearStack(),this.close()}}
                >
                    OK
                </ui-button>
            </ui-dialog>
        `}async importFromFile(){if(!this.storeKey)return;const s=document.createElement("input");s.type="file",s.multiple=!0,s.onchange=async()=>{if(s.files!==null)for(const e of s.files){const t=new FileReader;t.onload=async()=>{if(typeof t.result!="string"||this.storeKey===void 0)return;const i=$e(this.storeKey),r=i.validate(JSON.parse(t.result));if(r===null){alert(`Ungültige Daten für "${i.title()}"!`);return}i.addToStore(ye.queryStore(),[r],!0)},t.onerror=()=>{alert(`Lesen der Datei "${e.name}" ist fehlgeschlagen!`)},t.readAsText(e)}},s.click()}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Xi([ke({type:String,attribute:"store-key",reflect:!0})],Kr.prototype,"storeKey",2);Kr=Xi([Ue("pg-import-dialog")],Kr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ga=s=>(...e)=>({_$litDirective$:s,values:e});let fa=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ma={},ya=(s,e=ma)=>s._$AH=e;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=ga(class extends fa{constructor(){super(...arguments),this.key=Ce}render(s,e){return this.key=s,e}update(s,[e,t]){return e!==this.key&&(ya(s),this.key=e),t}});var _a=Object.defineProperty,va=Object.getOwnPropertyDescriptor,Kt=(s,e,t,i)=>{for(var r=i>1?void 0:i?va(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&_a(e,t,r),r};let vt=class extends Le{constructor(){super(...arguments),this.title="",this.format="",this.toolID="",this.press=-1}createRenderRoot(){return this}render(){return _e`
            <ui-dialog title=${this.title} modal inert>
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${Ft(this.format,_e`
                                <ui-input
                                    type="text"
                                    title="Format"
                                    value=${this.format}
                                    @change=${s=>{this.format=s.currentTarget.value}}
                                ></ui-input>
                            `)}
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        ${Ft(this.toolID,_e`
                                <ui-input
                                    type="text"
                                    title="Unterteil ID"
                                    value=${this.toolID}
                                    @change=${s=>{this.toolID=s.currentTarget.value}}
                                ></ui-input>
                            `)}
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        ${this._renderPressSelect()}
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
        `}_renderPressSelect(){return Ft(this.press,_e`
                <ui-label primary="Presse">
                    <ui-select
                        @change=${s=>{const t=s.currentTarget.selected();t&&(this.press=parseInt(t.value,10))}}
                    >
                        <ui-select-option
                            value="-1"
                            ?selected=${this.press===-1}
                        >
                            -
                        </ui-select-option>

                        <ui-select-option
                            value="0"
                            ?selected=${this.press===0}
                        >
                            0
                        </ui-select-option>

                        <ui-select-option
                            value="2"
                            ?selected=${this.press===2}
                        >
                            2
                        </ui-select-option>

                        <ui-select-option
                            value="3"
                            ?selected=${this.press===3}
                        >
                            3
                        </ui-select-option>

                        <ui-select-option
                            value="4"
                            ?selected=${this.press===4}
                        >
                            4
                        </ui-select-option>

                        <ui-select-option
                            value="5"
                            ?selected=${this.press===5}
                        >
                            5
                        </ui-select-option>
                    </ui-select>
                </ui-label>
            `)}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Kt([ke({type:String,attribute:"title",reflect:!0})],vt.prototype,"title",2);Kt([ke({type:String,attribute:"format",reflect:!0})],vt.prototype,"format",2);Kt([ke({type:String,attribute:"tool-id",reflect:!0})],vt.prototype,"toolID",2);Kt([ke({type:Number,attribute:"press",reflect:!0})],vt.prototype,"press",2);vt=Kt([Ue("pg-metal-sheet-table-dialog")],vt);class ys{constructor(){this.listeners={}}addListener(e,t){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(i=>i!==t))}dispatch(e,t){this.listeners[e]&&this.listeners[e].forEach(i=>i(t))}}class _s{constructor(){this.callbacks=[]}add(...e){this.callbacks.push(...e)}run(){this.callbacks.filter(e=>(e(),!1))}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lr=globalThis,vs=lr.ShadowRoot&&(lr.ShadyCSS===void 0||lr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bs=Symbol(),Qs=new WeakMap;let Qi=class{constructor(s,e,t){if(this._$cssResult$=!0,t!==bs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o;const e=this.t;if(vs&&s===void 0){const t=e!==void 0&&e.length===1;t&&(s=Qs.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),t&&Qs.set(e,s))}return s}toString(){return this.cssText}};const ba=s=>new Qi(typeof s=="string"?s:s+"",void 0,bs),be=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Qi(t,s,bs)},wa=(s,e)=>{if(vs)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=lr.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},ei=vs?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ba(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ea,defineProperty:ka,getOwnPropertyDescriptor:Ta,getOwnPropertyNames:Sa,getOwnPropertySymbols:Aa,getPrototypeOf:Ca}=Object,bt=globalThis,ti=bt.trustedTypes,xa=ti?ti.emptyScript:"",ri=bt.reactiveElementPolyfillSupport,jt=(s,e)=>s,pr={toAttribute(s,e){switch(e){case Boolean:s=s?xa:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ws=(s,e)=>!Ea(s,e),si={attribute:!0,type:String,converter:pr,reflect:!1,hasChanged:ws};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),bt.litPropertyMetadata??(bt.litPropertyMetadata=new WeakMap);class gt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=si){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&ka(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=Ta(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const a=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??si}static _$Ei(){if(this.hasOwnProperty(jt("elementProperties")))return;const e=Ca(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(jt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(jt("properties"))){const t=this.properties,i=[...Sa(t),...Aa(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ei(r))}else e!==void 0&&t.push(ei(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wa(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var i;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const o=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:pr).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=r.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:pr;this._$Em=n,this[n]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ws)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},gt[jt("elementProperties")]=new Map,gt[jt("finalized")]=new Map,ri==null||ri({ReactiveElement:gt}),(bt.reactiveElementVersions??(bt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dr=globalThis,hr=dr.trustedTypes,ii=hr?hr.createPolicy("lit-html",{createHTML:s=>s}):void 0,eo="$lit$",He=`lit$${Math.random().toFixed(9).slice(2)}$`,to="?"+He,Pa=`<${to}>`,nt=document,zt=()=>nt.createComment(""),Mt=s=>s===null||typeof s!="object"&&typeof s!="function",Es=Array.isArray,Oa=s=>Es(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Br=`[ 	
\f\r]`,$t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oi=/-->/g,ni=/>/g,tt=RegExp(`>|${Br}(?:([^\\s"'>=/]+)(${Br}*=${Br}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ai=/'/g,li=/"/g,ro=/^(?:script|style|textarea|title)$/i,Ra=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),oe=Ra(1),wt=Symbol.for("lit-noChange"),xe=Symbol.for("lit-nothing"),ci=new WeakMap,st=nt.createTreeWalker(nt,129);function so(s,e){if(!Es(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ii!==void 0?ii.createHTML(e):e}const $a=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=$t;for(let a=0;a<t;a++){const c=s[a];let h,m,p=-1,b=0;for(;b<c.length&&(o.lastIndex=b,m=o.exec(c),m!==null);)b=o.lastIndex,o===$t?m[1]==="!--"?o=oi:m[1]!==void 0?o=ni:m[2]!==void 0?(ro.test(m[2])&&(r=RegExp("</"+m[2],"g")),o=tt):m[3]!==void 0&&(o=tt):o===tt?m[0]===">"?(o=r??$t,p=-1):m[1]===void 0?p=-2:(p=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?tt:m[3]==='"'?li:ai):o===li||o===ai?o=tt:o===oi||o===ni?o=$t:(o=tt,r=void 0);const d=o===tt&&s[a+1].startsWith("/>")?" ":"";n+=o===$t?c+Pa:p>=0?(i.push(h),c.slice(0,p)+eo+c.slice(p)+He+d):c+He+(p===-2?a:d)}return[so(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Nt{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,c=this.parts,[h,m]=$a(e,t);if(this.el=Nt.createElement(h,i),st.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=st.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(eo)){const b=m[o++],d=r.getAttribute(p).split(He),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:w[2],strings:d,ctor:w[1]==="."?Da:w[1]==="?"?Ga:w[1]==="@"?Ua:Sr}),r.removeAttribute(p)}else p.startsWith(He)&&(c.push({type:6,index:n}),r.removeAttribute(p));if(ro.test(r.tagName)){const p=r.textContent.split(He),b=p.length-1;if(b>0){r.textContent=hr?hr.emptyScript:"";for(let d=0;d<b;d++)r.append(p[d],zt()),st.nextNode(),c.push({type:2,index:++n});r.append(p[b],zt())}}}else if(r.nodeType===8)if(r.data===to)c.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(He,p+1))!==-1;)c.push({type:7,index:n}),p+=He.length-1}n++}}static createElement(e,t){const i=nt.createElement("template");return i.innerHTML=e,i}}function Et(s,e,t=s,i){var r,n;if(e===wt)return e;let o=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl;const a=Mt(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((n=o==null?void 0:o._$AO)==null||n.call(o,!1),a===void 0?o=void 0:(o=new a(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=Et(s,o._$AS(s,e.values),o,i)),e}class La{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??nt).importNode(t,!0);st.currentNode=r;let n=st.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new Jt(n,n.nextSibling,this,e):c.type===1?h=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(h=new Fa(n,this,e)),this._$AV.push(h),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=st.nextNode(),o++)}return st.currentNode=nt,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Jt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Et(this,e,t),Mt(e)?e===xe||e==null||e===""?(this._$AH!==xe&&this._$AR(),this._$AH=xe):e!==this._$AH&&e!==wt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==xe&&Mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(nt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Nt.createElement(so(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===n)this._$AH.p(i);else{const o=new La(n,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=ci.get(e.strings);return t===void 0&&ci.set(e.strings,t=new Nt(e)),t}k(e){Es(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Jt(this.O(zt()),this.O(zt()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Sr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=xe}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=Et(this,e,t,0),o=!Mt(e)||e!==this._$AH&&e!==wt,o&&(this._$AH=e);else{const a=e;let c,h;for(e=n[0],c=0;c<n.length-1;c++)h=Et(this,a[i+c],t,c),h===wt&&(h=this._$AH[c]),o||(o=!Mt(h)||h!==this._$AH[c]),h===xe?e=xe:e!==xe&&(e+=(h??"")+n[c+1]),this._$AH[c]=h}o&&!r&&this.j(e)}j(e){e===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Da extends Sr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===xe?void 0:e}}class Ga extends Sr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==xe)}}class Ua extends Sr{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=Et(this,e,t,0)??xe)===wt)return;const i=this._$AH,r=e===xe&&i!==xe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==xe&&(i===xe||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Fa{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}}const ui=dr.litHtmlPolyfillSupport;ui==null||ui(Nt,Jt),(dr.litHtmlVersions??(dr.litHtmlVersions=[])).push("3.2.1");const ja=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new Jt(e.insertBefore(zt(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let he=class extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(s){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=ja(e,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return wt}};var pi;he._$litElement$=!0,he.finalized=!0,(pi=globalThis.litElementHydrateSupport)==null||pi.call(globalThis,{LitElement:he});const di=globalThis.litElementPolyfillSupport;di==null||di({LitElement:he});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Ia={onDragStart:null,onDragging:null,onDragEnd:null};function Ba(s,e,t){t={...Ia,...t};const i=[...s.children].indexOf(e);return e.draggable=!0,e.ondragstart=r=>{r.dataTransfer&&(r.dataTransfer.effectAllowed="move",r.dataTransfer.dropEffect="move"),s.classList.add("dragging"),t.onDragStart&&t.onDragStart(i)},e.ondragover=r=>(r.preventDefault(),!1),e.ondragenter=r=>{r.preventDefault(),[...s.children].forEach((n,o)=>{if(o===i){n.style.background="hsl(var(--ui-hsl-primary))",n.style.color="hsl(var(--ui-hsl-primary-text))";return}n.style.background="inherit",n.style.color="inherit"}),t.onDragging&&t.onDragging(i)},e.ondrop=r=>{r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="move"),s.classList.remove("dragging"),t.onDragEnd&&t.onDragEnd(i),[...s.children].forEach(n=>{n.style.background="inherit",n.style.color="inherit"})},()=>{e.draggable=!1,e.ondragstart=null,e.ondragover=null,e.ondragenter=null,e.ondrop=null}}const za={onDragStart:null,onDragEnd:null};function Ma(s,e){e={...za,...e};let t=null,i=null,r=null,n=!1,o="",a="";const c=p=>{const b=p.currentTarget;!t&&Array.from(b.classList).includes("draggable")&&(i=new Date().getTime(),t=b,r&&clearTimeout(r),r=setTimeout(()=>{t&&(o=t.style.color,a=t.style.backgroundColor,t.style.color="hsl(var(--ui-hsl-primary-text))",t.style.backgroundColor="hsl(var(--ui-hsl-primary))",s.classList.add("dragging"),n=!0,e!=null&&e.onDragStart&&e.onDragStart())},200))},h=p=>{if(!i||!t)return;if(!n&&new Date().getTime()-i<200){m();return}p.preventDefault(),n||(n=!0,e!=null&&e.onDragStart&&e.onDragStart());let b;if(p instanceof TouchEvent){const w=p.targetTouches[0];b={clientX:w.clientX,clientY:w.clientY}}else b={clientX:p.clientX,clientY:p.clientY};let d=document.elementFromPoint(b.clientX,b.clientY);if(d){for(;!d.classList.contains("draggable")&&d.parentElement;)d=d.parentElement;d.classList.contains("draggable")&&((()=>{let w=t==null?void 0:t.previousElementSibling;for(;w;){if(w===d)return!0;w=w.previousElementSibling}return!1})()?s.insertBefore(t,d):s.insertBefore(t,d.nextElementSibling))}},m=()=>{r!==null&&(clearTimeout(r),r=null),t&&(t.style.color=o,t.style.backgroundColor=a,t=null),i=null,s.classList.remove("dragging"),n&&(n=!1,e!=null&&e.onDragEnd&&e.onDragEnd())};return[...s.children].forEach(p=>{p.classList.add("draggable"),p.onmousedown=c,p.ontouchstart=c,p.onmousemove=h,p.ontouchmove=h,p.onmouseup=m,p.ontouchend=m}),()=>{[...s.children].forEach(p=>{p.classList.remove("draggable"),p.onmousedown=null,p.ontouchstart=null,p.onmousemove=null,p.ontouchmove=null,p.onmouseup=null,p.ontouchend=null})}}const Na=Object.freeze(Object.defineProperty({__proto__:null,createMobile:Ma,createNative:Ba},Symbol.toStringTag,{value:"Module"})),io={color:"var(--ui-ripple-text, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",usePointer:!1};function Ar(s,e){e={...io,...e||{}};let t=null;const i=a=>{t=Jr(a,e),s.addEventListener("pointermove",n)},r=()=>{s.removeEventListener("pointermove",n),Yr(t),t=null},n=()=>r(),o=a=>{t=Jr(a,e),Yr(t),t=null};return s.classList.add("ripple-container"),s.style.overflow="hidden",e.usePointer?(s.addEventListener("pointerdown",i),s.addEventListener("pointerup",r),s.addEventListener("pointerleave",r)):s.addEventListener("click",o),()=>{if(s.classList.remove("ripple-container"),e.usePointer){s.removeEventListener("pointerdown",i),s.removeEventListener("pointerup",r),s.removeEventListener("pointerleave",r),s.removeEventListener("pointermove",n);return}s.removeEventListener("click",o)}}function Jr(s,e){const t=document.createElement("div"),i=s.currentTarget;i.appendChild(t),t.classList.add("ripple"),t.style.position="absolute",t.style.color="inherit",t.style.borderRadius="50%",t.style.pointerEvents="none",t.style.width="100px",t.style.height="100px",t.style.marginTop="-50px",t.style.marginLeft="-50px",t.style.opacity=`${e.opacity}`,t.style.backgroundColor=`${e.color}`,t.style.transform="scale(0) translate(0, 0)",t.style.transition=`transform ${e.spreadDuration} ${e.spreadTiming} 0s,opacity ${e.clearDuration} ${e.clearTiming} 0s`;const r=i.getBoundingClientRect();e.centered?(t.style.top=`${r.height/2}px`,t.style.left=`${r.width/2}px`):(t.style.top=`${s.clientY-r.top}px`,t.style.left=`${s.clientX-r.left}px`);const n=Math.max(r.width,r.height)*.02;return t.style.transform=`scale(${n}) translate(0, 0)`,t}function Yr(s){s&&(s.addEventListener("transitionend",e=>{e.propertyName==="opacity"&&s.remove()}),s.style.opacity="0")}const qa=Object.freeze(Object.defineProperty({__proto__:null,create:Ar,defaultOptions:io,start:Jr,stop:Yr},Symbol.toStringTag,{value:"Module"}));function Yt(s){return Object.entries(s).map(([e,t])=>`${e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}:${t}`).join(";")+";"}const Ha=oe`
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
`,Va=oe`
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
`,ks=oe`
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
`,Wa=oe`
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
`,oo=oe`
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
`,Za=oe`
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
`,Ka=oe`
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
`,Ja=oe`
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
`,Ya=oe`
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
`,Xa=oe`
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
`,Qa=oe`
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
`,el=oe`
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
`,tl=oe`
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
`,rl=oe`
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
`,sl=oe`
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
`,no=oe`
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
`,il=oe`
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
`,ol=oe`
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
`,nl=oe`
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
`,al=oe`
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
`,ll=oe`
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
`,cl=Object.freeze(Object.defineProperty({__proto__:null,bookmark:Ha,checkmark:Va,chevronDown:ks,chevronLeft:Wa,close:oo,documentNew:Za,download:Ka,drag:Ja,menu:Ya,moreVertical:Xa,pen:Qa,plus:el,power:tl,printer:rl,refresh:sl,search:no,settings:il,share:ol,today:nl,trash:al,upload:ll},Symbol.toStringTag,{value:"Module"})),Ne=Object.freeze(Object.defineProperty({__proto__:null,smoothieLineIcons:cl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul={attribute:!0,type:String,converter:pr,reflect:!1,hasChanged:ws},pl=(s=ul,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){const{name:o}=t;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,s)}}throw Error("Unsupported decorator location: "+i)};function Y(s){return(e,t)=>typeof t=="object"?pl(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}var dl=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,Ts=(s,e,t,i)=>{for(var r=i>1?void 0:i?hl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&dl(e,t,r),r};let gr=class extends he{constructor(){super(...arguments),this.variant="info",this.message="",this.role="button"}static get styles(){return be`
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
        `}render(){return oe`
            <ui-text style="font-size: 0.9rem;">${this.message}</ui-text>
        `}firstUpdated(s){super.firstUpdated(s),this.addEventListener("click",()=>{this.parentElement&&this.parentElement.removeChild(this)})}};Ts([Y({type:String,attribute:"variant",reflect:!0})],gr.prototype,"variant",2);Ts([Y({type:String,attribute:"message"})],gr.prototype,"message",2);gr=Ts([fe("ui-alert")],gr);var gl=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let hi=class extends he{static get styles(){return be`
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
        `}render(){return oe`
            <ui-flex-grid class="container" gap="0.25rem">
                <slot></slot>
            </ui-flex-grid>
        `}addAlert(s){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".container");return t&&t.append(s),()=>this.removeAlert(s)}removeAlert(s){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".container");t&&t.removeChild(s)}};hi=gl([fe("ui-alerts")],hi);var fl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,Ss=(s,e,t,i)=>{for(var r=i>1?void 0:i?ml(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&fl(e,t,r),r};let fr=class extends he{constructor(){super(...arguments),this.position="top",this.fixed=!1}static get styles(){return be`
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
        `}render(){return oe`
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
        `}content(s){return[...this.querySelectorAll(`[slot="${s}"]`)]}contentName(s){return this.querySelector(`[name="${s}"]`)}};Ss([Y({type:String,attribute:"position",reflect:!0})],fr.prototype,"position",2);Ss([Y({type:Boolean,attribute:"fixed",reflect:!0})],fr.prototype,"fixed",2);fr=Ss([fe("ui-app-bar")],fr);var yl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,As=(s,e,t,i)=>{for(var r=i>1?void 0:i?_l(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&yl(e,t,r),r};let mr=class extends he{constructor(){super(...arguments),this.name="",this.hidden=!1}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}content(){return[...this.children]}contentAt(s=0){return this.children[s]}show(){this.hidden=!1}hide(){this.hidden=!0}};As([Y({type:String,attribute:"name",reflect:!0})],mr.prototype,"name",2);As([Y({type:Boolean,attribute:"hidden",reflect:!0})],mr.prototype,"hidden",2);mr=As([fe("ui-app-bar-item")],mr);var vl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,Xt=(s,e,t,i)=>{for(var r=i>1?void 0:i?bl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&vl(e,t,r),r};let at=class extends he{constructor(){super(...arguments),this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),t!==null&&(this.rippleCleanUp=Ar(this));break}}};Xt([Y({type:String,attribute:"color",reflect:!0})],at.prototype,"color",2);Xt([Y({type:String,attribute:"variant",reflect:!0})],at.prototype,"variant",2);Xt([Y({type:Boolean,attribute:"disabled"})],at.prototype,"disabled",2);Xt([Y({type:Boolean,attribute:"ripple"})],at.prototype,"ripple",2);at=Xt([fe("ui-button")],at);const wl=at;var El=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,Qt=(s,e,t,i)=>{for(var r=i>1?void 0:i?kl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&El(e,t,r),r};let kt=class extends he{constructor(){super(...arguments),this.ghost=!1,this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),t!==null&&(this.rippleCleanUp=Ar(this));break}}};Qt([Y({type:String,attribute:"color",reflect:!0})],kt.prototype,"color",2);Qt([Y({type:Boolean,attribute:"ghost"})],kt.prototype,"ghost",2);Qt([Y({type:Boolean,attribute:"disabled"})],kt.prototype,"disabled",2);Qt([Y({type:Boolean,attribute:"ripple"})],kt.prototype,"ripple",2);kt=Qt([fe("ui-icon-button")],kt);var Tl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,ut=(s,e,t,i)=>{for(var r=i>1?void 0:i?Sl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Tl(e,t,r),r};let We=class extends he{constructor(){super(...arguments),this.title="",this.fullscreen="",this.noFooter="",this.open=!1,this.modal=!1,this.inert=!1}static get styles(){return be`
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
        `}render(){return oe`
            <dialog
                @cancel=${s=>{s.preventDefault()}}
            >
                <div class="container">
                    <div class="header">
                        <ui-heading level="4">${this.title}</ui-heading>

                        <ui-icon-button
                            style="width: var(--ui-dialog-header-height); height: 100%;"
                            ghost
                            @click=${()=>{this.close()}}
                        >
                            ${oo}
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
        `}updated(s){this.open?this.show():this.close()}show(){this.open||(this.open=!0);const s=this.shadowRoot.querySelector("dialog");if(s===null)return;const e=s.inert;s.inert=this.inert,this.modal?s.showModal():s.show(),s.inert=e,this.dispatchEvent(new Event("open"))}close(){this.dispatchEvent(new Event("close")),this.shadowRoot.querySelector("dialog").close()}addDialogActionButton(s,e){const t=new ct;t.flex=(e==null?void 0:e.flex)||1,t.slot="actions",this.appendChild(t);let i=new wl;return i.innerHTML=s,i.variant=e==null?void 0:e.variant,i.color=e==null?void 0:e.color,i.onclick=(e==null?void 0:e.onClick)||null,t.appendChild(i),i}};ut([Y({type:String,attribute:"title",reflect:!0})],We.prototype,"title",2);ut([Y({type:Boolean,attribute:"fullscreen",reflect:!0})],We.prototype,"fullscreen",2);ut([Y({type:Boolean,attribute:"no-footer",reflect:!0})],We.prototype,"noFooter",2);ut([Y({type:Boolean,attribute:"open",reflect:!0})],We.prototype,"open",2);ut([Y({type:Boolean,attribute:"modal",reflect:!0})],We.prototype,"modal",2);ut([Y({type:Boolean,attribute:"inert",reflect:!0})],We.prototype,"inert",2);We=ut([fe("ui-dialog")],We);var Al=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,er=(s,e,t,i)=>{for(var r=i>1?void 0:i?Cl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Al(e,t,r),r};const xl="0";let lt=class extends he{constructor(){super(...arguments),this.title="",this.gap=xl,this.open=!1,this.noFold=!1}static get styles(){return be`
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
        `}render(){return oe`
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
                                ${ks}
                            </ui-svg>
                        </ui-flex-grid-item>
                    </ui-flex-grid-row>
                </ui-drawer-group-item>

                <slot></slot>
            </ui-flex-grid>
        `}};er([Y({type:String,attribute:"title",reflect:!0})],lt.prototype,"title",2);er([Y({type:String,attribute:"gap"})],lt.prototype,"gap",2);er([Y({type:Boolean,attribute:"open",reflect:!0})],lt.prototype,"open",2);er([Y({type:Boolean,attribute:"no-fold",reflect:!0})],lt.prototype,"noFold",2);lt=er([fe("ui-drawer-group")],lt);const Pl=lt;var Ol=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,Cs=(s,e,t,i)=>{for(var r=i>1?void 0:i?Rl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ol(e,t,r),r};let yr=class extends he{constructor(){super(...arguments),this.open=!1,this.role="button",this.handleUnfold=s=>{s.currentTarget.scrollIntoView(!0)}}static get styles(){return be`
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
        `}render(){return oe`
            <aside
                @click=${s=>{s.stopPropagation()}}
            >
                <slot></slot>
            </aside>
        `}firstUpdated(s){this.classList.add("has-backdrop-blur"),this.addEventListener("click",()=>{this.open=!1})}updated(s){[...this.children].forEach(async e=>{e instanceof Pl&&e.addEventListener("unfold",this.handleUnfold)})}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"width":t!==null?this.style.setProperty("--_width",t):this.style.removeProperty("--_width");break;case"open":t!==null?(history.pushState(null,"ui-drawer",location.href),this.dispatchEvent(new Event("open"))):this.dispatchEvent(new Event("close"));break}}};Cs([Y({type:String,attribute:"width",reflect:!0})],yr.prototype,"width",2);Cs([Y({type:Boolean,attribute:"open",reflect:!0})],yr.prototype,"open",2);yr=Cs([fe("ui-drawer")],yr);var $l=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Xr=class extends he{static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}};Xr=$l([fe("ui-drawer-group-item")],Xr);const zr=Xr;var Ll=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,tr=(s,e,t,i)=>{for(var r=i>1?void 0:i?Dl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ll(e,t,r),r};const gi="0";let Tt=class extends he{constructor(){super(...arguments),this.gap=gi}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"gap":t?this.style.setProperty("--_gap",t||gi):this.style.removeProperty("--_gap");break;case"justify":t?this.style.setProperty("--_justify",t||""):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t||""):this.style.removeProperty("--_align");break;case"wrap":t?this.style.setProperty("--_wrap",t||""):this.style.removeProperty("--_wrap");break}}};tr([Y({type:String,attribute:"gap"})],Tt.prototype,"gap",2);tr([Y({type:String,attribute:"justify"})],Tt.prototype,"justify",2);tr([Y({type:String,attribute:"align"})],Tt.prototype,"align",2);tr([Y({type:String,attribute:"wrap"})],Tt.prototype,"wrap",2);Tt=tr([fe("ui-flex-grid")],Tt);var Gl=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,rr=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ul(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Gl(e,t,r),r};const Mr=1;let ct=class extends he{constructor(){super(...arguments),this.flex=Mr}static get styles(){return be`
            :host {
                flex: var(--_flex, ${Mr});
                display: flex;
                flex-direction: var(--_direction, row);
                justify-content: var(--_justify);
                align-items: var(--_align);
            }

            ::slotted(*) {
                flex-grow: 1;
            }
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"flex":this.style.setProperty("--_flex",t||Mr.toString());break;case"direction":t?this.style.setProperty("--_direction",t):this.style.removeProperty("--_direction");break;case"justify":t?this.style.setProperty("--_justify",t):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t):this.style.removeProperty("--_align");break}}};rr([Y({type:Number,attribute:"flex"})],ct.prototype,"flex",2);rr([Y({type:String,attribute:"direction",reflect:!0})],ct.prototype,"direction",2);rr([Y({type:String,attribute:"justify"})],ct.prototype,"justify",2);rr([Y({type:String,attribute:"align"})],ct.prototype,"align",2);ct=rr([fe("ui-flex-grid-item")],ct);var Fl=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,sr=(s,e,t,i)=>{for(var r=i>1?void 0:i?jl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Fl(e,t,r),r};const fi="0";let St=class extends he{constructor(){super(...arguments),this.gap=fi}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"gap":t?this.style.setProperty("--_gap",t||fi):this.style.removeProperty("--_gap");break;case"justify":t?this.style.setProperty("--_justify",t||""):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t||""):this.style.removeProperty("--_align");break;case"wrap":t?this.style.setProperty("--_wrap",t||""):this.style.removeProperty("--_wrap");break}}};sr([Y({type:String,attribute:"gap"})],St.prototype,"gap",2);sr([Y({type:String,attribute:"justify"})],St.prototype,"justify",2);sr([Y({type:String,attribute:"align"})],St.prototype,"align",2);sr([Y({type:String,attribute:"wrap"})],St.prototype,"wrap",2);St=sr([fe("ui-flex-grid-row")],St);var Il=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,ao=(s,e,t,i)=>{for(var r=i>1?void 0:i?Bl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Il(e,t,r),r};let Qr=class extends he{constructor(){super(...arguments),this.checked=!1,this.role="checkbox"}static get styles(){return be`
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
        `}render(){return oe`
            <input
                type="checkbox"
                ?checked=${this.checked}

                @input=${()=>{this.checked=!this.checked}}

                @change=${()=>{this.dispatchEvent(new Event("change",{}))}}
            ></input>
        `}click(){super.click(),this.shadowRoot.querySelector("input").checked=this.checked=!this.checked}};ao([Y({type:Boolean,attribute:"checked",reflect:!0})],Qr.prototype,"checked",2);Qr=ao([fe("ui-check")],Qr);var zl=Object.defineProperty,Ml=Object.getOwnPropertyDescriptor,Je=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ml(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&zl(e,t,r),r};let Be=class extends he{constructor(){super(...arguments),this.title="",this.type="",this.value="",this.placeholder="",this.invalid=!1,this.min="",this.max="",this.role="input"}static get styles(){return be`
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
        `}render(){return oe`
            <div class="container">
                ${this.title?oe`
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
                    @input=${s=>{this.value=s.currentTarget.value}}
                    @change=${()=>{this.dispatchEvent(new Event("change"))}}
                />
            </div>
        `}focus(s){super.focus(s),this.shadowRoot.querySelector("input").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};Je([Y({type:String,attribute:"title",reflect:!0})],Be.prototype,"title",2);Je([Y({type:String,attribute:"type",reflect:!0})],Be.prototype,"type",2);Je([Y({type:String,attribute:"value"})],Be.prototype,"value",2);Je([Y({type:String,attribute:"placeholder",reflect:!0})],Be.prototype,"placeholder",2);Je([Y({type:Boolean,attribute:"invalid",reflect:!0})],Be.prototype,"invalid",2);Je([Y({type:String,attribute:"min",reflect:!0})],Be.prototype,"min",2);Je([Y({type:String,attribute:"max",reflect:!0})],Be.prototype,"max",2);Be=Je([fe("ui-input")],Be);var Nl=Object.defineProperty,ql=Object.getOwnPropertyDescriptor,ze=(s,e,t,i)=>{for(var r=i>1?void 0:i?ql(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Nl(e,t,r),r};let je=class extends he{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.noSubmit=!1,this.storage=!1,this.storagePrefix="",this.storageKey="",this.role="search"}static get styles(){return be`
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
        `}render(){return oe`
            <div class="container has-backdrop-blur">
                ${this.title?oe`<ui-secondary class="title">
                          ${this.title}
                      </ui-secondary>`:""}

                <input
                    name="search"
                    type="search"
                    value="${this.value}"
                    @keydown=${s=>{var e,t;this.noSubmit||s.key!=="Enter"||(t=(e=this.shadowRoot)==null?void 0:e.querySelector('ui-icon-button[name="submit"]'))==null||t.click()}}
                    @input=${s=>{this.value=s.currentTarget.value,this.storage&&(localStorage.setItem(this.storagePrefix+this.storageKey,this.value),this.noSubmit&&this.dispatchEvent(new Event("change")))}}
                />

                <ui-icon-button
                    name="submit"
                    for="search"
                    ghost
                    ripple
                    @click=${()=>{this.dispatchEvent(new Event("change"))}}
                >
                    ${no}
                </ui-icon-button>
            </div>
        `}firstUpdated(s){if(super.firstUpdated(s),this.storage){const e=localStorage.getItem(this.storagePrefix+this.storageKey)||this.value;this.value=e,this.dispatchEvent(new Event("storage"))}}focus(s){super.focus(s),this.shadowRoot.querySelector("input").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};ze([Y({type:String,attribute:"title",reflect:!0})],je.prototype,"title",2);ze([Y({type:String,attribute:"value"})],je.prototype,"value",2);ze([Y({type:String,attribute:"placeholder",reflect:!0})],je.prototype,"placeholder",2);ze([Y({type:Boolean,attribute:"invalid",reflect:!0})],je.prototype,"invalid",2);ze([Y({type:Boolean,attribute:"no-submit",reflect:!0})],je.prototype,"noSubmit",2);ze([Y({type:Boolean,attribute:"storage",reflect:!0})],je.prototype,"storage",2);ze([Y({type:String,attribute:"storage-prefix",reflect:!0})],je.prototype,"storagePrefix",2);ze([Y({type:String,attribute:"storage-key",reflect:!0})],je.prototype,"storageKey",2);je=ze([fe("ui-search")],je);var Hl=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,xs=(s,e,t,i)=>{for(var r=i>1?void 0:i?Vl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Hl(e,t,r),r};let _r=class extends he{constructor(){super(...arguments),this.open=!1,this.keepOpen=!1}static get styles(){return be`
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
        `}render(){!this.open&&!this.keepOpen?this.role="button":this.role=null;const s=this.optionsClickHandler.bind(this);return oe`
            <div
                class="options"
                @click=${async e=>{if(this.keepOpen)return await s(e);this.open=!this.open,this.open?(e.stopPropagation(),this.addEventListener("click",s)):this.removeEventListener("click",s)}}
            >
                <div class="icon">
                    <ui-svg>${ks}</ui-svg>
                </div>

                <slot></slot>
            </div>
        `}updated(s){this.style.setProperty("--_items",`${this.children.length}`)}async optionsClickHandler(s){s.composedPath().forEach(e=>{e instanceof At&&([...this.querySelectorAll("ui-select-option")].forEach(t=>t.removeAttribute("selected")),e.setAttribute("selected",""),this.dispatchEvent(new Event("change")))})}options(){return[...this.children].filter(s=>s instanceof At)}selected(){return this.options().find(s=>s.selected)||null}click(){super.click(),this.shadowRoot.querySelector("div.options").click()}};xs([Y({type:Boolean,attribute:"open",reflect:!0})],_r.prototype,"open",2);xs([Y({type:Boolean,attribute:"keep-open",reflect:!0})],_r.prototype,"keepOpen",2);_r=xs([fe("ui-select")],_r);var Wl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Ps=(s,e,t,i)=>{for(var r=i>1?void 0:i?Zl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Wl(e,t,r),r};let At=class extends he{constructor(){super(...arguments),this.value="",this.selected=!1,this.role="button"}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}};Ps([Y({type:String,attribute:"value",reflect:!0})],At.prototype,"value",2);Ps([Y({type:Boolean,attribute:"selected",reflect:!0})],At.prototype,"selected",2);At=Ps([fe("ui-select-option")],At);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=s=>s??xe;var Kl=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,pt=(s,e,t,i)=>{for(var r=i>1?void 0:i?Jl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Kl(e,t,r),r};let Ze=class extends he{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.role="textbox"}static get styles(){return be`
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
        `}render(){return oe`
            <div class="container">
                ${this.title?oe`
                          <ui-secondary class="title">
                              ${this.title}
                          </ui-secondary>
                      `:""}

                <textarea
                    placeholder=${this.placeholder}
                    .value=${this.value}
                    rows=${mi(this.rows)}
                    cols=${mi(this.cols)}
                    @input=${s=>{this.value=s.currentTarget.value}}
                    @change=${()=>{this.dispatchEvent(new Event("change"))}}
                ></textarea>
            </div>
        `}focus(s){super.focus(s),this.shadowRoot.querySelector("textarea").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("textarea").blur()}click(){super.click(),this.focus()}};pt([Y({type:String,attribute:"title",reflect:!0})],Ze.prototype,"title",2);pt([Y({type:String,attribute:"value"})],Ze.prototype,"value",2);pt([Y({type:String,attribute:"placeholder",reflect:!0})],Ze.prototype,"placeholder",2);pt([Y({type:Boolean,attribute:"invalid",reflect:!0})],Ze.prototype,"invalid",2);pt([Y({type:Number,attribute:"rows",reflect:!0})],Ze.prototype,"rows",2);pt([Y({type:Number,attribute:"cols",reflect:!0})],Ze.prototype,"cols",2);Ze=pt([fe("ui-textarea")],Ze);var Yl=Object.defineProperty,Xl=Object.getOwnPropertyDescriptor,Cr=(s,e,t,i)=>{for(var r=i>1?void 0:i?Xl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Yl(e,t,r),r};let qt=class extends he{constructor(){super(...arguments),this.name="",this.href="",this.fallback=!1}static get styles(){return be`
            :host {
                display: none;
            }
        `}};Cr([Y({type:String,attribute:"name",reflect:!0})],qt.prototype,"name",2);Cr([Y({type:String,attribute:"href",reflect:!0})],qt.prototype,"href",2);Cr([Y({type:Boolean,attribute:"fallback",reflect:!0})],qt.prototype,"fallback",2);qt=Cr([fe("ui-lang-type")],qt);var Ql=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,lo=(s,e,t,i)=>{for(var r=i>1?void 0:i?ec(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ql(e,t,r),r};let es=class extends he{constructor(){super(...arguments),this.data={},this.events=new ys,this.current=""}static get styles(){return be`
            :host {
                display: none;
            }
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"current":this.setCurrent(t||"");break}}fallback(){return this.querySelector("ui-lang-type[fallback]")}get(s,e){var t,i;return((i=(t=this.data)==null?void 0:t[s])==null?void 0:i[e])||null}async setCurrent(s){const e=(s!==""?this.querySelector(`ui-lang-type[name="${s}"]`):this.fallback())||this.fallback();if(e){if(!e.href)throw"Missing href attribute!";try{this.data=await(await fetch(e.href)).json()}catch(t){console.error(t)}this.events.dispatch("change",e)}}};lo([Y({type:String,attribute:"current",reflect:!0})],es.prototype,"current",2);es=lo([fe("ui-lang")],es);var tc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,co=(s,e,t,i)=>{for(var r=i>1?void 0:i?rc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&tc(e,t,r),r};let ts=class extends he{constructor(){super(...arguments),this.nobg=!1}static get styles(){return be`
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
        `}render(){return oe`
            <div class="background"></div>
            <div class="spinner"></div>
        `}};co([Y({type:Boolean,attribute:"nobg",reflect:!0})],ts.prototype,"nobg",2);ts=co([fe("ui-spinner")],ts);var sc=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let yi=class extends he{constructor(){super(...arguments),this.events=new ys,this.stack=[],this.onpopstate=()=>{if(this.stack.length===0){this.dispatchChangeEvent(null);return}const s=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(s)},this.pages={},this.lockNavigation=!1}static get styles(){return be`
            :host {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }
        `}render(){return oe`<slot></slot>`}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.onpopstate)}stackSize(){return this.stack.length}clearStack(){for(;this.stack.length>0;)this.removeChild(this.stack.pop());this.dispatchChangeEvent(null)}goBack(){this.stack.length===0||this.lockNavigation||history.back()}registerPage(s,e){this.pages[s]=e}unregisterPage(s){delete this.pages[s]}async setPage(s,e=null,t=!1){var i;if(this.lockNavigation)return;if(!(s in this.pages))throw new Error(`page "${s}" not found`);const r=await this.pages[s]();this.stack.push(this.appendChild(r)),typeof e=="function"&&e(r);let n=null;this.stack.length>1&&!t&&(n=this.stack[this.stack.length-2],(i=n.parentElement)==null||i.removeChild(n)),this.dispatchChangeEvent(n),this.onpopstate!==null&&history.pushState(null,document.title,location.href)}async dispatchChangeEvent(s){this.events.dispatch("change",{old:s||this.stack[this.stack.length-2]||null,current:this.stack[this.stack.length-1]||null})}};yi=sc([fe("ui-stack-layout")],yi);var ic=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,uo=(s,e,t,i)=>{for(var r=i>1?void 0:i?oc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ic(e,t,r),r};let vr=class extends he{constructor(){super(...arguments),this.name=""}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}};uo([Y({type:String,attribute:"name",reflect:!0})],vr.prototype,"name",2);vr=uo([fe("ui-stack-layout-page")],vr);const Nr=vr;var nc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,Os=(s,e,t,i)=>{for(var r=i>1?void 0:i?ac(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&nc(e,t,r),r};let br=class extends he{constructor(){super(...arguments),this.data={},this.events=new ys,this.storage=!1,this.storagePrefix=""}static get styles(){return be`
            :host {
                display: none;
            }
        `}getData(s){if(this.storage){const e=localStorage.getItem(`${this.storagePrefix}${s}`);if(e!==null)return JSON.parse(e)}if(this.data.hasOwnProperty(s))return this.data[s]}setData(s,e,t=!1){if(t&&this.storage){const i=localStorage.getItem(`${this.storagePrefix}${s}`);i!==null?this.data[s]=JSON.parse(i):this.data.hasOwnProperty(s)||(this.data[s]=e)}else this.data[s]=e;this.storage&&localStorage.setItem(`${this.storagePrefix}${s}`,JSON.stringify(this.data[s])),this.events.dispatch(s,this.data[s])}updateData(s,e){const t=this.getData(s);if(t===void 0)throw new Error(`"${s}" not found, use \`setData\``);this.setData(s,e(t))}addListener(s,e,t=!1){if(t){const i=this.getData(s);i!==void 0&&setTimeout(()=>e(i))}return this.events.addListener(s,e)}};Os([Y({type:Boolean,attribute:"storage",reflect:!0})],br.prototype,"storage",2);Os([Y({type:String,attribute:"storage-prefix",reflect:!0})],br.prototype,"storagePrefix",2);br=Os([fe("ui-store")],br);var lc=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let _i=class extends he{static get styles(){return be`
            :host {
                display: inline-block;
                color: inherit;
            }

            ::slotted(*) {
                width: 100%;
                height: 100%;
            }
        `}render(){return oe` <slot></slot> `}};_i=lc([fe("ui-svg")],_i);var cc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Ye=(s,e,t,i)=>{for(var r=i>1?void 0:i?uc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&cc(e,t,r),r};let Ie=class extends he{constructor(){super(...arguments),this.family="var(--ui-fontFamily)",this.size="var(--ui-fontSize)",this.mono=0,this.casl=1,this.wght=400,this.slnt=0,this.crsv=.5}static get styles(){return be`
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
        `}render(){return this.style.setProperty("--_family",this.family),this.style.setProperty("--_size",this.size),this.style.setProperty("--_mono",this.mono.toString()),this.style.setProperty("--_casl",this.casl.toString()),this.style.setProperty("--_wght",this.wght.toString()),this.style.setProperty("--_slnt",this.slnt.toString()),this.style.setProperty("--_crsv",this.crsv.toString()),oe`<slot></slot>`}};Ye([Y({type:String,attribute:"family",reflect:!0})],Ie.prototype,"family",2);Ye([Y({type:String,attribute:"size",reflect:!0})],Ie.prototype,"size",2);Ye([Y({type:Number,attribute:"mono",reflect:!0})],Ie.prototype,"mono",2);Ye([Y({type:Number,attribute:"casl",reflect:!0})],Ie.prototype,"casl",2);Ye([Y({type:Number,attribute:"wght",reflect:!0})],Ie.prototype,"wght",2);Ye([Y({type:Number,attribute:"slnt",reflect:!0})],Ie.prototype,"slnt",2);Ye([Y({type:Number,attribute:"crsv",reflect:!0})],Ie.prototype,"crsv",2);Ie=Ye([fe("ui-text")],Ie);const Rs=Ie;var pc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,po=(s,e,t,i)=>{for(var r=i>1?void 0:i?dc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&pc(e,t,r),r};let rs=class extends Rs{constructor(){super(...arguments),this.mono=.25,this.casl=1,this.wght=750,this.slnt=0}render(){switch(this.level){case 6:this.size="0.75rem";break;case 5:this.size="1rem";break;case 4:this.size="1.25rem";break;case 3:this.size="1.5rem";break;case 2:this.size="1.75rem";break;case 1:this.size="2rem";break}return super.render()}};po([Y({type:Number,attribute:"level",reflect:!0})],rs.prototype,"level",2);rs=po([fe("ui-heading")],rs);var hc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,xr=(s,e,t,i)=>{for(var r=i>1?void 0:i?gc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&hc(e,t,r),r};let Ht=class extends he{constructor(){super(...arguments),this.rippleCleanUp=null,this.clickHandler=async s=>{s.currentTarget&&[...s.currentTarget.children].forEach(e=>{e.click()})},this.childClickHandler=async s=>{s.stopPropagation()},this.ripple=!1}static get styles(){return be`
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
        `}render(){return oe`
            <div>
                <span>
                    ${this.primary?oe`<ui-primary>${this.primary}</ui-primary>`:""}
                    ${this.secondary?oe`<ui-secondary>${this.secondary}</ui-secondary>`:""}
                </span>

                <span>
                    <slot></slot>
                </span>
            </div>
        `}firstUpdated(s){super.firstUpdated(s),this.ripple?this.enableRipple():this.disableRipple()}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.ripple?this.enableRipple():this.disableRipple()}}async enableRipple(){var s;if(this.rippleCleanUp)return;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("div");e&&(this.rippleCleanUp=Ar(e),this.role="button",this.style.cursor="pointer",this.addEventListener("click",this.clickHandler),[...this.children].forEach(t=>{t.addEventListener("click",this.childClickHandler)}))}async disableRipple(){this.rippleCleanUp&&(this.style.cursor="default",this.role=null,this.rippleCleanUp(),this.rippleCleanUp=null,this.removeEventListener("click",this.clickHandler),[...this.children].forEach(s=>{s.removeEventListener("click",this.childClickHandler)}))}};xr([Y({type:String,attribute:"primary",reflect:!0})],Ht.prototype,"primary",2);xr([Y({type:String,attribute:"secondary",reflect:!0})],Ht.prototype,"secondary",2);xr([Y({type:Boolean,attribute:"ripple",reflect:!0})],Ht.prototype,"ripple",2);Ht=xr([fe("ui-label")],Ht);var fc=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let vi=class extends Rs{constructor(){super(...arguments),this.size="1.1rem",this.wght=425}};vi=fc([fe("ui-primary")],vi);var mc=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let bi=class extends Rs{constructor(){super(...arguments),this.size="0.9rem",this.wght=350,this.slnt=-15}};bi=mc([fe("ui-secondary")],bi);var yc=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,ir=(s,e,t,i)=>{for(var r=i>1?void 0:i?_c(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&yc(e,t,r),r};let Ct=class extends he{constructor(){super(...arguments),this.themesPath="themes",this.media=null}get target(){return document.body}get mediaHandler(){return s=>{s.matches?this.target.setAttribute("data-theme","dark"):this.target.setAttribute("data-theme","light")}}static get styles(){return be`
            :host {
                display: none;
            }
        `}firstUpdated(s){this.hasAttribute("theme")||this.handleTheme()}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"auto":this.handleAuto();break;case"mode":this.handleMode();break;case"theme":this.handleTheme();break}}handleAuto(){if(!this.auto){if(console.debug("[ui][ui-theme-handler] Disable auto mode"),!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null;return}if(this.mode=null,console.debug("[ui][ui-theme-handler] Enable auto mode"),this.media){this.mediaHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}handleMode(){console.debug(`[ui][ui-theme-handler] Set mode ${this.mode}`),this.mode?this.target.setAttribute("data-theme",this.mode):this.target.removeAttribute("data-theme")}handleTheme(){const s=document.head;console.debug(`[ui][ui-theme-handler] Load theme from "${this.themesPath}/${this.theme}"`),s.querySelectorAll("link.theme").forEach(t=>{s.removeChild(t)});const e=document.createElement("link");e.classList.add("theme"),e.rel="stylesheet",e.href=`${this.themesPath}/${this.theme}.css`,s.appendChild(e)}};ir([Y({type:Boolean,attribute:"auto",reflect:!0})],Ct.prototype,"auto",2);ir([Y({type:String,attribute:"mode",reflect:!0})],Ct.prototype,"mode",2);ir([Y({type:String,attribute:"theme",reflect:!0})],Ct.prototype,"theme",2);ir([Y({type:String,attribute:"themes-path",reflect:!0})],Ct.prototype,"themesPath",2);Ct=ir([fe("ui-theme-handler")],Ct);var vc=Object.defineProperty,bc=Object.getOwnPropertyDescriptor,Pr=(s,e,t,i)=>{for(var r=i>1?void 0:i?bc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&vc(e,t,r),r};let Vt=class extends Le{constructor(){super(...arguments),this.revision=0,this.gistID="",this.cleanup=new _s}render(){return oe`
            <ui-flex-grid>
                <ui-flex-grid-item direction="column" align="flex-start">
                    <ui-text mono="1" size="0.85rem"
                        >${this.gistID||oe`???`}</ui-text
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
                        @click=${async()=>{if(this.storeKey)try{this.startSpinner(),confirm("Alle Ihre Änderungen gehen verloren!")&&(await Yi(this.storeKey,this.gistID),ye.queryStackLayout().clearStack())}finally{this.stopSpinner()}}}
                    >
                        Aktualisieren
                    </ui-button>
                </ui-flex-grid-item>
            </ui-flex-grid>

            <ui-spinner
                style="${Yt({position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"none"})}"
            ></ui-spinner>
        `}connectedCallback(){super.connectedCallback();const s=ye.queryStore();this.cleanup.add(s.addListener("gist",e=>{if(!this.storeKey)return;const t=$e(this.storeKey),i=e[t.key()];i!==void 0&&(this.gistID=i.id,this.revision=i.revision)},!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}startSpinner(){this.shadowRoot.querySelector("ui-spinner").style.display="block"}stopSpinner(){this.shadowRoot.querySelector("ui-spinner").style.display="none"}};Pr([ke({type:String,attribute:"store-key",reflect:!0})],Vt.prototype,"storeKey",2);Pr([ke({type:Number,attribute:!1,reflect:!0})],Vt.prototype,"revision",2);Pr([ke({type:String,attribute:!1,reflect:!0})],Vt.prototype,"gistID",2);Vt=Pr([Ue("pg-drawer-item-gist")],Vt);var ho={exports:{}};(function(s,e){(function(t,i){i()})(Fe,function(){function t(h,m){return typeof m>"u"?m={autoBom:!1}:typeof m!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),m={autoBom:!m}),m.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function i(h,m,p){var b=new XMLHttpRequest;b.open("GET",h),b.responseType="blob",b.onload=function(){c(b.response,m,p)},b.onerror=function(){console.error("could not download file")},b.send()}function r(h){var m=new XMLHttpRequest;m.open("HEAD",h,!1);try{m.send()}catch{}return 200<=m.status&&299>=m.status}function n(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var m=document.createEvent("MouseEvents");m.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(m)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Fe=="object"&&Fe.global===Fe?Fe:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(h,m,p){var b=o.URL||o.webkitURL,d=document.createElement("a");m=m||h.name||"download",d.download=m,d.rel="noopener",typeof h=="string"?(d.href=h,d.origin===location.origin?n(d):r(d.href)?i(h,m,p):n(d,d.target="_blank")):(d.href=b.createObjectURL(h),setTimeout(function(){b.revokeObjectURL(d.href)},4e4),setTimeout(function(){n(d)},0))}:"msSaveOrOpenBlob"in navigator?function(h,m,p){if(m=m||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(t(h,p),m);else if(r(h))i(h,m,p);else{var b=document.createElement("a");b.href=h,b.target="_blank",setTimeout(function(){n(b)})}}:function(h,m,p,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof h=="string")return i(h,m,p);var d=h.type==="application/octet-stream",w=/constructor/i.test(o.HTMLElement)||o.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||d&&w||a)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var S=y.result;S=g?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=S:location=S,b=null},y.readAsDataURL(h)}else{var f=o.URL||o.webkitURL,k=f.createObjectURL(h);b?b.location=k:location.href=k,b=null,setTimeout(function(){f.revokeObjectURL(k)},4e4)}});o.saveAs=c.saveAs=c,s.exports=c})})(ho);var wc=ho.exports;const Ec=gs(wc);function or(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var go={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,e){(function(t){s.exports=t()})(function(){return function t(i,r,n){function o(h,m){if(!r[h]){if(!i[h]){var p=typeof or=="function"&&or;if(!m&&p)return p(h,!0);if(a)return a(h,!0);var b=new Error("Cannot find module '"+h+"'");throw b.code="MODULE_NOT_FOUND",b}var d=r[h]={exports:{}};i[h][0].call(d.exports,function(w){var g=i[h][1][w];return o(g||w)},d,d.exports,t,i,r,n)}return r[h].exports}for(var a=typeof or=="function"&&or,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(t,i,r){var n=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(c){for(var h,m,p,b,d,w,g,y=[],f=0,k=c.length,S=k,P=n.getTypeOf(c)!=="string";f<c.length;)S=k-f,p=P?(h=c[f++],m=f<k?c[f++]:0,f<k?c[f++]:0):(h=c.charCodeAt(f++),m=f<k?c.charCodeAt(f++):0,f<k?c.charCodeAt(f++):0),b=h>>2,d=(3&h)<<4|m>>4,w=1<S?(15&m)<<2|p>>6:64,g=2<S?63&p:64,y.push(a.charAt(b)+a.charAt(d)+a.charAt(w)+a.charAt(g));return y.join("")},r.decode=function(c){var h,m,p,b,d,w,g=0,y=0,f="data:";if(c.substr(0,f.length)===f)throw new Error("Invalid base64 input, it looks like a data url.");var k,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===a.charAt(64)&&S--,c.charAt(c.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=o.uint8array?new Uint8Array(0|S):new Array(0|S);g<c.length;)h=a.indexOf(c.charAt(g++))<<2|(b=a.indexOf(c.charAt(g++)))>>4,m=(15&b)<<4|(d=a.indexOf(c.charAt(g++)))>>2,p=(3&d)<<6|(w=a.indexOf(c.charAt(g++))),k[y++]=h,d!==64&&(k[y++]=m),w!==64&&(k[y++]=p);return k}},{"./support":30,"./utils":32}],2:[function(t,i,r){var n=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),c=t("./stream/DataLengthProbe");function h(m,p,b,d,w){this.compressedSize=m,this.uncompressedSize=p,this.crc32=b,this.compression=d,this.compressedContent=w}h.prototype={getContentWorker:function(){var m=new o(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),p=this;return m.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),m},getCompressedWorker:function(){return new o(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(m,p,b){return m.pipe(new a).pipe(new c("uncompressedSize")).pipe(p.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression",p)},i.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,r){var n=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,r){var n=t("./utils"),o=function(){for(var a,c=[],h=0;h<256;h++){a=h;for(var m=0;m<8;m++)a=1&a?3988292384^a>>>1:a>>>1;c[h]=a}return c}();i.exports=function(a,c){return a!==void 0&&a.length?n.getTypeOf(a)!=="string"?function(h,m,p,b){var d=o,w=b+p;h^=-1;for(var g=b;g<w;g++)h=h>>>8^d[255&(h^m[g])];return-1^h}(0|c,a,a.length,0):function(h,m,p,b){var d=o,w=b+p;h^=-1;for(var g=b;g<w;g++)h=h>>>8^d[255&(h^m.charCodeAt(g))];return-1^h}(0|c,a,a.length,0):0}},{"./utils":32}],5:[function(t,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,i,r){var n=null;n=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:n}},{lie:37}],7:[function(t,i,r){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),c=t("./stream/GenericWorker"),h=n?"uint8array":"array";function m(p,b){c.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=b,this.meta={}}r.magic="\b\0",a.inherits(m,c),m.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,p.data),!1)},m.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},m.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},m.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(b){p.push({data:b,meta:p.meta})}},r.compressWorker=function(p){return new m("Deflate",p)},r.uncompressWorker=function(){return new m("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,r){function n(d,w){var g,y="";for(g=0;g<w;g++)y+=String.fromCharCode(255&d),d>>>=8;return y}function o(d,w,g,y,f,k){var S,P,C=d.file,B=d.compression,U=k!==h.utf8encode,V=a.transformTo("string",k(C.name)),G=a.transformTo("string",h.utf8encode(C.name)),X=C.comment,ae=a.transformTo("string",k(X)),T=a.transformTo("string",h.utf8encode(X)),j=G.length!==C.name.length,u=T.length!==X.length,z="",ce="",H="",ue=C.dir,Z=C.date,le={crc32:0,compressedSize:0,uncompressedSize:0};w&&!g||(le.crc32=d.crc32,le.compressedSize=d.compressedSize,le.uncompressedSize=d.uncompressedSize);var L=0;w&&(L|=8),U||!j&&!u||(L|=2048);var $=0,ne=0;ue&&($|=16),f==="UNIX"?(ne=798,$|=function(Q,we){var Se=Q;return Q||(Se=we?16893:33204),(65535&Se)<<16}(C.unixPermissions,ue)):(ne=20,$|=function(Q){return 63&(Q||0)}(C.dosPermissions)),S=Z.getUTCHours(),S<<=6,S|=Z.getUTCMinutes(),S<<=5,S|=Z.getUTCSeconds()/2,P=Z.getUTCFullYear()-1980,P<<=4,P|=Z.getUTCMonth()+1,P<<=5,P|=Z.getUTCDate(),j&&(ce=n(1,1)+n(m(V),4)+G,z+="up"+n(ce.length,2)+ce),u&&(H=n(1,1)+n(m(ae),4)+T,z+="uc"+n(H.length,2)+H);var ee="";return ee+=`
\0`,ee+=n(L,2),ee+=B.magic,ee+=n(S,2),ee+=n(P,2),ee+=n(le.crc32,4),ee+=n(le.compressedSize,4),ee+=n(le.uncompressedSize,4),ee+=n(V.length,2),ee+=n(z.length,2),{fileRecord:p.LOCAL_FILE_HEADER+ee+V+z,dirRecord:p.CENTRAL_FILE_HEADER+n(ne,2)+ee+n(ae.length,2)+"\0\0\0\0"+n($,4)+n(y,4)+V+z+ae}}var a=t("../utils"),c=t("../stream/GenericWorker"),h=t("../utf8"),m=t("../crc32"),p=t("../signature");function b(d,w,g,y){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=g,this.encodeFileName=y,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(b,c),b.prototype.push=function(d){var w=d.meta.percent||0,g=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,c.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(w+100*(g-y-1))/g:100}}))},b.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var w=this.streamFiles&&!d.file.dir;if(w){var g=o(d,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(d){this.accumulate=!1;var w=this.streamFiles&&!d.file.dir,g=o(d,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),w)this.push({data:function(y){return p.DATA_DESCRIPTOR+n(y.crc32,4)+n(y.compressedSize,4)+n(y.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var d=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var g=this.bytesWritten-d,y=function(f,k,S,P,C){var B=a.transformTo("string",C(P));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(f,2)+n(f,2)+n(k,4)+n(S,4)+n(B.length,2)+B}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(d){this._sources.push(d);var w=this;return d.on("data",function(g){w.processChunk(g)}),d.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),d.on("error",function(g){w.error(g)}),this},b.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(d){var w=this._sources;if(!c.prototype.error.call(this,d))return!1;for(var g=0;g<w.length;g++)try{w[g].error(d)}catch{}return!0},b.prototype.lock=function(){c.prototype.lock.call(this);for(var d=this._sources,w=0;w<d.length;w++)d[w].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,r){var n=t("../compressions"),o=t("./ZipFileWorker");r.generateWorker=function(a,c,h){var m=new o(c.streamFiles,h,c.platform,c.encodeFileName),p=0;try{a.forEach(function(b,d){p++;var w=function(k,S){var P=k||S,C=n[P];if(!C)throw new Error(P+" is not a valid compression method !");return C}(d.options.compression,c.compression),g=d.options.compressionOptions||c.compressionOptions||{},y=d.dir,f=d.date;d._compressWorker(w,g).withStreamInfo("file",{name:b,dir:y,date:f,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(m)}),m.entriesCount=p}catch(b){m.error(b)}return m}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,r){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new n;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(n.prototype=t("./object")).loadAsync=t("./load"),n.support=t("./support"),n.defaults=t("./defaults"),n.version="3.10.1",n.loadAsync=function(o,a){return new n().loadAsync(o,a)},n.external=t("./external"),i.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,r){var n=t("./utils"),o=t("./external"),a=t("./utf8"),c=t("./zipEntries"),h=t("./stream/Crc32Probe"),m=t("./nodejsUtils");function p(b){return new o.Promise(function(d,w){var g=b.decompressed.getContentWorker().pipe(new h);g.on("error",function(y){w(y)}).on("end",function(){g.streamInfo.crc32!==b.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}i.exports=function(b,d){var w=this;return d=n.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),m.isNode&&m.isStream(b)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",b,!0,d.optimizedBinaryString,d.base64).then(function(g){var y=new c(d);return y.load(g),y}).then(function(g){var y=[o.Promise.resolve(g)],f=g.files;if(d.checkCRC32)for(var k=0;k<f.length;k++)y.push(p(f[k]));return o.Promise.all(y)}).then(function(g){for(var y=g.shift(),f=y.files,k=0;k<f.length;k++){var S=f[k],P=S.fileNameStr,C=n.resolve(S.fileNameStr);w.file(C,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:d.createFolders}),S.dir||(w.file(C).unsafeOriginalName=P)}return y.zipComment.length&&(w.comment=y.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,r){var n=t("../utils"),o=t("../stream/GenericWorker");function a(c,h){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(h)}n.inherits(a,o),a.prototype._bindStream=function(c){var h=this;(this._stream=c).pause(),c.on("data",function(m){h.push({data:m,meta:{percent:0}})}).on("error",function(m){h.isPaused?this.generatedError=m:h.error(m)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,r){var n=t("readable-stream").Readable;function o(a,c,h){n.call(this,c),this._helper=a;var m=this;a.on("data",function(p,b){m.push(p)||m._helper.pause(),h&&h(b)}).on("error",function(p){m.emit("error",p)}).on("end",function(){m.push(null)})}t("../utils").inherits(o,n),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,o);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,o)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var o=new Buffer(n);return o.fill(0),o},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(t,i,r){function n(C,B,U){var V,G=a.getTypeOf(B),X=a.extend(U||{},m);X.date=X.date||new Date,X.compression!==null&&(X.compression=X.compression.toUpperCase()),typeof X.unixPermissions=="string"&&(X.unixPermissions=parseInt(X.unixPermissions,8)),X.unixPermissions&&16384&X.unixPermissions&&(X.dir=!0),X.dosPermissions&&16&X.dosPermissions&&(X.dir=!0),X.dir&&(C=f(C)),X.createFolders&&(V=y(C))&&k.call(this,V,!0);var ae=G==="string"&&X.binary===!1&&X.base64===!1;U&&U.binary!==void 0||(X.binary=!ae),(B instanceof p&&B.uncompressedSize===0||X.dir||!B||B.length===0)&&(X.base64=!1,X.binary=!0,B="",X.compression="STORE",G="string");var T=null;T=B instanceof p||B instanceof c?B:w.isNode&&w.isStream(B)?new g(C,B):a.prepareContent(C,B,X.binary,X.optimizedBinaryString,X.base64);var j=new b(C,T,X);this.files[C]=j}var o=t("./utf8"),a=t("./utils"),c=t("./stream/GenericWorker"),h=t("./stream/StreamHelper"),m=t("./defaults"),p=t("./compressedObject"),b=t("./zipObject"),d=t("./generate"),w=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),y=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var B=C.lastIndexOf("/");return 0<B?C.substring(0,B):""},f=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},k=function(C,B){return B=B!==void 0?B:m.createFolders,C=f(C),this.files[C]||n.call(this,C,null,{dir:!0,createFolders:B}),this.files[C]};function S(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var P={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var B,U,V;for(B in this.files)V=this.files[B],(U=B.slice(this.root.length,B.length))&&B.slice(0,this.root.length)===this.root&&C(U,V)},filter:function(C){var B=[];return this.forEach(function(U,V){C(U,V)&&B.push(V)}),B},file:function(C,B,U){if(arguments.length!==1)return C=this.root+C,n.call(this,C,B,U),this;if(S(C)){var V=C;return this.filter(function(X,ae){return!ae.dir&&V.test(X)})}var G=this.files[this.root+C];return G&&!G.dir?G:null},folder:function(C){if(!C)return this;if(S(C))return this.filter(function(G,X){return X.dir&&C.test(G)});var B=this.root+C,U=k.call(this,B),V=this.clone();return V.root=U.name,V},remove:function(C){C=this.root+C;var B=this.files[C];if(B||(C.slice(-1)!=="/"&&(C+="/"),B=this.files[C]),B&&!B.dir)delete this.files[C];else for(var U=this.filter(function(G,X){return X.name.slice(0,C.length)===C}),V=0;V<U.length;V++)delete this.files[U[V].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var B,U={};try{if((U=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=U.type.toLowerCase(),U.compression=U.compression.toUpperCase(),U.type==="binarystring"&&(U.type="string"),!U.type)throw new Error("No output type specified.");a.checkSupport(U.type),U.platform!=="darwin"&&U.platform!=="freebsd"&&U.platform!=="linux"&&U.platform!=="sunos"||(U.platform="UNIX"),U.platform==="win32"&&(U.platform="DOS");var V=U.comment||this.comment||"";B=d.generateWorker(this,U,V)}catch(G){(B=new c("error")).error(G)}return new h(B,U.type||"string",U.mimeType)},generateAsync:function(C,B){return this.generateInternalStream(C).accumulate(B)},generateNodeStream:function(C,B){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(B)}};i.exports=P},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,r){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,r){var n=t("./DataReader");function o(a){n.call(this,a);for(var c=0;c<this.data.length;c++)a[c]=255&a[c]}t("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var c=a.charCodeAt(0),h=a.charCodeAt(1),m=a.charCodeAt(2),p=a.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===c&&this.data[b+1]===h&&this.data[b+2]===m&&this.data[b+3]===p)return b-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var c=a.charCodeAt(0),h=a.charCodeAt(1),m=a.charCodeAt(2),p=a.charCodeAt(3),b=this.readData(4);return c===b[0]&&h===b[1]&&m===b[2]&&p===b[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,i,r){var n=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var c,h=0;for(this.checkOffset(a),c=this.index+a-1;c>=this.index;c--)h=(h<<8)+this.byteAt(c);return this.index+=a,h},readString:function(a){return n.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(t,i,r){var n=t("./Uint8ArrayReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,r){var n=t("./DataReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,i,r){var n=t("./ArrayReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,r){var n=t("../utils"),o=t("../support"),a=t("./ArrayReader"),c=t("./StringReader"),h=t("./NodeBufferReader"),m=t("./Uint8ArrayReader");i.exports=function(p){var b=n.getTypeOf(p);return n.checkSupport(b),b!=="string"||o.uint8array?b==="nodebuffer"?new h(p):o.uint8array?new m(n.transformTo("uint8array",p)):new a(n.transformTo("array",p)):new c(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,r){var n=t("./GenericWorker"),o=t("../utils");function a(c){n.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(a,n),a.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,r){var n=t("./GenericWorker"),o=t("../crc32");function a(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,n),a.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,r){var n=t("../utils"),o=t("./GenericWorker");function a(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(a,o),a.prototype.processChunk=function(c){if(c){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+c.data.length}o.prototype.processChunk.call(this,c)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,r){var n=t("../utils"),o=t("./GenericWorker");function a(c){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(m){h.dataIsReady=!0,h.data=m,h.max=m&&m.length||0,h.type=n.getTypeOf(m),h.isPaused||h._tickAndRepeat()},function(m){h.error(m)})}n.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,h);break;case"uint8array":c=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":c=this.data.slice(this.index,h)}return this.index=h,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,r){function n(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(c){a.processChunk(c)}),o.on("end",function(){a.end()}),o.on("error",function(c){a.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=n},{}],29:[function(t,i,r){var n=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),c=t("../base64"),h=t("../support"),m=t("../external"),p=null;if(h.nodestream)try{p=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(w,g){return new m.Promise(function(y,f){var k=[],S=w._internalType,P=w._outputType,C=w._mimeType;w.on("data",function(B,U){k.push(B),g&&g(U)}).on("error",function(B){k=[],f(B)}).on("end",function(){try{var B=function(U,V,G){switch(U){case"blob":return n.newBlob(n.transformTo("arraybuffer",V),G);case"base64":return c.encode(V);default:return n.transformTo(U,V)}}(P,function(U,V){var G,X=0,ae=null,T=0;for(G=0;G<V.length;G++)T+=V[G].length;switch(U){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(ae=new Uint8Array(T),G=0;G<V.length;G++)ae.set(V[G],X),X+=V[G].length;return ae;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+U+"'")}}(S,k),C);y(B)}catch(U){f(U)}k=[]}).resume()})}function d(w,g,y){var f=g;switch(g){case"blob":case"arraybuffer":f="uint8array";break;case"base64":f="string"}try{this._internalType=f,this._outputType=g,this._mimeType=y,n.checkSupport(f),this._worker=w.pipe(new o(f)),w.lock()}catch(k){this._worker=new a("error"),this._worker.error(k)}}d.prototype={accumulate:function(w){return b(this,w)},on:function(w,g){var y=this;return w==="data"?this._worker.on(w,function(f){g.call(y,f.data,f.meta)}):this._worker.on(w,function(){n.delay(g,arguments,y)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},w)}},i.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(n),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,r){for(var n=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),c=t("./stream/GenericWorker"),h=new Array(256),m=0;m<256;m++)h[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;h[254]=h[254]=1;function p(){c.call(this,"utf-8 decode"),this.leftOver=null}function b(){c.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(w){var g,y,f,k,S,P=w.length,C=0;for(k=0;k<P;k++)(64512&(y=w.charCodeAt(k)))==55296&&k+1<P&&(64512&(f=w.charCodeAt(k+1)))==56320&&(y=65536+(y-55296<<10)+(f-56320),k++),C+=y<128?1:y<2048?2:y<65536?3:4;for(g=o.uint8array?new Uint8Array(C):new Array(C),k=S=0;S<C;k++)(64512&(y=w.charCodeAt(k)))==55296&&k+1<P&&(64512&(f=w.charCodeAt(k+1)))==56320&&(y=65536+(y-55296<<10)+(f-56320),k++),y<128?g[S++]=y:(y<2048?g[S++]=192|y>>>6:(y<65536?g[S++]=224|y>>>12:(g[S++]=240|y>>>18,g[S++]=128|y>>>12&63),g[S++]=128|y>>>6&63),g[S++]=128|63&y);return g}(d)},r.utf8decode=function(d){return o.nodebuffer?n.transformTo("nodebuffer",d).toString("utf-8"):function(w){var g,y,f,k,S=w.length,P=new Array(2*S);for(g=y=0;g<S;)if((f=w[g++])<128)P[y++]=f;else if(4<(k=h[f]))P[y++]=65533,g+=k-1;else{for(f&=k===2?31:k===3?15:7;1<k&&g<S;)f=f<<6|63&w[g++],k--;1<k?P[y++]=65533:f<65536?P[y++]=f:(f-=65536,P[y++]=55296|f>>10&1023,P[y++]=56320|1023&f)}return P.length!==y&&(P.subarray?P=P.subarray(0,y):P.length=y),n.applyFromCharCode(P)}(d=n.transformTo(o.uint8array?"uint8array":"array",d))},n.inherits(p,c),p.prototype.processChunk=function(d){var w=n.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=w;(w=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),w.set(g,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var y=function(k,S){var P;for((S=S||k.length)>k.length&&(S=k.length),P=S-1;0<=P&&(192&k[P])==128;)P--;return P<0||P===0?S:P+h[k[P]]>S?P:S}(w),f=w;y!==w.length&&(o.uint8array?(f=w.subarray(0,y),this.leftOver=w.subarray(y,w.length)):(f=w.slice(0,y),this.leftOver=w.slice(y,w.length))),this.push({data:r.utf8decode(f),meta:d.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=p,n.inherits(b,c),b.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,r){var n=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),c=t("./external");function h(g){return g}function m(g,y){for(var f=0;f<g.length;++f)y[f]=255&g.charCodeAt(f);return y}t("setimmediate"),r.newBlob=function(g,y){r.checkSupport("blob");try{return new Blob([g],{type:y})}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return f.append(g),f.getBlob(y)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(g,y,f){var k=[],S=0,P=g.length;if(P<=f)return String.fromCharCode.apply(null,g);for(;S<P;)y==="array"||y==="nodebuffer"?k.push(String.fromCharCode.apply(null,g.slice(S,Math.min(S+f,P)))):k.push(String.fromCharCode.apply(null,g.subarray(S,Math.min(S+f,P)))),S+=f;return k.join("")},stringifyByChar:function(g){for(var y="",f=0;f<g.length;f++)y+=String.fromCharCode(g[f]);return y},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function b(g){var y=65536,f=r.getTypeOf(g),k=!0;if(f==="uint8array"?k=p.applyCanBeUsed.uint8array:f==="nodebuffer"&&(k=p.applyCanBeUsed.nodebuffer),k)for(;1<y;)try{return p.stringifyByChunk(g,f,y)}catch{y=Math.floor(y/2)}return p.stringifyByChar(g)}function d(g,y){for(var f=0;f<g.length;f++)y[f]=g[f];return y}r.applyFromCharCode=b;var w={};w.string={string:h,array:function(g){return m(g,new Array(g.length))},arraybuffer:function(g){return w.string.uint8array(g).buffer},uint8array:function(g){return m(g,new Uint8Array(g.length))},nodebuffer:function(g){return m(g,a.allocBuffer(g.length))}},w.array={string:b,array:h,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},w.arraybuffer={string:function(g){return b(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:h,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},w.uint8array={string:b,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:h,nodebuffer:function(g){return a.newBufferFrom(g)}},w.nodebuffer={string:b,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return w.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:h},r.transformTo=function(g,y){if(y=y||"",!g)return y;r.checkSupport(g);var f=r.getTypeOf(y);return w[f][g](y)},r.resolve=function(g){for(var y=g.split("/"),f=[],k=0;k<y.length;k++){var S=y[k];S==="."||S===""&&k!==0&&k!==y.length-1||(S===".."?f.pop():f.push(S))}return f.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":n.nodebuffer&&a.isBuffer(g)?"nodebuffer":n.uint8array&&g instanceof Uint8Array?"uint8array":n.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!n[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var y,f,k="";for(f=0;f<(g||"").length;f++)k+="\\x"+((y=g.charCodeAt(f))<16?"0":"")+y.toString(16).toUpperCase();return k},r.delay=function(g,y,f){setImmediate(function(){g.apply(f||null,y||[])})},r.inherits=function(g,y){function f(){}f.prototype=y.prototype,g.prototype=new f},r.extend=function(){var g,y,f={};for(g=0;g<arguments.length;g++)for(y in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],y)&&f[y]===void 0&&(f[y]=arguments[g][y]);return f},r.prepareContent=function(g,y,f,k,S){return c.Promise.resolve(y).then(function(P){return n.blob&&(P instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(P))!==-1)&&typeof FileReader<"u"?new c.Promise(function(C,B){var U=new FileReader;U.onload=function(V){C(V.target.result)},U.onerror=function(V){B(V.target.error)},U.readAsArrayBuffer(P)}):P}).then(function(P){var C=r.getTypeOf(P);return C?(C==="arraybuffer"?P=r.transformTo("uint8array",P):C==="string"&&(S?P=o.decode(P):f&&k!==!0&&(P=function(B){return m(B,n.uint8array?new Uint8Array(B.length):new Array(B.length))}(P))),P):c.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,r){var n=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),c=t("./zipEntry"),h=t("./support");function m(p){this.files=[],this.loadOptions=p}m.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(b)+", expected "+o.pretty(p)+")")}},isSignature:function(p,b){var d=this.reader.index;this.reader.setIndex(p);var w=this.reader.readString(4)===b;return this.reader.setIndex(d),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),b=h.uint8array?"uint8array":"array",d=o.transformTo(b,p);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,b,d,w=this.zip64EndOfCentralSize-44;0<w;)p=this.reader.readInt(2),b=this.reader.readInt(4),d=this.reader.readData(b),this.zip64ExtensibleData[p]={id:p,length:b,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,b;for(p=0;p<this.files.length;p++)b=this.files[p],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var b=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var w=b-d;if(0<w)this.isSignature(b,a.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(p){this.reader=n(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=m},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,r){var n=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),c=t("./crc32"),h=t("./utf8"),m=t("./compressions"),p=t("./support");function b(d,w){this.options=d,this.loadOptions=w}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var w,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(y){for(var f in m)if(Object.prototype.hasOwnProperty.call(m,f)&&m[f].magic===y)return m[f];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,w,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var w=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(w),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=n(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var w,g,y,f=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<f;)w=d.readInt(2),g=d.readInt(2),y=d.readData(g),this.extraFields[w]={id:w,length:g,value:y};d.setIndex(f)},handleUTF8:function(){var d=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var g=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var f=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(f)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var w=n(d.value);return w.readInt(1)!==1||c(this.fileName)!==w.readInt(4)?null:h.utf8decode(w.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var w=n(d.value);return w.readInt(1)!==1||c(this.fileComment)!==w.readInt(4)?null:h.utf8decode(w.readData(d.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,r){function n(w,g,y){this.name=w,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=g,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),c=t("./utf8"),h=t("./compressedObject"),m=t("./stream/GenericWorker");n.prototype={internalStream:function(w){var g=null,y="string";try{if(!w)throw new Error("No output type specified.");var f=(y=w.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),g=this._decompressWorker();var k=!this._dataBinary;k&&!f&&(g=g.pipe(new c.Utf8EncodeWorker)),!k&&f&&(g=g.pipe(new c.Utf8DecodeWorker))}catch(S){(g=new m("error")).error(S)}return new o(g,y,"")},async:function(w,g){return this.internalStream(w).accumulate(g)},nodeStream:function(w,g){return this.internalStream(w||"nodebuffer").toNodejsStream(g)},_compressWorker:function(w,g){if(this._data instanceof h&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new c.Utf8EncodeWorker)),h.createWorkerFrom(y,w,g)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof m?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<p.length;d++)n.prototype[p[d]]=b;i.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,r){(function(n){var o,a,c=n.MutationObserver||n.WebKitMutationObserver;if(c){var h=0,m=new c(w),p=n.document.createTextNode("");m.observe(p,{characterData:!0}),o=function(){p.data=h=++h%2}}else if(n.setImmediate||n.MessageChannel===void 0)o="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var g=n.document.createElement("script");g.onreadystatechange=function(){w(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},n.document.documentElement.appendChild(g)}:function(){setTimeout(w,0)};else{var b=new n.MessageChannel;b.port1.onmessage=w,o=function(){b.port2.postMessage(0)}}var d=[];function w(){var g,y;a=!0;for(var f=d.length;f;){for(y=d,d=[],g=-1;++g<f;)y[g]();f=d.length}a=!1}i.exports=function(g){d.push(g)!==1||a||o()}}).call(this,typeof Fe<"u"?Fe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,r){var n=t("immediate");function o(){}var a={},c=["REJECTED"],h=["FULFILLED"],m=["PENDING"];function p(f){if(typeof f!="function")throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,f!==o&&g(this,f)}function b(f,k,S){this.promise=f,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function d(f,k,S){n(function(){var P;try{P=k(S)}catch(C){return a.reject(f,C)}P===f?a.reject(f,new TypeError("Cannot resolve promise with itself")):a.resolve(f,P)})}function w(f){var k=f&&f.then;if(f&&(typeof f=="object"||typeof f=="function")&&typeof k=="function")return function(){k.apply(f,arguments)}}function g(f,k){var S=!1;function P(U){S||(S=!0,a.reject(f,U))}function C(U){S||(S=!0,a.resolve(f,U))}var B=y(function(){k(C,P)});B.status==="error"&&P(B.value)}function y(f,k){var S={};try{S.value=f(k),S.status="success"}catch(P){S.status="error",S.value=P}return S}(i.exports=p).prototype.finally=function(f){if(typeof f!="function")return this;var k=this.constructor;return this.then(function(S){return k.resolve(f()).then(function(){return S})},function(S){return k.resolve(f()).then(function(){throw S})})},p.prototype.catch=function(f){return this.then(null,f)},p.prototype.then=function(f,k){if(typeof f!="function"&&this.state===h||typeof k!="function"&&this.state===c)return this;var S=new this.constructor(o);return this.state!==m?d(S,this.state===h?f:k,this.outcome):this.queue.push(new b(S,f,k)),S},b.prototype.callFulfilled=function(f){a.resolve(this.promise,f)},b.prototype.otherCallFulfilled=function(f){d(this.promise,this.onFulfilled,f)},b.prototype.callRejected=function(f){a.reject(this.promise,f)},b.prototype.otherCallRejected=function(f){d(this.promise,this.onRejected,f)},a.resolve=function(f,k){var S=y(w,k);if(S.status==="error")return a.reject(f,S.value);var P=S.value;if(P)g(f,P);else{f.state=h,f.outcome=k;for(var C=-1,B=f.queue.length;++C<B;)f.queue[C].callFulfilled(k)}return f},a.reject=function(f,k){f.state=c,f.outcome=k;for(var S=-1,P=f.queue.length;++S<P;)f.queue[S].callRejected(k);return f},p.resolve=function(f){return f instanceof this?f:a.resolve(new this(o),f)},p.reject=function(f){var k=new this(o);return a.reject(k,f)},p.all=function(f){var k=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,P=!1;if(!S)return this.resolve([]);for(var C=new Array(S),B=0,U=-1,V=new this(o);++U<S;)G(f[U],U);return V;function G(X,ae){k.resolve(X).then(function(T){C[ae]=T,++B!==S||P||(P=!0,a.resolve(V,C))},function(T){P||(P=!0,a.reject(V,T))})}},p.race=function(f){var k=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,P=!1;if(!S)return this.resolve([]);for(var C=-1,B=new this(o);++C<S;)U=f[C],k.resolve(U).then(function(V){P||(P=!0,a.resolve(B,V))},function(V){P||(P=!0,a.reject(B,V))});var U;return B}},{immediate:36}],38:[function(t,i,r){var n={};(0,t("./lib/utils/common").assign)(n,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,r){var n=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),c=t("./zlib/messages"),h=t("./zlib/zstream"),m=Object.prototype.toString,p=0,b=-1,d=0,w=8;function g(f){if(!(this instanceof g))return new g(f);this.options=o.assign({level:b,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},f||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var S=n.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(S!==p)throw new Error(c[S]);if(k.header&&n.deflateSetHeader(this.strm,k.header),k.dictionary){var P;if(P=typeof k.dictionary=="string"?a.string2buf(k.dictionary):m.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(S=n.deflateSetDictionary(this.strm,P))!==p)throw new Error(c[S]);this._dict_set=!0}}function y(f,k){var S=new g(k);if(S.push(f,!0),S.err)throw S.msg||c[S.err];return S.result}g.prototype.push=function(f,k){var S,P,C=this.strm,B=this.options.chunkSize;if(this.ended)return!1;P=k===~~k?k:k===!0?4:0,typeof f=="string"?C.input=a.string2buf(f):m.call(f)==="[object ArrayBuffer]"?C.input=new Uint8Array(f):C.input=f,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(B),C.next_out=0,C.avail_out=B),(S=n.deflate(C,P))!==1&&S!==p)return this.onEnd(S),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||P!==4&&P!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&S!==1);return P===4?(S=n.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===p):P!==2||(this.onEnd(p),!(C.avail_out=0))},g.prototype.onData=function(f){this.chunks.push(f)},g.prototype.onEnd=function(f){f===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},r.Deflate=g,r.deflate=y,r.deflateRaw=function(f,k){return(k=k||{}).raw=!0,y(f,k)},r.gzip=function(f,k){return(k=k||{}).gzip=!0,y(f,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,r){var n=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),c=t("./zlib/constants"),h=t("./zlib/messages"),m=t("./zlib/zstream"),p=t("./zlib/gzheader"),b=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||g&&g.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&!(15&y.windowBits)&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var f=n.inflateInit2(this.strm,y.windowBits);if(f!==c.Z_OK)throw new Error(h[f]);this.header=new p,n.inflateGetHeader(this.strm,this.header)}function w(g,y){var f=new d(y);if(f.push(g,!0),f.err)throw f.msg||h[f.err];return f.result}d.prototype.push=function(g,y){var f,k,S,P,C,B,U=this.strm,V=this.options.chunkSize,G=this.options.dictionary,X=!1;if(this.ended)return!1;k=y===~~y?y:y===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof g=="string"?U.input=a.binstring2buf(g):b.call(g)==="[object ArrayBuffer]"?U.input=new Uint8Array(g):U.input=g,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new o.Buf8(V),U.next_out=0,U.avail_out=V),(f=n.inflate(U,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&G&&(B=typeof G=="string"?a.string2buf(G):b.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,f=n.inflateSetDictionary(this.strm,B)),f===c.Z_BUF_ERROR&&X===!0&&(f=c.Z_OK,X=!1),f!==c.Z_STREAM_END&&f!==c.Z_OK)return this.onEnd(f),!(this.ended=!0);U.next_out&&(U.avail_out!==0&&f!==c.Z_STREAM_END&&(U.avail_in!==0||k!==c.Z_FINISH&&k!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=a.utf8border(U.output,U.next_out),P=U.next_out-S,C=a.buf2string(U.output,S),U.next_out=P,U.avail_out=V-P,P&&o.arraySet(U.output,U.output,S,P,0),this.onData(C)):this.onData(o.shrinkBuf(U.output,U.next_out)))),U.avail_in===0&&U.avail_out===0&&(X=!0)}while((0<U.avail_in||U.avail_out===0)&&f!==c.Z_STREAM_END);return f===c.Z_STREAM_END&&(k=c.Z_FINISH),k===c.Z_FINISH?(f=n.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,f===c.Z_OK):k!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(U.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=d,r.inflate=w,r.inflateRaw=function(g,y){return(y=y||{}).raw=!0,w(g,y)},r.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,r){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(c){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var m=h.shift();if(m){if(typeof m!="object")throw new TypeError(m+"must be non-object");for(var p in m)m.hasOwnProperty(p)&&(c[p]=m[p])}}return c},r.shrinkBuf=function(c,h){return c.length===h?c:c.subarray?c.subarray(0,h):(c.length=h,c)};var o={arraySet:function(c,h,m,p,b){if(h.subarray&&c.subarray)c.set(h.subarray(m,m+p),b);else for(var d=0;d<p;d++)c[b+d]=h[m+d]},flattenChunks:function(c){var h,m,p,b,d,w;for(h=p=0,m=c.length;h<m;h++)p+=c[h].length;for(w=new Uint8Array(p),h=b=0,m=c.length;h<m;h++)d=c[h],w.set(d,b),b+=d.length;return w}},a={arraySet:function(c,h,m,p,b){for(var d=0;d<p;d++)c[b+d]=h[m+d]},flattenChunks:function(c){return[].concat.apply([],c)}};r.setTyped=function(c){c?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(n)},{}],42:[function(t,i,r){var n=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var c=new n.Buf8(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function m(p,b){if(b<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,n.shrinkBuf(p,b));for(var d="",w=0;w<b;w++)d+=String.fromCharCode(p[w]);return d}c[254]=c[254]=1,r.string2buf=function(p){var b,d,w,g,y,f=p.length,k=0;for(g=0;g<f;g++)(64512&(d=p.charCodeAt(g)))==55296&&g+1<f&&(64512&(w=p.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(w-56320),g++),k+=d<128?1:d<2048?2:d<65536?3:4;for(b=new n.Buf8(k),g=y=0;y<k;g++)(64512&(d=p.charCodeAt(g)))==55296&&g+1<f&&(64512&(w=p.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(w-56320),g++),d<128?b[y++]=d:(d<2048?b[y++]=192|d>>>6:(d<65536?b[y++]=224|d>>>12:(b[y++]=240|d>>>18,b[y++]=128|d>>>12&63),b[y++]=128|d>>>6&63),b[y++]=128|63&d);return b},r.buf2binstring=function(p){return m(p,p.length)},r.binstring2buf=function(p){for(var b=new n.Buf8(p.length),d=0,w=b.length;d<w;d++)b[d]=p.charCodeAt(d);return b},r.buf2string=function(p,b){var d,w,g,y,f=b||p.length,k=new Array(2*f);for(d=w=0;d<f;)if((g=p[d++])<128)k[w++]=g;else if(4<(y=c[g]))k[w++]=65533,d+=y-1;else{for(g&=y===2?31:y===3?15:7;1<y&&d<f;)g=g<<6|63&p[d++],y--;1<y?k[w++]=65533:g<65536?k[w++]=g:(g-=65536,k[w++]=55296|g>>10&1023,k[w++]=56320|1023&g)}return m(k,w)},r.utf8border=function(p,b){var d;for((b=b||p.length)>p.length&&(b=p.length),d=b-1;0<=d&&(192&p[d])==128;)d--;return d<0||d===0?b:d+c[p[d]]>b?d:b}},{"./common":41}],43:[function(t,i,r){i.exports=function(n,o,a,c){for(var h=65535&n|0,m=n>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;m=m+(h=h+o[c++]|0)|0,--p;);h%=65521,m%=65521}return h|m<<16|0}},{}],44:[function(t,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,r){var n=function(){for(var o,a=[],c=0;c<256;c++){o=c;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;a[c]=o}return a}();i.exports=function(o,a,c,h){var m=n,p=h+c;o^=-1;for(var b=h;b<p;b++)o=o>>>8^m[255&(o^a[b])];return-1^o}},{}],46:[function(t,i,r){var n,o=t("../utils/common"),a=t("./trees"),c=t("./adler32"),h=t("./crc32"),m=t("./messages"),p=0,b=4,d=0,w=-2,g=-1,y=4,f=2,k=8,S=9,P=286,C=30,B=19,U=2*P+1,V=15,G=3,X=258,ae=X+G+1,T=42,j=113,u=1,z=2,ce=3,H=4;function ue(l,I){return l.msg=m[I],I}function Z(l){return(l<<1)-(4<l?9:0)}function le(l){for(var I=l.length;0<=--I;)l[I]=0}function L(l){var I=l.state,D=I.pending;D>l.avail_out&&(D=l.avail_out),D!==0&&(o.arraySet(l.output,I.pending_buf,I.pending_out,D,l.next_out),l.next_out+=D,I.pending_out+=D,l.total_out+=D,l.avail_out-=D,I.pending-=D,I.pending===0&&(I.pending_out=0))}function $(l,I){a._tr_flush_block(l,0<=l.block_start?l.block_start:-1,l.strstart-l.block_start,I),l.block_start=l.strstart,L(l.strm)}function ne(l,I){l.pending_buf[l.pending++]=I}function ee(l,I){l.pending_buf[l.pending++]=I>>>8&255,l.pending_buf[l.pending++]=255&I}function Q(l,I){var D,E,v=l.max_chain_length,A=l.strstart,N=l.prev_length,q=l.nice_match,R=l.strstart>l.w_size-ae?l.strstart-(l.w_size-ae):0,K=l.window,te=l.w_mask,J=l.prev,ie=l.strstart+X,ve=K[A+N-1],de=K[A+N];l.prev_length>=l.good_match&&(v>>=2),q>l.lookahead&&(q=l.lookahead);do if(K[(D=I)+N]===de&&K[D+N-1]===ve&&K[D]===K[A]&&K[++D]===K[A+1]){A+=2,D++;do;while(K[++A]===K[++D]&&K[++A]===K[++D]&&K[++A]===K[++D]&&K[++A]===K[++D]&&K[++A]===K[++D]&&K[++A]===K[++D]&&K[++A]===K[++D]&&K[++A]===K[++D]&&A<ie);if(E=X-(ie-A),A=ie-X,N<E){if(l.match_start=I,q<=(N=E))break;ve=K[A+N-1],de=K[A+N]}}while((I=J[I&te])>R&&--v!=0);return N<=l.lookahead?N:l.lookahead}function we(l){var I,D,E,v,A,N,q,R,K,te,J=l.w_size;do{if(v=l.window_size-l.lookahead-l.strstart,l.strstart>=J+(J-ae)){for(o.arraySet(l.window,l.window,J,J,0),l.match_start-=J,l.strstart-=J,l.block_start-=J,I=D=l.hash_size;E=l.head[--I],l.head[I]=J<=E?E-J:0,--D;);for(I=D=J;E=l.prev[--I],l.prev[I]=J<=E?E-J:0,--D;);v+=J}if(l.strm.avail_in===0)break;if(N=l.strm,q=l.window,R=l.strstart+l.lookahead,K=v,te=void 0,te=N.avail_in,K<te&&(te=K),D=te===0?0:(N.avail_in-=te,o.arraySet(q,N.input,N.next_in,te,R),N.state.wrap===1?N.adler=c(N.adler,q,te,R):N.state.wrap===2&&(N.adler=h(N.adler,q,te,R)),N.next_in+=te,N.total_in+=te,te),l.lookahead+=D,l.lookahead+l.insert>=G)for(A=l.strstart-l.insert,l.ins_h=l.window[A],l.ins_h=(l.ins_h<<l.hash_shift^l.window[A+1])&l.hash_mask;l.insert&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[A+G-1])&l.hash_mask,l.prev[A&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=A,A++,l.insert--,!(l.lookahead+l.insert<G)););}while(l.lookahead<ae&&l.strm.avail_in!==0)}function Se(l,I){for(var D,E;;){if(l.lookahead<ae){if(we(l),l.lookahead<ae&&I===p)return u;if(l.lookahead===0)break}if(D=0,l.lookahead>=G&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+G-1])&l.hash_mask,D=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),D!==0&&l.strstart-D<=l.w_size-ae&&(l.match_length=Q(l,D)),l.match_length>=G)if(E=a._tr_tally(l,l.strstart-l.match_start,l.match_length-G),l.lookahead-=l.match_length,l.match_length<=l.max_lazy_match&&l.lookahead>=G){for(l.match_length--;l.strstart++,l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+G-1])&l.hash_mask,D=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart,--l.match_length!=0;);l.strstart++}else l.strstart+=l.match_length,l.match_length=0,l.ins_h=l.window[l.strstart],l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+1])&l.hash_mask;else E=a._tr_tally(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++;if(E&&($(l,!1),l.strm.avail_out===0))return u}return l.insert=l.strstart<G-1?l.strstart:G-1,I===b?($(l,!0),l.strm.avail_out===0?ce:H):l.last_lit&&($(l,!1),l.strm.avail_out===0)?u:z}function pe(l,I){for(var D,E,v;;){if(l.lookahead<ae){if(we(l),l.lookahead<ae&&I===p)return u;if(l.lookahead===0)break}if(D=0,l.lookahead>=G&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+G-1])&l.hash_mask,D=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),l.prev_length=l.match_length,l.prev_match=l.match_start,l.match_length=G-1,D!==0&&l.prev_length<l.max_lazy_match&&l.strstart-D<=l.w_size-ae&&(l.match_length=Q(l,D),l.match_length<=5&&(l.strategy===1||l.match_length===G&&4096<l.strstart-l.match_start)&&(l.match_length=G-1)),l.prev_length>=G&&l.match_length<=l.prev_length){for(v=l.strstart+l.lookahead-G,E=a._tr_tally(l,l.strstart-1-l.prev_match,l.prev_length-G),l.lookahead-=l.prev_length-1,l.prev_length-=2;++l.strstart<=v&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+G-1])&l.hash_mask,D=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),--l.prev_length!=0;);if(l.match_available=0,l.match_length=G-1,l.strstart++,E&&($(l,!1),l.strm.avail_out===0))return u}else if(l.match_available){if((E=a._tr_tally(l,0,l.window[l.strstart-1]))&&$(l,!1),l.strstart++,l.lookahead--,l.strm.avail_out===0)return u}else l.match_available=1,l.strstart++,l.lookahead--}return l.match_available&&(E=a._tr_tally(l,0,l.window[l.strstart-1]),l.match_available=0),l.insert=l.strstart<G-1?l.strstart:G-1,I===b?($(l,!0),l.strm.avail_out===0?ce:H):l.last_lit&&($(l,!1),l.strm.avail_out===0)?u:z}function ge(l,I,D,E,v){this.good_length=l,this.max_lazy=I,this.nice_length=D,this.max_chain=E,this.func=v}function Te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*U),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*B+1)),le(this.dyn_ltree),le(this.dyn_dtree),le(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(V+1),this.heap=new o.Buf16(2*P+1),le(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*P+1),le(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ee(l){var I;return l&&l.state?(l.total_in=l.total_out=0,l.data_type=f,(I=l.state).pending=0,I.pending_out=0,I.wrap<0&&(I.wrap=-I.wrap),I.status=I.wrap?T:j,l.adler=I.wrap===2?0:1,I.last_flush=p,a._tr_init(I),d):ue(l,w)}function De(l){var I=Ee(l);return I===d&&function(D){D.window_size=2*D.w_size,le(D.head),D.max_lazy_match=n[D.level].max_lazy,D.good_match=n[D.level].good_length,D.nice_match=n[D.level].nice_length,D.max_chain_length=n[D.level].max_chain,D.strstart=0,D.block_start=0,D.lookahead=0,D.insert=0,D.match_length=D.prev_length=G-1,D.match_available=0,D.ins_h=0}(l.state),I}function Ge(l,I,D,E,v,A){if(!l)return w;var N=1;if(I===g&&(I=6),E<0?(N=0,E=-E):15<E&&(N=2,E-=16),v<1||S<v||D!==k||E<8||15<E||I<0||9<I||A<0||y<A)return ue(l,w);E===8&&(E=9);var q=new Te;return(l.state=q).strm=l,q.wrap=N,q.gzhead=null,q.w_bits=E,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=v+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+G-1)/G),q.window=new o.Buf8(2*q.w_size),q.head=new o.Buf16(q.hash_size),q.prev=new o.Buf16(q.w_size),q.lit_bufsize=1<<v+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new o.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=I,q.strategy=A,q.method=D,De(l)}n=[new ge(0,0,0,0,function(l,I){var D=65535;for(D>l.pending_buf_size-5&&(D=l.pending_buf_size-5);;){if(l.lookahead<=1){if(we(l),l.lookahead===0&&I===p)return u;if(l.lookahead===0)break}l.strstart+=l.lookahead,l.lookahead=0;var E=l.block_start+D;if((l.strstart===0||l.strstart>=E)&&(l.lookahead=l.strstart-E,l.strstart=E,$(l,!1),l.strm.avail_out===0)||l.strstart-l.block_start>=l.w_size-ae&&($(l,!1),l.strm.avail_out===0))return u}return l.insert=0,I===b?($(l,!0),l.strm.avail_out===0?ce:H):(l.strstart>l.block_start&&($(l,!1),l.strm.avail_out),u)}),new ge(4,4,8,4,Se),new ge(4,5,16,8,Se),new ge(4,6,32,32,Se),new ge(4,4,16,16,pe),new ge(8,16,32,32,pe),new ge(8,16,128,128,pe),new ge(8,32,128,256,pe),new ge(32,128,258,1024,pe),new ge(32,258,258,4096,pe)],r.deflateInit=function(l,I){return Ge(l,I,k,15,8,0)},r.deflateInit2=Ge,r.deflateReset=De,r.deflateResetKeep=Ee,r.deflateSetHeader=function(l,I){return l&&l.state?l.state.wrap!==2?w:(l.state.gzhead=I,d):w},r.deflate=function(l,I){var D,E,v,A;if(!l||!l.state||5<I||I<0)return l?ue(l,w):w;if(E=l.state,!l.output||!l.input&&l.avail_in!==0||E.status===666&&I!==b)return ue(l,l.avail_out===0?-5:w);if(E.strm=l,D=E.last_flush,E.last_flush=I,E.status===T)if(E.wrap===2)l.adler=0,ne(E,31),ne(E,139),ne(E,8),E.gzhead?(ne(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),ne(E,255&E.gzhead.time),ne(E,E.gzhead.time>>8&255),ne(E,E.gzhead.time>>16&255),ne(E,E.gzhead.time>>24&255),ne(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ne(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(ne(E,255&E.gzhead.extra.length),ne(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(l.adler=h(l.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(ne(E,0),ne(E,0),ne(E,0),ne(E,0),ne(E,0),ne(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ne(E,3),E.status=j);else{var N=k+(E.w_bits-8<<4)<<8;N|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(N|=32),N+=31-N%31,E.status=j,ee(E,N),E.strstart!==0&&(ee(E,l.adler>>>16),ee(E,65535&l.adler)),l.adler=1}if(E.status===69)if(E.gzhead.extra){for(v=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>v&&(l.adler=h(l.adler,E.pending_buf,E.pending-v,v)),L(l),v=E.pending,E.pending!==E.pending_buf_size));)ne(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>v&&(l.adler=h(l.adler,E.pending_buf,E.pending-v,v)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){v=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>v&&(l.adler=h(l.adler,E.pending_buf,E.pending-v,v)),L(l),v=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,ne(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>v&&(l.adler=h(l.adler,E.pending_buf,E.pending-v,v)),A===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){v=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>v&&(l.adler=h(l.adler,E.pending_buf,E.pending-v,v)),L(l),v=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,ne(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>v&&(l.adler=h(l.adler,E.pending_buf,E.pending-v,v)),A===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&L(l),E.pending+2<=E.pending_buf_size&&(ne(E,255&l.adler),ne(E,l.adler>>8&255),l.adler=0,E.status=j)):E.status=j),E.pending!==0){if(L(l),l.avail_out===0)return E.last_flush=-1,d}else if(l.avail_in===0&&Z(I)<=Z(D)&&I!==b)return ue(l,-5);if(E.status===666&&l.avail_in!==0)return ue(l,-5);if(l.avail_in!==0||E.lookahead!==0||I!==p&&E.status!==666){var q=E.strategy===2?function(R,K){for(var te;;){if(R.lookahead===0&&(we(R),R.lookahead===0)){if(K===p)return u;break}if(R.match_length=0,te=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,te&&($(R,!1),R.strm.avail_out===0))return u}return R.insert=0,K===b?($(R,!0),R.strm.avail_out===0?ce:H):R.last_lit&&($(R,!1),R.strm.avail_out===0)?u:z}(E,I):E.strategy===3?function(R,K){for(var te,J,ie,ve,de=R.window;;){if(R.lookahead<=X){if(we(R),R.lookahead<=X&&K===p)return u;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=G&&0<R.strstart&&(J=de[ie=R.strstart-1])===de[++ie]&&J===de[++ie]&&J===de[++ie]){ve=R.strstart+X;do;while(J===de[++ie]&&J===de[++ie]&&J===de[++ie]&&J===de[++ie]&&J===de[++ie]&&J===de[++ie]&&J===de[++ie]&&J===de[++ie]&&ie<ve);R.match_length=X-(ve-ie),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=G?(te=a._tr_tally(R,1,R.match_length-G),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(te=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),te&&($(R,!1),R.strm.avail_out===0))return u}return R.insert=0,K===b?($(R,!0),R.strm.avail_out===0?ce:H):R.last_lit&&($(R,!1),R.strm.avail_out===0)?u:z}(E,I):n[E.level].func(E,I);if(q!==ce&&q!==H||(E.status=666),q===u||q===ce)return l.avail_out===0&&(E.last_flush=-1),d;if(q===z&&(I===1?a._tr_align(E):I!==5&&(a._tr_stored_block(E,0,0,!1),I===3&&(le(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),L(l),l.avail_out===0))return E.last_flush=-1,d}return I!==b?d:E.wrap<=0?1:(E.wrap===2?(ne(E,255&l.adler),ne(E,l.adler>>8&255),ne(E,l.adler>>16&255),ne(E,l.adler>>24&255),ne(E,255&l.total_in),ne(E,l.total_in>>8&255),ne(E,l.total_in>>16&255),ne(E,l.total_in>>24&255)):(ee(E,l.adler>>>16),ee(E,65535&l.adler)),L(l),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?d:1)},r.deflateEnd=function(l){var I;return l&&l.state?(I=l.state.status)!==T&&I!==69&&I!==73&&I!==91&&I!==103&&I!==j&&I!==666?ue(l,w):(l.state=null,I===j?ue(l,-3):d):w},r.deflateSetDictionary=function(l,I){var D,E,v,A,N,q,R,K,te=I.length;if(!l||!l.state||(A=(D=l.state).wrap)===2||A===1&&D.status!==T||D.lookahead)return w;for(A===1&&(l.adler=c(l.adler,I,te,0)),D.wrap=0,te>=D.w_size&&(A===0&&(le(D.head),D.strstart=0,D.block_start=0,D.insert=0),K=new o.Buf8(D.w_size),o.arraySet(K,I,te-D.w_size,D.w_size,0),I=K,te=D.w_size),N=l.avail_in,q=l.next_in,R=l.input,l.avail_in=te,l.next_in=0,l.input=I,we(D);D.lookahead>=G;){for(E=D.strstart,v=D.lookahead-(G-1);D.ins_h=(D.ins_h<<D.hash_shift^D.window[E+G-1])&D.hash_mask,D.prev[E&D.w_mask]=D.head[D.ins_h],D.head[D.ins_h]=E,E++,--v;);D.strstart=E,D.lookahead=G-1,we(D)}return D.strstart+=D.lookahead,D.block_start=D.strstart,D.insert=D.lookahead,D.lookahead=0,D.match_length=D.prev_length=G-1,D.match_available=0,l.next_in=q,l.input=R,l.avail_in=N,D.wrap=A,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,r){i.exports=function(n,o){var a,c,h,m,p,b,d,w,g,y,f,k,S,P,C,B,U,V,G,X,ae,T,j,u,z;a=n.state,c=n.next_in,u=n.input,h=c+(n.avail_in-5),m=n.next_out,z=n.output,p=m-(o-n.avail_out),b=m+(n.avail_out-257),d=a.dmax,w=a.wsize,g=a.whave,y=a.wnext,f=a.window,k=a.hold,S=a.bits,P=a.lencode,C=a.distcode,B=(1<<a.lenbits)-1,U=(1<<a.distbits)-1;e:do{S<15&&(k+=u[c++]<<S,S+=8,k+=u[c++]<<S,S+=8),V=P[k&B];t:for(;;){if(k>>>=G=V>>>24,S-=G,(G=V>>>16&255)===0)z[m++]=65535&V;else{if(!(16&G)){if(!(64&G)){V=P[(65535&V)+(k&(1<<G)-1)];continue t}if(32&G){a.mode=12;break e}n.msg="invalid literal/length code",a.mode=30;break e}X=65535&V,(G&=15)&&(S<G&&(k+=u[c++]<<S,S+=8),X+=k&(1<<G)-1,k>>>=G,S-=G),S<15&&(k+=u[c++]<<S,S+=8,k+=u[c++]<<S,S+=8),V=C[k&U];r:for(;;){if(k>>>=G=V>>>24,S-=G,!(16&(G=V>>>16&255))){if(!(64&G)){V=C[(65535&V)+(k&(1<<G)-1)];continue r}n.msg="invalid distance code",a.mode=30;break e}if(ae=65535&V,S<(G&=15)&&(k+=u[c++]<<S,(S+=8)<G&&(k+=u[c++]<<S,S+=8)),d<(ae+=k&(1<<G)-1)){n.msg="invalid distance too far back",a.mode=30;break e}if(k>>>=G,S-=G,(G=m-p)<ae){if(g<(G=ae-G)&&a.sane){n.msg="invalid distance too far back",a.mode=30;break e}if(j=f,(T=0)===y){if(T+=w-G,G<X){for(X-=G;z[m++]=f[T++],--G;);T=m-ae,j=z}}else if(y<G){if(T+=w+y-G,(G-=y)<X){for(X-=G;z[m++]=f[T++],--G;);if(T=0,y<X){for(X-=G=y;z[m++]=f[T++],--G;);T=m-ae,j=z}}}else if(T+=y-G,G<X){for(X-=G;z[m++]=f[T++],--G;);T=m-ae,j=z}for(;2<X;)z[m++]=j[T++],z[m++]=j[T++],z[m++]=j[T++],X-=3;X&&(z[m++]=j[T++],1<X&&(z[m++]=j[T++]))}else{for(T=m-ae;z[m++]=z[T++],z[m++]=z[T++],z[m++]=z[T++],2<(X-=3););X&&(z[m++]=z[T++],1<X&&(z[m++]=z[T++]))}break}}break}}while(c<h&&m<b);c-=X=S>>3,k&=(1<<(S-=X<<3))-1,n.next_in=c,n.next_out=m,n.avail_in=c<h?h-c+5:5-(c-h),n.avail_out=m<b?b-m+257:257-(m-b),a.hold=k,a.bits=S}},{}],49:[function(t,i,r){var n=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),c=t("./inffast"),h=t("./inftrees"),m=1,p=2,b=0,d=-2,w=1,g=852,y=592;function f(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(T){var j;return T&&T.state?(j=T.state,T.total_in=T.total_out=j.total=0,T.msg="",j.wrap&&(T.adler=1&j.wrap),j.mode=w,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new n.Buf32(g),j.distcode=j.distdyn=new n.Buf32(y),j.sane=1,j.back=-1,b):d}function P(T){var j;return T&&T.state?((j=T.state).wsize=0,j.whave=0,j.wnext=0,S(T)):d}function C(T,j){var u,z;return T&&T.state?(z=T.state,j<0?(u=0,j=-j):(u=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?d:(z.window!==null&&z.wbits!==j&&(z.window=null),z.wrap=u,z.wbits=j,P(T))):d}function B(T,j){var u,z;return T?(z=new k,(T.state=z).window=null,(u=C(T,j))!==b&&(T.state=null),u):d}var U,V,G=!0;function X(T){if(G){var j;for(U=new n.Buf32(512),V=new n.Buf32(32),j=0;j<144;)T.lens[j++]=8;for(;j<256;)T.lens[j++]=9;for(;j<280;)T.lens[j++]=7;for(;j<288;)T.lens[j++]=8;for(h(m,T.lens,0,288,U,0,T.work,{bits:9}),j=0;j<32;)T.lens[j++]=5;h(p,T.lens,0,32,V,0,T.work,{bits:5}),G=!1}T.lencode=U,T.lenbits=9,T.distcode=V,T.distbits=5}function ae(T,j,u,z){var ce,H=T.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new n.Buf8(H.wsize)),z>=H.wsize?(n.arraySet(H.window,j,u-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(z<(ce=H.wsize-H.wnext)&&(ce=z),n.arraySet(H.window,j,u-z,ce,H.wnext),(z-=ce)?(n.arraySet(H.window,j,u-z,z,0),H.wnext=z,H.whave=H.wsize):(H.wnext+=ce,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=ce))),0}r.inflateReset=P,r.inflateReset2=C,r.inflateResetKeep=S,r.inflateInit=function(T){return B(T,15)},r.inflateInit2=B,r.inflate=function(T,j){var u,z,ce,H,ue,Z,le,L,$,ne,ee,Q,we,Se,pe,ge,Te,Ee,De,Ge,l,I,D,E,v=0,A=new n.Buf8(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return d;(u=T.state).mode===12&&(u.mode=13),ue=T.next_out,ce=T.output,le=T.avail_out,H=T.next_in,z=T.input,Z=T.avail_in,L=u.hold,$=u.bits,ne=Z,ee=le,I=b;e:for(;;)switch(u.mode){case w:if(u.wrap===0){u.mode=13;break}for(;$<16;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(2&u.wrap&&L===35615){A[u.check=0]=255&L,A[1]=L>>>8&255,u.check=a(u.check,A,2,0),$=L=0,u.mode=2;break}if(u.flags=0,u.head&&(u.head.done=!1),!(1&u.wrap)||(((255&L)<<8)+(L>>8))%31){T.msg="incorrect header check",u.mode=30;break}if((15&L)!=8){T.msg="unknown compression method",u.mode=30;break}if($-=4,l=8+(15&(L>>>=4)),u.wbits===0)u.wbits=l;else if(l>u.wbits){T.msg="invalid window size",u.mode=30;break}u.dmax=1<<l,T.adler=u.check=1,u.mode=512&L?10:12,$=L=0;break;case 2:for(;$<16;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(u.flags=L,(255&u.flags)!=8){T.msg="unknown compression method",u.mode=30;break}if(57344&u.flags){T.msg="unknown header flags set",u.mode=30;break}u.head&&(u.head.text=L>>8&1),512&u.flags&&(A[0]=255&L,A[1]=L>>>8&255,u.check=a(u.check,A,2,0)),$=L=0,u.mode=3;case 3:for(;$<32;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}u.head&&(u.head.time=L),512&u.flags&&(A[0]=255&L,A[1]=L>>>8&255,A[2]=L>>>16&255,A[3]=L>>>24&255,u.check=a(u.check,A,4,0)),$=L=0,u.mode=4;case 4:for(;$<16;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}u.head&&(u.head.xflags=255&L,u.head.os=L>>8),512&u.flags&&(A[0]=255&L,A[1]=L>>>8&255,u.check=a(u.check,A,2,0)),$=L=0,u.mode=5;case 5:if(1024&u.flags){for(;$<16;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}u.length=L,u.head&&(u.head.extra_len=L),512&u.flags&&(A[0]=255&L,A[1]=L>>>8&255,u.check=a(u.check,A,2,0)),$=L=0}else u.head&&(u.head.extra=null);u.mode=6;case 6:if(1024&u.flags&&(Z<(Q=u.length)&&(Q=Z),Q&&(u.head&&(l=u.head.extra_len-u.length,u.head.extra||(u.head.extra=new Array(u.head.extra_len)),n.arraySet(u.head.extra,z,H,Q,l)),512&u.flags&&(u.check=a(u.check,z,Q,H)),Z-=Q,H+=Q,u.length-=Q),u.length))break e;u.length=0,u.mode=7;case 7:if(2048&u.flags){if(Z===0)break e;for(Q=0;l=z[H+Q++],u.head&&l&&u.length<65536&&(u.head.name+=String.fromCharCode(l)),l&&Q<Z;);if(512&u.flags&&(u.check=a(u.check,z,Q,H)),Z-=Q,H+=Q,l)break e}else u.head&&(u.head.name=null);u.length=0,u.mode=8;case 8:if(4096&u.flags){if(Z===0)break e;for(Q=0;l=z[H+Q++],u.head&&l&&u.length<65536&&(u.head.comment+=String.fromCharCode(l)),l&&Q<Z;);if(512&u.flags&&(u.check=a(u.check,z,Q,H)),Z-=Q,H+=Q,l)break e}else u.head&&(u.head.comment=null);u.mode=9;case 9:if(512&u.flags){for(;$<16;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(L!==(65535&u.check)){T.msg="header crc mismatch",u.mode=30;break}$=L=0}u.head&&(u.head.hcrc=u.flags>>9&1,u.head.done=!0),T.adler=u.check=0,u.mode=12;break;case 10:for(;$<32;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}T.adler=u.check=f(L),$=L=0,u.mode=11;case 11:if(u.havedict===0)return T.next_out=ue,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=L,u.bits=$,2;T.adler=u.check=1,u.mode=12;case 12:if(j===5||j===6)break e;case 13:if(u.last){L>>>=7&$,$-=7&$,u.mode=27;break}for(;$<3;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}switch(u.last=1&L,$-=1,3&(L>>>=1)){case 0:u.mode=14;break;case 1:if(X(u),u.mode=20,j!==6)break;L>>>=2,$-=2;break e;case 2:u.mode=17;break;case 3:T.msg="invalid block type",u.mode=30}L>>>=2,$-=2;break;case 14:for(L>>>=7&$,$-=7&$;$<32;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if((65535&L)!=(L>>>16^65535)){T.msg="invalid stored block lengths",u.mode=30;break}if(u.length=65535&L,$=L=0,u.mode=15,j===6)break e;case 15:u.mode=16;case 16:if(Q=u.length){if(Z<Q&&(Q=Z),le<Q&&(Q=le),Q===0)break e;n.arraySet(ce,z,H,Q,ue),Z-=Q,H+=Q,le-=Q,ue+=Q,u.length-=Q;break}u.mode=12;break;case 17:for(;$<14;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(u.nlen=257+(31&L),L>>>=5,$-=5,u.ndist=1+(31&L),L>>>=5,$-=5,u.ncode=4+(15&L),L>>>=4,$-=4,286<u.nlen||30<u.ndist){T.msg="too many length or distance symbols",u.mode=30;break}u.have=0,u.mode=18;case 18:for(;u.have<u.ncode;){for(;$<3;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}u.lens[N[u.have++]]=7&L,L>>>=3,$-=3}for(;u.have<19;)u.lens[N[u.have++]]=0;if(u.lencode=u.lendyn,u.lenbits=7,D={bits:u.lenbits},I=h(0,u.lens,0,19,u.lencode,0,u.work,D),u.lenbits=D.bits,I){T.msg="invalid code lengths set",u.mode=30;break}u.have=0,u.mode=19;case 19:for(;u.have<u.nlen+u.ndist;){for(;ge=(v=u.lencode[L&(1<<u.lenbits)-1])>>>16&255,Te=65535&v,!((pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(Te<16)L>>>=pe,$-=pe,u.lens[u.have++]=Te;else{if(Te===16){for(E=pe+2;$<E;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(L>>>=pe,$-=pe,u.have===0){T.msg="invalid bit length repeat",u.mode=30;break}l=u.lens[u.have-1],Q=3+(3&L),L>>>=2,$-=2}else if(Te===17){for(E=pe+3;$<E;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}$-=pe,l=0,Q=3+(7&(L>>>=pe)),L>>>=3,$-=3}else{for(E=pe+7;$<E;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}$-=pe,l=0,Q=11+(127&(L>>>=pe)),L>>>=7,$-=7}if(u.have+Q>u.nlen+u.ndist){T.msg="invalid bit length repeat",u.mode=30;break}for(;Q--;)u.lens[u.have++]=l}}if(u.mode===30)break;if(u.lens[256]===0){T.msg="invalid code -- missing end-of-block",u.mode=30;break}if(u.lenbits=9,D={bits:u.lenbits},I=h(m,u.lens,0,u.nlen,u.lencode,0,u.work,D),u.lenbits=D.bits,I){T.msg="invalid literal/lengths set",u.mode=30;break}if(u.distbits=6,u.distcode=u.distdyn,D={bits:u.distbits},I=h(p,u.lens,u.nlen,u.ndist,u.distcode,0,u.work,D),u.distbits=D.bits,I){T.msg="invalid distances set",u.mode=30;break}if(u.mode=20,j===6)break e;case 20:u.mode=21;case 21:if(6<=Z&&258<=le){T.next_out=ue,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=L,u.bits=$,c(T,ee),ue=T.next_out,ce=T.output,le=T.avail_out,H=T.next_in,z=T.input,Z=T.avail_in,L=u.hold,$=u.bits,u.mode===12&&(u.back=-1);break}for(u.back=0;ge=(v=u.lencode[L&(1<<u.lenbits)-1])>>>16&255,Te=65535&v,!((pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(ge&&!(240&ge)){for(Ee=pe,De=ge,Ge=Te;ge=(v=u.lencode[Ge+((L&(1<<Ee+De)-1)>>Ee)])>>>16&255,Te=65535&v,!(Ee+(pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}L>>>=Ee,$-=Ee,u.back+=Ee}if(L>>>=pe,$-=pe,u.back+=pe,u.length=Te,ge===0){u.mode=26;break}if(32&ge){u.back=-1,u.mode=12;break}if(64&ge){T.msg="invalid literal/length code",u.mode=30;break}u.extra=15&ge,u.mode=22;case 22:if(u.extra){for(E=u.extra;$<E;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}u.length+=L&(1<<u.extra)-1,L>>>=u.extra,$-=u.extra,u.back+=u.extra}u.was=u.length,u.mode=23;case 23:for(;ge=(v=u.distcode[L&(1<<u.distbits)-1])>>>16&255,Te=65535&v,!((pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(!(240&ge)){for(Ee=pe,De=ge,Ge=Te;ge=(v=u.distcode[Ge+((L&(1<<Ee+De)-1)>>Ee)])>>>16&255,Te=65535&v,!(Ee+(pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}L>>>=Ee,$-=Ee,u.back+=Ee}if(L>>>=pe,$-=pe,u.back+=pe,64&ge){T.msg="invalid distance code",u.mode=30;break}u.offset=Te,u.extra=15&ge,u.mode=24;case 24:if(u.extra){for(E=u.extra;$<E;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}u.offset+=L&(1<<u.extra)-1,L>>>=u.extra,$-=u.extra,u.back+=u.extra}if(u.offset>u.dmax){T.msg="invalid distance too far back",u.mode=30;break}u.mode=25;case 25:if(le===0)break e;if(Q=ee-le,u.offset>Q){if((Q=u.offset-Q)>u.whave&&u.sane){T.msg="invalid distance too far back",u.mode=30;break}we=Q>u.wnext?(Q-=u.wnext,u.wsize-Q):u.wnext-Q,Q>u.length&&(Q=u.length),Se=u.window}else Se=ce,we=ue-u.offset,Q=u.length;for(le<Q&&(Q=le),le-=Q,u.length-=Q;ce[ue++]=Se[we++],--Q;);u.length===0&&(u.mode=21);break;case 26:if(le===0)break e;ce[ue++]=u.length,le--,u.mode=21;break;case 27:if(u.wrap){for(;$<32;){if(Z===0)break e;Z--,L|=z[H++]<<$,$+=8}if(ee-=le,T.total_out+=ee,u.total+=ee,ee&&(T.adler=u.check=u.flags?a(u.check,ce,ee,ue-ee):o(u.check,ce,ee,ue-ee)),ee=le,(u.flags?L:f(L))!==u.check){T.msg="incorrect data check",u.mode=30;break}$=L=0}u.mode=28;case 28:if(u.wrap&&u.flags){for(;$<32;){if(Z===0)break e;Z--,L+=z[H++]<<$,$+=8}if(L!==(4294967295&u.total)){T.msg="incorrect length check",u.mode=30;break}$=L=0}u.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;case 32:default:return d}return T.next_out=ue,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=L,u.bits=$,(u.wsize||ee!==T.avail_out&&u.mode<30&&(u.mode<27||j!==4))&&ae(T,T.output,T.next_out,ee-T.avail_out)?(u.mode=31,-4):(ne-=T.avail_in,ee-=T.avail_out,T.total_in+=ne,T.total_out+=ee,u.total+=ee,u.wrap&&ee&&(T.adler=u.check=u.flags?a(u.check,ce,ee,T.next_out-ee):o(u.check,ce,ee,T.next_out-ee)),T.data_type=u.bits+(u.last?64:0)+(u.mode===12?128:0)+(u.mode===20||u.mode===15?256:0),(ne==0&&ee===0||j===4)&&I===b&&(I=-5),I)},r.inflateEnd=function(T){if(!T||!T.state)return d;var j=T.state;return j.window&&(j.window=null),T.state=null,b},r.inflateGetHeader=function(T,j){var u;return T&&T.state&&2&(u=T.state).wrap?((u.head=j).done=!1,b):d},r.inflateSetDictionary=function(T,j){var u,z=j.length;return T&&T.state?(u=T.state).wrap!==0&&u.mode!==11?d:u.mode===11&&o(1,j,z,0)!==u.check?-3:ae(T,j,z,z)?(u.mode=31,-4):(u.havedict=1,b):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,r){var n=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(m,p,b,d,w,g,y,f){var k,S,P,C,B,U,V,G,X,ae=f.bits,T=0,j=0,u=0,z=0,ce=0,H=0,ue=0,Z=0,le=0,L=0,$=null,ne=0,ee=new n.Buf16(16),Q=new n.Buf16(16),we=null,Se=0;for(T=0;T<=15;T++)ee[T]=0;for(j=0;j<d;j++)ee[p[b+j]]++;for(ce=ae,z=15;1<=z&&ee[z]===0;z--);if(z<ce&&(ce=z),z===0)return w[g++]=20971520,w[g++]=20971520,f.bits=1,0;for(u=1;u<z&&ee[u]===0;u++);for(ce<u&&(ce=u),T=Z=1;T<=15;T++)if(Z<<=1,(Z-=ee[T])<0)return-1;if(0<Z&&(m===0||z!==1))return-1;for(Q[1]=0,T=1;T<15;T++)Q[T+1]=Q[T]+ee[T];for(j=0;j<d;j++)p[b+j]!==0&&(y[Q[p[b+j]]++]=j);if(U=m===0?($=we=y,19):m===1?($=o,ne-=257,we=a,Se-=257,256):($=c,we=h,-1),T=u,B=g,ue=j=L=0,P=-1,C=(le=1<<(H=ce))-1,m===1&&852<le||m===2&&592<le)return 1;for(;;){for(V=T-ue,X=y[j]<U?(G=0,y[j]):y[j]>U?(G=we[Se+y[j]],$[ne+y[j]]):(G=96,0),k=1<<T-ue,u=S=1<<H;w[B+(L>>ue)+(S-=k)]=V<<24|G<<16|X|0,S!==0;);for(k=1<<T-1;L&k;)k>>=1;if(k!==0?(L&=k-1,L+=k):L=0,j++,--ee[T]==0){if(T===z)break;T=p[b+y[j]]}if(ce<T&&(L&C)!==P){for(ue===0&&(ue=ce),B+=u,Z=1<<(H=T-ue);H+ue<z&&!((Z-=ee[H+ue])<=0);)H++,Z<<=1;if(le+=1<<H,m===1&&852<le||m===2&&592<le)return 1;w[P=L&C]=ce<<24|H<<16|B-g|0}}return L!==0&&(w[B+L]=T-ue<<24|64<<16|0),f.bits=ce,0}},{"../utils/common":41}],51:[function(t,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,r){var n=t("../utils/common"),o=0,a=1;function c(v){for(var A=v.length;0<=--A;)v[A]=0}var h=0,m=29,p=256,b=p+1+m,d=30,w=19,g=2*b+1,y=15,f=16,k=7,S=256,P=16,C=17,B=18,U=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],X=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ae=new Array(2*(b+2));c(ae);var T=new Array(2*d);c(T);var j=new Array(512);c(j);var u=new Array(256);c(u);var z=new Array(m);c(z);var ce,H,ue,Z=new Array(d);function le(v,A,N,q,R){this.static_tree=v,this.extra_bits=A,this.extra_base=N,this.elems=q,this.max_length=R,this.has_stree=v&&v.length}function L(v,A){this.dyn_tree=v,this.max_code=0,this.stat_desc=A}function $(v){return v<256?j[v]:j[256+(v>>>7)]}function ne(v,A){v.pending_buf[v.pending++]=255&A,v.pending_buf[v.pending++]=A>>>8&255}function ee(v,A,N){v.bi_valid>f-N?(v.bi_buf|=A<<v.bi_valid&65535,ne(v,v.bi_buf),v.bi_buf=A>>f-v.bi_valid,v.bi_valid+=N-f):(v.bi_buf|=A<<v.bi_valid&65535,v.bi_valid+=N)}function Q(v,A,N){ee(v,N[2*A],N[2*A+1])}function we(v,A){for(var N=0;N|=1&v,v>>>=1,N<<=1,0<--A;);return N>>>1}function Se(v,A,N){var q,R,K=new Array(y+1),te=0;for(q=1;q<=y;q++)K[q]=te=te+N[q-1]<<1;for(R=0;R<=A;R++){var J=v[2*R+1];J!==0&&(v[2*R]=we(K[J]++,J))}}function pe(v){var A;for(A=0;A<b;A++)v.dyn_ltree[2*A]=0;for(A=0;A<d;A++)v.dyn_dtree[2*A]=0;for(A=0;A<w;A++)v.bl_tree[2*A]=0;v.dyn_ltree[2*S]=1,v.opt_len=v.static_len=0,v.last_lit=v.matches=0}function ge(v){8<v.bi_valid?ne(v,v.bi_buf):0<v.bi_valid&&(v.pending_buf[v.pending++]=v.bi_buf),v.bi_buf=0,v.bi_valid=0}function Te(v,A,N,q){var R=2*A,K=2*N;return v[R]<v[K]||v[R]===v[K]&&q[A]<=q[N]}function Ee(v,A,N){for(var q=v.heap[N],R=N<<1;R<=v.heap_len&&(R<v.heap_len&&Te(A,v.heap[R+1],v.heap[R],v.depth)&&R++,!Te(A,q,v.heap[R],v.depth));)v.heap[N]=v.heap[R],N=R,R<<=1;v.heap[N]=q}function De(v,A,N){var q,R,K,te,J=0;if(v.last_lit!==0)for(;q=v.pending_buf[v.d_buf+2*J]<<8|v.pending_buf[v.d_buf+2*J+1],R=v.pending_buf[v.l_buf+J],J++,q===0?Q(v,R,A):(Q(v,(K=u[R])+p+1,A),(te=U[K])!==0&&ee(v,R-=z[K],te),Q(v,K=$(--q),N),(te=V[K])!==0&&ee(v,q-=Z[K],te)),J<v.last_lit;);Q(v,S,A)}function Ge(v,A){var N,q,R,K=A.dyn_tree,te=A.stat_desc.static_tree,J=A.stat_desc.has_stree,ie=A.stat_desc.elems,ve=-1;for(v.heap_len=0,v.heap_max=g,N=0;N<ie;N++)K[2*N]!==0?(v.heap[++v.heap_len]=ve=N,v.depth[N]=0):K[2*N+1]=0;for(;v.heap_len<2;)K[2*(R=v.heap[++v.heap_len]=ve<2?++ve:0)]=1,v.depth[R]=0,v.opt_len--,J&&(v.static_len-=te[2*R+1]);for(A.max_code=ve,N=v.heap_len>>1;1<=N;N--)Ee(v,K,N);for(R=ie;N=v.heap[1],v.heap[1]=v.heap[v.heap_len--],Ee(v,K,1),q=v.heap[1],v.heap[--v.heap_max]=N,v.heap[--v.heap_max]=q,K[2*R]=K[2*N]+K[2*q],v.depth[R]=(v.depth[N]>=v.depth[q]?v.depth[N]:v.depth[q])+1,K[2*N+1]=K[2*q+1]=R,v.heap[1]=R++,Ee(v,K,1),2<=v.heap_len;);v.heap[--v.heap_max]=v.heap[1],function(de,Re){var re,O,_,x,F,M,W=Re.dyn_tree,se=Re.max_code,me=Re.stat_desc.static_tree,Ae=Re.stat_desc.has_stree,Pe=Re.stat_desc.extra_bits,Me=Re.stat_desc.extra_base,Xe=Re.stat_desc.max_length,Qe=0;for(x=0;x<=y;x++)de.bl_count[x]=0;for(W[2*de.heap[de.heap_max]+1]=0,re=de.heap_max+1;re<g;re++)Xe<(x=W[2*W[2*(O=de.heap[re])+1]+1]+1)&&(x=Xe,Qe++),W[2*O+1]=x,se<O||(de.bl_count[x]++,F=0,Me<=O&&(F=Pe[O-Me]),M=W[2*O],de.opt_len+=M*(x+F),Ae&&(de.static_len+=M*(me[2*O+1]+F)));if(Qe!==0){do{for(x=Xe-1;de.bl_count[x]===0;)x--;de.bl_count[x]--,de.bl_count[x+1]+=2,de.bl_count[Xe]--,Qe-=2}while(0<Qe);for(x=Xe;x!==0;x--)for(O=de.bl_count[x];O!==0;)se<(_=de.heap[--re])||(W[2*_+1]!==x&&(de.opt_len+=(x-W[2*_+1])*W[2*_],W[2*_+1]=x),O--)}}(v,A),Se(K,ve,v.bl_count)}function l(v,A,N){var q,R,K=-1,te=A[1],J=0,ie=7,ve=4;for(te===0&&(ie=138,ve=3),A[2*(N+1)+1]=65535,q=0;q<=N;q++)R=te,te=A[2*(q+1)+1],++J<ie&&R===te||(J<ve?v.bl_tree[2*R]+=J:R!==0?(R!==K&&v.bl_tree[2*R]++,v.bl_tree[2*P]++):J<=10?v.bl_tree[2*C]++:v.bl_tree[2*B]++,K=R,ve=(J=0)===te?(ie=138,3):R===te?(ie=6,3):(ie=7,4))}function I(v,A,N){var q,R,K=-1,te=A[1],J=0,ie=7,ve=4;for(te===0&&(ie=138,ve=3),q=0;q<=N;q++)if(R=te,te=A[2*(q+1)+1],!(++J<ie&&R===te)){if(J<ve)for(;Q(v,R,v.bl_tree),--J!=0;);else R!==0?(R!==K&&(Q(v,R,v.bl_tree),J--),Q(v,P,v.bl_tree),ee(v,J-3,2)):J<=10?(Q(v,C,v.bl_tree),ee(v,J-3,3)):(Q(v,B,v.bl_tree),ee(v,J-11,7));K=R,ve=(J=0)===te?(ie=138,3):R===te?(ie=6,3):(ie=7,4)}}c(Z);var D=!1;function E(v,A,N,q){ee(v,(h<<1)+(q?1:0),3),function(R,K,te,J){ge(R),ne(R,te),ne(R,~te),n.arraySet(R.pending_buf,R.window,K,te,R.pending),R.pending+=te}(v,A,N)}r._tr_init=function(v){D||(function(){var A,N,q,R,K,te=new Array(y+1);for(R=q=0;R<m-1;R++)for(z[R]=q,A=0;A<1<<U[R];A++)u[q++]=R;for(u[q-1]=R,R=K=0;R<16;R++)for(Z[R]=K,A=0;A<1<<V[R];A++)j[K++]=R;for(K>>=7;R<d;R++)for(Z[R]=K<<7,A=0;A<1<<V[R]-7;A++)j[256+K++]=R;for(N=0;N<=y;N++)te[N]=0;for(A=0;A<=143;)ae[2*A+1]=8,A++,te[8]++;for(;A<=255;)ae[2*A+1]=9,A++,te[9]++;for(;A<=279;)ae[2*A+1]=7,A++,te[7]++;for(;A<=287;)ae[2*A+1]=8,A++,te[8]++;for(Se(ae,b+1,te),A=0;A<d;A++)T[2*A+1]=5,T[2*A]=we(A,5);ce=new le(ae,U,p+1,b,y),H=new le(T,V,0,d,y),ue=new le(new Array(0),G,0,w,k)}(),D=!0),v.l_desc=new L(v.dyn_ltree,ce),v.d_desc=new L(v.dyn_dtree,H),v.bl_desc=new L(v.bl_tree,ue),v.bi_buf=0,v.bi_valid=0,pe(v)},r._tr_stored_block=E,r._tr_flush_block=function(v,A,N,q){var R,K,te=0;0<v.level?(v.strm.data_type===2&&(v.strm.data_type=function(J){var ie,ve=4093624447;for(ie=0;ie<=31;ie++,ve>>>=1)if(1&ve&&J.dyn_ltree[2*ie]!==0)return o;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return a;for(ie=32;ie<p;ie++)if(J.dyn_ltree[2*ie]!==0)return a;return o}(v)),Ge(v,v.l_desc),Ge(v,v.d_desc),te=function(J){var ie;for(l(J,J.dyn_ltree,J.l_desc.max_code),l(J,J.dyn_dtree,J.d_desc.max_code),Ge(J,J.bl_desc),ie=w-1;3<=ie&&J.bl_tree[2*X[ie]+1]===0;ie--);return J.opt_len+=3*(ie+1)+5+5+4,ie}(v),R=v.opt_len+3+7>>>3,(K=v.static_len+3+7>>>3)<=R&&(R=K)):R=K=N+5,N+4<=R&&A!==-1?E(v,A,N,q):v.strategy===4||K===R?(ee(v,2+(q?1:0),3),De(v,ae,T)):(ee(v,4+(q?1:0),3),function(J,ie,ve,de){var Re;for(ee(J,ie-257,5),ee(J,ve-1,5),ee(J,de-4,4),Re=0;Re<de;Re++)ee(J,J.bl_tree[2*X[Re]+1],3);I(J,J.dyn_ltree,ie-1),I(J,J.dyn_dtree,ve-1)}(v,v.l_desc.max_code+1,v.d_desc.max_code+1,te+1),De(v,v.dyn_ltree,v.dyn_dtree)),pe(v),q&&ge(v)},r._tr_tally=function(v,A,N){return v.pending_buf[v.d_buf+2*v.last_lit]=A>>>8&255,v.pending_buf[v.d_buf+2*v.last_lit+1]=255&A,v.pending_buf[v.l_buf+v.last_lit]=255&N,v.last_lit++,A===0?v.dyn_ltree[2*N]++:(v.matches++,A--,v.dyn_ltree[2*(u[N]+p+1)]++,v.dyn_dtree[2*$(A)]++),v.last_lit===v.lit_bufsize-1},r._tr_align=function(v){ee(v,2,3),Q(v,S,ae),function(A){A.bi_valid===16?(ne(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):8<=A.bi_valid&&(A.pending_buf[A.pending++]=255&A.bi_buf,A.bi_buf>>=8,A.bi_valid-=8)}(v)}},{"../utils/common":41}],53:[function(t,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,r){(function(n){(function(o,a){if(!o.setImmediate){var c,h,m,p,b=1,d={},w=!1,g=o.document,y=Object.getPrototypeOf&&Object.getPrototypeOf(o);y=y&&y.setTimeout?y:o,c={}.toString.call(o.process)==="[object process]"?function(P){process.nextTick(function(){k(P)})}:function(){if(o.postMessage&&!o.importScripts){var P=!0,C=o.onmessage;return o.onmessage=function(){P=!1},o.postMessage("","*"),o.onmessage=C,P}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(P){o.postMessage(p+P,"*")}):o.MessageChannel?((m=new MessageChannel).port1.onmessage=function(P){k(P.data)},function(P){m.port2.postMessage(P)}):g&&"onreadystatechange"in g.createElement("script")?(h=g.documentElement,function(P){var C=g.createElement("script");C.onreadystatechange=function(){k(P),C.onreadystatechange=null,h.removeChild(C),C=null},h.appendChild(C)}):function(P){setTimeout(k,0,P)},y.setImmediate=function(P){typeof P!="function"&&(P=new Function(""+P));for(var C=new Array(arguments.length-1),B=0;B<C.length;B++)C[B]=arguments[B+1];var U={callback:P,args:C};return d[b]=U,c(b),b++},y.clearImmediate=f}function f(P){delete d[P]}function k(P){if(w)setTimeout(k,0,P);else{var C=d[P];if(C){w=!0;try{(function(B){var U=B.callback,V=B.args;switch(V.length){case 0:U();break;case 1:U(V[0]);break;case 2:U(V[0],V[1]);break;case 3:U(V[0],V[1],V[2]);break;default:U.apply(a,V)}})(C)}finally{f(P),w=!1}}}}function S(P){P.source===o&&typeof P.data=="string"&&P.data.indexOf(p)===0&&k(+P.data.slice(p.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof Fe<"u"?Fe:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(go);var kc=go.exports;const Tc=gs(kc);var Sc=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,fo=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ac(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Sc(e,t,r),r};let ss=class extends Le{render(){return _e`
            <ui-flex-grid-row gap="0.25rem">
                <ui-flex-grid-item>
                    <ui-button
                        variant="full"
                        color="primary"
                        ripple
                        @click=${async()=>{const s=ye.queryImportDialog();s.storeKey=this.storeKey,s.show()}}
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
                        ${Ne.smoothieLineIcons.download}
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `}async export(){if(!this.storeKey)return;const s=new Tc,e=$e(this.storeKey),t=ye.queryStore().getData(this.storeKey);if(t!==void 0){for(const i of t){const r=e.fileName(i);s.file(r,JSON.stringify(i,null,4))}Ec.saveAs(await s.generateAsync({type:"blob"}),e.zipFileName())}}};fo([ke({type:String,attribute:"store-key",reflect:!0})],ss.prototype,"storeKey",2);ss=fo([Ue("pg-drawer-item-import")],ss);const mo="v1.1.0.dev",Cc=9;var xc=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,yo=(s,e,t,i)=>{for(var r=i>1?void 0:i?Pc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&xc(e,t,r),r};let wr=class extends Le{constructor(){super(...arguments),this.name="",this.slot=""}createRenderRoot(){return this.style.width="100%",this.style.height="100%",this.style.display="block",this.style.paddingTop="var(--ui-app-bar-height)",this}};yo([ke({type:Object,attribute:"data",reflect:!1})],wr.prototype,"data",2);wr=yo([Ue("pg-page-content")],wr);const $s=wr;var Oc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,$c=(s,e,t,i)=>{for(var r=i>1?void 0:i?Rc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Oc(e,t,r),r};let is=class extends $s{render(){return _e`
            <div
                class="container no-scrollbar"
                style="${Yt({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item flex="0">
                        ${this.data!==void 0?_e`<pg-alert-list-item
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
            </div>
        `}updated(s){if(this.data!==void 0){const e=this.querySelector(".description");e.innerHTML=this.data.desc.join("<br/>")}}firstUpdated(s){this.style.overflow="auto"}};is=$c([Ue("pg-page-content-alert")],is);const Lc=is;var Dc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Or=(s,e,t,i)=>{for(var r=i>1?void 0:i?Gc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Dc(e,t,r),r};let xt=class extends Le{constructor(){super(...arguments),this.title="",this.storageKey=""}static generateRegExp(s){const e=s.split(" ").filter(t=>t!=="");return new RegExp("(?=.*"+e.join(")(?=.*")+")","i")}static get styles(){return Eo`
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
        `}render(){return _e`
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
        `}firstUpdated(s){this.classList.add("has-backdrop-blur")}value(){var s,e;return((e=(s=this.shadowRoot)==null?void 0:s.querySelector("ui-search"))==null?void 0:e.value)||""}};Or([ke({type:String,attribute:"title",reflect:!0})],xt.prototype,"title",2);Or([ke({type:String,attribute:"storage-key",reflect:!0})],xt.prototype,"storageKey",2);Or([ke({type:Boolean,attribute:"active",reflect:!0})],xt.prototype,"active",2);xt=Or([Ue("pg-search-bar")],xt);const Uc=xt;function Fc(s,e){for(;!s.matches(e);){if(!s.parentElement)return null;s=s.parentElement}return s}var jc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,Ls=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ic(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&jc(e,t,r),r};let Wt=class extends Le{constructor(){super(...arguments),this.rippleCleanUp=null}createRenderRoot(){return this}render(){return this.data===void 0?_e``:(this.ripple&&this.rippleCleanUp===null?(this.style.cursor="pointer",this.role="button",this.rippleCleanUp=qa.create(this)):!this.ripple&&this.rippleCleanUp!==null&&(this.style.cursor="default",this.role="none",this.rippleCleanUp(),this.rippleCleanUp=null),_e`
            <ui-text>${this.data.alert}</ui-text>

            <ui-text
                style="color: hsl(var(--ui-hsl-primary)); text-wrap: nowrap; margin-left: var(--ui-spacing);"
                wght="750"
            >
                ${this.data.from===this.data.to?this.data.from:`${this.data.from}..${this.data.to}`}
            </ui-text>
        `)}firstUpdated(s){this.classList.add("flex"),this.classList.add("row"),this.classList.add("nowrap"),this.classList.add("align-center"),this.classList.add("justify-between"),this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)"}};Ls([ke({type:Object,attribute:"data",reflect:!1})],Wt.prototype,"data",2);Ls([ke({type:Boolean,attribute:"ripple",reflect:!0})],Wt.prototype,"ripple",2);Wt=Ls([Ue("pg-alert-list-item")],Wt);const wi=Wt;var Bc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,_o=(s,e,t,i)=>{for(var r=i>1?void 0:i?zc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Bc(e,t,r),r};let Er=class extends $s{constructor(){super(...arguments),this.cleanup=new _s}querySearchBar(){return this.querySelector("pg-search-bar")}render(){var s;return ye.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?$e("alertLists").listKey(this.data):"Alarm Liste",_e`
            <pg-search-bar
                title="Alarmsuche (RegEx Mode)"
                storage-key="${(s=this.data)==null?void 0:s.title}"
                ?active=${!!this.searchBar}
                @change=${async e=>{await this.filter(e.currentTarget.value())}}
            ></pg-search-bar>

            <div
                class="container no-scrollbar"
                style="${Yt({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <div
                    class="list"
                    @click=${async e=>{if(!((e==null?void 0:e.target)instanceof Element))return;const t=Fc(e.target,"pg-alert-list-item");t!==null&&ye.queryStackLayout().setPage("alert",i=>{const r=i.children[0];r!==void 0&&(r.data=t.data)},!0)}}
                ></div>
            </div>
        `}updated(s){const e=this.querySelector("pg-search-bar"),t=this.querySelector("div.container");this.searchBar?(t.style.paddingTop=`calc(${e.clientHeight}px + var(--ui-spacing) * 2)`,this.filter(this.querySelector("pg-search-bar").value())):(t.style.paddingTop="0",this.filter(""))}firstUpdated(s){const e=this.querySelector(".list");this.data!==void 0&&this.data.data.forEach(async t=>{const i=new wi;i.data=t,i.ripple=!0,e.appendChild(i)})}connectedCallback(){super.connectedCallback();const s=ye.queryAppBar(),e=async()=>this.searchBar=!this.searchBar,t=s.contentName("search").contentAt(0);t.addEventListener("click",e),this.cleanup.add(()=>t.removeEventListener("click",e))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async filter(s){const e=this.querySelector(".list"),t=Uc.generateRegExp(s);let i,r,n,o;for(const a of[...e.children])a instanceof wi&&a.data!==void 0&&(c=>{n=Math.min(c.data.from,c.data.to),o=Math.max(c.data.from,c.data.to),i=[];for(let h=n;h<o;h++)i.push(h.toString());r=`${i.join(",")} ${c.data.alert}`,t.test(r)?c.style.display="flex":c.style.display="none"})(a)}};_o([ke({type:Boolean,attribute:"search-bar",reflect:!0})],Er.prototype,"searchBar",2);Er=_o([Ue("pg-page-content-alert-lists")],Er);const Mc=Er;var Nc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Rr=(s,e,t,i)=>{for(var r=i>1?void 0:i?qc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Nc(e,t,r),r};let Zt=class extends Le{constructor(){super(...arguments),this.entryData=[],this.tableIndex=-1}createRenderRoot(){return this}render(){return this.header!==void 0&&this.header.length>this.entryData.length&&(this.entryData=this.header.map((s,e)=>this.entryData[e]||"")),_e`
            <ui-dialog
                title="${this.tableIndex<0?"Neuer Eintrag":"Bearbeiten"}"
                modal
                inert
            >
                <ui-flex-grid gap="0.25rem">
                    ${this._renderInputs()}
                </ui-flex-grid>

                ${this._renderDeleteAction()}

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
        `}_renderInputs(){const s=[...(this.header||[]).map((e,t)=>Ft(this.entryData[t],_e`
                        <ui-flex-grid-item>
                            <ui-input
                                title="${e}"
                                type="text"
                                value=${this.entryData[t]}
                                @change=${i=>{this.entryData[t]=i.currentTarget.value}}
                            ></ui-input>
                        </ui-flex-grid-item>
                    `))];return _e`${s}`}_renderDeleteAction(){return this.tableIndex<0?_e``:_e`
            <ui-button
                slot="actions"
                variant="full"
                color="destructive"
                @click=${async()=>{this.dispatchEvent(new Event("delete")),this.close()}}
            >
                Löschen
            </ui-button>
        `}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Rr([ke({type:Object,attribute:"header",reflect:!0})],Zt.prototype,"header",2);Rr([ke({type:Object,attribute:"entry-data",reflect:!0})],Zt.prototype,"entryData",2);Rr([ke({type:Number,attribute:"table-index",reflect:!0})],Zt.prototype,"tableIndex",2);Zt=Rr([Ue("pg-metal-sheet-entry-dialog")],Zt);var Hc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,Wc=(s,e,t,i)=>{for(var r=i>1?void 0:i?Vc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Hc(e,t,r),r};let os=class extends $s{constructor(){super(...arguments),this.cleanup=new _s}render(){return this._setAppBarTitle(),_e`
            <div
                class="no-scrollbar"
                style="${Yt({width:"100%",overflowX:"auto"})}"
            >
                <table>
                    <thead>
                        <tr>
                            ${this._renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        ${this._renderTableBody()}
                    </tbody>
                </table>
            </div>

            <br />

            <ui-flex-grid-row class="actions">
                <ui-button
                    variant="full"
                    color="primary"
                    ripple
                    @click=${()=>{var e;const s=this.querySelector("pg-metal-sheet-entry-dialog");s.header=((e=this.data)==null?void 0:e.data.table.header)||[],s.tableIndex=-1,s.entryData=[],s.show()}}
                >
                    Neuer Eintrag
                </ui-button>
            </ui-flex-grid-row>

            <pg-metal-sheet-entry-dialog
                @submit=${async s=>{this.data&&(s.currentTarget.tableIndex<0?this.data.data.table.data.push(s.currentTarget.entryData):this.data.data.table.data[s.currentTarget.tableIndex]=s.currentTarget.entryData,this.requestUpdate(),this._replaceInStore(this.data))}}
                @delete=${async s=>{this.data&&(this.data.data.table.data.splice(s.currentTarget.tableIndex,1),this.requestUpdate(),this._replaceInStore(this.data))}}
            ></pg-metal-sheet-entry-dialog>

            <pg-metal-sheet-table-dialog
                title="Bearbeiten"
                @submit=${s=>{if(!this.data)return;const e=s.currentTarget.format,t=s.currentTarget.toolID,i=s.currentTarget.press;if(!e||!t){setTimeout(()=>this._openTableDialog({format:e,toolID:t,press:i}));return}const r=ye.queryStore(),n=$e("metalSheets");try{const o={...this.data,format:e,toolID:t,data:{...this.data.data,press:i}};n.replaceInStore(r,o,this.data),this.data=o}catch(o){setTimeout(()=>this._openTableDialog({format:e,toolID:t,press:i})),alert(o);return}}}
            ></pg-metal-sheet-table-dialog>
        `}_renderTableHeader(){if(!this.data)return _e``;const s=[];for(const e of this.data.data.table.header)s.push(_e`
                <th style="text-align: center; text-wrap: pretty;">${e}</th>
            `);return _e`${[...s]}`}_renderTableBody(){if(!this.data)return _e``;const s=[];for(let e=0;e<this.data.data.table.data.length;e++){const t=this.data.data.table.data[e];s.push(Ft(t,_e`
                        <tr
                            style="cursor: pointer;"
                            role="button"
                            data-json="${JSON.stringify(t)}"
                            @click=${()=>{var r;const i=this.querySelector("pg-metal-sheet-entry-dialog");i.header=((r=this.data)==null?void 0:r.data.table.header)||[],i.entryData=t,i.tableIndex=e,i.show()}}
                        >
                            ${[...t.map(i=>_e`
                                        <td style="text-align: center;">
                                            ${i}
                                        </td>
                                    `)]}
                        </tr>
                    `))}return _e`${[...s]}`}updated(s){const e=this.querySelector("tbody");Na.createMobile(e,{onDragEnd:()=>{this.data&&(this.data.data.table.data=Array.from(e.children).map(t=>{const i=t.getAttribute("data-json");if(!i)throw new Error('missing attribute "data-json"');return JSON.parse(i)}),this.requestUpdate(),this._replaceInStore(this.data))}})}firstUpdated(s){this.classList.add("no-scrollbar"),this.style.overflow="hidden",this.style.overflowY="auto"}connectedCallback(){super.connectedCallback();const s=async()=>{this.data&&this._openTableDialog({format:this.data.format,toolID:this.data.toolID,press:this.data.data.press})},e=ye.queryAppBar().contentName("edit").contentAt(0);e.addEventListener("click",s),this.cleanup.add(()=>{e.removeEventListener("click",s)})}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}_setAppBarTitle(){ye.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?$e("metalSheets").fileName(this.data).split(".").slice(0,-1).join("."):"Bleck Liste"}_openTableDialog(s){const e=this.querySelector("pg-metal-sheet-table-dialog");e.format=s.format,e.toolID=s.toolID,e.press=s.press,e.show()}_replaceInStore(s){$e("metalSheets").replaceInStore(ye.queryStore(),s,s)}};os=Wc([Ue("pg-page-content-metal-sheets")],os);const Zc=os;var Kc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,Pt=(s,e,t,i)=>{for(var r=i>1?void 0:i?Jc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Kc(e,t,r),r};let Ke=class extends Le{render(){return _e`
            <ui-flex-grid-row>
                <ui-flex-grid-item>
                    <ui-label
                        style="cursor: pointer;"
                        primary="${this.primary||""}"
                        secondary="${this.secondary||""}"
                        @click=${async()=>{await this.setStackLayoutPage(),ye.queryDrawer().open=!1}}
                    ></ui-label>
                </ui-flex-grid-item>

                ${this.allowDeletion?_e`<ui-flex-grid-item
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
                              ${Ne.smoothieLineIcons.trash}
                          </ui-icon-button>
                      </ui-flex-grid-item>`:""}
            </ui-flex-grid-row>
        `}async setStackLayoutPage(){if(!this.storeKey)return;const s=$e(this.storeKey),e=ye.queryStore().getData(this.storeKey),t=e==null?void 0:e.find(r=>s.listKey(r)===this.storeListKey);if(t===void 0)throw new Error(`Data undefined for "${this.storeListKey}" in "${this.storeKey}"`);const i=ye.queryStackLayout();i.clearStack(),i.setPage(this.storeKey,async r=>{const n=r.children[0];n!==void 0&&(n.data=t)})}async deleteStoreData(){if(!(!this.storeKey||!this.storeListKey))switch(this.storeKey){case"alertLists":case"metalSheets":case"vis":if(confirm(`Möchten Sie "${this.storeListKey}" wirklich löschen?`)){const s=$e(this.storeKey);ye.queryStore().updateData(this.storeKey,e=>e.filter(t=>s.listKey(t)!==this.storeListKey))}}}};Pt([ke({type:String,attribute:"store-key",reflect:!0})],Ke.prototype,"storeKey",2);Pt([ke({type:String,attribute:"store-list-key",reflect:!0})],Ke.prototype,"storeListKey",2);Pt([ke({type:String,attribute:"primary",reflect:!0})],Ke.prototype,"primary",2);Pt([ke({type:String,attribute:"secondary",reflect:!0})],Ke.prototype,"secondary",2);Pt([ke({type:Boolean,attribute:"allow-deletion",reflect:!0})],Ke.prototype,"allowDeletion",2);Ke=Pt([Ue("pg-drawer-item")],Ke);const qr=Ke;var Yc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,Qc=(s,e,t,i)=>{for(var r=i>1?void 0:i?Xc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Yc(e,t,r),r};let ye=class extends Le{static queryStore(){return document.querySelector("ui-store")}static queryThemeHandler(){return document.querySelector("ui-theme-handler")}static queryAppBar(){return document.querySelector("ui-app-bar")||null}static queryDrawer(){return document.querySelector("ui-drawer")||null}static queryStackLayout(){return document.querySelector("ui-stack-layout")}static queryImportDialog(){return document.querySelector("pg-import-dialog")}constructor(){super(),this._initializeStores()}_initializeStores(){const s=ye.queryStore();s.setData("theme",{name:"original"},!0),s.setData("drawer",{open:!0},!1),s.setData("drawerGroup",{},!0),s.setData("alertLists",[],!0),s.setData("metalSheets",[],!0),s.setData("vis",[],!0),s.setData("gist",{},!0)}createRenderRoot(){return this}render(){return _e`
            <div class="is-container no-scrollbar" style="height: 100%;">
                <ui-stack-layout></ui-stack-layout>
            </div>

            ${this._renderAppBar()} ${this._renderDrawer()}
            ${this._renderDialogs()}
        `}_renderAppBar(){return _e`
            <ui-app-bar position="top">
                <ui-app-bar-item name="menu" slot="left">
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{const s=ye.queryDrawer();s.open=!0}}
                    >
                        ${Ne.smoothieLineIcons.menu}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="back" slot="left" hidden>
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{ye.queryStackLayout().goBack()}}
                    >
                        ${Ne.smoothieLineIcons.chevronLeft}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="title" slot="center">
                    <ui-heading style="white-space: nowrap;">
                        PG: Vis
                    </ui-heading>
                </ui-app-bar-item>

                <ui-app-bar-item name="edit" slot="right" hidden>
                    <ui-icon-button ripple ghost>
                        ${Ne.smoothieLineIcons.pen}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="share" slot="right" hidden>
                    <ui-icon-button ripple ghost>
                        ${Ne.smoothieLineIcons.share}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="search" slot="right" hidden>
                    <ui-icon-button ripple ghost>
                        ${Ne.smoothieLineIcons.search}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="bookmark" slot="right" hidden>
                    <ui-icon-button ripple ghost>
                        ${Ne.smoothieLineIcons.bookmark}
                    </ui-icon-button>
                </ui-app-bar-item>
            </ui-app-bar>
        `}_renderDrawer(){var e,t,i,r,n,o,a;const s=ye.queryStore();return _e`
            <ui-drawer
                ?open=${!!((e=s.getData("drawer"))!=null&&e.open)}
                @open=${()=>{s.setData("drawer",{open:!0})}}
                @close=${()=>{s.setData("drawer",{open:!1})}}
            >
                <ui-drawer-group name="app-info" no-fold>
                    <ui-drawer-group-item>
                        <ui-button
                            style="${Yt({display:"flex",justifyContent:"flex-start",marginBottom:"var(--ui-spacing)",padding:"0.25rem",fontSize:"0.85rem",textTransform:"none"})}"
                            variant="ghost"
                            color="primary"
                            ripple
                            @click=${()=>{}}
                        >
                            ${mo} - [Build: ${Cc}]
                        </ui-button>
                    </ui-drawer-group-item>

                    <ui-drawer-group-item>
                        <ui-label primary="Theme">
                            <select
                                style="text-align: center;"
                                @change=${c=>{const h=c.currentTarget.children[c.currentTarget.selectedIndex];s.setData("theme",{name:h.value})}}
                            >
                                <option
                                    value="original"
                                    ?selected=${((t=s.getData("theme"))==null?void 0:t.name)==="original"}
                                >
                                    Original
                                </option>
                                <option
                                    value="gruvbox"
                                    ?selected=${((i=s.getData("theme"))==null?void 0:i.name)==="gruvbox"}
                                >
                                    Gruvbox
                                </option>
                            </select>
                        </ui-label>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="alert-lists"
                    title="Alarm Listen"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((n=(r=s.getData("drawerGroup"))==null?void 0:r["alert-lists"])!=null&&n.open)}
                    @fold=${()=>{s.updateData("drawerGroup",c=>(c["alert-lists"]={open:!1},c))}}
                    @unfold=${()=>{s.updateData("drawerGroup",c=>(c["alert-lists"]={open:!0},c))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import
                            store-key="alertLists"
                        ></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist
                            store-key="alertLists"
                        ></pg-drawer-item-gist>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="metal-sheets"
                    title="Blech Listen"
                    data-fixed-items="3"
                    gap="0.25rem"
                    ?open=${!!((a=(o=s.getData("drawerGroup"))==null?void 0:o["metal-sheets"])!=null&&a.open)}
                    @fold=${()=>{s.updateData("drawerGroup",c=>(c["metal-sheets"]={open:!1},c))}}
                    @unfold=${()=>{s.updateData("drawerGroup",c=>(c["metal-sheets"]={open:!0},c))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import
                            store-key="metalSheets"
                        ></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist
                            store-key="metalSheets"
                        ></pg-drawer-item-gist>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 3 -->
                    <ui-drawer-group-item>
                        <ui-button
                            variant="full"
                            color="secondary"
                            @click=${()=>{const c=this.querySelector("pg-metal-sheet-table-dialog");c.format="",c.toolID="",c.press=-1,c.show()}}
                        >
                            Neue Liste
                        </ui-button>
                    </ui-drawer-group-item>
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
        `}_renderDialogs(){return _e`
            <pg-import-dialog></pg-import-dialog>

            <pg-metal-sheet-table-dialog
                title="Neue Liste"
                @submit=${s=>{const e=s.currentTarget.format,t=s.currentTarget.toolID,i=s.currentTarget.press,r=()=>{const h=this.querySelector("pg-metal-sheet-table-dialog");h.format=e,h.toolID=t,h.press=i,h.show()};if(!e||!t){setTimeout(r);return}const n=ye.queryStore(),o={format:e,toolID:t,data:{press:i,table:{header:[],data:[]}}},a=$e("metalSheets"),c=a.listKey(o);for(const h of n.getData("metalSheets")||[])if(a.listKey(h)===c){setTimeout(r),alert(`Liste "${c}" existiert bereits!"`);return}a.addToStore(n,[],!0)}}
            ></pg-metal-sheet-table-dialog>
        `}firstUpdated(s){this.style.position="fixed",this.style.top="0",this.style.right="0",this.style.bottom="0",this.style.left="0",this._registerPages(),this._handleStackLayoutChanges(),this._storeEventHandlers()}_registerPages(){const s=ye.queryStackLayout();s.registerPage("alertLists",()=>{const e=new Nr;e.name="alertLists";const t=new Mc;return e.appendChild(t),e}),s.registerPage("metalSheets",()=>{const e=new Nr;e.name="metalSheets";const t=new Zc;return e.appendChild(t),e}),s.registerPage("alert",()=>{const e=new Nr;e.name="alert";const t=new Lc;return e.appendChild(t),e})}_handleStackLayoutChanges(){const s=ye.queryStackLayout(),e=ye.queryAppBar(),t=ye.queryDrawer();s.events.addListener("change",({current:i})=>{if(s.stackSize()>1?e.contentName("back").show():e.contentName("back").hide(),e.content("left").forEach(r=>{r.name==="menu"||r.name==="back"||r.hide()}),e.content("right").forEach(r=>{r.hide()}),i===null){e.contentName("title").contentAt(0).innerText="PG: Vis",t.open=!0;return}switch(i.name){case"alertLists":e.contentName("search").show();break;case"metalSheets":e.contentName("edit").show();break;case"visData":e.contentName("edit").show();break}})}_storeEventHandlers(){const s=ye.queryStore();s.addListener("theme",e=>{const t=ye.queryThemeHandler();t.theme=e.name},!0),s.addListener("alertLists",e=>{const t=this.querySelector('ui-drawer-group[name="alert-lists"]'),i=parseInt(t.getAttribute("data-fixed-items")||"0");Array.from(t.children).slice(i).forEach(n=>t.removeChild(n));const r=$e("alertLists");e.forEach(async n=>{const o=new zr;t.appendChild(o);const a=new qr;o.appendChild(a),a.storeKey=r.key(),a.primary=a.storeListKey=r.listKey(n),a.secondary=`${n.data.length} Einträge`,a.allowDeletion=!0})},!0),s.addListener("metalSheets",e=>{const t=this.querySelector('ui-drawer-group[name="metal-sheets"]'),i=parseInt(t.getAttribute("data-fixed-items")||"0");Array.from(t.children).slice(i).forEach(n=>t.removeChild(n));const r=$e("metalSheets");e.forEach(async n=>{const o=new zr;t.appendChild(o);const a=new qr;o.appendChild(a),a.storeKey=r.key(),a.primary=(n.data.press>=0?`[P${n.data.press}] `:"")+r.listKey(n),a.storeListKey=r.listKey(n),a.secondary=`${n.data.table.data.length} Einträge`,a.allowDeletion=!0})},!0),s.addListener("vis",e=>{const t=this.querySelector('ui-drawer-group[name="vis"]'),i=parseInt(t.getAttribute("data-fixed-items")||"0");Array.from(t.children).slice(i).forEach(n=>t.removeChild(n));const r=$e("vis");e.forEach(async n=>{const o=new zr;t.appendChild(o);const a=new qr;o.appendChild(a),a.storeKey=r.key(),a.primary=r.listKey(n),a.storeListKey=r.listKey(n),a.secondary=`${n.data.length} Einträge`,a.allowDeletion=!0})},!0)}};ye=Qc([Ue("pg-app")],ye);const eu="modulepreload",tu=function(s){return"/pg-vis-dev.github.io/"+s},Ei={},ru=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=tu(c),c in Ei)return;Ei[c]=!0;const h=c.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":eu,h||(p.as="script"),p.crossOrigin="",p.href=c,a&&p.setAttribute("nonce",a),document.head.appendChild(p),h)return new Promise((b,d)=>{p.addEventListener("load",b),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})};function su(s={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:r,onRegisteredSW:n,onRegisterError:o}=s;let a,c;const h=async(p=!0)=>{await c};async function m(){if("serviceWorker"in navigator){if(a=await ru(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/pg-vis-dev.github.io/sw.js",{scope:"/pg-vis-dev.github.io/",type:"classic"})).catch(p=>{o==null||o(p)}),!a)return;a.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),a.addEventListener("installed",p=>{p.isUpdate||i==null||i()}),a.register({immediate:e}).then(p=>{n?n("/pg-vis-dev.github.io/sw.js",p):r==null||r(p)}).catch(p=>{o==null||o(p)})}}return c=m(),h}su({onRegistered(s){setTimeout(async()=>{try{console.debug(`Update service... (currentVersion: ${mo})`),await(s==null?void 0:s.update())}catch(e){console.warn(`Auto update failed: ${e}`)}})}});

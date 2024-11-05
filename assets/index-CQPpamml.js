var xo=Object.defineProperty;var Ao=(s,e,t)=>e in s?xo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var $e=(s,e,t)=>Ao(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=globalThis,us=cr.ShadowRoot&&(cr.ShadyCSS===void 0||cr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ds=Symbol(),Us=new WeakMap;let Pi=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ds)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(us&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Us.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Us.set(t,e))}return e}toString(){return this.cssText}};const Po=s=>new Pi(typeof s=="string"?s:s+"",void 0,ds),Co=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Pi(t,s,ds)},Oo=(s,e)=>{if(us)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=cr.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},js=us?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Po(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$o,defineProperty:Ro,getOwnPropertyDescriptor:Do,getOwnPropertyNames:Lo,getOwnPropertySymbols:Go,getPrototypeOf:Fo}=Object,Ve=globalThis,Is=Ve.trustedTypes,Uo=Is?Is.emptyScript:"",jr=Ve.reactiveElementPolyfillSupport,jt=(s,e)=>s,dr={toAttribute(s,e){switch(e){case Boolean:s=s?Uo:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ps=(s,e)=>!$o(s,e),Bs={attribute:!0,type:String,converter:dr,reflect:!1,hasChanged:ps};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ve.litPropertyMetadata??(Ve.litPropertyMetadata=new WeakMap);class mt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Bs){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Ro(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=Do(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const a=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Bs}static _$Ei(){if(this.hasOwnProperty(jt("elementProperties")))return;const e=Fo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(jt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(jt("properties"))){const t=this.properties,i=[...Lo(t),...Go(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(js(r))}else e!==void 0&&t.push(js(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:dr).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:dr;this._$Em=r,this[r]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ps)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},mt[jt("elementProperties")]=new Map,mt[jt("finalized")]=new Map,jr==null||jr({ReactiveElement:mt}),(Ve.reactiveElementVersions??(Ve.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=globalThis,pr=It.trustedTypes,zs=pr?pr.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ci="$lit$",qe=`lit$${Math.random().toFixed(9).slice(2)}$`,Oi="?"+qe,jo=`<${Oi}>`,at=document,Mt=()=>at.createComment(""),Nt=s=>s===null||typeof s!="object"&&typeof s!="function",hs=Array.isArray,Io=s=>hs(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ir=`[ 	
\f\r]`,Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ms=/-->/g,Ns=/>/g,tt=RegExp(`>|${Ir}(?:([^\\s"'>=/]+)(${Ir}*=${Ir}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qs=/'/g,Hs=/"/g,$i=/^(?:script|style|textarea|title)$/i,Bo=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),ce=Bo(1),wt=Symbol.for("lit-noChange"),Ae=Symbol.for("lit-nothing"),Vs=new WeakMap,it=at.createTreeWalker(at,129);function Ri(s,e){if(!hs(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return zs!==void 0?zs.createHTML(e):e}const zo=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=Lt;for(let a=0;a<t;a++){const c=s[a];let h,m,d=-1,b=0;for(;b<c.length&&(o.lastIndex=b,m=o.exec(c),m!==null);)b=o.lastIndex,o===Lt?m[1]==="!--"?o=Ms:m[1]!==void 0?o=Ns:m[2]!==void 0?($i.test(m[2])&&(r=RegExp("</"+m[2],"g")),o=tt):m[3]!==void 0&&(o=tt):o===tt?m[0]===">"?(o=r??Lt,d=-1):m[1]===void 0?d=-2:(d=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?tt:m[3]==='"'?Hs:qs):o===Hs||o===qs?o=tt:o===Ms||o===Ns?o=Lt:(o=tt,r=void 0);const p=o===tt&&s[a+1].startsWith("/>")?" ":"";n+=o===Lt?c+jo:d>=0?(i.push(h),c.slice(0,d)+Ci+c.slice(d)+qe+p):c+qe+(d===-2?a:p)}return[Ri(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Zr=class Di{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,c=this.parts,[h,m]=zo(e,t);if(this.el=Di.createElement(h,i),it.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=it.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Ci)){const b=m[o++],p=r.getAttribute(d).split(qe),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:w[2],strings:p,ctor:w[1]==="."?No:w[1]==="?"?qo:w[1]==="@"?Ho:Pr}),r.removeAttribute(d)}else d.startsWith(qe)&&(c.push({type:6,index:n}),r.removeAttribute(d));if($i.test(r.tagName)){const d=r.textContent.split(qe),b=d.length-1;if(b>0){r.textContent=pr?pr.emptyScript:"";for(let p=0;p<b;p++)r.append(d[p],Mt()),it.nextNode(),c.push({type:2,index:++n});r.append(d[b],Mt())}}}else if(r.nodeType===8)if(r.data===Oi)c.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(qe,d+1))!==-1;)c.push({type:7,index:n}),d+=qe.length-1}n++}}static createElement(e,t){const i=at.createElement("template");return i.innerHTML=e,i}};function Et(s,e,t=s,i){var o,a;if(e===wt)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=Nt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=Et(s,r._$AS(s,e.values),r,i)),e}let Mo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??at).importNode(t,!0);it.currentNode=r;let n=it.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new gs(n,n.nextSibling,this,e):c.type===1?h=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(h=new Vo(n,this,e)),this._$AV.push(h),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=it.nextNode(),o++)}return it.currentNode=at,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},gs=class Li{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=Ae,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Et(this,e,t),Nt(e)?e===Ae||e==null||e===""?(this._$AH!==Ae&&this._$AR(),this._$AH=Ae):e!==this._$AH&&e!==wt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Io(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ae&&Nt(this._$AH)?this._$AA.nextSibling.data=e:this.T(at.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Zr.createElement(Ri(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new Mo(r,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Vs.get(e.strings);return t===void 0&&Vs.set(e.strings,t=new Zr(e)),t}k(e){hs(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Li(this.O(Mt()),this.O(Mt()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Pr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=Ae,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ae}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=Et(this,e,t,0),o=!Nt(e)||e!==this._$AH&&e!==wt,o&&(this._$AH=e);else{const a=e;let c,h;for(e=n[0],c=0;c<n.length-1;c++)h=Et(this,a[i+c],t,c),h===wt&&(h=this._$AH[c]),o||(o=!Nt(h)||h!==this._$AH[c]),h===Ae?e=Ae:e!==Ae&&(e+=(h??"")+n[c+1]),this._$AH[c]=h}o&&!r&&this.j(e)}j(e){e===Ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},No=class extends Pr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ae?void 0:e}},qo=class extends Pr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ae)}},Ho=class extends Pr{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=Et(this,e,t,0)??Ae)===wt)return;const i=this._$AH,r=e===Ae&&i!==Ae||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Ae&&(i===Ae||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Vo=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}};const Br=It.litHtmlPolyfillSupport;Br==null||Br(Zr,gs),(It.litHtmlVersions??(It.litHtmlVersions=[])).push("3.2.1");const Wo=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new gs(e.insertBefore(Mt(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Re=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return wt}};var Ai;Re._$litElement$=!0,Re.finalized=!0,(Ai=globalThis.litElementHydrateSupport)==null||Ai.call(globalThis,{LitElement:Re});const zr=globalThis.litElementPolyfillSupport;zr==null||zr({LitElement:Re});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo={attribute:!0,type:String,converter:dr,reflect:!1,hasChanged:ps},Ko=(s=Zo,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){const{name:o}=t;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,s)}}throw Error("Unsupported decorator location: "+i)};function we(s){return(e,t)=>typeof t=="object"?Ko(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}var Jo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,Cr=(s,e,t,i)=>{for(var r=i>1?void 0:i?Yo(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Jo(e,t,r),r};let kt=class extends Re{constructor(){super(...arguments),this.title="",this.storageKey=""}static generateRegExp(s){const e=s.split(" ").filter(t=>t!=="");return new RegExp("(?=.*"+e.join(")(?=.*")+")","i")}static get styles(){return Co`
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
        `}render(){return ce`
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
        `}firstUpdated(s){this.classList.add("has-backdrop-blur")}value(){var s,e;return((e=(s=this.shadowRoot)==null?void 0:s.querySelector("ui-search"))==null?void 0:e.value)||""}};Cr([we({type:String,attribute:"title",reflect:!0})],kt.prototype,"title",2);Cr([we({type:String,attribute:"storage-key",reflect:!0})],kt.prototype,"storageKey",2);Cr([we({type:Boolean,attribute:"active",reflect:!0})],kt.prototype,"active",2);kt=Cr([Ce("pg-search-bar")],kt);const Gi=kt;function Or(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&process.version!==void 0?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}function fs(s,e,t,i){if(typeof t!="function")throw new Error("method for before hook must be a function");return i||(i={}),Array.isArray(e)?e.reverse().reduce((r,n)=>fs.bind(null,s,n,r,i),t)():Promise.resolve().then(()=>s.registry[e]?s.registry[e].reduce((r,n)=>n.hook.bind(null,r,i),t)():t(i))}function Xo(s,e,t,i){const r=i;s.registry[t]||(s.registry[t]=[]),e==="before"&&(i=(n,o)=>Promise.resolve().then(r.bind(null,o)).then(n.bind(null,o))),e==="after"&&(i=(n,o)=>{let a;return Promise.resolve().then(n.bind(null,o)).then(c=>(a=c,r(a,o))).then(()=>a)}),e==="error"&&(i=(n,o)=>Promise.resolve().then(n.bind(null,o)).catch(a=>r(a,o))),s.registry[t].push({hook:i,orig:r})}function Qo(s,e,t){if(!s.registry[e])return;const i=s.registry[e].map(r=>r.orig).indexOf(t);i!==-1&&s.registry[e].splice(i,1)}const Ws=Function.bind,Zs=Ws.bind(Ws);function Fi(s,e,t){const i=Zs(Qo,null).apply(null,t?[e,t]:[e]);s.api={remove:i},s.remove=i,["before","error","after","wrap"].forEach(r=>{const n=t?[e,r,t]:[e,r];s[r]=s.api[r]=Zs(Xo,null).apply(null,n)})}function en(){const s=Symbol("Singular"),e={registry:{}},t=fs.bind(null,e,s);return Fi(t,e,s),t}function tn(){const s={registry:{}},e=fs.bind(null,s);return Fi(e,s),e}const rn={Singular:en,Collection:tn};var sn="0.0.0-development",on=`octokit-endpoint.js/${sn} ${Or()}`,nn={method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":on},mediaType:{format:""}};function an(s){return s?Object.keys(s).reduce((e,t)=>(e[t.toLowerCase()]=s[t],e),{}):{}}function ln(s){if(typeof s!="object"||s===null||Object.prototype.toString.call(s)!=="[object Object]")return!1;const e=Object.getPrototypeOf(s);if(e===null)return!0;const t=Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Function.prototype.call(t)===Function.prototype.call(s)}function Ui(s,e){const t=Object.assign({},s);return Object.keys(e).forEach(i=>{ln(e[i])?i in s?t[i]=Ui(s[i],e[i]):Object.assign(t,{[i]:e[i]}):Object.assign(t,{[i]:e[i]})}),t}function Ks(s){for(const e in s)s[e]===void 0&&delete s[e];return s}function Kr(s,e,t){var r;if(typeof e=="string"){let[n,o]=e.split(" ");t=Object.assign(o?{method:n,url:o}:{url:n},t)}else t=Object.assign({},e);t.headers=an(t.headers),Ks(t),Ks(t.headers);const i=Ui(s||{},t);return t.url==="/graphql"&&(s&&((r=s.mediaType.previews)!=null&&r.length)&&(i.mediaType.previews=s.mediaType.previews.filter(n=>!i.mediaType.previews.includes(n)).concat(i.mediaType.previews)),i.mediaType.previews=(i.mediaType.previews||[]).map(n=>n.replace(/-preview/,""))),i}function cn(s,e){const t=/\?/.test(s)?"&":"?",i=Object.keys(e);return i.length===0?s:s+t+i.map(r=>r==="q"?"q="+e.q.split("+").map(encodeURIComponent).join("+"):`${r}=${encodeURIComponent(e[r])}`).join("&")}var un=/\{[^}]+\}/g;function dn(s){return s.replace(/^\W+|\W+$/g,"").split(/,/)}function pn(s){const e=s.match(un);return e?e.map(dn).reduce((t,i)=>t.concat(i),[]):[]}function Js(s,e){const t={__proto__:null};for(const i of Object.keys(s))e.indexOf(i)===-1&&(t[i]=s[i]);return t}function ji(s){return s.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function vt(s){return encodeURIComponent(s).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Gt(s,e,t){return e=s==="+"||s==="#"?ji(e):vt(e),t?vt(t)+"="+e:e}function ft(s){return s!=null}function Mr(s){return s===";"||s==="&"||s==="?"}function hn(s,e,t,i){var r=s[t],n=[];if(ft(r)&&r!=="")if(typeof r=="string"||typeof r=="number"||typeof r=="boolean")r=r.toString(),i&&i!=="*"&&(r=r.substring(0,parseInt(i,10))),n.push(Gt(e,r,Mr(e)?t:""));else if(i==="*")Array.isArray(r)?r.filter(ft).forEach(function(o){n.push(Gt(e,o,Mr(e)?t:""))}):Object.keys(r).forEach(function(o){ft(r[o])&&n.push(Gt(e,r[o],o))});else{const o=[];Array.isArray(r)?r.filter(ft).forEach(function(a){o.push(Gt(e,a))}):Object.keys(r).forEach(function(a){ft(r[a])&&(o.push(vt(a)),o.push(Gt(e,r[a].toString())))}),Mr(e)?n.push(vt(t)+"="+o.join(",")):o.length!==0&&n.push(o.join(","))}else e===";"?ft(r)&&n.push(vt(t)):r===""&&(e==="&"||e==="?")?n.push(vt(t)+"="):r===""&&n.push("");return n}function gn(s){return{expand:fn.bind(null,s)}}function fn(s,e){var t=["+","#",".","/",";","?","&"];return s=s.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(i,r,n){if(r){let a="";const c=[];if(t.indexOf(r.charAt(0))!==-1&&(a=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(h){var m=/([^:\*]*)(?::(\d+)|(\*))?/.exec(h);c.push(hn(e,a,m[1],m[2]||m[3]))}),a&&a!=="+"){var o=",";return a==="?"?o="&":a!=="#"&&(o=a),(c.length!==0?a:"")+c.join(o)}else return c.join(",")}else return ji(n)}),s==="/"?s:s.replace(/\/$/,"")}function Ii(s){var m;let e=s.method.toUpperCase(),t=(s.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),i=Object.assign({},s.headers),r,n=Js(s,["method","baseUrl","url","headers","request","mediaType"]);const o=pn(t);t=gn(t).expand(n),/^http/.test(t)||(t=s.baseUrl+t);const a=Object.keys(s).filter(d=>o.includes(d)).concat("baseUrl"),c=Js(n,a);if(!/application\/octet-stream/i.test(i.accept)&&(s.mediaType.format&&(i.accept=i.accept.split(/,/).map(d=>d.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${s.mediaType.format}`)).join(",")),t.endsWith("/graphql")&&(m=s.mediaType.previews)!=null&&m.length)){const d=i.accept.match(/[\w-]+(?=-preview)/g)||[];i.accept=d.concat(s.mediaType.previews).map(b=>{const p=s.mediaType.format?`.${s.mediaType.format}`:"+json";return`application/vnd.github.${b}-preview${p}`}).join(",")}return["GET","HEAD"].includes(e)?t=cn(t,c):"data"in c?r=c.data:Object.keys(c).length&&(r=c),!i["content-type"]&&typeof r<"u"&&(i["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(e)&&typeof r>"u"&&(r=""),Object.assign({method:e,url:t,headers:i},typeof r<"u"?{body:r}:null,s.request?{request:s.request}:null)}function mn(s,e,t){return Ii(Kr(s,e,t))}function Bi(s,e){const t=Kr(s,e),i=mn.bind(null,t);return Object.assign(i,{DEFAULTS:t,defaults:Bi.bind(null,t),merge:Kr.bind(null,t),parse:Ii})}var yn=Bi(null,nn);class Ut extends Error{constructor(t,i,r){super(t);$e(this,"name");$e(this,"status");$e(this,"request");$e(this,"response");this.name="HttpError",this.status=Number.parseInt(i),Number.isNaN(this.status)&&(this.status=0),"response"in r&&(this.response=r.response);const n=Object.assign({},r.request);r.request.headers.authorization&&(n.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),n.url=n.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=n}}var vn="0.0.0-development",_n={headers:{"user-agent":`octokit-request.js/${vn} ${Or()}`}};function bn(s){if(typeof s!="object"||s===null||Object.prototype.toString.call(s)!=="[object Object]")return!1;const e=Object.getPrototypeOf(s);if(e===null)return!0;const t=Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Function.prototype.call(t)===Function.prototype.call(s)}async function Ys(s){var d,b,p,w,f;const e=((d=s.request)==null?void 0:d.fetch)||globalThis.fetch;if(!e)throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");const t=((b=s.request)==null?void 0:b.log)||console,i=((p=s.request)==null?void 0:p.parseSuccessResponseBody)!==!1,r=bn(s.body)||Array.isArray(s.body)?JSON.stringify(s.body):s.body,n=Object.fromEntries(Object.entries(s.headers).map(([g,y])=>[g,String(y)]));let o;try{o=await e(s.url,{method:s.method,body:r,redirect:(w=s.request)==null?void 0:w.redirect,headers:n,signal:(f=s.request)==null?void 0:f.signal,...s.body&&{duplex:"half"}})}catch(g){let y="Unknown Error";if(g instanceof Error){if(g.name==="AbortError")throw g.status=500,g;y=g.message,g.name==="TypeError"&&"cause"in g&&(g.cause instanceof Error?y=g.cause.message:typeof g.cause=="string"&&(y=g.cause))}const k=new Ut(y,500,{request:s});throw k.cause=g,k}const a=o.status,c=o.url,h={};for(const[g,y]of o.headers)h[g]=y;const m={url:c,status:a,headers:h,data:""};if("deprecation"in h){const g=h.link&&h.link.match(/<([^>]+)>; rel="deprecation"/),y=g&&g.pop();t.warn(`[@octokit/request] "${s.method} ${s.url}" is deprecated. It is scheduled to be removed on ${h.sunset}${y?`. See ${y}`:""}`)}if(a===204||a===205)return m;if(s.method==="HEAD"){if(a<400)return m;throw new Ut(o.statusText,a,{response:m,request:s})}if(a===304)throw m.data=await Nr(o),new Ut("Not modified",a,{response:m,request:s});if(a>=400)throw m.data=await Nr(o),new Ut(wn(m.data),a,{response:m,request:s});return m.data=i?await Nr(o):o.body,m}async function Nr(s){const e=s.headers.get("content-type");return/application\/json/.test(e)?s.json().catch(()=>s.text()).catch(()=>""):!e||/^text\/|charset=utf-8$/.test(e)?s.text():s.arrayBuffer()}function wn(s){if(typeof s=="string")return s;if(s instanceof ArrayBuffer)return"Unknown error";if("message"in s){const e="documentation_url"in s?` - ${s.documentation_url}`:"";return Array.isArray(s.errors)?`${s.message}: ${s.errors.map(t=>JSON.stringify(t)).join(", ")}${e}`:`${s.message}${e}`}return`Unknown error: ${JSON.stringify(s)}`}function Jr(s,e){const t=s.defaults(e);return Object.assign(function(r,n){const o=t.merge(r,n);if(!o.request||!o.request.hook)return Ys(t.parse(o));const a=(c,h)=>Ys(t.parse(t.merge(c,h)));return Object.assign(a,{endpoint:t,defaults:Jr.bind(null,t)}),o.request.hook(a,o)},{endpoint:t,defaults:Jr.bind(null,t)})}var Yr=Jr(yn,_n),En="0.0.0-development";function kn(s){return`Request failed due to following response errors:
`+s.errors.map(e=>` - ${e.message}`).join(`
`)}var Tn=class extends Error{constructor(e,t,i){super(kn(i));$e(this,"name","GraphqlResponseError");$e(this,"errors");$e(this,"data");this.request=e,this.headers=t,this.response=i,this.errors=i.errors,this.data=i.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Sn=["method","baseUrl","url","headers","request","query","mediaType"],xn=["query","method","url"],Xs=/\/api\/v3\/?$/;function An(s,e,t){if(t){if(typeof e=="string"&&"query"in t)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const o in t)if(xn.includes(o))return Promise.reject(new Error(`[@octokit/graphql] "${o}" cannot be used as variable name`))}const i=typeof e=="string"?Object.assign({query:e},t):e,r=Object.keys(i).reduce((o,a)=>Sn.includes(a)?(o[a]=i[a],o):(o.variables||(o.variables={}),o.variables[a]=i[a],o),{}),n=i.baseUrl||s.endpoint.DEFAULTS.baseUrl;return Xs.test(n)&&(r.url=n.replace(Xs,"/api/graphql")),s(r).then(o=>{if(o.data.errors){const a={};for(const c of Object.keys(o.headers))a[c]=o.headers[c];throw new Tn(r,a,o.data)}return o.data.data})}function ms(s,e){const t=s.defaults(e);return Object.assign((r,n)=>An(t,r,n),{defaults:ms.bind(null,t),endpoint:t.endpoint})}ms(Yr,{headers:{"user-agent":`octokit-graphql.js/${En} ${Or()}`},method:"POST",url:"/graphql"});function Pn(s){return ms(s,{method:"POST",url:"/graphql"})}var Cn=/^v1\./,On=/^ghs_/,$n=/^ghu_/;async function Rn(s){const e=s.split(/\./).length===3,t=Cn.test(s)||On.test(s),i=$n.test(s);return{type:"token",token:s,tokenType:e?"app":t?"installation":i?"user-to-server":"oauth"}}function Dn(s){return s.split(/\./).length===3?`bearer ${s}`:`token ${s}`}async function Ln(s,e,t,i){const r=e.endpoint.merge(t,i);return r.headers.authorization=Dn(s),e(r)}var Gn=function(e){if(!e)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof e!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return e=e.replace(/^(token|bearer) +/i,""),Object.assign(Rn.bind(null,e),{hook:Ln.bind(null,e)})};const zi="6.1.2",Qs=()=>{},Fn=console.warn.bind(console),Un=console.error.bind(console),ei=`octokit-core.js/${zi} ${Or()}`;var lr;let jn=(lr=class{constructor(e={}){$e(this,"request");$e(this,"graphql");$e(this,"log");$e(this,"hook");$e(this,"auth");const t=new rn.Collection,i={baseUrl:Yr.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},e.request,{hook:t.bind(null,"request")}),mediaType:{previews:[],format:""}};if(i.headers["user-agent"]=e.userAgent?`${e.userAgent} ${ei}`:ei,e.baseUrl&&(i.baseUrl=e.baseUrl),e.previews&&(i.mediaType.previews=e.previews),e.timeZone&&(i.headers["time-zone"]=e.timeZone),this.request=Yr.defaults(i),this.graphql=Pn(this.request).defaults(i),this.log=Object.assign({debug:Qs,info:Qs,warn:Fn,error:Un},e.log),this.hook=t,e.authStrategy){const{authStrategy:n,...o}=e,a=n(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:o},e.auth));t.wrap("request",a.hook),this.auth=a}else if(!e.auth)this.auth=async()=>({type:"unauthenticated"});else{const n=Gn(e.auth);t.wrap("request",n.hook),this.auth=n}const r=this.constructor;for(let n=0;n<r.plugins.length;++n)Object.assign(this,r.plugins[n](this,e))}static defaults(e){return class extends this{constructor(...i){const r=i[0]||{};if(typeof e=="function"){super(e(r));return}super(Object.assign({},e,r,r.userAgent&&e.userAgent?{userAgent:`${r.userAgent} ${e.userAgent}`}:null))}}}static plugin(...e){var r;const t=this.plugins;return r=class extends this{},$e(r,"plugins",t.concat(e.filter(n=>!t.includes(n)))),r}},$e(lr,"VERSION",zi),$e(lr,"plugins",[]),lr);var In="0.0.0-development";function Bn(s){if(!s.data)return{...s,data:[]};if(!("total_count"in s.data&&!("url"in s.data)))return s;const t=s.data.incomplete_results,i=s.data.repository_selection,r=s.data.total_count;delete s.data.incomplete_results,delete s.data.repository_selection,delete s.data.total_count;const n=Object.keys(s.data)[0],o=s.data[n];return s.data=o,typeof t<"u"&&(s.data.incomplete_results=t),typeof i<"u"&&(s.data.repository_selection=i),s.data.total_count=r,s}function ys(s,e,t){const i=typeof e=="function"?e.endpoint(t):s.request.endpoint(e,t),r=typeof e=="function"?e:s.request,n=i.method,o=i.headers;let a=i.url;return{[Symbol.asyncIterator]:()=>({async next(){if(!a)return{done:!0};try{const c=await r({method:n,url:a,headers:o}),h=Bn(c);return a=((h.headers.link||"").match(/<([^>]+)>;\s*rel="next"/)||[])[1],{value:h}}catch(c){if(c.status!==409)throw c;return a="",{value:{status:200,headers:{},data:[]}}}}})}}function Mi(s,e,t,i){return typeof t=="function"&&(i=t,t=void 0),Ni(s,[],ys(s,e,t)[Symbol.asyncIterator](),i)}function Ni(s,e,t,i){return t.next().then(r=>{if(r.done)return e;let n=!1;function o(){n=!0}return e=e.concat(i?i(r.value,o):r.value.data),n?e:Ni(s,e,t,i)})}Object.assign(Mi,{iterator:ys});function qi(s){return{paginate:Object.assign(Mi.bind(null,s),{iterator:ys.bind(null,s)})}}qi.VERSION=In;var zn=(s,e)=>`The cursor at "${s.join(",")}" did not change its value "${e}" after a page transition. Please make sure your that your query is set up correctly.`,Mn=class extends Error{constructor(e,t){super(zn(e.pathInQuery,t));$e(this,"name","MissingCursorChangeError");this.pageInfo=e,this.cursorValue=t,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Nn=class extends Error{constructor(e){super(`No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(e,null,2)}`);$e(this,"name","MissingPageInfo");this.response=e,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},qn=s=>Object.prototype.toString.call(s)==="[object Object]";function Hi(s){const e=Vi(s,"pageInfo");if(e.length===0)throw new Nn(s);return e}var Vi=(s,e,t=[])=>{for(const i of Object.keys(s)){const r=[...t,i],n=s[i];if(qn(n)){if(n.hasOwnProperty(e))return r;const o=Vi(n,e,r);if(o.length>0)return o}}return[]},Bt=(s,e)=>e.reduce((t,i)=>t[i],s),qr=(s,e,t)=>{const i=e[e.length-1],r=[...e].slice(0,-1),n=Bt(s,r);typeof t=="function"?n[i]=t(n[i]):n[i]=t},Hn=s=>{const e=Hi(s);return{pathInQuery:e,pageInfo:Bt(s,[...e,"pageInfo"])}},Wi=s=>s.hasOwnProperty("hasNextPage"),Vn=s=>Wi(s)?s.endCursor:s.startCursor,Wn=s=>Wi(s)?s.hasNextPage:s.hasPreviousPage,Zi=s=>(e,t={})=>{let i=!0,r={...t};return{[Symbol.asyncIterator]:()=>({async next(){if(!i)return{done:!0,value:{}};const n=await s.graphql(e,r),o=Hn(n),a=Vn(o.pageInfo);if(i=Wn(o.pageInfo),i&&a===r.cursor)throw new Mn(o,a);return r={...r,cursor:a},{done:!1,value:n}}})}},Zn=(s,e)=>{if(Object.keys(s).length===0)return Object.assign(s,e);const t=Hi(s),i=[...t,"nodes"],r=Bt(e,i);r&&qr(s,i,c=>[...c,...r]);const n=[...t,"edges"],o=Bt(e,n);o&&qr(s,n,c=>[...c,...o]);const a=[...t,"pageInfo"];return qr(s,a,Bt(e,a)),s},Kn=s=>{const e=Zi(s);return async(t,i={})=>{let r={};for await(const n of e(t,i))r=Zn(r,n);return r}};function Jn(s){return{graphql:Object.assign(s.graphql,{paginate:Object.assign(Kn(s),{iterator:Zi(s)})})}}const Yn="13.2.6",Xn={actions:{addCustomLabelsToSelfHostedRunnerForOrg:["POST /orgs/{org}/actions/runners/{runner_id}/labels"],addCustomLabelsToSelfHostedRunnerForRepo:["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],addSelectedRepoToOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],addSelectedRepoToOrgVariable:["PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"],approveWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"],cancelWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],createEnvironmentVariable:["POST /repos/{owner}/{repo}/environments/{environment_name}/variables"],createOrUpdateEnvironmentSecret:["PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],createOrUpdateOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],createOrgVariable:["POST /orgs/{org}/actions/variables"],createRegistrationTokenForOrg:["POST /orgs/{org}/actions/runners/registration-token"],createRegistrationTokenForRepo:["POST /repos/{owner}/{repo}/actions/runners/registration-token"],createRemoveTokenForOrg:["POST /orgs/{org}/actions/runners/remove-token"],createRemoveTokenForRepo:["POST /repos/{owner}/{repo}/actions/runners/remove-token"],createRepoVariable:["POST /repos/{owner}/{repo}/actions/variables"],createWorkflowDispatch:["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"],deleteActionsCacheById:["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"],deleteActionsCacheByKey:["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"],deleteArtifact:["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],deleteEnvironmentSecret:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],deleteEnvironmentVariable:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],deleteOrgSecret:["DELETE /orgs/{org}/actions/secrets/{secret_name}"],deleteOrgVariable:["DELETE /orgs/{org}/actions/variables/{name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],deleteRepoVariable:["DELETE /repos/{owner}/{repo}/actions/variables/{name}"],deleteSelfHostedRunnerFromOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}"],deleteSelfHostedRunnerFromRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"],deleteWorkflowRun:["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],deleteWorkflowRunLogs:["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],disableSelectedRepositoryGithubActionsOrganization:["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"],disableWorkflow:["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"],downloadArtifact:["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"],downloadJobLogsForWorkflowRun:["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],downloadWorkflowRunAttemptLogs:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"],downloadWorkflowRunLogs:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],enableSelectedRepositoryGithubActionsOrganization:["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"],enableWorkflow:["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"],forceCancelWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"],generateRunnerJitconfigForOrg:["POST /orgs/{org}/actions/runners/generate-jitconfig"],generateRunnerJitconfigForRepo:["POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"],getActionsCacheList:["GET /repos/{owner}/{repo}/actions/caches"],getActionsCacheUsage:["GET /repos/{owner}/{repo}/actions/cache/usage"],getActionsCacheUsageByRepoForOrg:["GET /orgs/{org}/actions/cache/usage-by-repository"],getActionsCacheUsageForOrg:["GET /orgs/{org}/actions/cache/usage"],getAllowedActionsOrganization:["GET /orgs/{org}/actions/permissions/selected-actions"],getAllowedActionsRepository:["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"],getArtifact:["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],getCustomOidcSubClaimForRepo:["GET /repos/{owner}/{repo}/actions/oidc/customization/sub"],getEnvironmentPublicKey:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"],getEnvironmentSecret:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],getEnvironmentVariable:["GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],getGithubActionsDefaultWorkflowPermissionsOrganization:["GET /orgs/{org}/actions/permissions/workflow"],getGithubActionsDefaultWorkflowPermissionsRepository:["GET /repos/{owner}/{repo}/actions/permissions/workflow"],getGithubActionsPermissionsOrganization:["GET /orgs/{org}/actions/permissions"],getGithubActionsPermissionsRepository:["GET /repos/{owner}/{repo}/actions/permissions"],getJobForWorkflowRun:["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],getOrgPublicKey:["GET /orgs/{org}/actions/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/actions/secrets/{secret_name}"],getOrgVariable:["GET /orgs/{org}/actions/variables/{name}"],getPendingDeploymentsForRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],getRepoPermissions:["GET /repos/{owner}/{repo}/actions/permissions",{},{renamed:["actions","getGithubActionsPermissionsRepository"]}],getRepoPublicKey:["GET /repos/{owner}/{repo}/actions/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],getRepoVariable:["GET /repos/{owner}/{repo}/actions/variables/{name}"],getReviewsForRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"],getSelfHostedRunnerForOrg:["GET /orgs/{org}/actions/runners/{runner_id}"],getSelfHostedRunnerForRepo:["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],getWorkflow:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],getWorkflowAccessToRepository:["GET /repos/{owner}/{repo}/actions/permissions/access"],getWorkflowRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],getWorkflowRunAttempt:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"],getWorkflowRunUsage:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],getWorkflowUsage:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],listArtifactsForRepo:["GET /repos/{owner}/{repo}/actions/artifacts"],listEnvironmentSecrets:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"],listEnvironmentVariables:["GET /repos/{owner}/{repo}/environments/{environment_name}/variables"],listJobsForWorkflowRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],listJobsForWorkflowRunAttempt:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"],listLabelsForSelfHostedRunnerForOrg:["GET /orgs/{org}/actions/runners/{runner_id}/labels"],listLabelsForSelfHostedRunnerForRepo:["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],listOrgSecrets:["GET /orgs/{org}/actions/secrets"],listOrgVariables:["GET /orgs/{org}/actions/variables"],listRepoOrganizationSecrets:["GET /repos/{owner}/{repo}/actions/organization-secrets"],listRepoOrganizationVariables:["GET /repos/{owner}/{repo}/actions/organization-variables"],listRepoSecrets:["GET /repos/{owner}/{repo}/actions/secrets"],listRepoVariables:["GET /repos/{owner}/{repo}/actions/variables"],listRepoWorkflows:["GET /repos/{owner}/{repo}/actions/workflows"],listRunnerApplicationsForOrg:["GET /orgs/{org}/actions/runners/downloads"],listRunnerApplicationsForRepo:["GET /repos/{owner}/{repo}/actions/runners/downloads"],listSelectedReposForOrgSecret:["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"],listSelectedReposForOrgVariable:["GET /orgs/{org}/actions/variables/{name}/repositories"],listSelectedRepositoriesEnabledGithubActionsOrganization:["GET /orgs/{org}/actions/permissions/repositories"],listSelfHostedRunnersForOrg:["GET /orgs/{org}/actions/runners"],listSelfHostedRunnersForRepo:["GET /repos/{owner}/{repo}/actions/runners"],listWorkflowRunArtifacts:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],listWorkflowRuns:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],listWorkflowRunsForRepo:["GET /repos/{owner}/{repo}/actions/runs"],reRunJobForWorkflowRun:["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"],reRunWorkflow:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],reRunWorkflowFailedJobs:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"],removeAllCustomLabelsFromSelfHostedRunnerForOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"],removeAllCustomLabelsFromSelfHostedRunnerForRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],removeCustomLabelFromSelfHostedRunnerForOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"],removeCustomLabelFromSelfHostedRunnerForRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],removeSelectedRepoFromOrgVariable:["DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"],reviewCustomGatesForRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"],reviewPendingDeploymentsForRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],setAllowedActionsOrganization:["PUT /orgs/{org}/actions/permissions/selected-actions"],setAllowedActionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"],setCustomLabelsForSelfHostedRunnerForOrg:["PUT /orgs/{org}/actions/runners/{runner_id}/labels"],setCustomLabelsForSelfHostedRunnerForRepo:["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],setCustomOidcSubClaimForRepo:["PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"],setGithubActionsDefaultWorkflowPermissionsOrganization:["PUT /orgs/{org}/actions/permissions/workflow"],setGithubActionsDefaultWorkflowPermissionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions/workflow"],setGithubActionsPermissionsOrganization:["PUT /orgs/{org}/actions/permissions"],setGithubActionsPermissionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"],setSelectedReposForOrgVariable:["PUT /orgs/{org}/actions/variables/{name}/repositories"],setSelectedRepositoriesEnabledGithubActionsOrganization:["PUT /orgs/{org}/actions/permissions/repositories"],setWorkflowAccessToRepository:["PUT /repos/{owner}/{repo}/actions/permissions/access"],updateEnvironmentVariable:["PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],updateOrgVariable:["PATCH /orgs/{org}/actions/variables/{name}"],updateRepoVariable:["PATCH /repos/{owner}/{repo}/actions/variables/{name}"]},activity:{checkRepoIsStarredByAuthenticatedUser:["GET /user/starred/{owner}/{repo}"],deleteRepoSubscription:["DELETE /repos/{owner}/{repo}/subscription"],deleteThreadSubscription:["DELETE /notifications/threads/{thread_id}/subscription"],getFeeds:["GET /feeds"],getRepoSubscription:["GET /repos/{owner}/{repo}/subscription"],getThread:["GET /notifications/threads/{thread_id}"],getThreadSubscriptionForAuthenticatedUser:["GET /notifications/threads/{thread_id}/subscription"],listEventsForAuthenticatedUser:["GET /users/{username}/events"],listNotificationsForAuthenticatedUser:["GET /notifications"],listOrgEventsForAuthenticatedUser:["GET /users/{username}/events/orgs/{org}"],listPublicEvents:["GET /events"],listPublicEventsForRepoNetwork:["GET /networks/{owner}/{repo}/events"],listPublicEventsForUser:["GET /users/{username}/events/public"],listPublicOrgEvents:["GET /orgs/{org}/events"],listReceivedEventsForUser:["GET /users/{username}/received_events"],listReceivedPublicEventsForUser:["GET /users/{username}/received_events/public"],listRepoEvents:["GET /repos/{owner}/{repo}/events"],listRepoNotificationsForAuthenticatedUser:["GET /repos/{owner}/{repo}/notifications"],listReposStarredByAuthenticatedUser:["GET /user/starred"],listReposStarredByUser:["GET /users/{username}/starred"],listReposWatchedByUser:["GET /users/{username}/subscriptions"],listStargazersForRepo:["GET /repos/{owner}/{repo}/stargazers"],listWatchedReposForAuthenticatedUser:["GET /user/subscriptions"],listWatchersForRepo:["GET /repos/{owner}/{repo}/subscribers"],markNotificationsAsRead:["PUT /notifications"],markRepoNotificationsAsRead:["PUT /repos/{owner}/{repo}/notifications"],markThreadAsDone:["DELETE /notifications/threads/{thread_id}"],markThreadAsRead:["PATCH /notifications/threads/{thread_id}"],setRepoSubscription:["PUT /repos/{owner}/{repo}/subscription"],setThreadSubscription:["PUT /notifications/threads/{thread_id}/subscription"],starRepoForAuthenticatedUser:["PUT /user/starred/{owner}/{repo}"],unstarRepoForAuthenticatedUser:["DELETE /user/starred/{owner}/{repo}"]},apps:{addRepoToInstallation:["PUT /user/installations/{installation_id}/repositories/{repository_id}",{},{renamed:["apps","addRepoToInstallationForAuthenticatedUser"]}],addRepoToInstallationForAuthenticatedUser:["PUT /user/installations/{installation_id}/repositories/{repository_id}"],checkToken:["POST /applications/{client_id}/token"],createFromManifest:["POST /app-manifests/{code}/conversions"],createInstallationAccessToken:["POST /app/installations/{installation_id}/access_tokens"],deleteAuthorization:["DELETE /applications/{client_id}/grant"],deleteInstallation:["DELETE /app/installations/{installation_id}"],deleteToken:["DELETE /applications/{client_id}/token"],getAuthenticated:["GET /app"],getBySlug:["GET /apps/{app_slug}"],getInstallation:["GET /app/installations/{installation_id}"],getOrgInstallation:["GET /orgs/{org}/installation"],getRepoInstallation:["GET /repos/{owner}/{repo}/installation"],getSubscriptionPlanForAccount:["GET /marketplace_listing/accounts/{account_id}"],getSubscriptionPlanForAccountStubbed:["GET /marketplace_listing/stubbed/accounts/{account_id}"],getUserInstallation:["GET /users/{username}/installation"],getWebhookConfigForApp:["GET /app/hook/config"],getWebhookDelivery:["GET /app/hook/deliveries/{delivery_id}"],listAccountsForPlan:["GET /marketplace_listing/plans/{plan_id}/accounts"],listAccountsForPlanStubbed:["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],listInstallationReposForAuthenticatedUser:["GET /user/installations/{installation_id}/repositories"],listInstallationRequestsForAuthenticatedApp:["GET /app/installation-requests"],listInstallations:["GET /app/installations"],listInstallationsForAuthenticatedUser:["GET /user/installations"],listPlans:["GET /marketplace_listing/plans"],listPlansStubbed:["GET /marketplace_listing/stubbed/plans"],listReposAccessibleToInstallation:["GET /installation/repositories"],listSubscriptionsForAuthenticatedUser:["GET /user/marketplace_purchases"],listSubscriptionsForAuthenticatedUserStubbed:["GET /user/marketplace_purchases/stubbed"],listWebhookDeliveries:["GET /app/hook/deliveries"],redeliverWebhookDelivery:["POST /app/hook/deliveries/{delivery_id}/attempts"],removeRepoFromInstallation:["DELETE /user/installations/{installation_id}/repositories/{repository_id}",{},{renamed:["apps","removeRepoFromInstallationForAuthenticatedUser"]}],removeRepoFromInstallationForAuthenticatedUser:["DELETE /user/installations/{installation_id}/repositories/{repository_id}"],resetToken:["PATCH /applications/{client_id}/token"],revokeInstallationAccessToken:["DELETE /installation/token"],scopeToken:["POST /applications/{client_id}/token/scoped"],suspendInstallation:["PUT /app/installations/{installation_id}/suspended"],unsuspendInstallation:["DELETE /app/installations/{installation_id}/suspended"],updateWebhookConfigForApp:["PATCH /app/hook/config"]},billing:{getGithubActionsBillingOrg:["GET /orgs/{org}/settings/billing/actions"],getGithubActionsBillingUser:["GET /users/{username}/settings/billing/actions"],getGithubPackagesBillingOrg:["GET /orgs/{org}/settings/billing/packages"],getGithubPackagesBillingUser:["GET /users/{username}/settings/billing/packages"],getSharedStorageBillingOrg:["GET /orgs/{org}/settings/billing/shared-storage"],getSharedStorageBillingUser:["GET /users/{username}/settings/billing/shared-storage"]},checks:{create:["POST /repos/{owner}/{repo}/check-runs"],createSuite:["POST /repos/{owner}/{repo}/check-suites"],get:["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],getSuite:["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],listAnnotations:["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"],listForRef:["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],listForSuite:["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"],listSuitesForRef:["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],rerequestRun:["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"],rerequestSuite:["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"],setSuitesPreferences:["PATCH /repos/{owner}/{repo}/check-suites/preferences"],update:["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]},codeScanning:{deleteAnalysis:["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"],getAlert:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",{},{renamedParameters:{alert_id:"alert_number"}}],getAnalysis:["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"],getCodeqlDatabase:["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"],getDefaultSetup:["GET /repos/{owner}/{repo}/code-scanning/default-setup"],getSarif:["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],listAlertInstances:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"],listAlertsForOrg:["GET /orgs/{org}/code-scanning/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/code-scanning/alerts"],listAlertsInstances:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",{},{renamed:["codeScanning","listAlertInstances"]}],listCodeqlDatabases:["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"],listRecentAnalyses:["GET /repos/{owner}/{repo}/code-scanning/analyses"],updateAlert:["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],updateDefaultSetup:["PATCH /repos/{owner}/{repo}/code-scanning/default-setup"],uploadSarif:["POST /repos/{owner}/{repo}/code-scanning/sarifs"]},codesOfConduct:{getAllCodesOfConduct:["GET /codes_of_conduct"],getConductCode:["GET /codes_of_conduct/{key}"]},codespaces:{addRepositoryForSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"],addSelectedRepoToOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"],checkPermissionsForDevcontainer:["GET /repos/{owner}/{repo}/codespaces/permissions_check"],codespaceMachinesForAuthenticatedUser:["GET /user/codespaces/{codespace_name}/machines"],createForAuthenticatedUser:["POST /user/codespaces"],createOrUpdateOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],createOrUpdateSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}"],createWithPrForAuthenticatedUser:["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"],createWithRepoForAuthenticatedUser:["POST /repos/{owner}/{repo}/codespaces"],deleteForAuthenticatedUser:["DELETE /user/codespaces/{codespace_name}"],deleteFromOrganization:["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"],deleteOrgSecret:["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],deleteSecretForAuthenticatedUser:["DELETE /user/codespaces/secrets/{secret_name}"],exportForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/exports"],getCodespacesForUserInOrg:["GET /orgs/{org}/members/{username}/codespaces"],getExportDetailsForAuthenticatedUser:["GET /user/codespaces/{codespace_name}/exports/{export_id}"],getForAuthenticatedUser:["GET /user/codespaces/{codespace_name}"],getOrgPublicKey:["GET /orgs/{org}/codespaces/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/codespaces/secrets/{secret_name}"],getPublicKeyForAuthenticatedUser:["GET /user/codespaces/secrets/public-key"],getRepoPublicKey:["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],getSecretForAuthenticatedUser:["GET /user/codespaces/secrets/{secret_name}"],listDevcontainersInRepositoryForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/devcontainers"],listForAuthenticatedUser:["GET /user/codespaces"],listInOrganization:["GET /orgs/{org}/codespaces",{},{renamedParameters:{org_id:"org"}}],listInRepositoryForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces"],listOrgSecrets:["GET /orgs/{org}/codespaces/secrets"],listRepoSecrets:["GET /repos/{owner}/{repo}/codespaces/secrets"],listRepositoriesForSecretForAuthenticatedUser:["GET /user/codespaces/secrets/{secret_name}/repositories"],listSecretsForAuthenticatedUser:["GET /user/codespaces/secrets"],listSelectedReposForOrgSecret:["GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"],preFlightWithRepoForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/new"],publishForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/publish"],removeRepositoryForSecretForAuthenticatedUser:["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"],repoMachinesForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/machines"],setRepositoriesForSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}/repositories"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"],startForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/start"],stopForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/stop"],stopInOrganization:["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"],updateForAuthenticatedUser:["PATCH /user/codespaces/{codespace_name}"]},copilot:{addCopilotSeatsForTeams:["POST /orgs/{org}/copilot/billing/selected_teams"],addCopilotSeatsForUsers:["POST /orgs/{org}/copilot/billing/selected_users"],cancelCopilotSeatAssignmentForTeams:["DELETE /orgs/{org}/copilot/billing/selected_teams"],cancelCopilotSeatAssignmentForUsers:["DELETE /orgs/{org}/copilot/billing/selected_users"],getCopilotOrganizationDetails:["GET /orgs/{org}/copilot/billing"],getCopilotSeatDetailsForUser:["GET /orgs/{org}/members/{username}/copilot"],listCopilotSeats:["GET /orgs/{org}/copilot/billing/seats"],usageMetricsForEnterprise:["GET /enterprises/{enterprise}/copilot/usage"],usageMetricsForOrg:["GET /orgs/{org}/copilot/usage"],usageMetricsForTeam:["GET /orgs/{org}/team/{team_slug}/copilot/usage"]},dependabot:{addSelectedRepoToOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"],createOrUpdateOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],deleteOrgSecret:["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],getAlert:["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],getOrgPublicKey:["GET /orgs/{org}/dependabot/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/dependabot/secrets/{secret_name}"],getRepoPublicKey:["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],listAlertsForEnterprise:["GET /enterprises/{enterprise}/dependabot/alerts"],listAlertsForOrg:["GET /orgs/{org}/dependabot/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/dependabot/alerts"],listOrgSecrets:["GET /orgs/{org}/dependabot/secrets"],listRepoSecrets:["GET /repos/{owner}/{repo}/dependabot/secrets"],listSelectedReposForOrgSecret:["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"],updateAlert:["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"]},dependencyGraph:{createRepositorySnapshot:["POST /repos/{owner}/{repo}/dependency-graph/snapshots"],diffRange:["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"],exportSbom:["GET /repos/{owner}/{repo}/dependency-graph/sbom"]},emojis:{get:["GET /emojis"]},gists:{checkIsStarred:["GET /gists/{gist_id}/star"],create:["POST /gists"],createComment:["POST /gists/{gist_id}/comments"],delete:["DELETE /gists/{gist_id}"],deleteComment:["DELETE /gists/{gist_id}/comments/{comment_id}"],fork:["POST /gists/{gist_id}/forks"],get:["GET /gists/{gist_id}"],getComment:["GET /gists/{gist_id}/comments/{comment_id}"],getRevision:["GET /gists/{gist_id}/{sha}"],list:["GET /gists"],listComments:["GET /gists/{gist_id}/comments"],listCommits:["GET /gists/{gist_id}/commits"],listForUser:["GET /users/{username}/gists"],listForks:["GET /gists/{gist_id}/forks"],listPublic:["GET /gists/public"],listStarred:["GET /gists/starred"],star:["PUT /gists/{gist_id}/star"],unstar:["DELETE /gists/{gist_id}/star"],update:["PATCH /gists/{gist_id}"],updateComment:["PATCH /gists/{gist_id}/comments/{comment_id}"]},git:{createBlob:["POST /repos/{owner}/{repo}/git/blobs"],createCommit:["POST /repos/{owner}/{repo}/git/commits"],createRef:["POST /repos/{owner}/{repo}/git/refs"],createTag:["POST /repos/{owner}/{repo}/git/tags"],createTree:["POST /repos/{owner}/{repo}/git/trees"],deleteRef:["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],getBlob:["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],getCommit:["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],getRef:["GET /repos/{owner}/{repo}/git/ref/{ref}"],getTag:["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],getTree:["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],listMatchingRefs:["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],updateRef:["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]},gitignore:{getAllTemplates:["GET /gitignore/templates"],getTemplate:["GET /gitignore/templates/{name}"]},interactions:{getRestrictionsForAuthenticatedUser:["GET /user/interaction-limits"],getRestrictionsForOrg:["GET /orgs/{org}/interaction-limits"],getRestrictionsForRepo:["GET /repos/{owner}/{repo}/interaction-limits"],getRestrictionsForYourPublicRepos:["GET /user/interaction-limits",{},{renamed:["interactions","getRestrictionsForAuthenticatedUser"]}],removeRestrictionsForAuthenticatedUser:["DELETE /user/interaction-limits"],removeRestrictionsForOrg:["DELETE /orgs/{org}/interaction-limits"],removeRestrictionsForRepo:["DELETE /repos/{owner}/{repo}/interaction-limits"],removeRestrictionsForYourPublicRepos:["DELETE /user/interaction-limits",{},{renamed:["interactions","removeRestrictionsForAuthenticatedUser"]}],setRestrictionsForAuthenticatedUser:["PUT /user/interaction-limits"],setRestrictionsForOrg:["PUT /orgs/{org}/interaction-limits"],setRestrictionsForRepo:["PUT /repos/{owner}/{repo}/interaction-limits"],setRestrictionsForYourPublicRepos:["PUT /user/interaction-limits",{},{renamed:["interactions","setRestrictionsForAuthenticatedUser"]}]},issues:{addAssignees:["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],addLabels:["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],checkUserCanBeAssigned:["GET /repos/{owner}/{repo}/assignees/{assignee}"],checkUserCanBeAssignedToIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"],create:["POST /repos/{owner}/{repo}/issues"],createComment:["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],createLabel:["POST /repos/{owner}/{repo}/labels"],createMilestone:["POST /repos/{owner}/{repo}/milestones"],deleteComment:["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],deleteLabel:["DELETE /repos/{owner}/{repo}/labels/{name}"],deleteMilestone:["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],get:["GET /repos/{owner}/{repo}/issues/{issue_number}"],getComment:["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],getEvent:["GET /repos/{owner}/{repo}/issues/events/{event_id}"],getLabel:["GET /repos/{owner}/{repo}/labels/{name}"],getMilestone:["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],list:["GET /issues"],listAssignees:["GET /repos/{owner}/{repo}/assignees"],listComments:["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],listCommentsForRepo:["GET /repos/{owner}/{repo}/issues/comments"],listEvents:["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],listEventsForRepo:["GET /repos/{owner}/{repo}/issues/events"],listEventsForTimeline:["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"],listForAuthenticatedUser:["GET /user/issues"],listForOrg:["GET /orgs/{org}/issues"],listForRepo:["GET /repos/{owner}/{repo}/issues"],listLabelsForMilestone:["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],listLabelsForRepo:["GET /repos/{owner}/{repo}/labels"],listLabelsOnIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],listMilestones:["GET /repos/{owner}/{repo}/milestones"],lock:["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],removeAllLabels:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],removeAssignees:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],removeLabel:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],setLabels:["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],unlock:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],update:["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],updateComment:["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],updateLabel:["PATCH /repos/{owner}/{repo}/labels/{name}"],updateMilestone:["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]},licenses:{get:["GET /licenses/{license}"],getAllCommonlyUsed:["GET /licenses"],getForRepo:["GET /repos/{owner}/{repo}/license"]},markdown:{render:["POST /markdown"],renderRaw:["POST /markdown/raw",{headers:{"content-type":"text/plain; charset=utf-8"}}]},meta:{get:["GET /meta"],getAllVersions:["GET /versions"],getOctocat:["GET /octocat"],getZen:["GET /zen"],root:["GET /"]},migrations:{deleteArchiveForAuthenticatedUser:["DELETE /user/migrations/{migration_id}/archive"],deleteArchiveForOrg:["DELETE /orgs/{org}/migrations/{migration_id}/archive"],downloadArchiveForOrg:["GET /orgs/{org}/migrations/{migration_id}/archive"],getArchiveForAuthenticatedUser:["GET /user/migrations/{migration_id}/archive"],getStatusForAuthenticatedUser:["GET /user/migrations/{migration_id}"],getStatusForOrg:["GET /orgs/{org}/migrations/{migration_id}"],listForAuthenticatedUser:["GET /user/migrations"],listForOrg:["GET /orgs/{org}/migrations"],listReposForAuthenticatedUser:["GET /user/migrations/{migration_id}/repositories"],listReposForOrg:["GET /orgs/{org}/migrations/{migration_id}/repositories"],listReposForUser:["GET /user/migrations/{migration_id}/repositories",{},{renamed:["migrations","listReposForAuthenticatedUser"]}],startForAuthenticatedUser:["POST /user/migrations"],startForOrg:["POST /orgs/{org}/migrations"],unlockRepoForAuthenticatedUser:["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"],unlockRepoForOrg:["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"]},oidc:{getOidcCustomSubTemplateForOrg:["GET /orgs/{org}/actions/oidc/customization/sub"],updateOidcCustomSubTemplateForOrg:["PUT /orgs/{org}/actions/oidc/customization/sub"]},orgs:{addSecurityManagerTeam:["PUT /orgs/{org}/security-managers/teams/{team_slug}"],assignTeamToOrgRole:["PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"],assignUserToOrgRole:["PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"],blockUser:["PUT /orgs/{org}/blocks/{username}"],cancelInvitation:["DELETE /orgs/{org}/invitations/{invitation_id}"],checkBlockedUser:["GET /orgs/{org}/blocks/{username}"],checkMembershipForUser:["GET /orgs/{org}/members/{username}"],checkPublicMembershipForUser:["GET /orgs/{org}/public_members/{username}"],convertMemberToOutsideCollaborator:["PUT /orgs/{org}/outside_collaborators/{username}"],createCustomOrganizationRole:["POST /orgs/{org}/organization-roles"],createInvitation:["POST /orgs/{org}/invitations"],createOrUpdateCustomProperties:["PATCH /orgs/{org}/properties/schema"],createOrUpdateCustomPropertiesValuesForRepos:["PATCH /orgs/{org}/properties/values"],createOrUpdateCustomProperty:["PUT /orgs/{org}/properties/schema/{custom_property_name}"],createWebhook:["POST /orgs/{org}/hooks"],delete:["DELETE /orgs/{org}"],deleteCustomOrganizationRole:["DELETE /orgs/{org}/organization-roles/{role_id}"],deleteWebhook:["DELETE /orgs/{org}/hooks/{hook_id}"],enableOrDisableSecurityProductOnAllOrgRepos:["POST /orgs/{org}/{security_product}/{enablement}"],get:["GET /orgs/{org}"],getAllCustomProperties:["GET /orgs/{org}/properties/schema"],getCustomProperty:["GET /orgs/{org}/properties/schema/{custom_property_name}"],getMembershipForAuthenticatedUser:["GET /user/memberships/orgs/{org}"],getMembershipForUser:["GET /orgs/{org}/memberships/{username}"],getOrgRole:["GET /orgs/{org}/organization-roles/{role_id}"],getWebhook:["GET /orgs/{org}/hooks/{hook_id}"],getWebhookConfigForOrg:["GET /orgs/{org}/hooks/{hook_id}/config"],getWebhookDelivery:["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"],list:["GET /organizations"],listAppInstallations:["GET /orgs/{org}/installations"],listBlockedUsers:["GET /orgs/{org}/blocks"],listCustomPropertiesValuesForRepos:["GET /orgs/{org}/properties/values"],listFailedInvitations:["GET /orgs/{org}/failed_invitations"],listForAuthenticatedUser:["GET /user/orgs"],listForUser:["GET /users/{username}/orgs"],listInvitationTeams:["GET /orgs/{org}/invitations/{invitation_id}/teams"],listMembers:["GET /orgs/{org}/members"],listMembershipsForAuthenticatedUser:["GET /user/memberships/orgs"],listOrgRoleTeams:["GET /orgs/{org}/organization-roles/{role_id}/teams"],listOrgRoleUsers:["GET /orgs/{org}/organization-roles/{role_id}/users"],listOrgRoles:["GET /orgs/{org}/organization-roles"],listOrganizationFineGrainedPermissions:["GET /orgs/{org}/organization-fine-grained-permissions"],listOutsideCollaborators:["GET /orgs/{org}/outside_collaborators"],listPatGrantRepositories:["GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"],listPatGrantRequestRepositories:["GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"],listPatGrantRequests:["GET /orgs/{org}/personal-access-token-requests"],listPatGrants:["GET /orgs/{org}/personal-access-tokens"],listPendingInvitations:["GET /orgs/{org}/invitations"],listPublicMembers:["GET /orgs/{org}/public_members"],listSecurityManagerTeams:["GET /orgs/{org}/security-managers"],listWebhookDeliveries:["GET /orgs/{org}/hooks/{hook_id}/deliveries"],listWebhooks:["GET /orgs/{org}/hooks"],patchCustomOrganizationRole:["PATCH /orgs/{org}/organization-roles/{role_id}"],pingWebhook:["POST /orgs/{org}/hooks/{hook_id}/pings"],redeliverWebhookDelivery:["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],removeCustomProperty:["DELETE /orgs/{org}/properties/schema/{custom_property_name}"],removeMember:["DELETE /orgs/{org}/members/{username}"],removeMembershipForUser:["DELETE /orgs/{org}/memberships/{username}"],removeOutsideCollaborator:["DELETE /orgs/{org}/outside_collaborators/{username}"],removePublicMembershipForAuthenticatedUser:["DELETE /orgs/{org}/public_members/{username}"],removeSecurityManagerTeam:["DELETE /orgs/{org}/security-managers/teams/{team_slug}"],reviewPatGrantRequest:["POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"],reviewPatGrantRequestsInBulk:["POST /orgs/{org}/personal-access-token-requests"],revokeAllOrgRolesTeam:["DELETE /orgs/{org}/organization-roles/teams/{team_slug}"],revokeAllOrgRolesUser:["DELETE /orgs/{org}/organization-roles/users/{username}"],revokeOrgRoleTeam:["DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"],revokeOrgRoleUser:["DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"],setMembershipForUser:["PUT /orgs/{org}/memberships/{username}"],setPublicMembershipForAuthenticatedUser:["PUT /orgs/{org}/public_members/{username}"],unblockUser:["DELETE /orgs/{org}/blocks/{username}"],update:["PATCH /orgs/{org}"],updateMembershipForAuthenticatedUser:["PATCH /user/memberships/orgs/{org}"],updatePatAccess:["POST /orgs/{org}/personal-access-tokens/{pat_id}"],updatePatAccesses:["POST /orgs/{org}/personal-access-tokens"],updateWebhook:["PATCH /orgs/{org}/hooks/{hook_id}"],updateWebhookConfigForOrg:["PATCH /orgs/{org}/hooks/{hook_id}/config"]},packages:{deletePackageForAuthenticatedUser:["DELETE /user/packages/{package_type}/{package_name}"],deletePackageForOrg:["DELETE /orgs/{org}/packages/{package_type}/{package_name}"],deletePackageForUser:["DELETE /users/{username}/packages/{package_type}/{package_name}"],deletePackageVersionForAuthenticatedUser:["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],deletePackageVersionForOrg:["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],deletePackageVersionForUser:["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],getAllPackageVersionsForAPackageOwnedByAnOrg:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions",{},{renamed:["packages","getAllPackageVersionsForPackageOwnedByOrg"]}],getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions",{},{renamed:["packages","getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]}],getAllPackageVersionsForPackageOwnedByAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions"],getAllPackageVersionsForPackageOwnedByOrg:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"],getAllPackageVersionsForPackageOwnedByUser:["GET /users/{username}/packages/{package_type}/{package_name}/versions"],getPackageForAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}"],getPackageForOrganization:["GET /orgs/{org}/packages/{package_type}/{package_name}"],getPackageForUser:["GET /users/{username}/packages/{package_type}/{package_name}"],getPackageVersionForAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],getPackageVersionForOrganization:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],getPackageVersionForUser:["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],listDockerMigrationConflictingPackagesForAuthenticatedUser:["GET /user/docker/conflicts"],listDockerMigrationConflictingPackagesForOrganization:["GET /orgs/{org}/docker/conflicts"],listDockerMigrationConflictingPackagesForUser:["GET /users/{username}/docker/conflicts"],listPackagesForAuthenticatedUser:["GET /user/packages"],listPackagesForOrganization:["GET /orgs/{org}/packages"],listPackagesForUser:["GET /users/{username}/packages"],restorePackageForAuthenticatedUser:["POST /user/packages/{package_type}/{package_name}/restore{?token}"],restorePackageForOrg:["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"],restorePackageForUser:["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"],restorePackageVersionForAuthenticatedUser:["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],restorePackageVersionForOrg:["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],restorePackageVersionForUser:["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]},projects:{addCollaborator:["PUT /projects/{project_id}/collaborators/{username}"],createCard:["POST /projects/columns/{column_id}/cards"],createColumn:["POST /projects/{project_id}/columns"],createForAuthenticatedUser:["POST /user/projects"],createForOrg:["POST /orgs/{org}/projects"],createForRepo:["POST /repos/{owner}/{repo}/projects"],delete:["DELETE /projects/{project_id}"],deleteCard:["DELETE /projects/columns/cards/{card_id}"],deleteColumn:["DELETE /projects/columns/{column_id}"],get:["GET /projects/{project_id}"],getCard:["GET /projects/columns/cards/{card_id}"],getColumn:["GET /projects/columns/{column_id}"],getPermissionForUser:["GET /projects/{project_id}/collaborators/{username}/permission"],listCards:["GET /projects/columns/{column_id}/cards"],listCollaborators:["GET /projects/{project_id}/collaborators"],listColumns:["GET /projects/{project_id}/columns"],listForOrg:["GET /orgs/{org}/projects"],listForRepo:["GET /repos/{owner}/{repo}/projects"],listForUser:["GET /users/{username}/projects"],moveCard:["POST /projects/columns/cards/{card_id}/moves"],moveColumn:["POST /projects/columns/{column_id}/moves"],removeCollaborator:["DELETE /projects/{project_id}/collaborators/{username}"],update:["PATCH /projects/{project_id}"],updateCard:["PATCH /projects/columns/cards/{card_id}"],updateColumn:["PATCH /projects/columns/{column_id}"]},pulls:{checkIfMerged:["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],create:["POST /repos/{owner}/{repo}/pulls"],createReplyForReviewComment:["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"],createReview:["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],createReviewComment:["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],deletePendingReview:["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],deleteReviewComment:["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],dismissReview:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"],get:["GET /repos/{owner}/{repo}/pulls/{pull_number}"],getReview:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],getReviewComment:["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],list:["GET /repos/{owner}/{repo}/pulls"],listCommentsForReview:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"],listCommits:["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],listFiles:["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],listRequestedReviewers:["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],listReviewComments:["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],listReviewCommentsForRepo:["GET /repos/{owner}/{repo}/pulls/comments"],listReviews:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],merge:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],removeRequestedReviewers:["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],requestReviewers:["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],submitReview:["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],update:["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],updateBranch:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"],updateReview:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],updateReviewComment:["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]},rateLimit:{get:["GET /rate_limit"]},reactions:{createForCommitComment:["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"],createForIssue:["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"],createForIssueComment:["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"],createForPullRequestReviewComment:["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"],createForRelease:["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"],createForTeamDiscussionCommentInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"],createForTeamDiscussionInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"],deleteForCommitComment:["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"],deleteForIssue:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"],deleteForIssueComment:["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"],deleteForPullRequestComment:["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"],deleteForRelease:["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"],deleteForTeamDiscussion:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"],deleteForTeamDiscussionComment:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"],listForCommitComment:["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"],listForIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],listForIssueComment:["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"],listForPullRequestReviewComment:["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"],listForRelease:["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"],listForTeamDiscussionCommentInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"],listForTeamDiscussionInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]},repos:{acceptInvitation:["PATCH /user/repository_invitations/{invitation_id}",{},{renamed:["repos","acceptInvitationForAuthenticatedUser"]}],acceptInvitationForAuthenticatedUser:["PATCH /user/repository_invitations/{invitation_id}"],addAppAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],addCollaborator:["PUT /repos/{owner}/{repo}/collaborators/{username}"],addStatusCheckContexts:["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],addTeamAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],addUserAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],cancelPagesDeployment:["POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"],checkAutomatedSecurityFixes:["GET /repos/{owner}/{repo}/automated-security-fixes"],checkCollaborator:["GET /repos/{owner}/{repo}/collaborators/{username}"],checkPrivateVulnerabilityReporting:["GET /repos/{owner}/{repo}/private-vulnerability-reporting"],checkVulnerabilityAlerts:["GET /repos/{owner}/{repo}/vulnerability-alerts"],codeownersErrors:["GET /repos/{owner}/{repo}/codeowners/errors"],compareCommits:["GET /repos/{owner}/{repo}/compare/{base}...{head}"],compareCommitsWithBasehead:["GET /repos/{owner}/{repo}/compare/{basehead}"],createAutolink:["POST /repos/{owner}/{repo}/autolinks"],createCommitComment:["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],createCommitSignatureProtection:["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],createCommitStatus:["POST /repos/{owner}/{repo}/statuses/{sha}"],createDeployKey:["POST /repos/{owner}/{repo}/keys"],createDeployment:["POST /repos/{owner}/{repo}/deployments"],createDeploymentBranchPolicy:["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"],createDeploymentProtectionRule:["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"],createDeploymentStatus:["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],createDispatchEvent:["POST /repos/{owner}/{repo}/dispatches"],createForAuthenticatedUser:["POST /user/repos"],createFork:["POST /repos/{owner}/{repo}/forks"],createInOrg:["POST /orgs/{org}/repos"],createOrUpdateCustomPropertiesValues:["PATCH /repos/{owner}/{repo}/properties/values"],createOrUpdateEnvironment:["PUT /repos/{owner}/{repo}/environments/{environment_name}"],createOrUpdateFileContents:["PUT /repos/{owner}/{repo}/contents/{path}"],createOrgRuleset:["POST /orgs/{org}/rulesets"],createPagesDeployment:["POST /repos/{owner}/{repo}/pages/deployments"],createPagesSite:["POST /repos/{owner}/{repo}/pages"],createRelease:["POST /repos/{owner}/{repo}/releases"],createRepoRuleset:["POST /repos/{owner}/{repo}/rulesets"],createTagProtection:["POST /repos/{owner}/{repo}/tags/protection"],createUsingTemplate:["POST /repos/{template_owner}/{template_repo}/generate"],createWebhook:["POST /repos/{owner}/{repo}/hooks"],declineInvitation:["DELETE /user/repository_invitations/{invitation_id}",{},{renamed:["repos","declineInvitationForAuthenticatedUser"]}],declineInvitationForAuthenticatedUser:["DELETE /user/repository_invitations/{invitation_id}"],delete:["DELETE /repos/{owner}/{repo}"],deleteAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],deleteAdminBranchProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],deleteAnEnvironment:["DELETE /repos/{owner}/{repo}/environments/{environment_name}"],deleteAutolink:["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],deleteBranchProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],deleteCommitComment:["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],deleteCommitSignatureProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],deleteDeployKey:["DELETE /repos/{owner}/{repo}/keys/{key_id}"],deleteDeployment:["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],deleteDeploymentBranchPolicy:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],deleteFile:["DELETE /repos/{owner}/{repo}/contents/{path}"],deleteInvitation:["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],deleteOrgRuleset:["DELETE /orgs/{org}/rulesets/{ruleset_id}"],deletePagesSite:["DELETE /repos/{owner}/{repo}/pages"],deletePullRequestReviewProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],deleteRelease:["DELETE /repos/{owner}/{repo}/releases/{release_id}"],deleteReleaseAsset:["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],deleteRepoRuleset:["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],deleteTagProtection:["DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"],deleteWebhook:["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],disableAutomatedSecurityFixes:["DELETE /repos/{owner}/{repo}/automated-security-fixes"],disableDeploymentProtectionRule:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"],disablePrivateVulnerabilityReporting:["DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"],disableVulnerabilityAlerts:["DELETE /repos/{owner}/{repo}/vulnerability-alerts"],downloadArchive:["GET /repos/{owner}/{repo}/zipball/{ref}",{},{renamed:["repos","downloadZipballArchive"]}],downloadTarballArchive:["GET /repos/{owner}/{repo}/tarball/{ref}"],downloadZipballArchive:["GET /repos/{owner}/{repo}/zipball/{ref}"],enableAutomatedSecurityFixes:["PUT /repos/{owner}/{repo}/automated-security-fixes"],enablePrivateVulnerabilityReporting:["PUT /repos/{owner}/{repo}/private-vulnerability-reporting"],enableVulnerabilityAlerts:["PUT /repos/{owner}/{repo}/vulnerability-alerts"],generateReleaseNotes:["POST /repos/{owner}/{repo}/releases/generate-notes"],get:["GET /repos/{owner}/{repo}"],getAccessRestrictions:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],getAdminBranchProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],getAllDeploymentProtectionRules:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"],getAllEnvironments:["GET /repos/{owner}/{repo}/environments"],getAllStatusCheckContexts:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"],getAllTopics:["GET /repos/{owner}/{repo}/topics"],getAppsWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"],getAutolink:["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],getBranch:["GET /repos/{owner}/{repo}/branches/{branch}"],getBranchProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection"],getBranchRules:["GET /repos/{owner}/{repo}/rules/branches/{branch}"],getClones:["GET /repos/{owner}/{repo}/traffic/clones"],getCodeFrequencyStats:["GET /repos/{owner}/{repo}/stats/code_frequency"],getCollaboratorPermissionLevel:["GET /repos/{owner}/{repo}/collaborators/{username}/permission"],getCombinedStatusForRef:["GET /repos/{owner}/{repo}/commits/{ref}/status"],getCommit:["GET /repos/{owner}/{repo}/commits/{ref}"],getCommitActivityStats:["GET /repos/{owner}/{repo}/stats/commit_activity"],getCommitComment:["GET /repos/{owner}/{repo}/comments/{comment_id}"],getCommitSignatureProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],getCommunityProfileMetrics:["GET /repos/{owner}/{repo}/community/profile"],getContent:["GET /repos/{owner}/{repo}/contents/{path}"],getContributorsStats:["GET /repos/{owner}/{repo}/stats/contributors"],getCustomDeploymentProtectionRule:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"],getCustomPropertiesValues:["GET /repos/{owner}/{repo}/properties/values"],getDeployKey:["GET /repos/{owner}/{repo}/keys/{key_id}"],getDeployment:["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],getDeploymentBranchPolicy:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],getDeploymentStatus:["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"],getEnvironment:["GET /repos/{owner}/{repo}/environments/{environment_name}"],getLatestPagesBuild:["GET /repos/{owner}/{repo}/pages/builds/latest"],getLatestRelease:["GET /repos/{owner}/{repo}/releases/latest"],getOrgRuleSuite:["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],getOrgRuleSuites:["GET /orgs/{org}/rulesets/rule-suites"],getOrgRuleset:["GET /orgs/{org}/rulesets/{ruleset_id}"],getOrgRulesets:["GET /orgs/{org}/rulesets"],getPages:["GET /repos/{owner}/{repo}/pages"],getPagesBuild:["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],getPagesDeployment:["GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"],getPagesHealthCheck:["GET /repos/{owner}/{repo}/pages/health"],getParticipationStats:["GET /repos/{owner}/{repo}/stats/participation"],getPullRequestReviewProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],getPunchCardStats:["GET /repos/{owner}/{repo}/stats/punch_card"],getReadme:["GET /repos/{owner}/{repo}/readme"],getReadmeInDirectory:["GET /repos/{owner}/{repo}/readme/{dir}"],getRelease:["GET /repos/{owner}/{repo}/releases/{release_id}"],getReleaseAsset:["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],getReleaseByTag:["GET /repos/{owner}/{repo}/releases/tags/{tag}"],getRepoRuleSuite:["GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"],getRepoRuleSuites:["GET /repos/{owner}/{repo}/rulesets/rule-suites"],getRepoRuleset:["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],getRepoRulesets:["GET /repos/{owner}/{repo}/rulesets"],getStatusChecksProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],getTeamsWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"],getTopPaths:["GET /repos/{owner}/{repo}/traffic/popular/paths"],getTopReferrers:["GET /repos/{owner}/{repo}/traffic/popular/referrers"],getUsersWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"],getViews:["GET /repos/{owner}/{repo}/traffic/views"],getWebhook:["GET /repos/{owner}/{repo}/hooks/{hook_id}"],getWebhookConfigForRepo:["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"],getWebhookDelivery:["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"],listActivities:["GET /repos/{owner}/{repo}/activity"],listAutolinks:["GET /repos/{owner}/{repo}/autolinks"],listBranches:["GET /repos/{owner}/{repo}/branches"],listBranchesForHeadCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"],listCollaborators:["GET /repos/{owner}/{repo}/collaborators"],listCommentsForCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],listCommitCommentsForRepo:["GET /repos/{owner}/{repo}/comments"],listCommitStatusesForRef:["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],listCommits:["GET /repos/{owner}/{repo}/commits"],listContributors:["GET /repos/{owner}/{repo}/contributors"],listCustomDeploymentRuleIntegrations:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"],listDeployKeys:["GET /repos/{owner}/{repo}/keys"],listDeploymentBranchPolicies:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"],listDeploymentStatuses:["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],listDeployments:["GET /repos/{owner}/{repo}/deployments"],listForAuthenticatedUser:["GET /user/repos"],listForOrg:["GET /orgs/{org}/repos"],listForUser:["GET /users/{username}/repos"],listForks:["GET /repos/{owner}/{repo}/forks"],listInvitations:["GET /repos/{owner}/{repo}/invitations"],listInvitationsForAuthenticatedUser:["GET /user/repository_invitations"],listLanguages:["GET /repos/{owner}/{repo}/languages"],listPagesBuilds:["GET /repos/{owner}/{repo}/pages/builds"],listPublic:["GET /repositories"],listPullRequestsAssociatedWithCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"],listReleaseAssets:["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],listReleases:["GET /repos/{owner}/{repo}/releases"],listTagProtection:["GET /repos/{owner}/{repo}/tags/protection"],listTags:["GET /repos/{owner}/{repo}/tags"],listTeams:["GET /repos/{owner}/{repo}/teams"],listWebhookDeliveries:["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"],listWebhooks:["GET /repos/{owner}/{repo}/hooks"],merge:["POST /repos/{owner}/{repo}/merges"],mergeUpstream:["POST /repos/{owner}/{repo}/merge-upstream"],pingWebhook:["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],redeliverWebhookDelivery:["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],removeAppAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],removeCollaborator:["DELETE /repos/{owner}/{repo}/collaborators/{username}"],removeStatusCheckContexts:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],removeStatusCheckProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],removeTeamAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],removeUserAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],renameBranch:["POST /repos/{owner}/{repo}/branches/{branch}/rename"],replaceAllTopics:["PUT /repos/{owner}/{repo}/topics"],requestPagesBuild:["POST /repos/{owner}/{repo}/pages/builds"],setAdminBranchProtection:["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],setAppAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],setStatusCheckContexts:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],setTeamAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],setUserAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],testPushWebhook:["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],transfer:["POST /repos/{owner}/{repo}/transfer"],update:["PATCH /repos/{owner}/{repo}"],updateBranchProtection:["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],updateCommitComment:["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],updateDeploymentBranchPolicy:["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],updateInformationAboutPagesSite:["PUT /repos/{owner}/{repo}/pages"],updateInvitation:["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],updateOrgRuleset:["PUT /orgs/{org}/rulesets/{ruleset_id}"],updatePullRequestReviewProtection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],updateRelease:["PATCH /repos/{owner}/{repo}/releases/{release_id}"],updateReleaseAsset:["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],updateRepoRuleset:["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],updateStatusCheckPotection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",{},{renamed:["repos","updateStatusCheckProtection"]}],updateStatusCheckProtection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],updateWebhook:["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],updateWebhookConfigForRepo:["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"],uploadReleaseAsset:["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",{baseUrl:"https://uploads.github.com"}]},search:{code:["GET /search/code"],commits:["GET /search/commits"],issuesAndPullRequests:["GET /search/issues"],labels:["GET /search/labels"],repos:["GET /search/repositories"],topics:["GET /search/topics"],users:["GET /search/users"]},secretScanning:{getAlert:["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"],listAlertsForEnterprise:["GET /enterprises/{enterprise}/secret-scanning/alerts"],listAlertsForOrg:["GET /orgs/{org}/secret-scanning/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/secret-scanning/alerts"],listLocationsForAlert:["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"],updateAlert:["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]},securityAdvisories:{createFork:["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"],createPrivateVulnerabilityReport:["POST /repos/{owner}/{repo}/security-advisories/reports"],createRepositoryAdvisory:["POST /repos/{owner}/{repo}/security-advisories"],createRepositoryAdvisoryCveRequest:["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"],getGlobalAdvisory:["GET /advisories/{ghsa_id}"],getRepositoryAdvisory:["GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"],listGlobalAdvisories:["GET /advisories"],listOrgRepositoryAdvisories:["GET /orgs/{org}/security-advisories"],listRepositoryAdvisories:["GET /repos/{owner}/{repo}/security-advisories"],updateRepositoryAdvisory:["PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"]},teams:{addOrUpdateMembershipForUserInOrg:["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"],addOrUpdateProjectPermissionsInOrg:["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"],addOrUpdateRepoPermissionsInOrg:["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],checkPermissionsForProjectInOrg:["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"],checkPermissionsForRepoInOrg:["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],create:["POST /orgs/{org}/teams"],createDiscussionCommentInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],createDiscussionInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions"],deleteDiscussionCommentInOrg:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],deleteDiscussionInOrg:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],deleteInOrg:["DELETE /orgs/{org}/teams/{team_slug}"],getByName:["GET /orgs/{org}/teams/{team_slug}"],getDiscussionCommentInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],getDiscussionInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],getMembershipForUserInOrg:["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],list:["GET /orgs/{org}/teams"],listChildInOrg:["GET /orgs/{org}/teams/{team_slug}/teams"],listDiscussionCommentsInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],listDiscussionsInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions"],listForAuthenticatedUser:["GET /user/teams"],listMembersInOrg:["GET /orgs/{org}/teams/{team_slug}/members"],listPendingInvitationsInOrg:["GET /orgs/{org}/teams/{team_slug}/invitations"],listProjectsInOrg:["GET /orgs/{org}/teams/{team_slug}/projects"],listReposInOrg:["GET /orgs/{org}/teams/{team_slug}/repos"],removeMembershipForUserInOrg:["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"],removeProjectInOrg:["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],removeRepoInOrg:["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],updateDiscussionCommentInOrg:["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],updateDiscussionInOrg:["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],updateInOrg:["PATCH /orgs/{org}/teams/{team_slug}"]},users:{addEmailForAuthenticated:["POST /user/emails",{},{renamed:["users","addEmailForAuthenticatedUser"]}],addEmailForAuthenticatedUser:["POST /user/emails"],addSocialAccountForAuthenticatedUser:["POST /user/social_accounts"],block:["PUT /user/blocks/{username}"],checkBlocked:["GET /user/blocks/{username}"],checkFollowingForUser:["GET /users/{username}/following/{target_user}"],checkPersonIsFollowedByAuthenticated:["GET /user/following/{username}"],createGpgKeyForAuthenticated:["POST /user/gpg_keys",{},{renamed:["users","createGpgKeyForAuthenticatedUser"]}],createGpgKeyForAuthenticatedUser:["POST /user/gpg_keys"],createPublicSshKeyForAuthenticated:["POST /user/keys",{},{renamed:["users","createPublicSshKeyForAuthenticatedUser"]}],createPublicSshKeyForAuthenticatedUser:["POST /user/keys"],createSshSigningKeyForAuthenticatedUser:["POST /user/ssh_signing_keys"],deleteEmailForAuthenticated:["DELETE /user/emails",{},{renamed:["users","deleteEmailForAuthenticatedUser"]}],deleteEmailForAuthenticatedUser:["DELETE /user/emails"],deleteGpgKeyForAuthenticated:["DELETE /user/gpg_keys/{gpg_key_id}",{},{renamed:["users","deleteGpgKeyForAuthenticatedUser"]}],deleteGpgKeyForAuthenticatedUser:["DELETE /user/gpg_keys/{gpg_key_id}"],deletePublicSshKeyForAuthenticated:["DELETE /user/keys/{key_id}",{},{renamed:["users","deletePublicSshKeyForAuthenticatedUser"]}],deletePublicSshKeyForAuthenticatedUser:["DELETE /user/keys/{key_id}"],deleteSocialAccountForAuthenticatedUser:["DELETE /user/social_accounts"],deleteSshSigningKeyForAuthenticatedUser:["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"],follow:["PUT /user/following/{username}"],getAuthenticated:["GET /user"],getByUsername:["GET /users/{username}"],getContextForUser:["GET /users/{username}/hovercard"],getGpgKeyForAuthenticated:["GET /user/gpg_keys/{gpg_key_id}",{},{renamed:["users","getGpgKeyForAuthenticatedUser"]}],getGpgKeyForAuthenticatedUser:["GET /user/gpg_keys/{gpg_key_id}"],getPublicSshKeyForAuthenticated:["GET /user/keys/{key_id}",{},{renamed:["users","getPublicSshKeyForAuthenticatedUser"]}],getPublicSshKeyForAuthenticatedUser:["GET /user/keys/{key_id}"],getSshSigningKeyForAuthenticatedUser:["GET /user/ssh_signing_keys/{ssh_signing_key_id}"],list:["GET /users"],listBlockedByAuthenticated:["GET /user/blocks",{},{renamed:["users","listBlockedByAuthenticatedUser"]}],listBlockedByAuthenticatedUser:["GET /user/blocks"],listEmailsForAuthenticated:["GET /user/emails",{},{renamed:["users","listEmailsForAuthenticatedUser"]}],listEmailsForAuthenticatedUser:["GET /user/emails"],listFollowedByAuthenticated:["GET /user/following",{},{renamed:["users","listFollowedByAuthenticatedUser"]}],listFollowedByAuthenticatedUser:["GET /user/following"],listFollowersForAuthenticatedUser:["GET /user/followers"],listFollowersForUser:["GET /users/{username}/followers"],listFollowingForUser:["GET /users/{username}/following"],listGpgKeysForAuthenticated:["GET /user/gpg_keys",{},{renamed:["users","listGpgKeysForAuthenticatedUser"]}],listGpgKeysForAuthenticatedUser:["GET /user/gpg_keys"],listGpgKeysForUser:["GET /users/{username}/gpg_keys"],listPublicEmailsForAuthenticated:["GET /user/public_emails",{},{renamed:["users","listPublicEmailsForAuthenticatedUser"]}],listPublicEmailsForAuthenticatedUser:["GET /user/public_emails"],listPublicKeysForUser:["GET /users/{username}/keys"],listPublicSshKeysForAuthenticated:["GET /user/keys",{},{renamed:["users","listPublicSshKeysForAuthenticatedUser"]}],listPublicSshKeysForAuthenticatedUser:["GET /user/keys"],listSocialAccountsForAuthenticatedUser:["GET /user/social_accounts"],listSocialAccountsForUser:["GET /users/{username}/social_accounts"],listSshSigningKeysForAuthenticatedUser:["GET /user/ssh_signing_keys"],listSshSigningKeysForUser:["GET /users/{username}/ssh_signing_keys"],setPrimaryEmailVisibilityForAuthenticated:["PATCH /user/email/visibility",{},{renamed:["users","setPrimaryEmailVisibilityForAuthenticatedUser"]}],setPrimaryEmailVisibilityForAuthenticatedUser:["PATCH /user/email/visibility"],unblock:["DELETE /user/blocks/{username}"],unfollow:["DELETE /user/following/{username}"],updateAuthenticated:["PATCH /user"]}};var Qn=Xn;const nt=new Map;for(const[s,e]of Object.entries(Qn))for(const[t,i]of Object.entries(e)){const[r,n,o]=i,[a,c]=r.split(/ /),h=Object.assign({method:a,url:c},n);nt.has(s)||nt.set(s,new Map),nt.get(s).set(t,{scope:s,methodName:t,endpointDefaults:h,decorations:o})}const ea={has({scope:s},e){return nt.get(s).has(e)},getOwnPropertyDescriptor(s,e){return{value:this.get(s,e),configurable:!0,writable:!0,enumerable:!0}},defineProperty(s,e,t){return Object.defineProperty(s.cache,e,t),!0},deleteProperty(s,e){return delete s.cache[e],!0},ownKeys({scope:s}){return[...nt.get(s).keys()]},set(s,e,t){return s.cache[e]=t},get({octokit:s,scope:e,cache:t},i){if(t[i])return t[i];const r=nt.get(e).get(i);if(!r)return;const{endpointDefaults:n,decorations:o}=r;return o?t[i]=ra(s,e,i,n,o):t[i]=s.request.defaults(n),t[i]}};function ta(s){const e={};for(const t of nt.keys())e[t]=new Proxy({octokit:s,scope:t,cache:{}},ea);return e}function ra(s,e,t,i,r){const n=s.request.defaults(i);function o(...a){let c=n.endpoint.merge(...a);if(r.mapToData)return c=Object.assign({},c,{data:c[r.mapToData],[r.mapToData]:void 0}),n(c);if(r.renamed){const[h,m]=r.renamed;s.log.warn(`octokit.${e}.${t}() has been renamed to octokit.${h}.${m}()`)}if(r.deprecated&&s.log.warn(r.deprecated),r.renamedParameters){const h=n.endpoint.merge(...a);for(const[m,d]of Object.entries(r.renamedParameters))m in h&&(s.log.warn(`"${m}" parameter is deprecated for "octokit.${e}.${t}()". Use "${d}" instead`),d in h||(h[d]=h[m]),delete h[m]);return n(h)}return n(...a)}return Object.assign(o,n)}function Ki(s){return{rest:ta(s)}}Ki.VERSION=Yn;var Ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vs(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ji={exports:{}};(function(s,e){(function(t,i){s.exports=i()})(Ue,function(){var t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Ue<"u"?Ue:typeof self<"u"?self:{};function i(re){return re&&re.default||re}var r=function(re,O,v={}){var P,U,M;for(P in O)M=O[P],v[P]=(U=re[P])!=null?U:M;return v},n=function(re,O,v={}){var P,U;for(P in re)U=re[P],O[P]!==void 0&&(v[P]=U);return v},o={load:r,overwrite:n},a;a=class{constructor(O,v){this.incr=O,this.decr=v,this._first=null,this._last=null,this.length=0}push(O){var v;this.length++,typeof this.incr=="function"&&this.incr(),v={value:O,prev:this._last,next:null},this._last!=null?(this._last.next=v,this._last=v):this._first=this._last=v}shift(){var O;if(this._first!=null)return this.length--,typeof this.decr=="function"&&this.decr(),O=this._first.value,(this._first=this._first.next)!=null?this._first.prev=null:this._last=null,O}first(){if(this._first!=null)return this._first.value}getArray(){var O,v,P;for(O=this._first,P=[];O!=null;)P.push((v=O,O=O.next,v.value));return P}forEachShift(O){var v;for(v=this.shift();v!=null;)O(v),v=this.shift()}debug(){var O,v,P,U,M;for(O=this._first,M=[];O!=null;)M.push((v=O,O=O.next,{value:v.value,prev:(P=v.prev)!=null?P.value:void 0,next:(U=v.next)!=null?U.value:void 0}));return M}};var c=a,h;h=class{constructor(O){if(this.instance=O,this._events={},this.instance.on!=null||this.instance.once!=null||this.instance.removeAllListeners!=null)throw new Error("An Emitter already exists for this object");this.instance.on=(v,P)=>this._addListener(v,"many",P),this.instance.once=(v,P)=>this._addListener(v,"once",P),this.instance.removeAllListeners=(v=null)=>v!=null?delete this._events[v]:this._events={}}_addListener(O,v,P){var U;return(U=this._events)[O]==null&&(U[O]=[]),this._events[O].push({cb:P,status:v}),this.instance}listenerCount(O){return this._events[O]!=null?this._events[O].length:0}async trigger(O,...v){var P,U;try{return O!=="debug"&&this.trigger("debug",`Event triggered: ${O}`,v),this._events[O]==null?void 0:(this._events[O]=this._events[O].filter(function(M){return M.status!=="none"}),U=this._events[O].map(async M=>{var W,se;if(M.status!=="none"){M.status==="once"&&(M.status="none");try{return se=typeof M.cb=="function"?M.cb(...v):void 0,typeof(se!=null?se.then:void 0)=="function"?await se:se}catch(ve){return W=ve,this.trigger("error",W),null}}}),(await Promise.all(U)).find(function(M){return M!=null}))}catch(M){return P=M,this.trigger("error",P),null}}};var m=h,d,b,p;d=c,b=m,p=class{constructor(O){this.Events=new b(this),this._length=0,this._lists=(function(){var v,P,U;for(U=[],v=1,P=O;1<=P?v<=P:v>=P;1<=P?++v:--v)U.push(new d(()=>this.incr(),()=>this.decr()));return U}).call(this)}incr(){if(this._length++===0)return this.Events.trigger("leftzero")}decr(){if(--this._length===0)return this.Events.trigger("zero")}push(O){return this._lists[O.options.priority].push(O)}queued(O){return O!=null?this._lists[O].length:this._length}shiftAll(O){return this._lists.forEach(function(v){return v.forEachShift(O)})}getFirst(O=this._lists){var v,P,U;for(v=0,P=O.length;v<P;v++)if(U=O[v],U.length>0)return U;return[]}shiftLastFrom(O){return this.getFirst(this._lists.slice(O).reverse()).shift()}};var w=p,f;f=class extends Error{};var g=f,y,k,S,C,A;C=10,k=5,A=o,y=g,S=class{constructor(O,v,P,U,M,W,se,ve){this.task=O,this.args=v,this.rejectOnDrop=M,this.Events=W,this._states=se,this.Promise=ve,this.options=A.load(P,U),this.options.priority=this._sanitizePriority(this.options.priority),this.options.id===U.id&&(this.options.id=`${this.options.id}-${this._randomIndex()}`),this.promise=new this.Promise((xe,Oe)=>{this._resolve=xe,this._reject=Oe}),this.retryCount=0}_sanitizePriority(O){var v;return v=~~O!==O?k:O,v<0?0:v>C-1?C-1:v}_randomIndex(){return Math.random().toString(36).slice(2)}doDrop({error:O,message:v="This job has been dropped by Bottleneck"}={}){return this._states.remove(this.options.id)?(this.rejectOnDrop&&this._reject(O??new y(v)),this.Events.trigger("dropped",{args:this.args,options:this.options,task:this.task,promise:this.promise}),!0):!1}_assertStatus(O){var v;if(v=this._states.jobStatus(this.options.id),!(v===O||O==="DONE"&&v===null))throw new y(`Invalid job status ${v}, expected ${O}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`)}doReceive(){return this._states.start(this.options.id),this.Events.trigger("received",{args:this.args,options:this.options})}doQueue(O,v){return this._assertStatus("RECEIVED"),this._states.next(this.options.id),this.Events.trigger("queued",{args:this.args,options:this.options,reachedHWM:O,blocked:v})}doRun(){return this.retryCount===0?(this._assertStatus("QUEUED"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),this.Events.trigger("scheduled",{args:this.args,options:this.options})}async doExecute(O,v,P,U){var M,W,se;this.retryCount===0?(this._assertStatus("RUNNING"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),W={args:this.args,options:this.options,retryCount:this.retryCount},this.Events.trigger("executing",W);try{if(se=await(O!=null?O.schedule(this.options,this.task,...this.args):this.task(...this.args)),v())return this.doDone(W),await U(this.options,W),this._assertStatus("DONE"),this._resolve(se)}catch(ve){return M=ve,this._onFailure(M,W,v,P,U)}}doExpire(O,v,P){var U,M;return this._states.jobStatus(this.options.id==="RUNNING")&&this._states.next(this.options.id),this._assertStatus("EXECUTING"),M={args:this.args,options:this.options,retryCount:this.retryCount},U=new y(`This job timed out after ${this.options.expiration} ms.`),this._onFailure(U,M,O,v,P)}async _onFailure(O,v,P,U,M){var W,se;if(P())return W=await this.Events.trigger("failed",O,v),W!=null?(se=~~W,this.Events.trigger("retry",`Retrying ${this.options.id} after ${se} ms`,v),this.retryCount++,U(se)):(this.doDone(v),await M(this.options,v),this._assertStatus("DONE"),this._reject(O))}doDone(O){return this._assertStatus("EXECUTING"),this._states.next(this.options.id),this.Events.trigger("done",O)}};var B=S,F,V,G;G=o,F=g,V=class{constructor(O,v,P){this.instance=O,this.storeOptions=v,this.clientId=this.instance._randomIndex(),G.load(P,P,this),this._nextRequest=this._lastReservoirRefresh=this._lastReservoirIncrease=Date.now(),this._running=0,this._done=0,this._unblockTime=0,this.ready=this.Promise.resolve(),this.clients={},this._startHeartbeat()}_startHeartbeat(){var O;return this.heartbeat==null&&(this.storeOptions.reservoirRefreshInterval!=null&&this.storeOptions.reservoirRefreshAmount!=null||this.storeOptions.reservoirIncreaseInterval!=null&&this.storeOptions.reservoirIncreaseAmount!=null)?typeof(O=this.heartbeat=setInterval(()=>{var v,P,U,M,W;if(M=Date.now(),this.storeOptions.reservoirRefreshInterval!=null&&M>=this._lastReservoirRefresh+this.storeOptions.reservoirRefreshInterval&&(this._lastReservoirRefresh=M,this.storeOptions.reservoir=this.storeOptions.reservoirRefreshAmount,this.instance._drainAll(this.computeCapacity())),this.storeOptions.reservoirIncreaseInterval!=null&&M>=this._lastReservoirIncrease+this.storeOptions.reservoirIncreaseInterval&&({reservoirIncreaseAmount:v,reservoirIncreaseMaximum:U,reservoir:W}=this.storeOptions,this._lastReservoirIncrease=M,P=U!=null?Math.min(v,U-W):v,P>0))return this.storeOptions.reservoir+=P,this.instance._drainAll(this.computeCapacity())},this.heartbeatInterval)).unref=="function"?O.unref():void 0:clearInterval(this.heartbeat)}async __publish__(O){return await this.yieldLoop(),this.instance.Events.trigger("message",O.toString())}async __disconnect__(O){return await this.yieldLoop(),clearInterval(this.heartbeat),this.Promise.resolve()}yieldLoop(O=0){return new this.Promise(function(v,P){return setTimeout(v,O)})}computePenalty(){var O;return(O=this.storeOptions.penalty)!=null?O:15*this.storeOptions.minTime||5e3}async __updateSettings__(O){return await this.yieldLoop(),G.overwrite(O,O,this.storeOptions),this._startHeartbeat(),this.instance._drainAll(this.computeCapacity()),!0}async __running__(){return await this.yieldLoop(),this._running}async __queued__(){return await this.yieldLoop(),this.instance.queued()}async __done__(){return await this.yieldLoop(),this._done}async __groupCheck__(O){return await this.yieldLoop(),this._nextRequest+this.timeout<O}computeCapacity(){var O,v;return{maxConcurrent:O,reservoir:v}=this.storeOptions,O!=null&&v!=null?Math.min(O-this._running,v):O!=null?O-this._running:v??null}conditionsCheck(O){var v;return v=this.computeCapacity(),v==null||O<=v}async __incrementReservoir__(O){var v;return await this.yieldLoop(),v=this.storeOptions.reservoir+=O,this.instance._drainAll(this.computeCapacity()),v}async __currentReservoir__(){return await this.yieldLoop(),this.storeOptions.reservoir}isBlocked(O){return this._unblockTime>=O}check(O,v){return this.conditionsCheck(O)&&this._nextRequest-v<=0}async __check__(O){var v;return await this.yieldLoop(),v=Date.now(),this.check(O,v)}async __register__(O,v,P){var U,M;return await this.yieldLoop(),U=Date.now(),this.conditionsCheck(v)?(this._running+=v,this.storeOptions.reservoir!=null&&(this.storeOptions.reservoir-=v),M=Math.max(this._nextRequest-U,0),this._nextRequest=U+M+this.storeOptions.minTime,{success:!0,wait:M,reservoir:this.storeOptions.reservoir}):{success:!1}}strategyIsBlock(){return this.storeOptions.strategy===3}async __submit__(O,v){var P,U,M;if(await this.yieldLoop(),this.storeOptions.maxConcurrent!=null&&v>this.storeOptions.maxConcurrent)throw new F(`Impossible to add a job having a weight of ${v} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`);return U=Date.now(),M=this.storeOptions.highWater!=null&&O===this.storeOptions.highWater&&!this.check(v,U),P=this.strategyIsBlock()&&(M||this.isBlocked(U)),P&&(this._unblockTime=U+this.computePenalty(),this._nextRequest=this._unblockTime+this.storeOptions.minTime,this.instance._dropAllQueued()),{reachedHWM:M,blocked:P,strategy:this.storeOptions.strategy}}async __free__(O,v){return await this.yieldLoop(),this._running-=v,this._done+=v,this.instance._drainAll(this.computeCapacity()),{running:this._running}}};var X=V,ae,T;ae=g,T=class{constructor(O){this.status=O,this._jobs={},this.counts=this.status.map(function(){return 0})}next(O){var v,P;if(v=this._jobs[O],P=v+1,v!=null&&P<this.status.length)return this.counts[v]--,this.counts[P]++,this._jobs[O]++;if(v!=null)return this.counts[v]--,delete this._jobs[O]}start(O){var v;return v=0,this._jobs[O]=v,this.counts[v]++}remove(O){var v;return v=this._jobs[O],v!=null&&(this.counts[v]--,delete this._jobs[O]),v!=null}jobStatus(O){var v;return(v=this.status[this._jobs[O]])!=null?v:null}statusJobs(O){var v,P,U,M,W;if(O!=null){if(P=this.status.indexOf(O),P<0)throw new ae(`status must be one of ${this.status.join(", ")}`);U=this._jobs,M=[];for(v in U)W=U[v],W===P&&M.push(v);return M}else return Object.keys(this._jobs)}statusCounts(){return this.counts.reduce((O,v,P)=>(O[this.status[P]]=v,O),{})}};var j=T,u,z;u=c,z=class{constructor(O,v){this.schedule=this.schedule.bind(this),this.name=O,this.Promise=v,this._running=0,this._queue=new u}isEmpty(){return this._queue.length===0}async _tryToRun(){var O,v,P,U,M,W,se;if(this._running<1&&this._queue.length>0)return this._running++,{task:se,args:O,resolve:M,reject:U}=this._queue.shift(),v=await async function(){try{return W=await se(...O),function(){return M(W)}}catch(ve){return P=ve,function(){return U(P)}}}(),this._running--,this._tryToRun(),v()}schedule(O,...v){var P,U,M;return M=U=null,P=new this.Promise(function(W,se){return M=W,U=se}),this._queue.push({task:O,args:v,resolve:M,reject:U}),this._tryToRun(),P}};var ue=z,H="2.19.5",de={version:H},Z=Object.freeze({version:H,default:de}),le=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),D=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),R=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),ne,ee,Q,Ee,Se,pe;pe=o,ne=m,Ee=le,Q=D,Se=R,ee=(function(){class re{constructor(v={}){this.deleteKey=this.deleteKey.bind(this),this.limiterOptions=v,pe.load(this.limiterOptions,this.defaults,this),this.Events=new ne(this),this.instances={},this.Bottleneck=he,this._startAutoCleanup(),this.sharedConnection=this.connection!=null,this.connection==null&&(this.limiterOptions.datastore==="redis"?this.connection=new Ee(Object.assign({},this.limiterOptions,{Events:this.Events})):this.limiterOptions.datastore==="ioredis"&&(this.connection=new Q(Object.assign({},this.limiterOptions,{Events:this.Events}))))}key(v=""){var P;return(P=this.instances[v])!=null?P:(()=>{var U;return U=this.instances[v]=new this.Bottleneck(Object.assign(this.limiterOptions,{id:`${this.id}-${v}`,timeout:this.timeout,connection:this.connection})),this.Events.trigger("created",U,v),U})()}async deleteKey(v=""){var P,U;return U=this.instances[v],this.connection&&(P=await this.connection.__runCommand__(["del",...Se.allKeys(`${this.id}-${v}`)])),U!=null&&(delete this.instances[v],await U.disconnect()),U!=null||P>0}limiters(){var v,P,U,M;P=this.instances,U=[];for(v in P)M=P[v],U.push({key:v,limiter:M});return U}keys(){return Object.keys(this.instances)}async clusterKeys(){var v,P,U,M,W,se,ve,xe,Oe;if(this.connection==null)return this.Promise.resolve(this.keys());for(se=[],v=null,Oe=`b_${this.id}-`.length,P=9;v!==0;)for([xe,U]=await this.connection.__runCommand__(["scan",v??0,"match",`b_${this.id}-*_settings`,"count",1e4]),v=~~xe,M=0,ve=U.length;M<ve;M++)W=U[M],se.push(W.slice(Oe,-P));return se}_startAutoCleanup(){var v;return clearInterval(this.interval),typeof(v=this.interval=setInterval(async()=>{var P,U,M,W,se,ve;se=Date.now(),M=this.instances,W=[];for(U in M){ve=M[U];try{await ve._store.__groupCheck__(se)?W.push(this.deleteKey(U)):W.push(void 0)}catch(xe){P=xe,W.push(ve.Events.trigger("error",P))}}return W},this.timeout/2)).unref=="function"?v.unref():void 0}updateSettings(v={}){if(pe.overwrite(v,this.defaults,this),pe.overwrite(v,v,this.limiterOptions),v.timeout!=null)return this._startAutoCleanup()}disconnect(v=!0){var P;if(!this.sharedConnection)return(P=this.connection)!=null?P.disconnect(v):void 0}}return re.prototype.defaults={timeout:1e3*60*5,connection:null,Promise,id:"group-key"},re}).call(t);var me=ee,Te,ke,Ge;Ge=o,ke=m,Te=(function(){class re{constructor(v={}){this.options=v,Ge.load(this.options,this.defaults,this),this.Events=new ke(this),this._arr=[],this._resetPromise(),this._lastFlush=Date.now()}_resetPromise(){return this._promise=new this.Promise((v,P)=>this._resolve=v)}_flush(){return clearTimeout(this._timeout),this._lastFlush=Date.now(),this._resolve(),this.Events.trigger("batch",this._arr),this._arr=[],this._resetPromise()}add(v){var P;return this._arr.push(v),P=this._promise,this._arr.length===this.maxSize?this._flush():this.maxTime!=null&&this._arr.length===1&&(this._timeout=setTimeout(()=>this._flush(),this.maxTime)),P}}return re.prototype.defaults={maxTime:null,maxSize:null,Promise},re}).call(t);var Fe=Te,l=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),I=i(Z),L,E,_,x,N,q,$,K,te,J,ie,_e=[].splice;q=10,E=5,ie=o,$=w,x=B,N=X,K=l,_=m,te=j,J=ue,L=(function(){class re{constructor(v={},...P){var U,M;this._addToQueue=this._addToQueue.bind(this),this._validateOptions(v,P),ie.load(v,this.instanceDefaults,this),this._queues=new $(q),this._scheduled={},this._states=new te(["RECEIVED","QUEUED","RUNNING","EXECUTING"].concat(this.trackDoneStatus?["DONE"]:[])),this._limiter=null,this.Events=new _(this),this._submitLock=new J("submit",this.Promise),this._registerLock=new J("register",this.Promise),M=ie.load(v,this.storeDefaults,{}),this._store=(function(){if(this.datastore==="redis"||this.datastore==="ioredis"||this.connection!=null)return U=ie.load(v,this.redisStoreDefaults,{}),new K(this,M,U);if(this.datastore==="local")return U=ie.load(v,this.localStoreDefaults,{}),new N(this,M,U);throw new re.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`)}).call(this),this._queues.on("leftzero",()=>{var W;return(W=this._store.heartbeat)!=null&&typeof W.ref=="function"?W.ref():void 0}),this._queues.on("zero",()=>{var W;return(W=this._store.heartbeat)!=null&&typeof W.unref=="function"?W.unref():void 0})}_validateOptions(v,P){if(!(v!=null&&typeof v=="object"&&P.length===0))throw new re.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.")}ready(){return this._store.ready}clients(){return this._store.clients}channel(){return`b_${this.id}`}channel_client(){return`b_${this.id}_${this._store.clientId}`}publish(v){return this._store.__publish__(v)}disconnect(v=!0){return this._store.__disconnect__(v)}chain(v){return this._limiter=v,this}queued(v){return this._queues.queued(v)}clusterQueued(){return this._store.__queued__()}empty(){return this.queued()===0&&this._submitLock.isEmpty()}running(){return this._store.__running__()}done(){return this._store.__done__()}jobStatus(v){return this._states.jobStatus(v)}jobs(v){return this._states.statusJobs(v)}counts(){return this._states.statusCounts()}_randomIndex(){return Math.random().toString(36).slice(2)}check(v=1){return this._store.__check__(v)}_clearGlobalState(v){return this._scheduled[v]!=null?(clearTimeout(this._scheduled[v].expiration),delete this._scheduled[v],!0):!1}async _free(v,P,U,M){var W,se;try{if({running:se}=await this._store.__free__(v,U.weight),this.Events.trigger("debug",`Freed ${U.id}`,M),se===0&&this.empty())return this.Events.trigger("idle")}catch(ve){return W=ve,this.Events.trigger("error",W)}}_run(v,P,U){var M,W,se;return P.doRun(),M=this._clearGlobalState.bind(this,v),se=this._run.bind(this,v,P),W=this._free.bind(this,v,P),this._scheduled[v]={timeout:setTimeout(()=>P.doExecute(this._limiter,M,se,W),U),expiration:P.options.expiration!=null?setTimeout(function(){return P.doExpire(M,se,W)},U+P.options.expiration):void 0,job:P}}_drainOne(v){return this._registerLock.schedule(()=>{var P,U,M,W,se;return this.queued()===0?this.Promise.resolve(null):(se=this._queues.getFirst(),{options:W,args:P}=M=se.first(),v!=null&&W.weight>v?this.Promise.resolve(null):(this.Events.trigger("debug",`Draining ${W.id}`,{args:P,options:W}),U=this._randomIndex(),this._store.__register__(U,W.weight,W.expiration).then(({success:ve,wait:xe,reservoir:Oe})=>{var Me;return this.Events.trigger("debug",`Drained ${W.id}`,{success:ve,args:P,options:W}),ve?(se.shift(),Me=this.empty(),Me&&this.Events.trigger("empty"),Oe===0&&this.Events.trigger("depleted",Me),this._run(U,M,xe),this.Promise.resolve(W.weight)):this.Promise.resolve(null)})))})}_drainAll(v,P=0){return this._drainOne(v).then(U=>{var M;return U!=null?(M=v!=null?v-U:v,this._drainAll(M,P+U)):this.Promise.resolve(P)}).catch(U=>this.Events.trigger("error",U))}_dropAllQueued(v){return this._queues.shiftAll(function(P){return P.doDrop({message:v})})}stop(v={}){var P,U;return v=ie.load(v,this.stopDefaults),U=M=>{var W;return W=()=>{var se;return se=this._states.counts,se[0]+se[1]+se[2]+se[3]===M},new this.Promise((se,ve)=>W()?se():this.on("done",()=>{if(W())return this.removeAllListeners("done"),se()}))},P=v.dropWaitingJobs?(this._run=function(M,W){return W.doDrop({message:v.dropErrorMessage})},this._drainOne=()=>this.Promise.resolve(null),this._registerLock.schedule(()=>this._submitLock.schedule(()=>{var M,W,se;W=this._scheduled;for(M in W)se=W[M],this.jobStatus(se.job.options.id)==="RUNNING"&&(clearTimeout(se.timeout),clearTimeout(se.expiration),se.job.doDrop({message:v.dropErrorMessage}));return this._dropAllQueued(v.dropErrorMessage),U(0)}))):this.schedule({priority:q-1,weight:0},()=>U(1)),this._receive=function(M){return M._reject(new re.prototype.BottleneckError(v.enqueueErrorMessage))},this.stop=()=>this.Promise.reject(new re.prototype.BottleneckError("stop() has already been called")),P}async _addToQueue(v){var P,U,M,W,se,ve,xe;({args:P,options:W}=v);try{({reachedHWM:se,blocked:U,strategy:xe}=await this._store.__submit__(this.queued(),W.weight))}catch(Oe){return M=Oe,this.Events.trigger("debug",`Could not queue ${W.id}`,{args:P,options:W,error:M}),v.doDrop({error:M}),!1}return U?(v.doDrop(),!0):se&&(ve=xe===re.prototype.strategy.LEAK?this._queues.shiftLastFrom(W.priority):xe===re.prototype.strategy.OVERFLOW_PRIORITY?this._queues.shiftLastFrom(W.priority+1):xe===re.prototype.strategy.OVERFLOW?v:void 0,ve!=null&&ve.doDrop(),ve==null||xe===re.prototype.strategy.OVERFLOW)?(ve==null&&v.doDrop(),se):(v.doQueue(se,U),this._queues.push(v),await this._drainAll(),se)}_receive(v){return this._states.jobStatus(v.options.id)!=null?(v._reject(new re.prototype.BottleneckError(`A job with the same id already exists (id=${v.options.id})`)),!1):(v.doReceive(),this._submitLock.schedule(this._addToQueue,v))}submit(...v){var P,U,M,W,se,ve,xe;return typeof v[0]=="function"?(se=v,[U,...v]=se,[P]=_e.call(v,-1),W=ie.load({},this.jobDefaults)):(ve=v,[W,U,...v]=ve,[P]=_e.call(v,-1),W=ie.load(W,this.jobDefaults)),xe=(...Oe)=>new this.Promise(function(Me,Qe){return U(...Oe,function(...et){return(et[0]!=null?Qe:Me)(et)})}),M=new x(xe,v,W,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),M.promise.then(function(Oe){return typeof P=="function"?P(...Oe):void 0}).catch(function(Oe){return Array.isArray(Oe)?typeof P=="function"?P(...Oe):void 0:typeof P=="function"?P(Oe):void 0}),this._receive(M)}schedule(...v){var P,U,M;return typeof v[0]=="function"?([M,...v]=v,U={}):[U,M,...v]=v,P=new x(M,v,U,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),this._receive(P),P.promise}wrap(v){var P,U;return P=this.schedule.bind(this),U=function(...M){return P(v.bind(this),...M)},U.withOptions=function(M,...W){return P(M,v,...W)},U}async updateSettings(v={}){return await this._store.__updateSettings__(ie.overwrite(v,this.storeDefaults)),ie.overwrite(v,this.instanceDefaults,this),this}currentReservoir(){return this._store.__currentReservoir__()}incrementReservoir(v=0){return this._store.__incrementReservoir__(v)}}return re.default=re,re.Events=_,re.version=re.prototype.version=I.version,re.strategy=re.prototype.strategy={LEAK:1,OVERFLOW:2,OVERFLOW_PRIORITY:4,BLOCK:3},re.BottleneckError=re.prototype.BottleneckError=g,re.Group=re.prototype.Group=me,re.RedisConnection=re.prototype.RedisConnection=le,re.IORedisConnection=re.prototype.IORedisConnection=D,re.Batcher=re.prototype.Batcher=Fe,re.prototype.jobDefaults={priority:E,weight:1,expiration:null,id:"<no-id>"},re.prototype.storeDefaults={maxConcurrent:null,minTime:0,highWater:null,strategy:re.prototype.strategy.LEAK,penalty:null,reservoir:null,reservoirRefreshInterval:null,reservoirRefreshAmount:null,reservoirIncreaseInterval:null,reservoirIncreaseAmount:null,reservoirIncreaseMaximum:null},re.prototype.localStoreDefaults={Promise,timeout:null,heartbeatInterval:250},re.prototype.redisStoreDefaults={Promise,timeout:null,heartbeatInterval:5e3,clientTimeout:1e4,Redis:null,clientOptions:{},clusterNodes:null,clearDatastore:!1,connection:null},re.prototype.instanceDefaults={datastore:"local",connection:null,id:"<no-id>",rejectOnDrop:!0,trackDoneStatus:!1,Promise},re.prototype.stopDefaults={enqueueErrorMessage:"This limiter has been stopped and cannot accept new jobs.",dropWaitingJobs:!0,dropErrorMessage:"This limiter has been stopped."},re}).call(t);var he=L,De=he;return De})})(Ji);var sa=Ji.exports;const Yi=vs(sa);var ia="0.0.0-development";async function Xi(s,e,t,i){if(!t.request||!t.request.request)throw t;if(t.status>=400&&!s.doNotRetry.includes(t.status)){const r=i.request.retries!=null?i.request.retries:s.retries,n=Math.pow((i.request.retryCount||0)+1,2);throw e.retry.retryRequest(t,r,n)}throw t}async function oa(s,e,t,i){const r=new Yi;return r.on("failed",function(n,o){const a=~~n.request.request.retries,c=~~n.request.request.retryAfter;if(i.request.retryCount=o.retryCount+1,a>o.retryCount)return c*s.retryAfterBaseValue}),r.schedule(na.bind(null,s,e,t),i)}async function na(s,e,t,i){const r=await t(t,i);if(r.data&&r.data.errors&&r.data.errors.length>0&&/Something went wrong while executing your query/.test(r.data.errors[0].message)){const n=new Ut(r.data.errors[0].message,500,{request:i,response:r});return Xi(s,e,n,i)}return r}function Qi(s,e){const t=Object.assign({enabled:!0,retryAfterBaseValue:1e3,doNotRetry:[400,401,403,404,422,451],retries:3},e.retry);return t.enabled&&(s.hook.error("request",Xi.bind(null,t,s)),s.hook.wrap("request",oa.bind(null,t,s))),{retry:{retryRequest:(i,r,n)=>(i.request.request=Object.assign({},i.request.request,{retries:r,retryAfter:n}),i)}}}Qi.VERSION=ia;var aa="0.0.0-development",Hr=()=>Promise.resolve();function la(s,e,t){return s.retryLimiter.schedule(ca,s,e,t)}async function ca(s,e,t){const i=t.method!=="GET"&&t.method!=="HEAD",{pathname:r}=new URL(t.url,"http://github.test"),n=t.method==="GET"&&r.startsWith("/search/"),o=r.startsWith("/graphql"),c=~~e.retryCount>0?{priority:0,weight:0}:{};s.clustering&&(c.expiration=1e3*60),(i||o)&&await s.write.key(s.id).schedule(c,Hr),i&&s.triggersNotification(r)&&await s.notifications.key(s.id).schedule(c,Hr),n&&await s.search.key(s.id).schedule(c,Hr);const h=s.global.key(s.id).schedule(c,e,t);if(o){const m=await h;if(m.data.errors!=null&&m.data.errors.some(d=>d.type==="RATE_LIMITED"))throw Object.assign(new Error("GraphQL Rate Limit Exceeded"),{response:m,data:m.data})}return h}var ua=["/orgs/{org}/invitations","/orgs/{org}/invitations/{invitation_id}","/orgs/{org}/teams/{team_slug}/discussions","/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments","/repos/{owner}/{repo}/collaborators/{username}","/repos/{owner}/{repo}/commits/{commit_sha}/comments","/repos/{owner}/{repo}/issues","/repos/{owner}/{repo}/issues/{issue_number}/comments","/repos/{owner}/{repo}/pulls","/repos/{owner}/{repo}/pulls/{pull_number}/comments","/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies","/repos/{owner}/{repo}/pulls/{pull_number}/merge","/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers","/repos/{owner}/{repo}/pulls/{pull_number}/reviews","/repos/{owner}/{repo}/releases","/teams/{team_id}/discussions","/teams/{team_id}/discussions/{discussion_number}/comments"];function da(s){const t=`^(?:${s.map(i=>i.split("/").map(r=>r.startsWith("{")?"(?:.+?)":r).join("/")).map(i=>`(?:${i})`).join("|")})[^/]*$`;return new RegExp(t,"i")}var ti=da(ua),eo=ti.test.bind(ti),_t={},pa=function(s,e){_t.global=new s.Group({id:"octokit-global",maxConcurrent:10,...e}),_t.search=new s.Group({id:"octokit-search",maxConcurrent:1,minTime:2e3,...e}),_t.write=new s.Group({id:"octokit-write",maxConcurrent:1,minTime:1e3,...e}),_t.notifications=new s.Group({id:"octokit-notifications",maxConcurrent:1,minTime:3e3,...e})};function _s(s,e){const{enabled:t=!0,Bottleneck:i=Yi,id:r="no-id",timeout:n=1e3*60*2,connection:o}=e.throttle||{};if(!t)return{};const a={timeout:n};typeof o<"u"&&(a.connection=o),_t.global==null&&pa(i,a);const c=Object.assign({clustering:o!=null,triggersNotification:eo,fallbackSecondaryRateRetryAfter:60,retryAfterBaseValue:1e3,retryLimiter:new i,id:r,..._t},e.throttle);if(typeof c.onSecondaryRateLimit!="function"||typeof c.onRateLimit!="function")throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);const h={},m=new i.Events(h);return h.on("secondary-limit",c.onSecondaryRateLimit),h.on("rate-limit",c.onRateLimit),h.on("error",d=>s.log.warn("Error in throttling-plugin limit handler",d)),c.retryLimiter.on("failed",async function(d,b){const[p,w,f]=b.args,{pathname:g}=new URL(f.url,"http://github.test");if(!(g.startsWith("/graphql")&&d.status!==401||d.status===403||d.status===429))return;const k=~~w.retryCount;w.retryCount=k,f.request.retryCount=k;const{wantRetry:S,retryAfter:C=0}=await async function(){var A;if(/\bsecondary rate\b/i.test(d.message)){const B=Number(d.response.headers["retry-after"])||p.fallbackSecondaryRateRetryAfter;return{wantRetry:await m.trigger("secondary-limit",B,f,s,k),retryAfter:B}}if(d.response.headers!=null&&d.response.headers["x-ratelimit-remaining"]==="0"||(((A=d.response.data)==null?void 0:A.errors)??[]).some(B=>B.type==="RATE_LIMITED")){const B=new Date(~~d.response.headers["x-ratelimit-reset"]*1e3).getTime(),F=Math.max(Math.ceil((B-Date.now())/1e3)+1,0);return{wantRetry:await m.trigger("rate-limit",F,f,s,k),retryAfter:F}}return{}}();if(S)return w.retryCount++,C*p.retryAfterBaseValue}),s.hook.wrap("request",la.bind(null,c)),{}}_s.VERSION=aa;_s.triggersNotification=eo;var ha="0.0.0-development",to=jn.plugin(Ki,qi,Jn,Qi,_s).defaults({userAgent:`octokit.js/${ha}`,throttle:{onRateLimit:ga,onSecondaryRateLimit:fa}});function ga(s,e,t){if(t.log.warn(`Request quota exhausted for request ${e.method} ${e.url}`),e.request.retryCount===0)return t.log.info(`Retrying after ${s} seconds!`),!0}function fa(s,e,t){if(t.log.warn(`SecondaryRateLimit detected for request ${e.method} ${e.url}`),e.request.retryCount===0)return t.log.info(`Retrying after ${s} seconds!`),!0}class bs{constructor(){this.listeners={}}addListener(e,t){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(i=>i!==t))}dispatch(e,t){this.listeners[e]&&this.listeners[e].forEach(i=>i(t))}}class $r{constructor(){this.callbacks=[]}add(...e){this.callbacks.push(...e)}run(){this.callbacks.filter(e=>(e(),!1))}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ur=globalThis,ws=ur.ShadowRoot&&(ur.ShadyCSS===void 0||ur.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Es=Symbol(),ri=new WeakMap;let ro=class{constructor(s,e,t){if(this._$cssResult$=!0,t!==Es)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o;const e=this.t;if(ws&&s===void 0){const t=e!==void 0&&e.length===1;t&&(s=ri.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),t&&ri.set(e,s))}return s}toString(){return this.cssText}};const ma=s=>new ro(typeof s=="string"?s:s+"",void 0,Es),be=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new ro(t,s,Es)},ya=(s,e)=>{if(ws)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=ur.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},si=ws?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ma(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:va,defineProperty:_a,getOwnPropertyDescriptor:ba,getOwnPropertyNames:wa,getOwnPropertySymbols:Ea,getPrototypeOf:ka}=Object,Tt=globalThis,ii=Tt.trustedTypes,Ta=ii?ii.emptyScript:"",oi=Tt.reactiveElementPolyfillSupport,zt=(s,e)=>s,hr={toAttribute(s,e){switch(e){case Boolean:s=s?Ta:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ks=(s,e)=>!va(s,e),ni={attribute:!0,type:String,converter:hr,reflect:!1,hasChanged:ks};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Tt.litPropertyMetadata??(Tt.litPropertyMetadata=new WeakMap);class yt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ni){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&_a(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=ba(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const a=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ni}static _$Ei(){if(this.hasOwnProperty(zt("elementProperties")))return;const e=ka(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zt("properties"))){const t=this.properties,i=[...wa(t),...Ea(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(si(r))}else e!==void 0&&t.push(si(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ya(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var i;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const o=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:hr).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=r.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:hr;this._$Em=n,this[n]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ks)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},yt[zt("elementProperties")]=new Map,yt[zt("finalized")]=new Map,oi==null||oi({ReactiveElement:yt}),(Tt.reactiveElementVersions??(Tt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=globalThis,fr=gr.trustedTypes,ai=fr?fr.createPolicy("lit-html",{createHTML:s=>s}):void 0,so="$lit$",He=`lit$${Math.random().toFixed(9).slice(2)}$`,io="?"+He,Sa=`<${io}>`,lt=document,qt=()=>lt.createComment(""),Ht=s=>s===null||typeof s!="object"&&typeof s!="function",Ts=Array.isArray,xa=s=>Ts(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Vr=`[ 	
\f\r]`,Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,li=/-->/g,ci=/>/g,rt=RegExp(`>|${Vr}(?:([^\\s"'>=/]+)(${Vr}*=${Vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ui=/'/g,di=/"/g,oo=/^(?:script|style|textarea|title)$/i,Aa=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),oe=Aa(1),St=Symbol.for("lit-noChange"),Pe=Symbol.for("lit-nothing"),pi=new WeakMap,ot=lt.createTreeWalker(lt,129);function no(s,e){if(!Ts(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ai!==void 0?ai.createHTML(e):e}const Pa=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=Ft;for(let a=0;a<t;a++){const c=s[a];let h,m,d=-1,b=0;for(;b<c.length&&(o.lastIndex=b,m=o.exec(c),m!==null);)b=o.lastIndex,o===Ft?m[1]==="!--"?o=li:m[1]!==void 0?o=ci:m[2]!==void 0?(oo.test(m[2])&&(r=RegExp("</"+m[2],"g")),o=rt):m[3]!==void 0&&(o=rt):o===rt?m[0]===">"?(o=r??Ft,d=-1):m[1]===void 0?d=-2:(d=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?rt:m[3]==='"'?di:ui):o===di||o===ui?o=rt:o===li||o===ci?o=Ft:(o=rt,r=void 0);const p=o===rt&&s[a+1].startsWith("/>")?" ":"";n+=o===Ft?c+Sa:d>=0?(i.push(h),c.slice(0,d)+so+c.slice(d)+He+p):c+He+(d===-2?a:p)}return[no(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Vt{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,c=this.parts,[h,m]=Pa(e,t);if(this.el=Vt.createElement(h,i),ot.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=ot.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(so)){const b=m[o++],p=r.getAttribute(d).split(He),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:w[2],strings:p,ctor:w[1]==="."?Oa:w[1]==="?"?$a:w[1]==="@"?Ra:Rr}),r.removeAttribute(d)}else d.startsWith(He)&&(c.push({type:6,index:n}),r.removeAttribute(d));if(oo.test(r.tagName)){const d=r.textContent.split(He),b=d.length-1;if(b>0){r.textContent=fr?fr.emptyScript:"";for(let p=0;p<b;p++)r.append(d[p],qt()),ot.nextNode(),c.push({type:2,index:++n});r.append(d[b],qt())}}}else if(r.nodeType===8)if(r.data===io)c.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(He,d+1))!==-1;)c.push({type:7,index:n}),d+=He.length-1}n++}}static createElement(e,t){const i=lt.createElement("template");return i.innerHTML=e,i}}function xt(s,e,t=s,i){var r,n;if(e===St)return e;let o=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl;const a=Ht(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((n=o==null?void 0:o._$AO)==null||n.call(o,!1),a===void 0?o=void 0:(o=new a(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=xt(s,o._$AS(s,e.values),o,i)),e}class Ca{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??lt).importNode(t,!0);ot.currentNode=r;let n=ot.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new Xt(n,n.nextSibling,this,e):c.type===1?h=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(h=new Da(n,this,e)),this._$AV.push(h),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=ot.nextNode(),o++)}return ot.currentNode=lt,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Xt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=xt(this,e,t),Ht(e)?e===Pe||e==null||e===""?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):e!==this._$AH&&e!==St&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Pe&&Ht(this._$AH)?this._$AA.nextSibling.data=e:this.T(lt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Vt.createElement(no(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===n)this._$AH.p(i);else{const o=new Ca(n,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=pi.get(e.strings);return t===void 0&&pi.set(e.strings,t=new Vt(e)),t}k(e){Ts(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Xt(this.O(qt()),this.O(qt()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Rr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Pe}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=xt(this,e,t,0),o=!Ht(e)||e!==this._$AH&&e!==St,o&&(this._$AH=e);else{const a=e;let c,h;for(e=n[0],c=0;c<n.length-1;c++)h=xt(this,a[i+c],t,c),h===St&&(h=this._$AH[c]),o||(o=!Ht(h)||h!==this._$AH[c]),h===Pe?e=Pe:e!==Pe&&(e+=(h??"")+n[c+1]),this._$AH[c]=h}o&&!r&&this.j(e)}j(e){e===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Oa extends Rr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pe?void 0:e}}class $a extends Rr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Pe)}}class Ra extends Rr{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=xt(this,e,t,0)??Pe)===St)return;const i=this._$AH,r=e===Pe&&i!==Pe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Pe&&(i===Pe||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Da{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){xt(this,e)}}const hi=gr.litHtmlPolyfillSupport;hi==null||hi(Vt,Xt),(gr.litHtmlVersions??(gr.litHtmlVersions=[])).push("3.2.1");const La=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new Xt(e.insertBefore(qt(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fe=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=La(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return St}};var gi;fe._$litElement$=!0,fe.finalized=!0,(gi=globalThis.litElementHydrateSupport)==null||gi.call(globalThis,{LitElement:fe});const fi=globalThis.litElementPolyfillSupport;fi==null||fi({LitElement:fe});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Ga={onDragStart:null,onDragging:null,onDragEnd:null};function Fa(s,e,t){t={...Ga,...t};const i=[...s.children].indexOf(e);return e.draggable=!0,e.ondragstart=r=>{r.dataTransfer&&(r.dataTransfer.effectAllowed="move",r.dataTransfer.dropEffect="move"),s.classList.add("dragging"),t.onDragStart&&t.onDragStart(i)},e.ondragover=r=>(r.preventDefault(),!1),e.ondragenter=r=>{r.preventDefault(),[...s.children].forEach((n,o)=>{if(o===i){n.style.background="hsl(var(--ui-hsl-primary))",n.style.color="hsl(var(--ui-hsl-primary-text))";return}n.style.background="inherit",n.style.color="inherit"}),t.onDragging&&t.onDragging(i)},e.ondrop=r=>{r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect="move"),s.classList.remove("dragging"),t.onDragEnd&&t.onDragEnd(i),[...s.children].forEach(n=>{n.style.background="inherit",n.style.color="inherit"})},()=>{e.draggable=!1,e.ondragstart=null,e.ondragover=null,e.ondragenter=null,e.ondrop=null}}const Ua={onDragStart:null,onDragEnd:null};function ja(s,e){e={...Ua,...e};let t=null,i=null,r=null,n=!1,o="",a="";const c=d=>{const b=d.currentTarget;!t&&Array.from(b.classList).includes("draggable")&&(i=new Date().getTime(),t=b,r&&clearTimeout(r),r=setTimeout(()=>{t&&(o=t.style.color,a=t.style.backgroundColor,t.style.color="hsl(var(--ui-hsl-primary-text))",t.style.backgroundColor="hsl(var(--ui-hsl-primary))",s.classList.add("dragging"),n=!0,e!=null&&e.onDragStart&&e.onDragStart())},200))},h=d=>{if(!i||!t)return;if(!n&&new Date().getTime()-i<200){m();return}d.preventDefault(),n||(n=!0,e!=null&&e.onDragStart&&e.onDragStart());let b;if(d instanceof TouchEvent){const w=d.targetTouches[0];b={clientX:w.clientX,clientY:w.clientY}}else b={clientX:d.clientX,clientY:d.clientY};let p=document.elementFromPoint(b.clientX,b.clientY);if(p){for(;!p.classList.contains("draggable")&&p.parentElement;)p=p.parentElement;p.classList.contains("draggable")&&((()=>{let w=t==null?void 0:t.previousElementSibling;for(;w;){if(w===p)return!0;w=w.previousElementSibling}return!1})()?s.insertBefore(t,p):s.insertBefore(t,p.nextElementSibling))}},m=()=>{r!==null&&(clearTimeout(r),r=null),t&&(t.style.color=o,t.style.backgroundColor=a,t=null),i=null,s.classList.remove("dragging"),n&&(n=!1,e!=null&&e.onDragEnd&&e.onDragEnd())};return[...s.children].forEach(d=>{d.classList.add("draggable"),d.onmousedown=c,d.ontouchstart=c,d.onmousemove=h,d.ontouchmove=h,d.onmouseup=m,d.ontouchend=m}),()=>{[...s.children].forEach(d=>{d.classList.remove("draggable"),d.onmousedown=null,d.ontouchstart=null,d.onmousemove=null,d.ontouchmove=null,d.onmouseup=null,d.ontouchend=null})}}const Ia=Object.freeze(Object.defineProperty({__proto__:null,createMobile:ja,createNative:Fa},Symbol.toStringTag,{value:"Module"})),Ba={color:"var(--ui-ripple-text, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",usePointer:!1};function Ss(s,e){e={...Ba,...e||{}};let t=null;const i=a=>{t=mi(a,e),s.addEventListener("pointermove",n)},r=()=>{s.removeEventListener("pointermove",n),yi(t),t=null},n=()=>r(),o=a=>{t=mi(a,e),yi(t),t=null};return s.classList.add("ripple-container"),s.style.overflow="hidden",e.usePointer?(s.addEventListener("pointerdown",i),s.addEventListener("pointerup",r),s.addEventListener("pointerleave",r)):s.addEventListener("click",o),()=>{if(s.classList.remove("ripple-container"),e.usePointer){s.removeEventListener("pointerdown",i),s.removeEventListener("pointerup",r),s.removeEventListener("pointerleave",r),s.removeEventListener("pointermove",n);return}s.removeEventListener("click",o)}}function mi(s,e){const t=document.createElement("div"),i=s.currentTarget;i.appendChild(t),t.classList.add("ripple"),t.style.position="absolute",t.style.color="inherit",t.style.borderRadius="50%",t.style.pointerEvents="none",t.style.width="100px",t.style.height="100px",t.style.marginTop="-50px",t.style.marginLeft="-50px",t.style.opacity=`${e.opacity}`,t.style.backgroundColor=`${e.color}`,t.style.transform="scale(0) translate(0, 0)",t.style.transition=`transform ${e.spreadDuration} ${e.spreadTiming} 0s,opacity ${e.clearDuration} ${e.clearTiming} 0s`;const r=i.getBoundingClientRect();e.centered?(t.style.top=`${r.height/2}px`,t.style.left=`${r.width/2}px`):(t.style.top=`${s.clientY-r.top}px`,t.style.left=`${s.clientX-r.left}px`);const n=Math.max(r.width,r.height)*.02;return t.style.transform=`scale(${n}) translate(0, 0)`,t}function yi(s){s&&(s.addEventListener("transitionend",e=>{e.propertyName==="opacity"&&s.remove()}),s.style.opacity="0")}function Je(s){return Object.entries(s).map(([e,t])=>`${e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}:${t}`).join(";")+";"}const za=oe`
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
`,Ma=oe`
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
`,xs=oe`
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
`,Na=oe`
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
`,ao=oe`
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
`,qa=oe`
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
`,Ha=oe`
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
`,Za=oe`
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
                d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435"
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
`,Ya=oe`
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
`,Xa=oe`
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
`,Qa=oe`
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
`,lo=oe`
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
`,tl=oe`
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
`,sl=oe`
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
`,ol=Object.freeze(Object.defineProperty({__proto__:null,bookmark:za,checkmark:Ma,chevronDown:xs,chevronLeft:Na,close:ao,documentNew:qa,download:Ha,drag:Va,menu:Wa,moreVertical:Za,pen:Ka,plus:Ja,power:Ya,printer:Xa,refresh:Qa,search:lo,settings:el,share:tl,today:rl,trash:sl,upload:il},Symbol.toStringTag,{value:"Module"})),Ne=Object.freeze(Object.defineProperty({__proto__:null,smoothieLineIcons:ol},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nl={attribute:!0,type:String,converter:hr,reflect:!1,hasChanged:ks},al=(s=nl,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){const{name:o}=t;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,s)}}throw Error("Unsupported decorator location: "+i)};function Y(s){return(e,t)=>typeof t=="object"?al(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}var ll=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,As=(s,e,t,i)=>{for(var r=i>1?void 0:i?cl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ll(e,t,r),r};let mr=class extends fe{constructor(){super(...arguments),this.variant="info",this.message="",this.role="button"}static get styles(){return be`
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
        `}firstUpdated(s){super.firstUpdated(s),this.addEventListener("click",()=>{this.parentElement&&this.parentElement.removeChild(this)})}};As([Y({type:String,attribute:"variant",reflect:!0})],mr.prototype,"variant",2);As([Y({type:String,attribute:"message"})],mr.prototype,"message",2);mr=As([ye("ui-alert")],mr);var ul=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let vi=class extends fe{static get styles(){return be`
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
        `}addAlert(s){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".container");return t&&t.append(s),()=>this.removeAlert(s)}removeAlert(s){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".container");t&&t.removeChild(s)}};vi=ul([ye("ui-alerts")],vi);var dl=Object.defineProperty,pl=Object.getOwnPropertyDescriptor,Ps=(s,e,t,i)=>{for(var r=i>1?void 0:i?pl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&dl(e,t,r),r};let yr=class extends fe{constructor(){super(...arguments),this.position="top",this.fixed=!1}static get styles(){return be`
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
        `}content(s){return[...this.querySelectorAll(`[slot="${s}"]`)]}contentName(s){return this.querySelector(`[name="${s}"]`)}};Ps([Y({type:String,attribute:"position",reflect:!0})],yr.prototype,"position",2);Ps([Y({type:Boolean,attribute:"fixed",reflect:!0})],yr.prototype,"fixed",2);yr=Ps([ye("ui-app-bar")],yr);var hl=Object.defineProperty,gl=Object.getOwnPropertyDescriptor,Cs=(s,e,t,i)=>{for(var r=i>1?void 0:i?gl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&hl(e,t,r),r};let vr=class extends fe{constructor(){super(...arguments),this.name="",this.hidden=!1}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}content(){return[...this.children]}contentAt(s=0){return this.children[s]}show(){this.hidden=!1}hide(){this.hidden=!0}};Cs([Y({type:String,attribute:"name",reflect:!0})],vr.prototype,"name",2);Cs([Y({type:Boolean,attribute:"hidden",reflect:!0})],vr.prototype,"hidden",2);vr=Cs([ye("ui-app-bar-item")],vr);var fl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,Qt=(s,e,t,i)=>{for(var r=i>1?void 0:i?ml(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&fl(e,t,r),r};let ct=class extends fe{constructor(){super(...arguments),this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),t!==null&&(this.rippleCleanUp=Ss(this));break}}};Qt([Y({type:String,attribute:"color",reflect:!0})],ct.prototype,"color",2);Qt([Y({type:String,attribute:"variant",reflect:!0})],ct.prototype,"variant",2);Qt([Y({type:Boolean,attribute:"disabled"})],ct.prototype,"disabled",2);Qt([Y({type:Boolean,attribute:"ripple"})],ct.prototype,"ripple",2);ct=Qt([ye("ui-button")],ct);const yl=ct;var vl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,er=(s,e,t,i)=>{for(var r=i>1?void 0:i?_l(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&vl(e,t,r),r};let At=class extends fe{constructor(){super(...arguments),this.ghost=!1,this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return be`
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
        `}render(){return oe`<ui-svg><slot></slot></ui-svg>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),t!==null&&(this.rippleCleanUp=Ss(this));break}}};er([Y({type:String,attribute:"color",reflect:!0})],At.prototype,"color",2);er([Y({type:Boolean,attribute:"ghost"})],At.prototype,"ghost",2);er([Y({type:Boolean,attribute:"disabled"})],At.prototype,"disabled",2);er([Y({type:Boolean,attribute:"ripple"})],At.prototype,"ripple",2);At=er([ye("ui-icon-button")],At);var bl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,pt=(s,e,t,i)=>{for(var r=i>1?void 0:i?wl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&bl(e,t,r),r};let We=class extends fe{constructor(){super(...arguments),this.title="",this.fullscreen="",this.noFooter="",this.open=!1,this.modal=!1,this.inert=!1}static get styles(){return be`
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
                            ${ao}
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
        `}updated(s){this.open?this.show():this.close()}show(){this.open||(this.open=!0);const s=this.shadowRoot.querySelector("dialog");if(s===null)return;const e=s.inert;s.inert=this.inert,this.modal?s.showModal():s.show(),s.inert=e,this.dispatchEvent(new Event("open"))}close(){this.dispatchEvent(new Event("close")),this.shadowRoot.querySelector("dialog").close()}addDialogActionButton(s,e){const t=new dt;t.flex=(e==null?void 0:e.flex)||1,t.slot="actions",this.appendChild(t);let i=new yl;return i.innerHTML=s,i.variant=e==null?void 0:e.variant,i.color=e==null?void 0:e.color,i.onclick=(e==null?void 0:e.onClick)||null,t.appendChild(i),i}};pt([Y({type:String,attribute:"title",reflect:!0})],We.prototype,"title",2);pt([Y({type:Boolean,attribute:"fullscreen",reflect:!0})],We.prototype,"fullscreen",2);pt([Y({type:Boolean,attribute:"no-footer",reflect:!0})],We.prototype,"noFooter",2);pt([Y({type:Boolean,attribute:"open",reflect:!0})],We.prototype,"open",2);pt([Y({type:Boolean,attribute:"modal",reflect:!0})],We.prototype,"modal",2);pt([Y({type:Boolean,attribute:"inert",reflect:!0})],We.prototype,"inert",2);We=pt([ye("ui-dialog")],We);var El=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,tr=(s,e,t,i)=>{for(var r=i>1?void 0:i?kl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&El(e,t,r),r};const Tl="0";let ut=class extends fe{constructor(){super(...arguments),this.title="",this.gap=Tl,this.open=!1,this.noFold=!1}static get styles(){return be`
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
                                ${xs}
                            </ui-svg>
                        </ui-flex-grid-item>
                    </ui-flex-grid-row>
                </ui-drawer-group-item>

                <slot></slot>
            </ui-flex-grid>
        `}};tr([Y({type:String,attribute:"title",reflect:!0})],ut.prototype,"title",2);tr([Y({type:String,attribute:"gap"})],ut.prototype,"gap",2);tr([Y({type:Boolean,attribute:"open",reflect:!0})],ut.prototype,"open",2);tr([Y({type:Boolean,attribute:"no-fold",reflect:!0})],ut.prototype,"noFold",2);ut=tr([ye("ui-drawer-group")],ut);const Sl=ut;var xl=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,Os=(s,e,t,i)=>{for(var r=i>1?void 0:i?Al(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&xl(e,t,r),r};let _r=class extends fe{constructor(){super(...arguments),this.open=!1,this.role="button",this.handleUnfold=s=>{s.currentTarget.scrollIntoView(!0)}}static get styles(){return be`
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
        `}firstUpdated(s){this.classList.add("has-backdrop-blur"),this.addEventListener("click",()=>{this.open=!1})}updated(s){[...this.children].forEach(async e=>{e instanceof Sl&&e.addEventListener("unfold",this.handleUnfold)})}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"width":t!==null?this.style.setProperty("--_width",t):this.style.removeProperty("--_width");break;case"open":t!==null?(history.pushState(null,"ui-drawer",location.href),this.dispatchEvent(new Event("open"))):this.dispatchEvent(new Event("close"));break}}};Os([Y({type:String,attribute:"width",reflect:!0})],_r.prototype,"width",2);Os([Y({type:Boolean,attribute:"open",reflect:!0})],_r.prototype,"open",2);_r=Os([ye("ui-drawer")],_r);var Pl=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Xr=class extends fe{static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}};Xr=Pl([ye("ui-drawer-group-item")],Xr);const Cl=Xr;var Ol=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,rr=(s,e,t,i)=>{for(var r=i>1?void 0:i?$l(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ol(e,t,r),r};const _i="0";let Pt=class extends fe{constructor(){super(...arguments),this.gap=_i}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"gap":t?this.style.setProperty("--_gap",t||_i):this.style.removeProperty("--_gap");break;case"justify":t?this.style.setProperty("--_justify",t||""):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t||""):this.style.removeProperty("--_align");break;case"wrap":t?this.style.setProperty("--_wrap",t||""):this.style.removeProperty("--_wrap");break}}};rr([Y({type:String,attribute:"gap"})],Pt.prototype,"gap",2);rr([Y({type:String,attribute:"justify"})],Pt.prototype,"justify",2);rr([Y({type:String,attribute:"align"})],Pt.prototype,"align",2);rr([Y({type:String,attribute:"wrap"})],Pt.prototype,"wrap",2);Pt=rr([ye("ui-flex-grid")],Pt);var Rl=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,sr=(s,e,t,i)=>{for(var r=i>1?void 0:i?Dl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Rl(e,t,r),r};const Wr=1;let dt=class extends fe{constructor(){super(...arguments),this.flex=Wr}static get styles(){return be`
            :host {
                flex: var(--_flex, ${Wr});
                display: flex;
                flex-direction: var(--_direction, row);
                justify-content: var(--_justify);
                align-items: var(--_align);
            }

            ::slotted(*) {
                flex-grow: 1;
            }
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"flex":this.style.setProperty("--_flex",t||Wr.toString());break;case"direction":t?this.style.setProperty("--_direction",t):this.style.removeProperty("--_direction");break;case"justify":t?this.style.setProperty("--_justify",t):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t):this.style.removeProperty("--_align");break}}};sr([Y({type:Number,attribute:"flex"})],dt.prototype,"flex",2);sr([Y({type:String,attribute:"direction",reflect:!0})],dt.prototype,"direction",2);sr([Y({type:String,attribute:"justify"})],dt.prototype,"justify",2);sr([Y({type:String,attribute:"align"})],dt.prototype,"align",2);dt=sr([ye("ui-flex-grid-item")],dt);var Ll=Object.defineProperty,Gl=Object.getOwnPropertyDescriptor,ir=(s,e,t,i)=>{for(var r=i>1?void 0:i?Gl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ll(e,t,r),r};const bi="0";let Ct=class extends fe{constructor(){super(...arguments),this.gap=bi}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"gap":t?this.style.setProperty("--_gap",t||bi):this.style.removeProperty("--_gap");break;case"justify":t?this.style.setProperty("--_justify",t||""):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t||""):this.style.removeProperty("--_align");break;case"wrap":t?this.style.setProperty("--_wrap",t||""):this.style.removeProperty("--_wrap");break}}};ir([Y({type:String,attribute:"gap"})],Ct.prototype,"gap",2);ir([Y({type:String,attribute:"justify"})],Ct.prototype,"justify",2);ir([Y({type:String,attribute:"align"})],Ct.prototype,"align",2);ir([Y({type:String,attribute:"wrap"})],Ct.prototype,"wrap",2);Ct=ir([ye("ui-flex-grid-row")],Ct);var Fl=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,co=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ul(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Fl(e,t,r),r};let Qr=class extends fe{constructor(){super(...arguments),this.checked=!1,this.role="checkbox"}static get styles(){return be`
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
        `}click(){super.click(),this.shadowRoot.querySelector("input").checked=this.checked=!this.checked}};co([Y({type:Boolean,attribute:"checked",reflect:!0})],Qr.prototype,"checked",2);Qr=co([ye("ui-check")],Qr);var jl=Object.defineProperty,Il=Object.getOwnPropertyDescriptor,Ye=(s,e,t,i)=>{for(var r=i>1?void 0:i?Il(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&jl(e,t,r),r};let Be=class extends fe{constructor(){super(...arguments),this.title="",this.type="",this.value="",this.placeholder="",this.invalid=!1,this.min="",this.max="",this.role="input"}static get styles(){return be`
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
        `}focus(s){super.focus(s),this.shadowRoot.querySelector("input").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};Ye([Y({type:String,attribute:"title",reflect:!0})],Be.prototype,"title",2);Ye([Y({type:String,attribute:"type",reflect:!0})],Be.prototype,"type",2);Ye([Y({type:String,attribute:"value"})],Be.prototype,"value",2);Ye([Y({type:String,attribute:"placeholder",reflect:!0})],Be.prototype,"placeholder",2);Ye([Y({type:Boolean,attribute:"invalid",reflect:!0})],Be.prototype,"invalid",2);Ye([Y({type:String,attribute:"min",reflect:!0})],Be.prototype,"min",2);Ye([Y({type:String,attribute:"max",reflect:!0})],Be.prototype,"max",2);Be=Ye([ye("ui-input")],Be);var Bl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,ze=(s,e,t,i)=>{for(var r=i>1?void 0:i?zl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Bl(e,t,r),r};let je=class extends fe{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.noSubmit=!1,this.storage=!1,this.storagePrefix="",this.storageKey="",this.role="search"}static get styles(){return be`
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
                    ${lo}
                </ui-icon-button>
            </div>
        `}firstUpdated(s){if(super.firstUpdated(s),this.storage){const e=localStorage.getItem(this.storagePrefix+this.storageKey)||this.value;this.value=e,this.dispatchEvent(new Event("storage"))}}focus(s){super.focus(s),this.shadowRoot.querySelector("input").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};ze([Y({type:String,attribute:"title",reflect:!0})],je.prototype,"title",2);ze([Y({type:String,attribute:"value"})],je.prototype,"value",2);ze([Y({type:String,attribute:"placeholder",reflect:!0})],je.prototype,"placeholder",2);ze([Y({type:Boolean,attribute:"invalid",reflect:!0})],je.prototype,"invalid",2);ze([Y({type:Boolean,attribute:"no-submit",reflect:!0})],je.prototype,"noSubmit",2);ze([Y({type:Boolean,attribute:"storage",reflect:!0})],je.prototype,"storage",2);ze([Y({type:String,attribute:"storage-prefix",reflect:!0})],je.prototype,"storagePrefix",2);ze([Y({type:String,attribute:"storage-key",reflect:!0})],je.prototype,"storageKey",2);je=ze([ye("ui-search")],je);var Ml=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,$s=(s,e,t,i)=>{for(var r=i>1?void 0:i?Nl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ml(e,t,r),r};let br=class extends fe{constructor(){super(...arguments),this.open=!1,this.keepOpen=!1}static get styles(){return be`
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
                    <ui-svg>${xs}</ui-svg>
                </div>

                <slot></slot>
            </div>
        `}updated(s){this.style.setProperty("--_items",`${this.children.length}`)}async optionsClickHandler(s){s.composedPath().forEach(e=>{e instanceof Ot&&([...this.querySelectorAll("ui-select-option")].forEach(t=>t.removeAttribute("selected")),e.setAttribute("selected",""),this.dispatchEvent(new Event("change")))})}options(){return[...this.children].filter(s=>s instanceof Ot)}selected(){return this.options().find(s=>s.selected)||null}click(){super.click(),this.shadowRoot.querySelector("div.options").click()}};$s([Y({type:Boolean,attribute:"open",reflect:!0})],br.prototype,"open",2);$s([Y({type:Boolean,attribute:"keep-open",reflect:!0})],br.prototype,"keepOpen",2);br=$s([ye("ui-select")],br);var ql=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,Rs=(s,e,t,i)=>{for(var r=i>1?void 0:i?Hl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ql(e,t,r),r};let Ot=class extends fe{constructor(){super(...arguments),this.value="",this.selected=!1,this.role="button"}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}};Rs([Y({type:String,attribute:"value",reflect:!0})],Ot.prototype,"value",2);Rs([Y({type:Boolean,attribute:"selected",reflect:!0})],Ot.prototype,"selected",2);Ot=Rs([ye("ui-select-option")],Ot);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=s=>s??Pe;var Vl=Object.defineProperty,Wl=Object.getOwnPropertyDescriptor,ht=(s,e,t,i)=>{for(var r=i>1?void 0:i?Wl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Vl(e,t,r),r};let Ze=class extends fe{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.role="textbox"}static get styles(){return be`
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
                    rows=${wi(this.rows)}
                    cols=${wi(this.cols)}
                    @input=${s=>{this.value=s.currentTarget.value}}
                    @change=${()=>{this.dispatchEvent(new Event("change"))}}
                ></textarea>
            </div>
        `}focus(s){super.focus(s),this.shadowRoot.querySelector("textarea").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("textarea").blur()}click(){super.click(),this.focus()}};ht([Y({type:String,attribute:"title",reflect:!0})],Ze.prototype,"title",2);ht([Y({type:String,attribute:"value"})],Ze.prototype,"value",2);ht([Y({type:String,attribute:"placeholder",reflect:!0})],Ze.prototype,"placeholder",2);ht([Y({type:Boolean,attribute:"invalid",reflect:!0})],Ze.prototype,"invalid",2);ht([Y({type:Number,attribute:"rows",reflect:!0})],Ze.prototype,"rows",2);ht([Y({type:Number,attribute:"cols",reflect:!0})],Ze.prototype,"cols",2);Ze=ht([ye("ui-textarea")],Ze);var Zl=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,Dr=(s,e,t,i)=>{for(var r=i>1?void 0:i?Kl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Zl(e,t,r),r};let Wt=class extends fe{constructor(){super(...arguments),this.name="",this.href="",this.fallback=!1}static get styles(){return be`
            :host {
                display: none;
            }
        `}};Dr([Y({type:String,attribute:"name",reflect:!0})],Wt.prototype,"name",2);Dr([Y({type:String,attribute:"href",reflect:!0})],Wt.prototype,"href",2);Dr([Y({type:Boolean,attribute:"fallback",reflect:!0})],Wt.prototype,"fallback",2);Wt=Dr([ye("ui-lang-type")],Wt);var Jl=Object.defineProperty,Yl=Object.getOwnPropertyDescriptor,uo=(s,e,t,i)=>{for(var r=i>1?void 0:i?Yl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Jl(e,t,r),r};let es=class extends fe{constructor(){super(...arguments),this.data={},this.events=new bs,this.current=""}static get styles(){return be`
            :host {
                display: none;
            }
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"current":this.setCurrent(t||"");break}}fallback(){return this.querySelector("ui-lang-type[fallback]")}get(s,e){var t,i;return((i=(t=this.data)==null?void 0:t[s])==null?void 0:i[e])||null}async setCurrent(s){const e=(s!==""?this.querySelector(`ui-lang-type[name="${s}"]`):this.fallback())||this.fallback();if(e){if(!e.href)throw"Missing href attribute!";try{this.data=await(await fetch(e.href)).json()}catch(t){console.error(t)}this.events.dispatch("change",e)}}};uo([Y({type:String,attribute:"current",reflect:!0})],es.prototype,"current",2);es=uo([ye("ui-lang")],es);var Xl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,po=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ql(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Xl(e,t,r),r};let ts=class extends fe{constructor(){super(...arguments),this.nobg=!1}static get styles(){return be`
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
        `}};po([Y({type:Boolean,attribute:"nobg",reflect:!0})],ts.prototype,"nobg",2);ts=po([ye("ui-spinner")],ts);var ec=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Ei=class extends fe{constructor(){super(...arguments),this.events=new bs,this.stack=[],this.onpopstate=()=>{if(this.stack.length===0){this.dispatchChangeEvent(null);return}const s=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(s)},this.pages={},this.lockNavigation=!1}static get styles(){return be`
            :host {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }
        `}render(){return oe`<slot></slot>`}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.onpopstate)}stackSize(){return this.stack.length}clearStack(){for(;this.stack.length>0;)this.removeChild(this.stack.pop());this.dispatchChangeEvent(null)}goBack(){this.stack.length===0||this.lockNavigation||history.back()}registerPage(s,e){this.pages[s]=e}unregisterPage(s){delete this.pages[s]}async setPage(s,e=null,t=!1){var i;if(this.lockNavigation)return;if(!(s in this.pages))throw new Error(`page "${s}" not found`);const r=await this.pages[s]();this.stack.push(this.appendChild(r)),typeof e=="function"&&e(r);let n=null;this.stack.length>1&&!t&&(n=this.stack[this.stack.length-2],(i=n.parentElement)==null||i.removeChild(n)),this.dispatchChangeEvent(n),this.onpopstate!==null&&history.pushState(null,document.title,location.href)}async dispatchChangeEvent(s){this.events.dispatch("change",{old:s||this.stack[this.stack.length-2]||null,current:this.stack[this.stack.length-1]||null})}};Ei=ec([ye("ui-stack-layout")],Ei);var tc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,ho=(s,e,t,i)=>{for(var r=i>1?void 0:i?rc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&tc(e,t,r),r};let wr=class extends fe{constructor(){super(...arguments),this.name=""}static get styles(){return be`
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
        `}render(){return oe`<slot></slot>`}};ho([Y({type:String,attribute:"name",reflect:!0})],wr.prototype,"name",2);wr=ho([ye("ui-stack-layout-page")],wr);const st=wr;var sc=Object.defineProperty,ic=Object.getOwnPropertyDescriptor,Ds=(s,e,t,i)=>{for(var r=i>1?void 0:i?ic(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&sc(e,t,r),r};let Er=class extends fe{constructor(){super(...arguments),this.data={},this.events=new bs,this.storage=!1,this.storagePrefix=""}static get styles(){return be`
            :host {
                display: none;
            }
        `}getData(s){if(this.storage){const e=localStorage.getItem(`${this.storagePrefix}${s}`);if(e!==null)return JSON.parse(e)}if(this.data.hasOwnProperty(s))return this.data[s]}setData(s,e,t=!1){if(t&&this.storage){const i=localStorage.getItem(`${this.storagePrefix}${s}`);i!==null?this.data[s]=JSON.parse(i):this.data.hasOwnProperty(s)||(this.data[s]=e)}else this.data[s]=e;this.storage&&localStorage.setItem(`${this.storagePrefix}${s}`,JSON.stringify(this.data[s])),this.events.dispatch(s,this.data[s])}updateData(s,e){const t=this.getData(s);if(t===void 0)throw new Error(`"${s}" not found, use \`setData\``);this.setData(s,e(t))}addListener(s,e,t=!1){if(t){const i=this.getData(s);i!==void 0&&setTimeout(()=>e(i))}return this.events.addListener(s,e)}};Ds([Y({type:Boolean,attribute:"storage",reflect:!0})],Er.prototype,"storage",2);Ds([Y({type:String,attribute:"storage-prefix",reflect:!0})],Er.prototype,"storagePrefix",2);Er=Ds([ye("ui-store")],Er);var oc=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let ki=class extends fe{static get styles(){return be`
            :host {
                display: inline-block;
                color: inherit;
            }

            ::slotted(*) {
                width: 100%;
                height: 100%;
            }
        `}render(){return oe` <slot></slot> `}};ki=oc([ye("ui-svg")],ki);var nc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,Xe=(s,e,t,i)=>{for(var r=i>1?void 0:i?ac(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&nc(e,t,r),r};let Ie=class extends fe{constructor(){super(...arguments),this.family="var(--ui-fontFamily)",this.size="var(--ui-fontSize)",this.mono=0,this.casl=1,this.wght=400,this.slnt=0,this.crsv=.5}static get styles(){return be`
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
        `}render(){return this.style.setProperty("--_family",this.family),this.style.setProperty("--_size",this.size),this.style.setProperty("--_mono",this.mono.toString()),this.style.setProperty("--_casl",this.casl.toString()),this.style.setProperty("--_wght",this.wght.toString()),this.style.setProperty("--_slnt",this.slnt.toString()),this.style.setProperty("--_crsv",this.crsv.toString()),oe`<slot></slot>`}};Xe([Y({type:String,attribute:"family",reflect:!0})],Ie.prototype,"family",2);Xe([Y({type:String,attribute:"size",reflect:!0})],Ie.prototype,"size",2);Xe([Y({type:Number,attribute:"mono",reflect:!0})],Ie.prototype,"mono",2);Xe([Y({type:Number,attribute:"casl",reflect:!0})],Ie.prototype,"casl",2);Xe([Y({type:Number,attribute:"wght",reflect:!0})],Ie.prototype,"wght",2);Xe([Y({type:Number,attribute:"slnt",reflect:!0})],Ie.prototype,"slnt",2);Xe([Y({type:Number,attribute:"crsv",reflect:!0})],Ie.prototype,"crsv",2);Ie=Xe([ye("ui-text")],Ie);const Ls=Ie;var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,go=(s,e,t,i)=>{for(var r=i>1?void 0:i?cc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&lc(e,t,r),r};let rs=class extends Ls{constructor(){super(...arguments),this.mono=.25,this.casl=1,this.wght=750,this.slnt=0}render(){switch(this.level){case 6:this.size="0.75rem";break;case 5:this.size="1rem";break;case 4:this.size="1.25rem";break;case 3:this.size="1.5rem";break;case 2:this.size="1.75rem";break;case 1:this.size="2rem";break}return super.render()}};go([Y({type:Number,attribute:"level",reflect:!0})],rs.prototype,"level",2);rs=go([ye("ui-heading")],rs);var uc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,Lr=(s,e,t,i)=>{for(var r=i>1?void 0:i?dc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&uc(e,t,r),r};let Zt=class extends fe{constructor(){super(...arguments),this.rippleCleanUp=null,this.clickHandler=async s=>{s.currentTarget&&[...s.currentTarget.children].forEach(e=>{e.click()})},this.childClickHandler=async s=>{s.stopPropagation()},this.ripple=!1}static get styles(){return be`
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
        `}firstUpdated(s){super.firstUpdated(s),this.ripple?this.enableRipple():this.disableRipple()}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.ripple?this.enableRipple():this.disableRipple()}}async enableRipple(){var s;if(this.rippleCleanUp)return;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("div");e&&(this.rippleCleanUp=Ss(e),this.role="button",this.style.cursor="pointer",this.addEventListener("click",this.clickHandler),[...this.children].forEach(t=>{t.addEventListener("click",this.childClickHandler)}))}async disableRipple(){this.rippleCleanUp&&(this.style.cursor="default",this.role=null,this.rippleCleanUp(),this.rippleCleanUp=null,this.removeEventListener("click",this.clickHandler),[...this.children].forEach(s=>{s.removeEventListener("click",this.childClickHandler)}))}};Lr([Y({type:String,attribute:"primary",reflect:!0})],Zt.prototype,"primary",2);Lr([Y({type:String,attribute:"secondary",reflect:!0})],Zt.prototype,"secondary",2);Lr([Y({type:Boolean,attribute:"ripple",reflect:!0})],Zt.prototype,"ripple",2);Zt=Lr([ye("ui-label")],Zt);var pc=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Ti=class extends Ls{constructor(){super(...arguments),this.size="1.1rem",this.wght=425}};Ti=pc([ye("ui-primary")],Ti);var hc=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let Si=class extends Ls{constructor(){super(...arguments),this.size="0.9rem",this.wght=350,this.slnt=-15}};Si=hc([ye("ui-secondary")],Si);var gc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,or=(s,e,t,i)=>{for(var r=i>1?void 0:i?fc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&gc(e,t,r),r};let $t=class extends fe{constructor(){super(...arguments),this.themesPath="themes",this.media=null}get target(){return document.body}get mediaHandler(){return s=>{s.matches?this.target.setAttribute("data-theme","dark"):this.target.setAttribute("data-theme","light")}}static get styles(){return be`
            :host {
                display: none;
            }
        `}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"auto":this.handleAuto();break;case"mode":this.handleMode();break;case"theme":this.handleTheme();break}}handleAuto(){if(!this.auto){if(console.debug("[ui][ui-theme-handler] Disable auto mode"),!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null;return}if(this.mode=null,console.debug("[ui][ui-theme-handler] Enable auto mode"),this.media){this.mediaHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}handleMode(){console.debug(`[ui][ui-theme-handler] Set mode ${this.mode}`),this.mode?this.target.setAttribute("data-theme",this.mode):this.target.removeAttribute("data-theme")}handleTheme(){const s=document.head;console.debug(`[ui][ui-theme-handler] Load theme from "${this.themesPath}/${this.theme}"`),s.querySelectorAll("link.theme").forEach(t=>{s.removeChild(t)});const e=document.createElement("link");e.classList.add("theme"),e.rel="stylesheet",e.href=`${this.themesPath}/${this.theme}.css`,s.appendChild(e)}};or([Y({type:Boolean,attribute:"auto",reflect:!0})],$t.prototype,"auto",2);or([Y({type:String,attribute:"mode",reflect:!0})],$t.prototype,"mode",2);or([Y({type:String,attribute:"theme",reflect:!0})],$t.prototype,"theme",2);or([Y({type:String,attribute:"themes-path",reflect:!0})],$t.prototype,"themesPath",2);$t=or([ye("ui-theme-handler")],$t);const fo="v1.1.0.dev",mc=9;class Gr{key(){return""}listKey(e){return"title"in e?e.title:"unknown"}title(){return""}fileName(e){return`${this.listKey(e)}.json`}zipFileName(){return`${new Date().getTime()}.zip`}validate(e){return e}sort(e){const t=[],i=e.map(r=>`${this.listKey(r)}`).sort();for(const r of i){const n=e.find(o=>`${this.listKey(o)}`===r);n!==void 0&&t.push(n)}return t}replaceInStore(e,t,i){const r=this.listKey(t),n=this.listKey(i);if(n!==r){for(const o of e.getData(this.key())||[])if(this.listKey(o)===r)throw new Error(`Liste "${r}" existiert bereits!"`)}e.updateData(this.key(),o=>{for(let a=0;a<o.length;a++)this.listKey(o[a])===n&&(o[a]=t);return o})}addToStore(e,t,i){const r=e.getData(this.key());if(r===void 0)return;const o=[...r.filter(a=>t.find(h=>this.listKey(h)===this.listKey(a))===void 0),...t];e.setData(this.key(),i?this.sort(o):o)}}class yc extends Gr{key(){return"alertLists"}listKey(e){return e.title}title(){return"Alarm Listen"}fileName(e){return`Alarm Liste - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof(e==null?void 0:e.title)!="string"||!("data"in e)||!Array.isArray(e.data))return null;for(const t of e.data)if(!("from"in t&&"to"in t&&"alert"in t&&"desc"in t)||typeof t.from!="number"||typeof t.to!="number"||typeof t.alert!="string"||(typeof t.desc=="string"&&(t.desc=t.desc.split(`
`)),!Array.isArray(t.desc))||t.desc.filter(i=>typeof i!="string").length>0)return null;return e}}class vc extends Gr{key(){return"metalSheets"}listKey(e){return`${e.format} ${e.toolID}`}title(){return"Blech Listen"}fileName(e){return`Blech Liste - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof e.format!="string"||(e.toolID||(e.toolID=""),typeof e.toolID!="string")||!("data"in e)||typeof e.data!="object"||typeof e.data.press!="number")return null;if(!("table"in e.data))e.data.table={header:[],data:[]};else{if(typeof e.data.table!="object"||!("header"in e.data.table)||!("data"in e.data.table)||!Array.isArray(e.data.table.header)||!Array.isArray(e.data.table.data))return null;for(const t of e.data.table.header)if(typeof t!="string")return null;for(const t of e.data.table.data)for(const i of t)if(typeof i!="string")return null}return e}}class _c extends Gr{key(){return"vis"}listKey(e){return`${e.title}`}title(){return"Vis Listen"}fileName(e){return`Vis Liste - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof e=="string")try{e=JSON.parse(e)}catch(t){return console.error(t),null}if(typeof e.title!="string"||!Array.isArray(e.data))return null;for(const t of e.data)if(typeof t!="object"||!("lotto"in t)||!("name"in t)||!("format"in t)||!("thickness"in t)||!("stamp"in t))return null;return e}}class bc extends Gr{key(){return"visData"}listKey(e){return`${e.title}`}title(){return"Vis Data"}fileName(e){return`Vis Data - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof e.title!="string"||!Array.isArray(e.data))return null;for(const t of e.data)if(typeof t.key!="string"&&t.key!==null||typeof t.value!="string"||typeof t.lotto!="string"&&t.lotto!==null||typeof t.format!="string"&&t.format!==null||typeof t.thickness!="string"&&t.thickness!==null||typeof t.stamp!="string"&&t.stamp!==null)return null;return e}}function Le(s){switch(s){case"alertLists":return new yc;case"metalSheets":return new vc;case"vis":return new _c;case"visData":return new bc;default:throw new Error(`unknown "${s}"`)}}var wc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,mo=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ec(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&wc(e,t,r),r};let kr=class extends Re{constructor(){super(...arguments),this.name="",this.slot=""}createRenderRoot(){return this.style.width="100%",this.style.height="100%",this.style.display="block",this.style.paddingTop="var(--ui-app-bar-height)",this}};mo([we({type:Object,attribute:"data",reflect:!1})],kr.prototype,"data",2);kr=mo([Ce("pg-page-content")],kr);const gt=kr;var kc=Object.defineProperty,Tc=Object.getOwnPropertyDescriptor,Sc=(s,e,t,i)=>{for(var r=i>1?void 0:i?Tc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&kc(e,t,r),r};let ss=class extends gt{render(){return ce`
            <div
                class="container no-scrollbar"
                style="${Je({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${this.data!==void 0?ce`<pg-alert-list-item
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
        `}updated(s){if(this.data!==void 0){const e=this.querySelector(".description");e.innerHTML=this.data.desc.join("<br/>")}}firstUpdated(s){this.style.overflow="auto"}};ss=Sc([Ce("pg-page-content-alert")],ss);const xc=ss;function Gs(s,e){for(;!s.matches(e);){if(!s.parentElement)return null;s=s.parentElement}return s}var Ac=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,yo=(s,e,t,i)=>{for(var r=i>1?void 0:i?Pc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ac(e,t,r),r};let Tr=class extends Re{createRenderRoot(){return this.classList.add("flex"),this.classList.add("row"),this.classList.add("nowrap"),this.classList.add("align-center"),this.classList.add("justify-between"),this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)",this}render(){return this.data===void 0?ce``:ce`
            <ui-text>${this.data.alert}</ui-text>

            <ui-text
                style="color: hsl(var(--ui-hsl-primary)); text-wrap: nowrap; margin-left: var(--ui-spacing);"
                wght="750"
            >
                ${this.data.from===this.data.to?this.data.from:`${this.data.from}..${this.data.to}`}
            </ui-text>
        `}};yo([we({type:Object,attribute:"data",reflect:!1})],Tr.prototype,"data",2);Tr=yo([Ce("pg-alert-list-item")],Tr);const Cc=Tr;var Oc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,vo=(s,e,t,i)=>{for(var r=i>1?void 0:i?$c(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Oc(e,t,r),r};let Sr=class extends gt{constructor(){super(...arguments),this.cleanup=new $r}querySearchBar(){return this.querySelector("pg-search-bar")}render(){var s;return ge.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?Le("alertLists").listKey(this.data):"Alarm Liste",ce`
            <pg-search-bar
                title="Alarmsuche (RegEx Mode)"
                storage-key="${(s=this.data)==null?void 0:s.title}"
                ?active=${!!this.searchBar}
                @change=${async e=>{await this.filter(e.currentTarget.value())}}
            ></pg-search-bar>

            <div
                class="container no-scrollbar"
                style="${Je({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <div
                    class="list"
                    @click=${async e=>{if(!(e.target instanceof Element))return;const t=Gs(e.target,"pg-alert-list-item");t!==null&&ge.queryStackLayout().setPage("alert",i=>{const r=i.children[0];r!==void 0&&(r.data=t.data)},!0)}}
                ></div>
            </div>
        `}updated(s){const e=this.querySelector("pg-search-bar"),t=this.querySelector("div.container");this.searchBar?(t.style.paddingTop=`calc(${e.clientHeight}px + var(--ui-spacing) * 2)`,this.filter(e.value())):(t.style.paddingTop="0",this.filter(""))}firstUpdated(s){setTimeout(()=>{if(this.data===void 0)return;const e=this.querySelector(".list");this.data.data.forEach(t=>{setTimeout(()=>{const i=new Cc;i.style.cursor="pointer",i.role="button",i.data=t,e.appendChild(i)})})})}connectedCallback(){super.connectedCallback();const s=ge.queryAppBar(),e=async()=>this.searchBar=!this.searchBar,t=s.contentName("search").contentAt(0);t.addEventListener("click",e),this.cleanup.add(()=>t.removeEventListener("click",e))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async filter(s){const e=this.querySelector(".list"),t=Gi.generateRegExp(s);let i,r,n,o;for(const a of[...e.children])a.data!==void 0&&setTimeout(()=>{n=Math.min(a.data.from,a.data.to),o=Math.max(a.data.from,a.data.to),i=[];for(let c=n;c<o;c++)i.push(c.toString());r=`${i.join(",")} ${a.data.alert}`,t.test(r)?a.style.display="flex":a.style.display="none"})}};vo([we({type:Boolean,attribute:"search-bar",reflect:!0})],Sr.prototype,"searchBar",2);Sr=vo([Ce("pg-page-content-alert-lists")],Sr);const Rc=Sr;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dc=s=>(...e)=>({_$litDirective$:s,values:e});let Lc=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gc={},Fc=(s,e=Gc)=>s._$AH=e;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=Dc(class extends Lc{constructor(){super(...arguments),this.key=Ae}render(s,e){return this.key=s,e}update(s,[e,t]){return e!==this.key&&(Fc(s),this.key=e),t}});var Uc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Ic=(s,e,t,i)=>{for(var r=i>1?void 0:i?jc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Uc(e,t,r),r};let is=class extends gt{constructor(){super(...arguments),this.cleanup=new $r}render(){return ge.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?Le("metalSheets").listKey(this.data):"Bleck Liste",ce`
            <div
                class="no-scrollbar"
                style="${Je({width:"100%",overflowX:"auto"})}"
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
                    @click=${()=>{var e;const s=this.querySelector("pg-metal-sheet-entry-dialog");s.header=((e=this.data)==null?void 0:e.data.table.header)||[],s.tableIndex=-1,s.entryData=[],s.show()}}
                >
                    Neuer Eintrag
                </ui-button>
            </ui-flex-grid-row>

            <pg-metal-sheet-entry-dialog
                @submit=${async s=>{this.data&&(s.currentTarget.tableIndex<0?this.data.data.table.data.push(s.currentTarget.entryData):this.data.data.table.data[s.currentTarget.tableIndex]=s.currentTarget.entryData,this.requestUpdate(),this.replaceInStore(this.data))}}
                @delete=${async s=>{this.data&&(this.data.data.table.data.splice(s.currentTarget.tableIndex,1),this.requestUpdate(),this.replaceInStore(this.data))}}
            ></pg-metal-sheet-entry-dialog>

            <pg-metal-sheet-table-dialog
                title="Bearbeiten"
                @submit=${s=>{if(!this.data)return;const e=s.currentTarget.format,t=s.currentTarget.toolID,i=s.currentTarget.press;if(!e||!t){setTimeout(()=>this.openTableDialog({format:e,toolID:t,press:i}));return}const r=ge.queryStore(),n=Le("metalSheets");try{const o={...this.data,format:e,toolID:t,data:{...this.data.data,press:i}};n.replaceInStore(r,o,this.data),this.data=o}catch(o){setTimeout(()=>this.openTableDialog({format:e,toolID:t,press:i})),alert(o);return}}}
            ></pg-metal-sheet-table-dialog>
        `}renderTableHeader(){if(!this.data)return ce``;const s=[];for(const e of this.data.data.table.header)s.push(ce`
                <th style="text-align: center; text-wrap: pretty;">${e}</th>
            `);return ce`${[...s]}`}renderTableBody(){if(!this.data)return ce``;const s=[];for(let e=0;e<this.data.data.table.data.length;e++){const t=this.data.data.table.data[e];s.push(bt(t,ce`
                        <tr
                            style="cursor: pointer;"
                            role="button"
                            data-json="${JSON.stringify(t)}"
                            @click=${()=>{var r;const i=this.querySelector("pg-metal-sheet-entry-dialog");i.header=((r=this.data)==null?void 0:r.data.table.header)||[],i.entryData=t,i.tableIndex=e,i.show()}}
                        >
                            ${[...t.map(i=>ce`
                                        <td style="text-align: center;">
                                            ${i}
                                        </td>
                                    `)]}
                        </tr>
                    `))}return ce`${[...s]}`}updated(s){const e=this.querySelector("tbody");Ia.createMobile(e,{onDragEnd:()=>{this.data&&(this.data.data.table.data=Array.from(e.children).map(t=>{const i=t.getAttribute("data-json");if(!i)throw new Error('missing attribute "data-json"');return JSON.parse(i)}),this.requestUpdate(),this.replaceInStore(this.data))}})}firstUpdated(s){this.classList.add("no-scrollbar"),this.style.overflow="hidden",this.style.overflowY="auto"}connectedCallback(){super.connectedCallback();const s=async()=>{this.data&&this.openTableDialog({format:this.data.format,toolID:this.data.toolID,press:this.data.data.press})},e=ge.queryAppBar().contentName("edit").contentAt(0);e.addEventListener("click",s),this.cleanup.add(()=>{e.removeEventListener("click",s)})}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}openTableDialog(s){const e=this.querySelector("pg-metal-sheet-table-dialog");e.format=s.format,e.toolID=s.toolID,e.press=s.press,e.show()}replaceInStore(s){Le("metalSheets").replaceInStore(ge.queryStore(),s,s)}};is=Ic([Ce("pg-page-content-metal-sheets")],is);const Bc=is;var zc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,Fs=(s,e,t,i)=>{for(var r=i>1?void 0:i?Mc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&zc(e,t,r),r};let Kt=class extends Re{createRenderRoot(){return this.style.display="block",this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)",this}render(){return this.data===void 0?ce``:ce`
            <ui-flex-grid gap="0.25rem">
                ${this.data.key!==null?ce`
                          <ui-flex-grid-item>
                              <ui-primary wght="650"
                                  >${this.data.key}</ui-primary
                              >
                          </ui-flex-grid-item>
                      `:""}
                ${this.renderFilterTags()}

                <ui-flex-grid-item>
                    <ui-text name="value" mono="1">${this.data.value}</ui-text>
                </ui-flex-grid-item>
            </ui-flex-grid>
        `}renderFilterTags(){if(this.data===void 0||!this.showFilter)return ce``;const s=[];return this.data.lotto!==null&&s.push(ce`
                <ui-flex-grid-item flex="0">
                    <code>${this.data.lotto}</code>
                </ui-flex-grid-item>
            `),this.data.format!==null&&s.push(ce`
                <ui-flex-grid-item flex="0">
                    <code>${this.data.format}</code>
                </ui-flex-grid-item>
            `),this.data.stamp!==null&&s.push(ce`
                <ui-flex-grid-item flex="0">
                    <code>${this.data.stamp}</code>
                </ui-flex-grid-item>
            `),this.data.thickness!==null&&s.push(ce`
                <ui-flex-grid-item flex="0">
                    <code>${this.data.thickness}</code>
                </ui-flex-grid-item>
            `),ce`
            <ui-flex-grid gap="0">
                ${s.length>0?ce`<ui-secondary>Filter</ui-secondary>`:""}
                <ui-flex-grid-row gap="0.25rem"> ${s} </ui-flex-grid-row>
            </ui-flex-grid>
        `}updated(s){var e;this.querySelector('ui-text[name="value"]').innerHTML=(((e=this.data)==null?void 0:e.value)||"").replaceAll(`
`,"<br/>").replaceAll(" ","&nbsp;")}};Fs([we({type:Object,attribute:"data",reflect:!0})],Kt.prototype,"data",2);Fs([we({type:Boolean,attribute:"show-filter",reflect:!0})],Kt.prototype,"showFilter",2);Kt=Fs([Ce("pg-vis-data-list-item")],Kt);const Nc=Kt;var qc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,Vc=(s,e,t,i)=>{for(var r=i>1?void 0:i?Hc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&qc(e,t,r),r};let os=class extends gt{render(){return ge.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?Le("visData").listKey(this.data):"Vis Data",ce`
            <ui-flex-grid gap="0.25rem">
                <ui-flex-grid-row justify="flex-end" gap="0.25rem">
                    <ui-flex-grid-item flex="0">
                        <ui-button
                            name="new-entry"
                            style="text-wrap: nowrap;"
                            variant="full"
                            color="primary"
                        >
                            Neuer Eintrag
                        </ui-button>
                    </ui-flex-grid-item>
                </ui-flex-grid-row>

                <ui-flex-grid-item>
                    <div
                        class="list no-scrollbar"
                        style="${Je({width:"100%",height:"100%",overflow:"auto"})}"
                        @click=${async s=>{if(!(s.target instanceof Element))return;const e=Gs(s.target,"pg-vis-data-list-item");e!==null&&ge.queryStackLayout().setPage("visDataEdit",t=>{const i=t.children[0];i!==void 0&&(i.data=e.data)},!0)}}
                    ></div>
                </ui-flex-grid-item>
            </ui-flex-grid>
        `}firstUpdated(s){setTimeout(()=>{if(this.data===void 0)return;const e=this.querySelector(".list");this.data.data.forEach(t=>{setTimeout(()=>{const i=new Nc;i.style.cursor="pointer",i.role="button",i.data=t,i.showFilter=!0,e.appendChild(i)})})})}};os=Vc([Ce("pg-page-content-vis-data")],os);const Wc=os;var Zc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,Jc=(s,e,t,i)=>{for(var r=i>1?void 0:i?Kc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Zc(e,t,r),r};let ns=class extends gt{render(){return ce``}};ns=Jc([Ce("pg-page-content-vis-data-edit")],ns);const Yc=ns;var Xc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,_o=(s,e,t,i)=>{for(var r=i>1?void 0:i?Qc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Xc(e,t,r),r};let xr=class extends Re{createRenderRoot(){return this.style.display="block",this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)",this}render(){return this.data===void 0?ce``:ce`
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
        `}};_o([we({type:Object,attribute:"data",reflect:!0})],xr.prototype,"data",2);xr=_o([Ce("pg-vis-list-item")],xr);const eu=xr;var tu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,bo=(s,e,t,i)=>{for(var r=i>1?void 0:i?ru(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&tu(e,t,r),r};let Ar=class extends gt{constructor(){super(...arguments),this.cleanup=new $r}render(){var s;return ge.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?Le("vis").listKey(this.data):"Vis",ce`
            <pg-search-bar
                title="Productsuche (RegEx Mode)"
                storage-key="${(s=this.data)==null?void 0:s.title}"
                ?active=${!!this.searchBar}
                @change=${async e=>{await this.filter(e.currentTarget.value())}}
            ></pg-search-bar>

            <div
                class="container no-scrollbar"
                style="${Je({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <div
                    class="list"
                    @click=${async e=>{if(!(e.target instanceof Element))return;const t=Gs(e.target,"pg-vis-list-item");t!==null&&ge.queryStackLayout().setPage("product",i=>{const r=i.children[0];r!==void 0&&(r.data=t.data)},!0)}}
                ></div>
            </div>
        `}updated(s){const e=this.querySelector("pg-search-bar"),t=this.querySelector("div.container");this.searchBar?(t.style.paddingTop=`calc(${e.clientHeight}px + var(--ui-spacing) * 2)`,this.filter(e.value())):(t.style.paddingTop="0",this.filter(""))}firstUpdated(s){setTimeout(()=>{if(this.data===void 0)return;const e=this.querySelector(".list");this.data.data.forEach(t=>{setTimeout(()=>{const i=new eu;i.style.cursor="pointer",i.role="button",i.data=t,e.appendChild(i)})})})}connectedCallback(){super.connectedCallback();const s=ge.queryAppBar(),e=async()=>this.searchBar=!this.searchBar,t=s.contentName("search").contentAt(0);t.addEventListener("click",e),this.cleanup.add(()=>t.removeEventListener("click",e))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async filter(s){const e=this.querySelector(".list"),t=Gi.generateRegExp(s);let i;for(const r of[...e.children])r.data!==void 0&&setTimeout(()=>{i=`${r.data.lotto} ${r.data.name} ${r.data.format} ${r.data.stamp} ${r.data.thickness}`,t.test(i)?r.style.display="block":r.style.display="none"})}};bo([we({type:Boolean,attribute:"search-bar",reflect:!0})],Ar.prototype,"searchBar",2);Ar=bo([Ce("pg-page-content-vis")],Ar);const su=Ar;var iu=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,nu=(s,e,t,i)=>{for(var r=i>1?void 0:i?ou(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&iu(e,t,r),r};let as=class extends gt{render(){return ce`
            <div
                class="container no-scrollbar"
                style="${Je({width:"100%",height:"100%",overflow:"auto"})}"
            >
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${this.data!==void 0?ce`<pg-vis-list-item
                                  data=${JSON.stringify(this.data)}
                              ></pg-vis-list-item>`:""}
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        <!-- TODO: Vis data here -->
                    </ui-flex-grid-item>
                </ui-flex-grid>
            </div>
        `}};as=nu([Ce("pg-page-contents-product")],as);const au=as;var lu=Object.defineProperty,cu=Object.getOwnPropertyDescriptor,Dt=(s,e,t,i)=>{for(var r=i>1?void 0:i?cu(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&lu(e,t,r),r};let Ke=class extends Re{render(){return ce`
            <ui-flex-grid-row>
                <ui-flex-grid-item>
                    <ui-label
                        role="button"
                        style="cursor: pointer;"
                        primary="${this.primary||""}"
                        secondary="${this.secondary||""}"
                        @click=${async()=>{await this.setStackLayoutPage(),ge.queryDrawer().open=!1}}
                    ></ui-label>
                </ui-flex-grid-item>

                ${this.allowDeletion?ce`<ui-flex-grid-item
                          name="delete"
                          class="flex align-center justify-center"
                          flex="0"
                      >
                          <ui-icon-button
                              style="height: 100%"
                              color="destructive"
                              ghost
                              @click=${async()=>{await this.deleteStoreData()}}
                          >
                              ${Ne.smoothieLineIcons.trash}
                          </ui-icon-button>
                      </ui-flex-grid-item>`:""}
            </ui-flex-grid-row>
        `}async setStackLayoutPage(){if(!this.storeKey)return;const s=Le(this.storeKey),e=ge.queryStore().getData(this.storeKey),t=e==null?void 0:e.find(r=>s.listKey(r)===this.storeListKey);if(t===void 0)throw new Error(`Data undefined for "${this.storeListKey}" in "${this.storeKey}"`);const i=ge.queryStackLayout();i.clearStack(),i.setPage(this.storeKey,async r=>{const n=r.children[0];n!==void 0&&(n.data=t)})}async deleteStoreData(){if(!(!this.storeKey||!this.storeListKey))switch(this.storeKey){case"alertLists":case"metalSheets":case"vis":case"visData":if(confirm(`Möchten Sie "${this.storeListKey}" wirklich löschen?`)){const s=Le(this.storeKey);ge.queryStore().updateData(this.storeKey,e=>e.filter(t=>s.listKey(t)!==this.storeListKey))}}}};Dt([we({type:String,attribute:"store-key",reflect:!0})],Ke.prototype,"storeKey",2);Dt([we({type:String,attribute:"store-list-key",reflect:!0})],Ke.prototype,"storeListKey",2);Dt([we({type:String,attribute:"primary",reflect:!0})],Ke.prototype,"primary",2);Dt([we({type:String,attribute:"secondary",reflect:!0})],Ke.prototype,"secondary",2);Dt([we({type:Boolean,attribute:"allow-deletion",reflect:!0})],Ke.prototype,"allowDeletion",2);Ke=Dt([Ce("pg-drawer-item")],Ke);const uu=Ke;var du=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,hu=(s,e,t,i)=>{for(var r=i>1?void 0:i?pu(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&du(e,t,r),r};let ge=class extends Re{static queryStore(){return document.querySelector("ui-store")}static queryThemeHandler(){return document.querySelector("ui-theme-handler")}static queryAppBar(){return document.querySelector("ui-app-bar")||null}static queryDrawer(){return document.querySelector("ui-drawer")||null}static queryStackLayout(){return document.querySelector("ui-stack-layout")}static queryImportDialog(){return document.querySelector("pg-import-dialog")}constructor(){super(),this.initializeStores()}initializeStores(){const s=ge.queryStore();s.setData("theme",{name:"original"},!0),s.setData("drawer",{open:!0},!1),s.setData("drawerGroup",{},!0),s.setData("alertLists",[],!0),s.setData("metalSheets",[],!0),s.setData("vis",[],!0),s.setData("visData",[],!0),s.setData("gist",{},!0)}createRenderRoot(){return this}render(){return ce`
            <div class="is-container no-scrollbar" style="height: 100%;">
                <ui-stack-layout></ui-stack-layout>
            </div>

            ${this.renderAppBar()} ${this.renderDrawer()}
            ${this.renderDialogs()}
        `}renderAppBar(){return ce`
            <ui-app-bar position="top">
                <ui-app-bar-item name="menu" slot="left">
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{const s=ge.queryDrawer();s.open=!0}}
                    >
                        ${Ne.smoothieLineIcons.menu}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="back" slot="left" hidden>
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{ge.queryStackLayout().goBack()}}
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
        `}renderDrawer(){var e,t,i,r,n,o,a,c,h,m,d,b,p,w,f;const s=ge.queryStore();return ce`
            <ui-drawer
                ?open=${!!((e=s.getData("drawer"))!=null&&e.open)}
                @open=${()=>{s.setData("drawer",{open:!0})}}
                @close=${()=>{s.setData("drawer",{open:!1})}}
            >
                <ui-drawer-group name="app-info" no-fold>
                    <ui-drawer-group-item>
                        <ui-button
                            style="${Je({display:"flex",justifyContent:"flex-start",marginBottom:"var(--ui-spacing)",padding:"0.25rem",fontSize:"0.85rem",textTransform:"none"})}"
                            variant="ghost"
                            color="primary"
                            ripple
                            @click=${()=>{}}
                        >
                            ${fo} - [Build: ${mc}]
                        </ui-button>
                    </ui-drawer-group-item>

                    <ui-drawer-group-item>
                        <ui-label primary="Theme">
                            <select
                                style="text-align: center;"
                                @change=${g=>{const y=g.currentTarget.children[g.currentTarget.selectedIndex];s.setData("theme",{name:y.value})}}
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
                    name="alertLists"
                    title="Alarm Listen"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((n=(r=s.getData("drawerGroup"))==null?void 0:r.alertLists)!=null&&n.open)}
                    @fold=${()=>{s.updateData("drawerGroup",g=>(g.alertLists={open:!1},g))}}
                    @unfold=${()=>{s.updateData("drawerGroup",g=>(g.alertLists={open:!0},g))}}
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
                    name="metalSheets"
                    title="Blech Listen"
                    data-fixed-items="3"
                    gap="0.25rem"
                    ?open=${!!((a=(o=s.getData("drawerGroup"))==null?void 0:o.metalSheets)!=null&&a.open)}
                    @fold=${()=>{s.updateData("drawerGroup",g=>(g.metalSheets={open:!1},g))}}
                    @unfold=${()=>{s.updateData("drawerGroup",g=>(g.metalSheets={open:!0},g))}}
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
                    ?open=${!!((h=(c=s.getData("drawerGroup"))==null?void 0:c.vis)!=null&&h.open)}
                    @fold=${()=>{s.updateData("drawerGroup",g=>(g.vis={open:!1},g))}}
                    @unfold=${()=>{s.updateData("drawerGroup",g=>(g.vis={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import
                            store-key="vis"
                        ></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist
                            store-key="vis"
                        ></pg-drawer-item-gist>
                    </ui-drawer-group-item>
                </ui-drawer-group>

                <ui-drawer-group
                    name="visBookmarks"
                    title="Vis Bookmarks"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((d=(m=s.getData("drawerGroup"))==null?void 0:m.visBookmarks)!=null&&d.open)}
                    @fold=${()=>{s.updateData("drawerGroup",g=>(g.visBookmarks={open:!1},g))}}
                    @unfold=${()=>{s.updateData("drawerGroup",g=>(g.visBookmarks={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <!-- TODO: Import / Export -->
                    <span class="placeholder"></span>

                    <!-- Fixed Item 1 -->
                    <!-- TODO: "Neue Liste" -->
                    <span class="placeholder"></span>
                </ui-drawer-group>

                <ui-drawer-group
                    name="visData"
                    title="Vis Data"
                    data-fixed-items="3"
                    gap="0.25rem"
                    ?open=${!!((p=(b=s.getData("drawerGroup"))==null?void 0:b.visData)!=null&&p.open)}
                    @fold=${()=>{s.updateData("drawerGroup",g=>(g.visData={open:!1},g))}}
                    @unfold=${()=>{s.updateData("drawerGroup",g=>(g.visData={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-import
                            store-key="visData"
                        ></pg-drawer-item-import>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 2 -->
                    <ui-drawer-group-item>
                        <pg-drawer-item-gist
                            store-key="visData"
                        ></pg-drawer-item-gist>
                    </ui-drawer-group-item>

                    <!-- Fixed Item 3 -->
                    <!-- TODO: Create new -->
                    <span class="placeholder"></span>
                </ui-drawer-group>

                <ui-drawer-group
                    name="special"
                    title="Spezial"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((f=(w=s.getData("drawerGroup"))==null?void 0:w.special)!=null&&f.open)}
                    @fold=${()=>{s.updateData("drawerGroup",g=>(g.special={open:!1},g))}}
                    @unfold=${()=>{s.updateData("drawerGroup",g=>(g.special={open:!0},g))}}
                >
                    <!-- Fixed Item 1 -->
                    <!-- TODO: Import/Export -->
                    <span class="placeholder"></span>

                    <!-- Fixed Item 2 -->
                    <!-- TODO: Gist -->
                    <span class="placeholder"></span>
                </ui-drawer-group>
            </ui-drawer>
        `}renderDialogs(){return ce`
            <pg-import-dialog></pg-import-dialog>

            <pg-metal-sheet-table-dialog
                title="Neue Liste"
                @submit=${s=>{const e=s.currentTarget.format,t=s.currentTarget.toolID,i=s.currentTarget.press,r=()=>{const h=this.querySelector("pg-metal-sheet-table-dialog");h.format=e,h.toolID=t,h.press=i,h.show()};if(!e||!t){setTimeout(r);return}const n=ge.queryStore(),o={format:e,toolID:t,data:{press:i,table:{header:[],data:[]}}},a=Le("metalSheets"),c=a.listKey(o);for(const h of n.getData("metalSheets")||[])if(a.listKey(h)===c){setTimeout(r),alert(`Liste "${c}" existiert bereits!"`);return}a.addToStore(n,[],!0)}}
            ></pg-metal-sheet-table-dialog>
        `}firstUpdated(s){this.style.position="fixed",this.style.top="0",this.style.right="0",this.style.bottom="0",this.style.left="0",this.registerPages(),this.handleStackLayoutChanges(),this.storeEventHandlers()}registerPages(){const s=ge.queryStackLayout();s.registerPage("alertLists",()=>{const e=new st;return e.name="alertLists",e.appendChild(new Rc),e}),s.registerPage("metalSheets",()=>{const e=new st;return e.name="metalSheets",e.appendChild(new Bc),e}),s.registerPage("vis",()=>{const e=new st;return e.name="vis",e.appendChild(new su),e}),s.registerPage("visData",()=>{const e=new st;return e.name="visData",e.appendChild(new Wc),e}),s.registerPage("alert",()=>{const e=new st;return e.name="alert",e.appendChild(new xc),e}),s.registerPage("product",()=>{const e=new st;return e.name="product",e.append(new au),e}),s.registerPage("visDataEdit",()=>{const e=new st;return e.name="visDataEdit",e.append(new Yc),e})}handleStackLayoutChanges(){const s=ge.queryStackLayout(),e=ge.queryAppBar(),t=ge.queryDrawer();s.events.addListener("change",({current:i})=>{if(s.stackSize()>1?e.contentName("back").show():e.contentName("back").hide(),e.content("left").forEach(r=>{r.name==="menu"||r.name==="back"||r.hide()}),e.content("right").forEach(r=>{r.hide()}),i===null){e.contentName("title").contentAt(0).innerText="PG: Vis",t.open=!0;return}switch(i.name){case"alertLists":e.contentName("search").show();break;case"metalSheets":e.contentName("edit").show();break;case"vis":e.contentName("search").show();break}})}storeEventHandlers(){const s=ge.queryStore();s.addListener("theme",e=>{const t=ge.queryThemeHandler();t.theme=e.name},!0),this.drawerGroupItemsRendering(s,"alertLists"),this.drawerGroupItemsRendering(s,"metalSheets"),this.drawerGroupItemsRendering(s,"vis"),this.drawerGroupItemsRendering(s,"visData")}drawerGroupItemsRendering(s,e){s.addListener(e,t=>{const i=this.querySelector(`ui-drawer-group[name="${e}"]`),r=parseInt(i.getAttribute("data-fixed-items")||"0");Array.from(i.children).slice(r).forEach(o=>i.removeChild(o));const n=Le(e);t.forEach(async o=>{const a=new Cl;i.appendChild(a);const c=new uu;switch(a.appendChild(c),c.storeKey=n.key(),c.storeListKey=n.listKey(o),c.primary=n.listKey(o),e){case"metalSheets":(h=>{c.primary=(h.data.press>=0?`[P${h.data.press}] `:"")+n.listKey(h),c.secondary=`${h.data.table.data.length}`})(o);break;default:c.secondary=`${o.data.length} Einträge`}c.allowDeletion=!0})},!0)}};ge=hu([Ce("pg-app")],ge);async function wo(s,e){try{const t=await gu(e),i=Le(s),r=[];for(const a of Object.values(t.data.files||{})){if(!(a!=null&&a.content))continue;const c=JSON.parse(a.content),h=i.validate(c);if(h===null)throw console.error(`Invalid data for "${i.title()}":`,c),new Error(`ungültige Daten für "${i.title()}"!`);r.push(h)}const n=await fu(e),o=ge.queryStore();o.setData(s,[]),i.addToStore(o,r,!0),o.updateData("gist",a=>(a[`${s}`]={id:e,revision:n},a))}catch(t){alert(`Etwas ist schiefgelaufen: ${t}`);return}}async function gu(s){const t=await new to().request("GET /gists/{gist_id}",{gist_id:s,headers:{"X-GitHub-Api-Version":"2022-11-28"}});if(t.status!==200)throw console.error(t),new Error(`anfrage von "GET /gist/${s}" ist mit Statuscode ${t.status} fehlgeschlagen`);return t}async function fu(s){const t=await new to().request("GET /gists/{gist_id}/commits",{gist_id:s,headers:{"X-GitHub-Api-Version":"2022-11-28"}});return t.status!==200?(console.error(t),-1):t.data.length}var mu=Object.defineProperty,yu=Object.getOwnPropertyDescriptor,Eo=(s,e,t,i)=>{for(var r=i>1?void 0:i?yu(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&mu(e,t,r),r};let ls=class extends Re{createRenderRoot(){return this}render(){return ce`
            <ui-dialog title="Import" modal inert>
                <ui-flex-grid gap="0.5rem">
                    <ui-flex-grid-item>
                        <ui-label
                            secondary="Zum Importieren von einer Datei leer lassen"
                        ></ui-label>
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        ${bt(this.storeKey,ce`
                                <ui-input
                                    name="gistID"
                                    type="text"
                                    title="Gist ID"
                                ></ui-input>
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
                    @click=${async()=>{if(!this.storeKey)return;const s=this.querySelector('ui-dialog ui-input[name="gistID"]').value;s===""?await this.importFromFile():await wo(this.storeKey,s),ge.queryStackLayout().clearStack(),this.close()}}
                >
                    OK
                </ui-button>
            </ui-dialog>
        `}async importFromFile(){if(!this.storeKey)return;const s=document.createElement("input");s.type="file",s.multiple=!0,s.onchange=async()=>{if(s.files!==null)for(const e of s.files){const t=new FileReader;t.onload=async()=>{if(typeof t.result!="string"||this.storeKey===void 0)return;const i=Le(this.storeKey),r=i.validate(JSON.parse(t.result));if(r===null){alert(`Ungültige Daten für "${i.title()}"!`);return}i.addToStore(ge.queryStore(),[r],!0)},t.onerror=()=>{alert(`Lesen der Datei "${e.name}" ist fehlgeschlagen!`)},t.readAsText(e)}},s.click()}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Eo([we({type:String,attribute:"store-key",reflect:!0})],ls.prototype,"storeKey",2);ls=Eo([Ce("pg-import-dialog")],ls);var vu=Object.defineProperty,_u=Object.getOwnPropertyDescriptor,Fr=(s,e,t,i)=>{for(var r=i>1?void 0:i?_u(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&vu(e,t,r),r};let Jt=class extends Re{constructor(){super(...arguments),this.entryData=[],this.tableIndex=-1}createRenderRoot(){return this}render(){return this.header!==void 0&&this.header.length>this.entryData.length&&(this.entryData=this.header.map((s,e)=>this.entryData[e]||"")),ce`
            <ui-dialog
                title="${this.tableIndex<0?"Neuer Eintrag":"Bearbeiten"}"
                modal
                inert
            >
                <ui-flex-grid gap="0.25rem">
                    ${this.renderInputs()}
                </ui-flex-grid>

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
        `}renderInputs(){const s=[...(this.header||[]).map((e,t)=>bt(this.entryData[t],ce`
                        <ui-flex-grid-item>
                            <ui-input
                                title="${e}"
                                type="text"
                                value=${this.entryData[t]}
                                @change=${i=>{this.entryData[t]=i.currentTarget.value}}
                            ></ui-input>
                        </ui-flex-grid-item>
                    `))];return ce`${s}`}renderDeleteAction(){return this.tableIndex<0?ce``:ce`
            <ui-button
                slot="actions"
                variant="full"
                color="destructive"
                @click=${async()=>{this.dispatchEvent(new Event("delete")),this.close()}}
            >
                Löschen
            </ui-button>
        `}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Fr([we({type:Object,attribute:"header",reflect:!0})],Jt.prototype,"header",2);Fr([we({type:Object,attribute:"entry-data",reflect:!0})],Jt.prototype,"entryData",2);Fr([we({type:Number,attribute:"table-index",reflect:!0})],Jt.prototype,"tableIndex",2);Jt=Fr([Ce("pg-metal-sheet-entry-dialog")],Jt);var bu=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,nr=(s,e,t,i)=>{for(var r=i>1?void 0:i?wu(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&bu(e,t,r),r};let Rt=class extends Re{constructor(){super(...arguments),this.title="",this.format="",this.toolID="",this.press=-1}createRenderRoot(){return this}render(){return ce`
            <ui-dialog title=${this.title} modal inert>
                <ui-flex-grid gap="0.25rem">
                    <ui-flex-grid-item>
                        ${bt(this.format,ce`
                                <ui-input
                                    type="text"
                                    title="Format"
                                    value=${this.format}
                                    @change=${s=>{this.format=s.currentTarget.value}}
                                ></ui-input>
                            `)}
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        ${bt(this.toolID,ce`
                                <ui-input
                                    type="text"
                                    title="Unterteil ID"
                                    value=${this.toolID}
                                    @change=${s=>{this.toolID=s.currentTarget.value}}
                                ></ui-input>
                            `)}
                    </ui-flex-grid-item>

                    <ui-flex-grid-item>
                        ${this.renderPressSelect()}
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
        `}renderPressSelect(){return bt(this.press,ce`
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
            `)}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};nr([we({type:String,attribute:"title",reflect:!0})],Rt.prototype,"title",2);nr([we({type:String,attribute:"format",reflect:!0})],Rt.prototype,"format",2);nr([we({type:String,attribute:"tool-id",reflect:!0})],Rt.prototype,"toolID",2);nr([we({type:Number,attribute:"press",reflect:!0})],Rt.prototype,"press",2);Rt=nr([Ce("pg-metal-sheet-table-dialog")],Rt);var Eu=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Ur=(s,e,t,i)=>{for(var r=i>1?void 0:i?ku(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Eu(e,t,r),r};let Yt=class extends Re{constructor(){super(...arguments),this.revision=0,this.gistID="",this.cleanup=new $r}render(){return oe`
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
                        @click=${async()=>{if(this.storeKey)try{this.startSpinner(),confirm("Alle Ihre Änderungen gehen verloren!")&&(await wo(this.storeKey,this.gistID),ge.queryStackLayout().clearStack())}finally{this.stopSpinner()}}}
                    >
                        Aktualisieren
                    </ui-button>
                </ui-flex-grid-item>
            </ui-flex-grid>

            <ui-spinner
                style="${Je({position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"none"})}"
            ></ui-spinner>
        `}connectedCallback(){super.connectedCallback();const s=ge.queryStore();this.cleanup.add(s.addListener("gist",e=>{if(!this.storeKey)return;const t=Le(this.storeKey),i=e[t.key()];i!==void 0&&(this.gistID=i.id,this.revision=i.revision)},!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}startSpinner(){this.shadowRoot.querySelector("ui-spinner").style.display="block"}stopSpinner(){this.shadowRoot.querySelector("ui-spinner").style.display="none"}};Ur([we({type:String,attribute:"store-key",reflect:!0})],Yt.prototype,"storeKey",2);Ur([we({type:Number,attribute:!1,reflect:!0})],Yt.prototype,"revision",2);Ur([we({type:String,attribute:!1,reflect:!0})],Yt.prototype,"gistID",2);Yt=Ur([Ce("pg-drawer-item-gist")],Yt);var ko={exports:{}};(function(s,e){(function(t,i){i()})(Ue,function(){function t(h,m){return typeof m>"u"?m={autoBom:!1}:typeof m!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),m={autoBom:!m}),m.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function i(h,m,d){var b=new XMLHttpRequest;b.open("GET",h),b.responseType="blob",b.onload=function(){c(b.response,m,d)},b.onerror=function(){console.error("could not download file")},b.send()}function r(h){var m=new XMLHttpRequest;m.open("HEAD",h,!1);try{m.send()}catch{}return 200<=m.status&&299>=m.status}function n(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var m=document.createEvent("MouseEvents");m.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(m)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ue=="object"&&Ue.global===Ue?Ue:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(h,m,d){var b=o.URL||o.webkitURL,p=document.createElement("a");m=m||h.name||"download",p.download=m,p.rel="noopener",typeof h=="string"?(p.href=h,p.origin===location.origin?n(p):r(p.href)?i(h,m,d):n(p,p.target="_blank")):(p.href=b.createObjectURL(h),setTimeout(function(){b.revokeObjectURL(p.href)},4e4),setTimeout(function(){n(p)},0))}:"msSaveOrOpenBlob"in navigator?function(h,m,d){if(m=m||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(t(h,d),m);else if(r(h))i(h,m,d);else{var b=document.createElement("a");b.href=h,b.target="_blank",setTimeout(function(){n(b)})}}:function(h,m,d,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof h=="string")return i(h,m,d);var p=h.type==="application/octet-stream",w=/constructor/i.test(o.HTMLElement)||o.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||p&&w||a)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var S=g.result;S=f?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=S:location=S,b=null},g.readAsDataURL(h)}else{var y=o.URL||o.webkitURL,k=y.createObjectURL(h);b?b.location=k:location.href=k,b=null,setTimeout(function(){y.revokeObjectURL(k)},4e4)}});o.saveAs=c.saveAs=c,s.exports=c})})(ko);var Tu=ko.exports;const Su=vs(Tu);function ar(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var To={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,e){(function(t){s.exports=t()})(function(){return function t(i,r,n){function o(h,m){if(!r[h]){if(!i[h]){var d=typeof ar=="function"&&ar;if(!m&&d)return d(h,!0);if(a)return a(h,!0);var b=new Error("Cannot find module '"+h+"'");throw b.code="MODULE_NOT_FOUND",b}var p=r[h]={exports:{}};i[h][0].call(p.exports,function(w){var f=i[h][1][w];return o(f||w)},p,p.exports,t,i,r,n)}return r[h].exports}for(var a=typeof ar=="function"&&ar,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(t,i,r){var n=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(c){for(var h,m,d,b,p,w,f,g=[],y=0,k=c.length,S=k,C=n.getTypeOf(c)!=="string";y<c.length;)S=k-y,d=C?(h=c[y++],m=y<k?c[y++]:0,y<k?c[y++]:0):(h=c.charCodeAt(y++),m=y<k?c.charCodeAt(y++):0,y<k?c.charCodeAt(y++):0),b=h>>2,p=(3&h)<<4|m>>4,w=1<S?(15&m)<<2|d>>6:64,f=2<S?63&d:64,g.push(a.charAt(b)+a.charAt(p)+a.charAt(w)+a.charAt(f));return g.join("")},r.decode=function(c){var h,m,d,b,p,w,f=0,g=0,y="data:";if(c.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");var k,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===a.charAt(64)&&S--,c.charAt(c.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=o.uint8array?new Uint8Array(0|S):new Array(0|S);f<c.length;)h=a.indexOf(c.charAt(f++))<<2|(b=a.indexOf(c.charAt(f++)))>>4,m=(15&b)<<4|(p=a.indexOf(c.charAt(f++)))>>2,d=(3&p)<<6|(w=a.indexOf(c.charAt(f++))),k[g++]=h,p!==64&&(k[g++]=m),w!==64&&(k[g++]=d);return k}},{"./support":30,"./utils":32}],2:[function(t,i,r){var n=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),c=t("./stream/DataLengthProbe");function h(m,d,b,p,w){this.compressedSize=m,this.uncompressedSize=d,this.crc32=b,this.compression=p,this.compressedContent=w}h.prototype={getContentWorker:function(){var m=new o(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),d=this;return m.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),m},getCompressedWorker:function(){return new o(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(m,d,b){return m.pipe(new a).pipe(new c("uncompressedSize")).pipe(d.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression",d)},i.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,r){var n=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,r){var n=t("./utils"),o=function(){for(var a,c=[],h=0;h<256;h++){a=h;for(var m=0;m<8;m++)a=1&a?3988292384^a>>>1:a>>>1;c[h]=a}return c}();i.exports=function(a,c){return a!==void 0&&a.length?n.getTypeOf(a)!=="string"?function(h,m,d,b){var p=o,w=b+d;h^=-1;for(var f=b;f<w;f++)h=h>>>8^p[255&(h^m[f])];return-1^h}(0|c,a,a.length,0):function(h,m,d,b){var p=o,w=b+d;h^=-1;for(var f=b;f<w;f++)h=h>>>8^p[255&(h^m.charCodeAt(f))];return-1^h}(0|c,a,a.length,0):0}},{"./utils":32}],5:[function(t,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,i,r){var n=null;n=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:n}},{lie:37}],7:[function(t,i,r){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),c=t("./stream/GenericWorker"),h=n?"uint8array":"array";function m(d,b){c.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=b,this.meta={}}r.magic="\b\0",a.inherits(m,c),m.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,d.data),!1)},m.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},m.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},m.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(b){d.push({data:b,meta:d.meta})}},r.compressWorker=function(d){return new m("Deflate",d)},r.uncompressWorker=function(){return new m("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,r){function n(p,w){var f,g="";for(f=0;f<w;f++)g+=String.fromCharCode(255&p),p>>>=8;return g}function o(p,w,f,g,y,k){var S,C,A=p.file,B=p.compression,F=k!==h.utf8encode,V=a.transformTo("string",k(A.name)),G=a.transformTo("string",h.utf8encode(A.name)),X=A.comment,ae=a.transformTo("string",k(X)),T=a.transformTo("string",h.utf8encode(X)),j=G.length!==A.name.length,u=T.length!==X.length,z="",ue="",H="",de=A.dir,Z=A.date,le={crc32:0,compressedSize:0,uncompressedSize:0};w&&!f||(le.crc32=p.crc32,le.compressedSize=p.compressedSize,le.uncompressedSize=p.uncompressedSize);var D=0;w&&(D|=8),F||!j&&!u||(D|=2048);var R=0,ne=0;de&&(R|=16),y==="UNIX"?(ne=798,R|=function(Q,Ee){var Se=Q;return Q||(Se=Ee?16893:33204),(65535&Se)<<16}(A.unixPermissions,de)):(ne=20,R|=function(Q){return 63&(Q||0)}(A.dosPermissions)),S=Z.getUTCHours(),S<<=6,S|=Z.getUTCMinutes(),S<<=5,S|=Z.getUTCSeconds()/2,C=Z.getUTCFullYear()-1980,C<<=4,C|=Z.getUTCMonth()+1,C<<=5,C|=Z.getUTCDate(),j&&(ue=n(1,1)+n(m(V),4)+G,z+="up"+n(ue.length,2)+ue),u&&(H=n(1,1)+n(m(ae),4)+T,z+="uc"+n(H.length,2)+H);var ee="";return ee+=`
\0`,ee+=n(D,2),ee+=B.magic,ee+=n(S,2),ee+=n(C,2),ee+=n(le.crc32,4),ee+=n(le.compressedSize,4),ee+=n(le.uncompressedSize,4),ee+=n(V.length,2),ee+=n(z.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ee+V+z,dirRecord:d.CENTRAL_FILE_HEADER+n(ne,2)+ee+n(ae.length,2)+"\0\0\0\0"+n(R,4)+n(g,4)+V+z+ae}}var a=t("../utils"),c=t("../stream/GenericWorker"),h=t("../utf8"),m=t("../crc32"),d=t("../signature");function b(p,w,f,g){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=f,this.encodeFileName=g,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(b,c),b.prototype.push=function(p){var w=p.meta.percent||0,f=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,c.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:f?(w+100*(f-g-1))/f:100}}))},b.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var w=this.streamFiles&&!p.file.dir;if(w){var f=o(p,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(p){this.accumulate=!1;var w=this.streamFiles&&!p.file.dir,f=o(p,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),w)this.push({data:function(g){return d.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var p=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var f=this.bytesWritten-p,g=function(y,k,S,C,A){var B=a.transformTo("string",A(C));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(y,2)+n(y,2)+n(k,4)+n(S,4)+n(B.length,2)+B}(this.dirRecords.length,f,p,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(p){this._sources.push(p);var w=this;return p.on("data",function(f){w.processChunk(f)}),p.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),p.on("error",function(f){w.error(f)}),this},b.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(p){var w=this._sources;if(!c.prototype.error.call(this,p))return!1;for(var f=0;f<w.length;f++)try{w[f].error(p)}catch{}return!0},b.prototype.lock=function(){c.prototype.lock.call(this);for(var p=this._sources,w=0;w<p.length;w++)p[w].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,r){var n=t("../compressions"),o=t("./ZipFileWorker");r.generateWorker=function(a,c,h){var m=new o(c.streamFiles,h,c.platform,c.encodeFileName),d=0;try{a.forEach(function(b,p){d++;var w=function(k,S){var C=k||S,A=n[C];if(!A)throw new Error(C+" is not a valid compression method !");return A}(p.options.compression,c.compression),f=p.options.compressionOptions||c.compressionOptions||{},g=p.dir,y=p.date;p._compressWorker(w,f).withStreamInfo("file",{name:b,dir:g,date:y,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(m)}),m.entriesCount=d}catch(b){m.error(b)}return m}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,r){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new n;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(n.prototype=t("./object")).loadAsync=t("./load"),n.support=t("./support"),n.defaults=t("./defaults"),n.version="3.10.1",n.loadAsync=function(o,a){return new n().loadAsync(o,a)},n.external=t("./external"),i.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,r){var n=t("./utils"),o=t("./external"),a=t("./utf8"),c=t("./zipEntries"),h=t("./stream/Crc32Probe"),m=t("./nodejsUtils");function d(b){return new o.Promise(function(p,w){var f=b.decompressed.getContentWorker().pipe(new h);f.on("error",function(g){w(g)}).on("end",function(){f.streamInfo.crc32!==b.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(b,p){var w=this;return p=n.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),m.isNode&&m.isStream(b)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",b,!0,p.optimizedBinaryString,p.base64).then(function(f){var g=new c(p);return g.load(f),g}).then(function(f){var g=[o.Promise.resolve(f)],y=f.files;if(p.checkCRC32)for(var k=0;k<y.length;k++)g.push(d(y[k]));return o.Promise.all(g)}).then(function(f){for(var g=f.shift(),y=g.files,k=0;k<y.length;k++){var S=y[k],C=S.fileNameStr,A=n.resolve(S.fileNameStr);w.file(A,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:p.createFolders}),S.dir||(w.file(A).unsafeOriginalName=C)}return g.zipComment.length&&(w.comment=g.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,r){var n=t("../utils"),o=t("../stream/GenericWorker");function a(c,h){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(h)}n.inherits(a,o),a.prototype._bindStream=function(c){var h=this;(this._stream=c).pause(),c.on("data",function(m){h.push({data:m,meta:{percent:0}})}).on("error",function(m){h.isPaused?this.generatedError=m:h.error(m)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,r){var n=t("readable-stream").Readable;function o(a,c,h){n.call(this,c),this._helper=a;var m=this;a.on("data",function(d,b){m.push(d)||m._helper.pause(),h&&h(b)}).on("error",function(d){m.emit("error",d)}).on("end",function(){m.push(null)})}t("../utils").inherits(o,n),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,o);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,o)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var o=new Buffer(n);return o.fill(0),o},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(t,i,r){function n(A,B,F){var V,G=a.getTypeOf(B),X=a.extend(F||{},m);X.date=X.date||new Date,X.compression!==null&&(X.compression=X.compression.toUpperCase()),typeof X.unixPermissions=="string"&&(X.unixPermissions=parseInt(X.unixPermissions,8)),X.unixPermissions&&16384&X.unixPermissions&&(X.dir=!0),X.dosPermissions&&16&X.dosPermissions&&(X.dir=!0),X.dir&&(A=y(A)),X.createFolders&&(V=g(A))&&k.call(this,V,!0);var ae=G==="string"&&X.binary===!1&&X.base64===!1;F&&F.binary!==void 0||(X.binary=!ae),(B instanceof d&&B.uncompressedSize===0||X.dir||!B||B.length===0)&&(X.base64=!1,X.binary=!0,B="",X.compression="STORE",G="string");var T=null;T=B instanceof d||B instanceof c?B:w.isNode&&w.isStream(B)?new f(A,B):a.prepareContent(A,B,X.binary,X.optimizedBinaryString,X.base64);var j=new b(A,T,X);this.files[A]=j}var o=t("./utf8"),a=t("./utils"),c=t("./stream/GenericWorker"),h=t("./stream/StreamHelper"),m=t("./defaults"),d=t("./compressedObject"),b=t("./zipObject"),p=t("./generate"),w=t("./nodejsUtils"),f=t("./nodejs/NodejsStreamInputAdapter"),g=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var B=A.lastIndexOf("/");return 0<B?A.substring(0,B):""},y=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},k=function(A,B){return B=B!==void 0?B:m.createFolders,A=y(A),this.files[A]||n.call(this,A,null,{dir:!0,createFolders:B}),this.files[A]};function S(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var C={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var B,F,V;for(B in this.files)V=this.files[B],(F=B.slice(this.root.length,B.length))&&B.slice(0,this.root.length)===this.root&&A(F,V)},filter:function(A){var B=[];return this.forEach(function(F,V){A(F,V)&&B.push(V)}),B},file:function(A,B,F){if(arguments.length!==1)return A=this.root+A,n.call(this,A,B,F),this;if(S(A)){var V=A;return this.filter(function(X,ae){return!ae.dir&&V.test(X)})}var G=this.files[this.root+A];return G&&!G.dir?G:null},folder:function(A){if(!A)return this;if(S(A))return this.filter(function(G,X){return X.dir&&A.test(G)});var B=this.root+A,F=k.call(this,B),V=this.clone();return V.root=F.name,V},remove:function(A){A=this.root+A;var B=this.files[A];if(B||(A.slice(-1)!=="/"&&(A+="/"),B=this.files[A]),B&&!B.dir)delete this.files[A];else for(var F=this.filter(function(G,X){return X.name.slice(0,A.length)===A}),V=0;V<F.length;V++)delete this.files[F[V].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var B,F={};try{if((F=a.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=F.type.toLowerCase(),F.compression=F.compression.toUpperCase(),F.type==="binarystring"&&(F.type="string"),!F.type)throw new Error("No output type specified.");a.checkSupport(F.type),F.platform!=="darwin"&&F.platform!=="freebsd"&&F.platform!=="linux"&&F.platform!=="sunos"||(F.platform="UNIX"),F.platform==="win32"&&(F.platform="DOS");var V=F.comment||this.comment||"";B=p.generateWorker(this,F,V)}catch(G){(B=new c("error")).error(G)}return new h(B,F.type||"string",F.mimeType)},generateAsync:function(A,B){return this.generateInternalStream(A).accumulate(B)},generateNodeStream:function(A,B){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(B)}};i.exports=C},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,r){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,r){var n=t("./DataReader");function o(a){n.call(this,a);for(var c=0;c<this.data.length;c++)a[c]=255&a[c]}t("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var c=a.charCodeAt(0),h=a.charCodeAt(1),m=a.charCodeAt(2),d=a.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===c&&this.data[b+1]===h&&this.data[b+2]===m&&this.data[b+3]===d)return b-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var c=a.charCodeAt(0),h=a.charCodeAt(1),m=a.charCodeAt(2),d=a.charCodeAt(3),b=this.readData(4);return c===b[0]&&h===b[1]&&m===b[2]&&d===b[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,i,r){var n=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var c,h=0;for(this.checkOffset(a),c=this.index+a-1;c>=this.index;c--)h=(h<<8)+this.byteAt(c);return this.index+=a,h},readString:function(a){return n.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(t,i,r){var n=t("./Uint8ArrayReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,r){var n=t("./DataReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,i,r){var n=t("./ArrayReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,r){var n=t("../utils"),o=t("../support"),a=t("./ArrayReader"),c=t("./StringReader"),h=t("./NodeBufferReader"),m=t("./Uint8ArrayReader");i.exports=function(d){var b=n.getTypeOf(d);return n.checkSupport(b),b!=="string"||o.uint8array?b==="nodebuffer"?new h(d):o.uint8array?new m(n.transformTo("uint8array",d)):new a(n.transformTo("array",d)):new c(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,r){var n=t("./GenericWorker"),o=t("../utils");function a(c){n.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(a,n),a.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,r){var n=t("./GenericWorker"),o=t("../crc32");function a(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,n),a.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,r){var n=t("../utils"),o=t("./GenericWorker");function a(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(a,o),a.prototype.processChunk=function(c){if(c){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+c.data.length}o.prototype.processChunk.call(this,c)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,r){var n=t("../utils"),o=t("./GenericWorker");function a(c){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(m){h.dataIsReady=!0,h.data=m,h.max=m&&m.length||0,h.type=n.getTypeOf(m),h.isPaused||h._tickAndRepeat()},function(m){h.error(m)})}n.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,h);break;case"uint8array":c=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":c=this.data.slice(this.index,h)}return this.index=h,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,r){function n(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(c){a.processChunk(c)}),o.on("end",function(){a.end()}),o.on("error",function(c){a.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=n},{}],29:[function(t,i,r){var n=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),c=t("../base64"),h=t("../support"),m=t("../external"),d=null;if(h.nodestream)try{d=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(w,f){return new m.Promise(function(g,y){var k=[],S=w._internalType,C=w._outputType,A=w._mimeType;w.on("data",function(B,F){k.push(B),f&&f(F)}).on("error",function(B){k=[],y(B)}).on("end",function(){try{var B=function(F,V,G){switch(F){case"blob":return n.newBlob(n.transformTo("arraybuffer",V),G);case"base64":return c.encode(V);default:return n.transformTo(F,V)}}(C,function(F,V){var G,X=0,ae=null,T=0;for(G=0;G<V.length;G++)T+=V[G].length;switch(F){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(ae=new Uint8Array(T),G=0;G<V.length;G++)ae.set(V[G],X),X+=V[G].length;return ae;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+F+"'")}}(S,k),A);g(B)}catch(F){y(F)}k=[]}).resume()})}function p(w,f,g){var y=f;switch(f){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string"}try{this._internalType=y,this._outputType=f,this._mimeType=g,n.checkSupport(y),this._worker=w.pipe(new o(y)),w.lock()}catch(k){this._worker=new a("error"),this._worker.error(k)}}p.prototype={accumulate:function(w){return b(this,w)},on:function(w,f){var g=this;return w==="data"?this._worker.on(w,function(y){f.call(g,y.data,y.meta)}):this._worker.on(w,function(){n.delay(f,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},w)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(n),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,r){for(var n=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),c=t("./stream/GenericWorker"),h=new Array(256),m=0;m<256;m++)h[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;h[254]=h[254]=1;function d(){c.call(this,"utf-8 decode"),this.leftOver=null}function b(){c.call(this,"utf-8 encode")}r.utf8encode=function(p){return o.nodebuffer?a.newBufferFrom(p,"utf-8"):function(w){var f,g,y,k,S,C=w.length,A=0;for(k=0;k<C;k++)(64512&(g=w.charCodeAt(k)))==55296&&k+1<C&&(64512&(y=w.charCodeAt(k+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),k++),A+=g<128?1:g<2048?2:g<65536?3:4;for(f=o.uint8array?new Uint8Array(A):new Array(A),k=S=0;S<A;k++)(64512&(g=w.charCodeAt(k)))==55296&&k+1<C&&(64512&(y=w.charCodeAt(k+1)))==56320&&(g=65536+(g-55296<<10)+(y-56320),k++),g<128?f[S++]=g:(g<2048?f[S++]=192|g>>>6:(g<65536?f[S++]=224|g>>>12:(f[S++]=240|g>>>18,f[S++]=128|g>>>12&63),f[S++]=128|g>>>6&63),f[S++]=128|63&g);return f}(p)},r.utf8decode=function(p){return o.nodebuffer?n.transformTo("nodebuffer",p).toString("utf-8"):function(w){var f,g,y,k,S=w.length,C=new Array(2*S);for(f=g=0;f<S;)if((y=w[f++])<128)C[g++]=y;else if(4<(k=h[y]))C[g++]=65533,f+=k-1;else{for(y&=k===2?31:k===3?15:7;1<k&&f<S;)y=y<<6|63&w[f++],k--;1<k?C[g++]=65533:y<65536?C[g++]=y:(y-=65536,C[g++]=55296|y>>10&1023,C[g++]=56320|1023&y)}return C.length!==g&&(C.subarray?C=C.subarray(0,g):C.length=g),n.applyFromCharCode(C)}(p=n.transformTo(o.uint8array?"uint8array":"array",p))},n.inherits(d,c),d.prototype.processChunk=function(p){var w=n.transformTo(o.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var f=w;(w=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),w.set(f,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var g=function(k,S){var C;for((S=S||k.length)>k.length&&(S=k.length),C=S-1;0<=C&&(192&k[C])==128;)C--;return C<0||C===0?S:C+h[k[C]]>S?C:S}(w),y=w;g!==w.length&&(o.uint8array?(y=w.subarray(0,g),this.leftOver=w.subarray(g,w.length)):(y=w.slice(0,g),this.leftOver=w.slice(g,w.length))),this.push({data:r.utf8decode(y),meta:p.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=d,n.inherits(b,c),b.prototype.processChunk=function(p){this.push({data:r.utf8encode(p.data),meta:p.meta})},r.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,r){var n=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),c=t("./external");function h(f){return f}function m(f,g){for(var y=0;y<f.length;++y)g[y]=255&f.charCodeAt(y);return g}t("setimmediate"),r.newBlob=function(f,g){r.checkSupport("blob");try{return new Blob([f],{type:g})}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return y.append(f),y.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(f,g,y){var k=[],S=0,C=f.length;if(C<=y)return String.fromCharCode.apply(null,f);for(;S<C;)g==="array"||g==="nodebuffer"?k.push(String.fromCharCode.apply(null,f.slice(S,Math.min(S+y,C)))):k.push(String.fromCharCode.apply(null,f.subarray(S,Math.min(S+y,C)))),S+=y;return k.join("")},stringifyByChar:function(f){for(var g="",y=0;y<f.length;y++)g+=String.fromCharCode(f[y]);return g},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function b(f){var g=65536,y=r.getTypeOf(f),k=!0;if(y==="uint8array"?k=d.applyCanBeUsed.uint8array:y==="nodebuffer"&&(k=d.applyCanBeUsed.nodebuffer),k)for(;1<g;)try{return d.stringifyByChunk(f,y,g)}catch{g=Math.floor(g/2)}return d.stringifyByChar(f)}function p(f,g){for(var y=0;y<f.length;y++)g[y]=f[y];return g}r.applyFromCharCode=b;var w={};w.string={string:h,array:function(f){return m(f,new Array(f.length))},arraybuffer:function(f){return w.string.uint8array(f).buffer},uint8array:function(f){return m(f,new Uint8Array(f.length))},nodebuffer:function(f){return m(f,a.allocBuffer(f.length))}},w.array={string:b,array:h,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return a.newBufferFrom(f)}},w.arraybuffer={string:function(f){return b(new Uint8Array(f))},array:function(f){return p(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:h,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return a.newBufferFrom(new Uint8Array(f))}},w.uint8array={string:b,array:function(f){return p(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:h,nodebuffer:function(f){return a.newBufferFrom(f)}},w.nodebuffer={string:b,array:function(f){return p(f,new Array(f.length))},arraybuffer:function(f){return w.nodebuffer.uint8array(f).buffer},uint8array:function(f){return p(f,new Uint8Array(f.length))},nodebuffer:h},r.transformTo=function(f,g){if(g=g||"",!f)return g;r.checkSupport(f);var y=r.getTypeOf(g);return w[y][f](g)},r.resolve=function(f){for(var g=f.split("/"),y=[],k=0;k<g.length;k++){var S=g[k];S==="."||S===""&&k!==0&&k!==g.length-1||(S===".."?y.pop():y.push(S))}return y.join("/")},r.getTypeOf=function(f){return typeof f=="string"?"string":Object.prototype.toString.call(f)==="[object Array]"?"array":n.nodebuffer&&a.isBuffer(f)?"nodebuffer":n.uint8array&&f instanceof Uint8Array?"uint8array":n.arraybuffer&&f instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(f){if(!n[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(f){var g,y,k="";for(y=0;y<(f||"").length;y++)k+="\\x"+((g=f.charCodeAt(y))<16?"0":"")+g.toString(16).toUpperCase();return k},r.delay=function(f,g,y){setImmediate(function(){f.apply(y||null,g||[])})},r.inherits=function(f,g){function y(){}y.prototype=g.prototype,f.prototype=new y},r.extend=function(){var f,g,y={};for(f=0;f<arguments.length;f++)for(g in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],g)&&y[g]===void 0&&(y[g]=arguments[f][g]);return y},r.prepareContent=function(f,g,y,k,S){return c.Promise.resolve(g).then(function(C){return n.blob&&(C instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(C))!==-1)&&typeof FileReader<"u"?new c.Promise(function(A,B){var F=new FileReader;F.onload=function(V){A(V.target.result)},F.onerror=function(V){B(V.target.error)},F.readAsArrayBuffer(C)}):C}).then(function(C){var A=r.getTypeOf(C);return A?(A==="arraybuffer"?C=r.transformTo("uint8array",C):A==="string"&&(S?C=o.decode(C):y&&k!==!0&&(C=function(B){return m(B,n.uint8array?new Uint8Array(B.length):new Array(B.length))}(C))),C):c.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,r){var n=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),c=t("./zipEntry"),h=t("./support");function m(d){this.files=[],this.loadOptions=d}m.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(b)+", expected "+o.pretty(d)+")")}},isSignature:function(d,b){var p=this.reader.index;this.reader.setIndex(d);var w=this.reader.readString(4)===b;return this.reader.setIndex(p),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),b=h.uint8array?"uint8array":"array",p=o.transformTo(b,d);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,b,p,w=this.zip64EndOfCentralSize-44;0<w;)d=this.reader.readInt(2),b=this.reader.readInt(4),p=this.reader.readData(b),this.zip64ExtensibleData[d]={id:d,length:b,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,b;for(d=0;d<this.files.length;d++)b=this.files[d],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(d=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var b=d;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var w=b-p;if(0<w)this.isSignature(b,a.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(d){this.reader=n(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=m},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,r){var n=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),c=t("./crc32"),h=t("./utf8"),m=t("./compressions"),d=t("./support");function b(p,w){this.options=p,this.loadOptions=w}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var w,f;if(p.skip(22),this.fileNameLength=p.readInt(2),f=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(g){for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)&&m[y].magic===g)return m[y];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,w,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var w=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(w),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=n(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var w,f,g,y=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<y;)w=p.readInt(2),f=p.readInt(2),g=p.readData(f),this.extraFields[w]={id:w,length:f,value:g};p.setIndex(y)},handleUTF8:function(){var p=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var f=o.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var y=o.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(y)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var w=n(p.value);return w.readInt(1)!==1||c(this.fileName)!==w.readInt(4)?null:h.utf8decode(w.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var w=n(p.value);return w.readInt(1)!==1||c(this.fileComment)!==w.readInt(4)?null:h.utf8decode(w.readData(p.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,r){function n(w,f,g){this.name=w,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=f,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),c=t("./utf8"),h=t("./compressedObject"),m=t("./stream/GenericWorker");n.prototype={internalStream:function(w){var f=null,g="string";try{if(!w)throw new Error("No output type specified.");var y=(g=w.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),f=this._decompressWorker();var k=!this._dataBinary;k&&!y&&(f=f.pipe(new c.Utf8EncodeWorker)),!k&&y&&(f=f.pipe(new c.Utf8DecodeWorker))}catch(S){(f=new m("error")).error(S)}return new o(f,g,"")},async:function(w,f){return this.internalStream(w).accumulate(f)},nodeStream:function(w,f){return this.internalStream(w||"nodebuffer").toNodejsStream(f)},_compressWorker:function(w,f){if(this._data instanceof h&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new c.Utf8EncodeWorker)),h.createWorkerFrom(g,w,f)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof m?this._data:new a(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<d.length;p++)n.prototype[d[p]]=b;i.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,r){(function(n){var o,a,c=n.MutationObserver||n.WebKitMutationObserver;if(c){var h=0,m=new c(w),d=n.document.createTextNode("");m.observe(d,{characterData:!0}),o=function(){d.data=h=++h%2}}else if(n.setImmediate||n.MessageChannel===void 0)o="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var f=n.document.createElement("script");f.onreadystatechange=function(){w(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},n.document.documentElement.appendChild(f)}:function(){setTimeout(w,0)};else{var b=new n.MessageChannel;b.port1.onmessage=w,o=function(){b.port2.postMessage(0)}}var p=[];function w(){var f,g;a=!0;for(var y=p.length;y;){for(g=p,p=[],f=-1;++f<y;)g[f]();y=p.length}a=!1}i.exports=function(f){p.push(f)!==1||a||o()}}).call(this,typeof Ue<"u"?Ue:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,r){var n=t("immediate");function o(){}var a={},c=["REJECTED"],h=["FULFILLED"],m=["PENDING"];function d(y){if(typeof y!="function")throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,y!==o&&f(this,y)}function b(y,k,S){this.promise=y,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function p(y,k,S){n(function(){var C;try{C=k(S)}catch(A){return a.reject(y,A)}C===y?a.reject(y,new TypeError("Cannot resolve promise with itself")):a.resolve(y,C)})}function w(y){var k=y&&y.then;if(y&&(typeof y=="object"||typeof y=="function")&&typeof k=="function")return function(){k.apply(y,arguments)}}function f(y,k){var S=!1;function C(F){S||(S=!0,a.reject(y,F))}function A(F){S||(S=!0,a.resolve(y,F))}var B=g(function(){k(A,C)});B.status==="error"&&C(B.value)}function g(y,k){var S={};try{S.value=y(k),S.status="success"}catch(C){S.status="error",S.value=C}return S}(i.exports=d).prototype.finally=function(y){if(typeof y!="function")return this;var k=this.constructor;return this.then(function(S){return k.resolve(y()).then(function(){return S})},function(S){return k.resolve(y()).then(function(){throw S})})},d.prototype.catch=function(y){return this.then(null,y)},d.prototype.then=function(y,k){if(typeof y!="function"&&this.state===h||typeof k!="function"&&this.state===c)return this;var S=new this.constructor(o);return this.state!==m?p(S,this.state===h?y:k,this.outcome):this.queue.push(new b(S,y,k)),S},b.prototype.callFulfilled=function(y){a.resolve(this.promise,y)},b.prototype.otherCallFulfilled=function(y){p(this.promise,this.onFulfilled,y)},b.prototype.callRejected=function(y){a.reject(this.promise,y)},b.prototype.otherCallRejected=function(y){p(this.promise,this.onRejected,y)},a.resolve=function(y,k){var S=g(w,k);if(S.status==="error")return a.reject(y,S.value);var C=S.value;if(C)f(y,C);else{y.state=h,y.outcome=k;for(var A=-1,B=y.queue.length;++A<B;)y.queue[A].callFulfilled(k)}return y},a.reject=function(y,k){y.state=c,y.outcome=k;for(var S=-1,C=y.queue.length;++S<C;)y.queue[S].callRejected(k);return y},d.resolve=function(y){return y instanceof this?y:a.resolve(new this(o),y)},d.reject=function(y){var k=new this(o);return a.reject(k,y)},d.all=function(y){var k=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=y.length,C=!1;if(!S)return this.resolve([]);for(var A=new Array(S),B=0,F=-1,V=new this(o);++F<S;)G(y[F],F);return V;function G(X,ae){k.resolve(X).then(function(T){A[ae]=T,++B!==S||C||(C=!0,a.resolve(V,A))},function(T){C||(C=!0,a.reject(V,T))})}},d.race=function(y){var k=this;if(Object.prototype.toString.call(y)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=y.length,C=!1;if(!S)return this.resolve([]);for(var A=-1,B=new this(o);++A<S;)F=y[A],k.resolve(F).then(function(V){C||(C=!0,a.resolve(B,V))},function(V){C||(C=!0,a.reject(B,V))});var F;return B}},{immediate:36}],38:[function(t,i,r){var n={};(0,t("./lib/utils/common").assign)(n,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,r){var n=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),c=t("./zlib/messages"),h=t("./zlib/zstream"),m=Object.prototype.toString,d=0,b=-1,p=0,w=8;function f(y){if(!(this instanceof f))return new f(y);this.options=o.assign({level:b,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},y||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var S=n.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(S!==d)throw new Error(c[S]);if(k.header&&n.deflateSetHeader(this.strm,k.header),k.dictionary){var C;if(C=typeof k.dictionary=="string"?a.string2buf(k.dictionary):m.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(S=n.deflateSetDictionary(this.strm,C))!==d)throw new Error(c[S]);this._dict_set=!0}}function g(y,k){var S=new f(k);if(S.push(y,!0),S.err)throw S.msg||c[S.err];return S.result}f.prototype.push=function(y,k){var S,C,A=this.strm,B=this.options.chunkSize;if(this.ended)return!1;C=k===~~k?k:k===!0?4:0,typeof y=="string"?A.input=a.string2buf(y):m.call(y)==="[object ArrayBuffer]"?A.input=new Uint8Array(y):A.input=y,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(B),A.next_out=0,A.avail_out=B),(S=n.deflate(A,C))!==1&&S!==d)return this.onEnd(S),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||C!==4&&C!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(A.output,A.next_out))):this.onData(o.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&S!==1);return C===4?(S=n.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===d):C!==2||(this.onEnd(d),!(A.avail_out=0))},f.prototype.onData=function(y){this.chunks.push(y)},f.prototype.onEnd=function(y){y===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},r.Deflate=f,r.deflate=g,r.deflateRaw=function(y,k){return(k=k||{}).raw=!0,g(y,k)},r.gzip=function(y,k){return(k=k||{}).gzip=!0,g(y,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,r){var n=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),c=t("./zlib/constants"),h=t("./zlib/messages"),m=t("./zlib/zstream"),d=t("./zlib/gzheader"),b=Object.prototype.toString;function p(f){if(!(this instanceof p))return new p(f);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},f||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||f&&f.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&!(15&g.windowBits)&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var y=n.inflateInit2(this.strm,g.windowBits);if(y!==c.Z_OK)throw new Error(h[y]);this.header=new d,n.inflateGetHeader(this.strm,this.header)}function w(f,g){var y=new p(g);if(y.push(f,!0),y.err)throw y.msg||h[y.err];return y.result}p.prototype.push=function(f,g){var y,k,S,C,A,B,F=this.strm,V=this.options.chunkSize,G=this.options.dictionary,X=!1;if(this.ended)return!1;k=g===~~g?g:g===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof f=="string"?F.input=a.binstring2buf(f):b.call(f)==="[object ArrayBuffer]"?F.input=new Uint8Array(f):F.input=f,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new o.Buf8(V),F.next_out=0,F.avail_out=V),(y=n.inflate(F,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&G&&(B=typeof G=="string"?a.string2buf(G):b.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,y=n.inflateSetDictionary(this.strm,B)),y===c.Z_BUF_ERROR&&X===!0&&(y=c.Z_OK,X=!1),y!==c.Z_STREAM_END&&y!==c.Z_OK)return this.onEnd(y),!(this.ended=!0);F.next_out&&(F.avail_out!==0&&y!==c.Z_STREAM_END&&(F.avail_in!==0||k!==c.Z_FINISH&&k!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=a.utf8border(F.output,F.next_out),C=F.next_out-S,A=a.buf2string(F.output,S),F.next_out=C,F.avail_out=V-C,C&&o.arraySet(F.output,F.output,S,C,0),this.onData(A)):this.onData(o.shrinkBuf(F.output,F.next_out)))),F.avail_in===0&&F.avail_out===0&&(X=!0)}while((0<F.avail_in||F.avail_out===0)&&y!==c.Z_STREAM_END);return y===c.Z_STREAM_END&&(k=c.Z_FINISH),k===c.Z_FINISH?(y=n.inflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===c.Z_OK):k!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(F.avail_out=0))},p.prototype.onData=function(f){this.chunks.push(f)},p.prototype.onEnd=function(f){f===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},r.Inflate=p,r.inflate=w,r.inflateRaw=function(f,g){return(g=g||{}).raw=!0,w(f,g)},r.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,r){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(c){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var m=h.shift();if(m){if(typeof m!="object")throw new TypeError(m+"must be non-object");for(var d in m)m.hasOwnProperty(d)&&(c[d]=m[d])}}return c},r.shrinkBuf=function(c,h){return c.length===h?c:c.subarray?c.subarray(0,h):(c.length=h,c)};var o={arraySet:function(c,h,m,d,b){if(h.subarray&&c.subarray)c.set(h.subarray(m,m+d),b);else for(var p=0;p<d;p++)c[b+p]=h[m+p]},flattenChunks:function(c){var h,m,d,b,p,w;for(h=d=0,m=c.length;h<m;h++)d+=c[h].length;for(w=new Uint8Array(d),h=b=0,m=c.length;h<m;h++)p=c[h],w.set(p,b),b+=p.length;return w}},a={arraySet:function(c,h,m,d,b){for(var p=0;p<d;p++)c[b+p]=h[m+p]},flattenChunks:function(c){return[].concat.apply([],c)}};r.setTyped=function(c){c?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(n)},{}],42:[function(t,i,r){var n=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var c=new n.Buf8(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function m(d,b){if(b<65537&&(d.subarray&&a||!d.subarray&&o))return String.fromCharCode.apply(null,n.shrinkBuf(d,b));for(var p="",w=0;w<b;w++)p+=String.fromCharCode(d[w]);return p}c[254]=c[254]=1,r.string2buf=function(d){var b,p,w,f,g,y=d.length,k=0;for(f=0;f<y;f++)(64512&(p=d.charCodeAt(f)))==55296&&f+1<y&&(64512&(w=d.charCodeAt(f+1)))==56320&&(p=65536+(p-55296<<10)+(w-56320),f++),k+=p<128?1:p<2048?2:p<65536?3:4;for(b=new n.Buf8(k),f=g=0;g<k;f++)(64512&(p=d.charCodeAt(f)))==55296&&f+1<y&&(64512&(w=d.charCodeAt(f+1)))==56320&&(p=65536+(p-55296<<10)+(w-56320),f++),p<128?b[g++]=p:(p<2048?b[g++]=192|p>>>6:(p<65536?b[g++]=224|p>>>12:(b[g++]=240|p>>>18,b[g++]=128|p>>>12&63),b[g++]=128|p>>>6&63),b[g++]=128|63&p);return b},r.buf2binstring=function(d){return m(d,d.length)},r.binstring2buf=function(d){for(var b=new n.Buf8(d.length),p=0,w=b.length;p<w;p++)b[p]=d.charCodeAt(p);return b},r.buf2string=function(d,b){var p,w,f,g,y=b||d.length,k=new Array(2*y);for(p=w=0;p<y;)if((f=d[p++])<128)k[w++]=f;else if(4<(g=c[f]))k[w++]=65533,p+=g-1;else{for(f&=g===2?31:g===3?15:7;1<g&&p<y;)f=f<<6|63&d[p++],g--;1<g?k[w++]=65533:f<65536?k[w++]=f:(f-=65536,k[w++]=55296|f>>10&1023,k[w++]=56320|1023&f)}return m(k,w)},r.utf8border=function(d,b){var p;for((b=b||d.length)>d.length&&(b=d.length),p=b-1;0<=p&&(192&d[p])==128;)p--;return p<0||p===0?b:p+c[d[p]]>b?p:b}},{"./common":41}],43:[function(t,i,r){i.exports=function(n,o,a,c){for(var h=65535&n|0,m=n>>>16&65535|0,d=0;a!==0;){for(a-=d=2e3<a?2e3:a;m=m+(h=h+o[c++]|0)|0,--d;);h%=65521,m%=65521}return h|m<<16|0}},{}],44:[function(t,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,r){var n=function(){for(var o,a=[],c=0;c<256;c++){o=c;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;a[c]=o}return a}();i.exports=function(o,a,c,h){var m=n,d=h+c;o^=-1;for(var b=h;b<d;b++)o=o>>>8^m[255&(o^a[b])];return-1^o}},{}],46:[function(t,i,r){var n,o=t("../utils/common"),a=t("./trees"),c=t("./adler32"),h=t("./crc32"),m=t("./messages"),d=0,b=4,p=0,w=-2,f=-1,g=4,y=2,k=8,S=9,C=286,A=30,B=19,F=2*C+1,V=15,G=3,X=258,ae=X+G+1,T=42,j=113,u=1,z=2,ue=3,H=4;function de(l,I){return l.msg=m[I],I}function Z(l){return(l<<1)-(4<l?9:0)}function le(l){for(var I=l.length;0<=--I;)l[I]=0}function D(l){var I=l.state,L=I.pending;L>l.avail_out&&(L=l.avail_out),L!==0&&(o.arraySet(l.output,I.pending_buf,I.pending_out,L,l.next_out),l.next_out+=L,I.pending_out+=L,l.total_out+=L,l.avail_out-=L,I.pending-=L,I.pending===0&&(I.pending_out=0))}function R(l,I){a._tr_flush_block(l,0<=l.block_start?l.block_start:-1,l.strstart-l.block_start,I),l.block_start=l.strstart,D(l.strm)}function ne(l,I){l.pending_buf[l.pending++]=I}function ee(l,I){l.pending_buf[l.pending++]=I>>>8&255,l.pending_buf[l.pending++]=255&I}function Q(l,I){var L,E,_=l.max_chain_length,x=l.strstart,N=l.prev_length,q=l.nice_match,$=l.strstart>l.w_size-ae?l.strstart-(l.w_size-ae):0,K=l.window,te=l.w_mask,J=l.prev,ie=l.strstart+X,_e=K[x+N-1],he=K[x+N];l.prev_length>=l.good_match&&(_>>=2),q>l.lookahead&&(q=l.lookahead);do if(K[(L=I)+N]===he&&K[L+N-1]===_e&&K[L]===K[x]&&K[++L]===K[x+1]){x+=2,L++;do;while(K[++x]===K[++L]&&K[++x]===K[++L]&&K[++x]===K[++L]&&K[++x]===K[++L]&&K[++x]===K[++L]&&K[++x]===K[++L]&&K[++x]===K[++L]&&K[++x]===K[++L]&&x<ie);if(E=X-(ie-x),x=ie-X,N<E){if(l.match_start=I,q<=(N=E))break;_e=K[x+N-1],he=K[x+N]}}while((I=J[I&te])>$&&--_!=0);return N<=l.lookahead?N:l.lookahead}function Ee(l){var I,L,E,_,x,N,q,$,K,te,J=l.w_size;do{if(_=l.window_size-l.lookahead-l.strstart,l.strstart>=J+(J-ae)){for(o.arraySet(l.window,l.window,J,J,0),l.match_start-=J,l.strstart-=J,l.block_start-=J,I=L=l.hash_size;E=l.head[--I],l.head[I]=J<=E?E-J:0,--L;);for(I=L=J;E=l.prev[--I],l.prev[I]=J<=E?E-J:0,--L;);_+=J}if(l.strm.avail_in===0)break;if(N=l.strm,q=l.window,$=l.strstart+l.lookahead,K=_,te=void 0,te=N.avail_in,K<te&&(te=K),L=te===0?0:(N.avail_in-=te,o.arraySet(q,N.input,N.next_in,te,$),N.state.wrap===1?N.adler=c(N.adler,q,te,$):N.state.wrap===2&&(N.adler=h(N.adler,q,te,$)),N.next_in+=te,N.total_in+=te,te),l.lookahead+=L,l.lookahead+l.insert>=G)for(x=l.strstart-l.insert,l.ins_h=l.window[x],l.ins_h=(l.ins_h<<l.hash_shift^l.window[x+1])&l.hash_mask;l.insert&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[x+G-1])&l.hash_mask,l.prev[x&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=x,x++,l.insert--,!(l.lookahead+l.insert<G)););}while(l.lookahead<ae&&l.strm.avail_in!==0)}function Se(l,I){for(var L,E;;){if(l.lookahead<ae){if(Ee(l),l.lookahead<ae&&I===d)return u;if(l.lookahead===0)break}if(L=0,l.lookahead>=G&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+G-1])&l.hash_mask,L=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),L!==0&&l.strstart-L<=l.w_size-ae&&(l.match_length=Q(l,L)),l.match_length>=G)if(E=a._tr_tally(l,l.strstart-l.match_start,l.match_length-G),l.lookahead-=l.match_length,l.match_length<=l.max_lazy_match&&l.lookahead>=G){for(l.match_length--;l.strstart++,l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+G-1])&l.hash_mask,L=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart,--l.match_length!=0;);l.strstart++}else l.strstart+=l.match_length,l.match_length=0,l.ins_h=l.window[l.strstart],l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+1])&l.hash_mask;else E=a._tr_tally(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++;if(E&&(R(l,!1),l.strm.avail_out===0))return u}return l.insert=l.strstart<G-1?l.strstart:G-1,I===b?(R(l,!0),l.strm.avail_out===0?ue:H):l.last_lit&&(R(l,!1),l.strm.avail_out===0)?u:z}function pe(l,I){for(var L,E,_;;){if(l.lookahead<ae){if(Ee(l),l.lookahead<ae&&I===d)return u;if(l.lookahead===0)break}if(L=0,l.lookahead>=G&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+G-1])&l.hash_mask,L=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),l.prev_length=l.match_length,l.prev_match=l.match_start,l.match_length=G-1,L!==0&&l.prev_length<l.max_lazy_match&&l.strstart-L<=l.w_size-ae&&(l.match_length=Q(l,L),l.match_length<=5&&(l.strategy===1||l.match_length===G&&4096<l.strstart-l.match_start)&&(l.match_length=G-1)),l.prev_length>=G&&l.match_length<=l.prev_length){for(_=l.strstart+l.lookahead-G,E=a._tr_tally(l,l.strstart-1-l.prev_match,l.prev_length-G),l.lookahead-=l.prev_length-1,l.prev_length-=2;++l.strstart<=_&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+G-1])&l.hash_mask,L=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),--l.prev_length!=0;);if(l.match_available=0,l.match_length=G-1,l.strstart++,E&&(R(l,!1),l.strm.avail_out===0))return u}else if(l.match_available){if((E=a._tr_tally(l,0,l.window[l.strstart-1]))&&R(l,!1),l.strstart++,l.lookahead--,l.strm.avail_out===0)return u}else l.match_available=1,l.strstart++,l.lookahead--}return l.match_available&&(E=a._tr_tally(l,0,l.window[l.strstart-1]),l.match_available=0),l.insert=l.strstart<G-1?l.strstart:G-1,I===b?(R(l,!0),l.strm.avail_out===0?ue:H):l.last_lit&&(R(l,!1),l.strm.avail_out===0)?u:z}function me(l,I,L,E,_){this.good_length=l,this.max_lazy=I,this.nice_length=L,this.max_chain=E,this.func=_}function Te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*F),this.dyn_dtree=new o.Buf16(2*(2*A+1)),this.bl_tree=new o.Buf16(2*(2*B+1)),le(this.dyn_ltree),le(this.dyn_dtree),le(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(V+1),this.heap=new o.Buf16(2*C+1),le(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*C+1),le(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ke(l){var I;return l&&l.state?(l.total_in=l.total_out=0,l.data_type=y,(I=l.state).pending=0,I.pending_out=0,I.wrap<0&&(I.wrap=-I.wrap),I.status=I.wrap?T:j,l.adler=I.wrap===2?0:1,I.last_flush=d,a._tr_init(I),p):de(l,w)}function Ge(l){var I=ke(l);return I===p&&function(L){L.window_size=2*L.w_size,le(L.head),L.max_lazy_match=n[L.level].max_lazy,L.good_match=n[L.level].good_length,L.nice_match=n[L.level].nice_length,L.max_chain_length=n[L.level].max_chain,L.strstart=0,L.block_start=0,L.lookahead=0,L.insert=0,L.match_length=L.prev_length=G-1,L.match_available=0,L.ins_h=0}(l.state),I}function Fe(l,I,L,E,_,x){if(!l)return w;var N=1;if(I===f&&(I=6),E<0?(N=0,E=-E):15<E&&(N=2,E-=16),_<1||S<_||L!==k||E<8||15<E||I<0||9<I||x<0||g<x)return de(l,w);E===8&&(E=9);var q=new Te;return(l.state=q).strm=l,q.wrap=N,q.gzhead=null,q.w_bits=E,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=_+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+G-1)/G),q.window=new o.Buf8(2*q.w_size),q.head=new o.Buf16(q.hash_size),q.prev=new o.Buf16(q.w_size),q.lit_bufsize=1<<_+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new o.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=I,q.strategy=x,q.method=L,Ge(l)}n=[new me(0,0,0,0,function(l,I){var L=65535;for(L>l.pending_buf_size-5&&(L=l.pending_buf_size-5);;){if(l.lookahead<=1){if(Ee(l),l.lookahead===0&&I===d)return u;if(l.lookahead===0)break}l.strstart+=l.lookahead,l.lookahead=0;var E=l.block_start+L;if((l.strstart===0||l.strstart>=E)&&(l.lookahead=l.strstart-E,l.strstart=E,R(l,!1),l.strm.avail_out===0)||l.strstart-l.block_start>=l.w_size-ae&&(R(l,!1),l.strm.avail_out===0))return u}return l.insert=0,I===b?(R(l,!0),l.strm.avail_out===0?ue:H):(l.strstart>l.block_start&&(R(l,!1),l.strm.avail_out),u)}),new me(4,4,8,4,Se),new me(4,5,16,8,Se),new me(4,6,32,32,Se),new me(4,4,16,16,pe),new me(8,16,32,32,pe),new me(8,16,128,128,pe),new me(8,32,128,256,pe),new me(32,128,258,1024,pe),new me(32,258,258,4096,pe)],r.deflateInit=function(l,I){return Fe(l,I,k,15,8,0)},r.deflateInit2=Fe,r.deflateReset=Ge,r.deflateResetKeep=ke,r.deflateSetHeader=function(l,I){return l&&l.state?l.state.wrap!==2?w:(l.state.gzhead=I,p):w},r.deflate=function(l,I){var L,E,_,x;if(!l||!l.state||5<I||I<0)return l?de(l,w):w;if(E=l.state,!l.output||!l.input&&l.avail_in!==0||E.status===666&&I!==b)return de(l,l.avail_out===0?-5:w);if(E.strm=l,L=E.last_flush,E.last_flush=I,E.status===T)if(E.wrap===2)l.adler=0,ne(E,31),ne(E,139),ne(E,8),E.gzhead?(ne(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),ne(E,255&E.gzhead.time),ne(E,E.gzhead.time>>8&255),ne(E,E.gzhead.time>>16&255),ne(E,E.gzhead.time>>24&255),ne(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ne(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(ne(E,255&E.gzhead.extra.length),ne(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(l.adler=h(l.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(ne(E,0),ne(E,0),ne(E,0),ne(E,0),ne(E,0),ne(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ne(E,3),E.status=j);else{var N=k+(E.w_bits-8<<4)<<8;N|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(N|=32),N+=31-N%31,E.status=j,ee(E,N),E.strstart!==0&&(ee(E,l.adler>>>16),ee(E,65535&l.adler)),l.adler=1}if(E.status===69)if(E.gzhead.extra){for(_=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>_&&(l.adler=h(l.adler,E.pending_buf,E.pending-_,_)),D(l),_=E.pending,E.pending!==E.pending_buf_size));)ne(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>_&&(l.adler=h(l.adler,E.pending_buf,E.pending-_,_)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){_=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>_&&(l.adler=h(l.adler,E.pending_buf,E.pending-_,_)),D(l),_=E.pending,E.pending===E.pending_buf_size)){x=1;break}x=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,ne(E,x)}while(x!==0);E.gzhead.hcrc&&E.pending>_&&(l.adler=h(l.adler,E.pending_buf,E.pending-_,_)),x===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){_=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>_&&(l.adler=h(l.adler,E.pending_buf,E.pending-_,_)),D(l),_=E.pending,E.pending===E.pending_buf_size)){x=1;break}x=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,ne(E,x)}while(x!==0);E.gzhead.hcrc&&E.pending>_&&(l.adler=h(l.adler,E.pending_buf,E.pending-_,_)),x===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&D(l),E.pending+2<=E.pending_buf_size&&(ne(E,255&l.adler),ne(E,l.adler>>8&255),l.adler=0,E.status=j)):E.status=j),E.pending!==0){if(D(l),l.avail_out===0)return E.last_flush=-1,p}else if(l.avail_in===0&&Z(I)<=Z(L)&&I!==b)return de(l,-5);if(E.status===666&&l.avail_in!==0)return de(l,-5);if(l.avail_in!==0||E.lookahead!==0||I!==d&&E.status!==666){var q=E.strategy===2?function($,K){for(var te;;){if($.lookahead===0&&(Ee($),$.lookahead===0)){if(K===d)return u;break}if($.match_length=0,te=a._tr_tally($,0,$.window[$.strstart]),$.lookahead--,$.strstart++,te&&(R($,!1),$.strm.avail_out===0))return u}return $.insert=0,K===b?(R($,!0),$.strm.avail_out===0?ue:H):$.last_lit&&(R($,!1),$.strm.avail_out===0)?u:z}(E,I):E.strategy===3?function($,K){for(var te,J,ie,_e,he=$.window;;){if($.lookahead<=X){if(Ee($),$.lookahead<=X&&K===d)return u;if($.lookahead===0)break}if($.match_length=0,$.lookahead>=G&&0<$.strstart&&(J=he[ie=$.strstart-1])===he[++ie]&&J===he[++ie]&&J===he[++ie]){_e=$.strstart+X;do;while(J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&ie<_e);$.match_length=X-(_e-ie),$.match_length>$.lookahead&&($.match_length=$.lookahead)}if($.match_length>=G?(te=a._tr_tally($,1,$.match_length-G),$.lookahead-=$.match_length,$.strstart+=$.match_length,$.match_length=0):(te=a._tr_tally($,0,$.window[$.strstart]),$.lookahead--,$.strstart++),te&&(R($,!1),$.strm.avail_out===0))return u}return $.insert=0,K===b?(R($,!0),$.strm.avail_out===0?ue:H):$.last_lit&&(R($,!1),$.strm.avail_out===0)?u:z}(E,I):n[E.level].func(E,I);if(q!==ue&&q!==H||(E.status=666),q===u||q===ue)return l.avail_out===0&&(E.last_flush=-1),p;if(q===z&&(I===1?a._tr_align(E):I!==5&&(a._tr_stored_block(E,0,0,!1),I===3&&(le(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),D(l),l.avail_out===0))return E.last_flush=-1,p}return I!==b?p:E.wrap<=0?1:(E.wrap===2?(ne(E,255&l.adler),ne(E,l.adler>>8&255),ne(E,l.adler>>16&255),ne(E,l.adler>>24&255),ne(E,255&l.total_in),ne(E,l.total_in>>8&255),ne(E,l.total_in>>16&255),ne(E,l.total_in>>24&255)):(ee(E,l.adler>>>16),ee(E,65535&l.adler)),D(l),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?p:1)},r.deflateEnd=function(l){var I;return l&&l.state?(I=l.state.status)!==T&&I!==69&&I!==73&&I!==91&&I!==103&&I!==j&&I!==666?de(l,w):(l.state=null,I===j?de(l,-3):p):w},r.deflateSetDictionary=function(l,I){var L,E,_,x,N,q,$,K,te=I.length;if(!l||!l.state||(x=(L=l.state).wrap)===2||x===1&&L.status!==T||L.lookahead)return w;for(x===1&&(l.adler=c(l.adler,I,te,0)),L.wrap=0,te>=L.w_size&&(x===0&&(le(L.head),L.strstart=0,L.block_start=0,L.insert=0),K=new o.Buf8(L.w_size),o.arraySet(K,I,te-L.w_size,L.w_size,0),I=K,te=L.w_size),N=l.avail_in,q=l.next_in,$=l.input,l.avail_in=te,l.next_in=0,l.input=I,Ee(L);L.lookahead>=G;){for(E=L.strstart,_=L.lookahead-(G-1);L.ins_h=(L.ins_h<<L.hash_shift^L.window[E+G-1])&L.hash_mask,L.prev[E&L.w_mask]=L.head[L.ins_h],L.head[L.ins_h]=E,E++,--_;);L.strstart=E,L.lookahead=G-1,Ee(L)}return L.strstart+=L.lookahead,L.block_start=L.strstart,L.insert=L.lookahead,L.lookahead=0,L.match_length=L.prev_length=G-1,L.match_available=0,l.next_in=q,l.input=$,l.avail_in=N,L.wrap=x,p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,r){i.exports=function(n,o){var a,c,h,m,d,b,p,w,f,g,y,k,S,C,A,B,F,V,G,X,ae,T,j,u,z;a=n.state,c=n.next_in,u=n.input,h=c+(n.avail_in-5),m=n.next_out,z=n.output,d=m-(o-n.avail_out),b=m+(n.avail_out-257),p=a.dmax,w=a.wsize,f=a.whave,g=a.wnext,y=a.window,k=a.hold,S=a.bits,C=a.lencode,A=a.distcode,B=(1<<a.lenbits)-1,F=(1<<a.distbits)-1;e:do{S<15&&(k+=u[c++]<<S,S+=8,k+=u[c++]<<S,S+=8),V=C[k&B];t:for(;;){if(k>>>=G=V>>>24,S-=G,(G=V>>>16&255)===0)z[m++]=65535&V;else{if(!(16&G)){if(!(64&G)){V=C[(65535&V)+(k&(1<<G)-1)];continue t}if(32&G){a.mode=12;break e}n.msg="invalid literal/length code",a.mode=30;break e}X=65535&V,(G&=15)&&(S<G&&(k+=u[c++]<<S,S+=8),X+=k&(1<<G)-1,k>>>=G,S-=G),S<15&&(k+=u[c++]<<S,S+=8,k+=u[c++]<<S,S+=8),V=A[k&F];r:for(;;){if(k>>>=G=V>>>24,S-=G,!(16&(G=V>>>16&255))){if(!(64&G)){V=A[(65535&V)+(k&(1<<G)-1)];continue r}n.msg="invalid distance code",a.mode=30;break e}if(ae=65535&V,S<(G&=15)&&(k+=u[c++]<<S,(S+=8)<G&&(k+=u[c++]<<S,S+=8)),p<(ae+=k&(1<<G)-1)){n.msg="invalid distance too far back",a.mode=30;break e}if(k>>>=G,S-=G,(G=m-d)<ae){if(f<(G=ae-G)&&a.sane){n.msg="invalid distance too far back",a.mode=30;break e}if(j=y,(T=0)===g){if(T+=w-G,G<X){for(X-=G;z[m++]=y[T++],--G;);T=m-ae,j=z}}else if(g<G){if(T+=w+g-G,(G-=g)<X){for(X-=G;z[m++]=y[T++],--G;);if(T=0,g<X){for(X-=G=g;z[m++]=y[T++],--G;);T=m-ae,j=z}}}else if(T+=g-G,G<X){for(X-=G;z[m++]=y[T++],--G;);T=m-ae,j=z}for(;2<X;)z[m++]=j[T++],z[m++]=j[T++],z[m++]=j[T++],X-=3;X&&(z[m++]=j[T++],1<X&&(z[m++]=j[T++]))}else{for(T=m-ae;z[m++]=z[T++],z[m++]=z[T++],z[m++]=z[T++],2<(X-=3););X&&(z[m++]=z[T++],1<X&&(z[m++]=z[T++]))}break}}break}}while(c<h&&m<b);c-=X=S>>3,k&=(1<<(S-=X<<3))-1,n.next_in=c,n.next_out=m,n.avail_in=c<h?h-c+5:5-(c-h),n.avail_out=m<b?b-m+257:257-(m-b),a.hold=k,a.bits=S}},{}],49:[function(t,i,r){var n=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),c=t("./inffast"),h=t("./inftrees"),m=1,d=2,b=0,p=-2,w=1,f=852,g=592;function y(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(T){var j;return T&&T.state?(j=T.state,T.total_in=T.total_out=j.total=0,T.msg="",j.wrap&&(T.adler=1&j.wrap),j.mode=w,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new n.Buf32(f),j.distcode=j.distdyn=new n.Buf32(g),j.sane=1,j.back=-1,b):p}function C(T){var j;return T&&T.state?((j=T.state).wsize=0,j.whave=0,j.wnext=0,S(T)):p}function A(T,j){var u,z;return T&&T.state?(z=T.state,j<0?(u=0,j=-j):(u=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?p:(z.window!==null&&z.wbits!==j&&(z.window=null),z.wrap=u,z.wbits=j,C(T))):p}function B(T,j){var u,z;return T?(z=new k,(T.state=z).window=null,(u=A(T,j))!==b&&(T.state=null),u):p}var F,V,G=!0;function X(T){if(G){var j;for(F=new n.Buf32(512),V=new n.Buf32(32),j=0;j<144;)T.lens[j++]=8;for(;j<256;)T.lens[j++]=9;for(;j<280;)T.lens[j++]=7;for(;j<288;)T.lens[j++]=8;for(h(m,T.lens,0,288,F,0,T.work,{bits:9}),j=0;j<32;)T.lens[j++]=5;h(d,T.lens,0,32,V,0,T.work,{bits:5}),G=!1}T.lencode=F,T.lenbits=9,T.distcode=V,T.distbits=5}function ae(T,j,u,z){var ue,H=T.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new n.Buf8(H.wsize)),z>=H.wsize?(n.arraySet(H.window,j,u-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(z<(ue=H.wsize-H.wnext)&&(ue=z),n.arraySet(H.window,j,u-z,ue,H.wnext),(z-=ue)?(n.arraySet(H.window,j,u-z,z,0),H.wnext=z,H.whave=H.wsize):(H.wnext+=ue,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=ue))),0}r.inflateReset=C,r.inflateReset2=A,r.inflateResetKeep=S,r.inflateInit=function(T){return B(T,15)},r.inflateInit2=B,r.inflate=function(T,j){var u,z,ue,H,de,Z,le,D,R,ne,ee,Q,Ee,Se,pe,me,Te,ke,Ge,Fe,l,I,L,E,_=0,x=new n.Buf8(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return p;(u=T.state).mode===12&&(u.mode=13),de=T.next_out,ue=T.output,le=T.avail_out,H=T.next_in,z=T.input,Z=T.avail_in,D=u.hold,R=u.bits,ne=Z,ee=le,I=b;e:for(;;)switch(u.mode){case w:if(u.wrap===0){u.mode=13;break}for(;R<16;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(2&u.wrap&&D===35615){x[u.check=0]=255&D,x[1]=D>>>8&255,u.check=a(u.check,x,2,0),R=D=0,u.mode=2;break}if(u.flags=0,u.head&&(u.head.done=!1),!(1&u.wrap)||(((255&D)<<8)+(D>>8))%31){T.msg="incorrect header check",u.mode=30;break}if((15&D)!=8){T.msg="unknown compression method",u.mode=30;break}if(R-=4,l=8+(15&(D>>>=4)),u.wbits===0)u.wbits=l;else if(l>u.wbits){T.msg="invalid window size",u.mode=30;break}u.dmax=1<<l,T.adler=u.check=1,u.mode=512&D?10:12,R=D=0;break;case 2:for(;R<16;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(u.flags=D,(255&u.flags)!=8){T.msg="unknown compression method",u.mode=30;break}if(57344&u.flags){T.msg="unknown header flags set",u.mode=30;break}u.head&&(u.head.text=D>>8&1),512&u.flags&&(x[0]=255&D,x[1]=D>>>8&255,u.check=a(u.check,x,2,0)),R=D=0,u.mode=3;case 3:for(;R<32;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}u.head&&(u.head.time=D),512&u.flags&&(x[0]=255&D,x[1]=D>>>8&255,x[2]=D>>>16&255,x[3]=D>>>24&255,u.check=a(u.check,x,4,0)),R=D=0,u.mode=4;case 4:for(;R<16;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}u.head&&(u.head.xflags=255&D,u.head.os=D>>8),512&u.flags&&(x[0]=255&D,x[1]=D>>>8&255,u.check=a(u.check,x,2,0)),R=D=0,u.mode=5;case 5:if(1024&u.flags){for(;R<16;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}u.length=D,u.head&&(u.head.extra_len=D),512&u.flags&&(x[0]=255&D,x[1]=D>>>8&255,u.check=a(u.check,x,2,0)),R=D=0}else u.head&&(u.head.extra=null);u.mode=6;case 6:if(1024&u.flags&&(Z<(Q=u.length)&&(Q=Z),Q&&(u.head&&(l=u.head.extra_len-u.length,u.head.extra||(u.head.extra=new Array(u.head.extra_len)),n.arraySet(u.head.extra,z,H,Q,l)),512&u.flags&&(u.check=a(u.check,z,Q,H)),Z-=Q,H+=Q,u.length-=Q),u.length))break e;u.length=0,u.mode=7;case 7:if(2048&u.flags){if(Z===0)break e;for(Q=0;l=z[H+Q++],u.head&&l&&u.length<65536&&(u.head.name+=String.fromCharCode(l)),l&&Q<Z;);if(512&u.flags&&(u.check=a(u.check,z,Q,H)),Z-=Q,H+=Q,l)break e}else u.head&&(u.head.name=null);u.length=0,u.mode=8;case 8:if(4096&u.flags){if(Z===0)break e;for(Q=0;l=z[H+Q++],u.head&&l&&u.length<65536&&(u.head.comment+=String.fromCharCode(l)),l&&Q<Z;);if(512&u.flags&&(u.check=a(u.check,z,Q,H)),Z-=Q,H+=Q,l)break e}else u.head&&(u.head.comment=null);u.mode=9;case 9:if(512&u.flags){for(;R<16;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(D!==(65535&u.check)){T.msg="header crc mismatch",u.mode=30;break}R=D=0}u.head&&(u.head.hcrc=u.flags>>9&1,u.head.done=!0),T.adler=u.check=0,u.mode=12;break;case 10:for(;R<32;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}T.adler=u.check=y(D),R=D=0,u.mode=11;case 11:if(u.havedict===0)return T.next_out=de,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=D,u.bits=R,2;T.adler=u.check=1,u.mode=12;case 12:if(j===5||j===6)break e;case 13:if(u.last){D>>>=7&R,R-=7&R,u.mode=27;break}for(;R<3;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}switch(u.last=1&D,R-=1,3&(D>>>=1)){case 0:u.mode=14;break;case 1:if(X(u),u.mode=20,j!==6)break;D>>>=2,R-=2;break e;case 2:u.mode=17;break;case 3:T.msg="invalid block type",u.mode=30}D>>>=2,R-=2;break;case 14:for(D>>>=7&R,R-=7&R;R<32;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if((65535&D)!=(D>>>16^65535)){T.msg="invalid stored block lengths",u.mode=30;break}if(u.length=65535&D,R=D=0,u.mode=15,j===6)break e;case 15:u.mode=16;case 16:if(Q=u.length){if(Z<Q&&(Q=Z),le<Q&&(Q=le),Q===0)break e;n.arraySet(ue,z,H,Q,de),Z-=Q,H+=Q,le-=Q,de+=Q,u.length-=Q;break}u.mode=12;break;case 17:for(;R<14;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(u.nlen=257+(31&D),D>>>=5,R-=5,u.ndist=1+(31&D),D>>>=5,R-=5,u.ncode=4+(15&D),D>>>=4,R-=4,286<u.nlen||30<u.ndist){T.msg="too many length or distance symbols",u.mode=30;break}u.have=0,u.mode=18;case 18:for(;u.have<u.ncode;){for(;R<3;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}u.lens[N[u.have++]]=7&D,D>>>=3,R-=3}for(;u.have<19;)u.lens[N[u.have++]]=0;if(u.lencode=u.lendyn,u.lenbits=7,L={bits:u.lenbits},I=h(0,u.lens,0,19,u.lencode,0,u.work,L),u.lenbits=L.bits,I){T.msg="invalid code lengths set",u.mode=30;break}u.have=0,u.mode=19;case 19:for(;u.have<u.nlen+u.ndist;){for(;me=(_=u.lencode[D&(1<<u.lenbits)-1])>>>16&255,Te=65535&_,!((pe=_>>>24)<=R);){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(Te<16)D>>>=pe,R-=pe,u.lens[u.have++]=Te;else{if(Te===16){for(E=pe+2;R<E;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(D>>>=pe,R-=pe,u.have===0){T.msg="invalid bit length repeat",u.mode=30;break}l=u.lens[u.have-1],Q=3+(3&D),D>>>=2,R-=2}else if(Te===17){for(E=pe+3;R<E;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}R-=pe,l=0,Q=3+(7&(D>>>=pe)),D>>>=3,R-=3}else{for(E=pe+7;R<E;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}R-=pe,l=0,Q=11+(127&(D>>>=pe)),D>>>=7,R-=7}if(u.have+Q>u.nlen+u.ndist){T.msg="invalid bit length repeat",u.mode=30;break}for(;Q--;)u.lens[u.have++]=l}}if(u.mode===30)break;if(u.lens[256]===0){T.msg="invalid code -- missing end-of-block",u.mode=30;break}if(u.lenbits=9,L={bits:u.lenbits},I=h(m,u.lens,0,u.nlen,u.lencode,0,u.work,L),u.lenbits=L.bits,I){T.msg="invalid literal/lengths set",u.mode=30;break}if(u.distbits=6,u.distcode=u.distdyn,L={bits:u.distbits},I=h(d,u.lens,u.nlen,u.ndist,u.distcode,0,u.work,L),u.distbits=L.bits,I){T.msg="invalid distances set",u.mode=30;break}if(u.mode=20,j===6)break e;case 20:u.mode=21;case 21:if(6<=Z&&258<=le){T.next_out=de,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=D,u.bits=R,c(T,ee),de=T.next_out,ue=T.output,le=T.avail_out,H=T.next_in,z=T.input,Z=T.avail_in,D=u.hold,R=u.bits,u.mode===12&&(u.back=-1);break}for(u.back=0;me=(_=u.lencode[D&(1<<u.lenbits)-1])>>>16&255,Te=65535&_,!((pe=_>>>24)<=R);){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(me&&!(240&me)){for(ke=pe,Ge=me,Fe=Te;me=(_=u.lencode[Fe+((D&(1<<ke+Ge)-1)>>ke)])>>>16&255,Te=65535&_,!(ke+(pe=_>>>24)<=R);){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}D>>>=ke,R-=ke,u.back+=ke}if(D>>>=pe,R-=pe,u.back+=pe,u.length=Te,me===0){u.mode=26;break}if(32&me){u.back=-1,u.mode=12;break}if(64&me){T.msg="invalid literal/length code",u.mode=30;break}u.extra=15&me,u.mode=22;case 22:if(u.extra){for(E=u.extra;R<E;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}u.length+=D&(1<<u.extra)-1,D>>>=u.extra,R-=u.extra,u.back+=u.extra}u.was=u.length,u.mode=23;case 23:for(;me=(_=u.distcode[D&(1<<u.distbits)-1])>>>16&255,Te=65535&_,!((pe=_>>>24)<=R);){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(!(240&me)){for(ke=pe,Ge=me,Fe=Te;me=(_=u.distcode[Fe+((D&(1<<ke+Ge)-1)>>ke)])>>>16&255,Te=65535&_,!(ke+(pe=_>>>24)<=R);){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}D>>>=ke,R-=ke,u.back+=ke}if(D>>>=pe,R-=pe,u.back+=pe,64&me){T.msg="invalid distance code",u.mode=30;break}u.offset=Te,u.extra=15&me,u.mode=24;case 24:if(u.extra){for(E=u.extra;R<E;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}u.offset+=D&(1<<u.extra)-1,D>>>=u.extra,R-=u.extra,u.back+=u.extra}if(u.offset>u.dmax){T.msg="invalid distance too far back",u.mode=30;break}u.mode=25;case 25:if(le===0)break e;if(Q=ee-le,u.offset>Q){if((Q=u.offset-Q)>u.whave&&u.sane){T.msg="invalid distance too far back",u.mode=30;break}Ee=Q>u.wnext?(Q-=u.wnext,u.wsize-Q):u.wnext-Q,Q>u.length&&(Q=u.length),Se=u.window}else Se=ue,Ee=de-u.offset,Q=u.length;for(le<Q&&(Q=le),le-=Q,u.length-=Q;ue[de++]=Se[Ee++],--Q;);u.length===0&&(u.mode=21);break;case 26:if(le===0)break e;ue[de++]=u.length,le--,u.mode=21;break;case 27:if(u.wrap){for(;R<32;){if(Z===0)break e;Z--,D|=z[H++]<<R,R+=8}if(ee-=le,T.total_out+=ee,u.total+=ee,ee&&(T.adler=u.check=u.flags?a(u.check,ue,ee,de-ee):o(u.check,ue,ee,de-ee)),ee=le,(u.flags?D:y(D))!==u.check){T.msg="incorrect data check",u.mode=30;break}R=D=0}u.mode=28;case 28:if(u.wrap&&u.flags){for(;R<32;){if(Z===0)break e;Z--,D+=z[H++]<<R,R+=8}if(D!==(4294967295&u.total)){T.msg="incorrect length check",u.mode=30;break}R=D=0}u.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;case 32:default:return p}return T.next_out=de,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=D,u.bits=R,(u.wsize||ee!==T.avail_out&&u.mode<30&&(u.mode<27||j!==4))&&ae(T,T.output,T.next_out,ee-T.avail_out)?(u.mode=31,-4):(ne-=T.avail_in,ee-=T.avail_out,T.total_in+=ne,T.total_out+=ee,u.total+=ee,u.wrap&&ee&&(T.adler=u.check=u.flags?a(u.check,ue,ee,T.next_out-ee):o(u.check,ue,ee,T.next_out-ee)),T.data_type=u.bits+(u.last?64:0)+(u.mode===12?128:0)+(u.mode===20||u.mode===15?256:0),(ne==0&&ee===0||j===4)&&I===b&&(I=-5),I)},r.inflateEnd=function(T){if(!T||!T.state)return p;var j=T.state;return j.window&&(j.window=null),T.state=null,b},r.inflateGetHeader=function(T,j){var u;return T&&T.state&&2&(u=T.state).wrap?((u.head=j).done=!1,b):p},r.inflateSetDictionary=function(T,j){var u,z=j.length;return T&&T.state?(u=T.state).wrap!==0&&u.mode!==11?p:u.mode===11&&o(1,j,z,0)!==u.check?-3:ae(T,j,z,z)?(u.mode=31,-4):(u.havedict=1,b):p},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,r){var n=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(m,d,b,p,w,f,g,y){var k,S,C,A,B,F,V,G,X,ae=y.bits,T=0,j=0,u=0,z=0,ue=0,H=0,de=0,Z=0,le=0,D=0,R=null,ne=0,ee=new n.Buf16(16),Q=new n.Buf16(16),Ee=null,Se=0;for(T=0;T<=15;T++)ee[T]=0;for(j=0;j<p;j++)ee[d[b+j]]++;for(ue=ae,z=15;1<=z&&ee[z]===0;z--);if(z<ue&&(ue=z),z===0)return w[f++]=20971520,w[f++]=20971520,y.bits=1,0;for(u=1;u<z&&ee[u]===0;u++);for(ue<u&&(ue=u),T=Z=1;T<=15;T++)if(Z<<=1,(Z-=ee[T])<0)return-1;if(0<Z&&(m===0||z!==1))return-1;for(Q[1]=0,T=1;T<15;T++)Q[T+1]=Q[T]+ee[T];for(j=0;j<p;j++)d[b+j]!==0&&(g[Q[d[b+j]]++]=j);if(F=m===0?(R=Ee=g,19):m===1?(R=o,ne-=257,Ee=a,Se-=257,256):(R=c,Ee=h,-1),T=u,B=f,de=j=D=0,C=-1,A=(le=1<<(H=ue))-1,m===1&&852<le||m===2&&592<le)return 1;for(;;){for(V=T-de,X=g[j]<F?(G=0,g[j]):g[j]>F?(G=Ee[Se+g[j]],R[ne+g[j]]):(G=96,0),k=1<<T-de,u=S=1<<H;w[B+(D>>de)+(S-=k)]=V<<24|G<<16|X|0,S!==0;);for(k=1<<T-1;D&k;)k>>=1;if(k!==0?(D&=k-1,D+=k):D=0,j++,--ee[T]==0){if(T===z)break;T=d[b+g[j]]}if(ue<T&&(D&A)!==C){for(de===0&&(de=ue),B+=u,Z=1<<(H=T-de);H+de<z&&!((Z-=ee[H+de])<=0);)H++,Z<<=1;if(le+=1<<H,m===1&&852<le||m===2&&592<le)return 1;w[C=D&A]=ue<<24|H<<16|B-f|0}}return D!==0&&(w[B+D]=T-de<<24|64<<16|0),y.bits=ue,0}},{"../utils/common":41}],51:[function(t,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,r){var n=t("../utils/common"),o=0,a=1;function c(_){for(var x=_.length;0<=--x;)_[x]=0}var h=0,m=29,d=256,b=d+1+m,p=30,w=19,f=2*b+1,g=15,y=16,k=7,S=256,C=16,A=17,B=18,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],X=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ae=new Array(2*(b+2));c(ae);var T=new Array(2*p);c(T);var j=new Array(512);c(j);var u=new Array(256);c(u);var z=new Array(m);c(z);var ue,H,de,Z=new Array(p);function le(_,x,N,q,$){this.static_tree=_,this.extra_bits=x,this.extra_base=N,this.elems=q,this.max_length=$,this.has_stree=_&&_.length}function D(_,x){this.dyn_tree=_,this.max_code=0,this.stat_desc=x}function R(_){return _<256?j[_]:j[256+(_>>>7)]}function ne(_,x){_.pending_buf[_.pending++]=255&x,_.pending_buf[_.pending++]=x>>>8&255}function ee(_,x,N){_.bi_valid>y-N?(_.bi_buf|=x<<_.bi_valid&65535,ne(_,_.bi_buf),_.bi_buf=x>>y-_.bi_valid,_.bi_valid+=N-y):(_.bi_buf|=x<<_.bi_valid&65535,_.bi_valid+=N)}function Q(_,x,N){ee(_,N[2*x],N[2*x+1])}function Ee(_,x){for(var N=0;N|=1&_,_>>>=1,N<<=1,0<--x;);return N>>>1}function Se(_,x,N){var q,$,K=new Array(g+1),te=0;for(q=1;q<=g;q++)K[q]=te=te+N[q-1]<<1;for($=0;$<=x;$++){var J=_[2*$+1];J!==0&&(_[2*$]=Ee(K[J]++,J))}}function pe(_){var x;for(x=0;x<b;x++)_.dyn_ltree[2*x]=0;for(x=0;x<p;x++)_.dyn_dtree[2*x]=0;for(x=0;x<w;x++)_.bl_tree[2*x]=0;_.dyn_ltree[2*S]=1,_.opt_len=_.static_len=0,_.last_lit=_.matches=0}function me(_){8<_.bi_valid?ne(_,_.bi_buf):0<_.bi_valid&&(_.pending_buf[_.pending++]=_.bi_buf),_.bi_buf=0,_.bi_valid=0}function Te(_,x,N,q){var $=2*x,K=2*N;return _[$]<_[K]||_[$]===_[K]&&q[x]<=q[N]}function ke(_,x,N){for(var q=_.heap[N],$=N<<1;$<=_.heap_len&&($<_.heap_len&&Te(x,_.heap[$+1],_.heap[$],_.depth)&&$++,!Te(x,q,_.heap[$],_.depth));)_.heap[N]=_.heap[$],N=$,$<<=1;_.heap[N]=q}function Ge(_,x,N){var q,$,K,te,J=0;if(_.last_lit!==0)for(;q=_.pending_buf[_.d_buf+2*J]<<8|_.pending_buf[_.d_buf+2*J+1],$=_.pending_buf[_.l_buf+J],J++,q===0?Q(_,$,x):(Q(_,(K=u[$])+d+1,x),(te=F[K])!==0&&ee(_,$-=z[K],te),Q(_,K=R(--q),N),(te=V[K])!==0&&ee(_,q-=Z[K],te)),J<_.last_lit;);Q(_,S,x)}function Fe(_,x){var N,q,$,K=x.dyn_tree,te=x.stat_desc.static_tree,J=x.stat_desc.has_stree,ie=x.stat_desc.elems,_e=-1;for(_.heap_len=0,_.heap_max=f,N=0;N<ie;N++)K[2*N]!==0?(_.heap[++_.heap_len]=_e=N,_.depth[N]=0):K[2*N+1]=0;for(;_.heap_len<2;)K[2*($=_.heap[++_.heap_len]=_e<2?++_e:0)]=1,_.depth[$]=0,_.opt_len--,J&&(_.static_len-=te[2*$+1]);for(x.max_code=_e,N=_.heap_len>>1;1<=N;N--)ke(_,K,N);for($=ie;N=_.heap[1],_.heap[1]=_.heap[_.heap_len--],ke(_,K,1),q=_.heap[1],_.heap[--_.heap_max]=N,_.heap[--_.heap_max]=q,K[2*$]=K[2*N]+K[2*q],_.depth[$]=(_.depth[N]>=_.depth[q]?_.depth[N]:_.depth[q])+1,K[2*N+1]=K[2*q+1]=$,_.heap[1]=$++,ke(_,K,1),2<=_.heap_len;);_.heap[--_.heap_max]=_.heap[1],function(he,De){var re,O,v,P,U,M,W=De.dyn_tree,se=De.max_code,ve=De.stat_desc.static_tree,xe=De.stat_desc.has_stree,Oe=De.stat_desc.extra_bits,Me=De.stat_desc.extra_base,Qe=De.stat_desc.max_length,et=0;for(P=0;P<=g;P++)he.bl_count[P]=0;for(W[2*he.heap[he.heap_max]+1]=0,re=he.heap_max+1;re<f;re++)Qe<(P=W[2*W[2*(O=he.heap[re])+1]+1]+1)&&(P=Qe,et++),W[2*O+1]=P,se<O||(he.bl_count[P]++,U=0,Me<=O&&(U=Oe[O-Me]),M=W[2*O],he.opt_len+=M*(P+U),xe&&(he.static_len+=M*(ve[2*O+1]+U)));if(et!==0){do{for(P=Qe-1;he.bl_count[P]===0;)P--;he.bl_count[P]--,he.bl_count[P+1]+=2,he.bl_count[Qe]--,et-=2}while(0<et);for(P=Qe;P!==0;P--)for(O=he.bl_count[P];O!==0;)se<(v=he.heap[--re])||(W[2*v+1]!==P&&(he.opt_len+=(P-W[2*v+1])*W[2*v],W[2*v+1]=P),O--)}}(_,x),Se(K,_e,_.bl_count)}function l(_,x,N){var q,$,K=-1,te=x[1],J=0,ie=7,_e=4;for(te===0&&(ie=138,_e=3),x[2*(N+1)+1]=65535,q=0;q<=N;q++)$=te,te=x[2*(q+1)+1],++J<ie&&$===te||(J<_e?_.bl_tree[2*$]+=J:$!==0?($!==K&&_.bl_tree[2*$]++,_.bl_tree[2*C]++):J<=10?_.bl_tree[2*A]++:_.bl_tree[2*B]++,K=$,_e=(J=0)===te?(ie=138,3):$===te?(ie=6,3):(ie=7,4))}function I(_,x,N){var q,$,K=-1,te=x[1],J=0,ie=7,_e=4;for(te===0&&(ie=138,_e=3),q=0;q<=N;q++)if($=te,te=x[2*(q+1)+1],!(++J<ie&&$===te)){if(J<_e)for(;Q(_,$,_.bl_tree),--J!=0;);else $!==0?($!==K&&(Q(_,$,_.bl_tree),J--),Q(_,C,_.bl_tree),ee(_,J-3,2)):J<=10?(Q(_,A,_.bl_tree),ee(_,J-3,3)):(Q(_,B,_.bl_tree),ee(_,J-11,7));K=$,_e=(J=0)===te?(ie=138,3):$===te?(ie=6,3):(ie=7,4)}}c(Z);var L=!1;function E(_,x,N,q){ee(_,(h<<1)+(q?1:0),3),function($,K,te,J){me($),ne($,te),ne($,~te),n.arraySet($.pending_buf,$.window,K,te,$.pending),$.pending+=te}(_,x,N)}r._tr_init=function(_){L||(function(){var x,N,q,$,K,te=new Array(g+1);for($=q=0;$<m-1;$++)for(z[$]=q,x=0;x<1<<F[$];x++)u[q++]=$;for(u[q-1]=$,$=K=0;$<16;$++)for(Z[$]=K,x=0;x<1<<V[$];x++)j[K++]=$;for(K>>=7;$<p;$++)for(Z[$]=K<<7,x=0;x<1<<V[$]-7;x++)j[256+K++]=$;for(N=0;N<=g;N++)te[N]=0;for(x=0;x<=143;)ae[2*x+1]=8,x++,te[8]++;for(;x<=255;)ae[2*x+1]=9,x++,te[9]++;for(;x<=279;)ae[2*x+1]=7,x++,te[7]++;for(;x<=287;)ae[2*x+1]=8,x++,te[8]++;for(Se(ae,b+1,te),x=0;x<p;x++)T[2*x+1]=5,T[2*x]=Ee(x,5);ue=new le(ae,F,d+1,b,g),H=new le(T,V,0,p,g),de=new le(new Array(0),G,0,w,k)}(),L=!0),_.l_desc=new D(_.dyn_ltree,ue),_.d_desc=new D(_.dyn_dtree,H),_.bl_desc=new D(_.bl_tree,de),_.bi_buf=0,_.bi_valid=0,pe(_)},r._tr_stored_block=E,r._tr_flush_block=function(_,x,N,q){var $,K,te=0;0<_.level?(_.strm.data_type===2&&(_.strm.data_type=function(J){var ie,_e=4093624447;for(ie=0;ie<=31;ie++,_e>>>=1)if(1&_e&&J.dyn_ltree[2*ie]!==0)return o;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return a;for(ie=32;ie<d;ie++)if(J.dyn_ltree[2*ie]!==0)return a;return o}(_)),Fe(_,_.l_desc),Fe(_,_.d_desc),te=function(J){var ie;for(l(J,J.dyn_ltree,J.l_desc.max_code),l(J,J.dyn_dtree,J.d_desc.max_code),Fe(J,J.bl_desc),ie=w-1;3<=ie&&J.bl_tree[2*X[ie]+1]===0;ie--);return J.opt_len+=3*(ie+1)+5+5+4,ie}(_),$=_.opt_len+3+7>>>3,(K=_.static_len+3+7>>>3)<=$&&($=K)):$=K=N+5,N+4<=$&&x!==-1?E(_,x,N,q):_.strategy===4||K===$?(ee(_,2+(q?1:0),3),Ge(_,ae,T)):(ee(_,4+(q?1:0),3),function(J,ie,_e,he){var De;for(ee(J,ie-257,5),ee(J,_e-1,5),ee(J,he-4,4),De=0;De<he;De++)ee(J,J.bl_tree[2*X[De]+1],3);I(J,J.dyn_ltree,ie-1),I(J,J.dyn_dtree,_e-1)}(_,_.l_desc.max_code+1,_.d_desc.max_code+1,te+1),Ge(_,_.dyn_ltree,_.dyn_dtree)),pe(_),q&&me(_)},r._tr_tally=function(_,x,N){return _.pending_buf[_.d_buf+2*_.last_lit]=x>>>8&255,_.pending_buf[_.d_buf+2*_.last_lit+1]=255&x,_.pending_buf[_.l_buf+_.last_lit]=255&N,_.last_lit++,x===0?_.dyn_ltree[2*N]++:(_.matches++,x--,_.dyn_ltree[2*(u[N]+d+1)]++,_.dyn_dtree[2*R(x)]++),_.last_lit===_.lit_bufsize-1},r._tr_align=function(_){ee(_,2,3),Q(_,S,ae),function(x){x.bi_valid===16?(ne(x,x.bi_buf),x.bi_buf=0,x.bi_valid=0):8<=x.bi_valid&&(x.pending_buf[x.pending++]=255&x.bi_buf,x.bi_buf>>=8,x.bi_valid-=8)}(_)}},{"../utils/common":41}],53:[function(t,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,r){(function(n){(function(o,a){if(!o.setImmediate){var c,h,m,d,b=1,p={},w=!1,f=o.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(o);g=g&&g.setTimeout?g:o,c={}.toString.call(o.process)==="[object process]"?function(C){process.nextTick(function(){k(C)})}:function(){if(o.postMessage&&!o.importScripts){var C=!0,A=o.onmessage;return o.onmessage=function(){C=!1},o.postMessage("","*"),o.onmessage=A,C}}()?(d="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(C){o.postMessage(d+C,"*")}):o.MessageChannel?((m=new MessageChannel).port1.onmessage=function(C){k(C.data)},function(C){m.port2.postMessage(C)}):f&&"onreadystatechange"in f.createElement("script")?(h=f.documentElement,function(C){var A=f.createElement("script");A.onreadystatechange=function(){k(C),A.onreadystatechange=null,h.removeChild(A),A=null},h.appendChild(A)}):function(C){setTimeout(k,0,C)},g.setImmediate=function(C){typeof C!="function"&&(C=new Function(""+C));for(var A=new Array(arguments.length-1),B=0;B<A.length;B++)A[B]=arguments[B+1];var F={callback:C,args:A};return p[b]=F,c(b),b++},g.clearImmediate=y}function y(C){delete p[C]}function k(C){if(w)setTimeout(k,0,C);else{var A=p[C];if(A){w=!0;try{(function(B){var F=B.callback,V=B.args;switch(V.length){case 0:F();break;case 1:F(V[0]);break;case 2:F(V[0],V[1]);break;case 3:F(V[0],V[1],V[2]);break;default:F.apply(a,V)}})(A)}finally{y(C),w=!1}}}}function S(C){C.source===o&&typeof C.data=="string"&&C.data.indexOf(d)===0&&k(+C.data.slice(d.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof Ue<"u"?Ue:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(To);var xu=To.exports;const Au=vs(xu);var Pu=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,So=(s,e,t,i)=>{for(var r=i>1?void 0:i?Cu(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Pu(e,t,r),r};let cs=class extends Re{render(){return ce`
            <ui-flex-grid-row gap="0.25rem">
                <ui-flex-grid-item>
                    <ui-button
                        variant="full"
                        color="primary"
                        ripple
                        @click=${async()=>{const s=ge.queryImportDialog();s.storeKey=this.storeKey,s.show()}}
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
        `}async export(){if(!this.storeKey)return;const s=new Au,e=Le(this.storeKey),t=ge.queryStore().getData(this.storeKey);if(t!==void 0){for(const i of t){const r=e.fileName(i);s.file(r,JSON.stringify(i,null,4))}Su.saveAs(await s.generateAsync({type:"blob"}),e.zipFileName())}}};So([we({type:String,attribute:"store-key",reflect:!0})],cs.prototype,"storeKey",2);cs=So([Ce("pg-drawer-item-import")],cs);const Ou="modulepreload",$u=function(s){return"/pg-vis-dev.github.io/"+s},xi={},Ru=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=$u(c),c in xi)return;xi[c]=!0;const h=c.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Ou,h||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),h)return new Promise((b,p)=>{d.addEventListener("load",b),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})};function Du(s={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:r,onRegisteredSW:n,onRegisterError:o}=s;let a,c;const h=async(d=!0)=>{await c};async function m(){if("serviceWorker"in navigator){if(a=await Ru(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/pg-vis-dev.github.io/sw.js",{scope:"/pg-vis-dev.github.io/",type:"classic"})).catch(d=>{o==null||o(d)}),!a)return;a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||i==null||i()}),a.register({immediate:e}).then(d=>{n?n("/pg-vis-dev.github.io/sw.js",d):r==null||r(d)}).catch(d=>{o==null||o(d)})}}return c=m(),h}Du({onRegistered(s){setTimeout(async()=>{try{console.debug(`Update service... (currentVersion: ${fo})`),await(s==null?void 0:s.update())}catch(e){console.warn(`Auto update failed: ${e}`)}})}});

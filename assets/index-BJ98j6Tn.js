var fo=Object.defineProperty;var go=(s,e,t)=>e in s?fo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ce=(s,e,t)=>go(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr=globalThis,Xr=rr.ShadowRoot&&(rr.ShadyCSS===void 0||rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qr=Symbol(),As=new WeakMap;let _i=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Xr&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=As.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&As.set(t,e))}return e}toString(){return this.cssText}};const mo=s=>new _i(typeof s=="string"?s:s+"",void 0,Qr),_o=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new _i(t,s,Qr)},yo=(s,e)=>{if(Xr)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=rr.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},Cs=Xr?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return mo(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vo,defineProperty:bo,getOwnPropertyDescriptor:wo,getOwnPropertyNames:Eo,getOwnPropertySymbols:ko,getPrototypeOf:To}=Object,Ve=globalThis,Ps=Ve.trustedTypes,So=Ps?Ps.emptyScript:"",Ar=Ve.reactiveElementPolyfillSupport,Lt=(s,e)=>s,ir={toAttribute(s,e){switch(e){case Boolean:s=s?So:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},es=(s,e)=>!vo(s,e),xs={attribute:!0,type:String,converter:ir,reflect:!1,hasChanged:es};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ve.litPropertyMetadata??(Ve.litPropertyMetadata=new WeakMap);let dt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xs){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&bo(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=wo(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const a=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xs}static _$Ei(){if(this.hasOwnProperty(Lt("elementProperties")))return;const e=To(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Lt("properties"))){const t=this.properties,i=[...Eo(t),...ko(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Cs(r))}else e!==void 0&&t.push(Cs(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ir).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ir;this._$Em=r,this[r]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??es)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},dt[Lt("elementProperties")]=new Map,dt[Lt("finalized")]=new Map,Ar==null||Ar({ReactiveElement:dt}),(Ve.reactiveElementVersions??(Ve.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=globalThis,or=Gt.trustedTypes,Os=or?or.createPolicy("lit-html",{createHTML:s=>s}):void 0,yi="$lit$",qe=`lit$${Math.random().toFixed(9).slice(2)}$`,vi="?"+qe,Ao=`<${vi}>`,ot=document,Ft=()=>ot.createComment(""),jt=s=>s===null||typeof s!="object"&&typeof s!="function",ts=Array.isArray,Co=s=>ts(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Cr=`[ 	
\f\r]`,xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rs=/-->/g,$s=/>/g,et=RegExp(`>|${Cr}(?:([^\\s"'>=/]+)(${Cr}*=${Cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ls=/'/g,Gs=/"/g,bi=/^(?:script|style|textarea|title)$/i,Po=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),Oe=Po(1),_t=Symbol.for("lit-noChange"),Pe=Symbol.for("lit-nothing"),Ds=new WeakMap,rt=ot.createTreeWalker(ot,129);function wi(s,e){if(!ts(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Os!==void 0?Os.createHTML(e):e}const xo=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=xt;for(let a=0;a<t;a++){const c=s[a];let f,m,h=-1,b=0;for(;b<c.length&&(o.lastIndex=b,m=o.exec(c),m!==null);)b=o.lastIndex,o===xt?m[1]==="!--"?o=Rs:m[1]!==void 0?o=$s:m[2]!==void 0?(bi.test(m[2])&&(r=RegExp("</"+m[2],"g")),o=et):m[3]!==void 0&&(o=et):o===et?m[0]===">"?(o=r??xt,h=-1):m[1]===void 0?h=-2:(h=o.lastIndex-m[2].length,f=m[1],o=m[3]===void 0?et:m[3]==='"'?Gs:Ls):o===Gs||o===Ls?o=et:o===Rs||o===$s?o=xt:(o=et,r=void 0);const p=o===et&&s[a+1].startsWith("/>")?" ":"";n+=o===xt?c+Ao:h>=0?(i.push(f),c.slice(0,h)+yi+c.slice(h)+qe+p):c+qe+(h===-2?a:p)}return[wi(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Fr=class Ei{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,c=this.parts,[f,m]=xo(e,t);if(this.el=Ei.createElement(f,i),rt.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=rt.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(yi)){const b=m[o++],p=r.getAttribute(h).split(qe),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:w[2],strings:p,ctor:w[1]==="."?Ro:w[1]==="?"?$o:w[1]==="@"?Lo:yr}),r.removeAttribute(h)}else h.startsWith(qe)&&(c.push({type:6,index:n}),r.removeAttribute(h));if(bi.test(r.tagName)){const h=r.textContent.split(qe),b=h.length-1;if(b>0){r.textContent=or?or.emptyScript:"";for(let p=0;p<b;p++)r.append(h[p],Ft()),rt.nextNode(),c.push({type:2,index:++n});r.append(h[b],Ft())}}}else if(r.nodeType===8)if(r.data===vi)c.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(qe,h+1))!==-1;)c.push({type:7,index:n}),h+=qe.length-1}n++}}static createElement(e,t){const i=ot.createElement("template");return i.innerHTML=e,i}};function yt(s,e,t=s,i){var o,a;if(e===_t)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=jt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=yt(s,r._$AS(s,e.values),r,i)),e}let Oo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??ot).importNode(t,!0);rt.currentNode=r;let n=rt.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let f;c.type===2?f=new rs(n,n.nextSibling,this,e):c.type===1?f=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(f=new Go(n,this,e)),this._$AV.push(f),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=rt.nextNode(),o++)}return rt.currentNode=ot,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},rs=class ki{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=yt(this,e,t),jt(e)?e===Pe||e==null||e===""?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):e!==this._$AH&&e!==_t&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Co(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Pe&&jt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ot.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Fr.createElement(wi(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new Oo(r,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Ds.get(e.strings);return t===void 0&&Ds.set(e.strings,t=new Fr(e)),t}k(e){ts(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new ki(this.O(Ft()),this.O(Ft()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class yr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Pe}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=yt(this,e,t,0),o=!jt(e)||e!==this._$AH&&e!==_t,o&&(this._$AH=e);else{const a=e;let c,f;for(e=n[0],c=0;c<n.length-1;c++)f=yt(this,a[i+c],t,c),f===_t&&(f=this._$AH[c]),o||(o=!jt(f)||f!==this._$AH[c]),f===Pe?e=Pe:e!==Pe&&(e+=(f??"")+n[c+1]),this._$AH[c]=f}o&&!r&&this.j(e)}j(e){e===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Ro=class extends yr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pe?void 0:e}},$o=class extends yr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Pe)}},Lo=class extends yr{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=yt(this,e,t,0)??Pe)===_t)return;const i=this._$AH,r=e===Pe&&i!==Pe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Pe&&(i===Pe||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Go=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){yt(this,e)}};const Pr=Gt.litHtmlPolyfillSupport;Pr==null||Pr(Fr,rs),(Gt.litHtmlVersions??(Gt.litHtmlVersions=[])).push("3.2.1");const Do=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new rs(e.insertBefore(Ft(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ie=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Do(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return _t}};var mi;Ie._$litElement$=!0,Ie.finalized=!0,(mi=globalThis.litElementHydrateSupport)==null||mi.call(globalThis,{LitElement:Ie});const xr=globalThis.litElementPolyfillSupport;xr==null||xr({LitElement:Ie});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo={attribute:!0,type:String,converter:ir,reflect:!1,hasChanged:es},Fo=(s=Uo,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){const{name:o}=t;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,s)}}throw Error("Unsupported decorator location: "+i)};function xe(s){return(e,t)=>typeof t=="object"?Fo(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}function vr(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&process.version!==void 0?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}function ss(s,e,t,i){if(typeof t!="function")throw new Error("method for before hook must be a function");return i||(i={}),Array.isArray(e)?e.reverse().reduce((r,n)=>ss.bind(null,s,n,r,i),t)():Promise.resolve().then(()=>s.registry[e]?s.registry[e].reduce((r,n)=>n.hook.bind(null,r,i),t)():t(i))}function jo(s,e,t,i){const r=i;s.registry[t]||(s.registry[t]=[]),e==="before"&&(i=(n,o)=>Promise.resolve().then(r.bind(null,o)).then(n.bind(null,o))),e==="after"&&(i=(n,o)=>{let a;return Promise.resolve().then(n.bind(null,o)).then(c=>(a=c,r(a,o))).then(()=>a)}),e==="error"&&(i=(n,o)=>Promise.resolve().then(n.bind(null,o)).catch(a=>r(a,o))),s.registry[t].push({hook:i,orig:r})}function Io(s,e,t){if(!s.registry[e])return;const i=s.registry[e].map(r=>r.orig).indexOf(t);i!==-1&&s.registry[e].splice(i,1)}const Us=Function.bind,Fs=Us.bind(Us);function Ti(s,e,t){const i=Fs(Io,null).apply(null,t?[e,t]:[e]);s.api={remove:i},s.remove=i,["before","error","after","wrap"].forEach(r=>{const n=t?[e,r,t]:[e,r];s[r]=s.api[r]=Fs(jo,null).apply(null,n)})}function zo(){const s=Symbol("Singular"),e={registry:{}},t=ss.bind(null,e,s);return Ti(t,e,s),t}function Bo(){const s={registry:{}},e=ss.bind(null,s);return Ti(e,s),e}const Mo={Singular:zo,Collection:Bo};var No="0.0.0-development",qo=`octokit-endpoint.js/${No} ${vr()}`,Ho={method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":qo},mediaType:{format:""}};function Vo(s){return s?Object.keys(s).reduce((e,t)=>(e[t.toLowerCase()]=s[t],e),{}):{}}function Wo(s){if(typeof s!="object"||s===null||Object.prototype.toString.call(s)!=="[object Object]")return!1;const e=Object.getPrototypeOf(s);if(e===null)return!0;const t=Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Function.prototype.call(t)===Function.prototype.call(s)}function Si(s,e){const t=Object.assign({},s);return Object.keys(e).forEach(i=>{Wo(e[i])?i in s?t[i]=Si(s[i],e[i]):Object.assign(t,{[i]:e[i]}):Object.assign(t,{[i]:e[i]})}),t}function js(s){for(const e in s)s[e]===void 0&&delete s[e];return s}function jr(s,e,t){var r;if(typeof e=="string"){let[n,o]=e.split(" ");t=Object.assign(o?{method:n,url:o}:{url:n},t)}else t=Object.assign({},e);t.headers=Vo(t.headers),js(t),js(t.headers);const i=Si(s||{},t);return t.url==="/graphql"&&(s&&((r=s.mediaType.previews)!=null&&r.length)&&(i.mediaType.previews=s.mediaType.previews.filter(n=>!i.mediaType.previews.includes(n)).concat(i.mediaType.previews)),i.mediaType.previews=(i.mediaType.previews||[]).map(n=>n.replace(/-preview/,""))),i}function Zo(s,e){const t=/\?/.test(s)?"&":"?",i=Object.keys(e);return i.length===0?s:s+t+i.map(r=>r==="q"?"q="+e.q.split("+").map(encodeURIComponent).join("+"):`${r}=${encodeURIComponent(e[r])}`).join("&")}var Ko=/\{[^}]+\}/g;function Jo(s){return s.replace(/^\W+|\W+$/g,"").split(/,/)}function Yo(s){const e=s.match(Ko);return e?e.map(Jo).reduce((t,i)=>t.concat(i),[]):[]}function Is(s,e){const t={__proto__:null};for(const i of Object.keys(s))e.indexOf(i)===-1&&(t[i]=s[i]);return t}function Ai(s){return s.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function gt(s){return encodeURIComponent(s).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Ot(s,e,t){return e=s==="+"||s==="#"?Ai(e):gt(e),t?gt(t)+"="+e:e}function ht(s){return s!=null}function Or(s){return s===";"||s==="&"||s==="?"}function Xo(s,e,t,i){var r=s[t],n=[];if(ht(r)&&r!=="")if(typeof r=="string"||typeof r=="number"||typeof r=="boolean")r=r.toString(),i&&i!=="*"&&(r=r.substring(0,parseInt(i,10))),n.push(Ot(e,r,Or(e)?t:""));else if(i==="*")Array.isArray(r)?r.filter(ht).forEach(function(o){n.push(Ot(e,o,Or(e)?t:""))}):Object.keys(r).forEach(function(o){ht(r[o])&&n.push(Ot(e,r[o],o))});else{const o=[];Array.isArray(r)?r.filter(ht).forEach(function(a){o.push(Ot(e,a))}):Object.keys(r).forEach(function(a){ht(r[a])&&(o.push(gt(a)),o.push(Ot(e,r[a].toString())))}),Or(e)?n.push(gt(t)+"="+o.join(",")):o.length!==0&&n.push(o.join(","))}else e===";"?ht(r)&&n.push(gt(t)):r===""&&(e==="&"||e==="?")?n.push(gt(t)+"="):r===""&&n.push("");return n}function Qo(s){return{expand:en.bind(null,s)}}function en(s,e){var t=["+","#",".","/",";","?","&"];return s=s.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(i,r,n){if(r){let a="";const c=[];if(t.indexOf(r.charAt(0))!==-1&&(a=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(f){var m=/([^:\*]*)(?::(\d+)|(\*))?/.exec(f);c.push(Xo(e,a,m[1],m[2]||m[3]))}),a&&a!=="+"){var o=",";return a==="?"?o="&":a!=="#"&&(o=a),(c.length!==0?a:"")+c.join(o)}else return c.join(",")}else return Ai(n)}),s==="/"?s:s.replace(/\/$/,"")}function Ci(s){var m;let e=s.method.toUpperCase(),t=(s.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),i=Object.assign({},s.headers),r,n=Is(s,["method","baseUrl","url","headers","request","mediaType"]);const o=Yo(t);t=Qo(t).expand(n),/^http/.test(t)||(t=s.baseUrl+t);const a=Object.keys(s).filter(h=>o.includes(h)).concat("baseUrl"),c=Is(n,a);if(!/application\/octet-stream/i.test(i.accept)&&(s.mediaType.format&&(i.accept=i.accept.split(/,/).map(h=>h.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${s.mediaType.format}`)).join(",")),t.endsWith("/graphql")&&(m=s.mediaType.previews)!=null&&m.length)){const h=i.accept.match(/[\w-]+(?=-preview)/g)||[];i.accept=h.concat(s.mediaType.previews).map(b=>{const p=s.mediaType.format?`.${s.mediaType.format}`:"+json";return`application/vnd.github.${b}-preview${p}`}).join(",")}return["GET","HEAD"].includes(e)?t=Zo(t,c):"data"in c?r=c.data:Object.keys(c).length&&(r=c),!i["content-type"]&&typeof r<"u"&&(i["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(e)&&typeof r>"u"&&(r=""),Object.assign({method:e,url:t,headers:i},typeof r<"u"?{body:r}:null,s.request?{request:s.request}:null)}function tn(s,e,t){return Ci(jr(s,e,t))}function Pi(s,e){const t=jr(s,e),i=tn.bind(null,t);return Object.assign(i,{DEFAULTS:t,defaults:Pi.bind(null,t),merge:jr.bind(null,t),parse:Ci})}var rn=Pi(null,Ho);class $t extends Error{constructor(t,i,r){super(t);Ce(this,"name");Ce(this,"status");Ce(this,"request");Ce(this,"response");this.name="HttpError",this.status=Number.parseInt(i),Number.isNaN(this.status)&&(this.status=0),"response"in r&&(this.response=r.response);const n=Object.assign({},r.request);r.request.headers.authorization&&(n.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),n.url=n.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=n}}var sn="0.0.0-development",on={headers:{"user-agent":`octokit-request.js/${sn} ${vr()}`}};function nn(s){if(typeof s!="object"||s===null||Object.prototype.toString.call(s)!=="[object Object]")return!1;const e=Object.getPrototypeOf(s);if(e===null)return!0;const t=Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Function.prototype.call(t)===Function.prototype.call(s)}async function zs(s){var h,b,p,w,d;const e=((h=s.request)==null?void 0:h.fetch)||globalThis.fetch;if(!e)throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");const t=((b=s.request)==null?void 0:b.log)||console,i=((p=s.request)==null?void 0:p.parseSuccessResponseBody)!==!1,r=nn(s.body)||Array.isArray(s.body)?JSON.stringify(s.body):s.body,n=Object.fromEntries(Object.entries(s.headers).map(([_,g])=>[_,String(g)]));let o;try{o=await e(s.url,{method:s.method,body:r,redirect:(w=s.request)==null?void 0:w.redirect,headers:n,signal:(d=s.request)==null?void 0:d.signal,...s.body&&{duplex:"half"}})}catch(_){let g="Unknown Error";if(_ instanceof Error){if(_.name==="AbortError")throw _.status=500,_;g=_.message,_.name==="TypeError"&&"cause"in _&&(_.cause instanceof Error?g=_.cause.message:typeof _.cause=="string"&&(g=_.cause))}const k=new $t(g,500,{request:s});throw k.cause=_,k}const a=o.status,c=o.url,f={};for(const[_,g]of o.headers)f[_]=g;const m={url:c,status:a,headers:f,data:""};if("deprecation"in f){const _=f.link&&f.link.match(/<([^>]+)>; rel="deprecation"/),g=_&&_.pop();t.warn(`[@octokit/request] "${s.method} ${s.url}" is deprecated. It is scheduled to be removed on ${f.sunset}${g?`. See ${g}`:""}`)}if(a===204||a===205)return m;if(s.method==="HEAD"){if(a<400)return m;throw new $t(o.statusText,a,{response:m,request:s})}if(a===304)throw m.data=await Rr(o),new $t("Not modified",a,{response:m,request:s});if(a>=400)throw m.data=await Rr(o),new $t(an(m.data),a,{response:m,request:s});return m.data=i?await Rr(o):o.body,m}async function Rr(s){const e=s.headers.get("content-type");return/application\/json/.test(e)?s.json().catch(()=>s.text()).catch(()=>""):!e||/^text\/|charset=utf-8$/.test(e)?s.text():s.arrayBuffer()}function an(s){if(typeof s=="string")return s;if(s instanceof ArrayBuffer)return"Unknown error";if("message"in s){const e="documentation_url"in s?` - ${s.documentation_url}`:"";return Array.isArray(s.errors)?`${s.message}: ${s.errors.map(t=>JSON.stringify(t)).join(", ")}${e}`:`${s.message}${e}`}return`Unknown error: ${JSON.stringify(s)}`}function Ir(s,e){const t=s.defaults(e);return Object.assign(function(r,n){const o=t.merge(r,n);if(!o.request||!o.request.hook)return zs(t.parse(o));const a=(c,f)=>zs(t.parse(t.merge(c,f)));return Object.assign(a,{endpoint:t,defaults:Ir.bind(null,t)}),o.request.hook(a,o)},{endpoint:t,defaults:Ir.bind(null,t)})}var zr=Ir(rn,on),ln="0.0.0-development";function cn(s){return`Request failed due to following response errors:
`+s.errors.map(e=>` - ${e.message}`).join(`
`)}var un=class extends Error{constructor(e,t,i){super(cn(i));Ce(this,"name","GraphqlResponseError");Ce(this,"errors");Ce(this,"data");this.request=e,this.headers=t,this.response=i,this.errors=i.errors,this.data=i.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},pn=["method","baseUrl","url","headers","request","query","mediaType"],hn=["query","method","url"],Bs=/\/api\/v3\/?$/;function dn(s,e,t){if(t){if(typeof e=="string"&&"query"in t)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const o in t)if(hn.includes(o))return Promise.reject(new Error(`[@octokit/graphql] "${o}" cannot be used as variable name`))}const i=typeof e=="string"?Object.assign({query:e},t):e,r=Object.keys(i).reduce((o,a)=>pn.includes(a)?(o[a]=i[a],o):(o.variables||(o.variables={}),o.variables[a]=i[a],o),{}),n=i.baseUrl||s.endpoint.DEFAULTS.baseUrl;return Bs.test(n)&&(r.url=n.replace(Bs,"/api/graphql")),s(r).then(o=>{if(o.data.errors){const a={};for(const c of Object.keys(o.headers))a[c]=o.headers[c];throw new un(r,a,o.data)}return o.data.data})}function is(s,e){const t=s.defaults(e);return Object.assign((r,n)=>dn(t,r,n),{defaults:is.bind(null,t),endpoint:t.endpoint})}is(zr,{headers:{"user-agent":`octokit-graphql.js/${ln} ${vr()}`},method:"POST",url:"/graphql"});function fn(s){return is(s,{method:"POST",url:"/graphql"})}var gn=/^v1\./,mn=/^ghs_/,_n=/^ghu_/;async function yn(s){const e=s.split(/\./).length===3,t=gn.test(s)||mn.test(s),i=_n.test(s);return{type:"token",token:s,tokenType:e?"app":t?"installation":i?"user-to-server":"oauth"}}function vn(s){return s.split(/\./).length===3?`bearer ${s}`:`token ${s}`}async function bn(s,e,t,i){const r=e.endpoint.merge(t,i);return r.headers.authorization=vn(s),e(r)}var wn=function(e){if(!e)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof e!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return e=e.replace(/^(token|bearer) +/i,""),Object.assign(yn.bind(null,e),{hook:bn.bind(null,e)})};const xi="6.1.2",Ms=()=>{},En=console.warn.bind(console),kn=console.error.bind(console),Ns=`octokit-core.js/${xi} ${vr()}`;var tr;let Tn=(tr=class{constructor(e={}){Ce(this,"request");Ce(this,"graphql");Ce(this,"log");Ce(this,"hook");Ce(this,"auth");const t=new Mo.Collection,i={baseUrl:zr.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},e.request,{hook:t.bind(null,"request")}),mediaType:{previews:[],format:""}};if(i.headers["user-agent"]=e.userAgent?`${e.userAgent} ${Ns}`:Ns,e.baseUrl&&(i.baseUrl=e.baseUrl),e.previews&&(i.mediaType.previews=e.previews),e.timeZone&&(i.headers["time-zone"]=e.timeZone),this.request=zr.defaults(i),this.graphql=fn(this.request).defaults(i),this.log=Object.assign({debug:Ms,info:Ms,warn:En,error:kn},e.log),this.hook=t,e.authStrategy){const{authStrategy:n,...o}=e,a=n(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:o},e.auth));t.wrap("request",a.hook),this.auth=a}else if(!e.auth)this.auth=async()=>({type:"unauthenticated"});else{const n=wn(e.auth);t.wrap("request",n.hook),this.auth=n}const r=this.constructor;for(let n=0;n<r.plugins.length;++n)Object.assign(this,r.plugins[n](this,e))}static defaults(e){return class extends this{constructor(...i){const r=i[0]||{};if(typeof e=="function"){super(e(r));return}super(Object.assign({},e,r,r.userAgent&&e.userAgent?{userAgent:`${r.userAgent} ${e.userAgent}`}:null))}}}static plugin(...e){var r;const t=this.plugins;return r=class extends this{},Ce(r,"plugins",t.concat(e.filter(n=>!t.includes(n)))),r}},Ce(tr,"VERSION",xi),Ce(tr,"plugins",[]),tr);var Sn="0.0.0-development";function An(s){if(!s.data)return{...s,data:[]};if(!("total_count"in s.data&&!("url"in s.data)))return s;const t=s.data.incomplete_results,i=s.data.repository_selection,r=s.data.total_count;delete s.data.incomplete_results,delete s.data.repository_selection,delete s.data.total_count;const n=Object.keys(s.data)[0],o=s.data[n];return s.data=o,typeof t<"u"&&(s.data.incomplete_results=t),typeof i<"u"&&(s.data.repository_selection=i),s.data.total_count=r,s}function os(s,e,t){const i=typeof e=="function"?e.endpoint(t):s.request.endpoint(e,t),r=typeof e=="function"?e:s.request,n=i.method,o=i.headers;let a=i.url;return{[Symbol.asyncIterator]:()=>({async next(){if(!a)return{done:!0};try{const c=await r({method:n,url:a,headers:o}),f=An(c);return a=((f.headers.link||"").match(/<([^>]+)>;\s*rel="next"/)||[])[1],{value:f}}catch(c){if(c.status!==409)throw c;return a="",{value:{status:200,headers:{},data:[]}}}}})}}function Oi(s,e,t,i){return typeof t=="function"&&(i=t,t=void 0),Ri(s,[],os(s,e,t)[Symbol.asyncIterator](),i)}function Ri(s,e,t,i){return t.next().then(r=>{if(r.done)return e;let n=!1;function o(){n=!0}return e=e.concat(i?i(r.value,o):r.value.data),n?e:Ri(s,e,t,i)})}Object.assign(Oi,{iterator:os});function $i(s){return{paginate:Object.assign(Oi.bind(null,s),{iterator:os.bind(null,s)})}}$i.VERSION=Sn;var Cn=(s,e)=>`The cursor at "${s.join(",")}" did not change its value "${e}" after a page transition. Please make sure your that your query is set up correctly.`,Pn=class extends Error{constructor(e,t){super(Cn(e.pathInQuery,t));Ce(this,"name","MissingCursorChangeError");this.pageInfo=e,this.cursorValue=t,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},xn=class extends Error{constructor(e){super(`No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(e,null,2)}`);Ce(this,"name","MissingPageInfo");this.response=e,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},On=s=>Object.prototype.toString.call(s)==="[object Object]";function Li(s){const e=Gi(s,"pageInfo");if(e.length===0)throw new xn(s);return e}var Gi=(s,e,t=[])=>{for(const i of Object.keys(s)){const r=[...t,i],n=s[i];if(On(n)){if(n.hasOwnProperty(e))return r;const o=Gi(n,e,r);if(o.length>0)return o}}return[]},Dt=(s,e)=>e.reduce((t,i)=>t[i],s),$r=(s,e,t)=>{const i=e[e.length-1],r=[...e].slice(0,-1),n=Dt(s,r);typeof t=="function"?n[i]=t(n[i]):n[i]=t},Rn=s=>{const e=Li(s);return{pathInQuery:e,pageInfo:Dt(s,[...e,"pageInfo"])}},Di=s=>s.hasOwnProperty("hasNextPage"),$n=s=>Di(s)?s.endCursor:s.startCursor,Ln=s=>Di(s)?s.hasNextPage:s.hasPreviousPage,Ui=s=>(e,t={})=>{let i=!0,r={...t};return{[Symbol.asyncIterator]:()=>({async next(){if(!i)return{done:!0,value:{}};const n=await s.graphql(e,r),o=Rn(n),a=$n(o.pageInfo);if(i=Ln(o.pageInfo),i&&a===r.cursor)throw new Pn(o,a);return r={...r,cursor:a},{done:!1,value:n}}})}},Gn=(s,e)=>{if(Object.keys(s).length===0)return Object.assign(s,e);const t=Li(s),i=[...t,"nodes"],r=Dt(e,i);r&&$r(s,i,c=>[...c,...r]);const n=[...t,"edges"],o=Dt(e,n);o&&$r(s,n,c=>[...c,...o]);const a=[...t,"pageInfo"];return $r(s,a,Dt(e,a)),s},Dn=s=>{const e=Ui(s);return async(t,i={})=>{let r={};for await(const n of e(t,i))r=Gn(r,n);return r}};function Un(s){return{graphql:Object.assign(s.graphql,{paginate:Object.assign(Dn(s),{iterator:Ui(s)})})}}const Fn="13.2.6",jn={actions:{addCustomLabelsToSelfHostedRunnerForOrg:["POST /orgs/{org}/actions/runners/{runner_id}/labels"],addCustomLabelsToSelfHostedRunnerForRepo:["POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],addSelectedRepoToOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],addSelectedRepoToOrgVariable:["PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"],approveWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"],cancelWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],createEnvironmentVariable:["POST /repos/{owner}/{repo}/environments/{environment_name}/variables"],createOrUpdateEnvironmentSecret:["PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],createOrUpdateOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],createOrgVariable:["POST /orgs/{org}/actions/variables"],createRegistrationTokenForOrg:["POST /orgs/{org}/actions/runners/registration-token"],createRegistrationTokenForRepo:["POST /repos/{owner}/{repo}/actions/runners/registration-token"],createRemoveTokenForOrg:["POST /orgs/{org}/actions/runners/remove-token"],createRemoveTokenForRepo:["POST /repos/{owner}/{repo}/actions/runners/remove-token"],createRepoVariable:["POST /repos/{owner}/{repo}/actions/variables"],createWorkflowDispatch:["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"],deleteActionsCacheById:["DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"],deleteActionsCacheByKey:["DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"],deleteArtifact:["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],deleteEnvironmentSecret:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],deleteEnvironmentVariable:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],deleteOrgSecret:["DELETE /orgs/{org}/actions/secrets/{secret_name}"],deleteOrgVariable:["DELETE /orgs/{org}/actions/variables/{name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],deleteRepoVariable:["DELETE /repos/{owner}/{repo}/actions/variables/{name}"],deleteSelfHostedRunnerFromOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}"],deleteSelfHostedRunnerFromRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"],deleteWorkflowRun:["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],deleteWorkflowRunLogs:["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],disableSelectedRepositoryGithubActionsOrganization:["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"],disableWorkflow:["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"],downloadArtifact:["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"],downloadJobLogsForWorkflowRun:["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],downloadWorkflowRunAttemptLogs:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"],downloadWorkflowRunLogs:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],enableSelectedRepositoryGithubActionsOrganization:["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"],enableWorkflow:["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"],forceCancelWorkflowRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"],generateRunnerJitconfigForOrg:["POST /orgs/{org}/actions/runners/generate-jitconfig"],generateRunnerJitconfigForRepo:["POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"],getActionsCacheList:["GET /repos/{owner}/{repo}/actions/caches"],getActionsCacheUsage:["GET /repos/{owner}/{repo}/actions/cache/usage"],getActionsCacheUsageByRepoForOrg:["GET /orgs/{org}/actions/cache/usage-by-repository"],getActionsCacheUsageForOrg:["GET /orgs/{org}/actions/cache/usage"],getAllowedActionsOrganization:["GET /orgs/{org}/actions/permissions/selected-actions"],getAllowedActionsRepository:["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"],getArtifact:["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],getCustomOidcSubClaimForRepo:["GET /repos/{owner}/{repo}/actions/oidc/customization/sub"],getEnvironmentPublicKey:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"],getEnvironmentSecret:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"],getEnvironmentVariable:["GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],getGithubActionsDefaultWorkflowPermissionsOrganization:["GET /orgs/{org}/actions/permissions/workflow"],getGithubActionsDefaultWorkflowPermissionsRepository:["GET /repos/{owner}/{repo}/actions/permissions/workflow"],getGithubActionsPermissionsOrganization:["GET /orgs/{org}/actions/permissions"],getGithubActionsPermissionsRepository:["GET /repos/{owner}/{repo}/actions/permissions"],getJobForWorkflowRun:["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],getOrgPublicKey:["GET /orgs/{org}/actions/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/actions/secrets/{secret_name}"],getOrgVariable:["GET /orgs/{org}/actions/variables/{name}"],getPendingDeploymentsForRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],getRepoPermissions:["GET /repos/{owner}/{repo}/actions/permissions",{},{renamed:["actions","getGithubActionsPermissionsRepository"]}],getRepoPublicKey:["GET /repos/{owner}/{repo}/actions/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],getRepoVariable:["GET /repos/{owner}/{repo}/actions/variables/{name}"],getReviewsForRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"],getSelfHostedRunnerForOrg:["GET /orgs/{org}/actions/runners/{runner_id}"],getSelfHostedRunnerForRepo:["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],getWorkflow:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],getWorkflowAccessToRepository:["GET /repos/{owner}/{repo}/actions/permissions/access"],getWorkflowRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],getWorkflowRunAttempt:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"],getWorkflowRunUsage:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],getWorkflowUsage:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],listArtifactsForRepo:["GET /repos/{owner}/{repo}/actions/artifacts"],listEnvironmentSecrets:["GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"],listEnvironmentVariables:["GET /repos/{owner}/{repo}/environments/{environment_name}/variables"],listJobsForWorkflowRun:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],listJobsForWorkflowRunAttempt:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"],listLabelsForSelfHostedRunnerForOrg:["GET /orgs/{org}/actions/runners/{runner_id}/labels"],listLabelsForSelfHostedRunnerForRepo:["GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],listOrgSecrets:["GET /orgs/{org}/actions/secrets"],listOrgVariables:["GET /orgs/{org}/actions/variables"],listRepoOrganizationSecrets:["GET /repos/{owner}/{repo}/actions/organization-secrets"],listRepoOrganizationVariables:["GET /repos/{owner}/{repo}/actions/organization-variables"],listRepoSecrets:["GET /repos/{owner}/{repo}/actions/secrets"],listRepoVariables:["GET /repos/{owner}/{repo}/actions/variables"],listRepoWorkflows:["GET /repos/{owner}/{repo}/actions/workflows"],listRunnerApplicationsForOrg:["GET /orgs/{org}/actions/runners/downloads"],listRunnerApplicationsForRepo:["GET /repos/{owner}/{repo}/actions/runners/downloads"],listSelectedReposForOrgSecret:["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"],listSelectedReposForOrgVariable:["GET /orgs/{org}/actions/variables/{name}/repositories"],listSelectedRepositoriesEnabledGithubActionsOrganization:["GET /orgs/{org}/actions/permissions/repositories"],listSelfHostedRunnersForOrg:["GET /orgs/{org}/actions/runners"],listSelfHostedRunnersForRepo:["GET /repos/{owner}/{repo}/actions/runners"],listWorkflowRunArtifacts:["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],listWorkflowRuns:["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],listWorkflowRunsForRepo:["GET /repos/{owner}/{repo}/actions/runs"],reRunJobForWorkflowRun:["POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"],reRunWorkflow:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],reRunWorkflowFailedJobs:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"],removeAllCustomLabelsFromSelfHostedRunnerForOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}/labels"],removeAllCustomLabelsFromSelfHostedRunnerForRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],removeCustomLabelFromSelfHostedRunnerForOrg:["DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"],removeCustomLabelFromSelfHostedRunnerForRepo:["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],removeSelectedRepoFromOrgVariable:["DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"],reviewCustomGatesForRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"],reviewPendingDeploymentsForRun:["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],setAllowedActionsOrganization:["PUT /orgs/{org}/actions/permissions/selected-actions"],setAllowedActionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"],setCustomLabelsForSelfHostedRunnerForOrg:["PUT /orgs/{org}/actions/runners/{runner_id}/labels"],setCustomLabelsForSelfHostedRunnerForRepo:["PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"],setCustomOidcSubClaimForRepo:["PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"],setGithubActionsDefaultWorkflowPermissionsOrganization:["PUT /orgs/{org}/actions/permissions/workflow"],setGithubActionsDefaultWorkflowPermissionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions/workflow"],setGithubActionsPermissionsOrganization:["PUT /orgs/{org}/actions/permissions"],setGithubActionsPermissionsRepository:["PUT /repos/{owner}/{repo}/actions/permissions"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"],setSelectedReposForOrgVariable:["PUT /orgs/{org}/actions/variables/{name}/repositories"],setSelectedRepositoriesEnabledGithubActionsOrganization:["PUT /orgs/{org}/actions/permissions/repositories"],setWorkflowAccessToRepository:["PUT /repos/{owner}/{repo}/actions/permissions/access"],updateEnvironmentVariable:["PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"],updateOrgVariable:["PATCH /orgs/{org}/actions/variables/{name}"],updateRepoVariable:["PATCH /repos/{owner}/{repo}/actions/variables/{name}"]},activity:{checkRepoIsStarredByAuthenticatedUser:["GET /user/starred/{owner}/{repo}"],deleteRepoSubscription:["DELETE /repos/{owner}/{repo}/subscription"],deleteThreadSubscription:["DELETE /notifications/threads/{thread_id}/subscription"],getFeeds:["GET /feeds"],getRepoSubscription:["GET /repos/{owner}/{repo}/subscription"],getThread:["GET /notifications/threads/{thread_id}"],getThreadSubscriptionForAuthenticatedUser:["GET /notifications/threads/{thread_id}/subscription"],listEventsForAuthenticatedUser:["GET /users/{username}/events"],listNotificationsForAuthenticatedUser:["GET /notifications"],listOrgEventsForAuthenticatedUser:["GET /users/{username}/events/orgs/{org}"],listPublicEvents:["GET /events"],listPublicEventsForRepoNetwork:["GET /networks/{owner}/{repo}/events"],listPublicEventsForUser:["GET /users/{username}/events/public"],listPublicOrgEvents:["GET /orgs/{org}/events"],listReceivedEventsForUser:["GET /users/{username}/received_events"],listReceivedPublicEventsForUser:["GET /users/{username}/received_events/public"],listRepoEvents:["GET /repos/{owner}/{repo}/events"],listRepoNotificationsForAuthenticatedUser:["GET /repos/{owner}/{repo}/notifications"],listReposStarredByAuthenticatedUser:["GET /user/starred"],listReposStarredByUser:["GET /users/{username}/starred"],listReposWatchedByUser:["GET /users/{username}/subscriptions"],listStargazersForRepo:["GET /repos/{owner}/{repo}/stargazers"],listWatchedReposForAuthenticatedUser:["GET /user/subscriptions"],listWatchersForRepo:["GET /repos/{owner}/{repo}/subscribers"],markNotificationsAsRead:["PUT /notifications"],markRepoNotificationsAsRead:["PUT /repos/{owner}/{repo}/notifications"],markThreadAsDone:["DELETE /notifications/threads/{thread_id}"],markThreadAsRead:["PATCH /notifications/threads/{thread_id}"],setRepoSubscription:["PUT /repos/{owner}/{repo}/subscription"],setThreadSubscription:["PUT /notifications/threads/{thread_id}/subscription"],starRepoForAuthenticatedUser:["PUT /user/starred/{owner}/{repo}"],unstarRepoForAuthenticatedUser:["DELETE /user/starred/{owner}/{repo}"]},apps:{addRepoToInstallation:["PUT /user/installations/{installation_id}/repositories/{repository_id}",{},{renamed:["apps","addRepoToInstallationForAuthenticatedUser"]}],addRepoToInstallationForAuthenticatedUser:["PUT /user/installations/{installation_id}/repositories/{repository_id}"],checkToken:["POST /applications/{client_id}/token"],createFromManifest:["POST /app-manifests/{code}/conversions"],createInstallationAccessToken:["POST /app/installations/{installation_id}/access_tokens"],deleteAuthorization:["DELETE /applications/{client_id}/grant"],deleteInstallation:["DELETE /app/installations/{installation_id}"],deleteToken:["DELETE /applications/{client_id}/token"],getAuthenticated:["GET /app"],getBySlug:["GET /apps/{app_slug}"],getInstallation:["GET /app/installations/{installation_id}"],getOrgInstallation:["GET /orgs/{org}/installation"],getRepoInstallation:["GET /repos/{owner}/{repo}/installation"],getSubscriptionPlanForAccount:["GET /marketplace_listing/accounts/{account_id}"],getSubscriptionPlanForAccountStubbed:["GET /marketplace_listing/stubbed/accounts/{account_id}"],getUserInstallation:["GET /users/{username}/installation"],getWebhookConfigForApp:["GET /app/hook/config"],getWebhookDelivery:["GET /app/hook/deliveries/{delivery_id}"],listAccountsForPlan:["GET /marketplace_listing/plans/{plan_id}/accounts"],listAccountsForPlanStubbed:["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],listInstallationReposForAuthenticatedUser:["GET /user/installations/{installation_id}/repositories"],listInstallationRequestsForAuthenticatedApp:["GET /app/installation-requests"],listInstallations:["GET /app/installations"],listInstallationsForAuthenticatedUser:["GET /user/installations"],listPlans:["GET /marketplace_listing/plans"],listPlansStubbed:["GET /marketplace_listing/stubbed/plans"],listReposAccessibleToInstallation:["GET /installation/repositories"],listSubscriptionsForAuthenticatedUser:["GET /user/marketplace_purchases"],listSubscriptionsForAuthenticatedUserStubbed:["GET /user/marketplace_purchases/stubbed"],listWebhookDeliveries:["GET /app/hook/deliveries"],redeliverWebhookDelivery:["POST /app/hook/deliveries/{delivery_id}/attempts"],removeRepoFromInstallation:["DELETE /user/installations/{installation_id}/repositories/{repository_id}",{},{renamed:["apps","removeRepoFromInstallationForAuthenticatedUser"]}],removeRepoFromInstallationForAuthenticatedUser:["DELETE /user/installations/{installation_id}/repositories/{repository_id}"],resetToken:["PATCH /applications/{client_id}/token"],revokeInstallationAccessToken:["DELETE /installation/token"],scopeToken:["POST /applications/{client_id}/token/scoped"],suspendInstallation:["PUT /app/installations/{installation_id}/suspended"],unsuspendInstallation:["DELETE /app/installations/{installation_id}/suspended"],updateWebhookConfigForApp:["PATCH /app/hook/config"]},billing:{getGithubActionsBillingOrg:["GET /orgs/{org}/settings/billing/actions"],getGithubActionsBillingUser:["GET /users/{username}/settings/billing/actions"],getGithubPackagesBillingOrg:["GET /orgs/{org}/settings/billing/packages"],getGithubPackagesBillingUser:["GET /users/{username}/settings/billing/packages"],getSharedStorageBillingOrg:["GET /orgs/{org}/settings/billing/shared-storage"],getSharedStorageBillingUser:["GET /users/{username}/settings/billing/shared-storage"]},checks:{create:["POST /repos/{owner}/{repo}/check-runs"],createSuite:["POST /repos/{owner}/{repo}/check-suites"],get:["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],getSuite:["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],listAnnotations:["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"],listForRef:["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],listForSuite:["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"],listSuitesForRef:["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],rerequestRun:["POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"],rerequestSuite:["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"],setSuitesPreferences:["PATCH /repos/{owner}/{repo}/check-suites/preferences"],update:["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]},codeScanning:{deleteAnalysis:["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"],getAlert:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",{},{renamedParameters:{alert_id:"alert_number"}}],getAnalysis:["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"],getCodeqlDatabase:["GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"],getDefaultSetup:["GET /repos/{owner}/{repo}/code-scanning/default-setup"],getSarif:["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],listAlertInstances:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"],listAlertsForOrg:["GET /orgs/{org}/code-scanning/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/code-scanning/alerts"],listAlertsInstances:["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",{},{renamed:["codeScanning","listAlertInstances"]}],listCodeqlDatabases:["GET /repos/{owner}/{repo}/code-scanning/codeql/databases"],listRecentAnalyses:["GET /repos/{owner}/{repo}/code-scanning/analyses"],updateAlert:["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],updateDefaultSetup:["PATCH /repos/{owner}/{repo}/code-scanning/default-setup"],uploadSarif:["POST /repos/{owner}/{repo}/code-scanning/sarifs"]},codesOfConduct:{getAllCodesOfConduct:["GET /codes_of_conduct"],getConductCode:["GET /codes_of_conduct/{key}"]},codespaces:{addRepositoryForSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"],addSelectedRepoToOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"],checkPermissionsForDevcontainer:["GET /repos/{owner}/{repo}/codespaces/permissions_check"],codespaceMachinesForAuthenticatedUser:["GET /user/codespaces/{codespace_name}/machines"],createForAuthenticatedUser:["POST /user/codespaces"],createOrUpdateOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],createOrUpdateSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}"],createWithPrForAuthenticatedUser:["POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"],createWithRepoForAuthenticatedUser:["POST /repos/{owner}/{repo}/codespaces"],deleteForAuthenticatedUser:["DELETE /user/codespaces/{codespace_name}"],deleteFromOrganization:["DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"],deleteOrgSecret:["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],deleteSecretForAuthenticatedUser:["DELETE /user/codespaces/secrets/{secret_name}"],exportForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/exports"],getCodespacesForUserInOrg:["GET /orgs/{org}/members/{username}/codespaces"],getExportDetailsForAuthenticatedUser:["GET /user/codespaces/{codespace_name}/exports/{export_id}"],getForAuthenticatedUser:["GET /user/codespaces/{codespace_name}"],getOrgPublicKey:["GET /orgs/{org}/codespaces/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/codespaces/secrets/{secret_name}"],getPublicKeyForAuthenticatedUser:["GET /user/codespaces/secrets/public-key"],getRepoPublicKey:["GET /repos/{owner}/{repo}/codespaces/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"],getSecretForAuthenticatedUser:["GET /user/codespaces/secrets/{secret_name}"],listDevcontainersInRepositoryForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/devcontainers"],listForAuthenticatedUser:["GET /user/codespaces"],listInOrganization:["GET /orgs/{org}/codespaces",{},{renamedParameters:{org_id:"org"}}],listInRepositoryForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces"],listOrgSecrets:["GET /orgs/{org}/codespaces/secrets"],listRepoSecrets:["GET /repos/{owner}/{repo}/codespaces/secrets"],listRepositoriesForSecretForAuthenticatedUser:["GET /user/codespaces/secrets/{secret_name}/repositories"],listSecretsForAuthenticatedUser:["GET /user/codespaces/secrets"],listSelectedReposForOrgSecret:["GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"],preFlightWithRepoForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/new"],publishForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/publish"],removeRepositoryForSecretForAuthenticatedUser:["DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"],repoMachinesForAuthenticatedUser:["GET /repos/{owner}/{repo}/codespaces/machines"],setRepositoriesForSecretForAuthenticatedUser:["PUT /user/codespaces/secrets/{secret_name}/repositories"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"],startForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/start"],stopForAuthenticatedUser:["POST /user/codespaces/{codespace_name}/stop"],stopInOrganization:["POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"],updateForAuthenticatedUser:["PATCH /user/codespaces/{codespace_name}"]},copilot:{addCopilotSeatsForTeams:["POST /orgs/{org}/copilot/billing/selected_teams"],addCopilotSeatsForUsers:["POST /orgs/{org}/copilot/billing/selected_users"],cancelCopilotSeatAssignmentForTeams:["DELETE /orgs/{org}/copilot/billing/selected_teams"],cancelCopilotSeatAssignmentForUsers:["DELETE /orgs/{org}/copilot/billing/selected_users"],getCopilotOrganizationDetails:["GET /orgs/{org}/copilot/billing"],getCopilotSeatDetailsForUser:["GET /orgs/{org}/members/{username}/copilot"],listCopilotSeats:["GET /orgs/{org}/copilot/billing/seats"],usageMetricsForEnterprise:["GET /enterprises/{enterprise}/copilot/usage"],usageMetricsForOrg:["GET /orgs/{org}/copilot/usage"],usageMetricsForTeam:["GET /orgs/{org}/team/{team_slug}/copilot/usage"]},dependabot:{addSelectedRepoToOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"],createOrUpdateOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}"],createOrUpdateRepoSecret:["PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],deleteOrgSecret:["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],deleteRepoSecret:["DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],getAlert:["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],getOrgPublicKey:["GET /orgs/{org}/dependabot/secrets/public-key"],getOrgSecret:["GET /orgs/{org}/dependabot/secrets/{secret_name}"],getRepoPublicKey:["GET /repos/{owner}/{repo}/dependabot/secrets/public-key"],getRepoSecret:["GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"],listAlertsForEnterprise:["GET /enterprises/{enterprise}/dependabot/alerts"],listAlertsForOrg:["GET /orgs/{org}/dependabot/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/dependabot/alerts"],listOrgSecrets:["GET /orgs/{org}/dependabot/secrets"],listRepoSecrets:["GET /repos/{owner}/{repo}/dependabot/secrets"],listSelectedReposForOrgSecret:["GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"],removeSelectedRepoFromOrgSecret:["DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"],setSelectedReposForOrgSecret:["PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"],updateAlert:["PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"]},dependencyGraph:{createRepositorySnapshot:["POST /repos/{owner}/{repo}/dependency-graph/snapshots"],diffRange:["GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"],exportSbom:["GET /repos/{owner}/{repo}/dependency-graph/sbom"]},emojis:{get:["GET /emojis"]},gists:{checkIsStarred:["GET /gists/{gist_id}/star"],create:["POST /gists"],createComment:["POST /gists/{gist_id}/comments"],delete:["DELETE /gists/{gist_id}"],deleteComment:["DELETE /gists/{gist_id}/comments/{comment_id}"],fork:["POST /gists/{gist_id}/forks"],get:["GET /gists/{gist_id}"],getComment:["GET /gists/{gist_id}/comments/{comment_id}"],getRevision:["GET /gists/{gist_id}/{sha}"],list:["GET /gists"],listComments:["GET /gists/{gist_id}/comments"],listCommits:["GET /gists/{gist_id}/commits"],listForUser:["GET /users/{username}/gists"],listForks:["GET /gists/{gist_id}/forks"],listPublic:["GET /gists/public"],listStarred:["GET /gists/starred"],star:["PUT /gists/{gist_id}/star"],unstar:["DELETE /gists/{gist_id}/star"],update:["PATCH /gists/{gist_id}"],updateComment:["PATCH /gists/{gist_id}/comments/{comment_id}"]},git:{createBlob:["POST /repos/{owner}/{repo}/git/blobs"],createCommit:["POST /repos/{owner}/{repo}/git/commits"],createRef:["POST /repos/{owner}/{repo}/git/refs"],createTag:["POST /repos/{owner}/{repo}/git/tags"],createTree:["POST /repos/{owner}/{repo}/git/trees"],deleteRef:["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],getBlob:["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],getCommit:["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],getRef:["GET /repos/{owner}/{repo}/git/ref/{ref}"],getTag:["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],getTree:["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],listMatchingRefs:["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],updateRef:["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]},gitignore:{getAllTemplates:["GET /gitignore/templates"],getTemplate:["GET /gitignore/templates/{name}"]},interactions:{getRestrictionsForAuthenticatedUser:["GET /user/interaction-limits"],getRestrictionsForOrg:["GET /orgs/{org}/interaction-limits"],getRestrictionsForRepo:["GET /repos/{owner}/{repo}/interaction-limits"],getRestrictionsForYourPublicRepos:["GET /user/interaction-limits",{},{renamed:["interactions","getRestrictionsForAuthenticatedUser"]}],removeRestrictionsForAuthenticatedUser:["DELETE /user/interaction-limits"],removeRestrictionsForOrg:["DELETE /orgs/{org}/interaction-limits"],removeRestrictionsForRepo:["DELETE /repos/{owner}/{repo}/interaction-limits"],removeRestrictionsForYourPublicRepos:["DELETE /user/interaction-limits",{},{renamed:["interactions","removeRestrictionsForAuthenticatedUser"]}],setRestrictionsForAuthenticatedUser:["PUT /user/interaction-limits"],setRestrictionsForOrg:["PUT /orgs/{org}/interaction-limits"],setRestrictionsForRepo:["PUT /repos/{owner}/{repo}/interaction-limits"],setRestrictionsForYourPublicRepos:["PUT /user/interaction-limits",{},{renamed:["interactions","setRestrictionsForAuthenticatedUser"]}]},issues:{addAssignees:["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],addLabels:["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],checkUserCanBeAssigned:["GET /repos/{owner}/{repo}/assignees/{assignee}"],checkUserCanBeAssignedToIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"],create:["POST /repos/{owner}/{repo}/issues"],createComment:["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],createLabel:["POST /repos/{owner}/{repo}/labels"],createMilestone:["POST /repos/{owner}/{repo}/milestones"],deleteComment:["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],deleteLabel:["DELETE /repos/{owner}/{repo}/labels/{name}"],deleteMilestone:["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],get:["GET /repos/{owner}/{repo}/issues/{issue_number}"],getComment:["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],getEvent:["GET /repos/{owner}/{repo}/issues/events/{event_id}"],getLabel:["GET /repos/{owner}/{repo}/labels/{name}"],getMilestone:["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],list:["GET /issues"],listAssignees:["GET /repos/{owner}/{repo}/assignees"],listComments:["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],listCommentsForRepo:["GET /repos/{owner}/{repo}/issues/comments"],listEvents:["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],listEventsForRepo:["GET /repos/{owner}/{repo}/issues/events"],listEventsForTimeline:["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"],listForAuthenticatedUser:["GET /user/issues"],listForOrg:["GET /orgs/{org}/issues"],listForRepo:["GET /repos/{owner}/{repo}/issues"],listLabelsForMilestone:["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],listLabelsForRepo:["GET /repos/{owner}/{repo}/labels"],listLabelsOnIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],listMilestones:["GET /repos/{owner}/{repo}/milestones"],lock:["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],removeAllLabels:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],removeAssignees:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],removeLabel:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],setLabels:["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],unlock:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],update:["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],updateComment:["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],updateLabel:["PATCH /repos/{owner}/{repo}/labels/{name}"],updateMilestone:["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]},licenses:{get:["GET /licenses/{license}"],getAllCommonlyUsed:["GET /licenses"],getForRepo:["GET /repos/{owner}/{repo}/license"]},markdown:{render:["POST /markdown"],renderRaw:["POST /markdown/raw",{headers:{"content-type":"text/plain; charset=utf-8"}}]},meta:{get:["GET /meta"],getAllVersions:["GET /versions"],getOctocat:["GET /octocat"],getZen:["GET /zen"],root:["GET /"]},migrations:{deleteArchiveForAuthenticatedUser:["DELETE /user/migrations/{migration_id}/archive"],deleteArchiveForOrg:["DELETE /orgs/{org}/migrations/{migration_id}/archive"],downloadArchiveForOrg:["GET /orgs/{org}/migrations/{migration_id}/archive"],getArchiveForAuthenticatedUser:["GET /user/migrations/{migration_id}/archive"],getStatusForAuthenticatedUser:["GET /user/migrations/{migration_id}"],getStatusForOrg:["GET /orgs/{org}/migrations/{migration_id}"],listForAuthenticatedUser:["GET /user/migrations"],listForOrg:["GET /orgs/{org}/migrations"],listReposForAuthenticatedUser:["GET /user/migrations/{migration_id}/repositories"],listReposForOrg:["GET /orgs/{org}/migrations/{migration_id}/repositories"],listReposForUser:["GET /user/migrations/{migration_id}/repositories",{},{renamed:["migrations","listReposForAuthenticatedUser"]}],startForAuthenticatedUser:["POST /user/migrations"],startForOrg:["POST /orgs/{org}/migrations"],unlockRepoForAuthenticatedUser:["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"],unlockRepoForOrg:["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"]},oidc:{getOidcCustomSubTemplateForOrg:["GET /orgs/{org}/actions/oidc/customization/sub"],updateOidcCustomSubTemplateForOrg:["PUT /orgs/{org}/actions/oidc/customization/sub"]},orgs:{addSecurityManagerTeam:["PUT /orgs/{org}/security-managers/teams/{team_slug}"],assignTeamToOrgRole:["PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"],assignUserToOrgRole:["PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"],blockUser:["PUT /orgs/{org}/blocks/{username}"],cancelInvitation:["DELETE /orgs/{org}/invitations/{invitation_id}"],checkBlockedUser:["GET /orgs/{org}/blocks/{username}"],checkMembershipForUser:["GET /orgs/{org}/members/{username}"],checkPublicMembershipForUser:["GET /orgs/{org}/public_members/{username}"],convertMemberToOutsideCollaborator:["PUT /orgs/{org}/outside_collaborators/{username}"],createCustomOrganizationRole:["POST /orgs/{org}/organization-roles"],createInvitation:["POST /orgs/{org}/invitations"],createOrUpdateCustomProperties:["PATCH /orgs/{org}/properties/schema"],createOrUpdateCustomPropertiesValuesForRepos:["PATCH /orgs/{org}/properties/values"],createOrUpdateCustomProperty:["PUT /orgs/{org}/properties/schema/{custom_property_name}"],createWebhook:["POST /orgs/{org}/hooks"],delete:["DELETE /orgs/{org}"],deleteCustomOrganizationRole:["DELETE /orgs/{org}/organization-roles/{role_id}"],deleteWebhook:["DELETE /orgs/{org}/hooks/{hook_id}"],enableOrDisableSecurityProductOnAllOrgRepos:["POST /orgs/{org}/{security_product}/{enablement}"],get:["GET /orgs/{org}"],getAllCustomProperties:["GET /orgs/{org}/properties/schema"],getCustomProperty:["GET /orgs/{org}/properties/schema/{custom_property_name}"],getMembershipForAuthenticatedUser:["GET /user/memberships/orgs/{org}"],getMembershipForUser:["GET /orgs/{org}/memberships/{username}"],getOrgRole:["GET /orgs/{org}/organization-roles/{role_id}"],getWebhook:["GET /orgs/{org}/hooks/{hook_id}"],getWebhookConfigForOrg:["GET /orgs/{org}/hooks/{hook_id}/config"],getWebhookDelivery:["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"],list:["GET /organizations"],listAppInstallations:["GET /orgs/{org}/installations"],listBlockedUsers:["GET /orgs/{org}/blocks"],listCustomPropertiesValuesForRepos:["GET /orgs/{org}/properties/values"],listFailedInvitations:["GET /orgs/{org}/failed_invitations"],listForAuthenticatedUser:["GET /user/orgs"],listForUser:["GET /users/{username}/orgs"],listInvitationTeams:["GET /orgs/{org}/invitations/{invitation_id}/teams"],listMembers:["GET /orgs/{org}/members"],listMembershipsForAuthenticatedUser:["GET /user/memberships/orgs"],listOrgRoleTeams:["GET /orgs/{org}/organization-roles/{role_id}/teams"],listOrgRoleUsers:["GET /orgs/{org}/organization-roles/{role_id}/users"],listOrgRoles:["GET /orgs/{org}/organization-roles"],listOrganizationFineGrainedPermissions:["GET /orgs/{org}/organization-fine-grained-permissions"],listOutsideCollaborators:["GET /orgs/{org}/outside_collaborators"],listPatGrantRepositories:["GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"],listPatGrantRequestRepositories:["GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"],listPatGrantRequests:["GET /orgs/{org}/personal-access-token-requests"],listPatGrants:["GET /orgs/{org}/personal-access-tokens"],listPendingInvitations:["GET /orgs/{org}/invitations"],listPublicMembers:["GET /orgs/{org}/public_members"],listSecurityManagerTeams:["GET /orgs/{org}/security-managers"],listWebhookDeliveries:["GET /orgs/{org}/hooks/{hook_id}/deliveries"],listWebhooks:["GET /orgs/{org}/hooks"],patchCustomOrganizationRole:["PATCH /orgs/{org}/organization-roles/{role_id}"],pingWebhook:["POST /orgs/{org}/hooks/{hook_id}/pings"],redeliverWebhookDelivery:["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],removeCustomProperty:["DELETE /orgs/{org}/properties/schema/{custom_property_name}"],removeMember:["DELETE /orgs/{org}/members/{username}"],removeMembershipForUser:["DELETE /orgs/{org}/memberships/{username}"],removeOutsideCollaborator:["DELETE /orgs/{org}/outside_collaborators/{username}"],removePublicMembershipForAuthenticatedUser:["DELETE /orgs/{org}/public_members/{username}"],removeSecurityManagerTeam:["DELETE /orgs/{org}/security-managers/teams/{team_slug}"],reviewPatGrantRequest:["POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"],reviewPatGrantRequestsInBulk:["POST /orgs/{org}/personal-access-token-requests"],revokeAllOrgRolesTeam:["DELETE /orgs/{org}/organization-roles/teams/{team_slug}"],revokeAllOrgRolesUser:["DELETE /orgs/{org}/organization-roles/users/{username}"],revokeOrgRoleTeam:["DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"],revokeOrgRoleUser:["DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"],setMembershipForUser:["PUT /orgs/{org}/memberships/{username}"],setPublicMembershipForAuthenticatedUser:["PUT /orgs/{org}/public_members/{username}"],unblockUser:["DELETE /orgs/{org}/blocks/{username}"],update:["PATCH /orgs/{org}"],updateMembershipForAuthenticatedUser:["PATCH /user/memberships/orgs/{org}"],updatePatAccess:["POST /orgs/{org}/personal-access-tokens/{pat_id}"],updatePatAccesses:["POST /orgs/{org}/personal-access-tokens"],updateWebhook:["PATCH /orgs/{org}/hooks/{hook_id}"],updateWebhookConfigForOrg:["PATCH /orgs/{org}/hooks/{hook_id}/config"]},packages:{deletePackageForAuthenticatedUser:["DELETE /user/packages/{package_type}/{package_name}"],deletePackageForOrg:["DELETE /orgs/{org}/packages/{package_type}/{package_name}"],deletePackageForUser:["DELETE /users/{username}/packages/{package_type}/{package_name}"],deletePackageVersionForAuthenticatedUser:["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],deletePackageVersionForOrg:["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],deletePackageVersionForUser:["DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],getAllPackageVersionsForAPackageOwnedByAnOrg:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions",{},{renamed:["packages","getAllPackageVersionsForPackageOwnedByOrg"]}],getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions",{},{renamed:["packages","getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]}],getAllPackageVersionsForPackageOwnedByAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions"],getAllPackageVersionsForPackageOwnedByOrg:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"],getAllPackageVersionsForPackageOwnedByUser:["GET /users/{username}/packages/{package_type}/{package_name}/versions"],getPackageForAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}"],getPackageForOrganization:["GET /orgs/{org}/packages/{package_type}/{package_name}"],getPackageForUser:["GET /users/{username}/packages/{package_type}/{package_name}"],getPackageVersionForAuthenticatedUser:["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],getPackageVersionForOrganization:["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],getPackageVersionForUser:["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],listDockerMigrationConflictingPackagesForAuthenticatedUser:["GET /user/docker/conflicts"],listDockerMigrationConflictingPackagesForOrganization:["GET /orgs/{org}/docker/conflicts"],listDockerMigrationConflictingPackagesForUser:["GET /users/{username}/docker/conflicts"],listPackagesForAuthenticatedUser:["GET /user/packages"],listPackagesForOrganization:["GET /orgs/{org}/packages"],listPackagesForUser:["GET /users/{username}/packages"],restorePackageForAuthenticatedUser:["POST /user/packages/{package_type}/{package_name}/restore{?token}"],restorePackageForOrg:["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"],restorePackageForUser:["POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"],restorePackageVersionForAuthenticatedUser:["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],restorePackageVersionForOrg:["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],restorePackageVersionForUser:["POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]},projects:{addCollaborator:["PUT /projects/{project_id}/collaborators/{username}"],createCard:["POST /projects/columns/{column_id}/cards"],createColumn:["POST /projects/{project_id}/columns"],createForAuthenticatedUser:["POST /user/projects"],createForOrg:["POST /orgs/{org}/projects"],createForRepo:["POST /repos/{owner}/{repo}/projects"],delete:["DELETE /projects/{project_id}"],deleteCard:["DELETE /projects/columns/cards/{card_id}"],deleteColumn:["DELETE /projects/columns/{column_id}"],get:["GET /projects/{project_id}"],getCard:["GET /projects/columns/cards/{card_id}"],getColumn:["GET /projects/columns/{column_id}"],getPermissionForUser:["GET /projects/{project_id}/collaborators/{username}/permission"],listCards:["GET /projects/columns/{column_id}/cards"],listCollaborators:["GET /projects/{project_id}/collaborators"],listColumns:["GET /projects/{project_id}/columns"],listForOrg:["GET /orgs/{org}/projects"],listForRepo:["GET /repos/{owner}/{repo}/projects"],listForUser:["GET /users/{username}/projects"],moveCard:["POST /projects/columns/cards/{card_id}/moves"],moveColumn:["POST /projects/columns/{column_id}/moves"],removeCollaborator:["DELETE /projects/{project_id}/collaborators/{username}"],update:["PATCH /projects/{project_id}"],updateCard:["PATCH /projects/columns/cards/{card_id}"],updateColumn:["PATCH /projects/columns/{column_id}"]},pulls:{checkIfMerged:["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],create:["POST /repos/{owner}/{repo}/pulls"],createReplyForReviewComment:["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"],createReview:["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],createReviewComment:["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],deletePendingReview:["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],deleteReviewComment:["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],dismissReview:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"],get:["GET /repos/{owner}/{repo}/pulls/{pull_number}"],getReview:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],getReviewComment:["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],list:["GET /repos/{owner}/{repo}/pulls"],listCommentsForReview:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"],listCommits:["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],listFiles:["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],listRequestedReviewers:["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],listReviewComments:["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],listReviewCommentsForRepo:["GET /repos/{owner}/{repo}/pulls/comments"],listReviews:["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],merge:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],removeRequestedReviewers:["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],requestReviewers:["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],submitReview:["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],update:["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],updateBranch:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"],updateReview:["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],updateReviewComment:["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]},rateLimit:{get:["GET /rate_limit"]},reactions:{createForCommitComment:["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"],createForIssue:["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"],createForIssueComment:["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"],createForPullRequestReviewComment:["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"],createForRelease:["POST /repos/{owner}/{repo}/releases/{release_id}/reactions"],createForTeamDiscussionCommentInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"],createForTeamDiscussionInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"],deleteForCommitComment:["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"],deleteForIssue:["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"],deleteForIssueComment:["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"],deleteForPullRequestComment:["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"],deleteForRelease:["DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"],deleteForTeamDiscussion:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"],deleteForTeamDiscussionComment:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"],listForCommitComment:["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"],listForIssue:["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],listForIssueComment:["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"],listForPullRequestReviewComment:["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"],listForRelease:["GET /repos/{owner}/{repo}/releases/{release_id}/reactions"],listForTeamDiscussionCommentInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"],listForTeamDiscussionInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]},repos:{acceptInvitation:["PATCH /user/repository_invitations/{invitation_id}",{},{renamed:["repos","acceptInvitationForAuthenticatedUser"]}],acceptInvitationForAuthenticatedUser:["PATCH /user/repository_invitations/{invitation_id}"],addAppAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],addCollaborator:["PUT /repos/{owner}/{repo}/collaborators/{username}"],addStatusCheckContexts:["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],addTeamAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],addUserAccessRestrictions:["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],cancelPagesDeployment:["POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"],checkAutomatedSecurityFixes:["GET /repos/{owner}/{repo}/automated-security-fixes"],checkCollaborator:["GET /repos/{owner}/{repo}/collaborators/{username}"],checkPrivateVulnerabilityReporting:["GET /repos/{owner}/{repo}/private-vulnerability-reporting"],checkVulnerabilityAlerts:["GET /repos/{owner}/{repo}/vulnerability-alerts"],codeownersErrors:["GET /repos/{owner}/{repo}/codeowners/errors"],compareCommits:["GET /repos/{owner}/{repo}/compare/{base}...{head}"],compareCommitsWithBasehead:["GET /repos/{owner}/{repo}/compare/{basehead}"],createAutolink:["POST /repos/{owner}/{repo}/autolinks"],createCommitComment:["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],createCommitSignatureProtection:["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],createCommitStatus:["POST /repos/{owner}/{repo}/statuses/{sha}"],createDeployKey:["POST /repos/{owner}/{repo}/keys"],createDeployment:["POST /repos/{owner}/{repo}/deployments"],createDeploymentBranchPolicy:["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"],createDeploymentProtectionRule:["POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"],createDeploymentStatus:["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],createDispatchEvent:["POST /repos/{owner}/{repo}/dispatches"],createForAuthenticatedUser:["POST /user/repos"],createFork:["POST /repos/{owner}/{repo}/forks"],createInOrg:["POST /orgs/{org}/repos"],createOrUpdateCustomPropertiesValues:["PATCH /repos/{owner}/{repo}/properties/values"],createOrUpdateEnvironment:["PUT /repos/{owner}/{repo}/environments/{environment_name}"],createOrUpdateFileContents:["PUT /repos/{owner}/{repo}/contents/{path}"],createOrgRuleset:["POST /orgs/{org}/rulesets"],createPagesDeployment:["POST /repos/{owner}/{repo}/pages/deployments"],createPagesSite:["POST /repos/{owner}/{repo}/pages"],createRelease:["POST /repos/{owner}/{repo}/releases"],createRepoRuleset:["POST /repos/{owner}/{repo}/rulesets"],createTagProtection:["POST /repos/{owner}/{repo}/tags/protection"],createUsingTemplate:["POST /repos/{template_owner}/{template_repo}/generate"],createWebhook:["POST /repos/{owner}/{repo}/hooks"],declineInvitation:["DELETE /user/repository_invitations/{invitation_id}",{},{renamed:["repos","declineInvitationForAuthenticatedUser"]}],declineInvitationForAuthenticatedUser:["DELETE /user/repository_invitations/{invitation_id}"],delete:["DELETE /repos/{owner}/{repo}"],deleteAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],deleteAdminBranchProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],deleteAnEnvironment:["DELETE /repos/{owner}/{repo}/environments/{environment_name}"],deleteAutolink:["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],deleteBranchProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],deleteCommitComment:["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],deleteCommitSignatureProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],deleteDeployKey:["DELETE /repos/{owner}/{repo}/keys/{key_id}"],deleteDeployment:["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],deleteDeploymentBranchPolicy:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],deleteFile:["DELETE /repos/{owner}/{repo}/contents/{path}"],deleteInvitation:["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],deleteOrgRuleset:["DELETE /orgs/{org}/rulesets/{ruleset_id}"],deletePagesSite:["DELETE /repos/{owner}/{repo}/pages"],deletePullRequestReviewProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],deleteRelease:["DELETE /repos/{owner}/{repo}/releases/{release_id}"],deleteReleaseAsset:["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],deleteRepoRuleset:["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],deleteTagProtection:["DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"],deleteWebhook:["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],disableAutomatedSecurityFixes:["DELETE /repos/{owner}/{repo}/automated-security-fixes"],disableDeploymentProtectionRule:["DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"],disablePrivateVulnerabilityReporting:["DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"],disableVulnerabilityAlerts:["DELETE /repos/{owner}/{repo}/vulnerability-alerts"],downloadArchive:["GET /repos/{owner}/{repo}/zipball/{ref}",{},{renamed:["repos","downloadZipballArchive"]}],downloadTarballArchive:["GET /repos/{owner}/{repo}/tarball/{ref}"],downloadZipballArchive:["GET /repos/{owner}/{repo}/zipball/{ref}"],enableAutomatedSecurityFixes:["PUT /repos/{owner}/{repo}/automated-security-fixes"],enablePrivateVulnerabilityReporting:["PUT /repos/{owner}/{repo}/private-vulnerability-reporting"],enableVulnerabilityAlerts:["PUT /repos/{owner}/{repo}/vulnerability-alerts"],generateReleaseNotes:["POST /repos/{owner}/{repo}/releases/generate-notes"],get:["GET /repos/{owner}/{repo}"],getAccessRestrictions:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],getAdminBranchProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],getAllDeploymentProtectionRules:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"],getAllEnvironments:["GET /repos/{owner}/{repo}/environments"],getAllStatusCheckContexts:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"],getAllTopics:["GET /repos/{owner}/{repo}/topics"],getAppsWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"],getAutolink:["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],getBranch:["GET /repos/{owner}/{repo}/branches/{branch}"],getBranchProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection"],getBranchRules:["GET /repos/{owner}/{repo}/rules/branches/{branch}"],getClones:["GET /repos/{owner}/{repo}/traffic/clones"],getCodeFrequencyStats:["GET /repos/{owner}/{repo}/stats/code_frequency"],getCollaboratorPermissionLevel:["GET /repos/{owner}/{repo}/collaborators/{username}/permission"],getCombinedStatusForRef:["GET /repos/{owner}/{repo}/commits/{ref}/status"],getCommit:["GET /repos/{owner}/{repo}/commits/{ref}"],getCommitActivityStats:["GET /repos/{owner}/{repo}/stats/commit_activity"],getCommitComment:["GET /repos/{owner}/{repo}/comments/{comment_id}"],getCommitSignatureProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"],getCommunityProfileMetrics:["GET /repos/{owner}/{repo}/community/profile"],getContent:["GET /repos/{owner}/{repo}/contents/{path}"],getContributorsStats:["GET /repos/{owner}/{repo}/stats/contributors"],getCustomDeploymentProtectionRule:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"],getCustomPropertiesValues:["GET /repos/{owner}/{repo}/properties/values"],getDeployKey:["GET /repos/{owner}/{repo}/keys/{key_id}"],getDeployment:["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],getDeploymentBranchPolicy:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],getDeploymentStatus:["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"],getEnvironment:["GET /repos/{owner}/{repo}/environments/{environment_name}"],getLatestPagesBuild:["GET /repos/{owner}/{repo}/pages/builds/latest"],getLatestRelease:["GET /repos/{owner}/{repo}/releases/latest"],getOrgRuleSuite:["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],getOrgRuleSuites:["GET /orgs/{org}/rulesets/rule-suites"],getOrgRuleset:["GET /orgs/{org}/rulesets/{ruleset_id}"],getOrgRulesets:["GET /orgs/{org}/rulesets"],getPages:["GET /repos/{owner}/{repo}/pages"],getPagesBuild:["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],getPagesDeployment:["GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"],getPagesHealthCheck:["GET /repos/{owner}/{repo}/pages/health"],getParticipationStats:["GET /repos/{owner}/{repo}/stats/participation"],getPullRequestReviewProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],getPunchCardStats:["GET /repos/{owner}/{repo}/stats/punch_card"],getReadme:["GET /repos/{owner}/{repo}/readme"],getReadmeInDirectory:["GET /repos/{owner}/{repo}/readme/{dir}"],getRelease:["GET /repos/{owner}/{repo}/releases/{release_id}"],getReleaseAsset:["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],getReleaseByTag:["GET /repos/{owner}/{repo}/releases/tags/{tag}"],getRepoRuleSuite:["GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"],getRepoRuleSuites:["GET /repos/{owner}/{repo}/rulesets/rule-suites"],getRepoRuleset:["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],getRepoRulesets:["GET /repos/{owner}/{repo}/rulesets"],getStatusChecksProtection:["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],getTeamsWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"],getTopPaths:["GET /repos/{owner}/{repo}/traffic/popular/paths"],getTopReferrers:["GET /repos/{owner}/{repo}/traffic/popular/referrers"],getUsersWithAccessToProtectedBranch:["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"],getViews:["GET /repos/{owner}/{repo}/traffic/views"],getWebhook:["GET /repos/{owner}/{repo}/hooks/{hook_id}"],getWebhookConfigForRepo:["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"],getWebhookDelivery:["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"],listActivities:["GET /repos/{owner}/{repo}/activity"],listAutolinks:["GET /repos/{owner}/{repo}/autolinks"],listBranches:["GET /repos/{owner}/{repo}/branches"],listBranchesForHeadCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"],listCollaborators:["GET /repos/{owner}/{repo}/collaborators"],listCommentsForCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],listCommitCommentsForRepo:["GET /repos/{owner}/{repo}/comments"],listCommitStatusesForRef:["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],listCommits:["GET /repos/{owner}/{repo}/commits"],listContributors:["GET /repos/{owner}/{repo}/contributors"],listCustomDeploymentRuleIntegrations:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"],listDeployKeys:["GET /repos/{owner}/{repo}/keys"],listDeploymentBranchPolicies:["GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"],listDeploymentStatuses:["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],listDeployments:["GET /repos/{owner}/{repo}/deployments"],listForAuthenticatedUser:["GET /user/repos"],listForOrg:["GET /orgs/{org}/repos"],listForUser:["GET /users/{username}/repos"],listForks:["GET /repos/{owner}/{repo}/forks"],listInvitations:["GET /repos/{owner}/{repo}/invitations"],listInvitationsForAuthenticatedUser:["GET /user/repository_invitations"],listLanguages:["GET /repos/{owner}/{repo}/languages"],listPagesBuilds:["GET /repos/{owner}/{repo}/pages/builds"],listPublic:["GET /repositories"],listPullRequestsAssociatedWithCommit:["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"],listReleaseAssets:["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],listReleases:["GET /repos/{owner}/{repo}/releases"],listTagProtection:["GET /repos/{owner}/{repo}/tags/protection"],listTags:["GET /repos/{owner}/{repo}/tags"],listTeams:["GET /repos/{owner}/{repo}/teams"],listWebhookDeliveries:["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"],listWebhooks:["GET /repos/{owner}/{repo}/hooks"],merge:["POST /repos/{owner}/{repo}/merges"],mergeUpstream:["POST /repos/{owner}/{repo}/merge-upstream"],pingWebhook:["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],redeliverWebhookDelivery:["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],removeAppAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],removeCollaborator:["DELETE /repos/{owner}/{repo}/collaborators/{username}"],removeStatusCheckContexts:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],removeStatusCheckProtection:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],removeTeamAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],removeUserAccessRestrictions:["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],renameBranch:["POST /repos/{owner}/{repo}/branches/{branch}/rename"],replaceAllTopics:["PUT /repos/{owner}/{repo}/topics"],requestPagesBuild:["POST /repos/{owner}/{repo}/pages/builds"],setAdminBranchProtection:["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],setAppAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",{},{mapToData:"apps"}],setStatusCheckContexts:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",{},{mapToData:"contexts"}],setTeamAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",{},{mapToData:"teams"}],setUserAccessRestrictions:["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",{},{mapToData:"users"}],testPushWebhook:["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],transfer:["POST /repos/{owner}/{repo}/transfer"],update:["PATCH /repos/{owner}/{repo}"],updateBranchProtection:["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],updateCommitComment:["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],updateDeploymentBranchPolicy:["PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"],updateInformationAboutPagesSite:["PUT /repos/{owner}/{repo}/pages"],updateInvitation:["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],updateOrgRuleset:["PUT /orgs/{org}/rulesets/{ruleset_id}"],updatePullRequestReviewProtection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],updateRelease:["PATCH /repos/{owner}/{repo}/releases/{release_id}"],updateReleaseAsset:["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],updateRepoRuleset:["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],updateStatusCheckPotection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",{},{renamed:["repos","updateStatusCheckProtection"]}],updateStatusCheckProtection:["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],updateWebhook:["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],updateWebhookConfigForRepo:["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"],uploadReleaseAsset:["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",{baseUrl:"https://uploads.github.com"}]},search:{code:["GET /search/code"],commits:["GET /search/commits"],issuesAndPullRequests:["GET /search/issues"],labels:["GET /search/labels"],repos:["GET /search/repositories"],topics:["GET /search/topics"],users:["GET /search/users"]},secretScanning:{getAlert:["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"],listAlertsForEnterprise:["GET /enterprises/{enterprise}/secret-scanning/alerts"],listAlertsForOrg:["GET /orgs/{org}/secret-scanning/alerts"],listAlertsForRepo:["GET /repos/{owner}/{repo}/secret-scanning/alerts"],listLocationsForAlert:["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"],updateAlert:["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]},securityAdvisories:{createFork:["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"],createPrivateVulnerabilityReport:["POST /repos/{owner}/{repo}/security-advisories/reports"],createRepositoryAdvisory:["POST /repos/{owner}/{repo}/security-advisories"],createRepositoryAdvisoryCveRequest:["POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"],getGlobalAdvisory:["GET /advisories/{ghsa_id}"],getRepositoryAdvisory:["GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"],listGlobalAdvisories:["GET /advisories"],listOrgRepositoryAdvisories:["GET /orgs/{org}/security-advisories"],listRepositoryAdvisories:["GET /repos/{owner}/{repo}/security-advisories"],updateRepositoryAdvisory:["PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"]},teams:{addOrUpdateMembershipForUserInOrg:["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"],addOrUpdateProjectPermissionsInOrg:["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"],addOrUpdateRepoPermissionsInOrg:["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],checkPermissionsForProjectInOrg:["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"],checkPermissionsForRepoInOrg:["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],create:["POST /orgs/{org}/teams"],createDiscussionCommentInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],createDiscussionInOrg:["POST /orgs/{org}/teams/{team_slug}/discussions"],deleteDiscussionCommentInOrg:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],deleteDiscussionInOrg:["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],deleteInOrg:["DELETE /orgs/{org}/teams/{team_slug}"],getByName:["GET /orgs/{org}/teams/{team_slug}"],getDiscussionCommentInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],getDiscussionInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],getMembershipForUserInOrg:["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],list:["GET /orgs/{org}/teams"],listChildInOrg:["GET /orgs/{org}/teams/{team_slug}/teams"],listDiscussionCommentsInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],listDiscussionsInOrg:["GET /orgs/{org}/teams/{team_slug}/discussions"],listForAuthenticatedUser:["GET /user/teams"],listMembersInOrg:["GET /orgs/{org}/teams/{team_slug}/members"],listPendingInvitationsInOrg:["GET /orgs/{org}/teams/{team_slug}/invitations"],listProjectsInOrg:["GET /orgs/{org}/teams/{team_slug}/projects"],listReposInOrg:["GET /orgs/{org}/teams/{team_slug}/repos"],removeMembershipForUserInOrg:["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"],removeProjectInOrg:["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],removeRepoInOrg:["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],updateDiscussionCommentInOrg:["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],updateDiscussionInOrg:["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],updateInOrg:["PATCH /orgs/{org}/teams/{team_slug}"]},users:{addEmailForAuthenticated:["POST /user/emails",{},{renamed:["users","addEmailForAuthenticatedUser"]}],addEmailForAuthenticatedUser:["POST /user/emails"],addSocialAccountForAuthenticatedUser:["POST /user/social_accounts"],block:["PUT /user/blocks/{username}"],checkBlocked:["GET /user/blocks/{username}"],checkFollowingForUser:["GET /users/{username}/following/{target_user}"],checkPersonIsFollowedByAuthenticated:["GET /user/following/{username}"],createGpgKeyForAuthenticated:["POST /user/gpg_keys",{},{renamed:["users","createGpgKeyForAuthenticatedUser"]}],createGpgKeyForAuthenticatedUser:["POST /user/gpg_keys"],createPublicSshKeyForAuthenticated:["POST /user/keys",{},{renamed:["users","createPublicSshKeyForAuthenticatedUser"]}],createPublicSshKeyForAuthenticatedUser:["POST /user/keys"],createSshSigningKeyForAuthenticatedUser:["POST /user/ssh_signing_keys"],deleteEmailForAuthenticated:["DELETE /user/emails",{},{renamed:["users","deleteEmailForAuthenticatedUser"]}],deleteEmailForAuthenticatedUser:["DELETE /user/emails"],deleteGpgKeyForAuthenticated:["DELETE /user/gpg_keys/{gpg_key_id}",{},{renamed:["users","deleteGpgKeyForAuthenticatedUser"]}],deleteGpgKeyForAuthenticatedUser:["DELETE /user/gpg_keys/{gpg_key_id}"],deletePublicSshKeyForAuthenticated:["DELETE /user/keys/{key_id}",{},{renamed:["users","deletePublicSshKeyForAuthenticatedUser"]}],deletePublicSshKeyForAuthenticatedUser:["DELETE /user/keys/{key_id}"],deleteSocialAccountForAuthenticatedUser:["DELETE /user/social_accounts"],deleteSshSigningKeyForAuthenticatedUser:["DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"],follow:["PUT /user/following/{username}"],getAuthenticated:["GET /user"],getByUsername:["GET /users/{username}"],getContextForUser:["GET /users/{username}/hovercard"],getGpgKeyForAuthenticated:["GET /user/gpg_keys/{gpg_key_id}",{},{renamed:["users","getGpgKeyForAuthenticatedUser"]}],getGpgKeyForAuthenticatedUser:["GET /user/gpg_keys/{gpg_key_id}"],getPublicSshKeyForAuthenticated:["GET /user/keys/{key_id}",{},{renamed:["users","getPublicSshKeyForAuthenticatedUser"]}],getPublicSshKeyForAuthenticatedUser:["GET /user/keys/{key_id}"],getSshSigningKeyForAuthenticatedUser:["GET /user/ssh_signing_keys/{ssh_signing_key_id}"],list:["GET /users"],listBlockedByAuthenticated:["GET /user/blocks",{},{renamed:["users","listBlockedByAuthenticatedUser"]}],listBlockedByAuthenticatedUser:["GET /user/blocks"],listEmailsForAuthenticated:["GET /user/emails",{},{renamed:["users","listEmailsForAuthenticatedUser"]}],listEmailsForAuthenticatedUser:["GET /user/emails"],listFollowedByAuthenticated:["GET /user/following",{},{renamed:["users","listFollowedByAuthenticatedUser"]}],listFollowedByAuthenticatedUser:["GET /user/following"],listFollowersForAuthenticatedUser:["GET /user/followers"],listFollowersForUser:["GET /users/{username}/followers"],listFollowingForUser:["GET /users/{username}/following"],listGpgKeysForAuthenticated:["GET /user/gpg_keys",{},{renamed:["users","listGpgKeysForAuthenticatedUser"]}],listGpgKeysForAuthenticatedUser:["GET /user/gpg_keys"],listGpgKeysForUser:["GET /users/{username}/gpg_keys"],listPublicEmailsForAuthenticated:["GET /user/public_emails",{},{renamed:["users","listPublicEmailsForAuthenticatedUser"]}],listPublicEmailsForAuthenticatedUser:["GET /user/public_emails"],listPublicKeysForUser:["GET /users/{username}/keys"],listPublicSshKeysForAuthenticated:["GET /user/keys",{},{renamed:["users","listPublicSshKeysForAuthenticatedUser"]}],listPublicSshKeysForAuthenticatedUser:["GET /user/keys"],listSocialAccountsForAuthenticatedUser:["GET /user/social_accounts"],listSocialAccountsForUser:["GET /users/{username}/social_accounts"],listSshSigningKeysForAuthenticatedUser:["GET /user/ssh_signing_keys"],listSshSigningKeysForUser:["GET /users/{username}/ssh_signing_keys"],setPrimaryEmailVisibilityForAuthenticated:["PATCH /user/email/visibility",{},{renamed:["users","setPrimaryEmailVisibilityForAuthenticatedUser"]}],setPrimaryEmailVisibilityForAuthenticatedUser:["PATCH /user/email/visibility"],unblock:["DELETE /user/blocks/{username}"],unfollow:["DELETE /user/following/{username}"],updateAuthenticated:["PATCH /user"]}};var In=jn;const it=new Map;for(const[s,e]of Object.entries(In))for(const[t,i]of Object.entries(e)){const[r,n,o]=i,[a,c]=r.split(/ /),f=Object.assign({method:a,url:c},n);it.has(s)||it.set(s,new Map),it.get(s).set(t,{scope:s,methodName:t,endpointDefaults:f,decorations:o})}const zn={has({scope:s},e){return it.get(s).has(e)},getOwnPropertyDescriptor(s,e){return{value:this.get(s,e),configurable:!0,writable:!0,enumerable:!0}},defineProperty(s,e,t){return Object.defineProperty(s.cache,e,t),!0},deleteProperty(s,e){return delete s.cache[e],!0},ownKeys({scope:s}){return[...it.get(s).keys()]},set(s,e,t){return s.cache[e]=t},get({octokit:s,scope:e,cache:t},i){if(t[i])return t[i];const r=it.get(e).get(i);if(!r)return;const{endpointDefaults:n,decorations:o}=r;return o?t[i]=Mn(s,e,i,n,o):t[i]=s.request.defaults(n),t[i]}};function Bn(s){const e={};for(const t of it.keys())e[t]=new Proxy({octokit:s,scope:t,cache:{}},zn);return e}function Mn(s,e,t,i,r){const n=s.request.defaults(i);function o(...a){let c=n.endpoint.merge(...a);if(r.mapToData)return c=Object.assign({},c,{data:c[r.mapToData],[r.mapToData]:void 0}),n(c);if(r.renamed){const[f,m]=r.renamed;s.log.warn(`octokit.${e}.${t}() has been renamed to octokit.${f}.${m}()`)}if(r.deprecated&&s.log.warn(r.deprecated),r.renamedParameters){const f=n.endpoint.merge(...a);for(const[m,h]of Object.entries(r.renamedParameters))m in f&&(s.log.warn(`"${m}" parameter is deprecated for "octokit.${e}.${t}()". Use "${h}" instead`),h in f||(f[h]=f[m]),delete f[m]);return n(f)}return n(...a)}return Object.assign(o,n)}function Fi(s){return{rest:Bn(s)}}Fi.VERSION=Fn;var Ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ns(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ji={exports:{}};(function(s,e){(function(t,i){s.exports=i()})(Ge,function(){var t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Ge<"u"?Ge:typeof self<"u"?self:{};function i(re){return re&&re.default||re}var r=function(re,O,y={}){var P,F,M;for(P in O)M=O[P],y[P]=(F=re[P])!=null?F:M;return y},n=function(re,O,y={}){var P,F;for(P in re)F=re[P],O[P]!==void 0&&(y[P]=F);return y},o={load:r,overwrite:n},a;a=class{constructor(O,y){this.incr=O,this.decr=y,this._first=null,this._last=null,this.length=0}push(O){var y;this.length++,typeof this.incr=="function"&&this.incr(),y={value:O,prev:this._last,next:null},this._last!=null?(this._last.next=y,this._last=y):this._first=this._last=y}shift(){var O;if(this._first!=null)return this.length--,typeof this.decr=="function"&&this.decr(),O=this._first.value,(this._first=this._first.next)!=null?this._first.prev=null:this._last=null,O}first(){if(this._first!=null)return this._first.value}getArray(){var O,y,P;for(O=this._first,P=[];O!=null;)P.push((y=O,O=O.next,y.value));return P}forEachShift(O){var y;for(y=this.shift();y!=null;)O(y),y=this.shift()}debug(){var O,y,P,F,M;for(O=this._first,M=[];O!=null;)M.push((y=O,O=O.next,{value:y.value,prev:(P=y.prev)!=null?P.value:void 0,next:(F=y.next)!=null?F.value:void 0}));return M}};var c=a,f;f=class{constructor(O){if(this.instance=O,this._events={},this.instance.on!=null||this.instance.once!=null||this.instance.removeAllListeners!=null)throw new Error("An Emitter already exists for this object");this.instance.on=(y,P)=>this._addListener(y,"many",P),this.instance.once=(y,P)=>this._addListener(y,"once",P),this.instance.removeAllListeners=(y=null)=>y!=null?delete this._events[y]:this._events={}}_addListener(O,y,P){var F;return(F=this._events)[O]==null&&(F[O]=[]),this._events[O].push({cb:P,status:y}),this.instance}listenerCount(O){return this._events[O]!=null?this._events[O].length:0}async trigger(O,...y){var P,F;try{return O!=="debug"&&this.trigger("debug",`Event triggered: ${O}`,y),this._events[O]==null?void 0:(this._events[O]=this._events[O].filter(function(M){return M.status!=="none"}),F=this._events[O].map(async M=>{var W,se;if(M.status!=="none"){M.status==="once"&&(M.status="none");try{return se=typeof M.cb=="function"?M.cb(...y):void 0,typeof(se!=null?se.then:void 0)=="function"?await se:se}catch(me){return W=me,this.trigger("error",W),null}}}),(await Promise.all(F)).find(function(M){return M!=null}))}catch(M){return P=M,this.trigger("error",P),null}}};var m=f,h,b,p;h=c,b=m,p=class{constructor(O){this.Events=new b(this),this._length=0,this._lists=(function(){var y,P,F;for(F=[],y=1,P=O;1<=P?y<=P:y>=P;1<=P?++y:--y)F.push(new h(()=>this.incr(),()=>this.decr()));return F}).call(this)}incr(){if(this._length++===0)return this.Events.trigger("leftzero")}decr(){if(--this._length===0)return this.Events.trigger("zero")}push(O){return this._lists[O.options.priority].push(O)}queued(O){return O!=null?this._lists[O].length:this._length}shiftAll(O){return this._lists.forEach(function(y){return y.forEachShift(O)})}getFirst(O=this._lists){var y,P,F;for(y=0,P=O.length;y<P;y++)if(F=O[y],F.length>0)return F;return[]}shiftLastFrom(O){return this.getFirst(this._lists.slice(O).reverse()).shift()}};var w=p,d;d=class extends Error{};var _=d,g,k,S,x,C;x=10,k=5,C=o,g=_,S=class{constructor(O,y,P,F,M,W,se,me){this.task=O,this.args=y,this.rejectOnDrop=M,this.Events=W,this._states=se,this.Promise=me,this.options=C.load(P,F),this.options.priority=this._sanitizePriority(this.options.priority),this.options.id===F.id&&(this.options.id=`${this.options.id}-${this._randomIndex()}`),this.promise=new this.Promise((Te,Ae)=>{this._resolve=Te,this._reject=Ae}),this.retryCount=0}_sanitizePriority(O){var y;return y=~~O!==O?k:O,y<0?0:y>x-1?x-1:y}_randomIndex(){return Math.random().toString(36).slice(2)}doDrop({error:O,message:y="This job has been dropped by Bottleneck"}={}){return this._states.remove(this.options.id)?(this.rejectOnDrop&&this._reject(O??new g(y)),this.Events.trigger("dropped",{args:this.args,options:this.options,task:this.task,promise:this.promise}),!0):!1}_assertStatus(O){var y;if(y=this._states.jobStatus(this.options.id),!(y===O||O==="DONE"&&y===null))throw new g(`Invalid job status ${y}, expected ${O}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`)}doReceive(){return this._states.start(this.options.id),this.Events.trigger("received",{args:this.args,options:this.options})}doQueue(O,y){return this._assertStatus("RECEIVED"),this._states.next(this.options.id),this.Events.trigger("queued",{args:this.args,options:this.options,reachedHWM:O,blocked:y})}doRun(){return this.retryCount===0?(this._assertStatus("QUEUED"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),this.Events.trigger("scheduled",{args:this.args,options:this.options})}async doExecute(O,y,P,F){var M,W,se;this.retryCount===0?(this._assertStatus("RUNNING"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),W={args:this.args,options:this.options,retryCount:this.retryCount},this.Events.trigger("executing",W);try{if(se=await(O!=null?O.schedule(this.options,this.task,...this.args):this.task(...this.args)),y())return this.doDone(W),await F(this.options,W),this._assertStatus("DONE"),this._resolve(se)}catch(me){return M=me,this._onFailure(M,W,y,P,F)}}doExpire(O,y,P){var F,M;return this._states.jobStatus(this.options.id==="RUNNING")&&this._states.next(this.options.id),this._assertStatus("EXECUTING"),M={args:this.args,options:this.options,retryCount:this.retryCount},F=new g(`This job timed out after ${this.options.expiration} ms.`),this._onFailure(F,M,O,y,P)}async _onFailure(O,y,P,F,M){var W,se;if(P())return W=await this.Events.trigger("failed",O,y),W!=null?(se=~~W,this.Events.trigger("retry",`Retrying ${this.options.id} after ${se} ms`,y),this.retryCount++,F(se)):(this.doDone(y),await M(this.options,y),this._assertStatus("DONE"),this._reject(O))}doDone(O){return this._assertStatus("EXECUTING"),this._states.next(this.options.id),this.Events.trigger("done",O)}};var z=S,U,V,D;D=o,U=_,V=class{constructor(O,y,P){this.instance=O,this.storeOptions=y,this.clientId=this.instance._randomIndex(),D.load(P,P,this),this._nextRequest=this._lastReservoirRefresh=this._lastReservoirIncrease=Date.now(),this._running=0,this._done=0,this._unblockTime=0,this.ready=this.Promise.resolve(),this.clients={},this._startHeartbeat()}_startHeartbeat(){var O;return this.heartbeat==null&&(this.storeOptions.reservoirRefreshInterval!=null&&this.storeOptions.reservoirRefreshAmount!=null||this.storeOptions.reservoirIncreaseInterval!=null&&this.storeOptions.reservoirIncreaseAmount!=null)?typeof(O=this.heartbeat=setInterval(()=>{var y,P,F,M,W;if(M=Date.now(),this.storeOptions.reservoirRefreshInterval!=null&&M>=this._lastReservoirRefresh+this.storeOptions.reservoirRefreshInterval&&(this._lastReservoirRefresh=M,this.storeOptions.reservoir=this.storeOptions.reservoirRefreshAmount,this.instance._drainAll(this.computeCapacity())),this.storeOptions.reservoirIncreaseInterval!=null&&M>=this._lastReservoirIncrease+this.storeOptions.reservoirIncreaseInterval&&({reservoirIncreaseAmount:y,reservoirIncreaseMaximum:F,reservoir:W}=this.storeOptions,this._lastReservoirIncrease=M,P=F!=null?Math.min(y,F-W):y,P>0))return this.storeOptions.reservoir+=P,this.instance._drainAll(this.computeCapacity())},this.heartbeatInterval)).unref=="function"?O.unref():void 0:clearInterval(this.heartbeat)}async __publish__(O){return await this.yieldLoop(),this.instance.Events.trigger("message",O.toString())}async __disconnect__(O){return await this.yieldLoop(),clearInterval(this.heartbeat),this.Promise.resolve()}yieldLoop(O=0){return new this.Promise(function(y,P){return setTimeout(y,O)})}computePenalty(){var O;return(O=this.storeOptions.penalty)!=null?O:15*this.storeOptions.minTime||5e3}async __updateSettings__(O){return await this.yieldLoop(),D.overwrite(O,O,this.storeOptions),this._startHeartbeat(),this.instance._drainAll(this.computeCapacity()),!0}async __running__(){return await this.yieldLoop(),this._running}async __queued__(){return await this.yieldLoop(),this.instance.queued()}async __done__(){return await this.yieldLoop(),this._done}async __groupCheck__(O){return await this.yieldLoop(),this._nextRequest+this.timeout<O}computeCapacity(){var O,y;return{maxConcurrent:O,reservoir:y}=this.storeOptions,O!=null&&y!=null?Math.min(O-this._running,y):O!=null?O-this._running:y??null}conditionsCheck(O){var y;return y=this.computeCapacity(),y==null||O<=y}async __incrementReservoir__(O){var y;return await this.yieldLoop(),y=this.storeOptions.reservoir+=O,this.instance._drainAll(this.computeCapacity()),y}async __currentReservoir__(){return await this.yieldLoop(),this.storeOptions.reservoir}isBlocked(O){return this._unblockTime>=O}check(O,y){return this.conditionsCheck(O)&&this._nextRequest-y<=0}async __check__(O){var y;return await this.yieldLoop(),y=Date.now(),this.check(O,y)}async __register__(O,y,P){var F,M;return await this.yieldLoop(),F=Date.now(),this.conditionsCheck(y)?(this._running+=y,this.storeOptions.reservoir!=null&&(this.storeOptions.reservoir-=y),M=Math.max(this._nextRequest-F,0),this._nextRequest=F+M+this.storeOptions.minTime,{success:!0,wait:M,reservoir:this.storeOptions.reservoir}):{success:!1}}strategyIsBlock(){return this.storeOptions.strategy===3}async __submit__(O,y){var P,F,M;if(await this.yieldLoop(),this.storeOptions.maxConcurrent!=null&&y>this.storeOptions.maxConcurrent)throw new U(`Impossible to add a job having a weight of ${y} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`);return F=Date.now(),M=this.storeOptions.highWater!=null&&O===this.storeOptions.highWater&&!this.check(y,F),P=this.strategyIsBlock()&&(M||this.isBlocked(F)),P&&(this._unblockTime=F+this.computePenalty(),this._nextRequest=this._unblockTime+this.storeOptions.minTime,this.instance._dropAllQueued()),{reachedHWM:M,blocked:P,strategy:this.storeOptions.strategy}}async __free__(O,y){return await this.yieldLoop(),this._running-=y,this._done+=y,this.instance._drainAll(this.computeCapacity()),{running:this._running}}};var X=V,ae,T;ae=_,T=class{constructor(O){this.status=O,this._jobs={},this.counts=this.status.map(function(){return 0})}next(O){var y,P;if(y=this._jobs[O],P=y+1,y!=null&&P<this.status.length)return this.counts[y]--,this.counts[P]++,this._jobs[O]++;if(y!=null)return this.counts[y]--,delete this._jobs[O]}start(O){var y;return y=0,this._jobs[O]=y,this.counts[y]++}remove(O){var y;return y=this._jobs[O],y!=null&&(this.counts[y]--,delete this._jobs[O]),y!=null}jobStatus(O){var y;return(y=this.status[this._jobs[O]])!=null?y:null}statusJobs(O){var y,P,F,M,W;if(O!=null){if(P=this.status.indexOf(O),P<0)throw new ae(`status must be one of ${this.status.join(", ")}`);F=this._jobs,M=[];for(y in F)W=F[y],W===P&&M.push(y);return M}else return Object.keys(this._jobs)}statusCounts(){return this.counts.reduce((O,y,P)=>(O[this.status[P]]=y,O),{})}};var j=T,u,B;u=c,B=class{constructor(O,y){this.schedule=this.schedule.bind(this),this.name=O,this.Promise=y,this._running=0,this._queue=new u}isEmpty(){return this._queue.length===0}async _tryToRun(){var O,y,P,F,M,W,se;if(this._running<1&&this._queue.length>0)return this._running++,{task:se,args:O,resolve:M,reject:F}=this._queue.shift(),y=await async function(){try{return W=await se(...O),function(){return M(W)}}catch(me){return P=me,function(){return F(P)}}}(),this._running--,this._tryToRun(),y()}schedule(O,...y){var P,F,M;return M=F=null,P=new this.Promise(function(W,se){return M=W,F=se}),this._queue.push({task:O,args:y,resolve:M,reject:F}),this._tryToRun(),P}};var ce=B,H="2.19.5",ue={version:H},Z=Object.freeze({version:H,default:ue}),le=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),L=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),$=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),ne,ee,Q,ve,ke,pe;pe=o,ne=m,ve=le,Q=L,ke=$,ee=(function(){class re{constructor(y={}){this.deleteKey=this.deleteKey.bind(this),this.limiterOptions=y,pe.load(this.limiterOptions,this.defaults,this),this.Events=new ne(this),this.instances={},this.Bottleneck=he,this._startAutoCleanup(),this.sharedConnection=this.connection!=null,this.connection==null&&(this.limiterOptions.datastore==="redis"?this.connection=new ve(Object.assign({},this.limiterOptions,{Events:this.Events})):this.limiterOptions.datastore==="ioredis"&&(this.connection=new Q(Object.assign({},this.limiterOptions,{Events:this.Events}))))}key(y=""){var P;return(P=this.instances[y])!=null?P:(()=>{var F;return F=this.instances[y]=new this.Bottleneck(Object.assign(this.limiterOptions,{id:`${this.id}-${y}`,timeout:this.timeout,connection:this.connection})),this.Events.trigger("created",F,y),F})()}async deleteKey(y=""){var P,F;return F=this.instances[y],this.connection&&(P=await this.connection.__runCommand__(["del",...ke.allKeys(`${this.id}-${y}`)])),F!=null&&(delete this.instances[y],await F.disconnect()),F!=null||P>0}limiters(){var y,P,F,M;P=this.instances,F=[];for(y in P)M=P[y],F.push({key:y,limiter:M});return F}keys(){return Object.keys(this.instances)}async clusterKeys(){var y,P,F,M,W,se,me,Te,Ae;if(this.connection==null)return this.Promise.resolve(this.keys());for(se=[],y=null,Ae=`b_${this.id}-`.length,P=9;y!==0;)for([Te,F]=await this.connection.__runCommand__(["scan",y??0,"match",`b_${this.id}-*_settings`,"count",1e4]),y=~~Te,M=0,me=F.length;M<me;M++)W=F[M],se.push(W.slice(Ae,-P));return se}_startAutoCleanup(){var y;return clearInterval(this.interval),typeof(y=this.interval=setInterval(async()=>{var P,F,M,W,se,me;se=Date.now(),M=this.instances,W=[];for(F in M){me=M[F];try{await me._store.__groupCheck__(se)?W.push(this.deleteKey(F)):W.push(void 0)}catch(Te){P=Te,W.push(me.Events.trigger("error",P))}}return W},this.timeout/2)).unref=="function"?y.unref():void 0}updateSettings(y={}){if(pe.overwrite(y,this.defaults,this),pe.overwrite(y,y,this.limiterOptions),y.timeout!=null)return this._startAutoCleanup()}disconnect(y=!0){var P;if(!this.sharedConnection)return(P=this.connection)!=null?P.disconnect(y):void 0}}return re.prototype.defaults={timeout:1e3*60*5,connection:null,Promise,id:"group-key"},re}).call(t);var fe=ee,Ee,be,$e;$e=o,be=m,Ee=(function(){class re{constructor(y={}){this.options=y,$e.load(this.options,this.defaults,this),this.Events=new be(this),this._arr=[],this._resetPromise(),this._lastFlush=Date.now()}_resetPromise(){return this._promise=new this.Promise((y,P)=>this._resolve=y)}_flush(){return clearTimeout(this._timeout),this._lastFlush=Date.now(),this._resolve(),this.Events.trigger("batch",this._arr),this._arr=[],this._resetPromise()}add(y){var P;return this._arr.push(y),P=this._promise,this._arr.length===this.maxSize?this._flush():this.maxTime!=null&&this._arr.length===1&&(this._timeout=setTimeout(()=>this._flush(),this.maxTime)),P}}return re.prototype.defaults={maxTime:null,maxSize:null,Promise},re}).call(t);var Le=Ee,l=()=>console.log("You must import the full version of Bottleneck in order to use this feature."),I=i(Z),G,E,v,A,N,q,R,K,te,J,ie,_e=[].splice;q=10,E=5,ie=o,R=w,A=z,N=X,K=l,v=m,te=j,J=ce,G=(function(){class re{constructor(y={},...P){var F,M;this._addToQueue=this._addToQueue.bind(this),this._validateOptions(y,P),ie.load(y,this.instanceDefaults,this),this._queues=new R(q),this._scheduled={},this._states=new te(["RECEIVED","QUEUED","RUNNING","EXECUTING"].concat(this.trackDoneStatus?["DONE"]:[])),this._limiter=null,this.Events=new v(this),this._submitLock=new J("submit",this.Promise),this._registerLock=new J("register",this.Promise),M=ie.load(y,this.storeDefaults,{}),this._store=(function(){if(this.datastore==="redis"||this.datastore==="ioredis"||this.connection!=null)return F=ie.load(y,this.redisStoreDefaults,{}),new K(this,M,F);if(this.datastore==="local")return F=ie.load(y,this.localStoreDefaults,{}),new N(this,M,F);throw new re.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`)}).call(this),this._queues.on("leftzero",()=>{var W;return(W=this._store.heartbeat)!=null&&typeof W.ref=="function"?W.ref():void 0}),this._queues.on("zero",()=>{var W;return(W=this._store.heartbeat)!=null&&typeof W.unref=="function"?W.unref():void 0})}_validateOptions(y,P){if(!(y!=null&&typeof y=="object"&&P.length===0))throw new re.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.")}ready(){return this._store.ready}clients(){return this._store.clients}channel(){return`b_${this.id}`}channel_client(){return`b_${this.id}_${this._store.clientId}`}publish(y){return this._store.__publish__(y)}disconnect(y=!0){return this._store.__disconnect__(y)}chain(y){return this._limiter=y,this}queued(y){return this._queues.queued(y)}clusterQueued(){return this._store.__queued__()}empty(){return this.queued()===0&&this._submitLock.isEmpty()}running(){return this._store.__running__()}done(){return this._store.__done__()}jobStatus(y){return this._states.jobStatus(y)}jobs(y){return this._states.statusJobs(y)}counts(){return this._states.statusCounts()}_randomIndex(){return Math.random().toString(36).slice(2)}check(y=1){return this._store.__check__(y)}_clearGlobalState(y){return this._scheduled[y]!=null?(clearTimeout(this._scheduled[y].expiration),delete this._scheduled[y],!0):!1}async _free(y,P,F,M){var W,se;try{if({running:se}=await this._store.__free__(y,F.weight),this.Events.trigger("debug",`Freed ${F.id}`,M),se===0&&this.empty())return this.Events.trigger("idle")}catch(me){return W=me,this.Events.trigger("error",W)}}_run(y,P,F){var M,W,se;return P.doRun(),M=this._clearGlobalState.bind(this,y),se=this._run.bind(this,y,P),W=this._free.bind(this,y,P),this._scheduled[y]={timeout:setTimeout(()=>P.doExecute(this._limiter,M,se,W),F),expiration:P.options.expiration!=null?setTimeout(function(){return P.doExpire(M,se,W)},F+P.options.expiration):void 0,job:P}}_drainOne(y){return this._registerLock.schedule(()=>{var P,F,M,W,se;return this.queued()===0?this.Promise.resolve(null):(se=this._queues.getFirst(),{options:W,args:P}=M=se.first(),y!=null&&W.weight>y?this.Promise.resolve(null):(this.Events.trigger("debug",`Draining ${W.id}`,{args:P,options:W}),F=this._randomIndex(),this._store.__register__(F,W.weight,W.expiration).then(({success:me,wait:Te,reservoir:Ae})=>{var Me;return this.Events.trigger("debug",`Drained ${W.id}`,{success:me,args:P,options:W}),me?(se.shift(),Me=this.empty(),Me&&this.Events.trigger("empty"),Ae===0&&this.Events.trigger("depleted",Me),this._run(F,M,Te),this.Promise.resolve(W.weight)):this.Promise.resolve(null)})))})}_drainAll(y,P=0){return this._drainOne(y).then(F=>{var M;return F!=null?(M=y!=null?y-F:y,this._drainAll(M,P+F)):this.Promise.resolve(P)}).catch(F=>this.Events.trigger("error",F))}_dropAllQueued(y){return this._queues.shiftAll(function(P){return P.doDrop({message:y})})}stop(y={}){var P,F;return y=ie.load(y,this.stopDefaults),F=M=>{var W;return W=()=>{var se;return se=this._states.counts,se[0]+se[1]+se[2]+se[3]===M},new this.Promise((se,me)=>W()?se():this.on("done",()=>{if(W())return this.removeAllListeners("done"),se()}))},P=y.dropWaitingJobs?(this._run=function(M,W){return W.doDrop({message:y.dropErrorMessage})},this._drainOne=()=>this.Promise.resolve(null),this._registerLock.schedule(()=>this._submitLock.schedule(()=>{var M,W,se;W=this._scheduled;for(M in W)se=W[M],this.jobStatus(se.job.options.id)==="RUNNING"&&(clearTimeout(se.timeout),clearTimeout(se.expiration),se.job.doDrop({message:y.dropErrorMessage}));return this._dropAllQueued(y.dropErrorMessage),F(0)}))):this.schedule({priority:q-1,weight:0},()=>F(1)),this._receive=function(M){return M._reject(new re.prototype.BottleneckError(y.enqueueErrorMessage))},this.stop=()=>this.Promise.reject(new re.prototype.BottleneckError("stop() has already been called")),P}async _addToQueue(y){var P,F,M,W,se,me,Te;({args:P,options:W}=y);try{({reachedHWM:se,blocked:F,strategy:Te}=await this._store.__submit__(this.queued(),W.weight))}catch(Ae){return M=Ae,this.Events.trigger("debug",`Could not queue ${W.id}`,{args:P,options:W,error:M}),y.doDrop({error:M}),!1}return F?(y.doDrop(),!0):se&&(me=Te===re.prototype.strategy.LEAK?this._queues.shiftLastFrom(W.priority):Te===re.prototype.strategy.OVERFLOW_PRIORITY?this._queues.shiftLastFrom(W.priority+1):Te===re.prototype.strategy.OVERFLOW?y:void 0,me!=null&&me.doDrop(),me==null||Te===re.prototype.strategy.OVERFLOW)?(me==null&&y.doDrop(),se):(y.doQueue(se,F),this._queues.push(y),await this._drainAll(),se)}_receive(y){return this._states.jobStatus(y.options.id)!=null?(y._reject(new re.prototype.BottleneckError(`A job with the same id already exists (id=${y.options.id})`)),!1):(y.doReceive(),this._submitLock.schedule(this._addToQueue,y))}submit(...y){var P,F,M,W,se,me,Te;return typeof y[0]=="function"?(se=y,[F,...y]=se,[P]=_e.call(y,-1),W=ie.load({},this.jobDefaults)):(me=y,[W,F,...y]=me,[P]=_e.call(y,-1),W=ie.load(W,this.jobDefaults)),Te=(...Ae)=>new this.Promise(function(Me,Xe){return F(...Ae,function(...Qe){return(Qe[0]!=null?Xe:Me)(Qe)})}),M=new A(Te,y,W,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),M.promise.then(function(Ae){return typeof P=="function"?P(...Ae):void 0}).catch(function(Ae){return Array.isArray(Ae)?typeof P=="function"?P(...Ae):void 0:typeof P=="function"?P(Ae):void 0}),this._receive(M)}schedule(...y){var P,F,M;return typeof y[0]=="function"?([M,...y]=y,F={}):[F,M,...y]=y,P=new A(M,y,F,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),this._receive(P),P.promise}wrap(y){var P,F;return P=this.schedule.bind(this),F=function(...M){return P(y.bind(this),...M)},F.withOptions=function(M,...W){return P(M,y,...W)},F}async updateSettings(y={}){return await this._store.__updateSettings__(ie.overwrite(y,this.storeDefaults)),ie.overwrite(y,this.instanceDefaults,this),this}currentReservoir(){return this._store.__currentReservoir__()}incrementReservoir(y=0){return this._store.__incrementReservoir__(y)}}return re.default=re,re.Events=v,re.version=re.prototype.version=I.version,re.strategy=re.prototype.strategy={LEAK:1,OVERFLOW:2,OVERFLOW_PRIORITY:4,BLOCK:3},re.BottleneckError=re.prototype.BottleneckError=_,re.Group=re.prototype.Group=fe,re.RedisConnection=re.prototype.RedisConnection=le,re.IORedisConnection=re.prototype.IORedisConnection=L,re.Batcher=re.prototype.Batcher=Le,re.prototype.jobDefaults={priority:E,weight:1,expiration:null,id:"<no-id>"},re.prototype.storeDefaults={maxConcurrent:null,minTime:0,highWater:null,strategy:re.prototype.strategy.LEAK,penalty:null,reservoir:null,reservoirRefreshInterval:null,reservoirRefreshAmount:null,reservoirIncreaseInterval:null,reservoirIncreaseAmount:null,reservoirIncreaseMaximum:null},re.prototype.localStoreDefaults={Promise,timeout:null,heartbeatInterval:250},re.prototype.redisStoreDefaults={Promise,timeout:null,heartbeatInterval:5e3,clientTimeout:1e4,Redis:null,clientOptions:{},clusterNodes:null,clearDatastore:!1,connection:null},re.prototype.instanceDefaults={datastore:"local",connection:null,id:"<no-id>",rejectOnDrop:!0,trackDoneStatus:!1,Promise},re.prototype.stopDefaults={enqueueErrorMessage:"This limiter has been stopped and cannot accept new jobs.",dropWaitingJobs:!0,dropErrorMessage:"This limiter has been stopped."},re}).call(t);var he=G,Re=he;return Re})})(ji);var Nn=ji.exports;const Ii=ns(Nn);var qn="0.0.0-development";async function zi(s,e,t,i){if(!t.request||!t.request.request)throw t;if(t.status>=400&&!s.doNotRetry.includes(t.status)){const r=i.request.retries!=null?i.request.retries:s.retries,n=Math.pow((i.request.retryCount||0)+1,2);throw e.retry.retryRequest(t,r,n)}throw t}async function Hn(s,e,t,i){const r=new Ii;return r.on("failed",function(n,o){const a=~~n.request.request.retries,c=~~n.request.request.retryAfter;if(i.request.retryCount=o.retryCount+1,a>o.retryCount)return c*s.retryAfterBaseValue}),r.schedule(Vn.bind(null,s,e,t),i)}async function Vn(s,e,t,i){const r=await t(t,i);if(r.data&&r.data.errors&&r.data.errors.length>0&&/Something went wrong while executing your query/.test(r.data.errors[0].message)){const n=new $t(r.data.errors[0].message,500,{request:i,response:r});return zi(s,e,n,i)}return r}function Bi(s,e){const t=Object.assign({enabled:!0,retryAfterBaseValue:1e3,doNotRetry:[400,401,403,404,422,451],retries:3},e.retry);return t.enabled&&(s.hook.error("request",zi.bind(null,t,s)),s.hook.wrap("request",Hn.bind(null,t,s))),{retry:{retryRequest:(i,r,n)=>(i.request.request=Object.assign({},i.request.request,{retries:r,retryAfter:n}),i)}}}Bi.VERSION=qn;var Wn="0.0.0-development",Lr=()=>Promise.resolve();function Zn(s,e,t){return s.retryLimiter.schedule(Kn,s,e,t)}async function Kn(s,e,t){const i=t.method!=="GET"&&t.method!=="HEAD",{pathname:r}=new URL(t.url,"http://github.test"),n=t.method==="GET"&&r.startsWith("/search/"),o=r.startsWith("/graphql"),c=~~e.retryCount>0?{priority:0,weight:0}:{};s.clustering&&(c.expiration=1e3*60),(i||o)&&await s.write.key(s.id).schedule(c,Lr),i&&s.triggersNotification(r)&&await s.notifications.key(s.id).schedule(c,Lr),n&&await s.search.key(s.id).schedule(c,Lr);const f=s.global.key(s.id).schedule(c,e,t);if(o){const m=await f;if(m.data.errors!=null&&m.data.errors.some(h=>h.type==="RATE_LIMITED"))throw Object.assign(new Error("GraphQL Rate Limit Exceeded"),{response:m,data:m.data})}return f}var Jn=["/orgs/{org}/invitations","/orgs/{org}/invitations/{invitation_id}","/orgs/{org}/teams/{team_slug}/discussions","/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments","/repos/{owner}/{repo}/collaborators/{username}","/repos/{owner}/{repo}/commits/{commit_sha}/comments","/repos/{owner}/{repo}/issues","/repos/{owner}/{repo}/issues/{issue_number}/comments","/repos/{owner}/{repo}/pulls","/repos/{owner}/{repo}/pulls/{pull_number}/comments","/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies","/repos/{owner}/{repo}/pulls/{pull_number}/merge","/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers","/repos/{owner}/{repo}/pulls/{pull_number}/reviews","/repos/{owner}/{repo}/releases","/teams/{team_id}/discussions","/teams/{team_id}/discussions/{discussion_number}/comments"];function Yn(s){const t=`^(?:${s.map(i=>i.split("/").map(r=>r.startsWith("{")?"(?:.+?)":r).join("/")).map(i=>`(?:${i})`).join("|")})[^/]*$`;return new RegExp(t,"i")}var qs=Yn(Jn),Mi=qs.test.bind(qs),mt={},Xn=function(s,e){mt.global=new s.Group({id:"octokit-global",maxConcurrent:10,...e}),mt.search=new s.Group({id:"octokit-search",maxConcurrent:1,minTime:2e3,...e}),mt.write=new s.Group({id:"octokit-write",maxConcurrent:1,minTime:1e3,...e}),mt.notifications=new s.Group({id:"octokit-notifications",maxConcurrent:1,minTime:3e3,...e})};function as(s,e){const{enabled:t=!0,Bottleneck:i=Ii,id:r="no-id",timeout:n=1e3*60*2,connection:o}=e.throttle||{};if(!t)return{};const a={timeout:n};typeof o<"u"&&(a.connection=o),mt.global==null&&Xn(i,a);const c=Object.assign({clustering:o!=null,triggersNotification:Mi,fallbackSecondaryRateRetryAfter:60,retryAfterBaseValue:1e3,retryLimiter:new i,id:r,...mt},e.throttle);if(typeof c.onSecondaryRateLimit!="function"||typeof c.onRateLimit!="function")throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);const f={},m=new i.Events(f);return f.on("secondary-limit",c.onSecondaryRateLimit),f.on("rate-limit",c.onRateLimit),f.on("error",h=>s.log.warn("Error in throttling-plugin limit handler",h)),c.retryLimiter.on("failed",async function(h,b){const[p,w,d]=b.args,{pathname:_}=new URL(d.url,"http://github.test");if(!(_.startsWith("/graphql")&&h.status!==401||h.status===403||h.status===429))return;const k=~~w.retryCount;w.retryCount=k,d.request.retryCount=k;const{wantRetry:S,retryAfter:x=0}=await async function(){var C;if(/\bsecondary rate\b/i.test(h.message)){const z=Number(h.response.headers["retry-after"])||p.fallbackSecondaryRateRetryAfter;return{wantRetry:await m.trigger("secondary-limit",z,d,s,k),retryAfter:z}}if(h.response.headers!=null&&h.response.headers["x-ratelimit-remaining"]==="0"||(((C=h.response.data)==null?void 0:C.errors)??[]).some(z=>z.type==="RATE_LIMITED")){const z=new Date(~~h.response.headers["x-ratelimit-reset"]*1e3).getTime(),U=Math.max(Math.ceil((z-Date.now())/1e3)+1,0);return{wantRetry:await m.trigger("rate-limit",U,d,s,k),retryAfter:U}}return{}}();if(S)return w.retryCount++,x*p.retryAfterBaseValue}),s.hook.wrap("request",Zn.bind(null,c)),{}}as.VERSION=Wn;as.triggersNotification=Mi;var Qn="0.0.0-development",Ni=Tn.plugin(Fi,$i,Un,Bi,as).defaults({userAgent:`octokit.js/${Qn}`,throttle:{onRateLimit:ea,onSecondaryRateLimit:ta}});function ea(s,e,t){if(t.log.warn(`Request quota exhausted for request ${e.method} ${e.url}`),e.request.retryCount===0)return t.log.info(`Retrying after ${s} seconds!`),!0}function ta(s,e,t){if(t.log.warn(`SecondaryRateLimit detected for request ${e.method} ${e.url}`),e.request.retryCount===0)return t.log.info(`Retrying after ${s} seconds!`),!0}class qi{constructor(e){if(this.data=[],e&&!Array.isArray(e))throw new Error("data not from type array");this.data=e||[]}key(){return""}listKey(e){return"title"in e?e.title:"unknown"}title(){return""}fileName(e){return`${this.listKey(e)}.json`}zipFileName(){return`${new Date().getTime()}.zip`}validate(e){return e}sort(e){const t=[],i=e.map(r=>`${this.listKey(r)}`).sort();for(const r of i){const n=e.find(o=>`${this.listKey(o)}`===r);n!==void 0&&t.push(n)}return t}updateStore(e){const t=we.queryStore(),i=t.getData(this.key());if(i===void 0)return;const n=[...i.filter(o=>this.data.find(c=>this.listKey(c)===this.listKey(o))===void 0),...this.data];t.setData(this.key(),e?this.sort(n):n)}}class ra extends qi{key(){return"alertLists"}listKey(e){return e.title}title(){return"Alarm Listen"}fileName(e){return`Alarm Liste - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof(e==null?void 0:e.title)!="string"||!("data"in e)||!Array.isArray(e.data))return null;for(const t of e.data)if(!("from"in t&&"to"in t&&"alert"in t&&"desc"in t)||typeof t.from!="number"||typeof t.to!="number"||typeof t.alert!="string"||(typeof t.desc=="string"&&(t.desc=t.desc.split(`
`)),!Array.isArray(t.desc))||t.desc.filter(i=>typeof i!="string").length>0)return null;return e}}class sa extends qi{key(){return"metalSheets"}listKey(e){return`${e.format} ${e.toolID}`}title(){return"Blech Listen"}fileName(e){return`Blech Liste - ${super.fileName(e)}`}zipFileName(){return`${this.title()} - ${super.zipFileName()}`}validate(e){if(typeof e.format!="string"||(e.toolID||(e.toolID=""),typeof e.toolID!="string")||!("data"in e)||typeof e.data!="object"||e.data.press!=="number")return null;if(!("table"in e.data))e.data.table={header:[],data:[]};else{if(typeof e.data.table!="object"||!("header"in e.data.table)||!("data"in e.data.table)||!Array.isArray(e.data.table.header)||!Array.isArray(e.data.table.table))return null;for(const t of e.data.table.header)if(typeof t!="string")return null;for(const t of e.data.table.data)for(const i of t)if(typeof i!="string")return null}return e}}function De(s){switch(s){case"alertLists":return new ra;case"metalSheets":return new sa;default:throw new Error(`unknown "${s}"`)}}async function Hi(s,e){try{const t=await ia(e),i=De(s);for(const o of Object.values(t.data.files||{})){if(!(o!=null&&o.content))continue;const a=i.validate(JSON.parse(o.content));if(a===null)throw new Error(`ungültige Daten für "${i.title()}"!`);i.data.push(a)}const r=await oa(e),n=we.queryStore();n.setData(s,[]),i.updateStore(!0),n.updateData("gist",o=>(o[`${s}`]={id:e,revision:r},o))}catch(t){alert(`Etwas ist schiefgelaufen: ${t}`);return}}async function ia(s){const t=await new Ni().request("GET /gists/{gist_id}",{gist_id:s,headers:{"X-GitHub-Api-Version":"2022-11-28"}});if(t.status!==200)throw console.error(t),new Error(`anfrage von "GET /gist/${s}" ist mit Statuscode ${t.status} fehlgeschlagen`);return t}async function oa(s){const t=await new Ni().request("GET /gists/{gist_id}/commits",{gist_id:s,headers:{"X-GitHub-Api-Version":"2022-11-28"}});return t.status!==200?(console.error(t),-1):t.data.length}var na=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,Vi=(s,e,t,i)=>{for(var r=i>1?void 0:i?aa(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&na(e,t,r),r};let Br=class extends Ie{createRenderRoot(){return this}render(){return Oe`
            <ui-dialog title="Import ${this.dialogTitle()}" modal inert>
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
                    @click=${async()=>this.close()}
                >
                    Cancel
                </ui-button>

                <ui-button
                    slot="actions"
                    variant="full"
                    color="primary"
                    @click=${async()=>{if(!this.storeKey)return;const s=this.querySelector('ui-dialog ui-input[name="gistID"]').value;s===""?await this.importFromFile():await Hi(this.storeKey,s),this.close()}}
                >
                    Submit
                </ui-button>
            </ui-dialog>
        `}async importFromFile(){if(!this.storeKey)return;const s=document.createElement("input");s.type="file",s.multiple=!0,s.onchange=async()=>{if(s.files!==null)for(const e of s.files){const t=new FileReader;t.onload=async()=>{if(typeof t.result!="string"||this.storeKey===void 0)return;const i=De(this.storeKey),r=i.validate(JSON.parse(t.result));if(r===null){alert(`Ungültige Daten für "${i.title()}"!`);return}i.data.push(r),i.updateStore(!0)},t.onerror=()=>{alert(`Lesen der Datei "${e.name}" ist fehlgeschlagen!`)},t.readAsText(e)}},s.click()}dialogTitle(){return this.storeKey?'"'+De(this.storeKey).title()+'"':""}show(){this.querySelector("ui-dialog").show()}close(){this.querySelector("ui-dialog").close()}};Vi([xe({type:String,attribute:"store-key",reflect:!0})],Br.prototype,"storeKey",2);Br=Vi([Ue("pg-import-dialog")],Br);class ls{constructor(){this.listeners={}}addListener(e,t){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(i=>i!==t))}dispatch(e,t){this.listeners[e]&&this.listeners[e].forEach(i=>i(t))}}class Wi{constructor(){this.callbacks=[]}add(...e){this.callbacks.push(...e)}run(){this.callbacks.filter(e=>(e(),!1))}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sr=globalThis,cs=sr.ShadowRoot&&(sr.ShadyCSS===void 0||sr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,us=Symbol(),Hs=new WeakMap;let Zi=class{constructor(s,e,t){if(this._$cssResult$=!0,t!==us)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o;const e=this.t;if(cs&&s===void 0){const t=e!==void 0&&e.length===1;t&&(s=Hs.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),t&&Hs.set(e,s))}return s}toString(){return this.cssText}};const la=s=>new Zi(typeof s=="string"?s:s+"",void 0,us),ye=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Zi(t,s,us)},ca=(s,e)=>{if(cs)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=sr.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},Vs=cs?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return la(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ua,defineProperty:pa,getOwnPropertyDescriptor:ha,getOwnPropertyNames:da,getOwnPropertySymbols:fa,getPrototypeOf:ga}=Object,vt=globalThis,Ws=vt.trustedTypes,ma=Ws?Ws.emptyScript:"",Zs=vt.reactiveElementPolyfillSupport,Ut=(s,e)=>s,nr={toAttribute(s,e){switch(e){case Boolean:s=s?ma:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ps=(s,e)=>!ua(s,e),Ks={attribute:!0,type:String,converter:nr,reflect:!1,hasChanged:ps};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),vt.litPropertyMetadata??(vt.litPropertyMetadata=new WeakMap);class ft extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ks){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&pa(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=ha(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const a=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ks}static _$Ei(){if(this.hasOwnProperty(Ut("elementProperties")))return;const e=ga(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ut("properties"))){const t=this.properties,i=[...da(t),...fa(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Vs(r))}else e!==void 0&&t.push(Vs(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ca(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var i;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const o=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:nr).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=r.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:nr;this._$Em=n,this[n]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ps)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},ft[Ut("elementProperties")]=new Map,ft[Ut("finalized")]=new Map,Zs==null||Zs({ReactiveElement:ft}),(vt.reactiveElementVersions??(vt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar=globalThis,lr=ar.trustedTypes,Js=lr?lr.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ki="$lit$",He=`lit$${Math.random().toFixed(9).slice(2)}$`,Ji="?"+He,_a=`<${Ji}>`,nt=document,It=()=>nt.createComment(""),zt=s=>s===null||typeof s!="object"&&typeof s!="function",hs=Array.isArray,ya=s=>hs(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Gr=`[ 	
\f\r]`,Rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ys=/-->/g,Xs=/>/g,tt=RegExp(`>|${Gr}(?:([^\\s"'>=/]+)(${Gr}*=${Gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qs=/'/g,ei=/"/g,Yi=/^(?:script|style|textarea|title)$/i,va=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),oe=va(1),bt=Symbol.for("lit-noChange"),Se=Symbol.for("lit-nothing"),ti=new WeakMap,st=nt.createTreeWalker(nt,129);function Xi(s,e){if(!hs(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Js!==void 0?Js.createHTML(e):e}const ba=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",o=Rt;for(let a=0;a<t;a++){const c=s[a];let f,m,h=-1,b=0;for(;b<c.length&&(o.lastIndex=b,m=o.exec(c),m!==null);)b=o.lastIndex,o===Rt?m[1]==="!--"?o=Ys:m[1]!==void 0?o=Xs:m[2]!==void 0?(Yi.test(m[2])&&(r=RegExp("</"+m[2],"g")),o=tt):m[3]!==void 0&&(o=tt):o===tt?m[0]===">"?(o=r??Rt,h=-1):m[1]===void 0?h=-2:(h=o.lastIndex-m[2].length,f=m[1],o=m[3]===void 0?tt:m[3]==='"'?ei:Qs):o===ei||o===Qs?o=tt:o===Ys||o===Xs?o=Rt:(o=tt,r=void 0);const p=o===tt&&s[a+1].startsWith("/>")?" ":"";n+=o===Rt?c+_a:h>=0?(i.push(f),c.slice(0,h)+Ki+c.slice(h)+He+p):c+He+(h===-2?a:p)}return[Xi(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Bt{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const a=e.length-1,c=this.parts,[f,m]=ba(e,t);if(this.el=Bt.createElement(f,i),st.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=st.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Ki)){const b=m[o++],p=r.getAttribute(h).split(He),w=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:w[2],strings:p,ctor:w[1]==="."?Ea:w[1]==="?"?ka:w[1]==="@"?Ta:br}),r.removeAttribute(h)}else h.startsWith(He)&&(c.push({type:6,index:n}),r.removeAttribute(h));if(Yi.test(r.tagName)){const h=r.textContent.split(He),b=h.length-1;if(b>0){r.textContent=lr?lr.emptyScript:"";for(let p=0;p<b;p++)r.append(h[p],It()),st.nextNode(),c.push({type:2,index:++n});r.append(h[b],It())}}}else if(r.nodeType===8)if(r.data===Ji)c.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(He,h+1))!==-1;)c.push({type:7,index:n}),h+=He.length-1}n++}}static createElement(e,t){const i=nt.createElement("template");return i.innerHTML=e,i}}function wt(s,e,t=s,i){var r,n;if(e===bt)return e;let o=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl;const a=zt(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((n=o==null?void 0:o._$AO)==null||n.call(o,!1),a===void 0?o=void 0:(o=new a(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=wt(s,o._$AS(s,e.values),o,i)),e}class wa{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??nt).importNode(t,!0);st.currentNode=r;let n=st.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let f;c.type===2?f=new Vt(n,n.nextSibling,this,e):c.type===1?f=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(f=new Sa(n,this,e)),this._$AV.push(f),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=st.nextNode(),o++)}return st.currentNode=nt,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Vt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=Se,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=wt(this,e,t),zt(e)?e===Se||e==null||e===""?(this._$AH!==Se&&this._$AR(),this._$AH=Se):e!==this._$AH&&e!==bt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ya(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Se&&zt(this._$AH)?this._$AA.nextSibling.data=e:this.T(nt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Bt.createElement(Xi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===n)this._$AH.p(i);else{const o=new wa(n,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let t=ti.get(e.strings);return t===void 0&&ti.set(e.strings,t=new Bt(e)),t}k(e){hs(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Vt(this.O(It()),this.O(It()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class br{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=Se,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Se}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=wt(this,e,t,0),o=!zt(e)||e!==this._$AH&&e!==bt,o&&(this._$AH=e);else{const a=e;let c,f;for(e=n[0],c=0;c<n.length-1;c++)f=wt(this,a[i+c],t,c),f===bt&&(f=this._$AH[c]),o||(o=!zt(f)||f!==this._$AH[c]),f===Se?e=Se:e!==Se&&(e+=(f??"")+n[c+1]),this._$AH[c]=f}o&&!r&&this.j(e)}j(e){e===Se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ea extends br{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Se?void 0:e}}class ka extends br{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Se)}}class Ta extends br{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=wt(this,e,t,0)??Se)===bt)return;const i=this._$AH,r=e===Se&&i!==Se||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Se&&(i===Se||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Sa{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){wt(this,e)}}const ri=ar.litHtmlPolyfillSupport;ri==null||ri(Bt,Vt),(ar.litHtmlVersions??(ar.litHtmlVersions=[])).push("3.2.1");const Aa=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new Vt(e.insertBefore(It(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let de=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(s){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=Aa(e,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return bt}};var si;de._$litElement$=!0,de.finalized=!0,(si=globalThis.litElementHydrateSupport)==null||si.call(globalThis,{LitElement:de});const ii=globalThis.litElementPolyfillSupport;ii==null||ii({LitElement:de});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Qi={color:"var(--ui-ripple-text, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",usePointer:!1};function wr(s,e){e={...Qi,...e||{}};let t=null;const i=a=>{t=Mr(a,e),s.addEventListener("pointermove",n)},r=()=>{s.removeEventListener("pointermove",n),Nr(t),t=null},n=()=>r(),o=a=>{t=Mr(a,e),Nr(t),t=null};return s.classList.add("ripple-container"),s.style.overflow="hidden",e.usePointer?(s.addEventListener("pointerdown",i),s.addEventListener("pointerup",r),s.addEventListener("pointerleave",r)):s.addEventListener("click",o),()=>{if(s.classList.remove("ripple-container"),e.usePointer){s.removeEventListener("pointerdown",i),s.removeEventListener("pointerup",r),s.removeEventListener("pointerleave",r),s.removeEventListener("pointermove",n);return}s.removeEventListener("click",o)}}function Mr(s,e){const t=document.createElement("div"),i=s.currentTarget;i.appendChild(t),t.classList.add("ripple"),t.style.position="absolute",t.style.color="inherit",t.style.borderRadius="50%",t.style.pointerEvents="none",t.style.width="100px",t.style.height="100px",t.style.marginTop="-50px",t.style.marginLeft="-50px",t.style.opacity=`${e.opacity}`,t.style.backgroundColor=`${e.color}`,t.style.transform="scale(0) translate(0, 0)",t.style.transition=`transform ${e.spreadDuration} ${e.spreadTiming} 0s,opacity ${e.clearDuration} ${e.clearTiming} 0s`;const r=i.getBoundingClientRect();e.centered?(t.style.top=`${r.height/2}px`,t.style.left=`${r.width/2}px`):(t.style.top=`${s.clientY-r.top}px`,t.style.left=`${s.clientX-r.left}px`);const n=Math.max(r.width,r.height)*.02;return t.style.transform=`scale(${n}) translate(0, 0)`,t}function Nr(s){s&&(s.addEventListener("transitionend",e=>{e.propertyName==="opacity"&&s.remove()}),s.style.opacity="0")}const Ca=Object.freeze(Object.defineProperty({__proto__:null,create:wr,defaultOptions:Qi,start:Mr,stop:Nr},Symbol.toStringTag,{value:"Module"}));function ds(s){return Object.entries(s).map(([e,t])=>`${e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}:${t}`).join(";")+";"}const Pa=oe`
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
`,xa=oe`
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
`,fs=oe`
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
`,Oa=oe`
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
`,eo=oe`
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
`,Ra=oe`
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
`,$a=oe`
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
`,La=oe`
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
`,Ga=oe`
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
`,Da=oe`
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
`,Ua=oe`
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
`,Fa=oe`
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
`,ja=oe`
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
`,Ia=oe`
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
`,za=oe`
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
`,to=oe`
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
`,Ba=oe`
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
`,Ma=oe`
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
                d="M12 15L12 3M12 3L8 7M12 3L16 7"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Va=Object.freeze(Object.defineProperty({__proto__:null,bookmark:Pa,checkmark:xa,chevronDown:fs,chevronLeft:Oa,close:eo,documentNew:Ra,download:$a,drag:La,menu:Ga,moreVertical:Da,pen:Ua,plus:Fa,power:ja,printer:Ia,refresh:za,search:to,settings:Ba,share:Ma,today:Na,trash:qa,upload:Ha},Symbol.toStringTag,{value:"Module"})),Ne=Object.freeze(Object.defineProperty({__proto__:null,smoothieLineIcons:Va},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wa={attribute:!0,type:String,converter:nr,reflect:!1,hasChanged:ps},Za=(s=Wa,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,s)},init(a){return a!==void 0&&this.P(o,void 0,s),a}}}if(i==="setter"){const{name:o}=t;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,s)}}throw Error("Unsupported decorator location: "+i)};function Y(s){return(e,t)=>typeof t=="object"?Za(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}var Ka=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,gs=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ja(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ka(e,t,r),r};let cr=class extends de{constructor(){super(...arguments),this.variant="info",this.message="",this.role="button"}static get styles(){return ye`
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
        `}firstUpdated(s){super.firstUpdated(s),this.addEventListener("click",()=>{this.parentElement&&this.parentElement.removeChild(this)})}};gs([Y({type:String,attribute:"variant",reflect:!0})],cr.prototype,"variant",2);gs([Y({type:String,attribute:"message"})],cr.prototype,"message",2);cr=gs([ge("ui-alert")],cr);var Ya=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let oi=class extends de{static get styles(){return ye`
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
        `}addAlert(s){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".container");return t&&t.append(s),()=>this.removeAlert(s)}removeAlert(s){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".container");t&&t.removeChild(s)}};oi=Ya([ge("ui-alerts")],oi);var Xa=Object.defineProperty,Qa=Object.getOwnPropertyDescriptor,ms=(s,e,t,i)=>{for(var r=i>1?void 0:i?Qa(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Xa(e,t,r),r};let ur=class extends de{constructor(){super(...arguments),this.position="top",this.fixed=!1}static get styles(){return ye`
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
        `}content(s){return[...this.querySelectorAll(`[slot="${s}"]`)]}contentName(s){return this.querySelector(`[name="${s}"]`)}};ms([Y({type:String,attribute:"position",reflect:!0})],ur.prototype,"position",2);ms([Y({type:Boolean,attribute:"fixed",reflect:!0})],ur.prototype,"fixed",2);ur=ms([ge("ui-app-bar")],ur);var el=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,_s=(s,e,t,i)=>{for(var r=i>1?void 0:i?tl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&el(e,t,r),r};let pr=class extends de{constructor(){super(...arguments),this.name="",this.hidden=!1}static get styles(){return ye`
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
        `}render(){return oe`<slot></slot>`}content(){return[...this.children]}contentAt(s=0){return this.children[s]}show(){this.hidden=!1}hide(){this.hidden=!0}};_s([Y({type:String,attribute:"name",reflect:!0})],pr.prototype,"name",2);_s([Y({type:Boolean,attribute:"hidden",reflect:!0})],pr.prototype,"hidden",2);pr=_s([ge("ui-app-bar-item")],pr);var rl=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,Wt=(s,e,t,i)=>{for(var r=i>1?void 0:i?sl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&rl(e,t,r),r};let at=class extends de{constructor(){super(...arguments),this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return ye`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),t!==null&&(this.rippleCleanUp=wr(this));break}}};Wt([Y({type:String,attribute:"color",reflect:!0})],at.prototype,"color",2);Wt([Y({type:String,attribute:"variant",reflect:!0})],at.prototype,"variant",2);Wt([Y({type:Boolean,attribute:"disabled"})],at.prototype,"disabled",2);Wt([Y({type:Boolean,attribute:"ripple"})],at.prototype,"ripple",2);at=Wt([ge("ui-button")],at);const il=at;var ol=Object.defineProperty,nl=Object.getOwnPropertyDescriptor,Zt=(s,e,t,i)=>{for(var r=i>1?void 0:i?nl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ol(e,t,r),r};let Et=class extends de{constructor(){super(...arguments),this.ghost=!1,this.disabled=!1,this.ripple=!1,this.role="button",this.rippleCleanUp=null}static get styles(){return ye`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.rippleCleanUp!==null&&(this.rippleCleanUp(),this.rippleCleanUp=null),t!==null&&(this.rippleCleanUp=wr(this));break}}};Zt([Y({type:String,attribute:"color",reflect:!0})],Et.prototype,"color",2);Zt([Y({type:Boolean,attribute:"ghost"})],Et.prototype,"ghost",2);Zt([Y({type:Boolean,attribute:"disabled"})],Et.prototype,"disabled",2);Zt([Y({type:Boolean,attribute:"ripple"})],Et.prototype,"ripple",2);Et=Zt([ge("ui-icon-button")],Et);var al=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,ut=(s,e,t,i)=>{for(var r=i>1?void 0:i?ll(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&al(e,t,r),r};let We=class extends de{constructor(){super(...arguments),this.title="",this.fullscreen="",this.noFooter="",this.open=!1,this.modal=!1,this.inert=!1}static get styles(){return ye`
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
                            ${eo}
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
        `}updated(s){this.open?this.show():this.close()}show(){this.open||(this.open=!0);const s=this.shadowRoot.querySelector("dialog");if(s===null)return;const e=s.inert;s.inert=this.inert,this.modal?s.showModal():s.show(),s.inert=e,this.dispatchEvent(new Event("open"))}close(){this.dispatchEvent(new Event("close")),this.shadowRoot.querySelector("dialog").close()}addDialogActionButton(s,e){const t=new ct;t.flex=(e==null?void 0:e.flex)||1,t.slot="actions",this.appendChild(t);let i=new il;return i.innerHTML=s,i.variant=e==null?void 0:e.variant,i.color=e==null?void 0:e.color,i.onclick=(e==null?void 0:e.onClick)||null,t.appendChild(i),i}};ut([Y({type:String,attribute:"title",reflect:!0})],We.prototype,"title",2);ut([Y({type:Boolean,attribute:"fullscreen",reflect:!0})],We.prototype,"fullscreen",2);ut([Y({type:Boolean,attribute:"no-footer",reflect:!0})],We.prototype,"noFooter",2);ut([Y({type:Boolean,attribute:"open",reflect:!0})],We.prototype,"open",2);ut([Y({type:Boolean,attribute:"modal",reflect:!0})],We.prototype,"modal",2);ut([Y({type:Boolean,attribute:"inert",reflect:!0})],We.prototype,"inert",2);We=ut([ge("ui-dialog")],We);var cl=Object.defineProperty,ul=Object.getOwnPropertyDescriptor,Kt=(s,e,t,i)=>{for(var r=i>1?void 0:i?ul(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&cl(e,t,r),r};const pl="0";let lt=class extends de{constructor(){super(...arguments),this.title="",this.gap=pl,this.open=!1,this.noFold=!1}static get styles(){return ye`
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
                                ${fs}
                            </ui-svg>
                        </ui-flex-grid-item>
                    </ui-flex-grid-row>
                </ui-drawer-group-item>

                <slot></slot>
            </ui-flex-grid>
        `}};Kt([Y({type:String,attribute:"title",reflect:!0})],lt.prototype,"title",2);Kt([Y({type:String,attribute:"gap"})],lt.prototype,"gap",2);Kt([Y({type:Boolean,attribute:"open",reflect:!0})],lt.prototype,"open",2);Kt([Y({type:Boolean,attribute:"no-fold",reflect:!0})],lt.prototype,"noFold",2);lt=Kt([ge("ui-drawer-group")],lt);const hl=lt;var dl=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,ys=(s,e,t,i)=>{for(var r=i>1?void 0:i?fl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&dl(e,t,r),r};let hr=class extends de{constructor(){super(...arguments),this.open=!1,this.role="button",this.handleUnfold=s=>{s.currentTarget.scrollIntoView(!0)}}static get styles(){return ye`
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
        `}firstUpdated(s){this.classList.add("has-backdrop-blur"),this.addEventListener("click",()=>{this.open=!1})}updated(s){[...this.children].forEach(async e=>{e instanceof hl&&e.addEventListener("unfold",this.handleUnfold)})}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"width":t!==null?this.style.setProperty("--_width",t):this.style.removeProperty("--_width");break;case"open":t!==null?(history.pushState(null,"ui-drawer",location.href),this.dispatchEvent(new Event("open"))):this.dispatchEvent(new Event("close"));break}}};ys([Y({type:String,attribute:"width",reflect:!0})],hr.prototype,"width",2);ys([Y({type:Boolean,attribute:"open",reflect:!0})],hr.prototype,"open",2);hr=ys([ge("ui-drawer")],hr);var gl=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let qr=class extends de{static get styles(){return ye`
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
        `}render(){return oe`<slot></slot>`}};qr=gl([ge("ui-drawer-group-item")],qr);const vs=qr;var ml=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,Jt=(s,e,t,i)=>{for(var r=i>1?void 0:i?_l(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ml(e,t,r),r};const ni="0";let kt=class extends de{constructor(){super(...arguments),this.gap=ni}static get styles(){return ye`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"gap":t?this.style.setProperty("--_gap",t||ni):this.style.removeProperty("--_gap");break;case"justify":t?this.style.setProperty("--_justify",t||""):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t||""):this.style.removeProperty("--_align");break;case"wrap":t?this.style.setProperty("--_wrap",t||""):this.style.removeProperty("--_wrap");break}}};Jt([Y({type:String,attribute:"gap"})],kt.prototype,"gap",2);Jt([Y({type:String,attribute:"justify"})],kt.prototype,"justify",2);Jt([Y({type:String,attribute:"align"})],kt.prototype,"align",2);Jt([Y({type:String,attribute:"wrap"})],kt.prototype,"wrap",2);kt=Jt([ge("ui-flex-grid")],kt);var yl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,Yt=(s,e,t,i)=>{for(var r=i>1?void 0:i?vl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&yl(e,t,r),r};const Dr=1;let ct=class extends de{constructor(){super(...arguments),this.flex=Dr}static get styles(){return ye`
            :host {
                flex: var(--_flex, ${Dr});
                display: flex;
                flex-direction: var(--_direction, row);
                justify-content: var(--_justify);
                align-items: var(--_align);
            }

            ::slotted(*) {
                flex-grow: 1;
            }
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"flex":this.style.setProperty("--_flex",t||Dr.toString());break;case"direction":t?this.style.setProperty("--_direction",t):this.style.removeProperty("--_direction");break;case"justify":t?this.style.setProperty("--_justify",t):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t):this.style.removeProperty("--_align");break}}};Yt([Y({type:Number,attribute:"flex"})],ct.prototype,"flex",2);Yt([Y({type:String,attribute:"direction",reflect:!0})],ct.prototype,"direction",2);Yt([Y({type:String,attribute:"justify"})],ct.prototype,"justify",2);Yt([Y({type:String,attribute:"align"})],ct.prototype,"align",2);ct=Yt([ge("ui-flex-grid-item")],ct);var bl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,Xt=(s,e,t,i)=>{for(var r=i>1?void 0:i?wl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&bl(e,t,r),r};const ai="0";let Tt=class extends de{constructor(){super(...arguments),this.gap=ai}static get styles(){return ye`
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
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"gap":t?this.style.setProperty("--_gap",t||ai):this.style.removeProperty("--_gap");break;case"justify":t?this.style.setProperty("--_justify",t||""):this.style.removeProperty("--_justify");break;case"align":t?this.style.setProperty("--_align",t||""):this.style.removeProperty("--_align");break;case"wrap":t?this.style.setProperty("--_wrap",t||""):this.style.removeProperty("--_wrap");break}}};Xt([Y({type:String,attribute:"gap"})],Tt.prototype,"gap",2);Xt([Y({type:String,attribute:"justify"})],Tt.prototype,"justify",2);Xt([Y({type:String,attribute:"align"})],Tt.prototype,"align",2);Xt([Y({type:String,attribute:"wrap"})],Tt.prototype,"wrap",2);Tt=Xt([ge("ui-flex-grid-row")],Tt);var El=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,ro=(s,e,t,i)=>{for(var r=i>1?void 0:i?kl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&El(e,t,r),r};let Hr=class extends de{constructor(){super(...arguments),this.checked=!1,this.role="checkbox"}static get styles(){return ye`
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
        `}click(){super.click(),this.shadowRoot.querySelector("input").checked=this.checked=!this.checked}};ro([Y({type:Boolean,attribute:"checked",reflect:!0})],Hr.prototype,"checked",2);Hr=ro([ge("ui-check")],Hr);var Tl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,Je=(s,e,t,i)=>{for(var r=i>1?void 0:i?Sl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Tl(e,t,r),r};let ze=class extends de{constructor(){super(...arguments),this.title="",this.type="",this.value="",this.placeholder="",this.invalid=!1,this.min="",this.max="",this.role="input"}static get styles(){return ye`
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
        `}focus(s){super.focus(s),this.shadowRoot.querySelector("input").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};Je([Y({type:String,attribute:"title",reflect:!0})],ze.prototype,"title",2);Je([Y({type:String,attribute:"type",reflect:!0})],ze.prototype,"type",2);Je([Y({type:String,attribute:"value"})],ze.prototype,"value",2);Je([Y({type:String,attribute:"placeholder",reflect:!0})],ze.prototype,"placeholder",2);Je([Y({type:Boolean,attribute:"invalid",reflect:!0})],ze.prototype,"invalid",2);Je([Y({type:String,attribute:"min",reflect:!0})],ze.prototype,"min",2);Je([Y({type:String,attribute:"max",reflect:!0})],ze.prototype,"max",2);ze=Je([ge("ui-input")],ze);var Al=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,Be=(s,e,t,i)=>{for(var r=i>1?void 0:i?Cl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Al(e,t,r),r};let Fe=class extends de{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.noSubmit=!1,this.storage=!1,this.storagePrefix="",this.storageKey="",this.role="search"}static get styles(){return ye`
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
                    ${to}
                </ui-icon-button>
            </div>
        `}firstUpdated(s){if(super.firstUpdated(s),this.storage){const e=localStorage.getItem(this.storagePrefix+this.storageKey)||this.value;this.value=e,this.dispatchEvent(new Event("storage"))}}focus(s){super.focus(s),this.shadowRoot.querySelector("input").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("input").blur()}click(){super.click(),this.focus()}};Be([Y({type:String,attribute:"title",reflect:!0})],Fe.prototype,"title",2);Be([Y({type:String,attribute:"value"})],Fe.prototype,"value",2);Be([Y({type:String,attribute:"placeholder",reflect:!0})],Fe.prototype,"placeholder",2);Be([Y({type:Boolean,attribute:"invalid",reflect:!0})],Fe.prototype,"invalid",2);Be([Y({type:Boolean,attribute:"no-submit",reflect:!0})],Fe.prototype,"noSubmit",2);Be([Y({type:Boolean,attribute:"storage",reflect:!0})],Fe.prototype,"storage",2);Be([Y({type:String,attribute:"storage-prefix",reflect:!0})],Fe.prototype,"storagePrefix",2);Be([Y({type:String,attribute:"storage-key",reflect:!0})],Fe.prototype,"storageKey",2);Fe=Be([ge("ui-search")],Fe);var Pl=Object.defineProperty,xl=Object.getOwnPropertyDescriptor,bs=(s,e,t,i)=>{for(var r=i>1?void 0:i?xl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Pl(e,t,r),r};let dr=class extends de{constructor(){super(...arguments),this.open=!1,this.keepOpen=!1}static get styles(){return ye`
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
                    <ui-svg>${fs}</ui-svg>
                </div>

                <slot></slot>
            </div>
        `}updated(s){this.style.setProperty("--_items",`${this.children.length}`)}async optionsClickHandler(s){s.composedPath().forEach(e=>{e instanceof St&&([...this.querySelectorAll("ui-select-option")].forEach(t=>t.removeAttribute("selected")),e.setAttribute("selected",""),this.dispatchEvent(new Event("change")))})}options(){return[...this.children].filter(s=>s instanceof St)}selected(){return this.options().find(s=>s.selected)||null}click(){super.click(),this.shadowRoot.querySelector("div.options").click()}};bs([Y({type:Boolean,attribute:"open",reflect:!0})],dr.prototype,"open",2);bs([Y({type:Boolean,attribute:"keep-open",reflect:!0})],dr.prototype,"keepOpen",2);dr=bs([ge("ui-select")],dr);var Ol=Object.defineProperty,Rl=Object.getOwnPropertyDescriptor,ws=(s,e,t,i)=>{for(var r=i>1?void 0:i?Rl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ol(e,t,r),r};let St=class extends de{constructor(){super(...arguments),this.value="",this.selected=!1,this.role="button"}static get styles(){return ye`
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
        `}render(){return oe`<slot></slot>`}};ws([Y({type:String,attribute:"value",reflect:!0})],St.prototype,"value",2);ws([Y({type:Boolean,attribute:"selected",reflect:!0})],St.prototype,"selected",2);St=ws([ge("ui-select-option")],St);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=s=>s??Se;var $l=Object.defineProperty,Ll=Object.getOwnPropertyDescriptor,pt=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ll(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&$l(e,t,r),r};let Ze=class extends de{constructor(){super(...arguments),this.title="",this.value="",this.placeholder="",this.invalid=!1,this.role="textbox"}static get styles(){return ye`
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
                    rows=${li(this.rows)}
                    cols=${li(this.cols)}
                    @input=${s=>{this.value=s.currentTarget.value}}
                    @change=${()=>{this.dispatchEvent(new Event("change"))}}
                ></textarea>
            </div>
        `}focus(s){super.focus(s),this.shadowRoot.querySelector("textarea").focus(s)}blur(){super.blur(),this.shadowRoot.querySelector("textarea").blur()}click(){super.click(),this.focus()}};pt([Y({type:String,attribute:"title",reflect:!0})],Ze.prototype,"title",2);pt([Y({type:String,attribute:"value"})],Ze.prototype,"value",2);pt([Y({type:String,attribute:"placeholder",reflect:!0})],Ze.prototype,"placeholder",2);pt([Y({type:Boolean,attribute:"invalid",reflect:!0})],Ze.prototype,"invalid",2);pt([Y({type:Number,attribute:"rows",reflect:!0})],Ze.prototype,"rows",2);pt([Y({type:Number,attribute:"cols",reflect:!0})],Ze.prototype,"cols",2);Ze=pt([ge("ui-textarea")],Ze);var Gl=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,Er=(s,e,t,i)=>{for(var r=i>1?void 0:i?Dl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Gl(e,t,r),r};let Mt=class extends de{constructor(){super(...arguments),this.name="",this.href="",this.fallback=!1}static get styles(){return ye`
            :host {
                display: none;
            }
        `}};Er([Y({type:String,attribute:"name",reflect:!0})],Mt.prototype,"name",2);Er([Y({type:String,attribute:"href",reflect:!0})],Mt.prototype,"href",2);Er([Y({type:Boolean,attribute:"fallback",reflect:!0})],Mt.prototype,"fallback",2);Mt=Er([ge("ui-lang-type")],Mt);var Ul=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor,so=(s,e,t,i)=>{for(var r=i>1?void 0:i?Fl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ul(e,t,r),r};let Vr=class extends de{constructor(){super(...arguments),this.data={},this.events=new ls,this.current=""}static get styles(){return ye`
            :host {
                display: none;
            }
        `}render(){return oe`<slot></slot>`}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"current":this.setCurrent(t||"");break}}fallback(){return this.querySelector("ui-lang-type[fallback]")}get(s,e){var t,i;return((i=(t=this.data)==null?void 0:t[s])==null?void 0:i[e])||null}async setCurrent(s){const e=(s!==""?this.querySelector(`ui-lang-type[name="${s}"]`):this.fallback())||this.fallback();if(e){if(!e.href)throw"Missing href attribute!";try{this.data=await(await fetch(e.href)).json()}catch(t){console.error(t)}this.events.dispatch("change",e)}}};so([Y({type:String,attribute:"current",reflect:!0})],Vr.prototype,"current",2);Vr=so([ge("ui-lang")],Vr);var jl=Object.defineProperty,Il=Object.getOwnPropertyDescriptor,io=(s,e,t,i)=>{for(var r=i>1?void 0:i?Il(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&jl(e,t,r),r};let Wr=class extends de{constructor(){super(...arguments),this.nobg=!1}static get styles(){return ye`
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
        `}};io([Y({type:Boolean,attribute:"nobg",reflect:!0})],Wr.prototype,"nobg",2);Wr=io([ge("ui-spinner")],Wr);var zl=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let ci=class extends de{constructor(){super(...arguments),this.events=new ls,this.stack=[],this.onpopstate=()=>{if(this.stack.length===0){this.dispatchChangeEvent(null);return}const s=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(s)},this.pages={},this.lockNavigation=!1}static get styles(){return ye`
            :host {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }
        `}render(){return oe`<slot></slot>`}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.onpopstate)}stackSize(){return this.stack.length}clearStack(){for(;this.stack.length>0;)this.removeChild(this.stack.pop())}goBack(){this.stack.length===0||this.lockNavigation||history.back()}registerPage(s,e){this.pages[s]=e}unregisterPage(s){delete this.pages[s]}async setPage(s,e=null,t=!1){var i;if(this.lockNavigation)return;if(!(s in this.pages))throw new Error(`page "${s}" not found`);const r=await this.pages[s]();this.stack.push(this.appendChild(r)),typeof e=="function"&&e(r);let n=null;this.stack.length>1&&!t&&(n=this.stack[this.stack.length-2],(i=n.parentElement)==null||i.removeChild(n)),this.dispatchChangeEvent(n),this.onpopstate!==null&&history.pushState(null,document.title,location.href)}async dispatchChangeEvent(s){this.events.dispatch("change",{old:s||this.stack[this.stack.length-2]||null,current:this.stack[this.stack.length-1]||null})}};ci=zl([ge("ui-stack-layout")],ci);var Bl=Object.defineProperty,Ml=Object.getOwnPropertyDescriptor,oo=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ml(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Bl(e,t,r),r};let fr=class extends de{constructor(){super(...arguments),this.name=""}static get styles(){return ye`
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
        `}render(){return oe`<slot></slot>`}};oo([Y({type:String,attribute:"name",reflect:!0})],fr.prototype,"name",2);fr=oo([ge("ui-stack-layout-page")],fr);const Ur=fr;var Nl=Object.defineProperty,ql=Object.getOwnPropertyDescriptor,Es=(s,e,t,i)=>{for(var r=i>1?void 0:i?ql(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Nl(e,t,r),r};let gr=class extends de{constructor(){super(...arguments),this.data={},this.events=new ls,this.storage=!1,this.storagePrefix=""}static get styles(){return ye`
            :host {
                display: none;
            }
        `}getData(s){if(this.storage){const e=localStorage.getItem(`${this.storagePrefix}${s}`);if(e!==null)return JSON.parse(e)}if(this.data.hasOwnProperty(s))return this.data[s]}setData(s,e,t=!1){if(t&&this.storage){const i=localStorage.getItem(`${this.storagePrefix}${s}`);i!==null?this.data[s]=JSON.parse(i):this.data.hasOwnProperty(s)||(this.data[s]=e)}else this.data[s]=e;this.storage&&localStorage.setItem(`${this.storagePrefix}${s}`,JSON.stringify(this.data[s])),this.events.dispatch(s,this.data[s])}updateData(s,e){const t=this.getData(s);if(t===void 0)throw new Error(`"${s}" not found, use \`setData\``);this.setData(s,e(t))}addListener(s,e,t=!1){if(t){const i=this.getData(s);i!==void 0&&setTimeout(()=>e(i))}return this.events.addListener(s,e)}};Es([Y({type:Boolean,attribute:"storage",reflect:!0})],gr.prototype,"storage",2);Es([Y({type:String,attribute:"storage-prefix",reflect:!0})],gr.prototype,"storagePrefix",2);gr=Es([ge("ui-store")],gr);var Hl=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let ui=class extends de{static get styles(){return ye`
            :host {
                display: inline-block;
                color: inherit;
            }

            ::slotted(*) {
                width: 100%;
                height: 100%;
            }
        `}render(){return oe` <slot></slot> `}};ui=Hl([ge("ui-svg")],ui);var Vl=Object.defineProperty,Wl=Object.getOwnPropertyDescriptor,Ye=(s,e,t,i)=>{for(var r=i>1?void 0:i?Wl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Vl(e,t,r),r};let je=class extends de{constructor(){super(...arguments),this.family="var(--ui-fontFamily)",this.size="var(--ui-fontSize)",this.mono=0,this.casl=1,this.wght=400,this.slnt=0,this.crsv=.5}static get styles(){return ye`
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
        `}render(){return this.style.setProperty("--_family",this.family),this.style.setProperty("--_size",this.size),this.style.setProperty("--_mono",this.mono.toString()),this.style.setProperty("--_casl",this.casl.toString()),this.style.setProperty("--_wght",this.wght.toString()),this.style.setProperty("--_slnt",this.slnt.toString()),this.style.setProperty("--_crsv",this.crsv.toString()),oe`<slot></slot>`}};Ye([Y({type:String,attribute:"family",reflect:!0})],je.prototype,"family",2);Ye([Y({type:String,attribute:"size",reflect:!0})],je.prototype,"size",2);Ye([Y({type:Number,attribute:"mono",reflect:!0})],je.prototype,"mono",2);Ye([Y({type:Number,attribute:"casl",reflect:!0})],je.prototype,"casl",2);Ye([Y({type:Number,attribute:"wght",reflect:!0})],je.prototype,"wght",2);Ye([Y({type:Number,attribute:"slnt",reflect:!0})],je.prototype,"slnt",2);Ye([Y({type:Number,attribute:"crsv",reflect:!0})],je.prototype,"crsv",2);je=Ye([ge("ui-text")],je);const ks=je;var Zl=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,no=(s,e,t,i)=>{for(var r=i>1?void 0:i?Kl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Zl(e,t,r),r};let Zr=class extends ks{constructor(){super(...arguments),this.mono=.25,this.casl=1,this.wght=750,this.slnt=0}render(){switch(this.level){case 6:this.size="0.75rem";break;case 5:this.size="1rem";break;case 4:this.size="1.25rem";break;case 3:this.size="1.5rem";break;case 2:this.size="1.75rem";break;case 1:this.size="2rem";break}return super.render()}};no([Y({type:Number,attribute:"level",reflect:!0})],Zr.prototype,"level",2);Zr=no([ge("ui-heading")],Zr);var Jl=Object.defineProperty,Yl=Object.getOwnPropertyDescriptor,kr=(s,e,t,i)=>{for(var r=i>1?void 0:i?Yl(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Jl(e,t,r),r};let Nt=class extends de{constructor(){super(...arguments),this.rippleCleanUp=null,this.clickHandler=async s=>{s.currentTarget&&[...s.currentTarget.children].forEach(e=>{e.click()})},this.childClickHandler=async s=>{s.stopPropagation()},this.ripple=!1}static get styles(){return ye`
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
        `}firstUpdated(s){super.firstUpdated(s),this.ripple?this.enableRipple():this.disableRipple()}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"ripple":this.ripple?this.enableRipple():this.disableRipple()}}async enableRipple(){var s;if(this.rippleCleanUp)return;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("div");e&&(this.rippleCleanUp=wr(e),this.role="button",this.style.cursor="pointer",this.addEventListener("click",this.clickHandler),[...this.children].forEach(t=>{t.addEventListener("click",this.childClickHandler)}))}async disableRipple(){this.rippleCleanUp&&(this.style.cursor="default",this.role=null,this.rippleCleanUp(),this.rippleCleanUp=null,this.removeEventListener("click",this.clickHandler),[...this.children].forEach(s=>{s.removeEventListener("click",this.childClickHandler)}))}};kr([Y({type:String,attribute:"primary",reflect:!0})],Nt.prototype,"primary",2);kr([Y({type:String,attribute:"secondary",reflect:!0})],Nt.prototype,"secondary",2);kr([Y({type:Boolean,attribute:"ripple",reflect:!0})],Nt.prototype,"ripple",2);Nt=kr([ge("ui-label")],Nt);var Xl=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let pi=class extends ks{constructor(){super(...arguments),this.size="1.1rem",this.wght=425}};pi=Xl([ge("ui-primary")],pi);var Ql=(s,e,t,i)=>{for(var r=e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let hi=class extends ks{constructor(){super(...arguments),this.size="0.9rem",this.wght=350,this.slnt=-15}};hi=Ql([ge("ui-secondary")],hi);var ec=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,Qt=(s,e,t,i)=>{for(var r=i>1?void 0:i?tc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ec(e,t,r),r};let At=class extends de{constructor(){super(...arguments),this.themesPath="themes",this.media=null}get target(){return document.body}get mediaHandler(){return s=>{s.matches?this.target.setAttribute("data-theme","dark"):this.target.setAttribute("data-theme","light")}}static get styles(){return ye`
            :host {
                display: none;
            }
        `}firstUpdated(s){this.hasAttribute("theme")||this.handleTheme()}attributeChangedCallback(s,e,t){switch(super.attributeChangedCallback(s,e,t),s){case"auto":this.handleAuto();break;case"mode":this.handleMode();break;case"theme":this.handleTheme();break}}handleAuto(){if(!this.auto){if(console.debug("[ui][ui-theme-handler] Disable auto mode"),!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null;return}if(this.mode=null,console.debug("[ui][ui-theme-handler] Enable auto mode"),this.media){this.mediaHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}handleMode(){console.debug(`[ui][ui-theme-handler] Set mode ${this.mode}`),this.mode?this.target.setAttribute("data-theme",this.mode):this.target.removeAttribute("data-theme")}handleTheme(){const s=document.head;console.debug(`[ui][ui-theme-handler] Load theme from "${this.themesPath}/${this.theme}"`),s.querySelectorAll("link.theme").forEach(t=>{s.removeChild(t)});const e=document.createElement("link");e.classList.add("theme"),e.rel="stylesheet",e.href=`${this.themesPath}/${this.theme}.css`,s.appendChild(e)}};Qt([Y({type:Boolean,attribute:"auto",reflect:!0})],At.prototype,"auto",2);Qt([Y({type:String,attribute:"mode",reflect:!0})],At.prototype,"mode",2);Qt([Y({type:String,attribute:"theme",reflect:!0})],At.prototype,"theme",2);Qt([Y({type:String,attribute:"themes-path",reflect:!0})],At.prototype,"themesPath",2);At=Qt([ge("ui-theme-handler")],At);var rc=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,Tr=(s,e,t,i)=>{for(var r=i>1?void 0:i?sc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&rc(e,t,r),r};let qt=class extends vs{constructor(){super(...arguments),this.revision=0,this.gistID="",this.cleanup=new Wi}createRenderRoot(){return this}render(){return oe`
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
                        @click=${async()=>{if(this.storeKey)try{this.startSpinner(),confirm("Alle Ihre Änderungen gehen verloren!")&&await Hi(this.storeKey,this.gistID)}finally{this.stopSpinner()}}}
                    >
                        Aktualisieren
                    </ui-button>
                </ui-flex-grid-item>
            </ui-flex-grid>

            <ui-spinner
                style="${ds({position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"none"})}"
            ></ui-spinner>
        `}connectedCallback(){super.connectedCallback();const s=we.queryStore();this.cleanup.add(s.addListener("gist",e=>{if(!this.storeKey)return;const t=De(this.storeKey),i=e[t.key()];i!==void 0&&(this.gistID=i.id,this.revision=i.revision)},!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}startSpinner(){this.querySelector("ui-spinner").style.display="block"}stopSpinner(){this.querySelector("ui-spinner").style.display="none"}};Tr([xe({type:String,attribute:"store-key",reflect:!0})],qt.prototype,"storeKey",2);Tr([xe({type:Number,attribute:!1,reflect:!0})],qt.prototype,"revision",2);Tr([xe({type:String,attribute:!1,reflect:!0})],qt.prototype,"gistID",2);qt=Tr([Ue("pg-drawer-item-gist")],qt);var ao={exports:{}};(function(s,e){(function(t,i){i()})(Ge,function(){function t(f,m){return typeof m>"u"?m={autoBom:!1}:typeof m!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),m={autoBom:!m}),m.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function i(f,m,h){var b=new XMLHttpRequest;b.open("GET",f),b.responseType="blob",b.onload=function(){c(b.response,m,h)},b.onerror=function(){console.error("could not download file")},b.send()}function r(f){var m=new XMLHttpRequest;m.open("HEAD",f,!1);try{m.send()}catch{}return 200<=m.status&&299>=m.status}function n(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var m=document.createEvent("MouseEvents");m.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(m)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ge=="object"&&Ge.global===Ge?Ge:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(f,m,h){var b=o.URL||o.webkitURL,p=document.createElement("a");m=m||f.name||"download",p.download=m,p.rel="noopener",typeof f=="string"?(p.href=f,p.origin===location.origin?n(p):r(p.href)?i(f,m,h):n(p,p.target="_blank")):(p.href=b.createObjectURL(f),setTimeout(function(){b.revokeObjectURL(p.href)},4e4),setTimeout(function(){n(p)},0))}:"msSaveOrOpenBlob"in navigator?function(f,m,h){if(m=m||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(t(f,h),m);else if(r(f))i(f,m,h);else{var b=document.createElement("a");b.href=f,b.target="_blank",setTimeout(function(){n(b)})}}:function(f,m,h,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof f=="string")return i(f,m,h);var p=f.type==="application/octet-stream",w=/constructor/i.test(o.HTMLElement)||o.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||p&&w||a)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var S=_.result;S=d?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=S:location=S,b=null},_.readAsDataURL(f)}else{var g=o.URL||o.webkitURL,k=g.createObjectURL(f);b?b.location=k:location.href=k,b=null,setTimeout(function(){g.revokeObjectURL(k)},4e4)}});o.saveAs=c.saveAs=c,s.exports=c})})(ao);var ic=ao.exports;const oc=ns(ic);function er(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var lo={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(s,e){(function(t){s.exports=t()})(function(){return function t(i,r,n){function o(f,m){if(!r[f]){if(!i[f]){var h=typeof er=="function"&&er;if(!m&&h)return h(f,!0);if(a)return a(f,!0);var b=new Error("Cannot find module '"+f+"'");throw b.code="MODULE_NOT_FOUND",b}var p=r[f]={exports:{}};i[f][0].call(p.exports,function(w){var d=i[f][1][w];return o(d||w)},p,p.exports,t,i,r,n)}return r[f].exports}for(var a=typeof er=="function"&&er,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(t,i,r){var n=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(c){for(var f,m,h,b,p,w,d,_=[],g=0,k=c.length,S=k,x=n.getTypeOf(c)!=="string";g<c.length;)S=k-g,h=x?(f=c[g++],m=g<k?c[g++]:0,g<k?c[g++]:0):(f=c.charCodeAt(g++),m=g<k?c.charCodeAt(g++):0,g<k?c.charCodeAt(g++):0),b=f>>2,p=(3&f)<<4|m>>4,w=1<S?(15&m)<<2|h>>6:64,d=2<S?63&h:64,_.push(a.charAt(b)+a.charAt(p)+a.charAt(w)+a.charAt(d));return _.join("")},r.decode=function(c){var f,m,h,b,p,w,d=0,_=0,g="data:";if(c.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var k,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===a.charAt(64)&&S--,c.charAt(c.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=o.uint8array?new Uint8Array(0|S):new Array(0|S);d<c.length;)f=a.indexOf(c.charAt(d++))<<2|(b=a.indexOf(c.charAt(d++)))>>4,m=(15&b)<<4|(p=a.indexOf(c.charAt(d++)))>>2,h=(3&p)<<6|(w=a.indexOf(c.charAt(d++))),k[_++]=f,p!==64&&(k[_++]=m),w!==64&&(k[_++]=h);return k}},{"./support":30,"./utils":32}],2:[function(t,i,r){var n=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),c=t("./stream/DataLengthProbe");function f(m,h,b,p,w){this.compressedSize=m,this.uncompressedSize=h,this.crc32=b,this.compression=p,this.compressedContent=w}f.prototype={getContentWorker:function(){var m=new o(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),h=this;return m.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),m},getCompressedWorker:function(){return new o(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(m,h,b){return m.pipe(new a).pipe(new c("uncompressedSize")).pipe(h.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression",h)},i.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,r){var n=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,r){var n=t("./utils"),o=function(){for(var a,c=[],f=0;f<256;f++){a=f;for(var m=0;m<8;m++)a=1&a?3988292384^a>>>1:a>>>1;c[f]=a}return c}();i.exports=function(a,c){return a!==void 0&&a.length?n.getTypeOf(a)!=="string"?function(f,m,h,b){var p=o,w=b+h;f^=-1;for(var d=b;d<w;d++)f=f>>>8^p[255&(f^m[d])];return-1^f}(0|c,a,a.length,0):function(f,m,h,b){var p=o,w=b+h;f^=-1;for(var d=b;d<w;d++)f=f>>>8^p[255&(f^m.charCodeAt(d))];return-1^f}(0|c,a,a.length,0):0}},{"./utils":32}],5:[function(t,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,i,r){var n=null;n=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:n}},{lie:37}],7:[function(t,i,r){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),c=t("./stream/GenericWorker"),f=n?"uint8array":"array";function m(h,b){c.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=b,this.meta={}}r.magic="\b\0",a.inherits(m,c),m.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(f,h.data),!1)},m.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},m.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},m.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(b){h.push({data:b,meta:h.meta})}},r.compressWorker=function(h){return new m("Deflate",h)},r.uncompressWorker=function(){return new m("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,r){function n(p,w){var d,_="";for(d=0;d<w;d++)_+=String.fromCharCode(255&p),p>>>=8;return _}function o(p,w,d,_,g,k){var S,x,C=p.file,z=p.compression,U=k!==f.utf8encode,V=a.transformTo("string",k(C.name)),D=a.transformTo("string",f.utf8encode(C.name)),X=C.comment,ae=a.transformTo("string",k(X)),T=a.transformTo("string",f.utf8encode(X)),j=D.length!==C.name.length,u=T.length!==X.length,B="",ce="",H="",ue=C.dir,Z=C.date,le={crc32:0,compressedSize:0,uncompressedSize:0};w&&!d||(le.crc32=p.crc32,le.compressedSize=p.compressedSize,le.uncompressedSize=p.uncompressedSize);var L=0;w&&(L|=8),U||!j&&!u||(L|=2048);var $=0,ne=0;ue&&($|=16),g==="UNIX"?(ne=798,$|=function(Q,ve){var ke=Q;return Q||(ke=ve?16893:33204),(65535&ke)<<16}(C.unixPermissions,ue)):(ne=20,$|=function(Q){return 63&(Q||0)}(C.dosPermissions)),S=Z.getUTCHours(),S<<=6,S|=Z.getUTCMinutes(),S<<=5,S|=Z.getUTCSeconds()/2,x=Z.getUTCFullYear()-1980,x<<=4,x|=Z.getUTCMonth()+1,x<<=5,x|=Z.getUTCDate(),j&&(ce=n(1,1)+n(m(V),4)+D,B+="up"+n(ce.length,2)+ce),u&&(H=n(1,1)+n(m(ae),4)+T,B+="uc"+n(H.length,2)+H);var ee="";return ee+=`
\0`,ee+=n(L,2),ee+=z.magic,ee+=n(S,2),ee+=n(x,2),ee+=n(le.crc32,4),ee+=n(le.compressedSize,4),ee+=n(le.uncompressedSize,4),ee+=n(V.length,2),ee+=n(B.length,2),{fileRecord:h.LOCAL_FILE_HEADER+ee+V+B,dirRecord:h.CENTRAL_FILE_HEADER+n(ne,2)+ee+n(ae.length,2)+"\0\0\0\0"+n($,4)+n(_,4)+V+B+ae}}var a=t("../utils"),c=t("../stream/GenericWorker"),f=t("../utf8"),m=t("../crc32"),h=t("../signature");function b(p,w,d,_){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=d,this.encodeFileName=_,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(b,c),b.prototype.push=function(p){var w=p.meta.percent||0,d=this.entriesCount,_=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,c.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:d?(w+100*(d-_-1))/d:100}}))},b.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var w=this.streamFiles&&!p.file.dir;if(w){var d=o(p,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(p){this.accumulate=!1;var w=this.streamFiles&&!p.file.dir,d=o(p,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),w)this.push({data:function(_){return h.DATA_DESCRIPTOR+n(_.crc32,4)+n(_.compressedSize,4)+n(_.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var p=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var d=this.bytesWritten-p,_=function(g,k,S,x,C){var z=a.transformTo("string",C(x));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(g,2)+n(g,2)+n(k,4)+n(S,4)+n(z.length,2)+z}(this.dirRecords.length,d,p,this.zipComment,this.encodeFileName);this.push({data:_,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(p){this._sources.push(p);var w=this;return p.on("data",function(d){w.processChunk(d)}),p.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),p.on("error",function(d){w.error(d)}),this},b.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(p){var w=this._sources;if(!c.prototype.error.call(this,p))return!1;for(var d=0;d<w.length;d++)try{w[d].error(p)}catch{}return!0},b.prototype.lock=function(){c.prototype.lock.call(this);for(var p=this._sources,w=0;w<p.length;w++)p[w].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,r){var n=t("../compressions"),o=t("./ZipFileWorker");r.generateWorker=function(a,c,f){var m=new o(c.streamFiles,f,c.platform,c.encodeFileName),h=0;try{a.forEach(function(b,p){h++;var w=function(k,S){var x=k||S,C=n[x];if(!C)throw new Error(x+" is not a valid compression method !");return C}(p.options.compression,c.compression),d=p.options.compressionOptions||c.compressionOptions||{},_=p.dir,g=p.date;p._compressWorker(w,d).withStreamInfo("file",{name:b,dir:_,date:g,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(m)}),m.entriesCount=h}catch(b){m.error(b)}return m}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,r){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new n;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(n.prototype=t("./object")).loadAsync=t("./load"),n.support=t("./support"),n.defaults=t("./defaults"),n.version="3.10.1",n.loadAsync=function(o,a){return new n().loadAsync(o,a)},n.external=t("./external"),i.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,r){var n=t("./utils"),o=t("./external"),a=t("./utf8"),c=t("./zipEntries"),f=t("./stream/Crc32Probe"),m=t("./nodejsUtils");function h(b){return new o.Promise(function(p,w){var d=b.decompressed.getContentWorker().pipe(new f);d.on("error",function(_){w(_)}).on("end",function(){d.streamInfo.crc32!==b.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(b,p){var w=this;return p=n.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),m.isNode&&m.isStream(b)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",b,!0,p.optimizedBinaryString,p.base64).then(function(d){var _=new c(p);return _.load(d),_}).then(function(d){var _=[o.Promise.resolve(d)],g=d.files;if(p.checkCRC32)for(var k=0;k<g.length;k++)_.push(h(g[k]));return o.Promise.all(_)}).then(function(d){for(var _=d.shift(),g=_.files,k=0;k<g.length;k++){var S=g[k],x=S.fileNameStr,C=n.resolve(S.fileNameStr);w.file(C,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:p.createFolders}),S.dir||(w.file(C).unsafeOriginalName=x)}return _.zipComment.length&&(w.comment=_.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,r){var n=t("../utils"),o=t("../stream/GenericWorker");function a(c,f){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(f)}n.inherits(a,o),a.prototype._bindStream=function(c){var f=this;(this._stream=c).pause(),c.on("data",function(m){f.push({data:m,meta:{percent:0}})}).on("error",function(m){f.isPaused?this.generatedError=m:f.error(m)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,r){var n=t("readable-stream").Readable;function o(a,c,f){n.call(this,c),this._helper=a;var m=this;a.on("data",function(h,b){m.push(h)||m._helper.pause(),f&&f(b)}).on("error",function(h){m.emit("error",h)}).on("end",function(){m.push(null)})}t("../utils").inherits(o,n),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,o);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,o)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var o=new Buffer(n);return o.fill(0),o},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(t,i,r){function n(C,z,U){var V,D=a.getTypeOf(z),X=a.extend(U||{},m);X.date=X.date||new Date,X.compression!==null&&(X.compression=X.compression.toUpperCase()),typeof X.unixPermissions=="string"&&(X.unixPermissions=parseInt(X.unixPermissions,8)),X.unixPermissions&&16384&X.unixPermissions&&(X.dir=!0),X.dosPermissions&&16&X.dosPermissions&&(X.dir=!0),X.dir&&(C=g(C)),X.createFolders&&(V=_(C))&&k.call(this,V,!0);var ae=D==="string"&&X.binary===!1&&X.base64===!1;U&&U.binary!==void 0||(X.binary=!ae),(z instanceof h&&z.uncompressedSize===0||X.dir||!z||z.length===0)&&(X.base64=!1,X.binary=!0,z="",X.compression="STORE",D="string");var T=null;T=z instanceof h||z instanceof c?z:w.isNode&&w.isStream(z)?new d(C,z):a.prepareContent(C,z,X.binary,X.optimizedBinaryString,X.base64);var j=new b(C,T,X);this.files[C]=j}var o=t("./utf8"),a=t("./utils"),c=t("./stream/GenericWorker"),f=t("./stream/StreamHelper"),m=t("./defaults"),h=t("./compressedObject"),b=t("./zipObject"),p=t("./generate"),w=t("./nodejsUtils"),d=t("./nodejs/NodejsStreamInputAdapter"),_=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var z=C.lastIndexOf("/");return 0<z?C.substring(0,z):""},g=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},k=function(C,z){return z=z!==void 0?z:m.createFolders,C=g(C),this.files[C]||n.call(this,C,null,{dir:!0,createFolders:z}),this.files[C]};function S(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var x={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var z,U,V;for(z in this.files)V=this.files[z],(U=z.slice(this.root.length,z.length))&&z.slice(0,this.root.length)===this.root&&C(U,V)},filter:function(C){var z=[];return this.forEach(function(U,V){C(U,V)&&z.push(V)}),z},file:function(C,z,U){if(arguments.length!==1)return C=this.root+C,n.call(this,C,z,U),this;if(S(C)){var V=C;return this.filter(function(X,ae){return!ae.dir&&V.test(X)})}var D=this.files[this.root+C];return D&&!D.dir?D:null},folder:function(C){if(!C)return this;if(S(C))return this.filter(function(D,X){return X.dir&&C.test(D)});var z=this.root+C,U=k.call(this,z),V=this.clone();return V.root=U.name,V},remove:function(C){C=this.root+C;var z=this.files[C];if(z||(C.slice(-1)!=="/"&&(C+="/"),z=this.files[C]),z&&!z.dir)delete this.files[C];else for(var U=this.filter(function(D,X){return X.name.slice(0,C.length)===C}),V=0;V<U.length;V++)delete this.files[U[V].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var z,U={};try{if((U=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=U.type.toLowerCase(),U.compression=U.compression.toUpperCase(),U.type==="binarystring"&&(U.type="string"),!U.type)throw new Error("No output type specified.");a.checkSupport(U.type),U.platform!=="darwin"&&U.platform!=="freebsd"&&U.platform!=="linux"&&U.platform!=="sunos"||(U.platform="UNIX"),U.platform==="win32"&&(U.platform="DOS");var V=U.comment||this.comment||"";z=p.generateWorker(this,U,V)}catch(D){(z=new c("error")).error(D)}return new f(z,U.type||"string",U.mimeType)},generateAsync:function(C,z){return this.generateInternalStream(C).accumulate(z)},generateNodeStream:function(C,z){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(z)}};i.exports=x},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,r){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,r){var n=t("./DataReader");function o(a){n.call(this,a);for(var c=0;c<this.data.length;c++)a[c]=255&a[c]}t("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var c=a.charCodeAt(0),f=a.charCodeAt(1),m=a.charCodeAt(2),h=a.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===c&&this.data[b+1]===f&&this.data[b+2]===m&&this.data[b+3]===h)return b-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var c=a.charCodeAt(0),f=a.charCodeAt(1),m=a.charCodeAt(2),h=a.charCodeAt(3),b=this.readData(4);return c===b[0]&&f===b[1]&&m===b[2]&&h===b[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,i,r){var n=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var c,f=0;for(this.checkOffset(a),c=this.index+a-1;c>=this.index;c--)f=(f<<8)+this.byteAt(c);return this.index+=a,f},readString:function(a){return n.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(t,i,r){var n=t("./Uint8ArrayReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,r){var n=t("./DataReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,i,r){var n=t("./ArrayReader");function o(a){n.call(this,a)}t("../utils").inherits(o,n),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,r){var n=t("../utils"),o=t("../support"),a=t("./ArrayReader"),c=t("./StringReader"),f=t("./NodeBufferReader"),m=t("./Uint8ArrayReader");i.exports=function(h){var b=n.getTypeOf(h);return n.checkSupport(b),b!=="string"||o.uint8array?b==="nodebuffer"?new f(h):o.uint8array?new m(n.transformTo("uint8array",h)):new a(n.transformTo("array",h)):new c(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,r){var n=t("./GenericWorker"),o=t("../utils");function a(c){n.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(a,n),a.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,r){var n=t("./GenericWorker"),o=t("../crc32");function a(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,n),a.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,r){var n=t("../utils"),o=t("./GenericWorker");function a(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(a,o),a.prototype.processChunk=function(c){if(c){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+c.data.length}o.prototype.processChunk.call(this,c)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,r){var n=t("../utils"),o=t("./GenericWorker");function a(c){o.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(m){f.dataIsReady=!0,f.data=m,f.max=m&&m.length||0,f.type=n.getTypeOf(m),f.isPaused||f._tickAndRepeat()},function(m){f.error(m)})}n.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,f);break;case"uint8array":c=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":c=this.data.slice(this.index,f)}return this.index=f,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,r){function n(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(c){a.processChunk(c)}),o.on("end",function(){a.end()}),o.on("error",function(c){a.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=n},{}],29:[function(t,i,r){var n=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),c=t("../base64"),f=t("../support"),m=t("../external"),h=null;if(f.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(w,d){return new m.Promise(function(_,g){var k=[],S=w._internalType,x=w._outputType,C=w._mimeType;w.on("data",function(z,U){k.push(z),d&&d(U)}).on("error",function(z){k=[],g(z)}).on("end",function(){try{var z=function(U,V,D){switch(U){case"blob":return n.newBlob(n.transformTo("arraybuffer",V),D);case"base64":return c.encode(V);default:return n.transformTo(U,V)}}(x,function(U,V){var D,X=0,ae=null,T=0;for(D=0;D<V.length;D++)T+=V[D].length;switch(U){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(ae=new Uint8Array(T),D=0;D<V.length;D++)ae.set(V[D],X),X+=V[D].length;return ae;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+U+"'")}}(S,k),C);_(z)}catch(U){g(U)}k=[]}).resume()})}function p(w,d,_){var g=d;switch(d){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=d,this._mimeType=_,n.checkSupport(g),this._worker=w.pipe(new o(g)),w.lock()}catch(k){this._worker=new a("error"),this._worker.error(k)}}p.prototype={accumulate:function(w){return b(this,w)},on:function(w,d){var _=this;return w==="data"?this._worker.on(w,function(g){d.call(_,g.data,g.meta)}):this._worker.on(w,function(){n.delay(d,arguments,_)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},w)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(n),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,r){for(var n=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),c=t("./stream/GenericWorker"),f=new Array(256),m=0;m<256;m++)f[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;f[254]=f[254]=1;function h(){c.call(this,"utf-8 decode"),this.leftOver=null}function b(){c.call(this,"utf-8 encode")}r.utf8encode=function(p){return o.nodebuffer?a.newBufferFrom(p,"utf-8"):function(w){var d,_,g,k,S,x=w.length,C=0;for(k=0;k<x;k++)(64512&(_=w.charCodeAt(k)))==55296&&k+1<x&&(64512&(g=w.charCodeAt(k+1)))==56320&&(_=65536+(_-55296<<10)+(g-56320),k++),C+=_<128?1:_<2048?2:_<65536?3:4;for(d=o.uint8array?new Uint8Array(C):new Array(C),k=S=0;S<C;k++)(64512&(_=w.charCodeAt(k)))==55296&&k+1<x&&(64512&(g=w.charCodeAt(k+1)))==56320&&(_=65536+(_-55296<<10)+(g-56320),k++),_<128?d[S++]=_:(_<2048?d[S++]=192|_>>>6:(_<65536?d[S++]=224|_>>>12:(d[S++]=240|_>>>18,d[S++]=128|_>>>12&63),d[S++]=128|_>>>6&63),d[S++]=128|63&_);return d}(p)},r.utf8decode=function(p){return o.nodebuffer?n.transformTo("nodebuffer",p).toString("utf-8"):function(w){var d,_,g,k,S=w.length,x=new Array(2*S);for(d=_=0;d<S;)if((g=w[d++])<128)x[_++]=g;else if(4<(k=f[g]))x[_++]=65533,d+=k-1;else{for(g&=k===2?31:k===3?15:7;1<k&&d<S;)g=g<<6|63&w[d++],k--;1<k?x[_++]=65533:g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|1023&g)}return x.length!==_&&(x.subarray?x=x.subarray(0,_):x.length=_),n.applyFromCharCode(x)}(p=n.transformTo(o.uint8array?"uint8array":"array",p))},n.inherits(h,c),h.prototype.processChunk=function(p){var w=n.transformTo(o.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var d=w;(w=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),w.set(d,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var _=function(k,S){var x;for((S=S||k.length)>k.length&&(S=k.length),x=S-1;0<=x&&(192&k[x])==128;)x--;return x<0||x===0?S:x+f[k[x]]>S?x:S}(w),g=w;_!==w.length&&(o.uint8array?(g=w.subarray(0,_),this.leftOver=w.subarray(_,w.length)):(g=w.slice(0,_),this.leftOver=w.slice(_,w.length))),this.push({data:r.utf8decode(g),meta:p.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=h,n.inherits(b,c),b.prototype.processChunk=function(p){this.push({data:r.utf8encode(p.data),meta:p.meta})},r.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,r){var n=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),c=t("./external");function f(d){return d}function m(d,_){for(var g=0;g<d.length;++g)_[g]=255&d.charCodeAt(g);return _}t("setimmediate"),r.newBlob=function(d,_){r.checkSupport("blob");try{return new Blob([d],{type:_})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(d),g.getBlob(_)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(d,_,g){var k=[],S=0,x=d.length;if(x<=g)return String.fromCharCode.apply(null,d);for(;S<x;)_==="array"||_==="nodebuffer"?k.push(String.fromCharCode.apply(null,d.slice(S,Math.min(S+g,x)))):k.push(String.fromCharCode.apply(null,d.subarray(S,Math.min(S+g,x)))),S+=g;return k.join("")},stringifyByChar:function(d){for(var _="",g=0;g<d.length;g++)_+=String.fromCharCode(d[g]);return _},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function b(d){var _=65536,g=r.getTypeOf(d),k=!0;if(g==="uint8array"?k=h.applyCanBeUsed.uint8array:g==="nodebuffer"&&(k=h.applyCanBeUsed.nodebuffer),k)for(;1<_;)try{return h.stringifyByChunk(d,g,_)}catch{_=Math.floor(_/2)}return h.stringifyByChar(d)}function p(d,_){for(var g=0;g<d.length;g++)_[g]=d[g];return _}r.applyFromCharCode=b;var w={};w.string={string:f,array:function(d){return m(d,new Array(d.length))},arraybuffer:function(d){return w.string.uint8array(d).buffer},uint8array:function(d){return m(d,new Uint8Array(d.length))},nodebuffer:function(d){return m(d,a.allocBuffer(d.length))}},w.array={string:b,array:f,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return a.newBufferFrom(d)}},w.arraybuffer={string:function(d){return b(new Uint8Array(d))},array:function(d){return p(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:f,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return a.newBufferFrom(new Uint8Array(d))}},w.uint8array={string:b,array:function(d){return p(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:f,nodebuffer:function(d){return a.newBufferFrom(d)}},w.nodebuffer={string:b,array:function(d){return p(d,new Array(d.length))},arraybuffer:function(d){return w.nodebuffer.uint8array(d).buffer},uint8array:function(d){return p(d,new Uint8Array(d.length))},nodebuffer:f},r.transformTo=function(d,_){if(_=_||"",!d)return _;r.checkSupport(d);var g=r.getTypeOf(_);return w[g][d](_)},r.resolve=function(d){for(var _=d.split("/"),g=[],k=0;k<_.length;k++){var S=_[k];S==="."||S===""&&k!==0&&k!==_.length-1||(S===".."?g.pop():g.push(S))}return g.join("/")},r.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":n.nodebuffer&&a.isBuffer(d)?"nodebuffer":n.uint8array&&d instanceof Uint8Array?"uint8array":n.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(d){if(!n[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(d){var _,g,k="";for(g=0;g<(d||"").length;g++)k+="\\x"+((_=d.charCodeAt(g))<16?"0":"")+_.toString(16).toUpperCase();return k},r.delay=function(d,_,g){setImmediate(function(){d.apply(g||null,_||[])})},r.inherits=function(d,_){function g(){}g.prototype=_.prototype,d.prototype=new g},r.extend=function(){var d,_,g={};for(d=0;d<arguments.length;d++)for(_ in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],_)&&g[_]===void 0&&(g[_]=arguments[d][_]);return g},r.prepareContent=function(d,_,g,k,S){return c.Promise.resolve(_).then(function(x){return n.blob&&(x instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(x))!==-1)&&typeof FileReader<"u"?new c.Promise(function(C,z){var U=new FileReader;U.onload=function(V){C(V.target.result)},U.onerror=function(V){z(V.target.error)},U.readAsArrayBuffer(x)}):x}).then(function(x){var C=r.getTypeOf(x);return C?(C==="arraybuffer"?x=r.transformTo("uint8array",x):C==="string"&&(S?x=o.decode(x):g&&k!==!0&&(x=function(z){return m(z,n.uint8array?new Uint8Array(z.length):new Array(z.length))}(x))),x):c.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,r){var n=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),c=t("./zipEntry"),f=t("./support");function m(h){this.files=[],this.loadOptions=h}m.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(b)+", expected "+o.pretty(h)+")")}},isSignature:function(h,b){var p=this.reader.index;this.reader.setIndex(h);var w=this.reader.readString(4)===b;return this.reader.setIndex(p),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),b=f.uint8array?"uint8array":"array",p=o.transformTo(b,h);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,b,p,w=this.zip64EndOfCentralSize-44;0<w;)h=this.reader.readInt(2),b=this.reader.readInt(4),p=this.reader.readData(b),this.zip64ExtensibleData[h]={id:h,length:b,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,b;for(h=0;h<this.files.length;h++)b=this.files[h],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(h=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var b=h;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var w=b-p;if(0<w)this.isSignature(b,a.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(h){this.reader=n(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=m},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,r){var n=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),c=t("./crc32"),f=t("./utf8"),m=t("./compressions"),h=t("./support");function b(p,w){this.options=p,this.loadOptions=w}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var w,d;if(p.skip(22),this.fileNameLength=p.readInt(2),d=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(_){for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)&&m[g].magic===_)return m[g];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,w,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var w=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(w),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=n(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var w,d,_,g=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<g;)w=p.readInt(2),d=p.readInt(2),_=p.readData(d),this.extraFields[w]={id:w,length:d,value:_};p.setIndex(g)},handleUTF8:function(){var p=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var d=o.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var _=this.findExtraFieldUnicodeComment();if(_!==null)this.fileCommentStr=_;else{var g=o.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var w=n(p.value);return w.readInt(1)!==1||c(this.fileName)!==w.readInt(4)?null:f.utf8decode(w.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var w=n(p.value);return w.readInt(1)!==1||c(this.fileComment)!==w.readInt(4)?null:f.utf8decode(w.readData(p.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,r){function n(w,d,_){this.name=w,this.dir=_.dir,this.date=_.date,this.comment=_.comment,this.unixPermissions=_.unixPermissions,this.dosPermissions=_.dosPermissions,this._data=d,this._dataBinary=_.binary,this.options={compression:_.compression,compressionOptions:_.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),c=t("./utf8"),f=t("./compressedObject"),m=t("./stream/GenericWorker");n.prototype={internalStream:function(w){var d=null,_="string";try{if(!w)throw new Error("No output type specified.");var g=(_=w.toLowerCase())==="string"||_==="text";_!=="binarystring"&&_!=="text"||(_="string"),d=this._decompressWorker();var k=!this._dataBinary;k&&!g&&(d=d.pipe(new c.Utf8EncodeWorker)),!k&&g&&(d=d.pipe(new c.Utf8DecodeWorker))}catch(S){(d=new m("error")).error(S)}return new o(d,_,"")},async:function(w,d){return this.internalStream(w).accumulate(d)},nodeStream:function(w,d){return this.internalStream(w||"nodebuffer").toNodejsStream(d)},_compressWorker:function(w,d){if(this._data instanceof f&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var _=this._decompressWorker();return this._dataBinary||(_=_.pipe(new c.Utf8EncodeWorker)),f.createWorkerFrom(_,w,d)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof m?this._data:new a(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<h.length;p++)n.prototype[h[p]]=b;i.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,r){(function(n){var o,a,c=n.MutationObserver||n.WebKitMutationObserver;if(c){var f=0,m=new c(w),h=n.document.createTextNode("");m.observe(h,{characterData:!0}),o=function(){h.data=f=++f%2}}else if(n.setImmediate||n.MessageChannel===void 0)o="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var d=n.document.createElement("script");d.onreadystatechange=function(){w(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},n.document.documentElement.appendChild(d)}:function(){setTimeout(w,0)};else{var b=new n.MessageChannel;b.port1.onmessage=w,o=function(){b.port2.postMessage(0)}}var p=[];function w(){var d,_;a=!0;for(var g=p.length;g;){for(_=p,p=[],d=-1;++d<g;)_[d]();g=p.length}a=!1}i.exports=function(d){p.push(d)!==1||a||o()}}).call(this,typeof Ge<"u"?Ge:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,r){var n=t("immediate");function o(){}var a={},c=["REJECTED"],f=["FULFILLED"],m=["PENDING"];function h(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,g!==o&&d(this,g)}function b(g,k,S){this.promise=g,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function p(g,k,S){n(function(){var x;try{x=k(S)}catch(C){return a.reject(g,C)}x===g?a.reject(g,new TypeError("Cannot resolve promise with itself")):a.resolve(g,x)})}function w(g){var k=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof k=="function")return function(){k.apply(g,arguments)}}function d(g,k){var S=!1;function x(U){S||(S=!0,a.reject(g,U))}function C(U){S||(S=!0,a.resolve(g,U))}var z=_(function(){k(C,x)});z.status==="error"&&x(z.value)}function _(g,k){var S={};try{S.value=g(k),S.status="success"}catch(x){S.status="error",S.value=x}return S}(i.exports=h).prototype.finally=function(g){if(typeof g!="function")return this;var k=this.constructor;return this.then(function(S){return k.resolve(g()).then(function(){return S})},function(S){return k.resolve(g()).then(function(){throw S})})},h.prototype.catch=function(g){return this.then(null,g)},h.prototype.then=function(g,k){if(typeof g!="function"&&this.state===f||typeof k!="function"&&this.state===c)return this;var S=new this.constructor(o);return this.state!==m?p(S,this.state===f?g:k,this.outcome):this.queue.push(new b(S,g,k)),S},b.prototype.callFulfilled=function(g){a.resolve(this.promise,g)},b.prototype.otherCallFulfilled=function(g){p(this.promise,this.onFulfilled,g)},b.prototype.callRejected=function(g){a.reject(this.promise,g)},b.prototype.otherCallRejected=function(g){p(this.promise,this.onRejected,g)},a.resolve=function(g,k){var S=_(w,k);if(S.status==="error")return a.reject(g,S.value);var x=S.value;if(x)d(g,x);else{g.state=f,g.outcome=k;for(var C=-1,z=g.queue.length;++C<z;)g.queue[C].callFulfilled(k)}return g},a.reject=function(g,k){g.state=c,g.outcome=k;for(var S=-1,x=g.queue.length;++S<x;)g.queue[S].callRejected(k);return g},h.resolve=function(g){return g instanceof this?g:a.resolve(new this(o),g)},h.reject=function(g){var k=new this(o);return a.reject(k,g)},h.all=function(g){var k=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=g.length,x=!1;if(!S)return this.resolve([]);for(var C=new Array(S),z=0,U=-1,V=new this(o);++U<S;)D(g[U],U);return V;function D(X,ae){k.resolve(X).then(function(T){C[ae]=T,++z!==S||x||(x=!0,a.resolve(V,C))},function(T){x||(x=!0,a.reject(V,T))})}},h.race=function(g){var k=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=g.length,x=!1;if(!S)return this.resolve([]);for(var C=-1,z=new this(o);++C<S;)U=g[C],k.resolve(U).then(function(V){x||(x=!0,a.resolve(z,V))},function(V){x||(x=!0,a.reject(z,V))});var U;return z}},{immediate:36}],38:[function(t,i,r){var n={};(0,t("./lib/utils/common").assign)(n,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,r){var n=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),c=t("./zlib/messages"),f=t("./zlib/zstream"),m=Object.prototype.toString,h=0,b=-1,p=0,w=8;function d(g){if(!(this instanceof d))return new d(g);this.options=o.assign({level:b,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},g||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var S=n.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(S!==h)throw new Error(c[S]);if(k.header&&n.deflateSetHeader(this.strm,k.header),k.dictionary){var x;if(x=typeof k.dictionary=="string"?a.string2buf(k.dictionary):m.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(S=n.deflateSetDictionary(this.strm,x))!==h)throw new Error(c[S]);this._dict_set=!0}}function _(g,k){var S=new d(k);if(S.push(g,!0),S.err)throw S.msg||c[S.err];return S.result}d.prototype.push=function(g,k){var S,x,C=this.strm,z=this.options.chunkSize;if(this.ended)return!1;x=k===~~k?k:k===!0?4:0,typeof g=="string"?C.input=a.string2buf(g):m.call(g)==="[object ArrayBuffer]"?C.input=new Uint8Array(g):C.input=g,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(z),C.next_out=0,C.avail_out=z),(S=n.deflate(C,x))!==1&&S!==h)return this.onEnd(S),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||x!==4&&x!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&S!==1);return x===4?(S=n.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===h):x!==2||(this.onEnd(h),!(C.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Deflate=d,r.deflate=_,r.deflateRaw=function(g,k){return(k=k||{}).raw=!0,_(g,k)},r.gzip=function(g,k){return(k=k||{}).gzip=!0,_(g,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,r){var n=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),c=t("./zlib/constants"),f=t("./zlib/messages"),m=t("./zlib/zstream"),h=t("./zlib/gzheader"),b=Object.prototype.toString;function p(d){if(!(this instanceof p))return new p(d);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},d||{});var _=this.options;_.raw&&0<=_.windowBits&&_.windowBits<16&&(_.windowBits=-_.windowBits,_.windowBits===0&&(_.windowBits=-15)),!(0<=_.windowBits&&_.windowBits<16)||d&&d.windowBits||(_.windowBits+=32),15<_.windowBits&&_.windowBits<48&&!(15&_.windowBits)&&(_.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var g=n.inflateInit2(this.strm,_.windowBits);if(g!==c.Z_OK)throw new Error(f[g]);this.header=new h,n.inflateGetHeader(this.strm,this.header)}function w(d,_){var g=new p(_);if(g.push(d,!0),g.err)throw g.msg||f[g.err];return g.result}p.prototype.push=function(d,_){var g,k,S,x,C,z,U=this.strm,V=this.options.chunkSize,D=this.options.dictionary,X=!1;if(this.ended)return!1;k=_===~~_?_:_===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof d=="string"?U.input=a.binstring2buf(d):b.call(d)==="[object ArrayBuffer]"?U.input=new Uint8Array(d):U.input=d,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new o.Buf8(V),U.next_out=0,U.avail_out=V),(g=n.inflate(U,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&D&&(z=typeof D=="string"?a.string2buf(D):b.call(D)==="[object ArrayBuffer]"?new Uint8Array(D):D,g=n.inflateSetDictionary(this.strm,z)),g===c.Z_BUF_ERROR&&X===!0&&(g=c.Z_OK,X=!1),g!==c.Z_STREAM_END&&g!==c.Z_OK)return this.onEnd(g),!(this.ended=!0);U.next_out&&(U.avail_out!==0&&g!==c.Z_STREAM_END&&(U.avail_in!==0||k!==c.Z_FINISH&&k!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=a.utf8border(U.output,U.next_out),x=U.next_out-S,C=a.buf2string(U.output,S),U.next_out=x,U.avail_out=V-x,x&&o.arraySet(U.output,U.output,S,x,0),this.onData(C)):this.onData(o.shrinkBuf(U.output,U.next_out)))),U.avail_in===0&&U.avail_out===0&&(X=!0)}while((0<U.avail_in||U.avail_out===0)&&g!==c.Z_STREAM_END);return g===c.Z_STREAM_END&&(k=c.Z_FINISH),k===c.Z_FINISH?(g=n.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===c.Z_OK):k!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(U.avail_out=0))},p.prototype.onData=function(d){this.chunks.push(d)},p.prototype.onEnd=function(d){d===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Inflate=p,r.inflate=w,r.inflateRaw=function(d,_){return(_=_||{}).raw=!0,w(d,_)},r.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,r){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(c){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var m=f.shift();if(m){if(typeof m!="object")throw new TypeError(m+"must be non-object");for(var h in m)m.hasOwnProperty(h)&&(c[h]=m[h])}}return c},r.shrinkBuf=function(c,f){return c.length===f?c:c.subarray?c.subarray(0,f):(c.length=f,c)};var o={arraySet:function(c,f,m,h,b){if(f.subarray&&c.subarray)c.set(f.subarray(m,m+h),b);else for(var p=0;p<h;p++)c[b+p]=f[m+p]},flattenChunks:function(c){var f,m,h,b,p,w;for(f=h=0,m=c.length;f<m;f++)h+=c[f].length;for(w=new Uint8Array(h),f=b=0,m=c.length;f<m;f++)p=c[f],w.set(p,b),b+=p.length;return w}},a={arraySet:function(c,f,m,h,b){for(var p=0;p<h;p++)c[b+p]=f[m+p]},flattenChunks:function(c){return[].concat.apply([],c)}};r.setTyped=function(c){c?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(n)},{}],42:[function(t,i,r){var n=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var c=new n.Buf8(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function m(h,b){if(b<65537&&(h.subarray&&a||!h.subarray&&o))return String.fromCharCode.apply(null,n.shrinkBuf(h,b));for(var p="",w=0;w<b;w++)p+=String.fromCharCode(h[w]);return p}c[254]=c[254]=1,r.string2buf=function(h){var b,p,w,d,_,g=h.length,k=0;for(d=0;d<g;d++)(64512&(p=h.charCodeAt(d)))==55296&&d+1<g&&(64512&(w=h.charCodeAt(d+1)))==56320&&(p=65536+(p-55296<<10)+(w-56320),d++),k+=p<128?1:p<2048?2:p<65536?3:4;for(b=new n.Buf8(k),d=_=0;_<k;d++)(64512&(p=h.charCodeAt(d)))==55296&&d+1<g&&(64512&(w=h.charCodeAt(d+1)))==56320&&(p=65536+(p-55296<<10)+(w-56320),d++),p<128?b[_++]=p:(p<2048?b[_++]=192|p>>>6:(p<65536?b[_++]=224|p>>>12:(b[_++]=240|p>>>18,b[_++]=128|p>>>12&63),b[_++]=128|p>>>6&63),b[_++]=128|63&p);return b},r.buf2binstring=function(h){return m(h,h.length)},r.binstring2buf=function(h){for(var b=new n.Buf8(h.length),p=0,w=b.length;p<w;p++)b[p]=h.charCodeAt(p);return b},r.buf2string=function(h,b){var p,w,d,_,g=b||h.length,k=new Array(2*g);for(p=w=0;p<g;)if((d=h[p++])<128)k[w++]=d;else if(4<(_=c[d]))k[w++]=65533,p+=_-1;else{for(d&=_===2?31:_===3?15:7;1<_&&p<g;)d=d<<6|63&h[p++],_--;1<_?k[w++]=65533:d<65536?k[w++]=d:(d-=65536,k[w++]=55296|d>>10&1023,k[w++]=56320|1023&d)}return m(k,w)},r.utf8border=function(h,b){var p;for((b=b||h.length)>h.length&&(b=h.length),p=b-1;0<=p&&(192&h[p])==128;)p--;return p<0||p===0?b:p+c[h[p]]>b?p:b}},{"./common":41}],43:[function(t,i,r){i.exports=function(n,o,a,c){for(var f=65535&n|0,m=n>>>16&65535|0,h=0;a!==0;){for(a-=h=2e3<a?2e3:a;m=m+(f=f+o[c++]|0)|0,--h;);f%=65521,m%=65521}return f|m<<16|0}},{}],44:[function(t,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,r){var n=function(){for(var o,a=[],c=0;c<256;c++){o=c;for(var f=0;f<8;f++)o=1&o?3988292384^o>>>1:o>>>1;a[c]=o}return a}();i.exports=function(o,a,c,f){var m=n,h=f+c;o^=-1;for(var b=f;b<h;b++)o=o>>>8^m[255&(o^a[b])];return-1^o}},{}],46:[function(t,i,r){var n,o=t("../utils/common"),a=t("./trees"),c=t("./adler32"),f=t("./crc32"),m=t("./messages"),h=0,b=4,p=0,w=-2,d=-1,_=4,g=2,k=8,S=9,x=286,C=30,z=19,U=2*x+1,V=15,D=3,X=258,ae=X+D+1,T=42,j=113,u=1,B=2,ce=3,H=4;function ue(l,I){return l.msg=m[I],I}function Z(l){return(l<<1)-(4<l?9:0)}function le(l){for(var I=l.length;0<=--I;)l[I]=0}function L(l){var I=l.state,G=I.pending;G>l.avail_out&&(G=l.avail_out),G!==0&&(o.arraySet(l.output,I.pending_buf,I.pending_out,G,l.next_out),l.next_out+=G,I.pending_out+=G,l.total_out+=G,l.avail_out-=G,I.pending-=G,I.pending===0&&(I.pending_out=0))}function $(l,I){a._tr_flush_block(l,0<=l.block_start?l.block_start:-1,l.strstart-l.block_start,I),l.block_start=l.strstart,L(l.strm)}function ne(l,I){l.pending_buf[l.pending++]=I}function ee(l,I){l.pending_buf[l.pending++]=I>>>8&255,l.pending_buf[l.pending++]=255&I}function Q(l,I){var G,E,v=l.max_chain_length,A=l.strstart,N=l.prev_length,q=l.nice_match,R=l.strstart>l.w_size-ae?l.strstart-(l.w_size-ae):0,K=l.window,te=l.w_mask,J=l.prev,ie=l.strstart+X,_e=K[A+N-1],he=K[A+N];l.prev_length>=l.good_match&&(v>>=2),q>l.lookahead&&(q=l.lookahead);do if(K[(G=I)+N]===he&&K[G+N-1]===_e&&K[G]===K[A]&&K[++G]===K[A+1]){A+=2,G++;do;while(K[++A]===K[++G]&&K[++A]===K[++G]&&K[++A]===K[++G]&&K[++A]===K[++G]&&K[++A]===K[++G]&&K[++A]===K[++G]&&K[++A]===K[++G]&&K[++A]===K[++G]&&A<ie);if(E=X-(ie-A),A=ie-X,N<E){if(l.match_start=I,q<=(N=E))break;_e=K[A+N-1],he=K[A+N]}}while((I=J[I&te])>R&&--v!=0);return N<=l.lookahead?N:l.lookahead}function ve(l){var I,G,E,v,A,N,q,R,K,te,J=l.w_size;do{if(v=l.window_size-l.lookahead-l.strstart,l.strstart>=J+(J-ae)){for(o.arraySet(l.window,l.window,J,J,0),l.match_start-=J,l.strstart-=J,l.block_start-=J,I=G=l.hash_size;E=l.head[--I],l.head[I]=J<=E?E-J:0,--G;);for(I=G=J;E=l.prev[--I],l.prev[I]=J<=E?E-J:0,--G;);v+=J}if(l.strm.avail_in===0)break;if(N=l.strm,q=l.window,R=l.strstart+l.lookahead,K=v,te=void 0,te=N.avail_in,K<te&&(te=K),G=te===0?0:(N.avail_in-=te,o.arraySet(q,N.input,N.next_in,te,R),N.state.wrap===1?N.adler=c(N.adler,q,te,R):N.state.wrap===2&&(N.adler=f(N.adler,q,te,R)),N.next_in+=te,N.total_in+=te,te),l.lookahead+=G,l.lookahead+l.insert>=D)for(A=l.strstart-l.insert,l.ins_h=l.window[A],l.ins_h=(l.ins_h<<l.hash_shift^l.window[A+1])&l.hash_mask;l.insert&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[A+D-1])&l.hash_mask,l.prev[A&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=A,A++,l.insert--,!(l.lookahead+l.insert<D)););}while(l.lookahead<ae&&l.strm.avail_in!==0)}function ke(l,I){for(var G,E;;){if(l.lookahead<ae){if(ve(l),l.lookahead<ae&&I===h)return u;if(l.lookahead===0)break}if(G=0,l.lookahead>=D&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+D-1])&l.hash_mask,G=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),G!==0&&l.strstart-G<=l.w_size-ae&&(l.match_length=Q(l,G)),l.match_length>=D)if(E=a._tr_tally(l,l.strstart-l.match_start,l.match_length-D),l.lookahead-=l.match_length,l.match_length<=l.max_lazy_match&&l.lookahead>=D){for(l.match_length--;l.strstart++,l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+D-1])&l.hash_mask,G=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart,--l.match_length!=0;);l.strstart++}else l.strstart+=l.match_length,l.match_length=0,l.ins_h=l.window[l.strstart],l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+1])&l.hash_mask;else E=a._tr_tally(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++;if(E&&($(l,!1),l.strm.avail_out===0))return u}return l.insert=l.strstart<D-1?l.strstart:D-1,I===b?($(l,!0),l.strm.avail_out===0?ce:H):l.last_lit&&($(l,!1),l.strm.avail_out===0)?u:B}function pe(l,I){for(var G,E,v;;){if(l.lookahead<ae){if(ve(l),l.lookahead<ae&&I===h)return u;if(l.lookahead===0)break}if(G=0,l.lookahead>=D&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+D-1])&l.hash_mask,G=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),l.prev_length=l.match_length,l.prev_match=l.match_start,l.match_length=D-1,G!==0&&l.prev_length<l.max_lazy_match&&l.strstart-G<=l.w_size-ae&&(l.match_length=Q(l,G),l.match_length<=5&&(l.strategy===1||l.match_length===D&&4096<l.strstart-l.match_start)&&(l.match_length=D-1)),l.prev_length>=D&&l.match_length<=l.prev_length){for(v=l.strstart+l.lookahead-D,E=a._tr_tally(l,l.strstart-1-l.prev_match,l.prev_length-D),l.lookahead-=l.prev_length-1,l.prev_length-=2;++l.strstart<=v&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+D-1])&l.hash_mask,G=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),--l.prev_length!=0;);if(l.match_available=0,l.match_length=D-1,l.strstart++,E&&($(l,!1),l.strm.avail_out===0))return u}else if(l.match_available){if((E=a._tr_tally(l,0,l.window[l.strstart-1]))&&$(l,!1),l.strstart++,l.lookahead--,l.strm.avail_out===0)return u}else l.match_available=1,l.strstart++,l.lookahead--}return l.match_available&&(E=a._tr_tally(l,0,l.window[l.strstart-1]),l.match_available=0),l.insert=l.strstart<D-1?l.strstart:D-1,I===b?($(l,!0),l.strm.avail_out===0?ce:H):l.last_lit&&($(l,!1),l.strm.avail_out===0)?u:B}function fe(l,I,G,E,v){this.good_length=l,this.max_lazy=I,this.nice_length=G,this.max_chain=E,this.func=v}function Ee(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*U),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*z+1)),le(this.dyn_ltree),le(this.dyn_dtree),le(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(V+1),this.heap=new o.Buf16(2*x+1),le(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*x+1),le(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function be(l){var I;return l&&l.state?(l.total_in=l.total_out=0,l.data_type=g,(I=l.state).pending=0,I.pending_out=0,I.wrap<0&&(I.wrap=-I.wrap),I.status=I.wrap?T:j,l.adler=I.wrap===2?0:1,I.last_flush=h,a._tr_init(I),p):ue(l,w)}function $e(l){var I=be(l);return I===p&&function(G){G.window_size=2*G.w_size,le(G.head),G.max_lazy_match=n[G.level].max_lazy,G.good_match=n[G.level].good_length,G.nice_match=n[G.level].nice_length,G.max_chain_length=n[G.level].max_chain,G.strstart=0,G.block_start=0,G.lookahead=0,G.insert=0,G.match_length=G.prev_length=D-1,G.match_available=0,G.ins_h=0}(l.state),I}function Le(l,I,G,E,v,A){if(!l)return w;var N=1;if(I===d&&(I=6),E<0?(N=0,E=-E):15<E&&(N=2,E-=16),v<1||S<v||G!==k||E<8||15<E||I<0||9<I||A<0||_<A)return ue(l,w);E===8&&(E=9);var q=new Ee;return(l.state=q).strm=l,q.wrap=N,q.gzhead=null,q.w_bits=E,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=v+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+D-1)/D),q.window=new o.Buf8(2*q.w_size),q.head=new o.Buf16(q.hash_size),q.prev=new o.Buf16(q.w_size),q.lit_bufsize=1<<v+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new o.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=I,q.strategy=A,q.method=G,$e(l)}n=[new fe(0,0,0,0,function(l,I){var G=65535;for(G>l.pending_buf_size-5&&(G=l.pending_buf_size-5);;){if(l.lookahead<=1){if(ve(l),l.lookahead===0&&I===h)return u;if(l.lookahead===0)break}l.strstart+=l.lookahead,l.lookahead=0;var E=l.block_start+G;if((l.strstart===0||l.strstart>=E)&&(l.lookahead=l.strstart-E,l.strstart=E,$(l,!1),l.strm.avail_out===0)||l.strstart-l.block_start>=l.w_size-ae&&($(l,!1),l.strm.avail_out===0))return u}return l.insert=0,I===b?($(l,!0),l.strm.avail_out===0?ce:H):(l.strstart>l.block_start&&($(l,!1),l.strm.avail_out),u)}),new fe(4,4,8,4,ke),new fe(4,5,16,8,ke),new fe(4,6,32,32,ke),new fe(4,4,16,16,pe),new fe(8,16,32,32,pe),new fe(8,16,128,128,pe),new fe(8,32,128,256,pe),new fe(32,128,258,1024,pe),new fe(32,258,258,4096,pe)],r.deflateInit=function(l,I){return Le(l,I,k,15,8,0)},r.deflateInit2=Le,r.deflateReset=$e,r.deflateResetKeep=be,r.deflateSetHeader=function(l,I){return l&&l.state?l.state.wrap!==2?w:(l.state.gzhead=I,p):w},r.deflate=function(l,I){var G,E,v,A;if(!l||!l.state||5<I||I<0)return l?ue(l,w):w;if(E=l.state,!l.output||!l.input&&l.avail_in!==0||E.status===666&&I!==b)return ue(l,l.avail_out===0?-5:w);if(E.strm=l,G=E.last_flush,E.last_flush=I,E.status===T)if(E.wrap===2)l.adler=0,ne(E,31),ne(E,139),ne(E,8),E.gzhead?(ne(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),ne(E,255&E.gzhead.time),ne(E,E.gzhead.time>>8&255),ne(E,E.gzhead.time>>16&255),ne(E,E.gzhead.time>>24&255),ne(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ne(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(ne(E,255&E.gzhead.extra.length),ne(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(l.adler=f(l.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=69):(ne(E,0),ne(E,0),ne(E,0),ne(E,0),ne(E,0),ne(E,E.level===9?2:2<=E.strategy||E.level<2?4:0),ne(E,3),E.status=j);else{var N=k+(E.w_bits-8<<4)<<8;N|=(2<=E.strategy||E.level<2?0:E.level<6?1:E.level===6?2:3)<<6,E.strstart!==0&&(N|=32),N+=31-N%31,E.status=j,ee(E,N),E.strstart!==0&&(ee(E,l.adler>>>16),ee(E,65535&l.adler)),l.adler=1}if(E.status===69)if(E.gzhead.extra){for(v=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>v&&(l.adler=f(l.adler,E.pending_buf,E.pending-v,v)),L(l),v=E.pending,E.pending!==E.pending_buf_size));)ne(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>v&&(l.adler=f(l.adler,E.pending_buf,E.pending-v,v)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=73)}else E.status=73;if(E.status===73)if(E.gzhead.name){v=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>v&&(l.adler=f(l.adler,E.pending_buf,E.pending-v,v)),L(l),v=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,ne(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>v&&(l.adler=f(l.adler,E.pending_buf,E.pending-v,v)),A===0&&(E.gzindex=0,E.status=91)}else E.status=91;if(E.status===91)if(E.gzhead.comment){v=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>v&&(l.adler=f(l.adler,E.pending_buf,E.pending-v,v)),L(l),v=E.pending,E.pending===E.pending_buf_size)){A=1;break}A=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,ne(E,A)}while(A!==0);E.gzhead.hcrc&&E.pending>v&&(l.adler=f(l.adler,E.pending_buf,E.pending-v,v)),A===0&&(E.status=103)}else E.status=103;if(E.status===103&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&L(l),E.pending+2<=E.pending_buf_size&&(ne(E,255&l.adler),ne(E,l.adler>>8&255),l.adler=0,E.status=j)):E.status=j),E.pending!==0){if(L(l),l.avail_out===0)return E.last_flush=-1,p}else if(l.avail_in===0&&Z(I)<=Z(G)&&I!==b)return ue(l,-5);if(E.status===666&&l.avail_in!==0)return ue(l,-5);if(l.avail_in!==0||E.lookahead!==0||I!==h&&E.status!==666){var q=E.strategy===2?function(R,K){for(var te;;){if(R.lookahead===0&&(ve(R),R.lookahead===0)){if(K===h)return u;break}if(R.match_length=0,te=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,te&&($(R,!1),R.strm.avail_out===0))return u}return R.insert=0,K===b?($(R,!0),R.strm.avail_out===0?ce:H):R.last_lit&&($(R,!1),R.strm.avail_out===0)?u:B}(E,I):E.strategy===3?function(R,K){for(var te,J,ie,_e,he=R.window;;){if(R.lookahead<=X){if(ve(R),R.lookahead<=X&&K===h)return u;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=D&&0<R.strstart&&(J=he[ie=R.strstart-1])===he[++ie]&&J===he[++ie]&&J===he[++ie]){_e=R.strstart+X;do;while(J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&J===he[++ie]&&ie<_e);R.match_length=X-(_e-ie),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=D?(te=a._tr_tally(R,1,R.match_length-D),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(te=a._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),te&&($(R,!1),R.strm.avail_out===0))return u}return R.insert=0,K===b?($(R,!0),R.strm.avail_out===0?ce:H):R.last_lit&&($(R,!1),R.strm.avail_out===0)?u:B}(E,I):n[E.level].func(E,I);if(q!==ce&&q!==H||(E.status=666),q===u||q===ce)return l.avail_out===0&&(E.last_flush=-1),p;if(q===B&&(I===1?a._tr_align(E):I!==5&&(a._tr_stored_block(E,0,0,!1),I===3&&(le(E.head),E.lookahead===0&&(E.strstart=0,E.block_start=0,E.insert=0))),L(l),l.avail_out===0))return E.last_flush=-1,p}return I!==b?p:E.wrap<=0?1:(E.wrap===2?(ne(E,255&l.adler),ne(E,l.adler>>8&255),ne(E,l.adler>>16&255),ne(E,l.adler>>24&255),ne(E,255&l.total_in),ne(E,l.total_in>>8&255),ne(E,l.total_in>>16&255),ne(E,l.total_in>>24&255)):(ee(E,l.adler>>>16),ee(E,65535&l.adler)),L(l),0<E.wrap&&(E.wrap=-E.wrap),E.pending!==0?p:1)},r.deflateEnd=function(l){var I;return l&&l.state?(I=l.state.status)!==T&&I!==69&&I!==73&&I!==91&&I!==103&&I!==j&&I!==666?ue(l,w):(l.state=null,I===j?ue(l,-3):p):w},r.deflateSetDictionary=function(l,I){var G,E,v,A,N,q,R,K,te=I.length;if(!l||!l.state||(A=(G=l.state).wrap)===2||A===1&&G.status!==T||G.lookahead)return w;for(A===1&&(l.adler=c(l.adler,I,te,0)),G.wrap=0,te>=G.w_size&&(A===0&&(le(G.head),G.strstart=0,G.block_start=0,G.insert=0),K=new o.Buf8(G.w_size),o.arraySet(K,I,te-G.w_size,G.w_size,0),I=K,te=G.w_size),N=l.avail_in,q=l.next_in,R=l.input,l.avail_in=te,l.next_in=0,l.input=I,ve(G);G.lookahead>=D;){for(E=G.strstart,v=G.lookahead-(D-1);G.ins_h=(G.ins_h<<G.hash_shift^G.window[E+D-1])&G.hash_mask,G.prev[E&G.w_mask]=G.head[G.ins_h],G.head[G.ins_h]=E,E++,--v;);G.strstart=E,G.lookahead=D-1,ve(G)}return G.strstart+=G.lookahead,G.block_start=G.strstart,G.insert=G.lookahead,G.lookahead=0,G.match_length=G.prev_length=D-1,G.match_available=0,l.next_in=q,l.input=R,l.avail_in=N,G.wrap=A,p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,r){i.exports=function(n,o){var a,c,f,m,h,b,p,w,d,_,g,k,S,x,C,z,U,V,D,X,ae,T,j,u,B;a=n.state,c=n.next_in,u=n.input,f=c+(n.avail_in-5),m=n.next_out,B=n.output,h=m-(o-n.avail_out),b=m+(n.avail_out-257),p=a.dmax,w=a.wsize,d=a.whave,_=a.wnext,g=a.window,k=a.hold,S=a.bits,x=a.lencode,C=a.distcode,z=(1<<a.lenbits)-1,U=(1<<a.distbits)-1;e:do{S<15&&(k+=u[c++]<<S,S+=8,k+=u[c++]<<S,S+=8),V=x[k&z];t:for(;;){if(k>>>=D=V>>>24,S-=D,(D=V>>>16&255)===0)B[m++]=65535&V;else{if(!(16&D)){if(!(64&D)){V=x[(65535&V)+(k&(1<<D)-1)];continue t}if(32&D){a.mode=12;break e}n.msg="invalid literal/length code",a.mode=30;break e}X=65535&V,(D&=15)&&(S<D&&(k+=u[c++]<<S,S+=8),X+=k&(1<<D)-1,k>>>=D,S-=D),S<15&&(k+=u[c++]<<S,S+=8,k+=u[c++]<<S,S+=8),V=C[k&U];r:for(;;){if(k>>>=D=V>>>24,S-=D,!(16&(D=V>>>16&255))){if(!(64&D)){V=C[(65535&V)+(k&(1<<D)-1)];continue r}n.msg="invalid distance code",a.mode=30;break e}if(ae=65535&V,S<(D&=15)&&(k+=u[c++]<<S,(S+=8)<D&&(k+=u[c++]<<S,S+=8)),p<(ae+=k&(1<<D)-1)){n.msg="invalid distance too far back",a.mode=30;break e}if(k>>>=D,S-=D,(D=m-h)<ae){if(d<(D=ae-D)&&a.sane){n.msg="invalid distance too far back",a.mode=30;break e}if(j=g,(T=0)===_){if(T+=w-D,D<X){for(X-=D;B[m++]=g[T++],--D;);T=m-ae,j=B}}else if(_<D){if(T+=w+_-D,(D-=_)<X){for(X-=D;B[m++]=g[T++],--D;);if(T=0,_<X){for(X-=D=_;B[m++]=g[T++],--D;);T=m-ae,j=B}}}else if(T+=_-D,D<X){for(X-=D;B[m++]=g[T++],--D;);T=m-ae,j=B}for(;2<X;)B[m++]=j[T++],B[m++]=j[T++],B[m++]=j[T++],X-=3;X&&(B[m++]=j[T++],1<X&&(B[m++]=j[T++]))}else{for(T=m-ae;B[m++]=B[T++],B[m++]=B[T++],B[m++]=B[T++],2<(X-=3););X&&(B[m++]=B[T++],1<X&&(B[m++]=B[T++]))}break}}break}}while(c<f&&m<b);c-=X=S>>3,k&=(1<<(S-=X<<3))-1,n.next_in=c,n.next_out=m,n.avail_in=c<f?f-c+5:5-(c-f),n.avail_out=m<b?b-m+257:257-(m-b),a.hold=k,a.bits=S}},{}],49:[function(t,i,r){var n=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),c=t("./inffast"),f=t("./inftrees"),m=1,h=2,b=0,p=-2,w=1,d=852,_=592;function g(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(T){var j;return T&&T.state?(j=T.state,T.total_in=T.total_out=j.total=0,T.msg="",j.wrap&&(T.adler=1&j.wrap),j.mode=w,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new n.Buf32(d),j.distcode=j.distdyn=new n.Buf32(_),j.sane=1,j.back=-1,b):p}function x(T){var j;return T&&T.state?((j=T.state).wsize=0,j.whave=0,j.wnext=0,S(T)):p}function C(T,j){var u,B;return T&&T.state?(B=T.state,j<0?(u=0,j=-j):(u=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?p:(B.window!==null&&B.wbits!==j&&(B.window=null),B.wrap=u,B.wbits=j,x(T))):p}function z(T,j){var u,B;return T?(B=new k,(T.state=B).window=null,(u=C(T,j))!==b&&(T.state=null),u):p}var U,V,D=!0;function X(T){if(D){var j;for(U=new n.Buf32(512),V=new n.Buf32(32),j=0;j<144;)T.lens[j++]=8;for(;j<256;)T.lens[j++]=9;for(;j<280;)T.lens[j++]=7;for(;j<288;)T.lens[j++]=8;for(f(m,T.lens,0,288,U,0,T.work,{bits:9}),j=0;j<32;)T.lens[j++]=5;f(h,T.lens,0,32,V,0,T.work,{bits:5}),D=!1}T.lencode=U,T.lenbits=9,T.distcode=V,T.distbits=5}function ae(T,j,u,B){var ce,H=T.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new n.Buf8(H.wsize)),B>=H.wsize?(n.arraySet(H.window,j,u-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(B<(ce=H.wsize-H.wnext)&&(ce=B),n.arraySet(H.window,j,u-B,ce,H.wnext),(B-=ce)?(n.arraySet(H.window,j,u-B,B,0),H.wnext=B,H.whave=H.wsize):(H.wnext+=ce,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=ce))),0}r.inflateReset=x,r.inflateReset2=C,r.inflateResetKeep=S,r.inflateInit=function(T){return z(T,15)},r.inflateInit2=z,r.inflate=function(T,j){var u,B,ce,H,ue,Z,le,L,$,ne,ee,Q,ve,ke,pe,fe,Ee,be,$e,Le,l,I,G,E,v=0,A=new n.Buf8(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return p;(u=T.state).mode===12&&(u.mode=13),ue=T.next_out,ce=T.output,le=T.avail_out,H=T.next_in,B=T.input,Z=T.avail_in,L=u.hold,$=u.bits,ne=Z,ee=le,I=b;e:for(;;)switch(u.mode){case w:if(u.wrap===0){u.mode=13;break}for(;$<16;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(2&u.wrap&&L===35615){A[u.check=0]=255&L,A[1]=L>>>8&255,u.check=a(u.check,A,2,0),$=L=0,u.mode=2;break}if(u.flags=0,u.head&&(u.head.done=!1),!(1&u.wrap)||(((255&L)<<8)+(L>>8))%31){T.msg="incorrect header check",u.mode=30;break}if((15&L)!=8){T.msg="unknown compression method",u.mode=30;break}if($-=4,l=8+(15&(L>>>=4)),u.wbits===0)u.wbits=l;else if(l>u.wbits){T.msg="invalid window size",u.mode=30;break}u.dmax=1<<l,T.adler=u.check=1,u.mode=512&L?10:12,$=L=0;break;case 2:for(;$<16;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(u.flags=L,(255&u.flags)!=8){T.msg="unknown compression method",u.mode=30;break}if(57344&u.flags){T.msg="unknown header flags set",u.mode=30;break}u.head&&(u.head.text=L>>8&1),512&u.flags&&(A[0]=255&L,A[1]=L>>>8&255,u.check=a(u.check,A,2,0)),$=L=0,u.mode=3;case 3:for(;$<32;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}u.head&&(u.head.time=L),512&u.flags&&(A[0]=255&L,A[1]=L>>>8&255,A[2]=L>>>16&255,A[3]=L>>>24&255,u.check=a(u.check,A,4,0)),$=L=0,u.mode=4;case 4:for(;$<16;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}u.head&&(u.head.xflags=255&L,u.head.os=L>>8),512&u.flags&&(A[0]=255&L,A[1]=L>>>8&255,u.check=a(u.check,A,2,0)),$=L=0,u.mode=5;case 5:if(1024&u.flags){for(;$<16;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}u.length=L,u.head&&(u.head.extra_len=L),512&u.flags&&(A[0]=255&L,A[1]=L>>>8&255,u.check=a(u.check,A,2,0)),$=L=0}else u.head&&(u.head.extra=null);u.mode=6;case 6:if(1024&u.flags&&(Z<(Q=u.length)&&(Q=Z),Q&&(u.head&&(l=u.head.extra_len-u.length,u.head.extra||(u.head.extra=new Array(u.head.extra_len)),n.arraySet(u.head.extra,B,H,Q,l)),512&u.flags&&(u.check=a(u.check,B,Q,H)),Z-=Q,H+=Q,u.length-=Q),u.length))break e;u.length=0,u.mode=7;case 7:if(2048&u.flags){if(Z===0)break e;for(Q=0;l=B[H+Q++],u.head&&l&&u.length<65536&&(u.head.name+=String.fromCharCode(l)),l&&Q<Z;);if(512&u.flags&&(u.check=a(u.check,B,Q,H)),Z-=Q,H+=Q,l)break e}else u.head&&(u.head.name=null);u.length=0,u.mode=8;case 8:if(4096&u.flags){if(Z===0)break e;for(Q=0;l=B[H+Q++],u.head&&l&&u.length<65536&&(u.head.comment+=String.fromCharCode(l)),l&&Q<Z;);if(512&u.flags&&(u.check=a(u.check,B,Q,H)),Z-=Q,H+=Q,l)break e}else u.head&&(u.head.comment=null);u.mode=9;case 9:if(512&u.flags){for(;$<16;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(L!==(65535&u.check)){T.msg="header crc mismatch",u.mode=30;break}$=L=0}u.head&&(u.head.hcrc=u.flags>>9&1,u.head.done=!0),T.adler=u.check=0,u.mode=12;break;case 10:for(;$<32;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}T.adler=u.check=g(L),$=L=0,u.mode=11;case 11:if(u.havedict===0)return T.next_out=ue,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=L,u.bits=$,2;T.adler=u.check=1,u.mode=12;case 12:if(j===5||j===6)break e;case 13:if(u.last){L>>>=7&$,$-=7&$,u.mode=27;break}for(;$<3;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}switch(u.last=1&L,$-=1,3&(L>>>=1)){case 0:u.mode=14;break;case 1:if(X(u),u.mode=20,j!==6)break;L>>>=2,$-=2;break e;case 2:u.mode=17;break;case 3:T.msg="invalid block type",u.mode=30}L>>>=2,$-=2;break;case 14:for(L>>>=7&$,$-=7&$;$<32;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if((65535&L)!=(L>>>16^65535)){T.msg="invalid stored block lengths",u.mode=30;break}if(u.length=65535&L,$=L=0,u.mode=15,j===6)break e;case 15:u.mode=16;case 16:if(Q=u.length){if(Z<Q&&(Q=Z),le<Q&&(Q=le),Q===0)break e;n.arraySet(ce,B,H,Q,ue),Z-=Q,H+=Q,le-=Q,ue+=Q,u.length-=Q;break}u.mode=12;break;case 17:for(;$<14;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(u.nlen=257+(31&L),L>>>=5,$-=5,u.ndist=1+(31&L),L>>>=5,$-=5,u.ncode=4+(15&L),L>>>=4,$-=4,286<u.nlen||30<u.ndist){T.msg="too many length or distance symbols",u.mode=30;break}u.have=0,u.mode=18;case 18:for(;u.have<u.ncode;){for(;$<3;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}u.lens[N[u.have++]]=7&L,L>>>=3,$-=3}for(;u.have<19;)u.lens[N[u.have++]]=0;if(u.lencode=u.lendyn,u.lenbits=7,G={bits:u.lenbits},I=f(0,u.lens,0,19,u.lencode,0,u.work,G),u.lenbits=G.bits,I){T.msg="invalid code lengths set",u.mode=30;break}u.have=0,u.mode=19;case 19:for(;u.have<u.nlen+u.ndist;){for(;fe=(v=u.lencode[L&(1<<u.lenbits)-1])>>>16&255,Ee=65535&v,!((pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(Ee<16)L>>>=pe,$-=pe,u.lens[u.have++]=Ee;else{if(Ee===16){for(E=pe+2;$<E;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(L>>>=pe,$-=pe,u.have===0){T.msg="invalid bit length repeat",u.mode=30;break}l=u.lens[u.have-1],Q=3+(3&L),L>>>=2,$-=2}else if(Ee===17){for(E=pe+3;$<E;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}$-=pe,l=0,Q=3+(7&(L>>>=pe)),L>>>=3,$-=3}else{for(E=pe+7;$<E;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}$-=pe,l=0,Q=11+(127&(L>>>=pe)),L>>>=7,$-=7}if(u.have+Q>u.nlen+u.ndist){T.msg="invalid bit length repeat",u.mode=30;break}for(;Q--;)u.lens[u.have++]=l}}if(u.mode===30)break;if(u.lens[256]===0){T.msg="invalid code -- missing end-of-block",u.mode=30;break}if(u.lenbits=9,G={bits:u.lenbits},I=f(m,u.lens,0,u.nlen,u.lencode,0,u.work,G),u.lenbits=G.bits,I){T.msg="invalid literal/lengths set",u.mode=30;break}if(u.distbits=6,u.distcode=u.distdyn,G={bits:u.distbits},I=f(h,u.lens,u.nlen,u.ndist,u.distcode,0,u.work,G),u.distbits=G.bits,I){T.msg="invalid distances set",u.mode=30;break}if(u.mode=20,j===6)break e;case 20:u.mode=21;case 21:if(6<=Z&&258<=le){T.next_out=ue,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=L,u.bits=$,c(T,ee),ue=T.next_out,ce=T.output,le=T.avail_out,H=T.next_in,B=T.input,Z=T.avail_in,L=u.hold,$=u.bits,u.mode===12&&(u.back=-1);break}for(u.back=0;fe=(v=u.lencode[L&(1<<u.lenbits)-1])>>>16&255,Ee=65535&v,!((pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(fe&&!(240&fe)){for(be=pe,$e=fe,Le=Ee;fe=(v=u.lencode[Le+((L&(1<<be+$e)-1)>>be)])>>>16&255,Ee=65535&v,!(be+(pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}L>>>=be,$-=be,u.back+=be}if(L>>>=pe,$-=pe,u.back+=pe,u.length=Ee,fe===0){u.mode=26;break}if(32&fe){u.back=-1,u.mode=12;break}if(64&fe){T.msg="invalid literal/length code",u.mode=30;break}u.extra=15&fe,u.mode=22;case 22:if(u.extra){for(E=u.extra;$<E;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}u.length+=L&(1<<u.extra)-1,L>>>=u.extra,$-=u.extra,u.back+=u.extra}u.was=u.length,u.mode=23;case 23:for(;fe=(v=u.distcode[L&(1<<u.distbits)-1])>>>16&255,Ee=65535&v,!((pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(!(240&fe)){for(be=pe,$e=fe,Le=Ee;fe=(v=u.distcode[Le+((L&(1<<be+$e)-1)>>be)])>>>16&255,Ee=65535&v,!(be+(pe=v>>>24)<=$);){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}L>>>=be,$-=be,u.back+=be}if(L>>>=pe,$-=pe,u.back+=pe,64&fe){T.msg="invalid distance code",u.mode=30;break}u.offset=Ee,u.extra=15&fe,u.mode=24;case 24:if(u.extra){for(E=u.extra;$<E;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}u.offset+=L&(1<<u.extra)-1,L>>>=u.extra,$-=u.extra,u.back+=u.extra}if(u.offset>u.dmax){T.msg="invalid distance too far back",u.mode=30;break}u.mode=25;case 25:if(le===0)break e;if(Q=ee-le,u.offset>Q){if((Q=u.offset-Q)>u.whave&&u.sane){T.msg="invalid distance too far back",u.mode=30;break}ve=Q>u.wnext?(Q-=u.wnext,u.wsize-Q):u.wnext-Q,Q>u.length&&(Q=u.length),ke=u.window}else ke=ce,ve=ue-u.offset,Q=u.length;for(le<Q&&(Q=le),le-=Q,u.length-=Q;ce[ue++]=ke[ve++],--Q;);u.length===0&&(u.mode=21);break;case 26:if(le===0)break e;ce[ue++]=u.length,le--,u.mode=21;break;case 27:if(u.wrap){for(;$<32;){if(Z===0)break e;Z--,L|=B[H++]<<$,$+=8}if(ee-=le,T.total_out+=ee,u.total+=ee,ee&&(T.adler=u.check=u.flags?a(u.check,ce,ee,ue-ee):o(u.check,ce,ee,ue-ee)),ee=le,(u.flags?L:g(L))!==u.check){T.msg="incorrect data check",u.mode=30;break}$=L=0}u.mode=28;case 28:if(u.wrap&&u.flags){for(;$<32;){if(Z===0)break e;Z--,L+=B[H++]<<$,$+=8}if(L!==(4294967295&u.total)){T.msg="incorrect length check",u.mode=30;break}$=L=0}u.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;case 32:default:return p}return T.next_out=ue,T.avail_out=le,T.next_in=H,T.avail_in=Z,u.hold=L,u.bits=$,(u.wsize||ee!==T.avail_out&&u.mode<30&&(u.mode<27||j!==4))&&ae(T,T.output,T.next_out,ee-T.avail_out)?(u.mode=31,-4):(ne-=T.avail_in,ee-=T.avail_out,T.total_in+=ne,T.total_out+=ee,u.total+=ee,u.wrap&&ee&&(T.adler=u.check=u.flags?a(u.check,ce,ee,T.next_out-ee):o(u.check,ce,ee,T.next_out-ee)),T.data_type=u.bits+(u.last?64:0)+(u.mode===12?128:0)+(u.mode===20||u.mode===15?256:0),(ne==0&&ee===0||j===4)&&I===b&&(I=-5),I)},r.inflateEnd=function(T){if(!T||!T.state)return p;var j=T.state;return j.window&&(j.window=null),T.state=null,b},r.inflateGetHeader=function(T,j){var u;return T&&T.state&&2&(u=T.state).wrap?((u.head=j).done=!1,b):p},r.inflateSetDictionary=function(T,j){var u,B=j.length;return T&&T.state?(u=T.state).wrap!==0&&u.mode!==11?p:u.mode===11&&o(1,j,B,0)!==u.check?-3:ae(T,j,B,B)?(u.mode=31,-4):(u.havedict=1,b):p},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,r){var n=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(m,h,b,p,w,d,_,g){var k,S,x,C,z,U,V,D,X,ae=g.bits,T=0,j=0,u=0,B=0,ce=0,H=0,ue=0,Z=0,le=0,L=0,$=null,ne=0,ee=new n.Buf16(16),Q=new n.Buf16(16),ve=null,ke=0;for(T=0;T<=15;T++)ee[T]=0;for(j=0;j<p;j++)ee[h[b+j]]++;for(ce=ae,B=15;1<=B&&ee[B]===0;B--);if(B<ce&&(ce=B),B===0)return w[d++]=20971520,w[d++]=20971520,g.bits=1,0;for(u=1;u<B&&ee[u]===0;u++);for(ce<u&&(ce=u),T=Z=1;T<=15;T++)if(Z<<=1,(Z-=ee[T])<0)return-1;if(0<Z&&(m===0||B!==1))return-1;for(Q[1]=0,T=1;T<15;T++)Q[T+1]=Q[T]+ee[T];for(j=0;j<p;j++)h[b+j]!==0&&(_[Q[h[b+j]]++]=j);if(U=m===0?($=ve=_,19):m===1?($=o,ne-=257,ve=a,ke-=257,256):($=c,ve=f,-1),T=u,z=d,ue=j=L=0,x=-1,C=(le=1<<(H=ce))-1,m===1&&852<le||m===2&&592<le)return 1;for(;;){for(V=T-ue,X=_[j]<U?(D=0,_[j]):_[j]>U?(D=ve[ke+_[j]],$[ne+_[j]]):(D=96,0),k=1<<T-ue,u=S=1<<H;w[z+(L>>ue)+(S-=k)]=V<<24|D<<16|X|0,S!==0;);for(k=1<<T-1;L&k;)k>>=1;if(k!==0?(L&=k-1,L+=k):L=0,j++,--ee[T]==0){if(T===B)break;T=h[b+_[j]]}if(ce<T&&(L&C)!==x){for(ue===0&&(ue=ce),z+=u,Z=1<<(H=T-ue);H+ue<B&&!((Z-=ee[H+ue])<=0);)H++,Z<<=1;if(le+=1<<H,m===1&&852<le||m===2&&592<le)return 1;w[x=L&C]=ce<<24|H<<16|z-d|0}}return L!==0&&(w[z+L]=T-ue<<24|64<<16|0),g.bits=ce,0}},{"../utils/common":41}],51:[function(t,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,r){var n=t("../utils/common"),o=0,a=1;function c(v){for(var A=v.length;0<=--A;)v[A]=0}var f=0,m=29,h=256,b=h+1+m,p=30,w=19,d=2*b+1,_=15,g=16,k=7,S=256,x=16,C=17,z=18,U=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],X=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ae=new Array(2*(b+2));c(ae);var T=new Array(2*p);c(T);var j=new Array(512);c(j);var u=new Array(256);c(u);var B=new Array(m);c(B);var ce,H,ue,Z=new Array(p);function le(v,A,N,q,R){this.static_tree=v,this.extra_bits=A,this.extra_base=N,this.elems=q,this.max_length=R,this.has_stree=v&&v.length}function L(v,A){this.dyn_tree=v,this.max_code=0,this.stat_desc=A}function $(v){return v<256?j[v]:j[256+(v>>>7)]}function ne(v,A){v.pending_buf[v.pending++]=255&A,v.pending_buf[v.pending++]=A>>>8&255}function ee(v,A,N){v.bi_valid>g-N?(v.bi_buf|=A<<v.bi_valid&65535,ne(v,v.bi_buf),v.bi_buf=A>>g-v.bi_valid,v.bi_valid+=N-g):(v.bi_buf|=A<<v.bi_valid&65535,v.bi_valid+=N)}function Q(v,A,N){ee(v,N[2*A],N[2*A+1])}function ve(v,A){for(var N=0;N|=1&v,v>>>=1,N<<=1,0<--A;);return N>>>1}function ke(v,A,N){var q,R,K=new Array(_+1),te=0;for(q=1;q<=_;q++)K[q]=te=te+N[q-1]<<1;for(R=0;R<=A;R++){var J=v[2*R+1];J!==0&&(v[2*R]=ve(K[J]++,J))}}function pe(v){var A;for(A=0;A<b;A++)v.dyn_ltree[2*A]=0;for(A=0;A<p;A++)v.dyn_dtree[2*A]=0;for(A=0;A<w;A++)v.bl_tree[2*A]=0;v.dyn_ltree[2*S]=1,v.opt_len=v.static_len=0,v.last_lit=v.matches=0}function fe(v){8<v.bi_valid?ne(v,v.bi_buf):0<v.bi_valid&&(v.pending_buf[v.pending++]=v.bi_buf),v.bi_buf=0,v.bi_valid=0}function Ee(v,A,N,q){var R=2*A,K=2*N;return v[R]<v[K]||v[R]===v[K]&&q[A]<=q[N]}function be(v,A,N){for(var q=v.heap[N],R=N<<1;R<=v.heap_len&&(R<v.heap_len&&Ee(A,v.heap[R+1],v.heap[R],v.depth)&&R++,!Ee(A,q,v.heap[R],v.depth));)v.heap[N]=v.heap[R],N=R,R<<=1;v.heap[N]=q}function $e(v,A,N){var q,R,K,te,J=0;if(v.last_lit!==0)for(;q=v.pending_buf[v.d_buf+2*J]<<8|v.pending_buf[v.d_buf+2*J+1],R=v.pending_buf[v.l_buf+J],J++,q===0?Q(v,R,A):(Q(v,(K=u[R])+h+1,A),(te=U[K])!==0&&ee(v,R-=B[K],te),Q(v,K=$(--q),N),(te=V[K])!==0&&ee(v,q-=Z[K],te)),J<v.last_lit;);Q(v,S,A)}function Le(v,A){var N,q,R,K=A.dyn_tree,te=A.stat_desc.static_tree,J=A.stat_desc.has_stree,ie=A.stat_desc.elems,_e=-1;for(v.heap_len=0,v.heap_max=d,N=0;N<ie;N++)K[2*N]!==0?(v.heap[++v.heap_len]=_e=N,v.depth[N]=0):K[2*N+1]=0;for(;v.heap_len<2;)K[2*(R=v.heap[++v.heap_len]=_e<2?++_e:0)]=1,v.depth[R]=0,v.opt_len--,J&&(v.static_len-=te[2*R+1]);for(A.max_code=_e,N=v.heap_len>>1;1<=N;N--)be(v,K,N);for(R=ie;N=v.heap[1],v.heap[1]=v.heap[v.heap_len--],be(v,K,1),q=v.heap[1],v.heap[--v.heap_max]=N,v.heap[--v.heap_max]=q,K[2*R]=K[2*N]+K[2*q],v.depth[R]=(v.depth[N]>=v.depth[q]?v.depth[N]:v.depth[q])+1,K[2*N+1]=K[2*q+1]=R,v.heap[1]=R++,be(v,K,1),2<=v.heap_len;);v.heap[--v.heap_max]=v.heap[1],function(he,Re){var re,O,y,P,F,M,W=Re.dyn_tree,se=Re.max_code,me=Re.stat_desc.static_tree,Te=Re.stat_desc.has_stree,Ae=Re.stat_desc.extra_bits,Me=Re.stat_desc.extra_base,Xe=Re.stat_desc.max_length,Qe=0;for(P=0;P<=_;P++)he.bl_count[P]=0;for(W[2*he.heap[he.heap_max]+1]=0,re=he.heap_max+1;re<d;re++)Xe<(P=W[2*W[2*(O=he.heap[re])+1]+1]+1)&&(P=Xe,Qe++),W[2*O+1]=P,se<O||(he.bl_count[P]++,F=0,Me<=O&&(F=Ae[O-Me]),M=W[2*O],he.opt_len+=M*(P+F),Te&&(he.static_len+=M*(me[2*O+1]+F)));if(Qe!==0){do{for(P=Xe-1;he.bl_count[P]===0;)P--;he.bl_count[P]--,he.bl_count[P+1]+=2,he.bl_count[Xe]--,Qe-=2}while(0<Qe);for(P=Xe;P!==0;P--)for(O=he.bl_count[P];O!==0;)se<(y=he.heap[--re])||(W[2*y+1]!==P&&(he.opt_len+=(P-W[2*y+1])*W[2*y],W[2*y+1]=P),O--)}}(v,A),ke(K,_e,v.bl_count)}function l(v,A,N){var q,R,K=-1,te=A[1],J=0,ie=7,_e=4;for(te===0&&(ie=138,_e=3),A[2*(N+1)+1]=65535,q=0;q<=N;q++)R=te,te=A[2*(q+1)+1],++J<ie&&R===te||(J<_e?v.bl_tree[2*R]+=J:R!==0?(R!==K&&v.bl_tree[2*R]++,v.bl_tree[2*x]++):J<=10?v.bl_tree[2*C]++:v.bl_tree[2*z]++,K=R,_e=(J=0)===te?(ie=138,3):R===te?(ie=6,3):(ie=7,4))}function I(v,A,N){var q,R,K=-1,te=A[1],J=0,ie=7,_e=4;for(te===0&&(ie=138,_e=3),q=0;q<=N;q++)if(R=te,te=A[2*(q+1)+1],!(++J<ie&&R===te)){if(J<_e)for(;Q(v,R,v.bl_tree),--J!=0;);else R!==0?(R!==K&&(Q(v,R,v.bl_tree),J--),Q(v,x,v.bl_tree),ee(v,J-3,2)):J<=10?(Q(v,C,v.bl_tree),ee(v,J-3,3)):(Q(v,z,v.bl_tree),ee(v,J-11,7));K=R,_e=(J=0)===te?(ie=138,3):R===te?(ie=6,3):(ie=7,4)}}c(Z);var G=!1;function E(v,A,N,q){ee(v,(f<<1)+(q?1:0),3),function(R,K,te,J){fe(R),ne(R,te),ne(R,~te),n.arraySet(R.pending_buf,R.window,K,te,R.pending),R.pending+=te}(v,A,N)}r._tr_init=function(v){G||(function(){var A,N,q,R,K,te=new Array(_+1);for(R=q=0;R<m-1;R++)for(B[R]=q,A=0;A<1<<U[R];A++)u[q++]=R;for(u[q-1]=R,R=K=0;R<16;R++)for(Z[R]=K,A=0;A<1<<V[R];A++)j[K++]=R;for(K>>=7;R<p;R++)for(Z[R]=K<<7,A=0;A<1<<V[R]-7;A++)j[256+K++]=R;for(N=0;N<=_;N++)te[N]=0;for(A=0;A<=143;)ae[2*A+1]=8,A++,te[8]++;for(;A<=255;)ae[2*A+1]=9,A++,te[9]++;for(;A<=279;)ae[2*A+1]=7,A++,te[7]++;for(;A<=287;)ae[2*A+1]=8,A++,te[8]++;for(ke(ae,b+1,te),A=0;A<p;A++)T[2*A+1]=5,T[2*A]=ve(A,5);ce=new le(ae,U,h+1,b,_),H=new le(T,V,0,p,_),ue=new le(new Array(0),D,0,w,k)}(),G=!0),v.l_desc=new L(v.dyn_ltree,ce),v.d_desc=new L(v.dyn_dtree,H),v.bl_desc=new L(v.bl_tree,ue),v.bi_buf=0,v.bi_valid=0,pe(v)},r._tr_stored_block=E,r._tr_flush_block=function(v,A,N,q){var R,K,te=0;0<v.level?(v.strm.data_type===2&&(v.strm.data_type=function(J){var ie,_e=4093624447;for(ie=0;ie<=31;ie++,_e>>>=1)if(1&_e&&J.dyn_ltree[2*ie]!==0)return o;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return a;for(ie=32;ie<h;ie++)if(J.dyn_ltree[2*ie]!==0)return a;return o}(v)),Le(v,v.l_desc),Le(v,v.d_desc),te=function(J){var ie;for(l(J,J.dyn_ltree,J.l_desc.max_code),l(J,J.dyn_dtree,J.d_desc.max_code),Le(J,J.bl_desc),ie=w-1;3<=ie&&J.bl_tree[2*X[ie]+1]===0;ie--);return J.opt_len+=3*(ie+1)+5+5+4,ie}(v),R=v.opt_len+3+7>>>3,(K=v.static_len+3+7>>>3)<=R&&(R=K)):R=K=N+5,N+4<=R&&A!==-1?E(v,A,N,q):v.strategy===4||K===R?(ee(v,2+(q?1:0),3),$e(v,ae,T)):(ee(v,4+(q?1:0),3),function(J,ie,_e,he){var Re;for(ee(J,ie-257,5),ee(J,_e-1,5),ee(J,he-4,4),Re=0;Re<he;Re++)ee(J,J.bl_tree[2*X[Re]+1],3);I(J,J.dyn_ltree,ie-1),I(J,J.dyn_dtree,_e-1)}(v,v.l_desc.max_code+1,v.d_desc.max_code+1,te+1),$e(v,v.dyn_ltree,v.dyn_dtree)),pe(v),q&&fe(v)},r._tr_tally=function(v,A,N){return v.pending_buf[v.d_buf+2*v.last_lit]=A>>>8&255,v.pending_buf[v.d_buf+2*v.last_lit+1]=255&A,v.pending_buf[v.l_buf+v.last_lit]=255&N,v.last_lit++,A===0?v.dyn_ltree[2*N]++:(v.matches++,A--,v.dyn_ltree[2*(u[N]+h+1)]++,v.dyn_dtree[2*$(A)]++),v.last_lit===v.lit_bufsize-1},r._tr_align=function(v){ee(v,2,3),Q(v,S,ae),function(A){A.bi_valid===16?(ne(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):8<=A.bi_valid&&(A.pending_buf[A.pending++]=255&A.bi_buf,A.bi_buf>>=8,A.bi_valid-=8)}(v)}},{"../utils/common":41}],53:[function(t,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,r){(function(n){(function(o,a){if(!o.setImmediate){var c,f,m,h,b=1,p={},w=!1,d=o.document,_=Object.getPrototypeOf&&Object.getPrototypeOf(o);_=_&&_.setTimeout?_:o,c={}.toString.call(o.process)==="[object process]"?function(x){process.nextTick(function(){k(x)})}:function(){if(o.postMessage&&!o.importScripts){var x=!0,C=o.onmessage;return o.onmessage=function(){x=!1},o.postMessage("","*"),o.onmessage=C,x}}()?(h="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(x){o.postMessage(h+x,"*")}):o.MessageChannel?((m=new MessageChannel).port1.onmessage=function(x){k(x.data)},function(x){m.port2.postMessage(x)}):d&&"onreadystatechange"in d.createElement("script")?(f=d.documentElement,function(x){var C=d.createElement("script");C.onreadystatechange=function(){k(x),C.onreadystatechange=null,f.removeChild(C),C=null},f.appendChild(C)}):function(x){setTimeout(k,0,x)},_.setImmediate=function(x){typeof x!="function"&&(x=new Function(""+x));for(var C=new Array(arguments.length-1),z=0;z<C.length;z++)C[z]=arguments[z+1];var U={callback:x,args:C};return p[b]=U,c(b),b++},_.clearImmediate=g}function g(x){delete p[x]}function k(x){if(w)setTimeout(k,0,x);else{var C=p[x];if(C){w=!0;try{(function(z){var U=z.callback,V=z.args;switch(V.length){case 0:U();break;case 1:U(V[0]);break;case 2:U(V[0],V[1]);break;case 3:U(V[0],V[1],V[2]);break;default:U.apply(a,V)}})(C)}finally{g(x),w=!1}}}}function S(x){x.source===o&&typeof x.data=="string"&&x.data.indexOf(h)===0&&k(+x.data.slice(h.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof Ge<"u"?Ge:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(lo);var nc=lo.exports;const ac=ns(nc);var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,co=(s,e,t,i)=>{for(var r=i>1?void 0:i?cc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&lc(e,t,r),r};let Kr=class extends vs{createRenderRoot(){return this}render(){return Oe`
            <ui-flex-grid-row gap="0.25rem">
                <ui-flex-grid-item>
                    <ui-button
                        variant="full"
                        color="primary"
                        ripple
                        @click=${async()=>{const s=we.queryImportDialog();s.storeKey=this.storeKey,s.show()}}
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
        `}async export(){if(!this.storeKey)return;const s=new ac,e=De(this.storeKey),t=we.queryStore().getData(this.storeKey);if(t!==void 0){e.data=t;for(const i of e.data){const r=e.fileName(i);s.file(r,JSON.stringify(i,null,4))}oc.saveAs(await s.generateAsync({type:"blob"}),e.zipFileName())}}};co([xe({type:String,attribute:"store-key",reflect:!0})],Kr.prototype,"storeKey",2);Kr=co([Ue("pg-drawer-item-import")],Kr);const uo="v1.1.0.dev",uc=9;var pc=Object.defineProperty,hc=Object.getOwnPropertyDescriptor,po=(s,e,t,i)=>{for(var r=i>1?void 0:i?hc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&pc(e,t,r),r};let mr=class extends Ie{constructor(){super(...arguments),this.name="",this.slot=""}createRenderRoot(){return this.style.display="block",this.style.paddingTop="var(--ui-app-bar-height)",this}};po([xe({type:Object,attribute:"data",reflect:!1})],mr.prototype,"data",2);mr=po([Ue("pg-page-content")],mr);const Ts=mr;var dc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,gc=(s,e,t,i)=>{for(var r=i>1?void 0:i?fc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&dc(e,t,r),r};let Jr=class extends Ts{render(){return Oe`
            <ui-flex-grid style="width: 100%; height: 100%;" gap="0.25rem">
                <ui-flex-grid-item flex="0">
                    ${this.data!==void 0?Oe`<pg-alert-list-item
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
        `}updated(s){if(this.data!==void 0){const e=this.querySelector(".description");e.innerHTML=this.data.desc.join("<br/>")}}firstUpdated(s){this.style.overflow="auto"}};Jr=gc([Ue("pg-page-content-alert")],Jr);const mc=Jr;var _c=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,Ss=(s,e,t,i)=>{for(var r=i>1?void 0:i?yc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&_c(e,t,r),r};let Ht=class extends Ie{constructor(){super(...arguments),this.rippleCleanUp=null}createRenderRoot(){return this}render(){return this.data===void 0?Oe``:(this.ripple&&this.rippleCleanUp===null?(this.style.cursor="pointer",this.role="button",this.rippleCleanUp=Ca.create(this)):!this.ripple&&this.rippleCleanUp!==null&&(this.style.cursor="default",this.role="none",this.rippleCleanUp(),this.rippleCleanUp=null),Oe`
            <ui-text>${this.data.alert}</ui-text>

            <ui-text style="color: hsl(var(--ui-hsl-primary));" wght="750">
                ${this.data.from===this.data.to?this.data.from:`${this.data.from}..${this.data.to}`}
            </ui-text>
        `)}firstUpdated(s){this.classList.add("flex"),this.classList.add("row"),this.classList.add("nowrap"),this.classList.add("align-center"),this.classList.add("justify-between"),this.style.padding="var(--ui-spacing)",this.style.overflow="hidden",this.style.position="relative",this.style.borderRadius="0",this.style.borderBottom="1px solid hsl(var(--ui-hsl-borderColor)"}};Ss([xe({type:Object,attribute:"data",reflect:!1})],Ht.prototype,"data",2);Ss([xe({type:Boolean,attribute:"ripple",reflect:!0})],Ht.prototype,"ripple",2);Ht=Ss([Ue("pg-alert-list-item")],Ht);const di=Ht;var vc=Object.defineProperty,bc=Object.getOwnPropertyDescriptor,Sr=(s,e,t,i)=>{for(var r=i>1?void 0:i?bc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&vc(e,t,r),r};let Ct=class extends Ie{constructor(){super(...arguments),this.title="",this.storageKey=""}static generateRegExp(s){const e=s.split(" ").filter(t=>t!=="");return new RegExp("("+e.join("|")+")","i")}static get styles(){return _o`
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
        `}render(){return Oe`
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
        `}value(){var s,e;return((e=(s=this.shadowRoot)==null?void 0:s.querySelector("ui-search"))==null?void 0:e.value)||""}};Sr([xe({type:String,attribute:"title",reflect:!0})],Ct.prototype,"title",2);Sr([xe({type:String,attribute:"storage-key",reflect:!0})],Ct.prototype,"storageKey",2);Sr([xe({type:Boolean,attribute:"active",reflect:!0})],Ct.prototype,"active",2);Ct=Sr([Ue("pg-search-bar")],Ct);const wc=Ct;function Ec(s,e){for(;!s.matches(e);){if(!s.parentElement)return null;s=s.parentElement}return s}var kc=Object.defineProperty,Tc=Object.getOwnPropertyDescriptor,ho=(s,e,t,i)=>{for(var r=i>1?void 0:i?Tc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&kc(e,t,r),r};let _r=class extends Ts{constructor(){super(...arguments),this.cleanup=new Wi}querySearchBar(){return this.querySelector("pg-search-bar")}render(){var s;return we.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?De("alertLists").listKey(this.data):"Alarm Liste",Oe`
            <pg-search-bar
                title="Alarmsuche (RegEx Mode)"
                storage-key="${(s=this.data)==null?void 0:s.title}"
                ?active=${!!this.searchBar}
                @change=${async e=>{await this.filter(e.currentTarget.value())}}
            ></pg-search-bar>

            <div
                class="container no-scrollbar"
                style="${ds({width:"100%",height:"100%",overflow:"auto",scrollBehavior:"smooth"})}"
            >
                <div
                    class="list"
                    @click=${async e=>{if(!((e==null?void 0:e.target)instanceof Element))return;const t=Ec(e.target,"pg-alert-list-item");t!==null&&we.queryStackLayout().setPage("alert",i=>{const r=i.children[0];r!==void 0&&(r.data=t.data)},!0)}}
                ></div>
            </div>
        `}updated(s){const e=this.querySelector("pg-search-bar"),t=this.querySelector("div.container");this.searchBar?(t.style.paddingTop=`calc(${e.clientHeight}px + var(--ui-spacing) * 2)`,this.filter(this.querySelector("pg-search-bar").value())):(t.style.paddingTop="0",this.filter(""))}firstUpdated(s){const e=this.querySelector(".list");this.data!==void 0&&this.data.data.forEach(async t=>{const i=new di;i.data=t,i.ripple=!0,e.appendChild(i)})}connectedCallback(){super.connectedCallback();const s=we.queryAppBar(),e=async()=>this.searchBar=!this.searchBar,t=s.contentName("search").contentAt(0);t.addEventListener("click",e),this.cleanup.add(()=>t.removeEventListener("click",e))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async filter(s){const e=this.querySelector(".list"),t=wc.generateRegExp(s);let i,r,n,o;for(const a of[...e.children])a instanceof di&&a.data!==void 0&&(c=>{n=Math.min(c.data.from,c.data.to),o=Math.max(c.data.from,c.data.to),i=[];for(let f=n;f<o;f++)i.push(f.toString());r=`${i.join(",")} ${c.data.alert}`,t.test(r)?c.style.display="flex":c.style.display="none"})(a)}};ho([xe({type:Boolean,attribute:"search-bar",reflect:!0})],_r.prototype,"searchBar",2);_r=ho([Ue("pg-page-content-alert-lists")],_r);const Sc=_r;var Ac=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,Pc=(s,e,t,i)=>{for(var r=i>1?void 0:i?Cc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ac(e,t,r),r};let Yr=class extends Ts{render(){return we.queryAppBar().contentName("title").contentAt(0).innerText=this.data!==void 0?De("metalSheets").fileName(this.data):"Bleck Liste",Oe``}};Yr=Pc([Ue("pg-page-content-metal-sheets")],Yr);const xc=Yr;var Oc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,Pt=(s,e,t,i)=>{for(var r=i>1?void 0:i?Rc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Oc(e,t,r),r};let Ke=class extends vs{createRenderRoot(){return this}render(){return Oe`
            <ui-flex-grid-row>
                <ui-flex-grid-item>
                    <ui-label
                        style="cursor: pointer;"
                        primary="${this.primary||""}"
                        secondary="${this.secondary||""}"
                        @click=${async()=>{await this.setStackLayoutPage(),we.queryDrawer().open=!1}}
                    ></ui-label>
                </ui-flex-grid-item>

                ${this.allowDeletion?Oe`<ui-flex-grid-item
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
        `}async setStackLayoutPage(){if(!this.storeKey)return;const s=De(this.storeKey),e=we.queryStore().getData(this.storeKey),t=e==null?void 0:e.find(r=>s.listKey(r)===this.storeListKey);if(t===void 0)throw new Error(`Data undefined for "${this.storeListKey}" in "${this.storeKey}"`);const i=we.queryStackLayout();i.clearStack(),i.setPage(this.storeKey,async r=>{const n=r.children[0];n!==void 0&&(n.data=t)})}async deleteStoreData(){if(!(!this.storeKey||!this.storeListKey))switch(this.storeKey){case"alertLists":case"metalSheets":if(confirm(`Möchten Sie "${this.storeListKey}" wirklich löschen?`)){const s=De(this.storeKey);we.queryStore().updateData(this.storeKey,e=>e.filter(t=>s.listKey(t)!==this.storeListKey))}}}};Pt([xe({type:String,attribute:"store-key",reflect:!0})],Ke.prototype,"storeKey",2);Pt([xe({type:String,attribute:"store-list-key",reflect:!0})],Ke.prototype,"storeListKey",2);Pt([xe({type:String,attribute:"primary",reflect:!0})],Ke.prototype,"primary",2);Pt([xe({type:String,attribute:"secondary",reflect:!0})],Ke.prototype,"secondary",2);Pt([xe({type:Boolean,attribute:"allow-deletion",reflect:!0})],Ke.prototype,"allowDeletion",2);Ke=Pt([Ue("pg-drawer-item")],Ke);const fi=Ke;var $c=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,Gc=(s,e,t,i)=>{for(var r=i>1?void 0:i?Lc(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&$c(e,t,r),r};let we=class extends Ie{static queryStore(){return document.querySelector("ui-store")}static queryAppBar(){return document.querySelector("ui-app-bar")||null}static queryDrawer(){return document.querySelector("ui-drawer")||null}static queryStackLayout(){return document.querySelector("ui-stack-layout")}static queryImportDialog(){return document.querySelector("pg-import-dialog")}constructor(){super(),this.initializeStores()}initializeStores(){const s=we.queryStore();s.setData("drawerGroup",{},!0),s.setData("alertLists",[],!0),s.setData("metalSheets",[],!0),s.setData("gist",{},!0)}createRenderRoot(){return this}render(){return Oe`
            <div class="is-container no-scrollbar" style="height: 100%;">
                <ui-stack-layout></ui-stack-layout>
            </div>

            ${this.renderAppBar()} ${this.renderDrawer()}
            ${this.renderDialogs()}
        `}renderAppBar(){return Oe`
            <ui-app-bar position="top">
                <ui-app-bar-item name="menu" slot="left">
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{const s=we.queryDrawer();s.open=!0}}
                    >
                        ${Ne.smoothieLineIcons.menu}
                    </ui-icon-button>
                </ui-app-bar-item>

                <ui-app-bar-item name="back" slot="left" hidden>
                    <ui-icon-button
                        ghost
                        ripple
                        @click=${()=>{we.queryStackLayout().goBack()}}
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
        `}renderDrawer(){var e,t,i;const s=we.queryStore();return Oe`
            <ui-drawer
                ?open=${!!((e=s.getData("drawer"))!=null&&e.open)}
                @open=${()=>{s.setData("drawer",{open:!0})}}
                @close=${()=>{s.setData("drawer",{open:!1})}}
            >
                <ui-drawer-group name="app-info" no-fold>
                    <ui-button
                        style="${ds({display:"flex",justifyContent:"flex-start",marginBottom:"var(--ui-spacing)",padding:"0.25rem",fontSize:"0.85rem",textTransform:"none"})}"
                        variant="ghost"
                        color="primary"
                        ripple
                        @click=${()=>{}}
                    >
                        ${uo} - [Build: ${uc}]
                    </ui-button>
                </ui-drawer-group>

                <ui-drawer-group
                    name="alert-lists"
                    title="Alarm Listen"
                    data-fixed-items="2"
                    gap="0.25rem"
                    ?open=${!!((i=(t=s.getData("drawerGroup"))==null?void 0:t["alert-lists"])!=null&&i.open)}
                    @fold=${()=>{s.updateData("drawerGroup",r=>(r["alert-lists"]={open:!1},r))}}
                    @unfold=${()=>{s.updateData("drawerGroup",r=>(r["alert-lists"]={open:!0},r))}}
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
        `}renderDialogs(){return Oe` <pg-import-dialog></pg-import-dialog> `}updated(s){this.updatedRegisterPages(),this.updatedLayout()}updatedRegisterPages(){const s=we.queryStackLayout();s.registerPage("alertLists",()=>{const e=new Ur;e.name="alertLists";const t=new Sc;return e.appendChild(t),e}),s.registerPage("metalSheets",()=>{const e=new Ur;e.name="metalSheets";const t=new xc;return e.appendChild(t),e}),s.registerPage("alert",()=>{const e=new Ur;e.name="alert";const t=new mc;return e.appendChild(t),e})}updatedLayout(){const s=we.queryStackLayout(),e=we.queryAppBar(),t=we.queryDrawer();s.events.addListener("change",({current:i})=>{if(s.stackSize()>1?e.contentName("back").show():e.contentName("back").hide(),e.content("left").forEach(r=>{r.name==="menu"||r.name==="back"||r.hide()}),e.content("right").forEach(r=>{r.hide()}),i===null){e.contentName("title").contentAt(0).innerText="PG: Vis",t.open=!0;return}switch(i.name){case"alertLists":e.contentName("search").show();break;case"metalSheets":e.contentName("edit").show();break;case"visData":e.contentName("edit").show();break}})}firstUpdated(s){this.style.position="fixed",this.style.top="0",this.style.right="0",this.style.bottom="0",this.style.left="0";const e=we.queryStore();e.addListener("alertLists",t=>{const i=this.querySelector('ui-drawer-group[name="alert-lists"]'),r=parseInt(i.getAttribute("data-fixed-items")||"0");Array.from(i.children).slice(r).forEach(o=>i.removeChild(o));const n=De("alertLists");t.forEach(async o=>{const a=new fi;a.storeKey=n.key(),a.primary=a.storeListKey=n.listKey(o),a.secondary=`${o.data.length} Einträge`,a.allowDeletion=!0,i.appendChild(a)})},!0),e.addListener("metalSheets",t=>{const i=this.querySelector('ui-drawer-group[name="metal-sheets"]'),r=parseInt(i.getAttribute("data-fixed-items")||"0");Array.from(i.children).slice(r).forEach(o=>i.removeChild(o));const n=De("metalSheets");t.forEach(async o=>{const a=new fi;a.storeKey=n.key(),a.primary=a.storeListKey=n.listKey(o),a.secondary=`${o.data.table.data.length} Einträge`,a.allowDeletion=!0,i.appendChild(a)})})}};we=Gc([Ue("pg-app")],we);const Dc="modulepreload",Uc=function(s){return"/pg-vis-dev.github.io/"+s},gi={},Fc=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=Uc(c),c in gi)return;gi[c]=!0;const f=c.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":Dc,f||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),f)return new Promise((b,p)=>{h.addEventListener("load",b),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})};function jc(s={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:r,onRegisteredSW:n,onRegisterError:o}=s;let a,c;const f=async(h=!0)=>{await c};async function m(){if("serviceWorker"in navigator){if(a=await Fc(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/pg-vis-dev.github.io/sw.js",{scope:"/pg-vis-dev.github.io/",type:"classic"})).catch(h=>{o==null||o(h)}),!a)return;a.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),a.addEventListener("installed",h=>{h.isUpdate||i==null||i()}),a.register({immediate:e}).then(h=>{n?n("/pg-vis-dev.github.io/sw.js",h):r==null||r(h)}).catch(h=>{o==null||o(h)})}}return c=m(),f}jc({onRegistered(s){setTimeout(async()=>{try{console.debug(`Update service... (currentVersion: ${uo})`),await(s==null?void 0:s.update())}catch(e){console.warn(`Auto update failed: ${e}`)}})}});

const E=new Map,y={set(e,t,r){E.has(e)||E.set(e,new Map);const n=E.get(e);if(!n.has(t)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(t,r)},get(e,t){return E.has(e)&&E.get(e).get(t)||null},remove(e,t){if(!E.has(e))return;const r=E.get(e);r.delete(t),r.size===0&&E.delete(e)}},rt=1e3,L="transitionend",q=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,r)=>`#${CSS.escape(r)}`)),e),nt=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),st=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:r}=window.getComputedStyle(e);const n=Number.parseFloat(t),s=Number.parseFloat(r);return!n&&!s?0:(t=t.split(",")[0],r=r.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(r))*rt)},ot=e=>{e.dispatchEvent(new Event(L))},m=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),M=e=>m(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(q(e)):null,it=e=>{if(!m(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",r=e.closest("details:not([open])");if(!r)return t;if(r!==e){const n=e.closest("summary");if(n&&n.parentNode!==r||n===null)return!1}return t},$=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",U=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,O=[],at=e=>{document.readyState==="loading"?(O.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of O)t()}),O.push(e)):e()},ut=e=>{at(()=>{const t=U();if(t){const r=e.NAME,n=t.fn[r];t.fn[r]=e.jQueryInterface,t.fn[r].Constructor=e,t.fn[r].noConflict=()=>(t.fn[r]=n,e.jQueryInterface)}})},P=(e,t=[],r=e)=>typeof e=="function"?e(...t):r,ct=(e,t,r=!0)=>{if(!r){P(e);return}const s=st(t)+5;let i=!1;const o=({target:a})=>{a===t&&(i=!0,t.removeEventListener(L,o),P(e))};t.addEventListener(L,o),setTimeout(()=>{i||ot(t)},s)},lt=(e,t,r,n)=>{const s=e.length;let i=e.indexOf(t);return i===-1?!r&&n?e[s-1]:e[0]:(i+=r?1:-1,i=(i+s)%s,e[Math.max(0,Math.min(i,s-1))])},ft=/[^.]*(?=\..*)\.|.*/,dt=/\..*/,gt=/::\d+$/,N={};let k=1;const Q={mouseenter:"mouseover",mouseleave:"mouseout"},Et=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function G(e,t){return t&&`${t}::${k++}`||e.uidEvent||k++}function z(e){const t=G(e);return e.uidEvent=t,N[t]=N[t]||{},N[t]}function pt(e,t){return function r(n){return R(n,{delegateTarget:e}),r.oneOff&&f.off(e,n.type,t),t.apply(e,[n])}}function ht(e,t,r){return function n(s){const i=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return R(s,{delegateTarget:o}),n.oneOff&&f.off(e,s.type,t,r),r.apply(o,[s])}}function B(e,t,r=null){return Object.values(e).find(n=>n.callable===t&&n.delegationSelector===r)}function J(e,t,r){const n=typeof t=="string",s=n?r:t||r;let i=Z(e);return Et.has(i)||(i=e),[n,s,i]}function K(e,t,r,n,s){if(typeof t!="string"||!e)return;let[i,o,a]=J(t,r,n);t in Q&&(o=(et=>function(b){if(!b.relatedTarget||b.relatedTarget!==b.delegateTarget&&!b.delegateTarget.contains(b.relatedTarget))return et.call(this,b)})(o));const u=z(e),g=u[a]||(u[a]={}),c=B(g,o,i?r:null);if(c){c.oneOff=c.oneOff&&s;return}const _=G(o,t.replace(ft,"")),d=i?ht(e,r,o):pt(e,o);d.delegationSelector=i?r:null,d.callable=o,d.oneOff=s,d.uidEvent=_,g[_]=d,e.addEventListener(a,d,i)}function I(e,t,r,n,s){const i=B(t[r],n,s);i&&(e.removeEventListener(r,i,!!s),delete t[r][i.uidEvent])}function _t(e,t,r,n){const s=t[r]||{};for(const[i,o]of Object.entries(s))i.includes(n)&&I(e,t,r,o.callable,o.delegationSelector)}function Z(e){return e=e.replace(dt,""),Q[e]||e}const f={on(e,t,r,n){K(e,t,r,n,!1)},one(e,t,r,n){K(e,t,r,n,!0)},off(e,t,r,n){if(typeof t!="string"||!e)return;const[s,i,o]=J(t,r,n),a=o!==t,u=z(e),g=u[o]||{},c=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(g).length)return;I(e,u,o,i,s?r:null);return}if(c)for(const _ of Object.keys(u))_t(e,u,_,t.slice(1));for(const[_,d]of Object.entries(g)){const x=_.replace(gt,"");(!a||t.includes(x))&&I(e,u,o,d.callable,d.delegationSelector)}},trigger(e,t,r){if(typeof t!="string"||!e)return null;const n=U(),s=Z(t),i=t!==s;let o=null,a=!0,u=!0,g=!1;i&&n&&(o=n.Event(t,r),n(e).trigger(o),a=!o.isPropagationStopped(),u=!o.isImmediatePropagationStopped(),g=o.isDefaultPrevented());const c=R(new Event(t,{bubbles:a,cancelable:!0}),r);return g&&c.preventDefault(),u&&e.dispatchEvent(c),c.defaultPrevented&&o&&o.preventDefault(),c}};function R(e,t={}){for(const[r,n]of Object.entries(t))try{e[r]=n}catch{Object.defineProperty(e,r,{configurable:!0,get(){return n}})}return e}function W(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function D(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Y={setDataAttribute(e,t,r){e.setAttribute(`data-bs-${D(t)}`,r)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${D(t)}`)},getDataAttributes(e){if(!e)return{};const t={},r=Object.keys(e.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of r){let s=n.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),t[s]=W(e.dataset[n])}return t},getDataAttribute(e,t){return W(e.getAttribute(`data-bs-${D(t)}`))}};class bt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,r){const n=m(r)?Y.getDataAttribute(r,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...m(r)?Y.getDataAttributes(r):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,r=this.constructor.DefaultType){for(const[n,s]of Object.entries(r)){const i=t[n],o=m(i)?"element":nt(i);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`)}}}const At="5.3.3";class mt extends bt{constructor(t,r){super(),t=M(t),t&&(this._element=t,this._config=this._getConfig(r),y.set(this._element,this.constructor.DATA_KEY,this))}dispose(){y.remove(this._element,this.constructor.DATA_KEY),f.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,r,n=!0){ct(t,r,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return y.get(M(t),this.DATA_KEY)}static getOrCreateInstance(t,r={}){return this.getInstance(t)||new this(t,typeof r=="object"?r:null)}static get VERSION(){return At}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const C=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let r=e.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),t=r&&r!=="#"?r.trim():null}return t?t.split(",").map(r=>q(r)).join(","):null},l={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(r=>r.matches(t))},parents(e,t){const r=[];let n=e.parentNode.closest(t);for(;n;)r.push(n),n=n.parentNode.closest(t);return r},prev(e,t){let r=e.previousElementSibling;for(;r;){if(r.matches(t))return[r];r=r.previousElementSibling}return[]},next(e,t){let r=e.nextElementSibling;for(;r;){if(r.matches(t))return[r];r=r.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(r=>`${r}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(r=>!$(r)&&it(r))},getSelectorFromElement(e){const t=C(e);return t&&l.findOne(t)?t:null},getElementFromSelector(e){const t=C(e);return t?l.findOne(t):null},getMultipleElementsFromSelector(e){const t=C(e);return t?l.find(t):[]}},yt="tab",Ot="bs.tab",h=`.${Ot}`,Nt=`hide${h}`,Dt=`hidden${h}`,Ct=`show${h}`,Tt=`shown${h}`,St=`click${h}`,wt=`keydown${h}`,vt=`load${h}`,Lt="ArrowLeft",V="ArrowRight",It="ArrowUp",j="ArrowDown",T="Home",F="End",p="active",H="fade",S="show",$t="dropdown",X=".dropdown-toggle",Rt=".dropdown-menu",w=`:not(${X})`,xt='.list-group, .nav, [role="tablist"]',Mt=".nav-item, .list-group-item",Pt=`.nav-link${w}, .list-group-item${w}, [role="tab"]${w}`,tt='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',v=`${Pt}, ${tt}`,kt=`.${p}[data-bs-toggle="tab"], .${p}[data-bs-toggle="pill"], .${p}[data-bs-toggle="list"]`;class A extends mt{constructor(t){super(t),this._parent=this._element.closest(xt),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),f.on(this._element,wt,r=>this._keydown(r)))}static get NAME(){return yt}show(){const t=this._element;if(this._elemIsActive(t))return;const r=this._getActiveElem(),n=r?f.trigger(r,Nt,{relatedTarget:t}):null;f.trigger(t,Ct,{relatedTarget:r}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(r,t),this._activate(t,r))}_activate(t,r){if(!t)return;t.classList.add(p),this._activate(l.getElementFromSelector(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(S);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),f.trigger(t,Tt,{relatedTarget:r})};this._queueCallback(n,t,t.classList.contains(H))}_deactivate(t,r){if(!t)return;t.classList.remove(p),t.blur(),this._deactivate(l.getElementFromSelector(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(S);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),f.trigger(t,Dt,{relatedTarget:r})};this._queueCallback(n,t,t.classList.contains(H))}_keydown(t){if(![Lt,V,It,j,T,F].includes(t.key))return;t.stopPropagation(),t.preventDefault();const r=this._getChildren().filter(s=>!$(s));let n;if([T,F].includes(t.key))n=r[t.key===T?0:r.length-1];else{const s=[V,j].includes(t.key);n=lt(r,t.target,s,!0)}n&&(n.focus({preventScroll:!0}),A.getOrCreateInstance(n).show())}_getChildren(){return l.find(v,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,r){this._setAttributeIfNotExists(t,"role","tablist");for(const n of r)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const r=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",r),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),r||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const r=l.getElementFromSelector(t);r&&(this._setAttributeIfNotExists(r,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(r,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,r){const n=this._getOuterElement(t);if(!n.classList.contains($t))return;const s=(i,o)=>{const a=l.findOne(i,n);a&&a.classList.toggle(o,r)};s(X,p),s(Rt,S),n.setAttribute("aria-expanded",r)}_setAttributeIfNotExists(t,r,n){t.hasAttribute(r)||t.setAttribute(r,n)}_elemIsActive(t){return t.classList.contains(p)}_getInnerElement(t){return t.matches(v)?t:l.findOne(v,t)}_getOuterElement(t){return t.closest(Mt)||t}static jQueryInterface(t){return this.each(function(){const r=A.getOrCreateInstance(this);if(typeof t=="string"){if(r[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);r[t]()}})}}f.on(document,St,tt,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!$(this)&&A.getOrCreateInstance(this).show()});f.on(window,vt,()=>{for(const e of l.find(kt))A.getOrCreateInstance(e)});ut(A);export{A as T};

var j=window,B=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),pt=new WeakMap,R=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(B&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&pt.set(e,t))}return t}toString(){return this.cssText}},mt=s=>new R(typeof s=="string"?s:s+"",void 0,J),Xt=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((o,i,r)=>o+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new R(e,s,J)},Z=(s,t)=>{B?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let o=document.createElement("style"),i=j.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,s.appendChild(o)})},I=B?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return mt(e)})(s):s;var X,q=window,vt=q.trustedTypes,te=vt?vt.emptyScript:"",ft=q.reactiveElementPolyfillSupport,et={toAttribute(s,t){switch(t){case Boolean:s=s?te:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},$t=(s,t)=>t!==s&&(t==t||s==s),tt={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:$t},ot="finalized",$=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,o)=>{let i=this._$Ep(o,e);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){let r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||tt}static finalize(){if(this.hasOwnProperty(ot))return!1;this[ot]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let i of o)e.unshift(I(i))}else t!==void 0&&e.push(I(t));return e}static _$Ep(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Z(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=tt){var i;let r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){let l=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:et).toAttribute(e,o.type);this._$El=t,l==null?this.removeAttribute(r):this.setAttribute(r,l),this._$El=null}}_$AK(t,e){var o;let i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){let l=i.getPropertyOptions(r),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?l.converter:et;this._$El=r,this[r]=c.fromAttribute(e,l.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||$t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(o)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};$[ot]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},ft?.({ReactiveElement:$}),((X=q.reactiveElementVersions)!==null&&X!==void 0?X:q.reactiveElementVersions=[]).push("1.6.3");var st,V=window,w=V.trustedTypes,_t=w?w.createPolicy("lit-html",{createHTML:s=>s}):void 0,z="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+_,ee=`<${rt}>`,E=document,L=()=>E.createComment(""),O=s=>s===null||typeof s!="object"&&typeof s!="function",Ct=Array.isArray,xt=s=>Ct(s)||typeof s?.[Symbol.iterator]=="function",it=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,gt=/>/g,g=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,Et=/"/g,wt=/^(?:script|style|textarea|title)$/i,Pt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),kt=Pt(1),Tt=Pt(2),y=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),bt=new WeakMap,A=E.createTreeWalker(E,129,null,!1);function Rt(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return _t!==void 0?_t.createHTML(t):t}var Mt=(s,t)=>{let e=s.length-1,o=[],i,r=t===2?"<svg>":"",l=M;for(let c=0;c<e;c++){let a=s[c],d,h,u=-1,m=0;for(;m<a.length&&(l.lastIndex=m,h=l.exec(a),h!==null);)m=l.lastIndex,l===M?h[1]==="!--"?l=yt:h[1]!==void 0?l=gt:h[2]!==void 0?(wt.test(h[2])&&(i=RegExp("</"+h[2],"g")),l=g):h[3]!==void 0&&(l=g):l===g?h[0]===">"?(l=i??M,u=-1):h[1]===void 0?u=-2:(u=l.lastIndex-h[2].length,d=h[1],l=h[3]===void 0?g:h[3]==='"'?Et:At):l===Et||l===At?l=g:l===yt||l===gt?l=M:(l=g,i=void 0);let f=l===g&&s[c+1].startsWith("/>")?" ":"";r+=l===M?a+ee:u>=0?(o.push(d),a.slice(0,u)+z+a.slice(u)+_+f):a+_+(u===-2?(o.push(void 0),c):f)}return[Rt(s,r+(s[e]||"<?>")+(t===2?"</svg>":"")),o]},U=class s{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,l=0,c=t.length-1,a=this.parts,[d,h]=Mt(t,e);if(this.el=s.createElement(d,o),A.currentNode=this.el.content,e===2){let u=this.el.content,m=u.firstChild;m.remove(),u.append(...m.childNodes)}for(;(i=A.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let u=[];for(let m of i.getAttributeNames())if(m.endsWith(z)||m.startsWith(_)){let f=h[l++];if(u.push(m),f!==void 0){let Zt=i.getAttribute(f.toLowerCase()+z).split(_),D=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:D[2],strings:Zt,ctor:D[1]==="."?G:D[1]==="?"?K:D[1]==="@"?F:S})}else a.push({type:6,index:r})}for(let m of u)i.removeAttribute(m)}if(wt.test(i.tagName)){let u=i.textContent.split(_),m=u.length-1;if(m>0){i.textContent=w?w.emptyScript:"";for(let f=0;f<m;f++)i.append(u[f],L()),A.nextNode(),a.push({type:2,index:++r});i.append(u[m],L())}}}else if(i.nodeType===8)if(i.data===rt)a.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(_,u+1))!==-1;)a.push({type:7,index:r}),u+=_.length-1}r++}}static createElement(t,e){let o=E.createElement("template");return o.innerHTML=t,o}};function b(s,t,e=s,o){var i,r,l,c;if(t===y)return t;let a=o!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[o]:e._$Cl,d=O(t)?void 0:t._$litDirective$;return a?.constructor!==d&&((r=a?._$AO)===null||r===void 0||r.call(a,!1),d===void 0?a=void 0:(a=new d(s),a._$AT(s,e,o)),o!==void 0?((l=(c=e)._$Co)!==null&&l!==void 0?l:c._$Co=[])[o]=a:e._$Cl=a),a!==void 0&&(t=b(s,a._$AS(s,t.values),a,o)),t}var W=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:o},parts:i}=this._$AD,r=((e=t?.creationScope)!==null&&e!==void 0?e:E).importNode(o,!0);A.currentNode=r;let l=A.nextNode(),c=0,a=0,d=i[0];for(;d!==void 0;){if(c===d.index){let h;d.type===2?h=new P(l,l.nextSibling,this,t):d.type===1?h=new d.ctor(l,d.name,d.strings,this,t):d.type===6&&(h=new Y(l,this,t)),this._$AV.push(h),d=i[++a]}c!==d?.index&&(l=A.nextNode(),c++)}return A.currentNode=E,r}v(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},P=class s{constructor(t,e,o,i){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=(r=i?.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),O(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):xt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;let{values:o,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(Rt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(o);else{let l=new W(r,this),c=l.u(this.options);l.v(o),this.$(c),this._$AH=l}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new U(t)),e}T(t){Ct(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,i=0;for(let r of t)i===e.length?e.push(o=new s(this.k(L()),this.k(L()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},S=class{constructor(t,e,o,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){let r=this.strings,l=!1;if(r===void 0)t=b(this,t,e,0),l=!O(t)||t!==this._$AH&&t!==y,l&&(this._$AH=t);else{let c=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=b(this,c[o+a],e,a),d===y&&(d=this._$AH[a]),l||(l=!O(d)||d!==this._$AH[a]),d===p?t=p:t!==p&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}l&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},G=class extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},oe=w?w.emptyScript:"",K=class extends S{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,oe):this.element.removeAttribute(this.name)}},F=class extends S{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=b(this,t,e,0))!==null&&o!==void 0?o:p)===y)return;let i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,l=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Y=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}},Lt={O:z,P:_,A:rt,C:1,M:Mt,L:W,R:xt,D:b,I:P,V:S,H:K,N:F,U:G,F:Y},St=V.litHtmlPolyfillSupport;St?.(U,P),((st=V.litHtmlVersions)!==null&&st!==void 0?st:V.litHtmlVersions=[]).push("2.8.0");var Ot=(s,t,e)=>{var o,i;let r=(o=e?.renderBefore)!==null&&o!==void 0?o:t,l=r._$litPart$;if(l===void 0){let c=(i=e?.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=l=new P(t.insertBefore(L(),c),c,void 0,e??{})}return l._$AI(s),l};var nt,lt,we=$,k=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}};k.finalized=!0,k._$litElement$=!0,(nt=globalThis.litElementHydrateSupport)===null||nt===void 0||nt.call(globalThis,{LitElement:k});var Ut=globalThis.litElementPolyfillSupport;Ut?.({LitElement:k});var Pe={_$AK:(s,t,e)=>{s._$AK(t,e)},_$AL:s=>s._$AL};((lt=globalThis.litElementVersions)!==null&&lt!==void 0?lt:globalThis.litElementVersions=[]).push("3.3.3");var Me=!1;var at=class s{constructor(t){this._elements=[];s._roots.has(t)?console.warn(`
                Warning: You are calling createRoot() on a container that has already been passed to createRoot() before. 
                Call root.render() on the existing root instead if you want to update it.
            `):this._container=t}static{this._roots=new Map}render(t){return this._elements.push(t),this._container.appendChild(t),t}unmount(){this._elements.forEach(t=>t.remove()),this._elements.length=0,this._container=void 0}};function se(s){return new at(s)}var{I:Ie}=Lt;var Nt=s=>s.strings===void 0;var N={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},x=s=>(...t)=>({_$litDirective$:s,values:t}),C=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var H=(s,t)=>{var e,o;let i=s._$AN;if(i===void 0)return!1;for(let r of i)(o=(e=r)._$AO)===null||o===void 0||o.call(e,t,!1),H(r,t);return!0},Q=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Ht=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),ne(t)}};function ie(s){this._$AN!==void 0?(Q(this),this._$AM=s,Ht(this)):this._$AM=s}function re(s,t=!1,e=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(o))for(let r=e;r<o.length;r++)H(o[r],!1),Q(o[r]);else o!=null&&(H(o,!1),Q(o));else H(this,s)}var ne=s=>{var t,e,o,i;s.type==N.CHILD&&((t=(o=s)._$AP)!==null&&t!==void 0||(o._$AP=re),(e=(i=s)._$AQ)!==null&&e!==void 0||(i._$AQ=ie))},T=class extends C{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),Ht(this),this.isConnected=t._$AU}_$AO(t,e=!0){var o,i;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),e&&(H(this,t),Q(this))}setValue(t){if(Nt(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var le=()=>new dt,dt=class{},ct=new WeakMap,ae=x(class extends T{render(s){return p}update(s,[t]){var e;let o=t!==this.G;return o&&this.G!==void 0&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=t,this.dt=(e=s.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=s.element)),p}ot(s){var t;if(typeof this.G=="function"){let e=(t=this.dt)!==null&&t!==void 0?t:globalThis,o=ct.get(e);o===void 0&&(o=new WeakMap,ct.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.dt,void 0),o.set(this.G,s),s!==void 0&&this.G.call(this.dt,s)}else this.G.value=s}get rt(){var s,t,e;return typeof this.G=="function"?(t=ct.get((s=this.dt)!==null&&s!==void 0?s:globalThis))===null||t===void 0?void 0:t.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var jt=Symbol.for(""),ce=s=>{if(s?.r===jt)return s?._$litStatic$};var n=(s,...t)=>({_$litStatic$:t.reduce((e,o,i)=>e+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+s[i+1],s[0]),r:jt}),Dt=new Map,Bt=s=>(t,...e)=>{let o=e.length,i,r,l=[],c=[],a,d=0,h=!1;for(;d<o;){for(a=t[d];d<o&&(r=e[d],(i=ce(r))!==void 0);)a+=i+t[++d],h=!0;d!==o&&c.push(r),l.push(a),d++}if(d===o&&l.push(t[o]),h){let u=l.join("$$lit$$");(t=Dt.get(u))===void 0&&(l.raw=l,Dt.set(u,t=l)),e=c}return s(t,...e)},It=Bt(kt),oo=Bt(Tt);var qt="important",de=" !"+qt,he=x(class extends C{constructor(s){var t;if(super(s),s.type!==N.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{let o=s[e];return o==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(s,[t]){let{style:e}=s.element;if(this.ht===void 0){this.ht=new Set;for(let o in t)this.ht.add(o);return this.render(t)}this.ht.forEach(o=>{t[o]==null&&(this.ht.delete(o),o.includes("-")?e.removeProperty(o):e[o]="")});for(let o in t){let i=t[o];if(i!=null){this.ht.add(o);let r=typeof i=="string"&&i.endsWith(de);o.includes("-")||r?e.setProperty(o,r?i.slice(0,-11):i,r?qt:""):e[o]=i}}return y}});var ht=class extends T{constructor(){super(...arguments);this.prevData={}}render(e){return p}update(e,[o]){this.element!==e.element&&(this.element=e.element),this.host=e.options?.host||this.element,this.apply(o),this.groom(o),this.prevData=o}apply(e){if(!e)return;let{prevData:o,element:i}=this;for(let r in e){let l=e[r];if(l===o[r])continue;let c=r.slice(1);switch(r[0]){case"@":o[r]&&i.removeEventListener(c,this,l),i.addEventListener(c,this,l);break;case".":i[c]=l;break;case"?":l?i.setAttribute(c,""):i.removeAttribute(c);break;default:l!=null?i.setAttribute(r,String(l)):i.removeAttribute(r);break}}}groom(e){let{prevData:o,element:i}=this;if(o)for(let r in o){if(!e||!(r in e)||e[r]===void 0||e[r]===null)switch(r[0]){case"@":let c=o[r];i.removeEventListener(r.slice(1),this,c);break;case".":i[r.slice(1)]=void 0;break;case"?":i.removeAttribute(r.slice(1));break;default:i.removeAttribute(r);break}r in e&&delete this.prevData[r]}}handleEvent(e){let o=this.prevData[`@${e.type}`];typeof o=="function"?o.call(this.host,e):o.handleEvent(e)}disconnected(){let{prevData:e,element:o}=this;for(let i in e){if(i[0]!=="@")continue;let r=e[i];o.removeEventListener(i.slice(1),this,r)}}reconnected(){let{prevData:e,element:o}=this;for(let i in e){if(i[0]!=="@")continue;let r=e[i];o.addEventListener(i.slice(1),this,r)}}},Vt=x(ht);var ue={a:n`a`,abbr:n`abbr`,address:n`address`,area:n`area`,article:n`article`,aside:n`aside`,audio:n`audio`,b:n`b`,base:n`base`,bdi:n`bdi`,bdo:n`bdo`,blockquote:n`blockquote`,body:n`body`,br:n`br`,button:n`button`,canvas:n`canvas`,caption:n`caption`,cite:n`cite`,code:n`code`,col:n`col`,colgroup:n`colgroup`,data:n`data`,datalist:n`datalist`,dd:n`dd`,del:n`del`,details:n`details`,dfn:n`dfn`,dialog:n`dialog`,div:n`div`,dl:n`dl`,dt:n`dt`,em:n`em`,embed:n`embed`,fieldset:n`fieldset`,figcaption:n`figcaption`,figure:n`figure`,footer:n`footer`,form:n`form`,h1:n`h1`,h2:n`h2`,h3:n`h3`,h4:n`h4`,h5:n`h5`,h6:n`h6`,head:n`head`,header:n`header`,hgroup:n`hgroup`,hr:n`hr`,html:n`html`,i:n`i`,iframe:n`iframe`,img:n`img`,input:n`input`,ins:n`ins`,kbd:n`kbd`,label:n`label`,legend:n`legend`,li:n`li`,link:n`link`,main:n`main`,map:n`map`,mark:n`mark`,menu:n`menu`,meta:n`meta`,meter:n`meter`,nav:n`nav`,noscript:n`noscript`,ol:n`ol`,optgroup:n`optgroup`,option:n`option`,output:n`output`,p:n`p`,picture:n`picture`,pre:n`pre`,progress:n`progress`,q:n`q`,rp:n`rp`,rt:n`rt`,ruby:n`ruby`,s:n`s`,samp:n`samp`,script:n`script`,section:n`section`,select:n`select`,slot:n`slot`,small:n`small`,source:n`source`,span:n`span`,strong:n`strong`,style:n`style`,sub:n``,summary:n`summary`,sup:n`sup`,table:n`table`,tbody:n`tbody`,td:n`td`,template:n`template`,textarea:n`textarea`,tfoot:n`tfoot`,th:n`th`,thead:n`thead`,time:n`time`,title:n`title`,tr:n`tr`,track:n`track`,u:n`u`,ul:n`ul`,var:n`var`,video:n`video`,wbr:n`wbr`,default:n`<div>`},zt=ue;var Wt;function pe(s){Object.assign(Wt,s)}function Gt(){Wt=Object.assign({},zt)}Gt();var me=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}},ve=(s,t,e)=>{t.constructor.createProperty(e,s)};function Kt(s){return(t,e)=>e!==void 0?ve(s,t,e):me(s,t)}function Io(s){return Kt({...s,state:!0})}var v=({finisher:s,descriptor:t})=>(e,o)=>{var i;if(o===void 0){let r=(i=e.originalKey)!==null&&i!==void 0?i:e.key,l=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return s!=null&&(l.finisher=function(c){s(c,r)}),l}{let r=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),s?.(r,o)}};function Wo(s){return v({finisher:(t,e)=>{Object.assign(t.prototype[e],s)}})}function Fo(s,t){return v({descriptor:e=>{let o={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){let i=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,l;return this[i]===void 0&&(this[i]=(l=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&l!==void 0?l:null),this[i]}}return o}})}function Jo(s){return v({descriptor:t=>({get(){var e,o;return(o=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelectorAll(s))!==null&&o!==void 0?o:[]},enumerable:!0,configurable:!0})})}function ts(s){return v({descriptor:t=>({async get(){var e;return await this.updateComplete,(e=this.renderRoot)===null||e===void 0?void 0:e.querySelector(s)},enumerable:!0,configurable:!0})})}var ut,fe=((ut=window.HTMLSlotElement)===null||ut===void 0?void 0:ut.prototype.assignedElements)!=null?(s,t)=>s.assignedElements(t):(s,t)=>s.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function Ft(s){let{slot:t,selector:e}=s??{};return v({descriptor:o=>({get(){var i;let r="slot"+(t?`[name=${t}]`:":not([name])"),l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(r),c=l!=null?fe(l,s):[];return e?c.filter(a=>a.matches(e)):c},enumerable:!0,configurable:!0})})}function ns(s,t,e){let o,i=s;return typeof s=="object"?(i=s.slot,o=s):o={flatten:t},e?Ft({slot:i,flatten:t,selector:e}):v({descriptor:r=>({get(){var l,c;let a="slot"+(i?`[name=${i}]`:":not([name])"),d=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(a);return(c=d?.assignedNodes(o))!==null&&c!==void 0?c:[]},enumerable:!0,configurable:!0})})}var Yt=new Map,Qt=()=>{window.removeEventListener("beforeunload",Qt),Yt.clear()};window.addEventListener("beforeunload",Qt);var Jt=Yt;var $e=(s,t)=>(customElements.define(s,t),t),_e=(s,t)=>{let{kind:e,elements:o}=t;return{kind:e,elements:o,finisher(i){customElements.define(s,i)}}},ye=s=>t=>{Jt.set(t,s),typeof t=="function"?$e(s,t):_e(s,t)};export{R as CSSResult,k as LitElement,$ as ReactiveElement,we as UpdatingElement,Pe as _$LE,Lt as _$LH,Z as adoptStyles,pe as assignElements,le as createRef,se as createRoot,Xt as css,ye as customElement,et as defaultConverter,Wo as eventOptions,I as getCompatibleStyle,kt as html,Me as isServer,y as noChange,$t as notEqual,p as nothing,Kt as property,Fo as query,Jo as queryAll,Ft as queryAssignedElements,ns as queryAssignedNodes,ts as queryAsync,Ot as render,Gt as resetElements,Vt as spread,Io as state,B as supportsAdoptingStyleSheets,Tt as svg,mt as unsafeCSS};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/

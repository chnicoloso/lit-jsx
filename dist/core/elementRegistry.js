var k,C=window,f=C.trustedTypes,j=f?f.createPolicy("lit-html",{createHTML:r=>r}):void 0,I="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,F="?"+A,st=`<${F}>`,g=document,T=()=>g.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",Z=Array.isArray,nt=r=>Z(r)||typeof r?.[Symbol.iterator]=="function",E=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,D=/>/g,_=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,q=/"/g,G=/^(?:script|style|textarea|title)$/i,J=r=>(t,...i)=>({_$litType$:r,strings:t,values:i}),K=J(1),Q=J(2),N=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),O=new WeakMap,m=g.createTreeWalker(g,129,null,!1);function X(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return j!==void 0?j.createHTML(t):t}var ot=(r,t)=>{let i=r.length-1,s=[],n,l=t===2?"<svg>":"",o=x;for(let c=0;c<i;c++){let a=r[c],h,d,u=-1,$=0;for(;$<a.length&&(o.lastIndex=$,d=o.exec(a),d!==null);)$=o.lastIndex,o===x?d[1]==="!--"?o=L:d[1]!==void 0?o=D:d[2]!==void 0?(G.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=_):d[3]!==void 0&&(o=_):o===_?d[0]===">"?(o=n??x,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?_:d[3]==='"'?q:W):o===q||o===W?o=_:o===L||o===D?o=x:(o=_,n=void 0);let v=o===_&&r[c+1].startsWith("/>")?" ":"";l+=o===x?a+st:u>=0?(s.push(h),a.slice(0,u)+I+a.slice(u)+A+v):a+A+(u===-2?(s.push(void 0),c):v)}return[X(r,l+(r[i]||"<?>")+(t===2?"</svg>":"")),s]},w=class r{constructor({strings:t,_$litType$:i},s){let n;this.parts=[];let l=0,o=0,c=t.length-1,a=this.parts,[h,d]=ot(t,i);if(this.el=r.createElement(h,s),m.currentNode=this.el.content,i===2){let u=this.el.content,$=u.firstChild;$.remove(),u.append(...$.childNodes)}for(;(n=m.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){let u=[];for(let $ of n.getAttributeNames())if($.endsWith(I)||$.startsWith(A)){let v=d[o++];if(u.push($),v!==void 0){let it=n.getAttribute(v.toLowerCase()+I).split(A),S=/([.?@])?(.*)/.exec(v);a.push({type:1,index:l,name:S[2],strings:it,ctor:S[1]==="."?U:S[1]==="?"?P:S[1]==="@"?R:b})}else a.push({type:6,index:l})}for(let $ of u)n.removeAttribute($)}if(G.test(n.tagName)){let u=n.textContent.split(A),$=u.length-1;if($>0){n.textContent=f?f.emptyScript:"";for(let v=0;v<$;v++)n.append(u[v],T()),m.nextNode(),a.push({type:2,index:++l});n.append(u[$],T())}}}else if(n.nodeType===8)if(n.data===F)a.push({type:2,index:l});else{let u=-1;for(;(u=n.data.indexOf(A,u+1))!==-1;)a.push({type:7,index:l}),u+=A.length-1}l++}}static createElement(t,i){let s=g.createElement("template");return s.innerHTML=t,s}};function y(r,t,i=r,s){var n,l,o,c;if(t===N)return t;let a=s!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[s]:i._$Cl,h=H(t)?void 0:t._$litDirective$;return a?.constructor!==h&&((l=a?._$AO)===null||l===void 0||l.call(a,!1),h===void 0?a=void 0:(a=new h(r),a._$AT(r,i,s)),s!==void 0?((o=(c=i)._$Co)!==null&&o!==void 0?o:c._$Co=[])[s]=a:i._$Cl=a),a!==void 0&&(t=y(r,a._$AS(r,t.values),a,s)),t}var B=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;let{el:{content:s},parts:n}=this._$AD,l=((i=t?.creationScope)!==null&&i!==void 0?i:g).importNode(s,!0);m.currentNode=l;let o=m.nextNode(),c=0,a=0,h=n[0];for(;h!==void 0;){if(c===h.index){let d;h.type===2?d=new M(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new V(o,this,t)),this._$AV.push(d),h=n[++a]}c!==h?.index&&(o=m.nextNode(),c++)}return m.currentNode=g,l}v(t){let i=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}},M=class r{constructor(t,i,s,n){var l;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=n,this._$Cp=(l=n?.isConnected)===null||l===void 0||l}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=y(this,t,i),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):nt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var i;let{values:s,_$litType$:n}=t,l=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=w.createElement(X(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===l)this._$AH.v(s);else{let o=new B(l,this),c=o.u(this.options);o.v(s),this.$(c),this._$AH=o}}_$AC(t){let i=O.get(t.strings);return i===void 0&&O.set(t.strings,i=new w(t)),i}T(t){Z(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,s,n=0;for(let l of t)n===i.length?i.push(s=new r(this.k(T()),this.k(T()),this,this.options)):s=i[n],s._$AI(l),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,i);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var i;this._$AM===void 0&&(this._$Cp=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},b=class{constructor(t,i,s,n,l){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=l,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,n){let l=this.strings,o=!1;if(l===void 0)t=y(this,t,i,0),o=!H(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{let c=t,a,h;for(t=l[0],a=0;a<l.length-1;a++)h=y(this,c[s+a],i,a),h===N&&(h=this._$AH[a]),o||(o=!H(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h??"")+l[a+1]),this._$AH[a]=h}o&&!n&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},U=class extends b{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},rt=f?f.emptyScript:"",P=class extends b{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,rt):this.element.removeAttribute(this.name)}},R=class extends b{constructor(t,i,s,n,l){super(t,i,s,n,l),this.type=5}_$AI(t,i=this){var s;if((t=(s=y(this,t,i,0))!==null&&s!==void 0?s:p)===N)return;let n=this._$AH,l=t===p&&n!==p||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==p&&(n===p||l);l&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;typeof this._$AH=="function"?this._$AH.call((s=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},V=class{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}};var z=C.litHtmlPolyfillSupport;z?.(w,M),((k=C.litHtmlVersions)!==null&&k!==void 0?k:C.litHtmlVersions=[]).push("2.8.0");var tt=Symbol.for(""),lt=r=>{if(r?.r===tt)return r?._$litStatic$};var e=(r,...t)=>({_$litStatic$:t.reduce((i,s,n)=>i+(l=>{if(l._$litStatic$!==void 0)return l._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${l}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+r[n+1],r[0]),r:tt}),Y=new Map,et=r=>(t,...i)=>{let s=i.length,n,l,o=[],c=[],a,h=0,d=!1;for(;h<s;){for(a=t[h];h<s&&(l=i[h],(n=lt(l))!==void 0);)a+=n+t[++h],d=!0;h!==s&&c.push(l),o.push(a),h++}if(h===s&&o.push(t[s]),d){let u=o.join("$$lit$$");(t=Y.get(u))===void 0&&(o.raw=o,Y.set(u,t=o)),i=c}return r(t,...i)},ut=et(K),ct=et(Q);var at={a:e`a`,abbr:e`abbr`,address:e`address`,area:e`area`,article:e`article`,aside:e`aside`,audio:e`audio`,b:e`b`,base:e`base`,bdi:e`bdi`,bdo:e`bdo`,blockquote:e`blockquote`,body:e`body`,br:e`br`,button:e`button`,canvas:e`canvas`,caption:e`caption`,cite:e`cite`,code:e`code`,col:e`col`,colgroup:e`colgroup`,data:e`data`,datalist:e`datalist`,dd:e`dd`,del:e`del`,details:e`details`,dfn:e`dfn`,dialog:e`dialog`,div:e`div`,dl:e`dl`,dt:e`dt`,em:e`em`,embed:e`embed`,fieldset:e`fieldset`,figcaption:e`figcaption`,figure:e`figure`,footer:e`footer`,form:e`form`,h1:e`h1`,h2:e`h2`,h3:e`h3`,h4:e`h4`,h5:e`h5`,h6:e`h6`,head:e`head`,header:e`header`,hgroup:e`hgroup`,hr:e`hr`,html:e`html`,i:e`i`,iframe:e`iframe`,img:e`img`,input:e`input`,ins:e`ins`,kbd:e`kbd`,label:e`label`,legend:e`legend`,li:e`li`,link:e`link`,main:e`main`,map:e`map`,mark:e`mark`,menu:e`menu`,meta:e`meta`,meter:e`meter`,nav:e`nav`,noscript:e`noscript`,ol:e`ol`,optgroup:e`optgroup`,option:e`option`,output:e`output`,p:e`p`,picture:e`picture`,pre:e`pre`,progress:e`progress`,q:e`q`,rp:e`rp`,rt:e`rt`,ruby:e`ruby`,s:e`s`,samp:e`samp`,script:e`script`,section:e`section`,select:e`select`,slot:e`slot`,small:e`small`,source:e`source`,span:e`span`,strong:e`strong`,style:e`style`,sub:e``,summary:e`summary`,sup:e`sup`,table:e`table`,tbody:e`tbody`,td:e`td`,template:e`template`,textarea:e`textarea`,tfoot:e`tfoot`,th:e`th`,thead:e`thead`,time:e`time`,title:e`title`,tr:e`tr`,track:e`track`,u:e`u`,ul:e`ul`,var:e`var`,video:e`video`,wbr:e`wbr`,default:e`<div>`},_t=at;export{_t as default};
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/

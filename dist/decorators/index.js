var E=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},g=(t,e,r)=>{e.constructor.createProperty(r,t)};function d(t){return(e,r)=>r!==void 0?g(t,e,r):E(t,e)}function w(t){return d({...t,state:!0})}var l=({finisher:t,descriptor:e})=>(r,n)=>{var o;if(n===void 0){let s=(o=r.originalKey)!==null&&o!==void 0?o:r.key,i=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(r.key)}:{...r,key:s};return t!=null&&(i.finisher=function(u){t(u,s)}),i}{let s=r.constructor;e!==void 0&&Object.defineProperty(r,n,e(n)),t?.(s,n)}};function M(t){return l({finisher:(e,r)=>{Object.assign(e.prototype[r],t)}})}function D(t,e){return l({descriptor:r=>{let n={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){let o=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var s,i;return this[o]===void 0&&(this[o]=(i=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&i!==void 0?i:null),this[o]}}return n}})}function _(t){return l({descriptor:e=>({get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelectorAll(t))!==null&&n!==void 0?n:[]},enumerable:!0,configurable:!0})})}function O(t){return l({descriptor:e=>({async get(){var r;return await this.updateComplete,(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t)},enumerable:!0,configurable:!0})})}var m,h=((m=window.HTMLSlotElement)===null||m===void 0?void 0:m.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(r=>r.nodeType===Node.ELEMENT_NODE);function p(t){let{slot:e,selector:r}=t??{};return l({descriptor:n=>({get(){var o;let s="slot"+(e?`[name=${e}]`:":not([name])"),i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s),u=i!=null?h(i,t):[];return r?u.filter(a=>a.matches(r)):u},enumerable:!0,configurable:!0})})}function G(t,e,r){let n,o=t;return typeof t=="object"?(o=t.slot,n=t):n={flatten:e},r?p({slot:o,flatten:e,selector:r}):l({descriptor:s=>({get(){var i,u;let a="slot"+(o?`[name=${o}]`:":not([name])"),c=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(a);return(u=c?.assignedNodes(n))!==null&&u!==void 0?u:[]},enumerable:!0,configurable:!0})})}var f=new Map,y=()=>{window.removeEventListener("beforeunload",y),f.clear()};window.addEventListener("beforeunload",y);var v=f;var x=(t,e)=>(customElements.define(t,e),e),C=(t,e)=>{let{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(o){customElements.define(t,o)}}},b=t=>e=>{v.set(e,t),typeof e=="function"?x(t,e):C(t,e)};export{b as customElement,M as eventOptions,d as property,D as query,_ as queryAll,p as queryAssignedElements,G as queryAssignedNodes,O as queryAsync,w as state};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*! Bundled license information:

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

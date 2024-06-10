var s=new Map,n=()=>{window.removeEventListener("beforeunload",n),s.clear()};window.addEventListener("beforeunload",n);var o=s;var i=(e,t)=>(customElements.define(e,t),t),u=(e,t)=>{let{kind:r,elements:m}=t;return{kind:r,elements:m,finisher(l){customElements.define(e,l)}}},c=e=>t=>{o.set(t,e),typeof t=="function"?i(e,t):u(e,t)};export{c as customElement};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Copyright 2024 Christian Lista Nicoloso. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A map of tag names to the name of the element that should be used to render it in TwixtDOM.
 * No surprises here, every tag name is rendered using its corresponding native HTML element.
 * See {@link twixt/elementRegistry} for TwixtCanvas overrides.
 */
import { literal } from 'lit/static-html.js'
import type { ElementRegistry } from '../types';

// Lit template tags are typically not allowed to be set dynamically.
// The only way it's allowed is if the dynamic value is marked as a `literal` and used in a static expression.
// https://lit.dev/docs/templates/expressions/#static-expressions
const registry: ElementRegistry = {
    a: literal`a`,
    abbr: literal`abbr`,
    address: literal`address`,
    area: literal`area`,
    article: literal`article`,
    aside: literal`aside`,
    audio: literal`audio`,
    b: literal`b`,
    base: literal`base`,
    bdi: literal`bdi`,
    bdo: literal`bdo`,
    blockquote: literal`blockquote`,
    body: literal`body`,
    br: literal`br`,
    button: literal`button`,
    canvas: literal`canvas`,
    caption: literal`caption`,
    cite: literal`cite`,
    code: literal`code`,
    col: literal`col`,
    colgroup: literal`colgroup`,
    data: literal`data`,
    datalist: literal`datalist`,
    dd: literal`dd`,
    del: literal`del`,
    details: literal`details`,
    dfn: literal`dfn`,
    dialog: literal`dialog`,
    div: literal`div`,
    dl: literal`dl`,
    dt: literal`dt`,
    em: literal`em`,
    embed: literal`embed`,
    fieldset: literal`fieldset`,
    figcaption: literal`figcaption`,
    figure: literal`figure`,
    footer: literal`footer`,
    form: literal`form`,
    h1: literal`h1`,
    h2: literal`h2`,
    h3: literal`h3`,
    h4: literal`h4`,
    h5: literal`h5`,
    h6: literal`h6`,
    head: literal`head`,
    header: literal`header`,
    hgroup: literal`hgroup`,
    hr: literal`hr`,
    html: literal`html`,
    i: literal`i`,
    iframe: literal`iframe`,
    img: literal`img`,
    input: literal`input`,
    ins: literal`ins`,
    kbd: literal`kbd`,
    label: literal`label`,
    legend: literal`legend`,
    li: literal`li`,
    link: literal`link`,
    main: literal`main`,
    map: literal`map`,
    mark: literal`mark`,
    menu: literal`menu`,
    meta: literal`meta`,
    meter: literal`meter`,
    nav: literal`nav`,
    noscript: literal`noscript`,
    ol: literal`ol`,
    optgroup: literal`optgroup`,
    option: literal`option`,
    output: literal`output`,
    p: literal`p`,
    picture: literal`picture`,
    pre: literal`pre`,
    progress: literal`progress`,
    q: literal`q`,
    rp: literal`rp`,
    rt: literal`rt`,
    ruby: literal`ruby`,
    s: literal`s`,
    samp: literal`samp`,
    script: literal`script`,
    section: literal`section`,
    select: literal`select`,
    slot: literal`slot`,
    small: literal`small`,
    source: literal`source`,
    span: literal`span`,
    strong: literal`strong`,
    style: literal`style`,
    sub: literal``,
    summary: literal`summary`,
    sup: literal`sup`,
    table: literal`table`,
    tbody: literal`tbody`,
    td: literal`td`,
    template: literal`template`,
    textarea: literal`textarea`,
    tfoot: literal`tfoot`,
    th: literal`th`,
    thead: literal`thead`,
    time: literal`time`,
    title: literal`title`,
    tr: literal`tr`,
    track: literal`track`,
    u: literal`u`,
    ul: literal`ul`,
    var: literal`var`,
    video: literal`video`,
    wbr: literal`wbr`,
    // Fallback to div.
    default: literal`<div>`
};

export default registry;

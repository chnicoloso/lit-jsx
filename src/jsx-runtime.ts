/**
 * Copyright 2024 Christian Lista Nicoloso. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import customElementRegistry from './utils/customElementRegistry';
import createElement from './core/createElement';

// JSX runtime. This is what will translate JSX and create actual html elements.
function jsx(type, config) {
    // If the type is a function, we're dealing with a nested user-defined component template (i.e <YourComponent />).
    // This can either be a custom element extending HTMLElement or a simple functional component.
    if (typeof type === 'function') {
        if (type.prototype instanceof HTMLElement) {
            // Class component.
            // Hack: we don't want to construct the custom element here, we want to just call createElement('your-custom-element')
            // and let Lit handle it as it would any other element. For that, we need to be able
            // to get the tag name of the custom element from its constructor, which unfortunately is not currently possible.
            // So for now, we keep an internal registry of all web components we've registered, falling back to
            // constructing the element once to get its `.localName`.
            // See {@link src/decorators/customElement} for more info.
            let tagName = customElementRegistry.get(type);
            if (!tagName) {
                // We have to construct the element to get its tag name.
                const element = new type() as HTMLElement;
                tagName = element.localName;
                // Cache the tag name so that we don't have to do this again.
                customElementRegistry.set(type, tagName);
            }
            // Render the custom web component as any other html element.
            return createElement(tagName, config);
        }
        // Functional component.
        // We call the function with the props and because its return value is JSX
        // we'll eventually get here again but to handle the underlying primitive types (<div>, <button>),
        // for which we'll hit createElement below.
        return type(config)
    }
    // Simple JSX tags (<div>, <button>, etc).
    return createElement(type, config);
}

function jsxFragment(fragment) {
    // When the fragment only has one child, children is the child object.
    return  Array.isArray(fragment.children) ? fragment.children : [ fragment.children ]
}

export { jsx, jsx as jsxs, jsxFragment as Fragment }

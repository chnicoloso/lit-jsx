/**
 * Adapted from Lit's @custom-element decorator:
 * https://github.com/lit/lit/blob/main/packages/reactive-element/src/decorators/custom-element.ts
 * The only difference is that this version creates a local a map from the custom element constructor to the custom element tag name.
 * We need this so that the JSX runtime can avoid instantiating custom elements simply to get the element's tag name
 * that we need to forward to Lit. See {@link customElement} for the difference.
 * This is hopefully a temporary workaround to a current limitation in the Web Components API:
 * https://github.com/WICG/webcomponents/issues/566
 */

import type { CustomElementClass, ClassDescriptor, Constructor } from 'src/types';
import customElementRegistry from 'src/utils/customElementRegistry';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

const legacyCustomElement = (tagName: string, clazz: CustomElementClass) => {
    customElements.define(tagName, clazz as CustomElementConstructor);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return clazz as any;
};

const standardCustomElement = (
    tagName: string,
    descriptor: ClassDescriptor
) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz: Constructor<HTMLElement>) {
            customElements.define(tagName, clazz);
        }
    };
};

/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
export const customElement =
    (tagName: string) =>
    (classOrDescriptor: CustomElementClass | ClassDescriptor) => {
        // ***********************
        // This is the difference.
        customElementRegistry.set(classOrDescriptor, tagName);
        // ***********************
        typeof classOrDescriptor === 'function'
            ? legacyCustomElement(tagName, classOrDescriptor)
            : standardCustomElement(tagName, classOrDescriptor as ClassDescriptor);
    }
/**
 * Adapted from: https://open-wc.org/blog/doing-a-flip-with-lit-html-2-0/
 * Added some comments and fixed a small bug where events handlers that become undefined
 * weren't getting removed.
 * https://studio.webcomponents.dev/edit/XugyS6YAQnEQXcS7YVKk/src/index.ts?p=website
 * 
 * This can be removed once Lit has an official spread directive:
 * https://github.com/lit/lit/pull/1960
 */

/**
 * @license
 * Original code by open-wc.org, licensed under the BSD-3-Clause license.
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * Additional modifications are copyright 2024 Christian Lista Nicoloso and licensed under the Apache License 2.0.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Original License:
 * -----------------
 * 
 * Copyright 2021 Open WC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Apache License 2.0 for Additional Modifications:
 * -----------------
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

/**
 * Changes made:
 * - Added comments to the code.
 * - Fixed a small bug where event handlers that become undefined weren't getting removed.
 */

import { nothing } from 'lit/html.js';
import { directive, AsyncDirective } from 'lit/async-directive.js';

type EventListenerWithOptions = EventListenerOrEventListenerObject &
  Partial<AddEventListenerOptions>;

class SpreadDirective extends AsyncDirective {
    host!: EventTarget;
    element!: Element;
    prevData: { [key: string]: unknown } = {}

    render(spreadData: { [key: string]: unknown }) {
        return nothing;
    }

    // Each update, apply the props and remove/clean up stale ones.
    update(part, [spreadData]: Parameters<this['render']>) {
        if (this.element !== part.element) {
            this.element = part.element;
        }
        this.host = part.options?.host || this.element;
        this.apply(spreadData);
        this.groom(spreadData);
        this.prevData = spreadData;
    }

    // Apply props.
    apply(data: { [key: string]: unknown }) {
        if (!data) return;
        const { prevData, element } = this;
        for (const key in data) {
            const value = data[key];
            if (value === prevData[key]) {
                continue;
            }
            const name = key.slice(1);
            switch (key[0]) {
                case '@': // event listener
                    const prevHandler = prevData[key];
                    if (prevHandler) {
                        element.removeEventListener(name, this, value as EventListenerWithOptions);
                    }
                    element.addEventListener(name, this, value as EventListenerWithOptions);
                    break;
                case '.': // property
                    element[name] = value;
                    break;
                case '?': // boolean attribute
                    if (value) {
                        element.setAttribute(name, '');
                    } else {
                        element.removeAttribute(name);
                    }
                    break;
                default:  // standard attribute
                    if (value != null) {
                        element.setAttribute(key, String(value));
                    } else {
                        element.removeAttribute(key);
                    }
                    break;
            }
        }
    }

    // Clean up any removed props.
    groom(data: { [key: string]: unknown }) {
        const { prevData, element } = this;
        if (!prevData) return;
        for (const key in prevData) {
            // ***********************
            // Change
            const removed = !data || !(key in data) || data[key] === undefined || data[key] === null;
            // ***********************
            if (removed) {
                switch (key[0]) {
                    case '@': // event listener
                        const value = prevData[key];
                        element.removeEventListener(key.slice(1), this, value as EventListenerWithOptions);
                        break;
                    case '.': // property
                        element[key.slice(1)] = undefined;
                        break;
                    case '?': // boolean attribute
                        element.removeAttribute(key.slice(1));
                        break;
                    default:  // standard attribute
                        element.removeAttribute(key);
                        break;
                }
            }
            // ***********************
            // Change
            if (key in data) {
                // Stop tracking the key so that we don't keep handling its removal.
                delete this.prevData[key];
            }
            // ***********************
        }
    }

    handleEvent(event: Event) {
        const value: Function | EventListenerObject = this.prevData[`@${event.type}`] as Function | EventListenerObject;
        if (typeof value === 'function') {
            (value as Function).call(this.host, event);
        } else {
            (value as EventListenerObject).handleEvent(event);
        }
    }

    disconnected() {
        const { prevData, element } = this;
        for (const key in prevData) {
            if (key[0] !== '@') continue;
            // event listener
            const value = prevData[key];
            element.removeEventListener(key.slice(1), this, value as EventListenerWithOptions);
        }
    }

    reconnected() {
        const { prevData, element } = this;
        for (const key in prevData) {
            if (key[0] !== '@') continue;
            // event listener
            const value = prevData[key];
            element.addEventListener(key.slice(1), this, value as EventListenerWithOptions);
        }
    }
}

export const spread = directive(SpreadDirective);

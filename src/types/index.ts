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

export type { PropertyValues } from '@lit/reactive-element';
import { StaticValue } from 'lit/static-html';

export type Constructor<T> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): T;
};
  
  // From the TC39 Decorators proposal
  export interface ClassDescriptor {
    kind: 'class';
    elements: ClassElement[];
    finisher?: <T>(clazz: Constructor<T>) => void | Constructor<T>;
};

// From the TC39 Decorators proposal
export interface ClassElement {
    kind: 'field' | 'method';
    key: PropertyKey;
    placement: 'static' | 'prototype' | 'own';
    initializer?: Function;
    extras?: ClassElement[];
    finisher?: <T>(clazz: Constructor<T>) => void | Constructor<T>;
    descriptor?: PropertyDescriptor;
};

/**
 * Allow for custom element classes with private constructors
 */
export type CustomElementClass = Omit<typeof HTMLElement, 'new'>;

/**
 * A map of html tag names to the name of the html template literal to use when rendering it.
 * Defined by {@link @chnicoloso/lit-jsx/core/elementRegistry}
 */
export type ElementRegistry = { [ key: HTMLElement['tagName'] ]: StaticValue };

/**
 * The top level HTMLElement to render all other components on.
 * User-created, handled in {@link @chnicoloso/lit-jsx/core/createElement}
 */
export type RootElement = Element | Document | DocumentFragment;

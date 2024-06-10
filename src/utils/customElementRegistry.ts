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

import { CustomElementClass, ClassDescriptor } from '../types';

/**
 * A map of custom element constructors to the tag names they're registered under.
 * Gets populated by @custom-element decorator. See {@link src/twixt/decorators/customElement }
 */
const customElementRegistry = new Map<CustomElementClass | ClassDescriptor, string>();

// Clean up the map when the page is unloaded.
const onUnload = () => {
    window.removeEventListener('beforeunload', onUnload)
    customElementRegistry.clear();
};
window.addEventListener('beforeunload', onUnload);

export default customElementRegistry;
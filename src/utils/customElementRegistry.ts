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
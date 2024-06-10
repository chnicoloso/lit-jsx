import type { RootElement } from '../types';

export class Root {

    _container?: RootElement;
    _elements: HTMLElement[] = [];

    static _roots = new Map<RootElement, Root>();

    constructor(container: RootElement) {
        if (Root._roots.has(container)) {
            // Thanks ReactDOM for a great warning message.
            console.warn(`
                Warning: You are calling createRoot() on a container that has already been passed to createRoot() before. 
                Call root.render() on the existing root instead if you want to update it.
            `);
        } else {
            this._container = container;
        }
    }

    render(element: HTMLElement) {
        // Keep track of all elements rendered directly on the root.
        this._elements.push(element);
        this._container?.appendChild(element);
        return element;
    }

    unmount() {
        // Remove all elements rendered on the root.
        this._elements.forEach(element => element.remove());
        // Clear the references to the elements and container.
        this._elements.length = 0;
        this._container = undefined;
    }
}

export function createRoot(container: RootElement) {
    return new Root(container);
}

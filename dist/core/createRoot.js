var o=class t{constructor(e){this._elements=[];t._roots.has(e)?console.warn(`
                Warning: You are calling createRoot() on a container that has already been passed to createRoot() before. 
                Call root.render() on the existing root instead if you want to update it.
            `):this._container=e}static{this._roots=new Map}render(e){return this._elements.push(e),this._container.appendChild(e),e}unmount(){this._elements.forEach(e=>e.remove()),this._elements.length=0,this._container=void 0}};function n(t){return new o(t)}export{o as Root,n as createRoot};

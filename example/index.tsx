import * as LitJSX from 'src';
import MyWebComponent from 'example/MyWebComponent';

// This is an example of how someone might use the framework to develop their web site.
const root = LitJSX.createRoot(document.getElementById('root'));
root.render(new MyWebComponent());

// Clean up.
const onUnload = () => {
    window.removeEventListener('beforeunload', onUnload)
    root.unmount();
};
window.addEventListener('beforeunload', onUnload);
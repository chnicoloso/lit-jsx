import * as LitJSX from 'lit-jsx';
import MyWebComponent from './MyWebComponent';

// This is an example of how someone might use the framework to develop their web site.
const app = document.createElement('div');
document.body.appendChild(app);

const root = LitJSX.createRoot(app);
root.render(new MyWebComponent());

// Clean up.
const onUnload = () => {
    window.removeEventListener('beforeunload', onUnload)
    root.unmount();
};
window.addEventListener('beforeunload', onUnload);
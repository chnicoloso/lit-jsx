# litjsx

`litjsx` is a library that allows you to use the Lit framework with JSX. It provides a convenient way to build web components using JSX syntax. The only dependency for this library is `lit`.

## Installation

You can install `litjsx` via npm:

```bash
npm install litjsx
```

## Usage
To use `litjsx`, import it instead of `lit` wherever you would use `lit` in your project. You also need to configure your bundler or transpiler to use `lit-jsx` for processing JSX, instead of the default i.e `react-jsx`, etc. For example for TypeScript, in your tsconfig.json, you you would set `jsx` to `react-jsx`, to enable JSX syntax in general and then `jsxImportSource` to `litjsx`, to tell typescript to use `litjsx/jsx-runtime` when transforming JSX syntax:

```json
{
  "compilerOptions": {
    ...
    "jsx": "react-jsx",
    "jsxImportSource": "litjsx",
    ...
  }
}
```

### Example
```typescript
// index.ts
import * as LitJSX from 'litjsx';
import MyWebComponent from './MyWebComponent';

// This is an example of how someone might use the framework to develop their web site.
const app = document.createElement('div');
document.body.appendChild(app);

const root = LitJSX.createRoot(app);
root.render(new MyWebComponent());

// Clean up.
const onUnload = () => {
    window.removeEventListener('beforeunload', onUnload);
    root.unmount();
};
window.addEventListener('beforeunload', onUnload);
```
```typescript
// MyWebComponent.tsx
import { LitElement, state, Ref, createRef, customElement, property } from 'litjsx';

function FunctionalComponent({ onClick, count }) {
    return (
        <button onClick={onClick}>
            Bye {count}
        </button>
    );
}

@customElement('class-component-wc')
class ClassComponent extends LitElement {

    @property({ type: Number })
    count: number;

    @property({ type: Function })
    onClick: Function;

    render() {
        return (
            <button onClick={this.onClick}>
                Wow {this.count}
            </button>
        );
    }
}

@customElement('counter-wc')
export default class Counter extends LitElement {

    // Render the UI as a function of component state
    @state()
    private _counter = 0;
    
    private _ref: Ref<HTMLElement> = createRef();

    private _increment = () => {
        this._counter++;
    }

    render() {
        return (
            <>
                <FunctionalComponent onClick={this._increment} count={this._counter} />
                <ClassComponent ref={this._ref} onClick={this._counter > 5 ? null : this._increment} count={this._counter} />
                <button ref={this._ref} onClick={this._counter > 5 ? null : this._increment}>
                    Hi {this._counter}
                </button>
            </>
        );
    }
}
```

### Running the Example
```bash
cd ./example
npm install
npm run watch
```
Go to https://localhost:8080/
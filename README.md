# lit-jsx

`lit-jsx` is a library that allows you to use the Lit framework with JSX. It provides a convenient way to build web components using JSX syntax. The only dependency for this library is `lit`.

## Installation

You can install `lit-jsx` via npm:

```bash
npm install lit-jsx
```

## Usage
To use `lit-jsx`, import it instead of `lit` in your project. You also need to configure your bundler or transpiler to use `lit-jsx` for processing JSX, instead of the default i.e `react-jsx`, etc. For example, in TypeScript, you would set `jsxImportSource` to `lit-jsx` in your tsconfig.json:

```json
{
  "compilerOptions": {
    ...
     // This configures Typescript to parse JSX.
    "jsx": "react-jsx",
    // This tells Typescript to use lit-jsx when transforming JSX.
    "jsxImportSource": "lit-jsx",
    ...
  }
}
```

### Example
```typescript
// index.ts
import * as LitJSX from 'lit-jsx';
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
import { LitElement, state, Ref, createRef, customElement, property } from 'lit-jsx';

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
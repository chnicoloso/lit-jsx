# lit-jsx

`lit-jsx` is a library that provides a convenient way to build Lit components using JSX syntax. The only dependency for the library is `lit` itself.

## Why?
Personal aesthetic preference: I am on board with everything about Lit but I cannot bring myself to write components using string templates.

## Installation
You can install `lit-jsx` via npm:

```bash
npm install @chnicoloso/lit-jsx
```

## Usage
To use `lit-jsx` simply import from `@chnicoloso/lit-jsx` whatever you would otherwise import from `lit`. You also need to configure your bundler or transpiler to use `lit-jsx` for processing JSX, instead of the default. For example in TypeScript you would add something like this to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@chnicoloso/lit-jsx",
    "types": [ "@chnicoloso/lit-jsx" ]
  }
}
```
There is a similar mechanism for Babel where you would add something like this to your `babel.config.js`:
```json
{
    "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "throwIfNamespace": false,
        "runtime": "automatic",
        "importSource": "@chnicoloso/lit-jsx"
      }
    ]
  ]
}
```

### Example
```typescript
import { LitElement, createRoot, customElement } from '@chnicoloso/lit-jsx';

@customElement('my-app')
class App extends LitElement {
    render() {
        return (
            <button onClick={console.log}>
                Click Me!
            </button>
        );
    }
}

const app = document.createElement('div');
document.body.appendChild(app);

const root = createRoot(app);
root.render(new App());

// Clean up.
const onUnload = () => {
    window.removeEventListener('beforeunload', onUnload);
    root.unmount();
};
window.addEventListener('beforeunload', onUnload);
```

### Running the Example
```bash
cd ./example
npm install
npm run watch
```
Go to https://localhost:8080/

### Custom Elements

`lit-jsx` allows you to customize what should be rendered for each tag name. For example, if you want JSX `<button />` to result in `<my-custom-button />`, you would pass an override in your registry.

Here's how you would do that:

```typescript
import { assignElements, resetElements } from '@chnicoloso/lit-jsx';

// Define your custom elements
const customElements = {
  button: 'my-custom-button',
  // Add more custom elements as needed
};

// Assign your custom elements
assignElements(customElements);

// Later, if you want to reset to the default elements
resetElements();
```
#### And why in the world would I want to do _that_?

The original motivation behind this jsx-runtime was for a WebXR UI framework I was working on. In WebXR, any UI you make _has_ to be rendered using Canvas/webgl which is as fun as it sounds so I wanted to be able to define UI components using HTML syntax. My basic idea was to create webgl/three-js versions of each HTML element and then configure `lit-jsx` so that whenever the JSX called for say, a “button” to be rendered, the webgl equivalent would be rendered instead.

I got a fair amount of it working including divs, images, text, flex-blox/responsiveness, border-radii, background colors, etc.
<details>
<summary>Expand to see the code for this "component"</summary>

```typescript
/** @jsxImportSource src/lit-jsx */

import classNames from 'classnames';
import { createRoot, state, customElement, css } from 'src/canvas-elements';
import * as CanvasElements from 'src/canvas-elements';

@customElement('my-scroller')
class HorizontalScroller extends CanvasElements.Component {

    static styles = css`
        .horizontal-scroller {
            flex-direction: row;
            width: 1px;
            height: 1px;
            align-items: center;
            justify-content: flex-start;
            border-radius: 0.02px;
            overflow: scroll;
        }

        .box {
            width: 0.3px;
            height: 0.3px;
            border-width: 0.04px;
            border-radius: 0.02px;
        }

        .yellow { background-color: yellow; }
        .green { background-color: green; }
        .purple { background-color: purple; }
        .red { background-color: darkred; }
        .cyan { background-color: cyan; }
        .blue { background-color: blue; }
        .orange { background-color: orange; }
    `;

    render() {
        return (
            <div className="horizontal-scroller cyan">
                <div className="box purple" />
                <div className="box green" />
                <div className="box blue" />
                <div className="box orange" />
                <div className="box cyan" />
                <div className="box red" />
                <div className="box green" />
                <div className="box purple" />
                <div className="box blue" />
                <div className="box red" />
            </div>
        );
    }
}

@customElement('my-app')
export default class App extends CanvasElements.Component {

    static styles = css`
        * {
            border-radius: 0.02px;
        }

        .root-container {
            width: 100%;
            height: 100%;
            overflow: auto;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .padded-space-between-container {
            flex-direction: row;
            width: 1px;
            height: 1px;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 0.2px;
            border-radius: 0.02px;
            background-opacity: 0.5;
        }

        .vertical-scroller {
            flex-direction: column;
            width: 1px;
            height: 1px;
            align-items: center;
            justify-content: flex-start;
            border-width: 0.04px;
            border-radius: 0.02px;
            overflow: scroll;
            padding: 0.05px;
        }

        .text-container {
            width: 1px;
            height: 1px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            border-width: 0.04px;
            border-radius: 0.02px;
            overflow: auto;
            font-size: 0.1px;
            color: white;
            overflow-wrap: break-word;
        }

        .small-box {
            width: 0.2px;
            height: 0.2px;
        }

        .medium-box {
            width: 1px;
            height: 1px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            border-width: 0.04px;
            border-radius: 0.02px;
        }

        .image {
            border-width: 0.04px;
            border-radius: 0.02px;
        }

        .yellow { background-color: yellow; }
        .green { background-color: green; }
        .purple { background-color: purple; }
        .red { background-color: darkred; }
        .cyan { background-color: cyan; }
        .blue { background-color: blue; }
        .orange { background-color: orange; }
    `;

    connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('click', this._updateWidth);
        window.addEventListener('keyup', this._updateText);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        window.removeEventListener('click', this._updateWidth);
        window.removeEventListener('keyup', this._updateText);
    }

    @state()
    width = 0.2;

    @state()
    text = '';

    _updateWidth = () => {
        this.width += 0.1;
    }

    _updateText = (keyEvent) => {
        this.text += keyEvent.key;
    }

    get verticalScroller() {
        const colors = [ 'purple', 'green', 'blue', 'orange', 'cyan', 'red', 'green', 'purple', 'blue', 'red' ];
        return (
            <div className="vertical-scroller orange">
                {colors.map(color => <div className={classNames('small-box', color)} />)}
            </div>
        );
    }

    render() {
        return (
            <div className="root-container blue">
                <div className="padded-space-between-container green">
                    <div className="small-box purple" />
                    <div className="small-box expandable purple" />
                </div>
                {this.verticalScroller}
                <img
                    width={2}
                    height={2}
                    className="image yellow"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
                />
                <img
                    width={1}
                    height={1}
                    className="image green"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
                />
                <div className="text-container red">
                    1. ByeasfkndksnfmfdsamfksafksdByeasfkndksnfmfdsamfksaf
                    <div className="small-box purple" />
                    {`2. Type here: ${this.text}`}
                </div>
                <HorizontalScroller />
                <div className={classNames('medium-box', {
                    purple: this.width < 0.5,
                    yellow: this.width >= 0.5
                })}/>
            </div>
        );
    }
}

const root = createRoot(document.getElementById('view'));
root.render(new App());
```
</details>

![Jun-11-2024 20-09-42](https://github.com/chnicoloso/lit-jsx/assets/9637975/0e6f39a4-2a6d-48b4-8717-fd974f5feb71)


I also managed to embed these "HTML" components onto ThreeJS Scenes and I made some progress towards a "composer" based on [Exokit](https://github.com/exokitxr/exokit) that would allow multiple independent "plugin" components to be combined onto the same "host" scene
![Jun-11-2024 20-26-21](https://github.com/chnicoloso/lit-jsx/assets/9637975/dfea6932-7746-4db9-a00c-2a9e5cc2c417)

Ultimately however, I decided that this simply cannot not be future of the [Immersive Web](https://immersiveweb.dev/) and that an _immersive_ (not just mobile) version of something like [DOM Overlays](https://www.w3.org/TR/webxr-dom-overlays-1/) is needed in the WebXR standard - maybe taking advantage of the existing CSS-transform's 3D capabilities, as shown by ThreeJS's [CSS3DRenderer](https://threejs.org/docs/#examples/en/renderers/CSS3DRenderer).
![Jun-11-2024 20-53-40](https://github.com/chnicoloso/lit-jsx/assets/9637975/2f3a10d5-07cf-4993-876b-00c6d0e8609e)

Good times though.

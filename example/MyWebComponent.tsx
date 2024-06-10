/** @jsxImportSource src */

import { LitElement, state, Ref, createRef, customElement, property } from 'src';

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

    // constructor() {
    //     super();
    //     setInterval(() => {
    //         this._counter++;
    //     }, 1000);
    // }

    // Render the UI as a function of component state
    @state()
    private _counter = 0;
    
    private _ref: Ref<HTMLElement> = createRef();

    private _increment = (e) => {
        this._counter++;
    }

    render() {
        return (
            // <FunctionalComponent onClick={this._increment} count={this._counter} />
            <ClassComponent ref={this._ref} onClick={this._counter > 5 ? null : this._increment} count={this._counter} />
            // <button ref={this._ref} onClick={this._counter > 5 ? null : this._increment}>
            //     Hi {this._counter}
            // </button>
        );
    }
}

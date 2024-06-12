import { Component } from "../render";

import { button } from "../scss/control.module.scss";

export class Button extends Component {
    render() {
        return (<button class={button} type="button">Click me</button>);
    }
};

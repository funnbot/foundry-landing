import { html } from "htm/preact";
import { render, createElement } from "preact";
import { App } from "./app";

render(html`<${App} />`, document.getElementById("app")!);

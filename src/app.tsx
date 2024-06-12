import { Button } from "./cmps/Button.tsx";

import * as style from "./scss/style.module.scss";

export function App() {
    return (
        <div class={style.body} >
            <Button />
            <p>hello world</p>
        </div>
    );
}

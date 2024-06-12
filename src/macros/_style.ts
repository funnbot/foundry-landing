// import { html } from "../render";
import type { MacroContext } from "@parcel/macros";
// import { hashString } from "@parcel/rust";

export default function style(this: MacroContext | void, code: string) {
    this?.invalidateOnBuild();
    this?.addAsset({
        type: "scss",
        content: code,
    });
    // return (strings: TemplateStringsArray, ...values: any[]) => {
    //     let content = "";
    //     for (let i = 0; i < strings.length; i++) {
    //         content += strings[i] + (values[i] ?? "");
    //     }
    // let id = hashString(content);

    // html`<style>
    //     ${content}
    // </style>`;

    //    };
}

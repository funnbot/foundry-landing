import htm from "htm";
import { h, render, createElement, Component, ComponentChild } from "preact";
import { useContext, useState } from "preact/hooks";

export const html = htm.bind(h);

export { render, createElement, Component };
export type { ComponentChild };

/*
let debounceMs = 5000;
let lastCalledId = undefined;
let lastCalled = 0;
function debounce(callback) {
    const now = Date.now();
    if (now - lastCalled >= debounceMs) {
        disable_buttons();
        lastCalled = now;
        callback();
        if (lastCalledId === undefined) {
            lastCalledId = setTimeout(() => {
                lastCalledId = undefined;
                enable_buttons();
            }, debounceMs);
        }
        debounceMs += 3000;
    }
}
*/

import { useState } from "preact/hooks";

class RateLimit<T> {
    timeout: number;
    timerId: number;
    callback: ();
}

function rateLimit<T>(callback: (context: T) => boolean) {
    const now = Date.now();
    useState(initialState)
} 
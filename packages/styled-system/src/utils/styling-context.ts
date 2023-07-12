import type { CSSProperties } from "react";
import type { Breakpoint } from "../responsive/BreakpointProvider.tsx";
import { isNil } from "./assertion.ts";

export class StylingContext {
    readonly #classes: string[];
    readonly #style: CSSProperties;
    matchedBreakpoints: Breakpoint[];

    constructor(className: string | undefined, style: CSSProperties | undefined, matchedBreakpoints: Breakpoint[]) {
        this.#classes = !isNil(className) ? [className] : [];
        this.#style = { ...style } ?? {}; // TODO: different than orbit, in order to not modify the original style object https://github.com/gsoft-inc/sg-orbit/issues/1211
        this.matchedBreakpoints = matchedBreakpoints;
    }

    addClass(className: string) {
        if (!this.#classes.includes(className)) {
            this.#classes.push(className);
        }

        return this;
    }

    addStyleValue(name: string, value: unknown) {
        // TODO: different than orbit, there was a check here to check if the style was already set. It caused issue where
        // if you were doing paddingX and then paddingLeft, the paddingLeft would not be applied because the paddingX was already set.
        // https://github.com/gsoft-inc/sg-orbit/issues/1210
        (this.#style as Record<string, unknown>)[name] = value;

        return this;
    }

    computeStyling() {
        const className = this.#classes.length !== 0 ? this.#classes.join(" ") : undefined;
        const styleValue = Object.keys(this.#style).length !== 0 ? this.#style : undefined;

        return { className, style: styleValue };
    }
}

import type { RefObject } from "react";
import { isNil } from "../utils/assertion.ts";

export class ThemeComputedStyle {
    #componentRef: RefObject<Element>;
    #scope: string;

    constructor(componentRef: RefObject<Element>, scope: string) {
        this.#componentRef = componentRef;
        this.#scope = scope;
    }

    private getThemeElement() {
        const themeElement = this.#componentRef.current?.closest(this.#scope);

        if (isNil(themeElement)) {
            throw new Error("Cannot find a theme element, did you defined a ThemeProvider?");
        }

        return themeElement;
    }

    getPropertyValue(name: string) {
        return window.getComputedStyle(this.getThemeElement()).getPropertyValue(name);
    }
}

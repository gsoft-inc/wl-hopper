import type { RefObject } from "react";
import { isNil } from "../utils/assertion.ts";

/**
 * This class is used to get the computed style of a theme element.
 * It is used to get the value of a CSS variable defined in the theme.
 */
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
            throw new Error("Cannot find a theme element, is the scope assigned to a DOM element?");
        }

        return themeElement;
    }

    getPropertyValue(name: string) {
        return window.getComputedStyle(this.getThemeElement()).getPropertyValue(name);
    }
}

import { useRef } from "react";
import { isNil } from "../utils/assertion.ts";
import { formatInlineCss } from "../utils/format-inline-css.ts";
import { useColorSchemeContext } from "../color-scheme/ColorSchemeContext.ts";
import { useInjectGlobalStyles } from "../utils/useInjectGlobalStyles.tsx";
import { ThemeComputedStyle } from "../utils/useThemeComputedStyle.ts";
import { useIsomorphicLayoutEffect } from "../utils/useIsomorphicLayoutEffect.tsx";
import { RootSelector } from "../HopperProvider.tsx";

const GlobalStyles = formatInlineCss(`
    @font-face {
        src: url("https://assets.sharegate.com/shared/brand/fonts/interphases/TT-Interphases-Var-Roman.woff2") format("woff2-variations");
        font-family: "TT Interphases Variable";
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        src: url("https://assets.sharegate.com/shared/brand/fonts/interphases/TT-Interphases-Var-Italic.woff2") format("woff2-variations");
        font-family: "TT Interphases Variable";
        font-style: italic;
        font-display: swap;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;

        font-family: "TT Interphases Variable", Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

    @media not (prefers-reduced-motion) {
        body {
            scroll-behavior: smooth;
        }
    }
    `);

// TODO: explain why this is a component. The reason is we want it to be a children of the root element of the hopper provider
export function GlobalStyleProvider() {
    const ref = useRef<HTMLDivElement>(null);
    const colorScheme = useColorSchemeContext();

    useInjectGlobalStyles(`hop-global-styles-${RootSelector}`, GlobalStyles);

    useIsomorphicLayoutEffect(() => {
        const computedStyle = new ThemeComputedStyle(ref, `.${RootSelector}`);
        const color = computedStyle.getPropertyValue("--hop-color-text-alias-primary");
        const backgroundColor = computedStyle.getPropertyValue("--hop-color-bg-alias-body");

        const cssContent = formatInlineCss(`
            body {
                color: ${color};
                background-color: ${backgroundColor};
            }
        `);

        const elementId = `hop-global-cosmetic-styles-${RootSelector}`;
        let element = document.getElementById(elementId);
        if (isNil(element)) {
            element = document.createElement("style");
            element.id = elementId;
            document.head.appendChild(element);
            element.innerText = cssContent;

            return () => {
                element?.remove();
            };
        } else {
            element.innerText = cssContent;
        }

        // we re-run this hook if colorScheme changes
    }, [ref, colorScheme]);

    return (
        <div ref={ref}></div>
    );
}


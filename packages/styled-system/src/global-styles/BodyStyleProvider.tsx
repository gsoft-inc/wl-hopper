import { useRef, useState } from "react";
import { StyledSystemRootCssClass } from "../styled-system-root-css-class.ts";
import type { HopperTokenKey } from "../tokens/tokens.ts";
import { isNil } from "../utils/assertion.ts";
import { useInsertStyleElement } from "../utils/useInsertStyleElement.ts";
import { useIsomorphicLayoutEffect } from "../utils/useIsomorphicLayoutEffect.ts";
import { ThemeComputedStyle } from "../utils/useThemeComputedStyle.ts";

interface CosmeticStyles {
    color: string;
    backgroundColor: string;
    lineHeight: string;
    fontFamily: string;
    fontSize: string;
}

const BodyTokens = {
    color: "--hop-neutral-text",
    backgroundColor: "--hop-neutral-surface",
    lineHeight: "--hop-body-md-line-height",
    fontFamily: "--hop-body-md-font-family",
    fontSize: "--hop-body-md-font-size"
} satisfies Record<string, HopperTokenKey>;

/* The BodyStyleProvider injects fonts and body styles on the body.
* Since tokens are injected on a dom element inside the body, tokens can not be used in the body styles.
* This component makes sure that the body styles are injected without referring to tokens.
*/
export function BodyStyleProvider() {
    const ref = useRef<HTMLDivElement>(null);

    const [cosmeticStyles, setCosmeticStyles] = useState<CosmeticStyles| undefined>(undefined);

    useIsomorphicLayoutEffect(() => {
        if (ref.current) {
            const computedStyle = new ThemeComputedStyle(ref, `.${StyledSystemRootCssClass}`);

            const color = computedStyle.getPropertyValue(BodyTokens.color);
            const backgroundColor = computedStyle.getPropertyValue(BodyTokens.backgroundColor);
            const fontFamily = computedStyle.getPropertyValue(BodyTokens.fontFamily);
            const lineHeight = computedStyle.getPropertyValue(BodyTokens.lineHeight);
            const fontSize = computedStyle.getPropertyValue(BodyTokens.fontSize);

            setCosmeticStyles({ color, backgroundColor, lineHeight, fontFamily, fontSize });
        }
        // TODO: we re-run this hook if colorScheme changes
    }, [ref]);

    useInsertStyleElement(
        `hop-body-styles-${StyledSystemRootCssClass}`,
        isNil(cosmeticStyles) ? "" : generateBodyCssContent(cosmeticStyles)
    );

    return (
        <div ref={ref}></div>
    );
}

function generateBodyCssContent({ color, backgroundColor, fontFamily, lineHeight, fontSize }: CosmeticStyles) {
    return `
            body {
                -webkit-font-smoothing: antialiased;
                font-family: ${fontFamily}, Arial, sans-serif;
                line-height: ${lineHeight};
                font-size: ${fontSize};
                color: ${color};
                background-color: ${backgroundColor};
                margin: 0;
                padding: 0;
            }

            @media not (prefers-reduced-motion) {
                body {
                    scroll-behavior: smooth;
                }
            }
        `;
}

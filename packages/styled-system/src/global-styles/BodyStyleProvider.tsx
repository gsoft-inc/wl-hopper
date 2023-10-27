import { useRef, useState } from "react";
import type { HopperTokenKey } from "../tokens/tokens.ts";
import { isNil } from "../utils/assertion.ts";
import { useInsertStyleElement } from "../utils/useInsertStyleElement.ts";
import { useIsomorphicLayoutEffect } from "../utils/useIsomorphicLayoutEffect.ts";
import { ThemeComputedStyle } from "../utils/useThemeComputedStyle.ts";

interface CosmeticStyles {
    color:string;
    backgroundColor:string;
    lineHeight:string;
    fontFamily:string;
}

const BodyTokens = {
    color: "--hop-neutral-text",
    backgroundColor: "--hop-neutral-surface",
    fontFamily: "--hop-body-md-font-family",
    lineHeight: "--hop-body-md-line-height"
} satisfies Record<string, HopperTokenKey>;


interface BodyStyleProviderProps {
    rootSelector: string;
}

/* The BodyStyleProvider injects fonts and body styles on the body.
* Since tokens are injected on a dom element inside the body, tokens can not be used in the body styles.
* This component makes sure that the body styles are injected without referring to tokens.
*/
export function BodyStyleProvider({ rootSelector }: BodyStyleProviderProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [cosmeticStyles, setCosmeticStyles] = useState<CosmeticStyles| undefined>(undefined);

    useIsomorphicLayoutEffect(() => {
        if (ref.current) {
            const computedStyle = new ThemeComputedStyle(ref, `.${rootSelector}`);

            const color = computedStyle.getPropertyValue(BodyTokens.color);
            const backgroundColor = computedStyle.getPropertyValue(BodyTokens.backgroundColor);
            const fontFamily = computedStyle.getPropertyValue(BodyTokens.fontFamily);
            const lineHeight = computedStyle.getPropertyValue(BodyTokens.lineHeight);

            setCosmeticStyles({ color, backgroundColor, lineHeight, fontFamily });
        }
        // TODO: we re-run this hook if colorScheme changes
    }, [ref]);

    useInsertStyleElement(
        `hop-body-styles-${rootSelector}`,
        isNil(cosmeticStyles) ? "" : generateBodyCssContent(cosmeticStyles)
    );

    return (
        <div ref={ref}></div>
    );
}


function generateBodyCssContent({ color, backgroundColor, fontFamily, lineHeight }: CosmeticStyles) {
    return `
            body {
                -webkit-font-smoothing: antialiased;
                font-family: ${fontFamily}, Arial;
                line-height: ${lineHeight};
                font-size: 16px;
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

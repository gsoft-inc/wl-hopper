import { useInsertStyleElement } from "../utils/useInsertStyleElement.ts";
import { Tokens } from "./tokens.ts";

/**
 * Injects the tokens into the DOM as CSS variables, under the rootSelector className.
 * @example
 * assuming different versions of the design system loaded at the same time, one with version 1, the other with version 2.0.0
 *  <head>
 *      <style id="hop-tokens-1.0.0">
 *          .hop-1-0-0 {
 *              --token: red
 *          }
 *       </style>
 *       <style id="hop-tokens-2.0.0">
 *          .hop-2-0-0 {
 *              --token: blue
 *          }
 *       </style>
 *   </head>
 */
export function useInjectTokens(rootSelector: string) {
    useInsertStyleElement(
        `hop-tokens-${rootSelector}`,
        tokensToCssString(`.hop.${rootSelector}`, Tokens.Core)
    );

    useInsertStyleElement(
        `hop-tokens-semantic-${rootSelector}`,
        tokensToCssString(`.hop.${rootSelector}`, Tokens.Semantic)
    );

    useInsertStyleElement(
        `hop-tokens-semantic-dark-${rootSelector}`,
        tokensToCssString(`.hop.${rootSelector}-dark`, Tokens.DarkSemantic)
    );
}

function tokensToCssString(selector: string, tokens: Record<string, string>) {
    const cssValues = Object.entries(tokens).reduce((acc, [key, value]) => {
        return `${acc} ${key}: ${value};`;
    }, "");

    return `${selector} {${cssValues}\n}`;
}

import type { TransformedToken } from "style-dictionary";

export function isSizeType (token: TransformedToken): boolean {
    if (token) {
        return (
            token.type === "size"
        );
    }

    return false;
}


export function pxToRem (token: TransformedToken): string {
    if (parseInt(token.original.value) === 0) {
        return token.original.value;
    }

    return `${parseInt(token.value) / 16}rem`;
}

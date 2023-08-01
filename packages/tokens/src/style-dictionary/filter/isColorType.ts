import type { TransformedToken } from "style-dictionary";

export const isColorType = (token: TransformedToken): boolean => token.type === "color";

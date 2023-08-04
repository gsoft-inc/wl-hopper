import type { TransformedToken } from "style-dictionary";

export const isDarkTokens = (token: TransformedToken): boolean => token.filePath.includes("dark");

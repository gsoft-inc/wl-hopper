import type { ParserOptions } from "style-dictionary/types/Parser.js";

export const w3cTokenJsonParser = {
    pattern: /\.json$|\.tokens\.json$|\.tokens$/,
    parse: ({ contents }: ParserOptions) => {
        const preparedContent = (contents || "{}")
            .replace(/"\$?value"\s*:/g, "\"value\":")
            .replace(/"\$?type"\s*:/g, "\"type\":")
            .replace(/"\$?description"\s*:/g, "\"comment\":");

        return JSON.parse(preparedContent);
    }
};

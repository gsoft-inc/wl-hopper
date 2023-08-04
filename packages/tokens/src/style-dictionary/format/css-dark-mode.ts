import type { Dictionary } from "style-dictionary";

export const cssDarkMode = function ({ dictionary }: { dictionary: Dictionary }) {
    const darkTokens = dictionary.allTokens.filter(token => {
        return token.filePath.includes("dark");
    }).map(token => {
        let value = token.value;

        if (dictionary.usesReference(token.original.value)) {
            const refs = dictionary.getReferences(token.original.value);
            refs.forEach(ref => {
                value = token.value.replace(ref.value, () => `var(--${ref.name})`);
            });
        }

        return `  --${token.name}: ${value};`;
    }).join("\n");

    return `[data-mode="dark"] {\n${darkTokens}\n}`;
};

import StyleDictionary from "style-dictionary";
import config from "./config.ts";

console.log("\nBuild started...");

StyleDictionary.registerFormat({
    name: "css/dark-mode",
    formatter: function ({ dictionary }) {
        const lightTokens = dictionary.allTokens.map(token => {
            let value = token.value;

            if (dictionary.usesReference(token.original.value)) {
                const refs = dictionary.getReferences(token.original.value);
                refs.forEach(ref => {
                    value = value.replace(ref.value, () => `var(--${ref.name})`);
                });
            }

            return `  --${token.name}: ${value};`;
        }).join("\n");

        const darkTokens = dictionary.allProperties.filter(token => {
            return token.darkValue;
        }).map(token => {
            let darkValue = token.darkValue;

            if (dictionary.usesReference(token.original.darkValue)) {
                const refs = dictionary.getReferences(token.original.darkValue);
                refs.forEach(ref => {
                    darkValue = token.darkValue.replace(ref.value, () => `var(--${ref.name})`);
                });
            }

            return `  --${token.name}: ${darkValue};`;
        }).join("\n");

        return `:root {\n${lightTokens}\n}\n\n[data-theme="dark"] {\n${darkTokens}\n}`;
    }
});

StyleDictionary.extend(config).buildAllPlatforms();

console.log("\n🚀 Build completed!\n");

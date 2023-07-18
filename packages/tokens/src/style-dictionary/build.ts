import StyleDictionary, { type TransformedTokens } from "style-dictionary";
import config from "./config.ts";
import { cssDarkMode } from "./format/css-dark-mode.ts";
import { w3cTokenJsonParser } from "./parser/w3c-token-parser.ts";

console.log("\nBuild started...");

const handleGroups = (dataArray: TransformedTokens[]): string[] => {
    if (!dataArray) {
        return [];
    }

    const groups = dataArray.map(token => token.group);
    const filteredGroups = groups.filter(group => group !== undefined);
    const uniqueGroups = [...new Set(filteredGroups)];

    return uniqueGroups.map(group => group.toString());
};


StyleDictionary.registerParser(w3cTokenJsonParser);

StyleDictionary.registerFormat({
    name: "css/dark-mode",
    formatter: cssDarkMode
});

StyleDictionary.registerFormat({
    name: "custom/doc",
    formatter: function ({ dictionary }) {
        const groups = handleGroups(dictionary.allTokens);

        const dataArray = groups.map(group => {
            const formattedGroup = group.charAt(0).toUpperCase() + group.slice(1);
            let header = `\n  /**\n   * @tokens ${formattedGroup}s\n   * @presenter ${formattedGroup} \n   */\n\n`;
            const data = dictionary.allTokens.filter(token => {
                return token.group === group;
            });

            if (group === "mediaQuery" || group === "shadow" || group === "zIndex") {
                header = `\n  /**\n   * @tokens ${formattedGroup} \n   */\n\n`;
            }

            return {
                header,
                data
            };
        });

        const storybookDocs = dataArray
            .map(function (tokens) {
                return (
                    tokens.header +
                    tokens.data
                        .map(props => `  --${props.name}: ${props.value};`)
                        .join("\n")
                );
            })
            .join("\n");

        return `:root {${storybookDocs}\n}`;
    }
});

StyleDictionary.extend(config).buildAllPlatforms();

console.log("\n🚀 Build completed!\n");

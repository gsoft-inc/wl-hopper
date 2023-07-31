import type { Config } from "style-dictionary";

const PREFIX = "hop";
const BUILD_PATH = "dist/";
const DOC_BUILD_PATH = "docs/";

export function getStyleDictionaryConfig (mode: "light" | "dark"): Config {
    const isLightMode = mode === "light";

    const lightConfig = {
        "destination": "tokens.css",
        "format": "css/variables",
        "options": {
            "outputReferences": true
        }
    };

    const darkConfig = {
        "destination": "dark/tokens.css",
        "format": "css/dark-mode",
        "filter": "mode/dark",
        "options": {
            "outputReferences": true
        }
    };

    return {
        "source": [
            `src/tokens/semantic/${mode}/*.tokens.json`,
            "src/tokens/core/*.tokens.json",
            "src/tokens/components/*.tokens.json"
        ],
        "platforms": {
            "css": {
                "transformGroup": "css",
                "buildPath": BUILD_PATH,
                "prefix": PREFIX,
                "files": [
                    isLightMode ? lightConfig : darkConfig,
                    {
                        "destination": isLightMode ? `../${DOC_BUILD_PATH}tokens.css` : `../${DOC_BUILD_PATH}${mode}/tokens.css`,
                        "format": "custom/doc",
                        "filter": "colors",
                        "options": {
                            "outputReferences": true,
                            "isDarkMode": !isLightMode
                        }
                    }
                ]
            }
        }
    };
}

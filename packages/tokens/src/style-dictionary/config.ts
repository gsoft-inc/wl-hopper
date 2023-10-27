import type { Config } from "style-dictionary";

const PREFIX = "hop";
const BUILD_PATH = "dist/";
const STORYBOOK_BUILD_PATH = "../src/stories";
const DOCS_BUILD_PATH = "../../../apps/docs";

export const fontsConfig = {
    "source": ["src/tokens/asset/*.tokens.json"],
    "platforms": {
        "css-font-face": {
            "transforms": ["attribute/font"],
            "buildPath": `${BUILD_PATH}`,
            "files": [
                {
                    "destination": "fonts.css",
                    "format": "font-face",
                    "filter": {
                        "attributes": {
                            "category": "asset",
                            "type": "font"
                        }
                    },
                }
            ],
            "actions": ["copy_assets"]
        }
    }
};

export function getStyleDictionaryConfig(mode: "light" | "dark"): Config {
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
                "transformGroup": "custom/css",
                "buildPath": BUILD_PATH,
                "prefix": PREFIX,
                "files": [
                    isLightMode ? lightConfig : darkConfig,
                    {
                        "destination": isLightMode ? `${STORYBOOK_BUILD_PATH}/datas/tokens.json` : `${STORYBOOK_BUILD_PATH}/datas/tokens-dark.json`,
                        "format": "custom/doc",
                        "filter": "colors",
                        "options": {
                            "outputReferences": true
                        }
                    },
                    {
                        "destination": isLightMode ? `${DOCS_BUILD_PATH}/datas/tokens.json` : `${DOCS_BUILD_PATH}/datas/tokens-dark.json`,
                        "format": "custom/json",
                        "options": {
                            "outputReferences": true
                        }
                    }
                ]
            }
        }
    };
}

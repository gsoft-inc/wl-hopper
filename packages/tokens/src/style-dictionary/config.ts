import type { Config, File } from "style-dictionary";

const PREFIX = "hop";
const BUILD_PATH = "dist/";
const STORYBOOK_BUILD_PATH = "../src/stories";
const DOCS_BUILD_PATH = "../../../apps/docs";
const STYLED_SYSTEM_BUILD_PATH = "../styled-system/src/";

export const fontsConfig: Config = {
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
                    }
                }
            ],
            "actions": ["copy_assets"]
        }
    }
};

export function getStyledSystemTokensConfig(mode: "light" | "dark"): Config {
    const isLightMode = mode === "light";

    return {
        "source": [
            "src/tokens/core/*.tokens.json",
            `src/tokens/semantic/${mode}/*.tokens.json`
        ],
        "platforms": {
            "typescript": {
                "transformGroup": "custom/css", // We want the same values and name as the ones shown in css
                "buildPath": STYLED_SYSTEM_BUILD_PATH,
                "prefix": PREFIX,
                "options": {
                    "fileHeader": "typescript-file-header"
                },
                "files": [
                    {
                        "destination": `tokens/generated/${isLightMode ? "light-tokens" : "dark-semantic-tokens" }.ts`,
                        "format": "custom/ts-tokens",
                        "options": {
                            "outputReferences": true
                        }
                    }
                ]

            }
        }
    };
}

export function getStyleDictionaryConfig(mode: "light" | "dark"): Config {
    const isLightMode = mode === "light";

    const lightConfig: File = {
        "destination": "tokens.css",
        "format": "css/variables",
        "options": {
            "outputReferences": true
        }
    };

    const darkConfig: File = {
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

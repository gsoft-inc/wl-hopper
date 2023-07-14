import type { Config } from "style-dictionary";

const PREFIX = "hop";
const BUILD_PATH = "dist/";

const config: Config = {
    "source": ["src/tokens/**/*.tokens.json"],
    "platforms": {
        "css": {
            "transformGroup": "css",
            "buildPath": BUILD_PATH,
            "prefix": PREFIX,
            "files": [
                {
                    "destination": "tokens.css",
                    "format": "css/dark-mode",
                    "options": {
                        "outputReferences": true
                    }
                }
            ]
        }
    }
};

export default config;

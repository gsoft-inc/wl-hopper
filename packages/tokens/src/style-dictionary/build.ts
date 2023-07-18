import StyleDictionary from "style-dictionary";

import config from "./config.ts";
import { cssDarkMode } from "./format/css-dark-mode.ts";
import { w3cTokenJsonParser } from "./parser/w3c-token-parser.ts";

console.log("\nBuild started...");

StyleDictionary.registerParser(w3cTokenJsonParser);

StyleDictionary.registerFormat({
    name: "css/dark-mode",
    formatter: cssDarkMode
});

StyleDictionary.extend(config).buildAllPlatforms();

console.log("\n🚀 Build completed!\n");

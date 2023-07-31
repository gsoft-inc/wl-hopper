import StyleDictionary from "style-dictionary";

import { getStyleDictionaryConfig } from "./config.ts";
import { isDarkTokens } from "./filter/getDarkToken.ts";
import { isColorType } from "./filter/getColorType.ts";
import { customDoc, cssDarkMode, customDocNew } from "./format/index.ts";
import { w3cTokenJsonParser } from "./parser/w3c-token-parser.ts";

console.log("\nBuild started...");

StyleDictionary.registerFilter({
    name: "mode/dark",
    matcher: isDarkTokens
});

StyleDictionary.registerFilter({
    name: "colors",
    matcher: isColorType
});

StyleDictionary.registerParser(w3cTokenJsonParser);

StyleDictionary.registerFormat({
    name: "css/dark-mode",
    formatter: cssDarkMode
});

StyleDictionary.registerFormat({
    name: "custom/doc",
    formatter: customDoc
});

StyleDictionary.registerFormat({
    name: "custom/doc/new",
    formatter: customDocNew
});

console.log("\n☀️ Default tokens...");
StyleDictionary.extend(getStyleDictionaryConfig("light")).buildAllPlatforms();

console.log("\n🌙 Building dark mode...");
StyleDictionary.extend(getStyleDictionaryConfig("dark")).buildAllPlatforms();

console.log("\n🚀 Build completed!\n");

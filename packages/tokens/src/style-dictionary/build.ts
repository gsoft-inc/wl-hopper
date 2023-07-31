import StyleDictionary from "style-dictionary";

import { getStyleDictionaryConfig } from "./config.ts";
import { isDarkTokens } from "./filter/getDarkToken.ts";
import { customDoc, cssDarkMode } from "./format/index.ts";
import { w3cTokenJsonParser } from "./parser/w3c-token-parser.ts";
import { isSizeType, pxToRem } from "./transform/px-to-rem.ts";

console.log("\nBuild started...");

StyleDictionary.registerFilter({
    name: "mode/dark",
    matcher: isDarkTokens
});

StyleDictionary.registerParser(w3cTokenJsonParser);

StyleDictionary.registerTransform({
    name: "pxToRem",
    type: "value",
    matcher: isSizeType,
    transformer: pxToRem
});

StyleDictionary.registerTransformGroup({
    name: "custom/css",
    transforms: StyleDictionary.transformGroup["css"].concat(["pxToRem"])
});

StyleDictionary.registerFormat({
    name: "css/dark-mode",
    formatter: cssDarkMode
});

StyleDictionary.registerFormat({
    name: "custom/doc",
    formatter: customDoc
});

console.log("\n☀️ Default tokens...");
StyleDictionary.extend(getStyleDictionaryConfig("light")).buildAllPlatforms();

console.log("\n🌙 Building dark mode...");
StyleDictionary.extend(getStyleDictionaryConfig("dark")).buildAllPlatforms();

console.log("\n🚀 Build completed!\n");

import StyleDictionary from "style-dictionary";

import { getStyleDictionaryConfig, fontsConfig } from "./config.ts";
import { isDarkTokens } from "./filter/isDarkTokens.ts";
import { isColorType } from "./filter/isColorType.ts";
import { cssDarkMode, customDoc, customJson, fontFace } from "./format/index.ts";
import { w3cTokenJsonParser } from "./parser/w3c-token-parser.ts";
import { isSizeType, pxToRem, attributeFont } from "./transform/index.ts";


// Filters
StyleDictionary.registerFilter({
    name: "mode/dark",
    matcher: isDarkTokens
});

StyleDictionary.registerFilter({
    name: "colors",
    matcher: isColorType
});

// Transform
StyleDictionary.registerTransform({
    name: "pxToRem",
    type: "value",
    matcher: isSizeType,
    transformer: pxToRem
});

StyleDictionary.registerTransform({
    name: "attribute/font",
    type: "attribute",
    transformer: attributeFont
});

StyleDictionary.registerTransformGroup({
    name: "custom/css",
    transforms: StyleDictionary.transformGroup["css"].concat(["pxToRem"])
});

// Format
StyleDictionary.registerFormat({
    name: "font-face",
    formatter: fontFace
});

StyleDictionary.registerFormat({
    name: "css/dark-mode",
    formatter: cssDarkMode
});

StyleDictionary.registerFormat({
    name: "custom/doc",
    formatter: customDoc
});

StyleDictionary.registerFormat({
    name: "custom/json",
    formatter: customJson
});

// Parser
StyleDictionary.registerParser(w3cTokenJsonParser);

// Build
console.log("\nBuild started...");

console.log("\n|- 🔤 Building fonts...");
StyleDictionary.extend(fontsConfig).buildAllPlatforms();

console.log("\n|- 🌞️ Default tokens...");
StyleDictionary.extend(getStyleDictionaryConfig("light")).buildAllPlatforms();

console.log("\n|- 🌙 Building dark mode...");
StyleDictionary.extend(getStyleDictionaryConfig("dark")).buildAllPlatforms();

console.log("\n🚀 Build completed!\n");

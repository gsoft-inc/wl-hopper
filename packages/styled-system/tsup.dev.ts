import { defineDevConfig } from "@workleap/tsup-configs";
import packageJson from "./package.json";
import { createCssModuleEsbuildPlugin } from "./tsup-css-module-plugin.ts";

export default defineDevConfig({
    esbuildPlugins: [
        createCssModuleEsbuildPlugin({
            generateScopedName: "[name]__[local]___[hash:base64:5]",
            hashPrefix: packageJson.version
        })]
});

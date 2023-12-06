import { createCssModuleEsbuildPlugin } from "@hopper-ui/tsup-css-module-plugin";
import { defineBuildConfig } from "@workleap/tsup-configs";
import packageJson from "./package.json";

export default defineBuildConfig({
    entry: ["./src/**/*.(ts|tsx)"],
    esbuildPlugins: [
        createCssModuleEsbuildPlugin({
            generateScopedName: "[name]__[local]___[hash:base64:5]",
            hashPrefix: packageJson.version
        })]
});

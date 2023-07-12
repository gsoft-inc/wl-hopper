import { defineBuildConfig } from "@workleap/tsup-configs";

export default defineBuildConfig({
    entry: ["src/style-dictionary/build.ts"],
    outDir: "build",
    platform: "node"
});

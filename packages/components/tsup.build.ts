import { defineBuildConfig } from "@workleap/tsup-configs";

export default defineBuildConfig({
    entry: ["./src/**/src/*"],
    minify: true,
    splitting: false
});

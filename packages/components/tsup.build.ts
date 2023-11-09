import { defineBuildConfig } from "@workleap/tsup-configs";

export default defineBuildConfig({
    entry: ["./src/**/src/*.(ts|tsx)"],
    minify: true,
    splitting: false
});

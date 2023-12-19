import { defineBuildConfig } from "@workleap/tsup-configs";

export default defineBuildConfig({
    entry: ["./src/**/src/*.(ts|tsx)"],
    target: "es2019" // We set target ES2019 since ES2020 syntax is not supported by older versions of storybook (used in orbiter)
});

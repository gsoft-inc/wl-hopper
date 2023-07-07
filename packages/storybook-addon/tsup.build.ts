import { defineConfig } from "tsup";

export default defineConfig({
    dts: true,
    entry: ["src"],
    clean: true,
    external: ["@hopper-ui/storybook-addon"],
    format: ["esm", "cjs"]
});

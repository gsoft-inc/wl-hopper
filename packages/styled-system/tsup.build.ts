import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    minify: true,
    splitting: false,
    treeshake: true,
    entry: ["./src"],
    outDir: "./dist",
    format: ["esm"],
    target: "esnext",
    platform: "browser"
});

import { defineConfig } from "tsup";

export default defineConfig({
    dts: true,
    clean: true,
    minify: true,
    splitting: false,
    treeshake: true,
    entry: ["./src", "!src/**/*.stories.*"],
    outDir: "./dist",
    format: ["esm"],
    target: "esnext",
    platform: "browser"
});

import { defineConfig } from "tsup";

export default defineConfig({
    dts: true,
    splitting: false,
    watch: true,
    sourcemap: "inline",
    entry: ["./src"],
    outDir: "./dist",
    format: ["esm"],
    target: "esnext",
    platform: "browser"
});

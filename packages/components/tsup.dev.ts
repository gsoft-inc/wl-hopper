import { defineDevConfig } from "@workleap/tsup-configs";

export default defineDevConfig({
    entry: ["./src/**/src/*.(ts|tsx)"]
});

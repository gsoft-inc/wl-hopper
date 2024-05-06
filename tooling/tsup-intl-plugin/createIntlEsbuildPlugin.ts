import { compileStrings } from "@internationalized/string-compiler";
import { readFile } from "fs/promises";
import type { Options } from "tsup";

type EsbuildPlugin = NonNullable<Options["esbuildPlugins"]>[number];

export function createIntlEsbuildPlugin(): EsbuildPlugin {
    return {
        name: "intl-plugin",
        setup(build) {
            build.onLoad({ filter: /(intl).*\.json$/ }, async args => {
                const content = await readFile(args.path, "utf8");
                const json = JSON.parse(content);
                const code = compileStrings(json);

                return { contents: code };
            });
        }
    };
}

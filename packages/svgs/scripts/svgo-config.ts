import type { Config } from "svgo";

const config: Config = {
    multipass: true,
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    removeViewBox: false
                }
            }
        },
        { name: "convertStyleToAttrs" },
        { name: "sortAttrs" },
        { name: "removeStyleElement" },
        { name: "removeScriptElement" },
        {
            name: "removeAttrs",
            params: {
                attrs: "clip-rule"
            }
        }
    ]
};

export default config;
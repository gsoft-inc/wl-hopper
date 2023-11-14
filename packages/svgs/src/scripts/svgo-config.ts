import type { Config } from "svgo";

const config: Config = {
    multipass: true,
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    removeViewBox: false,
                    convertColors: {
                        currentColor: true
                    }
                }
            }
        },
        { name: "convertStyleToAttrs" },
        { name: "sortAttrs" },
        { name: "removeXMLNS" },
        { name: "removeStyleElement" },
        { name: "removeScriptElement" }
    ]
};

export default config;
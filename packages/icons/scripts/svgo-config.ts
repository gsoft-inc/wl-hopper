import type { Config } from "svgo";

const config : Config = {
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    removeViewBox: false
                }
            }
        },
        "removeXMLNS"
    ]
};

export default config;

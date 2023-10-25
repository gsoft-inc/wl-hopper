import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import turbosnap from "vite-plugin-turbosnap";


const storybookConfig: StorybookConfig = {
    stories: [
        "../packages/**/*.stories.@(ts|tsx)",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-mdx-gfm"
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    docs: {
        autodocs: "tag"
    },
    async viteFinal(config, { configType }) {
        return mergeConfig(config, {
            plugins:
            configType === "PRODUCTION"
                ? [
                    // TurboSnap only officially support webpack (https://www.chromatic.com/docs/turbosnap/#prerequisites)
                    // This plugin is suggested by storybook and maintained by a core storybook contributor.
                    // This is experimental, and may not support all project and storybook configurations, yet.
                    turbosnap({
                    // This should be the base path of your storybook.  In monorepos, you may only need process.cwd().
                        rootDir: config.root ?? process.cwd()
                    })
                ]
                : []
        });
    }
};

export default storybookConfig;

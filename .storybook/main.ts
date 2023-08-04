import type { StorybookConfig } from "@storybook/react-webpack5";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const storybookConfig: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
        "../packages/**/*.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        {
            name:"@storybook/addon-essentials",
            options: {
                actions: false,
                backgrounds: false,
                controls: false,
                toolbars: false,
                measure: false,
                outline: false,
                highlight: false
            }

        },
        "@hopper-ui/storybook-addon",
        "@storybook/addon-mdx-gfm"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },
    docs: {
        autodocs: "tag"
    },
    babel: async config => {
        config.presets = [
            ...(config.presets || []),
            "@babel/preset-typescript"
            // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#babel-mode-v7-exclusively
        ];

        return config;
    },
    webpack: async config => {
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    configFile: "./tsconfig.json",
                    extensions: config.resolve.extensions
                })
            ];
        }

        return config;
    }
};
export default storybookConfig;

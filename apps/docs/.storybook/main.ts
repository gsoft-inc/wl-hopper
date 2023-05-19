import type { StorybookConfig } from "@storybook/nextjs"
import path = require("path");

const config: StorybookConfig = {
    stories: ["../components/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/components': path.resolve(__dirname, "../components"),
            '@/configs': path.resolve(__dirname, "../configs"),
        };

        return config;
    },
}
export default config

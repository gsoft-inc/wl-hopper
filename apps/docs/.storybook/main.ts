import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export default {
    stories: ["../components/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {}
    },
    docs: {
        autodocs: "tag"
    },
    webpackFinal: async config => {
        // Configure aliases
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions
                })
            ];
        }

        // Configure SVGR
        // taken from here: https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs#custom-webpack-config
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];

        // This modifies the existing image rule to exclude .svg files
        // since you want to handle those files with @svgr/webpack
        const imageRule = config.module.rules.find(rule => rule?.["test"]?.test(".svg"));
        if (imageRule) {
            imageRule["exclude"] = /\.svg$/;
        }

        // Configure .svg files to be loaded with @svgr/webpack
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
} satisfies StorybookConfig;

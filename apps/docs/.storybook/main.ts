import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import path from "path";

export default {
    stories: ["../components/**/*.stories.@(ts|tsx)", "../app/ui/**/*.stories.@(ts|tsx)"],
    env: config => ({
        ...config,
        STORYBOOK_MODE: "active"
    }),
    addons: [
        "@storybook/addon-a11y",
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
    features: {
        experimentalRSC: true
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
            config.resolve.alias = {
                ...config.resolve.alias,
                "@": path.resolve(__dirname, "app")
            };
        }

        // Configure SVGR
        // taken from here: https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs#custom-webpack-config
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];

        // This modifies the existing image rule to exclude .svg files
        // since you want to handle those files with @svgr/webpack
        // disable ts since we know the concrete type of rule.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const imageRule = config.module.rules.find(rule => rule?.["test"]?.test(".svg"));
        if (imageRule) {
            // disable ts since we know the concrete type of imageRule.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
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

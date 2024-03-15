import type { StorybookConfig } from "@storybook/react-webpack5";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { swcConfig as SwcBuildConfig } from "./swc.build.ts";
import { swcConfig as SwcDevConfig } from "./swc.dev.ts";

const storybookConfig: StorybookConfig = {
    stories: [
        "../packages/**/*.stories.@(ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            builder: {
                useSWC: true
            },
            fastRefresh: true
        }
    },
    docs: {
        autodocs: "tag"
    },
    swc: (_, { configType }) => {
        const config = configType === "PRODUCTION" ? SwcBuildConfig : SwcDevConfig;

        return config;
    },
    webpackFinal(config) {
        config.resolve = {
            ...config.resolve,
            plugins: [
                ...(config.resolve?.plugins || []),
                new TsconfigPathsPlugin({
                    configFile: "./tsconfig.json",
                    extensions: config.resolve?.extensions
                })
            ]
        };

        return config;
    }
};

export default storybookConfig;

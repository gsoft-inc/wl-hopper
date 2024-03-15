import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
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
        "@storybook/addon-interactions",
        "@storybook/addon-webpack5-compiler-swc"
    ],
    framework: "@storybook/react-webpack5",
    // core: {
    //     builder: {
    //         name: "@storybook/builder-webpack5",
    //         options: {
    //             lazyCompilation: true
    //         }
    //     }
    // },
    docs: {
        autodocs: "tag"
    },
    swc: (_, { configType }) => {
        const config = configType === "PRODUCTION" ? SwcBuildConfig : SwcDevConfig;

        return config;
    },
    webpackFinal(config, { configType }) {
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

        config.plugins = [
            ...(config.plugins ?? []),
            configType !== "PRODUCTION" && new ReactRefreshWebpackPlugin({
                overlay: {
                    sockIntegration: "whm"
                }
            })
        ].filter(Boolean);

        return config;
    }
};

export default storybookConfig;

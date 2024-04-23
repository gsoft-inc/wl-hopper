import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Options } from "@storybook/types";
import type { Options as SwcOptions } from "@swc/core";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

import { swcConfig as SwcBuildConfig } from "./swc.build.ts";
import { swcConfig as SwcDevConfig } from "./swc.dev.ts";

// We sometimes need to disable the lazyCompilation to properly run the test runner on stories
const isLazyCompilation = !(process.env.STORYBOOK_NO_LAZY === "true");

const storybookConfig: StorybookConfig = {
    stories: [
        "../packages/**/*.stories.@(ts|tsx)"
    ],
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-webpack5-compiler-swc",
        "@chromatic-com/storybook"
    ],
    framework: "@storybook/react-webpack5",
    core: {
        builder: {
            name: "@storybook/builder-webpack5",
            options: {
                lazyCompilation: isLazyCompilation
            }
        }
    },
    docs: {
        autodocs: "tag"
    },
    swc: (_: SwcOptions, { configType }: Options): SwcOptions => {
        return configType === "PRODUCTION" ? SwcBuildConfig : SwcDevConfig;
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

        // We find the CSS Loader and set the localIdentName to a more readable format
        config.module?.rules?.forEach(rule => {
            if (typeof rule === "object" && rule?.test?.toString() === "/\\.css$/" && Array.isArray(rule.use)) {
                rule.use.forEach(loader => {
                    if (typeof loader === "object" && loader?.loader?.includes("css-loader")) {
                        const cssLoaderOptions = typeof loader.options === "string" ? { } : loader.options;
                        loader.options = {
                            ...cssLoaderOptions,
                            modules: {
                                ...((typeof cssLoaderOptions?.modules === "string" ? { mode: cssLoaderOptions?.modules } : cssLoaderOptions?.modules)),
                                localIdentName: "[local]___[hash:base64:5]"
                            }
                        };
                    }
                });
            }
        });

        return config;
    }
};

export default storybookConfig;

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

        // Modify the css-loader options to simplify the class names
        // By default, with the config, the classnames are like this: GETEs8cGi4WwwvV1ooFy MUs8LC8twKwy5uAnhOWJ PafTkO4uwI6M3m4HX7JI
        // With this new config, the classnames are like this: hop-Button___GETEs hop-Button--primary___MUs8L hop-Button--md___PafTk
        for (const rule of config.module?.rules || []) {
            if (typeof rule === "object" && rule?.use && Array.isArray(rule.use)) {
                for (const loader of rule.use) {
                    if (typeof loader === "object" && loader?.loader?.includes("css-loader")) {
                        const cssLoader = loader;
                        if (cssLoader && typeof cssLoader === "object") {
                            const previousOptions = typeof cssLoader.options === "string" ? { } : cssLoader.options;
                            cssLoader.options = {
                                ...previousOptions,
                                modules: {
                                    ...((typeof previousOptions?.modules === "string" ? { mode: previousOptions?.modules } : previousOptions?.modules)),
                                    auto: true,
                                    localIdentName: "[local]___[hash:base64:5]"
                                }
                            };
                        }
                    }
                }
            }
        }

        return config;
    }
};


export default storybookConfig;

import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
/**
 * vite-plugin-turbosnap use the syntax export {default as pluginTurbosnap}. This results in exporting a default object
 * as a named export. So to use it, we need to do turbosnap.default. Their documenting doesn't mention this, but it's
 * the only way to get it to work with typescript.
 */
import turbosnap from "vite-plugin-turbosnap";
import tsconfigPaths from "vite-tsconfig-paths";

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
        name: "@storybook/react-vite",
        options: {}
    },
    docs: {
        autodocs: "tag"
    },
    async viteFinal(config, { configType }) {
        const plugins = [tsconfigPaths()];

        if (configType === "PRODUCTION") {
            plugins.push(
                // TurboSnap only officially support webpack (https://www.chromatic.com/docs/turbosnap/#prerequisites)
                // This plugin is suggested by storybook and maintained by a core storybook contributor.
                // This is experimental, and may not support all project and storybook configurations, yet.
                turbosnap.default({
                // This should be the base path of your storybook.  In monorepos, you may only need process.cwd().
                    rootDir: config.root ?? process.cwd()
                })
            );
        }

        return mergeConfig(config, {
            plugins
        });
    }
};

export default storybookConfig;

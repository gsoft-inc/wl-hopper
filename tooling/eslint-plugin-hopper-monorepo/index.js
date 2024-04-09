// @ts-check

// This file is in JavaScript because we don't want to transpile it, so we don't have to build it before using it

/**
 * @type {import("eslint").ESLint.Plugin}
 */
const plugin = {
    configs: {
        "import-order": require("./config/import-order")
    }
};

module.exports = plugin;

// @ts-check

// This file is in JavaScript because we don't want to transpile it, so we don't have to build it before using it

/**
 * @type {import("eslint").ESLint.ConfigData}
 */
const config = {
    rules: {
        "import/order": ["error", {
            "newlines-between": "always",
            "groups": [
                ["builtin", "external"],
                "parent",
                ["sibling", "index"]
            ],
            "pathGroups": [
                {
                    "pattern": "./*.module.css", // CSS comes in a group after the last group
                    "group": "object",
                    "position": "after"
                }
            ],
            "pathGroupsExcludedImportTypes": ["builtin"],
            "alphabetize": {
                "order": "asc",
                "caseInsensitive": true
            }
        }]
    }
};

module.exports = config;

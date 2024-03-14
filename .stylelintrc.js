// @ts-check

const HopperCSSVarRegex = /^hop-([A-Z][A-z0-9]+)(-[a-z0-9]+)*$/;
const NormalKebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
// we can't enforce that someone doesn't do --hop-button instead of --hop-Button, because it's too hard to know what is
// a component and what is a token, such as --hop-primary-color. So we'll just allow any kebab-case variable name.
const AllowedCSSVarsRegex = new RegExp(`^(${HopperCSSVarRegex.source}|${NormalKebabCaseRegex.source})$`);

/** @type {import('stylelint').Config} */
const config = {
    extends: "@workleap/stylelint-configs",
    overrides: [
        {
            files: ["./packages/**/*.css"],
            plugins: ["stylelint-use-logical"],
            rules: {
                // 2024-03-14: This rules creates some warnings in the console that can be ignored for now,
                // but will be fixed in the next version of stylelint: https://github.com/stylelint/stylelint/pull/7532
                "csstools/use-logical": true,
                "selector-class-pattern": [
                    /** Selector that ensures our classNames have the pattern hop-ComponentName__element-name--modifier-name */
                    "^hop-([A-Z][A-z0-9]+)([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
                    {
                        resolveNestedSelectors: true,
                        message: selectorValue => `Expected class selector "${selectorValue}" to match our CSS pattern https://github.com/gsoft-inc/wl-hopper/blob/main/CONTRIBUTING.md#css-selector-naming-conventions. Selector validation tool: https://regexr.com/7tftf`
                    }
                ],
                "custom-property-pattern": [
                    AllowedCSSVarsRegex.source,
                    {
                        "message": "Expected css variables to be kebab-case or hop-ComponentName-kebab-case"
                    }
                ]
            }
        }
    ]
};

export default config;

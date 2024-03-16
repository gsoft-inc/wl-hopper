import type { Parameters as SBParameters } from "@storybook/react";
import type { configureAxe } from "axe-playwright";

export type Rules = NonNullable<Parameters<typeof configureAxe>[1]>["rules"];

export interface A11yAddonParameters {
    a11y: {
        disabled?: boolean;
        config?: {
            rules?: Rules;
        };
    };
}

export function a11yParameters(params: A11yAddonParameters["a11y"]): A11yAddonParameters {
    return {
        a11y: params
    };
}

export function getA11yAddonParameters(parameters: SBParameters): A11yAddonParameters["a11y"] | undefined {
    const a11yParams = (parameters as A11yAddonParameters | undefined)?.a11y ;

    return a11yParams;
}

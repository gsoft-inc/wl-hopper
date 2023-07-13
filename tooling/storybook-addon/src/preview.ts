import { HopperProviderDecorator } from "./HopperProviderDecorator.tsx";
import type { Decorator } from "@storybook/react";
import type { PresetSchemeValues } from "./types.ts";
import { COLOR_SCHEME_TOOL_ID } from "./constants.ts";

export const decorators: Decorator[] = [
    HopperProviderDecorator
];

export const globalTypes = {
    scheme: {
        name: "Scheme",
        description: "Select a color scheme",
        defaultValue: "light" satisfies PresetSchemeValues,
        toolbar: {
            icon: "mirror",
            items: ["light", "dark", "all"] satisfies (PresetSchemeValues)[],
            dynamicTitle: true
        }
    }
};


export const globals = {
    [COLOR_SCHEME_TOOL_ID]: null
};

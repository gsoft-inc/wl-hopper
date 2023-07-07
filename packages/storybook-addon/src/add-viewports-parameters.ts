import type { Preview } from "@storybook/react";
import { Breakpoints } from "@hopper-ui/fake-tokens";

const InitialViewports = Object.entries(Breakpoints).map(([key, value]) => {
    return {
        name: `${key} (${value}px)`,
        styles: {
            width: `${value}px}`,
            height: "100%"
        },
        type: "desktop"
    };
});

export default {
    parameters: {
        viewport: {
            viewports: InitialViewports
        }
    }
} satisfies Preview;

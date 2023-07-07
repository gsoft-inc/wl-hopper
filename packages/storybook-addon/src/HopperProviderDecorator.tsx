import type { Decorator } from "@storybook/react";
import { BreakpointProvider } from "@hopper-ui/styled-system";

export const HopperProviderDecorator: Decorator = (Story, context) => {
    return (
        <BreakpointProvider>
            <Story {...context} />
        </BreakpointProvider>
    );
};

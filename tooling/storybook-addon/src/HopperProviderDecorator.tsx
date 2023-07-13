import type { Decorator } from "@storybook/react";
import { Div, HopperProvider } from "@hopper-ui/styled-system";
import { getColorSchemeFromContext } from "./color-scheme.tsx";

export const HopperProviderDecorator: Decorator = (Story, context) => {
    const scheme = getColorSchemeFromContext(context);

    if (scheme === "all") {
        return (
            <HopperProvider colorScheme="light" withTokens withGlobalStyles>
                <HopperProvider colorScheme="light" >
                    <Div backgroundColor="alias-body" color="alias-primary">
                        <Story {...context} />
                    </Div>
                </HopperProvider>
                <HopperProvider colorScheme="dark">
                    <Div backgroundColor="alias-body" color="alias-primary">
                        <Story {...context} />
                    </Div>
                </HopperProvider>
            </HopperProvider>
        );
    }

    return (
        <HopperProvider colorScheme={scheme} withTokens withGlobalStyles>
            <Story {...context} />
        </HopperProvider>
    );
};

import { HopperProvider } from "@hopper-ui/components";
import type { HopperCssVars } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

export default {
    title: "Components/HopperProvider",
    component: HopperProvider
} as Meta<typeof HopperProvider>;

type HopperProviderStory = StoryObj<typeof HopperProvider>;

const ColoredDiv = () => {
    return (
        <div style={{
            padding: "var(--hop-space-inset-lg)" satisfies HopperCssVars,
            backgroundColor: "var(--hop-primary-surface)" satisfies HopperCssVars
        }}
        >Hello</div>
    );
};

export const Light: HopperProviderStory = {
    name: "light",
    render: () => (
        <HopperProvider colorScheme="light">
            <ColoredDiv />
        </HopperProvider>
    )
};

export const Dark: HopperProviderStory = {
    name: "dark",
    render: () => (
        <HopperProvider colorScheme="dark">
            <ColoredDiv />
        </HopperProvider>
    )
};

export const WithBodyStyles: HopperProviderStory = {
    name: "with body styles",
    render: () => (
        <HopperProvider withBodyStyle>
            <ColoredDiv />
        </HopperProvider>
    )
};

export const DarkWithBodyStyles: HopperProviderStory = {
    name: "dark with body styles",
    render: () => (
        <HopperProvider colorScheme="dark" withBodyStyle>
            <ColoredDiv />
        </HopperProvider>
    )
};

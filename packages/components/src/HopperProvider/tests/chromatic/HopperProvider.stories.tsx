import { HopperProvider } from "@hopper-ui/components";
import { useColorSchemeContext, type HopperCssVar } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";

export default {
    title: "Components/HopperProvider",
    component: HopperProvider
} as Meta<typeof HopperProvider>;

type HopperProviderStory = StoryObj<typeof HopperProvider>;

const ColoredDiv = () => {
    return (
        <div style={{
            padding: "var(--hop-space-inset-lg)" satisfies HopperCssVar,
            backgroundColor: "var(--hop-primary-surface)" satisfies HopperCssVar
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
        <HopperProvider colorScheme="light" withBodyStyle>
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

const SwitchColorScheme = () => {
    const { setColorScheme } = useColorSchemeContext();

    useEffect(() => {
        setColorScheme("dark");
    }, [setColorScheme]);

    return null;
};

export const SetColorSchemeWithApi: HopperProviderStory = {
    name: "set color scheme with api",
    render: () => (
        <HopperProvider colorScheme="light" withBodyStyle>
            <SwitchColorScheme />
            <ColoredDiv />
        </HopperProvider>
    )
};

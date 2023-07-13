import { HopperProvider, useColorSchemeContext } from "../../src/index.ts";
import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Div } from "@hopper-ui/styled-system";

export default {
    title: "Chromatic/ThemeProvider",
    component: HopperProvider,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof HopperProvider>;

type HopperProviderStory = StoryObj<typeof HopperProvider>;

export const Light: HopperProviderStory = {
    name: "light",
    render: () => (
        <HopperProvider colorScheme="light">
            <Div padding={4} backgroundColor="alias-mid-break" />
        </HopperProvider>
    )
};

export const Dark: HopperProviderStory = {
    name: "dark",
    render: () => (
        <HopperProvider colorScheme="dark">
            <Div padding={4} backgroundColor="alias-mid-break" />
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
        <HopperProvider colorScheme="light">
            <SwitchColorScheme />
            <Div padding={4} backgroundColor="alias-mid-break" />
        </HopperProvider>
    )
};

import { Div, HopperProvider, useColorSchemeContext } from "@hopper-ui/components";
import { HopperProviderOptions } from "@hopper-ui/hopper-chromatic-addon";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";

const ColoredDiv = () => {
    return (
        <Div
            padding="inset-lg"
            backgroundColor="primary"
        >Hello</Div>
    );
};

const meta: Meta<typeof HopperProvider> = {
    title: "Components/HopperProvider",
    component: HopperProvider,
    args: {
        children: <ColoredDiv />
    },
    parameters: {
        hopperProvider: {
            disabled: true
        } satisfies HopperProviderOptions
    }
};

export default meta;

type HopperProviderStory = StoryObj<typeof meta>;

export const Light: HopperProviderStory = {
    name: "light",
    args: {
        colorScheme: "light"
    }
};

export const Dark: HopperProviderStory = {
    name: "dark",
    args: {
        colorScheme: "dark"
    }
};

export const WithBodyStyles: HopperProviderStory = {
    name: "with body styles",
    args: {
        colorScheme: "light",
        withBodyStyle: true
    }
};

export const DarkWithBodyStyles: HopperProviderStory = {
    name: "dark with body styles",
    args: {
        colorScheme: "dark",
        withBodyStyle: true
    }
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
    args: {
        colorScheme: "light",
        withBodyStyle: true,
        children: (
            <>
                <SwitchColorScheme />
                <ColoredDiv />
            </>
        )
    }
};

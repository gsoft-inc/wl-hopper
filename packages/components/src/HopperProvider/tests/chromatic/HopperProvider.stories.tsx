import { HopperProvider } from "../../src/HopperProvider.tsx";
import { Div, useColorSchemeContext } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import type { WithHopperStorybookAddonParameter } from "@hopper-ui/storybook-addon";

const ColoredDiv = () => {
    return (
        <Div
            padding="inset-lg"
            backgroundColor="primary"
        >Hello</Div>
    );
};

const meta = {
    title: "Components/HopperProvider",
    component: HopperProvider,
    args: {
        children: <ColoredDiv />
    },
    parameters: {
        hopper: {
            disabled: true // This file is used to test the HopperProvider in isolation, so we don't want to render the HopperProvider here
        }
    } satisfies WithHopperStorybookAddonParameter
} satisfies Meta<typeof HopperProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        colorScheme: "light"
    }
};

export const Dark: Story = {
    args: {
        colorScheme: "dark"
    }
};

export const WithBodyStyles: Story = {
    args: {
        colorScheme: "light",
        withBodyStyle: true
    }
};

export const DarkWithBodyStyles: Story = {
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

export const SetColorSchemeWithApi: Story = {
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

import { Div } from "@hopper-ui/styled-system";
import { Stack } from "../../src/Stack.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Stack",
    component: Stack,
    args:{
        children: [
            <Div key="1" backgroundColor="core_sapphire-500">Alpha</Div>,
            <Div key="2" backgroundColor="core_sapphire-500">Bravo</Div>,
            <Div key="3" backgroundColor="core_sapphire-500">Charlie</Div>
        ]
    }

} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Reverse: Story = {
    args:{
        reverse: true
    }
};

export const AlignItemsStart: Story = {
    args:{
        alignItems: "start"
    }
};

export const AlignItemsCenter: Story = {
    args:{
        alignItems: "center"
    }
};

export const AlignItemsEnd: Story = {
    args:{
        alignItems: "end"
    }
};

export const JustifyContentStart: Story = {
    args:{
        justifyContent: "start",
        height: "core_960"
    }
};

export const JustifyContentCenter: Story = {
    args:{
        justifyContent: "center",
        height: "core_960"
    }
};

export const JustifyContentEnd: Story = {
    args:{
        justifyContent: "end",
        height: "core_960"
    }
};

export const Wrap: Story = {
    args: {
        height: "core_240",
        wrap: true
    }
};

export const Inline: Story = {
    render: args => (
        <>
            <Stack inline>
                {args.children}
            </Stack>
            <Stack inline>
                {args.children}
            </Stack>
        </>
    )
};

export const Nested: Story = {
    render: args => (
        <Stack gap="core_400">
            <Stack gap="core_40">
                {args.children}
            </Stack>
            <Stack gap="core_800">
                {args.children}
            </Stack>
        </Stack>
    )
};

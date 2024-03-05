import { Div } from "@hopper-ui/styled-system";
import { Inline } from "../../src/Inline.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Inline",
    component: Inline,
    args: {
        children: [
            <Div key="1" backgroundColor="core_sapphire-500">Alpha</Div>,
            <Div key="2" backgroundColor="core_sapphire-500">Bravo</Div>,
            <Div key="3" backgroundColor="core_sapphire-500">Charlie</Div>
        ]
    }
} satisfies Meta<typeof Inline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Reverse: Story = {
    args: {
        reverse: true
    }
};

export const JustifyContentStart: Story = {
    args: {
        justifyContent: "start"
    }
};

export const JustifyContentCenter: Story = {
    args: {
        justifyContent: "center"
    }
};

export const JustifyContentEnd: Story = {
    args: {
        justifyContent: "end"
    }
};

export const AlignItemsStart: Story = {
    args: {
        height: "core_800",
        alignItems: "end"
    }
};

export const AlignItemsCenter: Story = {
    args: {
        height: "core_800",
        alignItems: "center"
    }
};

export const AlignItemsEnd: Story = {
    args: {
        height: "core_800",
        alignItems: "end"
    }
};

export const Wrap: Story = {
    args: {
        width: "core_240"
    }
};

export const Nowrap: Story = {
    args: {
        width: "core_240",
        wrap: false
    }
};

export const DefaultInline: Story = {
    render: args => (
        <>
            <Inline inline {...args} />
            <Inline inline {...args} />
        </>
    )
};

export const Nested: Story = {
    render: args => (
        <Inline gap="core_400">
            <Inline gap="core_40">
                {args.children}
            </Inline>
            <Inline gap="core_800">
                {args.children}
            </Inline>
        </Inline>
    )
};

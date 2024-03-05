import { Div } from "@hopper-ui/styled-system";
import { Flex } from "../../src/Flex.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Flex",
    component: Flex,
    args: {
        children: [
            <Div key="1" backgroundColor="core_sapphire-500">Alpha</Div>,
            <Div key="2" backgroundColor="core_sapphire-500">Bravo</Div>,
            <Div key="3" backgroundColor="core_sapphire-500">Charlie</Div>
        ]
    }
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const FlexInline: Story = {
    args: {
        inline: true
    },
    render: args => (
        <>
            <Flex {...args} />
            <Flex {...args} />
        </>
    )
};

export const Nesting: Story = {
    render: args => (
        <Flex direction="row" gap="core_400">
            <Flex direction="row" gap="core_40">
                {args.children}
            </Flex>
            <Flex direction="column" gap="core_800">
                {args.children}
            </Flex>
        </Flex>
    )
};

export const Gap: Story = {
    args: {
        gap: "core_160"
    }
};

export const ColumnGap: Story = {
    args: {
        columnGap: "core_160"
    }
};

export const RowGap: Story = {
    args: {
        columnGap: "core_160",
        direction: "column"
    }
};

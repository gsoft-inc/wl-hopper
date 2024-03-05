import { Div } from "@hopper-ui/styled-system";
import { Inline } from "../../src/Inline.tsx";
import { Flex } from "../../src/Flex.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Flex/Column",
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
    args: {
        direction: "column"
    }
};

export const ContentStart: Story = {
    args: {
        direction: "column",
        alignContent: "start",
        width: "core_960",
        wrap: "wrap"
    }
};

export const ContentCenter: Story = {
    args: {
        direction: "column",
        alignContent: "center",
        width: "core_960",
        wrap: "wrap"
    }
};

export const ContentSpaceBetween: Story = {
    args: {
        direction: "column",
        width: "core_960",
        wrap: "wrap",
        alignContent: "space-between"
    }
};

export const ContentSpaceAround: Story = {
    args: {
        direction: "column",
        width: "core_960",
        wrap: "wrap",
        alignContent: "space-around"
    }
};

export const ItemsStart: Story = {
    args: {
        direction: "column",
        alignItems: "start"
    }
};

export const ItemsCenter: Story = {
    args: {
        direction: "column",
        alignItems: "center"
    }
};

export const ItemsEnd: Story = {
    args: {
        direction: "column",
        alignItems: "end"
    }
};

export const JustifyStart: Story = {
    args: {
        direction: "column",
        justifyContent: "start",
        width: "100%"
    }
};

export const JustifyCenter: Story = {
    args: {
        direction: "column",
        justifyContent: "center",
        width: "80%"
    }
};

export const JustifyEnd: Story = {
    args: {
        direction: "column",
        justifyContent: "end",
        width: "100%"
    }
};

export const Wrap: Story = {
    args: {
        direction: "column",
        wrap: "wrap",
        height: "core_240"
    }
};

export const WrapReverse: Story = {
    args: {
        direction: "column",
        wrap: "wrap-reverse",
        height: "core_240",
        children: [
            <Div key="item1" backgroundColor="core_sapphire-500">Alpha</Div>,
            <Div key="item2" backgroundColor="core_sapphire-500">Bravo</Div>,
            <Div key="item3" backgroundColor="core_sapphire-500">Charlie</Div>,
            <Div key="item4" backgroundColor="core_sapphire-500">Delta</Div>,
            <Div key="item5" backgroundColor="core_sapphire-500">Echo</Div>,
            <Div key="item6" backgroundColor="core_sapphire-500">Foxtrot</Div>
        ]
    }
};

export const Reverse: Story = {
    args: {
        direction: "column-reverse"
    }
};

export const Styling: Story = {
    render: args => (
        <Inline>
            <Flex border="warning" direction="column" {...args} />
            <Flex className="border-red" direction="row" {...args} />
            <Flex style={{ border: "1px solid red" }} direction="row" {...args} />
        </Inline>
    )
};

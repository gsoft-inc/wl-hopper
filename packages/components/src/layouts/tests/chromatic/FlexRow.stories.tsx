import { Div } from "@hopper-ui/styled-system";
import { Inline } from "../../src/Inline.tsx";
import { Flex } from "../../src/Flex.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Flex/Row",
    component: Flex
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Flex direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Fluid: Story = {
    render: () => (
        <Flex width="100%" direction="row">
            <Div backgroundColor="core_sapphire-500" width="100%">Alpha</Div>
            <Div backgroundColor="core_sapphire-500" width="100%">Bravo</Div>
            <Div backgroundColor="core_sapphire-500" width="100%">Charlie</Div>
        </Flex>
    )
};

export const ContentStart: Story = {
    render: () => (
        <Flex alignContent="start" height="core_960" direction="row" wrap="wrap">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentCenter: Story = {
    render: () => (
        <Flex alignContent="center" height="core_960" direction="row" wrap="wrap">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentSpaceBetween: Story = {
    render: () => (
        <Flex alignContent="space-between" height="core_960" direction="row" wrap="wrap">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentSpaceAround: Story = {
    render: () => (
        <Flex alignContent="space-around" height="core_960" direction="row" wrap="wrap">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsStart: Story = {
    render: () => (
        <Flex alignItems="start" height="core_960" direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsCenter: Story = {
    render: () => (
        <Flex alignItems="center" height="core_960" direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsEnd: Story = {
    render: () => (
        <Flex alignItems="end" height="core_960" direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyStart: Story = {
    render: () => (
        <Flex justifyContent="start" width="100%" direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyCenter: Story = {
    render: () => (
        <Flex justifyContent="center" width="100%" direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyEnd: Story = {
    render: () => (
        <Flex justifyContent="end" width="100%" direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Wrap: Story = {
    render: () => (
        <Flex wrap="wrap" width="core_240" direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const WrapReverse: Story = {
    render: () => (
        <Flex wrap="wrap-reverse" width="core_240" direction="row">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
            <Div backgroundColor="core_sapphire-500">Delta</Div>
            <Div backgroundColor="core_sapphire-500">Echo</Div>
            <Div backgroundColor="core_sapphire-500">Foxtrot</Div>
        </Flex>
    )
};

export const Reverse: Story = {
    render: () => (
        <Flex direction="row-reverse">
            <Div backgroundColor="core_sapphire-500">Alpha</Div>
            <Div backgroundColor="core_sapphire-500">Bravo</Div>
            <Div backgroundColor="core_sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Styling: Story = {
    render: () => (
        <Inline>
            <Flex border="warning" direction="row">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
            </Flex>
            <Flex className="border-red" direction="row">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
            </Flex>
            <Flex style={{ border: "1px solid red" }} direction="row">
                <Div backgroundColor="core_sapphire-500">Alpha</Div>
                <Div backgroundColor="core_sapphire-500">Bravo</Div>
                <Div backgroundColor="core_sapphire-500">Charlie</Div>
            </Flex>
        </Inline>
    )
};

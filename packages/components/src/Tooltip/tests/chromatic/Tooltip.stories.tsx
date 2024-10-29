import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { Button } from "../../../buttons/index.ts";
import { Flex, Grid } from "../../../layout/index.ts";
import { Link } from "../../../Link/index.ts";
import { Tooltip } from "../../src/Tooltip.tsx";
import { TooltipTrigger } from "../../src/TooltipTrigger.tsx";

const BUTTON_TEXT = "Hover me";

const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    args: {
        children: "Click to learn more."
    },
    decorators: [
        Story => (
            <Flex UNSAFE_marginBottom="4rem" UNSAFE_marginTop="3rem" justifyContent="center">
                <Story />
            </Flex>
        )
    ]
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: args => (
        <TooltipTrigger defaultOpen>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip {...args} />
        </TooltipTrigger>
    )
} satisfies Story;

export const Placement = {
    render: args => (
        <Grid gap="core_480"
            justifyItems="center"
            templateColumns={["1fr", "1fr"]}
            width="100%"
        >
            <TooltipTrigger defaultOpen placement="start">
                <Button>{BUTTON_TEXT}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="end">
                <Button>{BUTTON_TEXT}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="right">
                <Button>{BUTTON_TEXT}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="left">
                <Button>{BUTTON_TEXT}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="top">
                <Button>{BUTTON_TEXT}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="bottom">
                <Button>{BUTTON_TEXT}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
        </Grid>
    )
} satisfies Story;

export const LinkTrigger = {
    render: args => (
        <TooltipTrigger defaultOpen>
            <Link>{BUTTON_TEXT}</Link>
            <Tooltip {...args} />
        </TooltipTrigger>
    )
} satisfies Story;

export const LongContent = {
    render: args => (
        <TooltipTrigger defaultOpen>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip {...args} />
        </TooltipTrigger>
    ), 
    args: {
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis
                        ac libero tincidunt hendrerit. Ut vitae nisl nec orci laoreet tristique.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.`
    },
    decorators: [
        Story => (
            <Flex UNSAFE_marginTop="6rem" justifyContent="center">
                <Story />
            </Flex>
        )
    ]
} satisfies Story;

export const Focus = {
    render: args => (
        <TooltipTrigger>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
    play: async () => {
        userEvent.tab();
    }
} satisfies Story;

export const Styling = {
    render: args => (
        <TooltipTrigger defaultOpen>
            <Button>{BUTTON_TEXT}</Button>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
    args: {
        containerProps: {
            style: {
                backgroundColor: "red",
                color: "white"
            }
        }
    }
} satisfies Story;

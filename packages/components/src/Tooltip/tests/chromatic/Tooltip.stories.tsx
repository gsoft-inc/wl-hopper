import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen, userEvent, waitFor, within } from "@storybook/test";

import { Avatar } from "../../../Avatar/index.ts";
import { Button } from "../../../buttons/index.ts";
import { Flex, Grid, Stack } from "../../../layout/index.ts";
import { Link } from "../../../Link/index.ts";
import { ListBox, ListBoxItem } from "../../../ListBox/index.ts";
import { H1 } from "../../../typography/Heading/index.ts";
import { Text } from "../../../typography/Text/index.ts";
import { PassiveTrigger } from "../../src/PassiveTrigger.tsx";
import { Tooltip } from "../../src/Tooltip.tsx";
import { TooltipTrigger } from "../../src/TooltipTrigger.tsx";

const buttonText = "Hover me";
const childrenText = "More info";

const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    args: {
        children: childrenText
    },
    decorators: [
        (Story, context) => {
            if (context.parameters.skipGlobalDecorator) {
                return <Story />;
            }

            return (
                <Flex UNSAFE_marginBottom="4rem" UNSAFE_marginTop="3rem" justifyContent="center">
                    <Story />
                </Flex>
            );
        }
    ]
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: args => (
        <TooltipTrigger defaultOpen>
            <Button>{buttonText}</Button>
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
                <Button>{buttonText}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="end">
                <Button>{buttonText}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="right">
                <Button>{buttonText}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="left">
                <Button>{buttonText}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="top">
                <Button>{buttonText}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
            <TooltipTrigger defaultOpen placement="bottom">
                <Button>{buttonText}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
        </Grid>
    )
} satisfies Story;

export const ShouldFlip = {
    render: args => (
        <Stack>
            <H1>Original Placement: left</H1>
            <TooltipTrigger defaultOpen placement="left">
                <Button>{buttonText}</Button>
                <Tooltip {...args} />
            </TooltipTrigger>
        </Stack>
    ),
    decorators: [
        Story => (
            <Flex justifyContent="left">
                <Story />
            </Flex>
        )
    ],
    parameters: {
        skipGlobalDecorator: true
    }
} satisfies Story;

export const LinkTrigger = {
    render: args => (
        <TooltipTrigger defaultOpen>
            <Link>{buttonText}</Link>
            <Tooltip {...args} />
        </TooltipTrigger>
    )
} satisfies Story;

export const AvatarTrigger = {
    render: function Render(args) {
        return (
            <TooltipTrigger defaultOpen>
                <PassiveTrigger>
                    <Avatar name="Fred Allen" />
                </PassiveTrigger>
                <Tooltip {...args} />
            </TooltipTrigger>
        );
    }
} satisfies Story;

export const LongContent = {
    render: args => (
        <TooltipTrigger isOpen>
            <Button>{buttonText}</Button>
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
            <Flex UNSAFE_marginTop="8rem" justifyContent="center">
                <Story />
            </Flex>
        )
    ],
    parameters: {
        skipGlobalDecorator: true
    }
} satisfies Story;

export const DisabledTrigger = {
    render: args => (
        <TooltipTrigger>
            <PassiveTrigger data-testid="passive-trigger">
                <Button isDisabled>{buttonText}</Button>
            </PassiveTrigger>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getAllByTestId("passive-trigger")[0];
        const trigger2 = canvas.getAllByTestId("passive-trigger")[1];
        // For some reason, we need to hover over the second trigger first
        await userEvent.hover(trigger2);
        await userEvent.hover(trigger);
        await waitFor(async () => {
            await expect(screen.getByText(childrenText)).toBeVisible();
        });
    }
} satisfies Story;

export const DisabledListItem = {
    render: args => (
        <TooltipTrigger>
            <ListBox selectionMode="multiple">
                <ListBoxItem id="1" isDisabled position="relative">
                    <PassiveTrigger data-testid="passive-trigger" width="auto" position="absolute" top="0" bottom="0" right="0" left="0" />
                    <Text>
                        Earth
                    </Text>
                </ListBoxItem>
                <ListBoxItem id="2">Mars</ListBoxItem>
                <ListBoxItem id="3">Saturn</ListBoxItem>
            </ListBox>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        let trigger;
        let trigger2;
        await waitFor(async () => {
            trigger = canvas.getAllByTestId("passive-trigger")[0];
            trigger2 = canvas.getAllByTestId("passive-trigger")[1];
        });
        // For some reason, we need to hover over the second trigger first
        if (trigger2) {
            await userEvent.hover(trigger2);
        }
        if (trigger) {
            await userEvent.hover(trigger);
        }
        await waitFor(async () => {
            await expect(screen.getByText(childrenText)).toBeVisible();
        });
    }
} satisfies Story;

export const Focus = {
    render: args => (
        <TooltipTrigger>
            <Button>{buttonText}</Button>
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
            <Button>{buttonText}</Button>
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

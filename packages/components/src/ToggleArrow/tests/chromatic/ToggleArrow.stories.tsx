import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { ToggleArrow, type ToggleArrowProps } from "../../src/ToggleArrow.tsx";

const meta = {
    title: "Components/ToggleArrow",
    component: ToggleArrow
} satisfies Meta<typeof ToggleArrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Directions = {
    render: () => (
        <Inline>
            <ToggleArrow />
            <ToggleArrow isExpanded />
        </Inline>
    )
} satisfies Story;

const StateTemplate = (args: Partial<ToggleArrowProps>) => (
    <ToggleArrow data-testid="arrow" {...args} />
);

export const DefaultStates = {
    render: args => (
        <Stack>
            <h1>Default</h1>
            <StateTemplate {...args} />
            <h1>Disabled</h1>
            <StateTemplate {...args} isDisabled />
            <h1>Focus Visible</h1>
            <StateTemplate {...args} isFocused />
            <h1>Hovered</h1>
            <StateTemplate {...args} isHovered />
            <h1>Pressed</h1>
            <StateTemplate {...args} isPressed />
            <h1>Focus Visible & Disabled</h1>
            <StateTemplate {...args} isFocused isDisabled />
        </Stack>
    )
} satisfies Story;
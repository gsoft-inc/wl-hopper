import type { Meta, StoryObj } from "@storybook/react";

import { RemainingCharacterCount } from "../../src/RemainingCharacterCount.tsx";

const meta = {
    title: "Components/Forms/RemainingCharacterCount",
    component: RemainingCharacterCount
} satisfies Meta<typeof RemainingCharacterCount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: args => (
        <RemainingCharacterCount {...args} />
    ),
    args: {
        count: 3
    }
} satisfies Story;

export const Disabled = {
    render: args => (
        <RemainingCharacterCount {...args} />
    ),
    args: {
        count: 3,
        isDisabled: true
    }
} satisfies Story;

export const Invalid = {
    render: args => (
        <RemainingCharacterCount {...args} />
    ),
    args: {
        count: 3,
        isInvalid: true
    }
} satisfies Story;


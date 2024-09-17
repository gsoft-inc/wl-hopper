import type { Meta, StoryObj } from "@storybook/react";

import { CharacterCount } from "../../src/CharacterCount.tsx";

const meta = {
    title: "Components/Forms/CharacterCount",
    component: CharacterCount
} satisfies Meta<typeof CharacterCount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: args => (
        <CharacterCount {...args} />
    ),
    args: {
        charactersLeft: 3
    }
} satisfies Story;

export const Disabled = {
    render: args => (
        <CharacterCount {...args} />
    ),
    args: {
        charactersLeft: 3,
        isDisabled: true
    }
} satisfies Story;

export const Invalid = {
    render: args => (
        <CharacterCount {...args} />
    ),
    args: {
        charactersLeft: 3,
        isInvalid: true
    }
} satisfies Story;


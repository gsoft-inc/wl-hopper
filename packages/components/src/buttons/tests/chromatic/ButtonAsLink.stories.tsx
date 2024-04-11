import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../src/Button.tsx";

import { Primary as PrimaryButtonStory, PrimaryStates as PrimaryStatesButtonStory } from "./Button.stories.tsx";

const meta = {
    title: "Components/Buttons/Button/As Link",
    component: Button,
    args: {
        children: "Click me!"
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    ...PrimaryButtonStory,
    args:{
        ...PrimaryButtonStory.args,
        href: "https://www.google.com"
    }
};

export const Secondary: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "secondary"
    }
};

export const Upsell: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "upsell"
    }
};

export const Danger: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "danger"
    }
};

export const GhostPrimary: Story = {
    ...Primary,
    args: {
        variant: "ghost-primary"
    }
};

export const GhostSecondary: Story = {
    ...Primary,
    args: {
        variant: "ghost-secondary"
    }
};

export const GhostDanger: Story = {
    ...Primary,
    args: {
        variant: "ghost-danger"
    }
};

export const PrimaryStates: Story = {
    ...PrimaryStatesButtonStory,
    args:{
        ...PrimaryStatesButtonStory.args,
        href: "https://www.google.com"
    }
};

export const SecondaryStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "secondary"
    }
};

export const UpsellStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "upsell"
    }
};

export const DangerStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "danger"
    }
};

export const GhostPrimaryStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "ghost-primary"
    }
};

export const GhostSecondaryStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "ghost-secondary"
    }
};

export const GhostDangerStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "ghost-danger"
    }
};

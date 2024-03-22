import { Button } from "../../src/Button.tsx";
import type { Meta, StoryObj } from "@storybook/react";
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

export const Tertiary: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "tertiary"
    }
};

export const Upsell: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "upsell"
    }
};

export const Negative: Story = {
    ...Primary,
    args:{
        ...Primary.args,
        variant: "negative"
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

export const TertiaryStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "tertiary"
    }
};

export const UpsellStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "upsell"
    }
};

export const NegativeStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "negative"
    }
};

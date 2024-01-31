import { Button } from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Components/Buttons/Button",
    component: Button,
    args: {
        children: "Click me!"
    }
};

export default meta;

type HopperProviderStory = StoryObj<typeof meta>;

export const Default: HopperProviderStory = {
    name: "default"
};

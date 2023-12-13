import type { Meta, StoryObj } from "@storybook/react";

import ThemeSwitch from "./ThemeSwitch";

const meta: Meta<typeof ThemeSwitch> = {
    title: "Component/Theme Switch/Button",
    component: ThemeSwitch
};

export default meta;
type Story = StoryObj<typeof ThemeSwitch>;

export const Default: Story = {
    args: {
        text: "Toggle theme"
    }
};

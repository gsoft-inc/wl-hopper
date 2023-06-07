import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./ThemeSwitchIcons";

const meta: Meta<typeof Icon> = {
    title: "Component/Theme Switch/Icon",
    component: Icon
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Light: Story = {
    args: {
        icon: "sun"
    }
};

export const Dark: Story = {
    args: {
        icon: "moon"
    }
};

import type { Meta, StoryObj } from "@storybook/react";

import ThemeSwitch from "./ThemeSwitch";

const meta = {
    title: "components/Theme Switch",
    component: ThemeSwitch
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Toggle theme"
    }
};

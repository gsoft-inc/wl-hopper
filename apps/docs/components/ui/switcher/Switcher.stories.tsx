import type { Meta, StoryObj } from "@storybook/react";

import Switcher from "./Switcher";

const meta: Meta<typeof Switcher> = {
    title: "Ui/Switcher",
    component: Switcher
};

export default meta;
type Story = StoryObj<typeof Switcher>;

export const React: Story = {
    args: {
        type: "react"
    },
}

export const Svg: Story = {
    args: {
        type: "svg"
    },
}

import type { Meta, StoryObj } from "@storybook/react";

import Switcher from "./Switcher";

const meta = {
    title: "Ui/Switcher",
    component: Switcher
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const React: Story = {
    args: {
        type: "react"
    }
};

export const Svg: Story = {
    args: {
        type: "svg"
    }
};

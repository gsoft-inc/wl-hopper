import type { Meta, StoryObj } from "@storybook/react";

import Overlay from "./Overlay";

const meta = {
    title: "Ui/Overlay",
    component: Overlay
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true
    }
};

import type { Meta, StoryObj } from "@storybook/react";

import { IconTable } from "./IconTable";

const meta = {
    title: "app/icons/IconTable",
    component: IconTable
} satisfies Meta<typeof IconTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: "lg",
        type: "react"
    }
};

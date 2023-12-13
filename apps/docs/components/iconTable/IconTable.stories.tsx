import type { Meta, StoryObj } from "@storybook/react";

import { IconTable } from "./IconTable";

const meta: Meta<typeof IconTable> = {
    title: "Component/IconTable",
    component: IconTable
};

export default meta;
type Story = StoryObj<typeof IconTable>;

export const Default: Story = {
    args: {
        size: "lg",
        type: "react"
    }
};

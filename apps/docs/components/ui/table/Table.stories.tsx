import type { Meta, StoryObj } from "@storybook/react";

import Table from "./Table";

const meta: Meta<typeof Table> = {
    title: "Ui/Table",
    component: Table
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {
        category: "react",
        data: [
            {
                name: "--hop-sapphire-200",
                value: "#95b1ff"
            },
            {
                name: "--hop-primary-surface-disabled",
                value: "#95b1ff"
            },
            {
                name: "--hop-primary-surface-disabled",
                value: "#2040c7"
            }
        ]
    },
}

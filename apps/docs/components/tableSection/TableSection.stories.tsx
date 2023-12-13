import type { Meta, StoryObj } from "@storybook/react";

import TableSection from "./TableSection";

const meta: Meta<typeof TableSection> = {
    title: "Component/TableSection",
    component: TableSection
};

export default meta;
type Story = StoryObj<typeof TableSection>;

export const Default: Story = {
    args: {
        tokens: [
            {
                name: "color-primary",
                value: "#000"
            },
            {
                name: "color-secondary",
                value: "#fff"
            },
            {
                name: "hop-space-0",
                value: "0"
            },
            {
                name: "hop-space-20",
                value: "0.125"
            }
        ],
        categories: ["color", "space"],
        categoryKey: "name"
    }
};

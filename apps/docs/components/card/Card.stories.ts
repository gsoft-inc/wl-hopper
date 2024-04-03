import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta = {
    title: "components/Card",
    component: Card
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Card content"
    }
};

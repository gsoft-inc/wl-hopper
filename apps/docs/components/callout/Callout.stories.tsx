import type { Meta, StoryObj } from "@storybook/react";

import Callout from "./Callout.tsx";

const meta = {
    title: "components/Callout",
    component: Callout
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Content of the callout"
    }
};

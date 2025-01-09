import type { Meta, StoryObj } from "@storybook/react";

import Collapsible from "./Collapsible.tsx";

const meta = {
    title: "components/Collapsible",
    component: Collapsible
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Label",
        children: "Content of the collapsible",
        className: "custom-class"
    }
};

export const Open: Story = {
    args: {
        ...Default.args,
        defaultExpanded: true
    }
};

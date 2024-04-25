import type { Meta, StoryObj } from "@storybook/react";

import Collasible from "./Collapsible.tsx";


const meta = {
    title: "components/Collasible",
    component: Collasible
} satisfies Meta<typeof Collasible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Label",
        children: "Conent of the collapsible"
    }
};

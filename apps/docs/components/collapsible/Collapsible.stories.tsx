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
        children: "conent of the collapsible"
    }
};

export const Multiple: Story = {
    render: () => (
        <div>
            <Collasible title="Label 1">content of the collapsible 1</Collasible>
            <Collasible title="Label 2">content of the collapsible 2</Collasible>
        </div>
    )
};

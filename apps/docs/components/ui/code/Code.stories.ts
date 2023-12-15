import type { Meta, StoryObj } from "@storybook/react";

import Code from "./Code";

const meta = {
    title: "Ui/Code",
    component: Code
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "const foo = 'bar';",
        value: "const foo = 'bar';"
    }
};

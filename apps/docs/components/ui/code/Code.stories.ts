import type { Meta, StoryObj } from "@storybook/react";

import Code from "./Code";

const meta: Meta<typeof Code> = {
    title: "Ui/Code",
    component: Code
}

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
    args: {
        children: "const foo = 'bar';",
        value: "const foo = 'bar';"
    }
};

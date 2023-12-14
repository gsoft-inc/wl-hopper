import type { Meta, StoryObj } from "@storybook/react";

import Pre from "./Pre";

const meta: Meta<typeof Pre> = {
    title: "Ui/Pre",
    component: Pre
};

export default meta;
type Story = StoryObj<typeof Pre>;

export const Default: Story = {
    args: {
        raw: "const foo = 'bar';",
        title: "Story.tsx",
        "data-language": "tsx",
        children: <code>const foo = 'bar';</code>
    }
}

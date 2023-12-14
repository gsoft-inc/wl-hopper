import type { Meta, StoryObj } from "@storybook/react";

import CodeBlockCopyButton from "./CodeBlockCopyButton";

const meta: Meta<typeof CodeBlockCopyButton> = {
    title: "Component/Copy/CodeBlockButton",
    component: CodeBlockCopyButton
};

export default meta;
type Story = StoryObj<typeof CodeBlockCopyButton>;

export const Default: Story = {
    args: {
        text: "this text can be copied in 1 click",
    }
};

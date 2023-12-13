import type { Meta, StoryObj } from "@storybook/react";

import CopyButton from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
    title: "Component/CopyButton",
    component: CopyButton
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
    args: {
       text: "this text can be copied in 1 click",
        children: "this text can be copied in 1 click"
    }
};

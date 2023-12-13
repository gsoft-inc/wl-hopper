import type { Meta, StoryObj } from "@storybook/react";

import InlineCopyButton from "./InlineCopyButton";

const meta: Meta<typeof InlineCopyButton> = {
    title: "Component/InlineCopyButton",
    component: InlineCopyButton
};

export default meta;
type Story = StoryObj<typeof InlineCopyButton>;

export const Default: Story = {
    args: {
        text: "this text can be copied in 1 click",
    }
};

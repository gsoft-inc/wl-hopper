import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CopyButton from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
    title: "Component/Copy/Button",
    component: CopyButton
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
    args: {
       text: "this text can be copied in 1 click",
        children: "this text can be copied in 1 click"
    },
    render: (args) => {
        const [isCopied, setIsCopied] = useState(false);
        return (
            <CopyButton {...args} isCopied={isCopied} setIsCopied={setIsCopied} >
                {isCopied ? <span >Copied!</span> : args.children}
            </CopyButton>
        )
    }
};

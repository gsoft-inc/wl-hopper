import type { Meta, StoryObj } from "@storybook/react";

import CopyButton from "@/components/copyButton/CopyButton.tsx";
import Tooltip from "./Tooltip";
import TooltipTrigger from "./TooltipTrigger";

const meta = {
    title: "components/Tooltip",
    component: TooltipTrigger,
    args: {
        children: <><CopyButton text="Copied Data" /><Tooltip>Patate</Tooltip></>
    }
} satisfies Meta<typeof Tooltip>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
    args: {}
};

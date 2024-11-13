import type { Meta, StoryObj } from "@storybook/react";

import CopyButton from "@/components/copyButton/CopyButton.tsx";
import Tooltip from "./Tooltip";

const meta = {
    title: "components/Tooltip",
    component: Tooltip,
    args: {
        children: <CopyButton text="Copied Data" />
    }
} satisfies Meta<typeof Tooltip>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
    args: {
        title: "Tooltip Title"
    }
};

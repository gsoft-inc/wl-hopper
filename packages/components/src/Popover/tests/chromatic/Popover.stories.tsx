import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "../../src/Popover.tsx";

const meta = {
    title: "Components/Popover",
    component: Popover
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;

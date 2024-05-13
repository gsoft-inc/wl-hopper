import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "../../src/TextField.tsx";

const meta = {
    title: "Components/TextField",
    component: TextField
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

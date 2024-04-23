import { TextField } from "../../src/TextField.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/TextField",
    component: TextField
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

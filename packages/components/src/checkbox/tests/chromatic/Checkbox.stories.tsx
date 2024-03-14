import { Checkbox } from "../../src/Checkbox.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Checkbox",
    component: Checkbox
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

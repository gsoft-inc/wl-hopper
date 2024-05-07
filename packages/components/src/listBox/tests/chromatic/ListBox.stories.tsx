import type { Meta, StoryObj } from "@storybook/react";

import { ListBox } from "../../src/ListBox.tsx";

const meta = {
    title: "Components/ListBox",
    component: ListBox
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;

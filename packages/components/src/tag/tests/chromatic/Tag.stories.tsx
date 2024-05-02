import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "../../src/Tag.tsx";

const meta = {
    title: "Components/Tag",
    component: Tag
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;

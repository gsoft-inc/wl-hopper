import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../../src/Avatar.tsx";

const meta = {
    title: "Components/Avatar",
    component: Avatar
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;

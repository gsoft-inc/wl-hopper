import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "../../src/Link.tsx";

const meta = {
    title: "Components/Link",
    component: Link
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

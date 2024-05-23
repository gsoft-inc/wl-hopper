import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../../src/Heading.tsx";

const meta = {
    title: "Components/Heading",
    component: Heading
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;

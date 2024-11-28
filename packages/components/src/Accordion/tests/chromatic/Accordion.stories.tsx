import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "../../src/Accordion.tsx";

const meta = {
    title: "Components/Accordion",
    component: Accordion
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;

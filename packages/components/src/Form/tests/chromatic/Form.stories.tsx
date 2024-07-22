import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "../../src/Form.tsx";

const meta = {
    title: "Components/Form",
    component: Form
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;

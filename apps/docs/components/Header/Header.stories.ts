import { type Meta, type StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
    title: "Component/Header",
    component: Header
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {}
};
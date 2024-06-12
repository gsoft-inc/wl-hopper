import type { Meta, StoryObj } from "@storybook/react";

import Example from "./Example.tsx";

const meta = {
    title: "components/Example",
    component: Example
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "buttons/docs/preview"
    }
};

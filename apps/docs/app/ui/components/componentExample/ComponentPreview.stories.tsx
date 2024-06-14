import type { Meta, StoryObj } from "@storybook/react";

import ComponentPreview from "./ComponentPreview.tsx";

const meta = {
    title: "components/Preview",
    component: ComponentPreview
} satisfies Meta<typeof ComponentPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "buttons/docs/preview",
        colorScheme: "light"
    }
};

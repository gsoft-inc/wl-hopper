import type { Meta, StoryObj } from "@storybook/react";

import ComponentWrapper from "./ComponentWrapper";

const meta = {
    title: "components/ComponentWrapper",
    component: ComponentWrapper
} satisfies Meta<typeof ComponentWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "buttons/docs/preview"
    }
};

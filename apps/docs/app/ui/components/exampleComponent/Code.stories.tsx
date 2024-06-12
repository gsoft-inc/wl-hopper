import { Suspense } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Code from "./Code.tsx";

const meta = {
    title: "components/CodeExample",
    component: Code,
    render: args => {
        return <Suspense><Code {...args} /></Suspense>;
    }
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "buttons/docs/preview"
    }
};

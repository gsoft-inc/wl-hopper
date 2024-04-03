import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../../src/Label.tsx";

const meta = {
    title: "Components/Typography/Label",
    component: Label,
    args: {
        children: "Software built for everyone to do their best work."
    }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: props => (
        <>
            <Label size="2xl" {...props} />
            <Label size="xl" {...props} />
            <Label size="lg" {...props} />
            <Label {...props} />
            <Label size="sm" {...props} />
            <Label size="xs" {...props} />
        </>
    )
};

export const Inherit: Story = {
    render: props => (
        <div style={{ fontSize: "0.625rem" }}>
            <Label size="inherit" {...props} />
        </div>
    )
};

export const Styling: Story = {
    render: props => (
        <>
            <Label border="warning-strong" {...props} />
            <Label className="bg-red" {...props} />
            <Label style={{ backgroundColor: "red" }} {...props} />
        </>
    )
};

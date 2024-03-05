import { Text } from "../../src/Text.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
    title: "Components/Typography/Text",
    component: Text,
    args: {
        children: "Software built for everyone to do their best work."
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: props => (
        <>
            <Text size="2xl" {...props} />
            <Text size="xl" {...props} />
            <Text size="lg" {...props} />
            <Text {...props} />
            <Text size="sm" {...props} />
            <Text size="xs" {...props} />
        </>
    )
};

export const Inherit: Story = {
    render: props => (
        <div style={{ fontSize: "0.625rem" }}>
            <Text size="inherit" {...props} />
        </div>
    )
};

export const Styling: Story = {
    render: props => (
        <>
            <Text border="warning-strong" {...props} />
            <Text className="bg-red" {...props} />
            <Text style={{ backgroundColor: "red" }} {...props} />
        </>
    )
};

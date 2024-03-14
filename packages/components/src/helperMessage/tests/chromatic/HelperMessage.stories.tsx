import { HelperMessage } from "../../src/HelperMessage.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/HelperMessage",
    component: HelperMessage,
    args: {
        children: "Software built for everyone to do their best work."
    }
} satisfies Meta<typeof HelperMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: props => (
        <>
            <HelperMessage {...props} />
            <HelperMessage showIcon {...props} />
        </>
    )
};

export const Styling: Story = {
    render: props => (
        <>
            <HelperMessage showIcon border="warning-strong" {...props} />
            <HelperMessage showIcon className="bg-red" {...props} />
            <HelperMessage showIcon style={{ backgroundColor: "red" }} {...props} />
        </>
    )
};

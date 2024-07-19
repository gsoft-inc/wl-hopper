import { a11yParameters } from "@hopper-ui/storybook-addon";
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
            <Label {...props} />
        </>
    )
};

export const Styling: Story = {
    parameters: {
        ...a11yParameters({ disableContrastCheck: true })
    },
    render: props => (
        <>
            <Label border="warning-strong" {...props} />
            <Label className="bg-red" {...props} />
            <Label style={{ backgroundColor: "red" }} {...props} />
        </>
    )
};

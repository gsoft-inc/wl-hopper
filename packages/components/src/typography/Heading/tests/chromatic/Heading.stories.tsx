import { a11yParameters } from "@hopper-ui/storybook-addon";
import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../../src/Heading.tsx";

const meta = {
    title: "Components/Typography/Heading",
    component: Heading,
    args: {
        children: "Hello, World!"
    }
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: props => (
        <>
            <Heading size="3xl" {...props} />
            <Heading size="2xl" {...props} />
            <Heading size="xl" {...props} />
            <Heading size="lg" {...props} />
            <Heading {...props} />
            <Heading size="sm" {...props} />
            <Heading size="xs" {...props} />
        </>
    )
} satisfies Story;

export const Inherit = {
    render: props => (
        <div style={{ fontSize: "0.625rem" }}>
            <Heading size="inherit" {...props} />
        </div>
    )
} satisfies Story;

export const Styling: Story = {
    parameters: {
        ...a11yParameters({ disableContrastCheck: true })
    },
    render: props => (
        <>
            <Heading border="warning-strong" {...props} />
            <Heading className="bg-red" {...props} />
            <Heading style={{ backgroundColor: "red" }} {...props} />
        </>
    )
} satisfies Story;

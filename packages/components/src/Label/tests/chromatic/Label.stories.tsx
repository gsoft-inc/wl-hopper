import { Label } from "../../src/Label.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
    title: "Components/Typography/Label",
    component: Label,
    args: {
        children: "Software built for everyone to do their best work."
    }
};

export default meta;

type LabelStory = StoryObj<typeof meta>;

export const Default: LabelStory = {
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

export const Inherit: LabelStory = {
    render: props => (
        <div style={{ fontSize: "0.625rem" }}>
            <Label size="inherit" {...props} />
        </div>
    )
};

export const Styling: LabelStory = {
    render: props => (
        <>
            <Label border="warning-strong" {...props} />
            <Label className="bg-red" {...props} />
            <Label style={{ backgroundColor: "red" }} {...props} />
        </>
    )
};

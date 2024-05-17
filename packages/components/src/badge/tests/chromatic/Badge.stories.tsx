import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { Badge } from "../../src/Badge.tsx";

const meta = {
    title: "Components/Badge",
    component: Badge,
    args: {
        children: "12"
    }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
    render: props => (
        <Stack>
            <h1>Default</h1>
            <Inline>
                <Badge {...props} />
            </Inline>
            <h1>Disabled</h1>
            <Inline>
                <Badge {...props} isDisabled />
            </Inline>
        </Stack>
    )
} satisfies Story;

export const Secondary = {
    ...Primary,
    args: {
        variant: "secondary"
    }
} satisfies Story;

export const Styling = {
    render: props => (
        <Inline>
            <Badge border="warning-strong" {...props} />
            <Badge className="border-red" {...props} />
            <Badge style={{ border: "1px solid darkRed" }} {...props} />
        </Inline>
    )
} satisfies Story;

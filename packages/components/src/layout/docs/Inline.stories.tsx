import { Div } from "@hopper-ui/styled-system";
import type { DivProps } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { Inline } from "../src/Inline.tsx";

/**
 * The Inline pattern is a layout primitive that can be used to stack elements in the horizontal direction and apply a space between them.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/layout/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Layout/Inline",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    args:{
        children: [
            <Square key="1" backgroundColor="decorative-option1" />,
            <Square key="2" height="core_800" backgroundColor="decorative-option3" />,
            <Square key="3" backgroundColor="decorative-option4" />
        ]
    },
    component: Inline
} satisfies Meta<typeof Inline>;

export default meta;

type Story = StoryObj<typeof meta>;

function Square(props: DivProps) {
    return <Div backgroundColor="decorative-option1" height="core_640" width="core_640" {...props} />;
}

/**
 * An inline has horizontally aligned items with a space between them.
 */
export const Default: Story = {
};

/**
 * An inline can reverse the order and direction of its items.
 */
export const Reverse: Story = {
    args: {
        reverse: true
    }
};

/**
 * An inline can align its items on the horizontal axis.
 */
export const AlignX: Story = {
    args: {
        alignX : "center"
    }
};

/**
 * An inline can align its items on the vertical axis.
 */
export const AlignY: Story = {
    args: {
        UNSAFE_height: "20rem",
        alignY : "center"
    }
};

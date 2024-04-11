import { Div } from "@hopper-ui/styled-system";
import type { DivProps } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "../src/Flex.tsx";


/**
 * The Flex component is used to create a flex container and provides some shortcuts for the flex properties.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/layout/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Layout/Flex",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Flex
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

function Square(props: DivProps) {
    return <Div backgroundColor="decorative-option1" height="core_640" width="core_640" {...props} />;
}

/**
 * A flex layout can have horizontally aligned items.
 */
export const HorizontalAlignment: Story = {
    args:{
        direction: "row",
        children: [
            <Square key="1" backgroundColor="decorative-option1" />,
            <Square key="2" backgroundColor="decorative-option3" />,
            <Square key="3" backgroundColor="decorative-option4" />
        ]
    }
};

/**
 * A flex layout can have vertically aligned items.
 */
export const VerticalAlignment: Story = {
    ...HorizontalAlignment,
    args:{
        ...HorizontalAlignment.args,
        direction: "column"
    }
};

/**
 * A flex layout can have a gap between his items. `columnGap` and `rowGap` are also available to specify a gap for a single axis.
 */
export const Gap: Story = {
    ...HorizontalAlignment,
    args:{
        ...HorizontalAlignment.args,
        gap: "stack-sm"
    }
};

/**
 * A flex layout can align his items along the cross axis. When the direction is "column", this refers to horizontal alignment, and when direction is "row" it refers to vertical alignment.
 */
export const AlignItems: Story = {
    ...VerticalAlignment,
    args:{
        ...VerticalAlignment.args,
        alignItems: "center"
    }
};

/**
 * A flex layout can align his items along the main axis. When direction is "column", this refers to vertical alignment, and when direction is "row" it refers to horizontal alignment.
 */
export const JustifyContent: Story = {
    ...HorizontalAlignment,
    args:{
        ...HorizontalAlignment.args,
        justifyContent: "center"
    }
};

/**
 * A flex layout items can wrap on multiple rows.
 */
export const Wrap: Story = {
    ...HorizontalAlignment,
    args:{
        ...HorizontalAlignment.args,
        wrap: true,
        UNSAFE_width: "30rem",
        children: [
            <Square key="1" backgroundColor="decorative-option1-weak" />,
            <Square key="2" backgroundColor="decorative-option2-weak" />,
            <Square key="3" backgroundColor="decorative-option3-weak" />,
            <Square key="4" backgroundColor="decorative-option4-weak" />,
            <Square key="5" backgroundColor="decorative-option5-weak" />,
            <Square key="6" backgroundColor="decorative-option6-weak" />,
            <Square key="7" backgroundColor="decorative-option7-weak" />,
            <Square key="8" backgroundColor="decorative-option8-weak" />,
            <Square key="9" backgroundColor="decorative-option9-weak" />,
            <Square key="21" backgroundColor="decorative-option1" />,
            <Square key="22" backgroundColor="decorative-option2" />,
            <Square key="23" backgroundColor="decorative-option3" />,
            <Square key="24" backgroundColor="decorative-option4" />,
            <Square key="25" backgroundColor="decorative-option5" />,
            <Square key="26" backgroundColor="decorative-option6" />,
            <Square key="27" backgroundColor="decorative-option7" />,
            <Square key="28" backgroundColor="decorative-option8" />,
            <Square key="29" backgroundColor="decorative-option9" />,
            <Square key="31" backgroundColor="decorative-option1-strong" />,
            <Square key="32" backgroundColor="decorative-option2-strong" />,
            <Square key="33" backgroundColor="decorative-option3-strong" />,
            <Square key="34" backgroundColor="decorative-option4-strong" />,
            <Square key="35" backgroundColor="decorative-option5-strong" />,
            <Square key="36" backgroundColor="decorative-option6-strong" />,
            <Square key="37" backgroundColor="decorative-option7-strong" />,
            <Square key="38" backgroundColor="decorative-option8-strong" />,
            <Square key="39" backgroundColor="decorative-option9-strong" />
        ]
    }
};

/**
 * A flex layout can reverse the items order.
 */
export const Reverse: Story = {
    ...HorizontalAlignment,
    args:{
        ...HorizontalAlignment.args,
        direction: "row-reverse"
    }
};

/**
 * Flex layouts can be nested.
 */
export const Nesting: Story = {
    args:{
        gap: "stack-md",
        children: [
            <Flex key="1">
                <Square backgroundColor="decorative-option1-weak" />
                <Square backgroundColor="decorative-option3-weak" />
            </Flex>,
            <Flex key="2" direction="column">
                <Square backgroundColor="decorative-option1" />
                <Square backgroundColor="decorative-option3" />
            </Flex>,
            <Flex key="3">
                <Square backgroundColor="decorative-option1-strong" />
                <Square backgroundColor="decorative-option3-strong" />
            </Flex>
        ]
    }
};

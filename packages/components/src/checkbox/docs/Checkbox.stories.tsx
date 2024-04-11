import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";

import { IconList } from "../../IconList/index.ts";
import { Stack } from "../../layout/index.ts";
import { Text } from "../../Text/index.ts";
import { Checkbox } from "../src/Checkbox.tsx";

/**
 * The Checkbox component is used to select or deselect an option. Indeterminate state is also supported.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Checkbox/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Checkbox/Checkbox",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Checkbox
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default checkbox.
 */
export const Default: Story = {
    args: {
        children: "Option 1"
    }
};

/**
 * A checkbox can be rendered without a label. In this case, the `aria-label` attribute should be used to provide a label to the checkbox.
 */
export const NoLabel: Story = {
    render: props => (
        <Checkbox aria-label="Option 1" {...props} />
    )
};

/**
 * A checkbox can be rendered in a checked state.
 */
export const Checked: Story = {
    args: {
        ...Default.args,
        defaultSelected: true
    }
};

/**
 * A checkbox can be rendered in an indeterminate state.
 */
export const Indeterminate: Story = {
    args: {
        ...Default.args,
        isIndeterminate: true,
        defaultSelected: true
    }
};

/**
 * A checkbox can be rendered in a disabled state.
 */
export const Disabled: Story = {
    args: {
        ...Default.args,
        isDisabled: true,
        children: [
            <SparklesIcon key="1" />,
            <Text key="2">Option 1</Text>
        ]
    }
};

/**
 * A checkbox can be rendered in an invalid state.
 */
export const Invalid: Story = {
    args: {
        ...Default.args,
        isInvalid: true,
        children: [
            <SparklesIcon key="1" />,
            <Text key="2">Option 1</Text>
        ]
    }
};

/**
 * A checkbox can vary in size
 */
export const Size: Story = {
    ...Default,
    render: props => (
        <Stack>
            <Checkbox size="sm" {...props} />
            <Checkbox size="md" {...props} />
        </Stack>
    )
};

/**
 * A checkbox can be rendered with icons.
 */
export const Icons: Story = {
    ...Size,
    args: {
        children: [
            <SparklesIcon key="1" />,
            <Text key="2">Option 1</Text>
        ]
    }
};

/**
 * A checkbox can be rendered with a list of icons
 */
export const IconListStory: Story = {
    name: "IconList",
    ...Size,
    args: {
        children: [
            <IconList key="1">
                <SparklesIcon /><SparklesIcon /><SparklesIcon />
            </IconList>,
            <Text key="2">Option 1</Text>
        ]
    }
};
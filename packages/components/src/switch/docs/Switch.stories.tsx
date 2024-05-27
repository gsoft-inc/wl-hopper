import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";

import { IconList } from "../../IconList/index.ts";
import { Stack } from "../../layout/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { Switch } from "../src/Switch.tsx";

/**
 * A Switch is a control that is used to quickly switch between two possible states. Switches are only used for these binary actions that occur immediately after the user “flips the switch.” They are commonly used for “on/off” switches.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Switch/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Switch/Switch",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Switch
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default switch.
 */
export const Default = {
    args: {
        children: "Label"
    }
} satisfies Story;

/**
 * A Switch can be selected.
 */
export const Selected = {
    args: {
        ...Default.args,
        defaultSelected: true
    }
} satisfies Story;

/**
 * A Switch can be rendered without a label.
 */
export const NoLabel = {
    args: {
        "aria-label": "Label"
    }
} satisfies Story;

/**
 * A Switch can be disabled.
 */
export const Disabled = {
    args: {
        ...Default.args,
        isDisabled: true
    }
} satisfies Story;

/**
 * A Switch can be rendered with an icon or an icon list.
 */
export const Icon = {
    render: () => {
        return (
            <Stack>
                <Switch>
                    <Text>Label</Text>
                    <SparklesIcon />
                </Switch>
                <Switch>
                    <Text>Label</Text>
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                </Switch>
            </Stack>
        );
    }
} satisfies Story;

/**
 * A Switch can be rendered in different sizes.
 */

export const Sizes = {
    render: () => {
        return (
            <Stack>
                <Switch size="sm">Small</Switch>
                <Switch size="md">Medium</Switch>
            </Stack>
        );
    }
} satisfies Story;

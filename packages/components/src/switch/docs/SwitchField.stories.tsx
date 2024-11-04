import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../../layout/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { Switch } from "../src/Switch.tsx";
import { SwitchField } from "../src/SwitchField.tsx";

/**
 * The SwitchField component is used to group a switch with a description.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Switch/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Switch/SwitchField",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: SwitchField
} satisfies Meta<typeof SwitchField>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default SwitchField.
 */
export const Default: Story = {
    render: props => (
        <SwitchField {...props}>
            <Switch>
                <Text>Option 1</Text>
            </Switch>
        </SwitchField>
    )
};

/**
 * A SwitchField with a description.
 */
export const Description: Story = {
    render: props => (
        <SwitchField {...props} description="Description">
            <Switch>
                <Text>Option 1</Text>
            </Switch>
        </SwitchField>
    )
};

/**
 * A SwitchField can be rendered in a disabled state.
 */
export const Disabled: Story = {
    ...Description,
    args: {
        isDisabled: true
    }
};

/**
 * A SwitchField can be rendered in two different sizes.
 */
export const Sizes: Story = {
    render: props => (
        <Stack>
            <SwitchField {...props} size="sm" description="Description">
                <Switch>
                    <Text>Option 1</Text>
                </Switch>
            </SwitchField>
            <SwitchField {...props} size="md" description="Description">
                <Switch>
                    <Text>Option 1</Text>
                </Switch>
            </SwitchField>
        </Stack>
    )
};


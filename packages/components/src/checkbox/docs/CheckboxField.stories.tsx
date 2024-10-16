import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../../layout/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { Checkbox } from "../src/Checkbox.tsx";
import { CheckboxField } from "../src/CheckboxField.tsx";

/**
 * The CheckboxField component is used to group a checkbox with a description.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Checkbox/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Form/Checkbox/CheckboxField",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: CheckboxField
} satisfies Meta<typeof CheckboxField>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default CheckboxField.
 */
export const Default: Story = {
    render: props => (
        <CheckboxField {...props}>
            <Checkbox>
                <Text>Option 1</Text>
            </Checkbox>
        </CheckboxField>
    )
};

/**
 * A CheckboxField with a description.
 */
export const Description: Story = {
    render: props => (
        <CheckboxField {...props} description="Team Manager">
            <Checkbox>
                <Text>Option 1</Text>
            </Checkbox>
        </CheckboxField>
    )
};

/**
 * A CheckboxField can be rendered in a disabled state.
 */
export const Disabled: Story = {
    ...Description,
    args: {
        isDisabled: true
    }
};

/**
 * A CheckboxField can be rendered in two different sizes.
 */
export const Sizes: Story = {
    render: props => (
        <Stack>
            <CheckboxField {...props} size="sm" description="Team Manager">
                <Checkbox>
                    <Text>Option 1</Text>
                </Checkbox>
            </CheckboxField>
            <CheckboxField {...props} size="md" description="Team Manager">
                <Checkbox>
                    <Text>Option 1</Text>
                </Checkbox>
            </CheckboxField>
        </Stack>
    )
};


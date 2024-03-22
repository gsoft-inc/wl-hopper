import { CheckboxField } from "../src/CheckboxField.tsx";
import { Checkbox } from "../src/Checkbox.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../Text/index.ts";

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
    title: "Docs/Checkbox/CheckboxField",
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
 * A default checkboxField.
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
 * A checkboxField with a description.
 */
export const Description: Story = {
    render: props => (
        <CheckboxField {...props}>
            <Checkbox>
                <Text>Option 1</Text>
            </Checkbox>
            <Text slot="description">Description</Text>
        </CheckboxField>
    )
};

/**
 * A checkboxField can be rendered in a disabled state.
 */
export const Disabled: Story = {
    render: props => (
        <CheckboxField {...props}>
            <Checkbox>
                <Text>Option 1</Text>
            </Checkbox>
            <Text slot="description">Description</Text>
        </CheckboxField>
    ),
    args: {
        isDisabled: true
    }
};


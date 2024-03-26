import { CheckboxGroup } from "../src/CheckboxGroup.tsx";
import { Checkbox } from "../src/Checkbox.tsx";
import type { Meta, StoryObj } from "@storybook/react";

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
    title: "Docs/Checkbox/CheckboxGroup",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: CheckboxGroup
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default checkbox.
 */
export const Default: Story = {
    render: props => (
        <CheckboxGroup {...props}>
            <Checkbox>Option 1</Checkbox>
            <Checkbox>Option 2</Checkbox>
            <Checkbox>Option 3</Checkbox>
        </CheckboxGroup>
    )
};
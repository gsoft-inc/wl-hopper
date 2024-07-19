import type { Meta, StoryObj } from "@storybook/react";

import { SlotProvider } from "../../../utils/index.ts";
import { Label } from "../src/Label.tsx";
import { LabelContext } from "../src/LabelContext.ts";

/**
 * A primitive label component matching Hopper's typography type scale.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Label/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Typography/Label",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Label,
    args: {
        children: "Software built for everyone to do their best work"
    }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default label component.
 */
export const Default: Story = {};

/**
 * The label component has a default color, but it can be easily overridden.
 */
export const Color: Story = {
    args: {
        color: "decorative-option3"
    }
};

/**
 * All Hopper Components export a corresponding context that can be used to send props to them from a parent element.
 * You can send any prop or ref via context that you could pass to the corresponding component.
 * The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence
 */
export const AdvancedCustomization: Story = {
    render: props => (
        <SlotProvider values={[
            [LabelContext, { color: "decorative-option2" }]
        ]}
        >
            <Label {...props} />
        </SlotProvider>
    )
};

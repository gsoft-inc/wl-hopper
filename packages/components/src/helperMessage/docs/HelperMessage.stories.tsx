import { HelperMessage } from "../src/HelperMessage.tsx";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * The HelperMessage component is used to display auxiliary text to guide users in the interface. It can provide additional information or feedback about user interactions.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/HelperMessage/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/HelperMessage",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: HelperMessage,
    args: {
        children: "Software built for everyone to do their best work"
    }
} satisfies Meta<typeof HelperMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default HelperMessage.
 *
 * See a form field component such as Checkbox for examples of how to use the HelperMessage component in the context of a Hopper component
 */
export const Default: Story = {
};

/**
 * You can show an icon with the HelperMessage.
 */
export const Icon: Story = {
    args: {
        showInfoIcon: true
    }
};
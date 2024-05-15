import type { Meta, StoryObj } from "@storybook/react";

import { ClearButton } from "../src/ClearButton.tsx";

/**
 * ClearButtons are used to initialize an action. ClearButton labels express what action will occur when the user interacts with it.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/ClearButtons/src)
 * -
 * [View ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/clearButton/)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Buttons/ClearButton",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: ClearButton
} satisfies Meta<typeof ClearButton>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default clearButton.
 */
export const Default: Story = {
};

/**
 * A clearButton can be disabled.
 */
export const Disabled: Story = {
    ...Default,
    args: {
        isDisabled: true
    }
};
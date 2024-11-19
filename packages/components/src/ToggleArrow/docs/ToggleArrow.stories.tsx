import type { Meta, StoryObj } from "@storybook/react";

import { ToggleArrow } from "../src/ToggleArrow.tsx";

/**
 * TODO: Add description
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/ToggleArrow/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/ToggleArrow",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: ToggleArrow
} satisfies Meta<typeof ToggleArrow>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * TODO: Add description
 */
export const Default = {
} satisfies Story;

import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../src/Heading.tsx";

/**
 * TODO: Add description
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Heading/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Heading",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Heading
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * TODO: Add description
 */
export const Default = {
} satisfies Story;

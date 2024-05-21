import type { Meta, StoryObj } from "@storybook/react";

import { Inline } from "../../layout/index.ts";
import { Badge } from "../src/Badge.tsx";

/**
 * Badges are used to bring attention to an object. 
 * A badge will communicate a small piece of information that users may be interested in, but would not impede them from achieving their task.
 * They can also display the amount of items of an object.
 * If you need to display a number above 99, use “99+” instead of the number unless the number is important to the user’s objectives.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Badge/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Badge",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Badge,
    args: {
        children: "15"
    }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The different variants of a Badge.
 */
export const Variants = {
    render: props => (
        <Inline>
            <Badge {...props} variant="primary" />
            <Badge {...props} variant="secondary" />
        </Inline>
    )
} satisfies Story;

/**
 * A disabled Badge.
 */
export const Disabled = {
    args: {
        isDisabled: true
    }
} satisfies Story;

/**
 * If a value above 99 is needed, use `99+` instead of the number.
 */
export const HighCount = {
    args: {
        children: "99+"
    }
} satisfies Story;

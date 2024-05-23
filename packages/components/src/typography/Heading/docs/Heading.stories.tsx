import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../../../layout/index.ts";
import { SlotProvider } from "../../../utils/index.ts";
import { Heading, HeadingContext } from "../src/index.ts";

/**
 * A primitive heading component matching Hopper's typography type scale.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Heading/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Typography/Heading",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Heading,
    args: {
        children: "Hello, World!"
    }
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The Heading component provides default styling based on it's `size` prop, but can also receive styling from a parent component
 * when used as a child of a Hopper component.
 *
 */
export const Default = {} satisfies Story;

/**
 * You can alter the size of the heading by specifying a `size` prop.
 * The available sizes match Hopper Typography Type Scale (a type scale is a set of [font-size and line-height](https://hopper.workleap.design/tokens/semantic/typography#heading) pairs).
 */
export const Size: Story = {
    render: props => (
        <Stack>
            <Heading size="xs" {...props} />
            <Heading size="sm" {...props} />
            <Heading size="md" {...props} />
            <Heading size="lg" {...props} />
            <Heading size="xl" {...props} />
            <Heading size="2xl" {...props} />
            <Heading size="3xl" {...props} />
        </Stack>
    )
};

/**
 * You can also alter the level of the heading by specifying a `level` prop.
 * The available levels match HTML heading elements (h1-h6).
 */
export const Level: Story = {
    render: props => (
        <Stack>
            <Heading level={1} {...props} />
            <Heading level={2} {...props} />
            <Heading level={3} {...props} />
            <Heading level={4} {...props} />
            <Heading level={5} {...props} />
            <Heading level={6} {...props} />
        </Stack>
    )
};

/**
 * You can also alter the size to match the parent element's type scale by using the `inherit` size.
 */
export const Inherit: Story = {
    render: props => (
        <Div fontSize="heading-lg">
            <Heading size="inherit" {...props} />
        </Div>
    )
};

/**
 * All Hopper Components export a corresponding context that can be used to send props to them from a parent element.
 * You can send any prop or ref via context that you could pass to the corresponding component.
 * The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence
 */
export const AdvancedCustomization: Story = {
    render: props => (
        <SlotProvider values={[
            [HeadingContext, { size: "3xl" }]
        ]}
        >
            <Heading {...props} />
        </SlotProvider>
    )
};

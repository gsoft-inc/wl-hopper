import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../../layout/src/Stack.tsx";
import { SlotProvider } from "../../utils/index.ts";
import { Text } from "../src/Text.tsx";
import { TextContext } from "../src/TextContext.ts";


/**
 * A primitive text component matching Hopper's typography type scale.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Text/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Text",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Text,
    args: {
        children: "Software built for everyone to do their best work"
    }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The Text component provides default styling based on it's `size` prop`, but can also receive styling from a parent component
 * when used as a child of a Hopper component.
 *
 * See Button for examples of how to use the Text component in the context of a Hopper component
 */
export const Default: Story = {
};

/**
 * You can alter the size of the text by specifying a `size` prop.
 * The available sizes match Hopper Typography Type Scale (a type scale is a set of [font-size and line-height](https://hopper.workleap.design/tokens/semantic/typography#body) pairs).
 */
export const Size: Story = {
    render: props => (
        <Stack>
            <Text size="xs" {...props} />
            <Text size="sm" {...props} />
            <Text size="md" {...props} />
            <Text size="lg" {...props} />
            <Text size="xl" {...props} />
            <Text size="2xl" {...props} />
        </Stack>
    )
};

/**
 * You can also alter the size to match the parent element's type scale by using the `inherit` size.
 */
export const Inherit: Story = {
    render: props => (
        <Div fontSize="body-xs">
            <Text size="inherit" {...props} />
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
            [TextContext, { size: "xl" }]
        ]}
        >
            <Text {...props} />
        </SlotProvider>
    )
};

/**
 * The Text component can be nested within other Text components and inherit the parent's size by default.
 */
export const Nested: Story = {
    args: {
        size: "lg",
        children: [
            <Text key="1" color="primary">Nested</Text>,
            " Text"
        ]
    }
};

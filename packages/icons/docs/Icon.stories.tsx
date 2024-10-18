import { SlotProvider, Stack } from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";

import { SparklesIcon } from "../src/generated-icon-components/SparklesIcon.tsx";
import { IconContext } from "../src/IconContext.ts";

/**
 * An icon component allow you to render a custom icon.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/icons/src/Icon.tsx)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/icons)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Icon",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: SparklesIcon
} satisfies Meta<typeof SparklesIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

/**
 * Icons support t-shirt sizing. When used inside another Hopper component, they'll generally be sized automatically, but if you use icons standalone, you can use the size prop to control the sizing. The default size is "md".
 */
export const Sizing: Story = {
    render: props => (
        <Stack>
            <SparklesIcon size="sm" {...props} />
            <SparklesIcon size="md" {...props} />
            <SparklesIcon size="lg" {...props} />
        </Stack>
    )
};

/**
 * The color of the icon can be changed using the `fill` prop.
 * All the styled system props are also available.
 */
export const Styling: Story = {
    args: {
        fill:"primary"
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
            [IconContext, { fill: "primary" }]
        ]}
        >
            <SparklesIcon {...props} />
        </SlotProvider>
    )
};

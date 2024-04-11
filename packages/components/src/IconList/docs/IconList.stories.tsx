import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../../layout/index.ts";
import { SlotProvider } from "../../utils/index.ts";
import { IconList } from "../src/IconList.tsx";
import { IconListContext } from "../src/IconListContext.ts";

/**
 * A component that allows you to render a list of icons
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/IconList/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/IconList",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: IconList,
    args: {
        children: [
            <SparklesIcon key="1" />,
            <SparklesIcon key="2" />
        ]
    }
} satisfies Meta<typeof IconList>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * To inline multiple icons in a component, wrap your icons in an icon list component.
 */
export const Default: Story = {
};

/**
 * An IconList can vary in size.
 */
export const Sizes: Story = {
    render: args => (
        <Stack>
            <IconList {...args} size="sm" />
            <IconList {...args} size="md" />
            <IconList {...args} size="lg" />
        </Stack>
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
            [IconListContext, { size: "lg" }]
        ]}
        >
            <IconList {...props} />
        </SlotProvider>
    )
};

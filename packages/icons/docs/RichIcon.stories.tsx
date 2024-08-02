import { Stack, SlotProvider, Inline } from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";

import { SparklesRichIcon } from "../src/generated-rich-icon-components/index.ts";
import { RichIconContext } from "../src/RichIconContext.ts";

/**
 * A rich icon component allow you to render a custom rich icon.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/icons/src/RichIcon.tsx)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/icons)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/RichIcon",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: SparklesRichIcon
} satisfies Meta<typeof SparklesRichIcon>;

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
            <SparklesRichIcon size="md" {...props} />
            <SparklesRichIcon size="lg" {...props} />
            <SparklesRichIcon size="xl" {...props} />
        </Stack>
    )
};

/**
 * A rich icon can use different variants.
 */
export const Variants: Story = {
    render: props => (
        <Inline alignY="flex-start">
            <Stack>
                <SparklesRichIcon variant="option1" {...props} />
                <SparklesRichIcon variant="option2" {...props} />
                <SparklesRichIcon variant="option3" {...props} />
                <SparklesRichIcon variant="option4" {...props} />
                <SparklesRichIcon variant="option5" {...props} />
                <SparklesRichIcon variant="option6" {...props} />
                <SparklesRichIcon variant="option7" {...props} />
                <SparklesRichIcon variant="option8" {...props} />
            </Stack>
            <Stack>
                <SparklesRichIcon variant="success" {...props} />
                <SparklesRichIcon variant="warning" {...props} />
                <SparklesRichIcon variant="danger" {...props} />
                <SparklesRichIcon variant="information" {...props} />
                <SparklesRichIcon variant="upsell" {...props} />
            </Stack>
        </Inline>
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
            [RichIconContext, { variant: "option5" }]
        ]}
        >
            <SparklesRichIcon {...props} />
        </SlotProvider>
    )
};

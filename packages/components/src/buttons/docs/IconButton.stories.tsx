import { IconButton } from "../src/IconButton.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { PlusIcon } from "@hopper-ui/icons";

/**
 * Icon Buttons are used to initialize an action. Icon Button aria-labels express what action will occur when the user interacts with it.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Buttons/src)
 * -
 * [View ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta: Meta<typeof IconButton> = {
    title: "Docs/Buttons/IconButton",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: IconButton,
    args: {
        children: <PlusIcon />
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default button.
 */
export const Default: Story = {
};

/**
 * A button can use different variants.
 *
 * **Primary**: For the principal call to action on the page. Primary buttons should only appear once per screen (not including the application header, modal or side panel).
 *
 * **Secondary**: For secondary actions on each page. Secondary buttons can be used in conjunction with a primary button or on its own. Paired with a Primary button, the secondary button usually performs the negative action of the set, such as “Cancel.”
 *
 * **Tertiary**: TODO
 */
export const Variants: Story = {
    render: props => (
        <div style={{ display: "flex", gap: "1.25rem" }}>
            <IconButton variant="primary" {...props} />
            <IconButton variant="secondary" {...props} />
            <IconButton variant="tertiary" {...props} />
        </div>
    )
};

/**
 * A button can vary in size.
 */
export const Size: Story = {
    render: props => (
        <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "1.25rem" }}>
                <IconButton size="sm" variant="primary" {...props} />
                <IconButton size="sm" variant="secondary" {...props} />
                <IconButton size="sm" variant="tertiary" {...props} />
            </div>
            <div style={{ display: "flex", gap: "1.25rem" }}>
                <IconButton size="md" variant="primary" {...props} />
                <IconButton size="md" variant="secondary" {...props} />
                <IconButton size="md" variant="tertiary" {...props} />
            </div>
        </div>
    )
};

/**
 * A button can be disabled.
 */
export const Disabled: Story = {
    ...Variants,
    args: {
        isDisabled: true
    }
};

/**
 * A button can show a loading indicator. The button text is hidden but the button maintains the width that it would have if the text were visible.
 */
export const Loading: Story = {
    ...Variants,
    args: {
        isLoading: true
    }
};

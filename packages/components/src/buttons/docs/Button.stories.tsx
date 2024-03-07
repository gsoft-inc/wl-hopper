import { Text } from "../../Text/src/Text.tsx";
import { Button } from "../src/Button.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { PlusIcon } from "@hopper-ui/icons";
import { IconList } from "../../index.ts";

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Buttons/src)
 * -
 * [View ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Buttons/Button",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Button,
    args: {
        children: "Save"
    }
} satisfies Meta<typeof Button>;

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
 *
 * **Upsell**: For upsell actions that relates to upgrading an account or a plan. Use the upsell button to distinguish from an existing primary button. In some case a primary button can be used in its place when the general context of the page is about upselling.
 *
 * **Negative**: For actions that could have destructive effects on the user’s data.
 */
export const Variants: Story = {
    render: props => (
        <div style={{ display: "flex", gap: "1.25rem" }}>
            <Button variant="primary" {...props} />
            <Button variant="secondary" {...props} />
            <Button variant="tertiary" {...props} />
            <Button variant="negative" {...props} />
            <Button variant="upsell" {...props} />
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
                <Button size="sm" variant="primary" {...props} />
                <Button size="sm" variant="secondary" {...props} />
                <Button size="sm" variant="tertiary" {...props} />
                <Button size="sm" variant="negative" {...props} />
                <Button size="sm" variant="upsell" {...props} />
            </div>
            <div style={{ display: "flex", gap: "1.25rem" }}>
                <Button size="md" variant="primary" {...props} />
                <Button size="md" variant="secondary" {...props} />
                <Button size="md" variant="tertiary" {...props} />
                <Button size="md" variant="negative" {...props} />
                <Button size="md" variant="upsell" {...props} />
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
 * A button can be expanded to full width to fill its parent container.
 */
export const Fluid: Story = {
    render: props => (
        <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
            <Button {...props} >
                Save
            </Button>
            <Button {...props} >
                <PlusIcon />
                <Text>Save</Text>
            </Button>
            <Button {...props} >
                <Text>Save</Text>
                <PlusIcon slot="end-icon" />
            </Button>
            <Button {...props} >
                <PlusIcon />
                <Text>Save</Text>
                <PlusIcon slot="end-icon" />
            </Button>
        </div>
    ),
    args: {
        fluid: true
    }
};

/**
 * A button can contain icons.
 */
export const Icon: Story = {
    ...Size,
    args: {
        children: [
            <PlusIcon />,
            <Text>Save</Text>
        ]
    }
};

/**
 * Non standard end icons can be provided to handle special cases. However, think twice before adding end icons, start icons should be your go to.
 */
export const EndIcon: Story = {
    ...Size,
    args: {
        children: ([
            <PlusIcon slot="end-icon" />,
            <Text>Save</Text>
        ])
    }
};

/**
 * Non standard end icons can be provided to handle special cases. However, think twice before adding end icons, start icons should be your go to.
 */
export const BothIcon: Story = {
    ...Size,
    args: {
        children: ([
            <PlusIcon />,
            <Text>Save</Text>,
            <PlusIcon slot="end-icon" />
        ])
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

export const IconListStory: Story = {
    ...Size,
    args: {
        children: [
            <Text>Save</Text>,
            <IconList>
                <PlusIcon /><PlusIcon /><PlusIcon />
            </IconList>
        ]
    }
};

export const EndIconList: Story = {
    ...Size,
    args: {
        children: [
            <IconList slot="end-icon">
                <PlusIcon /><PlusIcon /><PlusIcon />
            </IconList>,
            <Text>Save</Text>
        ]
    }
};

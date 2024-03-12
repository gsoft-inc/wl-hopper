import { Text } from "../../Text/index.ts";
import { Button } from "../src/Button.tsx";
import { ButtonContext } from "../src/ButtonContext.ts";
import type { Meta, StoryObj } from "@storybook/react";
import { PlusIcon } from "@hopper-ui/icons";
import { IconList } from "../../IconList/index.ts";
import { SlotProvider } from "../../utils/index.ts";

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
            <PlusIcon key="1" />,
            <Text key="2">Save</Text>
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

/**
 * A button can contain an IconList.
 */
export const IconListStory: Story = {
    name: "IconList",
    ...Size,
    args: {
        children: [
            <Text key="1">Save</Text>,
            <IconList key="2">
                <PlusIcon /><PlusIcon /><PlusIcon />
            </IconList>
        ]
    }
};

/**
 * A button can contain a Non standard end IconList.
 */
export const EndIconList: Story = {
    name: "EndIconList",
    ...Size,
    args: {
        children: [
            <IconList key="1" slot="end-icon">
                <PlusIcon /><PlusIcon /><PlusIcon />
            </IconList>,
            <Text key="2">Save</Text>
        ]
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
            [ButtonContext, { variant: "secondary", size: "sm" }]
        ]}
        >
            <Button {...props} />
        </SlotProvider>
    )
};

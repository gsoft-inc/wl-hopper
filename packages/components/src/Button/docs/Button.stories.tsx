import { Text } from "../../Text/src/Text.tsx";
import { Button } from "../src/Button.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { PlusIcon } from "@hopper-ui/icons";
import { IconList } from "../../index.ts";

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Button/src)
 * -
 * [View ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta: Meta<typeof Button> = {
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
};

export default meta;

type ButtonStory = StoryObj<typeof meta>;

/**
 * A default button.
 */
export const Default: ButtonStory = {
};

/**
 * A button can use different variants.
 *
 * **Primary** buttons are used to indicate the main action of a page or a section. This is usually the action we want the user to take. In a button group, there can be only 1 primary button. This will be reserved for the suggested action.
 *
 * **Secondary** buttons are used for user actions that need less prominence in the page or the section. It’s also the button used when there are no suggested actions to the user.
 *
 * **Tertiary** buttons are used for actions that need to be there but that we don't want to encourage. A common use case would be a Cancel button in a message or an alert.
 *
 * **Negative** buttons are used for actions that would result in a deletion or another non recoverable negative action. These are mostly useful in modals.
 */
export const Variants: ButtonStory = {
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
export const Size: ButtonStory = {
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
export const Disabled: ButtonStory = {
    ...Variants,
    args: {
        isDisabled: true
    }
};

/**
 * A button can be expanded to full width to fill its parent container.
 */
export const Fluid: ButtonStory = {
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
export const Icon: ButtonStory = {
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
export const EndIcon: ButtonStory = {
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
export const BothIcon: ButtonStory = {
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
export const Loading: ButtonStory = {
    ...Variants,
    args: {
        isLoading: true
    }
};

export const IconListStory: ButtonStory = {
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


export const EndIconList: ButtonStory = {
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

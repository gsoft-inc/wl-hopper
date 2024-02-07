import type { Meta, StoryObj } from "@storybook/react";
import { AddIcon } from "../src/generated-icon-components/AddIcon.tsx";

/**
An icon component allow you to render a custom icon.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/icons/src/Icon.tsx)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/icons)
 * -
 * View storybook TODO
 */
const meta: Meta<typeof AddIcon> = {
    title: "Docs/Icon",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: AddIcon
};

export default meta;

type IconStory = StoryObj<typeof meta>;

export const Default: IconStory = {
};

/**
 * Icons support t-shirt sizing. When used inside another Hopper component, they'll generally be sized automatically, but if you use icons standalone, you can use the size prop to control the sizing. The default size is "md".
 */
export const Sizing: IconStory = {
    render: props => (
        <>
            <AddIcon size="sm" {...props} />
            <AddIcon size="md" {...props} />
            <AddIcon size="lg" {...props} />
        </>
    )
};

/**
// The color of the icon can be change using the `fill` prop.
// All the styled system props are also available.
 */
export const Styling: IconStory = {
    args: {
        fill:"primary"
    }
};

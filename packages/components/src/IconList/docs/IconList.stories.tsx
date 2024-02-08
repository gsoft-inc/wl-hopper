import { IconList } from "../src/IconList.tsx";
import { AddIcon, PlusIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * A component that allows you to render a list of icons
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/IconList/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta: Meta<typeof IconList> = {
    title: "Docs/IconList",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: IconList,
    args: {
        children: [
            <AddIcon />,
            <PlusIcon />
        ]
    }
};

export default meta;

type IconListStory = StoryObj<typeof meta>;

/**
 * To inline multiple icons in a component, wrap your icons in an icon list component.
 */
export const Default: IconListStory = {
};

export const Styling: IconListStory = {
    args: {
        color: "primary",
        gap: "core_480"
    }
};

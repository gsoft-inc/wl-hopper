import { AddIcon, PlusIcon } from "@hopper-ui/icons";
import { IconList } from "../../src/IconList.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconList> = {
    title: "Components/IconList",
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

export const Default: IconListStory = {
};

export const Styling: IconListStory = {
    args: {
        color: "primary",
        gap: "core_480"
    }
};

import { AddIcon, PlusIcon } from "@hopper-ui/icons";
import { IconList } from "../../src/IconList.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/IconList",
    component: IconList,
    args: {
        children: [
            <AddIcon key="1" />,
            <PlusIcon key="2" />
        ]
    }
} satisfies Meta<typeof IconList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Styling: Story = {
    args: {
        color: "primary",
        gap: "core_480"
    }
};

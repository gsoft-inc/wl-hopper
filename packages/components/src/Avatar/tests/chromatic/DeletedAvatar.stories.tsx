import type { Meta, StoryObj } from "@storybook/react";

import { Inline } from "../../../layout/index.ts";
import { DeletedAvatar } from "../../src/DeletedAvatar.tsx";

const meta = {
    title: "Components/Avatar",
    component: DeletedAvatar
} satisfies Meta<typeof DeletedAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DeletedAvatarStory = {
    name: "Deleted Avatar",
    render: args => (
        <Inline alignY="center">
            <DeletedAvatar {...args} size="xs" />
            <DeletedAvatar {...args} size="sm" />
            <DeletedAvatar {...args} />
            <DeletedAvatar {...args} size="lg" />
            <DeletedAvatar {...args} size="xl" />
            <DeletedAvatar {...args} size="2xl" />
        </Inline>
    ),
    args: {
        "aria-label": "deleted"
    }
} satisfies Story;


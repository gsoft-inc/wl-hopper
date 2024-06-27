import type { Meta, StoryObj } from "@storybook/react";

import { Inline } from "../../../layout/index.ts";
import { AnonymousAvatar } from "../../src/AnonymousAvatar.tsx";

const meta = {
    title: "Components/Avatar",
    component: AnonymousAvatar
} satisfies Meta<typeof AnonymousAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnonymousAvatarStory = {
    name: "Anonymous Avatar",
    render: args => (
        <Inline alignY="center">
            <AnonymousAvatar {...args} size="xs" />
            <AnonymousAvatar {...args} size="sm" />
            <AnonymousAvatar {...args} />
            <AnonymousAvatar {...args} size="lg" />
            <AnonymousAvatar {...args} size="xl" />
            <AnonymousAvatar {...args} size="2xl" />
        </Inline>
    ),
    args: {
        "aria-label": "deleted"
    }
} satisfies Story;


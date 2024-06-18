import type { Meta, StoryObj } from "@storybook/react";


import { Inline, Stack } from "../../layout/index.ts";
import { AnonymousAvatar, type AnonymousAvatarProps } from "../src/AnonymousAvatar.tsx";
import { Avatar } from "../src/Avatar.tsx";
import { DeletedAvatar, type DeletedAvatarProps } from "../src/DeletedAvatar.tsx";

import { ChrisHadfield } from "./assets/index.js";

/**
 * Avatars are used to represent a user, team or another entity. They are often paired with text where room is available.
 * If an image is not provided or fails to load, the initials of the name will be displayed instead.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Avatar/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Avatar",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Avatar
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;
type AnonymousStory = StoryObj<AnonymousAvatarProps>;
type DeletedStory = StoryObj<DeletedAvatarProps>;

/**
 * A default Avatar with no src set, only the name.
 */
export const Default = {
    args: {
        name: "John Doe"
    }
} satisfies Story;

/**
 * An Avatar with a local image. It would normally be imported from a file like this: `import ChrisHadfield from "./hadfield.png";` then used as the `src`.
 */
export const LocalImage = {
    args: {
        name: "Chris Hadfield",
        src: ChrisHadfield
    }
} satisfies Story;

/**
 * An Avatar with a remote image.
 */
export const RemoteImage = {
    args: {
        name: "John Doe",
        src: "https://i.pravatar.cc/96?img=1"
    }
} satisfies Story;

/**
 * An Avatar with a fallback image.
 */
export const FallbackImage = {
    args: {
        name: "John Doe",
        src: "https://example.com/image.jpg",
        fallbackSrc: "https://i.pravatar.cc/96?img=2"
    }
} satisfies Story;

/**
 * An Avatar when src fails to load and fallbackSrc is not set.
 * A default image will be displayed instead.
 */
export const BrokenImage = {
    args: {
        name: "John Doe",
        src: "https://example.com/image.jpg"
    }
} satisfies Story;

/**
 * An Avatar where the src fails to load and the fallback is bypassed.
 * The initials will be displayed instead.
 */
export const BrokenImageWithNoFallback = {
    args: {
        name: "Bob Smith",
        src: "https://example.com/image.jpg",
        fallbackSrc: null
    }
} satisfies Story;

/**
 * An anonymous avatar.
 */
export const Anonymous = {
    render: args => (
        <AnonymousAvatar {...args} aria-label="anonymous" />
    )
} satisfies AnonymousStory;

/**
 * A deleted avatar.
 */
export const Deleted = {
    render: args => (
        <DeletedAvatar {...args} aria-label="deleted" />
    )
} satisfies DeletedStory;

/**
 * An Avatar can have multiple sizes.
 */
export const Sizes = {
    render: args => (
        <Stack>
            <Inline>
                <Avatar {...args} size="xs" />
                <Avatar {...args} size="sm" />
                <Avatar {...args} size="md" />
                <Avatar {...args} size="lg" />
                <Avatar {...args} size="xl" />
                <Avatar {...args} size="2xl" />
            </Inline>
            <Inline>
                <Avatar {...args} size="xs" src="https://i.pravatar.cc/96?img=1" />
                <Avatar {...args} size="sm" src="https://i.pravatar.cc/96?img=1" />
                <Avatar {...args} size="md" src="https://i.pravatar.cc/96?img=1" />
                <Avatar {...args} size="lg" src="https://i.pravatar.cc/96?img=1" />
                <Avatar {...args} size="xl" src="https://i.pravatar.cc/96?img=1" />
                <Avatar {...args} size="2xl" src="https://i.pravatar.cc/96?img=1" />
            </Inline>
            <Inline>
                <Avatar {...args} size="xs" src="https://example.com/image.jpg" />
                <Avatar {...args} size="sm" src="https://example.com/image.jpg" />
                <Avatar {...args} size="md" src="https://example.com/image.jpg" />
                <Avatar {...args} size="lg" src="https://example.com/image.jpg" />
                <Avatar {...args} size="xl" src="https://example.com/image.jpg" />
                <Avatar {...args} size="2xl" src="https://example.com/image.jpg" />
            </Inline>
        </Stack>
    ),
    args: {
        name: "John Doe"
    }
} satisfies Story;

/**
 * An Avatar can have a disabled look.
 */
export const Disabled = {
    render: args => (
        <Inline>
            <Avatar {...args} />
            <Avatar {...args} src="https://i.pravatar.cc/96?img=1" />
            <AnonymousAvatar aria-label="anonymous" size="2xl" isDisabled />
        </Inline>
    ),
    args: {
        name: "John Doe",
        size: "2xl",
        isDisabled: true
    }
} satisfies Story;

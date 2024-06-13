import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../src/Avatar.tsx";

/**
 * TODO: Add description
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

/**
 * A default Avatar with no src set, only the name.
 */
export const Default = {
    args: {
        name: "John Doe"
    }
} satisfies Story;

/**
 * An Avatar with an image.
 */
export const Image = {
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
export const BrokenImageNoFallback = {
    args: {
        name: "Bob Smith",
        src: "https://example.com/image.jpg",
        fallbackSrc: null
    }
} satisfies Story;

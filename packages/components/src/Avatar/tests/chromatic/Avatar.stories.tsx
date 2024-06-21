import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { AnonymousAvatar, type AnonymousAvatarProps } from "../../src/AnonymousAvatar.tsx";
import { Avatar } from "../../src/Avatar.tsx";
import { DeletedAvatar, type DeletedAvatarProps } from "../../src/DeletedAvatar.tsx";

import { Anime, Astronaut, Person } from "./assets/index.ts";


const meta = {
    title: "Components/Avatar",
    component: Avatar
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;
type AnonymousStory = StoryObj<AnonymousAvatarProps>;
type DeletedStory = StoryObj<DeletedAvatarProps>;

export const LocalImage = {
    render: args => (
        <Inline alignY="center">
            <Avatar {...args} size="xs" />
            <Avatar {...args} size="sm" />
            <Avatar {...args} />
            <Avatar {...args} size="lg" />
            <Avatar {...args} size="xl" />
            <Avatar {...args} size="2xl" />
        </Inline>
    ),
    args: {
        name: "Jane Doe",
        src: Person
    }
} satisfies Story;

export const LocalTallImage = {
    render: args => (
        <Inline alignY="center">
            <Avatar {...args} size="xs" />
            <Avatar {...args} size="sm" />
            <Avatar {...args} />
            <Avatar {...args} size="lg" />
            <Avatar {...args} size="xl" />
            <Avatar {...args} size="2xl" />
        </Inline>
    ),
    args: {
        name: "Neil Armstrong",
        src: Astronaut
    }
} satisfies Story;

export const LocalWideImage = {
    render: args => (
        <Inline alignY="center">
            <Avatar {...args} size="xs" />
            <Avatar {...args} size="sm" />
            <Avatar {...args} />
            <Avatar {...args} size="lg" />
            <Avatar {...args} size="xl" />
            <Avatar {...args} size="2xl" />
        </Inline>
    ),
    args: {
        name: "Ai Hoshino",
        src: Anime
    }
} satisfies Story;

export const RemoteImage = {
    parameters: {
        chromatic: { delay: 500 }
    },
    args: {
        name: "John Doe",
        src: "https://randomuser.me/api/portraits/men/10.jpg",
        size: "xl"
    }
} satisfies Story;

export const EmptySrc = {
    render: args => (
        <Inline alignY="center">
            <Avatar {...args} size="xs" />
            <Avatar {...args} size="sm" />
            <Avatar {...args} />
            <Avatar {...args} size="lg" />
            <Avatar {...args} size="xl" />
            <Avatar {...args} size="2xl" />
        </Inline>
    ),
    args: {
        name: "John Doe",
        src: ""
    }
} satisfies Story;

export const BrokenImage = {
    render: args => (
        <Inline alignY="center">
            <Avatar {...args} size="xs" />
            <Avatar {...args} size="sm" />
            <Avatar {...args} />
            <Avatar {...args} size="lg" />
            <Avatar {...args} size="xl" />
            <Avatar {...args} size="2xl" />
        </Inline>
    ),
    args: {
        name: "John Doe",
        src: "https://example.com/image.jpg"
    }
} satisfies Story;

export const FallbackImage = {
    render: args => (
        <Inline alignY="center">
            <Avatar {...args} size="xs" />
            <Avatar {...args} size="sm" />
            <Avatar {...args} />
            <Avatar {...args} size="lg" />
            <Avatar {...args} size="xl" />
            <Avatar {...args} size="2xl" />
        </Inline>
    ),
    args: {
        name: "John Doe",
        src: "https://example.com/image.jpg",
        fallbackSrc: Person
    }
} satisfies Story;

export const Initials = {
    render: args => (
        <Stack>
            <Inline alignY="center">
                <Avatar {...args} size="xs" />
                <Avatar {...args} size="sm" />
                <Avatar {...args} />
                <Avatar {...args} size="lg" />
                <Avatar {...args} size="xl" />
                <Avatar {...args} size="2xl" />
            </Inline>
            <Inline alignY="center">
                <Avatar {...args} name="Sally Ride" />
                <Avatar {...args} name="Alan Shepard" />
                <Avatar {...args} name="Chris Hadfield" />
                <Avatar {...args} name="Christa McAuliffe" />
                <Avatar {...args} name="Valentina Tereshkova" />
                <Avatar {...args} name="Yuri Gagarin" />
            </Inline>
        </Stack>
    ),
    args: {
        name: "Gab Seguin"
    }
} satisfies Story;

export const Anonymous = {
    render: args => (
        <AnonymousAvatar {...args} aria-label="anonymous" />
    )
} satisfies AnonymousStory;

export const Deleted = {
    render: args => (
        <DeletedAvatar {...args} aria-label="deleted" />
    )
} satisfies DeletedStory;


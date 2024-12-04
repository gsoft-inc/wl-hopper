import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { Launch, Mars } from "../../assets/index.ts";
import { Image } from "../../src/Image.tsx";

const meta = {
    title: "Components/Image",
    component: Image
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: () => (
        <Image src={Launch} alt="SpaceX launch" />
    )
} satisfies Story;

export const Contained = {
    render: () => (
        <Div UNSAFE_width="200px" UNSAFE_height="200px">
            <Image src={Launch} alt="SpaceX launch" />
        </Div>
    )
} satisfies Story;

export const Size = {
    render: () => (
        <Stack>
            <Image UNSAFE_width="200px" src={Launch} alt="SpaceX launch" />
            <Image UNSAFE_width="200px" UNSAFE_height="200px" src={Launch} alt="SpaceX launch" />
        </Stack>
    )
} satisfies Story;

export const Straight = {
    render: () => (
        <Inline alignY="end">
            <Image shape="straight" UNSAFE_width="50px" UNSAFE_height="50px" src={Launch} alt="SpaceX launch" />
            <Image shape="straight" UNSAFE_width="100px" UNSAFE_height="100px" src={Launch} alt="SpaceX launch" />
            <Image shape="straight" UNSAFE_width="200px" UNSAFE_height="200px" src={Launch} alt="SpaceX launch" />
            <Image shape="straight" UNSAFE_width="300px" UNSAFE_height="300px" src={Launch} alt="SpaceX launch" />
            <Image shape="straight" src={Launch} alt="SpaceX launch" />
        </Inline>
    )
} satisfies Story;

export const Rounded = {
    render: () => (
        <Inline alignY="end">
            <Image shape="rounded" UNSAFE_width="50px" UNSAFE_height="50px" src={Launch} alt="SpaceX launch" />
            <Image shape="rounded" UNSAFE_width="100px" UNSAFE_height="100px" src={Launch} alt="SpaceX launch" />
            <Image shape="rounded" UNSAFE_width="200px" UNSAFE_height="200px" src={Launch} alt="SpaceX launch" />
            <Image shape="rounded" UNSAFE_width="300px" UNSAFE_height="300px" src={Launch} alt="SpaceX launch" />
            <Image shape="rounded" src={Launch} alt="SpaceX launch" />
        </Inline>
    )
} satisfies Story;

export const Circular = {
    render: () => (
        <Inline alignY="end">
            <Image shape="circular" UNSAFE_width="50px" UNSAFE_height="50px" src={Launch} alt="SpaceX launch" />
            <Image shape="circular" UNSAFE_width="100px" UNSAFE_height="100px" src={Launch} alt="SpaceX launch" />
            <Image shape="circular" UNSAFE_width="200px" UNSAFE_height="200px" src={Launch} alt="SpaceX launch" />
            <Image shape="circular" UNSAFE_width="300px" UNSAFE_height="300px" src={Launch} alt="SpaceX launch" />
            <Image shape="circular" src={Launch} alt="SpaceX launch" />
        </Inline>
    )
} satisfies Story;

export const ObjectFit = {
    render: () => (
        <Inline>
            <Div UNSAFE_width="200px" UNSAFE_height="200px">
                <Image objectFit="fill" UNSAFE_width="100%" UNSAFE_height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
            <Div UNSAFE_width="200px" UNSAFE_height="200px">
                <Image objectFit="contain" UNSAFE_width="100%" UNSAFE_height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
            <Div UNSAFE_width="200px" UNSAFE_height="200px">
                <Image objectFit="cover" UNSAFE_width="100%" UNSAFE_height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
            <Div UNSAFE_width="200px" UNSAFE_height="200px">
                <Image objectFit="scale-down" UNSAFE_width="100%" UNSAFE_height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
            <Div UNSAFE_width="200px" UNSAFE_height="200px">
                <Image objectFit="none" UNSAFE_width="100%" UNSAFE_height="100%" src={Launch} alt="SpaceX launch" />
            </Div>
        </Inline>
    )
} satisfies Story;

export const ObjectPosition = {
    render: () => (
        <Inline>
            <Image objectPosition="50% 50%" objectFit="none" UNSAFE_width="200px" UNSAFE_height="200px" src={Mars} alt="SpaceX launch" />
            <Image objectPosition="right top" objectFit="none" UNSAFE_width="200px" UNSAFE_height="200px" src={Mars} alt="SpaceX launch" />
            <Image objectPosition="left bottom" objectFit="none" UNSAFE_width="200px" UNSAFE_height="200px" src={Mars} alt="SpaceX launch" />
            <Image objectPosition="27 17" objectFit="none" UNSAFE_width="200px" UNSAFE_height="200px" src={Mars} alt="SpaceX launch" />
        </Inline>
    )
} satisfies Story;

export const Zoom = {
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Image src={Launch} alt="SpaceX launch" />
            </Div>
            <Div className="zoom-out">
                <Image src={Launch} alt="SpaceX launch" />
            </Div>
        </Stack>
    )
} satisfies Story;

export const Styling = {
    render: () => (
        <Inline>
            <Image border="warning" src={Mars} alt="SpaceX launch" />
            <Image className="border-red" src={Mars} alt="SpaceX launch" />
            <Image style={{ border: "1px solid red" }} src={Mars} alt="SpaceX launch" />
        </Inline>
    )
} satisfies Story;


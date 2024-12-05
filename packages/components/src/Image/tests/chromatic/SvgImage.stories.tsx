
import type { Meta, StoryObj } from "@storybook/react";

import { Inline } from "../../../layout/index.ts";
import { NoResults } from "../../assets/index.ts";
import { SvgImage } from "../../src/SvgImage.tsx";

const meta = {
    title: "Components/SvgImage",
    component: SvgImage,
    args: {
        src: NoResults,
        "aria-label": "No Results"
    }
} satisfies Meta<typeof SvgImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Stroke = {
    render: args => (
        <SvgImage stroke="neutral" {...args} />
    )
} satisfies Story;

export const Fill = {
    render: args => (
        <SvgImage fill="neutral" {...args} />
    )
} satisfies Story;

export const Width = {
    render: args => (
        <SvgImage UNSAFE_width="100px" stroke="neutral" {...args} />
    )
} satisfies Story;

export const Height = {
    render: args => (
        <SvgImage UNSAFE_height="100px" stroke="neutral" {...args} />
    )
} satisfies Story;

export const Styling = {
    render: args => (
        <Inline>
            <SvgImage className="stroke-red" {...args} />
            <SvgImage style={{ stroke: "red" }} {...args} />
        </Inline>
    )
} satisfies Story;

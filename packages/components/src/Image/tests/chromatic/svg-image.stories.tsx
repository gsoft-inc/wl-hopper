
import type { Meta, StoryObj } from "@storybook/react";

import { Inline } from "../../../layout/index.ts";
import { NoResults } from "../../assets/index.ts";
import { SvgImage } from "../../src/svg-image.tsx";

const meta = {
    title: "Components/SvgImage",
    component: SvgImage,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof SvgImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Stroke = {
    render: () => (
        <SvgImage stroke="neutral" src={NoResults} aria-label="No Results" />
    )
} as Story;

export const Fill = {
    render: () => (
        <SvgImage fill="neutral" src={NoResults} aria-label="No Results" />
    )
} as Story;

export const Width = {
    render: () => (
        <SvgImage UNSAFE_width="100px" src={NoResults} stroke="neutral" aria-label="No Results" />
    )
} as Story;

export const Height = {
    render: () => (
        <SvgImage UNSAFE_height="100px" src={NoResults} stroke="neutral" aria-label="No Results" />
    )
} as Story;

export const Styling = {
    render: () => (
        <Inline>
            <SvgImage className="stroke-red" src={NoResults} aria-label="No Results" />
            <SvgImage style={{ stroke: "red" }} src={NoResults} aria-label="No Results" />
        </Inline>
    )
} as Story;

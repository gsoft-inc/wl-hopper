
import type { Meta, StoryObj } from "@storybook/react";

import { Inline } from "../../../layout/index.ts";
import { SVGImage } from "../../src/SVGImage.tsx";

import { NoResults } from "./assets/index.ts";

const meta = {
    title: "Components/SVGImage",
    component: SVGImage,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof SVGImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Stroke = {
    render: () => (
        <SVGImage stroke="neutral" src={NoResults} aria-label="No Results" />
    )
} as Story;

export const Fill = {
    render: () => (
        <SVGImage fill="neutral" src={NoResults} aria-label="No Results" />
    )
} as Story;

export const Width = {
    render: () => (
        <SVGImage UNSAFE_width="100px" src={NoResults} stroke="neutral" aria-label="No Results" />
    )
} as Story;

export const Height = {
    render: () => (
        <SVGImage UNSAFE_height="100px" src={NoResults} stroke="neutral" aria-label="No Results" />
    )
} as Story;

export const Styling = {
    render: () => (
        <Inline>
            <SVGImage className="stroke-red" src={NoResults} aria-label="No Results" />
            <SVGImage style={{ stroke: "red" }} src={NoResults} aria-label="No Results" />
        </Inline>
    )
} as Story;

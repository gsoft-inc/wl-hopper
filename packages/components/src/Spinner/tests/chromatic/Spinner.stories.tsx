import { Spinner } from "../../src/Spinner.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { _Grid, Stack } from "../../../layouts/index.ts";

const meta = {
    component: Spinner,
    title: "Components/Spinner",
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }

} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <_Grid alignItems="end">
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </_Grid>
    ),
    args: {
        "aria-label": "Crawling in progress…"
    }
};

export const InheritColor: Story = {
    render: args => (
        <_Grid alignItems="end" backgroundColor="primary-strong">
            <Spinner color="core_samoyed" aria-label="Crawling in progress…" {...args} />
            <Spinner color="core_samoyed" {...args}>Crawling in progress…</Spinner>
        </_Grid>
    )
};

export const Styling: Story = {
    render: args => (
        <_Grid>
            <Spinner UNSAFE_color="red" {...args}>Crawling in progress…</Spinner>
            <Spinner className="border-red" aria-label="Crawling in progress…" {...args} />
            <Spinner style={{ border: "1px solid red" }} aria-label="Crawling in progress…" {...args} />
        </_Grid>
    )
};

export const Zoom: Story = {
    render: args => (
        <Stack>
            <_Grid alignItems="end" className="zoom-in">
                <Spinner size="sm" {...args} />
                <Spinner {...args} />
                <Spinner size="lg" {...args} />
            </_Grid>
            <_Grid alignItems="end" className="zoom-out">
                <Spinner size="sm" {...args} />
                <Spinner {...args} />
                <Spinner size="lg" {...args} />
            </_Grid>
        </Stack>
    ),
    args: {
        children: "Crawling in progress…"
    }
};

export const Label: Story = {
    render: args => (
        <_Grid alignItems="end" >
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </_Grid>
    ),
    args: {
        children: "Crawling in progress…"
    }
};

export const Overflow: Story = {
    render: args => (
        <Stack UNSAFE_width="4.5rem ">
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </Stack>
    ),
    args: {
        children: "Crawling in progress…"
    }
};

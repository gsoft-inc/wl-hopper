import { Div } from "@hopper-ui/styled-system";
import { Spinner } from "../src/Spinner.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { _Grid } from "../../layouts/index.ts";

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Spinner/src)
 * -
 * [View ARIA pattern](https://www.w3.org/TR/wai-aria-1.2/#progressbar)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    component: Spinner,
    title: "Docs/Spinner",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    }
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A simple spinner.
 */
export const Default: Story = {
    args: {
        "aria-label": "Loading…"
    }
};

/**
 * A spinner can vary in size.
 */
export const Size: Story = {
    render: args => (
        <_Grid alignItems="end">
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </_Grid>
    ),
    args: {
        "aria-label": "Loading…"
    }
};

/**
 * A spinner can vary in size.
 */
export const Label: Story = {
    render: args => (
        <_Grid alignItems="end">
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </_Grid>
    ),
    args: {
        children: "Loading…"
    }
};

/**
 * You can change a spinner style when over a background by setting a color property on the spinner.
 */
export const OverBackground: Story = {
    render: args => (
        <Div backgroundColor="primary-strong" padding="inset-md">
            <Spinner color="core_samoyed" {...args} />
        </Div>
    ),
    args: {
        children: "Loading…"
    }
};

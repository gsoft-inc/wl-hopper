import { Div } from "@hopper-ui/styled-system";
import { Spinner } from "../src/Spinner.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Inline } from "../../layouts/index.ts";

/**
 * A spinner indicates that a part of the product is currently performing a task, and the duration of this process is unknown.
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
        <Inline alignItems="end">
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </Inline>
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
        <Inline alignItems="end">
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </Inline>
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

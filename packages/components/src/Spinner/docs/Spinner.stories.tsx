import { Div, type DivProps } from "@hopper-ui/styled-system";
import { Spinner } from "../src/Spinner.tsx";
import type { Meta, StoryObj } from "@storybook/react";

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
export default {
    component: Spinner,
    title: "Docs/Spinner",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    }
} as Meta<typeof Spinner>;

// TODO: use real layout component
const Inline = ({ alignY, ...props }: DivProps & { alignY?: string }) => <Div {...props} alignItems={alignY} display="flex" UNSAFE_gap="1.25rem" />;
Inline.displayName = "Inline";
type SpinnerStory = StoryObj<typeof Spinner>;

/**
 * A simple spinner.
 */
export const Default: SpinnerStory = {
    args: {
        "aria-label": "Loading…"
    }
};

/**
 * A spinner can vary in size.
 */
export const Size: SpinnerStory = {
    render: args => (
        <Inline alignY="end">
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
export const Label: SpinnerStory = {
    render: args => (
        <Inline alignY="end">
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
export const OverBackground: SpinnerStory = {
    render: args => (
        <Div backgroundColor="primary-strong" padding="inset-md">
            <Spinner color="core_samoyed" {...args} />
        </Div>
    ),
    args: {
        children: "Loading…"
    }
};

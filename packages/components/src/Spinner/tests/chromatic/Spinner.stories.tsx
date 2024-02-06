import { Div, type DivProps } from "@hopper-ui/styled-system";
import { Spinner } from "../../src/Spinner.tsx";
import type { Meta, StoryObj } from "@storybook/react";

export default {
    component: Spinner,
    title: "Components/Spinner",
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }

} as Meta<typeof Spinner>;

// TODO: use real layout component
const Inline = ({ alignY, ...props }: DivProps & { alignY?: string }) => <Div {...props} alignItems={alignY} display="flex" UNSAFE_gap="1.25rem" />;
const Stack = (props: DivProps) => <Div {...props} display="flex" flexDirection="column" UNSAFE_gap="1.25rem" />;
Stack.displayName = "Stack"; Inline.displayName = "Inline";

type SpinnerStory = StoryObj<typeof Spinner>;

export const Default: SpinnerStory = {
    render: args => (
        <Inline alignY="end">
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </Inline>
    ),
    args: {
        "aria-label": "Crawling in progress…"
    }
};

export const InheritColor: SpinnerStory = {
    render: args => (
        <Inline alignY="end" backgroundColor="primary-strong">
            <Spinner color="core_samoyed" aria-label="Crawling in progress…" {...args} />
            <Spinner color="core_samoyed" {...args}>Crawling in progress…</Spinner>
        </Inline>
    )
};

export const Styling: SpinnerStory = {
    render: args => (
        <Inline>
            <Spinner UNSAFE_color="red" {...args}>Crawling in progress…</Spinner>
            <Spinner className="border-red" aria-label="Crawling in progress…" {...args} />
            <Spinner style={{ border: "1px solid red" }} aria-label="Crawling in progress…" {...args} />
        </Inline>
    )
};

export const Zoom: SpinnerStory = {
    render: args => (
        <Stack>
            <Inline alignY="end" className="zoom-in">
                <Spinner size="sm" {...args} />
                <Spinner {...args} />
                <Spinner size="lg" {...args} />
            </Inline>
            <Inline alignY="end" className="zoom-out">
                <Spinner size="sm" {...args} />
                <Spinner {...args} />
                <Spinner size="lg" {...args} />
            </Inline>
        </Stack>
    ),
    args: {
        children: "Crawling in progress…"
    }
};

export const Label: SpinnerStory = {
    render: args => (
        <Inline alignY="end" >
            <Spinner size="sm" {...args} />
            <Spinner {...args} />
            <Spinner size="lg" {...args} />
        </Inline>
    ),
    args: {
        children: "Crawling in progress…"
    }
};

export const Overflow: SpinnerStory = {
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

import { SparklesIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { IconList } from "../../../IconList/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { Text } from "../../../Text/src/Text.tsx";
import { Chip } from "../../src/Chip.tsx";

const meta = {
    title: "Components/Chip",
    component: Chip
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral = {
    render: props => (
        <Div>
            <h1>Extra Small</h1>
            <Inline alignY="end">
                <Chip {...props} size="xs">
                    <Text>Default</Text>
                </Chip>
                <Chip {...props} size="xs">
                    <SparklesIcon />
                    <Text>Icon</Text>
                </Chip>
                <Chip {...props} size="xs">
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                    <Text>Icon List</Text>
                </Chip>
                <Chip {...props} size="xs">
                    <SparklesIcon slot="end-icon" />
                    <Text>End Icon</Text>
                </Chip>
                <Chip {...props} size="xs">
                    <IconList slot="end-icon">
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                    <Text>End Icon List</Text>
                </Chip>
            </Inline>
            <h1>Small</h1>
            <Inline alignY="end">
                <Chip {...props} size="sm">
                    <Text>Default</Text>
                </Chip>
                <Chip {...props} size="sm">
                    <SparklesIcon />
                    <Text>Icon</Text>
                </Chip>
                <Chip {...props} size="sm">
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                    <Text>Icon List</Text>
                </Chip>
                <Chip {...props} size="sm">
                    <SparklesIcon slot="end-icon" />
                    <Text>End Icon</Text>
                </Chip>
                <Chip {...props} size="sm">
                    <IconList slot="end-icon">
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                    <Text>End Icon List</Text>
                </Chip>
            </Inline>
            <h1>Medium</h1>
            <Inline alignY="end">
                <Chip {...props} size="md">
                    <Text>Default</Text>
                </Chip>
                <Chip {...props} size="md">
                    <SparklesIcon />
                    <Text>Icon</Text>
                </Chip>
                <Chip {...props} size="md">
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                    <Text>Icon List</Text>
                </Chip>
                <Chip {...props} size="md">
                    <SparklesIcon slot="end-icon" />
                    <Text>End Icon</Text>
                </Chip>
                <Chip {...props} size="md">
                    <IconList slot="end-icon">
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                    <Text>End Icon List</Text>
                </Chip>
            </Inline>
            <h1>Large</h1>
            <Inline alignY="end">
                <Chip {...props} size="lg">
                    <Text>Default</Text>
                </Chip>
                <Chip {...props} size="lg">
                    <SparklesIcon />
                    <Text>Icon</Text>
                </Chip>
                <Chip {...props} size="lg">
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                    <Text>Icon List</Text>
                </Chip>
                <Chip {...props} size="lg">
                    <SparklesIcon slot="end-icon" />
                    <Text>End Icon</Text>
                </Chip>
                <Chip {...props} size="lg">
                    <IconList slot="end-icon">
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                    <Text>End Icon List</Text>
                </Chip>
            </Inline>
            <h1>Zoom</h1>
            <Inline alignY="end">
                <Chip {...props} className="zoom-in">
                    <Text>Zoom in</Text>
                </Chip>
                <Chip {...props} className="zoom-out">
                    <Text>Zoom out</Text>
                </Chip>
            </Inline>
            <h1>Overflow</h1>
            <Inline alignY="end">
                <Chip {...props} style={{ maxWidth: "12rem" }}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum nisl quis augue blandit aliquet. </Text>
                </Chip>
                <Chip {...props} style={{ maxWidth: "12rem" }}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum nisl quis augue blandit aliquet. </Text>
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                </Chip>
                <Chip {...props} style={{ maxWidth: "12rem" }}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum nisl quis augue blandit aliquet. </Text>
                    <IconList slot="end-icon">
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                </Chip>
            </Inline>
            <h1>Styling</h1>
            <Stack>
                <Chip {...props} style={{ borderColor: "red" }}>
                    <Text>Custom style</Text>
                </Chip>
                <Chip {...props} style={{ width: "100%" }}>
                    <Text>Custom Width</Text>
                </Chip>
            </Stack>
        </Div>
    )
} satisfies Story;

export const Progress = {
    ...Neutral,
    args: {
        variant: "progress"
    }
} satisfies Story;

export const Positive = {
    ...Neutral,
    args: {
        variant: "positive"
    }
} satisfies Story;

export const Caution = {
    ...Neutral,
    args: {
        variant: "caution"
    }
} satisfies Story;

export const Negative = {
    ...Neutral,
    args: {
        variant: "negative"
    }
} satisfies Story;

export const Option1 = {
    ...Neutral,
    args: {
        variant: "option1"
    }
} satisfies Story;

export const Option2 = {
    ...Neutral,
    args: {
        variant: "option2"
    }
} satisfies Story;

export const Option3 = {
    ...Neutral,
    args: {
        variant: "option3"
    }
} satisfies Story;

export const Option4 = {
    ...Neutral,
    args: {
        variant: "option4"
    }
} satisfies Story;

export const Option5 = {
    ...Neutral,
    args: {
        variant: "option5"
    }
} satisfies Story;

export const Option6 = {
    ...Neutral,
    args: {
        variant: "option6"
    }
} satisfies Story;

export const Inactive = {
    ...Neutral,
    args: {
        variant: "inactive"
    }
} satisfies Story;

export const Disabled = {
    ...Neutral,
    args: {
        variant: "disabled"
    }
} satisfies Story;

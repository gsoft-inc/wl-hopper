import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";

import { IconList } from "../../IconList/index.ts";
import { Inline } from "../../layout/index.ts";
import { Text } from "../../Text/index.ts";
import { Chip } from "../src/Chip.tsx";

/**
 * Use Chip to label, categorize, or organize items using keywords that describe them.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Chip/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Chip",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Chip
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default Chip
 */
export const Default = {
    args: {
        children: "Default Chip"
    }
} satisfies Story;

/**
 * A Chip can be configured with a single icon, a list of icons, or even icons positioned at the end.
 */
export const Icons = {
    render: props => (
        <Inline>
            <Chip {...props}>
                <SparklesIcon />
                <Text>Chip with icon</Text>
            </Chip>
            <Chip {...props}>
                <IconList>
                    <SparklesIcon />
                    <SparklesIcon />
                    <SparklesIcon />
                </IconList>
                <Text>Chip with icons</Text>
            </Chip>
            <Chip {...props}>
                <SparklesIcon slot="end-icon" />
                <Text>Chip with end icon</Text>
            </Chip>
            <Chip {...props}>
                <IconList slot="end-icon">
                    <SparklesIcon />
                    <SparklesIcon />
                    <SparklesIcon />
                </IconList>
                <Text>Chip with end icons</Text>
            </Chip>
        </Inline>
    )
} satisfies Story;

/**
 * A Chip can vary in size.
 */
export const Size = {
    render: props => (
        <Inline>
            <Chip size="xs" {...props}>
                <Text>Extra Small Chip</Text>
            </Chip>
            <Chip size="sm" {...props}>
                <Text>Small Chip</Text>
            </Chip>
            <Chip size="md" {...props}>
                <Text>Medium Chip</Text>
            </Chip>
            <Chip size="lg" {...props}>
                <Text>Large Chip</Text>
            </Chip>
        </Inline>
    )
} satisfies Story;

/**
 * A Chip supports multiple variants.
 */
export const Variants = {
    render: props => (
        <Inline>
            <Chip variant="neutral" {...props}>
                <Text>Neutral</Text>
            </Chip>
            <Chip variant="progress" {...props}>
                <Text>Progress</Text>
            </Chip>
            <Chip variant="positive" {...props}>
                <Text>Positive</Text>
            </Chip>
            <Chip variant="caution" {...props}>
                <Text>Caution</Text>
            </Chip>
            <Chip variant="negative" {...props}>
                <Text>Negative</Text>
            </Chip>
            <Chip variant="option1" {...props}>
                <Text>Option 1</Text>
            </Chip>
            <Chip variant="option2" {...props}>
                <Text>Option 2</Text>
            </Chip>
            <Chip variant="option3" {...props}>
                <Text>Option 3</Text>
            </Chip>
            <Chip variant="option4" {...props}>
                <Text>Option 4</Text>
            </Chip>
            <Chip variant="option5" {...props}>
                <Text>Option 5</Text>
            </Chip>
            <Chip variant="option6" {...props}>
                <Text>Option 6</Text>
            </Chip>
            <Chip variant="inactive" {...props}>
                <Text>Inactive</Text>
            </Chip>
            <Chip variant="disabled" {...props}>
                <Text>Disabled</Text>
            </Chip>
        </Inline>
    )
} satisfies Story;


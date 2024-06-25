import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../layout/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { Divider } from "../src/Divider.tsx";

/**
 * The Divider component serves as a clear visual boundary, effectively separating and distinguishing different sections of content or groups within the layout. 
 * It aids in enhancing the user's comprehension of the interface's organization and flow.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Divider/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Divider",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Divider
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default Divider
 */
export const Default = {
} satisfies Story;

/**
 * A Divider can have two orientations: horizontal or vertical.
 */
export const Orientation = {
    render: args => {
        return (
            <Stack>
                <Stack>
                    <Text>Content above</Text>
                    <Divider {...args} orientation="horizontal" />
                    <Text>Content below</Text>
                </Stack>
                <Inline alignY="stretch">
                    <Text>Content left</Text>
                    <Divider {...args} orientation="vertical" />
                    <Text>Content right</Text>
                </Inline>
            </Stack>
        );
    }
} satisfies Story;

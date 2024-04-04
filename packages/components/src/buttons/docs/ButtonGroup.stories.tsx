import { Button } from "../src/Button.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "../src/ButtonGroup.tsx";
import { Stack } from "../../layout/index.ts";

/**
 * ButtonGroup handles the spacing and orientation for a grouping of buttons whose actions are related to each other.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Buttons/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Buttons/ButtonGroup",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: ButtonGroup,
    args: {
        children: [
            <Button key="1" variant="secondary">No, thanks</Button>,
            <Button key="2" variant="secondary">Remind me later</Button>,
            <Button key="3" variant="primary">Rate Now</Button>
        ]
    }
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Buttons whose actions are related to each other can be grouped together.
 */
export const Default: Story = {
};

/**
 * A button group can render his items vertically.
 */
export const Orientation: Story = {
    args:{
        orientation: "vertical"
    }
};

/**
 * A button group can change the alignment of his items.
 */
export const Alignment: Story = {
    args:{
        align: "end"
    }
};

/**
 * A button group can be disabled.
 */
export const Disabled: Story = {
    args:{
        isDisabled: true
    }
};

/**
 * A button group can be fluid.
 */
export const Fluid: Story = {
    args:{
        fluid: true
    }
};

/**
 * A button group can be of different sizes.
 */
export const Sizes: Story = {
    render: args => (
        <Stack>
            <ButtonGroup size="sm" {...args} />
            <ButtonGroup {...args} />
        </Stack>
    )
};

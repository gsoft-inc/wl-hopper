import { SearchIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "../../errorMessage/index.ts";
import { HelperMessage } from "../../helperMessage/index.ts";
import { Stack } from "../../layout/index.ts";
import { Label } from "../../typography/index.ts";
import { NumberField } from "../src/NumberField.tsx";

/**
 * A Number Field enables users to input numbers directly or navigate through them using arrow buttons, 
 * serving as a refined iteration of the TextField component.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/NumberField/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/NumberField",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: NumberField,
    args: {
        placeholder: "Placeholder",
        children: [
            <Label key="1">NumberField Label</Label>
        ]
    }
} satisfies Meta<typeof NumberField>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 *
 */
export const Default: Story = {
    render: args => (
        <Stack>
            <NumberField size="sm" {...args} />
            <NumberField {...args} />
        </Stack>
    )
};

/**
 * If a visible label isn't specified, an aria-label must be provided to the NumberField for accessibility. If the field is labeled by a separate element, an aria-labelledby prop must be provided using the id of the labeling element instead.
 */
export const Labeling: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [],
        "aria-label": "Label"
    }
};

/**
 * An icon can be displayed at the start of the input.
 */
export const PrefixIcon: Story = {
    ...Default,
    args: {
        ...Default.args,
        prefix: <SearchIcon />
    }
};

/**
 * A short text can be displayed at the start of the input.
 */
export const PrefixText: Story = {
    ...Default,
    args: {
        ...Default.args,
        prefix: "$"
    }
};

/**
 * A min a max value can be set for the number field.
 */
export const MinAndMax: Story = {
    ...Default,
    args: {
        ...Default.args,
        minValue: 0,
        maxValue: 50
    }
};

/**
 * A number field with a helper message.
 */
export const Description: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [
            ...meta.args.children,
            <HelperMessage key="2">Helper message</HelperMessage>
        ]
    }
};

/**
 * A number field can take of the full with of it's container by setting the `isFluid` prop to `true`.
 */
export const Fluid: Story = {
    ...Description,
    args: {
        ...Description.args,
        isFluid: true
    }
};

/**
 * A number field with an error message.
 */
export const Error: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [
            ...meta.args.children,
            <ErrorMessage key="2">Error message</ErrorMessage>
        ],
        isInvalid: true
    }
};

/**
 * A number field in a disabled state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a field may become available later.
 */
export const Disabled: Story = {
    ...Default,
    args: {
        ...Default.args,
        isDisabled: true
    }
};

/**
 * * The `isReadOnly` prop makes the NumberField's text content immutable. Unlike `isDisabled`, the NumberField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.
 */
export const ReadOnly: Story = {
    ...Default,
    args: {
        isReadOnly: true
    }
};

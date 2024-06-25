import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "../../ErrorMessage/index.ts";
import { HelperMessage } from "../../HelperMessage/index.ts";
import { Stack } from "../../layout/index.ts";
import { Label } from "../../typography/index.ts";
import { SearchField } from "../src/SearchField.tsx";

/**
 * A specialized text input for [search input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search).
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/inputs/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/SearchField",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: SearchField,
    args: {
        placeholder: "Placeholder",
        children: [
            <Label key="1">SearchField Label</Label>
        ]
    }
} satisfies Meta<typeof SearchField>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default search field.
 */
export const Default: Story = {
    render: args => (
        <Stack>
            <SearchField size="sm" {...args} />
            <SearchField {...args} />
        </Stack>
    )
};

/**
 * If a visible label isn't specified, an aria-label must be provided to the SearchField for accessibility. If the field is labeled by a separate element, an aria-labelledby prop must be provided using the id of the labeling element instead.
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
 * A search field can hide it's clear button.
 */
export const HideClearButton: Story = {
    ...Default,
    args: {
        ...Default.args,
        isClearable: false
    }
};

/**
 * A search field with a helper message.
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
 * A search field with an error message.
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
 * A search field in a disabled state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a field may become available later.
 */
export const Disabled: Story = {
    ...Default,
    args: {
        ...Default.args,
        isDisabled: true
    }
};

/**
 * * The `isReadOnly` prop makes the SearchField's text content immutable. Unlike `isDisabled`, the SearchField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.
 */
export const ReadOnly: Story = {
    ...Default,
    args: {
        isReadOnly: true
    }
};

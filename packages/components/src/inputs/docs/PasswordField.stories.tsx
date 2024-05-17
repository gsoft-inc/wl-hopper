import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "../../errorMessage/index.ts";
import { HelperMessage } from "../../helperMessage/index.ts";
import { Label } from "../../Label/index.ts";
import { Stack } from "../../layout/index.ts";
import { PasswordField } from "../src/PasswordField.tsx";

/**
 * A specialized text field which show / hide a password.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/inputs/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/PasswordField",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: PasswordField,
    decorators: [
        Story => (
            <form>
                <Story />
            </form>
        )
    ],
    args: {
        placeholder: "Placeholder",
        children: [
            <Label key="1">Password:</Label>
        ]
    }
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default password field.
 */
export const Default: Story = {
    render: args => (
        <Stack>
            <PasswordField size="sm" {...args} />
            <PasswordField {...args} />
        </Stack>
    )
};

/**
 * If a visible label isn't specified, an aria-label must be provided to the PasswordField for accessibility. If the field is labeled by a separate element, an aria-labelledby prop must be provided using the id of the labeling element instead.
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
 * A password field with a helper message.
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
 * A password field with an error message.
 */
export const Validation: Story = {
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
 * A password field in a disabled state shows that an input field exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that a field may become available later.
 */
export const Disabled: Story = {
    ...Default,
    args: {
        ...Default.args,
        isDisabled: true
    }
};

/**
 * The `isReadOnly` prop makes the PasswordField's text content immutable. Unlike isDisabled, the PasswordField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.
 */
export const ReadOnly: Story = {
    ...Default,
    args: {
        isReadOnly: true
    }
};



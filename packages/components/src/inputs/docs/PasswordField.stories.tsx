import { AngleDownIcon, DismissIcon, EyeHiddenIcon, EyeVisibleIcon, SearchIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ErrorMessage } from "../../errorMessage/index.ts";
import { HelperMessage } from "../../helperMessage/index.ts";
import { Label } from "../../Label/index.ts";
import { Stack } from "../../layout/index.ts";
import { PasswordField } from "../src/PasswordField.tsx";

/**
 * TODO: Add description
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/TextField/src)
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
    args: {
        placeholder: "Placeholder",
        children: [
            <Label key="1">PasswordField Label</Label>
        ]
    }
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: args => (
        <Stack>
            <PasswordField size="sm" {...args} />
            <PasswordField {...args} />
        </Stack>
    )
};

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

export const Disabled: Story = {
    ...Default,
    args: {
        ...Default.args,
        isDisabled: true
    }
};

export const ReadOnly: Story = {
    ...Default,
    args: {
        isReadOnly: true
    }
};

import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { Label, Text } from "../../../typography/index.ts";
import { CheckboxField } from "../../src/CheckboxField.tsx";

const meta = {
    title: "Components/Forms/CheckboxField",
    component: CheckboxField
} satisfies Meta<typeof CheckboxField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: props => (
        <Inline alignY="end">
            <CheckboxField {...props} size="sm">
                <Label>
                    Option 1
                </Label>
                <Text slot="description">Description</Text>
            </CheckboxField>
            <CheckboxField {...props} size="md">
                <Label>
                    Option 1
                </Label>
                <Text slot="description">Description</Text>
            </CheckboxField>
        </Inline>
    )
};

export const Validation: Story = {
    render: props => (
        <Inline alignY="end">
            <CheckboxField {...props} size="sm" isInvalid>
                <Label>
                    Option 1
                </Label>
                <Text slot="description">Description</Text>
            </CheckboxField>
            <CheckboxField {...props} size="md" isInvalid>
                <Label>
                    Option 1
                </Label>
                <Text slot="description">Description</Text>
            </CheckboxField>
        </Inline>
    )
};

export const Disabled: Story = {
    render: props => (
        <Inline alignY="end">
            <CheckboxField {...props} size="sm" isDisabled>
                <Label>
                    Option 1
                </Label>
                <Text slot="description">Description</Text>
            </CheckboxField>
            <CheckboxField {...props} size="md" isDisabled>
                <Label>
                    Option 1
                </Label>
                <Text slot="description">Description</Text>
            </CheckboxField>
        </Inline>
    )
};

export const Zoom: Story = {
    render: props => (
        <Stack>
            <Inline alignY="end">
                <CheckboxField {...props} size="sm" className="zoom-in">
                    <Label>
                        Option 1
                    </Label>
                    <Text slot="description">Description</Text>
                </CheckboxField>
                <CheckboxField {...props} size="md" className="zoom-in">
                    <Label>
                        Option 1
                    </Label>
                    <Text slot="description">Description</Text>
                </CheckboxField>
            </Inline>
            <Inline alignY="end">
                <CheckboxField {...props} size="sm" className="zoom-out">
                    <Label>
                        Option 1
                    </Label>
                    <Text slot="description">Description</Text>
                </CheckboxField>
                <CheckboxField {...props} size="md" className="zoom-out">
                    <Label>
                        Option 1
                    </Label>
                    <Text slot="description">Description</Text>
                </CheckboxField>
            </Inline>
        </Stack>
    )
};

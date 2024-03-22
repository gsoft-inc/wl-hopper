import { CheckboxField } from "../../src/CheckboxField.tsx";
import { Checkbox } from "../../src/Checkbox.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../Text/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";

const meta = {
    title: "Components/Checkbox/CheckboxField",
    component: CheckboxField
} satisfies Meta<typeof CheckboxField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: props => (
        <Inline alignY="end">
            <CheckboxField {...props} size="sm">
                <Checkbox>
                    <Text>Option 1</Text>
                </Checkbox>
                <Text slot="description">Description</Text>
            </CheckboxField>
            <CheckboxField {...props} size="md">
                <Checkbox>
                    <Text>Option 1</Text>
                </Checkbox>
                <Text slot="description">Description</Text>
            </CheckboxField>
        </Inline>
    )
};

export const Validation: Story = {
    render: props => (
        <Inline alignY="end">
            <CheckboxField {...props} size="sm">
                <Checkbox isInvalid>
                    <Text>Option 1</Text>
                </Checkbox>
                <Text slot="description">Description</Text>
            </CheckboxField>
            <CheckboxField {...props} size="md">
                <Checkbox isInvalid>
                    <Text>Option 1</Text>
                </Checkbox>
                <Text slot="description">Description</Text>
            </CheckboxField>
        </Inline>
    )
};

export const States: Story = {
    render: props => (
        <Stack>
            <h1>Disabled</h1>
            <Inline alignY="end">
                <CheckboxField {...props} size="sm" isDisabled>
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxField>
                <CheckboxField {...props} size="md" isDisabled>
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxField>
            </Inline>
        </Stack>
    )
};

export const Zoom: Story = {
    render: props => (
        <Stack>
            <Inline alignY="end">
                <CheckboxField {...props} size="sm" className="zoom-in">
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxField>
                <CheckboxField {...props} size="md" className="zoom-in">
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxField>
            </Inline>
            <Inline alignY="end">
                <CheckboxField {...props} size="sm" className="zoom-out">
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxField>
                <CheckboxField {...props} size="md" className="zoom-out">
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxField>
            </Inline>
        </Stack>
    )
};

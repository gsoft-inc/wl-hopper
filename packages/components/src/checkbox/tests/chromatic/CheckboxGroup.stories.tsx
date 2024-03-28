import { CheckboxGroup } from "../../src/CheckboxGroup.tsx";
import { Checkbox } from "../../src/Checkbox.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../Text/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";

const meta = {
    title: "Components/Checkbox/CheckboxGroup",
    component: CheckboxGroup
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: props => (
        <Inline alignY="end">
            <CheckboxGroup {...props} size="sm">
                <Checkbox>
                    <Text>Option 1</Text>
                </Checkbox>
                <Text slot="description">Description</Text>
            </CheckboxGroup>
            <CheckboxGroup {...props} size="md">
                <Checkbox>
                    <Text>Option 1</Text>
                </Checkbox>
                <Text slot="description">Description</Text>
            </CheckboxGroup>
        </Inline>
    )
};

export const Validation: Story = {
    render: props => (
        <Inline alignY="end">
            <CheckboxGroup {...props} size="sm">
                <Checkbox isInvalid>
                    <Text>Option 1</Text>
                </Checkbox>
                <Text slot="description">Description</Text>
            </CheckboxGroup>
            <CheckboxGroup {...props} size="md">
                <Checkbox isInvalid>
                    <Text>Option 1</Text>
                </Checkbox>
                <Text slot="description">Description</Text>
            </CheckboxGroup>
        </Inline>
    )
};

export const States: Story = {
    render: props => (
        <Stack>
            <h1>Disabled</h1>
            <Inline alignY="end">
                <CheckboxGroup {...props} size="sm" isDisabled>
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" isDisabled>
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxGroup>
            </Inline>
        </Stack>
    )
};

export const Zoom: Story = {
    render: props => (
        <Stack>
            <Inline alignY="end">
                <CheckboxGroup {...props} size="sm" className="zoom-in">
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" className="zoom-in">
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxGroup>
            </Inline>
            <Inline alignY="end">
                <CheckboxGroup {...props} size="sm" className="zoom-out">
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" className="zoom-out">
                    <Checkbox>
                        <Text>Option 1</Text>
                    </Checkbox>
                    <Text slot="description">Description</Text>
                </CheckboxGroup>
            </Inline>
        </Stack>
    )
};

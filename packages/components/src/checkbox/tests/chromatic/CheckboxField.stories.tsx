import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { Text } from "../../../typography/Text/index.ts";
import { Checkbox } from "../../src/Checkbox.tsx";
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

export const Disabled: Story = {
    render: props => (
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

export const AccessToDisabledState: Story = {
    render: props => (
        <Inline alignY="end">
            <CheckboxField {...props} isDisabled>
                {({ isDisabled }) => (
                    <>
                        <Checkbox>
                            <Text>Value should be true</Text>
                        </Checkbox>
                        <Text slot="description">Is disabled: {String(isDisabled)}</Text>
                    </>
                )}
            </CheckboxField>
            <CheckboxField
                {...props}
                isDisabled
                style={({ isDisabled }) => isDisabled ? { border: "1px solid red" } : {}}
            >
                <Checkbox>
                    <Text>Disabled</Text>
                </Checkbox>
                <Text slot="description">Border should be red</Text>
            </CheckboxField>
        </Inline>
    )
};

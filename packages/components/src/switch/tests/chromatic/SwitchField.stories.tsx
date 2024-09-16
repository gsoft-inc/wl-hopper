import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { Text } from "../../../typography/Text/index.ts";
import { Switch } from "../../src/Switch.tsx";
import { SwitchField } from "../../src/SwitchField.tsx";

const meta = {
    title: "Components/Forms/SwitchField",
    component: SwitchField
} satisfies Meta<typeof SwitchField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: props => (
        <Inline alignY="end">
            <SwitchField {...props} size="sm">
                <Switch>
                    <Text>Option 1</Text>
                </Switch>
                <Text slot="description">Description</Text>
            </SwitchField>
            <SwitchField {...props} size="md">
                <Switch>
                    <Text>Option 1</Text>
                </Switch>
                <Text slot="description">Description</Text>
            </SwitchField>
        </Inline>
    )
};

export const Disabled: Story = {
    render: props => (
        <Inline alignY="end">
            <SwitchField {...props} size="sm" isDisabled>
                <Switch>
                    <Text>Option 1</Text>
                </Switch>
                <Text slot="description">Description</Text>
            </SwitchField>
            <SwitchField {...props} size="md" isDisabled>
                <Switch>
                    <Text>Option 1</Text>
                </Switch>
                <Text slot="description">Description</Text>
            </SwitchField>
        </Inline>
    )
};

export const Zoom: Story = {
    render: props => (
        <Stack>
            <Inline alignY="end">
                <SwitchField {...props} size="sm" className="zoom-in">
                    <Switch>
                        <Text>Option 1</Text>
                    </Switch>
                    <Text slot="description">Description</Text>
                </SwitchField>
                <SwitchField {...props} size="md" className="zoom-in">
                    <Switch>
                        <Text>Option 1</Text>
                    </Switch>
                    <Text slot="description">Description</Text>
                </SwitchField>
            </Inline>
            <Inline alignY="end">
                <SwitchField {...props} size="sm" className="zoom-out">
                    <Switch>
                        <Text>Option 1</Text>
                    </Switch>
                    <Text slot="description">Description</Text>
                </SwitchField>
                <SwitchField {...props} size="md" className="zoom-out">
                    <Switch>
                        <Text>Option 1</Text>
                    </Switch>
                    <Text slot="description">Description</Text>
                </SwitchField>
            </Inline>
        </Stack>
    )
};

export const AccessToDisabledState: Story = {
    render: props => (
        <Inline alignY="end">
            <SwitchField {...props} size="sm" isDisabled>
                {({ isDisabled }) => (
                    <>
                        <Switch>
                            <Text>Should be true</Text>
                        </Switch>
                        <Text slot="description">Is disabled: {String(isDisabled)}</Text>
                    </>
                )}
            </SwitchField>
            <SwitchField
                {...props}
                size="sm"
                isDisabled
                style={({ isDisabled }) => isDisabled ? { border: "1px solid red" } : {}}
            >
                <Switch>
                    <Text>Disable and red border</Text>
                </Switch>
                <Text slot="description">Border should be red</Text>
            </SwitchField>
        </Inline>
    )
};

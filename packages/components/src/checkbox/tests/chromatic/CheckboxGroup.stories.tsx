import { CheckboxGroup } from "../../src/CheckboxGroup.tsx";
import { Checkbox } from "../../src/Checkbox.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../Text/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { CheckboxField } from "../../src/CheckboxField.tsx";
import { Label } from "../../../Label/index.ts";
import { HelperMessage } from "../../../helperMessage/index.ts";
import { ErrorMessage } from "../../../errorMessage/index.ts";
import { CheckboxList } from "../../src/CheckboxList.tsx";

const meta = {
    title: "Components/Checkbox/CheckboxGroup",
    component: CheckboxGroup
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical = {
    render: props => (
        <Stack>
            <h1>Default</h1>
            <CheckboxGroup {...props}>
                <Label>Roles</Label>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                    <CheckboxField>
                        <Checkbox value="manager">PO</Checkbox>
                        <Text slot="description">Product Owner</Text>
                    </CheckboxField>
                    <Checkbox value="manager">Manager</Checkbox>
                </CheckboxList>
                <HelperMessage hideInfoIcon>Select one to continue</HelperMessage>
            </CheckboxGroup>
            <h1>Checked</h1>
            <CheckboxGroup {...props} defaultValue={["developer", "designer", "manager"]}>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                    <Checkbox value="manager">Manager</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <h1>Size</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm">
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md">
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
            </Inline>
            <h1>Disabled</h1>
            <CheckboxGroup {...props} isDisabled>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                    <Checkbox value="manager">Manager</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <h1>Invalid</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm" isInvalid>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                    <ErrorMessage hideWarningIcon>This field is required</ErrorMessage>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" isInvalid>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                    <ErrorMessage hideWarningIcon>This field is required</ErrorMessage>
                </CheckboxGroup>
            </Inline>
            <h1>Invalid & Disabled</h1>
            <CheckboxGroup {...props} isDisabled isInvalid>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                    <Checkbox value="manager">Manager</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <h1>Bordered</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm" variant="bordered">
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" variant="bordered">
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
            </Inline>
            <h1>Bordered & Invalid</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm" variant="bordered" isInvalid>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                    <ErrorMessage hideWarningIcon>This field is required</ErrorMessage>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" variant="bordered" isInvalid>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                    <ErrorMessage hideWarningIcon>This field is required</ErrorMessage>
                </CheckboxGroup>
            </Inline>
            <h1>Styling</h1>
            <Inline>
                <CheckboxGroup border="warning-strong">
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                </CheckboxGroup>
                <CheckboxGroup className="bg-red">
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                </CheckboxGroup>
                <CheckboxGroup style={{ backgroundColor: "red" }}>
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                </CheckboxGroup>
            </Inline>
            <h1>Zoom</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} className="zoom-in">
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
                <CheckboxGroup {...props} className="zoom-out">
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
            </Inline>
        </Stack>
    ),
    args: {
        orientation: "vertical"
    }
} satisfies Story;


export const Horizontal = {
    ...Vertical,
    args: {
        orientation: "horizontal"
    }
} satisfies Story;
import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "../../../errorMessage/index.ts";
import { HelperMessage } from "../../../helperMessage/index.ts";
import { Label } from "../../../Label/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { Text } from "../../../Text/index.ts";
import { Checkbox } from "../../src/Checkbox.tsx";
import { CheckboxField } from "../../src/CheckboxField.tsx";
import { CheckboxGroup } from "../../src/CheckboxGroup.tsx";
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
                <HelperMessage>Select one to continue</HelperMessage>
            </CheckboxGroup>
            <h1>Checked</h1>
            <CheckboxGroup {...props} defaultValue={["developer", "designer", "manager"]}>
                <Label>Roles</Label>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                    <Checkbox value="manager">Manager</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <h1>Size</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm">
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md">
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
            </Inline>
            <h1>Disabled</h1>
            <CheckboxGroup {...props} isDisabled>
                <Label>Roles</Label>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                    <Checkbox value="manager">Manager</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <h1>Invalid</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm" isInvalid>
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                    <ErrorMessage>This field is required</ErrorMessage>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" isInvalid>
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                    <ErrorMessage>This field is required</ErrorMessage>
                </CheckboxGroup>
            </Inline>
            <h1>Invalid & Disabled</h1>
            <CheckboxGroup {...props} isDisabled isInvalid>
                <Label>Roles</Label>
                <CheckboxList>
                    <Checkbox value="developer">Developer</Checkbox>
                    <Checkbox value="designer">Designer</Checkbox>
                    <Checkbox value="manager">Manager</Checkbox>
                </CheckboxList>
            </CheckboxGroup>
            <h1>Bordered</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm" variant="bordered">
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" variant="bordered">
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
            </Inline>
            <h1>Bordered with Description</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm" variant="bordered">
                    <Label>Roles</Label>
                    <CheckboxList>
                        <CheckboxField>
                            <Checkbox value="developer">Developer</Checkbox>
                            <Text slot="description">Team Lead</Text>
                        </CheckboxField>
                        <Checkbox value="designer">Designer</Checkbox>
                        <CheckboxField>
                            <Checkbox value="manager">Manager</Checkbox>
                            <Text slot="description">Team Manager</Text>
                        </CheckboxField>
                    </CheckboxList>
                    <HelperMessage>Select one to continue</HelperMessage>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" variant="bordered">
                    <Label>Roles</Label>
                    <CheckboxList>
                        <CheckboxField>
                            <Checkbox value="developer">Developer</Checkbox>
                            <Text slot="description">Team Lead</Text>
                        </CheckboxField>
                        <Checkbox value="designer">Designer</Checkbox>
                        <CheckboxField>
                            <Checkbox value="manager">Manager</Checkbox>
                            <Text slot="description">Team Manager</Text>
                        </CheckboxField>
                    </CheckboxList>
                    <HelperMessage>Select one to continue</HelperMessage>
                </CheckboxGroup>
            </Inline>
            <h1>Bordered & Invalid</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} size="sm" variant="bordered" isInvalid>
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                    <ErrorMessage>This field is required</ErrorMessage>
                </CheckboxGroup>
                <CheckboxGroup {...props} size="md" variant="bordered" isInvalid>
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                    <ErrorMessage>This field is required</ErrorMessage>
                </CheckboxGroup>
            </Inline>
            <h1>Styling</h1>
            <Inline>
                <CheckboxGroup border="warning-strong">
                    <Label>Numbers</Label>
                    <CheckboxList>
                        <Checkbox value="1">1</Checkbox>
                        <Checkbox value="2">2</Checkbox>
                        <Checkbox value="3">3</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
                <CheckboxGroup className="bg-red">
                    <Label>Numbers</Label>
                    <CheckboxList>
                        <Checkbox value="1">1</Checkbox>
                        <Checkbox value="2">2</Checkbox>
                        <Checkbox value="3">3</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
                <CheckboxGroup style={{ backgroundColor: "red" }}>
                    <Label>Numbers</Label>
                    <CheckboxList>
                        <Checkbox value="1">1</Checkbox>
                        <Checkbox value="2">2</Checkbox>
                        <Checkbox value="3">3</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
            </Inline>
            <h1>Zoom</h1>
            <Inline alignY="start">
                <CheckboxGroup {...props} className="zoom-in">
                    <Label>Roles</Label>
                    <CheckboxList>
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="manager">Manager</Checkbox>
                    </CheckboxList>
                </CheckboxGroup>
                <CheckboxGroup {...props} className="zoom-out">
                    <Label>Roles</Label>
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
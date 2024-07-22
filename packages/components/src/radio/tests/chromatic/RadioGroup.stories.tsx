import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "../../../ErrorMessage/index.ts";
import { HelperMessage } from "../../../HelperMessage/index.ts";
import { IconList } from "../../../IconList/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { Label } from "../../../typography/Label/index.ts";
import { Text } from "../../../typography/Text/index.ts";
import { Radio } from "../../src/Radio.tsx";
import { RadioField } from "../../src/RadioField.tsx";
import { RadioGroup } from "../../src/RadioGroup.tsx";
import { RadioList } from "../../src/RadioList.tsx";

const meta = {
    title: "Components/Form/RadioGroup",
    component: RadioGroup
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical = {
    render: props => (
        <Stack>
            <h1>Default</h1>
            <RadioGroup {...props}>
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer">Developer</Radio>
                    <Radio value="designer">Designer</Radio>
                    <RadioField>
                        <Radio value="po">PO</Radio>
                        <Text slot="description">Product Owner</Text>
                    </RadioField>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
                <HelperMessage>Select one to continue</HelperMessage>
            </RadioGroup>
            <h1>Selected</h1>
            <RadioGroup {...props} defaultValue="developer">
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer">Developer</Radio>
                    <Radio value="designer">Designer</Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
            </RadioGroup>
            <h1>Size</h1>
            <Inline alignY="start">
                <RadioGroup {...props} size="sm">
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                </RadioGroup>
                <RadioGroup {...props} size="md">
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                </RadioGroup>
            </Inline>
            <h1>Icons</h1>
            <RadioGroup {...props}>
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer"><SparklesIcon /><Text>Developer</Text></Radio>
                    <Radio value="designer">
                        <Text>Designer</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Radio>
                    <RadioField>
                        <Radio value="manager">
                            <Text>Manager</Text>
                            <IconList>
                                <SparklesIcon /><SparklesIcon />
                            </IconList></Radio>
                        <Text slot="description">Team Manager</Text>
                    </RadioField>
                </RadioList>
                <HelperMessage>Select one to continue</HelperMessage>
            </RadioGroup>
            <h1>Disabled</h1>
            <RadioGroup {...props} isDisabled>
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer">Developer</Radio>
                    <Radio value="designer">Designer</Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
            </RadioGroup>
            <h1>Invalid</h1>
            <Inline alignY="start">
                <RadioGroup {...props} size="sm" isInvalid>
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                    <ErrorMessage>This field is required</ErrorMessage>
                </RadioGroup>
                <RadioGroup {...props} size="md" isInvalid>
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                    <ErrorMessage>This field is required</ErrorMessage>
                </RadioGroup>
            </Inline>
            <h1>Invalid & Disabled</h1>
            <RadioGroup {...props} isDisabled isInvalid>
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer">Developer</Radio>
                    <Radio value="designer">Designer</Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
            </RadioGroup>
            <h1>Bordered</h1>
            <Inline alignY="start">
                <RadioGroup {...props} size="sm" variant="bordered">
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                </RadioGroup>
                <RadioGroup {...props} size="md" variant="bordered">
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                </RadioGroup>
            </Inline>
            <h1>Bordered with Description</h1>
            <Inline alignY="start">
                <RadioGroup {...props} size="sm" variant="bordered">
                    <Label>Roles</Label>
                    <RadioList>
                        <RadioField>
                            <Radio value="developer">Developer</Radio>
                            <Text slot="description">Team Lead</Text>
                        </RadioField>
                        <Radio value="designer">Designer</Radio>
                        <RadioField>
                            <Radio value="manager">Manager</Radio>
                            <Text slot="description">Team Manager</Text>
                        </RadioField>
                    </RadioList>
                    <HelperMessage>Select one to continue</HelperMessage>
                </RadioGroup>
                <RadioGroup {...props} size="md" variant="bordered">
                    <Label>Roles</Label>
                    <RadioList>
                        <RadioField>
                            <Radio value="developer">Developer</Radio>
                            <Text slot="description">Team Lead</Text>
                        </RadioField>
                        <Radio value="designer">Designer</Radio>
                        <RadioField>
                            <Radio value="manager">Manager</Radio>
                            <Text slot="description">Team Manager</Text>
                        </RadioField>
                    </RadioList>
                    <HelperMessage>Select one to continue</HelperMessage>
                </RadioGroup>
            </Inline>
            <h1>Bordered & Invalid</h1>
            <Inline alignY="start">
                <RadioGroup {...props} size="sm" variant="bordered" isInvalid>
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                    <ErrorMessage>This field is required</ErrorMessage>
                </RadioGroup>
                <RadioGroup {...props} size="md" variant="bordered" isInvalid>
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                    <ErrorMessage>This field is required</ErrorMessage>
                </RadioGroup>
            </Inline>
            <h1>Styling</h1>
            <Inline>
                <RadioGroup border="warning">
                    <Label>Numbers</Label>
                    <RadioList>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                    </RadioList>
                </RadioGroup>
                <RadioGroup className="border-blue">
                    <Label>Numbers</Label>
                    <RadioList>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                    </RadioList>
                </RadioGroup>
                <RadioGroup style={{ border: "1px solid red" }}>
                    <Label>Numbers</Label>
                    <RadioList>
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                    </RadioList>
                </RadioGroup>
            </Inline>
            <h1>Zoom</h1>
            <Inline alignY="start">
                <RadioGroup {...props} className="zoom-in">
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                </RadioGroup>
                <RadioGroup {...props} className="zoom-out">
                    <Label>Roles</Label>
                    <RadioList>
                        <Radio value="developer">Developer</Radio>
                        <Radio value="designer">Designer</Radio>
                        <Radio value="manager">Manager</Radio>
                    </RadioList>
                </RadioGroup>
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

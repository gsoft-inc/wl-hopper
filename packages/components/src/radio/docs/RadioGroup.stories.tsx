import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ErrorMessage } from "../../errorMessage/index.ts";
import { HelperMessage } from "../../helperMessage/index.ts";
import { IconList } from "../../IconList/index.ts";
import { Inline } from "../../layout/index.ts";
import { Label } from "../../typography/Label/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { Radio } from "../src/Radio.tsx";
import { RadioField } from "../src/RadioField.tsx";
import { RadioGroup } from "../src/RadioGroup.tsx";
import { RadioList } from "../src/RadioList.tsx";

/**
 * The RadioGroup is used to group related options together and to provide a label for the group. It can also provide validation and helper messages.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Radio/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Radio/RadioGroup",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: RadioGroup
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default RadioGroup.
 */
export const Default = {
    render: props => (
        <RadioGroup {...props}>
            <RadioList>
                <Radio value="developer">Developer</Radio>
                <Radio value="designer">Designer</Radio>
                <RadioField>
                    <Radio value="manager">Manager</Radio>
                    <Text slot="description">Team Manager</Text>
                </RadioField>
            </RadioList>
        </RadioGroup>
    ),
    args: {
        defaultValue: "developer",
        "aria-label": "Roles"
    }
} satisfies Story;

/**
 * A RadioGroup can have a Label to provide more context to the user.
 */
export const LabelStory = {
    name: "Label",
    render: props => (
        <RadioGroup {...props}>
            <RadioList>
                <Radio value="developer">Developer</Radio>
                <Radio value="designer">Designer</Radio>
                <Radio value="manager">Manager</Radio>
            </RadioList>
            <Label>Roles</Label>
        </RadioGroup>
    )
} satisfies Story;

/**
 * A RadioGroup can have a description to provide more information to the user.
 */
export const Description = {
    render: props => (
        <RadioGroup {...props}>
            <Label>Roles</Label>
            <RadioList>
                <Radio value="developer">Developer</Radio>
                <Radio value="designer">Designer</Radio>
                <RadioField>
                    <Radio value="manager">Manager</Radio>
                    <Text slot="description">Team Manager</Text>
                </RadioField>
            </RadioList>
            <HelperMessage>Select one to continue</HelperMessage>
        </RadioGroup>
    )
} satisfies Story;

/**
 * Each Radio can be customized with an icon or an icon list.
 */
export const Icons = {
    render: props => (
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
                    <Radio value="manager">Manager</Radio>
                    <Text slot="description">Team Manager</Text>
                </RadioField>
            </RadioList>
            <HelperMessage>Select one to continue</HelperMessage>
        </RadioGroup>
    )
} satisfies Story;

/**
 * A RadioGroup differs in appearance based on the size prop.
 */
export const Size = {
    render: props => (
        <Inline alignY="start">
            <RadioGroup {...props} size="sm">
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer"><SparklesIcon /><Text>Developer</Text></Radio>
                    <Radio value="designer">
                        <Text>Designer</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
                <HelperMessage>Select one to continue</HelperMessage>
            </RadioGroup>
            <RadioGroup {...props} size="md">
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer"><SparklesIcon /><Text>Developer</Text></Radio>
                    <Radio value="designer">
                        <Text>Designer</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
                <HelperMessage>Select one to continue</HelperMessage>
            </RadioGroup>
        </Inline>
    )
} satisfies Story;

/**
 * A RadioGroup can be `bordered` by using the `variant` prop.
 */
export const Bordered = {
    ...Description,
    args: {
        variant: "bordered"
    }
} satisfies Story;


/**
 * If a RadioGroup is invalid, it will display an error message. Displaying this error message will hide the helper message.
 */
export const Validation = {
    args: {
        isInvalid: true
    },
    render: function Render(args) {
        const [isInvalid, setIsInvalid] = useState(args.isInvalid);

        function onChange(value: string) {
            // if value is empty, then it is invalid
            setIsInvalid(value.length === 0);
        }

        return (
            <RadioGroup {...args} onChange={onChange} isInvalid={isInvalid}>
                <HelperMessage>These are all excellent roles</HelperMessage>
                <ErrorMessage>Check this box and the description will appear</ErrorMessage>
                <RadioList>
                    <Radio value="developer">Developer</Radio>
                    <Radio value="designer">Designer</Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
                <Label>Roles</Label>
            </RadioGroup>
        );
    }
} satisfies Story;

/**
 * A RadioGroup can have a responsive orientation. Resize your window to see the orientation change.
 */
export const ResponsiveOrientation = {
    ...Description,
    args: {
        orientation: { base: "vertical", sm: "horizontal" }
    }
} satisfies Story;

/**
 * Either an entire RadioGroup or each individual radio can be disabled.
 */
export const Disabled = {
    render: props => (
        <Inline alignY="start">
            <RadioGroup {...props} isDisabled size="sm">
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer"><SparklesIcon /><Text>Developer</Text></Radio>
                    <Radio value="designer">
                        <Text>Designer</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
                <HelperMessage>Select one to continue</HelperMessage>
            </RadioGroup>
            <RadioGroup {...props} size="md">
                <Label>Roles</Label>
                <RadioList>
                    <Radio value="developer" isDisabled><SparklesIcon /><Text>Developer</Text></Radio>
                    <Radio value="designer">
                        <Text>Designer</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
                <HelperMessage>Select one to continue</HelperMessage>
            </RadioGroup>
        </Inline>
    )
} satisfies Story;

/**
 * A RadioGroup can handle `value` state in controlled mode.
 */
export const Controlled = {
    render: function Render(args) {
        const [selected, setSelected] = useState("designer");

        return (
            <RadioGroup {...args}
                value={selected}
                onChange={setSelected}
            >
                <RadioList>
                    <Radio value="developer">Developer</Radio>
                    <Radio value="designer">Designer</Radio>
                    <Radio value="manager">Manager</Radio>
                </RadioList>
            </RadioGroup>
        );
    },
    args: {
        "aria-label": "Roles"
    }
} satisfies Story;

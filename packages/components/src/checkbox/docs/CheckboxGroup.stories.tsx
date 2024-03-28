import { useState } from "react";
import { CheckboxGroup } from "../src/CheckboxGroup.tsx";
import { CheckboxField } from "../src/CheckboxField.tsx";
import { Checkbox } from "../src/Checkbox.tsx";
import { Text } from "../../Text/index.ts";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../Label/index.ts";
import { ErrorMessage } from "../../errorMessage/index.ts";
import { HelperMessage } from "../../helperMessage/src/index.ts";
import { Inline } from "../../layout/src/Inline.tsx";

/**
 * The CheckboxGroup is used to group related options together and to provide a label for the group. It can also provide validation and helper messages.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Checkbox/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Checkbox/CheckboxGroup",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: CheckboxGroup
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default checkboxGroup.
 */
export const Default = {
    render: props => (
        <CheckboxGroup {...props}>
            <Checkbox value="developer">Developer</Checkbox>
            <Checkbox value="designer">Designer</Checkbox>
            <CheckboxField>
                <Checkbox value="manager">Manager</Checkbox>
                <Text slot="description">Team Manager</Text>
            </CheckboxField>
        </CheckboxGroup>
    ),
    args: {
        defaultValue: ["developer"]
    }
} satisfies Story;

/**
 * A CheckboxGroup can have a Label to provide more context to the user.
 */
export const LabelStory = {
    name: "Label",
    render: props => (
        <CheckboxGroup {...props}>
            <Checkbox value="developer">Developer</Checkbox>
            <Checkbox value="designer">Designer</Checkbox>
            <Checkbox value="manager">Manager</Checkbox>
            <Label>Roles</Label>
        </CheckboxGroup>
    )
} satisfies Story;

/**
 * A CheckboxGroup can have a description to provide more information to the user.
 */
export const Description = {
    render: props => (
        <CheckboxGroup {...props}>
            <Label>Roles</Label>
            <Checkbox value="developer">Developer</Checkbox>
            <Checkbox value="designer">Designer</Checkbox>
            <CheckboxField>
                <Checkbox value="manager">Manager</Checkbox>
                <Text slot="description">Team Manager</Text>
            </CheckboxField>
            <HelperMessage hideInfoIcon>Select one to continue</HelperMessage>
        </CheckboxGroup>
    )
} satisfies Story;

/**
 * A CheckboxGroup differs in appearance based on the size prop.
 */
export const Size = {
    render: props => (
        <Inline alignY="start">
            <CheckboxGroup {...props} size="sm">
                <Label>Roles</Label>
                <Checkbox value="developer">Developer</Checkbox>
                <Checkbox value="designer">Designer</Checkbox>
                <Checkbox value="manager">Manager</Checkbox>
                <HelperMessage hideInfoIcon>Select one to continue</HelperMessage>
            </CheckboxGroup>
            <CheckboxGroup {...props} size="md">
                <Label>Roles</Label>
                <Checkbox value="developer">Developer</Checkbox>
                <Checkbox value="designer">Designer</Checkbox>
                <Checkbox value="manager">Manager</Checkbox>
                <HelperMessage hideInfoIcon>Select one to continue</HelperMessage>
            </CheckboxGroup>
        </Inline>
    )
} satisfies Story;

/**
 * A CheckboxGroup can be `bordered` by using the `variant` prop.
 */
export const Bordered = {
    ...Description,
    args: {
        variant: "bordered"
    }
} satisfies Story;


/**
 * If a CheckboxGroup is invalid, it will display an error message. Displaying this error message will hide the helper message.
 */
export const Validation = {
    args: {
        isInvalid: true
    },
    render: function Render(args) {
        const [isInvalid, setIsInvalid] = useState(args.isInvalid);
        function onChange(value: string[]) {
            // if value is empty, then it is invalid
            setIsInvalid(value.length === 0);
        }

        return (
            <CheckboxGroup {...args} onChange={onChange} isInvalid={isInvalid}>
                <HelperMessage hideInfoIcon>Uncheck all to show the error message</HelperMessage>
                <ErrorMessage hideWarningIcon>Check this box and the description will appear</ErrorMessage>
                <Checkbox value="developer">Developer</Checkbox>
                <Checkbox value="designer">Designer</Checkbox>
                <Label>Roles</Label>
                <Checkbox value="manager">Manager</Checkbox>
            </CheckboxGroup>
        );
    }
} satisfies Story;

/**
 * A CheckboxGroup can have a responsive orientation. Resize your window to see the orientation change.
 */
export const ResponsiveOrientation = {
    ...Description,
    args: {
        orientation: { base: "vertical", sm: "horizontal" }
    }
} satisfies Story;

/**
 * An entire CheckboxGroup can be disabled.
 */
export const Disabled = {
    ...Description,
    args: {
        isDisabled: true
    }
} satisfies Story;

/**
 * A CheckboxGroup can handle `value` state in controlled mode.
 */
export const Controlled = {
    render: function Render(args) {
        const [selected, setSelected] = useState<string[]>(["designer"]);

        return (
            <CheckboxGroup {...args}
                value={selected}
                onChange={setSelected}
            >
                <Checkbox value="developer">Developer</Checkbox>
                <Checkbox value="designer">Designer</Checkbox>
                <Checkbox value="manager">Manager</Checkbox>
            </CheckboxGroup>
        );
    }
} satisfies Story;
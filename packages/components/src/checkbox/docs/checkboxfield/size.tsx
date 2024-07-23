import { Checkbox, CheckboxField, Inline, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <CheckboxField size="sm">
                <Checkbox>Manager</Checkbox>
                <Text>Team Manager</Text>
            </CheckboxField>
            <CheckboxField size="md">
                <Checkbox>Manager</Checkbox>
                <Text>Team Manager</Text>
            </CheckboxField>
        </Inline>
    );
}

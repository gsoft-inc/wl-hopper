import { Checkbox, CheckboxField, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxField isDisabled>
            <Checkbox>Manager</Checkbox>
            <Text>Team Manager</Text>
        </CheckboxField>
    );
}

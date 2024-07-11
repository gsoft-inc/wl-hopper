import { Checkbox, CheckboxField, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxField>
            <Checkbox>
                <Text>Manager</Text>
            </Checkbox>
            <Text slot="description">Team Manager</Text>
        </CheckboxField>
    );
}

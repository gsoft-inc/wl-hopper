import { Checkbox, CheckboxField, Inline, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <CheckboxField size="sm">
                <Checkbox>
                    <Text>Option 1</Text>
                </Checkbox>
            </CheckboxField>
            <CheckboxField size="md">
                <Checkbox>
                    <Text>Option 1</Text>
                </Checkbox>
            </CheckboxField>
        </Inline>
    );
}

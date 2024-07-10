import { Checkbox, CheckboxField, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxField isDisabled>
            <Checkbox>
                <Text>Option 1</Text>
            </Checkbox>
        </CheckboxField>
    );
}

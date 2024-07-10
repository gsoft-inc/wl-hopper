import { Checkbox, CheckboxField, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxField>
            <Checkbox>
                <Text>Option 1</Text>
            </Checkbox>
            <Text slot="description">Description</Text>
        </CheckboxField>
    );
}

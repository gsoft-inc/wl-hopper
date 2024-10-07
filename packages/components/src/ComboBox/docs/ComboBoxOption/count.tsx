import { Badge, ComboBox, ComboBoxOption, ComboBoxOptions, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox>
            <Label>Roles</Label>
            <ComboBoxOptions>
                <ComboBoxOption textValue="Designer">
                    <Text slot="label">Designer</Text>
                    <Badge>50</Badge>
                </ComboBoxOption>
                <ComboBoxOption textValue="Developer">
                    <Text slot="label">Developer</Text>
                    <Badge variant="secondary">99+</Badge>
                </ComboBoxOption>
                <ComboBoxOption>Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

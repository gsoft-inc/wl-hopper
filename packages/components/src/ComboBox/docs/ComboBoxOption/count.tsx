import { Badge, ComboBox, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Roles</Label>}>
            <ComboBox.Option textValue="Designer">
                <Text slot="label">Designer</Text>
                <Badge>50</Badge>
            </ComboBox.Option>
            <ComboBox.Option textValue="Developer">
                <Text slot="label">Developer</Text>
                <Badge variant="secondary">99+</Badge>
            </ComboBox.Option>
            <ComboBox.Option>Manager</ComboBox.Option>
        </ComboBox>
    );
}

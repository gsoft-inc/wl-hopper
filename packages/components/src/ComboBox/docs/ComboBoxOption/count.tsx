import { Badge, ComboBox, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Animals</Label>}>
            <ComboBox.Option textValue="Dog">
                <Text slot="label">Dog</Text>
                <Badge>50</Badge>
            </ComboBox.Option>
            <ComboBox.Option textValue="Cat">
                <Text slot="label">Cat</Text>
                <Badge variant="secondary">99+</Badge>
            </ComboBox.Option>
            <ComboBox.Option>Frog</ComboBox.Option>
        </ComboBox>
    );
}

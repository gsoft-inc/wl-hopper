import { Button, ComboBox, Label, Text } from "@hopper-ui/components";
import { AddIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox
            fieldChildren={<Label>Roles</Label>}
            footer={<Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>}
        >
            <ComboBox.Option id="developer">Developer</ComboBox.Option>
            <ComboBox.Option id="designer">Designer</ComboBox.Option>
            <ComboBox.Option id="manager">Manager</ComboBox.Option>
        </ComboBox>
    );
}

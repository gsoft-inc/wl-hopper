import { Button, ComboBox, ComboBoxOption, ComboBoxOptions, Label, Text } from "@hopper-ui/components";
import { AddIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox>
            <Label>Roles</Label>
            <ComboBoxOptions
                footer={<Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>}
            >
                <ComboBoxOption id="developer">Developer</ComboBoxOption>
                <ComboBoxOption id="designer">Designer</ComboBoxOption>
                <ComboBoxOption id="manager">Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

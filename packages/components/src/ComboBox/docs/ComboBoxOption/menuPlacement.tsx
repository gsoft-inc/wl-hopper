import { ComboBox, ComboBoxOption, ComboBoxOptions, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox aria-label="Roles">
            <Label>Roles</Label>
            <ComboBoxOptions placement="top start">
                <ComboBoxOption id="designer">Designer</ComboBoxOption>
                <ComboBoxOption id="developer">Developer</ComboBoxOption>
                <ComboBoxOption id="manager">Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

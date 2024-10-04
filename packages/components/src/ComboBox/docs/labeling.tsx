import { ComboBox, ComboBoxOption, ComboBoxOptions } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox aria-label="Roles">
            <ComboBoxOptions>
                <ComboBoxOption id="designer">Designer</ComboBoxOption>
                <ComboBoxOption id="developer">Developer</ComboBoxOption>
                <ComboBoxOption id="manager">Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

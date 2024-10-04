import { ComboBox, ComboBoxOption, ComboBoxOptions, Label } from "@hopper-ui/components";
import { OrgChartIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox prefix={<OrgChartIcon />}>
            <Label>Roles</Label>
            <ComboBoxOptions>
                <ComboBoxOption id="designer">Designer</ComboBoxOption>
                <ComboBoxOption id="developer">Developer</ComboBoxOption>
                <ComboBoxOption id="manager">Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

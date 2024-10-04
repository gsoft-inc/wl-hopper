import { ComboBox, ComboBoxOption, ComboBoxOptions, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    return (
        <Stack>
            <ComboBox size="sm">
                <Label>Roles</Label>
                <ComboBoxOptions>
                    <ComboBoxOption id="designer">Designer</ComboBoxOption>
                    <ComboBoxOption id="developer">Developer</ComboBoxOption>
                    <ComboBoxOption id="manager">Manager</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <ComboBox size="md">
                <Label>Roles</Label>
                <ComboBoxOptions>
                    <ComboBoxOption id="designer">Designer</ComboBoxOption>
                    <ComboBoxOption id="developer">Developer</ComboBoxOption>
                    <ComboBoxOption id="manager">Manager</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
        </Stack>
    );
}

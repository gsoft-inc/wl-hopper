import { ComboBox, ComboBoxOption, ComboBoxOptions, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            prefix="Operations"
        >
            <Label>Roles</Label>
            <ComboBoxOptions>
                <ComboBoxOption id="project-coordinator">Project Coordinator</ComboBoxOption>
                <ComboBoxOption id="qa-specialist">QA Specialist</ComboBoxOption>
                <ComboBoxOption id="system-administrator">System Administrator</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

import { ComboBox, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            fieldChildren={<Label>Roles</Label>}
            prefix="Operations"
        >
            <ComboBox.Option id="project-coordinator">Project Coordinator</ComboBox.Option>
            <ComboBox.Option id="qa-specialist">QA Specialist</ComboBox.Option>
            <ComboBox.Option id="system-administrator">System Administrator</ComboBox.Option>
        </ComboBox>
    );
}

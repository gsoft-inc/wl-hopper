import { Label, Select, SelectField, SelectOption } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField
            prefix="Operations"
        >
            <Label>Roles</Label>
            <Select>
                <SelectOption id="project-coordinator">Project Coordinator</SelectOption>
                <SelectOption id="qa-specialist">QA Specialist</SelectOption>
                <SelectOption id="system-administrator">System Administrator</SelectOption>
            </Select>
        </SelectField>
    );
}

import { Label, Select, SelectOption, SelectOptions } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select
            prefix="Operations"
        >
            <Label>Roles</Label>
            <SelectOptions>
                <SelectOption id="project-coordinator">Project Coordinator</SelectOption>
                <SelectOption id="qa-specialist">QA Specialist</SelectOption>
                <SelectOption id="system-administrator">System Administrator</SelectOption>
            </SelectOptions>
        </Select>
    );
}

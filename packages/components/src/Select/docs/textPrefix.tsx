import { Label, Select } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select
            fieldChildren={<Label>Roles</Label>}
            prefix="Operations"
        >
            <Select.Option id="project-coordinator">Project Coordinator</Select.Option>
            <Select.Option id="qa-specialist">QA Specialist</Select.Option>
            <Select.Option id="system-administrator">System Administrator</Select.Option>
        </Select>
    );
}

import { Label, Select } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select fieldChildren={<Label>Roles</Label>}>
            <Select.Option id="designer">Designer</Select.Option>
            <Select.Option id="developer">Developer</Select.Option>
            <Select.Option id="manager">Manager</Select.Option>
        </Select>
    );
}

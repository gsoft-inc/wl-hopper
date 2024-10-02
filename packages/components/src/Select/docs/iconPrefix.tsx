import { Label, Select } from "@hopper-ui/components";
import { OrgChartIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select
            fieldChildren={<Label>Roles</Label>}
            prefix={<OrgChartIcon />}
        >
            <Select.Option id="designer">Designer</Select.Option>
            <Select.Option id="developer">Developer</Select.Option>
            <Select.Option id="manager">Manager</Select.Option>
        </Select>
    );
}

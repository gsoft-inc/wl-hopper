import { Label, Select, SelectOption, SelectOptions } from "@hopper-ui/components";
import { OrgChartIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select
            prefix={<OrgChartIcon />}
        >
            <Label>Roles</Label>
            <SelectOptions>
                <SelectOption id="designer">Designer</SelectOption>
                <SelectOption id="developer">Developer</SelectOption>
                <SelectOption id="manager">Manager</SelectOption>
            </SelectOptions>
        </Select>
    );
}

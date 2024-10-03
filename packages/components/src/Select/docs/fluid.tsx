import { Label, Select, SelectOption, SelectOptions } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select
            isFluid
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

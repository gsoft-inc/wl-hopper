import { Label, Select, SelectField, SelectOption } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField
            isDisabled
        >
            <Label>Roles</Label>
            <Select>
                <SelectOption id="designer">Designer</SelectOption>
                <SelectOption id="developer">Developer</SelectOption>
                <SelectOption id="manager">Manager</SelectOption>
            </Select>
        </SelectField>
    );
}

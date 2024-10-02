import { Label, Select, SelectField, SelectOption, Stack } from "@hopper-ui/components";

export default function Example() {
    return (
        <Stack>
            <SelectField>
                <Label>Roles</Label>
                <Select>
                    <SelectOption id="designer">Designer</SelectOption>
                    <SelectOption id="developer">Developer</SelectOption>
                    <SelectOption id="manager">Manager</SelectOption>
                </Select>
            </SelectField>
            <SelectField size="md">
                <Label>Roles</Label>
                <Select>
                    <SelectOption id="designer">Designer</SelectOption>
                    <SelectOption id="developer">Developer</SelectOption>
                    <SelectOption id="manager">Manager</SelectOption>
                </Select>
            </SelectField>
        </Stack>
    );
}

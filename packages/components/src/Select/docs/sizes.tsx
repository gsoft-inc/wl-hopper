import { Label, Select, SelectOption, SelectOptions, Stack } from "@hopper-ui/components";

export default function Example() {
    return (
        <Stack>
            <Select>
                <Label>Roles</Label>
                <SelectOptions>
                    <SelectOption id="designer">Designer</SelectOption>
                    <SelectOption id="developer">Developer</SelectOption>
                    <SelectOption id="manager">Manager</SelectOption>
                </SelectOptions>
            </Select>
            <Select size="md">
                <Label>Roles</Label>
                <SelectOptions>
                    <SelectOption id="designer">Designer</SelectOption>
                    <SelectOption id="developer">Developer</SelectOption>
                    <SelectOption id="manager">Manager</SelectOption>
                </SelectOptions>
            </Select>
        </Stack>
    );
}

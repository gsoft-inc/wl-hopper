import { ErrorMessage, Label, Select, SelectOption, SelectOptions } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select
            isInvalid
        >
            <Label>Roles</Label>
            <ErrorMessage>This field is required</ErrorMessage>
            <SelectOptions>
                <SelectOption id="designer">Designer</SelectOption>
                <SelectOption id="developer">Developer</SelectOption>
                <SelectOption id="manager">Manager</SelectOption>
            </SelectOptions>
        </Select>
    );
}

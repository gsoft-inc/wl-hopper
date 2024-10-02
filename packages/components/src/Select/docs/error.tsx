import { ErrorMessage, Label, Select, SelectField, SelectOption } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField
            isInvalid
        >
            <Label>Roles</Label>
            <ErrorMessage>This field is required</ErrorMessage>
            <Select>
                <SelectOption id="designer">Designer</SelectOption>
                <SelectOption id="developer">Developer</SelectOption>
                <SelectOption id="manager">Manager</SelectOption>
            </Select>
        </SelectField>
    );
}

import { Select, SelectField, SelectOption } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField
            disabledKeys={["developer"]}
            aria-label="list of options"
        >
            <Select>
                <SelectOption id="designer">Designer</SelectOption>
                <SelectOption id="developer">Developer</SelectOption>
                <SelectOption id="manager">Manager</SelectOption>
            </Select>
        </SelectField>
    );
}

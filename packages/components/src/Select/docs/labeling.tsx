import { Select, SelectOption, SelectOptions } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="Roles">
            <SelectOptions>
                <SelectOption id="designer">Designer</SelectOption>
                <SelectOption id="developer">Developer</SelectOption>
                <SelectOption id="manager">Manager</SelectOption>
            </SelectOptions>
        </Select>
    );
}

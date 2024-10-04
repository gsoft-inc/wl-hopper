import { Form, Label, Select, SelectOption, SelectOptions } from "@hopper-ui/components";

export default function Example() {
    return (
        <Form>
            <Select
                name="roles"
            >
                <Label>Roles</Label>
                <SelectOptions>
                    <SelectOption id="designer">Designer</SelectOption>
                    <SelectOption id="developer">Developer</SelectOption>
                    <SelectOption id="manager">Manager</SelectOption>
                </SelectOptions>
            </Select>
        </Form>
    );
}

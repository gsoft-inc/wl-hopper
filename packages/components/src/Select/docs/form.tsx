import { Form, Label, Select } from "@hopper-ui/components";

export default function Example() {
    return (
        <Form>
            <Select
                fieldChildren={<Label>Roles</Label>}
                name="roles"
            >
                <Select.Option id="designer">Designer</Select.Option>
                <Select.Option id="developer">Developer</Select.Option>
                <Select.Option id="manager">Manager</Select.Option>
            </Select>
        </Form>
    );
}

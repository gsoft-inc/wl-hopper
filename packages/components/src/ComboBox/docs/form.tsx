import { ComboBox, Form, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <Form>
            <ComboBox
                fieldChildren={<Label>Roles</Label>}
                name="Roles"
            >
                <ComboBox.Option id="designer">Designer</ComboBox.Option>
                <ComboBox.Option id="developer">Developer</ComboBox.Option>
                <ComboBox.Option id="manager">Manager</ComboBox.Option>
            </ComboBox>
        </Form>
    );
}

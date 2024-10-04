import { ComboBox, ComboBoxOption, ComboBoxOptions, Form, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <Form>
            <ComboBox name="Roles">
                <Label>Roles</Label>
                <ComboBoxOptions>
                    <ComboBoxOption id="designer">Designer</ComboBoxOption>
                    <ComboBoxOption id="developer">Developer</ComboBoxOption>
                    <ComboBoxOption id="manager">Manager</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
        </Form>
    );
}

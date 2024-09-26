import { ComboBox, Form, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <Form>
            <ComboBox
                fieldChildren={<Label>Animals</Label>}
                name="animals"
            >
                <ComboBox.Option id="dog">Dog</ComboBox.Option>
                <ComboBox.Option id="cat">Cat</ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
        </Form>
    );
}

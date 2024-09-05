import { Select, Label, Form } from "@hopper-ui/components";

export default function Example() {
    return (
        <Form>
            <Select
                fieldChildren={<Label>Animals</Label>}
                name="animals"
            >
                <Select.Option id="dog">Dog</Select.Option>
                <Select.Option id="cat">Cat</Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
        </Form>
    );
}

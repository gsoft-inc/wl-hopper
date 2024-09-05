import { Select, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select fieldChildren={<Label>Animals</Label>}>
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
        </Select>
    );
}

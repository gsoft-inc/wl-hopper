import { Select, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select fieldChildren={
            <Label>Animals</Label>
        }
        prefix="Cute"
        >
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
        </Select>
    );
}

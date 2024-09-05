import { Select, Label } from "@hopper-ui/components";
import { CatIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select
            fieldChildren={<Label>Animals</Label>}
            prefix={<CatIcon />}
        >
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
        </Select>
    );
}

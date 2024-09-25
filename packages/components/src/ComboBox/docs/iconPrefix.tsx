import { ComboBox, Label } from "@hopper-ui/components";
import { CatIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox
            fieldChildren={<Label>Animals</Label>}
            prefix={<CatIcon />}
        >
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
    );
}

import { ComboBox, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Animals</Label>}>
            <ComboBox.Option id="dog" isDisabled>Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
    );
}

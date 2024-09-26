import { ComboBox, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            isFluid
            fieldChildren={<Label>Animals</Label>}
        >
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
    );
}

import { ComboBox } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox aria-label="Animals">
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
    );
}

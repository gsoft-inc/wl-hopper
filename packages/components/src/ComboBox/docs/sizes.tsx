import { ComboBox, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    return (
        <Stack>
            <ComboBox size="sm" fieldChildren={<Label>Animals</Label>}>
                <ComboBox.Option id="dog">Dog</ComboBox.Option>
                <ComboBox.Option id="cat">Cat</ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
            <ComboBox size="md">
                <ComboBox.Option id="dog">Dog</ComboBox.Option>
                <ComboBox.Option id="cat">Cat</ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
        </Stack>
    );
}

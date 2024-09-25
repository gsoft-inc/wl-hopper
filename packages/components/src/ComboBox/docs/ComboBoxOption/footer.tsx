import { Button, ComboBox, Label, Text } from "@hopper-ui/components";
import { AddIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox
            fieldChildren={<Label>Animals</Label>}
            footer={<Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>}
        >
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
    );
}

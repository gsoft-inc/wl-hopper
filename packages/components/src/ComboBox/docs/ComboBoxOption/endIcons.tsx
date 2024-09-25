import { ComboBox, IconList, Label, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Animals</Label>}>
            <ComboBox.Option textValue="Item 1">
                <Text slot="label">Item 1</Text>
                <IconList slot="end-icon">
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </ComboBox.Option>
            <ComboBox.Option textValue="Item 2">
                <SparklesIcon slot="end-icon" /><Text slot="label">Item 2</Text>
            </ComboBox.Option>
            <ComboBox.Option>Item 3</ComboBox.Option>
        </ComboBox>
    );
}

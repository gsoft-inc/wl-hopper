import { ComboBox, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox aria-label="list of options with a description" fieldChildren={<Label>Animals</Label>}>
            <ComboBox.Option textValue="Item 1">
                <Text>Item 1</Text>
                <Text slot="description">Description of item 1</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Item 2">
                <Text>Item 2</Text>
                <Text slot="description">Description of item 2</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Item 3">
                <Text>Item 3</Text>
                <Text slot="description">Description of item 3 will be a long one to show overflow.</Text>
            </ComboBox.Option>
        </ComboBox>
    );
}

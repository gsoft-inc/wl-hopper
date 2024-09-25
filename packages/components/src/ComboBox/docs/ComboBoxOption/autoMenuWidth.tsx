import { ComboBox, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox isAutoMenuWidth
            aria-label="list of options with a description"
            fieldChildren={<Label>Animals</Label>}
        >
            <ComboBox.Option textValue="Dog">
                <Text>Dog</Text>
                <Text slot="description">Description of item 1</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Cat">
                <Text>Cat</Text>
                <Text slot="description">Description of item 2</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Frog">
                <Text>Frog</Text>
                <Text slot="description">Description of item 3 will be a very long one to show overflow.</Text>
            </ComboBox.Option>
        </ComboBox>
    );
}

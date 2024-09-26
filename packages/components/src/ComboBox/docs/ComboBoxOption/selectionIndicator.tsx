import { ComboBox, Label, Text, type Key } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<Key | null>("1");

    return (
        <ComboBox
            aria-label="list of options"
            selectedKey={selectedKey}
            fieldChildren={<Label>Animals</Label>}
            onSelectionChange={setSelectedKey}
            listBoxProps={{ selectionIndicator: "input" }}
        >
            <ComboBox.Option textValue="Item 1" id="1">
                <Text slot="label">Item 1</Text>
                <Text slot="description">Description of item 1</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Item 2" id="2">
                <Text slot="label">Item 2</Text>
                <Text slot="description">Description of item 2</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Item 3" id="3">
                <Text slot="label">Item 3</Text>
                <Text slot="description">Description of item 3</Text>
            </ComboBox.Option>
        </ComboBox>
    );
}

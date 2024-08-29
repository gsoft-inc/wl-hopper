import { Select, Text, type SelectKey } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<SelectKey>("1");

    return (
        <Select
            aria-label="list of options"
            selectedKey={selectedKey}
            onSelectionChange={setSelectedKey}
            listBoxProps={{ selectionIndicator: "input" }}
        >
            <Select.Option textValue="Item 1" id="1">
                <Text slot="label">Item 1</Text>
                <Text slot="description">Description of item 1</Text>
            </Select.Option>
            <Select.Option textValue="Item 2" id="2">
                <Text slot="label">Item 2</Text>
                <Text slot="description">Description of item 2</Text>
            </Select.Option>
            <Select.Option textValue="Item 3" id="3">
                <Text slot="label">Item 3</Text>
                <Text slot="description">Description of item 3</Text>
            </Select.Option>
        </Select>
    );
}

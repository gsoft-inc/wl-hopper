import { ListBox, ListBoxItem, Text, type ListBoxSelection } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKeys, setSelectedKeys] = useState<ListBoxSelection>(new Set(["1"]));

    return (
        <ListBox
            selectionMode="single"
            selectionIndicator="input"
            aria-label="list of options"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >
            <ListBoxItem textValue="Item 1" id="1">
                <Text slot="label">Item 1</Text>
                <Text slot="description">Description of item 1</Text>
            </ListBoxItem>
            <ListBoxItem textValue="Item 2" id="2">
                <Text slot="label">Item 2</Text>
                <Text slot="description">Description of item 2</Text>
            </ListBoxItem>
            <ListBoxItem textValue="Item 3" id="3">
                <Text slot="label">Item 3</Text>
                <Text slot="description">Description of item 3</Text>
            </ListBoxItem>
        </ListBox>
    );
}

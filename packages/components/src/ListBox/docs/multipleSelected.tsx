import { ListBox, ListBoxItem, Section } from "@hopper-ui/components";
import { useState } from "react";
import type { Selection } from "react-aria-components";

export default function Example() {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["1"]));

    return (
        <ListBox
            selectionMode="multiple"
            aria-label="list of options"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >
            <ListBoxItem id="1">Item 1</ListBoxItem>
            <ListBoxItem id="2">Item 2</ListBoxItem>
            <ListBoxItem id="3">Item 3</ListBoxItem>
            <Section aria-label="section">
                <ListBoxItem id="6">Item 4</ListBoxItem>
                <ListBoxItem id="7">Item 5</ListBoxItem>
                <ListBoxItem id="8">Item 6</ListBoxItem>
            </Section>
        </ListBox>
    );
}

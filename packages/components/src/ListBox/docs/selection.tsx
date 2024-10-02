import { ListBox, ListBoxItem, Text } from "@hopper-ui/components";
import { useState } from "react";
import type { Selection } from "react-aria-components";

export default function Example() {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["1"]));

    return (
        <ListBox
            selectionMode="single"
            aria-label="list of options"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >
            <ListBoxItem textValue="Developer" id="1">
                <Text slot="label">Developer</Text>
                <Text slot="description">Builds and maintains software.</Text>
            </ListBoxItem>
            <ListBoxItem textValue="Designer" id="2">
                <Text slot="label">Designer</Text>
                <Text slot="description">Creates visual design solutions.</Text>
            </ListBoxItem>
            <ListBoxItem textValue="Manager" id="3">
                <Text slot="label">Manager</Text>
                <Text slot="description">Leads teams and projects.</Text>
            </ListBoxItem>
        </ListBox>
    );
}

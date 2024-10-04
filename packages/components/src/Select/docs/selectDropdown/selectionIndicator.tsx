import { Select, Text, type Key } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<Key>("1");

    return (
        <Select
            aria-label="list of options"
            selectedKey={selectedKey}
            onSelectionChange={setSelectedKey}
            listBoxProps={{ selectionIndicator: "input" }}
        >
            <Select.Option textValue="Developer" id="1">
                <Text slot="label">Developer</Text>
                <Text slot="description">Builds and maintains software.</Text>
            </Select.Option>
            <Select.Option textValue="Designer" id="2">
                <Text slot="label">Designer</Text>
                <Text slot="description">Creates visual design solutions.</Text>
            </Select.Option>
            <Select.Option textValue="Manager" id="3">
                <Text slot="label">Manager</Text>
                <Text slot="description">Leads teams and projects.</Text>
            </Select.Option>
        </Select>
    );
}
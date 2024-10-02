import { ComboBox, Label, Text, type Key } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<Key | null>("1");

    return (
        <ComboBox
            aria-label="list of options"
            selectedKey={selectedKey}
            fieldChildren={<Label>Roles</Label>}
            onSelectionChange={setSelectedKey}
            listBoxProps={{ selectionIndicator: "input" }}
        >
            <ComboBox.Option textValue="Developer" id="1">
                <Text slot="label">Developer</Text>
                <Text slot="description">Builds and maintains software.</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Designer" id="2">
                <Text slot="label">Designer</Text>
                <Text slot="description">Creates visual design solutions.</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Manager" id="3">
                <Text slot="label">Manager</Text>
                <Text slot="description">Leads teams and projects.</Text>
            </ComboBox.Option>
        </ComboBox>
    );
}

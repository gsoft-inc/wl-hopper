import { Select, SelectOption, SelectOptions, Text, type Key } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<Key>("1");

    return (
        <Select
            aria-label="list of options"
            selectedKey={selectedKey}
            onSelectionChange={setSelectedKey}
        >
            <SelectOptions
                listBoxProps={{ selectionIndicator: "input" }}
            >
                <SelectOption textValue="Developer" id="1">
                    <Text slot="label">Developer</Text>
                    <Text slot="description">Builds and maintains software.</Text>
                </SelectOption>
                <SelectOption textValue="Designer" id="2">
                    <Text slot="label">Designer</Text>
                    <Text slot="description">Creates visual design solutions.</Text>
                </SelectOption>
                <SelectOption textValue="Manager" id="3">
                    <Text slot="label">Manager</Text>
                    <Text slot="description">Leads teams and projects.</Text>
                </SelectOption>
            </SelectOptions>
        </Select>
    );
}

import { ComboBox, ComboBoxOption, ComboBoxOptions, Header, type Key, Label, Section } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<Key | null>();

    function handleSelectionChange(key: Key | null) {
        if (selectedKey === key) {
            setSelectedKey(null);
        } else {
            setSelectedKey(key);
        }
    }

    return (
        <ComboBox selectedKey={selectedKey} onSelectionChange={handleSelectionChange} aria-label="pets">
            <Label>Roles</Label>
            <ComboBoxOptions>
                <Section key="1">
                    <Header>Operations</Header>
                    <ComboBoxOption id="1">Project Coordinator</ComboBoxOption>
                    <ComboBoxOption id="2">QA Specialist</ComboBoxOption>
                </Section>
                <ComboBoxOption key="2" id="3">Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

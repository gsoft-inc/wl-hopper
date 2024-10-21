import { ComboBox, ComboBoxItem, Header, type Key, Section } from "@hopper-ui/components";
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
        <ComboBox selectedKey={selectedKey} onSelectionChange={handleSelectionChange} label="Roles">
            <Section key="1">
                <Header>Operations</Header>
                <ComboBoxItem id="1">Project Coordinator</ComboBoxItem>
                <ComboBoxItem id="2">QA Specialist</ComboBoxItem>
            </Section>
            <ComboBoxItem key="2" id="3">Manager</ComboBoxItem>
        </ComboBox>
    );
}

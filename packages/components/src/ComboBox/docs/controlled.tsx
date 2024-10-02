import { ComboBox, Header, type Key, Label, Section } from "@hopper-ui/components";
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
        <ComboBox selectedKey={selectedKey} onSelectionChange={handleSelectionChange} aria-label="pets" fieldChildren={<Label>Roles</Label>}>
            <Section key="1">
                <Header>Operations</Header>
                <ComboBox.Option id="1">Project Coordinator</ComboBox.Option>
                <ComboBox.Option id="2">QA Specialist</ComboBox.Option>
            </Section>
            <ComboBox.Option key="2" id="3">Manager</ComboBox.Option>
        </ComboBox>
    );
}

import { Header, Label, Section, Select, type Key } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<Key | null>();

    function handleSelectionChange(key: Key) {
        if (selectedKey === key) {
            setSelectedKey(null);
        } else {
            setSelectedKey(key);
        }
    }

    return (
        <Select selectedKey={selectedKey} onSelectionChange={handleSelectionChange} aria-label="pets" fieldChildren={<Label>Roles</Label>}>
            <Section key="1">
                <Header>Operations</Header>
                <Select.Option id="1">Project Coordinator</Select.Option>
                <Select.Option id="2">QA Specialist</Select.Option>
            </Section>
            <Select.Option key="2" id="3">Manager</Select.Option>
        </Select>
    );
}

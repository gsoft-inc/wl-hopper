import { Header, Section, Select, SelectItem, type Key } from "@hopper-ui/components";
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
        <Select selectedKey={selectedKey} onSelectionChange={handleSelectionChange} label="Roles">
            <Section key="1">
                <Header>Operations</Header>
                <SelectItem id="1">Project Coordinator</SelectItem>
                <SelectItem id="2">QA Specialist</SelectItem>
            </Section>
            <SelectItem key="2" id="3">Manager</SelectItem>
        </Select>
    );
}

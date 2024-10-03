import { Header, Label, Section, Select, SelectOption, SelectOptions, type Key } from "@hopper-ui/components";
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
        <Select selectedKey={selectedKey} onSelectionChange={handleSelectionChange} aria-label="pets">
            <Label>Roles</Label>
            <SelectOptions>
                <Section key="1">
                    <Header>Operations</Header>
                    <SelectOption id="1">Project Coordinator</SelectOption>
                    <SelectOption id="2">QA Specialist</SelectOption>
                </Section>
                <SelectOption key="2" id="3">Manager</SelectOption>
            </SelectOptions>
        </Select>
    );
}

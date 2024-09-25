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
        <Select selectedKey={selectedKey} onSelectionChange={handleSelectionChange} aria-label="pets" fieldChildren={<Label>Animals</Label>}>
            <Section key="1">
                <Header>Cats</Header>
                <Select.Option id="1">Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
            </Section>
            <Select.Option key="2" id="3">Teemo</Select.Option>
        </Select>
    );
}

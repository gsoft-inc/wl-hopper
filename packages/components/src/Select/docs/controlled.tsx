import { Select, type SelectKey, Section, Header } from "@hopper-ui/components";
import { useState } from "react";

export default function Example() {
    const [selectedKey, setSelectedKey] = useState<SelectKey | null>(null);

    function handleSelectionChange(key: SelectKey) {
        if (selectedKey === key) {
            setSelectedKey(null);
        } else {
            setSelectedKey(key);
        }
    }

    return (
        <Select selectedKey={selectedKey} onSelectionChange={handleSelectionChange} aria-label="pets">
            <Section key="1">
                <Header>Cats</Header>
                <Select.Option id="1">Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
            </Section>
            <Select.Option key="2" id="3">Teemo</Select.Option>
        </Select>
    );
}

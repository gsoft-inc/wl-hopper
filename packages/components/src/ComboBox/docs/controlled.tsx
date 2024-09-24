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
        <ComboBox selectedKey={selectedKey} onSelectionChange={handleSelectionChange} aria-label="pets" fieldChildren={<Label>Animals</Label>}>
            <Section key="1">
                <Header>Cats</Header>
                <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                <ComboBox.Option id="2">Voodoo</ComboBox.Option>
            </Section>
            <ComboBox.Option key="2" id="3">Teemo</ComboBox.Option>
        </ComboBox>
    );
}

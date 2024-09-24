import { ComboBox, Header, Label, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox allowsCustomValue aria-label="pets" fieldChildren={<Label>Animals</Label>}>
            <Section key="1">
                <Header>Cats</Header>
                <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                <ComboBox.Option id="2">Voodoo</ComboBox.Option>
            </Section>
            <ComboBox.Option key="2" id="3">Teemo</ComboBox.Option>
        </ComboBox>
    );
}

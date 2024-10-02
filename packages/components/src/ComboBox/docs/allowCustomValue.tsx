import { ComboBox, Header, Label, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox allowsCustomValue aria-label="pets" fieldChildren={<Label>Roles</Label>}>
            <Section key="1">
                <Header>Creative Department</Header>
                <ComboBox.Option id="1">Designer</ComboBox.Option>
                <ComboBox.Option id="2">Content creator</ComboBox.Option>
            </Section>
            <ComboBox.Option key="2" id="3">Manager</ComboBox.Option>
        </ComboBox>
    );
}

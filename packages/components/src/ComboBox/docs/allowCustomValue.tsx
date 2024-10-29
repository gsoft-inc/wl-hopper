import { ComboBox, ComboBoxItem, Header, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox allowsCustomValue label="Roles">
            <Section key="1">
                <Header>Creative Department</Header>
                <ComboBoxItem id="1">Designer</ComboBoxItem>
                <ComboBoxItem id="2">Content creator</ComboBoxItem>
            </Section>
            <ComboBoxItem key="2" id="3">Manager</ComboBoxItem>
        </ComboBox>
    );
}

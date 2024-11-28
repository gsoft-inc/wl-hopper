import { ComboBox, ComboBoxItem, ComboBoxSection, Header } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox allowsCustomValue label="Roles">
            <ComboBoxSection key="1">
                <Header>Creative Department</Header>
                <ComboBoxItem id="1">Designer</ComboBoxItem>
                <ComboBoxItem id="2">Content creator</ComboBoxItem>
            </ComboBoxSection>
            <ComboBoxItem key="2" id="3">Manager</ComboBoxItem>
        </ComboBox>
    );
}

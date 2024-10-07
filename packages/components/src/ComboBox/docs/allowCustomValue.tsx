import { ComboBox, ComboBoxOption, ComboBoxOptions, Header, Label, Section } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox allowsCustomValue aria-label="pets">
            <Label>Roles</Label>
            <ComboBoxOptions>
                <Section key="1">
                    <Header>Creative Department</Header>
                    <ComboBoxOption id="1">Designer</ComboBoxOption>
                    <ComboBoxOption id="2">Content creator</ComboBoxOption>
                </Section>
                <ComboBoxOption key="2" id="3">Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

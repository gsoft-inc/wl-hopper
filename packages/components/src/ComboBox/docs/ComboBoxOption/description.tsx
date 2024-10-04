import { ComboBox, ComboBoxOption, ComboBoxOptions, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox aria-label="list of options with a description">
            <Label>Roles</Label>
            <ComboBoxOptions>
                <ComboBoxOption textValue="Developer">
                    <Text>Developer</Text>
                    <Text slot="description">Builds and maintains software.</Text>
                </ComboBoxOption>
                <ComboBoxOption textValue="Designer">
                    <Text>Designer</Text>
                    <Text slot="description">Creates visual design solutions.</Text>
                </ComboBoxOption>
                <ComboBoxOption textValue="Manager">
                    <Text>Manager</Text>
                    <Text slot="description">Leads teams and projects.</Text>
                </ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

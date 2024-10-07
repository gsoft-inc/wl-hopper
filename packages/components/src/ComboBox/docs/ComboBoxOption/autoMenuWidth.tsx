import { ComboBox, ComboBoxOption, ComboBoxOptions, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            aria-label="list of options with a description"
        >
            <Label>Roles</Label>
            <ComboBoxOptions isAutoMenuWidth>
                <ComboBoxOption textValue="Developer">
                    <Text>Developer</Text>
                    <Text slot="description">Builds, tests, and maintains software.</Text>
                </ComboBoxOption>
                <ComboBoxOption textValue="Cat">
                    <Text>Designer</Text>
                    <Text slot="description">Creates visually appealing, functional solutions.</Text>
                </ComboBoxOption>
                <ComboBoxOption textValue="Frog">
                    <Text>Manager</Text>
                    <Text slot="description">Responsible for leading and overseeing a team or department to ensure organizational goals are met.</Text>
                </ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}

import { ComboBox, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox isAutoMenuWidth
            aria-label="list of options with a description"
            fieldChildren={<Label>Roles</Label>}
        >
            <ComboBox.Option textValue="Developer">
                <Text>Developer</Text>
                <Text slot="description">Builds, tests, and maintains software.</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Cat">
                <Text>Designer</Text>
                <Text slot="description">Creates visually appealing, functional solutions.</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Frog">
                <Text>Manager</Text>
                <Text slot="description">Responsible for leading and overseeing a team or department to ensure organizational goals are met.</Text>
            </ComboBox.Option>
        </ComboBox>
    );
}

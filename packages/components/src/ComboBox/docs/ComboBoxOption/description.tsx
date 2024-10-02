import { ComboBox, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox aria-label="list of options with a description" fieldChildren={<Label>Roles</Label>}>
            <ComboBox.Option textValue="Developer">
                <Text>Developer</Text>
                <Text slot="description">Builds and maintains software.</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Designer">
                <Text>Designer</Text>
                <Text slot="description">Creates visual design solutions.</Text>
            </ComboBox.Option>
            <ComboBox.Option textValue="Manager">
                <Text>Manager</Text>
                <Text slot="description">Leads teams and projects.</Text>
            </ComboBox.Option>
        </ComboBox>
    );
}

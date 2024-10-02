import { Select, SelectField, SelectOption, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField aria-label="list of options with a description">
            <Select>
                <SelectOption textValue="Developer">
                    <Text>Developer</Text>
                    <Text slot="description">Builds and maintains software.</Text>
                </SelectOption>
                <SelectOption textValue="Designer">
                    <Text>Designer</Text>
                    <Text slot="description">Creates visual design solutions.</Text>
                </SelectOption>
                <SelectOption textValue="Manager">
                    <Text>Manager</Text>
                    <Text slot="description">Leads teams and projects.</Text>
                </SelectOption>
            </Select>
        </SelectField>
    );
}

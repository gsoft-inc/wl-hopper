import { Select, SelectItem, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options with a description">
            <SelectItem textValue="Developer">
                <Text slot="label">Developer</Text>
                <Text slot="description">Builds and maintains software.</Text>
            </SelectItem>
            <SelectItem textValue="Designer">
                <Text slot="label">Designer</Text>
                <Text slot="description">Creates visual design solutions.</Text>
            </SelectItem>
            <SelectItem textValue="Manager">
                <Text slot="label">Manager</Text>
                <Text slot="description">Leads teams and projects.</Text>
            </SelectItem>
        </Select>
    );
}

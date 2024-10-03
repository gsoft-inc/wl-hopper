import { Button, Select, SelectOption, SelectOptions, Text } from "@hopper-ui/components";
import { AddIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select
            aria-label="list of options with a description"
        >
            <SelectOptions
                footer={<Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>}
            >
                <SelectOption textValue="Designer">
                    <Text>Designer</Text>
                    <Text slot="description">Builds and maintains software.</Text>
                </SelectOption>
                <SelectOption textValue="Developer">
                    <Text>Developer</Text>
                    <Text slot="description">Creates visual design solutions.</Text>
                </SelectOption>
                <SelectOption textValue="Manager">
                    <Text>Manager</Text>
                    <Text slot="description">Leads teams and projects.</Text>
                </SelectOption>
            </SelectOptions>
        </Select>
    );
}

import { Badge, Select, SelectOption, SelectOptions, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <SelectOptions>
                <SelectOption textValue="Designer">
                    <Text slot="label">Designer</Text>
                    <Badge>50</Badge>
                </SelectOption>
                <SelectOption textValue="Developer">
                    <Badge variant="secondary">99+</Badge>
                    <Text slot="label">Developer</Text>
                </SelectOption>
                <SelectOption>Manager</SelectOption>
            </SelectOptions>
        </Select>
    );
}

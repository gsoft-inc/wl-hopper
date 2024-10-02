import { Badge, Select, SelectField, SelectOption, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField aria-label="list of options">
            <Select>
                <SelectOption textValue="Designer">
                    <Text slot="label">Designer</Text>
                    <Badge>50</Badge>
                </SelectOption>
                <SelectOption textValue="Developer">
                    <Badge variant="secondary">99+</Badge>
                    <Text slot="label">Developer</Text>
                </SelectOption>
                <SelectOption>Manager</SelectOption>
            </Select>
        </SelectField>
    );
}

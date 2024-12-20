import { Badge, Select, SelectItem, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <SelectItem textValue="Designer">
                <Text slot="label">Designer</Text>
                <Badge>50</Badge>
            </SelectItem>
            <SelectItem textValue="Developer">
                <Badge variant="secondary">99+</Badge>
                <Text slot="label">Developer</Text>
            </SelectItem>
            <SelectItem>Manager</SelectItem>
        </Select>
    );
}

import { Badge, Select, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <Select.Option textValue="Designer">
                <Text slot="label">Designer</Text>
                <Badge>50</Badge>
            </Select.Option>
            <Select.Option textValue="Developer">
                <Badge variant="secondary">99+</Badge>
                <Text slot="label">Developer</Text>
            </Select.Option>
            <Select.Option>Manager</Select.Option>
        </Select>
    );
}

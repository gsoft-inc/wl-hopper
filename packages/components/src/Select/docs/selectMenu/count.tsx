import { Badge, Select, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <Select.Option textValue="Item 1">
                <Text slot="label">Item 1</Text>
                <SparklesIcon slot="end-icon" />
                <Badge>50</Badge>
            </Select.Option>
            <Select.Option textValue="Item 2">
                <Badge variant="secondary">99+</Badge>
                <Text slot="label">Item 2</Text>
            </Select.Option>
            <Select.Option>Item 3</Select.Option>
        </Select>
    );
}
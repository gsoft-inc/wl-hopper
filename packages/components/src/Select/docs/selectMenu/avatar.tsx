import { Avatar, Select, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select aria-label="Team">
            <Select.Option textValue="Fred Smith">
                <Avatar src="https://i.pravatar.cc/96?img=3" name="Fred Smith" />
                <Text slot="label">Fred Smith</Text>
                <SparklesIcon slot="end-icon" />
            </Select.Option>
            <Select.Option textValue="Karen Smith">
                <Avatar name="Karen Smith" />
                <Text slot="label">Item 2</Text>
            </Select.Option>
            <Select.Option textValue="John Doe">
                <Avatar name="John Doe" />
                <Text slot="label">John Doe</Text>
            </Select.Option>
        </Select>
    );
}

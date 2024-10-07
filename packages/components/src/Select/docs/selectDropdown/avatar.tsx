import { Avatar, Select, SelectOption, SelectOptions, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select aria-label="Team">
            <SelectOptions>
                <SelectOption textValue="Fred Smith">
                    <Avatar src="https://i.pravatar.cc/96?img=3" name="Fred Smith" />
                    <Text slot="label">Fred Smith</Text>
                </SelectOption>
                <SelectOption textValue="Karen Smith">
                    <Avatar name="Karen Smith" />
                    <Text slot="label">Karen Smith</Text>
                </SelectOption>
                <SelectOption textValue="John Doe">
                    <Avatar name="John Doe" />
                    <Text slot="label">John Doe</Text>
                </SelectOption>
            </SelectOptions>
        </Select>
    );
}

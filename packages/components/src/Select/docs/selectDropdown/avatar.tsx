import { Avatar, Select, SelectField, SelectOption, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <SelectField aria-label="Team">
            <Select>
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
            </Select>
        </SelectField>
    );
}

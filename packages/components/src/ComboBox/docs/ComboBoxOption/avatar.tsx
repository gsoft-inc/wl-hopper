import { Avatar, ComboBox, Label, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Username</Label>}>
            <ComboBox.Option id="fred-smith" textValue="Fred Smith" >
                <Avatar src="https://i.pravatar.cc/96?img=3" name="Fred Smith" />
                <Text slot="label">Fred Smith</Text>
            </ComboBox.Option>
            <ComboBox.Option id="karen-smith" textValue="Karen Smith" >
                <Avatar name="Karen Smith" />
                <Text slot="label">Karen Smith</Text>
            </ComboBox.Option>
            <ComboBox.Option id="john-doe" textValue="John Doe" >
                <Avatar name="John Doe" />
                <Text slot="label">John Doe</Text>
            </ComboBox.Option>
        </ComboBox>
    );
}

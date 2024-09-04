import { Select, Label, Avatar, Text } from "@hopper-ui/components";

import { users, type User } from "./data.ts";

export default function Example() {
    return (
        <Select 
            fieldChildren={<Label>Users</Label>}
            items={users}
            renderValue={({ defaultChildren, selectedItem }) => {
                if (selectedItem) {
                    const user = selectedItem as User;

                    return (
                        <>
                            <Avatar key={`avatar_${user.id}`} name={user.name} src={user.avatar} />
                            <Text slot="label">{user.name}</Text>
                        </>
                    );
                }

                return defaultChildren;
            }}
            defaultSelectedKey={users[0].id}
        >
            {item => {
                const user = item as User;

                return (
                    <Select.Option id={user.id} textValue={user.name}>
                        <Avatar name={user.name} src={user.avatar} />
                        <Text slot="label">{user.name}</Text>
                        <Text slot="description">{user.role}</Text>
                    </Select.Option>
                );
            }}
        </Select>
    );
}

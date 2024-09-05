import { Select, Label, Avatar, Text, type ValueRenderProps } from "@hopper-ui/components";

import { users, type User } from "./data.ts";

const renderValue = ({ defaultChildren, selectedItem }: ValueRenderProps) => {
    if (selectedItem) {
        const { id, name, avatar } = selectedItem as User;

        return (
            <>
                <Avatar key={`avatar_${id}`} name={name} src={avatar} />
                <Text slot="label">{name}</Text>
            </>
        );
    }

    return defaultChildren;
};

export default function Example() {
    return (
        <Select 
            fieldChildren={<Label>Users</Label>}
            items={users}
            renderValue={renderValue}
            defaultSelectedKey={users[0].id}
        >
            {({ id, name, avatar, role }: User) => {
                return (
                    <Select.Option id={id} textValue={name}>
                        <Avatar name={name} src={avatar} />
                        <Text slot="label">{name}</Text>
                        <Text slot="description">{role}</Text>
                    </Select.Option>
                );
            }}
        </Select>
    );
}

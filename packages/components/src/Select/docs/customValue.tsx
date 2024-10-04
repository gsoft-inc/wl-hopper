import { Avatar, Label, Select, SelectOption, SelectOptions, Text, type ValueRenderProps } from "@hopper-ui/components";

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
    const [firstUser] = users;

    return (
        <Select 
            renderValue={renderValue}
            defaultSelectedKey={firstUser.id}
            items={users}
        >
            <Label>Users</Label>
            <SelectOptions>
                {({ id, name, avatar, role }: User) => {
                    return (
                        <SelectOption id={id} textValue={name}>
                            <Avatar name={name} src={avatar} />
                            <Text slot="label">{name}</Text>
                            <Text slot="description">{role}</Text>
                        </SelectOption>
                    );
                }}
            </SelectOptions>
        </Select>
    );
}

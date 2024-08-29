import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { Key } from "react-aria";

import { Avatar } from "../../Avatar/index.ts";
import { Button } from "../../buttons/index.ts";
import { Header } from "../../Header/index.ts";
import { Section } from "../../Section/index.ts";
import { Label, Text } from "../../typography/index.ts";
import { Select } from "../src/Select.tsx";

import { users, type User } from "./data.ts";

/**
 * TODO: Add description
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Select/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Select",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: Select,
    args: {
        children: []
    }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * TODO: Add description
 */
export const Default = {
    render: args => (
        <Select {...args} />
    ),
    args: {
        children: [
            <Section key="1">
                <Header>Cats</Header>
                <Select.Option id="1">Zoomy Zoomy Zoomy Zoomy Zoomy Zoomy Zoomy Zoomy Zoomy Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
                <Select.Option id="3">Dusty</Select.Option>
                <Select.Option id="4">Rengar</Select.Option>
            </Section>,
            <Section key="2">
                <Header>Dogs</Header>
                <Select.Option id="5">Teemo</Select.Option>
                <Select.Option id="6">Scooter</Select.Option>
                <Select.Option id="7">Prince</Select.Option>
            </Section>
        ],
        fieldChildren: <Label>Pets</Label>,
        footer: <Button variant="ghost-secondary" width="100%">Add</Button>,
        prefix: "$",
        placeholder: "Select a pet",
        isAutoMenuWidth: true
    }
} satisfies Story;

/**
 * TODO: Add description
 */
export const Disabled = {
    render: args => (
        <Select {...args} />
    ),
    args: {
        children: [
            <Section key="1">
                <Header>Cats</Header>
                <Select.Option id="1">Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
            </Section>,
            <Select.Option key="2" id="3">Teemo</Select.Option>
        ],
        fieldChildren: <Label>Pets</Label>,
        isDisabled: true
    }
} satisfies Story;

/**
 * TODO: Add description
 */
export const Controlled = {
    render: function Render(args) {
        const [selectedKey, setSelectedKey] = useState<Key | null>(null);

        function handleSelectionChange(key: Key) {
            if (selectedKey === key) {
                setSelectedKey(null);
            } else {
                setSelectedKey(key);
            }
        }

        return (
            <Select {...args} selectedKey={selectedKey} onSelectionChange={handleSelectionChange} />
        );
    },
    args: {
        children: [
            <Section key="1">
                <Header>Cats</Header>
                <Select.Option id="1">Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
            </Section>,
            <Select.Option key="2" id="3">Teemo</Select.Option>
        ],
        fieldChildren: <Label>Pets</Label>
    }
} satisfies Story;

/**
 * TODO: Add description
 */
export const CustomValue = {
    render: function Render(args) {
        return (
            <Select {...args}>
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
    },
    args: {
        items: users,
        fieldChildren: <Label>Users</Label>,
        renderValue: ({ defaultChildren, selectedItem }) => {
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
        }
    }
} satisfies Story;

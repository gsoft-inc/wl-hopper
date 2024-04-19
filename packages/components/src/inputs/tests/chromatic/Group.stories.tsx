import { AddIcon, AngleDownIcon, EyeHiddenIcon, SearchIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Input, TextField } from "react-aria-components";

import { Button } from "../../../buttons/index.ts";
import { Label } from "../../../Label/index.ts";
import { Stack } from "../../../layout/index.ts";
import { Text } from "../../../Text/index.ts";
import { Group } from "../../src/Group.tsx";

const meta = {
    title: "Components/Group",
    component: Group
} satisfies Meta<typeof Group>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <Stack>
            <Group size="sm" {...args} />
            <Group {...args} />
        </Stack>
    ),
    args: {
        children: [
            <Input key="1" />
        ]
    }
};


export const LabelStory: Story = {
    name: "Label",
    render: args => (
        <Stack>
            <TextField>
                <Label>Label</Label>
                <Group size="sm" {...args} />
            </TextField>
            <TextField>
                <Label>Label</Label>
                <Group {...args} />
            </TextField>
        </Stack>
    ),
    args: {
        children: [
            <Input key="1" />
        ]
    }
};

// export const PrefixPhone: Story = {
//     ...Default,
//     args: {
//         ...Default.args,
//         children: [
//             <Select key="1" />,
//             <Input key="2" />
//         ]
//     }
// };

export const PrefixIcon: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [
            <SearchIcon key="1" />,
            <Input key="2" />
        ]
    }
};

export const PrefixText: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Input key="1" />,
            <Text key="2" paddingRight="core_160" color="neutral-weakest">$</Text>
        ]
    }
};

export const SuffixIcon: Story = {
    name: "Suffix, Icon",
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Input key="1" />,
            <AngleDownIcon key="2" />
        ]
    }
};

export const TextAddon: Story = {
    name: "Suffix, Char. limit",
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Input key="1" />,
            <Text key="2" paddingRight="core_160" color="neutral-weakest">$</Text>
        ]
    }
};

export const ButtonStory: Story = {
    name: "Suffix, Clear CTA",
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Input key="1" />,
            <Button key="2" aria-label="Add email" size="sm"><EyeHiddenIcon /></Button>
        ]
    }
};

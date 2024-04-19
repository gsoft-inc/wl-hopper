import { AngleDownIcon, EyeHiddenIcon, SearchIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "react-aria-components";

import { Button } from "../../buttons/index.ts";
import { Stack } from "../../layout/index.ts";
import { Text } from "../../Text/index.ts";
import { Group } from "../src/Group.tsx";


/**
 * TODO: Add description
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Group/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/Group",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
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

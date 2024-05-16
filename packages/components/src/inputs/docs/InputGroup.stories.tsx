import { AngleDownIcon, DismissIcon, SearchIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "react-aria-components";

import { EmbeddedButton } from "../../buttons/index.ts";
import { Stack } from "../../layout/index.ts";
import { Text } from "../../Text/index.ts";
import { InputGroup } from "../src/InputGroup.tsx";


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
    title: "Docs-parts/InputGroup",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: InputGroup
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <Stack>
            <InputGroup size="sm" {...args} />
            <InputGroup {...args} />
        </Stack>
    ),
    args: {
        children: [
            <Input type="text" placeholder="Placeholder" key="1" />
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
            <Input type="text" placeholder="Placeholder" key="2" />
        ]
    }
};

export const PrefixText: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Text key="1">$</Text>,
            <Input type="text" placeholder="Placeholder" key="2" />
        ]
    }
};

export const SuffixIcon: Story = {
    name: "Suffix, Icon",
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Input type="text" placeholder="Placeholder" key="1" />,
            <AngleDownIcon key="2" />
        ]
    }
};

export const SuffixIconFixedSize: Story = {
    name: "Suffix, Icon with fixed size",
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Input type="text" placeholder="Placeholder" key="1" />,
            <AngleDownIcon size="sm" key="2" />
        ]
    }
};

export const TextAddon: Story = {
    name: "Suffix, Char. limit",
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Input type="text" placeholder="Placeholder" key="1" />,
            <Text color="neutral-weakest" key="2">XX</Text>
        ]
    }
};

export const ButtonStory: Story = {
    name: "Suffix, Clear CTA",
    ...Default,
    args: {
        ...Default.args,
        children: [
            <Input type="text" placeholder="Placeholder" key="1" />,
            <EmbeddedButton key="2" aria-label="Add email"><DismissIcon /></EmbeddedButton>
        ]
    }
};

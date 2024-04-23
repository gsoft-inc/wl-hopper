import { AngleDownIcon, DismissIcon, EyeHiddenIcon, EyeVisibleIcon, SearchIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../buttons/index.ts";
import { ErrorMessage } from "../../errorMessage/index.ts";
import { HelperMessage } from "../../helperMessage/index.ts";
import { Label } from "../../Label/index.ts";
import { Stack } from "../../layout/index.ts";
import { TextField, type TextFieldProps } from "../src/TextField.tsx";

/**
 * TODO: Add description
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/TextField/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/TextField",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: TextField,
    args: {
        placeholder: "Placeholder",
        children: [
            <Label key="1">TextField Label</Label>
        ]
    }
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: args => (
        <Stack>
            <TextField size="sm" {...args} />
            <TextField {...args} />
        </Stack>
    )
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
        prefix: <SearchIcon />
    }
};

export const PrefixText: Story = {
    ...Default,
    args: {
        ...Default.args,
        prefix: "$"
    }
};

// export const SuffixIcon: Story = {
//     name: "Suffix, Icon",
//     args: {
//         suffixIcon: <AngleDownIcon />
//     }
// };

// export const SuffixIconFixedSize: Story = {
//     name: "Suffix, Icon with fixed size",
//     args: {
//         suffixIcon: <AngleDownIcon size="sm" />
//     }
// };

export const TextAddon: Story = {
    name: "Suffix, Char. limit",
    ...Default,
    args: {
        ...Default.args,
        showCharacterCount: true,
        maxLength: 60
    }
};

export const ButtonStory: Story = {
    name: "Suffix, Clear CTA",
    ...Default,
    args: {
        ...Default.args,
        isClearable: true
    }
};

// const PasswordStory = (props: TextFieldProps) => {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <TextField
//             {...props}
//             type={showPassword ? "text" : "password"}
//             suffixButton={
//                 <Button onPress={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">
//                     {showPassword ? <EyeHiddenIcon /> : <EyeVisibleIcon />}
//                 </Button>
//             }
//         />
//     );
// };

// export const Password: Story = {
//     render: args => <PasswordStory {...args} />
// };


export const Description: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [
            ...meta.args.children,
            <HelperMessage key="2">Helper message</HelperMessage>
        ]
    }
};


export const Error: Story = {
    ...Default,
    args: {
        ...Default.args,
        children: [
            ...meta.args.children,
            <ErrorMessage key="2">Error message</ErrorMessage>
        ],
        isInvalid: true
    }
};

export const Disabled: Story = {
    ...Default,
    args: {
        ...Default.args,
        isDisabled: true
    }
};

export const ReadOnly: Story = {
    ...Default,
    args: {
        isReadOnly: true
    }
};

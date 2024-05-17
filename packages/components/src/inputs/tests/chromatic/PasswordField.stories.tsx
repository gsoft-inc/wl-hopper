import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { PasswordField } from "../../src/PasswordField.tsx";

const meta = {
    title: "Components/PasswordField",
    component: PasswordField
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Stack>
            <Inline alignY="center">
                <PasswordField aria-label="Label" />
                <PasswordField aria-label="Label" size="sm" />
            </Inline>
            <PasswordField isDisabled aria-label="Label"></PasswordField>
            <PasswordField isReadOnly aria-label="Label"></PasswordField>
            <PasswordField isFluid aria-label="Label"></PasswordField>
            <Div width="10%">
                <PasswordField isFluid aria-label="Label"></PasswordField>
            </Div>
        </Stack>
    )
};

export const Placeholder: Story = {
    render: () => (
        <Stack>
            <Inline alignY="center">
                <PasswordField placeholder="What's your secret?" />
                <PasswordField placeholder="What's your secret?" size="sm" />
            </Inline>
            <PasswordField isDisabled placeholder="What's your secret?"></PasswordField>
            <PasswordField isReadOnly placeholder="What's your secret?"></PasswordField>
            <PasswordField isFluid placeholder="What's your secret?"></PasswordField>
            <Div width="10%">
                <PasswordField isFluid placeholder="What's your secret?"></PasswordField>
            </Div>
        </Stack>
    )
};

export const Value: Story = {
    render: () => (
        <Stack>
            <Inline alignY="center">
                <PasswordField defaultValue="test123!" aria-label="Label" />
                <PasswordField defaultValue="test123!" aria-label="Label" size="sm" />
            </Inline>
            <PasswordField isDisabled defaultValue="test123!" aria-label="Label" />
            <PasswordField isReadOnly defaultValue="test123!" aria-label="Label" />
            <Inline>
                <PasswordField placeholder="What's your secret?" defaultValue="test123!" />
                <PasswordField value="test123!" aria-label="Label" />
            </Inline>
            <PasswordField isFluid defaultValue="test123!" aria-label="Label"></PasswordField>
            <Div width="10%">
                <PasswordField isFluid defaultValue="test123!" aria-label="Label"></PasswordField>
            </Div>
        </Stack>
    )
};

// export const States: Story = {
//     render: () => (
//         <Stack>
//             <PasswordField active placeholder="What's your secret?" />
//             <Inline>
//                 <PasswordField focus placeholder="What's your secret?" />
//                 <PasswordField defaultValue="test123!" focus placeholder="What's your secret?" />
//             </Inline>
//             <Inline>
//                 <PasswordField hover placeholder="What's your secret?" />
//                 <PasswordField defaultValue="test123!" hover placeholder="What's your secret?" />
//             </Inline>
//             <Inline>
//                 <PasswordField focus hover placeholder="What's your secret?" />
//                 <PasswordField defaultValue="test123!" focus hover placeholder="What's your secret?" />
//             </Inline>
//             <PasswordField isDisabled placeholder="What's your secret?" />
//             <PasswordField isReadOnly placeholder="What's your secret?" />
//         </Stack>
//     )
// };

export const Zoom: Story = {
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Inline alignY="center">
                    <PasswordField placeholder="What's your secret?" />
                    <PasswordField placeholder="What's your secret?" size="sm" />
                </Inline>
            </Div>
            <Div className="zoom-out">
                <Inline alignY="center">
                    <PasswordField placeholder="What's your secret?" />
                    <PasswordField placeholder="What's your secret?" size="sm" />
                </Inline>
            </Div>
        </Stack>
    )
};

export const Styling: Story = {
    render: () => (
        <Inline>
            <PasswordField border="core_amanita-600" aria-label="Label" />
            <PasswordField className="border-red" aria-label="Label" />
            <PasswordField style={{ border: "1px solid red" }} aria-label="Label" />
        </Inline>
    )
};

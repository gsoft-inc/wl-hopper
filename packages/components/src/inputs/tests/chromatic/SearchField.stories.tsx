import { MailIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";

import { Inline, Stack } from "../../../layout/index.ts";
import { SearchField } from "../../src/SearchField.tsx";

const meta = {
    title: "Components/SearchField",
    component: SearchField
} satisfies Meta<typeof SearchField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Stack>
            <Inline alignY="center">
                <SearchField aria-label="Label" />
                <SearchField aria-label="Label" size="sm" />
            </Inline>
            <Inline alignY="center">
                <SearchField isLoading aria-label="Label"></SearchField>
                <SearchField isLoading aria-label="Label" size="sm"></SearchField>
            </Inline>
            <SearchField isDisabled aria-label="Label"></SearchField>
            <SearchField isReadOnly aria-label="Label"></SearchField>
            <SearchField isFluid aria-label="Label"></SearchField>
            <Div width="10%">
                <SearchField isFluid aria-label="Label"></SearchField>
            </Div>
            <SearchField isLoading isFluid aria-label="Label"></SearchField>
        </Stack >
    )
};

export const Placeholder: Story = {
    render: () => (
        <Stack>
            <Inline alignY="center">
                <SearchField placeholder="Where to?" />
                <SearchField placeholder="Where to?" size="sm" />
            </Inline>
            <SearchField isLoading placeholder="Where to?" />
            <SearchField isDisabled placeholder="Where to?"></SearchField>
            <SearchField isReadOnly placeholder="Where to?"></SearchField>
            <SearchField isFluid placeholder="Where to?"></SearchField>
            <Div width="10%">
                <SearchField isFluid placeholder="Where to?"></SearchField>
            </Div>
            <SearchField isLoading isFluid placeholder="Where to?"></SearchField>
        </Stack>
    )
};

export const Value: Story = {
    render: () => (
        <Stack>
            <Inline alignY="center">
                <SearchField defaultValue="Mars" aria-label="Label" />
                <SearchField defaultValue="Mars" aria-label="Label" size="sm" />
            </Inline>
            <SearchField isLoading defaultValue="Mars" aria-label="Label" />
            <SearchField isDisabled defaultValue="Mars" aria-label="Label" />
            <SearchField isReadOnly defaultValue="Mars" aria-label="Label" />
            <Inline>
                <SearchField placeholder="Where to?" defaultValue="Mars" />
                <SearchField value="Mars" />
            </Inline>
            <SearchField isFluid defaultValue="Mars" aria-label="Label"></SearchField>
            <Div width="10%">
                <SearchField isFluid defaultValue="Mars" aria-label="Label"></SearchField>
            </Div>
            <SearchField isLoading isFluid defaultValue="Mars" aria-label="Label"></SearchField>
        </Stack>
    )
};

export const CustomIcon: Story = {
    render: () => (
        <Stack>
            <Inline alignY="center">
                <SearchField icon={<MailIcon />} placeholder="Where to?" aria-label="Label" />
                <SearchField icon={<MailIcon />} placeholder="Where to?" aria-label="Label" size="sm" />
            </Inline>
            <SearchField icon={<MailIcon />} defaultValue="SpaceX will win the race!" aria-label="Label" />
            <SearchField isLoading icon={<MailIcon />} placeholder="Where to?" />
            <SearchField isDisabled icon={<MailIcon />} placeholder="Where to?" />
            <SearchField isReadOnly icon={<MailIcon />} placeholder="Where to?" />
            <SearchField isFluid icon={<MailIcon />} placeholder="Where to?" />
            <Div width="10%">
                <SearchField isFluid icon={<MailIcon />} placeholder="Where to?" />
            </Div>
        </Stack>
    )
};

export const NoIcon: Story = {
    render: () => (
        <Stack>
            <SearchField icon={null} placeholder="Where to?" />
            <SearchField icon={null} defaultValue="SpaceX will win the race!" />
            <SearchField isLoading icon={null} placeholder="Where to?" />
            <SearchField isDisabled icon={null} placeholder="Where to?" />
            <SearchField isReadOnly icon={null} placeholder="Where to?" />
            <SearchField isFluid icon={null} placeholder="Where to?" />
            <Div width="10%">
                <SearchField isFluid icon={null} placeholder="Where to?" />
            </Div>
        </Stack>
    )
};

export const States: Story = {
    render: () => (
        <Stack>
            <SearchField active placeholder="Where to?" />
            <Inline>
                <SearchField focus placeholder="Where to?" />
                <SearchField defaultValue="Mars" focus placeholder="Where to?" />
                <SearchField isLoading defaultValue="Mars" focus placeholder="Where to?" />
            </Inline>
            <Inline>
                <SearchField hover placeholder="Where to?" />
                <SearchField defaultValue="Mars" hover placeholder="Where to?" />
                <SearchField isLoading defaultValue="Mars" hover placeholder="Where to?" />
            </Inline>
            <Inline>
                <SearchField focus hover placeholder="Where to?" />
                <SearchField defaultValue="Mars" focus hover placeholder="Where to?" />
                <SearchField isLoading defaultValue="Mars" focus hover placeholder="Where to?" />
            </Inline>
            <SearchField isDisabled placeholder="Where to?" />
            <SearchField isReadOnly placeholder="Where to?" />
        </Stack>
    )
};

export const Zoom: Story = {
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Inline alignY="center">
                    <SearchField placeholder="Where to?" />
                    <SearchField placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
            <Div className="zoom-out">
                <Inline alignY="center">
                    <SearchField placeholder="Where to?" />
                    <SearchField placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
        </Stack>
    )
};

export const Styling: Story = {
    render: () => (
        <Inline>
            <SearchField border="core_amanita-600" aria-label="Label" />
            <SearchField className="border-red" aria-label="Label" />
            <SearchField style={{ border: "1px solid red" }} aria-label="Label" />
            <SearchField wrapperProps={{ className: "border-red" }} aria-label="Label" />
            <SearchField wrapperProps={{ style: { border: "1px solid red" } }} aria-label="Label" />
        </Inline>
    )
};

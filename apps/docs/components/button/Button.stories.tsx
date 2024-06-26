import type { Meta, StoryObj } from "@storybook/react";
import { ExternalLinkIcon, GithubIcon, NpmIcon, Icon } from "@/components/icon";

import Button from "./Button";

const meta = {
    title: "components/Button",
    component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Get started"
    }
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Github"
    }
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "view on npm"
    }
};

export const Sizes: Story = {
    args: {
        children: "Get started",
        variant: "secondary"
    },
    render: args => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
            <Button {...args} size="md" />
            <Button {...args} size="sm" />
        </div>
    )
};

export const AsLink: Story = {
    args: {
        as: "a",
        href: "https://www.npmjs.com/package/@hopper-ui/components",
        target: "_blank"
    },
    render: args => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Button variant="secondary" size="md" {...args} >
                Github
                <Icon src={ExternalLinkIcon} slot="end-icon" />
            </Button>
            <Button variant="ghost" size="sm" {...args} >
                View source
                <Icon src={GithubIcon} slot="icon" />
            </Button>
            <Button variant="ghost" size="sm" {...args} >
                View on npm
                <Icon src={NpmIcon} slot="icon" />
            </Button>
            <Button variant="ghost" size="sm" {...args} >
                Report an issue
                <Icon src={ExternalLinkIcon} slot="icon" />
            </Button>
        </div>
    )
};

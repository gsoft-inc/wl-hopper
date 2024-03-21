import type { Meta, StoryObj } from "@storybook/react";
import { NpmIcon, ComponentIcon, ExternalLinkIcon, GithubIcon, TokenIcon } from "./index.tsx";

import Icon from "./Icon";

const meta = {
    title: "Ui/Icon",
    component: Icon
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Default: Story = {
    render: () => <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Icon src={NpmIcon} />
        <Icon src={ExternalLinkIcon} />
        <Icon src={GithubIcon} />
        <Icon src={ComponentIcon} />
        <Icon src={TokenIcon} />
    </div>
};

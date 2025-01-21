import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../buttons/index.ts";
import { Content } from "../../../layout/index.ts";
import { Link } from "../../../Link/index.ts";
import { CompactCallout } from "../../src/index.ts";

const meta = {
    title: "Components/Callout/Compact",
    component: CompactCallout
} satisfies Meta<typeof CompactCallout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: props => (
        <CompactCallout {...props}>
            <Content>Callout content</Content>
        </CompactCallout>
    )
} satisfies Story;

export const Inline = {
    ...Default,
    args: {
        fillStyle: "subtleFill"
    }
} satisfies Story;

export const Information = {
    ...Default,
    args: {
        variant: "information"
    }
} satisfies Story;

export const Warning = {
    ...Default,
    args: {
        variant: "warning"
    }
} satisfies Story;

export const Success = {
    ...Default,
    args: {
        variant: "success"
    }
} satisfies Story;

export const Upsell = {
    ...Default,
    args: {
        variant: "upsell"
    }
} satisfies Story;

export const WithClose = {
    ...Default,
    args: {
        onClose: () => alert("Closed")
    }
} satisfies Story;

export const WithCta = {
    render: props => (
        <CompactCallout {...props}>
            <Content>Callout content</Content>
            <Button variant="secondary" size="sm">Label</Button>
        </CompactCallout>
    )
} satisfies Story;

export const WithButtonAndCta = {
    render: props => (
        <CompactCallout {...props}>
            <Content>Callout content</Content>
            <Button variant="secondary" size="sm">Label</Button>
        </CompactCallout>
    ),
    args: {
        onClose: () => alert("Closed")
    }
} satisfies Story;

export const WithLink = {
    render: props => (
        <CompactCallout {...props}>
            <Content>Callout content</Content>
            <Link variant="secondary" size="sm">Label</Link>
        </CompactCallout>
    )
} satisfies Story;

export const WithButtonAndLink = {
    render: props => (
        <CompactCallout {...props}>
            <Content>Callout content</Content>
            <Link variant="secondary" size="sm">Label</Link>
        </CompactCallout>
    ),
    args: {
        onClose: () => alert("Closed")
    }
} satisfies Story;

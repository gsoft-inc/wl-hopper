import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../../src/Card.tsx";

const meta = {
    title: "Components/Card",
    component: Card
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main = {
    render: props => (
        <Card {...props}>
            Header
            Content
            Footer
        </Card>
    )
} satisfies Story;

export const SecondLevel = {
    render: props => (
        <Card variant="second-level" {...props}>
            Header
            Content
            Footer
        </Card>
    )
} satisfies Story;

export const EmbeddedCard = {
    render: props => (
        <Card variant="second-level" {...props}>
            Header
            <Card>
                Embedded
            </Card>
            Footer
        </Card>
    )
} satisfies Story;

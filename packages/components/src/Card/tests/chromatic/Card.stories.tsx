import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../../../Header/index.ts";
import { Content, Footer } from "../../../layout/index.ts";
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
            <Header>
                Header
            </Header>
            <Content>
                Content
            </Content>
            <Footer>
                Footer
            </Footer>
        </Card>
    )
} satisfies Story;

export const SecondLevel = {
    render: props => (
        <Card variant="second-level" {...props}>
            <Header>
                Header
            </Header>
            <Content>
                Content
            </Content>
            <Footer>
                Footer
            </Footer>
        </Card>
    )
} satisfies Story;

export const EmbeddedCard = {
    render: props => (
        <Card variant="second-level" {...props}>
            <Header>
                Header
            </Header>
            <Content>
                <Card>
                    Embedded
                </Card>
            </Content>
            <Footer>
                Footer
            </Footer>
        </Card>
    )
} satisfies Story;

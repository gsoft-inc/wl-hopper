import type { Meta, StoryObj } from "@storybook/react";

import Title from "./Title";

const meta = {
    title: "Ui/Title",
    component: Title,
    argTypes: {
        as: {
            control: { type: "select" }
        },
        level: {
            control: { type: "select" }
        }
    },
    args: {
        children: "Nothing is cheap"
    }
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Level: Story = {
    render: args => {
        return (
            <>
                <Title {...args} level={1} />
                <Title {...args} level={2} />
                <Title {...args} level={3} />
                <Title {...args} level={4} />
                <Title {...args} level={5} />
            </>
        )
        ;
    }
};

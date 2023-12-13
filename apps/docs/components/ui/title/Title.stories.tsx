import type { Meta, StoryObj } from "@storybook/react";

import Title from "./Title";

const meta: Meta<typeof Title> = {
    title: "Ui/Title",
    component: Title,
    argTypes: {
        as: {
            control: { type: "select" }
        },
        level: {
            control: { type: "select" }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
    args: {
        children: "Nothing is cheap"
    }
};

export const Level: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => {
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

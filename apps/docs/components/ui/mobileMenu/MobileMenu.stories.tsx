import type { Meta, StoryObj } from "@storybook/react";

import MobileMenu from "./MobileMenu";
import MobileMenuTrigger from "./MobileMenuTrigger";

const meta = {
    title: "Mobile/Menu",
    component: MobileMenu,
    parameters: {
        viewport: {
            defaultViewport: "mobile1"
        }
    }
} satisfies Meta<typeof MobileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
type TriggerStory = StoryObj<typeof MobileMenuTrigger>;

export const Default: Story = {
    args: {
        isOpen: true
    }
};

export const Trigger: TriggerStory = {
    args: {
        onToggle: () => {}
    },
    render: args => {
        return (
            <MobileMenuTrigger {...args} />
        );
    }
};

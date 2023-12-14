import type { Meta, StoryObj } from "@storybook/react";

import MobileMenu from "./MobileMenu";
import MobileMenuTrigger from "./MobileMenuTrigger";

const meta: Meta<typeof MobileMenu> = {
    title: "Mobile/Menu",
    component: MobileMenu
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;
type TriggerStory = StoryObj<typeof MobileMenuTrigger>;

export const Default: Story = {
    args: {
        isOpen: true
    },
    parameters: {
        viewport: {
            defaultViewport: "mobile1"
        }
    }
}

export const Trigger: TriggerStory = {
    args: {
        onToggle: () => {}
    },
    render: (args) => {
        return (
            <MobileMenuTrigger {...args} />
        )
    },
    parameters: {
        viewport: {
            defaultViewport: "mobile1"
        }
    }
};

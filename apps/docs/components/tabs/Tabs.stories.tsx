import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Component/Tabs",
    component: Tabs
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        tabs: [
            {
                category: "tab1",
                title: "Tab 1"
            },
            {
                category: "tab2",
                title: "Tab 2"
            },
            {
                category: "tab3",
                title: "Tab 3"
            }
        ],
        children: [
            <div key="tab1">Tab 1 content</div>,
            <div key="tab2">Tab 2 content</div>,
            <div key="tab3">Tab 3 content</div>
        ]

    }
};

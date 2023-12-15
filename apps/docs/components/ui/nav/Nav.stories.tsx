import type { Meta, StoryObj } from "@storybook/react";

import Nav from "./Nav";

const meta = {
    title: "Ui/Nav",
    component: Nav
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                "label": "Tokens",
                "path": "/tokens/getting-started/introduction",
                "status": "ready"
            },
            {
                "label": "Icons",
                "path": "/icons/getting-started/introduction",
                "status": "ready"
            },
            {
                "label": "Components",
                "path": "/components/installation",
                "status": "not-ready"
            }
        ]
    }
};

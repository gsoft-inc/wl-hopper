import type { Meta, StoryObj } from "@storybook/react";

import Nav from "./Nav";

const meta: Meta<typeof Nav> = {
    title: "Ui/Nav",
    component: Nav
};

export default meta;
type Story = StoryObj<typeof Nav>;

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
}

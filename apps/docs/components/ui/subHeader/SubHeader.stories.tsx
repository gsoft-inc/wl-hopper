import type { Meta, StoryObj } from "@storybook/react";

import SubHeader from "./SubHeader";

const meta = {
    title: "Mobile/SubHeader",
    component: SubHeader,
    parameters: {
        viewport: {
            defaultViewport: "mobile1"
        }
    }
} satisfies Meta<typeof SubHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        links: [
            {
                title: "Section 1",
                url: "#section-1",
                id: "section-1"
            },
            {
                title: "Section 2",
                url: "#section-2",
                id: "section-2"
            },
            {
                title: "Section 3",
                url: "#section-3",
                id: "section-3"
            }
        ],
        toggleOpenState: () => {}
    }
};

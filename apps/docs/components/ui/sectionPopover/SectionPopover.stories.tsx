import type { Meta, StoryObj } from "@storybook/react";

import SectionPopover from "./sectionPopover";

const meta: Meta<typeof SectionPopover> = {
    title: "Ui/SectionPopover",
    component: SectionPopover
};

export default meta;
type Story = StoryObj<typeof SectionPopover>;

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
    },
    parameters: {
        viewport: {
            defaultViewport: "mobile1"
        }
    }
}

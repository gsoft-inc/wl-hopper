import { Button } from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverTrigger } from "../../src/Popover.tsx";

const meta = {
    title: "Components/Popover",
    component: Popover
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dev = {
    render: args => (
        <>
            <PopoverTrigger>
                <Button>Open Popover</Button>
                <Popover {...args} >
                    <div>Title</div>
                    <div>content</div>
                    <div>footer</div>
                </Popover>
            </PopoverTrigger>
        </>
    ),
    args: {
        isOpen: true
    }
} satisfies Story;

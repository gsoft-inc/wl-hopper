import { Button, Heading } from "@hopper-ui/components";
import { withClassInject } from "@hopper-ui/storybook-addon";
import type { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverTrigger } from "../../src/Popover.tsx";

const meta = {
    title: "Components/Popover",
    component: Popover,
    decorators: [Story => <Story />, withClassInject]

} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dev = {
    render: args => (
        <>
            <PopoverTrigger>
                <Button>Open Popover</Button>
                <Popover {...args} >
                    <Heading>Title</Heading>
                    <p>content</p>
                    <div>footer</div>
                </Popover>
            </PopoverTrigger>
        </>
    ),
    args: {
        isOpen: true
    }
} satisfies Story;

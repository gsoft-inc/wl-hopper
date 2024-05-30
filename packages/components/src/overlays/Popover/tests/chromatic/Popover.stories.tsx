import { Button, Heading, Footer, Link, ButtonGroup, Stack, Text } from "@hopper-ui/components";
import type { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverTrigger } from "../../src/Popover.tsx";

const meta = {
    title: "Components/Popover",
    component: Popover
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

const TRIGGER = "Trigger";
const TITLE = "Engagement score";
const CONTENT = "The engagement score is the weighted average of the key metric scores below. To calculate these, we take the latest answers from each survey questions within the last 90 days.";
const LINK = "Tell me more";
const PRIMARY_ACTION = "Go it";
const SECONDARY_ACTION = "Next";

export const Default = {
    render: args => (
        <>
            <Stack>
                <h1>Default</h1>
                <PopoverTrigger>
                    <Button>{TRIGGER}</Button>
                    <Popover {...args} >
                        <Text>{TITLE}</Text>
                        <p>{CONTENT}</p>
                    </Popover>
                </PopoverTrigger>

                <h1>Heading</h1>
                <PopoverTrigger>
                    <Button>{TRIGGER}</Button>
                    <Popover {...args} >
                        <Heading>{TITLE}</Heading>
                        <p>{CONTENT}</p>
                    </Popover>
                </PopoverTrigger>

                <h1>Link</h1>
                <PopoverTrigger>
                    <Button>{TRIGGER}</Button>
                    <Popover {...args} >
                        <Text>{TITLE}</Text>
                        <p>{CONTENT}</p>
                        <Footer>
                            <Link href="#">{LINK}</Link>
                        </Footer>
                    </Popover>
                </PopoverTrigger>

                <h1>Button</h1>
                <PopoverTrigger>
                    <Button>{TRIGGER}</Button>
                    <Popover {...args} >
                        <Text>{TITLE}</Text>
                        <span>{CONTENT}</span>
                        <Button>{PRIMARY_ACTION}</Button>
                    </Popover>
                </PopoverTrigger>

                <h1>Button Group</h1>
                <PopoverTrigger>
                    <Button>{TRIGGER}</Button>
                    <Popover {...args} >
                        <Text>{TITLE}</Text>
                        <p>{CONTENT}</p>
                        <ButtonGroup>
                            <Button variant="secondary">{SECONDARY_ACTION}</Button>
                            <Button>{PRIMARY_ACTION}</Button>
                        </ButtonGroup>
                    </Popover>
                </PopoverTrigger>

                <h1>Footer</h1>
                <PopoverTrigger>
                    <Button>{TRIGGER}</Button>
                    <Popover {...args} >
                        <Text>{TITLE}</Text>
                        <p>{CONTENT}</p>
                        <Footer>
                            All right reserved.
                        </Footer>
                        <Button>{PRIMARY_ACTION}</Button>
                    </Popover>
                </PopoverTrigger>
            </Stack>
        </>
    )
} satisfies Story;

export const Styling = {
    render: args => (
        <>
            <h1>Styled System</h1>
            <PopoverTrigger>
                <Button>{TRIGGER}</Button>
                <Popover {...args} borderRadius={0} border="transparent" boxShadow="none">
                    <Text>{TITLE}</Text>
                    <p>{CONTENT}</p>
                </Popover>
            </PopoverTrigger>
        </>
    )
} satisfies Story;

import { Div, type DivProps } from "@hopper-ui/styled-system";
import { Button } from "../../src/Button.tsx";

import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../Text/src/Text.tsx";
import { PlusIcon } from "@hopper-ui/icons";

const meta: Meta<typeof Button> = {
    title: "Components/Buttons/Button",
    component: Button,
    args: {
        children: "Click me!"
    }
};

export default meta;

type ButtonStory = StoryObj<typeof meta>;

// TODO: use real layout component
const Inline = ({ alignY, ...props }: DivProps & { alignY?: string }) => <Div {...props} alignItems={alignY} display="flex" UNSAFE_gap="1.25rem" />;
const Stack = (props: DivProps) => <Div {...props} display="flex" flexDirection="column" UNSAFE_gap="1.25rem" />;

export const Primary: ButtonStory = {
    name: "primary",
    render: args => {
        return (
            <Stack>
                <Inline alignY="end">
                    <Button size="sm" {...args}>Button</Button>
                    <Button {...args}>Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button isLoading size="sm" {...args}>Button</Button>
                    <Button isLoading {...args}>Button</Button>
                </Inline>
                <Div>
                    <Button fluid {...args}>Button</Button>
                </Div>
                <Div UNSAFE_width="10%">
                    <Button fluid {...args}>Button</Button>
                </Div>
                <Div>
                    <Button isLoading fluid {...args}>Button</Button>
                </Div>
                <Inline alignY="end">
                    <Button size="sm" {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                </Inline>
                {/* TODO missing iconlist */}
                {/* <Inline alignY="end">
                    <Button size="sm" {...args}>
                        <IconList>
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                        <Text>Button</Text>
                    </Button>
                    <Button {...args}>
                        <IconList>
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                        <Text>Button</Text>
                    </Button>
                </Inline> */}
                <Inline alignY="end">
                    <Button isLoading size="sm" {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button isLoading {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                </Inline>
                <Div>
                    <Button isDisabled {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Stack>
                    <Button fluid {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button fluid {...args}>
                        <Text>Button</Text>
                    </Button>
                </Stack>
                <Inline alignY="end">
                    <Button size="sm" {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                </Inline>
                {/* <Inline alignY="end">
                    <Button size="sm" {...args}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                    </Button>
                    <Button {...args}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                    </Button>
                </Inline> */}
                <Inline alignY="end">
                    <Button isLoading size="sm" {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button isLoading {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                </Inline>
                <Div>
                    <Button isDisabled {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                </Div>
                <Stack>
                    <Button fluid {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button fluid {...args}>
                        <Text>Button</Text>
                    </Button>
                </Stack>
                <Stack>
                    <Inline alignY="end">
                        <Button data-pressed size="sm" {...args}>Button</Button>
                        <Button data-pressed {...args}>Button</Button>
                        <Button isLoading data-pressed {...args}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button data-focus-visible size="sm" {...args}>Button</Button>
                        <Button data-focus-visible {...args}>Button</Button>
                        <Button isLoading data-focus-visible {...args}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button data-hovered size="sm" {...args}>Button</Button>
                        <Button data-hovered {...args}>Button</Button>
                        <Button isLoading data-hovered {...args}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button data-focus-visible data-hovered size="sm" {...args}>Button</Button>
                        <Button data-focus-visible data-hovered {...args}>Button</Button>
                        <Button isLoading data-focus-visible data-hovered {...args}>Button</Button>
                    </Inline>
                </Stack>
                <Stack>
                    {/* TODO: states tests don't work like this  */}
                    <Inline alignY="end">
                        <Button isDisabled size="sm" {...args}>Button</Button>
                        <Button isDisabled {...args}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button isDisabled data-pressed size="sm" {...args}>Button</Button>
                        <Button isDisabled data-pressed {...args}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button isDisabled data-focus-visible size="sm" {...args}>Button</Button>
                        <Button isDisabled data-focus-visible {...args}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button isDisabled data-hovered size="sm" {...args}>Button</Button>
                        <Button isDisabled data-hovered {...args}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button isDisabled data-focus-visible data-hovered size="sm" {...args}>Button</Button>
                        <Button isDisabled data-focus-visible data-hovered {...args}>Button</Button>
                    </Inline>
                </Stack>
                <Div className="zoom-in">
                    <Button {...args}>Button</Button>
                </Div>
                <Div className="zoom-out'">
                    <Button {...args}>Button</Button>
                </Div>
            </Stack>
        );
    }
};

export const Secondary: ButtonStory = {
    ...Primary,
    name: "secondary",
    args: {
        variant: "secondary"
    }
};

export const Tertiary: ButtonStory = {
    ...Primary,
    name: "tertiary",
    args: {
        variant: "tertiary"
    }
};


export const Upsell: ButtonStory = {
    ...Primary,
    name: "upsell",
    args: {
        variant: "upsell"
    }
};


export const Negative: ButtonStory = {
    ...Primary,
    name: "negative",
    args: {
        variant: "negative"
    }
};

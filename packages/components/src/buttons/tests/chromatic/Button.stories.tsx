import { Div } from "@hopper-ui/styled-system";
import { Button } from "../../src/Button.tsx";
import { IconList } from "../../../IconList/src/IconList.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../../Text/src/Text.tsx";
import { RefreshIcon, PlusIcon } from "@hopper-ui/icons";
import { within } from "@storybook/test";
import { Inline, Stack } from "../../../layout/index.ts";


const meta = {
    title: "Components/Buttons/Button",
    component: Button,
    args: {
        children: "Click me!"
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: args => {
        return (
            <Stack>
                <Stack>
                    <h2>Default</h2>
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
                    <Div width="10%">
                        <Button fluid {...args}>Button</Button>
                    </Div>
                    <Div>
                        <Button isLoading fluid {...args}>Button</Button>
                    </Div>
                </Stack>
                <Stack>
                    <h2>Icons</h2>
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
                    <Inline alignY="end">
                        <Button size="sm" {...args}>
                            <IconList>
                                <RefreshIcon /><RefreshIcon /><RefreshIcon />
                            </IconList>
                            <Text>Button</Text>
                        </Button>
                        <Button {...args}>
                            <IconList>
                                <RefreshIcon /><RefreshIcon /><RefreshIcon />
                            </IconList>
                            <Text>Button</Text>
                        </Button>
                    </Inline>
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
                </Stack>
                <Stack>
                    <h1>End icons</h1>
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
                    <Inline alignY="end">
                        <Button size="sm" {...args}>
                            <Text>Button</Text>
                            <IconList slot="end-icon">
                                <RefreshIcon /><RefreshIcon /><RefreshIcon />
                            </IconList>
                        </Button>
                        <Button {...args}>
                            <Text>Button</Text>
                            <IconList slot="end-icon">
                                <RefreshIcon /><RefreshIcon /><RefreshIcon />
                            </IconList>
                        </Button>
                    </Inline>
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
                </Stack>
                <Stack>
                    <h1>Zoom</h1>
                    <Inline alignY="end">
                        <Div className="zoom-in">
                            <Button {...args}>Button</Button>
                        </Div>
                        <Div className="zoom-out'">
                            <Button {...args}>Button</Button>
                        </Div>
                    </Inline>
                </Stack>
            </Stack>
        );
    }
};
export const Secondary: Story = {
    ...Primary,
    args: {
        variant: "secondary"
    }
};

export const Tertiary: Story = {
    ...Primary,
    args: {
        variant: "tertiary"
    }
};

export const Upsell: Story = {
    ...Primary,
    args: {
        variant: "upsell"
    }
};

export const Negative: Story = {
    ...Primary,
    args: {
        variant: "negative"
    }
};

export const PrimaryStates: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const buttons = canvas.getAllByRole("button");

        buttons.forEach(button => {
            if (button.getAttribute("disabled") !== "") { // don't try and force states on a disabled input
                if (button.getAttribute("data-chromatic-force-press")) {
                    button.setAttribute("data-pressed", "true");
                    button.removeAttribute("data-chromatic-force-press");
                }

                if (button.getAttribute("data-chromatic-force-focus")) {
                    button.setAttribute("data-focus-visible", "true");
                    button.removeAttribute("data-chromatic-force-focus");
                }

                if (button.getAttribute("data-chromatic-force-hover")) {
                    button.setAttribute("data-hovered", "true");
                    button.removeAttribute("data-chromatic-force-hover");
                }
            }
        });
    },
    render: args => {
        return (
            <Stack>
                <h1>Default</h1>
                <Inline alignX="end">
                    <Button size="sm" {...args}>Button</Button>
                    <Button {...args}>Button</Button>
                    <Button {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button {...args}>
                        <Text>Button</Text>
                        <IconList>
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                    <Button {...args}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                </Inline>
                <h1>Disabled</h1>
                <Inline alignX="end">
                    <Button isDisabled size="sm" {...args}>Button</Button>
                    <Button isDisabled {...args}>Button</Button>
                    <Button isDisabled {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button isDisabled {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button isDisabled {...args}>
                        <Text>Button</Text>
                        <IconList>
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                    <Button isDisabled {...args}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                </Inline>
                <h1>Pressed</h1>
                <Inline alignX="end">
                    <Button data-chromatic-force-press size="sm" {...args}>Button</Button>
                    <Button data-chromatic-force-press {...args}>Button</Button>
                    <Button data-chromatic-force-press {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button data-chromatic-force-press {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button data-chromatic-force-press {...args}>
                        <Text>Button</Text>
                        <IconList>
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                    <Button data-chromatic-force-press {...args}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                </Inline>
                <h1>Focus Visible</h1>
                <Inline alignX="end">
                    <Button data-chromatic-force-focus size="sm" {...args}>Button</Button>
                    <Button data-chromatic-force-focus {...args}>Button</Button>
                    <Button data-chromatic-force-focus {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button data-chromatic-force-focus {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button data-chromatic-force-focus {...args}>
                        <Text>Button</Text>
                        <IconList>
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                    <Button data-chromatic-force-focus {...args}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                </Inline>
                <h1>Hovered</h1>
                <Inline alignX="end">
                    <Button data-chromatic-force-hover size="sm" {...args}>Button</Button>
                    <Button data-chromatic-force-hover {...args}>Button</Button>
                    <Button data-chromatic-force-hover {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button data-chromatic-force-hover {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button data-chromatic-force-hover {...args}>
                        <Text>Button</Text>
                        <IconList>
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                    <Button data-chromatic-force-hover {...args}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                </Inline>
                <h1>Focus Visible and Hovered</h1>
                <Inline alignX="end">
                    <Button data-chromatic-force-focus data-chromatic-force-hover size="sm" {...args}>Button</Button>
                    <Button data-chromatic-force-focus data-chromatic-force-hover {...args}>Button</Button>
                    <Button data-chromatic-force-focus data-chromatic-force-hover {...args}>
                        <PlusIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button data-chromatic-force-focus data-chromatic-force-hover {...args}>
                        <Text>Button</Text>
                        <PlusIcon slot="end-icon" />
                    </Button>
                    <Button data-chromatic-force-focus data-chromatic-force-hover {...args}>
                        <Text>Button</Text>
                        <IconList>
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                    <Button data-chromatic-force-focus data-chromatic-force-hover {...args}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <RefreshIcon /><RefreshIcon /><RefreshIcon />
                        </IconList>
                    </Button>
                </Inline>
            </Stack>
        );
    }
};
export const SecondaryStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "secondary"
    }
};

export const TertiaryStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "tertiary"
    }
};

export const UpsellStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "upsell"
    }
};

export const NegativeStates: Story = {
    ...PrimaryStates,
    args: {
        variant: "negative"
    }
};

import { Select, SelectOption, SelectOptions, type SelectProps } from "@hopper-ui/components";
import { AddIcon, SparklesIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { Label } from "react-aria-components";

import { Button } from "../../../buttons/index.ts";
import { Header } from "../../../Header/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { Section } from "../../../Section/index.ts";
import { Text } from "../../../typography/Text/index.ts";

const meta = {
    title: "Components/Select",
    component: Select,
    args: {
        children: [],
        "aria-label": "Animals"
    }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const marginBottomDecoratorSM = [
    (Story: StoryFn) => (
        <Div UNSAFE_marginBottom="10rem">
            <Story />
        </Div>
    )
];

const marginBottomDecoratorMD = [
    (Story: StoryFn) => (
        <Div UNSAFE_marginBottom="20rem">
            <Story />
        </Div>
    )
];

const marginBottomDecoratorLG = [
    (Story: StoryFn) => (
        <Div UNSAFE_marginBottom="23rem">
            <Story />
        </Div>
    )
];


export const OnlyItems = {
    render: args => (
        <Select {...args}>
            <SelectOptions>
                <SelectOption id="dog">Dog</SelectOption>
                <SelectOption id="cat">Cat</SelectOption>
                <SelectOption id="frog">Frog</SelectOption>
            </SelectOptions>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Sections = {
    render: args => (
        <Select {...args}>
            <SelectOptions>
                <Section>
                    <Header>Cats</Header>
                    <SelectOption id="1">Zoomy</SelectOption>
                    <SelectOption id="2">Voodoo</SelectOption>
                    <SelectOption id="3">Dusty</SelectOption>
                    <SelectOption id="4">Rengar</SelectOption>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <SelectOption id="5">Teemo</SelectOption>
                    <SelectOption id="6">Scooter</SelectOption>
                    <SelectOption id="7">Prince</SelectOption>
                </Section>
            </SelectOptions>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: marginBottomDecoratorMD
} satisfies Story;

export const Footer = {
    render: args => (
        <Select {...args}>
            <SelectOptions footer={<Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>}>
                <Section>
                    <Header>Cats</Header>
                    <SelectOption id="1">Zoomy</SelectOption>
                    <SelectOption id="2">Voodoo</SelectOption>
                    <SelectOption id="3">Dusty</SelectOption>
                    <SelectOption id="4">Rengar</SelectOption>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <SelectOption id="5">Teemo</SelectOption>
                    <SelectOption id="6">Scooter</SelectOption>
                    <SelectOption id="7">Prince</SelectOption>
                </Section>
            </SelectOptions>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: marginBottomDecoratorLG
} satisfies Story;

export const TextFooter = {
    render: args => (
        <Select {...args}>
            <SelectOptions footer={<Text>This is a list of animals</Text>}>
                <Section>
                    <Header>Cats</Header>
                    <SelectOption id="1">Zoomy</SelectOption>
                    <SelectOption id="2">Voodoo</SelectOption>
                    <SelectOption id="3">Dusty</SelectOption>
                    <SelectOption id="4">Rengar</SelectOption>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <SelectOption id="5">Teemo</SelectOption>
                    <SelectOption id="6">Scooter</SelectOption>
                    <SelectOption id="7">Prince</SelectOption>
                </Section>
            </SelectOptions>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: marginBottomDecoratorLG
} satisfies Story;

export const Sizes = {
    render: args => (
        <Inline>
            <Select {...args}>
                <SelectOptions>
                    <Section>
                        <Header>Cats</Header>
                        <SelectOption id="1">Zoomy</SelectOption>
                        <SelectOption id="2">Voodoo</SelectOption>
                        <SelectOption id="3">Dusty</SelectOption>
                        <SelectOption id="4">Rengar</SelectOption>
                    </Section>
                    <Section>
                        <Header>Dogs</Header>
                        <SelectOption id="5">Teemo</SelectOption>
                        <SelectOption id="6">Scooter</SelectOption>
                        <SelectOption id="7">Prince</SelectOption>
                    </Section>
                </SelectOptions>
            </Select>
            <Select {...args} size="md">
                <SelectOptions>
                    <Section>
                        <Header>Cats</Header>
                        <SelectOption id="1">Zoomy</SelectOption>
                        <SelectOption id="2">Voodoo</SelectOption>
                        <SelectOption id="3">Dusty</SelectOption>
                        <SelectOption id="4">Rengar</SelectOption>
                    </Section>
                    <Section>
                        <Header>Dogs</Header>
                        <SelectOption id="5">Teemo</SelectOption>
                        <SelectOption id="6">Scooter</SelectOption>
                        <SelectOption id="7">Prince</SelectOption>
                    </Section>
                </SelectOptions>
            </Select>
        </Inline>
    ),
    args: {
        defaultSelectedKey: "2",
        isOpen: true
    },
    decorators: marginBottomDecoratorMD
} satisfies Story;

export const OpenWithSelectedItem = {
    ...OnlyItems,
    args: {
        defaultSelectedKey: "cat",
        isOpen: true
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const SelectedItem = {
    render: args => (
        <Stack>
            <Inline>
                <Div>
                    <h1>Default Selected Key</h1>
                    <Select {...args} defaultSelectedKey="cat">
                        <SelectOptions>
                            <SelectOption id="dog">Dog</SelectOption>
                            <SelectOption id="cat">Cat</SelectOption>
                            <SelectOption id="frog">Frog</SelectOption>
                        </SelectOptions>
                    </Select>
                </Div>
                <Div>
                    <h1>Selected Key</h1>
                    <Select {...args} selectedKey="cat">
                        <SelectOptions>
                            <SelectOption id="dog">Dog</SelectOption>
                            <SelectOption id="cat">Cat</SelectOption>
                            <SelectOption id="frog">Frog</SelectOption>
                        </SelectOptions>
                    </Select>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <Select {...args} defaultSelectedKey="raccoon" isDisabled>
                <SelectOptions>
                    <SelectOption id="dog">Dog</SelectOption>
                    <SelectOption id="raccoon">Raccoon</SelectOption>
                    <SelectOption id="frog">Frog</SelectOption>
                </SelectOptions>
            </Select>
            <h1>Fluid</h1>
            <Select {...args} defaultSelectedKey="raccoon" isFluid>
                <SelectOptions>
                    <SelectOption id="dog">Dog</SelectOption>
                    <SelectOption id="raccoon">Raccoon</SelectOption>
                    <SelectOption id="frog">Frog</SelectOption>
                </SelectOptions>
            </Select>
            <h1>Limited Width</h1>
            <Div width="11%">
                <Select {...args} defaultSelectedKey="raccoon" isFluid>
                    <SelectOptions>
                        <SelectOption id="dog">Dog</SelectOption>
                        <SelectOption id="raccoon">Raccoon</SelectOption>
                        <SelectOption id="frog">Frog</SelectOption>
                    </SelectOptions>
                </Select>
            </Div>
        </Stack>
    )
} satisfies Story;

export const SelectedItemWithIcon = {
    render: args => (
        <Stack>
            <Inline>
                <Div>
                    <h1>Default Selected Key</h1>
                    <Select {...args} defaultSelectedKey="raccoon">
                        <SelectOptions>
                            <SelectOption id="dog" textValue="Dog">
                                <SparklesIcon />
                                <Text slot="label">Dog</Text>
                            </SelectOption>
                            <SelectOption id="raccoon" textValue="Raccoon">
                                <SparklesIcon />
                                <Text slot="label">Raccoon</Text>
                            </SelectOption>
                            <SelectOption id="frog">Frog</SelectOption>
                        </SelectOptions>
                    </Select>
                </Div>
                <Div>
                    <h1>Selected Key</h1>
                    <Select {...args} selectedKey="raccoon">
                        <SelectOptions>
                            <SelectOption id="dog" textValue="Dog">
                                <SparklesIcon />
                                <Text slot="label">Dog</Text>
                            </SelectOption>
                            <SelectOption id="raccoon" textValue="Raccoon">
                                <SparklesIcon />
                                <Text slot="label">Raccoon</Text>
                            </SelectOption>
                            <SelectOption id="frog">Frog</SelectOption>
                        </SelectOptions>
                    </Select>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <Select {...args} defaultSelectedKey="raccoon" isDisabled>
                <SelectOptions>
                    <SelectOption id="dog" textValue="Dog">
                        <SparklesIcon />
                        <Text slot="label">Dog</Text>
                    </SelectOption>
                    <SelectOption id="raccoon" textValue="Raccoon">
                        <SparklesIcon />
                        <Text slot="label">Raccoon</Text>
                    </SelectOption>
                    <SelectOption id="frog">Frog</SelectOption>
                </SelectOptions>
            </Select>
            <h1>Fluid</h1>
            <Select {...args} defaultSelectedKey="raccoon" isFluid>
                <SelectOptions>
                    <SelectOption id="dog" textValue="Dog">
                        <SparklesIcon />
                        <Text slot="label">Dog</Text>
                    </SelectOption>
                    <SelectOption id="raccoon" textValue="Raccoon">
                        <SparklesIcon />
                        <Text slot="label">Raccoon</Text>
                    </SelectOption>
                    <SelectOption id="frog">Frog</SelectOption>
                </SelectOptions>
            </Select>
            <h1>Limited Width</h1>
            <Div width="11%">
                <Select {...args} defaultSelectedKey="raccoon" isFluid>
                    <SelectOptions>
                        <SelectOption id="dog" textValue="Dog">
                            <SparklesIcon />
                            <Text slot="label">Dog</Text>
                        </SelectOption>
                        <SelectOption id="raccoon" textValue="Raccoon">
                            <SparklesIcon />
                            <Text slot="label">Raccoon</Text>
                        </SelectOption>
                        <SelectOption id="frog">Frog</SelectOption>
                    </SelectOptions>
                </Select>
            </Div>
        </Stack>
    )
} satisfies Story;

export const SelectedItemWithEndIcon = {
    render: args => (
        <Stack>
            <Inline>
                <Div>
                    <h1>Default Selected Key</h1>
                    <Select {...args} defaultSelectedKey="raccoon">
                        <SelectOptions>
                            <SelectOption id="dog" textValue="Dog">
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Dog</Text>
                            </SelectOption>
                            <SelectOption id="raccoon" textValue="Raccoon">
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Raccoon</Text>
                            </SelectOption>
                            <SelectOption id="frog">Frog</SelectOption>
                        </SelectOptions>
                    </Select>
                </Div>
                <Div>
                    <h1>Selected Key</h1>
                    <Select {...args} selectedKey="raccoon">
                        <SelectOptions>
                            <SelectOption id="dog" textValue="Dog">
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Dog</Text>
                            </SelectOption>
                            <SelectOption id="raccoon" textValue="Raccoon">
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Raccoon</Text>
                            </SelectOption>
                            <SelectOption id="frog">Frog</SelectOption>
                        </SelectOptions>
                    </Select>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <Select {...args} defaultSelectedKey="raccoon" isDisabled>
                <SelectOptions>
                    <SelectOption id="dog" textValue="Dog">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Dog</Text>
                    </SelectOption>
                    <SelectOption id="raccoon" textValue="Raccoon">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Raccoon</Text>
                    </SelectOption>
                    <SelectOption id="frog">Frog</SelectOption>
                </SelectOptions>
            </Select>
            <h1>Fluid</h1>
            <Select {...args} defaultSelectedKey="raccoon" isFluid>
                <SelectOptions>
                    <SelectOption id="dog" textValue="Dog">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Dog</Text>
                    </SelectOption>
                    <SelectOption id="raccoon" textValue="Raccoon">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Raccoon</Text>
                    </SelectOption>
                    <SelectOption id="frog">Frog</SelectOption>
                </SelectOptions>
            </Select>
            <h1>Limited Width</h1>
            <Div width="11%">
                <Select {...args} defaultSelectedKey="raccoon" isFluid>
                    <SelectOptions>
                        <SelectOption id="dog" textValue="Dog">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Dog</Text>
                        </SelectOption>
                        <SelectOption id="raccoon" textValue="Raccoon">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Raccoon</Text>
                        </SelectOption>
                        <SelectOption id="frog">Frog</SelectOption>
                    </SelectOptions>
                </Select>
            </Div>
        </Stack>
    )
} satisfies Story;

export const SelectItemWithDescription = {
    render: args => (
        <Select {...args}>
            <SelectOptions>
                <SelectOption id="dog" textValue="Dog">
                    <Text slot="label">Dog</Text>
                    <Text slot="description">I come in many different breeds</Text>
                </SelectOption>
                <SelectOption id="raccoon" textValue="Raccoon">
                    <Text slot="label">Raccoon</Text>
                    <Text slot="description">I am nocturnal</Text>
                </SelectOption>
                <SelectOption id="frog">Frog</SelectOption>
            </SelectOptions>
        </Select>
    ),
    args: {
        defaultSelectedKey: "raccoon"
    }
} satisfies Story;

export const TriggerIcon = {
    ...OnlyItems,
    args: {
        prefix: <SparklesIcon />
    }
} satisfies Story;

export const ScrollingWithSelectedItemOutsideVisibleScope = {
    ...Sections,
    args: {
        defaultSelectedKey: "7"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const selectTrigger = canvas.getAllByRole("button")[0];
        await userEvent.click(selectTrigger);
    },
    decorators: marginBottomDecoratorMD
} satisfies Story;

export const CustomTriggerWidth = {
    ...OnlyItems,
    args: {
        UNSAFE_width: "30rem",
        isOpen: true
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const CustomMenuWidth = {
    render: args => (
        <Select {...args}>
            <SelectOptions UNSAFE_width="30rem">
                <SelectOption id="dog">Dog</SelectOption>
                <SelectOption id="cat">Cat</SelectOption>
                <SelectOption id="frog">Frog</SelectOption>
            </SelectOptions>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const MenuAutoWidth = {
    render: args => (
        <Select {...args}>
            <SelectOptions isAutoMenuWidth>
                <SelectOption id="dog">Dog</SelectOption>
                <SelectOption id="cat">Cat</SelectOption>
                <SelectOption id="frog">Frog</SelectOption>
            </SelectOptions>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Direction = {
    render: args => (
        <Select {...args}>
            <SelectOptions placement={{ base: "top", md: "right", lg: "top" }}>
                <SelectOption id="dog">Dog</SelectOption>
                <SelectOption id="cat">Cat</SelectOption>
                <SelectOption id="frog">Frog</SelectOption>
            </SelectOptions>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: [
        Story => (
            <Div UNSAFE_marginTop="10rem" UNSAFE_marginBottom="4rem">
                <Story />
            </Div>
        )
    ]
} satisfies Story;

export const DirectionTop = {
    render: args => (
        <Select {...args}>
            <SelectOptions placement="top">
                <SelectOption id="dog">Dog</SelectOption>
                <SelectOption id="cat">Cat</SelectOption>
                <SelectOption id="frog">Frog</SelectOption>
            </SelectOptions>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: [
        Story => (
            <Div UNSAFE_marginTop="10rem">
                <Story />
            </Div>
        )
    ]
} satisfies Story;

export const Invalid = {
    ...SelectItemWithDescription,
    args: {
        isOpen: true,
        isInvalid: true,
        defaultSelectedKey: "raccoon"
    },
    decorators: marginBottomDecoratorMD
} satisfies Story;

const StateTemplate = (args: Partial<SelectProps<object>>) => (
    <Stack>
        <Inline alignY="center">
            <Select {...args}>
                <Label>Small</Label>
                <SelectOptions>
                    <SelectOption id="dog">Dog</SelectOption>
                    <SelectOption id="cat">Cat</SelectOption>
                    <SelectOption id="frog">Frog</SelectOption>
                </SelectOptions>
            </Select>
            <Select {...args}
                size="md"
            >
                <Label>Medium</Label>
                <SelectOptions>
                    <SelectOption id="dog">Dog</SelectOption>
                    <SelectOption id="cat">Cat</SelectOption>
                    <SelectOption id="frog">Frog</SelectOption>
                </SelectOptions>
            </Select>
        </Inline>
        <Select {...args}
            isDisabled
        >
            <Label>Disabled</Label>
            <SelectOptions>
                <SelectOption id="dog">Dog</SelectOption>
                <SelectOption id="cat">Cat</SelectOption>
                <SelectOption id="frog">Frog</SelectOption>
            </SelectOptions>
        </Select>
        <Select {...args}
            isInvalid
        >
            <Label>Invalid</Label>
            <SelectOptions>
                <SelectOption id="dog">Dog</SelectOption>
                <SelectOption id="cat">Cat</SelectOption>
                <SelectOption id="frog">Frog</SelectOption>
            </SelectOptions>
        </Select>
    </Stack>
);

export const TriggerStates = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const triggers = canvas.getAllByRole("button");

        triggers.forEach(trigger => {
            if (trigger.getAttribute("disabled") !== "") {
                const select = trigger.parentElement;

                if (select?.getAttribute("data-chromatic-force-focus")) {
                    trigger?.setAttribute("data-focus-visible", "true");
                    select?.removeAttribute("data-chromatic-force-focus");
                }

                if (select?.getAttribute("data-chromatic-force-press")) {
                    trigger?.setAttribute("data-pressed", "true");
                    select?.removeAttribute("data-chromatic-force-press");
                }

                if (select?.getAttribute("data-chromatic-force-hover")) {
                    trigger.setAttribute("data-hovered", "true");
                    select?.removeAttribute("data-chromatic-force-hover");
                }
            }
        });
    },
    render: args => (
        <Stack>
            <h1>Default</h1>
            <StateTemplate {...args} />
            <h1>Disabled</h1>
            <StateTemplate {...args} isDisabled />
            <h1>Focus Visible</h1>
            <StateTemplate {...args} data-chromatic-force-focus />
            <h1>Hovered</h1>
            <StateTemplate {...args} data-chromatic-force-hover />
            <h1>Active</h1>
            <StateTemplate {...args} data-chromatic-force-press />
            <h1>Focus Visible & Hovered</h1>
            <StateTemplate {...args} data-chromatic-force-focus data-chromatic-force-hover />
            <h1>Focus Visible, Hovered & Active</h1>
            <StateTemplate {...args} data-chromatic-force-focus data-chromatic-force-hover data-chromatic-force-press />
        </Stack>
    ),
    args: {
        defaultSelectedKey: "cat"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Zoom = {
    render: args => (
        <Inline>
            <Div className="zoom-in">
                <Select {...args}>
                    <SelectOptions>
                        <SelectOption id="1">Zoomy</SelectOption>
                        <SelectOption id="2">Voodoo</SelectOption>
                        <SelectOption id="3">Dusty</SelectOption>
                    </SelectOptions>
                </Select>
            </Div>
            <Div className="zoom-out">
                <Select {...args}>
                    <SelectOptions>
                        <SelectOption id="1">Zoomy</SelectOption>
                        <SelectOption id="2">Voodoo</SelectOption>
                        <SelectOption id="3">Dusty</SelectOption>
                    </SelectOptions>
                </Select>
            </Div>
        </Inline>
    ),
    args: {
        defaultSelectedKey: "2"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Styling = {
    render: args => (
        <Inline>
            <Select {...args}
                triggerProps={
                    { border: "warning" }
                }
            >
                <SelectOptions>
                    <SelectOption id="1">Zoomy</SelectOption>
                    <SelectOption id="2">Voodoo</SelectOption>
                    <SelectOption id="3">Dusty</SelectOption>
                </SelectOptions>
            </Select>
            <Select {...args}
                triggerProps={
                    { className: "border-red" }
                }
            >
                <SelectOptions>
                    <SelectOption id="1">Zoomy</SelectOption>
                    <SelectOption id="2">Voodoo</SelectOption>
                    <SelectOption id="3">Dusty</SelectOption>
                </SelectOptions>
            </Select>
            <Select {...args}
                triggerProps={
                    { style: { border: "1px solid red" } }
                }
            >
                <SelectOptions>
                    <SelectOption id="1">Zoomy</SelectOption>
                    <SelectOption id="2">Voodoo</SelectOption>
                    <SelectOption id="3">Dusty</SelectOption>
                </SelectOptions>
            </Select>
        </Inline>
    ),
    args: {
        defaultSelectedKey: "2"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

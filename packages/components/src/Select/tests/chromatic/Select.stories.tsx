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
import { Select, type SelectProps } from "../../src/Select.tsx";

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
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
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
            <Section>
                <Header>Cats</Header>
                <Select.Option id="1">Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
                <Select.Option id="3">Dusty</Select.Option>
                <Select.Option id="4">Rengar</Select.Option>
            </Section>
            <Section>
                <Header>Dogs</Header>
                <Select.Option id="5">Teemo</Select.Option>
                <Select.Option id="6">Scooter</Select.Option>
                <Select.Option id="7">Prince</Select.Option>
            </Section>
        </Select>
    ),
    args: {
        isOpen: true
    },
    decorators: marginBottomDecoratorMD
} satisfies Story;

export const Footer = {
    ...Sections,
    args: {
        isOpen: true,
        footer: <Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>
    },
    decorators: marginBottomDecoratorLG
} satisfies Story;

export const Sizes = {
    render: args => (
        <Inline>
            <Select {...args}>
                <Section>
                    <Header>Cats</Header>
                    <Select.Option id="1">Zoomy</Select.Option>
                    <Select.Option id="2">Voodoo</Select.Option>
                    <Select.Option id="3">Dusty</Select.Option>
                    <Select.Option id="4">Rengar</Select.Option>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <Select.Option id="5">Teemo</Select.Option>
                    <Select.Option id="6">Scooter</Select.Option>
                    <Select.Option id="7">Prince</Select.Option>
                </Section>
            </Select>
            <Select {...args} size="md">
                <Section>
                    <Header>Cats</Header>
                    <Select.Option id="1">Zoomy</Select.Option>
                    <Select.Option id="2">Voodoo</Select.Option>
                    <Select.Option id="3">Dusty</Select.Option>
                    <Select.Option id="4">Rengar</Select.Option>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <Select.Option id="5">Teemo</Select.Option>
                    <Select.Option id="6">Scooter</Select.Option>
                    <Select.Option id="7">Prince</Select.Option>
                </Section>
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
                        <Select.Option id="dog">Dog</Select.Option>
                        <Select.Option id="cat">Cat</Select.Option>
                        <Select.Option id="frog">Frog</Select.Option>
                    </Select>
                </Div>
                <Div>
                    <h1>Selected Key</h1>
                    <Select {...args} selectedKey="cat">
                        <Select.Option id="dog">Dog</Select.Option>
                        <Select.Option id="cat">Cat</Select.Option>
                        <Select.Option id="frog">Frog</Select.Option>
                    </Select>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <Select {...args} defaultSelectedKey="raccoon" isDisabled>
                <Select.Option id="dog">Dog</Select.Option>
                <Select.Option id="raccoon">Raccoon</Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
            <h1>Fluid</h1>
            <Select {...args} defaultSelectedKey="raccoon" isFluid>
                <Select.Option id="dog">Dog</Select.Option>
                <Select.Option id="raccoon">Raccoon</Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
            <h1>Limited Width</h1>
            <Div width="11%">
                <Select {...args} defaultSelectedKey="raccoon" isFluid>
                    <Select.Option id="dog">Dog</Select.Option>
                    <Select.Option id="raccoon">Raccoon</Select.Option>
                    <Select.Option id="frog">Frog</Select.Option>
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
                        <Select.Option id="dog" textValue="Dog">
                            <SparklesIcon />
                            <Text slot="label">Dog</Text>
                        </Select.Option>
                        <Select.Option id="raccoon" textValue="Raccoon">
                            <SparklesIcon />
                            <Text slot="label">Raccoon</Text>
                        </Select.Option>
                        <Select.Option id="frog">Frog</Select.Option>
                    </Select>
                </Div>
                <Div>
                    <h1>Selected Key</h1>
                    <Select {...args} selectedKey="raccoon">
                        <Select.Option id="dog" textValue="Dog">
                            <SparklesIcon />
                            <Text slot="label">Dog</Text>
                        </Select.Option>
                        <Select.Option id="raccoon" textValue="Raccoon">
                            <SparklesIcon />
                            <Text slot="label">Raccoon</Text>
                        </Select.Option>
                        <Select.Option id="frog">Frog</Select.Option>
                    </Select>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <Select {...args} defaultSelectedKey="raccoon" isDisabled>
                <Select.Option id="dog" textValue="Dog">
                    <SparklesIcon />
                    <Text slot="label">Dog</Text>
                </Select.Option>
                <Select.Option id="raccoon" textValue="Raccoon">
                    <SparklesIcon />
                    <Text slot="label">Raccoon</Text>
                </Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
            <h1>Fluid</h1>
            <Select {...args} defaultSelectedKey="raccoon" isFluid>
                <Select.Option id="dog" textValue="Dog">
                    <SparklesIcon />
                    <Text slot="label">Dog</Text>
                </Select.Option>
                <Select.Option id="raccoon" textValue="Raccoon">
                    <SparklesIcon />
                    <Text slot="label">Raccoon</Text>
                </Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
            <h1>Limited Width</h1>
            <Div width="11%">
                <Select {...args} defaultSelectedKey="raccoon" isFluid>
                    <Select.Option id="dog" textValue="Dog">
                        <SparklesIcon />
                        <Text slot="label">Dog</Text>
                    </Select.Option>
                    <Select.Option id="raccoon" textValue="Raccoon">
                        <SparklesIcon />
                        <Text slot="label">Raccoon</Text>
                    </Select.Option>
                    <Select.Option id="frog">Frog</Select.Option>
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
                        <Select.Option id="dog" textValue="Dog">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Dog</Text>
                        </Select.Option>
                        <Select.Option id="raccoon" textValue="Raccoon">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Raccoon</Text>
                        </Select.Option>
                        <Select.Option id="frog">Frog</Select.Option>
                    </Select>
                </Div>
                <Div>
                    <h1>Selected Key</h1>
                    <Select {...args} selectedKey="raccoon">
                        <Select.Option id="dog" textValue="Dog">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Dog</Text>
                        </Select.Option>
                        <Select.Option id="raccoon" textValue="Raccoon">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Raccoon</Text>
                        </Select.Option>
                        <Select.Option id="frog">Frog</Select.Option>
                    </Select>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <Select {...args} defaultSelectedKey="raccoon" isDisabled>
                <Select.Option id="dog" textValue="Dog">
                    <SparklesIcon slot="end-icon" />
                    <Text slot="label">Dog</Text>
                </Select.Option>
                <Select.Option id="raccoon" textValue="Raccoon">
                    <SparklesIcon slot="end-icon" />
                    <Text slot="label">Raccoon</Text>
                </Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
            <h1>Fluid</h1>
            <Select {...args} defaultSelectedKey="raccoon" isFluid>
                <Select.Option id="dog" textValue="Dog">
                    <SparklesIcon slot="end-icon" />
                    <Text slot="label">Dog</Text>
                </Select.Option>
                <Select.Option id="raccoon" textValue="Raccoon">
                    <SparklesIcon slot="end-icon" />
                    <Text slot="label">Raccoon</Text>
                </Select.Option>
                <Select.Option id="frog">Frog</Select.Option>
            </Select>
            <h1>Limited Width</h1>
            <Div width="11%">
                <Select {...args} defaultSelectedKey="raccoon" isFluid>
                    <Select.Option id="dog" textValue="Dog">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Dog</Text>
                    </Select.Option>
                    <Select.Option id="raccoon" textValue="Raccoon">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Raccoon</Text>
                    </Select.Option>
                    <Select.Option id="frog">Frog</Select.Option>
                </Select>
            </Div>
        </Stack>
    )
} satisfies Story;

export const SelectItemWithDescription = {
    render: args => (
        <Select {...args}>
            <Select.Option id="dog" textValue="Dog">
                <Text slot="label">Dog</Text>
                <Text slot="description">I come in many different breeds</Text>
            </Select.Option>
            <Select.Option id="raccoon" textValue="Raccoon">
                <Text slot="label">Raccoon</Text>
                <Text slot="description">I am nocturnal</Text>
            </Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
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
    ...OnlyItems,
    args: {
        popoverProps: {
            UNSAFE_width: "30rem"
        },
        isOpen: true
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const MenuAutoWidth = {
    ...OnlyItems,
    args: {
        isAutoMenuWidth: true,
        isOpen: true
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Direction = {
    ...OnlyItems,
    args: {
        isOpen: true,
        popoverProps: {
            placement: { base: "top", md: "right", lg: "top" }
        }
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
    ...OnlyItems,
    args: {
        isOpen: true,
        popoverProps: {
            placement: "top"
        }
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
            <Select {...args}
                fieldChildren={
                    <Label>Small</Label>
                }
            >
                <Select.Option id="designer">Designer</Select.Option>
                <Select.Option id="developer">Developer</Select.Option>
                <Select.Option id="manager">Manager</Select.Option>
            </Select>
            <Select {...args}
                size="md"
                fieldChildren={
                    <Label>Medium</Label>
                }
            >
                <Select.Option id="designer">Designer</Select.Option>
                <Select.Option id="developer">Developer</Select.Option>
                <Select.Option id="manager">Manager</Select.Option>
            </Select>
        </Inline>
        <Select {...args}
            isDisabled
            fieldChildren={
                <Label>Disabled</Label>
            }
        >
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
        </Select>
        <Select {...args}
            isInvalid
            fieldChildren={
                <Label>Invalid</Label>
            }
        >
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
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
                    <Select.Option id="1">Zoomy</Select.Option>
                    <Select.Option id="2">Voodoo</Select.Option>
                    <Select.Option id="3">Dusty</Select.Option>
                </Select>
            </Div>
            <Div className="zoom-out">
                <Select {...args}>
                    <Select.Option id="1">Zoomy</Select.Option>
                    <Select.Option id="2">Voodoo</Select.Option>
                    <Select.Option id="3">Dusty</Select.Option>
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
                <Select.Option id="1">Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
                <Select.Option id="3">Dusty</Select.Option>
            </Select>
            <Select {...args}
                triggerProps={
                    { className: "border-red" }
                }
            >
                <Select.Option id="1">Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
                <Select.Option id="3">Dusty</Select.Option>
            </Select>
            <Select {...args}
                triggerProps={
                    { style: { border: "1px solid red" } }
                }
            >
                <Select.Option id="1">Zoomy</Select.Option>
                <Select.Option id="2">Voodoo</Select.Option>
                <Select.Option id="3">Dusty</Select.Option>
            </Select>
        </Inline>
    ),
    args: {
        defaultSelectedKey: "2"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

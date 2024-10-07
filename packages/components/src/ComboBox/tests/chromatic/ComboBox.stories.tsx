import { Button, ComboBox, ComboBoxOption, ComboBoxOptions, type ComboBoxProps, Header, HelperMessage, Inline, Label, Section, Stack, Text } from "@hopper-ui/components";
import { AddIcon, SparklesIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

const meta = {
    title: "Components/ComboBox",
    component: ComboBox,
    args: {
        children: [],
        "aria-label": "Animals"
    }
} satisfies Meta<typeof ComboBox>;

export default meta;

type Story = StoryObj<typeof meta>;

const marginBottomDecoratorSM = [
    (Story: StoryFn) => (
        <Div UNSAFE_marginBottom="11rem">
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

const playFn: Story["play"] = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectTrigger = canvas.getAllByRole("button")[0];
    await userEvent.click(selectTrigger);
};

export const OnlyItems = {
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions>
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    play: playFn,
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Sections = {
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions>
                <Section>
                    <Header>Cats</Header>
                    <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                    <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                    <ComboBoxOption id="3">Dusty</ComboBoxOption>
                    <ComboBoxOption id="4">Rengar</ComboBoxOption>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <ComboBoxOption id="5">Teemo</ComboBoxOption>
                    <ComboBoxOption id="6">Scooter</ComboBoxOption>
                    <ComboBoxOption id="7">Prince</ComboBoxOption>
                </Section>
            </ComboBoxOptions>
        </ComboBox>
    ),
    play: playFn,
    decorators: marginBottomDecoratorMD
} satisfies Story;

export const FieldLabel = {
    render: args => (
        <ComboBox {...args}>
            <Label>Animals</Label>
            <ComboBoxOptions>
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const FieldHelperMessage = {
    render: args => (
        <ComboBox {...args}>
            <HelperMessage>These animals can become pets</HelperMessage>
            <ComboBoxOptions>
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Footer = {
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions footer={<Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>}>
                <Section>
                    <Header>Cats</Header>
                    <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                    <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                    <ComboBoxOption id="3">Dusty</ComboBoxOption>
                    <ComboBoxOption id="4">Rengar</ComboBoxOption>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <ComboBoxOption id="5">Teemo</ComboBoxOption>
                    <ComboBoxOption id="6">Scooter</ComboBoxOption>
                    <ComboBoxOption id="7">Prince</ComboBoxOption>
                </Section>
            </ComboBoxOptions>
        </ComboBox>
    ),
    play: playFn,
    decorators: marginBottomDecoratorLG
} satisfies Story;

export const Small = {
    play: playFn,
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions>
                <Section>
                    <Header>Cats</Header>
                    <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                    <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                    <ComboBoxOption id="3">Dusty</ComboBoxOption>
                    <ComboBoxOption id="4">Rengar</ComboBoxOption>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <ComboBoxOption id="5">Teemo</ComboBoxOption>
                    <ComboBoxOption id="6">Scooter</ComboBoxOption>
                    <ComboBoxOption id="7">Prince</ComboBoxOption>
                </Section>
            </ComboBoxOptions>
        </ComboBox>
    ),
    args: {
        defaultSelectedKey: "2",
        size: "sm"
    },
    decorators: marginBottomDecoratorMD
} satisfies Story;


export const Medium = {
    play: playFn,
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions>
                <Section>
                    <Header>Cats</Header>
                    <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                    <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                    <ComboBoxOption id="3">Dusty</ComboBoxOption>
                    <ComboBoxOption id="4">Rengar</ComboBoxOption>
                </Section>
                <Section>
                    <Header>Dogs</Header>
                    <ComboBoxOption id="5">Teemo</ComboBoxOption>
                    <ComboBoxOption id="6">Scooter</ComboBoxOption>
                    <ComboBoxOption id="7">Prince</ComboBoxOption>
                </Section>
            </ComboBoxOptions>
        </ComboBox>
    ),
    args: {
        defaultSelectedKey: "2",
        size: "md"
    },
    decorators: marginBottomDecoratorMD
} satisfies Story;

export const placeholder = {
    ...OnlyItems,
    args: {
        placeholder: "Name an animal"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const OpenWithInputValue = {
    ...OnlyItems,
    args: {
        defaultInputValue: "cat"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const OpenWithSelectedItem = {
    ...OnlyItems,
    args: {
        defaultSelectedKey: "cat"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const SelectedItem = {
    render: args => (
        <Stack>
            <Inline>
                <Div>
                    <h1>Default ComboBoxed Key</h1>
                    <ComboBox {...args} defaultSelectedKey="cat">
                        <ComboBoxOptions>
                            <ComboBoxOption id="dog">Dog</ComboBoxOption>
                            <ComboBoxOption id="cat">Cat</ComboBoxOption>
                            <ComboBoxOption id="frog">Frog</ComboBoxOption>
                        </ComboBoxOptions>
                    </ComboBox>
                </Div>
                <Div>
                    <h1>ComboBoxed Key</h1>
                    <ComboBox {...args} selectedKey="cat">
                        <ComboBoxOptions>
                            <ComboBoxOption id="dog">Dog</ComboBoxOption>
                            <ComboBoxOption id="cat">Cat</ComboBoxOption>
                            <ComboBoxOption id="frog">Frog</ComboBoxOption>
                        </ComboBoxOptions>
                    </ComboBox>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isDisabled>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog">Dog</ComboBoxOption>
                    <ComboBoxOption id="raccoon">Raccoon</ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <h1>Fluid</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog">Dog</ComboBoxOption>
                    <ComboBoxOption id="raccoon">Raccoon</ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <h1>Limited Width</h1>
            <Div width="12%">
                <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                    <ComboBoxOptions>
                        <ComboBoxOption id="dog">Dog</ComboBoxOption>
                        <ComboBoxOption id="raccoon">Raccoon</ComboBoxOption>
                        <ComboBoxOption id="frog">Frog</ComboBoxOption>
                    </ComboBoxOptions>
                </ComboBox>
            </Div>
        </Stack>
    )
} satisfies Story;

export const SelectedItemWithIcon = {
    render: args => (
        <Stack>
            <Inline>
                <Div>
                    <h1>Default ComboBoxed Key</h1>
                    <ComboBox {...args} defaultSelectedKey="raccoon">
                        <ComboBoxOptions>
                            <ComboBoxOption id="dog" textValue="Dog">
                                <SparklesIcon />
                                <Text slot="label">Dog</Text>
                            </ComboBoxOption>
                            <ComboBoxOption id="raccoon" textValue="Raccoon">
                                <SparklesIcon />
                                <Text slot="label">Raccoon</Text>
                            </ComboBoxOption>
                            <ComboBoxOption id="frog">Frog</ComboBoxOption>
                        </ComboBoxOptions>
                    </ComboBox>
                </Div>
                <Div>
                    <h1>ComboBoxed Key</h1>
                    <ComboBox {...args} selectedKey="raccoon">
                        <ComboBoxOptions>
                            <ComboBoxOption id="dog" textValue="Dog">
                                <SparklesIcon />
                                <Text slot="label">Dog</Text>
                            </ComboBoxOption>
                            <ComboBoxOption id="raccoon" textValue="Raccoon">
                                <SparklesIcon />
                                <Text slot="label">Raccoon</Text>
                            </ComboBoxOption>
                            <ComboBoxOption id="frog">Frog</ComboBoxOption>
                        </ComboBoxOptions>
                    </ComboBox>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isDisabled>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog" textValue="Dog">
                        <SparklesIcon />
                        <Text slot="label">Dog</Text>
                    </ComboBoxOption>
                    <ComboBoxOption id="raccoon" textValue="Raccoon">
                        <SparklesIcon />
                        <Text slot="label">Raccoon</Text>
                    </ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <h1>Fluid</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog" textValue="Dog">
                        <SparklesIcon />
                        <Text slot="label">Dog</Text>
                    </ComboBoxOption>
                    <ComboBoxOption id="raccoon" textValue="Raccoon">
                        <SparklesIcon />
                        <Text slot="label">Raccoon</Text>
                    </ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <h1>Limited Width</h1>
            <Div width="12%">
                <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                    <ComboBoxOptions>
                        <ComboBoxOption id="dog" textValue="Dog">
                            <SparklesIcon />
                            <Text slot="label">Dog</Text>
                        </ComboBoxOption>
                        <ComboBoxOption id="raccoon" textValue="Raccoon">
                            <SparklesIcon />
                            <Text slot="label">Raccoon</Text>
                        </ComboBoxOption>
                        <ComboBoxOption id="frog">Frog</ComboBoxOption>
                    </ComboBoxOptions>
                </ComboBox>
            </Div>
        </Stack>
    )
} satisfies Story;

export const SelectedItemWithEndIcon = {
    render: args => (
        <Stack>
            <Inline>
                <Div>
                    <h1>Default ComboBoxed Key</h1>
                    <ComboBox {...args} defaultSelectedKey="raccoon">
                        <ComboBoxOptions>
                            <ComboBoxOption id="dog" textValue="Dog">
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Dog</Text>
                            </ComboBoxOption>
                            <ComboBoxOption id="raccoon" textValue="Raccoon">
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Raccoon</Text>
                            </ComboBoxOption>
                            <ComboBoxOption id="frog">Frog</ComboBoxOption>
                        </ComboBoxOptions>
                    </ComboBox>
                </Div>
                <Div>
                    <h1>ComboBoxed Key</h1>
                    <ComboBox {...args} selectedKey="raccoon">
                        <ComboBoxOptions>
                            <ComboBoxOption id="dog" textValue="Dog">
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Dog</Text>
                            </ComboBoxOption>
                            <ComboBoxOption id="raccoon" textValue="Raccoon">
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Raccoon</Text>
                            </ComboBoxOption>
                            <ComboBoxOption id="frog">Frog</ComboBoxOption>
                        </ComboBoxOptions>
                    </ComboBox>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isDisabled>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog" textValue="Dog">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Dog</Text>
                    </ComboBoxOption>
                    <ComboBoxOption id="raccoon" textValue="Raccoon">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Raccoon</Text>
                    </ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <h1>Fluid</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog" textValue="Dog">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Dog</Text>
                    </ComboBoxOption>
                    <ComboBoxOption id="raccoon" textValue="Raccoon">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Raccoon</Text>
                    </ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <h1>Limited Width</h1>
            <Div width="12%">
                <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                    <ComboBoxOptions>
                        <ComboBoxOption id="dog" textValue="Dog">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Dog</Text>
                        </ComboBoxOption>
                        <ComboBoxOption id="raccoon" textValue="Raccoon">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Raccoon</Text>
                        </ComboBoxOption>
                        <ComboBoxOption id="frog">Frog</ComboBoxOption>
                    </ComboBoxOptions>
                </ComboBox>
            </Div>
        </Stack>
    )
} satisfies Story;

export const ComboBoxItemWithDescription = {
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions>
                <ComboBoxOption id="dog" textValue="Dog">
                    <Text slot="label">Dog</Text>
                    <Text slot="description">I come in many different breeds</Text>
                </ComboBoxOption>
                <ComboBoxOption id="raccoon" textValue="Raccoon">
                    <Text slot="label">Raccoon</Text>
                    <Text slot="description">I am nocturnal</Text>
                </ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    args: {
        defaultSelectedKey: "raccoon"
    }
} satisfies Story;

export const TriggerIcon = {
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions>
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    args: {
        prefix: <SparklesIcon />
    }
} satisfies Story;

export const ScrollingWithSelectedItemOutsideVisibleScope = {
    ...Sections,
    args: {
        defaultSelectedKey: "7"
    },
    play: playFn,
    decorators: marginBottomDecoratorMD
} satisfies Story;

export const CustomTriggerWidth = {
    ...OnlyItems,
    play: playFn,
    args: {
        UNSAFE_width: "30rem"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const CustomMenuWidth = {
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions UNSAFE_width="30rem">
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    play: playFn,
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const MenuAutoWidth = {
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions isAutoMenuWidth>
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    play: playFn,
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Direction = {
    render: args => (
        <ComboBox {...args}>
            <ComboBoxOptions
                placement={
                    { base: "top", md: "right", lg: "top" }
                }
            >
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    play: playFn,
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
        <ComboBox {...args}>
            <ComboBoxOptions placement="top">
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    ),
    play: playFn,
    decorators: [
        Story => (
            <Div UNSAFE_marginTop="10rem">
                <Story />
            </Div>
        )
    ]
} satisfies Story;

export const Invalid = {
    ...ComboBoxItemWithDescription,
    play: playFn,
    args: {
        isInvalid: true,
        defaultSelectedKey: "raccoon"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

const StateTemplate = (args: Partial<ComboBoxProps<object>>) => (
    <Stack>
        <Inline alignY="center">
            <ComboBox {...args}>
                <Label>Small</Label>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog">Dog</ComboBoxOption>
                    <ComboBoxOption id="cat">Cat</ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <ComboBox {...args}
                size="md"
            >
                <Label>Medium</Label>
                <ComboBoxOptions>
                    <ComboBoxOption id="dog">Dog</ComboBoxOption>
                    <ComboBoxOption id="cat">Cat</ComboBoxOption>
                    <ComboBoxOption id="frog">Frog</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
        </Inline>
        <ComboBox {...args}
            isDisabled
        >
            <Label>Disabled</Label>
            <ComboBoxOptions>
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
        <ComboBox {...args}
            isInvalid
        >
            <Label>Invalid</Label>
            <ComboBoxOptions>
                <ComboBoxOption id="dog">Dog</ComboBoxOption>
                <ComboBoxOption id="cat">Cat</ComboBoxOption>
                <ComboBoxOption id="frog">Frog</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    </Stack>
);

export const TriggerStates = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const triggers = canvas.getAllByRole("group");

        triggers.forEach(trigger => {
            if (!trigger.getAttribute("data-disabled")) {
                const select = trigger.parentElement;

                if (select?.getAttribute("data-chromatic-force-focus")) {
                    trigger?.setAttribute("data-focus-visible", "true");
                    select?.removeAttribute("data-chromatic-force-focus");
                }

                if (select?.getAttribute("data-chromatic-force-selected")) {
                    trigger?.setAttribute("data-selected", "true");
                    select?.removeAttribute("data-chromatic-force-selected");
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
            <StateTemplate {...args} data-chromatic-force-selected />
            <h1>Focus Visible & Hovered</h1>
            <StateTemplate {...args} data-chromatic-force-focus data-chromatic-force-hover />
            <h1>Focus Visible, Hovered & Active</h1>
            <StateTemplate {...args} data-chromatic-force-focus data-chromatic-force-hover data-chromatic-force-selected />
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
                <ComboBox {...args}>
                    <ComboBoxOptions>
                        <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                        <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                        <ComboBoxOption id="3">Dusty</ComboBoxOption>
                    </ComboBoxOptions>
                </ComboBox>
            </Div>
            <Div className="zoom-out">
                <ComboBox {...args}>
                    <ComboBoxOptions>
                        <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                        <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                        <ComboBoxOption id="3">Dusty</ComboBoxOption>
                    </ComboBoxOptions>
                </ComboBox>
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
            <ComboBox {...args}
                triggerProps={
                    { border: "warning" }
                }
            >
                <ComboBoxOptions>
                    <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                    <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                    <ComboBoxOption id="3">Dusty</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <ComboBox {...args}
                triggerProps={
                    { className: "border-red" }
                }
            >
                <ComboBoxOptions>
                    <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                    <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                    <ComboBoxOption id="3">Dusty</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
            <ComboBox {...args}
                triggerProps={
                    { style: { border: "1px solid red" } }
                }
            >
                <ComboBoxOptions>
                    <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                    <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                    <ComboBoxOption id="3">Dusty</ComboBoxOption>
                </ComboBoxOptions>
            </ComboBox>
        </Inline>
    ),
    args: {
        defaultSelectedKey: "2"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

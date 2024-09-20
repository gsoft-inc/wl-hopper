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
import { ComboBox, type ComboBoxProps } from "../../src/ComboBox.tsx";

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

const playFn: Story["play"] = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectTrigger = canvas.getAllByRole("button")[0];
    await userEvent.click(selectTrigger);
};

export const OnlyItems = {
    render: args => (
        <ComboBox {...args} aria-label="test">
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
    ),
    play: playFn,
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Sections = {
    render: args => (
        <ComboBox {...args}>
            <Section>
                <Header>Cats</Header>
                <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                <ComboBox.Option id="3">Dusty</ComboBox.Option>
                <ComboBox.Option id="4">Rengar</ComboBox.Option>
            </Section>
            <Section>
                <Header>Dogs</Header>
                <ComboBox.Option id="5">Teemo</ComboBox.Option>
                <ComboBox.Option id="6">Scooter</ComboBox.Option>
                <ComboBox.Option id="7">Prince</ComboBox.Option>
            </Section>
        </ComboBox>
    ),
    play: playFn,
    decorators: marginBottomDecoratorMD
} satisfies Story;

export const Footer = {
    ...Sections,
    play: playFn,
    args: {
        footer: <Button variant="ghost-secondary" isFluid><AddIcon /><Text>Add</Text></Button>
    },
    decorators: marginBottomDecoratorLG
} satisfies Story;

export const Small = {
    play: playFn,
    render: args => (
        <ComboBox {...args}>
            <Section>
                <Header>Cats</Header>
                <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                <ComboBox.Option id="3">Dusty</ComboBox.Option>
                <ComboBox.Option id="4">Rengar</ComboBox.Option>
            </Section>
            <Section>
                <Header>Dogs</Header>
                <ComboBox.Option id="5">Teemo</ComboBox.Option>
                <ComboBox.Option id="6">Scooter</ComboBox.Option>
                <ComboBox.Option id="7">Prince</ComboBox.Option>
            </Section>
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
            <Section>
                <Header>Cats</Header>
                <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                <ComboBox.Option id="3">Dusty</ComboBox.Option>
                <ComboBox.Option id="4">Rengar</ComboBox.Option>
            </Section>
            <Section>
                <Header>Dogs</Header>
                <ComboBox.Option id="5">Teemo</ComboBox.Option>
                <ComboBox.Option id="6">Scooter</ComboBox.Option>
                <ComboBox.Option id="7">Prince</ComboBox.Option>
            </Section>
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
                        <ComboBox.Option id="dog">Dog</ComboBox.Option>
                        <ComboBox.Option id="cat">Cat</ComboBox.Option>
                        <ComboBox.Option id="frog">Frog</ComboBox.Option>
                    </ComboBox>
                </Div>
                <Div>
                    <h1>ComboBoxed Key</h1>
                    <ComboBox {...args} selectedKey="cat">
                        <ComboBox.Option id="dog">Dog</ComboBox.Option>
                        <ComboBox.Option id="cat">Cat</ComboBox.Option>
                        <ComboBox.Option id="frog">Frog</ComboBox.Option>
                    </ComboBox>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isDisabled>
                <ComboBox.Option id="dog">Dog</ComboBox.Option>
                <ComboBox.Option id="raccoon">Raccoon</ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
            <h1>Fluid</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                <ComboBox.Option id="dog">Dog</ComboBox.Option>
                <ComboBox.Option id="raccoon">Raccoon</ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
            <h1>Limited Width</h1>  
            <Div width="12%">
                <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                    <ComboBox.Option id="dog">Dog</ComboBox.Option>
                    <ComboBox.Option id="raccoon">Raccoon</ComboBox.Option>
                    <ComboBox.Option id="frog">Frog</ComboBox.Option>
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
                        <ComboBox.Option id="dog" textValue="Dog">
                            <SparklesIcon />
                            <Text slot="label">Dog</Text>
                        </ComboBox.Option>
                        <ComboBox.Option id="raccoon" textValue="Raccoon">
                            <SparklesIcon />
                            <Text slot="label">Raccoon</Text>
                        </ComboBox.Option>
                        <ComboBox.Option id="frog">Frog</ComboBox.Option>
                    </ComboBox>
                </Div>
                <Div>
                    <h1>ComboBoxed Key</h1>
                    <ComboBox {...args} selectedKey="raccoon">
                        <ComboBox.Option id="dog" textValue="Dog">
                            <SparklesIcon />
                            <Text slot="label">Dog</Text>
                        </ComboBox.Option>
                        <ComboBox.Option id="raccoon" textValue="Raccoon">
                            <SparklesIcon />
                            <Text slot="label">Raccoon</Text>
                        </ComboBox.Option>
                        <ComboBox.Option id="frog">Frog</ComboBox.Option>
                    </ComboBox>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isDisabled>
                <ComboBox.Option id="dog" textValue="Dog">
                    <SparklesIcon />
                    <Text slot="label">Dog</Text>
                </ComboBox.Option>
                <ComboBox.Option id="raccoon" textValue="Raccoon">
                    <SparklesIcon />
                    <Text slot="label">Raccoon</Text>
                </ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
            <h1>Fluid</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                <ComboBox.Option id="dog" textValue="Dog">
                    <SparklesIcon />
                    <Text slot="label">Dog</Text>
                </ComboBox.Option>
                <ComboBox.Option id="raccoon" textValue="Raccoon">
                    <SparklesIcon />
                    <Text slot="label">Raccoon</Text>
                </ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
            <h1>Limited Width</h1>  
            <Div width="12%">
                <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                    <ComboBox.Option id="dog" textValue="Dog">
                        <SparklesIcon />
                        <Text slot="label">Dog</Text>
                    </ComboBox.Option>
                    <ComboBox.Option id="raccoon" textValue="Raccoon">
                        <SparklesIcon />
                        <Text slot="label">Raccoon</Text>
                    </ComboBox.Option>
                    <ComboBox.Option id="frog">Frog</ComboBox.Option>
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
                        <ComboBox.Option id="dog" textValue="Dog">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Dog</Text>
                        </ComboBox.Option>
                        <ComboBox.Option id="raccoon" textValue="Raccoon">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Raccoon</Text>
                        </ComboBox.Option>
                        <ComboBox.Option id="frog">Frog</ComboBox.Option>
                    </ComboBox>
                </Div>
                <Div>
                    <h1>ComboBoxed Key</h1>
                    <ComboBox {...args} selectedKey="raccoon">
                        <ComboBox.Option id="dog" textValue="Dog">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Dog</Text>
                        </ComboBox.Option>
                        <ComboBox.Option id="raccoon" textValue="Raccoon">
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Raccoon</Text>
                        </ComboBox.Option>
                        <ComboBox.Option id="frog">Frog</ComboBox.Option>
                    </ComboBox>
                </Div>
            </Inline>
            <h1>Disabled</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isDisabled>
                <ComboBox.Option id="dog" textValue="Dog">
                    <SparklesIcon slot="end-icon" />
                    <Text slot="label">Dog</Text>
                </ComboBox.Option>
                <ComboBox.Option id="raccoon" textValue="Raccoon">
                    <SparklesIcon slot="end-icon" />
                    <Text slot="label">Raccoon</Text>
                </ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
            <h1>Fluid</h1>
            <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                <ComboBox.Option id="dog" textValue="Dog">
                    <SparklesIcon slot="end-icon" />
                    <Text slot="label">Dog</Text>
                </ComboBox.Option>
                <ComboBox.Option id="raccoon" textValue="Raccoon">
                    <SparklesIcon slot="end-icon" />
                    <Text slot="label">Raccoon</Text>
                </ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
            <h1>Limited Width</h1>  
            <Div width="12%">
                <ComboBox {...args} defaultSelectedKey="raccoon" isFluid>
                    <ComboBox.Option id="dog" textValue="Dog">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Dog</Text>
                    </ComboBox.Option>
                    <ComboBox.Option id="raccoon" textValue="Raccoon">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Raccoon</Text>
                    </ComboBox.Option>
                    <ComboBox.Option id="frog">Frog</ComboBox.Option>
                </ComboBox>
            </Div>
        </Stack>
    )
} satisfies Story;

export const ComboBoxItemWithDescription = {
    render: args => (
        <ComboBox {...args}>
            <ComboBox.Option id="dog" textValue="Dog">
                <Text slot="label">Dog</Text>
                <Text slot="description">I come in many different breeds</Text>
            </ComboBox.Option>
            <ComboBox.Option id="raccoon" textValue="Raccoon">
                <Text slot="label">Raccoon</Text>
                <Text slot="description">I am nocturnal</Text>
            </ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
    ),
    args: {
        defaultSelectedKey: "raccoon"
    }
} satisfies Story;

export const TriggerIcon = {
    ...OnlyItems.render,
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
    ...OnlyItems,
    play: playFn,
    args: {
        popoverProps: {
            UNSAFE_width: "30rem"
        }
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const MenuAutoWidth = {
    ...OnlyItems,
    play: playFn,
    args: {
        isAutoMenuWidth: true
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;

export const Direction = {
    ...OnlyItems,
    play: playFn,
    args: {
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
    play: playFn,
    args: {
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
    ...ComboBoxItemWithDescription,
    play: playFn,
    args: {
        isInvalid: true,
        defaultSelectedKey: "raccoon"
    },
    decorators: marginBottomDecoratorMD
} satisfies Story;

const StateTemplate = (args: Partial<ComboBoxProps<object>>) => (
    <Stack>
        <Inline alignY="center">
            <ComboBox {...args}
                fieldChildren={
                    <Label>Small</Label>
                }
            >
                <ComboBox.Option id="dog">Dog</ComboBox.Option>
                <ComboBox.Option id="cat">Cat</ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
            <ComboBox {...args}
                size="md"
                fieldChildren={
                    <Label>Medium</Label>
                }
            >
                <ComboBox.Option id="dog">Dog</ComboBox.Option>
                <ComboBox.Option id="cat">Cat</ComboBox.Option>
                <ComboBox.Option id="frog">Frog</ComboBox.Option>
            </ComboBox>
        </Inline>
        <ComboBox {...args}
            isDisabled
            fieldChildren={
                <Label>Disabled</Label>
            }
        >
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
        <ComboBox {...args}
            isInvalid
            fieldChildren={
                <Label>Invalid</Label>
            }
        >
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
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
                    <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                    <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                    <ComboBox.Option id="3">Dusty</ComboBox.Option>
                </ComboBox>
            </Div>
            <Div className="zoom-out">
                <ComboBox {...args}>
                    <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                    <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                    <ComboBox.Option id="3">Dusty</ComboBox.Option>
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
                <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                <ComboBox.Option id="3">Dusty</ComboBox.Option>
            </ComboBox>
            <ComboBox {...args} 
                triggerProps={
                    { className: "border-red" }
                }
            >
                <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                <ComboBox.Option id="3">Dusty</ComboBox.Option>
            </ComboBox>
            <ComboBox {...args} 
                triggerProps={
                    { style: { border: "1px solid red" } }
                }
            >
                <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                <ComboBox.Option id="3">Dusty</ComboBox.Option>
            </ComboBox>
        </Inline>
    ),
    args: {
        defaultSelectedKey: "2"
    },
    decorators: marginBottomDecoratorSM
} satisfies Story;
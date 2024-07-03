import { SparklesIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";

import { Badge } from "../../../Badge/index.ts";
import { Header } from "../../../Header/index.ts";
import { IconList } from "../../../IconList/index.ts";
import { Inline, Stack } from "../../../layout/index.ts";
import { Section } from "../../../Section/index.ts";
import { Text } from "../../../typography/Text/index.ts";
import { ListBox, ListBoxItem, type ListBoxProps } from "../../index.ts";

interface ListItemProps {
    id: number | string;
    name: string;
}

const meta = {
    title: "Components/ListBox",
    component: ListBox,
    args: {
        "aria-label": "list of options"
    }
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: args => {
        const items = [
            { id: "1", name: "Adobe Photoshop" },
            { id: "2", name: "Adobe XD" },
            { id: "3", name: "Adobe Dreamweaver" },
            { id: "4", name: "Adobe InDesign" },
            { id: "5", name: "Adobe Connect" },
            { id: "6", name: "Adobe Lightroom" },
            { id: "7", name: "Adobe Illustrator" },
            { id: "8", name: "Adobe Premiere Pro" },
            { id: "9", name: "Adobe After Effects" },
            { id: "10", name: "Adobe Audition" },
            { id: "11", name: "Adobe Animate" },
            { id: "12", name: "Adobe Spark" },
            { id: "13", name: "Adobe Stock" },
            { id: "14", name: "Adobe Fonts" },
            { id: "15", name: "Adobe Portfolio" },
            { id: "16", name: "Adobe Dimension" },
            { id: "17", name: "Adobe Captivate" },
            { id: "18", name: "Adobe Character Animator" },
            { id: "19", name: "Adobe Lightroom Classic" },
            { id: "20", name: "Adobe Fresco" }
        ] satisfies ListItemProps[];
          
        return (
            <Stack>
                <h1>Only Items</h1>
                <Inline alignY="flex-start">
                    <ListBox {...args} size="lg">
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="md">
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="sm">
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="xs">
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </ListBox>
                </Inline>
                <h1>Sections</h1>
                <ListBox {...args}>
                    <Section>
                        <Header>Visited</Header>
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </Section>
                    <Section>
                        <Header>Not Visited</Header>
                        <ListBoxItem id="4">Jupiter</ListBoxItem>
                        <ListBoxItem id="5">Mercury</ListBoxItem>
                        <ListBoxItem id="6">Neptune</ListBoxItem>
                        <ListBoxItem id="7">Uranus</ListBoxItem>
                    </Section>
                </ListBox>
                <h1>Mixed Section and Items</h1>
                <ListBox {...args}>
                    <ListBoxItem id="1">Earth</ListBoxItem>
                    <ListBoxItem id="2">Mars</ListBoxItem>
                    <ListBoxItem id="3">Saturn</ListBoxItem>
                    <Section>
                        <Header>Visited</Header>
                        <ListBoxItem id="4">Jupiter</ListBoxItem>
                        <ListBoxItem id="5">Mercury</ListBoxItem>
                        <ListBoxItem id="6">Neptune</ListBoxItem>
                    </Section>
                    <ListBoxItem id="7">Uranus</ListBoxItem>
                </ListBox>
                <h1>Items with Start Icon</h1>
                <Inline alignY="flex-start">
                    <ListBox {...args} size="lg">
                        <ListBoxItem id="1" textValue="Earth"><SparklesIcon /><Text slot="label">Earth</Text></ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars"><SparklesIcon /><Text slot="label">Mars</Text></ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn"><SparklesIcon /><Text slot="label">Saturn</Text></ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="md">
                        <ListBoxItem id="1" textValue="Earth"><SparklesIcon /><Text slot="label">Earth</Text></ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars"><SparklesIcon /><Text slot="label">Mars</Text></ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn"><SparklesIcon /><Text slot="label">Saturn</Text></ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="sm">
                        <ListBoxItem id="1" textValue="Earth"><SparklesIcon /><Text slot="label">Earth</Text></ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars"><SparklesIcon /><Text slot="label">Mars</Text></ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn"><SparklesIcon /><Text slot="label">Saturn</Text></ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="xs">
                        <ListBoxItem id="1" textValue="Earth"><SparklesIcon /><Text slot="label">Earth</Text></ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars"><SparklesIcon /><Text slot="label">Mars</Text></ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn"><SparklesIcon /><Text slot="label">Saturn</Text></ListBoxItem>
                    </ListBox>
                </Inline>
                <h1>Items with End Icon</h1>
                <Inline alignY="flex-start">
                    <ListBox {...args} size="lg">
                        <ListBoxItem id="1" textValue="Earth"><SparklesIcon slot="end-icon" /><Text slot="label">Earth</Text></ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars"><SparklesIcon slot="end-icon" /><Text slot="label">Mars</Text></ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn"><SparklesIcon slot="end-icon" /><Text slot="label">Saturn</Text></ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="md">
                        <ListBoxItem id="1" textValue="Earth"><SparklesIcon slot="end-icon" /><Text slot="label">Earth</Text></ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars"><SparklesIcon slot="end-icon" /><Text slot="label">Mars</Text></ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn"><SparklesIcon slot="end-icon" /><Text slot="label">Saturn</Text></ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="sm">
                        <ListBoxItem id="1" textValue="Earth"><SparklesIcon slot="end-icon" /><Text slot="label">Earth</Text></ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars"><SparklesIcon slot="end-icon" /><Text slot="label">Mars</Text></ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn"><SparklesIcon slot="end-icon" /><Text slot="label">Saturn</Text></ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="xs">
                        <ListBoxItem id="1" textValue="Earth"><SparklesIcon slot="end-icon" /><Text slot="label">Earth</Text></ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars"><SparklesIcon slot="end-icon" /><Text slot="label">Mars</Text></ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn"><SparklesIcon slot="end-icon" /><Text slot="label">Saturn</Text></ListBoxItem>
                    </ListBox>
                </Inline>
                <h1>Items with Badge</h1>
                <Inline alignY="flex-start">
                    <ListBox {...args} size="lg">
                        <ListBoxItem id="3" textValue="Saturn">
                            <Text>Saturn</Text>
                            <Badge>1</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars">
                            <Text>Mars</Text>
                            <Badge variant="secondary">99+</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="1" textValue="Earth">
                            <Text>Earth</Text>
                            <Badge>50</Badge>
                        </ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="md">
                        <ListBoxItem id="3" textValue="Saturn">
                            <Text>Saturn</Text>
                            <Badge>1</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars">
                            <Text>Mars</Text>
                            <Badge variant="secondary">99+</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="1" textValue="Earth">
                            <Text>Earth</Text>
                            <Badge>50</Badge>
                        </ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="sm">
                        <ListBoxItem id="3" textValue="Saturn">
                            <Text>Saturn</Text>
                            <Badge>1</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars">
                            <Text>Mars</Text>
                            <Badge variant="secondary">99+</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="1" textValue="Earth">
                            <Text>Earth</Text>
                            <Badge>50</Badge>
                        </ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="xs">
                        <ListBoxItem id="3" textValue="Saturn">
                            <Text>Saturn</Text>
                            <Badge>1</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars">
                            <Text>Mars</Text>
                            <Badge variant="secondary">99+</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="1" textValue="Earth">
                            <Text>Earth</Text>
                            <Badge>50</Badge>
                        </ListBoxItem>
                    </ListBox>
                </Inline>
                <h1>Items with description</h1>
                <ListBox {...args}>
                    <ListBoxItem id="1" textValue="Earth">
                        <Text slot="label">Earth</Text>
                        <Text slot="description">The third planet from the sun.</Text>
                    </ListBoxItem>
                    <ListBoxItem id="2" textValue="Mars">
                        <Text slot="label">Mars</Text>
                        <Text slot="description">The fourth planet from the sun.</Text>
                    </ListBoxItem>
                    <ListBoxItem id="3" textValue="Saturn">
                        <Text slot="label">Saturn</Text>
                        <Text slot="description">The sixth planet from the sun.</Text>
                    </ListBoxItem>
                </ListBox>
                <h1>Items with description and icons</h1>
                <ListBox {...args}>
                    <ListBoxItem id="1" textValue="Earth">
                        <IconList slot="end-icon">
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                        <Text slot="label">Earth</Text>
                        <Text slot="description">The third planet from the sun.</Text>
                    </ListBoxItem>
                    <ListBoxItem id="2" textValue="Mars">
                        <SparklesIcon />
                        <Text slot="label">Mars</Text>
                        <Text slot="description">The fourth planet from the sun.</Text>
                    </ListBoxItem>
                    <ListBoxItem id="3" textValue="Saturn">
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Saturn</Text>
                        <Text slot="description">The sixth planet from the sun.</Text>
                    </ListBoxItem>
                </ListBox>
                <h1>Items with Badge and Description</h1>
                <ListBox {...args}>
                    <ListBoxItem id="1" textValue="Earth">
                        <Text slot="label">Earth</Text>
                        <Text slot="description">The third planet from the sun.</Text>
                        <Badge>50</Badge>
                    </ListBoxItem>
                    <ListBoxItem id="2" textValue="Mars">
                        <Text slot="label">Mars</Text>
                        <Text slot="description">The fourth planet from the sun.</Text>
                        <Badge variant="secondary">99+</Badge>
                    </ListBoxItem>
                    <ListBoxItem id="3" textValue="Saturn">
                        <Text slot="label">Saturn</Text>
                        <Text slot="description">The sixth planet from the sun.</Text>
                        <Badge>1</Badge>
                    </ListBoxItem>
                </ListBox>
                <h1>Items with Everything</h1>
                <Inline alignY="flex-start">
                    <ListBox {...args} size="lg">
                        <ListBoxItem id="3" textValue="Saturn">
                            <SparklesIcon />
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Saturn</Text>
                            <Text slot="description">The sixth planet from the sun.</Text>
                            <Badge>1</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars">
                            <SparklesIcon />
                            <Text slot="label">Mars</Text>
                            <Text slot="description">The fourth planet from the sun.</Text>
                            <Badge variant="secondary">99+</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="1" textValue="Earth">
                            <SparklesIcon />
                            <IconList slot="end-icon">
                                <SparklesIcon /><SparklesIcon /><SparklesIcon />
                            </IconList>
                            <Text slot="label">Earth</Text>
                            <Text slot="description">The third planet from the sun.</Text>
                            <Badge>50</Badge>
                        </ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="md">
                        <ListBoxItem id="3" textValue="Saturn">
                            <SparklesIcon />
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Saturn</Text>
                            <Text slot="description">The sixth planet from the sun.</Text>
                            <Badge>1</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars">
                            <SparklesIcon />
                            <Text slot="label">Mars</Text>
                            <Text slot="description">The fourth planet from the sun.</Text>
                            <Badge variant="secondary">99+</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="1" textValue="Earth">
                            <SparklesIcon />
                            <IconList slot="end-icon">
                                <SparklesIcon /><SparklesIcon /><SparklesIcon />
                            </IconList>
                            <Text slot="label">Earth</Text>
                            <Text slot="description">The third planet from the sun.</Text>
                            <Badge>50</Badge>
                        </ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="sm">
                        <ListBoxItem id="3" textValue="Saturn">
                            <SparklesIcon />
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Saturn</Text>
                            <Text slot="description">The sixth planet from the sun.</Text>
                            <Badge>1</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars">
                            <SparklesIcon />
                            <Text slot="label">Mars</Text>
                            <Text slot="description">The fourth planet from the sun.</Text>
                            <Badge variant="secondary">99+</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="1" textValue="Earth">
                            <SparklesIcon />
                            <IconList slot="end-icon">
                                <SparklesIcon /><SparklesIcon /><SparklesIcon />
                            </IconList>
                            <Text slot="label">Earth</Text>
                            <Text slot="description">The third planet from the sun.</Text>
                            <Badge>50</Badge>
                        </ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="xs">
                        <ListBoxItem id="3" textValue="Saturn">
                            <SparklesIcon />
                            <SparklesIcon slot="end-icon" />
                            <Text slot="label">Saturn</Text>
                            <Text slot="description">The sixth planet from the sun.</Text>
                            <Badge>1</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars">
                            <SparklesIcon />
                            <Text slot="label">Mars</Text>
                            <Text slot="description">The fourth planet from the sun.</Text>
                            <Badge variant="secondary">99+</Badge>
                        </ListBoxItem>
                        <ListBoxItem id="1" textValue="Earth">
                            <SparklesIcon />
                            <IconList slot="end-icon">
                                <SparklesIcon /><SparklesIcon /><SparklesIcon />
                            </IconList>
                            <Text slot="label">Earth</Text>
                            <Text slot="description">The third planet from the sun.</Text>
                            <Badge>50</Badge>
                        </ListBoxItem>
                    </ListBox>
                </Inline>
                <h1>Loading</h1>
                <Inline alignY="flex-start">
                    <ListBox {...args} size="lg" isLoading>
                        {[]}
                    </ListBox>
                    <ListBox {...args} size="md" isLoading>
                        {[]}
                    </ListBox>
                    <ListBox {...args} size="sm" isLoading>
                        {[]}
                    </ListBox>
                    <ListBox {...args} size="xs" isLoading>
                        {[]}
                    </ListBox>
                </Inline>
                <h1>Loading with Existing Items</h1>
                <Inline alignY="flex-start">
                    <ListBox {...args} size="lg" isLoading>
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="md" isLoading>
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="sm" isLoading>
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </ListBox>
                    <ListBox {...args} size="xs" isLoading>
                        <ListBoxItem id="1">Earth</ListBoxItem>
                        <ListBoxItem id="2">Mars</ListBoxItem>
                        <ListBoxItem id="3">Saturn</ListBoxItem>
                    </ListBox>
                </Inline>
                <h1>Item Overflow</h1>
                <ListBox {...args}>
                    <ListBoxItem id="1" textValue="Earth">
                        <SparklesIcon />
                        <IconList slot="end-icon">
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                        <Text slot="label">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <Text slot="description">The third planet from the sun.</Text>
                        <Badge>50</Badge>
                    </ListBoxItem>
                    <ListBoxItem id="2" textValue="Mars">
                        <SparklesIcon />
                        <Text slot="label">Mars</Text>
                        <Text slot="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <Badge variant="secondary">99+</Badge>
                    </ListBoxItem>
                    <ListBoxItem id="3" textValue="Saturn">
                        <SparklesIcon />
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Saturn</Text>
                        <Text slot="description">The sixth planet from the sun.</Text>
                        <Badge>1</Badge>
                    </ListBoxItem>
                </ListBox>
                <h1>Fluid</h1>
                <ListBox {...args} isFluid>
                    <ListBoxItem id="1" textValue="Earth">
                        <SparklesIcon />
                        <IconList slot="end-icon">
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                        <Text slot="label">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <Text slot="description">The third planet from the sun.</Text>
                        <Badge>50</Badge>
                    </ListBoxItem>
                    <ListBoxItem id="2" textValue="Mars">
                        <SparklesIcon />
                        <Text slot="label">Mars</Text>
                        <Text slot="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <Badge variant="secondary">99+</Badge>
                    </ListBoxItem>
                    <ListBoxItem id="3" textValue="Saturn">
                        <SparklesIcon />
                        <SparklesIcon slot="end-icon" />
                        <Text slot="label">Saturn</Text>
                        <Text slot="description">The sixth planet from the sun.</Text>
                        <Badge>1</Badge>
                    </ListBoxItem>
                </ListBox>
                <h1>Scrolling</h1>
                <ListBox {...args} items={items} maxHeight="core_1280">
                    {item => {
                        const listItem = item as ListItemProps;
                    
                        return <ListBoxItem id={listItem.id}>{listItem.name}</ListBoxItem>;
                    }}
                </ListBox>
                <h1>Zoom</h1>
                <Inline alignY="flex-start">
                    <Div className="zoom-in">
                        <ListBox {...args}>
                            <ListBoxItem id="1" textValue="Earth">
                                <SparklesIcon />
                                <IconList slot="end-icon">
                                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                                </IconList>
                                <Text slot="label">Earth</Text>
                                <Text slot="description">The third planet from the sun.</Text>
                                <Badge>50</Badge>
                            </ListBoxItem>
                            <ListBoxItem id="2" textValue="Mars">
                                <SparklesIcon />
                                <Text slot="label">Mars</Text>
                                <Text slot="description">The fourth planet from the sun.</Text>
                                <Badge variant="secondary">99+</Badge>
                            </ListBoxItem>
                            <ListBoxItem id="3" textValue="Saturn">
                                <SparklesIcon />
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Saturn</Text>
                                <Text slot="description">The sixth planet from the sun.</Text>
                                <Badge>1</Badge>
                            </ListBoxItem>
                        </ListBox>
                    </Div>
                    <Div className="zoom-out">
                        <ListBox {...args}>
                            <ListBoxItem id="1" textValue="Earth">
                                <SparklesIcon />
                                <IconList slot="end-icon">
                                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                                </IconList>
                                <Text slot="label">Earth</Text>
                                <Text slot="description">The third planet from the sun.</Text>
                                <Badge>50</Badge>
                            </ListBoxItem>
                            <ListBoxItem id="2" textValue="Mars">
                                <SparklesIcon />
                                <Text slot="label">Mars</Text>
                                <Text slot="description">The fourth planet from the sun.</Text>
                                <Badge variant="secondary">99+</Badge>
                            </ListBoxItem>
                            <ListBoxItem id="3" textValue="Saturn">
                                <SparklesIcon />
                                <SparklesIcon slot="end-icon" />
                                <Text slot="label">Saturn</Text>
                                <Text slot="description">The sixth planet from the sun.</Text>
                                <Badge>1</Badge>
                            </ListBoxItem>
                        </ListBox>
                    </Div>
                </Inline>
                <h1>Styling</h1>
                <Inline>
                    <ListBox {...args} border="warning-strong">
                        <ListBoxItem id="1" textValue="Earth">
                            <Text slot="label">Earth</Text>
                            <Text slot="description">The third planet from the sun.</Text>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars" border="warning-strong">
                            <Text slot="label">Mars</Text>
                            <Text slot="description">The fourth planet from the sun.</Text>
                        </ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn">
                            <Text slot="label">Saturn</Text>
                            <Text slot="description">The sixth planet from the sun.</Text>
                        </ListBoxItem>
                    </ListBox>
                    <ListBox {...args} className="border-red">
                        <ListBoxItem id="1" textValue="Earth">
                            <Text slot="label">Earth</Text>
                            <Text slot="description">The third planet from the sun.</Text>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars" className="border-red">
                            <Text slot="label">Mars</Text>
                            <Text slot="description">The fourth planet from the sun.</Text>
                        </ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn">
                            <Text slot="label">Saturn</Text>
                            <Text slot="description">The sixth planet from the sun.</Text>
                        </ListBoxItem>
                    </ListBox>
                    <ListBox {...args} style={{ border: "1px solid red" }}>
                        <ListBoxItem id="1" textValue="Earth">
                            <Text slot="label">Earth</Text>
                            <Text slot="description">The third planet from the sun.</Text>
                        </ListBoxItem>
                        <ListBoxItem id="2" textValue="Mars" style={{ border: "1px solid red" }}>
                            <Text slot="label">Mars</Text>
                            <Text slot="description">The fourth planet from the sun.</Text>
                        </ListBoxItem>
                        <ListBoxItem id="3" textValue="Saturn">
                            <Text slot="label">Saturn</Text>
                            <Text slot="description">The sixth planet from the sun.</Text>
                        </ListBoxItem>
                    </ListBox>
                </Inline>
            </Stack>
        );
    }
} satisfies Story;

export const SingleSelect = {
    ...Default,
    args: {
        selectionMode: "single",
        selectedKeys: ["1"]
    }
} satisfies Story;

export const MultiSelect = {
    ...Default,
    args: {
        selectionMode: "multiple",
        selectedKeys: ["1", "2", "3", "4", "5", "6", "7"]
    }
} satisfies Story;

export const InputSingleSelect = {
    ...Default,
    args: {
        selectionMode: "single",
        selectionIndicator: "input",
        selectedKeys: ["1"]
    }
} satisfies Story;

export const InputMultiSelect = {
    ...Default,
    args: {
        selectionMode: "multiple",
        selectionIndicator: "input",
        selectedKeys: ["1", "2", "3", "4", "5", "6", "7"]
    }
} satisfies Story;

const StateTemplate = (args: Partial<ListBoxProps<unknown>>) => (
    <Inline alignY="flex-end">
        <ListBox {...args} size="xs">
            <ListBoxItem id="1" textValue="Earth">
                <SparklesIcon />
                <Text slot="label">Earth</Text>
                <Text slot="description">The third planet from the sun.</Text>
                <Badge>50</Badge>
            </ListBoxItem>
            <ListBoxItem id="2" textValue="Mars">
                <SparklesIcon />
                <Text slot="label">Mars</Text>
                <Text slot="description">The fourth planet from the sun.</Text>
                <Badge variant="secondary">99+</Badge>
            </ListBoxItem>
        </ListBox>
        <ListBox {...args} size="sm">
            <ListBoxItem id="1" textValue="Earth">
                <SparklesIcon />
                <Text slot="label">Earth</Text>
                <Text slot="description">The third planet from the sun.</Text>
                <Badge>50</Badge>
            </ListBoxItem>
            <ListBoxItem id="2" textValue="Mars">
                <SparklesIcon />
                <Text slot="label">Mars</Text>
                <Text slot="description">The fourth planet from the sun.</Text>
                <Badge variant="secondary">99+</Badge>
            </ListBoxItem>
        </ListBox>
        <ListBox {...args} size="md">
            <ListBoxItem id="1" textValue="Earth">
                <SparklesIcon />
                <Text slot="label">Earth</Text>
                <Text slot="description">The third planet from the sun.</Text>
                <Badge>50</Badge>
            </ListBoxItem>
            <ListBoxItem id="2" textValue="Mars">
                <SparklesIcon />
                <Text slot="label">Mars</Text>
                <Text slot="description">The fourth planet from the sun.</Text>
                <Badge variant="secondary">99+</Badge>
            </ListBoxItem>
        </ListBox>
        <ListBox {...args} size="lg">
            <ListBoxItem id="1" textValue="Earth">
                <SparklesIcon />
                <Text slot="label">Earth</Text>
                <Text slot="description">The third planet from the sun.</Text>
                <Badge>50</Badge>
            </ListBoxItem>
            <ListBoxItem id="2" textValue="Mars">
                <SparklesIcon />
                <Text slot="label">Mars</Text>
                <Text slot="description">The fourth planet from the sun.</Text>
                <Badge variant="secondary">99+</Badge>
            </ListBoxItem>
        </ListBox>
    </Inline>
);

export const SingleSelectStates = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const listboxes = canvas.getAllByRole("listbox");
        listboxes.forEach(async listbox => {
            const firstItem = (await within(listbox).findAllByRole("option"))[0];
            if (!firstItem.hasAttribute("data-disabled")) { // don't try and force states on a disabled input
                if (listbox.getAttribute("data-chromatic-force-press")) {
                    firstItem.setAttribute("data-pressed", "true");
                }

                if (listbox.getAttribute("data-chromatic-force-focus")) {
                    firstItem.setAttribute("data-focus-visible", "true");
                }

                if (listbox.getAttribute("data-chromatic-force-hover")) {
                    firstItem.setAttribute("data-hovered", "true");
                }
            }
            
            listbox.removeAttribute("data-chromatic-force-press");
            listbox.removeAttribute("data-chromatic-force-focus");
            listbox.removeAttribute("data-chromatic-force-hover");
        });
    },
    render: props => (
        <Stack>
            <h1>Default</h1>
            <StateTemplate {...props} />
            <h1>Focus Visible</h1>
            <StateTemplate {...props} data-chromatic-force-focus />
            <h1>Hovered</h1>
            <StateTemplate {...props} data-chromatic-force-hover />
            <h1>Focus Visible & Hovered</h1>
            <StateTemplate {...props} data-chromatic-force-focus data-chromatic-force-hover />
            <h1>Pressed</h1>
            <StateTemplate {...props} data-chromatic-force-press />
            <h1>All States & Disabled</h1>
            <StateTemplate {...props} disabledKeys={["1", "2"]} data-chromatic-force-focus data-chromatic-force-hover force-hover data-chromatic-force-press />
        </Stack>
    ),
    args: {
        selectionMode: "single",
        selectedKeys: ["1"]
    }
} satisfies Story;

export const MultiSelectStates = {
    ...SingleSelectStates,
    args: {
        selectionMode: "multiple",
        selectedKeys: ["1", "2", "3"]
    }
} satisfies Story;

export const InputSingleSelectStates = {
    ...SingleSelectStates,
    args: {
        selectionMode: "single",
        selectionIndicator: "input",
        selectedKeys: ["1"]
    }
} satisfies Story;

export const InputMultiSelectStates = {
    ...SingleSelectStates,
    args: {
        selectionMode: "multiple",
        selectionIndicator: "input",
        selectedKeys: ["1", "2", "3"]
    }
} satisfies Story;

export const InvalidSingleSelectStates = {
    ...SingleSelectStates,
    args: {
        ...SingleSelectStates.args,
        isInvalid: true
    }
} satisfies Story;

export const InvalidMultiSelectStates = {
    ...MultiSelectStates,
    args: {
        ...MultiSelectStates.args,
        isInvalid: true
    }
} satisfies Story;

export const InvalidInputSingleSelectStates = {
    ...InputSingleSelectStates,
    args: {
        ...InputSingleSelectStates.args,
        isInvalid: true
    }
} satisfies Story;

export const InvalidInputMultiSelectStates = {
    ...InputMultiSelectStates,
    args: {
        ...InputMultiSelectStates.args,
        isInvalid: true
    }
} satisfies Story;
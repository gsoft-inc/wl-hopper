import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { Selection } from "react-aria-components";

import { Badge } from "../../badge/index.ts";
import { Divider } from "../../divider/index.ts";
import { Header } from "../../header/index.ts";
import { IconList } from "../../IconList/index.ts";
import { Inline } from "../../layout/index.ts";
import { Section } from "../../section/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { ListBox } from "../src/ListBox.tsx";
import { ListBoxItem } from "../src/ListBoxItem.tsx";

/**
 * A ListBox is a disclosure component that appears with a set of actions relevant to a specific control, interface area, data element or application view. 
 * Typically, this context is determined by the user’s current selection prior to invoking the menu. 
 * Listbox can be opened from components such as Selects or Buttons.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/ListBox/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/ListBox",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: ListBox
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default ListBox.
 */
export const Default = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options">
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/**
 * ListBox items with a description.
 */
export const Description = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options with a description">
                <ListBoxItem textValue="Item 1">
                    <Text>Item 1</Text>
                    <Text slot="description">Description of item 1</Text>
                </ListBoxItem>
                <ListBoxItem textValue="Item 2">
                    <Text>Item 2</Text>
                    <Text slot="description">Description of item 2</Text>
                </ListBoxItem>
                <ListBoxItem textValue="Item 3">
                    <Text>Item 3</Text>
                    <Text slot="description">Description of item 3 will be a long one to show wrapping.</Text>
                </ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/**
 * ListBox that is fluid, meaning the width is 100% of its container.
 */
export const Fluid = {
    ...Description,
    args: {
        isFluid: true
    }
} satisfies Story;

/**
 * A ListBox can have a single selected item.
 */
export const SingleSelection = {
    render: function Render(args) {
        const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["1"]));

        return (
            <ListBox {...args}
                aria-label="list of options"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <ListBoxItem textValue="Item 1" id="1">
                    <Text slot="label">Item 1</Text>
                    <Text slot="description">Description of item 1</Text>
                </ListBoxItem>
                <ListBoxItem textValue="Item 2" id="2">
                    <Text slot="label">Item 2</Text>
                    <Text slot="description">Description of item 2</Text>
                </ListBoxItem>
                <ListBoxItem textValue="Item 3" id="3">
                    <Text slot="label">Item 3</Text>
                    <Text slot="description">Description of item 3</Text>
                </ListBoxItem>
            </ListBox>
        );
    },
    args: {
        selectionMode: "single"
    }
} satisfies Story;

/** 
 * A ListBox can have a different selection indicator for single select.
 */
export const SingleSelectionIndicator = {
    ...SingleSelection,
    args: {
        selectionMode: "single",
        selectionIndicator: "input"
    }
} satisfies Story;

/**
 * A ListBox with multiple selected items.
 */
export const MultipleSelection = {
    render: function Render(args) {
        const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["1"]));

        return (
            <ListBox {...args} 
                aria-label="list of options"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <ListBoxItem id="1">Item 1</ListBoxItem>
                <ListBoxItem id="2">Item 2</ListBoxItem>
                <ListBoxItem id="3">Item 3</ListBoxItem>
                <ListBoxItem id="4">Item 4</ListBoxItem>
                <ListBoxItem id="5">Item 5</ListBoxItem>
                <Section aria-label="section">
                    <ListBoxItem id="6">Item 6</ListBoxItem>
                    <ListBoxItem id="7">Item 7</ListBoxItem>
                    <ListBoxItem id="8">Item 8</ListBoxItem>
                    <ListBoxItem id="9">Item 9</ListBoxItem>
                    <ListBoxItem id="10">Item 10</ListBoxItem>
                </Section>
            </ListBox>
        );
    },
    args: {
        selectionMode: "multiple"
    }
} satisfies Story;

/** 
 * A ListBox can have a different selection indicator for multiple select .
 */
export const MultipleSelectionIndicator = {
    ...MultipleSelection,
    args: {
        selectionMode: "multiple",
        selectionIndicator: "input"
    }
} satisfies Story;

/**
 * A ListBox with a disabled item.
 */
export const Disabled = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options">
                <ListBoxItem id="1">Item 1</ListBoxItem>
                <ListBoxItem id="2">Item 2</ListBoxItem>
                <ListBoxItem id="3">Item 3</ListBoxItem>
            </ListBox>
        );
    },
    args: {
        disabledKeys: ["2"]
    }
} satisfies Story;

/**
 * A ListBox that is invalid.
 */
export const Invalid = {
    ...Description,
    args: {
        isInvalid: true,
        selectionMode: "multiple",
        disabledKeys: ["2"]
    }
} satisfies Story;

/**
 * ListBoxes can be multiple sizes
 */
export const Sizes = {
    render: args => {
        return (
            <Inline alignY="flex-start">
                <ListBox {...args} aria-label="list of options" size="lg">
                    <ListBoxItem>Item 1</ListBoxItem>
                    <ListBoxItem>Item 2</ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
                <ListBox {...args} aria-label="list of options" size="md">
                    <ListBoxItem>Item 1</ListBoxItem>
                    <ListBoxItem>Item 2</ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
                <ListBox {...args} aria-label="list of options" size="sm">
                    <ListBoxItem>Item 1</ListBoxItem>
                    <ListBoxItem>Item 2</ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
                <ListBox {...args} aria-label="list of options" size="xs">
                    <ListBoxItem>Item 1</ListBoxItem>
                    <ListBoxItem>Item 2</ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
            </Inline>
        );
    }
} satisfies Story;

/**
 * ListBoxItems can be multiple sizes as well
 */
export const ItemSizes = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options">
                <ListBoxItem size="xs">XS Item</ListBoxItem>
                <ListBoxItem size="sm">SM Item</ListBoxItem>
                <ListBoxItem size="md">MD Item</ListBoxItem>
                <ListBoxItem size="lg">LG Item</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/**
 * A ListBox can contain icons.
 */
export const Icons = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options">
                <ListBoxItem textValue="Item 1">
                    <Text slot="label">Item 1</Text>
                    <IconList>
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </ListBoxItem>
                <ListBoxItem textValue="Item 2">
                    <SparklesIcon /><Text slot="label">Item 2</Text>
                </ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/**
 * A ListBox can contain icons at the end of a list item.
 */
export const EndIcons = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options">
                <ListBoxItem textValue="Item 1">
                    <Text slot="label">Item 1</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </ListBoxItem>
                <ListBoxItem textValue="Item 2">
                    <SparklesIcon slot="end-icon" /><Text slot="label">Item 2</Text>
                </ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
        );
    },
    args: {
        selectionMode: "single"
    }
} satisfies Story;

/**
 * A ListBox can contain a count using a badge.
 */
export const Count = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options">
                <ListBoxItem textValue="Item 1">
                    <Text slot="label">Item 1</Text>
                    <Badge>50</Badge>
                </ListBoxItem>
                <ListBoxItem textValue="Item 2">
                    <Badge variant="secondary">99+</Badge>
                    <Text slot="label">Item 2</Text>
                </ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/**
 * A Listbox can have sections and section headers.
 */
export const Sections = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options">
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
                <ListBoxItem>Item 4</ListBoxItem>
                <ListBoxItem>Item 5</ListBoxItem>
                <Section>
                    <Header>More Items</Header>
                    <ListBoxItem>Item 6</ListBoxItem>
                    <ListBoxItem>Item 7</ListBoxItem>
                    <ListBoxItem>Item 8</ListBoxItem>
                    <ListBoxItem>Item 9</ListBoxItem>
                    <ListBoxItem>Item 10</ListBoxItem>
                </Section>
                <Section>
                    <Header>Even More Items</Header>
                    <ListBoxItem>Item 11</ListBoxItem>
                    <ListBoxItem>Item 12</ListBoxItem>
                    <ListBoxItem>Item 13</ListBoxItem>
                    <ListBoxItem>Item 14</ListBoxItem>
                    <ListBoxItem>Item 15</ListBoxItem>
                </Section>
                <ListBoxItem>Item 16</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/** 
 * Dividers can be added to a ListBox 
 */
export const Dividers = {
    render: args => {
        return (
            <ListBox {...args} aria-label="list of options">
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
                <ListBoxItem>Item 4</ListBoxItem>
                <ListBoxItem>Item 5</ListBoxItem>
                <Divider />
                <ListBoxItem>Item 7</ListBoxItem>
                <ListBoxItem>Item 8</ListBoxItem>
                <ListBoxItem>Item 9</ListBoxItem>
                <ListBoxItem>Item 10</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;


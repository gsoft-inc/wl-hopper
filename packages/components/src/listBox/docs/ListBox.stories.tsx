import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { Selection } from "react-aria-components";

import { IconList } from "../../IconList/index.ts";
import { Inline } from "../../layout/index.ts";
import { Text } from "../../Text/index.ts";
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
    render: () => {
        return (
            <ListBox>
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/**
 * A ListBox with a selected item.
 */
export const Selected = {
    render: function Render(args) {
        return (
            <ListBox {...args}
                defaultSelectedKeys={["1"]}
            >
                <ListBoxItem id="1">Item 1</ListBoxItem>
                <ListBoxItem id="2">Item 2</ListBoxItem>
                <ListBoxItem id="3">Item 3</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/**
 * A ListBox with a selected item that can be changed.
 */
export const Selectable = {
    render: function Render(args) {
        const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["1"]));

        return (
            <ListBox {...args}
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <ListBoxItem id="1">Item 1</ListBoxItem>
                <ListBoxItem id="2">Item 2</ListBoxItem>
                <ListBoxItem id="3">Item 3</ListBoxItem>
            </ListBox>
        );
    }
} satisfies Story;

/**
 * A ListBox with a disabled item.
 */
export const Disabled = {
    render: args => {
        return (
            <ListBox {...args}>
                <ListBoxItem>Item 1</ListBoxItem>
                <ListBoxItem>Item 2</ListBoxItem>
                <ListBoxItem>Item 3</ListBoxItem>
            </ListBox>
        );
    },
    args: {
        disabledKeys: ["2"]
    }
} satisfies Story;

/**
 * ListBoxes can be multiple sizes
 */
export const Sizes = {
    render: args => {
        return (
            <Inline>
                <ListBox {...args} size="sm">
                    <ListBoxItem>Item 1</ListBoxItem>
                    <ListBoxItem>Item 2</ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
                <ListBox {...args} size="md">
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
            <ListBox {...args}>
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
            <Inline>
                <ListBox {...args}>
                    <ListBoxItem>
                        <Text>Item 1</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </ListBoxItem>
                    <ListBoxItem>
                        <SparklesIcon /><Text>Item 2</Text>
                    </ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
                <ListBox {...args}>
                    <ListBoxItem>
                        <Text>Item 1</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </ListBoxItem>
                    <ListBoxItem>
                        <SparklesIcon /><Text>Item 2</Text>
                    </ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
            </Inline>
        );
    }
} satisfies Story;

/**
 * A ListBox can contain icons at the end of a list item.
 */
export const EndIcons = {
    render: args => {
        return (
            <Inline>
                <ListBox {...args}>
                    <ListBoxItem>
                        <Text>Item 1</Text>
                        <IconList slot="end-icon">
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </ListBoxItem>
                    <ListBoxItem>
                        <SparklesIcon slot="end-icon" /><Text>Item 2</Text>
                    </ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
                <ListBox {...args}>
                    <ListBoxItem>
                        <Text>Item 1</Text>
                        <IconList slot="end-icon">
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </ListBoxItem>
                    <ListBoxItem>
                        <SparklesIcon slot="end-icon" /><Text>Item 2</Text>
                    </ListBoxItem>
                    <ListBoxItem>Item 3</ListBoxItem>
                </ListBox>
            </Inline>
        );
    }
} satisfies Story;


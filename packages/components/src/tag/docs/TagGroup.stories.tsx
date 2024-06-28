import { SparklesIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { Selection } from "react-aria-components";
import { RouterProvider, createMemoryRouter, useNavigate } from "react-router-dom";

import { Badge } from "../../Badge/index.ts";
import { ErrorMessage } from "../../ErrorMessage/index.ts";
import { HelperMessage } from "../../HelperMessage/index.ts";
import { HopperProvider } from "../../HopperProvider/index.ts";
import { IconList } from "../../IconList/index.ts";
import { Stack } from "../../layout/index.ts";
import { Label } from "../../typography/Label/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { Tag } from "../src/Tag.tsx";
import { TagGroup } from "../src/TagGroup.tsx";
import { TagList } from "../src/TagList.tsx";

/**
 * The TagGroup is a dynamic UI component that encapsulates a collection of tags.
 * Each tag, representing a label, category, keyword, or filter, is designed to be used within a TagList for groupings.
 *
 * The TagGroup provides a centralized way to manage these tags, including support for keyboard navigation, selection, and removal of individual tags.
 * Unlike some other tag implementations, this Tag component does not support different colors, keeping the UI consistent and focused on the content of the tags themselves.
 *
 * [View repository](https://github.com/gsoft-inc/wl-hopper/tree/main/packages/components/src/Tag/src)
 * -
 * [View package](https://www.npmjs.com/package/@hopper-ui/components)
 * -
 * View storybook TODO
 */
const meta = {
    title: "Docs/TagGroup",
    tags: ["autodocs"],
    parameters: {
        // Disables Chromatic's snapshotting on documentation stories
        chromatic: { disableSnapshot: true }
    },
    component: TagGroup
} satisfies Meta<typeof TagGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A default TagGroup
 */
export const Default = {
    render: props => (
        <TagGroup {...props} aria-label="tag-group">
            <TagList>
                <Tag id="1">Tag 1</Tag>
                <Tag id="2">Tag 2</Tag>
                <Tag id="3">Tag 3</Tag>
            </TagList>
        </TagGroup>
    )
} satisfies Story;

/**
 * Tags can be removed using the onRemove callback.
 * If you are using a keyboard, you can press the backspace key to remove a tag.
 */
export const RemovableTags = {
    ...Default,
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        }
    }
} satisfies Story;

/**
 * Tags can have a loading state.
 */
export const LoadingTags = {
    render: props => (
        <TagGroup {...props} aria-label="tag-group">
            <TagList>
                <Tag id="1" isLoading>Tag 1</Tag>
                <Tag id="2">Tag 2</Tag>
                <Tag id="3">Tag 3</Tag>
            </TagList>
        </TagGroup>
    ),
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        }
    }
} satisfies Story;

/**
 * A TagGroup can have a Label to provide more context to the user.
 */
export const LabelStory = {
    name: "Label",
    render: props => (
        <TagGroup {...props}>
            <TagList>
                <Tag id="1">Tag 1</Tag>
                <Tag id="2">Tag 2</Tag>
                <Tag id="3">Tag 3</Tag>
            </TagList>
            <Label>List of Tags</Label>
        </TagGroup>
    )
} satisfies Story;

/**
 * Tags can be different sizes using the `size` prop on either the TagGroup or Tag components.
 */
export const Sizes = {
    render: props => (
        <Stack>
            <TagGroup {...props} aria-label="tag-group" size="md">
                <TagList>
                    <Tag id="1">Tag 1</Tag>
                    <Tag id="2">Tag 2</Tag>
                    <Tag id="3">Tag 3</Tag>
                </TagList>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="lg">
                <TagList>
                    <Tag id="1">Tag 1</Tag>
                    <Tag id="2">Tag 2</Tag>
                    <Tag id="3">Tag 3</Tag>
                </TagList>
            </TagGroup>
        </Stack>
    ),
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        }
    }
} satisfies Story;

/**
 * Tags can have icons.
 */
export const Icons = {
    render: props => (
        <Stack>
            <TagGroup {...props} aria-label="tag-group" size="md">
                <TagList>
                    <Tag id="1" textValue="Developer"><SparklesIcon /><Text>Developer</Text></Tag>
                    <Tag id="2" textValue="Designer">
                        <Text>Designer</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Tag>
                </TagList>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="lg">
                <TagList>
                    <Tag id="1" textValue="Developer"><SparklesIcon /><Text>Developer</Text></Tag>
                    <Tag id="2" textValue="Designer">
                        <Text>Designer</Text>
                        <IconList>
                            <SparklesIcon /><SparklesIcon /><SparklesIcon />
                        </IconList>
                    </Tag>
                </TagList>
            </TagGroup>
        </Stack>
    ),
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        }
    }
} satisfies Story;


/**
 * Tags can also have a count using the `Badge` component.
 */
export const Count = {
    render: props => (
        <Stack>
            <TagGroup {...props} aria-label="tag-group" size="md">
                <TagList>
                    <Tag id="1" textValue="Designer">
                        <Text>Designer</Text>
                        <Badge>12</Badge>
                    </Tag>
                    <Tag id="2" textValue="Developer">
                        <Text>Developer</Text>
                        <Badge variant="secondary">100</Badge>
                    </Tag>
                </TagList>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="lg">
                <TagList>
                    <Tag id="1" textValue="Designer">
                        <Badge>12</Badge>
                        <Text>Designer</Text>
                    </Tag>
                    <Tag id="2" textValue="Developer">
                        <Text>Developer</Text>
                        <Badge variant="secondary">100</Badge>
                    </Tag>
                </TagList>
            </TagGroup>
        </Stack>
    )
} satisfies Story;

/**
 * A TagGroup can have a description to provide more information to the user.
 */
export const Description = {
    render: props => (
        <TagGroup {...props}>
            <Label>Planets</Label>
            <TagList>
                <Tag id="1" textValue="Earth"><SparklesIcon /><Text>Earth</Text></Tag>
                <Tag id="2" textValue="Mars"><SparklesIcon /><Text>Mars</Text></Tag>
                <Tag id="3" textValue="Jupiter"><SparklesIcon /><Text>Jupiter</Text></Tag>
            </TagList>
            <HelperMessage>The planets in this list are in no particular order.</HelperMessage>
        </TagGroup>
    ),
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        }
    }
} satisfies Story;

/**
 * Tags can be selected using the `selectionMode` prop.
 * Use `defaultSelectedKeys` for initial selected items (uncontrolled) and `selectedKeys` to manage selected items (controlled).
 * The selected keys should match the item's id prop.
 */
export const SelectableTags = {
    ...Description,
    args: {
        ...Description.args,
        selectionMode: "multiple",
        defaultSelectedKeys: new Set(["1", "3"])
    }
} satisfies Story;

/**
 * Tags can be disabled using the `disabledKeys` prop or the `isDisabled` prop on the Tag component.
 */
export const DisabledTags = {
    ...Description,
    args: {
        ...Description.args,
        disabledKeys: new Set(["1", "2", "3"])
    }
} satisfies Story;

/**
 * If a TagGroup is invalid, it will display an error message. Displaying this error message will hide the helper message.
 * A individual Tag can also be set as invalid using the `isInvalid` prop.
 */
export const Validation = {
    args: {
        isInvalid: true,
        selectionMode: "multiple"
    },
    render: function Render(args) {
        const [isInvalid, setIsInvalid] = useState(args.isInvalid);

        function onChange(keys: Selection) {
            // if value is empty, then it is invalid
            if (typeof keys === "object") {
                setIsInvalid(keys.size === 0);
            }
        }

        return (
            <Stack>
                <TagGroup {...args} onSelectionChange={onChange} isInvalid={isInvalid}>
                    <HelperMessage>Unselect all to show the error message</HelperMessage>
                    <ErrorMessage>Select a tag and the description will appear</ErrorMessage>
                    <TagList>
                        <Tag id="1">Tag 1</Tag>
                        <Tag id="2">Tag 2</Tag>
                        <Tag id="3">Tag 3</Tag>
                    </TagList>
                    <Label>List of Tags</Label>
                </TagGroup>
                <TagGroup onSelectionChange={onChange}>
                    <Label>List of Tags with only one invalid</Label>
                    <TagList>
                        <Tag id="1">Tag 1</Tag>
                        <Tag id="2" isInvalid>Tag 2</Tag>
                        <Tag id="3">Tag 3</Tag>
                    </TagList>
                </TagGroup>
            </Stack>
        );
    }
} satisfies Story;

/**
 * Customize the empty state message when there are no tags.
 */
export const EmptyState = {
    render: props => (
        <TagGroup {...props} aria-label="tag-group">
            <TagList
                renderEmptyState={() => "No tags available"}
            >
                {[]}
            </TagList>
        </TagGroup>
    )
} satisfies Story;

/**
 * Tags can be links by using the `href` prop on the Tag component. Tags with an `href` are not selectable.
 */
export const Links = {
    render: props => (
        <TagGroup {...props} aria-label="tag-group">
            <TagList>
                <Tag id="1" href="https://www.google.com">Google</Tag>
                <Tag id="2" href="https://www.bing.com">Bing</Tag>
                <Tag id="3" href="https://www.yahoo.com">Yahoo</Tag>
            </TagList>
        </TagGroup>
    )
} satisfies Story;

/**
 * A Tag can be rendered as a react router link when using the href property, and setting the navigate property on the HopperProvider
 */
export const ReactRouterLink: Story = {
    render: props => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

        return (
            <HopperProvider colorScheme="light" navigate={navigate}>
                <TagGroup {...props} aria-label="tag-group">
                    <TagList>
                        <Tag id="1" href="/123">Page 1</Tag>
                        <Tag id="2" href="/456">Page 2</Tag>
                        <Tag id="3" href="/789">Page 3</Tag>
                    </TagList>
                </TagGroup>
            </HopperProvider>
        );
    },
    decorators: [
        Story => {
            const router = createMemoryRouter([{
                path: "/123",
                element: <Stack><Story /><Div>Navigated Successfully to page 1!</Div></Stack>
            }, {
                path: "/456",
                element: <Stack><Story /><Div>Navigated Successfully to page 2!</Div></Stack>
            }, {
                path: "/789",
                element: <Stack><Story /><Div>Navigated Successfully to page 3!</Div></Stack>
            }, {
                path: "*",
                element: <Story />
            }
            ]);

            return (
                <RouterProvider router={router} />
            );
        }
    ]
};



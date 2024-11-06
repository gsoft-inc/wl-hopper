import type { Selection } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";
import { Div } from "@hopper-ui/styled-system";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RouterProvider, createMemoryRouter, useNavigate } from "react-router-dom";

import { Badge } from "../../Badge/index.ts";
import { HopperProvider } from "../../HopperProvider/index.ts";
import { IconList } from "../../IconList/index.ts";
import { Stack } from "../../layout/index.ts";
import { Text } from "../../typography/Text/index.ts";
import { Tag } from "../src/Tag.tsx";
import { TagGroup } from "../src/TagGroup.tsx";

/**
 * The TagGroup is a dynamic UI component that encapsulates a collection of tags.
 * Each tag, representing a label, category, keyword, or filter, is designed to be used within a TagList for groupings.
 *
 * The TagGroup provides a centralized way to manage these tags, including support for keyboard navigation, selection, and removal of individual tags.
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
            <Tag id="1">Tag 1</Tag>
            <Tag id="2">Tag 2</Tag>
            <Tag id="3">Tag 3</Tag>
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
            <Tag id="1" isLoading>Tag 1</Tag>
            <Tag id="2">Tag 2</Tag>
            <Tag id="3">Tag 3</Tag>
        </TagGroup>
    ),
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        }
    }
} satisfies Story;

/**
 * A TagGroup can have a label to provide more context to the user.
 */
export const LabelStory = {
    name: "Label",
    render: props => (
        <TagGroup {...props} label="List of Tags">
            <Tag id="1">Tag 1</Tag>
            <Tag id="2">Tag 2</Tag>
            <Tag id="3">Tag 3</Tag>
        </TagGroup>
    )
} satisfies Story;

/**
 * Tags can be different sizes using the `size` prop on either the TagGroup or Tag components.
 */
export const Sizes = {
    render: props => (
        <Stack>
            <TagGroup {...props} aria-label="tag-group" size="sm">
                <Tag id="1">Tag 1</Tag>
                <Tag id="2">Tag 2</Tag>
                <Tag id="3">Tag 3</Tag>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="md">
                <Tag id="1">Tag 1</Tag>
                <Tag id="2">Tag 2</Tag>
                <Tag id="3">Tag 3</Tag>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="lg">
                <Tag id="1">Tag 1</Tag>
                <Tag id="2">Tag 2</Tag>
                <Tag id="3">Tag 3</Tag>
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
 * A Tag supports multiple variants.
 */
export const Variants = {
    render: props => (
        <TagGroup {...props} aria-label="tag-group" size="md">
            <Tag variant="neutral"><Text>Neutral</Text></Tag>
            <Tag variant="subdued"><Text>Subdued</Text></Tag>
            <Tag variant="progress"><Text>Progress</Text></Tag>
            <Tag variant="positive"><Text>Positive</Text></Tag>
            <Tag variant="caution"><Text>Caution</Text></Tag>
            <Tag variant="negative"><Text>Negative</Text></Tag>
            <Tag variant="option1"><Text>Option 1</Text></Tag>
            <Tag variant="option2"><Text>Option 2</Text></Tag>
            <Tag variant="option3"><Text>Option 3</Text></Tag>
            <Tag variant="option4"><Text>Option 4</Text></Tag>
            <Tag variant="option5"><Text>Option 5</Text></Tag>
            <Tag variant="option6"><Text>Option 6</Text></Tag>
        </TagGroup>
    )
} satisfies Story;

/**
 * Tags can have icons.
 */
export const Icons = {
    render: props => (
        <Stack>
            <TagGroup {...props} aria-label="tag-group" size="sm">
                <Tag id="1" textValue="Developer">
                    <SparklesIcon />
                    <Text>Developer</Text>
                </Tag>
                <Tag id="2" textValue="Designer">
                    <Text>Designer</Text>
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                </Tag>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="md">
                <Tag id="1" textValue="Developer">
                    <SparklesIcon />
                    <Text>Developer</Text>
                </Tag>
                <Tag id="2" textValue="Designer">
                    <Text>Designer</Text>
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                </Tag>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="lg">
                <Tag id="1" textValue="Developer">
                    <SparklesIcon />
                    <Text>Developer</Text>
                </Tag>
                <Tag id="2" textValue="Designer">
                    <Text>Designer</Text>
                    <IconList>
                        <SparklesIcon />
                        <SparklesIcon />
                        <SparklesIcon />
                    </IconList>
                </Tag>
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
            <TagGroup {...props} aria-label="tag-group" size="sm">
                <Tag id="1" textValue="Designer">
                    <Text>Designer</Text>
                    <Badge>12</Badge>
                </Tag>
                <Tag id="2" textValue="Developer">
                    <Text>Developer</Text>
                    <Badge variant="subdued">100</Badge>
                </Tag>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="md">
                <Tag id="1" textValue="Designer">
                    <Text>Designer</Text>
                    <Badge>12</Badge>
                </Tag>
                <Tag id="2" textValue="Developer">
                    <Text>Developer</Text>
                    <Badge variant="subdued">100</Badge>
                </Tag>
            </TagGroup>
            <TagGroup {...props} aria-label="tag-group" size="lg">
                <Tag id="1" textValue="Designer">
                    <Badge>12</Badge>
                    <Text>Designer</Text>
                </Tag>
                <Tag id="2" textValue="Developer">
                    <Text>Developer</Text>
                    <Badge variant="subdued">100</Badge>
                </Tag>
            </TagGroup>
        </Stack>
    )
} satisfies Story;

/**
 * A TagGroup can have a description to provide more information to the user.
 */
export const Description = {
    render: props => (
        <TagGroup {...props} label="Planets" description="The planets in this list are in no particular order.">
            <Tag id="1" textValue="Earth"><SparklesIcon /><Text>Earth</Text></Tag>
            <Tag id="2" textValue="Mars"><SparklesIcon /><Text>Mars</Text></Tag>
            <Tag id="3" textValue="Jupiter"><SparklesIcon /><Text>Jupiter</Text></Tag>
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
 * Tags can be disabled using the `disabledKeys` prop.
 */
export const DisabledTags = {
    ...Description,
    args: {
        ...Description.args,
        disabledKeys: new Set(["1", "2", "3"])
    }
} satisfies Story;

/**
 * If a TagGroup is invalid, it will display an error message.
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
                <TagGroup {...args} onSelectionChange={onChange} isInvalid={isInvalid} errorMessage="Select a tag and the description will appear" description="Unselect all to show the error message">
                    <Tag id="1">Tag 1</Tag>
                    <Tag id="2">Tag 2</Tag>
                    <Tag id="3">Tag 3</Tag>
                </TagGroup>
                <TagGroup onSelectionChange={onChange} label="List of Tags with only one invalid">
                    <Tag id="1">Tag 1</Tag>
                    <Tag id="2" isInvalid>Tag 2</Tag>
                    <Tag id="3">Tag 3</Tag>
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
            No tags available
        </TagGroup>
    )
} satisfies Story;

/**
 * Tags can be links by using the `href` prop on the Tag component.
 */
export const Links = {
    render: props => (
        <TagGroup {...props} aria-label="tag-group">
            <Tag id="1" href="https://www.google.com">Google</Tag>
            <Tag id="2" href="https://www.bing.com">Bing</Tag>
            <Tag id="3" href="https://www.yahoo.com">Yahoo</Tag>
        </TagGroup>
    )
} satisfies Story;

/**
 * A Tag can be rendered as a react router link when using the href property, and setting the navigate property on the HopperProvider.
 */
export const ReactRouterLink: Story = {
    render: props => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

        return (
            <HopperProvider colorScheme="light" navigate={navigate}>
                <TagGroup {...props} aria-label="tag-group">
                    <Tag id="1" href="/123">Page 1</Tag>
                    <Tag id="2" href="/456">Page 2</Tag>
                    <Tag id="3" href="/789">Page 3</Tag>
                </TagGroup>
            </HopperProvider>
        );
    },
    decorators: [
        Story => {
            const router = createMemoryRouter([
                {
                    path: "/123",
                    element: <Stack><Story /><Div>Navigated Successfully to page 1!</Div></Stack>
                },
                {
                    path: "/456",
                    element: <Stack><Story /><Div>Navigated Successfully to page 2!</Div></Stack>
                },
                {
                    path: "/789",
                    element: <Stack><Story /><Div>Navigated Successfully to page 3!</Div></Stack>
                },
                {
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


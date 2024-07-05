import { SparklesIcon } from "@hopper-ui/icons";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";
import type { Selection } from "react-aria-components";

import { Badge } from "../../../Badge/index.ts";
import { IconList } from "../../../IconList/index.ts";
import { Stack } from "../../../layout/index.ts";
import { Label, Text } from "../../../typography/index.ts";
import { TagGroup, TagList, Tag, type TagGroupProps } from "../../src/index.ts";

const meta = {
    title: "Components/TagGroup",
    component: TagGroup
} satisfies Meta<typeof TagGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    render: props => {
        return (
            <Stack>
                <TagGroup {...props}>
                    <Label>Medium</Label>
                    <TagList>
                        <Tag id="1">Tag 1</Tag>
                        <Tag id="2">Tag 2</Tag>
                        <Tag id="3" style={{ maxWidth: "5rem" }}>Tag 3 with long text</Tag>
                    </TagList>
                </TagGroup>

                <TagGroup {...props} size="lg">
                    <Label>Large</Label>
                    <TagList>
                        <Tag id="1">Tag 1</Tag>
                        <Tag id="2">Tag 2</Tag>
                        <Tag id="3" style={{ maxWidth: "6rem" }}>Tag 3 with long text</Tag>
                    </TagList>
                </TagGroup>
            </Stack>
        );
    }
} satisfies Story;

export const Icons = {
    render: props => {
        return (
            <Stack>
                <TagGroup {...props} size="md">
                    <Label>Medium</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer"><SparklesIcon /><Text>Developer</Text></Tag>
                        <Tag id="2" textValue="Designer">
                            <Text>Designer</Text>
                            <IconList>
                                <SparklesIcon /><SparklesIcon /><SparklesIcon />
                            </IconList>
                        </Tag>
                        <Tag id="3" textValue="Designer" style={{ maxWidth: "7rem" }}>
                            <Text>Executive Officer</Text>
                            <IconList>
                                <SparklesIcon /><SparklesIcon /><SparklesIcon />
                            </IconList>
                        </Tag>
                    </TagList>
                </TagGroup>
                <TagGroup {...props} size="lg">
                    <Label>Large</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer"><SparklesIcon /><Text>Developer</Text></Tag>
                        <Tag id="2" textValue="Designer">
                            <Text>Designer</Text>
                            <IconList>
                                <SparklesIcon /><SparklesIcon /><SparklesIcon />
                            </IconList>
                        </Tag>
                        <Tag id="3" textValue="Designer" style={{ maxWidth: "8rem" }}>
                            <Text>Executive Officer</Text>
                            <IconList>
                                <SparklesIcon /><SparklesIcon /><SparklesIcon />
                            </IconList>
                        </Tag>
                    </TagList>
                </TagGroup>
            </Stack>
        );
    }
} satisfies Story;

export const Count = {
    render: props => {
        return (
            <Stack>
                <TagGroup {...props} size="md">
                    <Label>Medium</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer">
                            <Badge>12</Badge>
                            <Text>Developer</Text>
                        </Tag>
                        <Tag id="2" textValue="Designer">
                            <Text>Designer</Text>
                            <Badge variant="secondary">99+</Badge>
                        </Tag>
                        <Tag id="3" textValue="Designer" style={{ maxWidth: "6rem" }}>
                            <Text>Executive Officer</Text>
                            <Badge>100</Badge>
                        </Tag>
                    </TagList>
                </TagGroup>
                <TagGroup {...props} size="lg">
                    <Label>Large</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer">
                            <Badge>12</Badge>
                            <Text>Developer</Text>
                        </Tag>
                        <Tag id="2" textValue="Designer">
                            <Text>Designer</Text>
                            <Badge variant="secondary">99+</Badge>
                        </Tag>
                        <Tag id="3" textValue="Designer" style={{ maxWidth: "7rem" }}>
                            <Text>Executive Officer</Text>
                            <Badge>100</Badge>
                        </Tag>
                    </TagList>
                </TagGroup>
            </Stack>
        );
    }
} satisfies Story;

export const Loading = {
    render: props => {
        return (
            <Stack>
                <TagGroup {...props} size="md">
                    <Label>Medium</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer" isLoading>Developer</Tag>
                        <Tag id="2" textValue="Designer" isLoading>Designer</Tag>
                        <Tag id="3" textValue="Designer" isLoading style={{ maxWidth: "5rem" }}>Executive Officer</Tag>
                    </TagList>
                </TagGroup>
                <TagGroup {...props} size="lg">
                    <Label>Large</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer" isLoading>Developer</Tag>
                        <Tag id="2" textValue="Designer" isLoading>Designer</Tag>
                        <Tag id="3" textValue="Designer" isLoading style={{ maxWidth: "6rem" }}>Executive Officer</Tag>
                    </TagList>
                </TagGroup>
            </Stack>
        );
    }
} satisfies Story;

export const Invalid = {
    render: props => {
        return (
            <Stack>
                <TagGroup {...props} size="md" isInvalid>
                    <Label>Medium</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer">Developer</Tag>
                        <Tag id="2" textValue="Designer">Designer</Tag>
                    </TagList>
                </TagGroup>
                <TagGroup {...props} size="lg" isInvalid>
                    <Label>Large</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer">Developer</Tag>
                        <Tag id="2" textValue="Designer">Designer</Tag>
                    </TagList>
                </TagGroup>
            </Stack>
        );
    }
} satisfies Story;

export const Removable = {
    ...Default,
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        }
    }
} satisfies Story;

export const Everything = {
    render: props => {
        return (
            <Stack>
                <TagGroup {...props} size="md">
                    <Label>Medium</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer">
                            <Badge>12</Badge>
                            <SparklesIcon />
                            <Text>Developer</Text>
                        </Tag>
                        <Tag id="2" textValue="Designer">
                            <Text>Designer</Text>
                            <SparklesIcon />
                            <Badge variant="secondary">99+</Badge>
                        </Tag>
                        <Tag id="3" textValue="Designer" style={{ maxWidth: "9rem" }}>
                            <Text>Executive Officer</Text>
                            <SparklesIcon />
                            <Badge>100</Badge>
                        </Tag>
                    </TagList>
                </TagGroup>
                <TagGroup {...props} size="lg">
                    <Label>Large</Label>
                    <TagList>
                        <Tag id="1" textValue="Developer">
                            <Badge>12</Badge>
                            <SparklesIcon />
                            <Text>Developer</Text>
                        </Tag>
                        <Tag id="2" textValue="Designer">
                            <Text>Designer</Text>
                            <SparklesIcon />
                            <Badge variant="secondary">99+</Badge>
                        </Tag>
                        <Tag id="3" textValue="Designer" style={{ maxWidth: "10rem" }}>
                            <Text>Executive Officer</Text>
                            <SparklesIcon />
                            <Badge>100</Badge>
                        </Tag>
                    </TagList>
                </TagGroup>
            </Stack>
        );
    },
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        }
    }
} satisfies Story;

const StateTemplate = (args: Partial<TagGroupProps>) => (
    <Stack alignY="end">
        <TagGroup {...args} size="md" data-testid="tag-group">
            <Label>Medium</Label>
            <TagList>
                <Tag id="1" textValue="Developer">
                    <Badge>12</Badge>
                    <SparklesIcon />
                    <Text>Developer</Text>
                </Tag>
                <Tag id="2" textValue="Designer">
                    <Text>Designer</Text>
                    <SparklesIcon />
                    <Badge variant="secondary">99+</Badge>
                </Tag>
            </TagList>
        </TagGroup>
        <TagGroup {...args} size="lg" data-testid="tag-group">
            <Label>Large</Label>
            <TagList>
                <Tag id="1" textValue="Developer">
                    <Badge>12</Badge>
                    <SparklesIcon />
                    <Text>Developer</Text>
                </Tag>
                <Tag id="2" textValue="Designer">
                    <Text>Designer</Text>
                    <SparklesIcon />
                    <Badge variant="secondary">99+</Badge>
                </Tag>
            </TagList>
        </TagGroup>
    </Stack>
);

export const DefaultStates: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const tagGroups = canvas.getAllByTestId("tag-group");
        tagGroups.forEach(tagGroup => {
            const tags = tagGroup.querySelectorAll(".hop-Tag");
            tags.forEach(tag => {
                if (!tag.getAttribute("data-disabled")) { // don't try and force states on a disabled tags
                    if (tagGroup.getAttribute("data-chromatic-force-focus")) {
                        tag.setAttribute("data-focus-visible", "true");
                    }

                    if (tagGroup.getAttribute("data-chromatic-force-hover")) {
                        tag.setAttribute("data-hovered", "true");
                    }

                    if (tagGroup.getAttribute("data-chromatic-force-press")) {
                        tag.setAttribute("data-pressed", "true");
                    }
                }
            });

            tagGroup.removeAttribute("data-chromatic-force-focus");
            tagGroup.removeAttribute("data-chromatic-force-hover");
            tagGroup.removeAttribute("data-chromatic-force-press");
        });
    },
    render: args => {
        return (
            <Stack>
                <h1>Default</h1>
                <StateTemplate {...args} />
                <h1>Disabled</h1>
                <StateTemplate {...args} disabledKeys={new Set(["1", "2"])} />
                <h1>Pressed</h1>
                <StateTemplate {...args} data-chromatic-force-press />
                <h1>Focus Visible</h1>
                <StateTemplate {...args} data-chromatic-force-focus />
                <h1>Hovered</h1>
                <StateTemplate {...args} data-chromatic-force-hover />
                <h1>Focus Visible and Hovered</h1>
                <StateTemplate {...args} data-chromatic-force-focus data-chromatic-force-hover />
            </Stack>
        );
    },
    args: {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        },
        selectionMode: "multiple"
    }
};

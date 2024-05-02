import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "../src/Tag.tsx";
import { TagGroup } from "../src/TagGroup.tsx";
import { TagList } from "../src/TagList.tsx";

/**
 * The Tag component is a simple and effective UI element used for categorizing or marking items.
 * It is designed to be used within a TagList for groupings. 
 * While each Tag can visually indicate a removal option, the actual removal action is handled by the TagGroup, providing a centralized way to manage tags.
 * Unlike some other tag implementations, this Tag component does not support different colors.
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
    component: Tag
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * TODO: Add description
 */
export const Default = {
    render: props => (
        <TagGroup 
            onRemove={() => {
                console.log("Removed");
            }}
        >
            <TagList>
                <Tag {...props}>Default</Tag>
            </TagList>
        </TagGroup>
    )
} satisfies Story;

import { Tag, TagGroup, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs" disabledKeys={new Set(["1", "2", "3"])}>
            <TagList>
                <Tag id="1">Designer</Tag>
                <Tag id="2">Developer</Tag>
                <Tag id="3">Manager</Tag>
            </TagList>
        </TagGroup>
    );
}

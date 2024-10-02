import { Tag, TagGroup, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="designer" size="sm">Designer</Tag>
                <Tag id="developer" size="md">Developer</Tag>
                <Tag id="manager" size="lg">Manager</Tag>
            </TagList>
        </TagGroup>
    );
}

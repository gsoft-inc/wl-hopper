import { Tag, TagGroup, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs" selectionMode="multiple" defaultSelectedKeys={new Set(["designer", "developer"])}>
            <TagList>
                <Tag id="designer">Designer</Tag>
                <Tag id="developer">Developer</Tag>
                <Tag id="manager">Manager</Tag>
            </TagList>
        </TagGroup>
    );
}

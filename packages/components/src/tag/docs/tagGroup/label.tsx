import { Label, Tag, TagGroup, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup>
            <Label>Jobs</Label>
            <TagList>
                <Tag id="designer">Designer</Tag>
                <Tag id="developer">Developer</Tag>
                <Tag id="manager">Manager</Tag>
            </TagList>
        </TagGroup>
    );
}

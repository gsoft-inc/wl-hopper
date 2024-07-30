import { TagGroup, Tag, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs" disabledKeys={new Set(["1", "2", "3"])}>
            <TagList>
                <Tag id="1">Dentist</Tag>
                <Tag id="2">Developer</Tag>
                <Tag id="3">Doctor</Tag>
            </TagList>
        </TagGroup>
    );
}

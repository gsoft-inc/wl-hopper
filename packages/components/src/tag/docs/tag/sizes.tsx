import { TagGroup, Tag, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="dentist" size="sm">Dentist</Tag>
                <Tag id="developer" size="md">Developer</Tag>
                <Tag id="doctor" size="lg">Doctor</Tag>
            </TagList>
        </TagGroup>
    );
}

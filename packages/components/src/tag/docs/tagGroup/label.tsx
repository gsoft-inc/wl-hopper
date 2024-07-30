import { TagGroup, Tag, TagList, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup>
            <Label>Jobs</Label>
            <TagList>
                <Tag id="dentist">Dentist</Tag>
                <Tag id="developer">Developer</Tag>
                <Tag id="doctor">Doctor</Tag>
            </TagList>
        </TagGroup>
    );
}

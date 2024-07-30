import { TagGroup, Tag, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs" selectionMode="multiple" defaultSelectedKeys={new Set(["dentist", "developer"])}>
            <TagList>
                <Tag id="dentist">Dentist</Tag>
                <Tag id="developer">Developer</Tag>
                <Tag id="doctor">Doctor</Tag>
            </TagList>
        </TagGroup>
    );
}

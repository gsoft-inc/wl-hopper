import { TagGroup, Tag, TagList, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="dentist">Dentist</Tag>
                <Tag id="developer">Developer</Tag>
                <Tag id="doctor">Doctor</Tag>
            </TagList>
            <HelperMessage>The jobs in this list are in no particular order.</HelperMessage>
        </TagGroup>
    );
}

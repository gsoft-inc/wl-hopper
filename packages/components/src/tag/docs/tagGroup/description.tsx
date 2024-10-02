import { HelperMessage, Tag, TagGroup, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="designer">Designer</Tag>
                <Tag id="developer">Developer</Tag>
                <Tag id="manager">Manager</Tag>
            </TagList>
            <HelperMessage>The jobs in this list are in no particular order.</HelperMessage>
        </TagGroup>
    );
}

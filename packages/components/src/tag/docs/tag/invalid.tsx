import { Tag, TagGroup, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="designer" isInvalid>
                        Designer
                </Tag>
                <Tag id="developer">
                        Designer
                </Tag>
                <Tag id="manager">
                        Manager
                </Tag>
            </TagList>
        </TagGroup>
    );
}

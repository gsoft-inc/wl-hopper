import { TagGroup, Tag, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="designer" isDisabled>
                    Designer
                </Tag>
                <Tag id="developer">
                    Designer
                </Tag>
                <Tag id="dentist">
                    Dentist
                </Tag>
            </TagList>
        </TagGroup>
    );
}

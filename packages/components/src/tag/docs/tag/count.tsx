import { TagGroup, Tag, TagList, Text, Badge } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="designer" size="sm">
                    <Text>Designer</Text>
                    <Badge>12</Badge>
                </Tag>
                <Tag id="developer" size="md">
                    <Text>Designer</Text>
                    <Badge variant="secondary">100</Badge>
                </Tag>
                <Tag id="dentist" size="lg">
                    <Text>Dentist</Text>
                    <Badge>99+</Badge>
                </Tag>
            </TagList>
        </TagGroup>
    );
}

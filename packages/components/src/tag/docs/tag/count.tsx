import { Badge, Tag, TagGroup, TagList, Text } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Jobs">
            <TagList>
                <Tag id="designer" size="sm">
                    <Text>Designer</Text>
                    <Badge>12</Badge>
                </Tag>
                <Tag id="developer" size="md">
                    <Text>Developer</Text>
                    <Badge variant="subdued">100</Badge>
                </Tag>
                <Tag id="manager" size="lg">
                    <Text>Manager</Text>
                    <Badge>99+</Badge>
                </Tag>
            </TagList>
        </TagGroup>
    );
}

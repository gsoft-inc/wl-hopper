import { Stack, Tag, TagGroup, TagList, type Selection } from "@hopper-ui/components";

export default function Example() {
    const props = {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        },
        "aria-label": "Jobs",
        children: [
            (
                <TagList key="1">
                    <Tag id="designer">Designer</Tag>
                    <Tag id="developer">Developer</Tag>
                    <Tag id="manager">Manager</Tag>
                </TagList>
            )]
    };

    return (
        <Stack>
            <TagGroup {...props} size="sm" />
            <TagGroup {...props} size="md" />
            <TagGroup {...props} size="lg" />
        </Stack>
    );
}

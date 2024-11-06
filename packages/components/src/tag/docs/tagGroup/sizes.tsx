import { Stack, Tag, TagGroup, type Selection } from "@hopper-ui/components";

export default function Example() {
    const props = {
        onRemove: (ids: Selection) => {
            alert(`Remove: ${[...ids]}`);
        },
        "aria-label": "Jobs",
        children: [
            <Tag key="designer" id="designer">Designer</Tag>,
            <Tag key="developer" id="developer">Developer</Tag>,
            <Tag key="manager" id="manager">Manager</Tag>
        ]
    };

    return (
        <Stack>
            <TagGroup {...props} size="sm" />
            <TagGroup {...props} size="md" />
            <TagGroup {...props} size="lg" />
        </Stack>
    );
}
import { TagGroup, TagList } from "@hopper-ui/components";

export default function Example() {
    return (
        <TagGroup aria-label="Status">
            <TagList renderEmptyState={() => "No jobs posting available"}>
                {[]}
            </TagList>
        </TagGroup>
    );
}

import { SearchField, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "New York, NY",
        label: "Filter by location"
    };

    return (
        <Stack>
            <SearchField size="sm" {...props} />
            <SearchField {...props} />
        </Stack>
    );
}

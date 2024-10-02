import { Label, SearchField, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "New York, NY",
        children: <Label key="1">Filter by location</Label>
    };

    return (
        <Stack>
            <SearchField size="sm" {...props} />
            <SearchField {...props} />
        </Stack>
    );
}

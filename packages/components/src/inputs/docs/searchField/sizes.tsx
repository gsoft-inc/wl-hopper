import { SearchField, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "Enter a keyword",
        children: <Label key="1">Search:</Label>
    };

    return (
        <Stack>
            <SearchField size="sm" {...props} />
            <SearchField {...props} />
        </Stack>
    );
}

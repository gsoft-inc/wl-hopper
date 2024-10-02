import { Label, Stack, TextArea } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "123 Main St, City, State",
        children: <Label key="1">Address</Label>
    };

    return (
        <Stack>
            <TextArea size="sm" {...props} />
            <TextArea {...props} />
        </Stack>
    );
}

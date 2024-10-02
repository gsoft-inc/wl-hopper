import { Label, Stack, TextField } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "Full name (e.g., Jane Smith)",
        children: <Label key="1">Name</Label>
    };

    return (
        <Stack>
            <TextField size="sm" {...props} />
            <TextField {...props} />
        </Stack>
    );
}

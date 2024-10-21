import { Stack, TextField } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "Full name (e.g., Jane Smith)",
        label: "Name"
    };

    return (
        <Stack>
            <TextField size="sm" {...props} />
            <TextField {...props} />
        </Stack>
    );
}

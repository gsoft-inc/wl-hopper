import { TextField, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "Enter a name",
        children: <Label key="1">Name:</Label>
    };

    return (
        <Stack>
            <TextField size="sm" {...props} />
            <TextField {...props} />
        </Stack>
    );
}

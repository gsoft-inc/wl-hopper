import { ErrorMessage, Label, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="Full name (e.g., Jane Smith)" isInvalid>
            <Label>Name</Label>
            <ErrorMessage>This field is required</ErrorMessage>
        </TextField>
    );
}

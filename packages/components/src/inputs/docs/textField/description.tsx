import { HelperMessage, Label, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="Full name (e.g., Jane Smith)">
            <Label>Name</Label>
            <HelperMessage>Enter both first name and last name</HelperMessage>
        </TextField>
    );
}

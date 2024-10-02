import { Label, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="Full name (e.g., Jane Smith)" showCharacterCount maxLength={60}>
            <Label>Name</Label>
        </TextField>
    );
}

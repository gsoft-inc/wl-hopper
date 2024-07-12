import { TextField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="Enter a name" showCharacterCount maxLength={60}>
            <Label>Name:</Label>
        </TextField>
    );
}

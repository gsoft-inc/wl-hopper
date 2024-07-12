import { TextField, Label, ErrorMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="Enter a name" isInvalid>
            <Label>Name:</Label>
            <ErrorMessage>This field is required</ErrorMessage>
        </TextField>
    );
}

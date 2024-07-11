import { TextField, Label, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="Enter a name">
            <Label>Name:</Label>
            <HelperMessage>Enter both first name and last name</HelperMessage>
        </TextField>
    );
}

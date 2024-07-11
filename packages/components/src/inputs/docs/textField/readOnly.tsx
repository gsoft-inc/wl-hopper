import { TextField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="Enter a name" isReadOnly>
            <Label>Name:</Label>
        </TextField>
    );
}

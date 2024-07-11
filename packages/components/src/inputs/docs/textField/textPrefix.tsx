import { TextField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="Enter a price" prefix="$">
            <Label>Price:</Label>
        </TextField>
    );
}

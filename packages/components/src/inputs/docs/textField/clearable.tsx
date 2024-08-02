import { TextField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField value="John Doe" placeholder="Enter a name" isClearable>
            <Label>Name:</Label>
        </TextField>
    );
}

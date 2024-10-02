import { Label, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField value="John Doe" placeholder="Full name (e.g., Jane Smith)" isClearable>
            <Label>Name</Label>
        </TextField>
    );
}

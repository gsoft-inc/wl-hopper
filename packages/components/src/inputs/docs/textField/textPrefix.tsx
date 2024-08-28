import { TextField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField placeholder="(000) 000-0000" prefix="+1">
            <Label>Phone number:</Label>
        </TextField>
    );
}

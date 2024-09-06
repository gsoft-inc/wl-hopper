import { TextField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextField
            showCharacterCount
            maxLength={20} 
            restrictMaxLength={false}
            defaultValue="React simplifies the process of creating dynamic web applications."
        >
            <Label>Comment:</Label>
        </TextField>
    );
}

import { ErrorMessage, Label, TextArea } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="123 Main St, City, State" isInvalid>
            <Label>Address</Label>
            <ErrorMessage>This field is required</ErrorMessage>
        </TextArea>
    );
}

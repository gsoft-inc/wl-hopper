import { TextArea, Label, ErrorMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="Enter an address" isInvalid>
            <Label>Address:</Label>
            <ErrorMessage>This field is required</ErrorMessage>
        </TextArea>
    );
}

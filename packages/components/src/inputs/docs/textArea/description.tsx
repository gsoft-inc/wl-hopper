import { TextArea, Label, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="Enter an address">
            <Label>Address:</Label>
            <HelperMessage>Enter on multiple lines if needed</HelperMessage>
        </TextArea>
    );
}

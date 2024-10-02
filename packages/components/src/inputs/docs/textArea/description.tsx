import { HelperMessage, Label, TextArea } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="123 Main St, City, State">
            <Label>Address</Label>
            <HelperMessage>Enter on multiple lines if needed</HelperMessage>
        </TextArea>
    );
}

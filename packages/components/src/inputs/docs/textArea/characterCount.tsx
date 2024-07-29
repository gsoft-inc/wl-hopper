import { TextArea, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="Enter an address" showCharacterCount maxLength={60}>
            <Label>Address:</Label>
        </TextArea>
    );
}

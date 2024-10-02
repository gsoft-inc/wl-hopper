import { Label, TextArea } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="123 Main St, City, State" showCharacterCount maxLength={60}>
            <Label>Address</Label>
        </TextArea>
    );
}

import { Label, TextArea } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="123 Main St, City, State" isDisabled>
            <Label>Address</Label>
        </TextArea>
    );
}

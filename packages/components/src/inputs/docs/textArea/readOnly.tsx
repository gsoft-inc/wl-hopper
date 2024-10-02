import { Label, TextArea } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="123 Main St, City, State" value="280 Baker Street" isReadOnly>
            <Label>Address</Label>
        </TextArea>
    );
}

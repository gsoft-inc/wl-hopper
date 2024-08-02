import { TextArea, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="Enter an address" value="280 Baker Street" isReadOnly>
            <Label>Address:</Label>
        </TextArea>
    );
}

import { TextArea, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea placeholder="Enter an address" resizeMode="vertical">
            <Label>Address:</Label>
        </TextArea>
    );
}

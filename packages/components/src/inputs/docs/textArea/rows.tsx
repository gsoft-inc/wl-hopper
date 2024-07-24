import { TextArea, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea
            rows={8}
            defaultValue="React simplifies the process of creating dynamic web applications. "
        >
            <Label>Name:</Label>
        </TextArea>
    );
}

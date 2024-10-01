import { Label, TextArea } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea
            showCharacterCount
            maxLength={20}
            allowExceedingMaxLength
            defaultValue="React simplifies the process of creating dynamic web applications."
        >
            <Label>Comment:</Label>
        </TextArea>
    );
}

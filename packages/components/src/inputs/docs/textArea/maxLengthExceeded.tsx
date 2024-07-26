import { TextArea, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <TextArea 
            placeholder="Enter an address" 
            showCharacterCount
            maxLength={20} 
            restrictMaxLength={false}
            defaultValue="React simplifies the process of creating dynamic web applications."
        >
            <Label>Comment:</Label>
        </TextArea>
    );
}

import { ErrorMessage, NumberField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField value={42} isInvalid>
            <Label>Weight:</Label>
            <ErrorMessage>Please enter a value under 42.</ErrorMessage>
        </NumberField>
    );
}

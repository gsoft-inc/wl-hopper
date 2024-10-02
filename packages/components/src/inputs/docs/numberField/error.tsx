import { ErrorMessage, Label, NumberField } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField value={42} isInvalid>
            <Label>Training hours completed</Label>
            <ErrorMessage>You cannot enter more than 40 training hours for this period.</ErrorMessage>
        </NumberField>
    );
}

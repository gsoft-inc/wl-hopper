import { NumberField, Label, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField minValue={42} maxValue={50}>
            <Label>Weight:</Label>
            <HelperMessage>Please enter a value between 42 and 50.</HelperMessage>
        </NumberField>
    );
}

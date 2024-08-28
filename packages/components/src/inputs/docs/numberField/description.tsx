import { NumberField, Label, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField>
            <Label>Weight:</Label>
            <HelperMessage>Enter a weight in kg</HelperMessage>
        </NumberField>
    );
}

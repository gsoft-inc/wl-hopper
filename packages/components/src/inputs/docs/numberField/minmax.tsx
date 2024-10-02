import { HelperMessage, Label, NumberField } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField minValue={42} maxValue={50}>
            <Label>Training hours completed</Label>
            <HelperMessage>Please enter a value between 10 and 40.</HelperMessage>
        </NumberField>
    );
}

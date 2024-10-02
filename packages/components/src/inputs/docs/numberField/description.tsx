import { HelperMessage, Label, NumberField } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField>
            <Label>Training hours completed</Label>
            <HelperMessage>In person training hours only.</HelperMessage>
        </NumberField>
    );
}

import { NumberField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField value={42} isReadOnly>
            <Label>Weight:</Label>
        </NumberField>
    );
}

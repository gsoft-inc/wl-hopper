import { NumberField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField prefix="Kg">
            <Label>Weight:</Label>
        </NumberField>
    );
}

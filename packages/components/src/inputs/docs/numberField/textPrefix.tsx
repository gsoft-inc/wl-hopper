import { Label, NumberField } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField prefix="Kg">
            <Label>Training hours completed</Label>
        </NumberField>
    );
}

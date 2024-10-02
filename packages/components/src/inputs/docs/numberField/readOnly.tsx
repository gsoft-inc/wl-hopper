import { Label, NumberField } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField value={42} isReadOnly>
            <Label>Training hours completed</Label>
        </NumberField>
    );
}

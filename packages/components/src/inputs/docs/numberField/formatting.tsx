import { Label, NumberField } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField formatOptions={
            {
                style: "currency",
                currency: "USD"
            }
        }
        >
            <Label>Training Budget Allocated</Label>
        </NumberField>
    );
}

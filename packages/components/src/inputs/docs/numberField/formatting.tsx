import { NumberField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <NumberField formatOptions={
            {
                style: "currency",
                currency: "USD"
            }
        }
        >
            <Label>Price:</Label>
        </NumberField>
    );
}

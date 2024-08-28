import { NumberField, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "Enter a weight",
        children: <Label key="1">Weight:</Label>
    };

    return (
        <Stack>
            <NumberField size="sm" {...props} />
            <NumberField {...props} />
        </Stack>
    );
}

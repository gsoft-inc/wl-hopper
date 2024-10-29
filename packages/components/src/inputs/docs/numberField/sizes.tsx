import { NumberField, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        label: "Training hours completed"
    };

    return (
        <Stack>
            <NumberField size="sm" {...props} />
            <NumberField {...props} />
        </Stack>
    );
}

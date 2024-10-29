import { Stack, TextArea } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "123 Main St, City, State",
        label: "Address"
    };

    return (
        <Stack>
            <TextArea size="sm" {...props} />
            <TextArea {...props} />
        </Stack>
    );
}

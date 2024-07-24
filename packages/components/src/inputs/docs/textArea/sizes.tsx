import { TextArea, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "Enter an address",
        children: <Label key="1">Address:</Label>
    };

    return (
        <Stack>
            <TextArea size="sm" {...props} />
            <TextArea {...props} />
        </Stack>
    );
}

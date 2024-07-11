import { PasswordField, Label, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        placeholder: "Placeholder",
        children: <Label key="1">Password:</Label>
    };

    return (
        <Stack>
            <PasswordField size="sm" {...props} />
            <PasswordField {...props} />
        </Stack>
    );
}

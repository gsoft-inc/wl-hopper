import { Label, PasswordField, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        children: <Label key="1">Password</Label>
    };

    return (
        <Stack>
            <PasswordField size="sm" {...props} />
            <PasswordField {...props} />
        </Stack>
    );
}

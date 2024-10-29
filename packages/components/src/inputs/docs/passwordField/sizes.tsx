import { PasswordField, Stack } from "@hopper-ui/components";

export default function Example() {
    const props = {
        label: "Password"
    };

    return (
        <Stack>
            <PasswordField size="sm" {...props} />
            <PasswordField {...props} />
        </Stack>
    );
}

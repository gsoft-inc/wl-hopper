import { ErrorMessage, Label, PasswordField } from "@hopper-ui/components";

export default function Example() {
    return (
        <PasswordField isInvalid>
            <Label>Password</Label>
            <ErrorMessage>Password can't be empty.</ErrorMessage>
        </PasswordField>
    );
}

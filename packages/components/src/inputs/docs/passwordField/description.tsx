import { HelperMessage, Label, PasswordField } from "@hopper-ui/components";

export default function Example() {
    return (
        <PasswordField>
            <Label>Password</Label>
            <HelperMessage>Should contain more than 10 characters</HelperMessage>
        </PasswordField>
    );
}

import { PasswordField, Label, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <PasswordField placeholder="Placeholder">
            <Label>Password:</Label>
            <HelperMessage>Should contain more than 10 characters</HelperMessage>
        </PasswordField>
    );
}

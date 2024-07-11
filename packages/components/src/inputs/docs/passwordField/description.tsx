import { PasswordField, Label, HelperMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <PasswordField placeholder="Placeholder">
            <Label>Password:</Label>
            <HelperMessage>Helper message</HelperMessage>
        </PasswordField>
    );
}

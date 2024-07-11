import { PasswordField, Label, ErrorMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <PasswordField placeholder="Placeholder" isInvalid>
            <Label>Password:</Label>
            <ErrorMessage>Error message</ErrorMessage>
        </PasswordField>
    );
}

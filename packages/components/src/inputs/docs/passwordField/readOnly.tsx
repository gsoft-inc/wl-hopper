import { PasswordField, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <PasswordField placeholder="Placeholder" isReadOnly>
            <Label>Password:</Label>
        </PasswordField>
    );
}

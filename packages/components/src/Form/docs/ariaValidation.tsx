import { Form, TextField, Label, Div, ErrorMessage, Button } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="core_240">
            <Form validationBehavior="aria">
                <TextField
                    name="username"
                    defaultValue="admin"
                    isRequired
                    validate={value => value === "admin" ? "Nice try." : null}
                >
                    <Label>Username</Label>
                    <ErrorMessage />
                </TextField>
                <Button type="submit">Submit</Button>
            </Form>
        </Div>
    );
}

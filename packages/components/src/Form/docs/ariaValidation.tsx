import { Button, Div, Form, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="stack-lg">
            <Form validationBehavior="aria">
                <TextField
                    name="username"
                    defaultValue="admin"
                    isRequired
                    validate={value => value === "admin" ? "Nice try." : null}
                    label="Username"
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Div>
    );
}

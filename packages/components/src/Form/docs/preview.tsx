import { Form, Button, TextField, Label, Div } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="core_240">
            <Form>
                <TextField name="email" placeholder="Enter your email">
                    <Label>Email:</Label>
                </TextField>
                <Button type="submit">Sign In</Button>
            </Form>
        </Div>
    );
}

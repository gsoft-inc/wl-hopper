import { Button, Div, Form, Label, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="stack-lg" width="80%">
            <Form isFluid>
                <TextField name="email" placeholder="Enter your email">
                    <Label>Email</Label>
                </TextField>
                <Button type="submit">Sign In</Button>
            </Form>
        </Div>
    );
}

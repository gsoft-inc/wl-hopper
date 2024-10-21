import { Button, Div, Form, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="stack-lg" width="80%">
            <Form isFluid>
                <TextField name="email" placeholder="Enter your email" label="Email" />
                <Button type="submit">Sign In</Button>
            </Form>
        </Div>
    );
}

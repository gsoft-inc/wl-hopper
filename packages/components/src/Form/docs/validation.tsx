import { Div, Form, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="stack-lg">
            <Form validationErrors={{ username: "Sorry, this username is taken." }}>
                <TextField name="username" defaultValue="john_doe" label="Username" />
            </Form>
        </Div>
    );
}

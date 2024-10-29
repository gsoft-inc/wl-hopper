import { Button, ButtonGroup, Div, Form, TextField } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="stack-lg">
            <Form validationBehavior="native">
                <TextField
                    name="email"
                    type="email"
                    isRequired
                    label="Email"
                />
                <ButtonGroup>
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </ButtonGroup>
            </Form>
        </Div>
    );
}

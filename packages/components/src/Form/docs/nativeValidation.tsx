import { Form, TextField, Label, Div, ErrorMessage, Button, ButtonGroup } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="stack-lg">
            <Form validationBehavior="native">
                <TextField
                    name="email"
                    type="email"
                    isRequired
                >
                    <Label>Email</Label>
                    <ErrorMessage />
                </TextField>
                <ButtonGroup>
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </ButtonGroup>
            </Form>
        </Div>
    );
}

import { Form, TextField, Label, Div, ErrorMessage, Button, ButtonGroup } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div margin="core_240">
            <Form validationBehavior="native">
                <TextField
                    name="email"
                    type="email"
                    isRequired
                >
                    <Label>Email</Label>
                    <ErrorMessage>This field is required</ErrorMessage>
                </TextField>
                <ButtonGroup>
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </ButtonGroup>
            </Form>
        </Div>
    );
}

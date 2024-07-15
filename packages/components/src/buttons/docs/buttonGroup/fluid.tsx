import { Button, ButtonGroup, Div } from "@hopper-ui/components";

export default function Example() {
    return (
        <Div width="100%" paddingY="core_400">
            <ButtonGroup isFluid>
                <Button variant="secondary">No, thanks</Button>
                <Button variant="secondary">Remind me later</Button>
                <Button variant="primary">Rate Now</Button>
            </ButtonGroup>
        </Div>
    );
}
